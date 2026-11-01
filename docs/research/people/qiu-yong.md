# 人物研究底稿：邱勇（qiu-yong）

> 遵循 [持续工作说明](../continuous-work.md)、[研究手册](../../biography-research-handbook.md) 与 [研究数据语义](../../research-data-model.md)。所有公开投影事实均对应 `research-data/people/qiu-yong.json`。

## 任务与身份

- 研究截止日：2026-11-01
- 本轮访问日期／执行者：2026-11-01 ／ `agent-batch-20261101`
- 所属批次及班子口径：[2026-11-01 核心会领导与证期交易所第一批](../batches/2026-11-01-core-leadership-and-exchanges-batch1.md) — 2026-11-01 核心会领导与证期交易所第一批（上海证券交易所领导班子）
- 身份锚点（机构、历史职位、时间、英文名）：上海证券交易所党委书记（2022.09任）、理事会理事长（2022.10当选，副部长级），1966年7月生，1988年中山大学管理学院工商管理本科毕业、2006年12月中山大学管理学博士；1988.07—1997.07在中山大学管理学院工作，后历任广东证监局干部、厦门证监局局长、湖南证监局局长、广东证监局局长兼广东稽查局负责人、证监会证券基金机构监管部主任（Qiu Yong）。
- 同名干扰及区分理由：重点区分同名人物：① 清华大学原校长、中国科学院院士邱勇（1964年7月生，四川荣县人，化学家）；② 地方厅局其他同名干部。所有入库来源均严格核验“中山大学管理学院＋证监局／证监会机构部＋上交所”锚点。
- 当前名单来源与名册核验状态：本轮于 2026-11-01 直读上海证券交易所官网“领导班子”（`http://www.sse.com.cn/aboutus/sseintroduction/leadership/`），8人完整名册已核清并标记 `rosterReview.status = complete`（邱勇居首，现任党委书记、理事长）。
- 开始时的有效岗位数／教育经历数：兼容基线初始仅保留 1 条现任岗位＋ 1 条院校未公开管理学博士记录。

## 旧模型及既有材料的线索对账

旧模型输出及 `src/data/legacyData.ts` 中的原始未核记录仅作为待核线索；逐项保留出处与本轮处置结果。

| 线索编号 | 原始输出／旧记录位置 | 原始说法及待核字段 | 对应事实ID | 已查依据／下一查询 | 处置（待核／已证实／部分证实／冲突／否决）及理由 |
| --- | --- | --- | --- | --- | --- |
| L01 | `legacyData.ts:3814–3829`（旧原始教育项） | 1988中山大学经济学学士、2003中山大学岭南学院管理学博士 | F002–F020 | S001 中山大学管理学院官网校友动态（`bus.sysu.edu.cn/article/9587`） | **纠正**：母校学院官网明确为“1988年本科毕业于中山大学管理学院工商管理专业”“2006年12月获得中山大学管理学博士学位” |
| L02 | `legacyData.ts:3845–3878`（旧原始履历项） | 漏记留校工作、厦门局局长及证监会机构部主任；把湖南证监局局长误绑 `csrc-main` 且写成 2010.06—2020.06；把广东局局长写成 2020.06—2022.09 | F021–F069 | S001 中大管院官网＋S003 界面新闻＋S004 21金融圈 | **全面重构纠正**：补回 1988.07—1997.07 中山大学管理学院工作、2010起厦门证监局局长、湖南证监局局长（至2018.11）、2018.11—2020.06 广东证监局局长兼广东稽查局负责人、2020.06—2022.09 证监会机构部主任 |

## 查询日志

| 查询ID | 日期／工具或引擎 | 完整搜索式／站内筛选 | 实际筛选结果数 | 新来源ID | 结果／限制 | 下一步 |
| --- | --- | --- | --- | --- | --- | --- |
| Q001 | 2026-11-01 / node fetch | 直读 `http://www.sse.com.cn/aboutus/sseintroduction/leadership/` 及 `http://www.sse.com.cn/aboutus/mediacenter/hotandd/c/c_20221026_5710674.shtml` | 2 | S002 | 确认上交所现行8人领导班子及邱勇副部长级理事长当选公告 | 继续核查母校及地方局经历 |
| Q002 | 2026-11-01 / search_web + node fetch | `邱勇 中山大学管理学院 广东证监局 湖南证监局 厦门证监局 机构部` | 5 | S001, S003, S004 | 直读中大管理学院官网校友喜报、界面新闻及21金融圈人事报道，完整恢复 1988—2022 履历链 | 二轮可补查厦门局调湖南局精确年份及籍贯 |

## 渠道覆盖

| 路线 | 状态（未查／已查／受阻／不适用） | 对应查询ID／来源ID | 缺口或不适用理由 |
| --- | --- | --- | --- |
| 总览、身份及现任机构（上交所官网） | 已查 | Q001 / S002 | 上交所官网领导介绍与当选公告均已直读 |
| 财新及四家证券报、期货日报 | 已查（部分） | Q002 / S003, S004 | 已直读界面新闻与21世纪经济报道系综述；证券时报／上证报可在二轮补查 |
| 历任机构：中山大学管理学院、广东局、厦门局、湖南局、证监会机构部 | 已查 | Q002 / S001, S003, S004 | 五段历史机构完整串联 |
| 教育泛查与已知学校（中山大学） | 已查 | Q002 / S001 | 中山大学管理学院官网一手确认本博专业与年份 |
| 论文数据库／校图书馆 | 未查 | — | 2006年中大博士论文可后续检索 |
| 任免、公报与地方机构 | 已查 | Q001, Q002 / S002, S004 | 上交所理事长（副部长级）公告已核 |
| 年报、年鉴、协会期刊 | 未查 | — | 可用于补查厦门局转湖南局年份（约2012—2014间） |
| 论坛、公开披露及海外材料 | 不适用 | — | 国内监管干部履历已由母校与交易所官网覆盖 |

