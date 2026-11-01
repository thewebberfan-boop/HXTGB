# 人物研究底稿：沙雁（sha-yan）

> 遵循 [持续工作说明](../continuous-work.md)、[研究手册](../../biography-research-handbook.md) 与 [研究数据语义](../../research-data-model.md)。所有公开投影事实均对应 `research-data/people/sha-yan.json`。

## 任务与身份

- 研究截止日：2026-11-01
- 本轮访问日期／执行者：2026-11-01 ／ `agent-batch-20261101`
- 所属批次及班子口径：[2026-11-01 核心会领导与证期交易所第一批](../batches/2026-11-01-core-leadership-and-exchanges-batch1.md) — 2026-11-01 核心会领导与证期交易所第一批（深圳证券交易所领导班子）
- 身份锚点（机构、历史职位、时间、英文名）：深圳证券交易所党委书记（2023.12任）、理事会理事长（副部长级），女，1972年9月生，1989—1993陕西财经学院工业会计本科（学士）、1998—2001西安交通大学MBA（硕士）、2002—2008西安交通大学会计学博士；1993—2000中国有色金属工业总公司会计工作，2000—2008西安证管办／陕西证监局，2008进入证监会机构部，2013.05—2015.08上市二部／上市部副主任，2015.08—2016.12机构部副主任，2016.12—2020.06机构部主任，2020.06—2023.12深交所党委副书记、总经理（Sha Yan）。
- 同名干扰及区分理由：无证监系统同名干扰；**但发现并排除重大相邻文本串行污染**：西安交通大学校友网《聚焦两会》（S001）中，“人大代表·沙雁”词条下方紧邻“人大代表·冷劲松（1999—2003年就读于西安交通大学管理科学与工程专业，获博士学位）”，旧模型将冷劲松的博士经历张冠李戴到了沙雁名下！
- 当前名单来源与名册核验状态：深交所官网（`www.szse.cn`）本轮受网络／反爬连接重置限制未能直连拉取名册页，故维持 `csrc-szse` 名册待浏览器复核状态；沙雁本人深交所党委书记、理事长（副部长级）现职已由西安交大校友网2025年3月两会官方报道及新京报／财联社交叉证实。
- 开始时的有效岗位数／教育经历数：兼容基线初始仅保留 1 条现任岗位＋ 1 条“院校未公开／博士研究生毕业”记录。

## 旧模型及既有材料的线索对账

旧模型输出及 `src/data/legacyData.ts` 中的原始未核记录仅作为待核线索；逐项保留出处与本轮处置结果。

| 线索编号 | 原始输出／旧记录位置 | 原始说法及待核字段 | 对应事实ID | 已查依据／下一查询 | 处置（待核／已证实／部分证实／冲突／否决）及理由 |
| --- | --- | --- | --- | --- | --- |
| L01 | `legacyData.ts:2784`（旧原始教育项） | 1999—2003 西安交通大学管理科学与工程博士 | F022–F031 | S001 西安交大校友网2025两会报道原文逐段比对 | **彻底证伪（典型相邻校友串行嫁接）**：1999—2003管科博士实为同页下一位校友冷劲松！沙雁本人为 1989—1993 陕西财经学院工业会计学士（F002–F011）、1998—2001 西安交大MBA硕士（F012–F021）、2002—2008 西安交大会计学博士（F022–F031） |
| L02 | `legacyData.ts:2752`（旧原始基础信息） | 籍贯：黑龙江齐齐哈尔 | F092 | 本轮已读 S001–S004 均未载明籍贯 | **保留候选（candidate）**：存入 F092 待全国人大代表名录或官方简历核实，暂不公开 |
| L03 | `legacyData.ts:2802`（旧原始履历项） | 2000.11—2013.05 一直在证监会上市公司监管部任副处长、处长 | F032–F053 | S003 财联社＋S004 经济观察网 | **否决并重构**：1993—2000 在中国有色金属工业总公司从事会计工作；2000—2008 先后在西安证管办、陕西证监局任职；2008年进入证监会机构部；2013年5月方任上市二部副主任 |
| L04 | `legacyData.ts:2820`（旧原始履历项） | 2017.04—2020.06 任证监会机构部主任 | F074–F084 | S004 经济观察网（明确写“2015年8月再次回到机构部担任副主任一职，2016年12月任机构部主任”） | **纠正月份**：起始时间由 2017.04 更正为 2016.12 |

## 查询日志

| 查询ID | 日期／工具或引擎 | 完整搜索式／站内筛选 | 实际筛选结果数 | 新来源ID | 结果／限制 | 下一步 |
| --- | --- | --- | --- | --- | --- | --- |
| Q001 | 2026-11-01 / search_web + node fetch | `沙雁 西安交通大学 陕西财经学院 博士 深圳证券交易所` | 5 | S001 | 直读西安交大校友网 2025-03-13 两会专栏，一次拿齐本硕博三段精确年份专业，并当场抓获旧库串接冷劲松博士履历的根源 | 继续核查会机关与地方局履历 |
| Q002 | 2026-11-01 / search_web + node fetch | `沙雁 西安证管办 陕西证监局 中国有色金属工业总公司 上市公司监管二部 证券基金机构监管部` | 6 | S002, S003, S004 | 直读新京报、财联社、经济观察网三篇详尽履历报道，完整恢复 1993—2023 七段连续履历 | 后续在 Chrome 核对深交所官网完整领导班子页面及理事长选举月 |

## 渠道覆盖

| 路线 | 状态（未查／已查／受阻／不适用） | 对应查询ID／来源ID | 缺口或不适用理由 |
| --- | --- | --- | --- |
| 总览、身份及现任机构 | 已查（官网直连受阻，已由母校两会专稿＋权威媒体替代） | Q001, Q002 / S001, S002 | `www.szse.cn` 脚本 fetch 失败，待 Chrome 补核官网班子页 |
| 财新及四家证券报、期货日报 | 已查 | Q002 / S002, S003, S004 | 新京报、财联社、经济观察网三源交叉一致 |
| 历任机构：中国有色金属工业总公司、西安证管办／陕西局、证监会机构部／上市部、深交所 | 已查 | Q002 / S002, S003, S004 | 七段历史机构链条完整 |
| 教育泛查与已知学校（陕西财经学院、西安交通大学） | 已查 | Q001 / S001 | 西安交大校友网官方逐段核定本硕博 |
| 论文数据库／校图书馆 | 未查 | — | 2008年西安交大会计学博士论文可二轮检索 |
| 任免、公报与地方机构 | 已查 | Q001, Q002 / S001, S002 | 全国人大代表与深交所党委书记任免已核 |
| 年报、年鉴、协会期刊 | 未查 | — | 可补查陕西证监局及2008—2013机构部处级职务名称 |
| 论坛、公开披露及海外材料 | 不适用 | — | 核心履历已完备 |

## 来源台账

### S001：【聚焦两会】西安交大校友两会代表、委员积极发声为国家发展建言献策

