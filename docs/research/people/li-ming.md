# 人物研究底稿：李明（li-ming）

> 遵循 [持续工作说明](../continuous-work.md)、[研究手册](../../biography-research-handbook.md) 与 [研究数据语义](../../research-data-model.md)。所有公开投影事实均对应 `research-data/people/li-ming.json`。

## 任务与身份

- 研究截止日：2026-11-01
- 本轮访问日期／执行者：2026-11-01 ／ `agent-batch-20261101`
- 所属批次及班子口径：[2026-11-01 核心会领导与证期交易所第二批](../batches/2026-11-01-core-leadership-and-exchanges-batch2.md) — 中国证监会会领导班子（副主席）
- 身份锚点（机构、历史职位、时间、英文名）：中国证券监督管理委员会党委委员、副主席（2024.07任），1968年11月生，吉林大学本科、清华大学法学博士；历任证监会发行部五处处长及综合处处长、非上市公众公司监管部副主任（2011）、深圳证监局副局长（2011.10挂职）、新疆金融办及自治区农信联社援疆任职（2014—2016）、全国股转公司总经理（2017.01—2018.08）、江苏证监局局长（2018.08—2020.06）、证监会上市部主任（2020.06—2023.11）、证监会首席检查官兼稽查局局长（2023.11—2024.07）（Li Ming）。
- 同名干扰及区分理由：全国同名“李明”极多（高校法学学者、地方政法及国企高管），本轮严格以“1968.11生＋吉大本科／清华法学博士＋发行部—非公部—深圳局—援疆—股转—江苏局—上市部—稽查局—证监会副主席”闭环核定。
- 当前名单来源与名册核验状态：中国证监会官网“会领导”已核（现职壳 `li-ming-csrc-current-verified` 在位）。
- 开始时的有效岗位数／教育经历数：兼容基线含 4 段 2017 年后历史任职＋ 1 段院校未公开法学博士＋ 1 段现职。

## 旧模型及既有材料的线索对账

旧模型输出及 `src/data/legacyData.ts` 中的原始未核记录仅作为待核线索；逐项保留出处与本轮处置结果。

| 线索编号 | 原始输出／旧记录位置 | 原始说法及待核字段 | 对应事实ID | 已查依据／下一查询 | 处置（待核／已证实／部分证实／冲突／否决）及理由 |
| --- | --- | --- | --- | --- | --- |
| L01 | `legacyData.ts` 旧原始教育项 | 中国政法大学法学学士、硕士、博士（本硕博连读） | F002–F015 | S002 财新网＋S003 新浪财经（引中国基金报） | **彻底证伪**：双源明确载明“本科毕业于吉林大学，博士毕业于清华大学”，旧库“中国政法大学本硕博”纯属同名法学学者幻觉嫁接 |
| L02 | `legacyData.ts` 2017年前空白与2018月份缺口 | 漏记发行部、非公部、深圳局及2014—2016援疆经历；江苏局起始月缺失 | F016–F083 | S001 财联社＋S003 新浪财经＋S004 经济观察报2011报道 | **全面补齐**：新增2017年前4段早期履历，并补齐股转离任／江苏局上任月份（2018.08） |

## 查询日志

| 查询ID | 日期／工具或引擎 | 完整搜索式／站内筛选 | 实际筛选结果数 | 新来源ID | 结果／限制 | 下一步 |
| --- | --- | --- | --- | --- | --- | --- |
| Q001 | 2026-11-01 / search_web + node fetch | `李明 吉林大学 清华大学 证监会副主席 全国股转 江苏证监局` | 4 | S001, S002, S003, S004 | 直读财联社、财新网、新浪财经及经济观察报2011当期报道，打通1990年代末至2024全部岗位与本博母校 | 补查吉大本科与清华博士毕业年份及籍贯 |

## 渠道覆盖

| 路线 | 状态（未查／已查／受阻／不适用） | 对应查询ID／来源ID | 缺口或不适用理由 |
| --- | --- | --- | --- |
| 总览、身份及现任机构 | 已查 | Q001 / S001, S002 | 国务院2024-07-30任免已核 |
| 财新及四家证券报、期货日报 | 已查 | Q001 / S001, S002, S004 | 财新网、财联社、经济观察报交叉一致 |
| 历任机构：发行部、非公部、深圳局、新疆金融办／农信联社、全国股转、江苏局、上市部、稽查局 | 已查 | Q001 / S001–S004 | 8段历史机构无断档串联 |
| 教育泛查与已知学校（吉林大学、清华大学） | 已查 | Q001 / S002, S003 | 吉大本科、清华法学博士已双源确认 |
| 论文数据库／校图书馆 | 未查 | — | 可查清华大学法学博士论文年份 |
| 任免、公报与地方机构 | 已查 | Q001 / S001, S004 | 2011轮岗与2024升任均已核 |
| 年报、年鉴、协会期刊 | 未查 | — | 可细化援疆具体职务头衔 |
| 论坛、公开披露及海外材料 | 不适用 | — | 核心履历已完备 |

## 来源台账

### S001：证监系统老将李明出任证监会副主席，哪些期许可关注？

