import assert from 'node:assert/strict';
import { test } from 'node:test';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { loadTypeScript } from './load-typescript.mjs';
import { importDossier, exportResearch } from './research-workbench.mjs';
import { withResearchLock, commitFiles, transactions, assertHealthy, recoverTransaction, reclaimDeadLock, backupResearch, snapshot, extractBackup } from './research-storage.mjs';
import { dataVersion, versionFile, checkRelease, runtimeVersion } from './research-version.mjs';
import { sealBuild } from './research-release.mjs';
const project = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const { previewPublicChanges } = loadTypeScript(path.join(project, 'src/lib/researchPreview.ts'));
const { versionMessage } = loadTypeScript(path.join(project, 'src/components/DataVersionStatus.tsx'));
const empty = () => ({ schemaVersion: 1, personId: 'guo-shuhua', facts: [], evidence: [], rules: [], publications: [] });
const put = (root, name, value) => { fs.mkdirSync(path.dirname(path.join(root, name)), { recursive: true }); fs.writeFileSync(path.join(root, name), value); };
function fixture(t) {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'hxtgb-safety-'));
  t.after(() => fs.rmSync(root, { recursive: true })); // only this test-owned mkdtemp directory
  fs.mkdirSync(path.join(root, 'research-data/people'), { recursive: true });
  fs.mkdirSync(path.join(root, 'src/data'), { recursive: true });
  exportResearch(root);
  return root;
}
function writesFor(root) {
  const writes = { 'research-data/people/guo-shuhua.json': JSON.stringify(empty()) + '\n', 'src/data/generatedResearch.ts': '// replacement for failure-injection test\n' };
  writes['src/data/generatedResearchVersion.ts'] = versionFile(dataVersion(root, writes));
  return writes;
}

test('preview reports removed records and relationships in both directions without mutating inputs', () => {
  const career = { id: 'r', unitId: 'u', unitName: '测试机构', position: '岗位', startYear: 2010, startMonth: 1, endYear: 2015, endMonth: 12 };
  const a = { id: 'a', name: '甲', gender: '未公开', currentUnitId: 'u', currentPosition: '岗位', careerHistory: [career], education: [] };
  const b = { ...a, id: 'b', name: '乙' };
  const after = { ...a, careerHistory: [], researchNotices: ['必要字段已撤下'] };
  const preview = previewPublicChanges([a, b], [after, b], [], []);
  assert.equal(preview.removedRecords[0].recordId, 'r'); assert.match(preview.warning, /整段/);
  assert.ok(preview.fieldChanges.some(x => x.path === 'career/r/position' && x.before === '岗位' && x.after === null));
  assert.equal(preview.relationChanges.filter(x => x.action === 'removed').length, 2);
  assert.equal(a.careerHistory.length, 1);
});

test('preview lists downstream inference invalidation across people', () => {
  const first = empty(); first.facts = [{ id: 'F1', revision: 1, target: { kind: 'basic', field: 'birthYear' }, value: 1970, status: 'candidate', citations: [], note: '候选' }];
  const second = { ...empty(), personId: 'wang-xiaoming-czce' };
  second.rules = [{ id: 'I1', revision: 1, enabled: true }];
  second.facts = [{ id: 'F2', revision: 1, target: { kind: 'basic', field: 'birthYear' }, value: 1970, status: 'derived', citations: [],
    review: { at: '2026-09-27', by: 'test', identity: 'test', countercheck: 'test' }, inference: { rule: { id: 'I1', revision: 1 }, inputs: [{ personId: first.personId, fact: { id: 'F1', revision: 1 } }], rationale: 'test' } }];
  const revised = structuredClone(first); revised.facts.push({ ...revised.facts[0], revision: 2, status: 'rejected', note: '否决' });
  const result = previewPublicChanges([], [], [first, second], [revised, second]);
  assert.equal(result.inferenceChanges[0].personId, second.personId);
  assert.match(result.inferenceChanges[0].after.reasons.join(), /版本/);
});

test('write requires exact preview token and invalidates tokens after draft or other inputs change', t => {
  const root = fixture(t), file = path.join(root, 'draft.json');
  fs.writeFileSync(file, JSON.stringify(empty()));
  const preview = importDossier(file, root);
  assert.throws(() => importDossier(file, root, true), /确认码/);
  fs.appendFileSync(file, '\n');
  assert.throws(() => importDossier(file, root, true, preview.previewToken), /确认码/);
  const fresh = importDossier(file, root);
  put(root, 'src/version-test.ts', 'export const changed = true;');
  assert.throws(() => importDossier(file, root, true, fresh.previewToken), /确认码/);
  assert.equal(fs.readdirSync(path.join(root, 'research-data/people')).length, 0);
  assert.equal(importDossier(file, root, true, importDossier(file, root).previewToken).written, true);
});

for (const boundary of [0, 1, 2]) test(`interruption after file ${boundary + 1} blocks normal work; resume restores one coherent version`, t => {
  const root = fixture(t), writes = writesFor(root);
  assert.throws(() => withResearchLock(root, () => commitFiles(root, writes, { afterWrite: index => { if (index === boundary) throw Error('simulated interruption'); } })), /simulated/);
  const tx = transactions(root).find(x => x.status === 'pending'); assert.ok(tx);
  assert.throws(() => assertHealthy(root), /未完成/); assert.throws(() => exportResearch(root), /未完成/);
  assert.throws(() => checkRelease(root), /未完成/);
  const beforePreview = snapshot(root);
  assert.equal(recoverTransaction(root, tx.id, 'resume').written, false); assert.deepEqual(snapshot(root), beforePreview);
  recoverTransaction(root, tx.id, 'resume', true);
  for (const [file, value] of Object.entries(writes)) assert.equal(fs.readFileSync(path.join(root, file), 'utf8'), value);
  assert.equal(transactions(root).find(x => x.id === tx.id).status, 'committed');
  assertHealthy(root);
});

