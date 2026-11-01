# 人物研究底稿：吴清（wu-qing）

> 遵循 [持续工作说明](../continuous-work.md)、[研究手册](../../biography-research-handbook.md) 与 [研究数据语义](../../research-data-model.md)。所有公开投影事实均对应 `research-data/people/wu-qing.json`。

## 任务与身份

- 研究截止日：2026-11-01
- 本轮访问日期／执行者：2026-11-01 ／ `agent-batch-20261101`
- 所属批次及班子口径：[2026-11-01 核心会领导与证期交易所第一批](../batches/2026-11-01-core-leadership-and-exchanges-batch1.md) — 2026-11-01 核心会领导与证期交易所第一批（中国证监会会领导班子）
- 身份锚点（机构、历史职位、时间、英文名）：中国证券监督管理委员会党委书记、主席（2024.02任），1965年4月生，安徽蒙城人，上海财经大学1987届财政学学士、中国人民大学1991届财政学硕士及2002届金融学博士；历任证监会机构部／机构监管部主任、证券公司风险处置办公室主任、基金监管部主任、上海市虹口区区长及区委书记、上海证券交易所理事长、上海市副市长／常务副市长／市委副书记（Wu Qing）。
- 同名干扰及区分理由：高校及地方政府存在多名同名“吴清”（如高校医药／管理学者等），本轮全部以“1965年4月生＋安徽蒙城＋上财1987届财政学／人大财金硕博＋证监会—虹口—上交所—上海市委—证监会”全链路锚点锁定。
- 当前名单来源与名册核验状态：中国证监会官网“会领导”栏目已核（现职壳 `wu-qing-csrc-current-verified` 在位，截至 2026-11-01 核对一致）。
- 开始时的有效岗位数／教育经历数：兼容基线初始仅保留 1 条现任岗位（证监会党委书记、主席）＋ 1 条院校未公开博士记录。

## 旧模型及既有材料的线索对账

旧模型输出及 `src/data/legacyData.ts` 中的原始未核记录仅作为待核线索；逐项保留出处与本轮处置结果。

| 线索编号 | 原始输出／旧记录位置 | 原始说法及待核字段 | 对应事实ID | 已查依据／下一查询 | 处置（待核／已证实／部分证实／冲突／否决）及理由 |
| --- | --- | --- | --- | --- | --- |
| L01 | `legacyData.ts:1378`（旧原始教育项） | 1989年安徽财贸学院（现安徽财经大学）财政学学士 | F003–F011 | S001 上海财经大学校友会官网贺信（`xy.sufe.edu.cn`） | **否决并替换**：上财校友网明确记载“1987年本科毕业于上海财经大学财政学专业”，旧库院校与毕业年均系AI幻觉错配 |
| L02 | `legacyData.ts:1387`（旧原始教育项） | 1992年中国人民大学金融学硕士 | F012–F020 | S002 人大财金学院杰出校友页＋S003 新京报＋S006 红星新闻 | **纠正**：确证为1991年毕业于中国人民大学财政学专业获硕士学位，2002年获中国人民大学金融学博士学位（F021–F031） |
| L03 | `legacyData.ts:1412`（旧原始履历项） | 1989.01—1993.09 国家计划委员会综合司干部、副主任科员 | F100 | S004 东方网官方简历仅写“1989年1月参加工作”，未写出国家计委；待查人社／党史原件 | **保留候选（candidate）**：本轮已读7篇原文未直接出现“国家计划委员会综合司”字样，存入 F100 待一手简历补证，不公开投影 |
| L04 | `legacyData.ts:1420–1458`（旧原始履历项） | 证监会机构部、风险办、基金部主任；虹口区长、区委书记；上交所理事长；上海市副市长、市委常委、市委副书记 | F032–F099 | S003、S004、S005、S006、S007 | **分项核实并按精确边界重写**：补齐已证实起点（2010.11虹口代区长、2013.07区委书记、2016.05—2017.12上交所理事长、2018.01副市长、2023.07—2024.02市委副书记），未知历史结束月一律省略 `endYear`；2019年市委常委8月与9月差异单列 `conflicted`（F089） |

## 查询日志

| 查询ID | 日期／工具或引擎 | 完整搜索式／站内筛选 | 实际筛选结果数 | 新来源ID | 结果／限制 | 下一步 |
| --- | --- | --- | --- | --- | --- | --- |
| Q001 | 2026-11-01 / search_web | `吴清 上海财经大学 财政学 1987 中国人民大学 简历` | 5 | S001, S002 | 命中上财校友会官网与人大财金学院官网，彻底厘清本硕博院校专业 | 继续核查上海换届官方简历与证监会任免原文 |
| Q002 | 2026-11-01 / search_web + node fetch | `吴清 安徽蒙城 虹口区长 证券公司风险处置办公室 基金监管部 简历` | 6 | S003, S004, S005, S006, S007 | 直读东方网2012官方简历、七一网2019任免、新京报／红星新闻2024长篇履历及证监会2024-02-07任免公告 | 后续补查1989—1993国家计委原始出处及证监局／会机关早年轮岗精确月份 |

## 渠道覆盖

| 路线 | 状态（未查／已查／受阻／不适用） | 对应查询ID／来源ID | 缺口或不适用理由 |
| --- | --- | --- | --- |
| 总览、身份及现任机构 | 已查 | Q001, Q002 / S004, S007 | 中国证监会官网任免公告与上海官方简历已闭环 |
| 财新及四家证券报、期货日报 | 已查（部分） | Q002 / S003, S006 | 已读新京报、红星新闻完整履历；四家证券报历史任免专稿可在二轮补查以细化2005/2009月份 |
| 历任机构：证监会机构部／风险办／基金部 | 已查 | Q002 / S004, S005, S006 | 机构与职务序列已核实，处室／司局内部轮岗月份待查年鉴 |
| 历任机构：上海市虹口区、上交所、上海市委市政府 | 已查 | Q002 / S003, S004, S005, S006 | 各主官节点均已核到年月（2019市委常委月份存8月/9月双口径冲突记录） |
| 教育泛查与已知学校（上海财经大学、中国人民大学） | 已查 | Q001 / S001, S002, S003 | 上财校友网＋人大财金学院官网双母校一手确认 |
| 论文数据库／校图书馆 | 未查 | — | 2002年人大金融学博士学位论文题目可在二轮补充检索 |
| 任免、公报与地方机构 | 已查 | Q002 / S004, S005, S007 | 已覆盖证监会任免公告与解放日报／七一网中央批准消息 |
| 年报、年鉴、协会期刊 | 未查 | — | 《中国证券期货年鉴》可用于补齐2002—2010司局任职起止月 |
| 论坛、公开披露及海外材料 | 不适用 | — | 核心履历已由官方任免与母校官网覆盖 |

## 来源台账

### S001：祝贺！上财校友吴清任证监会党委书记、主席

- 原发布者／作者：上海财经大学校友会
- 实际读取载体（原站／某站转载／存档）：原站直读（HTTP 200）
- 发现链接／最终正文链接：https://xy.sufe.edu.cn/3d/7a/c11018a212346/page.htm
- 原稿链接（未找到写未找到）：https://xy.sufe.edu.cn/3d/7a/c11018a212346/page.htm
- 发布日期／活动日期／报告覆盖期／访问日期（分别填写）：发布日期 2024-02-21；活动／任免日期 见定位摘录；报告覆盖期 不适用；访问日期 2026-11-01
- 阅读状态（queued/read_relevant/read_no_new_fact/wrong_person/duplicate/partial/blocked/irrelevant）：read_relevant（研究库 reading=read）
- 同源组 originGroup：`sufe-official-20240221`
- 定位（章节、短段落锚点、PDF印刷页码及文件页序）：正文第2段
- 必要短摘录或自己的准确摘要：吴清校友1987年本科毕业于上海财经大学财政学专业
- 支撑事实ID：F003@1、F004@1、F005@1、F006@1、F007@1、F008@1、F009@1、F010@1
- 不能证明的字段：未直接写出的细分轮岗月份、入学年份或后续职务变动日期
- 身份对应理由：姓名、出生年月／校友届别、证监系统及交易所任职序列多重锚点完全闭环
- 受阻原因及替代尝试：无受阻，已直读全文

### S002：杰出校友：吴清

