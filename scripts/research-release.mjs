import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';
import { exportResearch } from './research-workbench.mjs';
import { withResearchLock, atomicWrite } from './research-storage.mjs';
import { checkVersionFile, checkRelease } from './research-version.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
export function sealBuild(root, expectedVersion) {
  if (checkVersionFile(root) !== expectedVersion) throw Error('构建期间数据或代码变化，拒绝标记完成');
  const buildId = fs.readFileSync(path.join(root, '.next/BUILD_ID'), 'utf8').trim();
  if (!buildId) throw Error('缺少构建ID');
  const seal = { status: 'ready', version: expectedVersion, buildId };
  atomicWrite(path.join(root, '.next/research-release.json'), JSON.stringify(seal) + '\n');
  return seal;
}
if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  try {
    if (process.argv[2] === 'check') { exportResearch(root, true); console.log('启动版本检查：通过', checkRelease(root).version.slice(0, 12)); }
    else if (process.argv[2] === 'build') {
      exportResearch(root);
      withResearchLock(root, () => {
        const version = checkVersionFile(root);
        fs.mkdirSync(path.join(root, '.next'), { recursive: true });
        atomicWrite(path.join(root, '.next/research-release.json'), JSON.stringify({ status: 'building' }));
        const result = spawnSync(process.execPath, [path.join(root, 'node_modules/next/dist/bin/next'), 'build'], { cwd: root, stdio: 'inherit' });
        if (result.error || result.status !== 0) throw Error(`构建未成功，不能启动此版本：${result.error?.message || result.status}`);
        console.log('构建版本封存：', sealBuild(root, version).version.slice(0, 12));
      });
    } else throw Error('用法：research-release.mjs build|check');
  } catch (error) { console.error(error.message); process.exitCode = 1; }
}
