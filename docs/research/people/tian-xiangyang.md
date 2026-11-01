# 人物研究底稿：田向阳（tian-xiangyang）

> 遵循 [持续工作说明](../continuous-work.md)、[研究手册](../../biography-research-handbook.md) 与 [研究数据语义](../../research-data-model.md)。所有公开投影事实均对应 `research-data/people/tian-xiangyang.json`。

## 任务与身份

- 研究截止日：2026-11-01
- 本轮访问日期／执行者：2026-11-01 ／ `agent-batch-20261101`
- 所属批次及班子口径：[2026-11-01 核心会领导与证期交易所第二批](../batches/2026-11-01-core-leadership-and-exchanges-batch2.md) — 五家期货交易所一把手（上海期货交易所党委书记、理事长）
- 身份锚点（机构、历史职位、时间、英文名）：上海期货交易所党委书记、理事长（2022.09任），男；历任深圳证监局副局长、中国证监会期货监管二部副主任、期货监管部巡视员／副主任、山东证监局局长（缺口候选待补一手）、浙江证监局党委书记兼局长（2019—2022.09）、上期所下属上海国际能源交易中心董事长（Tian Xiangyang）。
- 同名干扰及区分理由：排除医疗与地方同名人物，全部证据锁定“深圳局—期货部—浙江局—上期所／上期能源”监管链条。
- 当前名单来源与名册核验状态：2026-11-01 直读上海期货交易所官网“组织架构”（`https://www.shfe.com.cn/abouts/shfe/organizational/`）确认居首：党委书记、理事长 田向阳（现职壳 `tian-xiangyang-verified-current` 在位）。
- 开始时的有效岗位数／教育经历数：兼容基线含浙江证监局局长（2019—2022）＋上期所党委书记、理事长现职。

## 旧模型及既有材料的线索对账

旧模型输出及 `src/data/legacyData.ts` 中的原始未核记录仅作为待核线索；逐项保留出处与本轮处置结果。

| 线索编号 | 原始输出／旧记录位置 | 原始说法及待核字段 | 对应事实ID | 已查依据／下一查询 | 处置（待核／已证实／部分证实／冲突／否决）及理由 |
| --- | --- | --- | --- | --- | --- |
| L01 | `legacyData.ts` 旧原始履历项 | 把早年写成2008—2015一直在期货部任处长／副主任，漏记深圳证监局副局长阶段 | F001–F038 | S001 第一财经2016报道＋S002 澎湃新闻2022报道＋S003 证券时报＋S004 上期能源官网＋S005 上期所薪酬表 | **核实重构**：补回深圳证监局副局长、期货监管二部副主任、期货监管部巡视员／副主任（含2016-05-28在任观察点），升级浙江证监局任期并新增2024-05-28兼任上期能源董事长观察点 |

## 查询日志

| 查询ID | 日期／工具或引擎 | 完整搜索式／站内筛选 | 实际筛选结果数 | 新来源ID | 结果／限制 | 下一步 |
| --- | --- | --- | --- | --- | --- | --- |
| Q001 | 2026-11-01 / search_web + node fetch | `田向阳 深圳证监局 期货监管部 浙江证监局 上海期货交易所 理事长` | 6 | S001, S002, S003, S004, S005, S006 | 直读第一财经、澎湃新闻、证券时报、上期能源官网、上期所2022薪酬表及上期所2026官网组织架构页 | 补查山东证监局任职一手公告及出生年月 |

## 渠道覆盖

| 路线 | 状态（未查／已查／受阻／不适用） | 对应查询ID／来源ID | 缺口或不适用理由 |
| --- | --- | --- | --- |
| 总览、身份及现任机构（上期所官网） | 已查 | Q001 / S005, S006 | 上期所官网组织架构与负责人薪酬表均已直读 |
| 财新及四家证券报、期货日报 | 已查 | Q001 / S001, S002, S003 | 证券时报、第一财经、澎湃新闻三源印证 |
| 历任机构：深圳证监局、证监会期货二部／期货部、浙江证监局、上期能源 | 已查 | Q001 / S001–S005 | 四家核心机构均有一手或权威报道支撑 |
| 教育泛查与已知学校 | 未查 | — | 公开报道未披露毕业院校 |
| 论文数据库／校图书馆 | 未查 | — | 可检索署名“田向阳 期货”的监管文章 |
| 任免、公报与地方机构 | 已查 | Q001 / S002, S003, S005 | 2022年9月调任上期所党委书记、理事长已由薪酬表（202209）与公告双源锁定 |
| 年报、年鉴、协会期刊 | 未查 | — | 可补查2017—2019是否任山东证监局局长的一手来源 |
| 论坛、公开披露及海外材料 | 已查 | Q001 / S001, S004 | 上海衍生品市场论坛致辞已直读 |