- 原发布者／作者：中国人民大学财政金融学院
- 实际读取载体（原站／某站转载／存档）：原站直读（HTTP 200）
- 发现链接／最终正文链接：http://mba.sf.ruc.edu.cn/jcxy/68de70e370aa42b6ba6cb895d1be770f.htm
- 原稿链接（未找到写未找到）：http://mba.sf.ruc.edu.cn/jcxy/68de70e370aa42b6ba6cb895d1be770f.htm
- 发布日期／活动日期／报告覆盖期／访问日期（分别填写）：发布日期 页面未单列；活动／任免日期 见定位摘录；报告覆盖期 不适用；访问日期 2026-11-01
- 阅读状态（queued/read_relevant/read_no_new_fact/wrong_person/duplicate/partial/blocked/irrelevant）：read_relevant（研究库 reading=read）
- 同源组 originGroup：`ruc-sf-official`
- 定位（章节、短段落锚点、PDF印刷页码及文件页序）：杰出校友页
- 必要短摘录或自己的准确摘要：中国人民大学财政金融学院杰出校友吴清
- 支撑事实ID：F011@1、F012@1、F013@1、F014@1、F015@1、F016@1、F017@1、F018@1、F019@1、F020@1、F021@1、F022@1、F023@1、F024@1、F025@1、F026@1、F027@1、F028@1
- 不能证明的字段：未直接写出的细分轮岗月份、入学年份或后续职务变动日期
- 身份对应理由：姓名、出生年月／校友届别、证监系统及交易所任职序列多重锚点完全闭环
- 受阻原因及替代尝试：无受阻，已直读全文

### S003：中国证监会换帅！吴清回归证监系统 自有一套风险处置逻辑

- 原发布者／作者：新京报
- 实际读取载体（原站／某站转载／存档）：原站直读（HTTP 200）
- 发现链接／最终正文链接：https://m.bjnews.com.cn/detail/1707308552129598.html
- 原稿链接（未找到写未找到）：https://m.bjnews.com.cn/detail/1707308552129598.html
- 发布日期／活动日期／报告覆盖期／访问日期（分别填写）：发布日期 2024-02-07；活动／任免日期 见定位摘录；报告覆盖期 不适用；访问日期 2026-11-01
- 阅读状态（queued/read_relevant/read_no_new_fact/wrong_person/duplicate/partial/blocked/irrelevant）：read_relevant（研究库 reading=read）
- 同源组 originGroup：`bjnews-20240207`
- 定位（章节、短段落锚点、PDF印刷页码及文件页序）：公开简历段
- 必要短摘录或自己的准确摘要：1991年毕业于中国人民大学财政学专业，获硕士学位
- 支撑事实ID：F011@1、F012@1、F013@1、F014@1、F015@1、F016@1、F017@1、F018@1、F019@1、F020@1、F021@1、F022@1、F023@1、F024@1、F025@1、F026@1、F027@1、F028@1、F056@1、F057@1、F058@1、F059@1、F060@1、F061@1、F062@1、F063@1、F064@1、F065@1、F066@1、F067@1、F068@1、F069@1、F070@1、F071@1、F072@1、F073@1、F082@1、F083@1、F084@1、F085@1、F086@1、F087@1、F088@1、F089@1、F090@1、F091@1、F092@1、F093@1、F094@1、F095@1、F096@1、F097@1、F098@1、F099@1
- 不能证明的字段：未直接写出的细分轮岗月份、入学年份或后续职务变动日期
- 身份对应理由：姓名、出生年月／校友届别、证监系统及交易所任职序列多重锚点完全闭环
- 受阻原因及替代尝试：无受阻，已直读全文

### S004：资料：上海虹口区区长吴清简历(图)

- 原发布者／作者：中国经济网（来源：东方网）
- 实际读取载体（原站／某站转载／存档）：原站直读（HTTP 200）
- 发现链接／最终正文链接：http://district.ce.cn/zt/rwk/sf/sh/rs/201205/22/t20120522_1268386.shtml
- 原稿链接（未找到写未找到）：http://district.ce.cn/zt/rwk/sf/sh/rs/201205/22/t20120522_1268386.shtml
- 发布日期／活动日期／报告覆盖期／访问日期（分别填写）：发布日期 2012-05-22；活动／任免日期 见定位摘录；报告覆盖期 不适用；访问日期 2026-11-01
- 阅读状态（queued/read_relevant/read_no_new_fact/wrong_person/duplicate/partial/blocked/irrelevant）：read_relevant（研究库 reading=read）
- 同源组 originGroup：`eastday-official-bio-2012`
- 定位（章节、短段落锚点、PDF印刷页码及文件页序）：正文第1段
- 必要短摘录或自己的准确摘要：吴清，男，1965年4月生，汉族，安徽蒙城人
- 支撑事实ID：F001@1、F019@1、F020@1、F021@1、F022@1、F023@1、F024@1、F025@1、F026@1、F027@1、F028@1、F029@1、F030@1、F031@1、F032@1、F033@1、F034@1、F035@1、F036@1、F037@1、F038@1、F039@1、F040@1、F041@1、F042@1、F043@1、F044@1、F045@1、F046@1、F047@1、F048@1、F049@1、F050@1、F051@1、F052@1、F053@1、F054@1、F055@1
- 不能证明的字段：未直接写出的细分轮岗月份、入学年份或后续职务变动日期
- 身份对应理由：姓名、出生年月／校友届别、证监系统及交易所任职序列多重锚点完全闭环
- 受阻原因及替代尝试：无受阻，已直读全文

### S005：上海｜吴清任上海市委常委

- 原发布者／作者：七一网（来源：中国共产党新闻网／解放日报）
- 实际读取载体（原站／某站转载／存档）：原站直读（HTTP 200）
- 发现链接／最终正文链接：https://www.12371.gov.cn/web/article/1438313076419854336/web/content_1438313076419854336.html
- 原稿链接（未找到写未找到）：https://www.12371.gov.cn/web/article/1438313076419854336/web/content_1438313076419854336.html
- 发布日期／活动日期／报告覆盖期／访问日期（分别填写）：发布日期 2019-09-05；活动／任免日期 见定位摘录；报告覆盖期 不适用；访问日期 2026-11-01
- 阅读状态（queued/read_relevant/read_no_new_fact/wrong_person/duplicate/partial/blocked/irrelevant）：read_relevant（研究库 reading=read）
- 同源组 originGroup：`jfdaily-cpcnews-20190905`
- 定位（章节、短段落锚点、PDF印刷页码及文件页序）：吴清同志简历段
- 必要短摘录或自己的准确摘要：吴清，男，1965年4月生，汉族，安徽蒙城人
- 支撑事实ID：F001@1、F036@1、F037@1、F038@1、F039@1、F040@1、F041@1、F042@1、F043@1、F044@1、F045@1、F046@1、F047@1、F074@1、F075@1、F076@1、F077@1、F078@1、F079@1、F080@1、F081@1、F082@1、F083@1、F084@1、F085@1、F086@1、F087@1、F088@1、F089@1
- 不能证明的字段：未直接写出的细分轮岗月份、入学年份或后续职务变动日期
- 身份对应理由：姓名、出生年月／校友届别、证监系统及交易所任职序列多重锚点完全闭环
- 受阻原因及替代尝试：无受阻，已直读全文

### S006：吴清出任第十任证监会主席，曾被称为“券商屠夫”，未来三个工作方向可期

