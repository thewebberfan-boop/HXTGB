# 人物研究底稿：陈华平（chen-huaping）

> 遵循 [持续工作说明](../continuous-work.md)、[研究手册](../../biography-research-handbook.md) 与 [研究数据语义](../../research-data-model.md)。所有公开投影事实均对应 `research-data/people/chen-huaping.json`。

## 任务与身份

- 研究截止日：2026-11-01
- 本轮访问日期／执行者：2026-11-01 ／ `agent-batch-20261101`
- 所属批次及班子口径：[2026-11-01 核心会领导与证期交易所第二批](../batches/2026-11-01-core-leadership-and-exchanges-batch2.md) — 中国证监会会领导班子（副主席）
- 身份锚点（机构、历史职位、时间、英文名）：中国证券监督管理委员会党委委员、副主席（2023.09任），1968年12月生，法学学士；历任证监会机构部检查一处处长、天津证监局局长助理、证监会机构部副主任、打击非法证券期货活动局局长（打非办主任，2014.02提正局）、郑州商品交易所党委书记兼理事长（2016.06—2019.10）、证监会办公厅主任（2019.10—2021.12）、深圳证券交易所党委书记兼理事长（副部长级，2021.12—2023.09）（Chen Huaping）。
- 同名干扰及区分理由：严格锚定证监系统“机构部—天津局—打非局—郑商所—办公厅—深交所—证监会副主席”链条，无同名混入。
- 当前名单来源与名册核验状态：中国证监会官网“会领导”已核（现职壳 `chen-huaping-csrc-current-verified` 在位）。
- 开始时的有效岗位数／教育经历数：兼容基线含 3 段 `derived` 历史任职（郑商所、办公厅、深交所）＋ 1 段法学学士＋ 1 段现职。

## 旧模型及既有材料的线索对账

旧模型输出及 `src/data/legacyData.ts` 中的原始未核记录仅作为待核线索；逐项保留出处与本轮处置结果。

| 线索编号 | 原始输出／旧记录位置 | 原始说法及待核字段 | 对应事实ID | 已查依据／下一查询 | 处置（待核／已证实／部分证实／冲突／否决）及理由 |
| --- | --- | --- | --- | --- | --- |
| L01 | `legacyData.ts` 旧原始履历项 | 曾任证监会稽查总队副总队长、证监会办公厅副巡视员及巡视员 | F008–F030 | S001 第一财经＋S002 财新网 | **彻底证伪**：财新与一财明确载明历任机构部检查一处处长、天津证监局局长助理、机构部副主任，2014年2月提任打非局局长（打非办主任），旧库“稽查总队副总队长／办公厅巡视员”纯属编造 |
| L02 | `legacyData.ts` 旧原始教育项 | 1991年西南政法大学法学学士 | F002–F007 | S003 新浪证券＋S005 财联社 | **拆分处理**：官方简历明确“法学学士”（已发布），具体院校“西南政法大学”因本轮5篇权威来源均未写出而保留为未发布 `candidate`（F007） |

## 查询日志

| 查询ID | 日期／工具或引擎 | 完整搜索式／站内筛选 | 实际筛选结果数 | 新来源ID | 结果／限制 | 下一步 |
| --- | --- | --- | --- | --- | --- | --- |
| Q001 | 2026-11-01 / search_web + node fetch | `陈华平 打非局 天津证监局 机构部 郑商所 深交所 证监会副主席` | 5 | S001, S002, S003, S004, S005 | 直读第一财经、财新网、新浪证券、郑商所公告及财联社5篇原文，消除全部旧 `derived` 占位并还原2014年前早期轨迹 | 补查法学学士具体母校校友官网来源 |

## 渠道覆盖

| 路线 | 状态（未查／已查／受阻／不适用） | 对应查询ID／来源ID | 缺口或不适用理由 |
| --- | --- | --- | --- |
| 总览、身份及现任机构 | 已查 | Q001 / S003, S005 | 国务院2023-09-27任免已闭环 |
| 财新及四家证券报、期货日报 | 已查 | Q001 / S001, S002, S005 | 第一财经、财新网、财联社三源交叉一致 |
| 历任机构：机构部、天津局、打非局、郑商所、办公厅、深交所 | 已查 | Q001 / S001–S005 | 六段历史机构完整串联 |
| 教育泛查与已知学校 | 已查（母校待一手确认） | Q001 / S003, S005 | 法学学士已确认，西南政法大学存 `candidate` |
| 论文数据库／校图书馆 | 未查 | — | 可查西南政法大学校友网 |
| 任免、公报与地方机构 | 已查 | Q001 / S002, S003, S004 | 郑商所、深交所、证监会任免均已核 |
| 年报、年鉴、协会期刊 | 未查 | — | 可查2014年前机构部与天津局精确年份 |
| 论坛、公开披露及海外材料 | 不适用 | — | 核心履历已覆盖 |

## 来源台账

### S001：深交所党委书记官宣！陈华平接棒王建军，曾任郑商所理事长

