import fs from 'node:fs';
import ts from 'typescript';
import assert from 'node:assert/strict';
import { test } from 'node:test';
import path from 'node:path';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

const require = createRequire(import.meta.url);
const cache = new Map();
function load(relative) {
  const filename = path.resolve(path.dirname(fileURLToPath(import.meta.url)), relative);
  if (cache.has(filename)) return cache.get(filename);
  const output = ts.transpileModule(fs.readFileSync(filename, 'utf8'), { compilerOptions: {
    module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020, jsx: ts.JsxEmit.ReactJSX, esModuleInterop: true,
  } }).outputText;
  const module = { exports: {} };
  const localRequire = name => {
    if (!name.startsWith('.')) return require(name);
    const base = path.resolve(path.dirname(filename), name);
    const target = ['.ts', '.tsx'].map(ext => base + ext).find(file => fs.existsSync(file));
    if (!target) throw Error(`Missing local module: ${name}`);
    return load(target);
  };
  new Function('require', 'module', 'exports', output)(localRequire, module, module.exports);
  cache.set(filename, module.exports);
  return module.exports;
}
const { findAlumniForEdu, findColleaguesForCareer, getColleagueTotalIntersections, calculatePreciseOverlap, checkSpaceMatch } = load('../src/lib/biographyRelations.ts');
const career = (overrides = {}) => ({ id: 'r', unitId: 'u', unitName: '测试交易所', position: '主任', startYear: 2010, startMonth: 1, endYear: 2012, endMonth: 12, ...overrides });
const edu = (overrides = {}) => ({ school: '测试大学', degree: '学士', startYear: 2000, endYear: 2004, ...overrides });
const person = (id, careers = [], education = []) => ({ id, careerHistory: careers, education });
const pair = (a, b) => findColleaguesForCareer(person('a', [a]), a, [person('a', [a]), person('b', [b])]);

test('same institution and overlapping months produce a dynamic match', () => {
  const matches = pair(career(), career({ startYear: 2011 }));
  assert.equal(matches.length, 1);
  assert.match(matches[0].overlapDisplay, /2011.01—2012.12/);
});
test('editing the underlying biography changes results; self is excluded', () => {
  const a = person('a', [career()]), b = person('b', [career()]);
  assert.equal(findColleaguesForCareer(a, a.careerHistory[0], [a, b]).length, 1);
  b.careerHistory[0].startYear = 2013;
  b.careerHistory[0].endYear = 2014;
  assert.equal(findColleaguesForCareer(a, a.careerHistory[0], [a, b]).length, 0);
});
test('different institution with shared legacy ID does not match', () => {
  assert.equal(pair(career(), career({ unitName: '另一交易所' })).length, 0);
});
test('external institutions can match without a site unit ID', () => {
  assert.equal(pair(career({ unitId: '' }), career({ unitId: '' })).length, 1);
});
test('aliases match; separate authorities and parent/branch do not', () => {
  assert.equal(checkSpaceMatch(career({ unitName: '中金所' }), career({ unitName: '中国金融期货交易所' })).isMatch, true);
  for (const [a, b] of [['中国人民银行', '国家外汇管理局'], ['上海市人民政府', '上海市虹口区人民政府'], ['中国银行', '中国银行上海分行'], ['甲研究所', '乙研究所']]) {
    assert.equal(checkSpaceMatch(career({ unitName: a }), career({ unitName: b })).isMatch, false);
  }
});
test('same institution across departments matches without claiming same department', () => {
  assert.match(pair(career({ department: '甲部' }), career({ department: '乙部' }))[0].reason, /同机构/);
  assert.match(pair(career({ department: '甲部' }), career({ department: '甲部' }))[0].reason, /同部门/);
});
test('unknown starts, inverted intervals, explicitly historical null and derived intervals are excluded', () => {
  for (const change of [{ startYear: undefined }, { startYear: 2015 }, { endYear: null, isCurrent: false }, { isDerived: true }, { startMonth: 13 }]) {
    assert.equal(pair(career(change), career()).length, 0);
  }
});
test('year-only overlap is labeled possible, not a precise duration', () => {
  const result = pair(career({ startMonth: undefined }), career())[0];
  assert.match(result.overlapDisplay, /可能同期/);
  assert.doesNotMatch(result.overlapDisplay, /36个月/);
});
test('ongoing tenure uses the provided current date; disjoint months do not match', () => {
  const ongoing = calculatePreciseOverlap(2020, 1, null, null, 2021, 1, null, null, 2022, 6);
  assert.equal(ongoing.overlapMonths, 18);
  assert.equal(calculatePreciseOverlap(2010, 1, 2010, 3, 2010, 4, 2010, 5).hasOverlap, false);
});
test('duplicate/parallel jobs do not double-count cumulative overlap', () => {
  const totals = getColleagueTotalIntersections(person('a', [career(), career({ id: 'parallel' })]), person('b', [career()]));
  assert.equal(totals.totalMonths, 36);
  assert.equal(totals.totalCount, 1);
});
test('same-month succession is marked as unresolved, not confirmed coexistence', () => {
  const result = calculatePreciseOverlap(2019, 1, 2024, 2, 2024, 2, null, null, 2026, 9);
  assert.match(result.overlapDisplay, /同月边界（是否同期待核）/);
});
test('noncontiguous intersections remain separate and zero does not claim one month', () => {
  const totals = getColleagueTotalIntersections(person('a', [career(), career({ startYear: 2015, endYear: 2016 })]), person('b', [career({ endYear: 2016 })]));
  assert.equal(totals.totalCount, 2);
  assert.equal(totals.totalMonths, 60);
  assert.equal(getColleagueTotalIntersections(person('a'), person('b')).totalMonths, 0);
});
const alumni = (a, b) => findAlumniForEdu(person('a', [], [a]), a, [person('a', [], [a]), person('b', [], [b])]);
test('same school overlapping education matches, self excluded, changes recomputed', () => {
  const a = edu(), b = edu({ startYear: 2002, endYear: 2006 });
  assert.equal(alumni(a, b).length, 1);
  assert.match(alumni(a, b)[0].overlapDisplay, /2002—2004/);
  b.school = '另一大学';
  assert.equal(alumni(a, b).length, 0);
});
test('same school without overlap does not match; shared boundary is only possible', () => {
  assert.equal(alumni(edu(), edu({ startYear: 2005, endYear: 2009 })).length, 0);
  assert.match(alumni(edu(), edu({ startYear: 2004, endYear: 2008 }))[0].overlapDisplay, /可能同期/);
});
test('missing or guessed education spans do not manufacture alumni', () => {
  for (const change of [{ startYear: undefined }, { isDerivedSpan: true }, { startYear: 2007 }, { school: '未公开' }]) {
    assert.equal(alumni(edu(change), edu()).length, 0);
  }
  assert.equal(alumni(edu({ endYear: undefined, graduationYear: 2004 }), edu()).length, 1);
});
test('school substring/predecessor matches are not treated as same school', () => {
  for (const [a, b] of [['北京大学', '北京大学附属学院'], ['陕西财经学院', '西安交通大学'], ['上海社会科学院', '中国社会科学院'], ['测试大学（独立学院）', '测试大学']]) {
    assert.equal(alumni(edu({ school: a }), edu({ school: b })).length, 0);
  }
});
test('several matching records produce one card per person', () => {
  const a = person('a', [career()], [edu()]), b = person('b', [career(), career()], [edu(), edu()]);
  assert.equal(findColleaguesForCareer(a, a.careerHistory[0], [a, b]).length, 1);
  assert.equal(findAlumniForEdu(a, a.education[0], [a, b]).length, 1);
});