- 原发布者／作者：红星新闻（新浪科技转载）
- 实际读取载体（原站／某站转载／存档）：原站直读（HTTP 200）
- 发现链接／最终正文链接：https://finance.sina.com.cn/tech/roll/2024-02-07/doc-inahfmfa7957193.shtml
- 原稿链接（未找到写未找到）：https://finance.sina.com.cn/tech/roll/2024-02-07/doc-inahfmfa7957193.shtml
- 发布日期／活动日期／报告覆盖期／访问日期（分别填写）：发布日期 2024-02-07；活动／任免日期 见定位摘录；报告覆盖期 不适用；访问日期 2026-11-01
- 阅读状态（queued/read_relevant/read_no_new_fact/wrong_person/duplicate/partial/blocked/irrelevant）：read_relevant（研究库 reading=read）
- 同源组 originGroup：`redstar-20240207`
- 定位（章节、短段落锚点、PDF印刷页码及文件页序）：公开简历段
- 必要短摘录或自己的准确摘要：吴清1991年毕业于中国人民大学财政学专业，获硕士学位
- 支撑事实ID：F011@1、F012@1、F013@1、F014@1、F015@1、F016@1、F017@1、F018@1、F029@1、F030@1、F031@1、F032@1、F033@1、F034@1、F035@1、F056@1、F057@1、F058@1、F059@1、F060@1、F061@1、F062@1、F063@1、F064@1、F065@1、F066@1、F067@1、F068@1、F069@1、F070@1、F071@1、F072@1、F073@1、F074@1、F075@1、F076@1、F077@1、F078@1、F079@1、F080@1、F081@1
- 不能证明的字段：未直接写出的细分轮岗月份、入学年份或后续职务变动日期
- 身份对应理由：姓名、出生年月／校友届别、证监系统及交易所任职序列多重锚点完全闭环
- 受阻原因及替代尝试：无受阻，已直读全文

### S007：中国证监会主要领导调整

- 原发布者／作者：中国证券监督管理委员会
- 实际读取载体（原站／某站转载／存档）：原站直读（HTTP 200）
- 发现链接／最终正文链接：https://www.csrc.gov.cn/csrc/c100028/c7462697/content.shtml
- 原稿链接（未找到写未找到）：https://www.csrc.gov.cn/csrc/c100028/c7462697/content.shtml
- 发布日期／活动日期／报告覆盖期／访问日期（分别填写）：发布日期 2024-02-07；活动／任免日期 见定位摘录；报告覆盖期 不适用；访问日期 2026-11-01
- 阅读状态（queued/read_relevant/read_no_new_fact/wrong_person/duplicate/partial/blocked/irrelevant）：read_relevant（研究库 reading=read）
- 同源组 originGroup：`csrc-official-20240207`
- 定位（章节、短段落锚点、PDF印刷页码及文件页序）：正文第1段
- 必要短摘录或自己的准确摘要：中共中央决定，任命吴清同志为中国证券监督管理委员会党委书记……国务院决定，任命吴清同志为中国证券监督管理委员会主席
- 支撑事实ID：F002@1、F090@1、F091@1、F092@1、F093@1、F094@1、F095@1、F096@1、F097@1、F098@1、F099@1
- 不能证明的字段：未直接写出的细分轮岗月份、入学年份或后续职务变动日期
- 身份对应理由：姓名、出生年月／校友届别、证监系统及交易所任职序列多重锚点完全闭环
- 受阻原因及替代尝试：无受阻，已直读全文

## 候选与已核验事实

