import assert from 'node:assert/strict';
import { test } from 'node:test';
import { fileURLToPath } from 'node:url';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import fs from 'node:fs';
import { createRequire } from 'node:module';
import { loadTypeScript, registerExternalModule } from './load-typescript.mjs';
// 本地依赖将 CJS 出口放在 type:module 下；直接加载该可信的 CJS 构建，
// 避免更改 node_modules，也避免 ESM barrel 在同步目录读取数千个图标文件。
const require = createRequire(import.meta.url);
const iconsModule = { exports: {} };
new Function('require', 'module', 'exports', fs.readFileSync(require.resolve('lucide-react'), 'utf8'))(require, iconsModule, iconsModule.exports);
registerExternalModule('lucide-react', iconsModule.exports);
const load = relative => loadTypeScript(fileURLToPath(new URL(relative, import.meta.url)));
const { careerStatus, careerInterval, careerPlot, formatCareerDates, formatDate, formatEducation, relationEvidence } = load('../src/lib/recordSemantics.ts');
const { validateRecord } = load('../src/lib/recordValidation.ts');
const { careerRelations, educationRelations } = load('../src/lib/relationGroups.ts');
const { isOfficialActiveInUnit, isOfficialPastInUnit, isOfficialUnresolvedInUnit, OFFICIALS_DATA } = load('../src/data/csrcData.ts');
const { UnitsView, getOfficialPositionAndTenure } = load('../src/components/UnitsView.tsx');
const { OfficialsView } = load('../src/components/OfficialsView.tsx');
const { SwimlaneView } = load('../src/components/SwimlaneView.tsx');
const { BiographyRelationPanel, relationSources } = load('../src/components/BiographyRelationPanel.tsx');
const source = { id: 's1', title: '测试原文', publisher: '测试机构', url: 'https://example.org/evidence', sourceType: 'official_profile', accessedDate: '2026-09-27', supports: [] };
const verified = { status: 'verified', basis: 'direct', sourceIds: ['s1'], reviewedAt: '2026-09-27' };
const unit = { id: 'fixture-unit', name: '测试机构', shortName: '测试机构', category: '会机关内设部门', level: '正厅局级', establishedYear: 1990, mainDuties: [], description: '测试' };
const historical = { id: 'historical', unitId: unit.id, unitName: unit.name, position: '历史岗位样例', recordKind: 'tenure', tenureStatus: 'historical', startYear: 2015 };
const observation = { id: 'observation', unitId: unit.id, unitName: unit.name, position: '观察岗位样例', recordKind: 'observation', observedAt: { year: 2019, month: 5 } };
const interval = { ...historical, id: 'interval', endYear: 2018 };
const person = (id, careers, education = []) => ({ id, name: `测试人${id}`, gender: '未公开', currentUnitId: unit.id, currentPosition: '岗位状态待核', careerHistory: careers, education, sources: [source], avatarVerified: false });
const render = (component, props) => renderToStaticMarkup(React.createElement(component, props));
const noop = () => {};
const officialProps = officials => ({ officials, units: [unit], selectedOfficialIds: [], onToggleOfficialSelection: noop, onNavigateToSwimlaneWithOfficial: noop });
const laneProps = officials => ({ officials, units: [unit], selectedOfficialIds: officials.map(o => o.id), activeLaneUnitIds: [unit.id], onReorderLanes: noop, onRemoveLane: noop, onCompleteUnitOfficials: noop, onNavigateToUnit: noop, onNavigateToOfficial: noop, isTimeReversed: false, hoveredOfficialId: null, onHoverOfficial: noop });

test('date precision is preserved, including leap days; legacy historical null never means current', () => {
  assert.equal(formatDate({ year: 2020 }), '2020');
  assert.equal(formatDate({ year: 2020, month: 2 }), '2020.02');
  assert.equal(formatDate({ year: 2020, month: 2, day: 29 }), '2020.02.29');
  assert.equal(formatDate({ year: 2021, month: 2, day: 29 }), '时间待核');
  const old = { ...historical, tenureStatus: undefined, endYear: null, isCurrent: false };
  assert.equal(careerStatus(old), 'historical');
  assert.doesNotMatch(formatCareerDates(old), /至今|\.01|\.12/);
  assert.equal(careerInterval(old), null);
});