- 原发布者／作者：西安交通大学校友网
- 实际读取载体（原站／某站转载／存档）：原站直读（HTTP 200）
- 发现链接／最终正文链接：https://alumni.xjtu.edu.cn/info/1114/8465.htm
- 原稿链接（未找到写未找到）：https://alumni.xjtu.edu.cn/info/1114/8465.htm
- 发布日期／活动日期／报告覆盖期／访问日期（分别填写）：发布日期 2025-03-13；活动／任免日期 见定位摘录；报告覆盖期 不适用；访问日期 2026-11-01
- 阅读状态（queued/read_relevant/read_no_new_fact/wrong_person/duplicate/partial/blocked/irrelevant）：read_relevant（研究库 reading=read）
- 同源组 originGroup：`xjtu-alumni-20250313`
- 定位（章节、短段落锚点、PDF印刷页码及文件页序）：人大代表·沙雁段
- 必要短摘录或自己的准确摘要：现任深圳证券交易所党委书记、理事长（副部长级）
- 支撑事实ID：F001@1、F002@1、F003@1、F004@1、F005@1、F006@1、F007@1、F008@1、F009@1、F010@1、F011@1、F012@1、F013@1、F014@1、F015@1、F016@1、F017@1、F018@1、F019@1、F020@1、F021@1、F022@1、F023@1、F024@1、F025@1、F026@1、F027@1、F028@1
- 不能证明的字段：未直接写出的细分轮岗月份、入学年份或后续职务变动日期
- 身份对应理由：姓名、出生年月／校友届别、证监系统及交易所任职序列多重锚点完全闭环
- 受阻原因及替代尝试：无受阻，已直读全文

### S002：中央决定：沙雁任深交所党委书记

- 原发布者／作者：新京报
- 实际读取载体（原站／某站转载／存档）：原站直读（HTTP 200）
- 发现链接／最终正文链接：https://m.bjnews.com.cn/detail/1703752055129804.html
- 原稿链接（未找到写未找到）：https://m.bjnews.com.cn/detail/1703752055129804.html
- 发布日期／活动日期／报告覆盖期／访问日期（分别填写）：发布日期 2023-12-28；活动／任免日期 见定位摘录；报告覆盖期 不适用；访问日期 2026-11-01
- 阅读状态（queued/read_relevant/read_no_new_fact/wrong_person/duplicate/partial/blocked/irrelevant）：read_relevant（研究库 reading=read）
- 同源组 originGroup：`bjnews-20231228`
- 定位（章节、短段落锚点、PDF印刷页码及文件页序）：正文第4段
- 必要短摘录或自己的准确摘要：2013年5月起，她先后任中国证监会上市公司监管二部副主任，上市公司监管部副主任
- 支撑事实ID：F050@1、F051@1、F052@1、F053@1、F054@1、F055@1、F056@1、F057@1、F058@1、F059@1、F060@1、F061@1、F062@1、F063@1、F064@1、F065@1、F066@1、F067@1、F068@1、F069@1、F070@1、F071@1、F072@1、F073@1、F074@1、F075@1、F076@1、F077@1、F078@1、F079@1、F080@1、F081@1、F082@1、F083@1、F084@1、F085@1、F086@1、F087@1、F088@1、F089@1、F090@1、F091@1
- 不能证明的字段：未直接写出的细分轮岗月份、入学年份或后续职务变动日期
- 身份对应理由：姓名、出生年月／校友届别、证监系统及交易所任职序列多重锚点完全闭环
- 受阻原因及替代尝试：无受阻，已直读全文

### S003：沙雁任深圳证券交易所党委书记

- 原发布者／作者：财联社
- 实际读取载体（原站／某站转载／存档）：原站直读（HTTP 200）
- 发现链接／最终正文链接：https://www.cls.cn/detail/1556752
- 原稿链接（未找到写未找到）：https://www.cls.cn/detail/1556752
- 发布日期／活动日期／报告覆盖期／访问日期（分别填写）：发布日期 2023-12-28；活动／任免日期 见定位摘录；报告覆盖期 不适用；访问日期 2026-11-01
- 阅读状态（queued/read_relevant/read_no_new_fact/wrong_person/duplicate/partial/blocked/irrelevant）：read_relevant（研究库 reading=read）
- 同源组 originGroup：`cls-20231228`
- 定位（章节、短段落锚点、PDF印刷页码及文件页序）：沙雁简历段
- 必要短摘录或自己的准确摘要：1993年进入中国有色金属工业总公司从事会计方面的工作；2000年正式进入证监会工作
- 支撑事实ID：F029@1、F030@1、F031@1、F032@1、F033@1、F034@1、F035@1、F036@1、F037@1、F038@1、F039@1、F040@1、F041@1、F042@1、F043@1、F044@1、F045@1、F046@1、F047@1、F048@1、F049@1
- 不能证明的字段：未直接写出的细分轮岗月份、入学年份或后续职务变动日期
- 身份对应理由：姓名、出生年月／校友届别、证监系统及交易所任职序列多重锚点完全闭环
- 受阻原因及替代尝试：无受阻，已直读全文

### S004：深交所迎女“掌门”，原证监会机构部主任沙雁履新总经理

- 原发布者／作者：经济观察网
- 实际读取载体（原站／某站转载／存档）：原站直读（HTTP 200）
- 发现链接／最终正文链接：http://m.eeo.com.cn/2020/0731/393650.shtml
- 原稿链接（未找到写未找到）：http://m.eeo.com.cn/2020/0731/393650.shtml
- 发布日期／活动日期／报告覆盖期／访问日期（分别填写）：发布日期 2020-07-31；活动／任免日期 见定位摘录；报告覆盖期 不适用；访问日期 2026-11-01
- 阅读状态（queued/read_relevant/read_no_new_fact/wrong_person/duplicate/partial/blocked/irrelevant）：read_relevant（研究库 reading=read）
- 同源组 originGroup：`eeo-20200731`
- 定位（章节、短段落锚点、PDF印刷页码及文件页序）：正文第2段
- 必要短摘录或自己的准确摘要：1993年进入中国有色金属工业总公司从事会计方面的工作后，于2000年正式进入证监会工作
- 支撑事实ID：F029@1、F030@1、F031@1、F032@1、F033@1、F034@1、F035@1、F036@1、F037@1、F038@1、F039@1、F040@1、F041@1、F042@1、F050@1、F051@1、F052@1、F053@1、F054@1、F055@1、F056@1、F057@1、F058@1、F059@1、F060@1、F061@1、F062@1、F063@1、F064@1、F065@1、F066@1、F067@1、F068@1、F069@1、F070@1、F071@1、F072@1、F073@1、F074@1、F075@1、F076@1、F077@1、F078@1、F079@1、F080@1、F081@1、F082@1
- 不能证明的字段：未直接写出的细分轮岗月份、入学年份或后续职务变动日期
- 身份对应理由：姓名、出生年月／校友届别、证监系统及交易所任职序列多重锚点完全闭环
- 受阻原因及替代尝试：无受阻，已直读全文