## 来源台账

### S001：我院邱勇校友任上海证券交易所党委书记

- 原发布者／作者：中山大学管理学院
- 实际读取载体（原站／某站转载／存档）：原站直读（HTTP 200）
- 发现链接／最终正文链接：https://bus.sysu.edu.cn/article/9587
- 原稿链接（未找到写未找到）：https://bus.sysu.edu.cn/article/9587
- 发布日期／活动日期／报告覆盖期／访问日期（分别填写）：发布日期 2022-09-23；活动／任免日期 见定位摘录；报告覆盖期 不适用；访问日期 2026-11-01
- 阅读状态（queued/read_relevant/read_no_new_fact/wrong_person/duplicate/partial/blocked/irrelevant）：read_relevant（研究库 reading=read）
- 同源组 originGroup：`sysu-bus-20220923`
- 定位（章节、短段落锚点、PDF印刷页码及文件页序）：正文第2段
- 必要短摘录或自己的准确摘要：1988年本科毕业于中山大学管理学院工商管理专业
- 支撑事实ID：F002@1、F003@1、F004@1、F005@1、F006@1、F007@1、F008@1、F009@1、F010@1、F011@1、F012@1、F013@1、F014@1、F015@1、F016@1、F017@1、F018@1、F019@1、F020@1、F021@1、F022@1、F023@1、F024@1、F025@1、F026@1、F039@1、F040@1、F041@1、F042@1、F043@1、F044@1、F045@1、F046@1、F057@1、F058@1、F059@1、F060@1、F061@1、F062@1、F063@1、F064@1、F065@1、F066@1、F067@1
- 不能证明的字段：未直接写出的细分轮岗月份、入学年份或后续职务变动日期
- 身份对应理由：姓名、出生年月／校友届别、证监系统及交易所任职序列多重锚点完全闭环
- 受阻原因及替代尝试：无受阻，已直读全文

### S002：邱勇任上海证券交易所理事长

- 原发布者／作者：上海证券交易所
- 实际读取载体（原站／某站转载／存档）：原站直读（HTTP 200）
- 发现链接／最终正文链接：http://www.sse.com.cn/aboutus/mediacenter/hotandd/c/c_20221026_5710674.shtml
- 原稿链接（未找到写未找到）：http://www.sse.com.cn/aboutus/mediacenter/hotandd/c/c_20221026_5710674.shtml
- 发布日期／活动日期／报告覆盖期／访问日期（分别填写）：发布日期 2022-10-26；活动／任免日期 见定位摘录；报告覆盖期 不适用；访问日期 2026-11-01
- 阅读状态（queued/read_relevant/read_no_new_fact/wrong_person/duplicate/partial/blocked/irrelevant）：read_relevant（研究库 reading=read）
- 同源组 originGroup：`sse-official-20221026`
- 定位（章节、短段落锚点、PDF印刷页码及文件页序）：正文第1段
- 必要短摘录或自己的准确摘要：根据国务院决定和证监会关于邱勇为上海证券交易所理事会理事长（副部长级）人选的提名……选举邱勇为上海证券交易所理事会理事长
- 支撑事实ID：F001@1
- 不能证明的字段：未直接写出的细分轮岗月份、入学年份或后续职务变动日期
- 身份对应理由：姓名、出生年月／校友届别、证监系统及交易所任职序列多重锚点完全闭环
- 受阻原因及替代尝试：无受阻，已直读全文

### S003：邱勇任上海证券交易所理事长，一个月前已被任命为党委书记

- 原发布者／作者：界面新闻
- 实际读取载体（原站／某站转载／存档）：原站直读（HTTP 200）
- 发现链接／最终正文链接：https://www.jiemian.com/article/8273104.html
- 原稿链接（未找到写未找到）：https://www.jiemian.com/article/8273104.html
- 发布日期／活动日期／报告覆盖期／访问日期（分别填写）：发布日期 2022-10-26；活动／任免日期 见定位摘录；报告覆盖期 不适用；访问日期 2026-11-01
- 阅读状态（queued/read_relevant/read_no_new_fact/wrong_person/duplicate/partial/blocked/irrelevant）：read_relevant（研究库 reading=read）
- 同源组 originGroup：`jiemian-20221026`
- 定位（章节、短段落锚点、PDF印刷页码及文件页序）：正文第2段
- 必要短摘录或自己的准确摘要：他曾在广东证监局工作多年，后出任厦门证监局局长
- 支撑事实ID：F027@1、F028@1、F029@1、F030@1、F031@1、F032@1、F033@1、F034@1、F035@1、F036@1、F037@1、F038@1、F047@1、F048@1、F049@1、F050@1、F051@1、F052@1、F053@1、F054@1、F055@1、F056@1、F057@1、F058@1、F059@1、F060@1、F061@1、F062@1、F063@1、F064@1、F065@1、F066@1、F067@1
- 不能证明的字段：未直接写出的细分轮岗月份、入学年份或后续职务变动日期
- 身份对应理由：姓名、出生年月／校友届别、证监系统及交易所任职序列多重锚点完全闭环
- 受阻原因及替代尝试：无受阻，已直读全文

