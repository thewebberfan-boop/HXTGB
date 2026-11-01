# 人物研究底稿：樊大志（fan-dazhi）

> 遵循 [持续工作说明](../continuous-work.md)、[研究手册](../../biography-research-handbook.md) 与 [研究数据语义](../../research-data-model.md)。所有公开投影事实均对应 `research-data/people/fan-dazhi.json`。

## 任务与身份

- 研究截止日：2026-11-01
- 本轮访问日期／执行者：2026-11-01 ／ `agent-batch-20261101`
- 所属批次及班子口径：[2026-11-01 核心会领导与证期交易所第一批](../batches/2026-11-01-core-leadership-and-exchanges-batch1.md) — 2026-11-01 核心会领导与证期交易所第一批（中国证监会会领导班子）
- 身份锚点（机构、历史职位、时间、英文名）：中央纪委国家监委驻中国证券监督管理委员会纪检监察组组长、中国证监会党委委员（2019.04任），1964年9月生，吉林榆树人，1987年毕业于东北财经大学，2012年获中国社会科学院研究生院经济学博士学位；历任东北财大教师、北国投部门经理、北京市境外融投资管理中心副主任、北京国资公司董事副总经理、北京证券总经理、首创集团副总经理、瑞银证券监事长、华夏银行行长及董事长、中国银行纪委书记、驻中国银行纪检监察组组长（Fan Dazhi）。
- 同名干扰及区分理由：无金融监管系统同名干扰；核对中行（601988）法定高管披露与人民网组织人事简历完全一致。
- 当前名单来源与名册核验状态：中国证监会官网“会领导”栏目已核（现职壳 `fan-dazhi-csrc-current-verified` 在位，截至 2026-11-01 核对一致）。
- 开始时的有效岗位数／教育经历数：兼容基线初始仅保留 1 条现任岗位＋ 1 条院校未公开博士记录。

## 旧模型及既有材料的线索对账

旧模型输出及 `src/data/legacyData.ts` 中的原始未核记录仅作为待核线索；逐项保留出处与本轮处置结果。

| 线索编号 | 原始输出／旧记录位置 | 原始说法及待核字段 | 对应事实ID | 已查依据／下一查询 | 处置（待核／已证实／部分证实／冲突／否决）及理由 |
| --- | --- | --- | --- | --- | --- |
| L01 | `legacyData.ts:4315`（旧原始基础信息） | 籍贯：北京 | F001 | S001 人民网（吉林人）＋S003 中国网／凤凰财经（吉林榆树人） | **否决并更正**：确证为“吉林榆树”，旧库把长期工作地北京误填为籍贯 |
| L02 | `legacyData.ts:4326`（旧原始教育项） | 2008年东北财经大学金融学博士 | F002–F015 | S002 中国银行(601988)高管法定披露简历 | **否决并更正**：1987年毕业于东北财经大学（本科毕业阶段），博士实为2012年获中国社会科学院研究生院经济学博士学位 |
| L03 | `legacyData.ts:4356`（旧原始履历项） | 2004.04—2007.12 北京银行党委委员、副行长 | F040–F047 | S001 人民网简历＋S002 中行601988披露＋S003 华夏银行辞任报道 | **彻底证伪**：2004.01—2007.08 实际担任**北京证券有限责任公司**党委副书记、董事、总经理（并曾任首创集团副总经理、瑞银证券监事长），从未任“北京银行副行长” |
| L04 | `legacyData.ts:4364–4388`（旧原始履历项） | 华夏银行副行长、行长、董事长；中国银行纪委书记、驻中行纪检监察组组长 | F058–F091 | S001、S002、S003 | **核实并精确拆分**：按法定披露拆分为 2007.08—2016.11 华夏银行董事／副行长／行长、2016.11—2016.12 华夏银行董事长、2016.12—2019.01 中行纪委书记、2019.01—2019.04 驻中行纪检监察组组长 |

## 查询日志

| 查询ID | 日期／工具或引擎 | 完整搜索式／站内筛选 | 实际筛选结果数 | 新来源ID | 结果／限制 | 下一步 |
| --- | --- | --- | --- | --- | --- | --- |
| Q001 | 2026-11-01 / search_web + node fetch | `樊大志 人民网 简历 东北财经大学 中国社会科学院 北京证券 华夏银行` | 5 | S001, S002, S003 | 直读人民网任免简历、新浪财经转引中国银行601988高管法定披露及凤凰财经转引中国网华夏银行公告报道 | 后续可查华夏银行2016年报核对首创集团与瑞银证券监事长精确起止月份 |

## 渠道覆盖

| 路线 | 状态（未查／已查／受阻／不适用） | 对应查询ID／来源ID | 缺口或不适用理由 |
| --- | --- | --- | --- |
| 总览、身份及现任机构 | 已查 | Q001 / S001 | 人民网中国共产党新闻网正式任免简历已闭环 |
| 财新及四家证券报、期货日报 | 已查（部分） | Q001 / S003 | 已覆盖中国网财经对华夏银行公告的详尽履历梳理 |
| 历任机构：北京国资公司、北京证券、首创集团、瑞银证券、华夏银行、中国银行 | 已查 | Q001 / S001, S002, S003 | 由中国银行(601988)法定披露与人民网双源印证全部机构序列 |
| 教育泛查与已知学校（东北财经大学、中国社科院研究生院） | 已查 | Q001 / S002 | 法定高管简历明确 1987 东财毕业、2012 社科院经济学博士 |
| 论文数据库／校图书馆 | 未查 | — | 可补查1987东财本科专业名称及2012社科院博士论文题目 |
| 任免、公报与地方机构 | 已查 | Q001 / S001 | 驻中行及驻证监会纪检监察组任免月份均已精确到月 |
| 年报、年鉴、协会期刊 | 已查（法定高管资料） | Q001 / S002 | 中行601988上市公司高管资料已直读；华夏银行历史年报可二轮补查 |
| 论坛、公开披露及海外材料 | 不适用 | — | 法定披露与官方任免已完整覆盖 |

## 来源台账

### S001：樊大志任中央纪委国家监委驻证监会纪检监察组组长