test('historical unknown ends remain visible in profile and unit and are listed off the lane', () => {
  const p = person('a', [historical]);
  assert.equal(isOfficialActiveInUnit(p, unit.id), false);
  assert.equal(isOfficialPastInUnit(p, unit.id), true);
  assert.match(getOfficialPositionAndTenure(p, unit, false).tenureStr, /结束时间待核/);
  const views = [render(OfficialsView, officialProps([p])), render(UnitsView, { units: [unit], officials: [p], onSelectOfficial: noop, onNavigateToSwimlane: noop }), render(SwimlaneView, laneProps([p]))];
  for (const html of views) {
    assert.match(html, /历史岗位样例/);
    assert.match(html, /结束时间待核/);
    assert.doesNotMatch(html, /2015\.01|2015.*至今/);
  }
  assert.match(views[2], /未定位到泳道的经历/);
  assert.doesNotMatch(views[2], /data-record-kind="tenure"/);
});

test('observations render as points without tenure or relationship inference, and are not current/past rosters', () => {
  const p = person('a', [observation]), q = person('b', [interval]);
  assert.equal(careerPlot(observation).kind, 'observation');
  assert.equal(careerInterval(observation), null);
  assert.equal(isOfficialActiveInUnit(p, unit.id), false);
  assert.equal(isOfficialPastInUnit(p, unit.id), false);
  assert.equal(isOfficialUnresolvedInUnit(p, unit.id), true);
  assert.deepEqual(careerRelations(p, observation, [p, q]), []);
  const profile = render(OfficialsView, officialProps([p]));
  assert.match(profile, /2019\.05有任职记载/);
  assert.match(profile, /当前履职状态待核/);
  const units = render(UnitsView, { units: [unit], officials: [p], onSelectOfficial: noop, onNavigateToSwimlane: noop });
  assert.match(units, /现任／离任状态待核/);
  const lanes = render(SwimlaneView, laneProps([p]));
  assert.match(lanes, /data-record-kind="observation"/);
  assert.match(lanes, /◆ 观察点/);
  assert.doesNotMatch(lanes, /确证履历/);
  assert.match(lanes, /核验状态见字段证据/);
  assert.doesNotMatch(lanes, /data-record-kind="tenure"/);
});

test('explicit current evidence is capped at the confirmation date and never extends when clock advances', () => {
  const record = { ...historical, tenureStatus: 'current', confirmedAsOf: { year: 2022, month: 6 } };
  assert.deepEqual(careerInterval(record, new Date('2030-09-01')).end, { year: 2022, month: 6 });
  assert.match(formatCareerDates(record), /截至2022\.06在任/);
  assert.equal(careerInterval({ ...record, confirmedAsOf: undefined }), null);
  const future = { ...interval, startYear: 2023, endYear: 2024 };
  assert.equal(careerRelations(person('a', [record]), record, [person('b', [future])])[0].kind, 'sequential');
});

test('unresolved roster requires explicit new semantics, not legacy broad institution aliases', () => {
  for (const official of OFFICIALS_DATA) {
    if (!official.careerHistory.some(r => r.unitId === 'csrc-main' && (r.recordKind || r.tenureStatus))) {
      assert.equal(isOfficialUnresolvedInUnit(official, 'csrc-main'), false);
    }
  }
  const p = person('latest', [historical, { ...historical, id: 'later', startYear: 2020 }]);
  assert.equal(getOfficialPositionAndTenure(p, unit, false).matchedRecord.id, 'later');
});

test('school, education level, degree and study status are independent; missing schools never create alumni', () => {
  const education = { id: 'edu', degree: '硕士' };
  const p = person('a', [], [education]);
  assert.deepEqual(validateRecord(education, [], 'education'), []);
  assert.deepEqual(educationRelations(p, education, [person('b', [], [{ degree: '硕士' }])]), []);
  const html = render(OfficialsView, officialProps([p]));
  assert.match(html, /学校待核/); assert.match(html, /硕士学位/);
  assert.equal(formatEducation({ educationLevel: '研究生', studyStatus: 'studying' }), '研究生层次 · 学位待核 · 在读');
  assert.match(formatEducation({ degree: '博士', degreeStatus: 'pursuing' }), /攻读博士学位/);
  assert.doesNotMatch(formatEducation({ degree: '博士', studyStatus: 'graduated' }), /已获授/);
});

test('record-level sources and profile reviews cannot certify specific relationship fields', () => {
  const record = { ...interval, sourceIds: ['s1'] };
  const p = { ...person('a', [record]), profileReview: { status: 'verified' } };
  assert.equal(relationEvidence(p, record, 'career'), 'needs_review');
  const bound = { ...record, fieldEvidence: { unitName: verified, startYear: verified, endYear: verified } };
  assert.equal(relationEvidence(p, bound, 'career'), 'verified');
  assert.equal(relationEvidence(p, { ...bound, startMonth: 5 }, 'career'), 'needs_review');
  assert.equal(relationEvidence(p, { ...bound, fieldEvidence: { ...bound.fieldEvidence, startYear: { ...verified, status: 'conflicted' } } }, 'career'), 'conflicted');
  assert.equal(relationEvidence({ ...p, sources: [] }, bound, 'career'), 'needs_review');
});

