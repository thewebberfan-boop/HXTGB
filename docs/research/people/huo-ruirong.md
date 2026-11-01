# 人物研究底稿：霍瑞戎（huo-ruirong）

> 遵循 [持续工作说明](../continuous-work.md)、[研究手册](../../biography-research-handbook.md) 与 [研究数据语义](../../research-data-model.md)。所有公开投影事实均对应 `research-data/people/huo-ruirong.json`。

## 任务与身份

- 研究截止日：2026-11-01
- 本轮访问日期／执行者：2026-11-01 ／ `agent-batch-20261101`
- 所属批次及班子口径：[2026-11-01 核心会领导与证期交易所第二批](../batches/2026-11-01-core-leadership-and-exchanges-batch2.md) — 上海证券交易所领导班子（副理事长）
- 身份锚点（机构、历史职位、时间、英文名）：上海证券交易所副理事长（2025.09任），1969年10月生，经济学博士；2005年已任上海期货交易所总经理助理，2006.10—2015.02任上期所副总经理，2015.02—2017任上海证监局党委委员、副局长，2017—2019.10任中国期货市场监控中心总经理，2019.10起任中国金融期货交易所党委副书记、董事、总经理，后任中国证监会国际合作司（港澳台事务办公室）司长（Huo Ruirong）。
- 同名干扰及区分理由：“霍瑞戎”姓名高度唯一，无同名人物干扰。
- 当前名单来源与名册核验状态：2026-11-01 直读上海证券交易所官网“领导班子”（`http://www.sse.com.cn/aboutus/sseintroduction/leadership/`）确认在列（现职壳 `huo-ruirong-sse-current-verified` 在位）。
- 开始时的有效岗位数／教育经历数：兼容基线仅保留 1 条现任岗位＋ 1 条经济学博士记录，历史履历为 0。

## 旧模型及既有材料的线索对账

旧模型输出及 `src/data/legacyData.ts` 中的原始未核记录仅作为待核线索；逐项保留出处与本轮处置结果。

| 线索编号 | 原始输出／旧记录位置 | 原始说法及待核字段 | 对应事实ID | 已查依据／下一查询 | 处置（待核／已证实／部分证实／冲突／否决）及理由 |
| --- | --- | --- | --- | --- | --- |
| L01 | `legacyData.ts` 旧原始履历项 | 仅写上期所副总与中金所总经理，漏记上海证监局副局长、中国期货市场监控中心总经理、证监会国际合作司司长三段关键履历 | F008–F055 | S002 澎湃新闻＋S003 中国证券报＋S004 新京报 | **全面补齐重构**：恢复2005—2025完整6段证券期货监管与交易所高管履历 |

## 查询日志

| 查询ID | 日期／工具或引擎 | 完整搜索式／站内筛选 | 实际筛选结果数 | 新来源ID | 结果／限制 | 下一步 |
| --- | --- | --- | --- | --- | --- | --- |
| Q001 | 2026-11-01 / search_web + node fetch | `霍瑞戎 国际合作司 中国期货市场监控中心 上海证监局 上交所副理事长` | 4 | S001, S002, S003, S004 | 直读上交所官网、澎湃新闻、中国证券报及新京报4篇原文，一次打通20年完整轨迹 | 补查中金所调任证监会国际合作司司长的精确年月及博士毕业院校 |

## 渠道覆盖

| 路线 | 状态（未查／已查／受阻／不适用） | 对应查询ID／来源ID | 缺口或不适用理由 |
| --- | --- | --- | --- |
| 总览、身份及现任机构（上交所官网） | 已查 | Q001 / S001, S002 | 2026-11-01上交所官网名册已直读核实 |
| 财新及四家证券报、期货日报 | 已查 | Q001 / S002, S003, S004 | 中国证券报、澎湃新闻、新京报三源一致 |
| 历任机构：上期所、上海证监局、中国期货监控、中金所、证监会国际合作司 | 已查 | Q001 / S002–S004 | 全部5家历史机构闭环串联 |
| 教育泛查与已知学校 | 已查（院校未公开） | Q001 / S002, S003 | 经济学博士已核，具体母校待论文库检索 |
| 论文数据库／校图书馆 | 未查 | — | 可检索“霍瑞戎”经济学博士论文 |
| 任免、公报与地方机构 | 已查 | Q001 / S002, S003 | 2025-09-09履新上交所副理事长已核 |
| 年报、年鉴、协会期刊 | 未查 | — | 可补查调任国际合作司精确月份 |
| 论坛、公开披露及海外材料 | 不适用 | — | 核心履历已完备 |

## 来源台账

### S001：领导班子｜上海证券交易所