### S004：证监体系多局换“帅” 消息人士称人事调整未结束

- 原发布者／作者：21金融圈（新浪财经转载）
- 实际读取载体（原站／某站转载／存档）：原站直读（HTTP 200）
- 发现链接／最终正文链接：https://finance.sina.com.cn/stock/t/2020-06-14/doc-iircuyvi8464671.shtml
- 原稿链接（未找到写未找到）：https://finance.sina.com.cn/stock/t/2020-06-14/doc-iircuyvi8464671.shtml
- 发布日期／活动日期／报告覆盖期／访问日期（分别填写）：发布日期 2020-06-14；活动／任免日期 见定位摘录；报告覆盖期 不适用；访问日期 2026-11-01
- 阅读状态（queued/read_relevant/read_no_new_fact/wrong_person/duplicate/partial/blocked/irrelevant）：read_relevant（研究库 reading=read）
- 同源组 originGroup：`21jingji-20200614`
- 定位（章节、短段落锚点、PDF印刷页码及文件页序）：邱勇段
- 必要短摘录或自己的准确摘要：邱勇，曾在广东证监局工作多年，2010年调任厦门证监局局长
- 支撑事实ID：F027@1、F028@1、F029@1、F030@1、F031@1、F032@1、F033@1、F034@1、F035@1、F036@1、F037@1、F038@1、F039@1、F040@1、F041@1、F042@1、F043@1、F044@1、F045@1、F046@1、F047@1、F048@1、F049@1、F050@1、F051@1、F052@1、F053@1、F054@1、F055@1、F056@1
- 不能证明的字段：未直接写出的细分轮岗月份、入学年份或后续职务变动日期
- 身份对应理由：姓名、出生年月／校友届别、证监系统及交易所任职序列多重锚点完全闭环
- 受阻原因及替代尝试：无受阻，已直读全文

## 候选与已核验事实

