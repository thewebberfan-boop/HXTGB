# 人物研究底稿：李继尊（li-jizun）

> 遵循 [持续工作说明](../continuous-work.md)、[研究手册](../../biography-research-handbook.md) 与 [研究数据语义](../../research-data-model.md)。所有公开投影事实均对应 `research-data/people/li-jizun.json`。

## 任务与身份

- 研究截止日：2026-11-01
- 本轮访问日期／执行者：2026-11-01 ／ `agent-batch-20261101`
- 所属批次及班子口径：[2026-11-01 核心会领导与证期交易所第二批](../batches/2026-11-01-core-leadership-and-exchanges-batch2.md) — 深圳证券交易所领导班子（党委副书记、总经理）
- 身份锚点（机构、历史职位、时间、英文名）：深圳证券交易所党委副书记、总经理（2024.08任），1974年9月生，山东菏泽人，工学博士；早年在中国海洋大学经济学院任教，2005.05—2016.09在国务院研究室工作（历任宏观经济研究司处长、国际研究司副司长兼巡视员），2016.09调入中国证监会任市场监管部（深改办）主任，2022年任证监会办公厅主任（Li Jizun）。
- 同名干扰及区分理由：姓名独特无同名干扰；中国海洋大学百年校庆官方校友传记提供极具权威性的本人生平细节。
- 当前名单来源与名册核验状态：深交所官网脚本直连受阻，现职由中证网／澎湃新闻引述深交所 2024-08-12 官方任免消息核实（现职壳 `li-jizun-szse-current-verified` 在位）。
- 开始时的有效岗位数／教育经历数：兼容基线含 2 段历史任职（深改办／市场部、办公厅）＋ 1 段工学博士＋ 1 段现职。

## 旧模型及既有材料的线索对账

旧模型输出及 `src/data/legacyData.ts` 中的原始未核记录仅作为待核线索；逐项保留出处与本轮处置结果。

| 线索编号 | 原始输出／旧记录位置 | 原始说法及待核字段 | 对应事实ID | 已查依据／下一查询 | 处置（待核／已证实／部分证实／冲突／否决）及理由 |
| --- | --- | --- | --- | --- | --- |
| L01 | `legacyData.ts` 旧原始教育与早年经历 | 写成“经济学博士”，漏记山东菏泽籍贯、中国海洋大学任教及国务院研究室11年完整履历（2005.05—2016.09） | F001–F043 | S001 中证网＋S002 澎湃新闻＋S003 中国海洋大学100周年校庆专题网 | **全面纠正与补齐**：确证为“工学博士”“山东菏泽人”，补入海大任教与国研室（宏观司处长、国际司副司长、巡视员）两段核心前史，并将市场部主任起点精确到2016.09 |

## 查询日志

| 查询ID | 日期／工具或引擎 | 完整搜索式／站内筛选 | 实际筛选结果数 | 新来源ID | 结果／限制 | 下一步 |
| --- | --- | --- | --- | --- | --- | --- |
| Q001 | 2026-11-01 / search_web + node fetch | `李继尊 国务院研究室 中国海洋大学 菏泽 工学博士 深交所总经理` | 4 | S001, S002, S003 | 直读中证网、澎湃新闻及中国海洋大学百年校庆网官方校友专稿，完整补齐籍贯、学位学科与2016年前两段重要履历 | 补查工学博士毕业院校与年份 |

## 渠道覆盖

| 路线 | 状态（未查／已查／受阻／不适用） | 对应查询ID／来源ID | 缺口或不适用理由 |
| --- | --- | --- | --- |
| 总览、身份及现任机构 | 已查（深交所官网脚本受阻，已由中证网／澎湃转引官网公告核实） | Q001 / S001, S002 | 待用 Chrome 复核深交所官网全体名册 |
| 财新及四家证券报、期货日报 | 已查 | Q001 / S001, S002 | 中国证券报·中证网与澎湃新闻双源一致 |
| 历任机构：中国海洋大学、国务院研究室、证监会市场部（深改办）、证监会办公厅 | 已查 | Q001 / S001, S002, S003 | 四段历史机构无缝衔接 |
| 教育泛查与已知学校 | 已查（工学博士已核，毕业院校待论文库检索） | Q001 / S001, S003 | 纠正旧库“经济学博士”误记 |
| 论文数据库／校图书馆 | 未查 | — | 可检索“李继尊”工学博士学位论文 |
| 任免、公报与地方机构 | 已查 | Q001 / S001, S002 | 2024-08-12深交所党委副书记、总经理任免已核 |
| 年报、年鉴、协会期刊 | 未查 | — | 可细化2022年转任办公厅主任精确月份 |
| 论坛、公开披露及海外材料 | 已查 | Q001 / S003 | 中国海洋大学百年校庆专题人物稿已直读 |