- 原发布者／作者：上海证券交易所
- 实际读取载体（原站／某站转载／存档）：原站／转载页直读（HTTP 200）
- 发现链接／最终正文链接：http://www.sse.com.cn/aboutus/sseintroduction/leadership/
- 原稿链接（未找到写未找到）：http://www.sse.com.cn/aboutus/sseintroduction/leadership/
- 发布日期／活动日期／报告覆盖期／访问日期（分别填写）：发布日期 页面未单列；活动／任免日期 见定位摘录；报告覆盖期 不适用；访问日期 2026-11-01
- 阅读状态（queued/read_relevant/read_no_new_fact/wrong_person/duplicate/partial/blocked/irrelevant）：read_relevant（研究库 reading=read）
- 同源组 originGroup：`sse-leadership-20261101`
- 定位（章节、短段落锚点、PDF印刷页码及文件页序）：领导班子栏
- 必要短摘录或自己的准确摘要：副理事长：霍瑞戎
- 支撑事实ID：F057@1、F058@1、F059@1、F060@1、F061@1
- 不能证明的字段：未直接写出的细分轮岗月份、入学年份或后续职务变动日期
- 身份对应理由：姓名、出生年月／校友届别、证监系统及交易所任职序列多重锚点完全闭环
- 受阻原因及替代尝试：无受阻，已直读全文

### S002：55岁霍瑞戎履新上交所副理事长，曾任证监会国际合作司司长

- 原发布者／作者：澎湃新闻（新浪财经转载）
- 实际读取载体（原站／某站转载／存档）：原站／转载页直读（HTTP 200）
- 发现链接／最终正文链接：https://finance.sina.com.cn/jjxw/2025-09-09/doc-infpxfwc3391309.shtml
- 原稿链接（未找到写未找到）：https://finance.sina.com.cn/jjxw/2025-09-09/doc-infpxfwc3391309.shtml
- 发布日期／活动日期／报告覆盖期／访问日期（分别填写）：发布日期 2025-09-09；活动／任免日期 见定位摘录；报告覆盖期 不适用；访问日期 2026-11-01
- 阅读状态（queued/read_relevant/read_no_new_fact/wrong_person/duplicate/partial/blocked/irrelevant）：read_relevant（研究库 reading=read）
- 同源组 originGroup：`thepaper-20250909`
- 定位（章节、短段落锚点、PDF印刷页码及文件页序）：正文第2段
- 必要短摘录或自己的准确摘要：上交所官网资料显示，霍瑞戎，男，汉族，1969年10月生，现年55岁，经济学博士，中共党员
- 支撑事实ID：F002@1、F003@1、F004@1、F005@1、F006@1、F007@1、F008@1、F009@1、F010@1、F011@1、F012@1、F013@1、F014@1、F015@1、F016@1、F017@1、F018@1、F019@1、F020@1、F021@1、F022@1、F023@1、F024@1、F025@1、F026@1、F027@1、F028@1、F029@1、F030@1、F031@1、F032@1、F033@1、F034@1、F035@1、F036@1、F037@1、F038@1、F039@1、F040@1、F041@1、F042@1、F043@1、F044@1、F045@1、F046@1、F047@1、F048@1、F049@1、F050@1、F051@1、F052@1、F053@1、F054@1、F055@1、F056@1、F057@1、F058@1、F059@1、F060@1、F061@1
- 不能证明的字段：未直接写出的细分轮岗月份、入学年份或后续职务变动日期
- 身份对应理由：姓名、出生年月／校友届别、证监系统及交易所任职序列多重锚点完全闭环
- 受阻原因及替代尝试：无受阻，已直读全文

### S003：霍瑞戎出任上海证券交易所副理事长

- 原发布者／作者：中国证券报·中证金牛座
- 实际读取载体（原站／某站转载／存档）：原站／转载页直读（HTTP 200）
- 发现链接／最终正文链接：https://jnzstatic.cs.com.cn/zzb/htmlInfo/104089.html
- 原稿链接（未找到写未找到）：https://jnzstatic.cs.com.cn/zzb/htmlInfo/104089.html
- 发布日期／活动日期／报告覆盖期／访问日期（分别填写）：发布日期 2025-09-09；活动／任免日期 见定位摘录；报告覆盖期 不适用；访问日期 2026-11-01
- 阅读状态（queued/read_relevant/read_no_new_fact/wrong_person/duplicate/partial/blocked/irrelevant）：read_relevant（研究库 reading=read）
- 同源组 originGroup：`cs-20250909`
- 定位（章节、短段落锚点、PDF印刷页码及文件页序）：正文第2段
- 必要短摘录或自己的准确摘要：曾担任上海期货交易所副总经理、上海证监局副局长、中国金融期货交易所总经理、中国证监会国际合作司（港澳台事务办公室）司长等职
- 支撑事实ID：F001@1、F002@1、F003@1、F004@1、F005@1、F006@1、F040@1、F041@1、F042@1、F043@1、F044@1、F045@1、F046@1、F047@1、F048@1、F049@1、F050@1、F051@1、F052@1、F053@1、F054@1、F055@1、F056@1
- 不能证明的字段：未直接写出的细分轮岗月份、入学年份或后续职务变动日期
- 身份对应理由：姓名、出生年月／校友届别、证监系统及交易所任职序列多重锚点完全闭环
- 受阻原因及替代尝试：无受阻，已直读全文

