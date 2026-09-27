import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import { createHash, randomUUID } from 'node:crypto';

export const digest = text => createHash('sha256').update(text).digest('hex');
export const readOptional = file => fs.existsSync(file) ? fs.readFileSync(file, 'utf8') : null;
const journalDir = root => path.join(root, 'research-data/.transactions');
const managed = file => /^research-data\/people\/[a-z0-9][a-z0-9-]*\.json$/.test(file)
  || ['src/data/generatedResearch.ts', 'src/data/generatedResearchVersion.ts', 'src/data/legacyData.ts', 'src/data/schoolIdentities.ts'].includes(file);

export function safePath(root, relative) {
  if (!managed(relative)) throw Error(`不允许的事务目标：${relative}`);
  const target = path.join(root, relative);
  let cursor = target;
  while (cursor !== root) {
    if (fs.existsSync(cursor) && fs.lstatSync(cursor).isSymbolicLink()) throw Error('拒绝通过符号链接写入或恢复');
    cursor = path.dirname(cursor);
  }
  return target;
}
export function atomicWrite(filename, text) {
  if (fs.existsSync(filename) && fs.lstatSync(filename).isSymbolicLink()) throw Error('拒绝覆盖符号链接');
  const temp = `${filename}.${randomUUID()}.tmp`;
  const fd = fs.openSync(temp, 'wx', 0o600);
  try { fs.writeFileSync(fd, text); fs.fsyncSync(fd); } finally { fs.closeSync(fd); }
  try { fs.renameSync(temp, filename); } finally { if (fs.existsSync(temp)) fs.unlinkSync(temp); }
  // 支持的本地文件系统上同步目录项；不把云盘同步当成事务提交。
  let dir;
  try { dir = fs.openSync(path.dirname(filename), 'r'); fs.fsyncSync(dir); }
  catch (error) { if (!['EINVAL', 'ENOTSUP', 'EPERM'].includes(error.code)) throw error; }
  finally { if (dir !== undefined) fs.closeSync(dir); }
}
function storeFiles(root) {
  const dir = path.join(root, 'research-data/people');
  if (!fs.existsSync(dir) || fs.lstatSync(dir).isSymbolicLink()) throw Error('研究目录缺失或为符号链接');
  return fs.readdirSync(dir).filter(f => f.endsWith('.json')).sort().map(f => `research-data/people/${f}`);
}
export function snapshot(root) {
  const files = [...storeFiles(root), 'src/data/generatedResearch.ts', 'src/data/generatedResearchVersion.ts', 'src/data/legacyData.ts', 'src/data/schoolIdentities.ts'];
  return Object.fromEntries(files.map(file => [file, readOptional(safePath(root, file))]));
}
export function transactions(root) {
  const dir = journalDir(root);
  if (!fs.existsSync(dir)) return [];
  if (fs.lstatSync(dir).isSymbolicLink()) throw Error('事务目录不得为符号链接');
  return fs.readdirSync(dir).filter(f => f.endsWith('.json')).sort().map(file => {
    const filename = path.join(dir, file);
    if (fs.lstatSync(filename).isSymbolicLink()) throw Error('事务日志不得为符号链接');
    const tx = JSON.parse(fs.readFileSync(filename, 'utf8'));
    if (file !== `${tx.id}.json` || tx.schemaVersion !== 1 || !['pending', 'committed', 'rolled_back'].includes(tx.status)
      || !tx.before || !tx.after || tx.checksum !== digest(JSON.stringify({ before: tx.before, after: tx.after }))) throw Error(`事务日志损坏：${file}`);
    for (const [key, value] of Object.entries({ ...tx.before, ...tx.after })) {
      safePath(root, key);
      if (value !== null && typeof value !== 'string') throw Error('事务快照内容无效');
    }
    if (Object.keys(tx.before).sort().join() !== Object.keys(tx.after).sort().join()) throw Error('事务前后文件集不一致');
    return tx;
  });
}
export function assertHealthy(root) {
  if (transactions(root).some(tx => tx.status === 'pending')) throw Error('存在未完成事务，先运行 research:recovery 并恢复，禁止导入、导出或启动旧页面');
}
export function withResearchLock(root, action) {
  const lock = path.join(root, 'research-data/.write-lock');
  const owner = { token: randomUUID(), pid: process.pid, host: os.hostname(), at: new Date().toISOString() };
  try { fs.mkdirSync(lock); } catch { throw Error('研究库写锁已存在，请查看 research:recovery；不要手工删除活动锁'); }
  try {
    fs.writeFileSync(path.join(lock, 'owner.json'), JSON.stringify(owner), { flag: 'wx', mode: 0o600 });
    return action();
  } finally {
    const filename = path.join(lock, 'owner.json');
    if (fs.existsSync(filename) && JSON.parse(fs.readFileSync(filename, 'utf8')).token === owner.token) {
      fs.unlinkSync(filename); fs.rmdirSync(lock);
    }
  }
}
export function reclaimDeadLock(root) {
  const lock = path.join(root, 'research-data/.write-lock');
  if (fs.lstatSync(lock).isSymbolicLink() || fs.lstatSync(path.join(lock, 'owner.json')).isSymbolicLink()) throw Error('锁文件不得为符号链接');
  const owner = JSON.parse(fs.readFileSync(path.join(lock, 'owner.json'), 'utf8'));
  if (owner.host !== os.hostname() || !Number.isInteger(owner.pid) || owner.pid <= 0) throw Error('无法确认本机锁持有者，不自动清锁');
  try { process.kill(owner.pid, 0); throw Error('锁持有进程仍在运行'); }
  catch (error) { if (error.code !== 'ESRCH') throw error; }
  // 显式命令仅回收已经确认死亡的本机锁，不触碰事务备份。
  fs.unlinkSync(path.join(lock, 'owner.json')); fs.rmdirSync(lock);
  return { reclaimed: true, owner };
}