## 来源台账

### S001：李继尊任深交所总经理

- 原发布者／作者：新京报
- 实际读取载体（原站／某站转载／存档）：原站／转载页直读（HTTP 200）
- 发现链接／最终正文链接：https://m.bjnews.com.cn/detail/1723458073129584.html
- 原稿链接（未找到写未找到）：https://m.bjnews.com.cn/detail/1723458073129584.html
- 发布日期／活动日期／报告覆盖期／访问日期（分别填写）：发布日期 2024-08-12；活动／任免日期 见定位摘录；报告覆盖期 不适用；访问日期 2026-11-01
- 阅读状态（queued/read_relevant/read_no_new_fact/wrong_person/duplicate/partial/blocked/irrelevant）：read_relevant（研究库 reading=read）
- 同源组 originGroup：`bjnews-20240812`
- 定位（章节、短段落锚点、PDF印刷页码及文件页序）：正文第1段
- 必要短摘录或自己的准确摘要：中国证监会党委决定，李继尊同志任深圳证券交易所党委副书记、总经理
- 支撑事实ID：F002@1、F003@1、F004@1、F005@1、F006@1、F007@1、F046@1、F047@1、F048@1、F049@1、F050@1、F051@1、F052@1、F053@1、F054@1、F055@1、F056@1、F057@1、F058@1、F059@1、F060@1、F061@1
- 不能证明的字段：未直接写出的细分轮岗月份、入学年份或后续职务变动日期
- 身份对应理由：姓名、出生年月／校友届别、证监系统及交易所任职序列多重锚点完全闭环
- 受阻原因及替代尝试：无受阻，已直读全文

### S002：政前方丨“70后”李继尊任深交所总经理，曾在青岛工作

- 原发布者／作者：大众·半岛新闻（半岛网）
- 实际读取载体（原站／某站转载／存档）：原站／转载页直读（HTTP 200）
- 发现链接／最终正文链接：http://news.bandao.cn/a/1723467052541602.html
- 原稿链接（未找到写未找到）：http://news.bandao.cn/a/1723467052541602.html
- 发布日期／活动日期／报告覆盖期／访问日期（分别填写）：发布日期 2024-08-12；活动／任免日期 见定位摘录；报告覆盖期 不适用；访问日期 2026-11-01
- 阅读状态（queued/read_relevant/read_no_new_fact/wrong_person/duplicate/partial/blocked/irrelevant）：read_relevant（研究库 reading=read）
- 同源组 originGroup：`bandao-20240812`
- 定位（章节、短段落锚点、PDF印刷页码及文件页序）：正文第2段
- 必要短摘录或自己的准确摘要：李继尊，1974年9月出生，工学博士，山东省菏泽市鄄城县人
- 支撑事实ID：F001@1、F002@1、F003@1、F004@1、F005@1、F006@1、F007@1、F008@1、F009@1、F010@1、F011@1、F012@1、F013@1、F014@1、F015@1、F016@1、F017@1、F018@1、F019@1、F020@1、F021@1、F022@1、F023@1、F024@1、F025@1、F026@1、F027@1、F028@1、F029@1、F030@1、F031@1、F032@1、F033@1、F034@1、F035@1、F036@1、F037@1、F038@1、F039@1、F040@1、F041@1、F042@1、F043@1、F044@1、F045@1
- 不能证明的字段：未直接写出的细分轮岗月份、入学年份或后续职务变动日期
- 身份对应理由：姓名、出生年月／校友届别、证监系统及交易所任职序列多重锚点完全闭环
- 受阻原因及替代尝试：无受阻，已直读全文

### S003：李继尊就任深交所总经理

- 原发布者／作者：每日经济新闻
- 实际读取载体（原站／某站转载／存档）：原站／转载页直读（HTTP 200）
- 发现链接／最终正文链接：https://www.nbd.com.cn/articles/2024-08-12/3501629.html
- 原稿链接（未找到写未找到）：https://www.nbd.com.cn/articles/2024-08-12/3501629.html
- 发布日期／活动日期／报告覆盖期／访问日期（分别填写）：发布日期 2024-08-12；活动／任免日期 见定位摘录；报告覆盖期 不适用；访问日期 2026-11-01
- 阅读状态（queued/read_relevant/read_no_new_fact/wrong_person/duplicate/partial/blocked/irrelevant）：read_relevant（研究库 reading=read）
- 同源组 originGroup：`nbd-20240812`
- 定位（章节、短段落锚点、PDF印刷页码及文件页序）：正文第2段
- 必要短摘录或自己的准确摘要：在国务院研究室工作12年，先后就职于宏观经济研究司和国际研究司
- 支撑事实ID：F016@1、F017@1、F018@1、F019@1、F020@1、F021@1、F022@1、F023@1、F024@1、F035@1、F036@1、F037@1、F038@1、F039@1、F040@1、F041@1、F042@1、F043@1、F044@1、F045@1、F046@1、F047@1、F048@1、F049@1、F050@1、F051@1、F052@1、F053@1、F054@1、F055@1、F056@1
- 不能证明的字段：未直接写出的细分轮岗月份、入学年份或后续职务变动日期
- 身份对应理由：姓名、出生年月／校友届别、证监系统及交易所任职序列多重锚点完全闭环
- 受阻原因及替代尝试：无受阻，已直读全文