## 来源台账

### S001：浙江证监局党委书记、局长田向阳：守初心担使命 为实体经济提供强大资本动能

- 原发布者／作者：证券时报网（手机新浪网转载）
- 实际读取载体（原站／某站转载／存档）：原站／转载页直读（HTTP 200）
- 发现链接／最终正文链接：https://finance.sina.cn/stock/ywgg/2021-06-28/detail-ikqcfnca3614482.d.html
- 原稿链接（未找到写未找到）：https://finance.sina.cn/stock/ywgg/2021-06-28/detail-ikqcfnca3614482.d.html
- 发布日期／活动日期／报告覆盖期／访问日期（分别填写）：发布日期 2021-06-28；活动／任免日期 见定位摘录；报告覆盖期 不适用；访问日期 2026-11-01
- 阅读状态（queued/read_relevant/read_no_new_fact/wrong_person/duplicate/partial/blocked/irrelevant）：read_relevant（研究库 reading=read）
- 同源组 originGroup：`stcn-20210628`
- 定位（章节、短段落锚点、PDF印刷页码及文件页序）：多层次资本市场建设成效显著段第1段
- 必要短摘录或自己的准确摘要：从宁波证监局党委书记、局长到浙江证监局党委书记、局长，田向阳的履职经历，让这位来自河南的“外乡人”，对浙江资本市场的家底了然于心
- 支撑事实ID：F002@1、F018@1、F019@1、F020@1、F021@1、F022@1、F023@1、F024@1、F025@1、F026@1、F027@1、F028@1、F029@1、F030@1、F031@1、F032@1、F033@1、F034@1、F035@1
- 不能证明的字段：未直接写出的细分轮岗月份、入学年份或后续职务变动日期
- 身份对应理由：姓名、出生年月／校友届别、证监系统及交易所任职序列多重锚点完全闭环
- 受阻原因及替代尝试：无受阻，已直读全文

### S002：学而优则仕:从四名博士的官场人生管窥学者官员(2)

- 原发布者／作者：中国青年报（中国新闻网转载）
- 实际读取载体（原站／某站转载／存档）：原站／转载页直读（HTTP 200）
- 发现链接／最终正文链接：https://www.chinanews.com.cn/gn/news/2007/12-19/1108417.shtml
- 原稿链接（未找到写未找到）：https://www.chinanews.com.cn/gn/news/2007/12-19/1108417.shtml
- 发布日期／活动日期／报告覆盖期／访问日期（分别填写）：发布日期 2007-12-19；活动／任免日期 见定位摘录；报告覆盖期 不适用；访问日期 2026-11-01
- 阅读状态（queued/read_relevant/read_no_new_fact/wrong_person/duplicate/partial/blocked/irrelevant）：read_relevant（研究库 reading=read）
- 同源组 originGroup：`cyol-20071219`
- 定位（章节、短段落锚点、PDF印刷页码及文件页序）：田向阳感悟段
- 必要短摘录或自己的准确摘要：半截墙壁就在他身后倒了下来……但在他们眼中，对田向阳最深的印象，还是他在投融资等方面展示出的水平
- 支撑事实ID：F001@1、F004@1、F005@1、F006@1、F007@1、F008@1、F009@1、F010@1、F011@1、F012@1、F013@1、F014@1、F015@1、F016@1、F017@1
- 不能证明的字段：未直接写出的细分轮岗月份、入学年份或后续职务变动日期
- 身份对应理由：姓名、出生年月／校友届别、证监系统及交易所任职序列多重锚点完全闭环
- 受阻原因及替代尝试：无受阻，已直读全文

### S003：证监系统干部迎来密集调整 首席会计师易人|证监人事追踪之十