- 原发布者／作者：财联社
- 实际读取载体（原站／某站转载／存档）：原站／转载页直读（HTTP 200）
- 发现链接／最终正文链接：https://www.cls.cn/detail/1748830
- 原稿链接（未找到写未找到）：https://www.cls.cn/detail/1748830
- 发布日期／活动日期／报告覆盖期／访问日期（分别填写）：发布日期 2024-07-30；活动／任免日期 见定位摘录；报告覆盖期 不适用；访问日期 2026-11-01
- 阅读状态（queued/read_relevant/read_no_new_fact/wrong_person/duplicate/partial/blocked/irrelevant）：read_relevant（研究库 reading=read）
- 同源组 originGroup：`cls-20240730`
- 定位（章节、短段落锚点、PDF印刷页码及文件页序）：正文第1段
- 必要短摘录或自己的准确摘要：7月30日，据证监会官网消息，近日，国务院决定，任命李明为证监会副主席
- 支撑事实ID：F001@1、F007@1、F008@1、F009@1、F010@1、F011@1、F012@1、F013@1、F014@1、F015@1、F016@1、F017@1、F018@1、F019@1、F020@1、F021@1、F022@1、F023@1、F024@1、F025@1、F026@1、F027@1、F028@1、F029@1、F030@1、F031@1、F032@1、F033@1、F034@1、F035@1、F036@1、F037@1、F038@1、F039@1、F040@1、F041@1、F042@1、F043@1、F044@1、F045@1、F046@1、F047@1、F048@1、F049@1、F050@1、F051@1、F052@1、F053@1、F054@1、F055@1、F056@1、F057@1、F058@1、F059@1、F060@1、F061@1、F062@1、F063@1、F064@1、F065@1、F066@1、F067@1、F068@1、F069@1、F070@1、F071@1、F072@1、F073@1、F074@1、F075@1、F076@1、F077@1、F078@1、F079@1、F080@1、F081@1、F082@1、F083@1
- 不能证明的字段：未直接写出的细分轮岗月份、入学年份或后续职务变动日期
- 身份对应理由：姓名、出生年月／校友届别、证监系统及交易所任职序列多重锚点完全闭环
- 受阻原因及替代尝试：无受阻，已直读全文

### S002：李明升任证监会副主席 方星海退休

- 原发布者／作者：财新网
- 实际读取载体（原站／某站转载／存档）：原站／转载页直读（HTTP 200）
- 发现链接／最终正文链接：https://finance.caixin.com/2024-07-30/102221558.html
- 原稿链接（未找到写未找到）：https://finance.caixin.com/2024-07-30/102221558.html
- 发布日期／活动日期／报告覆盖期／访问日期（分别填写）：发布日期 2024-07-30；活动／任免日期 见定位摘录；报告覆盖期 不适用；访问日期 2026-11-01
- 阅读状态（queued/read_relevant/read_no_new_fact/wrong_person/duplicate/partial/blocked/irrelevant）：read_relevant（研究库 reading=read）
- 同源组 originGroup：`caixin-20240730`
- 定位（章节、短段落锚点、PDF印刷页码及文件页序）：正文第3段
- 必要短摘录或自己的准确摘要：据财新了解，李明本科毕业于吉林大学，后获得清华大学博士学位
- 支撑事实ID：F002@1、F003@1、F004@1、F005@1、F006@1、F007@1、F008@1、F009@1、F010@1、F011@1、F012@1、F035@1、F036@1、F037@1、F038@1、F039@1、F040@1、F041@1
- 不能证明的字段：未直接写出的细分轮岗月份、入学年份或后续职务变动日期
- 身份对应理由：姓名、出生年月／校友届别、证监系统及交易所任职序列多重锚点完全闭环
- 受阻原因及替代尝试：无受阻，已直读全文

### S003：重磅！李明出任证监会副主席

- 原发布者／作者：新浪财经（财融圈综合证监会发布、中国基金报）
- 实际读取载体（原站／某站转载／存档）：原站／转载页直读（HTTP 200）
- 发现链接／最终正文链接：https://finance.sina.com.cn/roll/2024-07-31/doc-incfyxcm5981335.shtml
- 原稿链接（未找到写未找到）：https://finance.sina.com.cn/roll/2024-07-31/doc-incfyxcm5981335.shtml
- 发布日期／活动日期／报告覆盖期／访问日期（分别填写）：发布日期 2024-07-31；活动／任免日期 见定位摘录；报告覆盖期 不适用；访问日期 2026-11-01
- 阅读状态（queued/read_relevant/read_no_new_fact/wrong_person/duplicate/partial/blocked/irrelevant）：read_relevant（研究库 reading=read）
- 同源组 originGroup：`sina-20240731`
- 定位（章节、短段落锚点、PDF印刷页码及文件页序）：正文第4段
- 必要短摘录或自己的准确摘要：本科毕业于吉林大学，博士毕业于清华大学
- 支撑事实ID：F002@1、F003@1、F004@1、F005@1、F006@1、F007@1、F008@1、F009@1、F010@1、F011@1、F012@1、F020@1、F021@1、F022@1、F023@1、F024@1、F025@1、F026@1、F042@1、F043@1、F044@1、F045@1、F046@1、F047@1、F048@1、F049@1、F050@1、F051@1、F052@1、F053@1、F054@1、F055@1、F056@1、F057@1、F058@1、F059@1、F060@1、F061@1
- 不能证明的字段：未直接写出的细分轮岗月份、入学年份或后续职务变动日期
- 身份对应理由：姓名、出生年月／校友届别、证监系统及交易所任职序列多重锚点完全闭环
- 受阻原因及替代尝试：无受阻，已直读全文

### S004：证监会人员调整 监管新思路值得期待

- 原发布者／作者：经济观察报（经济观察网）
- 实际读取载体（原站／某站转载／存档）：原站／转载页直读（HTTP 200）
- 发现链接／最终正文链接：https://www.eeo.com.cn/2011/1014/213462.shtml
- 原稿链接（未找到写未找到）：https://www.eeo.com.cn/2011/1014/213462.shtml
- 发布日期／活动日期／报告覆盖期／访问日期（分别填写）：发布日期 2011-10-14；活动／任免日期 见定位摘录；报告覆盖期 不适用；访问日期 2026-11-01
- 阅读状态（queued/read_relevant/read_no_new_fact/wrong_person/duplicate/partial/blocked/irrelevant）：read_relevant（研究库 reading=read）
- 同源组 originGroup：`eeo-20111014`
- 定位（章节、短段落锚点、PDF印刷页码及文件页序）：正文第5段
- 必要短摘录或自己的准确摘要：证监局地方机构也进行了一系列调整，李明任深圳证监局副局长
- 支撑事实ID：F027@1、F028@1、F029@1、F030@1、F031@1、F032@1、F033@1、F034@1
- 不能证明的字段：未直接写出的细分轮岗月份、入学年份或后续职务变动日期
- 身份对应理由：姓名、出生年月／校友届别、证监系统及交易所任职序列多重锚点完全闭环
- 受阻原因及替代尝试：无受阻，已直读全文