/** 调用方持有写锁。先持久化完整前后快照，再逐文件替换；任何中断都保留pending日志。 */
export function commitFiles(root, writes, { kind = 'import', afterWrite } = {}) {
  assertHealthy(root);
  const before = snapshot(root);
  for (const key of Object.keys(writes)) { safePath(root, key); if (!(key in before)) before[key] = null; }
  const after = { ...before, ...writes };
  const id = `${Date.now()}-${randomUUID()}`;
  const tx = { schemaVersion: 1, id, kind, status: 'pending', at: new Date().toISOString(), before, after,
    checksum: digest(JSON.stringify({ before, after })) };
  fs.mkdirSync(journalDir(root), { recursive: true });
  const file = path.join(journalDir(root), `${id}.json`);
  atomicWrite(file, JSON.stringify(tx, null, 2) + '\n');
  const changed = Object.keys(writes).filter(key => before[key] !== after[key]);
  for (const [index, key] of changed.entries()) {
    // 同步盘或绕开工作台的改动不能被静默覆盖。
    if (readOptional(safePath(root, key)) !== before[key]) throw Error(`事务中发现外部修改：${key}`);
    atomicWrite(safePath(root, key), after[key]);
    afterWrite?.(index, key);
  }
  assertSnapshot(root, tx, 'after');
  atomicWrite(file, JSON.stringify({ ...tx, status: 'committed', completedAt: new Date().toISOString() }, null, 2) + '\n');
  return id;
}
function assertSnapshot(root, tx, side) {
  const existing = snapshot(root);
  if (Object.keys(existing).some(key => !(key in tx[side]))) throw Error('发现事务之外的新文件，拒绝覆盖');
  for (const [key, expected] of Object.entries(tx[side])) if (readOptional(safePath(root, key)) !== expected) throw Error(`文件与事务${side}快照不符：${key}`);
}
export function recoverTransaction(root, id, mode, write = false) {
  const run = () => {
    const pending = transactions(root).filter(tx => tx.status === 'pending');
    const tx = pending.find(item => item.id === id);
    if (!tx || pending.length !== 1) throw Error('须明确选择唯一未完成事务');
    if (!['resume', 'rollback'].includes(mode)) throw Error('恢复方式应为 resume 或 rollback');
    const existing = snapshot(root);
    if (Object.keys(existing).some(key => !(key in tx.before))) throw Error('发现事务之外的新文件，拒绝恢复覆盖');
    for (const key of Object.keys(tx.before)) {
      const current = readOptional(safePath(root, key));
      if (current !== tx.before[key] && current !== tx.after[key]) throw Error(`存在外部冲突，保留现场：${key}`);
    }
    const destination = mode === 'resume' ? tx.after : tx.before;
    const changes = Object.keys(destination).filter(key => readOptional(safePath(root, key)) !== destination[key]);
    if (write) {
      for (const key of changes) {
        const file = safePath(root, key);
        const current = readOptional(file);
        if (current !== tx.before[key] && current !== tx.after[key]) throw Error(`恢复期间外部冲突：${key}`);
        if (destination[key] === null) { if (fs.existsSync(file)) fs.unlinkSync(file); }
        else atomicWrite(file, destination[key]);
      }
      assertSnapshot(root, tx, mode === 'resume' ? 'after' : 'before');
      atomicWrite(path.join(journalDir(root), `${id}.json`), JSON.stringify({ ...tx,
        status: mode === 'resume' ? 'committed' : 'rolled_back', recoveredAt: new Date().toISOString() }, null, 2) + '\n');
    }
    return { id, mode, written: write, changes, backupRetained: true };
  };
  return write ? withResearchLock(root, run) : run();
}
export function backupResearch(root) {
  return withResearchLock(root, () => commitFiles(root, {}, { kind: 'backup' }));
}
/** 历史备份恢复到新目录供核对；不以旧快照覆盖现库，避免删除追加历史。 */
export function extractBackup(root, id) {
  const tx = transactions(root).find(item => item.id === id);
  if (!tx) throw Error('备份编号不存在');
  const parent = path.join(root, 'research-data/.recovery-copies');
  if (fs.existsSync(parent) && fs.lstatSync(parent).isSymbolicLink()) throw Error('恢复副本目录不得为符号链接');
  fs.mkdirSync(parent, { recursive: true });
  const destination = fs.mkdtempSync(path.join(parent, 'restore-'));
  for (const [file, content] of Object.entries(tx.before)) {
    if (content === null) continue;
    const target = safePath(destination, file);
    fs.mkdirSync(path.dirname(target), { recursive: true });
    atomicWrite(target, content);
  }
  return { id, destination, liveStoreChanged: false };
}