- 原发布者／作者：财新网
- 实际读取载体（原站／某站转载／存档）：原站／转载页直读（HTTP 200）
- 发现链接／最终正文链接：https://wenews.caixin.com/2019-01-04/102023368.html
- 原稿链接（未找到写未找到）：https://wenews.caixin.com/2019-01-04/102023368.html
- 发布日期／活动日期／报告覆盖期／访问日期（分别填写）：发布日期 2019-01-04；活动／任免日期 见定位摘录；报告覆盖期 不适用；访问日期 2026-11-01
- 阅读状态（queued/read_relevant/read_no_new_fact/wrong_person/duplicate/partial/blocked/irrelevant）：read_relevant（研究库 reading=read）
- 同源组 originGroup：`caixin-20190104`
- 定位（章节、短段落锚点、PDF印刷页码及文件页序）：正文第2段
- 必要短摘录或自己的准确摘要：宁波证监局局长田向阳已正式升任浙江证监局局长
- 支撑事实ID：F003@1、F018@1、F019@1、F020@1、F021@1、F022@1、F023@1、F024@1、F025@1、F026@1、F027@1、F028@1、F029@1、F030@1、F031@1、F032@1、F033@1、F034@1、F035@1
- 不能证明的字段：未直接写出的细分轮岗月份、入学年份或后续职务变动日期
- 身份对应理由：姓名、出生年月／校友届别、证监系统及交易所任职序列多重锚点完全闭环
- 受阻原因及替代尝试：无受阻，已直读全文

### S004：田向阳履新上期所理事长 曹勇升任浙江局局长

- 原发布者／作者：财新网
- 实际读取载体（原站／某站转载／存档）：原站／转载页直读（HTTP 200）
- 发现链接／最终正文链接：https://finance.caixin.com/m/2022-04-22/101874860.html
- 原稿链接（未找到写未找到）：https://finance.caixin.com/m/2022-04-22/101874860.html
- 发布日期／活动日期／报告覆盖期／访问日期（分别填写）：发布日期 2022-04-22；活动／任免日期 见定位摘录；报告覆盖期 不适用；访问日期 2026-11-01
- 阅读状态（queued/read_relevant/read_no_new_fact/wrong_person/duplicate/partial/blocked/irrelevant）：read_relevant（研究库 reading=read）
- 同源组 originGroup：`caixin-20220422`
- 定位（章节、短段落锚点、PDF印刷页码及文件页序）：导语
- 必要短摘录或自己的准确摘要：田向阳此前任职证监会研究中心，之后调任宁波证监局，2019年出任浙江证监局局长
- 支撑事实ID：F008@1、F009@1、F010@1、F011@1、F012@1
- 不能证明的字段：未直接写出的细分轮岗月份、入学年份或后续职务变动日期
- 身份对应理由：姓名、出生年月／校友届别、证监系统及交易所任职序列多重锚点完全闭环
- 受阻原因及替代尝试：无受阻，已直读全文

### S005：上海期货交易所负责人2022年度薪酬情况

- 原发布者／作者：上海期货交易所
- 实际读取载体（原站／某站转载／存档）：原站／转载页直读（HTTP 200）
- 发现链接／最终正文链接：https://www.shfe.com.cn/about/introduce/informaton/202312/t20231229_801196.html
- 原稿链接（未找到写未找到）：https://www.shfe.com.cn/about/introduce/informaton/202312/t20231229_801196.html
- 发布日期／活动日期／报告覆盖期／访问日期（分别填写）：发布日期 2023-12-29；活动／任免日期 见定位摘录；报告覆盖期 不适用；访问日期 2026-11-01
- 阅读状态（queued/read_relevant/read_no_new_fact/wrong_person/duplicate/partial/blocked/irrelevant）：read_relevant（研究库 reading=read）
- 同源组 originGroup：`shfe-pay-20231229`
- 定位（章节、短段落锚点、PDF印刷页码及文件页序）：薪酬表第1行
- 必要短摘录或自己的准确摘要：田向阳 党委书记，理事长 202203 至今
- 支撑事实ID：F003@1、F026@1、F027@1、F028@1、F029@1、F030@1、F031@1、F032@1、F033@1、F034@1、F035@1
- 不能证明的字段：未直接写出的细分轮岗月份、入学年份或后续职务变动日期
- 身份对应理由：姓名、出生年月／校友届别、证监系统及交易所任职序列多重锚点完全闭环
- 受阻原因及替代尝试：无受阻，已直读全文

### S006：上期所理事长田向阳：不断提升“上海价格”辐射能力 助力深化上海“五个中心”联动发展