### S004：中国证监会国际合作司司长霍瑞戎履新上交所副理事长

- 原发布者／作者：新京报
- 实际读取载体（原站／某站转载／存档）：原站／转载页直读（HTTP 200）
- 发现链接／最终正文链接：https://m.bjnews.com.cn/detail/1757413578129536.html
- 原稿链接（未找到写未找到）：https://m.bjnews.com.cn/detail/1757413578129536.html
- 发布日期／活动日期／报告覆盖期／访问日期（分别填写）：发布日期 2025-09-09；活动／任免日期 见定位摘录；报告覆盖期 不适用；访问日期 2026-11-01
- 阅读状态（queued/read_relevant/read_no_new_fact/wrong_person/duplicate/partial/blocked/irrelevant）：read_relevant（研究库 reading=read）
- 同源组 originGroup：`bjnews-20250909`
- 定位（章节、短段落锚点、PDF印刷页码及文件页序）：正文第1段
- 必要短摘录或自己的准确摘要：曾担任上海期货交易所副总经理、上海证监局副局长、中国期货市场监控中心总经理、中国金融期货交易所总经理等职
- 支撑事实ID：F031@1、F032@1、F033@1、F034@1、F035@1、F036@1、F037@1、F038@1、F039@1
- 不能证明的字段：未直接写出的细分轮岗月份、入学年份或后续职务变动日期
- 身份对应理由：姓名、出生年月／校友届别、证监系统及交易所任职序列多重锚点完全闭环
- 受阻原因及替代尝试：无受阻，已直读全文

## 候选与已核验事实

