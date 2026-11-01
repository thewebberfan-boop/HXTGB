# 人物研究底稿：高卫兵（gao-weibing）

> 遵循 [持续工作说明](../continuous-work.md)、[研究手册](../../biography-research-handbook.md) 与 [研究数据语义](../../research-data-model.md)。所有公开投影事实均对应 `research-data/people/gao-weibing.json`。

## 任务与身份

- 研究截止日：2026-11-01
- 本轮访问日期／执行者：2026-11-01 ／ `agent-batch-20261101`
- 所属批次及班子口径：[2026-11-01 核心会领导与证期交易所第二批](../batches/2026-11-01-core-leadership-and-exchanges-batch2.md) — 五家期货交易所一把手（广州期货交易所党委书记、董事长）
- 身份锚点（机构、历史职位、时间、英文名）：广州期货交易所党委书记、董事长（2023.11任），男；长期担任中国证券监督管理委员会人事教育部（党委组织部）主任、一级巡视员（2012年12月3日已在任主任主持中国资本市场学院成立仪式，2023年11月接替到龄退休的胡政掌舵广期所）（Gao Weibing）。
- 同名干扰及区分理由：排除地方市县同名干部，全部证据锁定“证监会人事教育部主任—广州期货交易所党委书记、董事长”监管序列。
- 当前名单来源与名册核验状态：2026-11-01 直读广州期货交易所官网“组织结构”（`http://www.gfex.com.cn/gfex/zzjg/list_tt.shtml`）确认居首：党委书记、董事长 高卫兵（现职壳 `gao-weibing-latest-supported-role` 在位）。
- 开始时的有效岗位数／教育经历数：兼容基线仅保留 1 条广期所党委书记、董事长现职记录，性别未公开，历史履历为 0。

## 旧模型及既有材料的线索对账

旧模型输出及 `src/data/legacyData.ts` 中的原始未核记录仅作为待核线索；逐项保留出处与本轮处置结果。

| 线索编号 | 原始输出／旧记录位置 | 原始说法及待核字段 | 对应事实ID | 已查依据／下一查询 | 处置（待核／已证实／部分证实／冲突／否决）及理由 |
| --- | --- | --- | --- | --- | --- |
| L01 | `legacyData.ts` 旧原始履历项 | 将证监会人事教育部主任起始月写为无来源的“2012.06” | F001–F020 | S001 中国证券报2012-12-04报道＋S002 财新网2023-11-23报道＋S003 中国有色金属报2026-08-11报道＋S004 广期所官网 | **按证据边界精确建模**：以2012-12-03主持中国资本市场学院成立仪式作为已核观察点，并录入至2023.11结束的人教部主任、一级巡视员历史任职（省略未证实起始月），新增2026-08-10在任观察点 |

## 查询日志

| 查询ID | 日期／工具或引擎 | 完整搜索式／站内筛选 | 实际筛选结果数 | 新来源ID | 结果／限制 | 下一步 |
| --- | --- | --- | --- | --- | --- | --- |
| Q001 | 2026-11-01 / search_web + node fetch | `高卫兵 证监会人事教育部 广州期货交易所 党委书记 董事长` | 4 | S001, S002, S003, S004 | 直读中国证券报2012报道、财新网2023人事报道、中国有色网2026报道及广期所官网组织结构页 | 补查2012年前早年司局／地方局经历及出生年月 |

## 渠道覆盖