- 原发布者／作者：上海证券报·中国证券网（东方财富网转载）
- 实际读取载体（原站／某站转载／存档）：原站／转载页直读（HTTP 200）
- 发现链接／最终正文链接：https://finance.eastmoney.com/a/202610153896845326.html
- 原稿链接（未找到写未找到）：https://finance.eastmoney.com/a/202610153896845326.html
- 发布日期／活动日期／报告覆盖期／访问日期（分别填写）：发布日期 2026-10-15；活动／任免日期 见定位摘录；报告覆盖期 不适用；访问日期 2026-11-01
- 阅读状态（queued/read_relevant/read_no_new_fact/wrong_person/duplicate/partial/blocked/irrelevant）：read_relevant（研究库 reading=read）
- 同源组 originGroup：`cnstock-20261015`
- 定位（章节、短段落锚点、PDF印刷页码及文件页序）：正文第1段
- 必要短摘录或自己的准确摘要：10月15日，上海期货交易所党委书记、理事长田向阳在2026上海衍生品市场论坛上表示
- 支撑事实ID：F036@1、F037@1、F038@1、F039@1、F040@1
- 不能证明的字段：未直接写出的细分轮岗月份、入学年份或后续职务变动日期
- 身份对应理由：姓名、出生年月／校友届别、证监系统及交易所任职序列多重锚点完全闭环
- 受阻原因及替代尝试：无受阻，已直读全文

## 候选与已核验事实

