import assert from 'node:assert/strict';
import { test } from 'node:test';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { loadTypeScript } from './load-typescript.mjs';
import { importDossier, loadResearchStore, exportResearch, projectionText, researchReport } from './research-workbench.mjs';
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const { evaluateFact, compileResearchPatches, validateResearchStore, assertAppendOnly } = loadTypeScript(path.join(root, 'src/lib/researchLedger.ts'));
const { applyResearchPatches } = loadTypeScript(path.join(root, 'src/lib/researchProjection.ts'));
const { careerRelations, educationRelations } = loadTypeScript(path.join(root, 'src/lib/relationGroups.ts'));
const { OFFICIALS_DATA: baseline } = loadTypeScript(path.join(root, 'src/data/legacyData.ts'));
const { OFFICIALS_DATA: actual, isOfficialPastInUnit, isOfficialUnresolvedInUnit } = loadTypeScript(path.join(root, 'src/data/csrcData.ts'));
const clone = x => structuredClone(x);
const citation = { id: 'S001', revision: 1, locator: '人物简历段', statement: '仅用于自动化测试的字段支持说明' };
const review = { at: '2026-09-27', by: 'test-reviewer', identity: '测试身份对应', countercheck: '测试反例检查' };
function dossier(personId = 'guo-shuhua') {
  return { schemaVersion: 1, personId, evidence: [{ id: 'S001', revision: 1, reading: 'read', originGroup: 'original-1', note: '测试',
    source: { id: 'test-source', title: '测试证据', publisher: '测试机构', url: 'https://example.org/test', sourceType: 'other', accessedDate: '2026-09-27', supports: [] } }],
    rules: [{ id: 'I001', revision: 1, enabled: true, description: '测试推导规则', assumptions: ['测试前提'], invalidWhen: ['输入改变'], allowedWording: '仅为测试推导，不代表真实人物事实' }],
    facts: [{ id: 'F001', revision: 1, target: { kind: 'basic', field: 'birthYear' }, value: 1970, status: 'supported_direct', citations: [clone(citation)], review: clone(review), note: '测试事实' }],
    publications: [{ id: 'P001', factId: 'F001', action: 'publish', at: '2026-09-27', reason: '测试公开' }] };
}
const inferred = (id, input = 'F001', field = 'nativePlace') => ({ id, revision: 1, target: { kind: 'basic', field }, value: field === 'birthMonth' ? 5 : '测试推导值', status: 'derived', citations: [], review, note: '测试推导',
  inference: { rule: { id: 'I001', revision: 1 }, inputs: [{ personId: 'guo-shuhua', fact: { id: input, revision: 1 } }], rationale: '有明确边界的测试推导' } });
const state = (store, id = 'F001', person = 'guo-shuhua', revision = 1) => evaluateFact(store, person, { id, revision });
const person = { id: 'guo-shuhua', name: '测试人', gender: '未公开', birthYear: 1960, currentUnitId: 'u', currentPosition: '岗位', sources: [], careerHistory: [], education: [] };