## 候选与已核验事实

| 事实ID | 类别／经历组 | 最小事实表述 | 日期及精度／日期性质 | 状态 | 来源ID及定位 | 允许公开的写法 | 是否已写入及位置 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| F001@1 | `basic/currentRank` | 西安交大校友网两会代表介绍明确“副部长级”（值：`"副部级"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（人大代表·沙雁段） | 公开投影："副部级" | 已写入 `research-data/people/sha-yan.json` 并投影至 `generatedResearch.ts` |
| F002@1 | `education/sha-yan-edu-ba/school` | 1989—1993当时独立建制校名为陕西财经学院（2000年方并入西安交大），按历史原名规范录入（值：`"陕西财经学院"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（人大代表·沙雁段） | 公开投影："陕西财经学院" | 已写入 `research-data/people/sha-yan.json` 并投影至 `generatedResearch.ts` |
| F003@1 | `education/sha-yan-edu-ba/degree` | 1989—1993当时独立建制校名为陕西财经学院（2000年方并入西安交大），按历史原名规范录入（值：`"学士"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（人大代表·沙雁段） | 公开投影："学士" | 已写入 `research-data/people/sha-yan.json` 并投影至 `generatedResearch.ts` |
| F004@1 | `education/sha-yan-edu-ba/degreeStatus` | 1989—1993当时独立建制校名为陕西财经学院（2000年方并入西安交大），按历史原名规范录入（值：`"awarded"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（人大代表·沙雁段） | 公开投影："awarded" | 已写入 `research-data/people/sha-yan.json` 并投影至 `generatedResearch.ts` |
| F005@1 | `education/sha-yan-edu-ba/educationLevel` | 1989—1993当时独立建制校名为陕西财经学院（2000年方并入西安交大），按历史原名规范录入（值：`"本科"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（人大代表·沙雁段） | 公开投影："本科" | 已写入 `research-data/people/sha-yan.json` 并投影至 `generatedResearch.ts` |
| F006@1 | `education/sha-yan-edu-ba/studyStatus` | 1989—1993当时独立建制校名为陕西财经学院（2000年方并入西安交大），按历史原名规范录入（值：`"graduated"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（人大代表·沙雁段） | 公开投影："graduated" | 已写入 `research-data/people/sha-yan.json` 并投影至 `generatedResearch.ts` |
| F007@1 | `education/sha-yan-edu-ba/major` | 1989—1993当时独立建制校名为陕西财经学院（2000年方并入西安交大），按历史原名规范录入（值：`"工业会计"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（人大代表·沙雁段） | 公开投影："工业会计" | 已写入 `research-data/people/sha-yan.json` 并投影至 `generatedResearch.ts` |
| F008@1 | `education/sha-yan-edu-ba/startYear` | 1989—1993当时独立建制校名为陕西财经学院（2000年方并入西安交大），按历史原名规范录入（值：`1989`） | startYear=1989（原文直接记载） | `supported_direct` | S001@1（人大代表·沙雁段） | 公开投影：1989 | 已写入 `research-data/people/sha-yan.json` 并投影至 `generatedResearch.ts` |
| F009@1 | `education/sha-yan-edu-ba/endYear` | 1989—1993当时独立建制校名为陕西财经学院（2000年方并入西安交大），按历史原名规范录入（值：`1993`） | endYear=1993（原文直接记载） | `supported_direct` | S001@1（人大代表·沙雁段） | 公开投影：1993 | 已写入 `research-data/people/sha-yan.json` 并投影至 `generatedResearch.ts` |
| F010@1 | `education/sha-yan-edu-ba/graduationYear` | 1989—1993当时独立建制校名为陕西财经学院（2000年方并入西安交大），按历史原名规范录入（值：`1993`） | graduationYear=1993（原文直接记载） | `supported_direct` | S001@1（人大代表·沙雁段） | 公开投影：1993 | 已写入 `research-data/people/sha-yan.json` 并投影至 `generatedResearch.ts` |
| F011@1 | `education/sha-yan-edu-mba/school` | 补回旧库完全遗漏的1998—2001西安交大MBA硕士学位（值：`"西安交通大学"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（人大代表·沙雁段） | 公开投影："西安交通大学" | 已写入 `research-data/people/sha-yan.json` 并投影至 `generatedResearch.ts` |
| F012@1 | `education/sha-yan-edu-mba/degree` | 补回旧库完全遗漏的1998—2001西安交大MBA硕士学位（值：`"硕士"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（人大代表·沙雁段） | 公开投影："硕士" | 已写入 `research-data/people/sha-yan.json` 并投影至 `generatedResearch.ts` |
| F013@1 | `education/sha-yan-edu-mba/degreeStatus` | 补回旧库完全遗漏的1998—2001西安交大MBA硕士学位（值：`"awarded"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（人大代表·沙雁段） | 公开投影："awarded" | 已写入 `research-data/people/sha-yan.json` 并投影至 `generatedResearch.ts` |
| F014@1 | `education/sha-yan-edu-mba/educationLevel` | 补回旧库完全遗漏的1998—2001西安交大MBA硕士学位（值：`"研究生"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（人大代表·沙雁段） | 公开投影："研究生" | 已写入 `research-data/people/sha-yan.json` 并投影至 `generatedResearch.ts` |
| F015@1 | `education/sha-yan-edu-mba/studyStatus` | 补回旧库完全遗漏的1998—2001西安交大MBA硕士学位（值：`"graduated"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（人大代表·沙雁段） | 公开投影："graduated" | 已写入 `research-data/people/sha-yan.json` 并投影至 `generatedResearch.ts` |
| F016@1 | `education/sha-yan-edu-mba/major` | 补回旧库完全遗漏的1998—2001西安交大MBA硕士学位（值：`"工商管理（MBA）"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（人大代表·沙雁段） | 公开投影："工商管理（MBA）" | 已写入 `research-data/people/sha-yan.json` 并投影至 `generatedResearch.ts` |
| F017@1 | `education/sha-yan-edu-mba/startYear` | 补回旧库完全遗漏的1998—2001西安交大MBA硕士学位（值：`1998`） | startYear=1998（原文直接记载） | `supported_direct` | S001@1（人大代表·沙雁段） | 公开投影：1998 | 已写入 `research-data/people/sha-yan.json` 并投影至 `generatedResearch.ts` |
| F018@1 | `education/sha-yan-edu-mba/endYear` | 补回旧库完全遗漏的1998—2001西安交大MBA硕士学位（值：`2001`） | endYear=2001（原文直接记载） | `supported_direct` | S001@1（人大代表·沙雁段） | 公开投影：2001 | 已写入 `research-data/people/sha-yan.json` 并投影至 `generatedResearch.ts` |
| F019@1 | `education/sha-yan-edu-mba/graduationYear` | 补回旧库完全遗漏的1998—2001西安交大MBA硕士学位（值：`2001`） | graduationYear=2001（原文直接记载） | `supported_direct` | S001@1（人大代表·沙雁段） | 公开投影：2001 | 已写入 `research-data/people/sha-yan.json` 并投影至 `generatedResearch.ts` |
| F020@1 | `education/sha-yan-edu-primary/school` | 绑定并升级基线博士记录（原degree: 其他/博士研究生毕业），纠正旧库嫁接冷劲松“1999—2003管理科学与工程博士”的严重串行错误（值：`"西安交通大学"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（人大代表·沙雁段） | 公开投影："西安交通大学" | 已写入 `research-data/people/sha-yan.json` 并投影至 `generatedResearch.ts` |
| F021@1 | `education/sha-yan-edu-primary/degree` | 绑定并升级基线博士记录（原degree: 其他/博士研究生毕业），纠正旧库嫁接冷劲松“1999—2003管理科学与工程博士”的严重串行错误（值：`"博士"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（人大代表·沙雁段） | 公开投影："博士" | 已写入 `research-data/people/sha-yan.json` 并投影至 `generatedResearch.ts` |
| F022@1 | `education/sha-yan-edu-primary/degreeStatus` | 绑定并升级基线博士记录（原degree: 其他/博士研究生毕业），纠正旧库嫁接冷劲松“1999—2003管理科学与工程博士”的严重串行错误（值：`"awarded"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（人大代表·沙雁段） | 公开投影："awarded" | 已写入 `research-data/people/sha-yan.json` 并投影至 `generatedResearch.ts` |
| F023@1 | `education/sha-yan-edu-primary/educationLevel` | 绑定并升级基线博士记录（原degree: 其他/博士研究生毕业），纠正旧库嫁接冷劲松“1999—2003管理科学与工程博士”的严重串行错误（值：`"研究生"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（人大代表·沙雁段） | 公开投影："研究生" | 已写入 `research-data/people/sha-yan.json` 并投影至 `generatedResearch.ts` |
| F024@1 | `education/sha-yan-edu-primary/studyStatus` | 绑定并升级基线博士记录（原degree: 其他/博士研究生毕业），纠正旧库嫁接冷劲松“1999—2003管理科学与工程博士”的严重串行错误（值：`"graduated"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（人大代表·沙雁段） | 公开投影："graduated" | 已写入 `research-data/people/sha-yan.json` 并投影至 `generatedResearch.ts` |
| F025@1 | `education/sha-yan-edu-primary/major` | 绑定并升级基线博士记录（原degree: 其他/博士研究生毕业），纠正旧库嫁接冷劲松“1999—2003管理科学与工程博士”的严重串行错误（值：`"会计学"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（人大代表·沙雁段） | 公开投影："会计学" | 已写入 `research-data/people/sha-yan.json` 并投影至 `generatedResearch.ts` |
| F026@1 | `education/sha-yan-edu-primary/startYear` | 绑定并升级基线博士记录（原degree: 其他/博士研究生毕业），纠正旧库嫁接冷劲松“1999—2003管理科学与工程博士”的严重串行错误（值：`2002`） | startYear=2002（原文直接记载） | `supported_direct` | S001@1（人大代表·沙雁段） | 公开投影：2002 | 已写入 `research-data/people/sha-yan.json` 并投影至 `generatedResearch.ts` |
| F027@1 | `education/sha-yan-edu-primary/endYear` | 绑定并升级基线博士记录（原degree: 其他/博士研究生毕业），纠正旧库嫁接冷劲松“1999—2003管理科学与工程博士”的严重串行错误（值：`2008`） | endYear=2008（原文直接记载） | `supported_direct` | S001@1（人大代表·沙雁段） | 公开投影：2008 | 已写入 `research-data/people/sha-yan.json` 并投影至 `generatedResearch.ts` |
| F028@1 | `education/sha-yan-edu-primary/graduationYear` | 绑定并升级基线博士记录（原degree: 其他/博士研究生毕业），纠正旧库嫁接冷劲松“1999—2003管理科学与工程博士”的严重串行错误（值：`2008`） | graduationYear=2008（原文直接记载） | `supported_direct` | S001@1（人大代表·沙雁段） | 公开投影：2008 | 已写入 `research-data/people/sha-yan.json` 并投影至 `generatedResearch.ts` |
| F029@1 | `career/sha-yan-cnnc-1993-2000/recordKind` | 补齐1993—2000年进入证监系统前的央企财会经历（值：`"tenure"`） | 非日期字段（随所属记录精度） | `supported_direct` | S003@1（沙雁简历段）；S004@1（正文第2段） | 公开投影："tenure" | 已写入 `research-data/people/sha-yan.json` 并投影至 `generatedResearch.ts` |
| F030@1 | `career/sha-yan-cnnc-1993-2000/tenureStatus` | 补齐1993—2000年进入证监系统前的央企财会经历（值：`"historical"`） | 非日期字段（随所属记录精度） | `supported_direct` | S003@1（沙雁简历段）；S004@1（正文第2段） | 公开投影："historical" | 已写入 `research-data/people/sha-yan.json` 并投影至 `generatedResearch.ts` |
| F031@1 | `career/sha-yan-cnnc-1993-2000/unitId` | 补齐1993—2000年进入证监系统前的央企财会经历（值：`""`） | 非日期字段（随所属记录精度） | `supported_direct` | S003@1（沙雁简历段）；S004@1（正文第2段） | 公开投影："" | 已写入 `research-data/people/sha-yan.json` 并投影至 `generatedResearch.ts` |
| F032@1 | `career/sha-yan-cnnc-1993-2000/unitName` | 补齐1993—2000年进入证监系统前的央企财会经历（值：`"中国有色金属工业总公司"`） | 非日期字段（随所属记录精度） | `supported_direct` | S003@1（沙雁简历段）；S004@1（正文第2段） | 公开投影："中国有色金属工业总公司" | 已写入 `research-data/people/sha-yan.json` 并投影至 `generatedResearch.ts` |
| F033@1 | `career/sha-yan-cnnc-1993-2000/position` | 补齐1993—2000年进入证监系统前的央企财会经历（值：`"会计相关工作"`） | 非日期字段（随所属记录精度） | `supported_direct` | S003@1（沙雁简历段）；S004@1（正文第2段） | 公开投影："会计相关工作" | 已写入 `research-data/people/sha-yan.json` 并投影至 `generatedResearch.ts` |
| F034@1 | `career/sha-yan-cnnc-1993-2000/startYear` | 补齐1993—2000年进入证监系统前的央企财会经历（值：`1993`） | startYear=1993（原文直接记载） | `supported_direct` | S003@1（沙雁简历段）；S004@1（正文第2段） | 公开投影：1993 | 已写入 `research-data/people/sha-yan.json` 并投影至 `generatedResearch.ts` |
| F035@1 | `career/sha-yan-cnnc-1993-2000/endYear` | 补齐1993—2000年进入证监系统前的央企财会经历（值：`2000`） | endYear=2000（原文直接记载） | `supported_direct` | S003@1（沙雁简历段）；S004@1（正文第2段） | 公开投影：2000 | 已写入 `research-data/people/sha-yan.json` 并投影至 `generatedResearch.ts` |
| F036@1 | `career/sha-yan-shaanxi-csrc-2000-2008/recordKind` | 纠正旧库“2000.11—2013.05一直在证监会上市部任副处长、处长”的失真说法（值：`"tenure"`） | 非日期字段（随所属记录精度） | `supported_direct` | S003@1（沙雁简历段）；S004@1（正文第2段） | 公开投影："tenure" | 已写入 `research-data/people/sha-yan.json` 并投影至 `generatedResearch.ts` |
| F037@1 | `career/sha-yan-shaanxi-csrc-2000-2008/tenureStatus` | 纠正旧库“2000.11—2013.05一直在证监会上市部任副处长、处长”的失真说法（值：`"historical"`） | 非日期字段（随所属记录精度） | `supported_direct` | S003@1（沙雁简历段）；S004@1（正文第2段） | 公开投影："historical" | 已写入 `research-data/people/sha-yan.json` 并投影至 `generatedResearch.ts` |
| F038@1 | `career/sha-yan-shaanxi-csrc-2000-2008/unitId` | 纠正旧库“2000.11—2013.05一直在证监会上市部任副处长、处长”的失真说法（值：`""`） | 非日期字段（随所属记录精度） | `supported_direct` | S003@1（沙雁简历段）；S004@1（正文第2段） | 公开投影："" | 已写入 `research-data/people/sha-yan.json` 并投影至 `generatedResearch.ts` |
| F039@1 | `career/sha-yan-shaanxi-csrc-2000-2008/unitName` | 纠正旧库“2000.11—2013.05一直在证监会上市部任副处长、处长”的失真说法（值：`"中国证监会西安证券监管特派员办事处／陕西监管局"`） | 非日期字段（随所属记录精度） | `supported_direct` | S003@1（沙雁简历段）；S004@1（正文第2段） | 公开投影："中国证监会西安证券监管特派员办事处／陕西监管局" | 已写入 `research-data/people/sha-yan.json` 并投影至 `generatedResearch.ts` |
| F040@1 | `career/sha-yan-shaanxi-csrc-2000-2008/position` | 纠正旧库“2000.11—2013.05一直在证监会上市部任副处长、处长”的失真说法（值：`"干部（历任职务待核）"`） | 非日期字段（随所属记录精度） | `supported_direct` | S003@1（沙雁简历段）；S004@1（正文第2段） | 公开投影："干部（历任职务待核）" | 已写入 `research-data/people/sha-yan.json` 并投影至 `generatedResearch.ts` |
| F041@1 | `career/sha-yan-shaanxi-csrc-2000-2008/startYear` | 纠正旧库“2000.11—2013.05一直在证监会上市部任副处长、处长”的失真说法（值：`2000`） | startYear=2000（原文直接记载） | `supported_direct` | S003@1（沙雁简历段）；S004@1（正文第2段） | 公开投影：2000 | 已写入 `research-data/people/sha-yan.json` 并投影至 `generatedResearch.ts` |
| F042@1 | `career/sha-yan-shaanxi-csrc-2000-2008/endYear` | 纠正旧库“2000.11—2013.05一直在证监会上市部任副处长、处长”的失真说法（值：`2008`） | endYear=2008（原文直接记载） | `supported_direct` | S003@1（沙雁简历段）；S004@1（正文第2段） | 公开投影：2008 | 已写入 `research-data/people/sha-yan.json` 并投影至 `generatedResearch.ts` |
| F043@1 | `career/sha-yan-csrc-jg-2008/recordKind` | 2008年进入证监会机构部；转出精确月份未单列故省略endYear（值：`"tenure"`） | 非日期字段（随所属记录精度） | `supported_direct` | S003@1（沙雁简历段） | 公开投影："tenure" | 已写入 `research-data/people/sha-yan.json` 并投影至 `generatedResearch.ts` |
| F044@1 | `career/sha-yan-csrc-jg-2008/tenureStatus` | 2008年进入证监会机构部；转出精确月份未单列故省略endYear（值：`"historical"`） | 非日期字段（随所属记录精度） | `supported_direct` | S003@1（沙雁简历段） | 公开投影："historical" | 已写入 `research-data/people/sha-yan.json` 并投影至 `generatedResearch.ts` |
| F045@1 | `career/sha-yan-csrc-jg-2008/unitId` | 2008年进入证监会机构部；转出精确月份未单列故省略endYear（值：`"csrc-jg"`） | 非日期字段（随所属记录精度） | `supported_direct` | S003@1（沙雁简历段） | 公开投影："csrc-jg" | 已写入 `research-data/people/sha-yan.json` 并投影至 `generatedResearch.ts` |
| F046@1 | `career/sha-yan-csrc-jg-2008/unitName` | 2008年进入证监会机构部；转出精确月份未单列故省略endYear（值：`"中国证券监督管理委员会"`） | 非日期字段（随所属记录精度） | `supported_direct` | S003@1（沙雁简历段） | 公开投影："中国证券监督管理委员会" | 已写入 `research-data/people/sha-yan.json` 并投影至 `generatedResearch.ts` |
| F047@1 | `career/sha-yan-csrc-jg-2008/department` | 2008年进入证监会机构部；转出精确月份未单列故省略endYear（值：`"机构监管部"`） | 非日期字段（随所属记录精度） | `supported_direct` | S003@1（沙雁简历段） | 公开投影："机构监管部" | 已写入 `research-data/people/sha-yan.json` 并投影至 `generatedResearch.ts` |
| F048@1 | `career/sha-yan-csrc-jg-2008/position` | 2008年进入证监会机构部；转出精确月份未单列故省略endYear（值：`"干部／处级职务（具体职衔待核）"`） | 非日期字段（随所属记录精度） | `supported_direct` | S003@1（沙雁简历段） | 公开投影："干部／处级职务（具体职衔待核）" | 已写入 `research-data/people/sha-yan.json` 并投影至 `generatedResearch.ts` |
| F049@1 | `career/sha-yan-csrc-jg-2008/startYear` | 2008年进入证监会机构部；转出精确月份未单列故省略endYear（值：`2008`） | startYear=2008（原文直接记载） | `supported_direct` | S003@1（沙雁简历段） | 公开投影：2008 | 已写入 `research-data/people/sha-yan.json` 并投影至 `generatedResearch.ts` |
| F050@1 | `career/sha-yan-csrc-listed-dep-2013-2015/recordKind` | 2013年5月至2015年8月先后任上市二部、上市部副主任（2014年两部合并）（值：`"tenure"`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（正文第4段）；S004@1（正文第2段） | 公开投影："tenure" | 已写入 `research-data/people/sha-yan.json` 并投影至 `generatedResearch.ts` |
| F051@1 | `career/sha-yan-csrc-listed-dep-2013-2015/tenureStatus` | 2013年5月至2015年8月先后任上市二部、上市部副主任（2014年两部合并）（值：`"historical"`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（正文第4段）；S004@1（正文第2段） | 公开投影："historical" | 已写入 `research-data/people/sha-yan.json` 并投影至 `generatedResearch.ts` |
| F052@1 | `career/sha-yan-csrc-listed-dep-2013-2015/unitId` | 2013年5月至2015年8月先后任上市二部、上市部副主任（2014年两部合并）（值：`"csrc-ss"`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（正文第4段）；S004@1（正文第2段） | 公开投影："csrc-ss" | 已写入 `research-data/people/sha-yan.json` 并投影至 `generatedResearch.ts` |
| F053@1 | `career/sha-yan-csrc-listed-dep-2013-2015/unitName` | 2013年5月至2015年8月先后任上市二部、上市部副主任（2014年两部合并）（值：`"中国证券监督管理委员会"`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（正文第4段）；S004@1（正文第2段） | 公开投影："中国证券监督管理委员会" | 已写入 `research-data/people/sha-yan.json` 并投影至 `generatedResearch.ts` |
| F054@1 | `career/sha-yan-csrc-listed-dep-2013-2015/department` | 2013年5月至2015年8月先后任上市二部、上市部副主任（2014年两部合并）（值：`"上市公司监管二部／上市公司监管部"`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（正文第4段）；S004@1（正文第2段） | 公开投影："上市公司监管二部／上市公司监管部" | 已写入 `research-data/people/sha-yan.json` 并投影至 `generatedResearch.ts` |
| F055@1 | `career/sha-yan-csrc-listed-dep-2013-2015/position` | 2013年5月至2015年8月先后任上市二部、上市部副主任（2014年两部合并）（值：`"副主任"`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（正文第4段）；S004@1（正文第2段） | 公开投影："副主任" | 已写入 `research-data/people/sha-yan.json` 并投影至 `generatedResearch.ts` |
| F056@1 | `career/sha-yan-csrc-listed-dep-2013-2015/rank` | 2013年5月至2015年8月先后任上市二部、上市部副主任（2014年两部合并）（值：`"副厅局级"`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（正文第4段）；S004@1（正文第2段） | 公开投影："副厅局级" | 已写入 `research-data/people/sha-yan.json` 并投影至 `generatedResearch.ts` |
| F057@1 | `career/sha-yan-csrc-listed-dep-2013-2015/startYear` | 2013年5月至2015年8月先后任上市二部、上市部副主任（2014年两部合并）（值：`2013`） | startYear=2013（原文直接记载） | `supported_direct` | S002@1（正文第4段）；S004@1（正文第2段） | 公开投影：2013 | 已写入 `research-data/people/sha-yan.json` 并投影至 `generatedResearch.ts` |
| F058@1 | `career/sha-yan-csrc-listed-dep-2013-2015/startMonth` | 2013年5月至2015年8月先后任上市二部、上市部副主任（2014年两部合并）（值：`5`） | startMonth=5（原文直接记载） | `supported_direct` | S002@1（正文第4段）；S004@1（正文第2段） | 公开投影：5 | 已写入 `research-data/people/sha-yan.json` 并投影至 `generatedResearch.ts` |
| F059@1 | `career/sha-yan-csrc-listed-dep-2013-2015/endYear` | 2013年5月至2015年8月先后任上市二部、上市部副主任（2014年两部合并）（值：`2015`） | endYear=2015（原文直接记载） | `supported_direct` | S002@1（正文第4段）；S004@1（正文第2段） | 公开投影：2015 | 已写入 `research-data/people/sha-yan.json` 并投影至 `generatedResearch.ts` |
| F060@1 | `career/sha-yan-csrc-listed-dep-2013-2015/endMonth` | 2013年5月至2015年8月先后任上市二部、上市部副主任（2014年两部合并）（值：`8`） | endMonth=8（原文直接记载） | `supported_direct` | S002@1（正文第4段）；S004@1（正文第2段） | 公开投影：8 | 已写入 `research-data/people/sha-yan.json` 并投影至 `generatedResearch.ts` |
| F061@1 | `career/sha-yan-csrc-jg-deputy-2015-2016/recordKind` | 2015年8月至2016年12月任机构部副主任（值：`"tenure"`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（正文第4段）；S004@1（正文第2段） | 公开投影："tenure" | 已写入 `research-data/people/sha-yan.json` 并投影至 `generatedResearch.ts` |
| F062@1 | `career/sha-yan-csrc-jg-deputy-2015-2016/tenureStatus` | 2015年8月至2016年12月任机构部副主任（值：`"historical"`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（正文第4段）；S004@1（正文第2段） | 公开投影："historical" | 已写入 `research-data/people/sha-yan.json` 并投影至 `generatedResearch.ts` |
| F063@1 | `career/sha-yan-csrc-jg-deputy-2015-2016/unitId` | 2015年8月至2016年12月任机构部副主任（值：`"csrc-jg"`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（正文第4段）；S004@1（正文第2段） | 公开投影："csrc-jg" | 已写入 `research-data/people/sha-yan.json` 并投影至 `generatedResearch.ts` |
| F064@1 | `career/sha-yan-csrc-jg-deputy-2015-2016/unitName` | 2015年8月至2016年12月任机构部副主任（值：`"中国证券监督管理委员会"`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（正文第4段）；S004@1（正文第2段） | 公开投影："中国证券监督管理委员会" | 已写入 `research-data/people/sha-yan.json` 并投影至 `generatedResearch.ts` |
| F065@1 | `career/sha-yan-csrc-jg-deputy-2015-2016/department` | 2015年8月至2016年12月任机构部副主任（值：`"证券基金机构监管部"`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（正文第4段）；S004@1（正文第2段） | 公开投影："证券基金机构监管部" | 已写入 `research-data/people/sha-yan.json` 并投影至 `generatedResearch.ts` |
| F066@1 | `career/sha-yan-csrc-jg-deputy-2015-2016/position` | 2015年8月至2016年12月任机构部副主任（值：`"副主任"`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（正文第4段）；S004@1（正文第2段） | 公开投影："副主任" | 已写入 `research-data/people/sha-yan.json` 并投影至 `generatedResearch.ts` |
| F067@1 | `career/sha-yan-csrc-jg-deputy-2015-2016/rank` | 2015年8月至2016年12月任机构部副主任（值：`"副厅局级"`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（正文第4段）；S004@1（正文第2段） | 公开投影："副厅局级" | 已写入 `research-data/people/sha-yan.json` 并投影至 `generatedResearch.ts` |
| F068@1 | `career/sha-yan-csrc-jg-deputy-2015-2016/startYear` | 2015年8月至2016年12月任机构部副主任（值：`2015`） | startYear=2015（原文直接记载） | `supported_direct` | S002@1（正文第4段）；S004@1（正文第2段） | 公开投影：2015 | 已写入 `research-data/people/sha-yan.json` 并投影至 `generatedResearch.ts` |
| F069@1 | `career/sha-yan-csrc-jg-deputy-2015-2016/startMonth` | 2015年8月至2016年12月任机构部副主任（值：`8`） | startMonth=8（原文直接记载） | `supported_direct` | S002@1（正文第4段）；S004@1（正文第2段） | 公开投影：8 | 已写入 `research-data/people/sha-yan.json` 并投影至 `generatedResearch.ts` |
| F070@1 | `career/sha-yan-csrc-jg-deputy-2015-2016/endYear` | 2015年8月至2016年12月任机构部副主任（值：`2016`） | endYear=2016（原文直接记载） | `supported_direct` | S002@1（正文第4段）；S004@1（正文第2段） | 公开投影：2016 | 已写入 `research-data/people/sha-yan.json` 并投影至 `generatedResearch.ts` |
| F071@1 | `career/sha-yan-csrc-jg-deputy-2015-2016/endMonth` | 2015年8月至2016年12月任机构部副主任（值：`12`） | endMonth=12（原文直接记载） | `supported_direct` | S002@1（正文第4段）；S004@1（正文第2段） | 公开投影：12 | 已写入 `research-data/people/sha-yan.json` 并投影至 `generatedResearch.ts` |
| F072@1 | `career/sha-yan-csrc-jg-dir-2016-2020/recordKind` | 纠正旧库“2017年4月起任机构部主任”的月份偏差，确证为2016年12月至2020年6月（值：`"tenure"`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（正文第4-5段）；S004@1（正文第2-3段） | 公开投影："tenure" | 已写入 `research-data/people/sha-yan.json` 并投影至 `generatedResearch.ts` |
| F073@1 | `career/sha-yan-csrc-jg-dir-2016-2020/tenureStatus` | 纠正旧库“2017年4月起任机构部主任”的月份偏差，确证为2016年12月至2020年6月（值：`"historical"`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（正文第4-5段）；S004@1（正文第2-3段） | 公开投影："historical" | 已写入 `research-data/people/sha-yan.json` 并投影至 `generatedResearch.ts` |
| F074@1 | `career/sha-yan-csrc-jg-dir-2016-2020/unitId` | 纠正旧库“2017年4月起任机构部主任”的月份偏差，确证为2016年12月至2020年6月（值：`"csrc-jg"`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（正文第4-5段）；S004@1（正文第2-3段） | 公开投影："csrc-jg" | 已写入 `research-data/people/sha-yan.json` 并投影至 `generatedResearch.ts` |
| F075@1 | `career/sha-yan-csrc-jg-dir-2016-2020/unitName` | 纠正旧库“2017年4月起任机构部主任”的月份偏差，确证为2016年12月至2020年6月（值：`"中国证券监督管理委员会"`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（正文第4-5段）；S004@1（正文第2-3段） | 公开投影："中国证券监督管理委员会" | 已写入 `research-data/people/sha-yan.json` 并投影至 `generatedResearch.ts` |
| F076@1 | `career/sha-yan-csrc-jg-dir-2016-2020/department` | 纠正旧库“2017年4月起任机构部主任”的月份偏差，确证为2016年12月至2020年6月（值：`"证券基金机构监管部"`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（正文第4-5段）；S004@1（正文第2-3段） | 公开投影："证券基金机构监管部" | 已写入 `research-data/people/sha-yan.json` 并投影至 `generatedResearch.ts` |
| F077@1 | `career/sha-yan-csrc-jg-dir-2016-2020/position` | 纠正旧库“2017年4月起任机构部主任”的月份偏差，确证为2016年12月至2020年6月（值：`"主任"`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（正文第4-5段）；S004@1（正文第2-3段） | 公开投影："主任" | 已写入 `research-data/people/sha-yan.json` 并投影至 `generatedResearch.ts` |
| F078@1 | `career/sha-yan-csrc-jg-dir-2016-2020/rank` | 纠正旧库“2017年4月起任机构部主任”的月份偏差，确证为2016年12月至2020年6月（值：`"正厅局级"`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（正文第4-5段）；S004@1（正文第2-3段） | 公开投影："正厅局级" | 已写入 `research-data/people/sha-yan.json` 并投影至 `generatedResearch.ts` |
| F079@1 | `career/sha-yan-csrc-jg-dir-2016-2020/startYear` | 纠正旧库“2017年4月起任机构部主任”的月份偏差，确证为2016年12月至2020年6月（值：`2016`） | startYear=2016（原文直接记载） | `supported_direct` | S002@1（正文第4-5段）；S004@1（正文第2-3段） | 公开投影：2016 | 已写入 `research-data/people/sha-yan.json` 并投影至 `generatedResearch.ts` |
| F080@1 | `career/sha-yan-csrc-jg-dir-2016-2020/startMonth` | 纠正旧库“2017年4月起任机构部主任”的月份偏差，确证为2016年12月至2020年6月（值：`12`） | startMonth=12（原文直接记载） | `supported_direct` | S002@1（正文第4-5段）；S004@1（正文第2-3段） | 公开投影：12 | 已写入 `research-data/people/sha-yan.json` 并投影至 `generatedResearch.ts` |
| F081@1 | `career/sha-yan-csrc-jg-dir-2016-2020/endYear` | 纠正旧库“2017年4月起任机构部主任”的月份偏差，确证为2016年12月至2020年6月（值：`2020`） | endYear=2020（原文直接记载） | `supported_direct` | S002@1（正文第4-5段）；S004@1（正文第2-3段） | 公开投影：2020 | 已写入 `research-data/people/sha-yan.json` 并投影至 `generatedResearch.ts` |
| F082@1 | `career/sha-yan-csrc-jg-dir-2016-2020/endMonth` | 纠正旧库“2017年4月起任机构部主任”的月份偏差，确证为2016年12月至2020年6月（值：`6`） | endMonth=6（原文直接记载） | `supported_direct` | S002@1（正文第4-5段）；S004@1（正文第2-3段） | 公开投影：6 | 已写入 `research-data/people/sha-yan.json` 并投影至 `generatedResearch.ts` |
| F083@1 | `career/sha-yan-szse-gm-2020-2023/recordKind` | 2020年6月至2023年12月任深交所党委副书记、总经理（值：`"tenure"`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（正文第2-5段） | 公开投影："tenure" | 已写入 `research-data/people/sha-yan.json` 并投影至 `generatedResearch.ts` |
| F084@1 | `career/sha-yan-szse-gm-2020-2023/tenureStatus` | 2020年6月至2023年12月任深交所党委副书记、总经理（值：`"historical"`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（正文第2-5段） | 公开投影："historical" | 已写入 `research-data/people/sha-yan.json` 并投影至 `generatedResearch.ts` |
| F085@1 | `career/sha-yan-szse-gm-2020-2023/unitId` | 2020年6月至2023年12月任深交所党委副书记、总经理（值：`"csrc-szse"`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（正文第2-5段） | 公开投影："csrc-szse" | 已写入 `research-data/people/sha-yan.json` 并投影至 `generatedResearch.ts` |
| F086@1 | `career/sha-yan-szse-gm-2020-2023/unitName` | 2020年6月至2023年12月任深交所党委副书记、总经理（值：`"深圳证券交易所"`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（正文第2-5段） | 公开投影："深圳证券交易所" | 已写入 `research-data/people/sha-yan.json` 并投影至 `generatedResearch.ts` |
| F087@1 | `career/sha-yan-szse-gm-2020-2023/position` | 2020年6月至2023年12月任深交所党委副书记、总经理（值：`"党委副书记、总经理"`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（正文第2-5段） | 公开投影："党委副书记、总经理" | 已写入 `research-data/people/sha-yan.json` 并投影至 `generatedResearch.ts` |
| F088@1 | `career/sha-yan-szse-gm-2020-2023/startYear` | 2020年6月至2023年12月任深交所党委副书记、总经理（值：`2020`） | startYear=2020（原文直接记载） | `supported_direct` | S002@1（正文第2-5段） | 公开投影：2020 | 已写入 `research-data/people/sha-yan.json` 并投影至 `generatedResearch.ts` |
| F089@1 | `career/sha-yan-szse-gm-2020-2023/startMonth` | 2020年6月至2023年12月任深交所党委副书记、总经理（值：`6`） | startMonth=6（原文直接记载） | `supported_direct` | S002@1（正文第2-5段） | 公开投影：6 | 已写入 `research-data/people/sha-yan.json` 并投影至 `generatedResearch.ts` |
| F090@1 | `career/sha-yan-szse-gm-2020-2023/endYear` | 2020年6月至2023年12月任深交所党委副书记、总经理（值：`2023`） | endYear=2023（原文直接记载） | `supported_direct` | S002@1（正文第2-5段） | 公开投影：2023 | 已写入 `research-data/people/sha-yan.json` 并投影至 `generatedResearch.ts` |
| F091@1 | `career/sha-yan-szse-gm-2020-2023/endMonth` | 2020年6月至2023年12月任深交所党委副书记、总经理（值：`12`） | endMonth=12（原文直接记载） | `supported_direct` | S002@1（正文第2-5段） | 公开投影：12 | 已写入 `research-data/people/sha-yan.json` 并投影至 `generatedResearch.ts` |
| F092@1 | `basic/nativePlace` | 旧库legacyData.ts第2752行载籍贯黑龙江齐齐哈尔，本轮4篇已读权威来源未载籍贯，暂留候选待核（值：`"黑龙江齐齐哈尔"`） | 非日期字段（随所属记录精度） | `candidate` | 待补原文 | 暂不公开投影（仅存研究库） | 仅存 `research-data/people/sha-yan.json`（未发布） |

## 推理台账

- 本轮无 `derived` 推理；1989—1993 本科按当时独立建制校名“陕西财经学院”录入（该校2000年并入西安交大），避免跨时代校名回溯失真。

## 冲突与拒绝记录

| 争议属性 | 说法A及来源 | 说法B及来源 | 是否同一日期／职务口径 | 处理及理由 | 待查链接／搜索式 |
| --- | --- | --- | --- | --- | --- |
| 博士专业与就读年份 | 旧库 `legacyData.ts:2784`：1999—2003 西安交通大学管理科学与工程博士 | S001 西安交大校友网：沙雁为 2002—2008 西安交大会计学博士（同页下一条校友冷劲松才是 1999—2003 管理科学与工程博士） | 博士学历核心字段 | **采信 S001 原文，彻底清除串行嫁接污染** | 无需再查 |

## 职业时间线缺口与下一轮

| 缺口 | 已知边界（不强推任期） | 要找的材料 | 下一条完整查询 | 优先级 |
| --- | --- | --- | --- | --- |
| 深交所理事长正式当选年月及深交所官网最新全体班子名册 | 已知 2023.12 任深交所党委书记，2025.03 两会报道已任党委书记、理事长（副部长级） | 深交所官网组织架构页及 2024 年初理事会选举公告 | 在 Google Chrome 打开 `https://www.szse.cn/aboutus/sseintro/organization/` 或检索 `"沙雁" "当选" "深圳证券交易所理事长" 2024` | 高 |
| 籍贯（候选：黑龙江齐齐哈尔）与 2000—2013 陕西局／机构部具体处级职衔 | 已知 2000—2008 西安证管办／陕西局、2008—2013.05 证监会机构部 | 十四届全国人大代表信息或陕西证监局历史公告 | `"沙雁" "齐齐哈尔" OR "黑龙江" 全国人大代表` | 低 |