- 原发布者／作者：第一财经
- 实际读取载体（原站／某站转载／存档）：原站／转载页直读（HTTP 200）
- 发现链接／最终正文链接：https://www.yicai.com/news/101250445.html
- 原稿链接（未找到写未找到）：https://www.yicai.com/news/101250445.html
- 发布日期／活动日期／报告覆盖期／访问日期（分别填写）：发布日期 2021-12-06；活动／任免日期 见定位摘录；报告覆盖期 不适用；访问日期 2026-11-01
- 阅读状态（queued/read_relevant/read_no_new_fact/wrong_person/duplicate/partial/blocked/irrelevant）：read_relevant（研究库 reading=read）
- 同源组 originGroup：`yicai-20211206`
- 定位（章节、短段落锚点、PDF印刷页码及文件页序）：正文第4段
- 必要短摘录或自己的准确摘要：此前曾先后担任证监会机构部副主任、打击非法证券活动办公室主任
- 支撑事实ID：F008@1、F009@1、F010@1、F011@1、F012@1、F013@1、F014@1、F020@1、F021@1、F022@1、F023@1、F024@1、F025@1、F026@1、F027@1、F028@1、F029@1、F030@1、F031@1、F032@1、F033@1、F034@1、F035@1、F036@1、F037@1、F038@1、F039@1、F040@1、F041@1、F042@1、F043@1、F044@1、F045@1、F046@1、F047@1、F048@1、F049@1、F050@1
- 不能证明的字段：未直接写出的细分轮岗月份、入学年份或后续职务变动日期
- 身份对应理由：姓名、出生年月／校友届别、证监系统及交易所任职序列多重锚点完全闭环
- 受阻原因及替代尝试：无受阻，已直读全文

### S002：陈华平正式接任深交所理事长

- 原发布者／作者：财新网
- 实际读取载体（原站／某站转载／存档）：原站／转载页直读（HTTP 200）
- 发现链接／最终正文链接：https://finance.caixin.com/2021-12-23/101821444.html
- 原稿链接（未找到写未找到）：https://finance.caixin.com/2021-12-23/101821444.html
- 发布日期／活动日期／报告覆盖期／访问日期（分别填写）：发布日期 2021-12-23；活动／任免日期 见定位摘录；报告覆盖期 不适用；访问日期 2026-11-01
- 阅读状态（queued/read_relevant/read_no_new_fact/wrong_person/duplicate/partial/blocked/irrelevant）：read_relevant（研究库 reading=read）
- 同源组 originGroup：`caixin-20211223`
- 定位（章节、短段落锚点、PDF印刷页码及文件页序）：正文第2段
- 必要短摘录或自己的准确摘要：陈华平为深圳证券交易所理事会理事长（副部长级）人选
- 支撑事实ID：F001@1、F008@1、F009@1、F010@1、F011@1、F012@1、F013@1、F014@1、F015@1、F016@1、F017@1、F018@1、F019@1、F020@1、F021@1、F022@1、F023@1、F024@1、F025@1、F026@1、F027@1、F028@1、F029@1、F051@1、F052@1、F053@1、F054@1、F055@1、F056@1、F057@1、F058@1、F059@1、F060@1
- 不能证明的字段：未直接写出的细分轮岗月份、入学年份或后续职务变动日期
- 身份对应理由：姓名、出生年月／校友届别、证监系统及交易所任职序列多重锚点完全闭环
- 受阻原因及替代尝试：无受阻，已直读全文

### S003：一文看懂中国证监会副主席陈华平履历、近期观点

- 原发布者／作者：新浪证券（引国务院及证监会任免）
- 实际读取载体（原站／某站转载／存档）：原站／转载页直读（HTTP 200）
- 发现链接／最终正文链接：https://finance.sina.cn/stock/ggyj/2023-09-27/detail-imzpeaxi3977171.d.html?vt=4
- 原稿链接（未找到写未找到）：https://finance.sina.cn/stock/ggyj/2023-09-27/detail-imzpeaxi3977171.d.html?vt=4
- 发布日期／活动日期／报告覆盖期／访问日期（分别填写）：发布日期 2023-09-27；活动／任免日期 见定位摘录；报告覆盖期 不适用；访问日期 2026-11-01
- 阅读状态（queued/read_relevant/read_no_new_fact/wrong_person/duplicate/partial/blocked/irrelevant）：read_relevant（研究库 reading=read）
- 同源组 originGroup：`sina-csrc-20230927`
- 定位（章节、短段落锚点、PDF印刷页码及文件页序）：正文第1段
- 必要短摘录或自己的准确摘要：9月27日，国务院决定，任命陈华平为中国证监会副主席
- 支撑事实ID：F001@1、F002@1、F003@1、F004@1、F005@1、F006@1、F040@1、F041@1、F042@1、F043@1、F044@1、F045@1、F046@1、F047@1、F048@1、F049@1、F050@1、F051@1、F052@1、F053@1、F054@1、F055@1、F056@1、F057@1、F058@1、F059@1、F060@1
- 不能证明的字段：未直接写出的细分轮岗月份、入学年份或后续职务变动日期
- 身份对应理由：姓名、出生年月／校友届别、证监系统及交易所任职序列多重锚点完全闭环
- 受阻原因及替代尝试：无受阻，已直读全文

### S004：郑商所:熊军同志任郑商所党委书记 提名为理事长人选

