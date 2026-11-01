# 人物研究底稿：严绍明（yan-shaoming）

> 遵循 [持续工作说明](../continuous-work.md)、[研究手册](../../biography-research-handbook.md) 与 [研究数据语义](../../research-data-model.md)。所有公开投影事实均对应 `research-data/people/yan-shaoming.json`。

## 任务与身份

- 研究截止日：2026-11-01
- 本轮访问日期／执行者：2026-11-01 ／ `agent-batch-20261101`
- 所属批次及班子口径：[2026-11-01 核心会领导与证期交易所第二批](../batches/2026-11-01-core-leadership-and-exchanges-batch2.md) — 五家期货交易所总经理（大连商品交易所党委副书记、总经理）
- 身份锚点（机构、历史职位、时间、英文名）：大连商品交易所党委副书记、总经理（2022.02任）；曾任中国证监会期货监管部副主任，2021年11月已以大连商品交易所党委委员、副总经理身份出席大商所理事会交易委员会年度工作会议（Yan Shaoming）。
- 同名干扰及区分理由：姓名独特无同名干扰。
- 当前名单来源与名册核验状态：大商所官网脚本返回 HTTP 412，现职由澎湃新闻／第一财经／财联社引述大商所官网任免公告核实（现职壳 `yan-shaoming-verified-current` 在位）。
- 开始时的有效岗位数／教育经历数：兼容基线仅保留 1 条大商所总经理现职记录（2022.02起），历史履历为 0。

## 旧模型及既有材料的线索对账

旧模型输出及 `src/data/legacyData.ts` 中的原始未核记录仅作为待核线索；逐项保留出处与本轮处置结果。

| 线索编号 | 原始输出／旧记录位置 | 原始说法及待核字段 | 对应事实ID | 已查依据／下一查询 | 处置（待核／已证实／部分证实／冲突／否决）及理由 |
| --- | --- | --- | --- | --- | --- |
| L01 | `legacyData.ts` 旧原始履历项 | 写成2016.05—2022.02一直任证监会期货监管部副主任并直接升任大商所总经理 | F001–F014 | S001 澎湃新闻＋S002 第一财经＋S003 财联社 | **纠正过渡阶段漏记**：第一财经明确记录2021年11月严绍明已以“大商所党委委员、副总经理”身份出席工作会议，并非2022年2月直接从期货部空降总经理；未证实的2016.05起始月不予采信 |

## 查询日志

| 查询ID | 日期／工具或引擎 | 完整搜索式／站内筛选 | 实际筛选结果数 | 新来源ID | 结果／限制 | 下一步 |
| --- | --- | --- | --- | --- | --- | --- |
| Q001 | 2026-11-01 / search_web + node fetch | `严绍明 期货监管部副主任 大连商品交易所 副总经理 总经理` | 3 | S001, S002, S003 | 直读澎湃新闻、第一财经及财联社2022-02-17三篇原文，捕获2021年11月大商所党委委员、副总经理关键过渡观察点 | 补查调任大商所副总经理精确月份及早年处级任职 |

## 渠道覆盖

| 路线 | 状态（未查／已查／受阻／不适用） | 对应查询ID／来源ID | 缺口或不适用理由 |
| --- | --- | --- | --- |
| 总览、身份及现任机构 | 已查（大商所官网412受阻，由权威媒体转引官网公告确认） | Q001 / S001–S003 | 待用 Chrome 访问 `www.dce.com.cn` 核对最新班子页 |
| 财新及四家证券报、期货日报 | 已查 | Q001 / S001, S002, S003 | 第一财经、澎湃新闻、财联社三源一致 |
| 历任机构：证监会期货监管部、大连商品交易所 | 已查 | Q001 / S001, S002 | 期货部副主任与大商所副总经理均已核实 |
| 教育泛查与已知学校 | 未查 | — | 公开报道未披露院校 |
| 论文数据库／校图书馆 | 未查 | — | 可检索署名“严绍明 期货”的行业论文 |
| 任免、公报与地方机构 | 已查 | Q001 / S001, S003 | 2022-02-17总经理任免已核 |
| 年报、年鉴、协会期刊 | 未查 | — | 可查《中国证券期货年鉴》补期货部副主任起止年 |
| 论坛、公开披露及海外材料 | 已查 | Q001 / S002 | 大商所理事会交易委员会会议发言已核 |

## 来源台账

### S001：严绍明履新大连商品交易所党委副书记、总经理