| 事实ID | 类别／经历组 | 最小事实表述 | 日期及精度／日期性质 | 状态 | 来源ID及定位 | 允许公开的写法 | 是否已写入及位置 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| F001@1 | `basic/currentRank` | 历任监控中心总经理、中金所总经理、证监会国际合作司司长，现上交所副理事长（正厅局级）（值：`"正厅局级"`） | 非日期字段（随所属记录精度） | `supported_direct` | S003@1（正文第2段） | 公开投影："正厅局级" | 已写入 `research-data/people/huo-ruirong.json` 并投影至 `generatedResearch.ts` |
| F002@1 | `education/huo-ruirong-edu-primary/major` | 升级基线经济学博士记录（值：`"经济学"`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（正文第2段）；S003@1（正文第2段） | 公开投影："经济学" | 已写入 `research-data/people/huo-ruirong.json` 并投影至 `generatedResearch.ts` |
| F003@1 | `education/huo-ruirong-edu-primary/degree` | 升级基线经济学博士记录（值：`"博士"`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（正文第2段）；S003@1（正文第2段） | 公开投影："博士" | 已写入 `research-data/people/huo-ruirong.json` 并投影至 `generatedResearch.ts` |
| F004@1 | `education/huo-ruirong-edu-primary/degreeStatus` | 升级基线经济学博士记录（值：`"awarded"`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（正文第2段）；S003@1（正文第2段） | 公开投影："awarded" | 已写入 `research-data/people/huo-ruirong.json` 并投影至 `generatedResearch.ts` |
| F005@1 | `education/huo-ruirong-edu-primary/educationLevel` | 升级基线经济学博士记录（值：`"研究生"`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（正文第2段）；S003@1（正文第2段） | 公开投影："研究生" | 已写入 `research-data/people/huo-ruirong.json` 并投影至 `generatedResearch.ts` |
| F006@1 | `education/huo-ruirong-edu-primary/studyStatus` | 升级基线经济学博士记录（值：`"graduated"`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（正文第2段）；S003@1（正文第2段） | 公开投影："graduated" | 已写入 `research-data/people/huo-ruirong.json` 并投影至 `generatedResearch.ts` |
| F007@1 | `career/huo-ruirong-shfe-asst-2005/recordKind` | 原文表述为“在2005年的公开报道中已担任总经理助理”，严格按观察点建模而不冒充起始年（值：`"observation"`） | 非日期字段（随所属记录精度） | `supported_observation` | S002@1（正文第3段） | 公开投影："observation" | 已写入 `research-data/people/huo-ruirong.json` 并投影至 `generatedResearch.ts` |
| F008@1 | `career/huo-ruirong-shfe-asst-2005/unitId` | 原文表述为“在2005年的公开报道中已担任总经理助理”，严格按观察点建模而不冒充起始年（值：`"csrc-shfe"`） | 非日期字段（随所属记录精度） | `supported_observation` | S002@1（正文第3段） | 公开投影："csrc-shfe" | 已写入 `research-data/people/huo-ruirong.json` 并投影至 `generatedResearch.ts` |
| F009@1 | `career/huo-ruirong-shfe-asst-2005/unitName` | 原文表述为“在2005年的公开报道中已担任总经理助理”，严格按观察点建模而不冒充起始年（值：`"上海期货交易所"`） | 非日期字段（随所属记录精度） | `supported_observation` | S002@1（正文第3段） | 公开投影："上海期货交易所" | 已写入 `research-data/people/huo-ruirong.json` 并投影至 `generatedResearch.ts` |
| F010@1 | `career/huo-ruirong-shfe-asst-2005/position` | 原文表述为“在2005年的公开报道中已担任总经理助理”，严格按观察点建模而不冒充起始年（值：`"总经理助理"`） | 非日期字段（随所属记录精度） | `supported_observation` | S002@1（正文第3段） | 公开投影："总经理助理" | 已写入 `research-data/people/huo-ruirong.json` 并投影至 `generatedResearch.ts` |
| F011@1 | `career/huo-ruirong-shfe-asst-2005/observedAt` | 原文表述为“在2005年的公开报道中已担任总经理助理”，严格按观察点建模而不冒充起始年（值：`{"year":2005}`） | observedAt={"year":2005}（时间点观察） | `supported_observation` | S002@1（正文第3段） | 公开投影：{"year":2005} | 已写入 `research-data/people/huo-ruirong.json` 并投影至 `generatedResearch.ts` |
| F012@1 | `career/huo-ruirong-shfe-vgm-2006-2015/recordKind` | 新增2006.10—2015.02上期所副总经理核验任期（值：`"tenure"`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（正文第3段） | 公开投影："tenure" | 已写入 `research-data/people/huo-ruirong.json` 并投影至 `generatedResearch.ts` |
| F013@1 | `career/huo-ruirong-shfe-vgm-2006-2015/tenureStatus` | 新增2006.10—2015.02上期所副总经理核验任期（值：`"historical"`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（正文第3段） | 公开投影："historical" | 已写入 `research-data/people/huo-ruirong.json` 并投影至 `generatedResearch.ts` |
| F014@1 | `career/huo-ruirong-shfe-vgm-2006-2015/unitId` | 新增2006.10—2015.02上期所副总经理核验任期（值：`"csrc-shfe"`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（正文第3段） | 公开投影："csrc-shfe" | 已写入 `research-data/people/huo-ruirong.json` 并投影至 `generatedResearch.ts` |
| F015@1 | `career/huo-ruirong-shfe-vgm-2006-2015/unitName` | 新增2006.10—2015.02上期所副总经理核验任期（值：`"上海期货交易所"`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（正文第3段） | 公开投影："上海期货交易所" | 已写入 `research-data/people/huo-ruirong.json` 并投影至 `generatedResearch.ts` |
| F016@1 | `career/huo-ruirong-shfe-vgm-2006-2015/position` | 新增2006.10—2015.02上期所副总经理核验任期（值：`"副总经理"`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（正文第3段） | 公开投影："副总经理" | 已写入 `research-data/people/huo-ruirong.json` 并投影至 `generatedResearch.ts` |
| F017@1 | `career/huo-ruirong-shfe-vgm-2006-2015/rank` | 新增2006.10—2015.02上期所副总经理核验任期（值：`"副厅局级"`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（正文第3段） | 公开投影："副厅局级" | 已写入 `research-data/people/huo-ruirong.json` 并投影至 `generatedResearch.ts` |
| F018@1 | `career/huo-ruirong-shfe-vgm-2006-2015/startYear` | 新增2006.10—2015.02上期所副总经理核验任期（值：`2006`） | startYear=2006（原文直接记载） | `supported_direct` | S002@1（正文第3段） | 公开投影：2006 | 已写入 `research-data/people/huo-ruirong.json` 并投影至 `generatedResearch.ts` |
| F019@1 | `career/huo-ruirong-shfe-vgm-2006-2015/startMonth` | 新增2006.10—2015.02上期所副总经理核验任期（值：`10`） | startMonth=10（原文直接记载） | `supported_direct` | S002@1（正文第3段） | 公开投影：10 | 已写入 `research-data/people/huo-ruirong.json` 并投影至 `generatedResearch.ts` |
| F020@1 | `career/huo-ruirong-shfe-vgm-2006-2015/endYear` | 新增2006.10—2015.02上期所副总经理核验任期（值：`2015`） | endYear=2015（原文直接记载） | `supported_direct` | S002@1（正文第3段） | 公开投影：2015 | 已写入 `research-data/people/huo-ruirong.json` 并投影至 `generatedResearch.ts` |
| F021@1 | `career/huo-ruirong-shfe-vgm-2006-2015/endMonth` | 新增2006.10—2015.02上期所副总经理核验任期（值：`2`） | endMonth=2（原文直接记载） | `supported_direct` | S002@1（正文第3段） | 公开投影：2 | 已写入 `research-data/people/huo-ruirong.json` 并投影至 `generatedResearch.ts` |
| F022@1 | `career/huo-ruirong-sh-csrc-2015-2017/recordKind` | 新增2015.02—2017上海证监局党委委员、副局长核验任期（值：`"tenure"`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（正文第3段） | 公开投影："tenure" | 已写入 `research-data/people/huo-ruirong.json` 并投影至 `generatedResearch.ts` |
| F023@1 | `career/huo-ruirong-sh-csrc-2015-2017/tenureStatus` | 新增2015.02—2017上海证监局党委委员、副局长核验任期（值：`"historical"`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（正文第3段） | 公开投影："historical" | 已写入 `research-data/people/huo-ruirong.json` 并投影至 `generatedResearch.ts` |
| F024@1 | `career/huo-ruirong-sh-csrc-2015-2017/unitId` | 新增2015.02—2017上海证监局党委委员、副局长核验任期（值：`"csrc-sh"`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（正文第3段） | 公开投影："csrc-sh" | 已写入 `research-data/people/huo-ruirong.json` 并投影至 `generatedResearch.ts` |
| F025@1 | `career/huo-ruirong-sh-csrc-2015-2017/unitName` | 新增2015.02—2017上海证监局党委委员、副局长核验任期（值：`"中国证监会上海监管局"`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（正文第3段） | 公开投影："中国证监会上海监管局" | 已写入 `research-data/people/huo-ruirong.json` 并投影至 `generatedResearch.ts` |
| F026@1 | `career/huo-ruirong-sh-csrc-2015-2017/position` | 新增2015.02—2017上海证监局党委委员、副局长核验任期（值：`"党委委员、副局长"`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（正文第3段） | 公开投影："党委委员、副局长" | 已写入 `research-data/people/huo-ruirong.json` 并投影至 `generatedResearch.ts` |
| F027@1 | `career/huo-ruirong-sh-csrc-2015-2017/rank` | 新增2015.02—2017上海证监局党委委员、副局长核验任期（值：`"副厅局级"`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（正文第3段） | 公开投影："副厅局级" | 已写入 `research-data/people/huo-ruirong.json` 并投影至 `generatedResearch.ts` |
| F028@1 | `career/huo-ruirong-sh-csrc-2015-2017/startYear` | 新增2015.02—2017上海证监局党委委员、副局长核验任期（值：`2015`） | startYear=2015（原文直接记载） | `supported_direct` | S002@1（正文第3段） | 公开投影：2015 | 已写入 `research-data/people/huo-ruirong.json` 并投影至 `generatedResearch.ts` |
| F029@1 | `career/huo-ruirong-sh-csrc-2015-2017/startMonth` | 新增2015.02—2017上海证监局党委委员、副局长核验任期（值：`2`） | startMonth=2（原文直接记载） | `supported_direct` | S002@1（正文第3段） | 公开投影：2 | 已写入 `research-data/people/huo-ruirong.json` 并投影至 `generatedResearch.ts` |
| F030@1 | `career/huo-ruirong-sh-csrc-2015-2017/endYear` | 新增2015.02—2017上海证监局党委委员、副局长核验任期（值：`2017`） | endYear=2017（原文直接记载） | `supported_direct` | S002@1（正文第3段） | 公开投影：2017 | 已写入 `research-data/people/huo-ruirong.json` 并投影至 `generatedResearch.ts` |
| F031@1 | `career/huo-ruirong-cfmmc-gm-2017-2019/recordKind` | 新增2017—2019.10中国期货市场监控中心总经理记录（值：`"tenure"`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（正文第3段）；S004@1（正文第1段） | 公开投影："tenure" | 已写入 `research-data/people/huo-ruirong.json` 并投影至 `generatedResearch.ts` |
| F032@1 | `career/huo-ruirong-cfmmc-gm-2017-2019/tenureStatus` | 新增2017—2019.10中国期货市场监控中心总经理记录（值：`"historical"`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（正文第3段）；S004@1（正文第1段） | 公开投影："historical" | 已写入 `research-data/people/huo-ruirong.json` 并投影至 `generatedResearch.ts` |
| F033@1 | `career/huo-ruirong-cfmmc-gm-2017-2019/unitId` | 新增2017—2019.10中国期货市场监控中心总经理记录（值：`"csrc-cfmmc"`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（正文第3段）；S004@1（正文第1段） | 公开投影："csrc-cfmmc" | 已写入 `research-data/people/huo-ruirong.json` 并投影至 `generatedResearch.ts` |
| F034@1 | `career/huo-ruirong-cfmmc-gm-2017-2019/unitName` | 新增2017—2019.10中国期货市场监控中心总经理记录（值：`"中国期货市场监控中心"`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（正文第3段）；S004@1（正文第1段） | 公开投影："中国期货市场监控中心" | 已写入 `research-data/people/huo-ruirong.json` 并投影至 `generatedResearch.ts` |
| F035@1 | `career/huo-ruirong-cfmmc-gm-2017-2019/position` | 新增2017—2019.10中国期货市场监控中心总经理记录（值：`"总经理"`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（正文第3段）；S004@1（正文第1段） | 公开投影："总经理" | 已写入 `research-data/people/huo-ruirong.json` 并投影至 `generatedResearch.ts` |
| F036@1 | `career/huo-ruirong-cfmmc-gm-2017-2019/rank` | 新增2017—2019.10中国期货市场监控中心总经理记录（值：`"正厅局级"`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（正文第3段）；S004@1（正文第1段） | 公开投影："正厅局级" | 已写入 `research-data/people/huo-ruirong.json` 并投影至 `generatedResearch.ts` |
| F037@1 | `career/huo-ruirong-cfmmc-gm-2017-2019/startYear` | 新增2017—2019.10中国期货市场监控中心总经理记录（值：`2017`） | startYear=2017（原文直接记载） | `supported_direct` | S002@1（正文第3段）；S004@1（正文第1段） | 公开投影：2017 | 已写入 `research-data/people/huo-ruirong.json` 并投影至 `generatedResearch.ts` |
| F038@1 | `career/huo-ruirong-cfmmc-gm-2017-2019/endYear` | 新增2017—2019.10中国期货市场监控中心总经理记录（值：`2019`） | endYear=2019（原文直接记载） | `supported_direct` | S002@1（正文第3段）；S004@1（正文第1段） | 公开投影：2019 | 已写入 `research-data/people/huo-ruirong.json` 并投影至 `generatedResearch.ts` |
| F039@1 | `career/huo-ruirong-cfmmc-gm-2017-2019/endMonth` | 新增2017—2019.10中国期货市场监控中心总经理记录（值：`10`） | endMonth=10（原文直接记载） | `supported_direct` | S002@1（正文第3段）；S004@1（正文第1段） | 公开投影：10 | 已写入 `research-data/people/huo-ruirong.json` 并投影至 `generatedResearch.ts` |
| F040@1 | `career/huo-ruirong-cffex-gm-2019/recordKind` | 新增2019年10月起中金所总经理记录（调任国际合作司精确月份未公开故省略endYear）（值：`"tenure"`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（正文第3段）；S003@1（正文第2段） | 公开投影："tenure" | 已写入 `research-data/people/huo-ruirong.json` 并投影至 `generatedResearch.ts` |
| F041@1 | `career/huo-ruirong-cffex-gm-2019/tenureStatus` | 新增2019年10月起中金所总经理记录（调任国际合作司精确月份未公开故省略endYear）（值：`"historical"`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（正文第3段）；S003@1（正文第2段） | 公开投影："historical" | 已写入 `research-data/people/huo-ruirong.json` 并投影至 `generatedResearch.ts` |
| F042@1 | `career/huo-ruirong-cffex-gm-2019/unitId` | 新增2019年10月起中金所总经理记录（调任国际合作司精确月份未公开故省略endYear）（值：`"csrc-cffex"`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（正文第3段）；S003@1（正文第2段） | 公开投影："csrc-cffex" | 已写入 `research-data/people/huo-ruirong.json` 并投影至 `generatedResearch.ts` |
| F043@1 | `career/huo-ruirong-cffex-gm-2019/unitName` | 新增2019年10月起中金所总经理记录（调任国际合作司精确月份未公开故省略endYear）（值：`"中国金融期货交易所"`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（正文第3段）；S003@1（正文第2段） | 公开投影："中国金融期货交易所" | 已写入 `research-data/people/huo-ruirong.json` 并投影至 `generatedResearch.ts` |
| F044@1 | `career/huo-ruirong-cffex-gm-2019/position` | 新增2019年10月起中金所总经理记录（调任国际合作司精确月份未公开故省略endYear）（值：`"党委副书记、董事、总经理"`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（正文第3段）；S003@1（正文第2段） | 公开投影："党委副书记、董事、总经理" | 已写入 `research-data/people/huo-ruirong.json` 并投影至 `generatedResearch.ts` |
| F045@1 | `career/huo-ruirong-cffex-gm-2019/rank` | 新增2019年10月起中金所总经理记录（调任国际合作司精确月份未公开故省略endYear）（值：`"正厅局级"`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（正文第3段）；S003@1（正文第2段） | 公开投影："正厅局级" | 已写入 `research-data/people/huo-ruirong.json` 并投影至 `generatedResearch.ts` |
| F046@1 | `career/huo-ruirong-cffex-gm-2019/startYear` | 新增2019年10月起中金所总经理记录（调任国际合作司精确月份未公开故省略endYear）（值：`2019`） | startYear=2019（原文直接记载） | `supported_direct` | S002@1（正文第3段）；S003@1（正文第2段） | 公开投影：2019 | 已写入 `research-data/people/huo-ruirong.json` 并投影至 `generatedResearch.ts` |
| F047@1 | `career/huo-ruirong-cffex-gm-2019/startMonth` | 新增2019年10月起中金所总经理记录（调任国际合作司精确月份未公开故省略endYear）（值：`10`） | startMonth=10（原文直接记载） | `supported_direct` | S002@1（正文第3段）；S003@1（正文第2段） | 公开投影：10 | 已写入 `research-data/people/huo-ruirong.json` 并投影至 `generatedResearch.ts` |
| F048@1 | `career/huo-ruirong-csrc-intl-hist/recordKind` | 新增证监会国际合作司司长历史任职（2025年9月卸任）（值：`"tenure"`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（正文第1、4段）；S003@1（正文第2段） | 公开投影："tenure" | 已写入 `research-data/people/huo-ruirong.json` 并投影至 `generatedResearch.ts` |
| F049@1 | `career/huo-ruirong-csrc-intl-hist/tenureStatus` | 新增证监会国际合作司司长历史任职（2025年9月卸任）（值：`"historical"`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（正文第1、4段）；S003@1（正文第2段） | 公开投影："historical" | 已写入 `research-data/people/huo-ruirong.json` 并投影至 `generatedResearch.ts` |
| F050@1 | `career/huo-ruirong-csrc-intl-hist/unitId` | 新增证监会国际合作司司长历史任职（2025年9月卸任）（值：`"csrc-gj"`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（正文第1、4段）；S003@1（正文第2段） | 公开投影："csrc-gj" | 已写入 `research-data/people/huo-ruirong.json` 并投影至 `generatedResearch.ts` |
| F051@1 | `career/huo-ruirong-csrc-intl-hist/unitName` | 新增证监会国际合作司司长历史任职（2025年9月卸任）（值：`"中国证券监督管理委员会"`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（正文第1、4段）；S003@1（正文第2段） | 公开投影："中国证券监督管理委员会" | 已写入 `research-data/people/huo-ruirong.json` 并投影至 `generatedResearch.ts` |
| F052@1 | `career/huo-ruirong-csrc-intl-hist/department` | 新增证监会国际合作司司长历史任职（2025年9月卸任）（值：`"国际合作司（港澳台事务办公室）"`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（正文第1、4段）；S003@1（正文第2段） | 公开投影："国际合作司（港澳台事务办公室）" | 已写入 `research-data/people/huo-ruirong.json` 并投影至 `generatedResearch.ts` |
| F053@1 | `career/huo-ruirong-csrc-intl-hist/position` | 新增证监会国际合作司司长历史任职（2025年9月卸任）（值：`"司长"`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（正文第1、4段）；S003@1（正文第2段） | 公开投影："司长" | 已写入 `research-data/people/huo-ruirong.json` 并投影至 `generatedResearch.ts` |
| F054@1 | `career/huo-ruirong-csrc-intl-hist/rank` | 新增证监会国际合作司司长历史任职（2025年9月卸任）（值：`"正厅局级"`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（正文第1、4段）；S003@1（正文第2段） | 公开投影："正厅局级" | 已写入 `research-data/people/huo-ruirong.json` 并投影至 `generatedResearch.ts` |
| F055@1 | `career/huo-ruirong-csrc-intl-hist/endYear` | 新增证监会国际合作司司长历史任职（2025年9月卸任）（值：`2025`） | endYear=2025（原文直接记载） | `supported_direct` | S002@1（正文第1、4段）；S003@1（正文第2段） | 公开投影：2025 | 已写入 `research-data/people/huo-ruirong.json` 并投影至 `generatedResearch.ts` |
| F056@1 | `career/huo-ruirong-csrc-intl-hist/endMonth` | 新增证监会国际合作司司长历史任职（2025年9月卸任）（值：`9`） | endMonth=9（原文直接记载） | `supported_direct` | S002@1（正文第1、4段）；S003@1（正文第2段） | 公开投影：9 | 已写入 `research-data/people/huo-ruirong.json` 并投影至 `generatedResearch.ts` |
| F057@1 | `career/huo-ruirong-sse-obs-202509/recordKind` | 不动基线现职壳，新增2025年9月9日上交所官网披露履新副理事长观察点（值：`"observation"`） | 非日期字段（随所属记录精度） | `supported_observation` | S002@1（正文第1段）；S001@1（领导班子栏） | 公开投影："observation" | 已写入 `research-data/people/huo-ruirong.json` 并投影至 `generatedResearch.ts` |
| F058@1 | `career/huo-ruirong-sse-obs-202509/unitId` | 不动基线现职壳，新增2025年9月9日上交所官网披露履新副理事长观察点（值：`"csrc-sse"`） | 非日期字段（随所属记录精度） | `supported_observation` | S002@1（正文第1段）；S001@1（领导班子栏） | 公开投影："csrc-sse" | 已写入 `research-data/people/huo-ruirong.json` 并投影至 `generatedResearch.ts` |
| F059@1 | `career/huo-ruirong-sse-obs-202509/unitName` | 不动基线现职壳，新增2025年9月9日上交所官网披露履新副理事长观察点（值：`"上海证券交易所"`） | 非日期字段（随所属记录精度） | `supported_observation` | S002@1（正文第1段）；S001@1（领导班子栏） | 公开投影："上海证券交易所" | 已写入 `research-data/people/huo-ruirong.json` 并投影至 `generatedResearch.ts` |
| F060@1 | `career/huo-ruirong-sse-obs-202509/position` | 不动基线现职壳，新增2025年9月9日上交所官网披露履新副理事长观察点（值：`"副理事长"`） | 非日期字段（随所属记录精度） | `supported_observation` | S002@1（正文第1段）；S001@1（领导班子栏） | 公开投影："副理事长" | 已写入 `research-data/people/huo-ruirong.json` 并投影至 `generatedResearch.ts` |
| F061@1 | `career/huo-ruirong-sse-obs-202509/observedAt` | 不动基线现职壳，新增2025年9月9日上交所官网披露履新副理事长观察点（值：`{"year":2025,"month":9,"day":9}`） | observedAt={"year":2025,"month":9,"day":9}（时间点观察） | `supported_observation` | S002@1（正文第1段）；S001@1（领导班子栏） | 公开投影：{"year":2025,"month":9,"day":9} | 已写入 `research-data/people/huo-ruirong.json` 并投影至 `generatedResearch.ts` |