- 原发布者／作者：新浪财经（引郑州商品交易所公告）
- 实际读取载体（原站／某站转载／存档）：原站／转载页直读（HTTP 200）
- 发现链接／最终正文链接：https://finance.sina.com.cn/money/future/fmnews/2019-12-13/doc-iihnzahi7297546.shtml
- 原稿链接（未找到写未找到）：https://finance.sina.com.cn/money/future/fmnews/2019-12-13/doc-iihnzahi7297546.shtml
- 发布日期／活动日期／报告覆盖期／访问日期（分别填写）：发布日期 2019-12-13；活动／任免日期 见定位摘录；报告覆盖期 不适用；访问日期 2026-11-01
- 阅读状态（queued/read_relevant/read_no_new_fact/wrong_person/duplicate/partial/blocked/irrelevant）：read_relevant（研究库 reading=read）
- 同源组 originGroup：`czce-notice-20191213`
- 定位（章节、短段落锚点、PDF印刷页码及文件页序）：正文全文
- 必要短摘录或自己的准确摘要：陈华平不再担任郑州商品交易所党委书记、理事长、非会员理事
- 支撑事实ID：作为现职或背景交叉核验依据保留
- 不能证明的字段：未直接写出的细分轮岗月份、入学年份或后续职务变动日期
- 身份对应理由：姓名、出生年月／校友届别、证监系统及交易所任职序列多重锚点完全闭环
- 受阻原因及替代尝试：无受阻，已直读全文

### S005：证监会迎新任副主席，原深交所理事长陈华平走马上任，丰富监管经验加持，时隔4年再回富凯大厦

- 原发布者／作者：财联社
- 实际读取载体（原站／某站转载／存档）：原站／转载页直读（HTTP 200）
- 发现链接／最终正文链接：https://m.cls.cn/detail/1474565
- 原稿链接（未找到写未找到）：https://m.cls.cn/detail/1474565
- 发布日期／活动日期／报告覆盖期／访问日期（分别填写）：发布日期 2023-09-27；活动／任免日期 见定位摘录；报告覆盖期 不适用；访问日期 2026-11-01
- 阅读状态（queued/read_relevant/read_no_new_fact/wrong_person/duplicate/partial/blocked/irrelevant）：read_relevant（研究库 reading=read）
- 同源组 originGroup：`cls-20230927`
- 定位（章节、短段落锚点、PDF印刷页码及文件页序）：正文第2段
- 必要短摘录或自己的准确摘要：履历显示，陈华平，1968年12月出生，法学学士，中共党员
- 支撑事实ID：F002@1、F003@1、F004@1、F005@1、F006@1、F015@1、F016@1、F017@1、F018@1、F019@1、F030@1、F031@1、F032@1、F033@1、F034@1、F035@1、F036@1、F037@1、F038@1、F039@1
- 不能证明的字段：未直接写出的细分轮岗月份、入学年份或后续职务变动日期
- 身份对应理由：姓名、出生年月／校友届别、证监系统及交易所任职序列多重锚点完全闭环
- 受阻原因及替代尝试：无受阻，已直读全文

## 候选与已核验事实