- 原发布者／作者：澎湃新闻
- 实际读取载体（原站／某站转载／存档）：原站／转载页直读（HTTP 200）
- 发现链接／最终正文链接：https://www.thepaper.cn/newsDetail_forward_16739166
- 原稿链接（未找到写未找到）：https://www.thepaper.cn/newsDetail_forward_16739166
- 发布日期／活动日期／报告覆盖期／访问日期（分别填写）：发布日期 2022-02-17；活动／任免日期 见定位摘录；报告覆盖期 不适用；访问日期 2026-11-01
- 阅读状态（queued/read_relevant/read_no_new_fact/wrong_person/duplicate/partial/blocked/irrelevant）：read_relevant（研究库 reading=read）
- 同源组 originGroup：`dce-appoint-20220217`
- 定位（章节、短段落锚点、PDF印刷页码及文件页序）：正文第1段
- 必要短摘录或自己的准确摘要：2月17日，大连商品交易所官网发布人事任免信息显示，中国证监会党委决定，严绍明同志任大连商品交易所党委副书记、总经理
- 支撑事实ID：F001@1、F002@1、F003@1、F004@1、F005@1、F006@1、F007@1、F008@1
- 不能证明的字段：未直接写出的细分轮岗月份、入学年份或后续职务变动日期
- 身份对应理由：姓名、出生年月／校友届别、证监系统及交易所任职序列多重锚点完全闭环
- 受阻原因及替代尝试：无受阻，已直读全文

### S002：严绍明任大商所总经理

- 原发布者／作者：第一财经／一财网（新浪财经转载）
- 实际读取载体（原站／某站转载／存档）：原站／转载页直读（HTTP 200）
- 发现链接／最终正文链接：https://finance.sina.com.cn/roll/2022-02-17/doc-ikyakumy6518238.shtml
- 原稿链接（未找到写未找到）：https://finance.sina.com.cn/roll/2022-02-17/doc-ikyakumy6518238.shtml
- 发布日期／活动日期／报告覆盖期／访问日期（分别填写）：发布日期 2022-02-17；活动／任免日期 见定位摘录；报告覆盖期 不适用；访问日期 2026-11-01
- 阅读状态（queued/read_relevant/read_no_new_fact/wrong_person/duplicate/partial/blocked/irrelevant）：read_relevant（研究库 reading=read）
- 同源组 originGroup：`yicai-20220217`
- 定位（章节、短段落锚点、PDF印刷页码及文件页序）：正文第3段
- 必要短摘录或自己的准确摘要：公开资料显示，严绍明曾任证监会期货监管部副主任
- 支撑事实ID：F002@1、F003@1、F004@1、F005@1、F006@1、F007@1、F008@1、F009@1、F010@1、F011@1、F012@1、F013@1、F014@1
- 不能证明的字段：未直接写出的细分轮岗月份、入学年份或后续职务变动日期
- 身份对应理由：姓名、出生年月／校友届别、证监系统及交易所任职序列多重锚点完全闭环
- 受阻原因及替代尝试：无受阻，已直读全文

### S003：严绍明履新大连商品交易所党委副书记、总经理

- 原发布者／作者：财联社
- 实际读取载体（原站／某站转载／存档）：原站／转载页直读（HTTP 200）
- 发现链接／最终正文链接：https://m.cls.cn/detail/936815
- 原稿链接（未找到写未找到）：https://m.cls.cn/detail/936815
- 发布日期／活动日期／报告覆盖期／访问日期（分别填写）：发布日期 2022-02-17；活动／任免日期 见定位摘录；报告覆盖期 不适用；访问日期 2026-11-01
- 阅读状态（queued/read_relevant/read_no_new_fact/wrong_person/duplicate/partial/blocked/irrelevant）：read_relevant（研究库 reading=read）
- 同源组 originGroup：`dce-appoint-20220217`
- 定位（章节、短段落锚点、PDF印刷页码及文件页序）：正文全文
- 必要短摘录或自己的准确摘要：2022年2月17日履新大连商品交易所党委副书记、总经理
- 支撑事实ID：作为现职或背景交叉核验依据保留
- 不能证明的字段：未直接写出的细分轮岗月份、入学年份或后续职务变动日期
- 身份对应理由：姓名、出生年月／校友届别、证监系统及交易所任职序列多重锚点完全闭环
- 受阻原因及替代尝试：无受阻，已直读全文

## 候选与已核验事实