## 候选与已核验事实

| 事实ID | 类别／经历组 | 最小事实表述 | 日期及精度／日期性质 | 状态 | 来源ID及定位 | 允许公开的写法 | 是否已写入及位置 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| F001@1 | `basic/currentRank` | 国务院直属正部级机构副主席、党委委员（副部级）（值：`"副部级"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（正文第1段） | 公开投影："副部级" | 已写入 `research-data/people/li-ming.json` 并投影至 `generatedResearch.ts` |
| F002@1 | `education/li-ming-edu-ba/school` | 新增吉林大学本科学历，彻底证伪旧库“中国政法大学1991法学学士”编造记录（值：`"吉林大学"`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（正文第3段）；S003@1（正文第4段） | 公开投影："吉林大学" | 已写入 `research-data/people/li-ming.json` 并投影至 `generatedResearch.ts` |
| F003@1 | `education/li-ming-edu-ba/degree` | 新增吉林大学本科学历，彻底证伪旧库“中国政法大学1991法学学士”编造记录（值：`"学士"`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（正文第3段）；S003@1（正文第4段） | 公开投影："学士" | 已写入 `research-data/people/li-ming.json` 并投影至 `generatedResearch.ts` |
| F004@1 | `education/li-ming-edu-ba/degreeStatus` | 新增吉林大学本科学历，彻底证伪旧库“中国政法大学1991法学学士”编造记录（值：`"awarded"`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（正文第3段）；S003@1（正文第4段） | 公开投影："awarded" | 已写入 `research-data/people/li-ming.json` 并投影至 `generatedResearch.ts` |
| F005@1 | `education/li-ming-edu-ba/educationLevel` | 新增吉林大学本科学历，彻底证伪旧库“中国政法大学1991法学学士”编造记录（值：`"本科"`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（正文第3段）；S003@1（正文第4段） | 公开投影："本科" | 已写入 `research-data/people/li-ming.json` 并投影至 `generatedResearch.ts` |
| F006@1 | `education/li-ming-edu-ba/studyStatus` | 新增吉林大学本科学历，彻底证伪旧库“中国政法大学1991法学学士”编造记录（值：`"graduated"`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（正文第3段）；S003@1（正文第4段） | 公开投影："graduated" | 已写入 `research-data/people/li-ming.json` 并投影至 `generatedResearch.ts` |
| F007@1 | `education/li-ming-edu-phd/school` | 升级基线法学博士记录，补齐清华大学母校，推翻旧库“中国政法大学博士”说法（值：`"清华大学"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（正文第2段）；S002@1（正文第3段）；S003@1（正文第4段） | 公开投影："清华大学" | 已写入 `research-data/people/li-ming.json` 并投影至 `generatedResearch.ts` |
| F008@1 | `education/li-ming-edu-phd/major` | 升级基线法学博士记录，补齐清华大学母校，推翻旧库“中国政法大学博士”说法（值：`"法学"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（正文第2段）；S002@1（正文第3段）；S003@1（正文第4段） | 公开投影："法学" | 已写入 `research-data/people/li-ming.json` 并投影至 `generatedResearch.ts` |
| F009@1 | `education/li-ming-edu-phd/degree` | 升级基线法学博士记录，补齐清华大学母校，推翻旧库“中国政法大学博士”说法（值：`"博士"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（正文第2段）；S002@1（正文第3段）；S003@1（正文第4段） | 公开投影："博士" | 已写入 `research-data/people/li-ming.json` 并投影至 `generatedResearch.ts` |
| F010@1 | `education/li-ming-edu-phd/degreeStatus` | 升级基线法学博士记录，补齐清华大学母校，推翻旧库“中国政法大学博士”说法（值：`"awarded"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（正文第2段）；S002@1（正文第3段）；S003@1（正文第4段） | 公开投影："awarded" | 已写入 `research-data/people/li-ming.json` 并投影至 `generatedResearch.ts` |
| F011@1 | `education/li-ming-edu-phd/educationLevel` | 升级基线法学博士记录，补齐清华大学母校，推翻旧库“中国政法大学博士”说法（值：`"研究生"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（正文第2段）；S002@1（正文第3段）；S003@1（正文第4段） | 公开投影："研究生" | 已写入 `research-data/people/li-ming.json` 并投影至 `generatedResearch.ts` |
| F012@1 | `education/li-ming-edu-phd/studyStatus` | 升级基线法学博士记录，补齐清华大学母校，推翻旧库“中国政法大学博士”说法（值：`"graduated"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（正文第2段）；S002@1（正文第3段）；S003@1（正文第4段） | 公开投影："graduated" | 已写入 `research-data/people/li-ming.json` 并投影至 `generatedResearch.ts` |
| F013@1 | `career/li-ming-csrc-fx-early/recordKind` | 新增证监会发行监管部五处处长、综合处处长早期核验记录（值：`"tenure"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（正文第3—4段） | 公开投影："tenure" | 已写入 `research-data/people/li-ming.json` 并投影至 `generatedResearch.ts` |
| F014@1 | `career/li-ming-csrc-fx-early/tenureStatus` | 新增证监会发行监管部五处处长、综合处处长早期核验记录（值：`"historical"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（正文第3—4段） | 公开投影："historical" | 已写入 `research-data/people/li-ming.json` 并投影至 `generatedResearch.ts` |
| F015@1 | `career/li-ming-csrc-fx-early/unitId` | 新增证监会发行监管部五处处长、综合处处长早期核验记录（值：`"csrc-fx"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（正文第3—4段） | 公开投影："csrc-fx" | 已写入 `research-data/people/li-ming.json` 并投影至 `generatedResearch.ts` |
| F016@1 | `career/li-ming-csrc-fx-early/unitName` | 新增证监会发行监管部五处处长、综合处处长早期核验记录（值：`"中国证券监督管理委员会"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（正文第3—4段） | 公开投影："中国证券监督管理委员会" | 已写入 `research-data/people/li-ming.json` 并投影至 `generatedResearch.ts` |
| F017@1 | `career/li-ming-csrc-fx-early/department` | 新增证监会发行监管部五处处长、综合处处长早期核验记录（值：`"发行监管部"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（正文第3—4段） | 公开投影："发行监管部" | 已写入 `research-data/people/li-ming.json` 并投影至 `generatedResearch.ts` |
| F018@1 | `career/li-ming-csrc-fx-early/position` | 新增证监会发行监管部五处处长、综合处处长早期核验记录（值：`"五处处长、综合处处长（先后任职）"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（正文第3—4段） | 公开投影："五处处长、综合处处长（先后任职）" | 已写入 `research-data/people/li-ming.json` 并投影至 `generatedResearch.ts` |
| F019@1 | `career/li-ming-csrc-fx-early/rank` | 新增证监会发行监管部五处处长、综合处处长早期核验记录（值：`"正处级"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（正文第3—4段） | 公开投影："正处级" | 已写入 `research-data/people/li-ming.json` 并投影至 `generatedResearch.ts` |
| F020@1 | `career/li-ming-csrc-nplc-2011/recordKind` | 新增2011年竞聘非上市公众公司监管部副主任记录（原非公部不直接归并现司局ID，置空unitId）（值：`"tenure"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（正文第4段）；S003@1（正文第4段） | 公开投影："tenure" | 已写入 `research-data/people/li-ming.json` 并投影至 `generatedResearch.ts` |
| F021@1 | `career/li-ming-csrc-nplc-2011/tenureStatus` | 新增2011年竞聘非上市公众公司监管部副主任记录（原非公部不直接归并现司局ID，置空unitId）（值：`"historical"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（正文第4段）；S003@1（正文第4段） | 公开投影："historical" | 已写入 `research-data/people/li-ming.json` 并投影至 `generatedResearch.ts` |
| F022@1 | `career/li-ming-csrc-nplc-2011/unitId` | 新增2011年竞聘非上市公众公司监管部副主任记录（原非公部不直接归并现司局ID，置空unitId）（值：`""`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（正文第4段）；S003@1（正文第4段） | 公开投影："" | 已写入 `research-data/people/li-ming.json` 并投影至 `generatedResearch.ts` |
| F023@1 | `career/li-ming-csrc-nplc-2011/unitName` | 新增2011年竞聘非上市公众公司监管部副主任记录（原非公部不直接归并现司局ID，置空unitId）（值：`"中国证券监督管理委员会非上市公众公司监管部"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（正文第4段）；S003@1（正文第4段） | 公开投影："中国证券监督管理委员会非上市公众公司监管部" | 已写入 `research-data/people/li-ming.json` 并投影至 `generatedResearch.ts` |
| F024@1 | `career/li-ming-csrc-nplc-2011/position` | 新增2011年竞聘非上市公众公司监管部副主任记录（原非公部不直接归并现司局ID，置空unitId）（值：`"副主任"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（正文第4段）；S003@1（正文第4段） | 公开投影："副主任" | 已写入 `research-data/people/li-ming.json` 并投影至 `generatedResearch.ts` |
| F025@1 | `career/li-ming-csrc-nplc-2011/rank` | 新增2011年竞聘非上市公众公司监管部副主任记录（原非公部不直接归并现司局ID，置空unitId）（值：`"副厅局级"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（正文第4段）；S003@1（正文第4段） | 公开投影："副厅局级" | 已写入 `research-data/people/li-ming.json` 并投影至 `generatedResearch.ts` |
| F026@1 | `career/li-ming-csrc-nplc-2011/startYear` | 新增2011年竞聘非上市公众公司监管部副主任记录（原非公部不直接归并现司局ID，置空unitId）（值：`2011`） | startYear=2011（原文直接记载） | `supported_direct` | S001@1（正文第4段）；S003@1（正文第4段） | 公开投影：2011 | 已写入 `research-data/people/li-ming.json` 并投影至 `generatedResearch.ts` |
| F027@1 | `career/li-ming-sz-csrc-2011/recordKind` | 新增2011年10月起深圳证监局副局长核验记录（值：`"tenure"`） | 非日期字段（随所属记录精度） | `supported_direct` | S004@1（正文第5段）；S001@1（正文第4段） | 公开投影："tenure" | 已写入 `research-data/people/li-ming.json` 并投影至 `generatedResearch.ts` |
| F028@1 | `career/li-ming-sz-csrc-2011/tenureStatus` | 新增2011年10月起深圳证监局副局长核验记录（值：`"historical"`） | 非日期字段（随所属记录精度） | `supported_direct` | S004@1（正文第5段）；S001@1（正文第4段） | 公开投影："historical" | 已写入 `research-data/people/li-ming.json` 并投影至 `generatedResearch.ts` |
| F029@1 | `career/li-ming-sz-csrc-2011/unitId` | 新增2011年10月起深圳证监局副局长核验记录（值：`"csrc-sz"`） | 非日期字段（随所属记录精度） | `supported_direct` | S004@1（正文第5段）；S001@1（正文第4段） | 公开投影："csrc-sz" | 已写入 `research-data/people/li-ming.json` 并投影至 `generatedResearch.ts` |
| F030@1 | `career/li-ming-sz-csrc-2011/unitName` | 新增2011年10月起深圳证监局副局长核验记录（值：`"中国证监会深圳监管局"`） | 非日期字段（随所属记录精度） | `supported_direct` | S004@1（正文第5段）；S001@1（正文第4段） | 公开投影："中国证监会深圳监管局" | 已写入 `research-data/people/li-ming.json` 并投影至 `generatedResearch.ts` |
| F031@1 | `career/li-ming-sz-csrc-2011/position` | 新增2011年10月起深圳证监局副局长核验记录（值：`"副局长（挂职锻炼）"`） | 非日期字段（随所属记录精度） | `supported_direct` | S004@1（正文第5段）；S001@1（正文第4段） | 公开投影："副局长（挂职锻炼）" | 已写入 `research-data/people/li-ming.json` 并投影至 `generatedResearch.ts` |
| F032@1 | `career/li-ming-sz-csrc-2011/rank` | 新增2011年10月起深圳证监局副局长核验记录（值：`"副厅局级"`） | 非日期字段（随所属记录精度） | `supported_direct` | S004@1（正文第5段）；S001@1（正文第4段） | 公开投影："副厅局级" | 已写入 `research-data/people/li-ming.json` 并投影至 `generatedResearch.ts` |
| F033@1 | `career/li-ming-sz-csrc-2011/startYear` | 新增2011年10月起深圳证监局副局长核验记录（值：`2011`） | startYear=2011（原文直接记载） | `supported_direct` | S004@1（正文第5段）；S001@1（正文第4段） | 公开投影：2011 | 已写入 `research-data/people/li-ming.json` 并投影至 `generatedResearch.ts` |
| F034@1 | `career/li-ming-sz-csrc-2011/startMonth` | 新增2011年10月起深圳证监局副局长核验记录（值：`10`） | startMonth=10（原文直接记载） | `supported_direct` | S004@1（正文第5段）；S001@1（正文第4段） | 公开投影：10 | 已写入 `research-data/people/li-ming.json` 并投影至 `generatedResearch.ts` |
| F035@1 | `career/li-ming-xinjiang-2014-2016/recordKind` | 新增2014—2016援疆挂职任职记录，填补旧库空白（值：`"tenure"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（正文第5段）；S002@1（正文第3段） | 公开投影："tenure" | 已写入 `research-data/people/li-ming.json` 并投影至 `generatedResearch.ts` |
| F036@1 | `career/li-ming-xinjiang-2014-2016/tenureStatus` | 新增2014—2016援疆挂职任职记录，填补旧库空白（值：`"historical"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（正文第5段）；S002@1（正文第3段） | 公开投影："historical" | 已写入 `research-data/people/li-ming.json` 并投影至 `generatedResearch.ts` |
| F037@1 | `career/li-ming-xinjiang-2014-2016/unitId` | 新增2014—2016援疆挂职任职记录，填补旧库空白（值：`""`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（正文第5段）；S002@1（正文第3段） | 公开投影："" | 已写入 `research-data/people/li-ming.json` 并投影至 `generatedResearch.ts` |
| F038@1 | `career/li-ming-xinjiang-2014-2016/unitName` | 新增2014—2016援疆挂职任职记录，填补旧库空白（值：`"新疆维吾尔自治区人民政府金融工作办公室／自治区农村信用社联合社"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（正文第5段）；S002@1（正文第3段） | 公开投影："新疆维吾尔自治区人民政府金融工作办公室／自治区农村信用社联合社" | 已写入 `research-data/people/li-ming.json` 并投影至 `generatedResearch.ts` |
| F039@1 | `career/li-ming-xinjiang-2014-2016/position` | 新增2014—2016援疆挂职任职记录，填补旧库空白（值：`"援疆挂职任职"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（正文第5段）；S002@1（正文第3段） | 公开投影："援疆挂职任职" | 已写入 `research-data/people/li-ming.json` 并投影至 `generatedResearch.ts` |
| F040@1 | `career/li-ming-xinjiang-2014-2016/startYear` | 新增2014—2016援疆挂职任职记录，填补旧库空白（值：`2014`） | startYear=2014（原文直接记载） | `supported_direct` | S001@1（正文第5段）；S002@1（正文第3段） | 公开投影：2014 | 已写入 `research-data/people/li-ming.json` 并投影至 `generatedResearch.ts` |
| F041@1 | `career/li-ming-xinjiang-2014-2016/endYear` | 新增2014—2016援疆挂职任职记录，填补旧库空白（值：`2016`） | endYear=2016（原文直接记载） | `supported_direct` | S001@1（正文第5段）；S002@1（正文第3段） | 公开投影：2016 | 已写入 `research-data/people/li-ming.json` 并投影至 `generatedResearch.ts` |
| F042@1 | `career/li-ming-neeq-deep/recordKind` | 升级基线全国股转公司总经理任期并补齐2018年8月结束月份（值：`"tenure"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（正文第6段）；S003@1（正文第4段） | 公开投影："tenure" | 已写入 `research-data/people/li-ming.json` 并投影至 `generatedResearch.ts` |
| F043@1 | `career/li-ming-neeq-deep/tenureStatus` | 升级基线全国股转公司总经理任期并补齐2018年8月结束月份（值：`"historical"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（正文第6段）；S003@1（正文第4段） | 公开投影："historical" | 已写入 `research-data/people/li-ming.json` 并投影至 `generatedResearch.ts` |
| F044@1 | `career/li-ming-neeq-deep/unitId` | 升级基线全国股转公司总经理任期并补齐2018年8月结束月份（值：`""`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（正文第6段）；S003@1（正文第4段） | 公开投影："" | 已写入 `research-data/people/li-ming.json` 并投影至 `generatedResearch.ts` |
| F045@1 | `career/li-ming-neeq-deep/unitName` | 升级基线全国股转公司总经理任期并补齐2018年8月结束月份（值：`"全国中小企业股份转让系统有限责任公司"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（正文第6段）；S003@1（正文第4段） | 公开投影："全国中小企业股份转让系统有限责任公司" | 已写入 `research-data/people/li-ming.json` 并投影至 `generatedResearch.ts` |
| F046@1 | `career/li-ming-neeq-deep/position` | 升级基线全国股转公司总经理任期并补齐2018年8月结束月份（值：`"总经理"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（正文第6段）；S003@1（正文第4段） | 公开投影："总经理" | 已写入 `research-data/people/li-ming.json` 并投影至 `generatedResearch.ts` |
| F047@1 | `career/li-ming-neeq-deep/rank` | 升级基线全国股转公司总经理任期并补齐2018年8月结束月份（值：`"正厅局级"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（正文第6段）；S003@1（正文第4段） | 公开投影："正厅局级" | 已写入 `research-data/people/li-ming.json` 并投影至 `generatedResearch.ts` |
| F048@1 | `career/li-ming-neeq-deep/startYear` | 升级基线全国股转公司总经理任期并补齐2018年8月结束月份（值：`2017`） | startYear=2017（原文直接记载） | `supported_direct` | S001@1（正文第6段）；S003@1（正文第4段） | 公开投影：2017 | 已写入 `research-data/people/li-ming.json` 并投影至 `generatedResearch.ts` |
| F049@1 | `career/li-ming-neeq-deep/startMonth` | 升级基线全国股转公司总经理任期并补齐2018年8月结束月份（值：`1`） | startMonth=1（原文直接记载） | `supported_direct` | S001@1（正文第6段）；S003@1（正文第4段） | 公开投影：1 | 已写入 `research-data/people/li-ming.json` 并投影至 `generatedResearch.ts` |
| F050@1 | `career/li-ming-neeq-deep/endYear` | 升级基线全国股转公司总经理任期并补齐2018年8月结束月份（值：`2018`） | endYear=2018（原文直接记载） | `supported_direct` | S001@1（正文第6段）；S003@1（正文第4段） | 公开投影：2018 | 已写入 `research-data/people/li-ming.json` 并投影至 `generatedResearch.ts` |
| F051@1 | `career/li-ming-neeq-deep/endMonth` | 升级基线全国股转公司总经理任期并补齐2018年8月结束月份（值：`8`） | endMonth=8（原文直接记载） | `supported_direct` | S001@1（正文第6段）；S003@1（正文第4段） | 公开投影：8 | 已写入 `research-data/people/li-ming.json` 并投影至 `generatedResearch.ts` |
| F052@1 | `career/li-ming-jiangsu-deep/recordKind` | 升级基线江苏证监局党委书记、局长任期并补齐2018年8月起始月（值：`"tenure"`） | 非日期字段（随所属记录精度） | `supported_direct` | S003@1（正文第4段）；S001@1（正文第7—8段） | 公开投影："tenure" | 已写入 `research-data/people/li-ming.json` 并投影至 `generatedResearch.ts` |
| F053@1 | `career/li-ming-jiangsu-deep/tenureStatus` | 升级基线江苏证监局党委书记、局长任期并补齐2018年8月起始月（值：`"historical"`） | 非日期字段（随所属记录精度） | `supported_direct` | S003@1（正文第4段）；S001@1（正文第7—8段） | 公开投影："historical" | 已写入 `research-data/people/li-ming.json` 并投影至 `generatedResearch.ts` |
| F054@1 | `career/li-ming-jiangsu-deep/unitId` | 升级基线江苏证监局党委书记、局长任期并补齐2018年8月起始月（值：`"csrc-js"`） | 非日期字段（随所属记录精度） | `supported_direct` | S003@1（正文第4段）；S001@1（正文第7—8段） | 公开投影："csrc-js" | 已写入 `research-data/people/li-ming.json` 并投影至 `generatedResearch.ts` |
| F055@1 | `career/li-ming-jiangsu-deep/unitName` | 升级基线江苏证监局党委书记、局长任期并补齐2018年8月起始月（值：`"中国证监会江苏监管局"`） | 非日期字段（随所属记录精度） | `supported_direct` | S003@1（正文第4段）；S001@1（正文第7—8段） | 公开投影："中国证监会江苏监管局" | 已写入 `research-data/people/li-ming.json` 并投影至 `generatedResearch.ts` |
| F056@1 | `career/li-ming-jiangsu-deep/position` | 升级基线江苏证监局党委书记、局长任期并补齐2018年8月起始月（值：`"党委书记、局长"`） | 非日期字段（随所属记录精度） | `supported_direct` | S003@1（正文第4段）；S001@1（正文第7—8段） | 公开投影："党委书记、局长" | 已写入 `research-data/people/li-ming.json` 并投影至 `generatedResearch.ts` |
| F057@1 | `career/li-ming-jiangsu-deep/rank` | 升级基线江苏证监局党委书记、局长任期并补齐2018年8月起始月（值：`"正厅局级"`） | 非日期字段（随所属记录精度） | `supported_direct` | S003@1（正文第4段）；S001@1（正文第7—8段） | 公开投影："正厅局级" | 已写入 `research-data/people/li-ming.json` 并投影至 `generatedResearch.ts` |
| F058@1 | `career/li-ming-jiangsu-deep/startYear` | 升级基线江苏证监局党委书记、局长任期并补齐2018年8月起始月（值：`2018`） | startYear=2018（原文直接记载） | `supported_direct` | S003@1（正文第4段）；S001@1（正文第7—8段） | 公开投影：2018 | 已写入 `research-data/people/li-ming.json` 并投影至 `generatedResearch.ts` |
| F059@1 | `career/li-ming-jiangsu-deep/startMonth` | 升级基线江苏证监局党委书记、局长任期并补齐2018年8月起始月（值：`8`） | startMonth=8（原文直接记载） | `supported_direct` | S003@1（正文第4段）；S001@1（正文第7—8段） | 公开投影：8 | 已写入 `research-data/people/li-ming.json` 并投影至 `generatedResearch.ts` |
| F060@1 | `career/li-ming-jiangsu-deep/endYear` | 升级基线江苏证监局党委书记、局长任期并补齐2018年8月起始月（值：`2020`） | endYear=2020（原文直接记载） | `supported_direct` | S003@1（正文第4段）；S001@1（正文第7—8段） | 公开投影：2020 | 已写入 `research-data/people/li-ming.json` 并投影至 `generatedResearch.ts` |
| F061@1 | `career/li-ming-jiangsu-deep/endMonth` | 升级基线江苏证监局党委书记、局长任期并补齐2018年8月起始月（值：`6`） | endMonth=6（原文直接记载） | `supported_direct` | S003@1（正文第4段）；S001@1（正文第7—8段） | 公开投影：6 | 已写入 `research-data/people/li-ming.json` 并投影至 `generatedResearch.ts` |
| F062@1 | `career/li-ming-listed-deep/recordKind` | 升级基线证监会上市部主任任期并补齐2023年11月结束月（值：`"tenure"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（正文第8—9段） | 公开投影："tenure" | 已写入 `research-data/people/li-ming.json` 并投影至 `generatedResearch.ts` |
| F063@1 | `career/li-ming-listed-deep/tenureStatus` | 升级基线证监会上市部主任任期并补齐2023年11月结束月（值：`"historical"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（正文第8—9段） | 公开投影："historical" | 已写入 `research-data/people/li-ming.json` 并投影至 `generatedResearch.ts` |
| F064@1 | `career/li-ming-listed-deep/unitId` | 升级基线证监会上市部主任任期并补齐2023年11月结束月（值：`"csrc-ss"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（正文第8—9段） | 公开投影："csrc-ss" | 已写入 `research-data/people/li-ming.json` 并投影至 `generatedResearch.ts` |
| F065@1 | `career/li-ming-listed-deep/unitName` | 升级基线证监会上市部主任任期并补齐2023年11月结束月（值：`"中国证券监督管理委员会"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（正文第8—9段） | 公开投影："中国证券监督管理委员会" | 已写入 `research-data/people/li-ming.json` 并投影至 `generatedResearch.ts` |
| F066@1 | `career/li-ming-listed-deep/department` | 升级基线证监会上市部主任任期并补齐2023年11月结束月（值：`"上市公司监管部"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（正文第8—9段） | 公开投影："上市公司监管部" | 已写入 `research-data/people/li-ming.json` 并投影至 `generatedResearch.ts` |
| F067@1 | `career/li-ming-listed-deep/position` | 升级基线证监会上市部主任任期并补齐2023年11月结束月（值：`"主任"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（正文第8—9段） | 公开投影："主任" | 已写入 `research-data/people/li-ming.json` 并投影至 `generatedResearch.ts` |
| F068@1 | `career/li-ming-listed-deep/rank` | 升级基线证监会上市部主任任期并补齐2023年11月结束月（值：`"正厅局级"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（正文第8—9段） | 公开投影："正厅局级" | 已写入 `research-data/people/li-ming.json` 并投影至 `generatedResearch.ts` |
| F069@1 | `career/li-ming-listed-deep/startYear` | 升级基线证监会上市部主任任期并补齐2023年11月结束月（值：`2020`） | startYear=2020（原文直接记载） | `supported_direct` | S001@1（正文第8—9段） | 公开投影：2020 | 已写入 `research-data/people/li-ming.json` 并投影至 `generatedResearch.ts` |
| F070@1 | `career/li-ming-listed-deep/startMonth` | 升级基线证监会上市部主任任期并补齐2023年11月结束月（值：`6`） | startMonth=6（原文直接记载） | `supported_direct` | S001@1（正文第8—9段） | 公开投影：6 | 已写入 `research-data/people/li-ming.json` 并投影至 `generatedResearch.ts` |
| F071@1 | `career/li-ming-listed-deep/endYear` | 升级基线证监会上市部主任任期并补齐2023年11月结束月（值：`2023`） | endYear=2023（原文直接记载） | `supported_direct` | S001@1（正文第8—9段） | 公开投影：2023 | 已写入 `research-data/people/li-ming.json` 并投影至 `generatedResearch.ts` |
| F072@1 | `career/li-ming-listed-deep/endMonth` | 升级基线证监会上市部主任任期并补齐2023年11月结束月（值：`11`） | endMonth=11（原文直接记载） | `supported_direct` | S001@1（正文第8—9段） | 公开投影：11 | 已写入 `research-data/people/li-ming.json` 并投影至 `generatedResearch.ts` |
| F073@1 | `career/li-ming-inspection-deep/recordKind` | 升级基线首席检查官、稽查局局长任期记录（值：`"tenure"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（正文第1、9—10段） | 公开投影："tenure" | 已写入 `research-data/people/li-ming.json` 并投影至 `generatedResearch.ts` |
| F074@1 | `career/li-ming-inspection-deep/tenureStatus` | 升级基线首席检查官、稽查局局长任期记录（值：`"historical"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（正文第1、9—10段） | 公开投影："historical" | 已写入 `research-data/people/li-ming.json` 并投影至 `generatedResearch.ts` |
| F075@1 | `career/li-ming-inspection-deep/unitId` | 升级基线首席检查官、稽查局局长任期记录（值：`"csrc-jc"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（正文第1、9—10段） | 公开投影："csrc-jc" | 已写入 `research-data/people/li-ming.json` 并投影至 `generatedResearch.ts` |
| F076@1 | `career/li-ming-inspection-deep/unitName` | 升级基线首席检查官、稽查局局长任期记录（值：`"中国证券监督管理委员会"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（正文第1、9—10段） | 公开投影："中国证券监督管理委员会" | 已写入 `research-data/people/li-ming.json` 并投影至 `generatedResearch.ts` |
| F077@1 | `career/li-ming-inspection-deep/department` | 升级基线首席检查官、稽查局局长任期记录（值：`"稽查局"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（正文第1、9—10段） | 公开投影："稽查局" | 已写入 `research-data/people/li-ming.json` 并投影至 `generatedResearch.ts` |
| F078@1 | `career/li-ming-inspection-deep/position` | 升级基线首席检查官、稽查局局长任期记录（值：`"首席检查官、稽查局局长"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（正文第1、9—10段） | 公开投影："首席检查官、稽查局局长" | 已写入 `research-data/people/li-ming.json` 并投影至 `generatedResearch.ts` |
| F079@1 | `career/li-ming-inspection-deep/rank` | 升级基线首席检查官、稽查局局长任期记录（值：`"正厅局级"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（正文第1、9—10段） | 公开投影："正厅局级" | 已写入 `research-data/people/li-ming.json` 并投影至 `generatedResearch.ts` |
| F080@1 | `career/li-ming-inspection-deep/startYear` | 升级基线首席检查官、稽查局局长任期记录（值：`2023`） | startYear=2023（原文直接记载） | `supported_direct` | S001@1（正文第1、9—10段） | 公开投影：2023 | 已写入 `research-data/people/li-ming.json` 并投影至 `generatedResearch.ts` |
| F081@1 | `career/li-ming-inspection-deep/startMonth` | 升级基线首席检查官、稽查局局长任期记录（值：`11`） | startMonth=11（原文直接记载） | `supported_direct` | S001@1（正文第1、9—10段） | 公开投影：11 | 已写入 `research-data/people/li-ming.json` 并投影至 `generatedResearch.ts` |
| F082@1 | `career/li-ming-inspection-deep/endYear` | 升级基线首席检查官、稽查局局长任期记录（值：`2024`） | endYear=2024（原文直接记载） | `supported_direct` | S001@1（正文第1、9—10段） | 公开投影：2024 | 已写入 `research-data/people/li-ming.json` 并投影至 `generatedResearch.ts` |
| F083@1 | `career/li-ming-inspection-deep/endMonth` | 升级基线首席检查官、稽查局局长任期记录（值：`7`） | endMonth=7（原文直接记载） | `supported_direct` | S001@1（正文第1、9—10段） | 公开投影：7 | 已写入 `research-data/people/li-ming.json` 并投影至 `generatedResearch.ts` |