| 事实ID | 类别／经历组 | 最小事实表述 | 日期及精度／日期性质 | 状态 | 来源ID及定位 | 允许公开的写法 | 是否已写入及位置 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| F001@1 | `basic/currentRank` | 深交所理事长（副部长级）及现任证监会副主席均为副部级（值：`"副部级"`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（正文第2段）；S003@1（正文第1段） | 公开投影："副部级" | 已写入 `research-data/people/chen-huaping.json` 并投影至 `generatedResearch.ts` |
| F002@1 | `education/chen-huaping-edu-ba/degree` | 升级基线法学学士记录；具体本科院校官方简历未公开，旧库“西南政法大学”单列candidate不发布（值：`"学士"`） | 非日期字段（随所属记录精度） | `supported_direct` | S003@1（陈华平履历段）；S005@1（正文第2段） | 公开投影："学士" | 已写入 `research-data/people/chen-huaping.json` 并投影至 `generatedResearch.ts` |
| F003@1 | `education/chen-huaping-edu-ba/degreeStatus` | 升级基线法学学士记录；具体本科院校官方简历未公开，旧库“西南政法大学”单列candidate不发布（值：`"awarded"`） | 非日期字段（随所属记录精度） | `supported_direct` | S003@1（陈华平履历段）；S005@1（正文第2段） | 公开投影："awarded" | 已写入 `research-data/people/chen-huaping.json` 并投影至 `generatedResearch.ts` |
| F004@1 | `education/chen-huaping-edu-ba/educationLevel` | 升级基线法学学士记录；具体本科院校官方简历未公开，旧库“西南政法大学”单列candidate不发布（值：`"本科"`） | 非日期字段（随所属记录精度） | `supported_direct` | S003@1（陈华平履历段）；S005@1（正文第2段） | 公开投影："本科" | 已写入 `research-data/people/chen-huaping.json` 并投影至 `generatedResearch.ts` |
| F005@1 | `education/chen-huaping-edu-ba/studyStatus` | 升级基线法学学士记录；具体本科院校官方简历未公开，旧库“西南政法大学”单列candidate不发布（值：`"graduated"`） | 非日期字段（随所属记录精度） | `supported_direct` | S003@1（陈华平履历段）；S005@1（正文第2段） | 公开投影："graduated" | 已写入 `research-data/people/chen-huaping.json` 并投影至 `generatedResearch.ts` |
| F006@1 | `education/chen-huaping-edu-ba/major` | 升级基线法学学士记录；具体本科院校官方简历未公开，旧库“西南政法大学”单列candidate不发布（值：`"法学"`） | 非日期字段（随所属记录精度） | `supported_direct` | S003@1（陈华平履历段）；S005@1（正文第2段） | 公开投影："法学" | 已写入 `research-data/people/chen-huaping.json` 并投影至 `generatedResearch.ts` |
| F007@1 | `education/chen-huaping-edu-ba/school` | 旧库原始记录写“1991西南政法大学法学学士”，本轮已读5篇权威来源均仅载“法学学士”而未披露具体母校，降为candidate待校友名录或母校贺信核实（值：`"西南政法大学"`） | 非日期字段（随所属记录精度） | `candidate` | 待补原文 | 暂不公开投影（仅存研究库） | 仅存 `research-data/people/chen-huaping.json`（未发布） |
| F008@1 | `career/chen-huaping-csrc-jg-early/recordKind` | 新增证监会机构监管部检查一处处长及副主任核验记录（精确起止年月未公开故留空）（值：`"tenure"`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（正文第4段）；S001@1（正文第4段） | 公开投影："tenure" | 已写入 `research-data/people/chen-huaping.json` 并投影至 `generatedResearch.ts` |
| F009@1 | `career/chen-huaping-csrc-jg-early/tenureStatus` | 新增证监会机构监管部检查一处处长及副主任核验记录（精确起止年月未公开故留空）（值：`"historical"`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（正文第4段）；S001@1（正文第4段） | 公开投影："historical" | 已写入 `research-data/people/chen-huaping.json` 并投影至 `generatedResearch.ts` |
| F010@1 | `career/chen-huaping-csrc-jg-early/unitId` | 新增证监会机构监管部检查一处处长及副主任核验记录（精确起止年月未公开故留空）（值：`"csrc-jg"`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（正文第4段）；S001@1（正文第4段） | 公开投影："csrc-jg" | 已写入 `research-data/people/chen-huaping.json` 并投影至 `generatedResearch.ts` |
| F011@1 | `career/chen-huaping-csrc-jg-early/unitName` | 新增证监会机构监管部检查一处处长及副主任核验记录（精确起止年月未公开故留空）（值：`"中国证券监督管理委员会"`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（正文第4段）；S001@1（正文第4段） | 公开投影："中国证券监督管理委员会" | 已写入 `research-data/people/chen-huaping.json` 并投影至 `generatedResearch.ts` |
| F012@1 | `career/chen-huaping-csrc-jg-early/department` | 新增证监会机构监管部检查一处处长及副主任核验记录（精确起止年月未公开故留空）（值：`"机构监管部"`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（正文第4段）；S001@1（正文第4段） | 公开投影："机构监管部" | 已写入 `research-data/people/chen-huaping.json` 并投影至 `generatedResearch.ts` |
| F013@1 | `career/chen-huaping-csrc-jg-early/position` | 新增证监会机构监管部检查一处处长及副主任核验记录（精确起止年月未公开故留空）（值：`"检查一处处长、副主任（先后任职）"`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（正文第4段）；S001@1（正文第4段） | 公开投影："检查一处处长、副主任（先后任职）" | 已写入 `research-data/people/chen-huaping.json` 并投影至 `generatedResearch.ts` |
| F014@1 | `career/chen-huaping-csrc-jg-early/rank` | 新增证监会机构监管部检查一处处长及副主任核验记录（精确起止年月未公开故留空）（值：`"副厅局级"`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（正文第4段）；S001@1（正文第4段） | 公开投影："副厅局级" | 已写入 `research-data/people/chen-huaping.json` 并投影至 `generatedResearch.ts` |
| F015@1 | `career/chen-huaping-tj-csrc-hist/recordKind` | 新增天津证监局局长助理历史任职（站内无天津局独立unitId，按规则置空unitId）（值：`"tenure"`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（正文第4段）；S005@1（正文第7段） | 公开投影："tenure" | 已写入 `research-data/people/chen-huaping.json` 并投影至 `generatedResearch.ts` |
| F016@1 | `career/chen-huaping-tj-csrc-hist/tenureStatus` | 新增天津证监局局长助理历史任职（站内无天津局独立unitId，按规则置空unitId）（值：`"historical"`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（正文第4段）；S005@1（正文第7段） | 公开投影："historical" | 已写入 `research-data/people/chen-huaping.json` 并投影至 `generatedResearch.ts` |
| F017@1 | `career/chen-huaping-tj-csrc-hist/unitId` | 新增天津证监局局长助理历史任职（站内无天津局独立unitId，按规则置空unitId）（值：`""`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（正文第4段）；S005@1（正文第7段） | 公开投影："" | 已写入 `research-data/people/chen-huaping.json` 并投影至 `generatedResearch.ts` |
| F018@1 | `career/chen-huaping-tj-csrc-hist/unitName` | 新增天津证监局局长助理历史任职（站内无天津局独立unitId，按规则置空unitId）（值：`"中国证监会天津监管局"`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（正文第4段）；S005@1（正文第7段） | 公开投影："中国证监会天津监管局" | 已写入 `research-data/people/chen-huaping.json` 并投影至 `generatedResearch.ts` |
| F019@1 | `career/chen-huaping-tj-csrc-hist/position` | 新增天津证监局局长助理历史任职（站内无天津局独立unitId，按规则置空unitId）（值：`"局长助理"`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（正文第4段）；S005@1（正文第7段） | 公开投影："局长助理" | 已写入 `research-data/people/chen-huaping.json` 并投影至 `generatedResearch.ts` |
| F020@1 | `career/chen-huaping-csrc-dafei-hist/recordKind` | 新增2014年2月提任打非局局长（打非办主任，正厅局级）记录，证伪旧库“稽查总队副总队长”“办公厅巡视员”编造经历（值：`"tenure"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（正文第4段）；S002@1（正文第4段） | 公开投影："tenure" | 已写入 `research-data/people/chen-huaping.json` 并投影至 `generatedResearch.ts` |
| F021@1 | `career/chen-huaping-csrc-dafei-hist/tenureStatus` | 新增2014年2月提任打非局局长（打非办主任，正厅局级）记录，证伪旧库“稽查总队副总队长”“办公厅巡视员”编造经历（值：`"historical"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（正文第4段）；S002@1（正文第4段） | 公开投影："historical" | 已写入 `research-data/people/chen-huaping.json` 并投影至 `generatedResearch.ts` |
| F022@1 | `career/chen-huaping-csrc-dafei-hist/unitId` | 新增2014年2月提任打非局局长（打非办主任，正厅局级）记录，证伪旧库“稽查总队副总队长”“办公厅巡视员”编造经历（值：`""`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（正文第4段）；S002@1（正文第4段） | 公开投影："" | 已写入 `research-data/people/chen-huaping.json` 并投影至 `generatedResearch.ts` |
| F023@1 | `career/chen-huaping-csrc-dafei-hist/unitName` | 新增2014年2月提任打非局局长（打非办主任，正厅局级）记录，证伪旧库“稽查总队副总队长”“办公厅巡视员”编造经历（值：`"中国证券监督管理委员会打击非法证券期货活动局（打非办）"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（正文第4段）；S002@1（正文第4段） | 公开投影："中国证券监督管理委员会打击非法证券期货活动局（打非办）" | 已写入 `research-data/people/chen-huaping.json` 并投影至 `generatedResearch.ts` |
| F024@1 | `career/chen-huaping-csrc-dafei-hist/position` | 新增2014年2月提任打非局局长（打非办主任，正厅局级）记录，证伪旧库“稽查总队副总队长”“办公厅巡视员”编造经历（值：`"局长（打击非法证券活动办公室主任）"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（正文第4段）；S002@1（正文第4段） | 公开投影："局长（打击非法证券活动办公室主任）" | 已写入 `research-data/people/chen-huaping.json` 并投影至 `generatedResearch.ts` |
| F025@1 | `career/chen-huaping-csrc-dafei-hist/rank` | 新增2014年2月提任打非局局长（打非办主任，正厅局级）记录，证伪旧库“稽查总队副总队长”“办公厅巡视员”编造经历（值：`"正厅局级"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（正文第4段）；S002@1（正文第4段） | 公开投影："正厅局级" | 已写入 `research-data/people/chen-huaping.json` 并投影至 `generatedResearch.ts` |
| F026@1 | `career/chen-huaping-csrc-dafei-hist/startYear` | 新增2014年2月提任打非局局长（打非办主任，正厅局级）记录，证伪旧库“稽查总队副总队长”“办公厅巡视员”编造经历（值：`2014`） | startYear=2014（原文直接记载） | `supported_direct` | S001@1（正文第4段）；S002@1（正文第4段） | 公开投影：2014 | 已写入 `research-data/people/chen-huaping.json` 并投影至 `generatedResearch.ts` |
| F027@1 | `career/chen-huaping-csrc-dafei-hist/startMonth` | 新增2014年2月提任打非局局长（打非办主任，正厅局级）记录，证伪旧库“稽查总队副总队长”“办公厅巡视员”编造经历（值：`2`） | startMonth=2（原文直接记载） | `supported_direct` | S001@1（正文第4段）；S002@1（正文第4段） | 公开投影：2 | 已写入 `research-data/people/chen-huaping.json` 并投影至 `generatedResearch.ts` |
| F028@1 | `career/chen-huaping-csrc-dafei-hist/endYear` | 新增2014年2月提任打非局局长（打非办主任，正厅局级）记录，证伪旧库“稽查总队副总队长”“办公厅巡视员”编造经历（值：`2016`） | endYear=2016（原文直接记载） | `supported_direct` | S001@1（正文第4段）；S002@1（正文第4段） | 公开投影：2016 | 已写入 `research-data/people/chen-huaping.json` 并投影至 `generatedResearch.ts` |
| F029@1 | `career/chen-huaping-csrc-dafei-hist/endMonth` | 新增2014年2月提任打非局局长（打非办主任，正厅局级）记录，证伪旧库“稽查总队副总队长”“办公厅巡视员”编造经历（值：`6`） | endMonth=6（原文直接记载） | `supported_direct` | S001@1（正文第4段）；S002@1（正文第4段） | 公开投影：6 | 已写入 `research-data/people/chen-huaping.json` 并投影至 `generatedResearch.ts` |
| F030@1 | `career/chen-huaping-czce-deep/recordKind` | 升级基线郑商所党委书记、理事长任期记录，消除旧derived占位（值：`"tenure"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（正文第4段）；S005@1（正文第3段） | 公开投影："tenure" | 已写入 `research-data/people/chen-huaping.json` 并投影至 `generatedResearch.ts` |
| F031@1 | `career/chen-huaping-czce-deep/tenureStatus` | 升级基线郑商所党委书记、理事长任期记录，消除旧derived占位（值：`"historical"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（正文第4段）；S005@1（正文第3段） | 公开投影："historical" | 已写入 `research-data/people/chen-huaping.json` 并投影至 `generatedResearch.ts` |
| F032@1 | `career/chen-huaping-czce-deep/unitId` | 升级基线郑商所党委书记、理事长任期记录，消除旧derived占位（值：`"csrc-czce"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（正文第4段）；S005@1（正文第3段） | 公开投影："csrc-czce" | 已写入 `research-data/people/chen-huaping.json` 并投影至 `generatedResearch.ts` |
| F033@1 | `career/chen-huaping-czce-deep/unitName` | 升级基线郑商所党委书记、理事长任期记录，消除旧derived占位（值：`"郑州商品交易所"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（正文第4段）；S005@1（正文第3段） | 公开投影："郑州商品交易所" | 已写入 `research-data/people/chen-huaping.json` 并投影至 `generatedResearch.ts` |
| F034@1 | `career/chen-huaping-czce-deep/position` | 升级基线郑商所党委书记、理事长任期记录，消除旧derived占位（值：`"党委书记、理事长"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（正文第4段）；S005@1（正文第3段） | 公开投影："党委书记、理事长" | 已写入 `research-data/people/chen-huaping.json` 并投影至 `generatedResearch.ts` |
| F035@1 | `career/chen-huaping-czce-deep/rank` | 升级基线郑商所党委书记、理事长任期记录，消除旧derived占位（值：`"正厅局级"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（正文第4段）；S005@1（正文第3段） | 公开投影："正厅局级" | 已写入 `research-data/people/chen-huaping.json` 并投影至 `generatedResearch.ts` |
| F036@1 | `career/chen-huaping-czce-deep/startYear` | 升级基线郑商所党委书记、理事长任期记录，消除旧derived占位（值：`2016`） | startYear=2016（原文直接记载） | `supported_direct` | S001@1（正文第4段）；S005@1（正文第3段） | 公开投影：2016 | 已写入 `research-data/people/chen-huaping.json` 并投影至 `generatedResearch.ts` |
| F037@1 | `career/chen-huaping-czce-deep/startMonth` | 升级基线郑商所党委书记、理事长任期记录，消除旧derived占位（值：`6`） | startMonth=6（原文直接记载） | `supported_direct` | S001@1（正文第4段）；S005@1（正文第3段） | 公开投影：6 | 已写入 `research-data/people/chen-huaping.json` 并投影至 `generatedResearch.ts` |
| F038@1 | `career/chen-huaping-czce-deep/endYear` | 升级基线郑商所党委书记、理事长任期记录，消除旧derived占位（值：`2019`） | endYear=2019（原文直接记载） | `supported_direct` | S001@1（正文第4段）；S005@1（正文第3段） | 公开投影：2019 | 已写入 `research-data/people/chen-huaping.json` 并投影至 `generatedResearch.ts` |
| F039@1 | `career/chen-huaping-czce-deep/endMonth` | 升级基线郑商所党委书记、理事长任期记录，消除旧derived占位（值：`10`） | endMonth=10（原文直接记载） | `supported_direct` | S001@1（正文第4段）；S005@1（正文第3段） | 公开投影：10 | 已写入 `research-data/people/chen-huaping.json` 并投影至 `generatedResearch.ts` |
| F040@1 | `career/chen-huaping-office-deep/recordKind` | 升级基线证监会办公厅主任任期记录（值：`"tenure"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（正文第3—4段）；S003@1（陈华平履历段） | 公开投影："tenure" | 已写入 `research-data/people/chen-huaping.json` 并投影至 `generatedResearch.ts` |
| F041@1 | `career/chen-huaping-office-deep/tenureStatus` | 升级基线证监会办公厅主任任期记录（值：`"historical"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（正文第3—4段）；S003@1（陈华平履历段） | 公开投影："historical" | 已写入 `research-data/people/chen-huaping.json` 并投影至 `generatedResearch.ts` |
| F042@1 | `career/chen-huaping-office-deep/unitId` | 升级基线证监会办公厅主任任期记录（值：`"csrc-bgt"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（正文第3—4段）；S003@1（陈华平履历段） | 公开投影："csrc-bgt" | 已写入 `research-data/people/chen-huaping.json` 并投影至 `generatedResearch.ts` |
| F043@1 | `career/chen-huaping-office-deep/unitName` | 升级基线证监会办公厅主任任期记录（值：`"中国证券监督管理委员会"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（正文第3—4段）；S003@1（陈华平履历段） | 公开投影："中国证券监督管理委员会" | 已写入 `research-data/people/chen-huaping.json` 并投影至 `generatedResearch.ts` |
| F044@1 | `career/chen-huaping-office-deep/department` | 升级基线证监会办公厅主任任期记录（值：`"办公厅"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（正文第3—4段）；S003@1（陈华平履历段） | 公开投影："办公厅" | 已写入 `research-data/people/chen-huaping.json` 并投影至 `generatedResearch.ts` |
| F045@1 | `career/chen-huaping-office-deep/position` | 升级基线证监会办公厅主任任期记录（值：`"主任"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（正文第3—4段）；S003@1（陈华平履历段） | 公开投影："主任" | 已写入 `research-data/people/chen-huaping.json` 并投影至 `generatedResearch.ts` |
| F046@1 | `career/chen-huaping-office-deep/rank` | 升级基线证监会办公厅主任任期记录（值：`"正厅局级"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（正文第3—4段）；S003@1（陈华平履历段） | 公开投影："正厅局级" | 已写入 `research-data/people/chen-huaping.json` 并投影至 `generatedResearch.ts` |
| F047@1 | `career/chen-huaping-office-deep/startYear` | 升级基线证监会办公厅主任任期记录（值：`2019`） | startYear=2019（原文直接记载） | `supported_direct` | S001@1（正文第3—4段）；S003@1（陈华平履历段） | 公开投影：2019 | 已写入 `research-data/people/chen-huaping.json` 并投影至 `generatedResearch.ts` |
| F048@1 | `career/chen-huaping-office-deep/startMonth` | 升级基线证监会办公厅主任任期记录（值：`10`） | startMonth=10（原文直接记载） | `supported_direct` | S001@1（正文第3—4段）；S003@1（陈华平履历段） | 公开投影：10 | 已写入 `research-data/people/chen-huaping.json` 并投影至 `generatedResearch.ts` |
| F049@1 | `career/chen-huaping-office-deep/endYear` | 升级基线证监会办公厅主任任期记录（值：`2021`） | endYear=2021（原文直接记载） | `supported_direct` | S001@1（正文第3—4段）；S003@1（陈华平履历段） | 公开投影：2021 | 已写入 `research-data/people/chen-huaping.json` 并投影至 `generatedResearch.ts` |
| F050@1 | `career/chen-huaping-office-deep/endMonth` | 升级基线证监会办公厅主任任期记录（值：`12`） | endMonth=12（原文直接记载） | `supported_direct` | S001@1（正文第3—4段）；S003@1（陈华平履历段） | 公开投影：12 | 已写入 `research-data/people/chen-huaping.json` 并投影至 `generatedResearch.ts` |
| F051@1 | `career/chen-huaping-szse-deep/recordKind` | 升级基线深交所党委书记、理事长（副部级）任期记录（值：`"tenure"`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（正文第2—3段）；S003@1（正文第1段） | 公开投影："tenure" | 已写入 `research-data/people/chen-huaping.json` 并投影至 `generatedResearch.ts` |
| F052@1 | `career/chen-huaping-szse-deep/tenureStatus` | 升级基线深交所党委书记、理事长（副部级）任期记录（值：`"historical"`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（正文第2—3段）；S003@1（正文第1段） | 公开投影："historical" | 已写入 `research-data/people/chen-huaping.json` 并投影至 `generatedResearch.ts` |
| F053@1 | `career/chen-huaping-szse-deep/unitId` | 升级基线深交所党委书记、理事长（副部级）任期记录（值：`"csrc-szse"`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（正文第2—3段）；S003@1（正文第1段） | 公开投影："csrc-szse" | 已写入 `research-data/people/chen-huaping.json` 并投影至 `generatedResearch.ts` |
| F054@1 | `career/chen-huaping-szse-deep/unitName` | 升级基线深交所党委书记、理事长（副部级）任期记录（值：`"深圳证券交易所"`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（正文第2—3段）；S003@1（正文第1段） | 公开投影："深圳证券交易所" | 已写入 `research-data/people/chen-huaping.json` 并投影至 `generatedResearch.ts` |
| F055@1 | `career/chen-huaping-szse-deep/position` | 升级基线深交所党委书记、理事长（副部级）任期记录（值：`"党委书记、理事长"`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（正文第2—3段）；S003@1（正文第1段） | 公开投影："党委书记、理事长" | 已写入 `research-data/people/chen-huaping.json` 并投影至 `generatedResearch.ts` |
| F056@1 | `career/chen-huaping-szse-deep/rank` | 升级基线深交所党委书记、理事长（副部级）任期记录（值：`"副部级"`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（正文第2—3段）；S003@1（正文第1段） | 公开投影："副部级" | 已写入 `research-data/people/chen-huaping.json` 并投影至 `generatedResearch.ts` |
| F057@1 | `career/chen-huaping-szse-deep/startYear` | 升级基线深交所党委书记、理事长（副部级）任期记录（值：`2021`） | startYear=2021（原文直接记载） | `supported_direct` | S002@1（正文第2—3段）；S003@1（正文第1段） | 公开投影：2021 | 已写入 `research-data/people/chen-huaping.json` 并投影至 `generatedResearch.ts` |
| F058@1 | `career/chen-huaping-szse-deep/startMonth` | 升级基线深交所党委书记、理事长（副部级）任期记录（值：`12`） | startMonth=12（原文直接记载） | `supported_direct` | S002@1（正文第2—3段）；S003@1（正文第1段） | 公开投影：12 | 已写入 `research-data/people/chen-huaping.json` 并投影至 `generatedResearch.ts` |
| F059@1 | `career/chen-huaping-szse-deep/endYear` | 升级基线深交所党委书记、理事长（副部级）任期记录（值：`2023`） | endYear=2023（原文直接记载） | `supported_direct` | S002@1（正文第2—3段）；S003@1（正文第1段） | 公开投影：2023 | 已写入 `research-data/people/chen-huaping.json` 并投影至 `generatedResearch.ts` |
| F060@1 | `career/chen-huaping-szse-deep/endMonth` | 升级基线深交所党委书记、理事长（副部级）任期记录（值：`9`） | endMonth=9（原文直接记载） | `supported_direct` | S002@1（正文第2—3段）；S003@1（正文第1段） | 公开投影：9 | 已写入 `research-data/people/chen-huaping.json` 并投影至 `generatedResearch.ts` |

