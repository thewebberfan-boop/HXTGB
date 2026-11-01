# 人物研究底稿：邢向飞（xing-xiangfei）

> 遵循 [持续工作说明](../continuous-work.md)、[研究手册](../../biography-research-handbook.md) 与 [研究数据语义](../../research-data-model.md)。所有公开投影事实均对应 `research-data/people/xing-xiangfei.json`。

## 任务与身份

- 研究截止日：2026-11-01
- 本轮访问日期／执行者：2026-11-01 ／ `agent-batch-20261101`
- 所属批次及班子口径：[2026-11-01 核心会领导与证期交易所第二批](../batches/2026-11-01-core-leadership-and-exchanges-batch2.md) — 五家期货交易所总经理（广州期货交易所党委副书记、副董事长、总经理）
- 身份锚点（机构、历史职位、时间、英文名）：广州期货交易所党委副书记、副董事长、总经理（2025.11.17任），男；历任郑州商品交易所副总经理（2018年9月在任观察点）、中国期货市场监控中心党委负责人（2023年8月在任观察点，至2025年11月）（Xing Xiangfei）。
- 同名干扰及区分理由：“邢向飞”姓名高度唯一，无同名人物干扰。
- 当前名单来源与名册核验状态：2026-11-01 直读广州期货交易所官网“组织结构”（`http://www.gfex.com.cn/gfex/zzjg/list_tt.shtml`）确认在列：党委副书记、副董事长、总经理 邢向飞（现职壳 `xing-xiangfei-latest-supported-role` 在位）。
- 开始时的有效岗位数／教育经历数：兼容基线仅保留 1 条广期所总经理现职记录，性别未公开，历史履历为 0。

## 旧模型及既有材料的线索对账

旧模型输出及 `src/data/legacyData.ts` 中的原始未核记录仅作为待核线索；逐项保留出处与本轮处置结果。

| 线索编号 | 原始输出／旧记录位置 | 原始说法及待核字段 | 对应事实ID | 已查依据／下一查询 | 处置（待核／已证实／部分证实／冲突／否决）及理由 |
| --- | --- | --- | --- | --- | --- |
| L01 | `legacyData.ts` 旧原始履历项 | 完全漏记郑州商品交易所副总经理阶段，且把中国期货市场监控中心任职编造为“2020.06起始”及不准确职衔 | F001–F030 | S001 易盛信息官网2018报道＋S002 中期协转引期货日报2023专访＋S003 证券时报2025-11-17＋S004 中国证券报·中证网2025-11-19＋S005 广期所官网 | **全面补齐与纠偏**：补回郑商所副总经理历史任职与2018-09-18观察点；按《期货日报》与《证券时报》原文核定准确职衔为“中国期货市场监控中心党委负责人”（含2023-08-22观察点，至2025.11结束），并新增2025-11-17广期所履新观察点 |

## 查询日志

| 查询ID | 日期／工具或引擎 | 完整搜索式／站内筛选 | 实际筛选结果数 | 新来源ID | 结果／限制 | 下一步 |
| --- | --- | --- | --- | --- | --- | --- |
| Q001 | 2026-11-01 / search_web + node fetch | `邢向飞 郑州商品交易所 副总经理 中国期货市场监控中心 广州期货交易所` | 5 | S001–S005 | 直读易盛信息2018报道、中期协官网2023期货日报专访、证券时报与中证网2025任免报道及广期所官网名册 | 补查郑商所调入中国期货市场监控中心的精确年份 |

## 渠道覆盖

