import fs from 'node:fs';
import ts from 'typescript';

const source = fs.readFileSync(new URL('../src/data/csrcData.ts', import.meta.url), 'utf8');
const javascript = ts.transpileModule(source, {
  compilerOptions: {
    module: ts.ModuleKind.CommonJS,
    target: ts.ScriptTarget.ES2020,
  },
}).outputText;
const dataModule = { exports: {} };
new Function('require', 'module', 'exports', javascript)(
  () => ({}),
  dataModule,
  dataModule.exports
);

const { UNITS_DATA: units, OFFICIALS_DATA: officials } = dataModule.exports;
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

if (structuralErrors.length) {
  console.error('\n结构性错误：');
  structuralErrors.forEach((error) => console.error(`- ${error}`));
  process.exitCode = 1;
} else {
  console.log('结构一致性：通过');
}