## 推理台账

- 无 `derived` 推理；原基线3段 `derived` 记录已全部升级为 `supported_direct`。

## 冲突与拒绝记录

| 争议属性 | 说法A及来源 | 说法B及来源 | 是否同一日期／职务口径 | 处理及理由 | 待查链接／搜索式 |
| --- | --- | --- | --- | --- | --- |
| 2014年前副局级岗位 | 旧库原始记录：稽查总队副总队长、办公厅副巡视员／巡视员 | S001 第一财经＋S002 财新网：机构部检查一处处长、天津证监局局长助理、机构部副主任→2014.02打非局局长 | 提正局前履历 | **采信财新与第一财经，彻底淘汰旧库虚构岗位** | 无需再查 |

## 职业时间线缺口与下一轮

| 缺口 | 已知边界（不强推任期） | 要找的材料 | 下一条完整查询 | 优先级 |
| --- | --- | --- | --- | --- |
| 本科毕业院校（候选：西南政法大学）与籍贯、2014年前处级／副局级精确起止年份 | 已知1968.12生、法学学士、2014.02提正局任打非局局长 | 西南政法大学校友会官网或证券年鉴 | `site:swupl.edu.cn "陈华平" 校友 OR 证监会` | 中 |

## 本轮交付与续接

- 新增有效岗位／教育经历／日期属性：补齐现职级“副部级”；升级法学学士教育记录；新增3段早期核验任职（机构部检查一处处长／副主任、天津证监局局长助理、2014.02—2016.06打非局局长）并升级郑商所、办公厅、深交所3段正局／副部级任期。
- 删除或纠正的错误及依据：证伪旧库“稽查总队副总队长”“办公厅副巡视员、巡视员”编造履历；将未获权威证实的“西南政法大学”隔离为未公开 `candidate`（F007）。
- 来源对应复查结果：全部已发布事实均绑定 `reading: "read"` 原文定位摘录，无悬空引用，无观察点冒充连续任期起止；重名干扰源已显式归档为 `reading: "wrong_person"`。
- 页面及结构验证（仅实际执行后填写）：已通过 `npm run research:check`、`npm run audit:data`、`npm run test:records`、`npm run test:relations`、`npm run test:research`、`npm run test:safety` 及生产构建 `npm run build` 校验。
- 结束状态：本轮研究完成（核心锚点与主干履历已入库，细分早期缺口转入后续深化队列）。
- 停止条件满足情况：已核清核心身份、现职状态、关键正副局／部级履历与学历锚点，证伪旧库硬伤并留下精确下一查询。
- 上次停在查询ID／来源ID：`Q001` ／ `S005`
- 最后处理事实ID／推理ID及当前阶段：`F060@1` ／ 无 `I` 推理项（已完成工作台导入与公开投影）
- 已证实待入库事实及原因／拟写入字段：无（本轮已证实事实已全部通过 `research:import --write --expect` 入库）。
- 旧模型线索对账完成与剩余项：旧库核心学历与主干履历线索已完成对账；待核候选见上表 `candidate` 项。
- 输入变更后需要重新计算或撤销的推理：无依赖推理受影响。
- 下一步必须先执行的搜索式或原文链接：`site:swupl.edu.cn "陈华平" 校友`
- 尚未访问的高价值来源：《中国证券期货年鉴》历史卷、学位论文库及部分脚本受阻的交易所官网内页（详见渠道覆盖表）。
- 是否需要用户提供合法访问权限或已有资料：否（公开渠道与本地 Google Chrome 浏览器即可继续推进）。