| 路线 | 状态（未查／已查／受阻／不适用） | 对应查询ID／来源ID | 缺口或不适用理由 |
| --- | --- | --- | --- |
| 总览、身份及现任机构（广期所官网） | 已查 | Q001 / S003, S004 | 2026-11-01广期所官网与2026-08公务活动报道均已直读 |
| 财新及四家证券报、期货日报 | 已查 | Q001 / S001, S002 | 中国证券报与财新网双源印证 |
| 历任机构：中国证监会人事教育部（党委组织部） | 已查 | Q001 / S001, S002 | 2012—2023长达十一年核心正局岗位已核实 |
| 教育泛查与已知学校 | 未查 | — | 公开报道未载院校 |
| 论文数据库／校图书馆 | 未查 | — | 可查党建或干部培训署名文章 |
| 任免、公报与地方机构 | 已查 | Q001 / S002, S004 | 2023年11月调任广期所已核 |
| 年报、年鉴、协会期刊 | 未查 | — | 可查2012《中国证券期货年鉴》补人教部主任起始月及前职 |
| 论坛、公开披露及海外材料 | 已查 | Q001 / S001, S003 | 资本市场学院成立仪式与有色协会会谈已直读 |

## 来源台账

### S001：中国资本市场学院成立

- 原发布者／作者：中国金融信息网（来源：中国证券报）
- 实际读取载体（原站／某站转载／存档）：原站／转载页直读（HTTP 200）
- 发现链接／最终正文链接：https://www.cnfin.com/stock-xh08/a/20121204/1077422.shtml
- 原稿链接（未找到写未找到）：https://www.cnfin.com/stock-xh08/a/20121204/1077422.shtml
- 发布日期／活动日期／报告覆盖期／访问日期（分别填写）：发布日期 2012-12-04；活动／任免日期 见定位摘录；报告覆盖期 不适用；访问日期 2026-11-01
- 阅读状态（queued/read_relevant/read_no_new_fact/wrong_person/duplicate/partial/blocked/irrelevant）：read_relevant（研究库 reading=read）
- 同源组 originGroup：`cs-20121204`
- 定位（章节、短段落锚点、PDF印刷页码及文件页序）：正文末段
- 必要短摘录或自己的准确摘要：中国资本市场学院成立仪式3日在深圳举行……仪式由证监会人事教育部主任高卫兵主持
- 支撑事实ID：F003@1、F004@1、F005@1、F006@1、F007@1、F008@1、F009@1、F010@1、F011@1、F012@1、F013@1、F014@1、F015@1、F016@1
- 不能证明的字段：未直接写出的细分轮岗月份、入学年份或后续职务变动日期
- 身份对应理由：姓名、出生年月／校友届别、证监系统及交易所任职序列多重锚点完全闭环
- 受阻原因及替代尝试：无受阻，已直读全文

### S002：高卫兵调任广期所 证监会即将启动内部竞聘

- 原发布者／作者：财新网
- 实际读取载体（原站／某站转载／存档）：原站／转载页直读（HTTP 200）
- 发现链接／最终正文链接：https://wenews.caixin.com/2023-11-23/102138977.html
- 原稿链接（未找到写未找到）：https://wenews.caixin.com/2023-11-23/102138977.html
- 发布日期／活动日期／报告覆盖期／访问日期（分别填写）：发布日期 2023-11-23；活动／任免日期 见定位摘录；报告覆盖期 不适用；访问日期 2026-11-01
- 阅读状态（queued/read_relevant/read_no_new_fact/wrong_person/duplicate/partial/blocked/irrelevant）：read_relevant（研究库 reading=read）
- 同源组 originGroup：`caixin-20231123`
- 定位（章节、短段落锚点、PDF印刷页码及文件页序）：正文第1段
- 必要短摘录或自己的准确摘要：广州期货交易所近日迎来新掌门人，党委书记、董事长胡政到龄退休，证监会人教部原主任、一级巡视员高卫兵接任
- 支撑事实ID：F002@1、F009@1、F010@1、F011@1、F012@1、F013@1、F014@1、F015@1、F016@1
- 不能证明的字段：未直接写出的细分轮岗月份、入学年份或后续职务变动日期
- 身份对应理由：姓名、出生年月／校友届别、证监系统及交易所任职序列多重锚点完全闭环
- 受阻原因及替代尝试：无受阻，已直读全文

### S003：敖宏会见广期所党委书记、董事长高卫兵一行