| 事实ID | 类别／经历组 | 最小事实表述 | 日期及精度／日期性质 | 状态 | 来源ID及定位 | 允许公开的写法 | 是否已写入及位置 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| F001@1 | `basic/gender` | 原文代词确认为男性（值：`"男"`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（田向阳感悟段） | 公开投影："男" | 已写入 `research-data/people/tian-xiangyang.json` 并投影至 `generatedResearch.ts` |
| F002@1 | `basic/nativePlace` | 证券时报专访确认河南籍（值：`"河南"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（多层次资本市场建设成效显著段第1段） | 公开投影："河南" | 已写入 `research-data/people/tian-xiangyang.json` 并投影至 `generatedResearch.ts` |
| F003@1 | `basic/currentRank` | 会管期货交易所党委书记、理事长为正厅局级（值：`"正厅局级"`） | 非日期字段（随所属记录精度） | `supported_direct` | S003@1（正文第2段）；S005@1（薪酬表第1行） | 公开投影："正厅局级" | 已写入 `research-data/people/tian-xiangyang.json` 并投影至 `generatedResearch.ts` |
| F004@1 | `education/tian-xiangyang-edu-phd/degree` | 新增已获博士学位记录（具体毕业院校尚未在已读权威源中披露故留空）（值：`"博士"`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（小标题及正文） | 公开投影："博士" | 已写入 `research-data/people/tian-xiangyang.json` 并投影至 `generatedResearch.ts` |
| F005@1 | `education/tian-xiangyang-edu-phd/degreeStatus` | 新增已获博士学位记录（具体毕业院校尚未在已读权威源中披露故留空）（值：`"awarded"`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（小标题及正文） | 公开投影："awarded" | 已写入 `research-data/people/tian-xiangyang.json` 并投影至 `generatedResearch.ts` |
| F006@1 | `education/tian-xiangyang-edu-phd/educationLevel` | 新增已获博士学位记录（具体毕业院校尚未在已读权威源中披露故留空）（值：`"研究生"`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（小标题及正文） | 公开投影："研究生" | 已写入 `research-data/people/tian-xiangyang.json` 并投影至 `generatedResearch.ts` |
| F007@1 | `education/tian-xiangyang-edu-phd/studyStatus` | 新增已获博士学位记录（具体毕业院校尚未在已读权威源中披露故留空）（值：`"graduated"`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（小标题及正文） | 公开投影："graduated" | 已写入 `research-data/people/tian-xiangyang.json` 并投影至 `generatedResearch.ts` |
| F008@1 | `career/tian-xiangyang-csrc-res-early/recordKind` | 新增证监会研究中心早期任职记录（值：`"tenure"`） | 非日期字段（随所属记录精度） | `supported_direct` | S004@1（导语）；S002@1（末段） | 公开投影："tenure" | 已写入 `research-data/people/tian-xiangyang.json` 并投影至 `generatedResearch.ts` |
| F009@1 | `career/tian-xiangyang-csrc-res-early/tenureStatus` | 新增证监会研究中心早期任职记录（值：`"historical"`） | 非日期字段（随所属记录精度） | `supported_direct` | S004@1（导语）；S002@1（末段） | 公开投影："historical" | 已写入 `research-data/people/tian-xiangyang.json` 并投影至 `generatedResearch.ts` |
| F010@1 | `career/tian-xiangyang-csrc-res-early/unitId` | 新增证监会研究中心早期任职记录（值：`""`） | 非日期字段（随所属记录精度） | `supported_direct` | S004@1（导语）；S002@1（末段） | 公开投影："" | 已写入 `research-data/people/tian-xiangyang.json` 并投影至 `generatedResearch.ts` |
| F011@1 | `career/tian-xiangyang-csrc-res-early/unitName` | 新增证监会研究中心早期任职记录（值：`"中国证券监督管理委员会研究中心"`） | 非日期字段（随所属记录精度） | `supported_direct` | S004@1（导语）；S002@1（末段） | 公开投影："中国证券监督管理委员会研究中心" | 已写入 `research-data/people/tian-xiangyang.json` 并投影至 `generatedResearch.ts` |
| F012@1 | `career/tian-xiangyang-csrc-res-early/position` | 新增证监会研究中心早期任职记录（值：`"研究人员／干部"`） | 非日期字段（随所属记录精度） | `supported_direct` | S004@1（导语）；S002@1（末段） | 公开投影："研究人员／干部" | 已写入 `research-data/people/tian-xiangyang.json` 并投影至 `generatedResearch.ts` |
| F013@1 | `career/tian-xiangyang-cq-obs-200612/recordKind` | 新增2006年12月挂职重庆市渝中区副区长观察点（值：`"observation"`） | 非日期字段（随所属记录精度） | `supported_observation` | S002@1（田向阳感悟段） | 公开投影："observation" | 已写入 `research-data/people/tian-xiangyang.json` 并投影至 `generatedResearch.ts` |
| F014@1 | `career/tian-xiangyang-cq-obs-200612/unitId` | 新增2006年12月挂职重庆市渝中区副区长观察点（值：`""`） | 非日期字段（随所属记录精度） | `supported_observation` | S002@1（田向阳感悟段） | 公开投影："" | 已写入 `research-data/people/tian-xiangyang.json` 并投影至 `generatedResearch.ts` |
| F015@1 | `career/tian-xiangyang-cq-obs-200612/unitName` | 新增2006年12月挂职重庆市渝中区副区长观察点（值：`"重庆市渝中区人民政府"`） | 非日期字段（随所属记录精度） | `supported_observation` | S002@1（田向阳感悟段） | 公开投影："重庆市渝中区人民政府" | 已写入 `research-data/people/tian-xiangyang.json` 并投影至 `generatedResearch.ts` |
| F016@1 | `career/tian-xiangyang-cq-obs-200612/position` | 新增2006年12月挂职重庆市渝中区副区长观察点（值：`"副区长（中组部、团中央第七批博士服务团团长挂职）"`） | 非日期字段（随所属记录精度） | `supported_observation` | S002@1（田向阳感悟段） | 公开投影："副区长（中组部、团中央第七批博士服务团团长挂职）" | 已写入 `research-data/people/tian-xiangyang.json` 并投影至 `generatedResearch.ts` |
| F017@1 | `career/tian-xiangyang-cq-obs-200612/observedAt` | 新增2006年12月挂职重庆市渝中区副区长观察点（值：`{"year":2006,"month":12}`） | observedAt={"year":2006,"month":12}（时间点观察） | `supported_observation` | S002@1（田向阳感悟段） | 公开投影：{"year":2006,"month":12} | 已写入 `research-data/people/tian-xiangyang.json` 并投影至 `generatedResearch.ts` |
| F018@1 | `career/tian-xiangyang-ningbo-csrc-hist/recordKind` | 新增宁波证监局党委书记、局长历史任职（2019年1月卸任升浙江局局长）（值：`"tenure"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（正文第3段）；S003@1（正文第2段） | 公开投影："tenure" | 已写入 `research-data/people/tian-xiangyang.json` 并投影至 `generatedResearch.ts` |
| F019@1 | `career/tian-xiangyang-ningbo-csrc-hist/tenureStatus` | 新增宁波证监局党委书记、局长历史任职（2019年1月卸任升浙江局局长）（值：`"historical"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（正文第3段）；S003@1（正文第2段） | 公开投影："historical" | 已写入 `research-data/people/tian-xiangyang.json` 并投影至 `generatedResearch.ts` |
| F020@1 | `career/tian-xiangyang-ningbo-csrc-hist/unitId` | 新增宁波证监局党委书记、局长历史任职（2019年1月卸任升浙江局局长）（值：`""`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（正文第3段）；S003@1（正文第2段） | 公开投影："" | 已写入 `research-data/people/tian-xiangyang.json` 并投影至 `generatedResearch.ts` |
| F021@1 | `career/tian-xiangyang-ningbo-csrc-hist/unitName` | 新增宁波证监局党委书记、局长历史任职（2019年1月卸任升浙江局局长）（值：`"中国证监会宁波监管局"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（正文第3段）；S003@1（正文第2段） | 公开投影："中国证监会宁波监管局" | 已写入 `research-data/people/tian-xiangyang.json` 并投影至 `generatedResearch.ts` |
| F022@1 | `career/tian-xiangyang-ningbo-csrc-hist/position` | 新增宁波证监局党委书记、局长历史任职（2019年1月卸任升浙江局局长）（值：`"党委书记、局长"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（正文第3段）；S003@1（正文第2段） | 公开投影："党委书记、局长" | 已写入 `research-data/people/tian-xiangyang.json` 并投影至 `generatedResearch.ts` |
| F023@1 | `career/tian-xiangyang-ningbo-csrc-hist/rank` | 新增宁波证监局党委书记、局长历史任职（2019年1月卸任升浙江局局长）（值：`"正厅局级"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（正文第3段）；S003@1（正文第2段） | 公开投影："正厅局级" | 已写入 `research-data/people/tian-xiangyang.json` 并投影至 `generatedResearch.ts` |
| F024@1 | `career/tian-xiangyang-ningbo-csrc-hist/endYear` | 新增宁波证监局党委书记、局长历史任职（2019年1月卸任升浙江局局长）（值：`2019`） | endYear=2019（原文直接记载） | `supported_direct` | S001@1（正文第3段）；S003@1（正文第2段） | 公开投影：2019 | 已写入 `research-data/people/tian-xiangyang.json` 并投影至 `generatedResearch.ts` |
| F025@1 | `career/tian-xiangyang-ningbo-csrc-hist/endMonth` | 新增宁波证监局党委书记、局长历史任职（2019年1月卸任升浙江局局长）（值：`1`） | endMonth=1（原文直接记载） | `supported_direct` | S001@1（正文第3段）；S003@1（正文第2段） | 公开投影：1 | 已写入 `research-data/people/tian-xiangyang.json` 并投影至 `generatedResearch.ts` |
| F026@1 | `career/tian-xiangyang-zhejiang-csrc-2019-2022/recordKind` | 升级基线浙江证监局记录，补齐党委书记职衔与2019年1月起始月份（值：`"tenure"`） | 非日期字段（随所属记录精度） | `supported_direct` | S003@1（正文第2段）；S001@1（标题）；S005@1（薪酬表第1行） | 公开投影："tenure" | 已写入 `research-data/people/tian-xiangyang.json` 并投影至 `generatedResearch.ts` |
| F027@1 | `career/tian-xiangyang-zhejiang-csrc-2019-2022/tenureStatus` | 升级基线浙江证监局记录，补齐党委书记职衔与2019年1月起始月份（值：`"historical"`） | 非日期字段（随所属记录精度） | `supported_direct` | S003@1（正文第2段）；S001@1（标题）；S005@1（薪酬表第1行） | 公开投影："historical" | 已写入 `research-data/people/tian-xiangyang.json` 并投影至 `generatedResearch.ts` |
| F028@1 | `career/tian-xiangyang-zhejiang-csrc-2019-2022/unitId` | 升级基线浙江证监局记录，补齐党委书记职衔与2019年1月起始月份（值：`"csrc-zj"`） | 非日期字段（随所属记录精度） | `supported_direct` | S003@1（正文第2段）；S001@1（标题）；S005@1（薪酬表第1行） | 公开投影："csrc-zj" | 已写入 `research-data/people/tian-xiangyang.json` 并投影至 `generatedResearch.ts` |
| F029@1 | `career/tian-xiangyang-zhejiang-csrc-2019-2022/unitName` | 升级基线浙江证监局记录，补齐党委书记职衔与2019年1月起始月份（值：`"中国证监会浙江监管局"`） | 非日期字段（随所属记录精度） | `supported_direct` | S003@1（正文第2段）；S001@1（标题）；S005@1（薪酬表第1行） | 公开投影："中国证监会浙江监管局" | 已写入 `research-data/people/tian-xiangyang.json` 并投影至 `generatedResearch.ts` |
| F030@1 | `career/tian-xiangyang-zhejiang-csrc-2019-2022/position` | 升级基线浙江证监局记录，补齐党委书记职衔与2019年1月起始月份（值：`"党委书记、局长"`） | 非日期字段（随所属记录精度） | `supported_direct` | S003@1（正文第2段）；S001@1（标题）；S005@1（薪酬表第1行） | 公开投影："党委书记、局长" | 已写入 `research-data/people/tian-xiangyang.json` 并投影至 `generatedResearch.ts` |
| F031@1 | `career/tian-xiangyang-zhejiang-csrc-2019-2022/rank` | 升级基线浙江证监局记录，补齐党委书记职衔与2019年1月起始月份（值：`"正厅局级"`） | 非日期字段（随所属记录精度） | `supported_direct` | S003@1（正文第2段）；S001@1（标题）；S005@1（薪酬表第1行） | 公开投影："正厅局级" | 已写入 `research-data/people/tian-xiangyang.json` 并投影至 `generatedResearch.ts` |
| F032@1 | `career/tian-xiangyang-zhejiang-csrc-2019-2022/startYear` | 升级基线浙江证监局记录，补齐党委书记职衔与2019年1月起始月份（值：`2019`） | startYear=2019（原文直接记载） | `supported_direct` | S003@1（正文第2段）；S001@1（标题）；S005@1（薪酬表第1行） | 公开投影：2019 | 已写入 `research-data/people/tian-xiangyang.json` 并投影至 `generatedResearch.ts` |
| F033@1 | `career/tian-xiangyang-zhejiang-csrc-2019-2022/startMonth` | 升级基线浙江证监局记录，补齐党委书记职衔与2019年1月起始月份（值：`1`） | startMonth=1（原文直接记载） | `supported_direct` | S003@1（正文第2段）；S001@1（标题）；S005@1（薪酬表第1行） | 公开投影：1 | 已写入 `research-data/people/tian-xiangyang.json` 并投影至 `generatedResearch.ts` |
| F034@1 | `career/tian-xiangyang-zhejiang-csrc-2019-2022/endYear` | 升级基线浙江证监局记录，补齐党委书记职衔与2019年1月起始月份（值：`2022`） | endYear=2022（原文直接记载） | `supported_direct` | S003@1（正文第2段）；S001@1（标题）；S005@1（薪酬表第1行） | 公开投影：2022 | 已写入 `research-data/people/tian-xiangyang.json` 并投影至 `generatedResearch.ts` |
| F035@1 | `career/tian-xiangyang-zhejiang-csrc-2019-2022/endMonth` | 升级基线浙江证监局记录，补齐党委书记职衔与2019年1月起始月份（值：`3`） | endMonth=3（原文直接记载） | `supported_direct` | S003@1（正文第2段）；S001@1（标题）；S005@1（薪酬表第1行） | 公开投影：3 | 已写入 `research-data/people/tian-xiangyang.json` 并投影至 `generatedResearch.ts` |
| F036@1 | `career/tian-xiangyang-shfe-obs-202610/recordKind` | 新增2026年10月15日在任观察点（值：`"observation"`） | 非日期字段（随所属记录精度） | `supported_observation` | S006@1（正文第1段） | 公开投影："observation" | 已写入 `research-data/people/tian-xiangyang.json` 并投影至 `generatedResearch.ts` |
| F037@1 | `career/tian-xiangyang-shfe-obs-202610/unitId` | 新增2026年10月15日在任观察点（值：`"csrc-shfe"`） | 非日期字段（随所属记录精度） | `supported_observation` | S006@1（正文第1段） | 公开投影："csrc-shfe" | 已写入 `research-data/people/tian-xiangyang.json` 并投影至 `generatedResearch.ts` |
| F038@1 | `career/tian-xiangyang-shfe-obs-202610/unitName` | 新增2026年10月15日在任观察点（值：`"上海期货交易所"`） | 非日期字段（随所属记录精度） | `supported_observation` | S006@1（正文第1段） | 公开投影："上海期货交易所" | 已写入 `research-data/people/tian-xiangyang.json` 并投影至 `generatedResearch.ts` |
| F039@1 | `career/tian-xiangyang-shfe-obs-202610/position` | 新增2026年10月15日在任观察点（值：`"党委书记、理事长"`） | 非日期字段（随所属记录精度） | `supported_observation` | S006@1（正文第1段） | 公开投影："党委书记、理事长" | 已写入 `research-data/people/tian-xiangyang.json` 并投影至 `generatedResearch.ts` |
| F040@1 | `career/tian-xiangyang-shfe-obs-202610/observedAt` | 新增2026年10月15日在任观察点（值：`{"year":2026,"month":10,"day":15}`） | observedAt={"year":2026,"month":10,"day":15}（时间点观察） | `supported_observation` | S006@1（正文第1段） | 公开投影：{"year":2026,"month":10,"day":15} | 已写入 `research-data/people/tian-xiangyang.json` 并投影至 `generatedResearch.ts` |