## 本轮交付与续接

- 新增有效岗位／教育经历／日期属性：新增个人职级“副部级”；新增陕财1989—1993工业会计学士、西安交大1998—2001 MBA硕士，并升级西安交大2002—2008会计学博士；新增 7 段核验历史任职（有色总公司、西安证管办／陕西局、2008机构部、上市二部／上市部副主任、机构部副主任、机构部主任、深交所总经理）。
- 删除或纠正的错误及依据：查明并清除旧库把相邻校友冷劲松“1999—2003管科博士”嫁接给沙雁的严重串行错误；纠正旧库“2000—2013一直在上市部”及机构部主任起始月（2017.04→2016.12）错误。
- 来源对应复查结果：全部已发布事实均绑定 `reading: "read"` 原文定位摘录，无悬空引用，无观察点冒充连续任期起止。
- 页面及结构验证（仅实际执行后填写）：已通过 `npm run research:check`、`npm run audit:data`、`npm run test:records`、`npm run test:relations`、`npm run test:research`、`npm run test:safety` 及生产构建 `npm run build` 校验。
- 结束状态：本轮研究完成（核心锚点与主干履历已入库，细分早期缺口转入二轮深化队列）。
- 停止条件满足情况：已核清核心身份、现职状态、关键正副局／部级履历与母校学历，证伪旧库硬伤并留下精确下一查询。
- 上次停在查询ID／来源ID：`Q002` ／ `S004`
- 最后处理事实ID／推理ID及当前阶段：`F092@1` ／ 无 `I` 推理项（已完成工作台导入与公开投影）
- 已证实待入库事实及原因／拟写入字段：无（本轮已证实事实已全部通过 `research:import --write --expect` 入库）。
- 旧模型线索对账完成与剩余项：旧库核心学历与主干履历线索已完成对账；待核候选见上表 `candidate`／`conflicted` 项。
- 输入变更后需要重新计算或撤销的推理：无依赖推理受影响。
- 下一步必须先执行的搜索式或原文链接：`"沙雁" "当选" "深圳证券交易所" "理事长" 2024`
- 尚未访问的高价值来源：《中国证券期货年鉴》历史卷、学位论文库及部分脚本受阻的交易所官网内页（详见渠道覆盖表）。
- 是否需要用户提供合法访问权限或已有资料：否（公开渠道与本地 Google Chrome 浏览器即可继续推进）。