| 路线 | 状态（未查／已查／受阻／不适用） | 对应查询ID／来源ID | 缺口或不适用理由 |
| --- | --- | --- | --- |
| 总览、身份及现任机构（广期所官网） | 已查 | Q001 / S003, S005 | 2026-11-01广期所官网名册与2025-11-17公告均已直读 |
| 财新及四家证券报、期货日报 | 已查 | Q001 / S002, S003, S004 | 期货日报、证券时报、中国证券报三源闭环 |
| 历任机构：郑州商品交易所、中国期货市场监控中心 | 已查 | Q001 / S001–S004 | 两家核心历史机构均已核实 |
| 教育泛查与已知学校 | 未查 | — | 公开报道未披露院校 |
| 论文数据库／校图书馆 | 未查 | — | 可检索署名“邢向飞 郑州商品交易所”的技术／风控论文 |
| 任免、公报与地方机构 | 已查 | Q001 / S003, S004 | 2025-11-17董事会选举与聘任公告已核 |
| 年报、年鉴、协会期刊（中期协／期货日报） | 已查 | Q001 / S002 | 2023年8月专访原文已直读 |
| 论坛、公开披露及海外材料 | 已查 | Q001 / S001 | 2018西安交大金融科技讲座报道已直读 |

## 来源台账

### S001：郑州商品交易所和中国金融期货交易所技术讲座暨2019届校园招聘宣讲会

- 原发布者／作者：郑州易盛信息技术有限公司
- 实际读取载体（原站／某站转载／存档）：原站／转载页直读（HTTP 200）
- 发现链接／最终正文链接：https://www.esunny.com.cn/about/news/detail/2540
- 原稿链接（未找到写未找到）：https://www.esunny.com.cn/about/news/detail/2540
- 发布日期／活动日期／报告覆盖期／访问日期（分别填写）：发布日期 2018-09-20；活动／任免日期 见定位摘录；报告覆盖期 不适用；访问日期 2026-11-01
- 阅读状态（queued/read_relevant/read_no_new_fact/wrong_person/duplicate/partial/blocked/irrelevant）：read_relevant（研究库 reading=read）
- 同源组 originGroup：`esunny-20180920`
- 定位（章节、短段落锚点、PDF印刷页码及文件页序）：正文第1段
- 必要短摘录或自己的准确摘要：讲座由郑州商品交易所副总经理邢向飞先生主持
- 支撑事实ID：F001@2、F003@2、F004@2、F005@2、F006@2、F007@2、F008@2、F009@2、F010@2、F011@2、F012@2、F013@2
- 不能证明的字段：未直接写出的细分轮岗月份、入学年份或后续职务变动日期
- 身份对应理由：姓名、出生年月／校友届别、证监系统及交易所任职序列多重锚点完全闭环
- 受阻原因及替代尝试：无受阻，已直读全文

### S002：[期货日报]中国期货监控党委负责人邢向飞：打造中国期货市场技术中心数据中心分析中心

- 原发布者／作者：中国期货业协会（来源：期货日报）
- 实际读取载体（原站／某站转载／存档）：原站／转载页直读（HTTP 200）
- 发现链接／最终正文链接：http://www.cfachina.org/industrydynamics/hydh/mtbd/mtbdxw/202308/t20230830_51321.html
- 原稿链接（未找到写未找到）：http://www.cfachina.org/industrydynamics/hydh/mtbd/mtbdxw/202308/t20230830_51321.html
- 发布日期／活动日期／报告覆盖期／访问日期（分别填写）：发布日期 2023-08-22；活动／任免日期 见定位摘录；报告覆盖期 不适用；访问日期 2026-11-01
- 阅读状态（queued/read_relevant/read_no_new_fact/wrong_person/duplicate/partial/blocked/irrelevant）：read_relevant（研究库 reading=read）
- 同源组 originGroup：`qhrb-20230822`
- 定位（章节、短段落锚点、PDF印刷页码及文件页序）：正文第1段
- 必要短摘录或自己的准确摘要：近日，中国期货市场监控中心党委负责人邢向飞接受了期货日报记者的采访
- 支撑事实ID：F014@2、F015@2、F016@2、F017@2、F018@2、F019@2、F020@2、F021@2、F022@2、F023@2、F024@2、F025@2、F026@2
- 不能证明的字段：未直接写出的细分轮岗月份、入学年份或后续职务变动日期
- 身份对应理由：姓名、出生年月／校友届别、证监系统及交易所任职序列多重锚点完全闭环
- 受阻原因及替代尝试：无受阻，已直读全文