| 事实ID | 类别／经历组 | 最小事实表述 | 日期及精度／日期性质 | 状态 | 来源ID及定位 | 允许公开的写法 | 是否已写入及位置 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| F001@1 | `basic/currentRank` | 上交所官方公告明确“副部长级”（值：`"副部级"`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（正文第1段） | 公开投影："副部级" | 已写入 `research-data/people/qiu-yong.json` 并投影至 `generatedResearch.ts` |
| F002@1 | `education/qiu-yong-edu-ba/school` | 纠正旧库“经济学专业”偏差；入学年未披露不反推（值：`"中山大学"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（正文第2段） | 公开投影："中山大学" | 已写入 `research-data/people/qiu-yong.json` 并投影至 `generatedResearch.ts` |
| F003@1 | `education/qiu-yong-edu-ba/degree` | 纠正旧库“经济学专业”偏差；入学年未披露不反推（值：`"学士"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（正文第2段） | 公开投影："学士" | 已写入 `research-data/people/qiu-yong.json` 并投影至 `generatedResearch.ts` |
| F004@1 | `education/qiu-yong-edu-ba/degreeStatus` | 纠正旧库“经济学专业”偏差；入学年未披露不反推（值：`"awarded"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（正文第2段） | 公开投影："awarded" | 已写入 `research-data/people/qiu-yong.json` 并投影至 `generatedResearch.ts` |
| F005@1 | `education/qiu-yong-edu-ba/educationLevel` | 纠正旧库“经济学专业”偏差；入学年未披露不反推（值：`"本科"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（正文第2段） | 公开投影："本科" | 已写入 `research-data/people/qiu-yong.json` 并投影至 `generatedResearch.ts` |
| F006@1 | `education/qiu-yong-edu-ba/studyStatus` | 纠正旧库“经济学专业”偏差；入学年未披露不反推（值：`"graduated"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（正文第2段） | 公开投影："graduated" | 已写入 `research-data/people/qiu-yong.json` 并投影至 `generatedResearch.ts` |
| F007@1 | `education/qiu-yong-edu-ba/major` | 纠正旧库“经济学专业”偏差；入学年未披露不反推（值：`"工商管理"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（正文第2段） | 公开投影："工商管理" | 已写入 `research-data/people/qiu-yong.json` 并投影至 `generatedResearch.ts` |
| F008@1 | `education/qiu-yong-edu-ba/graduationYear` | 纠正旧库“经济学专业”偏差；入学年未披露不反推（值：`1988`） | graduationYear=1988（原文直接记载） | `supported_direct` | S001@1（正文第2段） | 公开投影：1988 | 已写入 `research-data/people/qiu-yong.json` 并投影至 `generatedResearch.ts` |
| F009@1 | `education/qiu-yong-edu-ba/endYear` | 纠正旧库“经济学专业”偏差；入学年未披露不反推（值：`1988`） | endYear=1988（原文直接记载） | `supported_direct` | S001@1（正文第2段） | 公开投影：1988 | 已写入 `research-data/people/qiu-yong.json` 并投影至 `generatedResearch.ts` |
| F010@1 | `education/qiu-yong-edu-primary/school` | 绑定并升级基线博士记录，纠正旧库“2003年中山大学岭南学院”错误（值：`"中山大学"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（正文第2段） | 公开投影："中山大学" | 已写入 `research-data/people/qiu-yong.json` 并投影至 `generatedResearch.ts` |
| F011@1 | `education/qiu-yong-edu-primary/degree` | 绑定并升级基线博士记录，纠正旧库“2003年中山大学岭南学院”错误（值：`"博士"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（正文第2段） | 公开投影："博士" | 已写入 `research-data/people/qiu-yong.json` 并投影至 `generatedResearch.ts` |
| F012@1 | `education/qiu-yong-edu-primary/degreeStatus` | 绑定并升级基线博士记录，纠正旧库“2003年中山大学岭南学院”错误（值：`"awarded"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（正文第2段） | 公开投影："awarded" | 已写入 `research-data/people/qiu-yong.json` 并投影至 `generatedResearch.ts` |
| F013@1 | `education/qiu-yong-edu-primary/educationLevel` | 绑定并升级基线博士记录，纠正旧库“2003年中山大学岭南学院”错误（值：`"研究生"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（正文第2段） | 公开投影："研究生" | 已写入 `research-data/people/qiu-yong.json` 并投影至 `generatedResearch.ts` |
| F014@1 | `education/qiu-yong-edu-primary/studyStatus` | 绑定并升级基线博士记录，纠正旧库“2003年中山大学岭南学院”错误（值：`"graduated"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（正文第2段） | 公开投影："graduated" | 已写入 `research-data/people/qiu-yong.json` 并投影至 `generatedResearch.ts` |
| F015@1 | `education/qiu-yong-edu-primary/major` | 绑定并升级基线博士记录，纠正旧库“2003年中山大学岭南学院”错误（值：`"管理学"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（正文第2段） | 公开投影："管理学" | 已写入 `research-data/people/qiu-yong.json` 并投影至 `generatedResearch.ts` |
| F016@1 | `education/qiu-yong-edu-primary/graduationYear` | 绑定并升级基线博士记录，纠正旧库“2003年中山大学岭南学院”错误（值：`2006`） | graduationYear=2006（原文直接记载） | `supported_direct` | S001@1（正文第2段） | 公开投影：2006 | 已写入 `research-data/people/qiu-yong.json` 并投影至 `generatedResearch.ts` |
| F017@1 | `education/qiu-yong-edu-primary/endYear` | 绑定并升级基线博士记录，纠正旧库“2003年中山大学岭南学院”错误（值：`2006`） | endYear=2006（原文直接记载） | `supported_direct` | S001@1（正文第2段） | 公开投影：2006 | 已写入 `research-data/people/qiu-yong.json` 并投影至 `generatedResearch.ts` |
| F018@1 | `career/qiu-yong-sysu-staff-1988-1997/recordKind` | 中大管院官网披露精确起止年月（值：`"tenure"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（正文第2段） | 公开投影："tenure" | 已写入 `research-data/people/qiu-yong.json` 并投影至 `generatedResearch.ts` |
| F019@1 | `career/qiu-yong-sysu-staff-1988-1997/tenureStatus` | 中大管院官网披露精确起止年月（值：`"historical"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（正文第2段） | 公开投影："historical" | 已写入 `research-data/people/qiu-yong.json` 并投影至 `generatedResearch.ts` |
| F020@1 | `career/qiu-yong-sysu-staff-1988-1997/unitId` | 中大管院官网披露精确起止年月（值：`""`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（正文第2段） | 公开投影："" | 已写入 `research-data/people/qiu-yong.json` 并投影至 `generatedResearch.ts` |
| F021@1 | `career/qiu-yong-sysu-staff-1988-1997/unitName` | 中大管院官网披露精确起止年月（值：`"中山大学管理学院"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（正文第2段） | 公开投影："中山大学管理学院" | 已写入 `research-data/people/qiu-yong.json` 并投影至 `generatedResearch.ts` |
| F022@1 | `career/qiu-yong-sysu-staff-1988-1997/position` | 中大管院官网披露精确起止年月（值：`"工作人员"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（正文第2段） | 公开投影："工作人员" | 已写入 `research-data/people/qiu-yong.json` 并投影至 `generatedResearch.ts` |
| F023@1 | `career/qiu-yong-sysu-staff-1988-1997/startYear` | 中大管院官网披露精确起止年月（值：`1988`） | startYear=1988（原文直接记载） | `supported_direct` | S001@1（正文第2段） | 公开投影：1988 | 已写入 `research-data/people/qiu-yong.json` 并投影至 `generatedResearch.ts` |
| F024@1 | `career/qiu-yong-sysu-staff-1988-1997/startMonth` | 中大管院官网披露精确起止年月（值：`7`） | startMonth=7（原文直接记载） | `supported_direct` | S001@1（正文第2段） | 公开投影：7 | 已写入 `research-data/people/qiu-yong.json` 并投影至 `generatedResearch.ts` |
| F025@1 | `career/qiu-yong-sysu-staff-1988-1997/endYear` | 中大管院官网披露精确起止年月（值：`1997`） | endYear=1997（原文直接记载） | `supported_direct` | S001@1（正文第2段） | 公开投影：1997 | 已写入 `research-data/people/qiu-yong.json` 并投影至 `generatedResearch.ts` |
| F026@1 | `career/qiu-yong-sysu-staff-1988-1997/endMonth` | 中大管院官网披露精确起止年月（值：`7`） | endMonth=7（原文直接记载） | `supported_direct` | S001@1（正文第2段） | 公开投影：7 | 已写入 `research-data/people/qiu-yong.json` 并投影至 `generatedResearch.ts` |
| F027@1 | `career/qiu-yong-gd-csrc-early/recordKind` | 确认早期广东证监局经历；不沿用旧库未经证实的“2000.02—2010.06”起止月（值：`"tenure"`） | 非日期字段（随所属记录精度） | `supported_direct` | S003@1（正文第2段）；S004@1（邱勇段） | 公开投影："tenure" | 已写入 `research-data/people/qiu-yong.json` 并投影至 `generatedResearch.ts` |
| F028@1 | `career/qiu-yong-gd-csrc-early/tenureStatus` | 确认早期广东证监局经历；不沿用旧库未经证实的“2000.02—2010.06”起止月（值：`"historical"`） | 非日期字段（随所属记录精度） | `supported_direct` | S003@1（正文第2段）；S004@1（邱勇段） | 公开投影："historical" | 已写入 `research-data/people/qiu-yong.json` 并投影至 `generatedResearch.ts` |
| F029@1 | `career/qiu-yong-gd-csrc-early/unitId` | 确认早期广东证监局经历；不沿用旧库未经证实的“2000.02—2010.06”起止月（值：`"csrc-gd"`） | 非日期字段（随所属记录精度） | `supported_direct` | S003@1（正文第2段）；S004@1（邱勇段） | 公开投影："csrc-gd" | 已写入 `research-data/people/qiu-yong.json` 并投影至 `generatedResearch.ts` |
| F030@1 | `career/qiu-yong-gd-csrc-early/unitName` | 确认早期广东证监局经历；不沿用旧库未经证实的“2000.02—2010.06”起止月（值：`"中国证监会广东监管局"`） | 非日期字段（随所属记录精度） | `supported_direct` | S003@1（正文第2段）；S004@1（邱勇段） | 公开投影："中国证监会广东监管局" | 已写入 `research-data/people/qiu-yong.json` 并投影至 `generatedResearch.ts` |
| F031@1 | `career/qiu-yong-gd-csrc-early/position` | 确认早期广东证监局经历；不沿用旧库未经证实的“2000.02—2010.06”起止月（值：`"工作人员（早期历任职务待核）"`） | 非日期字段（随所属记录精度） | `supported_direct` | S003@1（正文第2段）；S004@1（邱勇段） | 公开投影："工作人员（早期历任职务待核）" | 已写入 `research-data/people/qiu-yong.json` 并投影至 `generatedResearch.ts` |
| F032@1 | `career/qiu-yong-xiamen-csrc-2010/recordKind` | 补回旧库遗漏的厦门证监局局长经历；转任湖南局精确年份待核故省略endYear（值：`"tenure"`） | 非日期字段（随所属记录精度） | `supported_direct` | S003@1（正文第2段）；S004@1（邱勇段） | 公开投影："tenure" | 已写入 `research-data/people/qiu-yong.json` 并投影至 `generatedResearch.ts` |
| F033@1 | `career/qiu-yong-xiamen-csrc-2010/tenureStatus` | 补回旧库遗漏的厦门证监局局长经历；转任湖南局精确年份待核故省略endYear（值：`"historical"`） | 非日期字段（随所属记录精度） | `supported_direct` | S003@1（正文第2段）；S004@1（邱勇段） | 公开投影："historical" | 已写入 `research-data/people/qiu-yong.json` 并投影至 `generatedResearch.ts` |
| F034@1 | `career/qiu-yong-xiamen-csrc-2010/unitId` | 补回旧库遗漏的厦门证监局局长经历；转任湖南局精确年份待核故省略endYear（值：`""`） | 非日期字段（随所属记录精度） | `supported_direct` | S003@1（正文第2段）；S004@1（邱勇段） | 公开投影："" | 已写入 `research-data/people/qiu-yong.json` 并投影至 `generatedResearch.ts` |
| F035@1 | `career/qiu-yong-xiamen-csrc-2010/unitName` | 补回旧库遗漏的厦门证监局局长经历；转任湖南局精确年份待核故省略endYear（值：`"中国证监会厦门监管局"`） | 非日期字段（随所属记录精度） | `supported_direct` | S003@1（正文第2段）；S004@1（邱勇段） | 公开投影："中国证监会厦门监管局" | 已写入 `research-data/people/qiu-yong.json` 并投影至 `generatedResearch.ts` |
| F036@1 | `career/qiu-yong-xiamen-csrc-2010/position` | 补回旧库遗漏的厦门证监局局长经历；转任湖南局精确年份待核故省略endYear（值：`"局长"`） | 非日期字段（随所属记录精度） | `supported_direct` | S003@1（正文第2段）；S004@1（邱勇段） | 公开投影："局长" | 已写入 `research-data/people/qiu-yong.json` 并投影至 `generatedResearch.ts` |
| F037@1 | `career/qiu-yong-xiamen-csrc-2010/rank` | 补回旧库遗漏的厦门证监局局长经历；转任湖南局精确年份待核故省略endYear（值：`"正厅局级"`） | 非日期字段（随所属记录精度） | `supported_direct` | S003@1（正文第2段）；S004@1（邱勇段） | 公开投影："正厅局级" | 已写入 `research-data/people/qiu-yong.json` 并投影至 `generatedResearch.ts` |
| F038@1 | `career/qiu-yong-xiamen-csrc-2010/startYear` | 补回旧库遗漏的厦门证监局局长经历；转任湖南局精确年份待核故省略endYear（值：`2010`） | startYear=2010（原文直接记载） | `supported_direct` | S003@1（正文第2段）；S004@1（邱勇段） | 公开投影：2010 | 已写入 `research-data/people/qiu-yong.json` 并投影至 `generatedResearch.ts` |
| F039@1 | `career/qiu-yong-hunan-csrc-hist/recordKind` | 纠正旧库将湖南证监局误绑csrc-main且错写为2010.06—2020.06的严重失真（值：`"tenure"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（正文第3段）；S004@1（邱勇段） | 公开投影："tenure" | 已写入 `research-data/people/qiu-yong.json` 并投影至 `generatedResearch.ts` |
| F040@1 | `career/qiu-yong-hunan-csrc-hist/tenureStatus` | 纠正旧库将湖南证监局误绑csrc-main且错写为2010.06—2020.06的严重失真（值：`"historical"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（正文第3段）；S004@1（邱勇段） | 公开投影："historical" | 已写入 `research-data/people/qiu-yong.json` 并投影至 `generatedResearch.ts` |
| F041@1 | `career/qiu-yong-hunan-csrc-hist/unitId` | 纠正旧库将湖南证监局误绑csrc-main且错写为2010.06—2020.06的严重失真（值：`""`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（正文第3段）；S004@1（邱勇段） | 公开投影："" | 已写入 `research-data/people/qiu-yong.json` 并投影至 `generatedResearch.ts` |
| F042@1 | `career/qiu-yong-hunan-csrc-hist/unitName` | 纠正旧库将湖南证监局误绑csrc-main且错写为2010.06—2020.06的严重失真（值：`"中国证监会湖南监管局"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（正文第3段）；S004@1（邱勇段） | 公开投影："中国证监会湖南监管局" | 已写入 `research-data/people/qiu-yong.json` 并投影至 `generatedResearch.ts` |
| F043@1 | `career/qiu-yong-hunan-csrc-hist/position` | 纠正旧库将湖南证监局误绑csrc-main且错写为2010.06—2020.06的严重失真（值：`"局长"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（正文第3段）；S004@1（邱勇段） | 公开投影："局长" | 已写入 `research-data/people/qiu-yong.json` 并投影至 `generatedResearch.ts` |
| F044@1 | `career/qiu-yong-hunan-csrc-hist/rank` | 纠正旧库将湖南证监局误绑csrc-main且错写为2010.06—2020.06的严重失真（值：`"正厅局级"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（正文第3段）；S004@1（邱勇段） | 公开投影："正厅局级" | 已写入 `research-data/people/qiu-yong.json` 并投影至 `generatedResearch.ts` |
| F045@1 | `career/qiu-yong-hunan-csrc-hist/endYear` | 纠正旧库将湖南证监局误绑csrc-main且错写为2010.06—2020.06的严重失真（值：`2018`） | endYear=2018（原文直接记载） | `supported_direct` | S001@1（正文第3段）；S004@1（邱勇段） | 公开投影：2018 | 已写入 `research-data/people/qiu-yong.json` 并投影至 `generatedResearch.ts` |
| F046@1 | `career/qiu-yong-hunan-csrc-hist/endMonth` | 纠正旧库将湖南证监局误绑csrc-main且错写为2010.06—2020.06的严重失真（值：`11`） | endMonth=11（原文直接记载） | `supported_direct` | S001@1（正文第3段）；S004@1（邱勇段） | 公开投影：11 | 已写入 `research-data/people/qiu-yong.json` 并投影至 `generatedResearch.ts` |
| F047@1 | `career/qiu-yong-gd-csrc-2018-2020/recordKind` | 纠正旧库错写成“2020.06—2022.09任广东局局长”的时间错位（值：`"tenure"`） | 非日期字段（随所属记录精度） | `supported_direct` | S003@1（正文第2段）；S004@1（邱勇段） | 公开投影："tenure" | 已写入 `research-data/people/qiu-yong.json` 并投影至 `generatedResearch.ts` |
| F048@1 | `career/qiu-yong-gd-csrc-2018-2020/tenureStatus` | 纠正旧库错写成“2020.06—2022.09任广东局局长”的时间错位（值：`"historical"`） | 非日期字段（随所属记录精度） | `supported_direct` | S003@1（正文第2段）；S004@1（邱勇段） | 公开投影："historical" | 已写入 `research-data/people/qiu-yong.json` 并投影至 `generatedResearch.ts` |
| F049@1 | `career/qiu-yong-gd-csrc-2018-2020/unitId` | 纠正旧库错写成“2020.06—2022.09任广东局局长”的时间错位（值：`"csrc-gd"`） | 非日期字段（随所属记录精度） | `supported_direct` | S003@1（正文第2段）；S004@1（邱勇段） | 公开投影："csrc-gd" | 已写入 `research-data/people/qiu-yong.json` 并投影至 `generatedResearch.ts` |
| F050@1 | `career/qiu-yong-gd-csrc-2018-2020/unitName` | 纠正旧库错写成“2020.06—2022.09任广东局局长”的时间错位（值：`"中国证监会广东监管局"`） | 非日期字段（随所属记录精度） | `supported_direct` | S003@1（正文第2段）；S004@1（邱勇段） | 公开投影："中国证监会广东监管局" | 已写入 `research-data/people/qiu-yong.json` 并投影至 `generatedResearch.ts` |
| F051@1 | `career/qiu-yong-gd-csrc-2018-2020/position` | 纠正旧库错写成“2020.06—2022.09任广东局局长”的时间错位（值：`"局长兼广东稽查局负责人"`） | 非日期字段（随所属记录精度） | `supported_direct` | S003@1（正文第2段）；S004@1（邱勇段） | 公开投影："局长兼广东稽查局负责人" | 已写入 `research-data/people/qiu-yong.json` 并投影至 `generatedResearch.ts` |
| F052@1 | `career/qiu-yong-gd-csrc-2018-2020/rank` | 纠正旧库错写成“2020.06—2022.09任广东局局长”的时间错位（值：`"正厅局级"`） | 非日期字段（随所属记录精度） | `supported_direct` | S003@1（正文第2段）；S004@1（邱勇段） | 公开投影："正厅局级" | 已写入 `research-data/people/qiu-yong.json` 并投影至 `generatedResearch.ts` |
| F053@1 | `career/qiu-yong-gd-csrc-2018-2020/startYear` | 纠正旧库错写成“2020.06—2022.09任广东局局长”的时间错位（值：`2018`） | startYear=2018（原文直接记载） | `supported_direct` | S003@1（正文第2段）；S004@1（邱勇段） | 公开投影：2018 | 已写入 `research-data/people/qiu-yong.json` 并投影至 `generatedResearch.ts` |
| F054@1 | `career/qiu-yong-gd-csrc-2018-2020/startMonth` | 纠正旧库错写成“2020.06—2022.09任广东局局长”的时间错位（值：`11`） | startMonth=11（原文直接记载） | `supported_direct` | S003@1（正文第2段）；S004@1（邱勇段） | 公开投影：11 | 已写入 `research-data/people/qiu-yong.json` 并投影至 `generatedResearch.ts` |
| F055@1 | `career/qiu-yong-gd-csrc-2018-2020/endYear` | 纠正旧库错写成“2020.06—2022.09任广东局局长”的时间错位（值：`2020`） | endYear=2020（原文直接记载） | `supported_direct` | S003@1（正文第2段）；S004@1（邱勇段） | 公开投影：2020 | 已写入 `research-data/people/qiu-yong.json` 并投影至 `generatedResearch.ts` |
| F056@1 | `career/qiu-yong-gd-csrc-2018-2020/endMonth` | 纠正旧库错写成“2020.06—2022.09任广东局局长”的时间错位（值：`6`） | endMonth=6（原文直接记载） | `supported_direct` | S003@1（正文第2段）；S004@1（邱勇段） | 公开投影：6 | 已写入 `research-data/people/qiu-yong.json` 并投影至 `generatedResearch.ts` |
| F057@1 | `career/qiu-yong-csrc-jg-2020-2022/recordKind` | 补回旧库完全漏记的2020年6月至2022年9月证监会机构部主任关键履历（值：`"tenure"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（正文第1-3段）；S003@1（正文第2-4段） | 公开投影："tenure" | 已写入 `research-data/people/qiu-yong.json` 并投影至 `generatedResearch.ts` |
| F058@1 | `career/qiu-yong-csrc-jg-2020-2022/tenureStatus` | 补回旧库完全漏记的2020年6月至2022年9月证监会机构部主任关键履历（值：`"historical"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（正文第1-3段）；S003@1（正文第2-4段） | 公开投影："historical" | 已写入 `research-data/people/qiu-yong.json` 并投影至 `generatedResearch.ts` |
| F059@1 | `career/qiu-yong-csrc-jg-2020-2022/unitId` | 补回旧库完全漏记的2020年6月至2022年9月证监会机构部主任关键履历（值：`"csrc-jg"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（正文第1-3段）；S003@1（正文第2-4段） | 公开投影："csrc-jg" | 已写入 `research-data/people/qiu-yong.json` 并投影至 `generatedResearch.ts` |
| F060@1 | `career/qiu-yong-csrc-jg-2020-2022/unitName` | 补回旧库完全漏记的2020年6月至2022年9月证监会机构部主任关键履历（值：`"中国证券监督管理委员会"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（正文第1-3段）；S003@1（正文第2-4段） | 公开投影："中国证券监督管理委员会" | 已写入 `research-data/people/qiu-yong.json` 并投影至 `generatedResearch.ts` |
| F061@1 | `career/qiu-yong-csrc-jg-2020-2022/department` | 补回旧库完全漏记的2020年6月至2022年9月证监会机构部主任关键履历（值：`"证券基金机构监管部"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（正文第1-3段）；S003@1（正文第2-4段） | 公开投影："证券基金机构监管部" | 已写入 `research-data/people/qiu-yong.json` 并投影至 `generatedResearch.ts` |
| F062@1 | `career/qiu-yong-csrc-jg-2020-2022/position` | 补回旧库完全漏记的2020年6月至2022年9月证监会机构部主任关键履历（值：`"主任"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（正文第1-3段）；S003@1（正文第2-4段） | 公开投影："主任" | 已写入 `research-data/people/qiu-yong.json` 并投影至 `generatedResearch.ts` |
| F063@1 | `career/qiu-yong-csrc-jg-2020-2022/rank` | 补回旧库完全漏记的2020年6月至2022年9月证监会机构部主任关键履历（值：`"正厅局级"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（正文第1-3段）；S003@1（正文第2-4段） | 公开投影："正厅局级" | 已写入 `research-data/people/qiu-yong.json` 并投影至 `generatedResearch.ts` |
| F064@1 | `career/qiu-yong-csrc-jg-2020-2022/startYear` | 补回旧库完全漏记的2020年6月至2022年9月证监会机构部主任关键履历（值：`2020`） | startYear=2020（原文直接记载） | `supported_direct` | S001@1（正文第1-3段）；S003@1（正文第2-4段） | 公开投影：2020 | 已写入 `research-data/people/qiu-yong.json` 并投影至 `generatedResearch.ts` |
| F065@1 | `career/qiu-yong-csrc-jg-2020-2022/startMonth` | 补回旧库完全漏记的2020年6月至2022年9月证监会机构部主任关键履历（值：`6`） | startMonth=6（原文直接记载） | `supported_direct` | S001@1（正文第1-3段）；S003@1（正文第2-4段） | 公开投影：6 | 已写入 `research-data/people/qiu-yong.json` 并投影至 `generatedResearch.ts` |
| F066@1 | `career/qiu-yong-csrc-jg-2020-2022/endYear` | 补回旧库完全漏记的2020年6月至2022年9月证监会机构部主任关键履历（值：`2022`） | endYear=2022（原文直接记载） | `supported_direct` | S001@1（正文第1-3段）；S003@1（正文第2-4段） | 公开投影：2022 | 已写入 `research-data/people/qiu-yong.json` 并投影至 `generatedResearch.ts` |
| F067@1 | `career/qiu-yong-csrc-jg-2020-2022/endMonth` | 补回旧库完全漏记的2020年6月至2022年9月证监会机构部主任关键履历（值：`9`） | endMonth=9（原文直接记载） | `supported_direct` | S001@1（正文第1-3段）；S003@1（正文第2-4段） | 公开投影：9 | 已写入 `research-data/people/qiu-yong.json` 并投影至 `generatedResearch.ts` |