| 事实ID | 类别／经历组 | 最小事实表述 | 日期及精度／日期性质 | 状态 | 来源ID及定位 | 允许公开的写法 | 是否已写入及位置 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| F001@1 | `basic/nativePlace` | 官方简历一致确认籍贯安徽蒙城（值：`"安徽蒙城"`） | 非日期字段（随所属记录精度） | `supported_direct` | S004@1（正文第1段）；S005@1（吴清同志简历段） | 公开投影："安徽蒙城" | 已写入 `research-data/people/wu-qing.json` 并投影至 `generatedResearch.ts` |
| F002@1 | `basic/currentRank` | 国务院直属正部级机构党委书记、主席（值：`"正部级"`） | 非日期字段（随所属记录精度） | `supported_direct` | S007@1（正文第1段） | 公开投影："正部级" | 已写入 `research-data/people/wu-qing.json` 并投影至 `generatedResearch.ts` |
| F003@1 | `education/wu-qing-edu-ba/school` | 上财校友会官网确证1987年财政学本科毕业，纠正旧库“安徽财贸学院1989学士”错误；入学年不作学制反推（值：`"上海财经大学"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（正文第2段） | 公开投影："上海财经大学" | 已写入 `research-data/people/wu-qing.json` 并投影至 `generatedResearch.ts` |
| F004@1 | `education/wu-qing-edu-ba/degree` | 上财校友会官网确证1987年财政学本科毕业，纠正旧库“安徽财贸学院1989学士”错误；入学年不作学制反推（值：`"学士"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（正文第2段） | 公开投影："学士" | 已写入 `research-data/people/wu-qing.json` 并投影至 `generatedResearch.ts` |
| F005@1 | `education/wu-qing-edu-ba/degreeStatus` | 上财校友会官网确证1987年财政学本科毕业，纠正旧库“安徽财贸学院1989学士”错误；入学年不作学制反推（值：`"awarded"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（正文第2段） | 公开投影："awarded" | 已写入 `research-data/people/wu-qing.json` 并投影至 `generatedResearch.ts` |
| F006@1 | `education/wu-qing-edu-ba/educationLevel` | 上财校友会官网确证1987年财政学本科毕业，纠正旧库“安徽财贸学院1989学士”错误；入学年不作学制反推（值：`"本科"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（正文第2段） | 公开投影："本科" | 已写入 `research-data/people/wu-qing.json` 并投影至 `generatedResearch.ts` |
| F007@1 | `education/wu-qing-edu-ba/studyStatus` | 上财校友会官网确证1987年财政学本科毕业，纠正旧库“安徽财贸学院1989学士”错误；入学年不作学制反推（值：`"graduated"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（正文第2段） | 公开投影："graduated" | 已写入 `research-data/people/wu-qing.json` 并投影至 `generatedResearch.ts` |
| F008@1 | `education/wu-qing-edu-ba/major` | 上财校友会官网确证1987年财政学本科毕业，纠正旧库“安徽财贸学院1989学士”错误；入学年不作学制反推（值：`"财政学"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（正文第2段） | 公开投影："财政学" | 已写入 `research-data/people/wu-qing.json` 并投影至 `generatedResearch.ts` |
| F009@1 | `education/wu-qing-edu-ba/graduationYear` | 上财校友会官网确证1987年财政学本科毕业，纠正旧库“安徽财贸学院1989学士”错误；入学年不作学制反推（值：`1987`） | graduationYear=1987（原文直接记载） | `supported_direct` | S001@1（正文第2段） | 公开投影：1987 | 已写入 `research-data/people/wu-qing.json` 并投影至 `generatedResearch.ts` |
| F010@1 | `education/wu-qing-edu-ba/endYear` | 上财校友会官网确证1987年财政学本科毕业，纠正旧库“安徽财贸学院1989学士”错误；入学年不作学制反推（值：`1987`） | endYear=1987（原文直接记载） | `supported_direct` | S001@1（正文第2段） | 公开投影：1987 | 已写入 `research-data/people/wu-qing.json` 并投影至 `generatedResearch.ts` |
| F011@1 | `education/wu-qing-edu-ma/school` | 纠正旧库“1992硕士”偏差；入学年未披露不推算（值：`"中国人民大学"`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（杰出校友页）；S003@1（公开简历段）；S006@1（公开简历段） | 公开投影："中国人民大学" | 已写入 `research-data/people/wu-qing.json` 并投影至 `generatedResearch.ts` |
| F012@1 | `education/wu-qing-edu-ma/degree` | 纠正旧库“1992硕士”偏差；入学年未披露不推算（值：`"硕士"`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（杰出校友页）；S003@1（公开简历段）；S006@1（公开简历段） | 公开投影："硕士" | 已写入 `research-data/people/wu-qing.json` 并投影至 `generatedResearch.ts` |
| F013@1 | `education/wu-qing-edu-ma/degreeStatus` | 纠正旧库“1992硕士”偏差；入学年未披露不推算（值：`"awarded"`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（杰出校友页）；S003@1（公开简历段）；S006@1（公开简历段） | 公开投影："awarded" | 已写入 `research-data/people/wu-qing.json` 并投影至 `generatedResearch.ts` |
| F014@1 | `education/wu-qing-edu-ma/educationLevel` | 纠正旧库“1992硕士”偏差；入学年未披露不推算（值：`"研究生"`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（杰出校友页）；S003@1（公开简历段）；S006@1（公开简历段） | 公开投影："研究生" | 已写入 `research-data/people/wu-qing.json` 并投影至 `generatedResearch.ts` |
| F015@1 | `education/wu-qing-edu-ma/studyStatus` | 纠正旧库“1992硕士”偏差；入学年未披露不推算（值：`"graduated"`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（杰出校友页）；S003@1（公开简历段）；S006@1（公开简历段） | 公开投影："graduated" | 已写入 `research-data/people/wu-qing.json` 并投影至 `generatedResearch.ts` |
| F016@1 | `education/wu-qing-edu-ma/major` | 纠正旧库“1992硕士”偏差；入学年未披露不推算（值：`"财政学"`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（杰出校友页）；S003@1（公开简历段）；S006@1（公开简历段） | 公开投影："财政学" | 已写入 `research-data/people/wu-qing.json` 并投影至 `generatedResearch.ts` |
| F017@1 | `education/wu-qing-edu-ma/graduationYear` | 纠正旧库“1992硕士”偏差；入学年未披露不推算（值：`1991`） | graduationYear=1991（原文直接记载） | `supported_direct` | S002@1（杰出校友页）；S003@1（公开简历段）；S006@1（公开简历段） | 公开投影：1991 | 已写入 `research-data/people/wu-qing.json` 并投影至 `generatedResearch.ts` |
| F018@1 | `education/wu-qing-edu-ma/endYear` | 纠正旧库“1992硕士”偏差；入学年未披露不推算（值：`1991`） | endYear=1991（原文直接记载） | `supported_direct` | S002@1（杰出校友页）；S003@1（公开简历段）；S006@1（公开简历段） | 公开投影：1991 | 已写入 `research-data/people/wu-qing.json` 并投影至 `generatedResearch.ts` |
| F019@1 | `education/wu-qing-edu-phd/school` | 绑定并升级基线博士记录，补齐院校、专业、2002毕业年与在职属性（值：`"中国人民大学"`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（杰出校友页）；S003@1（公开简历段）；S004@1（正文第1段） | 公开投影："中国人民大学" | 已写入 `research-data/people/wu-qing.json` 并投影至 `generatedResearch.ts` |
| F020@1 | `education/wu-qing-edu-phd/degree` | 绑定并升级基线博士记录，补齐院校、专业、2002毕业年与在职属性（值：`"博士"`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（杰出校友页）；S003@1（公开简历段）；S004@1（正文第1段） | 公开投影："博士" | 已写入 `research-data/people/wu-qing.json` 并投影至 `generatedResearch.ts` |
| F021@1 | `education/wu-qing-edu-phd/degreeStatus` | 绑定并升级基线博士记录，补齐院校、专业、2002毕业年与在职属性（值：`"awarded"`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（杰出校友页）；S003@1（公开简历段）；S004@1（正文第1段） | 公开投影："awarded" | 已写入 `research-data/people/wu-qing.json` 并投影至 `generatedResearch.ts` |
| F022@1 | `education/wu-qing-edu-phd/educationLevel` | 绑定并升级基线博士记录，补齐院校、专业、2002毕业年与在职属性（值：`"研究生"`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（杰出校友页）；S003@1（公开简历段）；S004@1（正文第1段） | 公开投影："研究生" | 已写入 `research-data/people/wu-qing.json` 并投影至 `generatedResearch.ts` |
| F023@1 | `education/wu-qing-edu-phd/studyStatus` | 绑定并升级基线博士记录，补齐院校、专业、2002毕业年与在职属性（值：`"graduated"`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（杰出校友页）；S003@1（公开简历段）；S004@1（正文第1段） | 公开投影："graduated" | 已写入 `research-data/people/wu-qing.json` 并投影至 `generatedResearch.ts` |
| F024@1 | `education/wu-qing-edu-phd/major` | 绑定并升级基线博士记录，补齐院校、专业、2002毕业年与在职属性（值：`"金融学（经济学博士）"`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（杰出校友页）；S003@1（公开简历段）；S004@1（正文第1段） | 公开投影："金融学（经济学博士）" | 已写入 `research-data/people/wu-qing.json` 并投影至 `generatedResearch.ts` |
| F025@1 | `education/wu-qing-edu-phd/graduationYear` | 绑定并升级基线博士记录，补齐院校、专业、2002毕业年与在职属性（值：`2002`） | graduationYear=2002（原文直接记载） | `supported_direct` | S002@1（杰出校友页）；S003@1（公开简历段）；S004@1（正文第1段） | 公开投影：2002 | 已写入 `research-data/people/wu-qing.json` 并投影至 `generatedResearch.ts` |
| F026@1 | `education/wu-qing-edu-phd/endYear` | 绑定并升级基线博士记录，补齐院校、专业、2002毕业年与在职属性（值：`2002`） | endYear=2002（原文直接记载） | `supported_direct` | S002@1（杰出校友页）；S003@1（公开简历段）；S004@1（正文第1段） | 公开投影：2002 | 已写入 `research-data/people/wu-qing.json` 并投影至 `generatedResearch.ts` |
| F027@1 | `education/wu-qing-edu-phd/isInService` | 绑定并升级基线博士记录，补齐院校、专业、2002毕业年与在职属性（值：`true`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（杰出校友页）；S003@1（公开简历段）；S004@1（正文第1段） | 公开投影：true | 已写入 `research-data/people/wu-qing.json` 并投影至 `generatedResearch.ts` |
| F028@1 | `education/wu-qing-edu-phd/educationMode` | 绑定并升级基线博士记录，补齐院校、专业、2002毕业年与在职属性（值：`"在职"`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（杰出校友页）；S003@1（公开简历段）；S004@1（正文第1段） | 公开投影："在职" | 已写入 `research-data/people/wu-qing.json` 并投影至 `generatedResearch.ts` |
| F029@1 | `career/wu-qing-csrc-jg-hist/recordKind` | 历史任职确认，细分轮岗起止年月未公开故留空（值：`"tenure"`） | 非日期字段（随所属记录精度） | `supported_direct` | S004@1（正文第2段）；S006@1（公开简历段） | 公开投影："tenure" | 已写入 `research-data/people/wu-qing.json` 并投影至 `generatedResearch.ts` |
| F030@1 | `career/wu-qing-csrc-jg-hist/tenureStatus` | 历史任职确认，细分轮岗起止年月未公开故留空（值：`"historical"`） | 非日期字段（随所属记录精度） | `supported_direct` | S004@1（正文第2段）；S006@1（公开简历段） | 公开投影："historical" | 已写入 `research-data/people/wu-qing.json` 并投影至 `generatedResearch.ts` |
| F031@1 | `career/wu-qing-csrc-jg-hist/unitId` | 历史任职确认，细分轮岗起止年月未公开故留空（值：`"csrc-jg"`） | 非日期字段（随所属记录精度） | `supported_direct` | S004@1（正文第2段）；S006@1（公开简历段） | 公开投影："csrc-jg" | 已写入 `research-data/people/wu-qing.json` 并投影至 `generatedResearch.ts` |
| F032@1 | `career/wu-qing-csrc-jg-hist/unitName` | 历史任职确认，细分轮岗起止年月未公开故留空（值：`"中国证券监督管理委员会"`） | 非日期字段（随所属记录精度） | `supported_direct` | S004@1（正文第2段）；S006@1（公开简历段） | 公开投影："中国证券监督管理委员会" | 已写入 `research-data/people/wu-qing.json` 并投影至 `generatedResearch.ts` |
| F033@1 | `career/wu-qing-csrc-jg-hist/department` | 历史任职确认，细分轮岗起止年月未公开故留空（值：`"机构监管部（原机构部）"`） | 非日期字段（随所属记录精度） | `supported_direct` | S004@1（正文第2段）；S006@1（公开简历段） | 公开投影："机构监管部（原机构部）" | 已写入 `research-data/people/wu-qing.json` 并投影至 `generatedResearch.ts` |
| F034@1 | `career/wu-qing-csrc-jg-hist/position` | 历史任职确认，细分轮岗起止年月未公开故留空（值：`"副处长、综合处处长、副主任、主任"`） | 非日期字段（随所属记录精度） | `supported_direct` | S004@1（正文第2段）；S006@1（公开简历段） | 公开投影："副处长、综合处处长、副主任、主任" | 已写入 `research-data/people/wu-qing.json` 并投影至 `generatedResearch.ts` |
| F035@1 | `career/wu-qing-csrc-jg-hist/rank` | 历史任职确认，细分轮岗起止年月未公开故留空（值：`"正厅局级"`） | 非日期字段（随所属记录精度） | `supported_direct` | S004@1（正文第2段）；S006@1（公开简历段） | 公开投影："正厅局级" | 已写入 `research-data/people/wu-qing.json` 并投影至 `generatedResearch.ts` |
| F036@1 | `career/wu-qing-csrc-risk-hist/recordKind` | 非常设/历史专职机构用空unitId避免误归现设司局；起止年月留空（值：`"tenure"`） | 非日期字段（随所属记录精度） | `supported_direct` | S004@1（正文第2段）；S005@1（吴清同志简历段） | 公开投影："tenure" | 已写入 `research-data/people/wu-qing.json` 并投影至 `generatedResearch.ts` |
| F037@1 | `career/wu-qing-csrc-risk-hist/tenureStatus` | 非常设/历史专职机构用空unitId避免误归现设司局；起止年月留空（值：`"historical"`） | 非日期字段（随所属记录精度） | `supported_direct` | S004@1（正文第2段）；S005@1（吴清同志简历段） | 公开投影："historical" | 已写入 `research-data/people/wu-qing.json` 并投影至 `generatedResearch.ts` |
| F038@1 | `career/wu-qing-csrc-risk-hist/unitId` | 非常设/历史专职机构用空unitId避免误归现设司局；起止年月留空（值：`""`） | 非日期字段（随所属记录精度） | `supported_direct` | S004@1（正文第2段）；S005@1（吴清同志简历段） | 公开投影："" | 已写入 `research-data/people/wu-qing.json` 并投影至 `generatedResearch.ts` |
| F039@1 | `career/wu-qing-csrc-risk-hist/unitName` | 非常设/历史专职机构用空unitId避免误归现设司局；起止年月留空（值：`"中国证券监督管理委员会证券公司风险处置办公室"`） | 非日期字段（随所属记录精度） | `supported_direct` | S004@1（正文第2段）；S005@1（吴清同志简历段） | 公开投影："中国证券监督管理委员会证券公司风险处置办公室" | 已写入 `research-data/people/wu-qing.json` 并投影至 `generatedResearch.ts` |
| F040@1 | `career/wu-qing-csrc-risk-hist/position` | 非常设/历史专职机构用空unitId避免误归现设司局；起止年月留空（值：`"主任"`） | 非日期字段（随所属记录精度） | `supported_direct` | S004@1（正文第2段）；S005@1（吴清同志简历段） | 公开投影："主任" | 已写入 `research-data/people/wu-qing.json` 并投影至 `generatedResearch.ts` |
| F041@1 | `career/wu-qing-csrc-risk-hist/rank` | 非常设/历史专职机构用空unitId避免误归现设司局；起止年月留空（值：`"正厅局级"`） | 非日期字段（随所属记录精度） | `supported_direct` | S004@1（正文第2段）；S005@1（吴清同志简历段） | 公开投影："正厅局级" | 已写入 `research-data/people/wu-qing.json` 并投影至 `generatedResearch.ts` |
| F042@1 | `career/wu-qing-csrc-fund-hist/recordKind` | 原基金监管部独立于现机构司；未见单独免职日原文故省略endYear（值：`"tenure"`） | 非日期字段（随所属记录精度） | `supported_direct` | S004@1（正文第2段）；S005@1（吴清同志简历段） | 公开投影："tenure" | 已写入 `research-data/people/wu-qing.json` 并投影至 `generatedResearch.ts` |
| F043@1 | `career/wu-qing-csrc-fund-hist/tenureStatus` | 原基金监管部独立于现机构司；未见单独免职日原文故省略endYear（值：`"historical"`） | 非日期字段（随所属记录精度） | `supported_direct` | S004@1（正文第2段）；S005@1（吴清同志简历段） | 公开投影："historical" | 已写入 `research-data/people/wu-qing.json` 并投影至 `generatedResearch.ts` |
| F044@1 | `career/wu-qing-csrc-fund-hist/unitId` | 原基金监管部独立于现机构司；未见单独免职日原文故省略endYear（值：`""`） | 非日期字段（随所属记录精度） | `supported_direct` | S004@1（正文第2段）；S005@1（吴清同志简历段） | 公开投影："" | 已写入 `research-data/people/wu-qing.json` 并投影至 `generatedResearch.ts` |
| F045@1 | `career/wu-qing-csrc-fund-hist/unitName` | 原基金监管部独立于现机构司；未见单独免职日原文故省略endYear（值：`"中国证券监督管理委员会基金监管部"`） | 非日期字段（随所属记录精度） | `supported_direct` | S004@1（正文第2段）；S005@1（吴清同志简历段） | 公开投影："中国证券监督管理委员会基金监管部" | 已写入 `research-data/people/wu-qing.json` 并投影至 `generatedResearch.ts` |
| F046@1 | `career/wu-qing-csrc-fund-hist/position` | 原基金监管部独立于现机构司；未见单独免职日原文故省略endYear（值：`"主任"`） | 非日期字段（随所属记录精度） | `supported_direct` | S004@1（正文第2段）；S005@1（吴清同志简历段） | 公开投影："主任" | 已写入 `research-data/people/wu-qing.json` 并投影至 `generatedResearch.ts` |
| F047@1 | `career/wu-qing-csrc-fund-hist/rank` | 原基金监管部独立于现机构司；未见单独免职日原文故省略endYear（值：`"正厅局级"`） | 非日期字段（随所属记录精度） | `supported_direct` | S004@1（正文第2段）；S005@1（吴清同志简历段） | 公开投影："正厅局级" | 已写入 `research-data/people/wu-qing.json` 并投影至 `generatedResearch.ts` |
| F048@1 | `career/wu-qing-hongkou-mayor-2010-2013/recordKind` | 2010年11月任代区长、2011年1月当选区长；区长免职精确月份未在已读原文单列故省略endYear（值：`"tenure"`） | 非日期字段（随所属记录精度） | `supported_direct` | S004@1（正文第2段） | 公开投影："tenure" | 已写入 `research-data/people/wu-qing.json` 并投影至 `generatedResearch.ts` |
| F049@1 | `career/wu-qing-hongkou-mayor-2010-2013/tenureStatus` | 2010年11月任代区长、2011年1月当选区长；区长免职精确月份未在已读原文单列故省略endYear（值：`"historical"`） | 非日期字段（随所属记录精度） | `supported_direct` | S004@1（正文第2段） | 公开投影："historical" | 已写入 `research-data/people/wu-qing.json` 并投影至 `generatedResearch.ts` |
| F050@1 | `career/wu-qing-hongkou-mayor-2010-2013/unitId` | 2010年11月任代区长、2011年1月当选区长；区长免职精确月份未在已读原文单列故省略endYear（值：`"gov-sh-dist"`） | 非日期字段（随所属记录精度） | `supported_direct` | S004@1（正文第2段） | 公开投影："gov-sh-dist" | 已写入 `research-data/people/wu-qing.json` 并投影至 `generatedResearch.ts` |
| F051@1 | `career/wu-qing-hongkou-mayor-2010-2013/unitName` | 2010年11月任代区长、2011年1月当选区长；区长免职精确月份未在已读原文单列故省略endYear（值：`"上海市虹口区人民政府"`） | 非日期字段（随所属记录精度） | `supported_direct` | S004@1（正文第2段） | 公开投影："上海市虹口区人民政府" | 已写入 `research-data/people/wu-qing.json` 并投影至 `generatedResearch.ts` |
| F052@1 | `career/wu-qing-hongkou-mayor-2010-2013/position` | 2010年11月任代区长、2011年1月当选区长；区长免职精确月份未在已读原文单列故省略endYear（值：`"区委副书记、副区长、代理区长、区长"`） | 非日期字段（随所属记录精度） | `supported_direct` | S004@1（正文第2段） | 公开投影："区委副书记、副区长、代理区长、区长" | 已写入 `research-data/people/wu-qing.json` 并投影至 `generatedResearch.ts` |
| F053@1 | `career/wu-qing-hongkou-mayor-2010-2013/rank` | 2010年11月任代区长、2011年1月当选区长；区长免职精确月份未在已读原文单列故省略endYear（值：`"正厅局级"`） | 非日期字段（随所属记录精度） | `supported_direct` | S004@1（正文第2段） | 公开投影："正厅局级" | 已写入 `research-data/people/wu-qing.json` 并投影至 `generatedResearch.ts` |
| F054@1 | `career/wu-qing-hongkou-mayor-2010-2013/startYear` | 2010年11月任代区长、2011年1月当选区长；区长免职精确月份未在已读原文单列故省略endYear（值：`2010`） | startYear=2010（原文直接记载） | `supported_direct` | S004@1（正文第2段） | 公开投影：2010 | 已写入 `research-data/people/wu-qing.json` 并投影至 `generatedResearch.ts` |
| F055@1 | `career/wu-qing-hongkou-mayor-2010-2013/startMonth` | 2010年11月任代区长、2011年1月当选区长；区长免职精确月份未在已读原文单列故省略endYear（值：`11`） | startMonth=11（原文直接记载） | `supported_direct` | S004@1（正文第2段） | 公开投影：11 | 已写入 `research-data/people/wu-qing.json` 并投影至 `generatedResearch.ts` |
| F056@1 | `career/wu-qing-hongkou-sec-2013-2016/recordKind` | 确认2013年7月起任虹口区委书记（值：`"tenure"`） | 非日期字段（随所属记录精度） | `supported_direct` | S003@1（公开简历段）；S006@1（公开简历段） | 公开投影："tenure" | 已写入 `research-data/people/wu-qing.json` 并投影至 `generatedResearch.ts` |
| F057@1 | `career/wu-qing-hongkou-sec-2013-2016/tenureStatus` | 确认2013年7月起任虹口区委书记（值：`"historical"`） | 非日期字段（随所属记录精度） | `supported_direct` | S003@1（公开简历段）；S006@1（公开简历段） | 公开投影："historical" | 已写入 `research-data/people/wu-qing.json` 并投影至 `generatedResearch.ts` |
| F058@1 | `career/wu-qing-hongkou-sec-2013-2016/unitId` | 确认2013年7月起任虹口区委书记（值：`"gov-sh-dist"`） | 非日期字段（随所属记录精度） | `supported_direct` | S003@1（公开简历段）；S006@1（公开简历段） | 公开投影："gov-sh-dist" | 已写入 `research-data/people/wu-qing.json` 并投影至 `generatedResearch.ts` |
| F059@1 | `career/wu-qing-hongkou-sec-2013-2016/unitName` | 确认2013年7月起任虹口区委书记（值：`"中共上海市虹口区委"`） | 非日期字段（随所属记录精度） | `supported_direct` | S003@1（公开简历段）；S006@1（公开简历段） | 公开投影："中共上海市虹口区委" | 已写入 `research-data/people/wu-qing.json` 并投影至 `generatedResearch.ts` |
| F060@1 | `career/wu-qing-hongkou-sec-2013-2016/position` | 确认2013年7月起任虹口区委书记（值：`"区委书记"`） | 非日期字段（随所属记录精度） | `supported_direct` | S003@1（公开简历段）；S006@1（公开简历段） | 公开投影："区委书记" | 已写入 `research-data/people/wu-qing.json` 并投影至 `generatedResearch.ts` |
| F061@1 | `career/wu-qing-hongkou-sec-2013-2016/rank` | 确认2013年7月起任虹口区委书记（值：`"正厅局级"`） | 非日期字段（随所属记录精度） | `supported_direct` | S003@1（公开简历段）；S006@1（公开简历段） | 公开投影："正厅局级" | 已写入 `research-data/people/wu-qing.json` 并投影至 `generatedResearch.ts` |
| F062@1 | `career/wu-qing-hongkou-sec-2013-2016/startYear` | 确认2013年7月起任虹口区委书记（值：`2013`） | startYear=2013（原文直接记载） | `supported_direct` | S003@1（公开简历段）；S006@1（公开简历段） | 公开投影：2013 | 已写入 `research-data/people/wu-qing.json` 并投影至 `generatedResearch.ts` |
| F063@1 | `career/wu-qing-hongkou-sec-2013-2016/startMonth` | 确认2013年7月起任虹口区委书记（值：`7`） | startMonth=7（原文直接记载） | `supported_direct` | S003@1（公开简历段）；S006@1（公开简历段） | 公开投影：7 | 已写入 `research-data/people/wu-qing.json` 并投影至 `generatedResearch.ts` |
| F064@1 | `career/wu-qing-sse-chair-2016-2017/recordKind` | 2016年5月至2017年12月任上交所党委书记、理事长（副部长级）（值：`"tenure"`） | 非日期字段（随所属记录精度） | `supported_direct` | S003@1（公开简历段）；S006@1（公开简历段） | 公开投影："tenure" | 已写入 `research-data/people/wu-qing.json` 并投影至 `generatedResearch.ts` |
| F065@1 | `career/wu-qing-sse-chair-2016-2017/tenureStatus` | 2016年5月至2017年12月任上交所党委书记、理事长（副部长级）（值：`"historical"`） | 非日期字段（随所属记录精度） | `supported_direct` | S003@1（公开简历段）；S006@1（公开简历段） | 公开投影："historical" | 已写入 `research-data/people/wu-qing.json` 并投影至 `generatedResearch.ts` |
| F066@1 | `career/wu-qing-sse-chair-2016-2017/unitId` | 2016年5月至2017年12月任上交所党委书记、理事长（副部长级）（值：`"csrc-sse"`） | 非日期字段（随所属记录精度） | `supported_direct` | S003@1（公开简历段）；S006@1（公开简历段） | 公开投影："csrc-sse" | 已写入 `research-data/people/wu-qing.json` 并投影至 `generatedResearch.ts` |
| F067@1 | `career/wu-qing-sse-chair-2016-2017/unitName` | 2016年5月至2017年12月任上交所党委书记、理事长（副部长级）（值：`"上海证券交易所"`） | 非日期字段（随所属记录精度） | `supported_direct` | S003@1（公开简历段）；S006@1（公开简历段） | 公开投影："上海证券交易所" | 已写入 `research-data/people/wu-qing.json` 并投影至 `generatedResearch.ts` |
| F068@1 | `career/wu-qing-sse-chair-2016-2017/position` | 2016年5月至2017年12月任上交所党委书记、理事长（副部长级）（值：`"理事会理事长、党委书记"`） | 非日期字段（随所属记录精度） | `supported_direct` | S003@1（公开简历段）；S006@1（公开简历段） | 公开投影："理事会理事长、党委书记" | 已写入 `research-data/people/wu-qing.json` 并投影至 `generatedResearch.ts` |
| F069@1 | `career/wu-qing-sse-chair-2016-2017/rank` | 2016年5月至2017年12月任上交所党委书记、理事长（副部长级）（值：`"副部级"`） | 非日期字段（随所属记录精度） | `supported_direct` | S003@1（公开简历段）；S006@1（公开简历段） | 公开投影："副部级" | 已写入 `research-data/people/wu-qing.json` 并投影至 `generatedResearch.ts` |
| F070@1 | `career/wu-qing-sse-chair-2016-2017/startYear` | 2016年5月至2017年12月任上交所党委书记、理事长（副部长级）（值：`2016`） | startYear=2016（原文直接记载） | `supported_direct` | S003@1（公开简历段）；S006@1（公开简历段） | 公开投影：2016 | 已写入 `research-data/people/wu-qing.json` 并投影至 `generatedResearch.ts` |
| F071@1 | `career/wu-qing-sse-chair-2016-2017/startMonth` | 2016年5月至2017年12月任上交所党委书记、理事长（副部长级）（值：`5`） | startMonth=5（原文直接记载） | `supported_direct` | S003@1（公开简历段）；S006@1（公开简历段） | 公开投影：5 | 已写入 `research-data/people/wu-qing.json` 并投影至 `generatedResearch.ts` |
| F072@1 | `career/wu-qing-sse-chair-2016-2017/endYear` | 2016年5月至2017年12月任上交所党委书记、理事长（副部长级）（值：`2017`） | endYear=2017（原文直接记载） | `supported_direct` | S003@1（公开简历段）；S006@1（公开简历段） | 公开投影：2017 | 已写入 `research-data/people/wu-qing.json` 并投影至 `generatedResearch.ts` |
| F073@1 | `career/wu-qing-sse-chair-2016-2017/endMonth` | 2016年5月至2017年12月任上交所党委书记、理事长（副部长级）（值：`12`） | endMonth=12（原文直接记载） | `supported_direct` | S003@1（公开简历段）；S006@1（公开简历段） | 公开投影：12 | 已写入 `research-data/people/wu-qing.json` 并投影至 `generatedResearch.ts` |
| F074@1 | `career/wu-qing-shanghai-vm-2018/recordKind` | 2018年1月获任上海市副市长，2021年12月任常务副市长（值：`"tenure"`） | 非日期字段（随所属记录精度） | `supported_direct` | S005@1（吴清同志简历段）；S006@1（公开简历段） | 公开投影："tenure" | 已写入 `research-data/people/wu-qing.json` 并投影至 `generatedResearch.ts` |
| F075@1 | `career/wu-qing-shanghai-vm-2018/tenureStatus` | 2018年1月获任上海市副市长，2021年12月任常务副市长（值：`"historical"`） | 非日期字段（随所属记录精度） | `supported_direct` | S005@1（吴清同志简历段）；S006@1（公开简历段） | 公开投影："historical" | 已写入 `research-data/people/wu-qing.json` 并投影至 `generatedResearch.ts` |
| F076@1 | `career/wu-qing-shanghai-vm-2018/unitId` | 2018年1月获任上海市副市长，2021年12月任常务副市长（值：`"gov-sh-prov"`） | 非日期字段（随所属记录精度） | `supported_direct` | S005@1（吴清同志简历段）；S006@1（公开简历段） | 公开投影："gov-sh-prov" | 已写入 `research-data/people/wu-qing.json` 并投影至 `generatedResearch.ts` |
| F077@1 | `career/wu-qing-shanghai-vm-2018/unitName` | 2018年1月获任上海市副市长，2021年12月任常务副市长（值：`"上海市人民政府"`） | 非日期字段（随所属记录精度） | `supported_direct` | S005@1（吴清同志简历段）；S006@1（公开简历段） | 公开投影："上海市人民政府" | 已写入 `research-data/people/wu-qing.json` 并投影至 `generatedResearch.ts` |
| F078@1 | `career/wu-qing-shanghai-vm-2018/position` | 2018年1月获任上海市副市长，2021年12月任常务副市长（值：`"副市长（2019年起任市委常委、副市长，2021年12月起任市委常委、常务副市长）"`） | 非日期字段（随所属记录精度） | `supported_direct` | S005@1（吴清同志简历段）；S006@1（公开简历段） | 公开投影："副市长（2019年起任市委常委、副市长，2021年12月起任市委常委、常务副市长）" | 已写入 `research-data/people/wu-qing.json` 并投影至 `generatedResearch.ts` |
| F079@1 | `career/wu-qing-shanghai-vm-2018/rank` | 2018年1月获任上海市副市长，2021年12月任常务副市长（值：`"副部级"`） | 非日期字段（随所属记录精度） | `supported_direct` | S005@1（吴清同志简历段）；S006@1（公开简历段） | 公开投影："副部级" | 已写入 `research-data/people/wu-qing.json` 并投影至 `generatedResearch.ts` |
| F080@1 | `career/wu-qing-shanghai-vm-2018/startYear` | 2018年1月获任上海市副市长，2021年12月任常务副市长（值：`2018`） | startYear=2018（原文直接记载） | `supported_direct` | S005@1（吴清同志简历段）；S006@1（公开简历段） | 公开投影：2018 | 已写入 `research-data/people/wu-qing.json` 并投影至 `generatedResearch.ts` |
| F081@1 | `career/wu-qing-shanghai-vm-2018/startMonth` | 2018年1月获任上海市副市长，2021年12月任常务副市长（值：`1`） | startMonth=1（原文直接记载） | `supported_direct` | S005@1（吴清同志简历段）；S006@1（公开简历段） | 公开投影：1 | 已写入 `research-data/people/wu-qing.json` 并投影至 `generatedResearch.ts` |
| F082@1 | `career/wu-qing-shanghai-standing-2019/recordKind` | 2019年任上海市委常委年份确证；8月批准与9月宣布的月份差异单独记入冲突事实（值：`"tenure"`） | 非日期字段（随所属记录精度） | `supported_direct` | S005@1（正文第1段）；S003@1（公开简历段） | 公开投影："tenure" | 已写入 `research-data/people/wu-qing.json` 并投影至 `generatedResearch.ts` |
| F083@1 | `career/wu-qing-shanghai-standing-2019/tenureStatus` | 2019年任上海市委常委年份确证；8月批准与9月宣布的月份差异单独记入冲突事实（值：`"historical"`） | 非日期字段（随所属记录精度） | `supported_direct` | S005@1（正文第1段）；S003@1（公开简历段） | 公开投影："historical" | 已写入 `research-data/people/wu-qing.json` 并投影至 `generatedResearch.ts` |
| F084@1 | `career/wu-qing-shanghai-standing-2019/unitId` | 2019年任上海市委常委年份确证；8月批准与9月宣布的月份差异单独记入冲突事实（值：`"gov-sh-prov"`） | 非日期字段（随所属记录精度） | `supported_direct` | S005@1（正文第1段）；S003@1（公开简历段） | 公开投影："gov-sh-prov" | 已写入 `research-data/people/wu-qing.json` 并投影至 `generatedResearch.ts` |
| F085@1 | `career/wu-qing-shanghai-standing-2019/unitName` | 2019年任上海市委常委年份确证；8月批准与9月宣布的月份差异单独记入冲突事实（值：`"中共上海市委"`） | 非日期字段（随所属记录精度） | `supported_direct` | S005@1（正文第1段）；S003@1（公开简历段） | 公开投影："中共上海市委" | 已写入 `research-data/people/wu-qing.json` 并投影至 `generatedResearch.ts` |
| F086@1 | `career/wu-qing-shanghai-standing-2019/position` | 2019年任上海市委常委年份确证；8月批准与9月宣布的月份差异单独记入冲突事实（值：`"市委常委"`） | 非日期字段（随所属记录精度） | `supported_direct` | S005@1（正文第1段）；S003@1（公开简历段） | 公开投影："市委常委" | 已写入 `research-data/people/wu-qing.json` 并投影至 `generatedResearch.ts` |
| F087@1 | `career/wu-qing-shanghai-standing-2019/rank` | 2019年任上海市委常委年份确证；8月批准与9月宣布的月份差异单独记入冲突事实（值：`"副部级"`） | 非日期字段（随所属记录精度） | `supported_direct` | S005@1（正文第1段）；S003@1（公开简历段） | 公开投影："副部级" | 已写入 `research-data/people/wu-qing.json` 并投影至 `generatedResearch.ts` |
| F088@1 | `career/wu-qing-shanghai-standing-2019/startYear` | 2019年任上海市委常委年份确证；8月批准与9月宣布的月份差异单独记入冲突事实（值：`2019`） | startYear=2019（原文直接记载） | `supported_direct` | S005@1（正文第1段）；S003@1（公开简历段） | 公开投影：2019 | 已写入 `research-data/people/wu-qing.json` 并投影至 `generatedResearch.ts` |
| F089@1 | `career/wu-qing-shanghai-standing-2019/startMonth` | 中央批准月（8月）与地方党报宣布月（9月）口径待任免原件核准，暂不公开月份（值：`冲突候选：9 vs 8`） | startMonth=冲突候选：9 vs 8（待核／冲突） | `conflicted` | S005@1（正文第1段）；S003@1（公开简历段） | 暂不公开投影（仅存研究库） | 仅存 `research-data/people/wu-qing.json`（未发布） |
| F090@1 | `career/wu-qing-shanghai-depsec-2023-2024/recordKind` | 2023年7月至2024年2月任上海市委副书记（值：`"tenure"`） | 非日期字段（随所属记录精度） | `supported_direct` | S003@1（公开简历段）；S007@1（正文第1段） | 公开投影："tenure" | 已写入 `research-data/people/wu-qing.json` 并投影至 `generatedResearch.ts` |
| F091@1 | `career/wu-qing-shanghai-depsec-2023-2024/tenureStatus` | 2023年7月至2024年2月任上海市委副书记（值：`"historical"`） | 非日期字段（随所属记录精度） | `supported_direct` | S003@1（公开简历段）；S007@1（正文第1段） | 公开投影："historical" | 已写入 `research-data/people/wu-qing.json` 并投影至 `generatedResearch.ts` |
| F092@1 | `career/wu-qing-shanghai-depsec-2023-2024/unitId` | 2023年7月至2024年2月任上海市委副书记（值：`"gov-sh-prov"`） | 非日期字段（随所属记录精度） | `supported_direct` | S003@1（公开简历段）；S007@1（正文第1段） | 公开投影："gov-sh-prov" | 已写入 `research-data/people/wu-qing.json` 并投影至 `generatedResearch.ts` |
| F093@1 | `career/wu-qing-shanghai-depsec-2023-2024/unitName` | 2023年7月至2024年2月任上海市委副书记（值：`"中共上海市委"`） | 非日期字段（随所属记录精度） | `supported_direct` | S003@1（公开简历段）；S007@1（正文第1段） | 公开投影："中共上海市委" | 已写入 `research-data/people/wu-qing.json` 并投影至 `generatedResearch.ts` |
| F094@1 | `career/wu-qing-shanghai-depsec-2023-2024/position` | 2023年7月至2024年2月任上海市委副书记（值：`"市委副书记"`） | 非日期字段（随所属记录精度） | `supported_direct` | S003@1（公开简历段）；S007@1（正文第1段） | 公开投影："市委副书记" | 已写入 `research-data/people/wu-qing.json` 并投影至 `generatedResearch.ts` |
| F095@1 | `career/wu-qing-shanghai-depsec-2023-2024/rank` | 2023年7月至2024年2月任上海市委副书记（值：`"副部级"`） | 非日期字段（随所属记录精度） | `supported_direct` | S003@1（公开简历段）；S007@1（正文第1段） | 公开投影："副部级" | 已写入 `research-data/people/wu-qing.json` 并投影至 `generatedResearch.ts` |
| F096@1 | `career/wu-qing-shanghai-depsec-2023-2024/startYear` | 2023年7月至2024年2月任上海市委副书记（值：`2023`） | startYear=2023（原文直接记载） | `supported_direct` | S003@1（公开简历段）；S007@1（正文第1段） | 公开投影：2023 | 已写入 `research-data/people/wu-qing.json` 并投影至 `generatedResearch.ts` |
| F097@1 | `career/wu-qing-shanghai-depsec-2023-2024/startMonth` | 2023年7月至2024年2月任上海市委副书记（值：`7`） | startMonth=7（原文直接记载） | `supported_direct` | S003@1（公开简历段）；S007@1（正文第1段） | 公开投影：7 | 已写入 `research-data/people/wu-qing.json` 并投影至 `generatedResearch.ts` |
| F098@1 | `career/wu-qing-shanghai-depsec-2023-2024/endYear` | 2023年7月至2024年2月任上海市委副书记（值：`2024`） | endYear=2024（原文直接记载） | `supported_direct` | S003@1（公开简历段）；S007@1（正文第1段） | 公开投影：2024 | 已写入 `research-data/people/wu-qing.json` 并投影至 `generatedResearch.ts` |
| F099@1 | `career/wu-qing-shanghai-depsec-2023-2024/endMonth` | 2023年7月至2024年2月任上海市委副书记（值：`2`） | endMonth=2（原文直接记载） | `supported_direct` | S003@1（公开简历段）；S007@1（正文第1段） | 公开投影：2 | 已写入 `research-data/people/wu-qing.json` 并投影至 `generatedResearch.ts` |
| F100@1 | `career/wu-qing-spc-candidate/unitName` | 旧库legacyData.ts第1412行载1989—1993任国家计委综合司干部，本轮已读7篇原文均未直接写出“国家计划委员会”，保留为待核候选线索（值：`"国家计划委员会综合司"`） | 非日期字段（随所属记录精度） | `candidate` | 待补原文 | 暂不公开投影（仅存研究库） | 仅存 `research-data/people/wu-qing.json`（未发布） |