test('field evidence renders exact labels and sources; unrelated sources are not automatically bound', () => {
  const record = { ...interval, fieldEvidence: { position: verified } };
  const p = { ...person('a', [record]), sources: [source, { ...source, id: 's2' }] };
  assert.deepEqual(relationSources(p, { type: 'career', value: record }).bound.map(s => s.id), ['s1']);
  const html = render(OfficialsView, officialProps([p]));
  assert.match(html, /职务：已核验 · 原文记载/);
  assert.match(html, /https:\/\/example.org\/evidence/);
  const q = person('b', [interval]);
  const relations = render(BiographyRelationPanel, { target: p, record: { type: 'career', value: record }, officials: [p, q], units: [unit], onSelect: noop });
  assert.match(relations, /计算字段尚未逐项核验/);
  assert.match(relations, /仅显示双方计算字段已核验/);
});

test('audit rejects false precision, observation-tenure conflation, conflicting status and unsupported verification', () => {
  for (const record of [
    { ...observation, startYear: 2019 },
    { ...observation, observedAt: { year: 2019, month: 13 } },
    { ...historical, endYear: null },
    { ...historical, tenureStatus: 'current' },
    { ...interval, startYear: 2020 },
    { ...interval, fieldEvidence: { startYear: { ...verified, basis: 'observation' } } },
    { ...interval, fieldEvidence: { position: { ...verified, sourceIds: ['missing'] } } },
  ]) assert.ok(validateRecord(record, [source], 'career').length, JSON.stringify(record));
  assert.deepEqual(validateRecord(observation, [], 'career'), []);
  assert.deepEqual(validateRecord(historical, [], 'career'), []);
});

test('migrated production examples preserve record IDs, unreviewed status and verified observation upgrades', () => {
  for (const [id, recordId] of [['yang-ke', 'yang-ke-shfe-joined-2002'], ['zhang-xiaogang', 'zhang-xiaogang-cffex-vgm-2015']]) {
    const p = OFFICIALS_DATA.find(o => o.id === id), r = p.careerHistory.find(r => r.id === recordId);
    assert.equal(r.tenureStatus, 'historical'); assert.equal(r.endYear, undefined); assert.ok(r.sourceIds.length);
    assert.equal(careerPlot(r), null);
  }
  {
    const p = OFFICIALS_DATA.find(o => o.id === 'wang-xiaoming-czce');
    const r = p.careerHistory.find(r => r.id.endsWith('employed-2003'));
    assert.equal(r.recordKind, 'observation'); assert.deepEqual(r.observedAt, { year: 2003 });
    assert.equal(r.startYear, undefined); assert.equal(r.fieldEvidence.observedAt.status, 'needs_review');
    assert.equal(isOfficialActiveInUnit(p, 'csrc-czce'), true);
  }
  {
    const p = OFFICIALS_DATA.find(o => o.id === 'guo-shuhua');
    const r = p.careerHistory.find(r => r.id === 'guo-shuhua-czce-employed-2003');
    assert.equal(r.recordKind, 'observation'); assert.deepEqual(r.observedAt, { year: 2003, month: 6 });
    assert.equal(r.startYear, undefined); assert.equal(r.fieldEvidence.observedAt.status, 'verified');
    assert.equal(isOfficialActiveInUnit(p, 'csrc-czce'), true); // 其他独立现职记录保留
  }
});

test('year-only dates are not upgraded to January/December in unit formatting or any rendered view', () => {
  const p = person('a', [interval]);
  assert.equal(formatCareerDates(interval), '2015 — 2018');
  assert.equal(getOfficialPositionAndTenure(p, unit, false).tenureStr, '2015 — 2018');
  for (const html of [render(OfficialsView, officialProps([p])), render(SwimlaneView, laneProps([p]))]) {
    assert.match(html, /2015 — 2018/);
    assert.doesNotMatch(html, /2015\.01|2018\.12/);
  }
});

test('research basic evidence and withdrawn-record notices render in the public profile', () => {
  const p = { ...person('a', []), birthYear: 1970,
    basicFieldEvidence: { birthYear: verified },
    researchNotices: ['经历r的必要字段已变化，暂不展示，待复核。'] };
  const html = render(OfficialsView, officialProps([p]));
  assert.match(html, /基础字段与研究更新/);
  assert.match(html, /出生年：已核验 · 原文记载/);
  assert.match(html, /必要字段已变化/);
});