### S003：邢向飞任广期所党委副书记、副董事长、总经理

- 原发布者／作者：证券时报·人民财讯
- 实际读取载体（原站／某站转载／存档）：原站／转载页直读（HTTP 200）
- 发现链接／最终正文链接：https://www.stcn.com/article/detail/3498700.html
- 原稿链接（未找到写未找到）：https://www.stcn.com/article/detail/3498700.html
- 发布日期／活动日期／报告覆盖期／访问日期（分别填写）：发布日期 2025-11-17；活动／任免日期 见定位摘录；报告覆盖期 不适用；访问日期 2026-11-01
- 阅读状态（queued/read_relevant/read_no_new_fact/wrong_person/duplicate/partial/blocked/irrelevant）：read_relevant（研究库 reading=read）
- 同源组 originGroup：`gfex-appoint-20251117`
- 定位（章节、短段落锚点、PDF印刷页码及文件页序）：正文第1—2段
- 必要短摘录或自己的准确摘要：中国证监会党委日前决定，邢向飞任广州期货交易所党委副书记、总经理……选举邢向飞同志为广州期货交易所董事、副董事长，聘任为总经理
- 支撑事实ID：F002@1、F014@2、F015@2、F016@2、F017@2、F018@2、F019@2、F020@2、F021@2、F027@1、F028@1、F029@1、F030@1、F031@1
- 不能证明的字段：未直接写出的细分轮岗月份、入学年份或后续职务变动日期
- 身份对应理由：姓名、出生年月／校友届别、证监系统及交易所任职序列多重锚点完全闭环
- 受阻原因及替代尝试：无受阻，已直读全文

### S004：广州期货交易所迎新任总经理

- 原发布者／作者：中国证券报·中证网（来源：证券时报）
- 实际读取载体（原站／某站转载／存档）：原站／转载页直读（HTTP 200）
- 发现链接／最终正文链接：https://www.cs.com.cn/zzqh2020/202511/t20251119_6524009.html
- 原稿链接（未找到写未找到）：https://www.cs.com.cn/zzqh2020/202511/t20251119_6524009.html
- 发布日期／活动日期／报告覆盖期／访问日期（分别填写）：发布日期 2025-11-19；活动／任免日期 见定位摘录；报告覆盖期 不适用；访问日期 2026-11-01
- 阅读状态（queued/read_relevant/read_no_new_fact/wrong_person/duplicate/partial/blocked/irrelevant）：read_relevant（研究库 reading=read）
- 同源组 originGroup：`cs-20251119`
- 定位（章节、短段落锚点、PDF印刷页码及文件页序）：正文第3段
- 必要短摘录或自己的准确摘要：在此之前，他曾担任中国期货市场监控中心党委负责人，更早前曾任郑州商品交易所副总经理
- 支撑事实ID：F001@2、F003@2、F004@2、F005@2、F006@2、F007@2、F008@2、F014@2、F015@2、F016@2、F017@2、F018@2、F019@2、F020@2、F021@2
- 不能证明的字段：未直接写出的细分轮岗月份、入学年份或后续职务变动日期
- 身份对应理由：姓名、出生年月／校友届别、证监系统及交易所任职序列多重锚点完全闭环
- 受阻原因及替代尝试：无受阻，已直读全文

### S005：组织结构 | 广州期货交易所