## 推理台账

- 本轮无公开 `derived` 推理事实；所有已发布字段均由 `supported_direct` 原文直接支撑。

## 冲突与拒绝记录

| 争议属性 | 说法A及来源 | 说法B及来源 | 是否同一日期／职务口径 | 处理及理由 | 待查链接／搜索式 |
| --- | --- | --- | --- | --- | --- |
| 本科院校与毕业年份 | 旧库 `legacyData.ts:1378`：1989年安徽财贸学院财政学学士 | S001 上海财经大学校友会官网：1987年本科毕业于上海财经大学财政学专业 | 同一本科学历阶段 | **采信 S001 并否决旧库**：母校官方校友会记录具有最高权威性，旧库系无来源错配 | 无需再查 |
| 中共上海市委常委起始月份（F089） | S005 七一网（引解放日报 2019-09-05）：发布中共中央批准任上海市委委员、常委消息（红星新闻亦作2019年9月） | S003 新京报简历：写为“2019年8月任上海市委常委、副市长” | 中央批准落款月 vs 党报宣布月差异 | **公开 `startYear: 2019`，将 `startMonth` 标为 `conflicted`（F089）保留8月/9月双版本**：不强行择一抹平 | `site:shanghai.gov.cn "吴清" "市委常委" "2019年"` |