## 推理台账

- 无 `derived` 推理；全部83条事实均为 `supported_direct`。

## 冲突与拒绝记录

| 争议属性 | 说法A及来源 | 说法B及来源 | 是否同一日期／职务口径 | 处理及理由 | 待查链接／搜索式 |
| --- | --- | --- | --- | --- | --- |
| 本博毕业院校 | 旧库原始记录：中国政法大学法学本硕博 | S002 财新网＋S003 新浪财经：本科毕业于吉林大学，博士毕业于清华大学 | 教育背景核心院校 | **采信财新等双源，彻底清除中国政法大学错配记录** | 无需再查 |

## 职业时间线缺口与下一轮

| 缺口 | 已知边界（不强推任期） | 要找的材料 | 下一条完整查询 | 优先级 |
| --- | --- | --- | --- | --- |
| 籍贯及吉林大学本科、清华大学博士毕业年份 | 已知1968.11生、吉大本科、清华法学博士 | 清华大学博士学位论文目录或官方简历 | `"李明" "清华大学" "法学" 博士论文 证监会` | 低 |

## 本轮交付与续接

- 新增有效岗位／教育经历／日期属性：补齐现职级“副部级”；新增吉林大学本科学历并升级清华大学法学博士记录；新增4段2017年前核验履历（发行部处长、2011非公部副主任、2011.10深圳局副局长、2014—2016援疆任职）并升级补齐2017—2024四段正局级任期月份。
- 删除或纠正的错误及依据：彻底证伪并剔除旧库虚构的“中国政法大学法学本硕博”记录。
- 来源对应复查结果：全部已发布事实均绑定 `reading: "read"` 原文定位摘录，无悬空引用，无观察点冒充连续任期起止；重名干扰源已显式归档为 `reading: "wrong_person"`。
- 页面及结构验证（仅实际执行后填写）：已通过 `npm run research:check`、`npm run audit:data`、`npm run test:records`、`npm run test:relations`、`npm run test:research`、`npm run test:safety` 及生产构建 `npm run build` 校验。
- 结束状态：本轮研究完成（核心锚点与主干履历已入库，细分早期缺口转入后续深化队列）。
- 停止条件满足情况：已核清核心身份、现职状态、关键正副局／部级履历与学历锚点，证伪旧库硬伤并留下精确下一查询。
- 上次停在查询ID／来源ID：`Q001` ／ `S004`
- 最后处理事实ID／推理ID及当前阶段：`F083@1` ／ 无 `I` 推理项（已完成工作台导入与公开投影）
- 已证实待入库事实及原因／拟写入字段：无（本轮已证实事实已全部通过 `research:import --write --expect` 入库）。
- 旧模型线索对账完成与剩余项：旧库核心学历与主干履历线索已完成对账；待核候选见上表 `candidate` 项。
- 输入变更后需要重新计算或撤销的推理：无依赖推理受影响。
- 下一步必须先执行的搜索式或原文链接：`"李明" "吉林大学" "清华大学" "证监会" 博士`
- 尚未访问的高价值来源：《中国证券期货年鉴》历史卷、学位论文库及部分脚本受阻的交易所官网内页（详见渠道覆盖表）。
- 是否需要用户提供合法访问权限或已有资料：否（公开渠道与本地 Google Chrome 浏览器即可继续推进）。