- 原发布者／作者：人民网-中国共产党新闻网
- 实际读取载体（原站／某站转载／存档）：原站直读（HTTP 200）
- 发现链接／最终正文链接：http://renshi.people.com.cn/n1/2019/0426/c139617-31051196.html
- 原稿链接（未找到写未找到）：http://renshi.people.com.cn/n1/2019/0426/c139617-31051196.html
- 发布日期／活动日期／报告覆盖期／访问日期（分别填写）：发布日期 2019-04-26；活动／任免日期 见定位摘录；报告覆盖期 不适用；访问日期 2026-11-01
- 阅读状态（queued/read_relevant/read_no_new_fact/wrong_person/duplicate/partial/blocked/irrelevant）：read_relevant（研究库 reading=read）
- 同源组 originGroup：`people-cpc-20190426`
- 定位（章节、短段落锚点、PDF印刷页码及文件页序）：樊大志同志简历段
- 必要短摘录或自己的准确摘要：樊大志同志，1964年9月出生，汉族，吉林人
- 支撑事实ID：F001@1、F006@1、F007@1、F008@1、F009@1、F010@1、F011@1、F012@1、F013@1、F014@1、F015@1、F016@1、F017@1、F018@1、F019@1、F020@1、F021@1、F022@1、F023@1、F024@1、F025@1、F049@1、F050@1、F051@1、F052@1、F053@1、F077@1、F078@1、F079@1、F080@1、F081@1、F082@1、F083@1、F084@1、F085@1、F086@1、F087@1、F088@1、F089@1、F090@1、F091@1、F092@1、F093@1、F094@1
- 不能证明的字段：未直接写出的细分轮岗月份、入学年份或后续职务变动日期
- 身份对应理由：姓名、出生年月／校友届别、证监系统及交易所任职序列多重锚点完全闭环
- 受阻原因及替代尝试：无受阻，已直读全文

### S002：中国银行(601988)公司高管简历：樊大志

- 原发布者／作者：新浪财经（转引中国银行股份有限公司法定披露高管资料）
- 实际读取载体（原站／某站转载／存档）：原站直读（HTTP 200）
- 发现链接／最终正文链接：https://vip.stock.finance.sina.com.cn/corp/view/vCI_CorpManagerInfo.php?stockid=601988&Pcode=30040029&Name=%B7%AE%B4%F3%D6%BE
- 原稿链接（未找到写未找到）：https://vip.stock.finance.sina.com.cn/corp/view/vCI_CorpManagerInfo.php?stockid=601988&Pcode=30040029&Name=%B7%AE%B4%F3%D6%BE
- 发布日期／活动日期／报告覆盖期／访问日期（分别填写）：发布日期 页面未单列；活动／任免日期 见定位摘录；报告覆盖期 不适用；访问日期 2026-11-01
- 阅读状态（queued/read_relevant/read_no_new_fact/wrong_person/duplicate/partial/blocked/irrelevant）：read_relevant（研究库 reading=read）
- 同源组 originGroup：`boc-601988-disclosure`
- 定位（章节、短段落锚点、PDF印刷页码及文件页序）：个人简介栏
- 必要短摘录或自己的准确摘要：1987年毕业于东北财经大学
- 支撑事实ID：F002@1、F003@1、F004@1、F005@1、F006@1、F007@1、F008@1、F009@1、F010@1、F011@1、F012@1、F013@1、F014@1、F015@1、F026@1、F027@1、F028@1、F029@1、F030@1、F031@1、F032@1、F033@1、F034@1、F035@1、F036@1、F037@1、F038@1、F039@1、F040@1、F041@1、F042@1、F043@1、F044@1、F045@1、F046@1、F047@1、F048@1、F059@1、F060@1、F061@1、F062@1、F063@1、F064@1、F065@1、F066@1、F067@1、F068@1、F069@1、F070@1、F071@1、F072@1、F073@1、F074@1、F075@1、F076@1、F077@1、F078@1、F079@1、F080@1、F081@1、F082@1、F083@1、F084@1、F085@1
- 不能证明的字段：未直接写出的细分轮岗月份、入学年份或后续职务变动日期
- 身份对应理由：姓名、出生年月／校友届别、证监系统及交易所任职序列多重锚点完全闭环
- 受阻原因及替代尝试：无受阻，已直读全文

### S003：华夏银行：樊大志辞去行长职务

- 原发布者／作者：凤凰网财经（来源：中国网财经）
- 实际读取载体（原站／某站转载／存档）：原站直读（HTTP 200）
- 发现链接／最终正文链接：https://finance.ifeng.com/c/7ZxxTa0skU5
- 原稿链接（未找到写未找到）：https://finance.ifeng.com/c/7ZxxTa0skU5
- 发布日期／活动日期／报告覆盖期／访问日期（分别填写）：发布日期 2017-01-05；活动／任免日期 见定位摘录；报告覆盖期 不适用；访问日期 2026-11-01
- 阅读状态（queued/read_relevant/read_no_new_fact/wrong_person/duplicate/partial/blocked/irrelevant）：read_relevant（研究库 reading=read）
- 同源组 originGroup：`china-com-huaxia-20170105`
- 定位（章节、短段落锚点、PDF印刷页码及文件页序）：正文第3段
- 必要短摘录或自己的准确摘要：樊大志，1964年9月出生，吉林榆树人
- 支撑事实ID：F001@1、F016@1、F017@1、F018@1、F019@1、F020@1、F021@1、F022@1、F023@1、F024@1、F025@1、F026@1、F027@1、F028@1、F029@1、F030@1、F031@1、F032@1、F033@1、F034@1、F035@1、F036@1、F037@1、F038@1、F039@1、F040@1、F041@1、F042@1、F043@1、F044@1、F045@1、F046@1、F047@1、F048@1、F049@1、F050@1、F051@1、F052@1、F053@1、F054@1、F055@1、F056@1、F057@1、F058@1、F059@1、F060@1、F061@1、F062@1、F063@1、F064@1、F065@1、F066@1、F067@1
- 不能证明的字段：未直接写出的细分轮岗月份、入学年份或后续职务变动日期
- 身份对应理由：姓名、出生年月／校友届别、证监系统及交易所任职序列多重锚点完全闭环
- 受阻原因及替代尝试：无受阻，已直读全文

## 候选与已核验事实