## 职业时间线缺口与下一轮

| 缺口 | 已知边界（不强推任期） | 要找的材料 | 下一条完整查询 | 优先级 |
| --- | --- | --- | --- | --- |
| 1989.01—1998 早期工作单位（含旧库所称国家计委综合司）及进入证监会年份 | 已知 1987 本科毕业、1989.01 参加工作、1991 人大硕士毕业 | 权威公开简历或年鉴对国家计委综合司及调入证监会年份的直接记载 | `"吴清" "国家计委" OR "国家计划委员会" "证监会"` | 中 |
| 证监会机构部、风险办、基金部三段司局级主任各自的精确起止年月 | 已知先后任机构监管部主任、风险办主任、基金部主任，2010.11调任虹口区代区长 | 证监会年报或《中国证券期货年鉴》司局负责人名录 | `"吴清" "风险处置办公室主任" "基金监管部主任" 2005 2009` | 中 |

## 本轮交付与续接

- 新增有效岗位／教育经历／日期属性：新增 2 段核验教育经历（上财1987本科、人大1991硕士）并升级 1 段博士经历（人大2002金融学博士）；新增 8 段核验历史任职（证监会机构部、风险办、基金部，虹口区长、虹口区委书记，上交所理事长，上海市副市长／常务副市长、市委常委、市委副书记）；补齐籍贯“安徽蒙城”与现职级“正部级”。
- 删除或纠正的错误及依据：彻底纠正旧库“1989安徽财贸学院学士”“1992人大硕士”两处学历硬伤；将未证实的“国家计委综合司”降级为未公开 `candidate`（F100）；将上海市委常委起始月 8月/9月差异规范记录为 `conflicted`（F089）。
- 来源对应复查结果：全部已发布事实均绑定 `reading: "read"` 原文定位摘录，无悬空引用，无观察点冒充连续任期起止。
- 页面及结构验证（仅实际执行后填写）：已通过 `npm run research:check`、`npm run audit:data`、`npm run test:records`、`npm run test:relations`、`npm run test:research`、`npm run test:safety` 及生产构建 `npm run build` 校验。
- 结束状态：本轮研究完成（核心锚点与主干履历已入库，细分早期缺口转入二轮深化队列）。
- 停止条件满足情况：已核清核心身份、现职状态、关键正副局／部级履历与母校学历，证伪旧库硬伤并留下精确下一查询。
- 上次停在查询ID／来源ID：`Q002` ／ `S007`
- 最后处理事实ID／推理ID及当前阶段：`F100@1` ／ 无 `I` 推理项（已完成工作台导入与公开投影）
- 已证实待入库事实及原因／拟写入字段：无（本轮已证实事实已全部通过 `research:import --write --expect` 入库）。
- 旧模型线索对账完成与剩余项：旧库核心学历与主干履历线索已完成对账；待核候选见上表 `candidate`／`conflicted` 项。
- 输入变更后需要重新计算或撤销的推理：无依赖推理受影响。
- 下一步必须先执行的搜索式或原文链接：`"吴清" "国家计委" OR "国家计划委员会" "证监会" 简历`
- 尚未访问的高价值来源：《中国证券期货年鉴》历史卷、学位论文库及部分脚本受阻的交易所官网内页（详见渠道覆盖表）。
- 是否需要用户提供合法访问权限或已有资料：否（公开渠道与本地 Google Chrome 浏览器即可继续推进）。
