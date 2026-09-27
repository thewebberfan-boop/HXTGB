# 研究数据语义与录入约定

更新：2026-09-27。本文件描述已实现能力；研究搜集仍遵循[持续工作说明](research/continuous-work.md)和[研究手册](biography-research-handbook.md)。类型以 `src/types/index.ts` 为准，共享解释位于 `src/lib/recordSemantics.ts`。

## 任职记录

`recordKind` 区分 `tenure`（任期）和 `observation`（任职观察点）。`tenureStatus` 区分 `current`、`historical`、`unknown`，与日期是否完整分开。新记录明确填写类型与适用状态。

| 情况 | 填法 | 页面及计算 |
| --- | --- | --- |
| 已确认历史职位，结束时间未知 | `recordKind: 'tenure'`、`tenureStatus: 'historical'`；省略 `endYear` | 机构页、人物页显示结束时间待核；泳道列入未定位经历，不延长至今天、不计算同期 |
| 新闻仅证明某时已任 | `recordKind: 'observation'`、`observedAt: { year, month?, day? }`；不填任期起止或 `isCurrent` | 显示任职观察点，泳道标注◆；不参与连续任期、任期长度或流转连线计算 |
| 截至某日确认在任 | `recordKind: 'tenure'`、`tenureStatus: 'current'`、`confirmedAsOf`；上任日期按证据填写 | “截至某日在任”；可计算区间止于证据截止日，不随系统时钟延长 |
| 当前任职状态待核 | `tenureStatus: 'unknown'` | 不归入已确认现任／历史名册，不生成连续任期；保留在机构待核区 |
| 起止仅精确到年 | 只填年份，省略月日 | 显示年份；泳道虚线并在年份中部示意，不向读者补成1月／12月 |

`PartialDate` 必须有年，可选月、日；有日必须有月。日期性质由 `observedAt`、`confirmedAsOf` 或任期字段表达。网页发布日期、访问日期不自动转换为任职日期。

观察点不会自动证明现在仍在职或已经离任。有其他独立的现职记录时，同一人物仍可列为在任；仅有观察点时在机构和侧边栏中显示“任职记载 · 状态待核”。

## 旧数据兼容

- 未填新字段的旧任期继续读取。`endYear: null` 且没有明确历史标记仍按旧“至今”处理，但日期显示提示旧记录现状待复核；不能称为截至今日已核验。
- 旧 `isCurrent: false` 加 `endYear: null` 按历史结束未知处理，不再显示至今，不进入泳道区间。
- 新历史记录省略未知结束日期，不再使用 `null`；审计拒绝新状态与旧至今标记的冲突。
- 旧记录的来源绑定、置信度和整档核验等级不自动升级为字段级“已核验”。旧百分比已从人物履历、教育和泳道提示的公开展示中移除，原值仍保留。
- 旧现任记录缺少证据截止日时，计算兼容原来的当前日期边界，但证据状态仍待核验；“仅显示双方计算字段已核验”不会因此把它们当作已核验关系。后续逐人核验再补截止日。

## 字段级证据

`CareerRecord.fieldEvidence` 和 `EducationInfo.fieldEvidence` 按字段绑定证据。例如（仅为录入形状，不是人物事实）：

```ts
fieldEvidence: {
  position: {
    status: 'verified',
    basis: 'direct',
    sourceIds: ['该人物sources中的实际ID'],
    reviewedAt: '实际复核日期，YYYY-MM-DD',
    note: '原文定位及证明范围',
  },
}
```

- `status`：`needs_review`、`verified`、`conflicted`、`rejected`。
- `basis`：`direct`（原文明说）、`observation`（时间点观察）、`derived`（事实推导）。与来源权威性分开判断。
- 已核验字段必须有值、复核日期及可定位的有效来源绑定；这些结构检查不能代替正文核验。
- 起止年份、月份、日期分别核验。任职观察只能支撑观察点，审计拒绝把 `basis: 'observation'` 绑定成任期起止依据。
- 关系卡展开后展示双方字段证据。关系计算同时返回日期交集与证据状态，并提供“仅显示双方计算字段已核验”筛选。
- 该筛选只确认计算所用的机构／学校和日期字段；不意味着双方整份档案、职位、行政级别等其他字段均已核验。现有计算仍以月／年为尺度，不声称精确到日的同期长度。

## 教育与名册

学校、学位均可未知。`educationLevel` 保存教育层次，`studyStatus` 区分在读／毕业／结业／未知，`degreeStatus` 区分已获授／攻读／未知。毕业不自动代表获得学位。旧 `degree: '大专'` 仅兼容显示为旧学历记录，新记录用 `educationLevel: '专科'`。

教育年份用于排序时不再按学制补四年。未知学校不参与校友匹配；推算学习年份不用于确定同期关系。

`Unit.rosterReview` 保存名册核验状态、`asOf` 截止时间、`scope` 班子口径、来源和说明。`complete` 仅表示该日期指定口径的名单已核清。没有这些资料时页面明确显示名册完整性及截止日期待核，不把已有人员数量当作全部班子人数。

## 本轮语义迁移

以下均依据既有记录与来源说明调整存储含义，本轮没有重新访问外部来源，没有提高核验等级，没有增加人物或来源数量：

| 人物／履历ID | 修改 |
| --- | --- |
| 杨柯／`yang-ke-shfe-joined-2002` | 明确历史任职，保留2002年8月起点，结束日期省略 |
| 张晓刚／`zhang-xiaogang-cffex-vgm-2015` | 明确历史任职，保留2015年10月起点，结束日期省略 |
| 郭淑华／`guo-shuhua-czce-employed-2003` | 原说明仅确认2003年已在所，改为2003年观察点；字段证据待复核 |
| 王晓明／`wang-xiaoming-czce-employed-2003` | 同上，改为2003年观察点；保留原来源和记录ID |

## 验证与下一阶段

运行 `npm run test:records` 检查日期语义、字段证据、四条迁移和三个主要视图的渲染；`npm run test:relations` 保留原关系边界测试；`npm run audit:data` 检查实际运行时数据；应用修改还需类型检查、构建和页面检查。

在上述展示语义基础上，第二批已实现独立版本化事实／证据库、冲突双方及历史、推理依赖失效、公开投影和本地命令行工作台，使用方法见[研究工作台](research-workbench.md)。基础字段也可经投影绑定证据。旧数据整体移入`legacyData.ts`保留兼容，新增研究按人物JSON拆分；没有把旧库批量转换成已核验事实。联网后台与图形化编辑器未加入。
