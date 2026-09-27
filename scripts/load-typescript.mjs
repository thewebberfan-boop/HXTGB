import fs from 'node:fs';
import path from 'node:path';
import ts from 'typescript';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const cache = new Map();
const externalModules = new Map();
export function registerExternalModule(name, module) { externalModules.set(name, module); }
export function loadTypeScript(filename) {
  filename = path.resolve(filename);
  if (cache.has(filename)) return cache.get(filename);
  const output = ts.transpileModule(fs.readFileSync(filename, 'utf8'), { compilerOptions: {
    module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020, jsx: ts.JsxEmit.ReactJSX, esModuleInterop: true,
  } }).outputText;
  const module = { exports: {} };
  cache.set(filename, module.exports);
  const localRequire = name => {
    if (externalModules.has(name)) return externalModules.get(name);
    if (!name.startsWith('.')) return require(name);
    const base = path.resolve(path.dirname(filename), name);
    const target = ['.ts', '.tsx'].map(ext => base + ext).find(file => fs.existsSync(file));
    if (!target) throw Error(`Missing local module: ${name}`);
    return loadTypeScript(target);
  };
  new Function('require', 'module', 'exports', output)(localRequire, module, module.exports);
  cache.set(filename, module.exports);
  return module.exports;
}