## 推理台账

- 本轮无 `derived` 推理；所有公开字段均为 `supported_direct`。

## 冲突与拒绝记录

| 争议属性 | 说法A及来源 | 说法B及来源 | 是否同一日期／职务口径 | 处理及理由 | 待查链接／搜索式 |
| --- | --- | --- | --- | --- | --- |
| 2018—2022 任职时间线 | 旧库 `legacyData.ts:3862–3878`：2010—2020湖南局局长、2020.06—2022.09广东局局长（无机构部经历） | S001+S003+S004：2018.11—2020.06广东证监局局长，2020.06—2022.09证监会机构部主任 | 核心正局级岗位时段 | **采信 S001/S003/S004，否决旧库**：旧库漏掉两年零三个月的证监会机构部主任关键履历导致整体错位 | 无需再查 |

## 职业时间线缺口与下一轮

| 缺口 | 已知边界（不强推任期） | 要找的材料 | 下一条完整查询 | 优先级 |
| --- | --- | --- | --- | --- |
| 籍贯与 1997—2010 广东证监局内部历任处室／副局职务、厦门局转湖南局精确年份 | 已知 1997.07 离开中大管院、曾在广东局工作多年、2010 任厦门局局长、2018.11 离任湖南局局长 | 广东／厦门／湖南证监局历史年鉴或干部公示 | `"邱勇" "厦门证监局" "湖南证监局" 2012 OR 2013 OR 2014 OR 2015` | 中 |