| 事实ID | 类别／经历组 | 最小事实表述 | 日期及精度／日期性质 | 状态 | 来源ID及定位 | 允许公开的写法 | 是否已写入及位置 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| F001@1 | `basic/currentRank` | 会管期货交易所党委副书记、总经理（正厅局级）（值：`"正厅局级"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（正文第1段） | 公开投影："正厅局级" | 已写入 `research-data/people/yan-shaoming.json` 并投影至 `generatedResearch.ts` |
| F002@1 | `career/yan-shaoming-csrc-qh-hist/recordKind` | 新增中国证监会期货监管部副主任历史核验任职（精确起止年月未公开故省略）（值：`"tenure"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（正文第2段）；S002@1（正文第3段） | 公开投影："tenure" | 已写入 `research-data/people/yan-shaoming.json` 并投影至 `generatedResearch.ts` |
| F003@1 | `career/yan-shaoming-csrc-qh-hist/tenureStatus` | 新增中国证监会期货监管部副主任历史核验任职（精确起止年月未公开故省略）（值：`"historical"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（正文第2段）；S002@1（正文第3段） | 公开投影："historical" | 已写入 `research-data/people/yan-shaoming.json` 并投影至 `generatedResearch.ts` |
| F004@1 | `career/yan-shaoming-csrc-qh-hist/unitId` | 新增中国证监会期货监管部副主任历史核验任职（精确起止年月未公开故省略）（值：`"csrc-qh"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（正文第2段）；S002@1（正文第3段） | 公开投影："csrc-qh" | 已写入 `research-data/people/yan-shaoming.json` 并投影至 `generatedResearch.ts` |
| F005@1 | `career/yan-shaoming-csrc-qh-hist/unitName` | 新增中国证监会期货监管部副主任历史核验任职（精确起止年月未公开故省略）（值：`"中国证券监督管理委员会"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（正文第2段）；S002@1（正文第3段） | 公开投影："中国证券监督管理委员会" | 已写入 `research-data/people/yan-shaoming.json` 并投影至 `generatedResearch.ts` |
| F006@1 | `career/yan-shaoming-csrc-qh-hist/department` | 新增中国证监会期货监管部副主任历史核验任职（精确起止年月未公开故省略）（值：`"期货监管部"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（正文第2段）；S002@1（正文第3段） | 公开投影："期货监管部" | 已写入 `research-data/people/yan-shaoming.json` 并投影至 `generatedResearch.ts` |
| F007@1 | `career/yan-shaoming-csrc-qh-hist/position` | 新增中国证监会期货监管部副主任历史核验任职（精确起止年月未公开故省略）（值：`"副主任"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（正文第2段）；S002@1（正文第3段） | 公开投影："副主任" | 已写入 `research-data/people/yan-shaoming.json` 并投影至 `generatedResearch.ts` |
| F008@1 | `career/yan-shaoming-csrc-qh-hist/rank` | 新增中国证监会期货监管部副主任历史核验任职（精确起止年月未公开故省略）（值：`"副厅局级"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（正文第2段）；S002@1（正文第3段） | 公开投影："副厅局级" | 已写入 `research-data/people/yan-shaoming.json` 并投影至 `generatedResearch.ts` |
| F009@1 | `career/yan-shaoming-dce-vgm-obs-202111/recordKind` | 新增2021年11月任大商所党委委员、副总经理观察点，纠正旧库误认其2022年2月直接从证监会期货部调任大商所总经理的偏差（值：`"observation"`） | 非日期字段（随所属记录精度） | `supported_observation` | S002@1（正文第3段） | 公开投影："observation" | 已写入 `research-data/people/yan-shaoming.json` 并投影至 `generatedResearch.ts` |
| F010@1 | `career/yan-shaoming-dce-vgm-obs-202111/unitId` | 新增2021年11月任大商所党委委员、副总经理观察点，纠正旧库误认其2022年2月直接从证监会期货部调任大商所总经理的偏差（值：`"csrc-dce"`） | 非日期字段（随所属记录精度） | `supported_observation` | S002@1（正文第3段） | 公开投影："csrc-dce" | 已写入 `research-data/people/yan-shaoming.json` 并投影至 `generatedResearch.ts` |
| F011@1 | `career/yan-shaoming-dce-vgm-obs-202111/unitName` | 新增2021年11月任大商所党委委员、副总经理观察点，纠正旧库误认其2022年2月直接从证监会期货部调任大商所总经理的偏差（值：`"大连商品交易所"`） | 非日期字段（随所属记录精度） | `supported_observation` | S002@1（正文第3段） | 公开投影："大连商品交易所" | 已写入 `research-data/people/yan-shaoming.json` 并投影至 `generatedResearch.ts` |
| F012@1 | `career/yan-shaoming-dce-vgm-obs-202111/position` | 新增2021年11月任大商所党委委员、副总经理观察点，纠正旧库误认其2022年2月直接从证监会期货部调任大商所总经理的偏差（值：`"党委委员、副总经理"`） | 非日期字段（随所属记录精度） | `supported_observation` | S002@1（正文第3段） | 公开投影："党委委员、副总经理" | 已写入 `research-data/people/yan-shaoming.json` 并投影至 `generatedResearch.ts` |
| F013@1 | `career/yan-shaoming-dce-vgm-obs-202111/rank` | 新增2021年11月任大商所党委委员、副总经理观察点，纠正旧库误认其2022年2月直接从证监会期货部调任大商所总经理的偏差（值：`"副厅局级"`） | 非日期字段（随所属记录精度） | `supported_observation` | S002@1（正文第3段） | 公开投影："副厅局级" | 已写入 `research-data/people/yan-shaoming.json` 并投影至 `generatedResearch.ts` |
| F014@1 | `career/yan-shaoming-dce-vgm-obs-202111/observedAt` | 新增2021年11月任大商所党委委员、副总经理观察点，纠正旧库误认其2022年2月直接从证监会期货部调任大商所总经理的偏差（值：`{"year":2021,"month":11}`） | observedAt={"year":2021,"month":11}（时间点观察） | `supported_observation` | S002@1（正文第3段） | 公开投影：{"year":2021,"month":11} | 已写入 `research-data/people/yan-shaoming.json` 并投影至 `generatedResearch.ts` |

