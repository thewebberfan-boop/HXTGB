import { fileURLToPath } from 'node:url';
import { loadTypeScript } from './load-typescript.mjs';
import { exportResearch } from './research-workbench.mjs';
exportResearch(undefined, true);
const { UNITS_DATA: units, OFFICIALS_DATA: officials } = loadTypeScript(fileURLToPath(new URL('../src/data/csrcData.ts', import.meta.url)));
const { validateRecord } = loadTypeScript(fileURLToPath(new URL('../src/lib/recordValidation.ts', import.meta.url)));
const { validDate } = loadTypeScript(fileURLToPath(new URL('../src/lib/recordSemantics.ts', import.meta.url)));
const unitIds = new Set(units.map((unit) => unit.id));

function duplicates(values) {
  const seen = new Set();
  return [...new Set(values.filter((value) => seen.size === seen.add(value).size))];
}

const structuralErrors = [];
const duplicateUnitIds = duplicates(units.map((unit) => unit.id));
const duplicateOfficialIds = duplicates(officials.map((official) => official.id));
if (duplicateUnitIds.length) structuralErrors.push(`重复机构 ID：${duplicateUnitIds.join('、')}`);
if (duplicateOfficialIds.length) structuralErrors.push(`重复官员 ID：${duplicateOfficialIds.join('、')}`);

const missingCareerUnits = officials.flatMap((official) =>
  official.careerHistory
    // 空 unitId 用于尚未建立站内机构页的外部历史单位；不能为了通过审计而错误映射。
    .filter((record) => record.unitId && !unitIds.has(record.unitId))
    .map((record) => `${official.name}/${record.id} → ${record.unitId}`)
);
if (missingCareerUnits.length) structuralErrors.push(`履历引用不存在的机构：${missingCareerUnits.join('；')}`);

const invalidIntervals = officials.flatMap((official) =>
  official.careerHistory
    .filter((record) =>
      record.endYear !== null &&
      (record.endYear < record.startYear ||
        (record.endYear === record.startYear &&
          record.endMonth && record.startMonth && record.endMonth < record.startMonth))
    )
    .map((record) => `${official.name}/${record.id}`)
);
if (invalidIntervals.length) structuralErrors.push(`履历起止时间倒置：${invalidIntervals.join('、')}`);

const allSources = officials.flatMap((official) => official.sources || []);
const linkedSources = allSources.filter((item) => item.url);
const verifiedProfiles = officials.filter((official) => official.profileReview?.status === 'verified');
const partialProfiles = officials.filter((official) => official.profileReview?.status === 'partially_verified');
const profilesWithoutStructuredSources = officials.filter((official) => !official.sources?.length);
const legacySourceLabels = new Set(
  officials.flatMap((official) => [
    official.basicInfoConfidence?.source,
    ...official.education.map((item) => item.confidence?.source),
    ...official.careerHistory.flatMap((item) => [item.confidence?.source, item.sourceNote]),
  ]).filter(Boolean)
);

console.log('HXTGB 数据质量审计');
console.log(`机构：${units.length}；官员：${officials.length}`);
console.log(`结构化来源：${allSources.length}（含原始链接 ${linkedSources.length}）`);
console.log(`档案核验：完整 ${verifiedProfiles.length}；部分 ${partialProfiles.length}；待核验 ${officials.length - verifiedProfiles.length - partialProfiles.length}`);
console.log(`尚无结构化来源的档案：${profilesWithoutStructuredSources.length}`);
console.log(`待迁移的旧文字信源标签：${legacySourceLabels.size}`);

// 单独报告五所现有名录覆盖，不能把有链接等同于履历已完整。
console.log('\n五家期货交易所现有名录覆盖（非全体班子已核验声明）：');
for (const id of ['csrc-shfe', 'csrc-dce', 'csrc-czce', 'csrc-cffex', 'csrc-gfex']) {
  const unit = units.find(item => item.id === id);
  const members = (unit?.currentLeaderIds || []).map(memberId => officials.find(item => item.id === memberId));
  if (members.some(item => !item)) structuralErrors.push(`${id}名录含不存在的人物`);
  const linked = members.filter(item => item?.sources?.some(source => source.url));
  const pending = members.filter(item => !item?.sources?.length || item.profileReview?.status === 'needs_review');
  console.log(`${unit?.name}：旧名录${members.length}条；有来源${linked.length}条；身份待核${pending.map(item => item?.name || '缺失人物').join('、') || '无新增标记'}`);
}

for (const official of officials) {
  if (duplicates(official.careerHistory.map(r => r.id)).length) structuralErrors.push(`${official.name}履历ID重复`);
  if (duplicates((official.sources || []).map(s => s.id)).length) structuralErrors.push(`${official.name}来源ID重复`);
  for (const record of official.careerHistory) for (const error of validateRecord(record, official.sources || [], 'career')) structuralErrors.push(`${official.name}/${record.id}：${error}`);
  for (const record of official.education) for (const error of validateRecord(record, official.sources || [], 'education')) structuralErrors.push(`${official.name}/教育${record.id || ''}：${error}`);
  const sourceIds = new Set((official.sources || []).map(source => source.id));
  for (const record of [...official.careerHistory, ...official.education]) {
    for (const id of record.sourceIds || []) {
      if (!sourceIds.has(id)) structuralErrors.push(`${official.name}的履历来源ID不存在：${id}`);
    }
  }
}
for (const unit of units) {
  if (unit.currentLeaderIds?.some(id => !officials.some(o => o.id === id))) structuralErrors.push(`${unit.name}名册含不存在的人物`);
  if (unit.rosterReview?.status === 'complete' && (!validDate(unit.rosterReview.asOf) || !unit.rosterReview.scope.trim() || !unit.rosterReview.sources.some(s => s.url))) structuralErrors.push(`${unit.name}完整名册核验缺少日期、范围或来源`);
  const history = unit.history || [];
  if (duplicates(history.map(entry => entry.id)).length) structuralErrors.push(`${unit.name}历史沿革ID重复`);
  for (const entry of history) {
    if (entry.startYear != null && entry.endYear != null && entry.startYear > entry.endYear) structuralErrors.push(`${unit.name}/${entry.id}沿革年份倒置`);
    if (['merge', 'split'].includes(entry.changeType) && entry.continuity === 'same_entity') structuralErrors.push(`${unit.name}/${entry.id}合并拆分不得直接归并为同一实体`);
  }
}

if (structuralErrors.length) {
  console.error('\n结构性错误：');
  structuralErrors.forEach((error) => console.error(`- ${error}`));
  process.exitCode = 1;
} else {
  console.log('结构一致性：通过');
}