test('rollback removes only newly-created transaction files and retains full recovery evidence', t => {
  const root = fixture(t), before = snapshot(root);
  assert.throws(() => withResearchLock(root, () => commitFiles(root, writesFor(root), { afterWrite: () => { throw Error('stop'); } })));
  const tx = transactions(root).find(x => x.status === 'pending');
  recoverTransaction(root, tx.id, 'rollback', true);
  assert.deepEqual(snapshot(root), before);
  assert.equal(transactions(root).find(x => x.id === tx.id).status, 'rolled_back');
  assert.throws(() => recoverTransaction(root, tx.id, 'resume', true));
});

test('sync conflict or an unexpected new file blocks recovery before any file is overwritten', t => {
  const root = fixture(t);
  assert.throws(() => withResearchLock(root, () => commitFiles(root, writesFor(root), { afterWrite: () => { throw Error('stop'); } })));
  const tx = transactions(root).find(x => x.status === 'pending');
  put(root, 'src/data/generatedResearch.ts', 'external sync conflict');
  const conflict = snapshot(root);
  assert.throws(() => recoverTransaction(root, tx.id, 'resume', true), /冲突/); assert.deepEqual(snapshot(root), conflict);
  put(root, 'src/data/generatedResearch.ts', tx.before['src/data/generatedResearch.ts']);
  put(root, 'research-data/people/another.json', '{}');
  assert.throws(() => recoverTransaction(root, tx.id, 'rollback', true), /新文件/);
});

test('corrupt snapshots and symlink targets cannot be restored', t => {
  const root = fixture(t);
  const id = backupResearch(root), file = path.join(root, `research-data/.transactions/${id}.json`);
  const tx = JSON.parse(fs.readFileSync(file, 'utf8')); tx.before['src/data/generatedResearch.ts'] = 'tampered';
  fs.writeFileSync(file, JSON.stringify(tx));
  assert.throws(() => transactions(root), /损坏/);
  const other = fixture(t);
  fs.symlinkSync(path.join(other, 'src/data/generatedResearch.ts'), path.join(other, 'research-data/people/test.json'));
  assert.throws(() => backupResearch(other), /符号链接/);
});

test('backup includes research and legacy data without changing them', t => {
  const root = fixture(t); put(root, 'src/data/legacyData.ts', '// legacy fixture');
  const before = snapshot(root), id = backupResearch(root), tx = transactions(root).find(x => x.id === id);
  assert.equal(tx.kind, 'backup'); assert.equal(tx.status, 'committed');
  assert.deepEqual(tx.before, before); assert.deepEqual(tx.before, tx.after); assert.deepEqual(snapshot(root), before);
  const recovered = extractBackup(root, id);
  assert.equal(recovered.liveStoreChanged, false);
  assert.equal(fs.readFileSync(path.join(recovered.destination, 'src/data/legacyData.ts'), 'utf8'), '// legacy fixture');
  assert.deepEqual(snapshot(root), before);
});

test('active locks cannot be stolen; only explicitly requested dead local locks are reclaimed', t => {
  const root = fixture(t);
  withResearchLock(root, () => {
    assert.throws(() => withResearchLock(root, () => {}), /写锁/);
    assert.throws(() => reclaimDeadLock(root), /运行/);
  });
  const lock = path.join(root, 'research-data/.write-lock'); fs.mkdirSync(lock);
  fs.writeFileSync(path.join(lock, 'owner.json'), JSON.stringify({ host: os.hostname(), pid: 2147483647 }));
  assert.equal(reclaimDeadLock(root).reclaimed, true);
  fs.mkdirSync(lock); fs.writeFileSync(path.join(lock, 'owner.json'), JSON.stringify({ host: 'different-host', pid: 2147483647 }));
  assert.throws(() => reclaimDeadLock(root), /本机/);
});

test('startup requires a matching successful build, and regeneration alone does not validate an old build', t => {
  const root = fixture(t), version = dataVersion(root);
  put(root, '.next/BUILD_ID', 'build-a');
  assert.throws(() => checkRelease(root), /构建/);
  sealBuild(root, version); assert.equal(checkRelease(root).version, version);
  put(root, 'src/changed.ts', 'export const changed = true');
  assert.throws(() => sealBuild(root, version), /变化/);
  exportResearch(root); assert.throws(() => checkRelease(root), /构建/);
  sealBuild(root, dataVersion(root)); checkRelease(root);
  put(root, '.next/BUILD_ID', 'different-build'); assert.throws(() => checkRelease(root), /构建/);
});

test('runtime and page status distinguish fresh, stale and unavailable without exposing research content', t => {
  const root = fixture(t), version = dataVersion(root);
  const fresh = runtimeVersion(root, version);
  assert.equal(fresh.state, 'ok'); assert.match(versionMessage(version, fresh), /一致/);
  assert.match(versionMessage('old-browser-version', fresh), /过期/);
  put(root, 'research-data/people/guo-shuhua.json', JSON.stringify({ ...empty(), internal: 'PRIVATE_CANDIDATE_TEST' }));
  const stale = runtimeVersion(root, version); assert.equal(stale.state, 'stale');
  assert.match(versionMessage(version, stale), /过期/);
  assert.doesNotMatch(JSON.stringify(stale), /PRIVATE_CANDIDATE_TEST|guo-shuhua|research-data/);
  assert.match(versionMessage(version, { state: 'unavailable' }), /无法确认/);
});