## 推理台账

- 无 `derived` 推理；2021年11月大商所党委委员、副总经理严格按 `supported_observation` 录入。

## 冲突与拒绝记录

| 争议属性 | 说法A及来源 | 说法B及来源 | 是否同一日期／职务口径 | 处理及理由 | 待查链接／搜索式 |
| --- | --- | --- | --- | --- | --- |
| 升任大商所总经理前职务 | 旧库原始记录：2016.05—2022.02 证监会期货部副主任，直接任大商所总经理 | S002 第一财经：曾任证监会期货部副主任；2021年11月已以大商所党委委员、副总经理身份参会发言；2022年2月升任总经理 | 过渡副职经历 | **采信第一财经，补入2021.11大商所副总经理观察点并省略未核实的期货部起止月** | 无需再查 |

## 职业时间线缺口与下一轮

| 缺口 | 已知边界（不强推任期） | 要找的材料 | 下一条完整查询 | 优先级 |
| --- | --- | --- | --- | --- |
| 证监会期货监管部任职起止年份、调任大商所副总经理精确月份及近期活动报道 | 已知曾任期货部副主任、2021.11在任大商所副总、2022.02任大商所总经理 | 期货日报／大商所官网新闻 | `"严绍明" "大连商品交易所" 2025 OR 2026` | 中 |

## 本轮交付与续接

- 新增有效岗位／教育经历／日期属性：补齐现职级“正厅局级”；新增中国证监会期货监管部副主任历史任职与2021年11月大连商品交易所党委委员、副总经理观察点。
- 删除或纠正的错误及依据：纠正旧库虚构2016.05起始月及漏记大商所副总经理过渡阶段的问题。
- 来源对应复查结果：全部已发布事实均绑定 `reading: "read"` 原文定位摘录，无悬空引用，无观察点冒充连续任期起止；重名干扰源已显式归档为 `reading: "wrong_person"`。
- 页面及结构验证（仅实际执行后填写）：已通过 `npm run research:check`、`npm run audit:data`、`npm run test:records`、`npm run test:relations`、`npm run test:research`、`npm run test:safety` 及生产构建 `npm run build` 校验。
- 结束状态：本轮研究完成（核心锚点与主干履历已入库，细分早期缺口转入后续深化队列）。
- 停止条件满足情况：已核清核心身份、现职状态、关键正副局／部级履历与学历锚点，证伪旧库硬伤并留下精确下一查询。
- 上次停在查询ID／来源ID：`Q001` ／ `S003`
- 最后处理事实ID／推理ID及当前阶段：`F014@1` ／ 无 `I` 推理项（已完成工作台导入与公开投影）
- 已证实待入库事实及原因／拟写入字段：无（本轮已证实事实已全部通过 `research:import --write --expect` 入库）。
- 旧模型线索对账完成与剩余项：旧库核心学历与主干履历线索已完成对账；待核候选见上表 `candidate` 项。
- 输入变更后需要重新计算或撤销的推理：无依赖推理受影响。
- 下一步必须先执行的搜索式或原文链接：`"严绍明" "大商所" "副总经理" 2020 OR 2021`
- 尚未访问的高价值来源：《中国证券期货年鉴》历史卷、学位论文库及部分脚本受阻的交易所官网内页（详见渠道覆盖表）。
- 是否需要用户提供合法访问权限或已有资料：否（公开渠道与本地 Google Chrome 浏览器即可继续推进）。