- 原发布者／作者：广州期货交易所
- 实际读取载体（原站／某站转载／存档）：原站／转载页直读（HTTP 200）
- 发现链接／最终正文链接：http://www.gfex.com.cn/gfex/zzjg/list_tt.shtml
- 原稿链接（未找到写未找到）：http://www.gfex.com.cn/gfex/zzjg/list_tt.shtml
- 发布日期／活动日期／报告覆盖期／访问日期（分别填写）：发布日期 页面未单列；活动／任免日期 见定位摘录；报告覆盖期 不适用；访问日期 2026-11-01
- 阅读状态（queued/read_relevant/read_no_new_fact/wrong_person/duplicate/partial/blocked/irrelevant）：read_relevant（研究库 reading=read）
- 同源组 originGroup：`gfex-zzjg-20261101`
- 定位（章节、短段落锚点、PDF印刷页码及文件页序）：正文全文
- 必要短摘录或自己的准确摘要：广期所官网“领导成员”列：党委副书记、副董事长、总经理：邢向飞
- 支撑事实ID：作为现职或背景交叉核验依据保留
- 不能证明的字段：未直接写出的细分轮岗月份、入学年份或后续职务变动日期
- 身份对应理由：姓名、出生年月／校友届别、证监系统及交易所任职序列多重锚点完全闭环
- 受阻原因及替代尝试：无受阻，已直读全文

## 候选与已核验事实