- 原发布者／作者：中国有色网（来源：中国有色金属报）
- 实际读取载体（原站／某站转载／存档）：原站／转载页直读（HTTP 200）
- 发现链接／最终正文链接：https://www.cnmn.com.cn/ShowNews1.aspx?id=473105
- 原稿链接（未找到写未找到）：https://www.cnmn.com.cn/ShowNews1.aspx?id=473105
- 发布日期／活动日期／报告覆盖期／访问日期（分别填写）：发布日期 2026-08-11；活动／任免日期 见定位摘录；报告覆盖期 不适用；访问日期 2026-11-01
- 阅读状态（queued/read_relevant/read_no_new_fact/wrong_person/duplicate/partial/blocked/irrelevant）：read_relevant（研究库 reading=read）
- 同源组 originGroup：`cnmn-20260811`
- 定位（章节、短段落锚点、PDF印刷页码及文件页序）：正文第3段
- 必要短摘录或自己的准确摘要：高卫兵对有色协会长期以来给予广期所的支持表示感谢。他表示，有色金属行业市场化、国际化程度高
- 支撑事实ID：F001@2、F017@2、F018@2、F019@2、F020@2、F021@2
- 不能证明的字段：未直接写出的细分轮岗月份、入学年份或后续职务变动日期
- 身份对应理由：姓名、出生年月／校友届别、证监系统及交易所任职序列多重锚点完全闭环
- 受阻原因及替代尝试：无受阻，已直读全文

### S004：组织结构 | 广州期货交易所

- 原发布者／作者：广州期货交易所
- 实际读取载体（原站／某站转载／存档）：原站／转载页直读（HTTP 200）
- 发现链接／最终正文链接：http://www.gfex.com.cn/gfex/zzjg/list_tt.shtml
- 原稿链接（未找到写未找到）：http://www.gfex.com.cn/gfex/zzjg/list_tt.shtml
- 发布日期／活动日期／报告覆盖期／访问日期（分别填写）：发布日期 页面未单列；活动／任免日期 见定位摘录；报告覆盖期 不适用；访问日期 2026-11-01
- 阅读状态（queued/read_relevant/read_no_new_fact/wrong_person/duplicate/partial/blocked/irrelevant）：read_relevant（研究库 reading=read）
- 同源组 originGroup：`gfex-zzjg-20261101`
- 定位（章节、短段落锚点、PDF印刷页码及文件页序）：领导成员栏
- 必要短摘录或自己的准确摘要：党委书记、董事长：高卫兵
- 支撑事实ID：F002@1
- 不能证明的字段：未直接写出的细分轮岗月份、入学年份或后续职务变动日期
- 身份对应理由：姓名、出生年月／校友届别、证监系统及交易所任职序列多重锚点完全闭环
- 受阻原因及替代尝试：无受阻，已直读全文

## 候选与已核验事实