test('candidates and conflicts remain separate from public data; no automatic publication', () => {
  const d = dossier(); d.publications = []; d.facts[0].status = 'candidate'; d.facts[0].value = 1961;
  assert.deepEqual(compileResearchPatches([d]), []);
  assert.doesNotMatch(projectionText([d]), /1961|测试事实|test-reviewer/);
  assert.equal(state([d]).state, 'candidate');
});
test('direct facts require read evidence, precise bindings and actual review metadata', () => {
  assert.equal(state([dossier()]).state, 'eligible');
  for (const change of [d => d.evidence[0].reading = 'unread', d => d.facts[0].review.at = '2026-02-30', d => d.facts[0].review.identity = '', d => d.facts[0].citations[0].locator = '', d => d.evidence[0].source.url = 'javascript:alert(1)']) {
    const d = clone(dossier()); change(d); assert.equal(state([d]).state, 'stale');
  }
});
test('conflict retains alternatives and history; correction uses the next revision', () => {
  const d = dossier();
  d.facts.push({ ...clone(d.facts[0]), revision: 2, status: 'conflicted', value: undefined, alternatives: [
    { value: 1970, citations: [citation], note: '说法一' }, { value: 1971, citations: [citation], note: '说法二' }], note: '出生年份争议' });
  assert.deepEqual(validateResearchStore([d]), []);
  const patches = compileResearchPatches([d]);
  assert.equal(patches[0].value, undefined); assert.equal(patches[0].evidence.status, 'conflicted');
  assert.doesNotMatch(JSON.stringify(patches), /说法一|1971|出生年份争议/);
  const projected = applyResearchPatches([person], patches)[0];
  assert.equal(projected.birthYear, undefined); assert.equal(person.birthYear, 1960);
  d.facts.push({ ...clone(d.facts[0]), revision: 3, value: 1971, note: '经复核订正，保留冲突版本' });
  assert.equal(applyResearchPatches([person], compileResearchPatches([d]))[0].birthYear, 1971);
  assert.equal(d.facts.length, 3);
});
test('evidence withdrawal invalidates a published fact without restoring legacy value', () => {
  const d = dossier(); d.evidence.push({ ...clone(d.evidence[0]), revision: 2, reading: 'withdrawn' });
  assert.equal(state([d]).state, 'stale');
  const p = applyResearchPatches([person], compileResearchPatches([d]))[0];
  assert.equal(p.birthYear, undefined); assert.equal(p.basicFieldEvidence.birthYear.status, 'needs_review');
});
test('input changes invalidate all transitive inferences, even if the input value is unchanged', () => {
  const d = dossier(); d.facts.push(inferred('F002'), inferred('F003', 'F002', 'birthMonth'));
  assert.equal(state([d], 'F003').state, 'eligible');
  d.facts.push({ ...clone(d.facts[0]), revision: 2 });
  assert.equal(state([d], 'F002').state, 'stale'); assert.equal(state([d], 'F003').state, 'stale');
  d.facts.push({ ...clone(d.facts[1]), revision: 2, inference: { ...d.facts[1].inference, inputs: [{ personId: d.personId, fact: { id: 'F001', revision: 2 } }] } });
  assert.equal(state([d], 'F002', d.personId, 2).state, 'eligible');
  assert.equal(state([d], 'F003').state, 'stale');
});
test('cross-person dependencies, rule updates and cyclic graphs fail closed', () => {
  const a = dossier(), b = dossier('wang-xiaoming-czce');
  b.facts.push(inferred('F002'));
  assert.equal(state([a, b], 'F002', b.personId).state, 'eligible');
  a.facts.push({ ...clone(a.facts[0]), revision: 2, status: 'rejected' });
  assert.equal(state([a, b], 'F002', b.personId).state, 'stale');
  const d = dossier(); d.facts.push(inferred('F002'));
  d.rules.push({ ...clone(d.rules[0]), revision: 2 }); assert.equal(state([d], 'F002').state, 'stale');
  const cyclic = dossier(); cyclic.facts = [inferred('F001', 'F002', 'birthMonth'), inferred('F002', 'F001')];
  assert.equal(state([cyclic]).state, 'stale');
});
test('manual withdrawal masks the field and retains publication history', () => {
  const d = dossier(); d.publications.push({ ...d.publications[0], id: 'P002', action: 'withdraw' });
  assert.equal(applyResearchPatches([person], compileResearchPatches([d]))[0].birthYear, undefined);
  assert.equal(d.publications.length, 2);
});
test('append-only import rejects overwrites, deletions, target changes and version gaps', () => {
  const d = dossier(), changed = clone(d); changed.facts[0].value = 1990;
  assert.throws(() => assertAppendOnly(d, changed));
  assert.throws(() => assertAppendOnly(d, { ...d, evidence: [] }));
  const gap = clone(d); gap.facts.push({ ...clone(d.facts[0]), revision: 3 });
  assert.match(validateResearchStore([gap]).join(), /版本/);
  const retarget = clone(d); retarget.facts.push({ ...clone(d.facts[0]), revision: 2, target: { kind: 'basic', field: 'birthMonth' }, value: 5 });
  assert.match(validateResearchStore([retarget]).join(), /目标/);
});
test('observations never certify tenure boundaries; invalid targets and dangling references rejected', () => {
  const d = dossier(); d.facts[0].target = { kind: 'career', recordId: 'r', field: 'startYear' }; d.facts[0].status = 'supported_observation';
  assert.equal(state([d]).state, 'stale');
  d.facts[0].target.field = '__proto__'; assert.ok(validateResearchStore([d]).length);
  d.facts[0].target.field = 'startYear'; d.facts[0].citations[0].id = 'missing'; assert.ok(validateResearchStore([d]).length);
});
test('stale career dates suppress relationships and remove dependent months', () => {
  const career = { id: 'r', unitId: 'u', unitName: '测试机构', position: '岗位', startYear: 2010, startMonth: 5, endYear: 2015 };
  const d = dossier(); d.facts[0].target = { kind: 'career', recordId: 'r', field: 'startYear' }; d.facts[0].status = 'rejected';
  const p = applyResearchPatches([{ ...person, careerHistory: [career] }], compileResearchPatches([d]))[0];
  assert.equal(p.careerHistory[0].startYear, undefined); assert.equal(p.careerHistory[0].startMonth, undefined);
  assert.deepEqual(careerRelations(p, p.careerHistory[0], [{ ...person, id: 'other', careerHistory: [career] }]), []);
});
test('stale necessary career fields remove the record, old summary and current status', () => {
  const d = dossier(); d.facts[0].target = { kind: 'career', recordId: 'r', field: 'position' }; d.facts[0].value = '待撤下职位'; d.facts[0].status = 'rejected';
  const p = applyResearchPatches([{ ...person, bioSummary: '旧摘要', careerHistory: [{ id: 'r', unitId: 'u', unitName: '测试', position: '旧职位', startYear: 2010, endYear: null }] }], compileResearchPatches([d]))[0];
  assert.equal(p.careerHistory.length, 0); assert.equal(p.servingStatus, 'unknown'); assert.equal(p.bioSummary, undefined);
  assert.equal(p.researchNotices.length, 1);
  assert.equal(isOfficialPastInUnit(p, 'u'), false);
  assert.equal(isOfficialUnresolvedInUnit(p, 'u'), true);
});
test('partial education remains visible while revoked school cannot generate alumni', () => {
  const d = dossier(); d.facts[0].target = { kind: 'education', recordId: 'e', field: 'school' }; d.facts[0].value = '测试学校'; d.facts[0].status = 'rejected';
  const p = applyResearchPatches([{ ...person, education: [{ id: 'e', school: '旧学校', degree: '博士' }] }], compileResearchPatches([d]))[0];
  assert.equal(p.education[0].degree, '博士'); assert.equal(p.education[0].school, undefined);
  assert.deepEqual(educationRelations(p, p.education[0], []), []);
});
test('real research store projects only published verified facts while keeping untouched biographies and candidates isolated', () => {
  const store = loadResearchStore();
  assert.deepEqual(validateResearchStore(store), []);
  const patches = compileResearchPatches(store);
  assert.deepEqual(actual, applyResearchPatches(baseline, patches));
  const patchedIds = new Set(patches.map(p => p.personId));
  assert.ok(patchedIds.size > 0);
  for (const basePerson of baseline) {
    if (!patchedIds.has(basePerson.id)) {
      assert.deepEqual(actual.find(p => p.id === basePerson.id), basePerson);
    }
  }
  const report = researchReport(store);
  assert.ok(report.some(r => r.facts.some(f => f.status === 'candidate' && f.publication === 'not_published')));
  assert.ok(report.some(r => r.facts.some(f => f.status === 'conflicted' && f.publication === 'not_published')));
  assert.doesNotMatch(projectionText(store), /国家计划委员会综合司|黑龙江齐齐哈尔/);
});
test('workbench dry-run, persistence, stale projection check and failed import are safe', () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'hxtgb-research-test-'));
  try {
    fs.mkdirSync(path.join(dir, 'research-data/people'), { recursive: true });
    fs.mkdirSync(path.join(dir, 'src/data'), { recursive: true });
    const file = path.join(dir, 'draft.json'), d = dossier();
    fs.writeFileSync(file, JSON.stringify(d));
    assert.equal(importDossier(file, dir).written, false); assert.equal(loadResearchStore(dir).length, 0);
    assert.equal(importDossier(file, dir, true, importDossier(file, dir).previewToken).written, true); exportResearch(dir, true);
    const stored = fs.readFileSync(path.join(dir, 'research-data/people/guo-shuhua.json'), 'utf8');
    const bad = clone(d); bad.facts[0].value = 1999; fs.writeFileSync(file, JSON.stringify(bad));
    assert.throws(() => importDossier(file, dir, true));
    assert.equal(fs.readFileSync(path.join(dir, 'research-data/people/guo-shuhua.json'), 'utf8'), stored);
    d.evidence.push({ ...clone(d.evidence[0]), revision: 2, reading: 'withdrawn' });
    fs.writeFileSync(file, JSON.stringify(d)); importDossier(file, dir, true, importDossier(file, dir).previewToken); exportResearch(dir, true);
    assert.doesNotMatch(fs.readFileSync(path.join(dir, 'src/data/generatedResearch.ts'), 'utf8'), /"value": 1970/);
    const output = path.join(dir, 'src/data/generatedResearch.ts');
    const validOutput = fs.readFileSync(output, 'utf8');
    fs.writeFileSync(output, validOutput + '\n');
    assert.throws(() => exportResearch(dir, true), /过期/); exportResearch(dir); exportResearch(dir, true);
    const savedDossier = path.join(dir, 'research-data/people/guo-shuhua.json');
    fs.renameSync(savedDossier, path.join(dir, 'saved.json'));
    assert.throws(() => exportResearch(dir), /接管字段/);
    fs.renameSync(path.join(dir, 'saved.json'), savedDossier);
    const invalid = dossier(); invalid.facts[0].status = 'candidate'; fs.writeFileSync(file, JSON.stringify(invalid));
    assert.throws(() => importDossier(file, dir, true));
  } finally { fs.rmSync(dir, { recursive: true }); } // only the exact mkdtemp test directory
});

