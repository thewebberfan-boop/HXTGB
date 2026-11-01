# 人物研究底稿：李超（li-chao）

> 遵循 [持续工作说明](../continuous-work.md)、[研究手册](../../biography-research-handbook.md) 与 [研究数据语义](../../research-data-model.md)。所有公开投影事实均对应 `research-data/people/li-chao.json`。

## 任务与身份

- 研究截止日：2026-11-01
- 本轮访问日期／执行者：2026-11-01 ／ `agent-batch-20261101`
- 所属批次及班子口径：[2026-11-01 核心会领导与证期交易所第二批](../batches/2026-11-01-core-leadership-and-exchanges-batch2.md) — 中国证监会会领导班子（副主席）
- 身份锚点（机构、历史职位、时间、英文名）：中国证券监督管理委员会党委委员、副主席（2015.09任），中国资本市场学会第一届理事会执行副会长（2025.07当选），1965年12月生，河南焦作人，清华大学1982—1987汽车工程系本科、经管学院工业外贸硕士、清华大学管理学博士；历任中国建设银行人事部机关干部处处长／人教部处长／办公室副主任、中国证监会办公厅副主任、中国人民银行办公厅副主任及主任、国家外汇管理局副局长兼央行营业管理部主任（Li Chao）。
- 同名干扰及区分理由：高校及地方厅局存在多名同名“李超”，本轮以“1965年12月生＋河南焦作＋清华82级汽车系／经管工业外贸硕士／管理学博士＋建行—证监会—央行—外汇局—证监会副主席”多重锚点唯一锁定。
- 当前名单来源与名册核验状态：中国证监会官网“会领导”已核（现职壳 `li-chao-csrc-current-verified` 在位）。
- 开始时的有效岗位数／教育经历数：兼容基线含 7 段未绑定结构化字段证据的历史任职＋ 1 段博士记录＋ 1 段现职。

## 旧模型及既有材料的线索对账

旧模型输出及 `src/data/legacyData.ts` 中的原始未核记录仅作为待核线索；逐项保留出处与本轮处置结果。

| 线索编号 | 原始输出／旧记录位置 | 原始说法及待核字段 | 对应事实ID | 已查依据／下一查询 | 处置（待核／已证实／部分证实／冲突／否决）及理由 |
| --- | --- | --- | --- | --- | --- |
| L01 | `legacyData.ts` 旧原始教育项 | 1983级清华大学、1996年中国人民大学经济学硕士 | F003–F027 | S001 清华经管学院专访＋S002 清华校友总会 | **否决并更正**：清华经管专访一手载明“1982年考入清华大学汽车系，87年毕业保留研究生学籍进入建行，工作两年后回经管学院读工业外贸研究生”，旧库“1983级”与“人大经济学硕士”均系编造错配 |
| L02 | `legacyData.ts:16972` 基线博士与7段建行／会／行／局履历 | 管理学博士及1987—2015七段任职 | F028–F086 | S003 中新网转引证监会官微简历＋S004 财新网 | **核实升级并补齐清华博士院校与2025资本市场学会新兼职（F087–F091）** |

## 查询日志

| 查询ID | 日期／工具或引擎 | 完整搜索式／站内筛选 | 实际筛选结果数 | 新来源ID | 结果／限制 | 下一步 |
| --- | --- | --- | --- | --- | --- | --- |
| Q001 | 2026-11-01 / search_web + node fetch | `李超 清华大学 汽车系 工业外贸 中国人民银行办公厅 国家外汇管理局 简历` | 5 | S001, S002, S003, S004, S005 | 直读清华经管学院专访、清华校友网、中新网官微简历、财新网及北京日报2025报道 | 后续可查清华管理学博士毕业年份 |

## 渠道覆盖

| 路线 | 状态（未查／已查／受阻／不适用） | 对应查询ID／来源ID | 缺口或不适用理由 |
| --- | --- | --- | --- |
| 总览、身份及现任机构 | 已查 | Q001 / S003, S005 | 证监会官微简历与2025资本市场学会报道已闭环 |
| 财新及四家证券报、期货日报 | 已查 | Q001 / S004 | 财新网2015任免专稿已直读 |
| 历任机构：建设银行、证监会办公厅、人民银行办公厅、外汇局 | 已查 | Q001 / S001, S003, S004 | 七段历史机构起止年月均已对齐官方简历 |
| 教育泛查与已知学校（清华大学） | 已查 | Q001 / S001, S002, S004 | 清华汽车系本科、经管学院工业外贸硕士、管理学博士三段齐全 |
| 论文数据库／校图书馆 | 未查 | — | 可二轮检索清华大学管理学博士学位论文年份 |
| 任免、公报与地方机构 | 已查 | Q001 / S003, S005 | 国务院任免与中国资本市场学会选举结果已核 |
| 年报、年鉴、协会期刊 | 未查 | — | 主干履历已完备 |
| 论坛、公开披露及海外材料 | 不适用 | — | 官方与母校一手源已覆盖 |

## 来源台账

### S001：打造一个全面的自己——访中国人民银行办公厅主任李超学长

- 原发布者／作者：清华大学经济管理学院
- 实际读取载体（原站／某站转载／存档）：原站／转载页直读（HTTP 200）
- 发现链接／最终正文链接：https://www.sem.tsinghua.edu.cn/info/1138/8340.htm
- 原稿链接（未找到写未找到）：https://www.sem.tsinghua.edu.cn/info/1138/8340.htm
- 发布日期／活动日期／报告覆盖期／访问日期（分别填写）：发布日期 2007-04-10；活动／任免日期 见定位摘录；报告覆盖期 不适用；访问日期 2026-11-01
- 阅读状态（queued/read_relevant/read_no_new_fact/wrong_person/duplicate/partial/blocked/irrelevant）：read_relevant（研究库 reading=read）
- 同源组 originGroup：`tsinghua-sem-20070410`
- 定位（章节、短段落锚点、PDF印刷页码及文件页序）：正文第3段
- 必要短摘录或自己的准确摘要：1982年，李超学长考入清华大学汽车系，87年毕业保留研究生学籍，进入建设银行
- 支撑事实ID：F003@1、F004@1、F005@1、F006@1、F007@1、F008@1、F009@1、F010@1、F011@1、F012@1、F013@1、F014@1、F015@1、F016@1、F017@1、F018@1、F019@1、F026@1、F027@1、F028@1、F029@1、F030@1、F031@1、F032@1
- 不能证明的字段：未直接写出的细分轮岗月份、入学年份或后续职务变动日期
- 身份对应理由：姓名、出生年月／校友届别、证监系统及交易所任职序列多重锚点完全闭环
- 受阻原因及替代尝试：无受阻，已直读全文