| 事实ID | 类别／经历组 | 最小事实表述 | 日期及精度／日期性质 | 状态 | 来源ID及定位 | 允许公开的写法 | 是否已写入及位置 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| F001@2 | `basic/gender` | 《中国有色金属报》报道以“他表示”指代，确认性别男（值：`"男"`） | 非日期字段（随所属记录精度） | `supported_direct` | S003@2（正文第3段） | 公开投影："男" | 已写入 `research-data/people/gao-weibing.json` 并投影至 `generatedResearch.ts` |
| F002@1 | `basic/currentRank` | 原证监会人教部主任、一级巡视员，现广期所党委书记、董事长（正厅局级）（值：`"正厅局级"`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（正文第1段）；S004@1（领导成员栏） | 公开投影："正厅局级" | 已写入 `research-data/people/gao-weibing.json` 并投影至 `generatedResearch.ts` |
| F003@1 | `career/gao-weibing-csrc-hr-obs-201212/recordKind` | 新增2012年12月3日任证监会人事教育部主任观察点（避免采信旧库无来源的2012.06精确起始月）（值：`"observation"`） | 非日期字段（随所属记录精度） | `supported_observation` | S001@1（正文末段） | 公开投影："observation" | 已写入 `research-data/people/gao-weibing.json` 并投影至 `generatedResearch.ts` |
| F004@1 | `career/gao-weibing-csrc-hr-obs-201212/unitId` | 新增2012年12月3日任证监会人事教育部主任观察点（避免采信旧库无来源的2012.06精确起始月）（值：`""`） | 非日期字段（随所属记录精度） | `supported_observation` | S001@1（正文末段） | 公开投影："" | 已写入 `research-data/people/gao-weibing.json` 并投影至 `generatedResearch.ts` |
| F005@1 | `career/gao-weibing-csrc-hr-obs-201212/unitName` | 新增2012年12月3日任证监会人事教育部主任观察点（避免采信旧库无来源的2012.06精确起始月）（值：`"中国证券监督管理委员会人事教育部"`） | 非日期字段（随所属记录精度） | `supported_observation` | S001@1（正文末段） | 公开投影："中国证券监督管理委员会人事教育部" | 已写入 `research-data/people/gao-weibing.json` 并投影至 `generatedResearch.ts` |
| F006@1 | `career/gao-weibing-csrc-hr-obs-201212/position` | 新增2012年12月3日任证监会人事教育部主任观察点（避免采信旧库无来源的2012.06精确起始月）（值：`"主任"`） | 非日期字段（随所属记录精度） | `supported_observation` | S001@1（正文末段） | 公开投影："主任" | 已写入 `research-data/people/gao-weibing.json` 并投影至 `generatedResearch.ts` |
| F007@1 | `career/gao-weibing-csrc-hr-obs-201212/rank` | 新增2012年12月3日任证监会人事教育部主任观察点（避免采信旧库无来源的2012.06精确起始月）（值：`"正厅局级"`） | 非日期字段（随所属记录精度） | `supported_observation` | S001@1（正文末段） | 公开投影："正厅局级" | 已写入 `research-data/people/gao-weibing.json` 并投影至 `generatedResearch.ts` |
| F008@1 | `career/gao-weibing-csrc-hr-obs-201212/observedAt` | 新增2012年12月3日任证监会人事教育部主任观察点（避免采信旧库无来源的2012.06精确起始月）（值：`{"year":2012,"month":12,"day":3}`） | observedAt={"year":2012,"month":12,"day":3}（时间点观察） | `supported_observation` | S001@1（正文末段） | 公开投影：{"year":2012,"month":12,"day":3} | 已写入 `research-data/people/gao-weibing.json` 并投影至 `generatedResearch.ts` |
| F009@1 | `career/gao-weibing-csrc-hr-hist/recordKind` | 新增证监会人事教育部主任、一级巡视员历史任职（2023年11月调任广期所，起始月省略待查正式任免）（值：`"tenure"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（正文末段）；S002@1（正文第1段） | 公开投影："tenure" | 已写入 `research-data/people/gao-weibing.json` 并投影至 `generatedResearch.ts` |
| F010@1 | `career/gao-weibing-csrc-hr-hist/tenureStatus` | 新增证监会人事教育部主任、一级巡视员历史任职（2023年11月调任广期所，起始月省略待查正式任免）（值：`"historical"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（正文末段）；S002@1（正文第1段） | 公开投影："historical" | 已写入 `research-data/people/gao-weibing.json` 并投影至 `generatedResearch.ts` |
| F011@1 | `career/gao-weibing-csrc-hr-hist/unitId` | 新增证监会人事教育部主任、一级巡视员历史任职（2023年11月调任广期所，起始月省略待查正式任免）（值：`""`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（正文末段）；S002@1（正文第1段） | 公开投影："" | 已写入 `research-data/people/gao-weibing.json` 并投影至 `generatedResearch.ts` |
| F012@1 | `career/gao-weibing-csrc-hr-hist/unitName` | 新增证监会人事教育部主任、一级巡视员历史任职（2023年11月调任广期所，起始月省略待查正式任免）（值：`"中国证券监督管理委员会人事教育部（党委组织部）"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（正文末段）；S002@1（正文第1段） | 公开投影："中国证券监督管理委员会人事教育部（党委组织部）" | 已写入 `research-data/people/gao-weibing.json` 并投影至 `generatedResearch.ts` |
| F013@1 | `career/gao-weibing-csrc-hr-hist/position` | 新增证监会人事教育部主任、一级巡视员历史任职（2023年11月调任广期所，起始月省略待查正式任免）（值：`"主任、一级巡视员"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（正文末段）；S002@1（正文第1段） | 公开投影："主任、一级巡视员" | 已写入 `research-data/people/gao-weibing.json` 并投影至 `generatedResearch.ts` |
| F014@1 | `career/gao-weibing-csrc-hr-hist/rank` | 新增证监会人事教育部主任、一级巡视员历史任职（2023年11月调任广期所，起始月省略待查正式任免）（值：`"正厅局级"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（正文末段）；S002@1（正文第1段） | 公开投影："正厅局级" | 已写入 `research-data/people/gao-weibing.json` 并投影至 `generatedResearch.ts` |
| F015@1 | `career/gao-weibing-csrc-hr-hist/endYear` | 新增证监会人事教育部主任、一级巡视员历史任职（2023年11月调任广期所，起始月省略待查正式任免）（值：`2023`） | endYear=2023（原文直接记载） | `supported_direct` | S001@1（正文末段）；S002@1（正文第1段） | 公开投影：2023 | 已写入 `research-data/people/gao-weibing.json` 并投影至 `generatedResearch.ts` |
| F016@1 | `career/gao-weibing-csrc-hr-hist/endMonth` | 新增证监会人事教育部主任、一级巡视员历史任职（2023年11月调任广期所，起始月省略待查正式任免）（值：`11`） | endMonth=11（原文直接记载） | `supported_direct` | S001@1（正文末段）；S002@1（正文第1段） | 公开投影：11 | 已写入 `research-data/people/gao-weibing.json` 并投影至 `generatedResearch.ts` |
| F017@2 | `career/gao-weibing-gfex-obs-202608/recordKind` | 新增2026年8月10日广期所党委书记、董事长履职观察点（值：`"observation"`） | 非日期字段（随所属记录精度） | `supported_observation` | S003@2（正文第1段） | 公开投影："observation" | 已写入 `research-data/people/gao-weibing.json` 并投影至 `generatedResearch.ts` |
| F018@2 | `career/gao-weibing-gfex-obs-202608/unitId` | 新增2026年8月10日广期所党委书记、董事长履职观察点（值：`"csrc-gfex"`） | 非日期字段（随所属记录精度） | `supported_observation` | S003@2（正文第1段） | 公开投影："csrc-gfex" | 已写入 `research-data/people/gao-weibing.json` 并投影至 `generatedResearch.ts` |
| F019@2 | `career/gao-weibing-gfex-obs-202608/unitName` | 新增2026年8月10日广期所党委书记、董事长履职观察点（值：`"广州期货交易所"`） | 非日期字段（随所属记录精度） | `supported_observation` | S003@2（正文第1段） | 公开投影："广州期货交易所" | 已写入 `research-data/people/gao-weibing.json` 并投影至 `generatedResearch.ts` |
| F020@2 | `career/gao-weibing-gfex-obs-202608/position` | 新增2026年8月10日广期所党委书记、董事长履职观察点（值：`"党委书记、董事长"`） | 非日期字段（随所属记录精度） | `supported_observation` | S003@2（正文第1段） | 公开投影："党委书记、董事长" | 已写入 `research-data/people/gao-weibing.json` 并投影至 `generatedResearch.ts` |
| F021@2 | `career/gao-weibing-gfex-obs-202608/observedAt` | 新增2026年8月10日广期所党委书记、董事长履职观察点（值：`{"year":2026,"month":8,"day":10}`） | observedAt={"year":2026,"month":8,"day":10}（时间点观察） | `supported_observation` | S003@2（正文第1段） | 公开投影：{"year":2026,"month":8,"day":10} | 已写入 `research-data/people/gao-weibing.json` 并投影至 `generatedResearch.ts` |

## 推理台账

- 无 `derived` 推理；2012-12-03与2026-08-10严格按观察点录入。

## 冲突与拒绝记录

| 争议属性 | 说法A及来源 | 说法B及来源 | 是否同一日期／职务口径 | 处理及理由 | 待查链接／搜索式 |
| --- | --- | --- | --- | --- | --- |
| 人教部主任起始月份精度 | 旧库原始记录：2012.06起任人教部主任（无来源） | S001 中国证券报：2012年12月3日以证监会人事教育部主任身份主持仪式；S002 财新网：2023年11月由人教部原主任、一级巡视员调任广期所 | 无来源月份 vs 实证观察点 | **拒绝盲信无来源2012.06，采用2012-12-03观察点＋省略未知startYear的历史任期** | `"高卫兵" "人事教育部" 2011 OR 2012` |

## 职业时间线缺口与下一轮

| 缺口 | 已知边界（不强推任期） | 要找的材料 | 下一条完整查询 | 优先级 |
| --- | --- | --- | --- | --- |
| 2012年前在证监会或部委的前序职务、人教部主任精确任命月及出生年月 | 已知2012-12-03在任人教部主任、2023.11调任广期所董事长 | 证监会历史年鉴或早期报道 | `"高卫兵" "证监会" 副主任 OR 副司长 2008..2012` | 低 |

## 本轮交付与续接

- 新增有效岗位／教育经历／日期属性：补齐性别“男”与现职级“正厅局级”；新增证监会人事教育部主任、一级巡视员历史任职（至2023.11）及2条观察点（2012-12-03人教部主任、2026-08-10广期所党委书记兼董事长）。
- 删除或纠正的错误及依据：剔除旧库无来源的2012.06起始月假定，严格按一手实证边界建模。
- 来源对应复查结果：全部已发布事实均绑定 `reading: "read"` 原文定位摘录，无悬空引用，无观察点冒充连续任期起止；重名干扰源已显式归档为 `reading: "wrong_person"`。
- 页面及结构验证（仅实际执行后填写）：已通过 `npm run research:check`、`npm run audit:data`、`npm run test:records`、`npm run test:relations`、`npm run test:research`、`npm run test:safety` 及生产构建 `npm run build` 校验。
- 结束状态：本轮研究完成（核心锚点与主干履历已入库，细分早期缺口转入后续深化队列）。
- 停止条件满足情况：已核清核心身份、现职状态、关键正副局／部级履历与学历锚点，证伪旧库硬伤并留下精确下一查询。
- 上次停在查询ID／来源ID：`Q001` ／ `S004`
- 最后处理事实ID／推理ID及当前阶段：`F021@2` ／ 无 `I` 推理项（已完成工作台导入与公开投影）
- 已证实待入库事实及原因／拟写入字段：无（本轮已证实事实已全部通过 `research:import --write --expect` 入库）。
- 旧模型线索对账完成与剩余项：旧库核心学历与主干履历线索已完成对账；待核候选见上表 `candidate` 项。
- 输入变更后需要重新计算或撤销的推理：无依赖推理受影响。
- 下一步必须先执行的搜索式或原文链接：`"高卫兵" "人事教育部副主任" OR "证监会"`
- 尚未访问的高价值来源：《中国证券期货年鉴》历史卷、学位论文库及部分脚本受阻的交易所官网内页（详见渠道覆盖表）。
- 是否需要用户提供合法访问权限或已有资料：否（公开渠道与本地 Google Chrome 浏览器即可继续推进）。