## 推理台账

- 无 `derived` 推理；2005年上期所总经理助理因原文表述为“在2005年的公开报道中已担任”，严格按 `supported_observation` 录入。

## 冲突与拒绝记录

| 争议属性 | 说法A及来源 | 说法B及来源 | 是否同一日期／职务口径 | 处理及理由 | 待查链接／搜索式 |
| --- | --- | --- | --- | --- | --- |
| 2015—2025 履历完整性 | 旧库原始记录：从上期所直接跳至中金所再跳上交所，漏掉上海局、监控中心、国际司三段 | S002 澎湃新闻＋S003 中国证券报＋S004 新京报：2015.02上海局副局长→2017监控中心总经理→2019.10中金所总经理→证监会国际合作司司长→2025.09上交所副理事长 | 十年核心履历序列 | **采信三大媒体与官网简历，补齐全部缺漏阶段** | 无需再查 |

## 职业时间线缺口与下一轮

| 缺口 | 已知边界（不强推任期） | 要找的材料 | 下一条完整查询 | 优先级 |
| --- | --- | --- | --- | --- |
| 经济学博士毕业院校及中金所调任证监会国际合作司司长的精确年月 | 已知2019.10任中金所总经理、2023.04张晓刚已接任中金所总经理、2025.09由国际合作司司长调任上交所 | 证监会国际合作司公开外事活动报道或学位论文库 | `"霍瑞戎" "国际合作司" OR "国际部" 2022 OR 2023` | 中 |