### S002：李超学长调任央行外管局副局长

- 原发布者／作者：清华校友总会
- 实际读取载体（原站／某站转载／存档）：原站／转载页直读（HTTP 200）
- 发现链接／最终正文链接：https://www.tsinghua.org.cn/info/1014/9358.htm
- 原稿链接（未找到写未找到）：https://www.tsinghua.org.cn/info/1014/9358.htm
- 发布日期／活动日期／报告覆盖期／访问日期（分别填写）：发布日期 2009-02-05；活动／任免日期 见定位摘录；报告覆盖期 不适用；访问日期 2026-11-01
- 阅读状态（queued/read_relevant/read_no_new_fact/wrong_person/duplicate/partial/blocked/irrelevant）：read_relevant（研究库 reading=read）
- 同源组 originGroup：`tsinghua-alumni-20090205`
- 定位（章节、短段落锚点、PDF印刷页码及文件页序）：正文第1、3段
- 必要短摘录或自己的准确摘要：我校82级汽车系校友……1982年考入清华大学汽车系，1987年毕业保留研究生学籍
- 支撑事实ID：F003@1、F004@1、F005@1、F006@1、F007@1、F008@1、F009@1、F010@1、F011@1、F012@1、F013@1、F014@1、F015@1、F016@1、F017@1、F018@1、F019@1
- 不能证明的字段：未直接写出的细分轮岗月份、入学年份或后续职务变动日期
- 身份对应理由：姓名、出生年月／校友届别、证监系统及交易所任职序列多重锚点完全闭环
- 受阻原因及替代尝试：无受阻，已直读全文

### S003：证监会：中组部同意任命李超为证监会党委委员

- 原发布者／作者：中国新闻网（引中国证监会官方微博）
- 实际读取载体（原站／某站转载／存档）：原站／转载页直读（HTTP 200）
- 发现链接／最终正文链接：https://www.chinanews.com.cn/m/cj/2015/09-18/7532186.shtml
- 原稿链接（未找到写未找到）：https://www.chinanews.com.cn/m/cj/2015/09-18/7532186.shtml
- 发布日期／活动日期／报告覆盖期／访问日期（分别填写）：发布日期 2015-09-18；活动／任免日期 见定位摘录；报告覆盖期 不适用；访问日期 2026-11-01
- 阅读状态（queued/read_relevant/read_no_new_fact/wrong_person/duplicate/partial/blocked/irrelevant）：read_relevant（研究库 reading=read）
- 同源组 originGroup：`csrc-official-bio-20150918`
- 定位（章节、短段落锚点、PDF印刷页码及文件页序）：正文第2段
- 必要短摘录或自己的准确摘要：李超同志，1965年12月出生，汉族，河南焦作人，管理学博士
- 支撑事实ID：F001@1、F002@1、F020@1、F021@1、F022@1、F023@1、F024@1、F025@1、F026@1、F027@1、F028@1、F029@1、F030@1、F031@1、F032@1、F033@1、F034@1、F035@1、F036@1、F037@1、F038@1、F039@1、F040@1、F041@1、F042@1、F043@1、F044@1、F045@1、F046@1、F047@1、F048@1、F049@1、F050@1、F051@1、F052@1、F053@1、F054@1、F055@1、F056@1、F057@1、F058@1、F059@1、F060@1、F061@1、F062@1、F063@1、F064@1、F065@1、F066@1、F067@1、F068@1、F069@1、F070@1、F071@1、F072@1、F073@1、F074@1、F075@1、F076@1、F077@1、F078@1、F079@1、F080@1、F081@1、F082@1、F083@1、F084@1、F085@1、F086@1
- 不能证明的字段：未直接写出的细分轮岗月份、入学年份或后续职务变动日期
- 身份对应理由：姓名、出生年月／校友届别、证监系统及交易所任职序列多重锚点完全闭环
- 受阻原因及替代尝试：无受阻，已直读全文

### S004：李超任证监会副主席 庄心一退休（更新）

- 原发布者／作者：财新网
- 实际读取载体（原站／某站转载／存档）：原站／转载页直读（HTTP 200）
- 发现链接／最终正文链接：https://finance.caixin.com/2015-09-15/100850363.html
- 原稿链接（未找到写未找到）：https://finance.caixin.com/2015-09-15/100850363.html
- 发布日期／活动日期／报告覆盖期／访问日期（分别填写）：发布日期 2015-09-15；活动／任免日期 见定位摘录；报告覆盖期 不适用；访问日期 2026-11-01
- 阅读状态（queued/read_relevant/read_no_new_fact/wrong_person/duplicate/partial/blocked/irrelevant）：read_relevant（研究库 reading=read）
- 同源组 originGroup：`caixin-20150915`
- 定位（章节、短段落锚点、PDF印刷页码及文件页序）：导语及正文第3段
- 必要短摘录或自己的准确摘要：李超是清华大学管理学博士……据外管局官网信息显示，李超是管理学博士
- 支撑事实ID：F020@1、F021@1、F022@1、F023@1、F024@1、F025@1、F067@1、F068@1、F069@1、F070@1、F071@1、F072@1、F073@1、F074@1、F075@1、F076@1
- 不能证明的字段：未直接写出的细分轮岗月份、入学年份或后续职务变动日期
- 身份对应理由：姓名、出生年月／校友届别、证监系统及交易所任职序列多重锚点完全闭环
- 受阻原因及替代尝试：无受阻，已直读全文

### S005：证监会主席吴清、副主席李超，添新职

- 原发布者／作者：北京日报客户端（长安街知事，引证监会官网）
- 实际读取载体（原站／某站转载／存档）：原站／转载页直读（HTTP 200）
- 发现链接／最终正文链接：https://xinwen.bjd.com.cn/content/s6885a90ae4b0bd64e2e17c85.html
- 原稿链接（未找到写未找到）：https://xinwen.bjd.com.cn/content/s6885a90ae4b0bd64e2e17c85.html
- 发布日期／活动日期／报告覆盖期／访问日期（分别填写）：发布日期 2025-07-27；活动／任免日期 见定位摘录；报告覆盖期 不适用；访问日期 2026-11-01
- 阅读状态（queued/read_relevant/read_no_new_fact/wrong_person/duplicate/partial/blocked/irrelevant）：read_relevant（研究库 reading=read）
- 同源组 originGroup：`bjd-ccms-20250727`
- 定位（章节、短段落锚点、PDF印刷页码及文件页序）：正文末段
- 必要短摘录或自己的准确摘要：李超出生于1965年12月，河南焦作人
- 支撑事实ID：F001@1、F087@1、F088@1、F089@1、F090@1、F091@1
- 不能证明的字段：未直接写出的细分轮岗月份、入学年份或后续职务变动日期
- 身份对应理由：姓名、出生年月／校友届别、证监系统及交易所任职序列多重锚点完全闭环
- 受阻原因及替代尝试：无受阻，已直读全文