const { careerRelations, educationRelations } = load('../src/lib/relationGroups.ts');
const { resolveInstitution } = load('../src/lib/institutionIdentity.ts');
const { BiographyRelationPanel, relationSources } = load('../src/components/BiographyRelationPanel.tsx');
const { InstitutionHistoryCard } = load('../src/components/InstitutionHistoryCard.tsx');
const evidence = { id: 'source1', title: '测试来源', publisher: '测试机构', url: 'https://example.org/evidence', accessedDate: '2026-09-07', sourceType: 'official_notice', supports: [] };
const registry = [{ id: 'same-entity', name: '测试交易所', history: [{ id: 'old-name', name: '旧名称交易所', startYear: 1990, endYear: 2012, changeType: 'rename', continuity: 'same_entity', sources: [evidence] }] }];
const careerGroup = (a, b, identities = []) => careerRelations(person('a', [a]), a, [person('b', [b])], identities);
const schoolGroup = (a, b, identities = []) => educationRelations(person('a', [], [a]), a, [person('b', [], [b])], identities);

test('groups separate clear, uncertain and non-contemporary employment', () => {
  assert.equal(careerGroup(career(), career())[0].kind, 'confirmed');
  assert.equal(careerGroup(career(), career({ startYear: 2012, startMonth: 12 }))[0].kind, 'possible');
  const sequence = careerGroup(career(), career({ startYear: 2015, endYear: 2017 }))[0];
  assert.equal(sequence.kind, 'sequential');
  assert.match(sequence.explanation, /不推断直接接替/);
});
test('year-only spans with a guaranteed interior overlap are distinct from boundary uncertainty', () => {
  assert.equal(careerGroup(career({ startMonth: undefined, endMonth: undefined }), career())[0].kind, 'confirmed');
  assert.equal(careerGroup(career({ startMonth: undefined, endMonth: undefined }), career({ startYear: 2012, endYear: 2013, startMonth: undefined, endMonth: undefined }))[0].kind, 'possible');
});
test('two institutions produce one local match beneath each target career, not cross-career aggregation', () => {
  const bureau = career({ unitName: '测试证监局' }), exchange = career({ startYear: 2015, endYear: 2017 });
  const a = person('a', [bureau, exchange]), b = person('b', [{ ...bureau, id: 'bureau' }, { ...exchange, id: 'exchange' }]);
  const first = careerRelations(a, bureau, [a, b]), second = careerRelations(a, exchange, [a, b]);
  assert.equal(first.length, 1); assert.equal(second.length, 1);
  assert.equal(first[0].other.value.id, 'bureau'); assert.equal(second[0].other.value.id, 'exchange');
  assert.equal(first[0].target.value, bureau);
});
test('a stronger match takes priority over a longer uncertain or past role', () => {
  const a = person('a', [career()]), b = person('b', [career({ id: 'old', startYear: 1990, endYear: 2000 }), career({ id: 'match' })]);
  assert.equal(careerRelations(a, a.careerHistory[0], [b])[0].other.value.id, 'match');
});
test('same school is retained when dates are absent or different, without claiming classmates', () => {
  assert.equal(schoolGroup(edu({ startYear: undefined }), edu())[0].kind, 'school_unknown_time');
  assert.equal(schoolGroup(edu(), edu({ startYear: 2005, endYear: 2009 }))[0].kind, 'school_other_time');
  assert.equal(schoolGroup(edu(), edu({ startYear: 2004, endYear: 2008 }))[0].kind, 'possible');
  assert.equal(schoolGroup(edu(), edu({ startYear: 2002, endYear: 2006 }))[0].kind, 'confirmed');
  assert.equal(schoolGroup(edu({ isDerivedSpan: true }), edu())[0].kind, 'school_unknown_time');
});
test('verified historical rename participates only within supported years', () => {
  assert.equal(careerGroup(career(), career({ unitName: '旧名称交易所' }), registry).length, 1);
  assert.equal(careerGroup(career({ startYear: 2015, endYear: 2017 }), career({ unitName: '旧名称交易所', startYear: 2015, endYear: 2017 }), registry).length, 0);
  assert.equal(resolveInstitution('旧名称交易所', undefined, undefined, registry), null);
});
test('merger, split, unverified, unsourced or ambiguous histories never merge identities', () => {
  for (const patch of [{ changeType: 'merge' }, { changeType: 'split' }, { continuity: 'unverified' }, { sources: [] }, { endYear: undefined }]) {
    const identities = [{ ...registry[0], history: [{ ...registry[0].history[0], ...patch }] }];
    assert.equal(careerGroup(career(), career({ unitName: '旧名称交易所' }), identities).length, 0);
  }
  assert.equal(resolveInstitution('旧名称交易所', 2010, 2012, [...registry, { ...registry[0], id: 'another' }]), null);
});
test('changing institution history recalculates matching', () => {
  const identities = [{ ...registry[0], history: [] }];
  assert.equal(careerGroup(career(), career({ unitName: '旧名称交易所' }), identities).length, 0);
  identities[0].history = registry[0].history;
  assert.equal(careerGroup(career(), career({ unitName: '旧名称交易所' }), identities).length, 1);
});
test('school name histories use the same sourced temporal identity rules', () => {
  const schools = [{ ...registry[0], name: '测试大学', history: [{ ...registry[0].history[0], name: '旧名称大学' }] }];
  assert.equal(schoolGroup(edu(), edu({ school: '旧名称大学' }), schools).length, 1);
});
test('source binding never treats every profile source as evidence for a record', () => {
  const a = { ...person('a'), sources: [evidence, { ...evidence, id: 'source2' }] };
  const result = relationSources(a, { type: 'career', value: career({ sourceIds: ['source1'] }) });
  assert.deepEqual(result.bound.map(s => s.id), ['source1']);
  assert.deepEqual(result.unbound.map(s => s.id), ['source2']);
});
test('rendered cards use historical rank, omit current age/rank and show both evidence panels', () => {
  const a = person('a', [career()]); a.name = '本人';
  const b = { ...person('b', [career({ rank: '正处级' })]), name: '关联人', currentRank: '正部级', birthYear: 1960 };
  const html = renderToStaticMarkup(React.createElement(BiographyRelationPanel, { target: a, record: { type: 'career', value: a.careerHistory[0] }, officials: [a, b], units: [], onSelect() {} }));
  assert.match(html, /正处级/); assert.doesNotMatch(html, /正部级|66岁/);
  assert.match(html, /核对双方履历与来源/); assert.match(html, /本人/); assert.match(html, /关联人/);
  assert.match(html, /尚未完成本段来源绑定/);
});
test('history card renders empty state and sourced history entries', () => {
  const blank = renderToStaticMarkup(React.createElement(InstitutionHistoryCard, { unit: { id: 'u', name: '测试交易所' } }));
  assert.match(blank, /尚未录入有来源的历史沿革/);
  const filled = renderToStaticMarkup(React.createElement(InstitutionHistoryCard, { unit: registry[0] }));
  assert.match(filled, /旧名称交易所/); assert.match(filled, /已启用同一实体匹配/); assert.match(filled, /https:\/\/example.org\/evidence/);
});