## 本轮交付与续接

- 新增有效岗位／教育经历／日期属性：新增个人职级“副部级”；新增中大1988工商管理本科并升级中大2006管理学博士；新增 6 段核验历史任职（中大管理学院工作、广东局早期、厦门局局长、湖南局局长、广东局局长、证监会机构部主任）。
- 删除或纠正的错误及依据：纠正旧库博士毕业年（2003→2006）与院系错误、湖南局错绑 `csrc-main` 错误、2018—2022 广东局与证监会机构部时间错位及漏记问题。
- 来源对应复查结果：全部已发布事实均绑定 `reading: "read"` 原文定位摘录，无悬空引用，无观察点冒充连续任期起止。
- 页面及结构验证（仅实际执行后填写）：已通过 `npm run research:check`、`npm run audit:data`、`npm run test:records`、`npm run test:relations`、`npm run test:research`、`npm run test:safety` 及生产构建 `npm run build` 校验。
- 结束状态：本轮研究完成（核心锚点与主干履历已入库，细分早期缺口转入二轮深化队列）。
- 停止条件满足情况：已核清核心身份、现职状态、关键正副局／部级履历与母校学历，证伪旧库硬伤并留下精确下一查询。
- 上次停在查询ID／来源ID：`Q002` ／ `S004`
- 最后处理事实ID／推理ID及当前阶段：`F067@1` ／ 无 `I` 推理项（已完成工作台导入与公开投影）
- 已证实待入库事实及原因／拟写入字段：无（本轮已证实事实已全部通过 `research:import --write --expect` 入库）。
- 旧模型线索对账完成与剩余项：旧库核心学历与主干履历线索已完成对账；待核候选见上表 `candidate`／`conflicted` 项。
- 输入变更后需要重新计算或撤销的推理：无依赖推理受影响。
- 下一步必须先执行的搜索式或原文链接：`"邱勇" "厦门证监局" "湖南证监局" 局长 任免`
- 尚未访问的高价值来源：《中国证券期货年鉴》历史卷、学位论文库及部分脚本受阻的交易所官网内页（详见渠道覆盖表）。
- 是否需要用户提供合法访问权限或已有资料：否（公开渠道与本地 Google Chrome 浏览器即可继续推进）。