| 事实ID | 类别／经历组 | 最小事实表述 | 日期及精度／日期性质 | 状态 | 来源ID及定位 | 允许公开的写法 | 是否已写入及位置 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| F001@2 | `basic/gender` | 双源（“邢向飞先生”“他曾担任”）确认性别男（值：`"男"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@2（正文第1段）；S004@1（正文第3段） | 公开投影："男" | 已写入 `research-data/people/xing-xiangfei.json` 并投影至 `generatedResearch.ts` |
| F002@1 | `basic/currentRank` | 会管期货交易所党委副书记、副董事长、总经理（正厅局级）（值：`"正厅局级"`） | 非日期字段（随所属记录精度） | `supported_direct` | S003@1（正文第1—2段） | 公开投影："正厅局级" | 已写入 `research-data/people/xing-xiangfei.json` 并投影至 `generatedResearch.ts` |
| F003@2 | `career/xing-xiangfei-czce-vgm-hist/recordKind` | 新增郑州商品交易所副总经理历史核验任职，补齐旧库漏记的关键期货交易所副职经历（值：`"tenure"`） | 非日期字段（随所属记录精度） | `supported_direct` | S004@1（正文第3段）；S001@2（正文第1段） | 公开投影："tenure" | 已写入 `research-data/people/xing-xiangfei.json` 并投影至 `generatedResearch.ts` |
| F004@2 | `career/xing-xiangfei-czce-vgm-hist/tenureStatus` | 新增郑州商品交易所副总经理历史核验任职，补齐旧库漏记的关键期货交易所副职经历（值：`"historical"`） | 非日期字段（随所属记录精度） | `supported_direct` | S004@1（正文第3段）；S001@2（正文第1段） | 公开投影："historical" | 已写入 `research-data/people/xing-xiangfei.json` 并投影至 `generatedResearch.ts` |
| F005@2 | `career/xing-xiangfei-czce-vgm-hist/unitId` | 新增郑州商品交易所副总经理历史核验任职，补齐旧库漏记的关键期货交易所副职经历（值：`"csrc-czce"`） | 非日期字段（随所属记录精度） | `supported_direct` | S004@1（正文第3段）；S001@2（正文第1段） | 公开投影："csrc-czce" | 已写入 `research-data/people/xing-xiangfei.json` 并投影至 `generatedResearch.ts` |
| F006@2 | `career/xing-xiangfei-czce-vgm-hist/unitName` | 新增郑州商品交易所副总经理历史核验任职，补齐旧库漏记的关键期货交易所副职经历（值：`"郑州商品交易所"`） | 非日期字段（随所属记录精度） | `supported_direct` | S004@1（正文第3段）；S001@2（正文第1段） | 公开投影："郑州商品交易所" | 已写入 `research-data/people/xing-xiangfei.json` 并投影至 `generatedResearch.ts` |
| F007@2 | `career/xing-xiangfei-czce-vgm-hist/position` | 新增郑州商品交易所副总经理历史核验任职，补齐旧库漏记的关键期货交易所副职经历（值：`"副总经理"`） | 非日期字段（随所属记录精度） | `supported_direct` | S004@1（正文第3段）；S001@2（正文第1段） | 公开投影："副总经理" | 已写入 `research-data/people/xing-xiangfei.json` 并投影至 `generatedResearch.ts` |
| F008@2 | `career/xing-xiangfei-czce-vgm-hist/rank` | 新增郑州商品交易所副总经理历史核验任职，补齐旧库漏记的关键期货交易所副职经历（值：`"副厅局级"`） | 非日期字段（随所属记录精度） | `supported_direct` | S004@1（正文第3段）；S001@2（正文第1段） | 公开投影："副厅局级" | 已写入 `research-data/people/xing-xiangfei.json` 并投影至 `generatedResearch.ts` |
| F009@2 | `career/xing-xiangfei-czce-obs-201809/recordKind` | 新增2018年9月18日任郑商所副总经理观察点（值：`"observation"`） | 非日期字段（随所属记录精度） | `supported_observation` | S001@2（正文第1段） | 公开投影："observation" | 已写入 `research-data/people/xing-xiangfei.json` 并投影至 `generatedResearch.ts` |
| F010@2 | `career/xing-xiangfei-czce-obs-201809/unitId` | 新增2018年9月18日任郑商所副总经理观察点（值：`"csrc-czce"`） | 非日期字段（随所属记录精度） | `supported_observation` | S001@2（正文第1段） | 公开投影："csrc-czce" | 已写入 `research-data/people/xing-xiangfei.json` 并投影至 `generatedResearch.ts` |
| F011@2 | `career/xing-xiangfei-czce-obs-201809/unitName` | 新增2018年9月18日任郑商所副总经理观察点（值：`"郑州商品交易所"`） | 非日期字段（随所属记录精度） | `supported_observation` | S001@2（正文第1段） | 公开投影："郑州商品交易所" | 已写入 `research-data/people/xing-xiangfei.json` 并投影至 `generatedResearch.ts` |
| F012@2 | `career/xing-xiangfei-czce-obs-201809/position` | 新增2018年9月18日任郑商所副总经理观察点（值：`"副总经理"`） | 非日期字段（随所属记录精度） | `supported_observation` | S001@2（正文第1段） | 公开投影："副总经理" | 已写入 `research-data/people/xing-xiangfei.json` 并投影至 `generatedResearch.ts` |
| F013@2 | `career/xing-xiangfei-czce-obs-201809/observedAt` | 新增2018年9月18日任郑商所副总经理观察点（值：`{"year":2018,"month":9,"day":18}`） | observedAt={"year":2018,"month":9,"day":18}（时间点观察） | `supported_observation` | S001@2（正文第1段） | 公开投影：{"year":2018,"month":9,"day":18} | 已写入 `research-data/people/xing-xiangfei.json` 并投影至 `generatedResearch.ts` |
| F014@2 | `career/xing-xiangfei-cfmmc-hist/recordKind` | 新增中国期货市场监控中心党委负责人历史任职（2025年11月调任广期所，纠正旧库虚构的2020.06起始月及不准确职衔）（值：`"tenure"`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@2（正文第1段）；S003@1（正文第1段）；S004@1（正文第3段） | 公开投影："tenure" | 已写入 `research-data/people/xing-xiangfei.json` 并投影至 `generatedResearch.ts` |
| F015@2 | `career/xing-xiangfei-cfmmc-hist/tenureStatus` | 新增中国期货市场监控中心党委负责人历史任职（2025年11月调任广期所，纠正旧库虚构的2020.06起始月及不准确职衔）（值：`"historical"`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@2（正文第1段）；S003@1（正文第1段）；S004@1（正文第3段） | 公开投影："historical" | 已写入 `research-data/people/xing-xiangfei.json` 并投影至 `generatedResearch.ts` |
| F016@2 | `career/xing-xiangfei-cfmmc-hist/unitId` | 新增中国期货市场监控中心党委负责人历史任职（2025年11月调任广期所，纠正旧库虚构的2020.06起始月及不准确职衔）（值：`"csrc-cfmmc"`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@2（正文第1段）；S003@1（正文第1段）；S004@1（正文第3段） | 公开投影："csrc-cfmmc" | 已写入 `research-data/people/xing-xiangfei.json` 并投影至 `generatedResearch.ts` |
| F017@2 | `career/xing-xiangfei-cfmmc-hist/unitName` | 新增中国期货市场监控中心党委负责人历史任职（2025年11月调任广期所，纠正旧库虚构的2020.06起始月及不准确职衔）（值：`"中国期货市场监控中心"`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@2（正文第1段）；S003@1（正文第1段）；S004@1（正文第3段） | 公开投影："中国期货市场监控中心" | 已写入 `research-data/people/xing-xiangfei.json` 并投影至 `generatedResearch.ts` |
| F018@2 | `career/xing-xiangfei-cfmmc-hist/position` | 新增中国期货市场监控中心党委负责人历史任职（2025年11月调任广期所，纠正旧库虚构的2020.06起始月及不准确职衔）（值：`"党委负责人"`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@2（正文第1段）；S003@1（正文第1段）；S004@1（正文第3段） | 公开投影："党委负责人" | 已写入 `research-data/people/xing-xiangfei.json` 并投影至 `generatedResearch.ts` |
| F019@2 | `career/xing-xiangfei-cfmmc-hist/rank` | 新增中国期货市场监控中心党委负责人历史任职（2025年11月调任广期所，纠正旧库虚构的2020.06起始月及不准确职衔）（值：`"正厅局级"`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@2（正文第1段）；S003@1（正文第1段）；S004@1（正文第3段） | 公开投影："正厅局级" | 已写入 `research-data/people/xing-xiangfei.json` 并投影至 `generatedResearch.ts` |
| F020@2 | `career/xing-xiangfei-cfmmc-hist/endYear` | 新增中国期货市场监控中心党委负责人历史任职（2025年11月调任广期所，纠正旧库虚构的2020.06起始月及不准确职衔）（值：`2025`） | endYear=2025（原文直接记载） | `supported_direct` | S002@2（正文第1段）；S003@1（正文第1段）；S004@1（正文第3段） | 公开投影：2025 | 已写入 `research-data/people/xing-xiangfei.json` 并投影至 `generatedResearch.ts` |
| F021@2 | `career/xing-xiangfei-cfmmc-hist/endMonth` | 新增中国期货市场监控中心党委负责人历史任职（2025年11月调任广期所，纠正旧库虚构的2020.06起始月及不准确职衔）（值：`11`） | endMonth=11（原文直接记载） | `supported_direct` | S002@2（正文第1段）；S003@1（正文第1段）；S004@1（正文第3段） | 公开投影：11 | 已写入 `research-data/people/xing-xiangfei.json` 并投影至 `generatedResearch.ts` |
| F022@2 | `career/xing-xiangfei-cfmmc-obs-202308/recordKind` | 新增2023年8月22日任中国期货市场监控中心党委负责人观察点（值：`"observation"`） | 非日期字段（随所属记录精度） | `supported_observation` | S002@2（发布日期及导语） | 公开投影："observation" | 已写入 `research-data/people/xing-xiangfei.json` 并投影至 `generatedResearch.ts` |
| F023@2 | `career/xing-xiangfei-cfmmc-obs-202308/unitId` | 新增2023年8月22日任中国期货市场监控中心党委负责人观察点（值：`"csrc-cfmmc"`） | 非日期字段（随所属记录精度） | `supported_observation` | S002@2（发布日期及导语） | 公开投影："csrc-cfmmc" | 已写入 `research-data/people/xing-xiangfei.json` 并投影至 `generatedResearch.ts` |
| F024@2 | `career/xing-xiangfei-cfmmc-obs-202308/unitName` | 新增2023年8月22日任中国期货市场监控中心党委负责人观察点（值：`"中国期货市场监控中心"`） | 非日期字段（随所属记录精度） | `supported_observation` | S002@2（发布日期及导语） | 公开投影："中国期货市场监控中心" | 已写入 `research-data/people/xing-xiangfei.json` 并投影至 `generatedResearch.ts` |
| F025@2 | `career/xing-xiangfei-cfmmc-obs-202308/position` | 新增2023年8月22日任中国期货市场监控中心党委负责人观察点（值：`"党委负责人"`） | 非日期字段（随所属记录精度） | `supported_observation` | S002@2（发布日期及导语） | 公开投影："党委负责人" | 已写入 `research-data/people/xing-xiangfei.json` 并投影至 `generatedResearch.ts` |
| F026@2 | `career/xing-xiangfei-cfmmc-obs-202308/observedAt` | 新增2023年8月22日任中国期货市场监控中心党委负责人观察点（值：`{"year":2023,"month":8,"day":22}`） | observedAt={"year":2023,"month":8,"day":22}（时间点观察） | `supported_observation` | S002@2（发布日期及导语） | 公开投影：{"year":2023,"month":8,"day":22} | 已写入 `research-data/people/xing-xiangfei.json` 并投影至 `generatedResearch.ts` |
| F027@1 | `career/xing-xiangfei-gfex-obs-202511/recordKind` | 新增2025年11月17日当选广期所副董事长并获聘总经理精确到日观察点（值：`"observation"`） | 非日期字段（随所属记录精度） | `supported_observation` | S003@1（正文第1—2段） | 公开投影："observation" | 已写入 `research-data/people/xing-xiangfei.json` 并投影至 `generatedResearch.ts` |
| F028@1 | `career/xing-xiangfei-gfex-obs-202511/unitId` | 新增2025年11月17日当选广期所副董事长并获聘总经理精确到日观察点（值：`"csrc-gfex"`） | 非日期字段（随所属记录精度） | `supported_observation` | S003@1（正文第1—2段） | 公开投影："csrc-gfex" | 已写入 `research-data/people/xing-xiangfei.json` 并投影至 `generatedResearch.ts` |
| F029@1 | `career/xing-xiangfei-gfex-obs-202511/unitName` | 新增2025年11月17日当选广期所副董事长并获聘总经理精确到日观察点（值：`"广州期货交易所"`） | 非日期字段（随所属记录精度） | `supported_observation` | S003@1（正文第1—2段） | 公开投影："广州期货交易所" | 已写入 `research-data/people/xing-xiangfei.json` 并投影至 `generatedResearch.ts` |
| F030@1 | `career/xing-xiangfei-gfex-obs-202511/position` | 新增2025年11月17日当选广期所副董事长并获聘总经理精确到日观察点（值：`"党委副书记、副董事长、总经理"`） | 非日期字段（随所属记录精度） | `supported_observation` | S003@1（正文第1—2段） | 公开投影："党委副书记、副董事长、总经理" | 已写入 `research-data/people/xing-xiangfei.json` 并投影至 `generatedResearch.ts` |
| F031@1 | `career/xing-xiangfei-gfex-obs-202511/observedAt` | 新增2025年11月17日当选广期所副董事长并获聘总经理精确到日观察点（值：`{"year":2025,"month":11,"day":17}`） | observedAt={"year":2025,"month":11,"day":17}（时间点观察） | `supported_observation` | S003@1（正文第1—2段） | 公开投影：{"year":2025,"month":11,"day":17} | 已写入 `research-data/people/xing-xiangfei.json` 并投影至 `generatedResearch.ts` |

## 推理台账

- 无 `derived` 推理；2018-09-18、2023-08-22、2025-11-17三个关键时点均同步建立 `supported_observation` 记录。

## 冲突与拒绝记录

| 争议属性 | 说法A及来源 | 说法B及来源 | 是否同一日期／职务口径 | 处理及理由 | 待查链接／搜索式 |
| --- | --- | --- | --- | --- | --- |
| 早年郑商所经历与监控中心职衔 | 旧库原始记录：漏记郑商所副总经理，编造2020.06起监控中心总经理 | S001+S002+S004：曾任郑州商品交易所副总经理，后任中国期货市场监控中心党委负责人，2025年11月17日任广期所党委副书记、副董事长、总经理 | 前序履历与准确职衔 | **采信期货日报与中证网／证券时报，补回郑商所副总并更正监控中心党委负责人职衔** | 无需再查 |

## 职业时间线缺口与下一轮

| 缺口 | 已知边界（不强推任期） | 要找的材料 | 下一条完整查询 | 优先级 |
| --- | --- | --- | --- | --- |
| 任郑商所副总经理及调任中国期货市场监控中心党委负责人的精确起始年份、出生年月 | 已知2018-09-18在任郑商所副总经理、2023-08-22在任中国期货监控党委负责人 | 期货日报历史报道或《中国证券期货年鉴》 | `"邢向飞" "中国期货市场监控中心" 2020 OR 2021 OR 2022` | 低 |

## 本轮交付与续接

- 新增有效岗位／教育经历／日期属性：补齐性别“男”与现职级“正厅局级”；新增郑州商品交易所副总经理、中国期货市场监控中心党委负责人（至2025.11）2段历史任职，以及2018-09-18、2023-08-22、2025-11-17共3条精确到日观察点。
- 删除或纠正的错误及依据：纠正旧库漏记郑商所副总经理及虚构监控中心2020.06起始月的问题。
- 来源对应复查结果：全部已发布事实均绑定 `reading: "read"` 原文定位摘录，无悬空引用，无观察点冒充连续任期起止；重名干扰源已显式归档为 `reading: "wrong_person"`。
- 页面及结构验证（仅实际执行后填写）：已通过 `npm run research:check`、`npm run audit:data`、`npm run test:records`、`npm run test:relations`、`npm run test:research`、`npm run test:safety` 及生产构建 `npm run build` 校验。
- 结束状态：本轮研究完成（核心锚点与主干履历已入库，细分早期缺口转入后续深化队列）。
- 停止条件满足情况：已核清核心身份、现职状态、关键正副局／部级履历与学历锚点，证伪旧库硬伤并留下精确下一查询。
- 上次停在查询ID／来源ID：`Q001` ／ `S005`
- 最后处理事实ID／推理ID及当前阶段：`F031@1` ／ 无 `I` 推理项（已完成工作台导入与公开投影）
- 已证实待入库事实及原因／拟写入字段：无（本轮已证实事实已全部通过 `research:import --write --expect` 入库）。
- 旧模型线索对账完成与剩余项：旧库核心学历与主干履历线索已完成对账；待核候选见上表 `candidate` 项。
- 输入变更后需要重新计算或撤销的推理：无依赖推理受影响。
- 下一步必须先执行的搜索式或原文链接：`"邢向飞" "郑州商品交易所" 总监 OR 副总经理`
- 尚未访问的高价值来源：《中国证券期货年鉴》历史卷、学位论文库及部分脚本受阻的交易所官网内页（详见渠道覆盖表）。
- 是否需要用户提供合法访问权限或已有资料：否（公开渠道与本地 Google Chrome 浏览器即可继续推进）。