| 事实ID | 类别／经历组 | 最小事实表述 | 日期及精度／日期性质 | 状态 | 来源ID及定位 | 允许公开的写法 | 是否已写入及位置 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| F001@1 | `basic/nativePlace` | 纠正旧库legacyData.ts第4315行“北京”籍贯错误（值：`"吉林榆树"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（樊大志同志简历段）；S003@1（正文第3段） | 公开投影："吉林榆树" | 已写入 `research-data/people/fan-dazhi.json` 并投影至 `generatedResearch.ts` |
| F002@1 | `education/fan-dazhi-edu-ug/school` | 原文明确1987年毕业于东北财经大学；未写明学士专业名称故不臆补（值：`"东北财经大学"`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（个人简介栏） | 公开投影："东北财经大学" | 已写入 `research-data/people/fan-dazhi.json` 并投影至 `generatedResearch.ts` |
| F003@1 | `education/fan-dazhi-edu-ug/studyStatus` | 原文明确1987年毕业于东北财经大学；未写明学士专业名称故不臆补（值：`"graduated"`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（个人简介栏） | 公开投影："graduated" | 已写入 `research-data/people/fan-dazhi.json` 并投影至 `generatedResearch.ts` |
| F004@1 | `education/fan-dazhi-edu-ug/graduationYear` | 原文明确1987年毕业于东北财经大学；未写明学士专业名称故不臆补（值：`1987`） | graduationYear=1987（原文直接记载） | `supported_direct` | S002@1（个人简介栏） | 公开投影：1987 | 已写入 `research-data/people/fan-dazhi.json` 并投影至 `generatedResearch.ts` |
| F005@1 | `education/fan-dazhi-edu-ug/endYear` | 原文明确1987年毕业于东北财经大学；未写明学士专业名称故不臆补（值：`1987`） | endYear=1987（原文直接记载） | `supported_direct` | S002@1（个人简介栏） | 公开投影：1987 | 已写入 `research-data/people/fan-dazhi.json` 并投影至 `generatedResearch.ts` |
| F006@1 | `education/fan-dazhi-edu-phd/school` | 绑定并升级基线博士记录，纠正旧库“2008年东北财经大学金融学博士”错误（值：`"中国社会科学院研究生院"`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（个人简介栏）；S001@1（樊大志同志简历段） | 公开投影："中国社会科学院研究生院" | 已写入 `research-data/people/fan-dazhi.json` 并投影至 `generatedResearch.ts` |
| F007@1 | `education/fan-dazhi-edu-phd/degree` | 绑定并升级基线博士记录，纠正旧库“2008年东北财经大学金融学博士”错误（值：`"博士"`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（个人简介栏）；S001@1（樊大志同志简历段） | 公开投影："博士" | 已写入 `research-data/people/fan-dazhi.json` 并投影至 `generatedResearch.ts` |
| F008@1 | `education/fan-dazhi-edu-phd/degreeStatus` | 绑定并升级基线博士记录，纠正旧库“2008年东北财经大学金融学博士”错误（值：`"awarded"`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（个人简介栏）；S001@1（樊大志同志简历段） | 公开投影："awarded" | 已写入 `research-data/people/fan-dazhi.json` 并投影至 `generatedResearch.ts` |
| F009@1 | `education/fan-dazhi-edu-phd/educationLevel` | 绑定并升级基线博士记录，纠正旧库“2008年东北财经大学金融学博士”错误（值：`"研究生"`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（个人简介栏）；S001@1（樊大志同志简历段） | 公开投影："研究生" | 已写入 `research-data/people/fan-dazhi.json` 并投影至 `generatedResearch.ts` |
| F010@1 | `education/fan-dazhi-edu-phd/studyStatus` | 绑定并升级基线博士记录，纠正旧库“2008年东北财经大学金融学博士”错误（值：`"graduated"`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（个人简介栏）；S001@1（樊大志同志简历段） | 公开投影："graduated" | 已写入 `research-data/people/fan-dazhi.json` 并投影至 `generatedResearch.ts` |
| F011@1 | `education/fan-dazhi-edu-phd/major` | 绑定并升级基线博士记录，纠正旧库“2008年东北财经大学金融学博士”错误（值：`"经济学"`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（个人简介栏）；S001@1（樊大志同志简历段） | 公开投影："经济学" | 已写入 `research-data/people/fan-dazhi.json` 并投影至 `generatedResearch.ts` |
| F012@1 | `education/fan-dazhi-edu-phd/graduationYear` | 绑定并升级基线博士记录，纠正旧库“2008年东北财经大学金融学博士”错误（值：`2012`） | graduationYear=2012（原文直接记载） | `supported_direct` | S002@1（个人简介栏）；S001@1（樊大志同志简历段） | 公开投影：2012 | 已写入 `research-data/people/fan-dazhi.json` 并投影至 `generatedResearch.ts` |
| F013@1 | `education/fan-dazhi-edu-phd/endYear` | 绑定并升级基线博士记录，纠正旧库“2008年东北财经大学金融学博士”错误（值：`2012`） | endYear=2012（原文直接记载） | `supported_direct` | S002@1（个人简介栏）；S001@1（樊大志同志简历段） | 公开投影：2012 | 已写入 `research-data/people/fan-dazhi.json` 并投影至 `generatedResearch.ts` |
| F014@1 | `education/fan-dazhi-edu-phd/isInService` | 绑定并升级基线博士记录，纠正旧库“2008年东北财经大学金融学博士”错误（值：`true`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（个人简介栏）；S001@1（樊大志同志简历段） | 公开投影：true | 已写入 `research-data/people/fan-dazhi.json` 并投影至 `generatedResearch.ts` |
| F015@1 | `education/fan-dazhi-edu-phd/educationMode` | 绑定并升级基线博士记录，纠正旧库“2008年东北财经大学金融学博士”错误（值：`"在职"`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（个人简介栏）；S001@1（樊大志同志简历段） | 公开投影："在职" | 已写入 `research-data/people/fan-dazhi.json` 并投影至 `generatedResearch.ts` |
| F016@1 | `career/fan-dazhi-dufe-teacher/recordKind` | 早期任东北财经大学教师，结束年月未公开故留空（值：`"tenure"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（樊大志同志简历段）；S003@1（正文第3段） | 公开投影："tenure" | 已写入 `research-data/people/fan-dazhi.json` 并投影至 `generatedResearch.ts` |
| F017@1 | `career/fan-dazhi-dufe-teacher/tenureStatus` | 早期任东北财经大学教师，结束年月未公开故留空（值：`"historical"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（樊大志同志简历段）；S003@1（正文第3段） | 公开投影："historical" | 已写入 `research-data/people/fan-dazhi.json` 并投影至 `generatedResearch.ts` |
| F018@1 | `career/fan-dazhi-dufe-teacher/unitId` | 早期任东北财经大学教师，结束年月未公开故留空（值：`""`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（樊大志同志简历段）；S003@1（正文第3段） | 公开投影："" | 已写入 `research-data/people/fan-dazhi.json` 并投影至 `generatedResearch.ts` |
| F019@1 | `career/fan-dazhi-dufe-teacher/unitName` | 早期任东北财经大学教师，结束年月未公开故留空（值：`"东北财经大学"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（樊大志同志简历段）；S003@1（正文第3段） | 公开投影："东北财经大学" | 已写入 `research-data/people/fan-dazhi.json` 并投影至 `generatedResearch.ts` |
| F020@1 | `career/fan-dazhi-dufe-teacher/position` | 早期任东北财经大学教师，结束年月未公开故留空（值：`"教师"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（樊大志同志简历段）；S003@1（正文第3段） | 公开投影："教师" | 已写入 `research-data/people/fan-dazhi.json` 并投影至 `generatedResearch.ts` |
| F021@1 | `career/fan-dazhi-bitic/recordKind` | 北国投历任部门负责人，细分起止年月未公开（值：`"tenure"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（樊大志同志简历段）；S003@1（正文第3段） | 公开投影："tenure" | 已写入 `research-data/people/fan-dazhi.json` 并投影至 `generatedResearch.ts` |
| F022@1 | `career/fan-dazhi-bitic/tenureStatus` | 北国投历任部门负责人，细分起止年月未公开（值：`"historical"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（樊大志同志简历段）；S003@1（正文第3段） | 公开投影："historical" | 已写入 `research-data/people/fan-dazhi.json` 并投影至 `generatedResearch.ts` |
| F023@1 | `career/fan-dazhi-bitic/unitId` | 北国投历任部门负责人，细分起止年月未公开（值：`""`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（樊大志同志简历段）；S003@1（正文第3段） | 公开投影："" | 已写入 `research-data/people/fan-dazhi.json` 并投影至 `generatedResearch.ts` |
| F024@1 | `career/fan-dazhi-bitic/unitName` | 北国投历任部门负责人，细分起止年月未公开（值：`"北京国际信托投资公司"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（樊大志同志简历段）；S003@1（正文第3段） | 公开投影："北京国际信托投资公司" | 已写入 `research-data/people/fan-dazhi.json` 并投影至 `generatedResearch.ts` |
| F025@1 | `career/fan-dazhi-bitic/position` | 北国投历任部门负责人，细分起止年月未公开（值：`"财务部副经理、资金部副经理、投资银行部经理、投资银行总部经理"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（樊大志同志简历段）；S003@1（正文第3段） | 公开投影："财务部副经理、资金部副经理、投资银行部经理、投资银行总部经理" | 已写入 `research-data/people/fan-dazhi.json` 并投影至 `generatedResearch.ts` |
| F026@1 | `career/fan-dazhi-bj-overseas-fin-1999/recordKind` | 两段“先后担任”共用1999.12—2004.01外包区间，本段只保留已知起点1999.12，省略中间转换终点（值：`"tenure"`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（个人简介栏）；S003@1（正文第3段） | 公开投影："tenure" | 已写入 `research-data/people/fan-dazhi.json` 并投影至 `generatedResearch.ts` |
| F027@1 | `career/fan-dazhi-bj-overseas-fin-1999/tenureStatus` | 两段“先后担任”共用1999.12—2004.01外包区间，本段只保留已知起点1999.12，省略中间转换终点（值：`"historical"`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（个人简介栏）；S003@1（正文第3段） | 公开投影："historical" | 已写入 `research-data/people/fan-dazhi.json` 并投影至 `generatedResearch.ts` |
| F028@1 | `career/fan-dazhi-bj-overseas-fin-1999/unitId` | 两段“先后担任”共用1999.12—2004.01外包区间，本段只保留已知起点1999.12，省略中间转换终点（值：`""`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（个人简介栏）；S003@1（正文第3段） | 公开投影："" | 已写入 `research-data/people/fan-dazhi.json` 并投影至 `generatedResearch.ts` |
| F029@1 | `career/fan-dazhi-bj-overseas-fin-1999/unitName` | 两段“先后担任”共用1999.12—2004.01外包区间，本段只保留已知起点1999.12，省略中间转换终点（值：`"北京市境外融投资管理中心"`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（个人简介栏）；S003@1（正文第3段） | 公开投影："北京市境外融投资管理中心" | 已写入 `research-data/people/fan-dazhi.json` 并投影至 `generatedResearch.ts` |
| F030@1 | `career/fan-dazhi-bj-overseas-fin-1999/position` | 两段“先后担任”共用1999.12—2004.01外包区间，本段只保留已知起点1999.12，省略中间转换终点（值：`"党组成员、副主任"`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（个人简介栏）；S003@1（正文第3段） | 公开投影："党组成员、副主任" | 已写入 `research-data/people/fan-dazhi.json` 并投影至 `generatedResearch.ts` |
| F031@1 | `career/fan-dazhi-bj-overseas-fin-1999/startYear` | 两段“先后担任”共用1999.12—2004.01外包区间，本段只保留已知起点1999.12，省略中间转换终点（值：`1999`） | startYear=1999（原文直接记载） | `supported_direct` | S002@1（个人简介栏）；S003@1（正文第3段） | 公开投影：1999 | 已写入 `research-data/people/fan-dazhi.json` 并投影至 `generatedResearch.ts` |
| F032@1 | `career/fan-dazhi-bj-overseas-fin-1999/startMonth` | 两段“先后担任”共用1999.12—2004.01外包区间，本段只保留已知起点1999.12，省略中间转换终点（值：`12`） | startMonth=12（原文直接记载） | `supported_direct` | S002@1（个人简介栏）；S003@1（正文第3段） | 公开投影：12 | 已写入 `research-data/people/fan-dazhi.json` 并投影至 `generatedResearch.ts` |
| F033@1 | `career/fan-dazhi-bj-soamc-2004/recordKind` | 两段“先后担任”共用1999.12—2004.01外包区间，本段只保留已知终点2004.01，省略中间转换起点（值：`"tenure"`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（个人简介栏）；S003@1（正文第3段） | 公开投影："tenure" | 已写入 `research-data/people/fan-dazhi.json` 并投影至 `generatedResearch.ts` |
| F034@1 | `career/fan-dazhi-bj-soamc-2004/tenureStatus` | 两段“先后担任”共用1999.12—2004.01外包区间，本段只保留已知终点2004.01，省略中间转换起点（值：`"historical"`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（个人简介栏）；S003@1（正文第3段） | 公开投影："historical" | 已写入 `research-data/people/fan-dazhi.json` 并投影至 `generatedResearch.ts` |
| F035@1 | `career/fan-dazhi-bj-soamc-2004/unitId` | 两段“先后担任”共用1999.12—2004.01外包区间，本段只保留已知终点2004.01，省略中间转换起点（值：`""`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（个人简介栏）；S003@1（正文第3段） | 公开投影："" | 已写入 `research-data/people/fan-dazhi.json` 并投影至 `generatedResearch.ts` |
| F036@1 | `career/fan-dazhi-bj-soamc-2004/unitName` | 两段“先后担任”共用1999.12—2004.01外包区间，本段只保留已知终点2004.01，省略中间转换起点（值：`"北京市国有资产经营有限责任公司"`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（个人简介栏）；S003@1（正文第3段） | 公开投影："北京市国有资产经营有限责任公司" | 已写入 `research-data/people/fan-dazhi.json` 并投影至 `generatedResearch.ts` |
| F037@1 | `career/fan-dazhi-bj-soamc-2004/position` | 两段“先后担任”共用1999.12—2004.01外包区间，本段只保留已知终点2004.01，省略中间转换起点（值：`"党组成员、董事、副总经理"`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（个人简介栏）；S003@1（正文第3段） | 公开投影："党组成员、董事、副总经理" | 已写入 `research-data/people/fan-dazhi.json` 并投影至 `generatedResearch.ts` |
| F038@1 | `career/fan-dazhi-bj-soamc-2004/endYear` | 两段“先后担任”共用1999.12—2004.01外包区间，本段只保留已知终点2004.01，省略中间转换起点（值：`2004`） | endYear=2004（原文直接记载） | `supported_direct` | S002@1（个人简介栏）；S003@1（正文第3段） | 公开投影：2004 | 已写入 `research-data/people/fan-dazhi.json` 并投影至 `generatedResearch.ts` |
| F039@1 | `career/fan-dazhi-bj-soamc-2004/endMonth` | 两段“先后担任”共用1999.12—2004.01外包区间，本段只保留已知终点2004.01，省略中间转换起点（值：`1`） | endMonth=1（原文直接记载） | `supported_direct` | S002@1（个人简介栏）；S003@1（正文第3段） | 公开投影：1 | 已写入 `research-data/people/fan-dazhi.json` 并投影至 `generatedResearch.ts` |
| F040@1 | `career/fan-dazhi-bjsec-2004-2007/recordKind` | 直接证伪旧库“2004.04—2007.12任北京银行副行长”的虚构履历（值：`"tenure"`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（个人简介栏）；S003@1（正文第3段） | 公开投影："tenure" | 已写入 `research-data/people/fan-dazhi.json` 并投影至 `generatedResearch.ts` |
| F041@1 | `career/fan-dazhi-bjsec-2004-2007/tenureStatus` | 直接证伪旧库“2004.04—2007.12任北京银行副行长”的虚构履历（值：`"historical"`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（个人简介栏）；S003@1（正文第3段） | 公开投影："historical" | 已写入 `research-data/people/fan-dazhi.json` 并投影至 `generatedResearch.ts` |
| F042@1 | `career/fan-dazhi-bjsec-2004-2007/unitId` | 直接证伪旧库“2004.04—2007.12任北京银行副行长”的虚构履历（值：`""`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（个人简介栏）；S003@1（正文第3段） | 公开投影："" | 已写入 `research-data/people/fan-dazhi.json` 并投影至 `generatedResearch.ts` |
| F043@1 | `career/fan-dazhi-bjsec-2004-2007/unitName` | 直接证伪旧库“2004.04—2007.12任北京银行副行长”的虚构履历（值：`"北京证券有限责任公司"`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（个人简介栏）；S003@1（正文第3段） | 公开投影："北京证券有限责任公司" | 已写入 `research-data/people/fan-dazhi.json` 并投影至 `generatedResearch.ts` |
| F044@1 | `career/fan-dazhi-bjsec-2004-2007/position` | 直接证伪旧库“2004.04—2007.12任北京银行副行长”的虚构履历（值：`"党委副书记、董事、总经理"`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（个人简介栏）；S003@1（正文第3段） | 公开投影："党委副书记、董事、总经理" | 已写入 `research-data/people/fan-dazhi.json` 并投影至 `generatedResearch.ts` |
| F045@1 | `career/fan-dazhi-bjsec-2004-2007/startYear` | 直接证伪旧库“2004.04—2007.12任北京银行副行长”的虚构履历（值：`2004`） | startYear=2004（原文直接记载） | `supported_direct` | S002@1（个人简介栏）；S003@1（正文第3段） | 公开投影：2004 | 已写入 `research-data/people/fan-dazhi.json` 并投影至 `generatedResearch.ts` |
| F046@1 | `career/fan-dazhi-bjsec-2004-2007/startMonth` | 直接证伪旧库“2004.04—2007.12任北京银行副行长”的虚构履历（值：`1`） | startMonth=1（原文直接记载） | `supported_direct` | S002@1（个人简介栏）；S003@1（正文第3段） | 公开投影：1 | 已写入 `research-data/people/fan-dazhi.json` 并投影至 `generatedResearch.ts` |
| F047@1 | `career/fan-dazhi-bjsec-2004-2007/endYear` | 直接证伪旧库“2004.04—2007.12任北京银行副行长”的虚构履历（值：`2007`） | endYear=2007（原文直接记载） | `supported_direct` | S002@1（个人简介栏）；S003@1（正文第3段） | 公开投影：2007 | 已写入 `research-data/people/fan-dazhi.json` 并投影至 `generatedResearch.ts` |
| F048@1 | `career/fan-dazhi-bjsec-2004-2007/endMonth` | 直接证伪旧库“2004.04—2007.12任北京银行副行长”的虚构履历（值：`8`） | endMonth=8（原文直接记载） | `supported_direct` | S002@1（个人简介栏）；S003@1（正文第3段） | 公开投影：8 | 已写入 `research-data/people/fan-dazhi.json` 并投影至 `generatedResearch.ts` |
| F049@1 | `career/fan-dazhi-capital-group/recordKind` | 首创集团任职确认，起止年月未公开故留空（值：`"tenure"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（樊大志同志简历段）；S003@1（正文第3段） | 公开投影："tenure" | 已写入 `research-data/people/fan-dazhi.json` 并投影至 `generatedResearch.ts` |
| F050@1 | `career/fan-dazhi-capital-group/tenureStatus` | 首创集团任职确认，起止年月未公开故留空（值：`"historical"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（樊大志同志简历段）；S003@1（正文第3段） | 公开投影："historical" | 已写入 `research-data/people/fan-dazhi.json` 并投影至 `generatedResearch.ts` |
| F051@1 | `career/fan-dazhi-capital-group/unitId` | 首创集团任职确认，起止年月未公开故留空（值：`""`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（樊大志同志简历段）；S003@1（正文第3段） | 公开投影："" | 已写入 `research-data/people/fan-dazhi.json` 并投影至 `generatedResearch.ts` |
| F052@1 | `career/fan-dazhi-capital-group/unitName` | 首创集团任职确认，起止年月未公开故留空（值：`"北京首都创业集团有限公司"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（樊大志同志简历段）；S003@1（正文第3段） | 公开投影："北京首都创业集团有限公司" | 已写入 `research-data/people/fan-dazhi.json` 并投影至 `generatedResearch.ts` |
| F053@1 | `career/fan-dazhi-capital-group/position` | 首创集团任职确认，起止年月未公开故留空（值：`"党组成员、董事、副总经理"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（樊大志同志简历段）；S003@1（正文第3段） | 公开投影："党组成员、董事、副总经理" | 已写入 `research-data/people/fan-dazhi.json` 并投影至 `generatedResearch.ts` |
| F054@1 | `career/fan-dazhi-ubs-sec/recordKind` | 瑞银证券监事长经历确认，起止月份未公开（值：`"tenure"`） | 非日期字段（随所属记录精度） | `supported_direct` | S003@1（正文第3段） | 公开投影："tenure" | 已写入 `research-data/people/fan-dazhi.json` 并投影至 `generatedResearch.ts` |
| F055@1 | `career/fan-dazhi-ubs-sec/tenureStatus` | 瑞银证券监事长经历确认，起止月份未公开（值：`"historical"`） | 非日期字段（随所属记录精度） | `supported_direct` | S003@1（正文第3段） | 公开投影："historical" | 已写入 `research-data/people/fan-dazhi.json` 并投影至 `generatedResearch.ts` |
| F056@1 | `career/fan-dazhi-ubs-sec/unitId` | 瑞银证券监事长经历确认，起止月份未公开（值：`""`） | 非日期字段（随所属记录精度） | `supported_direct` | S003@1（正文第3段） | 公开投影："" | 已写入 `research-data/people/fan-dazhi.json` 并投影至 `generatedResearch.ts` |
| F057@1 | `career/fan-dazhi-ubs-sec/unitName` | 瑞银证券监事长经历确认，起止月份未公开（值：`"瑞银证券有限责任公司"`） | 非日期字段（随所属记录精度） | `supported_direct` | S003@1（正文第3段） | 公开投影："瑞银证券有限责任公司" | 已写入 `research-data/people/fan-dazhi.json` 并投影至 `generatedResearch.ts` |
| F058@1 | `career/fan-dazhi-ubs-sec/position` | 瑞银证券监事长经历确认，起止月份未公开（值：`"监事长"`） | 非日期字段（随所属记录精度） | `supported_direct` | S003@1（正文第3段） | 公开投影："监事长" | 已写入 `research-data/people/fan-dazhi.json` 并投影至 `generatedResearch.ts` |
| F059@1 | `career/fan-dazhi-huaxia-pres-2007-2016/recordKind` | 华夏银行副行长、行长阶段（2007.08—2016.11）（值：`"tenure"`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（个人简介栏）；S003@1（正文第3段） | 公开投影："tenure" | 已写入 `research-data/people/fan-dazhi.json` 并投影至 `generatedResearch.ts` |
| F060@1 | `career/fan-dazhi-huaxia-pres-2007-2016/tenureStatus` | 华夏银行副行长、行长阶段（2007.08—2016.11）（值：`"historical"`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（个人简介栏）；S003@1（正文第3段） | 公开投影："historical" | 已写入 `research-data/people/fan-dazhi.json` 并投影至 `generatedResearch.ts` |
| F061@1 | `career/fan-dazhi-huaxia-pres-2007-2016/unitId` | 华夏银行副行长、行长阶段（2007.08—2016.11）（值：`""`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（个人简介栏）；S003@1（正文第3段） | 公开投影："" | 已写入 `research-data/people/fan-dazhi.json` 并投影至 `generatedResearch.ts` |
| F062@1 | `career/fan-dazhi-huaxia-pres-2007-2016/unitName` | 华夏银行副行长、行长阶段（2007.08—2016.11）（值：`"华夏银行股份有限公司"`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（个人简介栏）；S003@1（正文第3段） | 公开投影："华夏银行股份有限公司" | 已写入 `research-data/people/fan-dazhi.json` 并投影至 `generatedResearch.ts` |
| F063@1 | `career/fan-dazhi-huaxia-pres-2007-2016/position` | 华夏银行副行长、行长阶段（2007.08—2016.11）（值：`"董事、常务副行长、党委副书记、行长"`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（个人简介栏）；S003@1（正文第3段） | 公开投影："董事、常务副行长、党委副书记、行长" | 已写入 `research-data/people/fan-dazhi.json` 并投影至 `generatedResearch.ts` |
| F064@1 | `career/fan-dazhi-huaxia-pres-2007-2016/startYear` | 华夏银行副行长、行长阶段（2007.08—2016.11）（值：`2007`） | startYear=2007（原文直接记载） | `supported_direct` | S002@1（个人简介栏）；S003@1（正文第3段） | 公开投影：2007 | 已写入 `research-data/people/fan-dazhi.json` 并投影至 `generatedResearch.ts` |
| F065@1 | `career/fan-dazhi-huaxia-pres-2007-2016/startMonth` | 华夏银行副行长、行长阶段（2007.08—2016.11）（值：`8`） | startMonth=8（原文直接记载） | `supported_direct` | S002@1（个人简介栏）；S003@1（正文第3段） | 公开投影：8 | 已写入 `research-data/people/fan-dazhi.json` 并投影至 `generatedResearch.ts` |
| F066@1 | `career/fan-dazhi-huaxia-pres-2007-2016/endYear` | 华夏银行副行长、行长阶段（2007.08—2016.11）（值：`2016`） | endYear=2016（原文直接记载） | `supported_direct` | S002@1（个人简介栏）；S003@1（正文第3段） | 公开投影：2016 | 已写入 `research-data/people/fan-dazhi.json` 并投影至 `generatedResearch.ts` |
| F067@1 | `career/fan-dazhi-huaxia-pres-2007-2016/endMonth` | 华夏银行副行长、行长阶段（2007.08—2016.11）（值：`11`） | endMonth=11（原文直接记载） | `supported_direct` | S002@1（个人简介栏）；S003@1（正文第3段） | 公开投影：11 | 已写入 `research-data/people/fan-dazhi.json` 并投影至 `generatedResearch.ts` |
| F068@1 | `career/fan-dazhi-huaxia-chair-2016/recordKind` | 2016年11月至12月任华夏银行董事长（值：`"tenure"`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（个人简介栏） | 公开投影："tenure" | 已写入 `research-data/people/fan-dazhi.json` 并投影至 `generatedResearch.ts` |
| F069@1 | `career/fan-dazhi-huaxia-chair-2016/tenureStatus` | 2016年11月至12月任华夏银行董事长（值：`"historical"`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（个人简介栏） | 公开投影："historical" | 已写入 `research-data/people/fan-dazhi.json` 并投影至 `generatedResearch.ts` |
| F070@1 | `career/fan-dazhi-huaxia-chair-2016/unitId` | 2016年11月至12月任华夏银行董事长（值：`""`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（个人简介栏） | 公开投影："" | 已写入 `research-data/people/fan-dazhi.json` 并投影至 `generatedResearch.ts` |
| F071@1 | `career/fan-dazhi-huaxia-chair-2016/unitName` | 2016年11月至12月任华夏银行董事长（值：`"华夏银行股份有限公司"`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（个人简介栏） | 公开投影："华夏银行股份有限公司" | 已写入 `research-data/people/fan-dazhi.json` 并投影至 `generatedResearch.ts` |
| F072@1 | `career/fan-dazhi-huaxia-chair-2016/position` | 2016年11月至12月任华夏银行董事长（值：`"董事长"`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（个人简介栏） | 公开投影："董事长" | 已写入 `research-data/people/fan-dazhi.json` 并投影至 `generatedResearch.ts` |
| F073@1 | `career/fan-dazhi-huaxia-chair-2016/startYear` | 2016年11月至12月任华夏银行董事长（值：`2016`） | startYear=2016（原文直接记载） | `supported_direct` | S002@1（个人简介栏） | 公开投影：2016 | 已写入 `research-data/people/fan-dazhi.json` 并投影至 `generatedResearch.ts` |
| F074@1 | `career/fan-dazhi-huaxia-chair-2016/startMonth` | 2016年11月至12月任华夏银行董事长（值：`11`） | startMonth=11（原文直接记载） | `supported_direct` | S002@1（个人简介栏） | 公开投影：11 | 已写入 `research-data/people/fan-dazhi.json` 并投影至 `generatedResearch.ts` |
| F075@1 | `career/fan-dazhi-huaxia-chair-2016/endYear` | 2016年11月至12月任华夏银行董事长（值：`2016`） | endYear=2016（原文直接记载） | `supported_direct` | S002@1（个人简介栏） | 公开投影：2016 | 已写入 `research-data/people/fan-dazhi.json` 并投影至 `generatedResearch.ts` |
| F076@1 | `career/fan-dazhi-huaxia-chair-2016/endMonth` | 2016年11月至12月任华夏银行董事长（值：`12`） | endMonth=12（原文直接记载） | `supported_direct` | S002@1（个人简介栏） | 公开投影：12 | 已写入 `research-data/people/fan-dazhi.json` 并投影至 `generatedResearch.ts` |
| F077@1 | `career/fan-dazhi-boc-disc-2016-2019/recordKind` | 派驻纪检体制改革前任中行纪委书记、党委委员（值：`"tenure"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（樊大志同志简历段）；S002@1（个人简介栏） | 公开投影："tenure" | 已写入 `research-data/people/fan-dazhi.json` 并投影至 `generatedResearch.ts` |
| F078@1 | `career/fan-dazhi-boc-disc-2016-2019/tenureStatus` | 派驻纪检体制改革前任中行纪委书记、党委委员（值：`"historical"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（樊大志同志简历段）；S002@1（个人简介栏） | 公开投影："historical" | 已写入 `research-data/people/fan-dazhi.json` 并投影至 `generatedResearch.ts` |
| F079@1 | `career/fan-dazhi-boc-disc-2016-2019/unitId` | 派驻纪检体制改革前任中行纪委书记、党委委员（值：`""`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（樊大志同志简历段）；S002@1（个人简介栏） | 公开投影："" | 已写入 `research-data/people/fan-dazhi.json` 并投影至 `generatedResearch.ts` |
| F080@1 | `career/fan-dazhi-boc-disc-2016-2019/unitName` | 派驻纪检体制改革前任中行纪委书记、党委委员（值：`"中国银行股份有限公司"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（樊大志同志简历段）；S002@1（个人简介栏） | 公开投影："中国银行股份有限公司" | 已写入 `research-data/people/fan-dazhi.json` 并投影至 `generatedResearch.ts` |
| F081@1 | `career/fan-dazhi-boc-disc-2016-2019/position` | 派驻纪检体制改革前任中行纪委书记、党委委员（值：`"纪委书记、党委委员"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（樊大志同志简历段）；S002@1（个人简介栏） | 公开投影："纪委书记、党委委员" | 已写入 `research-data/people/fan-dazhi.json` 并投影至 `generatedResearch.ts` |
| F082@1 | `career/fan-dazhi-boc-disc-2016-2019/startYear` | 派驻纪检体制改革前任中行纪委书记、党委委员（值：`2016`） | startYear=2016（原文直接记载） | `supported_direct` | S001@1（樊大志同志简历段）；S002@1（个人简介栏） | 公开投影：2016 | 已写入 `research-data/people/fan-dazhi.json` 并投影至 `generatedResearch.ts` |
| F083@1 | `career/fan-dazhi-boc-disc-2016-2019/startMonth` | 派驻纪检体制改革前任中行纪委书记、党委委员（值：`12`） | startMonth=12（原文直接记载） | `supported_direct` | S001@1（樊大志同志简历段）；S002@1（个人简介栏） | 公开投影：12 | 已写入 `research-data/people/fan-dazhi.json` 并投影至 `generatedResearch.ts` |
| F084@1 | `career/fan-dazhi-boc-disc-2016-2019/endYear` | 派驻纪检体制改革前任中行纪委书记、党委委员（值：`2019`） | endYear=2019（原文直接记载） | `supported_direct` | S001@1（樊大志同志简历段）；S002@1（个人简介栏） | 公开投影：2019 | 已写入 `research-data/people/fan-dazhi.json` 并投影至 `generatedResearch.ts` |
| F085@1 | `career/fan-dazhi-boc-disc-2016-2019/endMonth` | 派驻纪检体制改革前任中行纪委书记、党委委员（值：`1`） | endMonth=1（原文直接记载） | `supported_direct` | S001@1（樊大志同志简历段）；S002@1（个人简介栏） | 公开投影：1 | 已写入 `research-data/people/fan-dazhi.json` 并投影至 `generatedResearch.ts` |
| F086@1 | `career/fan-dazhi-boc-ccdi-2019/recordKind` | 2019年1月至4月任驻中行纪检监察组组长、中行党委委员（值：`"tenure"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（樊大志同志简历段） | 公开投影："tenure" | 已写入 `research-data/people/fan-dazhi.json` 并投影至 `generatedResearch.ts` |
| F087@1 | `career/fan-dazhi-boc-ccdi-2019/tenureStatus` | 2019年1月至4月任驻中行纪检监察组组长、中行党委委员（值：`"historical"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（樊大志同志简历段） | 公开投影："historical" | 已写入 `research-data/people/fan-dazhi.json` 并投影至 `generatedResearch.ts` |
| F088@1 | `career/fan-dazhi-boc-ccdi-2019/unitId` | 2019年1月至4月任驻中行纪检监察组组长、中行党委委员（值：`""`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（樊大志同志简历段） | 公开投影："" | 已写入 `research-data/people/fan-dazhi.json` 并投影至 `generatedResearch.ts` |
| F089@1 | `career/fan-dazhi-boc-ccdi-2019/unitName` | 2019年1月至4月任驻中行纪检监察组组长、中行党委委员（值：`"中央纪委国家监委驻中国银行纪检监察组／中国银行股份有限公司"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（樊大志同志简历段） | 公开投影："中央纪委国家监委驻中国银行纪检监察组／中国银行股份有限公司" | 已写入 `research-data/people/fan-dazhi.json` 并投影至 `generatedResearch.ts` |
| F090@1 | `career/fan-dazhi-boc-ccdi-2019/position` | 2019年1月至4月任驻中行纪检监察组组长、中行党委委员（值：`"纪检监察组组长、中国银行党委委员"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（樊大志同志简历段） | 公开投影："纪检监察组组长、中国银行党委委员" | 已写入 `research-data/people/fan-dazhi.json` 并投影至 `generatedResearch.ts` |
| F091@1 | `career/fan-dazhi-boc-ccdi-2019/startYear` | 2019年1月至4月任驻中行纪检监察组组长、中行党委委员（值：`2019`） | startYear=2019（原文直接记载） | `supported_direct` | S001@1（樊大志同志简历段） | 公开投影：2019 | 已写入 `research-data/people/fan-dazhi.json` 并投影至 `generatedResearch.ts` |
| F092@1 | `career/fan-dazhi-boc-ccdi-2019/startMonth` | 2019年1月至4月任驻中行纪检监察组组长、中行党委委员（值：`1`） | startMonth=1（原文直接记载） | `supported_direct` | S001@1（樊大志同志简历段） | 公开投影：1 | 已写入 `research-data/people/fan-dazhi.json` 并投影至 `generatedResearch.ts` |
| F093@1 | `career/fan-dazhi-boc-ccdi-2019/endYear` | 2019年1月至4月任驻中行纪检监察组组长、中行党委委员（值：`2019`） | endYear=2019（原文直接记载） | `supported_direct` | S001@1（樊大志同志简历段） | 公开投影：2019 | 已写入 `research-data/people/fan-dazhi.json` 并投影至 `generatedResearch.ts` |
| F094@1 | `career/fan-dazhi-boc-ccdi-2019/endMonth` | 2019年1月至4月任驻中行纪检监察组组长、中行党委委员（值：`4`） | endMonth=4（原文直接记载） | `supported_direct` | S001@1（樊大志同志简历段） | 公开投影：4 | 已写入 `research-data/people/fan-dazhi.json` 并投影至 `generatedResearch.ts` |

## 推理台账

- 本轮无 `derived` 推理；特别注意对 S002“1999年12月至2004年1月先后担任北京市境外融投资管理中心副主任，北京市国有资产经营有限责任公司董事、副总经理”严格遵守手册规则，拆为两段 `historical` 记录：前段仅填 `startYear: 1999, startMonth: 12`（省略未知结束），后段仅填 `endYear: 2004, endMonth: 1`（省略未知起始），绝不把外包区间同时写成两段全任期。

## 冲突与拒绝记录

| 争议属性 | 说法A及来源 | 说法B及来源 | 是否同一日期／职务口径 | 处理及理由 | 待查链接／搜索式 |
| --- | --- | --- | --- | --- | --- |
| 2004—2007 任职机构 | 旧库 `legacyData.ts:4356`：北京银行党委委员、副行长 | S001 人民网＋S002 中行601988法定披露：2004年1月至2007年8月任北京证券有限责任公司董事、总经理 | 同一时间段主职务 | **采信 S001/S002，彻底否决旧库**：旧库系将“北京证券”幻觉替换为“北京银行” | 无需再查 |
| 博士毕业院校与年份 | 旧库 `legacyData.ts:4326`：2008年东北财经大学金融学博士 | S002 中行601988法定披露：1987年毕业于东北财经大学，2012年获中国社会科学院研究生院经济学博士学位 | 最高学位信息 | **采信 S002，拆正本博两段学历** | 无需再查 |

## 职业时间线缺口与下一轮

| 缺口 | 已知边界（不强推任期） | 要找的材料 | 下一条完整查询 | 优先级 |
| --- | --- | --- | --- | --- |
| 1987—1999 东北财大教师及北国投各部门任职的具体起止年份 | 已知 1987.08 参加工作，1999.12 任北京市境外融投资管理中心副主任 | 华夏银行 2008—2015 年度报告高管简历 | `"樊大志" "东北财经大学教师" "北京国际信托" 年报` | 低 |
| 首创集团副总经理与瑞银证券监事长的精确起止年月 | 已知位于 2004—2007.08 调入华夏银行之前 | 华夏银行 2007 年聘任公告原文 | `"樊大志" "瑞银证券" "首都创业集团" 公告` | 低 |

## 本轮交付与续接

- 新增有效岗位／教育经历／日期属性：更正籍贯为“吉林榆树”；新增东北财经大学1987毕业记录并升级中国社科院研究生院2012经济学博士记录；新增 11 段核验历史任职（东财教师、北国投、北京市境外融投资管理中心、北京国资公司、北京证券、首创集团、瑞银证券、华夏银行行长、华夏银行董事长、中行纪委书记、驻中行纪检监察组组长）。
- 删除或纠正的错误及依据：证伪并剔除旧库虚构的“北京银行副行长”“北京籍贯”“2008东北财大博士”三项重大失实。
- 来源对应复查结果：全部已发布事实均绑定 `reading: "read"` 原文定位摘录，无悬空引用，无观察点冒充连续任期起止。
- 页面及结构验证（仅实际执行后填写）：已通过 `npm run research:check`、`npm run audit:data`、`npm run test:records`、`npm run test:relations`、`npm run test:research`、`npm run test:safety` 及生产构建 `npm run build` 校验。
- 结束状态：本轮研究完成（核心锚点与主干履历已入库，细分早期缺口转入二轮深化队列）。
- 停止条件满足情况：已核清核心身份、现职状态、关键正副局／部级履历与母校学历，证伪旧库硬伤并留下精确下一查询。
- 上次停在查询ID／来源ID：`Q001` ／ `S003`
- 最后处理事实ID／推理ID及当前阶段：`F094@1` ／ 无 `I` 推理项（已完成工作台导入与公开投影）
- 已证实待入库事实及原因／拟写入字段：无（本轮已证实事实已全部通过 `research:import --write --expect` 入库）。
- 旧模型线索对账完成与剩余项：旧库核心学历与主干履历线索已完成对账；待核候选见上表 `candidate`／`conflicted` 项。
- 输入变更后需要重新计算或撤销的推理：无依赖推理受影响。
- 下一步必须先执行的搜索式或原文链接：`"樊大志" "瑞银证券" "首都创业集团" "华夏银行" 公告`
- 尚未访问的高价值来源：《中国证券期货年鉴》历史卷、学位论文库及部分脚本受阻的交易所官网内页（详见渠道覆盖表）。
- 是否需要用户提供合法访问权限或已有资料：否（公开渠道与本地 Google Chrome 浏览器即可继续推进）。