test('public source projection selects allowed metadata and never includes internal evidence notes', () => {
  const d = dossier(); d.evidence[0].source.internalOnly = 'INTERNAL_SECRET_TEST'; d.evidence[0].source.note = 'PRIVATE_RESEARCH_NOTE';
  assert.doesNotMatch(JSON.stringify(compileResearchPatches([d])), /INTERNAL_SECRET_TEST|PRIVATE_RESEARCH_NOTE/);
  d.facts[0].target = { kind: 'career', recordId: 'r', field: 'observedAt' };
  d.facts[0].value = { year: 2003, privateDetail: 'bad' };
  assert.ok(validateResearchStore([d]).length);
});

test('observed job titles cannot be projected as continuous tenure', () => {
  const d = dossier(); d.facts[0].target = { kind: 'career', recordId: 'r', field: 'position' };
  d.facts[0].value = '活动时的职位'; d.facts[0].status = 'supported_observation';
  const p = applyResearchPatches([{ ...person, careerHistory: [{ id: 'r', unitId: 'u', unitName: '测试机构', position: '旧岗位', startYear: 2010, endYear: 2015 }] }], compileResearchPatches([d]))[0];
  assert.equal(p.careerHistory.length, 0); assert.equal(p.researchNotices.length, 1);
});

test('revoking a non-computation field does not erase valid temporal relationships', () => {
  const d = dossier(); d.facts[0].target = { kind: 'career', recordId: 'r', field: 'rank' }; d.facts[0].value = '正厅局级'; d.facts[0].status = 'rejected';
  const career = { id: 'r', unitId: 'u', unitName: '测试机构', position: '岗位', rank: '正厅局级', startYear: 2010, startMonth: 1, endYear: 2015, endMonth: 12 };
  const p = applyResearchPatches([{ ...person, careerHistory: [career] }], compileResearchPatches([d]))[0];
  assert.equal(p.careerHistory[0].rank, undefined);
  assert.equal(careerRelations(p, p.careerHistory[0], [{ ...person, id: 'other', careerHistory: [career] }]).length, 1);
});