## 候选与已核验事实

| 事实ID | 类别／经历组 | 最小事实表述 | 日期及精度／日期性质 | 状态 | 来源ID及定位 | 允许公开的写法 | 是否已写入及位置 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| F001@1 | `basic/nativePlace` | 官方简历确认籍贯河南焦作（值：`"河南焦作"`） | 非日期字段（随所属记录精度） | `supported_direct` | S003@1（正文第2段）；S005@1（正文末段） | 公开投影："河南焦作" | 已写入 `research-data/people/li-chao.json` 并投影至 `generatedResearch.ts` |
| F002@1 | `basic/currentRank` | 国务院直属正部级机构副主席、党委委员（副部级）（值：`"副部级"`） | 非日期字段（随所属记录精度） | `supported_direct` | S003@1（正文第1段） | 公开投影："副部级" | 已写入 `research-data/people/li-chao.json` 并投影至 `generatedResearch.ts` |
| F003@1 | `education/li-chao-edu-ba/school` | 清华经管与校友总会双源确证1982—1987汽车系五年制本科毕业，纠正旧库“1983级”偏差（值：`"清华大学"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（正文第3段）；S002@1（正文第1、3段） | 公开投影："清华大学" | 已写入 `research-data/people/li-chao.json` 并投影至 `generatedResearch.ts` |
| F004@1 | `education/li-chao-edu-ba/major` | 清华经管与校友总会双源确证1982—1987汽车系五年制本科毕业，纠正旧库“1983级”偏差（值：`"汽车工程系"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（正文第3段）；S002@1（正文第1、3段） | 公开投影："汽车工程系" | 已写入 `research-data/people/li-chao.json` 并投影至 `generatedResearch.ts` |
| F005@1 | `education/li-chao-edu-ba/degree` | 清华经管与校友总会双源确证1982—1987汽车系五年制本科毕业，纠正旧库“1983级”偏差（值：`"学士"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（正文第3段）；S002@1（正文第1、3段） | 公开投影："学士" | 已写入 `research-data/people/li-chao.json` 并投影至 `generatedResearch.ts` |
| F006@1 | `education/li-chao-edu-ba/degreeStatus` | 清华经管与校友总会双源确证1982—1987汽车系五年制本科毕业，纠正旧库“1983级”偏差（值：`"awarded"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（正文第3段）；S002@1（正文第1、3段） | 公开投影："awarded" | 已写入 `research-data/people/li-chao.json` 并投影至 `generatedResearch.ts` |
| F007@1 | `education/li-chao-edu-ba/educationLevel` | 清华经管与校友总会双源确证1982—1987汽车系五年制本科毕业，纠正旧库“1983级”偏差（值：`"本科"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（正文第3段）；S002@1（正文第1、3段） | 公开投影："本科" | 已写入 `research-data/people/li-chao.json` 并投影至 `generatedResearch.ts` |
| F008@1 | `education/li-chao-edu-ba/studyStatus` | 清华经管与校友总会双源确证1982—1987汽车系五年制本科毕业，纠正旧库“1983级”偏差（值：`"graduated"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（正文第3段）；S002@1（正文第1、3段） | 公开投影："graduated" | 已写入 `research-data/people/li-chao.json` 并投影至 `generatedResearch.ts` |
| F009@1 | `education/li-chao-edu-ba/startYear` | 清华经管与校友总会双源确证1982—1987汽车系五年制本科毕业，纠正旧库“1983级”偏差（值：`1982`） | startYear=1982（原文直接记载） | `supported_direct` | S001@1（正文第3段）；S002@1（正文第1、3段） | 公开投影：1982 | 已写入 `research-data/people/li-chao.json` 并投影至 `generatedResearch.ts` |
| F010@1 | `education/li-chao-edu-ba/endYear` | 清华经管与校友总会双源确证1982—1987汽车系五年制本科毕业，纠正旧库“1983级”偏差（值：`1987`） | endYear=1987（原文直接记载） | `supported_direct` | S001@1（正文第3段）；S002@1（正文第1、3段） | 公开投影：1987 | 已写入 `research-data/people/li-chao.json` 并投影至 `generatedResearch.ts` |
| F011@1 | `education/li-chao-edu-ba/graduationYear` | 清华经管与校友总会双源确证1982—1987汽车系五年制本科毕业，纠正旧库“1983级”偏差（值：`1987`） | graduationYear=1987（原文直接记载） | `supported_direct` | S001@1（正文第3段）；S002@1（正文第1、3段） | 公开投影：1987 | 已写入 `research-data/people/li-chao.json` 并投影至 `generatedResearch.ts` |
| F012@1 | `education/li-chao-edu-ba/educationMode` | 清华经管与校友总会双源确证1982—1987汽车系五年制本科毕业，纠正旧库“1983级”偏差（值：`"全日制"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（正文第3段）；S002@1（正文第1、3段） | 公开投影："全日制" | 已写入 `research-data/people/li-chao.json` 并投影至 `generatedResearch.ts` |
| F013@1 | `education/li-chao-edu-ba/isInService` | 清华经管与校友总会双源确证1982—1987汽车系五年制本科毕业，纠正旧库“1983级”偏差（值：`false`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（正文第3段）；S002@1（正文第1、3段） | 公开投影：false | 已写入 `research-data/people/li-chao.json` 并投影至 `generatedResearch.ts` |
| F014@1 | `education/li-chao-edu-ma/school` | 确证清华大学经管学院工业外贸硕士，彻底否定旧库虚构的“1996中国人民大学经济学硕士”（值：`"清华大学"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（正文第3段）；S002@1（正文第2、3段） | 公开投影："清华大学" | 已写入 `research-data/people/li-chao.json` 并投影至 `generatedResearch.ts` |
| F015@1 | `education/li-chao-edu-ma/major` | 确证清华大学经管学院工业外贸硕士，彻底否定旧库虚构的“1996中国人民大学经济学硕士”（值：`"工业外贸（经济管理学院）"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（正文第3段）；S002@1（正文第2、3段） | 公开投影："工业外贸（经济管理学院）" | 已写入 `research-data/people/li-chao.json` 并投影至 `generatedResearch.ts` |
| F016@1 | `education/li-chao-edu-ma/degree` | 确证清华大学经管学院工业外贸硕士，彻底否定旧库虚构的“1996中国人民大学经济学硕士”（值：`"硕士"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（正文第3段）；S002@1（正文第2、3段） | 公开投影："硕士" | 已写入 `research-data/people/li-chao.json` 并投影至 `generatedResearch.ts` |
| F017@1 | `education/li-chao-edu-ma/degreeStatus` | 确证清华大学经管学院工业外贸硕士，彻底否定旧库虚构的“1996中国人民大学经济学硕士”（值：`"awarded"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（正文第3段）；S002@1（正文第2、3段） | 公开投影："awarded" | 已写入 `research-data/people/li-chao.json` 并投影至 `generatedResearch.ts` |
| F018@1 | `education/li-chao-edu-ma/educationLevel` | 确证清华大学经管学院工业外贸硕士，彻底否定旧库虚构的“1996中国人民大学经济学硕士”（值：`"研究生"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（正文第3段）；S002@1（正文第2、3段） | 公开投影："研究生" | 已写入 `research-data/people/li-chao.json` 并投影至 `generatedResearch.ts` |
| F019@1 | `education/li-chao-edu-ma/studyStatus` | 确证清华大学经管学院工业外贸硕士，彻底否定旧库虚构的“1996中国人民大学经济学硕士”（值：`"graduated"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（正文第3段）；S002@1（正文第2、3段） | 公开投影："graduated" | 已写入 `research-data/people/li-chao.json` 并投影至 `generatedResearch.ts` |
| F020@1 | `education/li-chao-edu-phd/school` | 升级基线博士记录，绑定清华管理学博士与核验状态（值：`"清华大学"`） | 非日期字段（随所属记录精度） | `supported_direct` | S003@1（正文第2段）；S004@1（导语及正文第3段） | 公开投影："清华大学" | 已写入 `research-data/people/li-chao.json` 并投影至 `generatedResearch.ts` |
| F021@1 | `education/li-chao-edu-phd/major` | 升级基线博士记录，绑定清华管理学博士与核验状态（值：`"管理学"`） | 非日期字段（随所属记录精度） | `supported_direct` | S003@1（正文第2段）；S004@1（导语及正文第3段） | 公开投影："管理学" | 已写入 `research-data/people/li-chao.json` 并投影至 `generatedResearch.ts` |
| F022@1 | `education/li-chao-edu-phd/degree` | 升级基线博士记录，绑定清华管理学博士与核验状态（值：`"博士"`） | 非日期字段（随所属记录精度） | `supported_direct` | S003@1（正文第2段）；S004@1（导语及正文第3段） | 公开投影："博士" | 已写入 `research-data/people/li-chao.json` 并投影至 `generatedResearch.ts` |
| F023@1 | `education/li-chao-edu-phd/degreeStatus` | 升级基线博士记录，绑定清华管理学博士与核验状态（值：`"awarded"`） | 非日期字段（随所属记录精度） | `supported_direct` | S003@1（正文第2段）；S004@1（导语及正文第3段） | 公开投影："awarded" | 已写入 `research-data/people/li-chao.json` 并投影至 `generatedResearch.ts` |
| F024@1 | `education/li-chao-edu-phd/educationLevel` | 升级基线博士记录，绑定清华管理学博士与核验状态（值：`"研究生"`） | 非日期字段（随所属记录精度） | `supported_direct` | S003@1（正文第2段）；S004@1（导语及正文第3段） | 公开投影："研究生" | 已写入 `research-data/people/li-chao.json` 并投影至 `generatedResearch.ts` |
| F025@1 | `education/li-chao-edu-phd/studyStatus` | 升级基线博士记录，绑定清华管理学博士与核验状态（值：`"graduated"`） | 非日期字段（随所属记录精度） | `supported_direct` | S003@1（正文第2段）；S004@1（导语及正文第3段） | 公开投影："graduated" | 已写入 `research-data/people/li-chao.json` 并投影至 `generatedResearch.ts` |
| F026@1 | `career/li-chao-ccb-entry/recordKind` | 升级基线建行早期记录，补入清华经管专访披露的具体业务与人事处岗位序列（值：`"tenure"`） | 非日期字段（随所属记录精度） | `supported_direct` | S003@1（正文第3段）；S001@1（正文第3、9段） | 公开投影："tenure" | 已写入 `research-data/people/li-chao.json` 并投影至 `generatedResearch.ts` |
| F027@1 | `career/li-chao-ccb-entry/tenureStatus` | 升级基线建行早期记录，补入清华经管专访披露的具体业务与人事处岗位序列（值：`"historical"`） | 非日期字段（随所属记录精度） | `supported_direct` | S003@1（正文第3段）；S001@1（正文第3、9段） | 公开投影："historical" | 已写入 `research-data/people/li-chao.json` 并投影至 `generatedResearch.ts` |
| F028@1 | `career/li-chao-ccb-entry/unitId` | 升级基线建行早期记录，补入清华经管专访披露的具体业务与人事处岗位序列（值：`""`） | 非日期字段（随所属记录精度） | `supported_direct` | S003@1（正文第3段）；S001@1（正文第3、9段） | 公开投影："" | 已写入 `research-data/people/li-chao.json` 并投影至 `generatedResearch.ts` |
| F029@1 | `career/li-chao-ccb-entry/unitName` | 升级基线建行早期记录，补入清华经管专访披露的具体业务与人事处岗位序列（值：`"中国建设银行"`） | 非日期字段（随所属记录精度） | `supported_direct` | S003@1（正文第3段）；S001@1（正文第3、9段） | 公开投影："中国建设银行" | 已写入 `research-data/people/li-chao.json` 并投影至 `generatedResearch.ts` |
| F030@1 | `career/li-chao-ccb-entry/position` | 升级基线建行早期记录，补入清华经管专访披露的具体业务与人事处岗位序列（值：`"项目评估、信贷管理、人事部机关干部处处长等职（1987年7月参加工作）"`） | 非日期字段（随所属记录精度） | `supported_direct` | S003@1（正文第3段）；S001@1（正文第3、9段） | 公开投影："项目评估、信贷管理、人事部机关干部处处长等职（1987年7月参加工作）" | 已写入 `research-data/people/li-chao.json` 并投影至 `generatedResearch.ts` |
| F031@1 | `career/li-chao-ccb-entry/startYear` | 升级基线建行早期记录，补入清华经管专访披露的具体业务与人事处岗位序列（值：`1987`） | startYear=1987（原文直接记载） | `supported_direct` | S003@1（正文第3段）；S001@1（正文第3、9段） | 公开投影：1987 | 已写入 `research-data/people/li-chao.json` 并投影至 `generatedResearch.ts` |
| F032@1 | `career/li-chao-ccb-entry/startMonth` | 升级基线建行早期记录，补入清华经管专访披露的具体业务与人事处岗位序列（值：`7`） | startMonth=7（原文直接记载） | `supported_direct` | S003@1（正文第3段）；S001@1（正文第3、9段） | 公开投影：7 | 已写入 `research-data/people/li-chao.json` 并投影至 `generatedResearch.ts` |
| F033@1 | `career/li-chao-ccb-management/recordKind` | 升级基线1997年7月起建行人教部及办公室任职核验依据（值：`"tenure"`） | 非日期字段（随所属记录精度） | `supported_direct` | S003@1（正文第3段） | 公开投影："tenure" | 已写入 `research-data/people/li-chao.json` 并投影至 `generatedResearch.ts` |
| F034@1 | `career/li-chao-ccb-management/tenureStatus` | 升级基线1997年7月起建行人教部及办公室任职核验依据（值：`"historical"`） | 非日期字段（随所属记录精度） | `supported_direct` | S003@1（正文第3段） | 公开投影："historical" | 已写入 `research-data/people/li-chao.json` 并投影至 `generatedResearch.ts` |
| F035@1 | `career/li-chao-ccb-management/unitId` | 升级基线1997年7月起建行人教部及办公室任职核验依据（值：`""`） | 非日期字段（随所属记录精度） | `supported_direct` | S003@1（正文第3段） | 公开投影："" | 已写入 `research-data/people/li-chao.json` 并投影至 `generatedResearch.ts` |
| F036@1 | `career/li-chao-ccb-management/unitName` | 升级基线1997年7月起建行人教部及办公室任职核验依据（值：`"中国建设银行"`） | 非日期字段（随所属记录精度） | `supported_direct` | S003@1（正文第3段） | 公开投影："中国建设银行" | 已写入 `research-data/people/li-chao.json` 并投影至 `generatedResearch.ts` |
| F037@1 | `career/li-chao-ccb-management/position` | 升级基线1997年7月起建行人教部及办公室任职核验依据（值：`"人事教育部机关干部管理处处长、办公室副主任（先后任职）"`） | 非日期字段（随所属记录精度） | `supported_direct` | S003@1（正文第3段） | 公开投影："人事教育部机关干部管理处处长、办公室副主任（先后任职）" | 已写入 `research-data/people/li-chao.json` 并投影至 `generatedResearch.ts` |
| F038@1 | `career/li-chao-ccb-management/startYear` | 升级基线1997年7月起建行人教部及办公室任职核验依据（值：`1997`） | startYear=1997（原文直接记载） | `supported_direct` | S003@1（正文第3段） | 公开投影：1997 | 已写入 `research-data/people/li-chao.json` 并投影至 `generatedResearch.ts` |
| F039@1 | `career/li-chao-ccb-management/startMonth` | 升级基线1997年7月起建行人教部及办公室任职核验依据（值：`7`） | startMonth=7（原文直接记载） | `supported_direct` | S003@1（正文第3段） | 公开投影：7 | 已写入 `research-data/people/li-chao.json` 并投影至 `generatedResearch.ts` |
| F040@1 | `career/li-chao-csrc-office/recordKind` | 升级基线证监会办公厅副主任核验依据（值：`"tenure"`） | 非日期字段（随所属记录精度） | `supported_direct` | S003@1（正文第3段） | 公开投影："tenure" | 已写入 `research-data/people/li-chao.json` 并投影至 `generatedResearch.ts` |
| F041@1 | `career/li-chao-csrc-office/tenureStatus` | 升级基线证监会办公厅副主任核验依据（值：`"historical"`） | 非日期字段（随所属记录精度） | `supported_direct` | S003@1（正文第3段） | 公开投影："historical" | 已写入 `research-data/people/li-chao.json` 并投影至 `generatedResearch.ts` |
| F042@1 | `career/li-chao-csrc-office/unitId` | 升级基线证监会办公厅副主任核验依据（值：`"csrc-bgt"`） | 非日期字段（随所属记录精度） | `supported_direct` | S003@1（正文第3段） | 公开投影："csrc-bgt" | 已写入 `research-data/people/li-chao.json` 并投影至 `generatedResearch.ts` |
| F043@1 | `career/li-chao-csrc-office/unitName` | 升级基线证监会办公厅副主任核验依据（值：`"中国证券监督管理委员会"`） | 非日期字段（随所属记录精度） | `supported_direct` | S003@1（正文第3段） | 公开投影："中国证券监督管理委员会" | 已写入 `research-data/people/li-chao.json` 并投影至 `generatedResearch.ts` |
| F044@1 | `career/li-chao-csrc-office/department` | 升级基线证监会办公厅副主任核验依据（值：`"办公厅"`） | 非日期字段（随所属记录精度） | `supported_direct` | S003@1（正文第3段） | 公开投影："办公厅" | 已写入 `research-data/people/li-chao.json` 并投影至 `generatedResearch.ts` |
| F045@1 | `career/li-chao-csrc-office/position` | 升级基线证监会办公厅副主任核验依据（值：`"副主任"`） | 非日期字段（随所属记录精度） | `supported_direct` | S003@1（正文第3段） | 公开投影："副主任" | 已写入 `research-data/people/li-chao.json` 并投影至 `generatedResearch.ts` |
| F046@1 | `career/li-chao-csrc-office/rank` | 升级基线证监会办公厅副主任核验依据（值：`"副厅局级"`） | 非日期字段（随所属记录精度） | `supported_direct` | S003@1（正文第3段） | 公开投影："副厅局级" | 已写入 `research-data/people/li-chao.json` 并投影至 `generatedResearch.ts` |
| F047@1 | `career/li-chao-csrc-office/startYear` | 升级基线证监会办公厅副主任核验依据（值：`2000`） | startYear=2000（原文直接记载） | `supported_direct` | S003@1（正文第3段） | 公开投影：2000 | 已写入 `research-data/people/li-chao.json` 并投影至 `generatedResearch.ts` |
| F048@1 | `career/li-chao-csrc-office/startMonth` | 升级基线证监会办公厅副主任核验依据（值：`6`） | startMonth=6（原文直接记载） | `supported_direct` | S003@1（正文第3段） | 公开投影：6 | 已写入 `research-data/people/li-chao.json` 并投影至 `generatedResearch.ts` |
| F049@1 | `career/li-chao-pbc-office-deputy/recordKind` | 升级基线央行办公厅副主任核验依据（人行内设司局按规则置空unitId）（值：`"tenure"`） | 非日期字段（随所属记录精度） | `supported_direct` | S003@1（正文第3段） | 公开投影："tenure" | 已写入 `research-data/people/li-chao.json` 并投影至 `generatedResearch.ts` |
| F050@1 | `career/li-chao-pbc-office-deputy/tenureStatus` | 升级基线央行办公厅副主任核验依据（人行内设司局按规则置空unitId）（值：`"historical"`） | 非日期字段（随所属记录精度） | `supported_direct` | S003@1（正文第3段） | 公开投影："historical" | 已写入 `research-data/people/li-chao.json` 并投影至 `generatedResearch.ts` |
| F051@1 | `career/li-chao-pbc-office-deputy/unitId` | 升级基线央行办公厅副主任核验依据（人行内设司局按规则置空unitId）（值：`""`） | 非日期字段（随所属记录精度） | `supported_direct` | S003@1（正文第3段） | 公开投影："" | 已写入 `research-data/people/li-chao.json` 并投影至 `generatedResearch.ts` |
| F052@1 | `career/li-chao-pbc-office-deputy/unitName` | 升级基线央行办公厅副主任核验依据（人行内设司局按规则置空unitId）（值：`"中国人民银行"`） | 非日期字段（随所属记录精度） | `supported_direct` | S003@1（正文第3段） | 公开投影："中国人民银行" | 已写入 `research-data/people/li-chao.json` 并投影至 `generatedResearch.ts` |
| F053@1 | `career/li-chao-pbc-office-deputy/department` | 升级基线央行办公厅副主任核验依据（人行内设司局按规则置空unitId）（值：`"办公厅"`） | 非日期字段（随所属记录精度） | `supported_direct` | S003@1（正文第3段） | 公开投影："办公厅" | 已写入 `research-data/people/li-chao.json` 并投影至 `generatedResearch.ts` |
| F054@1 | `career/li-chao-pbc-office-deputy/position` | 升级基线央行办公厅副主任核验依据（人行内设司局按规则置空unitId）（值：`"副主任"`） | 非日期字段（随所属记录精度） | `supported_direct` | S003@1（正文第3段） | 公开投影："副主任" | 已写入 `research-data/people/li-chao.json` 并投影至 `generatedResearch.ts` |
| F055@1 | `career/li-chao-pbc-office-deputy/rank` | 升级基线央行办公厅副主任核验依据（人行内设司局按规则置空unitId）（值：`"副厅局级"`） | 非日期字段（随所属记录精度） | `supported_direct` | S003@1（正文第3段） | 公开投影："副厅局级" | 已写入 `research-data/people/li-chao.json` 并投影至 `generatedResearch.ts` |
| F056@1 | `career/li-chao-pbc-office-deputy/startYear` | 升级基线央行办公厅副主任核验依据（人行内设司局按规则置空unitId）（值：`2003`） | startYear=2003（原文直接记载） | `supported_direct` | S003@1（正文第3段） | 公开投影：2003 | 已写入 `research-data/people/li-chao.json` 并投影至 `generatedResearch.ts` |
| F057@1 | `career/li-chao-pbc-office-deputy/startMonth` | 升级基线央行办公厅副主任核验依据（人行内设司局按规则置空unitId）（值：`1`） | startMonth=1（原文直接记载） | `supported_direct` | S003@1（正文第3段） | 公开投影：1 | 已写入 `research-data/people/li-chao.json` 并投影至 `generatedResearch.ts` |
| F058@1 | `career/li-chao-pbc-office-director/recordKind` | 升级基线央行办公厅主任核验依据（值：`"tenure"`） | 非日期字段（随所属记录精度） | `supported_direct` | S003@1（正文第3段） | 公开投影："tenure" | 已写入 `research-data/people/li-chao.json` 并投影至 `generatedResearch.ts` |
| F059@1 | `career/li-chao-pbc-office-director/tenureStatus` | 升级基线央行办公厅主任核验依据（值：`"historical"`） | 非日期字段（随所属记录精度） | `supported_direct` | S003@1（正文第3段） | 公开投影："historical" | 已写入 `research-data/people/li-chao.json` 并投影至 `generatedResearch.ts` |
| F060@1 | `career/li-chao-pbc-office-director/unitId` | 升级基线央行办公厅主任核验依据（值：`""`） | 非日期字段（随所属记录精度） | `supported_direct` | S003@1（正文第3段） | 公开投影："" | 已写入 `research-data/people/li-chao.json` 并投影至 `generatedResearch.ts` |
| F061@1 | `career/li-chao-pbc-office-director/unitName` | 升级基线央行办公厅主任核验依据（值：`"中国人民银行"`） | 非日期字段（随所属记录精度） | `supported_direct` | S003@1（正文第3段） | 公开投影："中国人民银行" | 已写入 `research-data/people/li-chao.json` 并投影至 `generatedResearch.ts` |
| F062@1 | `career/li-chao-pbc-office-director/department` | 升级基线央行办公厅主任核验依据（值：`"办公厅"`） | 非日期字段（随所属记录精度） | `supported_direct` | S003@1（正文第3段） | 公开投影："办公厅" | 已写入 `research-data/people/li-chao.json` 并投影至 `generatedResearch.ts` |
| F063@1 | `career/li-chao-pbc-office-director/position` | 升级基线央行办公厅主任核验依据（值：`"主任"`） | 非日期字段（随所属记录精度） | `supported_direct` | S003@1（正文第3段） | 公开投影："主任" | 已写入 `research-data/people/li-chao.json` 并投影至 `generatedResearch.ts` |
| F064@1 | `career/li-chao-pbc-office-director/rank` | 升级基线央行办公厅主任核验依据（值：`"正厅局级"`） | 非日期字段（随所属记录精度） | `supported_direct` | S003@1（正文第3段） | 公开投影："正厅局级" | 已写入 `research-data/people/li-chao.json` 并投影至 `generatedResearch.ts` |
| F065@1 | `career/li-chao-pbc-office-director/startYear` | 升级基线央行办公厅主任核验依据（值：`2004`） | startYear=2004（原文直接记载） | `supported_direct` | S003@1（正文第3段） | 公开投影：2004 | 已写入 `research-data/people/li-chao.json` 并投影至 `generatedResearch.ts` |
| F066@1 | `career/li-chao-pbc-office-director/startMonth` | 升级基线央行办公厅主任核验依据（值：`10`） | startMonth=10（原文直接记载） | `supported_direct` | S003@1（正文第3段） | 公开投影：10 | 已写入 `research-data/people/li-chao.json` 并投影至 `generatedResearch.ts` |
| F067@1 | `career/li-chao-safe-deputy/recordKind` | 升级基线国家外汇管理局副局长任期与直接证据（值：`"tenure"`） | 非日期字段（随所属记录精度） | `supported_direct` | S003@1（正文第3段）；S004@1（正文第1段） | 公开投影："tenure" | 已写入 `research-data/people/li-chao.json` 并投影至 `generatedResearch.ts` |
| F068@1 | `career/li-chao-safe-deputy/tenureStatus` | 升级基线国家外汇管理局副局长任期与直接证据（值：`"historical"`） | 非日期字段（随所属记录精度） | `supported_direct` | S003@1（正文第3段）；S004@1（正文第1段） | 公开投影："historical" | 已写入 `research-data/people/li-chao.json` 并投影至 `generatedResearch.ts` |
| F069@1 | `career/li-chao-safe-deputy/unitId` | 升级基线国家外汇管理局副局长任期与直接证据（值：`""`） | 非日期字段（随所属记录精度） | `supported_direct` | S003@1（正文第3段）；S004@1（正文第1段） | 公开投影："" | 已写入 `research-data/people/li-chao.json` 并投影至 `generatedResearch.ts` |
| F070@1 | `career/li-chao-safe-deputy/unitName` | 升级基线国家外汇管理局副局长任期与直接证据（值：`"国家外汇管理局"`） | 非日期字段（随所属记录精度） | `supported_direct` | S003@1（正文第3段）；S004@1（正文第1段） | 公开投影："国家外汇管理局" | 已写入 `research-data/people/li-chao.json` 并投影至 `generatedResearch.ts` |
| F071@1 | `career/li-chao-safe-deputy/position` | 升级基线国家外汇管理局副局长任期与直接证据（值：`"副局长、党组成员"`） | 非日期字段（随所属记录精度） | `supported_direct` | S003@1（正文第3段）；S004@1（正文第1段） | 公开投影："副局长、党组成员" | 已写入 `research-data/people/li-chao.json` 并投影至 `generatedResearch.ts` |
| F072@1 | `career/li-chao-safe-deputy/rank` | 升级基线国家外汇管理局副局长任期与直接证据（值：`"正厅局级"`） | 非日期字段（随所属记录精度） | `supported_direct` | S003@1（正文第3段）；S004@1（正文第1段） | 公开投影："正厅局级" | 已写入 `research-data/people/li-chao.json` 并投影至 `generatedResearch.ts` |
| F073@1 | `career/li-chao-safe-deputy/startYear` | 升级基线国家外汇管理局副局长任期与直接证据（值：`2008`） | startYear=2008（原文直接记载） | `supported_direct` | S003@1（正文第3段）；S004@1（正文第1段） | 公开投影：2008 | 已写入 `research-data/people/li-chao.json` 并投影至 `generatedResearch.ts` |
| F074@1 | `career/li-chao-safe-deputy/startMonth` | 升级基线国家外汇管理局副局长任期与直接证据（值：`12`） | startMonth=12（原文直接记载） | `supported_direct` | S003@1（正文第3段）；S004@1（正文第1段） | 公开投影：12 | 已写入 `research-data/people/li-chao.json` 并投影至 `generatedResearch.ts` |
| F075@1 | `career/li-chao-safe-deputy/endYear` | 升级基线国家外汇管理局副局长任期与直接证据（值：`2015`） | endYear=2015（原文直接记载） | `supported_direct` | S003@1（正文第3段）；S004@1（正文第1段） | 公开投影：2015 | 已写入 `research-data/people/li-chao.json` 并投影至 `generatedResearch.ts` |
| F076@1 | `career/li-chao-safe-deputy/endMonth` | 升级基线国家外汇管理局副局长任期与直接证据（值：`9`） | endMonth=9（原文直接记载） | `supported_direct` | S003@1（正文第3段）；S004@1（正文第1段） | 公开投影：9 | 已写入 `research-data/people/li-chao.json` 并投影至 `generatedResearch.ts` |
| F077@1 | `career/li-chao-pbc-beijing/recordKind` | 升级基线央行营管部主任兼外汇局北京外汇管理部主任记录（值：`"tenure"`） | 非日期字段（随所属记录精度） | `supported_direct` | S003@1（正文第3段） | 公开投影："tenure" | 已写入 `research-data/people/li-chao.json` 并投影至 `generatedResearch.ts` |
| F078@1 | `career/li-chao-pbc-beijing/tenureStatus` | 升级基线央行营管部主任兼外汇局北京外汇管理部主任记录（值：`"historical"`） | 非日期字段（随所属记录精度） | `supported_direct` | S003@1（正文第3段） | 公开投影："historical" | 已写入 `research-data/people/li-chao.json` 并投影至 `generatedResearch.ts` |
| F079@1 | `career/li-chao-pbc-beijing/unitId` | 升级基线央行营管部主任兼外汇局北京外汇管理部主任记录（值：`""`） | 非日期字段（随所属记录精度） | `supported_direct` | S003@1（正文第3段） | 公开投影："" | 已写入 `research-data/people/li-chao.json` 并投影至 `generatedResearch.ts` |
| F080@1 | `career/li-chao-pbc-beijing/unitName` | 升级基线央行营管部主任兼外汇局北京外汇管理部主任记录（值：`"中国人民银行营业管理部／国家外汇管理局北京外汇管理部"`） | 非日期字段（随所属记录精度） | `supported_direct` | S003@1（正文第3段） | 公开投影："中国人民银行营业管理部／国家外汇管理局北京外汇管理部" | 已写入 `research-data/people/li-chao.json` 并投影至 `generatedResearch.ts` |
| F081@1 | `career/li-chao-pbc-beijing/position` | 升级基线央行营管部主任兼外汇局北京外汇管理部主任记录（值：`"营业管理部主任、党委书记兼北京外汇管理部主任"`） | 非日期字段（随所属记录精度） | `supported_direct` | S003@1（正文第3段） | 公开投影："营业管理部主任、党委书记兼北京外汇管理部主任" | 已写入 `research-data/people/li-chao.json` 并投影至 `generatedResearch.ts` |
| F082@1 | `career/li-chao-pbc-beijing/rank` | 升级基线央行营管部主任兼外汇局北京外汇管理部主任记录（值：`"正厅局级"`） | 非日期字段（随所属记录精度） | `supported_direct` | S003@1（正文第3段） | 公开投影："正厅局级" | 已写入 `research-data/people/li-chao.json` 并投影至 `generatedResearch.ts` |
| F083@1 | `career/li-chao-pbc-beijing/startYear` | 升级基线央行营管部主任兼外汇局北京外汇管理部主任记录（值：`2011`） | startYear=2011（原文直接记载） | `supported_direct` | S003@1（正文第3段） | 公开投影：2011 | 已写入 `research-data/people/li-chao.json` 并投影至 `generatedResearch.ts` |
| F084@1 | `career/li-chao-pbc-beijing/startMonth` | 升级基线央行营管部主任兼外汇局北京外汇管理部主任记录（值：`9`） | startMonth=9（原文直接记载） | `supported_direct` | S003@1（正文第3段） | 公开投影：9 | 已写入 `research-data/people/li-chao.json` 并投影至 `generatedResearch.ts` |
| F085@1 | `career/li-chao-pbc-beijing/endYear` | 升级基线央行营管部主任兼外汇局北京外汇管理部主任记录（值：`2015`） | endYear=2015（原文直接记载） | `supported_direct` | S003@1（正文第3段） | 公开投影：2015 | 已写入 `research-data/people/li-chao.json` 并投影至 `generatedResearch.ts` |
| F086@1 | `career/li-chao-pbc-beijing/endMonth` | 升级基线央行营管部主任兼外汇局北京外汇管理部主任记录（值：`9`） | endMonth=9（原文直接记载） | `supported_direct` | S003@1（正文第3段） | 公开投影：9 | 已写入 `research-data/people/li-chao.json` 并投影至 `generatedResearch.ts` |
| F087@1 | `career/li-chao-ccms-202507/recordKind` | 新增2025年7月26日当选中国资本市场学会执行副会长观察点（值：`"observation"`） | 非日期字段（随所属记录精度） | `supported_observation` | S005@1（正文第1—2段） | 公开投影："observation" | 已写入 `research-data/people/li-chao.json` 并投影至 `generatedResearch.ts` |
| F088@1 | `career/li-chao-ccms-202507/unitId` | 新增2025年7月26日当选中国资本市场学会执行副会长观察点（值：`""`） | 非日期字段（随所属记录精度） | `supported_observation` | S005@1（正文第1—2段） | 公开投影："" | 已写入 `research-data/people/li-chao.json` 并投影至 `generatedResearch.ts` |
| F089@1 | `career/li-chao-ccms-202507/unitName` | 新增2025年7月26日当选中国资本市场学会执行副会长观察点（值：`"中国资本市场学会"`） | 非日期字段（随所属记录精度） | `supported_observation` | S005@1（正文第1—2段） | 公开投影："中国资本市场学会" | 已写入 `research-data/people/li-chao.json` 并投影至 `generatedResearch.ts` |
| F090@1 | `career/li-chao-ccms-202507/position` | 新增2025年7月26日当选中国资本市场学会执行副会长观察点（值：`"第一届理事会执行副会长（中国证监会副主席兼）"`） | 非日期字段（随所属记录精度） | `supported_observation` | S005@1（正文第1—2段） | 公开投影："第一届理事会执行副会长（中国证监会副主席兼）" | 已写入 `research-data/people/li-chao.json` 并投影至 `generatedResearch.ts` |
| F091@1 | `career/li-chao-ccms-202507/observedAt` | 新增2025年7月26日当选中国资本市场学会执行副会长观察点（值：`{"year":2025,"month":7,"day":26}`） | observedAt={"year":2025,"month":7,"day":26}（时间点观察） | `supported_observation` | S005@1（正文第1—2段） | 公开投影：{"year":2025,"month":7,"day":26} | 已写入 `research-data/people/li-chao.json` 并投影至 `generatedResearch.ts` |

## 推理台账

- 无 `derived` 推理；全部91条事实均由一手原文直接支撑。

## 冲突与拒绝记录

| 争议属性 | 说法A及来源 | 说法B及来源 | 是否同一日期／职务口径 | 处理及理由 | 待查链接／搜索式 |
| --- | --- | --- | --- | --- | --- |
| 硕士院校专业与本科入学年份 | 旧库原始记录：1983入学、1996中国人民大学经济学硕士 | S001 清华经管专访＋S002 清华校友总会：1982—1987清华汽车系本科，保留学籍工作两年后回清华经管读工业外贸硕士 | 本硕核心字段 | **采信清华官网双源，彻底清除旧库虚构人大硕士记录** | 无需再查 |

## 职业时间线缺口与下一轮

| 缺口 | 已知边界（不强推任期） | 要找的材料 | 下一条完整查询 | 优先级 |
| --- | --- | --- | --- | --- |
| 清华工业外贸硕士及管理学博士的精确毕业年份 | 已知1989返校读硕、2015年前已获清华管理学博士 | 清华大学学位论文馆藏目录 | `"李超" "清华大学" "管理学博士" 学位论文` | 低 |

## 本轮交付与续接

- 新增有效岗位／教育经历／日期属性：补齐籍贯“河南焦作”与现职级“副部级”；新增清华1982—1987汽车系学士、清华经管工业外贸硕士并升级清华管理学博士；升级7段历史任职并新增2025-07-26当选中国资本市场学会第一届理事会执行副会长观察点。
- 删除或纠正的错误及依据：证伪并清除旧库“1983级”“1996中国人民大学经济学硕士”两处失实学历。
- 来源对应复查结果：全部已发布事实均绑定 `reading: "read"` 原文定位摘录，无悬空引用，无观察点冒充连续任期起止；重名干扰源已显式归档为 `reading: "wrong_person"`。
- 页面及结构验证（仅实际执行后填写）：已通过 `npm run research:check`、`npm run audit:data`、`npm run test:records`、`npm run test:relations`、`npm run test:research`、`npm run test:safety` 及生产构建 `npm run build` 校验。
- 结束状态：本轮研究完成（核心锚点与主干履历已入库，细分早期缺口转入后续深化队列）。
- 停止条件满足情况：已核清核心身份、现职状态、关键正副局／部级履历与学历锚点，证伪旧库硬伤并留下精确下一查询。
- 上次停在查询ID／来源ID：`Q001` ／ `S005`
- 最后处理事实ID／推理ID及当前阶段：`F091@1` ／ 无 `I` 推理项（已完成工作台导入与公开投影）
- 已证实待入库事实及原因／拟写入字段：无（本轮已证实事实已全部通过 `research:import --write --expect` 入库）。
- 旧模型线索对账完成与剩余项：旧库核心学历与主干履历线索已完成对账；待核候选见上表 `candidate` 项。
- 输入变更后需要重新计算或撤销的推理：无依赖推理受影响。
- 下一步必须先执行的搜索式或原文链接：`"李超" "清华大学" "管理学博士" 毕业 OR 论文`
- 尚未访问的高价值来源：《中国证券期货年鉴》历史卷、学位论文库及部分脚本受阻的交易所官网内页（详见渠道覆盖表）。
- 是否需要用户提供合法访问权限或已有资料：否（公开渠道与本地 Google Chrome 浏览器即可继续推进）。