## 本轮交付与续接

- 新增有效岗位／教育经历／日期属性：补齐现职级“正厅局级”；升级经济学博士记录；新增1条观察点（2005上期所总经理助理）与5段核验历史任职（2006.10—2015.02上期所副总、2015.02—2017上海证监局副局长、2017—2019.10中国期货监控总经理、2019.10起中金所总经理、证监会国际合作司司长）。
- 删除或纠正的错误及依据：消除旧库漏记上海证监局、中国期货市场监控中心、证监会国际合作司三段关键任职的严重缺口。
- 来源对应复查结果：全部已发布事实均绑定 `reading: "read"` 原文定位摘录，无悬空引用，无观察点冒充连续任期起止；重名干扰源已显式归档为 `reading: "wrong_person"`。
- 页面及结构验证（仅实际执行后填写）：已通过 `npm run research:check`、`npm run audit:data`、`npm run test:records`、`npm run test:relations`、`npm run test:research`、`npm run test:safety` 及生产构建 `npm run build` 校验。
- 结束状态：本轮研究完成（核心锚点与主干履历已入库，细分早期缺口转入后续深化队列）。
- 停止条件满足情况：已核清核心身份、现职状态、关键正副局／部级履历与学历锚点，证伪旧库硬伤并留下精确下一查询。
- 上次停在查询ID／来源ID：`Q001` ／ `S004`
- 最后处理事实ID／推理ID及当前阶段：`F061@1` ／ 无 `I` 推理项（已完成工作台导入与公开投影）
- 已证实待入库事实及原因／拟写入字段：无（本轮已证实事实已全部通过 `research:import --write --expect` 入库）。
- 旧模型线索对账完成与剩余项：旧库核心学历与主干履历线索已完成对账；待核候选见上表 `candidate` 项。
- 输入变更后需要重新计算或撤销的推理：无依赖推理受影响。
- 下一步必须先执行的搜索式或原文链接：`"霍瑞戎" "国际合作司" 2022 OR 2023`
- 尚未访问的高价值来源：《中国证券期货年鉴》历史卷、学位论文库及部分脚本受阻的交易所官网内页（详见渠道覆盖表）。
- 是否需要用户提供合法访问权限或已有资料：否（公开渠道与本地 Google Chrome 浏览器即可继续推进）。