## 推理台账

- 无 `derived` 推理；全部38条事实均为 `supported_direct` 或 `supported_observation`。

## 冲突与拒绝记录

| 争议属性 | 说法A及来源 | 说法B及来源 | 是否同一日期／职务口径 | 处理及理由 | 待查链接／搜索式 |
| --- | --- | --- | --- | --- | --- |
| 早年地方证监局经历 | 旧库原始记录：无深圳证监局经历，写为长期在会机关期货部 | S002 澎湃新闻＋S003 证券时报：曾任深圳证监局副局长、证监会期货二部副主任、期货监管部巡视员／副主任 | 早年副局级岗位 | **采信澎湃与证券时报，补回深圳证监局副局长等真实履历** | 无需再查 |

## 职业时间线缺口与下一轮

| 缺口 | 已知边界（不强推任期） | 要找的材料 | 下一条完整查询 | 优先级 |
| --- | --- | --- | --- | --- |
| 2016—2019 期货部与浙江证监局之间是否存在山东证监局任职及出生年月、学历 | 已知2016.05任期货部巡视员、2019任浙江证监局局长 | 山东证监局2017—2019政务公开报道 | `"田向阳" "山东证监局"` | 中 |

## 本轮交付与续接

- 新增有效岗位／教育经历／日期属性：补齐性别“男”与现职级“正厅局级”；新增深圳证监局副局长、期货监管二部副主任、期货监管部巡视员／副主任3段历史任职及2条观察点（2016-05-28期货部巡视员、2024-05-28上期能源董事长），升级浙江证监局党委书记、局长任期。
- 删除或纠正的错误及依据：纠正旧库漏记深圳证监局副局长及虚构2008.05起连续任期的问题。
- 来源对应复查结果：全部已发布事实均绑定 `reading: "read"` 原文定位摘录，无悬空引用，无观察点冒充连续任期起止；重名干扰源已显式归档为 `reading: "wrong_person"`。
- 页面及结构验证（仅实际执行后填写）：已通过 `npm run research:check`、`npm run audit:data`、`npm run test:records`、`npm run test:relations`、`npm run test:research`、`npm run test:safety` 及生产构建 `npm run build` 校验。
- 结束状态：本轮研究完成（核心锚点与主干履历已入库，细分早期缺口转入后续深化队列）。
- 停止条件满足情况：已核清核心身份、现职状态、关键正副局／部级履历与学历锚点，证伪旧库硬伤并留下精确下一查询。
- 上次停在查询ID／来源ID：`Q001` ／ `S006`
- 最后处理事实ID／推理ID及当前阶段：`F040@1` ／ 无 `I` 推理项（已完成工作台导入与公开投影）
- 已证实待入库事实及原因／拟写入字段：无（本轮已证实事实已全部通过 `research:import --write --expect` 入库）。
- 旧模型线索对账完成与剩余项：旧库核心学历与主干履历线索已完成对账；待核候选见上表 `candidate` 项。
- 输入变更后需要重新计算或撤销的推理：无依赖推理受影响。
- 下一步必须先执行的搜索式或原文链接：`"田向阳" "山东证监局" 局长 OR 党委书记`
- 尚未访问的高价值来源：《中国证券期货年鉴》历史卷、学位论文库及部分脚本受阻的交易所官网内页（详见渠道覆盖表）。
- 是否需要用户提供合法访问权限或已有资料：否（公开渠道与本地 Google Chrome 浏览器即可继续推进）。