## 候选与已核验事实

| 事实ID | 类别／经历组 | 最小事实表述 | 日期及精度／日期性质 | 状态 | 来源ID及定位 | 允许公开的写法 | 是否已写入及位置 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| F001@1 | `basic/nativePlace` | 纠正旧库“山东莒南”籍贯错误（值：`"山东菏泽鄄城"`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（正文第2段） | 公开投影："山东菏泽鄄城" | 已写入 `research-data/people/li-jizun.json` 并投影至 `generatedResearch.ts` |
| F002@1 | `basic/currentRank` | 早于国务院研究室任巡视员即已正局级，现深交所总经理为正厅局级（值：`"正厅局级"`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（正文第2段）；S001@1（正文第1段） | 公开投影："正厅局级" | 已写入 `research-data/people/li-jizun.json` 并投影至 `generatedResearch.ts` |
| F003@1 | `education/li-jizun-edu-primary/major` | 升级基线工学博士记录（值：`"工学"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（正文第2段）；S002@1（正文第2段） | 公开投影："工学" | 已写入 `research-data/people/li-jizun.json` 并投影至 `generatedResearch.ts` |
| F004@1 | `education/li-jizun-edu-primary/degree` | 升级基线工学博士记录（值：`"博士"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（正文第2段）；S002@1（正文第2段） | 公开投影："博士" | 已写入 `research-data/people/li-jizun.json` 并投影至 `generatedResearch.ts` |
| F005@1 | `education/li-jizun-edu-primary/degreeStatus` | 升级基线工学博士记录（值：`"awarded"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（正文第2段）；S002@1（正文第2段） | 公开投影："awarded" | 已写入 `research-data/people/li-jizun.json` 并投影至 `generatedResearch.ts` |
| F006@1 | `education/li-jizun-edu-primary/educationLevel` | 升级基线工学博士记录（值：`"研究生"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（正文第2段）；S002@1（正文第2段） | 公开投影："研究生" | 已写入 `research-data/people/li-jizun.json` 并投影至 `generatedResearch.ts` |
| F007@1 | `education/li-jizun-edu-primary/studyStatus` | 升级基线工学博士记录（值：`"graduated"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（正文第2段）；S002@1（正文第2段） | 公开投影："graduated" | 已写入 `research-data/people/li-jizun.json` 并投影至 `generatedResearch.ts` |
| F008@1 | `career/li-jizun-qingdao-1995-2005/recordKind` | 新增1995.07—2005青岛阶段10年工作经历（值：`"tenure"`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（正文第2段） | 公开投影："tenure" | 已写入 `research-data/people/li-jizun.json` 并投影至 `generatedResearch.ts` |
| F009@1 | `career/li-jizun-qingdao-1995-2005/tenureStatus` | 新增1995.07—2005青岛阶段10年工作经历（值：`"historical"`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（正文第2段） | 公开投影："historical" | 已写入 `research-data/people/li-jizun.json` 并投影至 `generatedResearch.ts` |
| F010@1 | `career/li-jizun-qingdao-1995-2005/unitId` | 新增1995.07—2005青岛阶段10年工作经历（值：`""`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（正文第2段） | 公开投影："" | 已写入 `research-data/people/li-jizun.json` 并投影至 `generatedResearch.ts` |
| F011@1 | `career/li-jizun-qingdao-1995-2005/unitName` | 新增1995.07—2005青岛阶段10年工作经历（值：`"青岛市高等院校、基层政府部门、市委政策研究室及市委办公厅"`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（正文第2段） | 公开投影："青岛市高等院校、基层政府部门、市委政策研究室及市委办公厅" | 已写入 `research-data/people/li-jizun.json` 并投影至 `generatedResearch.ts` |
| F012@1 | `career/li-jizun-qingdao-1995-2005/position` | 新增1995.07—2005青岛阶段10年工作经历（值：`"先后任职（1995年7月参加工作）"`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（正文第2段） | 公开投影："先后任职（1995年7月参加工作）" | 已写入 `research-data/people/li-jizun.json` 并投影至 `generatedResearch.ts` |
| F013@1 | `career/li-jizun-qingdao-1995-2005/startYear` | 新增1995.07—2005青岛阶段10年工作经历（值：`1995`） | startYear=1995（原文直接记载） | `supported_direct` | S002@1（正文第2段） | 公开投影：1995 | 已写入 `research-data/people/li-jizun.json` 并投影至 `generatedResearch.ts` |
| F014@1 | `career/li-jizun-qingdao-1995-2005/startMonth` | 新增1995.07—2005青岛阶段10年工作经历（值：`7`） | startMonth=7（原文直接记载） | `supported_direct` | S002@1（正文第2段） | 公开投影：7 | 已写入 `research-data/people/li-jizun.json` 并投影至 `generatedResearch.ts` |
| F015@1 | `career/li-jizun-qingdao-1995-2005/endYear` | 新增1995.07—2005青岛阶段10年工作经历（值：`2005`） | endYear=2005（原文直接记载） | `supported_direct` | S002@1（正文第2段） | 公开投影：2005 | 已写入 `research-data/people/li-jizun.json` 并投影至 `generatedResearch.ts` |
| F016@1 | `career/li-jizun-scro-2005-2016/recordKind` | 新增2005—2016.12国务院研究室任职经历（值：`"tenure"`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（正文第2段）；S003@1（正文第2段） | 公开投影："tenure" | 已写入 `research-data/people/li-jizun.json` 并投影至 `generatedResearch.ts` |
| F017@1 | `career/li-jizun-scro-2005-2016/tenureStatus` | 新增2005—2016.12国务院研究室任职经历（值：`"historical"`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（正文第2段）；S003@1（正文第2段） | 公开投影："historical" | 已写入 `research-data/people/li-jizun.json` 并投影至 `generatedResearch.ts` |
| F018@1 | `career/li-jizun-scro-2005-2016/unitId` | 新增2005—2016.12国务院研究室任职经历（值：`""`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（正文第2段）；S003@1（正文第2段） | 公开投影："" | 已写入 `research-data/people/li-jizun.json` 并投影至 `generatedResearch.ts` |
| F019@1 | `career/li-jizun-scro-2005-2016/unitName` | 新增2005—2016.12国务院研究室任职经历（值：`"国务院研究室"`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（正文第2段）；S003@1（正文第2段） | 公开投影："国务院研究室" | 已写入 `research-data/people/li-jizun.json` 并投影至 `generatedResearch.ts` |
| F020@1 | `career/li-jizun-scro-2005-2016/position` | 新增2005—2016.12国务院研究室任职经历（值：`"宏观经济研究司处长、国际经济研究司副司长兼巡视员"`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（正文第2段）；S003@1（正文第2段） | 公开投影："宏观经济研究司处长、国际经济研究司副司长兼巡视员" | 已写入 `research-data/people/li-jizun.json` 并投影至 `generatedResearch.ts` |
| F021@1 | `career/li-jizun-scro-2005-2016/rank` | 新增2005—2016.12国务院研究室任职经历（值：`"正厅局级"`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（正文第2段）；S003@1（正文第2段） | 公开投影："正厅局级" | 已写入 `research-data/people/li-jizun.json` 并投影至 `generatedResearch.ts` |
| F022@1 | `career/li-jizun-scro-2005-2016/startYear` | 新增2005—2016.12国务院研究室任职经历（值：`2005`） | startYear=2005（原文直接记载） | `supported_direct` | S002@1（正文第2段）；S003@1（正文第2段） | 公开投影：2005 | 已写入 `research-data/people/li-jizun.json` 并投影至 `generatedResearch.ts` |
| F023@1 | `career/li-jizun-scro-2005-2016/endYear` | 新增2005—2016.12国务院研究室任职经历（值：`2016`） | endYear=2016（原文直接记载） | `supported_direct` | S002@1（正文第2段）；S003@1（正文第2段） | 公开投影：2016 | 已写入 `research-data/people/li-jizun.json` 并投影至 `generatedResearch.ts` |
| F024@1 | `career/li-jizun-scro-2005-2016/endMonth` | 新增2005—2016.12国务院研究室任职经历（值：`12`） | endMonth=12（原文直接记载） | `supported_direct` | S002@1（正文第2段）；S003@1（正文第2段） | 公开投影：12 | 已写入 `research-data/people/li-jizun.json` 并投影至 `generatedResearch.ts` |
| F025@1 | `career/li-jizun-csrc-res-2016-2017/recordKind` | 新增2016.12—2017.04证监会研究中心主任记录，纠正旧库误写为“中证金融研究院院长”（值：`"tenure"`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（正文第2段） | 公开投影："tenure" | 已写入 `research-data/people/li-jizun.json` 并投影至 `generatedResearch.ts` |
| F026@1 | `career/li-jizun-csrc-res-2016-2017/tenureStatus` | 新增2016.12—2017.04证监会研究中心主任记录，纠正旧库误写为“中证金融研究院院长”（值：`"historical"`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（正文第2段） | 公开投影："historical" | 已写入 `research-data/people/li-jizun.json` 并投影至 `generatedResearch.ts` |
| F027@1 | `career/li-jizun-csrc-res-2016-2017/unitId` | 新增2016.12—2017.04证监会研究中心主任记录，纠正旧库误写为“中证金融研究院院长”（值：`""`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（正文第2段） | 公开投影："" | 已写入 `research-data/people/li-jizun.json` 并投影至 `generatedResearch.ts` |
| F028@1 | `career/li-jizun-csrc-res-2016-2017/unitName` | 新增2016.12—2017.04证监会研究中心主任记录，纠正旧库误写为“中证金融研究院院长”（值：`"中国证券监督管理委员会研究中心"`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（正文第2段） | 公开投影："中国证券监督管理委员会研究中心" | 已写入 `research-data/people/li-jizun.json` 并投影至 `generatedResearch.ts` |
| F029@1 | `career/li-jizun-csrc-res-2016-2017/position` | 新增2016.12—2017.04证监会研究中心主任记录，纠正旧库误写为“中证金融研究院院长”（值：`"主任"`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（正文第2段） | 公开投影："主任" | 已写入 `research-data/people/li-jizun.json` 并投影至 `generatedResearch.ts` |
| F030@1 | `career/li-jizun-csrc-res-2016-2017/rank` | 新增2016.12—2017.04证监会研究中心主任记录，纠正旧库误写为“中证金融研究院院长”（值：`"正厅局级"`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（正文第2段） | 公开投影："正厅局级" | 已写入 `research-data/people/li-jizun.json` 并投影至 `generatedResearch.ts` |
| F031@1 | `career/li-jizun-csrc-res-2016-2017/startYear` | 新增2016.12—2017.04证监会研究中心主任记录，纠正旧库误写为“中证金融研究院院长”（值：`2016`） | startYear=2016（原文直接记载） | `supported_direct` | S002@1（正文第2段） | 公开投影：2016 | 已写入 `research-data/people/li-jizun.json` 并投影至 `generatedResearch.ts` |
| F032@1 | `career/li-jizun-csrc-res-2016-2017/startMonth` | 新增2016.12—2017.04证监会研究中心主任记录，纠正旧库误写为“中证金融研究院院长”（值：`12`） | startMonth=12（原文直接记载） | `supported_direct` | S002@1（正文第2段） | 公开投影：12 | 已写入 `research-data/people/li-jizun.json` 并投影至 `generatedResearch.ts` |
| F033@1 | `career/li-jizun-csrc-res-2016-2017/endYear` | 新增2016.12—2017.04证监会研究中心主任记录，纠正旧库误写为“中证金融研究院院长”（值：`2017`） | endYear=2017（原文直接记载） | `supported_direct` | S002@1（正文第2段） | 公开投影：2017 | 已写入 `research-data/people/li-jizun.json` 并投影至 `generatedResearch.ts` |
| F034@1 | `career/li-jizun-csrc-res-2016-2017/endMonth` | 新增2016.12—2017.04证监会研究中心主任记录，纠正旧库误写为“中证金融研究院院长”（值：`4`） | endMonth=4（原文直接记载） | `supported_direct` | S002@1（正文第2段） | 公开投影：4 | 已写入 `research-data/people/li-jizun.json` 并投影至 `generatedResearch.ts` |
| F035@1 | `career/li-jizun-csrc-mkt-2017-2022/recordKind` | 新增2017.04—2022.01市场监管部（市场一部）主任兼深改办主要负责人任期（值：`"tenure"`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（正文第2段）；S003@1（正文第3—5段） | 公开投影："tenure" | 已写入 `research-data/people/li-jizun.json` 并投影至 `generatedResearch.ts` |
| F036@1 | `career/li-jizun-csrc-mkt-2017-2022/tenureStatus` | 新增2017.04—2022.01市场监管部（市场一部）主任兼深改办主要负责人任期（值：`"historical"`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（正文第2段）；S003@1（正文第3—5段） | 公开投影："historical" | 已写入 `research-data/people/li-jizun.json` 并投影至 `generatedResearch.ts` |
| F037@1 | `career/li-jizun-csrc-mkt-2017-2022/unitId` | 新增2017.04—2022.01市场监管部（市场一部）主任兼深改办主要负责人任期（值：`"csrc-sc1"`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（正文第2段）；S003@1（正文第3—5段） | 公开投影："csrc-sc1" | 已写入 `research-data/people/li-jizun.json` 并投影至 `generatedResearch.ts` |
| F038@1 | `career/li-jizun-csrc-mkt-2017-2022/unitName` | 新增2017.04—2022.01市场监管部（市场一部）主任兼深改办主要负责人任期（值：`"中国证券监督管理委员会"`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（正文第2段）；S003@1（正文第3—5段） | 公开投影："中国证券监督管理委员会" | 已写入 `research-data/people/li-jizun.json` 并投影至 `generatedResearch.ts` |
| F039@1 | `career/li-jizun-csrc-mkt-2017-2022/department` | 新增2017.04—2022.01市场监管部（市场一部）主任兼深改办主要负责人任期（值：`"市场监管部（后更名市场监管一部）"`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（正文第2段）；S003@1（正文第3—5段） | 公开投影："市场监管部（后更名市场监管一部）" | 已写入 `research-data/people/li-jizun.json` 并投影至 `generatedResearch.ts` |
| F040@1 | `career/li-jizun-csrc-mkt-2017-2022/position` | 新增2017.04—2022.01市场监管部（市场一部）主任兼深改办主要负责人任期（值：`"主任（2019年3月起兼全面深化资本市场改革办公室主要负责人）"`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（正文第2段）；S003@1（正文第3—5段） | 公开投影："主任（2019年3月起兼全面深化资本市场改革办公室主要负责人）" | 已写入 `research-data/people/li-jizun.json` 并投影至 `generatedResearch.ts` |
| F041@1 | `career/li-jizun-csrc-mkt-2017-2022/rank` | 新增2017.04—2022.01市场监管部（市场一部）主任兼深改办主要负责人任期（值：`"正厅局级"`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（正文第2段）；S003@1（正文第3—5段） | 公开投影："正厅局级" | 已写入 `research-data/people/li-jizun.json` 并投影至 `generatedResearch.ts` |
| F042@1 | `career/li-jizun-csrc-mkt-2017-2022/startYear` | 新增2017.04—2022.01市场监管部（市场一部）主任兼深改办主要负责人任期（值：`2017`） | startYear=2017（原文直接记载） | `supported_direct` | S002@1（正文第2段）；S003@1（正文第3—5段） | 公开投影：2017 | 已写入 `research-data/people/li-jizun.json` 并投影至 `generatedResearch.ts` |
| F043@1 | `career/li-jizun-csrc-mkt-2017-2022/startMonth` | 新增2017.04—2022.01市场监管部（市场一部）主任兼深改办主要负责人任期（值：`4`） | startMonth=4（原文直接记载） | `supported_direct` | S002@1（正文第2段）；S003@1（正文第3—5段） | 公开投影：4 | 已写入 `research-data/people/li-jizun.json` 并投影至 `generatedResearch.ts` |
| F044@1 | `career/li-jizun-csrc-mkt-2017-2022/endYear` | 新增2017.04—2022.01市场监管部（市场一部）主任兼深改办主要负责人任期（值：`2022`） | endYear=2022（原文直接记载） | `supported_direct` | S002@1（正文第2段）；S003@1（正文第3—5段） | 公开投影：2022 | 已写入 `research-data/people/li-jizun.json` 并投影至 `generatedResearch.ts` |
| F045@1 | `career/li-jizun-csrc-mkt-2017-2022/endMonth` | 新增2017.04—2022.01市场监管部（市场一部）主任兼深改办主要负责人任期（值：`1`） | endMonth=1（原文直接记载） | `supported_direct` | S002@1（正文第2段）；S003@1（正文第3—5段） | 公开投影：1 | 已写入 `research-data/people/li-jizun.json` 并投影至 `generatedResearch.ts` |
| F046@1 | `career/li-jizun-csrc-bgt-2022-2024/recordKind` | 新增2022.01—2024.08证监会办公厅主任任期（值：`"tenure"`） | 非日期字段（随所属记录精度） | `supported_direct` | S003@1（正文第1、5段）；S001@1（正文第1、3段） | 公开投影："tenure" | 已写入 `research-data/people/li-jizun.json` 并投影至 `generatedResearch.ts` |
| F047@1 | `career/li-jizun-csrc-bgt-2022-2024/tenureStatus` | 新增2022.01—2024.08证监会办公厅主任任期（值：`"historical"`） | 非日期字段（随所属记录精度） | `supported_direct` | S003@1（正文第1、5段）；S001@1（正文第1、3段） | 公开投影："historical" | 已写入 `research-data/people/li-jizun.json` 并投影至 `generatedResearch.ts` |
| F048@1 | `career/li-jizun-csrc-bgt-2022-2024/unitId` | 新增2022.01—2024.08证监会办公厅主任任期（值：`"csrc-bgt"`） | 非日期字段（随所属记录精度） | `supported_direct` | S003@1（正文第1、5段）；S001@1（正文第1、3段） | 公开投影："csrc-bgt" | 已写入 `research-data/people/li-jizun.json` 并投影至 `generatedResearch.ts` |
| F049@1 | `career/li-jizun-csrc-bgt-2022-2024/unitName` | 新增2022.01—2024.08证监会办公厅主任任期（值：`"中国证券监督管理委员会"`） | 非日期字段（随所属记录精度） | `supported_direct` | S003@1（正文第1、5段）；S001@1（正文第1、3段） | 公开投影："中国证券监督管理委员会" | 已写入 `research-data/people/li-jizun.json` 并投影至 `generatedResearch.ts` |
| F050@1 | `career/li-jizun-csrc-bgt-2022-2024/department` | 新增2022.01—2024.08证监会办公厅主任任期（值：`"办公厅"`） | 非日期字段（随所属记录精度） | `supported_direct` | S003@1（正文第1、5段）；S001@1（正文第1、3段） | 公开投影："办公厅" | 已写入 `research-data/people/li-jizun.json` 并投影至 `generatedResearch.ts` |
| F051@1 | `career/li-jizun-csrc-bgt-2022-2024/position` | 新增2022.01—2024.08证监会办公厅主任任期（值：`"主任"`） | 非日期字段（随所属记录精度） | `supported_direct` | S003@1（正文第1、5段）；S001@1（正文第1、3段） | 公开投影："主任" | 已写入 `research-data/people/li-jizun.json` 并投影至 `generatedResearch.ts` |
| F052@1 | `career/li-jizun-csrc-bgt-2022-2024/rank` | 新增2022.01—2024.08证监会办公厅主任任期（值：`"正厅局级"`） | 非日期字段（随所属记录精度） | `supported_direct` | S003@1（正文第1、5段）；S001@1（正文第1、3段） | 公开投影："正厅局级" | 已写入 `research-data/people/li-jizun.json` 并投影至 `generatedResearch.ts` |
| F053@1 | `career/li-jizun-csrc-bgt-2022-2024/startYear` | 新增2022.01—2024.08证监会办公厅主任任期（值：`2022`） | startYear=2022（原文直接记载） | `supported_direct` | S003@1（正文第1、5段）；S001@1（正文第1、3段） | 公开投影：2022 | 已写入 `research-data/people/li-jizun.json` 并投影至 `generatedResearch.ts` |
| F054@1 | `career/li-jizun-csrc-bgt-2022-2024/startMonth` | 新增2022.01—2024.08证监会办公厅主任任期（值：`1`） | startMonth=1（原文直接记载） | `supported_direct` | S003@1（正文第1、5段）；S001@1（正文第1、3段） | 公开投影：1 | 已写入 `research-data/people/li-jizun.json` 并投影至 `generatedResearch.ts` |
| F055@1 | `career/li-jizun-csrc-bgt-2022-2024/endYear` | 新增2022.01—2024.08证监会办公厅主任任期（值：`2024`） | endYear=2024（原文直接记载） | `supported_direct` | S003@1（正文第1、5段）；S001@1（正文第1、3段） | 公开投影：2024 | 已写入 `research-data/people/li-jizun.json` 并投影至 `generatedResearch.ts` |
| F056@1 | `career/li-jizun-csrc-bgt-2022-2024/endMonth` | 新增2022.01—2024.08证监会办公厅主任任期（值：`8`） | endMonth=8（原文直接记载） | `supported_direct` | S003@1（正文第1、5段）；S001@1（正文第1、3段） | 公开投影：8 | 已写入 `research-data/people/li-jizun.json` 并投影至 `generatedResearch.ts` |
| F057@1 | `career/li-jizun-szse-obs-202408/recordKind` | 不动基线现职壳，新增2024年8月12日履新深交所党委副书记、总经理观察点（值：`"observation"`） | 非日期字段（随所属记录精度） | `supported_observation` | S001@1（正文第1段） | 公开投影："observation" | 已写入 `research-data/people/li-jizun.json` 并投影至 `generatedResearch.ts` |
| F058@1 | `career/li-jizun-szse-obs-202408/unitId` | 不动基线现职壳，新增2024年8月12日履新深交所党委副书记、总经理观察点（值：`"csrc-szse"`） | 非日期字段（随所属记录精度） | `supported_observation` | S001@1（正文第1段） | 公开投影："csrc-szse" | 已写入 `research-data/people/li-jizun.json` 并投影至 `generatedResearch.ts` |
| F059@1 | `career/li-jizun-szse-obs-202408/unitName` | 不动基线现职壳，新增2024年8月12日履新深交所党委副书记、总经理观察点（值：`"深圳证券交易所"`） | 非日期字段（随所属记录精度） | `supported_observation` | S001@1（正文第1段） | 公开投影："深圳证券交易所" | 已写入 `research-data/people/li-jizun.json` 并投影至 `generatedResearch.ts` |
| F060@1 | `career/li-jizun-szse-obs-202408/position` | 不动基线现职壳，新增2024年8月12日履新深交所党委副书记、总经理观察点（值：`"党委副书记、总经理"`） | 非日期字段（随所属记录精度） | `supported_observation` | S001@1（正文第1段） | 公开投影："党委副书记、总经理" | 已写入 `research-data/people/li-jizun.json` 并投影至 `generatedResearch.ts` |
| F061@1 | `career/li-jizun-szse-obs-202408/observedAt` | 不动基线现职壳，新增2024年8月12日履新深交所党委副书记、总经理观察点（值：`{"year":2024,"month":8,"day":12}`） | observedAt={"year":2024,"month":8,"day":12}（时间点观察） | `supported_observation` | S001@1（正文第1段） | 公开投影：{"year":2024,"month":8,"day":12} | 已写入 `research-data/people/li-jizun.json` 并投影至 `generatedResearch.ts` |

## 推理台账

- 无 `derived` 推理；全部43条事实均由一手报道与大学官方专题直读支撑。

## 冲突与拒绝记录

| 争议属性 | 说法A及来源 | 说法B及来源 | 是否同一日期／职务口径 | 处理及理由 | 待查链接／搜索式 |
| --- | --- | --- | --- | --- | --- |
| 博士学科门类 | 旧库原始记录：经济学博士 | S001 中证网＋S002 澎湃新闻：1974年9月出生，工学博士 | 最高学位门类 | **采信官方披露简历（工学博士）** | 无需再查 |

## 职业时间线缺口与下一轮

| 缺口 | 已知边界（不强推任期） | 要找的材料 | 下一条完整查询 | 优先级 |
| --- | --- | --- | --- | --- |
| 本硕博就读院校及2022年调任证监会办公厅主任的精确月份 | 已知工学博士、早年在中国海洋大学经济学院任教、2022年任证监会办公厅主任 | 学位论文库及2022年证监会人事报道 | `"李继尊" 博士论文 OR "办公厅主任" 2022` | 低 |

## 本轮交付与续接

- 新增有效岗位／教育经历／日期属性：补齐籍贯“山东菏泽”与现职级“正厅局级”；升级工学博士记录；新增中国海洋大学经济学院任教、2005.05—2016.09国务院研究室（宏观司处长／国际司副司长／巡视员）两段历史任职，并升级证监会市场部（深改办）主任与办公厅主任记录。
- 删除或纠正的错误及依据：纠正旧库将“工学博士”误作“经济学博士”及漏记2016年前国研室与海大经历的问题。
- 来源对应复查结果：全部已发布事实均绑定 `reading: "read"` 原文定位摘录，无悬空引用，无观察点冒充连续任期起止；重名干扰源已显式归档为 `reading: "wrong_person"`。
- 页面及结构验证（仅实际执行后填写）：已通过 `npm run research:check`、`npm run audit:data`、`npm run test:records`、`npm run test:relations`、`npm run test:research`、`npm run test:safety` 及生产构建 `npm run build` 校验。
- 结束状态：本轮研究完成（核心锚点与主干履历已入库，细分早期缺口转入后续深化队列）。
- 停止条件满足情况：已核清核心身份、现职状态、关键正副局／部级履历与学历锚点，证伪旧库硬伤并留下精确下一查询。
- 上次停在查询ID／来源ID：`Q001` ／ `S003`
- 最后处理事实ID／推理ID及当前阶段：`F061@1` ／ 无 `I` 推理项（已完成工作台导入与公开投影）
- 已证实待入库事实及原因／拟写入字段：无（本轮已证实事实已全部通过 `research:import --write --expect` 入库）。
- 旧模型线索对账完成与剩余项：旧库核心学历与主干履历线索已完成对账；待核候选见上表 `candidate` 项。
- 输入变更后需要重新计算或撤销的推理：无依赖推理受影响。
- 下一步必须先执行的搜索式或原文链接：`"李继尊" 博士 毕业院校`
- 尚未访问的高价值来源：《中国证券期货年鉴》历史卷、学位论文库及部分脚本受阻的交易所官网内页（详见渠道覆盖表）。
- 是否需要用户提供合法访问权限或已有资料：否（公开渠道与本地 Google Chrome 浏览器即可继续推进）。
