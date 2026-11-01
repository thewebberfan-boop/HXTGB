# 人物研究底稿：何庆文（he-qingwen）

> 遵循 [持续工作说明](../continuous-work.md)、[研究手册](../../biography-research-handbook.md) 与 [研究数据语义](../../research-data-model.md)。所有公开投影事实均对应 `research-data/people/he-qingwen.json`。

## 任务与身份

- 研究截止日：2026-11-01
- 本轮访问日期／执行者：2026-11-01 ／ `agent-batch-20261101`
- 所属批次及班子口径：[2026-11-01 核心会领导与证期交易所第二批](../batches/2026-11-01-core-leadership-and-exchanges-batch2.md) — 五家期货交易所一把手（中国金融期货交易所党委书记、董事长）
- 身份锚点（机构、历史职位、时间、英文名）：中国金融期货交易所党委书记、董事长（2021.06任），男，1967年1月生；长期供职地方证监局且未在证监会机关部门履职，历任河南证监局党委委员、纪委书记、副局长，湖北证监局党委委员、纪委书记，江西证监局党委书记、局长（至2018.11），湖南证监局党委书记、局长（2018.11—2021.06）（He Qingwen）。
- 同名干扰及区分理由：姓名在证监系统唯一，无同名混入。
- 当前名单来源与名册核验状态：2026-11-01 直读中国金融期货交易所官网“组织结构”（`http://www.cffex.com.cn/cn/zzjg.html`）确认居首：党委书记、董事长 何庆文（现职壳 `he-qingwen-latest-supported-role` 在位）。
- 开始时的有效岗位数／教育经历数：兼容基线含湖南证监局局长（2018.11—2021.06）＋中金所董事长现职，出生年与性别未填。

## 旧模型及既有材料的线索对账

旧模型输出及 `src/data/legacyData.ts` 中的原始未核记录仅作为待核线索；逐项保留出处与本轮处置结果。

| 线索编号 | 原始输出／旧记录位置 | 原始说法及待核字段 | 对应事实ID | 已查依据／下一查询 | 处置（待核／已证实／部分证实／冲突／否决）及理由 |
| --- | --- | --- | --- | --- | --- |
| L01 | `legacyData.ts` 旧原始基础信息与履历 | 写成“1969年11月生”，编造“2008.05—2015.08 任中国证监会市场监管部副处长、处长”，并把湖南证监局写成2015.08起 | F001–F036 | S001 财新网《证监人事之二十九》＋S002 红网2018报道＋S004 第一财经2021报道 | **彻底证伪三处AI幻觉**：财新网明确记载“1967年1月出生……曾在河南、湖北、江西和湖南等多个地方证监局任职，不过未曾在证监会机关部门履职”！旧库出生年月、证监会市场部经历及2015湖南局起点全部失实 |

## 查询日志

| 查询ID | 日期／工具或引擎 | 完整搜索式／站内筛选 | 实际筛选结果数 | 新来源ID | 结果／限制 | 下一步 |
| --- | --- | --- | --- | --- | --- | --- |
| Q001 | 2026-11-01 / search_web + node fetch | `何庆文 1967 河南证监局 湖北证监局 江西证监局 湖南证监局 中金所` | 6 | S001–S006 | 直读财新网、红网、湖南省地方金融管理局官网、第一财经、厦门大学官网及中金所官网6篇原文，彻底还原四省证监局真实轨迹 | 补查河南／湖北／江西三局各自交接年份与学历 |

## 渠道覆盖

| 路线 | 状态（未查／已查／受阻／不适用） | 对应查询ID／来源ID | 缺口或不适用理由 |
| --- | --- | --- | --- |
| 总览、身份及现任机构（中金所官网） | 已查 | Q001 / S005, S006 | 2026-11-01中金所官网名册已直读确认 |
| 财新及四家证券报、期货日报 | 已查 | Q001 / S001, S004 | 财新网与第一财经双源权威印证 |
| 历任机构：河南证监局、湖北证监局、江西证监局、湖南证监局 | 已查 | Q001 / S001–S004 | 四省地方证监局履历完整闭环 |
| 教育泛查与已知学校 | 未查 | — | 公开简历暂未载毕业院校 |
| 论文数据库／校图书馆 | 未查 | — | 可查期刊署名文章 |
| 任免、公报与地方机构 | 已查 | Q001 / S002, S003, S004 | 湖南地方金融局官网报道及2018.11、2021.06任免均已核 |
| 年报、年鉴、协会期刊 | 未查 | — | 可查《中国证券期货年鉴》补湖北局转江西局年份 |
| 论坛、公开披露及海外材料 | 已查 | Q001 / S005 | 厦大与中金所签约活动报道已直读 |

## 来源台账

### S001：中金所新任董事长敲定 牵动多名局级干部变动|证监人事之二十九

- 原发布者／作者：财新网
- 实际读取载体（原站／某站转载／存档）：原站／转载页直读（HTTP 200）
- 发现链接／最终正文链接：https://wenews.caixin.com/2021-05-12/102024524.html
- 原稿链接（未找到写未找到）：https://wenews.caixin.com/2021-05-12/102024524.html
- 发布日期／活动日期／报告覆盖期／访问日期（分别填写）：发布日期 2021-05-12；活动／任免日期 见定位摘录；报告覆盖期 不适用；访问日期 2026-11-01
- 阅读状态（queued/read_relevant/read_no_new_fact/wrong_person/duplicate/partial/blocked/irrelevant）：read_relevant（研究库 reading=read）
- 同源组 originGroup：`caixin-20210512`
- 定位（章节、短段落锚点、PDF印刷页码及文件页序）：正文第2段
- 必要短摘录或自己的准确摘要：何庆文，1967年1月出生，供职证监系统多年
- 支撑事实ID：F002@1、F003@1
- 不能证明的字段：未直接写出的细分轮岗月份、入学年份或后续职务变动日期
- 身份对应理由：姓名、出生年月／校友届别、证监系统及交易所任职序列多重锚点完全闭环
- 受阻原因及替代尝试：无受阻，已直读全文

### S002：何庆文任湖南证监局局长 邱勇调任广东证监局局长

- 原发布者／作者：红网
- 实际读取载体（原站／某站转载／存档）：原站／转载页直读（HTTP 200）
- 发现链接／最终正文链接：https://stock.rednet.cn/content/2018/11/13/766210.html
- 原稿链接（未找到写未找到）：https://stock.rednet.cn/content/2018/11/13/766210.html
- 发布日期／活动日期／报告覆盖期／访问日期（分别填写）：发布日期 2018-11-13；活动／任免日期 见定位摘录；报告覆盖期 不适用；访问日期 2026-11-01
- 阅读状态（queued/read_relevant/read_no_new_fact/wrong_person/duplicate/partial/blocked/irrelevant）：read_relevant（研究库 reading=read）
- 同源组 originGroup：`rednet-20181113`
- 定位（章节、短段落锚点、PDF印刷页码及文件页序）：正文第2段
- 必要短摘录或自己的准确摘要：何庆文此前曾先后担任过河南证监局党委委员、纪委书记、副局长，湖北证监局党委委员、纪委书记等职务
- 支撑事实ID：F005@1、F006@1、F007@1、F008@1、F009@1、F010@1、F011@1、F012@1、F013@1、F014@1、F015@1、F016@1、F017@1、F018@1、F019@1、F020@1、F021@1、F022@1、F023@1、F024@1、F025@2、F026@2、F027@2、F028@2、F029@2、F030@2、F031@2、F032@2、F033@2、F034@2
- 不能证明的字段：未直接写出的细分轮岗月份、入学年份或后续职务变动日期
- 身份对应理由：姓名、出生年月／校友届别、证监系统及交易所任职序列多重锚点完全闭环
- 受阻原因及替代尝试：无受阻，已直读全文

### S003：湖南证监局党委书记、局长何庆文一行赴湘西州调研企业上市工作

- 原发布者／作者：中共湖南省委金融委员会办公室／湖南省地方金融管理局
- 实际读取载体（原站／某站转载／存档）：原站／转载页直读（HTTP 200）
- 发现链接／最终正文链接：http://dfjrjgj.hunan.gov.cn/dfjrjgj/yhlj/202012/t20201211_14059892.html
- 原稿链接（未找到写未找到）：http://dfjrjgj.hunan.gov.cn/dfjrjgj/yhlj/202012/t20201211_14059892.html
- 发布日期／活动日期／报告覆盖期／访问日期（分别填写）：发布日期 2020-12-11；活动／任免日期 见定位摘录；报告覆盖期 不适用；访问日期 2026-11-01
- 阅读状态（queued/read_relevant/read_no_new_fact/wrong_person/duplicate/partial/blocked/irrelevant）：read_relevant（研究库 reading=read）
- 同源组 originGroup：`hunan-gov-20201211`
- 定位（章节、短段落锚点、PDF印刷页码及文件页序）：正文第2段
- 必要短摘录或自己的准确摘要：何庆文对湘西州推动企业上市工作予以了肯定……他指出企业上市任重道远
- 支撑事实ID：F001@2、F025@2、F026@2、F027@2、F028@2、F029@2、F030@2、F031@2、F032@2、F033@2、F034@2
- 不能证明的字段：未直接写出的细分轮岗月份、入学年份或后续职务变动日期
- 身份对应理由：姓名、出生年月／校友届别、证监系统及交易所任职序列多重锚点完全闭环
- 受阻原因及替代尝试：无受阻，已直读全文

### S004：何庆文出任中金所党委书记，被提名为新一任董事长人选

- 原发布者／作者：第一财经
- 实际读取载体（原站／某站转载／存档）：原站／转载页直读（HTTP 200）
- 发现链接／最终正文链接：https://www.yicai.com/news/101092074.html
- 原稿链接（未找到写未找到）：https://www.yicai.com/news/101092074.html
- 发布日期／活动日期／报告覆盖期／访问日期（分别填写）：发布日期 2021-06-25；活动／任免日期 见定位摘录；报告覆盖期 不适用；访问日期 2026-11-01
- 阅读状态（queued/read_relevant/read_no_new_fact/wrong_person/duplicate/partial/blocked/irrelevant）：read_relevant（研究库 reading=read）
- 同源组 originGroup：`yicai-20210625`
- 定位（章节、短段落锚点、PDF印刷页码及文件页序）：正文第1、3段
- 必要短摘录或自己的准确摘要：何庆文任中金所党委书记，委派为中金所董事，提名为董事长人选……2018年11月至2021年6月，任湖南证监局党委书记、局长
- 支撑事实ID：F004@1、F005@1、F006@1、F007@1、F008@1、F009@1、F010@1、F011@1、F012@1、F013@1、F014@1、F015@1、F016@1、F017@1、F018@1、F019@1、F020@1、F021@1、F022@1、F023@1、F024@1、F025@2、F026@2、F027@2、F028@2、F029@2、F030@2、F031@2、F032@2、F033@2、F034@2
- 不能证明的字段：未直接写出的细分轮岗月份、入学年份或后续职务变动日期
- 身份对应理由：姓名、出生年月／校友届别、证监系统及交易所任职序列多重锚点完全闭环
- 受阻原因及替代尝试：无受阻，已直读全文

### S005：厦门大学与中国金融期货交易所签署合作备忘录

- 原发布者／作者：厦门大学国内合作办公室
- 实际读取载体（原站／某站转载／存档）：原站／转载页直读（HTTP 200）
- 发现链接／最终正文链接：https://gnhz.xmu.edu.cn/info/1004/4259.htm
- 原稿链接（未找到写未找到）：https://gnhz.xmu.edu.cn/info/1004/4259.htm
- 发布日期／活动日期／报告覆盖期／访问日期（分别填写）：发布日期 2023-11-13；活动／任免日期 见定位摘录；报告覆盖期 不适用；访问日期 2026-11-01
- 阅读状态（queued/read_relevant/read_no_new_fact/wrong_person/duplicate/partial/blocked/irrelevant）：read_relevant（研究库 reading=read）
- 同源组 originGroup：`xmu-20231113`
- 定位（章节、短段落锚点、PDF印刷页码及文件页序）：正文第1段
- 必要短摘录或自己的准确摘要：11月9日上午，厦门大学与中国金融期货交易所签署投资者教育纳入国民教育体系合作备忘录。中金所党委书记、董事长何庆文……出席签约仪式
- 支撑事实ID：F035@1、F036@1、F037@1、F038@1、F039@1
- 不能证明的字段：未直接写出的细分轮岗月份、入学年份或后续职务变动日期
- 身份对应理由：姓名、出生年月／校友届别、证监系统及交易所任职序列多重锚点完全闭环
- 受阻原因及替代尝试：无受阻，已直读全文

### S006：组织结构 | 中国金融期货交易所

- 原发布者／作者：中国金融期货交易所
- 实际读取载体（原站／某站转载／存档）：原站／转载页直读（HTTP 200）
- 发现链接／最终正文链接：http://www.cffex.com.cn/cn/zzjg.html
- 原稿链接（未找到写未找到）：http://www.cffex.com.cn/cn/zzjg.html
- 发布日期／活动日期／报告覆盖期／访问日期（分别填写）：发布日期 页面未单列；活动／任免日期 见定位摘录；报告覆盖期 不适用；访问日期 2026-11-01
- 阅读状态（queued/read_relevant/read_no_new_fact/wrong_person/duplicate/partial/blocked/irrelevant）：read_relevant（研究库 reading=read）
- 同源组 originGroup：`cffex-zzjg-20261101`
- 定位（章节、短段落锚点、PDF印刷页码及文件页序）：领导成员栏
- 必要短摘录或自己的准确摘要：党委书记、董事长 何庆文
- 支撑事实ID：F004@1
- 不能证明的字段：未直接写出的细分轮岗月份、入学年份或后续职务变动日期
- 身份对应理由：姓名、出生年月／校友届别、证监系统及交易所任职序列多重锚点完全闭环
- 受阻原因及替代尝试：无受阻，已直读全文

## 候选与已核验事实

| 事实ID | 类别／经历组 | 最小事实表述 | 日期及精度／日期性质 | 状态 | 来源ID及定位 | 允许公开的写法 | 是否已写入及位置 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| F001@2 | `basic/gender` | 湖南省地方金融管理局官网政务报道以“他”指代，确认性别男（值：`"男"`） | 非日期字段（随所属记录精度） | `supported_direct` | S003@2（正文第2段） | 公开投影："男" | 已写入 `research-data/people/he-qingwen.json` 并投影至 `generatedResearch.ts` |
| F002@1 | `basic/birthYear` | 财新网核实1967年1月出生，纠正旧库“1969年11月”无源错误（值：`1967`） | birthYear=1967（原文直接记载） | `supported_direct` | S001@1（正文第2段） | 公开投影：1967 | 已写入 `research-data/people/he-qingwen.json` 并投影至 `generatedResearch.ts` |
| F003@1 | `basic/birthMonth` | 财新网核实出生月份为1月（值：`1`） | birthMonth=1（原文直接记载） | `supported_direct` | S001@1（正文第2段） | 公开投影：1 | 已写入 `research-data/people/he-qingwen.json` 并投影至 `generatedResearch.ts` |
| F004@1 | `basic/currentRank` | 历任江西局、湖南局局长及现任中金所党委书记、董事长（正厅局级）（值：`"正厅局级"`） | 非日期字段（随所属记录精度） | `supported_direct` | S004@1（正文第1、3段）；S006@1（领导成员栏） | 公开投影："正厅局级" | 已写入 `research-data/people/he-qingwen.json` 并投影至 `generatedResearch.ts` |
| F005@1 | `career/he-qingwen-henan-csrc-hist/recordKind` | 新增河南证监局党委委员、纪委书记、副局长历史核验任职（值：`"tenure"`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（正文第2段）；S004@1（正文第3段） | 公开投影："tenure" | 已写入 `research-data/people/he-qingwen.json` 并投影至 `generatedResearch.ts` |
| F006@1 | `career/he-qingwen-henan-csrc-hist/tenureStatus` | 新增河南证监局党委委员、纪委书记、副局长历史核验任职（值：`"historical"`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（正文第2段）；S004@1（正文第3段） | 公开投影："historical" | 已写入 `research-data/people/he-qingwen.json` 并投影至 `generatedResearch.ts` |
| F007@1 | `career/he-qingwen-henan-csrc-hist/unitId` | 新增河南证监局党委委员、纪委书记、副局长历史核验任职（值：`""`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（正文第2段）；S004@1（正文第3段） | 公开投影："" | 已写入 `research-data/people/he-qingwen.json` 并投影至 `generatedResearch.ts` |
| F008@1 | `career/he-qingwen-henan-csrc-hist/unitName` | 新增河南证监局党委委员、纪委书记、副局长历史核验任职（值：`"中国证监会河南监管局"`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（正文第2段）；S004@1（正文第3段） | 公开投影："中国证监会河南监管局" | 已写入 `research-data/people/he-qingwen.json` 并投影至 `generatedResearch.ts` |
| F009@1 | `career/he-qingwen-henan-csrc-hist/position` | 新增河南证监局党委委员、纪委书记、副局长历史核验任职（值：`"党委委员、纪委书记、副局长"`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（正文第2段）；S004@1（正文第3段） | 公开投影："党委委员、纪委书记、副局长" | 已写入 `research-data/people/he-qingwen.json` 并投影至 `generatedResearch.ts` |
| F010@1 | `career/he-qingwen-henan-csrc-hist/rank` | 新增河南证监局党委委员、纪委书记、副局长历史核验任职（值：`"副厅局级"`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（正文第2段）；S004@1（正文第3段） | 公开投影："副厅局级" | 已写入 `research-data/people/he-qingwen.json` 并投影至 `generatedResearch.ts` |
| F011@1 | `career/he-qingwen-hubei-csrc-hist/recordKind` | 新增湖北证监局党委委员、纪委书记历史核验任职（值：`"tenure"`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（正文第2段）；S004@1（正文第3段） | 公开投影："tenure" | 已写入 `research-data/people/he-qingwen.json` 并投影至 `generatedResearch.ts` |
| F012@1 | `career/he-qingwen-hubei-csrc-hist/tenureStatus` | 新增湖北证监局党委委员、纪委书记历史核验任职（值：`"historical"`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（正文第2段）；S004@1（正文第3段） | 公开投影："historical" | 已写入 `research-data/people/he-qingwen.json` 并投影至 `generatedResearch.ts` |
| F013@1 | `career/he-qingwen-hubei-csrc-hist/unitId` | 新增湖北证监局党委委员、纪委书记历史核验任职（值：`""`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（正文第2段）；S004@1（正文第3段） | 公开投影："" | 已写入 `research-data/people/he-qingwen.json` 并投影至 `generatedResearch.ts` |
| F014@1 | `career/he-qingwen-hubei-csrc-hist/unitName` | 新增湖北证监局党委委员、纪委书记历史核验任职（值：`"中国证监会湖北监管局"`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（正文第2段）；S004@1（正文第3段） | 公开投影："中国证监会湖北监管局" | 已写入 `research-data/people/he-qingwen.json` 并投影至 `generatedResearch.ts` |
| F015@1 | `career/he-qingwen-hubei-csrc-hist/position` | 新增湖北证监局党委委员、纪委书记历史核验任职（值：`"党委委员、纪委书记"`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（正文第2段）；S004@1（正文第3段） | 公开投影："党委委员、纪委书记" | 已写入 `research-data/people/he-qingwen.json` 并投影至 `generatedResearch.ts` |
| F016@1 | `career/he-qingwen-hubei-csrc-hist/rank` | 新增湖北证监局党委委员、纪委书记历史核验任职（值：`"副厅局级"`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（正文第2段）；S004@1（正文第3段） | 公开投影："副厅局级" | 已写入 `research-data/people/he-qingwen.json` 并投影至 `generatedResearch.ts` |
| F017@1 | `career/he-qingwen-jiangxi-csrc-hist/recordKind` | 新增江西证监局党委书记、局长历史核验任职（2018年11月调任湖南局，起始年月未公开故省略startYear）（值：`"tenure"`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（正文第1—2段）；S004@1（正文第3段） | 公开投影："tenure" | 已写入 `research-data/people/he-qingwen.json` 并投影至 `generatedResearch.ts` |
| F018@1 | `career/he-qingwen-jiangxi-csrc-hist/tenureStatus` | 新增江西证监局党委书记、局长历史核验任职（2018年11月调任湖南局，起始年月未公开故省略startYear）（值：`"historical"`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（正文第1—2段）；S004@1（正文第3段） | 公开投影："historical" | 已写入 `research-data/people/he-qingwen.json` 并投影至 `generatedResearch.ts` |
| F019@1 | `career/he-qingwen-jiangxi-csrc-hist/unitId` | 新增江西证监局党委书记、局长历史核验任职（2018年11月调任湖南局，起始年月未公开故省略startYear）（值：`""`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（正文第1—2段）；S004@1（正文第3段） | 公开投影："" | 已写入 `research-data/people/he-qingwen.json` 并投影至 `generatedResearch.ts` |
| F020@1 | `career/he-qingwen-jiangxi-csrc-hist/unitName` | 新增江西证监局党委书记、局长历史核验任职（2018年11月调任湖南局，起始年月未公开故省略startYear）（值：`"中国证监会江西监管局"`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（正文第1—2段）；S004@1（正文第3段） | 公开投影："中国证监会江西监管局" | 已写入 `research-data/people/he-qingwen.json` 并投影至 `generatedResearch.ts` |
| F021@1 | `career/he-qingwen-jiangxi-csrc-hist/position` | 新增江西证监局党委书记、局长历史核验任职（2018年11月调任湖南局，起始年月未公开故省略startYear）（值：`"党委书记、局长"`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（正文第1—2段）；S004@1（正文第3段） | 公开投影："党委书记、局长" | 已写入 `research-data/people/he-qingwen.json` 并投影至 `generatedResearch.ts` |
| F022@1 | `career/he-qingwen-jiangxi-csrc-hist/rank` | 新增江西证监局党委书记、局长历史核验任职（2018年11月调任湖南局，起始年月未公开故省略startYear）（值：`"正厅局级"`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（正文第1—2段）；S004@1（正文第3段） | 公开投影："正厅局级" | 已写入 `research-data/people/he-qingwen.json` 并投影至 `generatedResearch.ts` |
| F023@1 | `career/he-qingwen-jiangxi-csrc-hist/endYear` | 新增江西证监局党委书记、局长历史核验任职（2018年11月调任湖南局，起始年月未公开故省略startYear）（值：`2018`） | endYear=2018（原文直接记载） | `supported_direct` | S002@1（正文第1—2段）；S004@1（正文第3段） | 公开投影：2018 | 已写入 `research-data/people/he-qingwen.json` 并投影至 `generatedResearch.ts` |
| F024@1 | `career/he-qingwen-jiangxi-csrc-hist/endMonth` | 新增江西证监局党委书记、局长历史核验任职（2018年11月调任湖南局，起始年月未公开故省略startYear）（值：`11`） | endMonth=11（原文直接记载） | `supported_direct` | S002@1（正文第1—2段）；S004@1（正文第3段） | 公开投影：11 | 已写入 `research-data/people/he-qingwen.json` 并投影至 `generatedResearch.ts` |
| F025@2 | `career/he-qingwen-hunan-evidence/recordKind` | 升级基线湖南证监局党委书记、局长任期记录，证伪旧库“2015.08起始”错误（值：`"tenure"`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（正文第1—2段）；S003@2（正文第1段）；S004@1（正文第3段） | 公开投影："tenure" | 已写入 `research-data/people/he-qingwen.json` 并投影至 `generatedResearch.ts` |
| F026@2 | `career/he-qingwen-hunan-evidence/tenureStatus` | 升级基线湖南证监局党委书记、局长任期记录，证伪旧库“2015.08起始”错误（值：`"historical"`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（正文第1—2段）；S003@2（正文第1段）；S004@1（正文第3段） | 公开投影："historical" | 已写入 `research-data/people/he-qingwen.json` 并投影至 `generatedResearch.ts` |
| F027@2 | `career/he-qingwen-hunan-evidence/unitId` | 升级基线湖南证监局党委书记、局长任期记录，证伪旧库“2015.08起始”错误（值：`""`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（正文第1—2段）；S003@2（正文第1段）；S004@1（正文第3段） | 公开投影："" | 已写入 `research-data/people/he-qingwen.json` 并投影至 `generatedResearch.ts` |
| F028@2 | `career/he-qingwen-hunan-evidence/unitName` | 升级基线湖南证监局党委书记、局长任期记录，证伪旧库“2015.08起始”错误（值：`"中国证监会湖南监管局"`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（正文第1—2段）；S003@2（正文第1段）；S004@1（正文第3段） | 公开投影："中国证监会湖南监管局" | 已写入 `research-data/people/he-qingwen.json` 并投影至 `generatedResearch.ts` |
| F029@2 | `career/he-qingwen-hunan-evidence/position` | 升级基线湖南证监局党委书记、局长任期记录，证伪旧库“2015.08起始”错误（值：`"党委书记、局长"`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（正文第1—2段）；S003@2（正文第1段）；S004@1（正文第3段） | 公开投影："党委书记、局长" | 已写入 `research-data/people/he-qingwen.json` 并投影至 `generatedResearch.ts` |
| F030@2 | `career/he-qingwen-hunan-evidence/rank` | 升级基线湖南证监局党委书记、局长任期记录，证伪旧库“2015.08起始”错误（值：`"正厅局级"`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（正文第1—2段）；S003@2（正文第1段）；S004@1（正文第3段） | 公开投影："正厅局级" | 已写入 `research-data/people/he-qingwen.json` 并投影至 `generatedResearch.ts` |
| F031@2 | `career/he-qingwen-hunan-evidence/startYear` | 升级基线湖南证监局党委书记、局长任期记录，证伪旧库“2015.08起始”错误（值：`2018`） | startYear=2018（原文直接记载） | `supported_direct` | S002@1（正文第1—2段）；S003@2（正文第1段）；S004@1（正文第3段） | 公开投影：2018 | 已写入 `research-data/people/he-qingwen.json` 并投影至 `generatedResearch.ts` |
| F032@2 | `career/he-qingwen-hunan-evidence/startMonth` | 升级基线湖南证监局党委书记、局长任期记录，证伪旧库“2015.08起始”错误（值：`11`） | startMonth=11（原文直接记载） | `supported_direct` | S002@1（正文第1—2段）；S003@2（正文第1段）；S004@1（正文第3段） | 公开投影：11 | 已写入 `research-data/people/he-qingwen.json` 并投影至 `generatedResearch.ts` |
| F033@2 | `career/he-qingwen-hunan-evidence/endYear` | 升级基线湖南证监局党委书记、局长任期记录，证伪旧库“2015.08起始”错误（值：`2021`） | endYear=2021（原文直接记载） | `supported_direct` | S002@1（正文第1—2段）；S003@2（正文第1段）；S004@1（正文第3段） | 公开投影：2021 | 已写入 `research-data/people/he-qingwen.json` 并投影至 `generatedResearch.ts` |
| F034@2 | `career/he-qingwen-hunan-evidence/endMonth` | 升级基线湖南证监局党委书记、局长任期记录，证伪旧库“2015.08起始”错误（值：`6`） | endMonth=6（原文直接记载） | `supported_direct` | S002@1（正文第1—2段）；S003@2（正文第1段）；S004@1（正文第3段） | 公开投影：6 | 已写入 `research-data/people/he-qingwen.json` 并投影至 `generatedResearch.ts` |
| F035@1 | `career/he-qingwen-cffex-obs-202311/recordKind` | 新增2023年11月9日中金所党委书记、董事长履职观察点（值：`"observation"`） | 非日期字段（随所属记录精度） | `supported_observation` | S005@1（正文第1段） | 公开投影："observation" | 已写入 `research-data/people/he-qingwen.json` 并投影至 `generatedResearch.ts` |
| F036@1 | `career/he-qingwen-cffex-obs-202311/unitId` | 新增2023年11月9日中金所党委书记、董事长履职观察点（值：`"csrc-cffex"`） | 非日期字段（随所属记录精度） | `supported_observation` | S005@1（正文第1段） | 公开投影："csrc-cffex" | 已写入 `research-data/people/he-qingwen.json` 并投影至 `generatedResearch.ts` |
| F037@1 | `career/he-qingwen-cffex-obs-202311/unitName` | 新增2023年11月9日中金所党委书记、董事长履职观察点（值：`"中国金融期货交易所"`） | 非日期字段（随所属记录精度） | `supported_observation` | S005@1（正文第1段） | 公开投影："中国金融期货交易所" | 已写入 `research-data/people/he-qingwen.json` 并投影至 `generatedResearch.ts` |
| F038@1 | `career/he-qingwen-cffex-obs-202311/position` | 新增2023年11月9日中金所党委书记、董事长履职观察点（值：`"党委书记、董事长"`） | 非日期字段（随所属记录精度） | `supported_observation` | S005@1（正文第1段） | 公开投影："党委书记、董事长" | 已写入 `research-data/people/he-qingwen.json` 并投影至 `generatedResearch.ts` |
| F039@1 | `career/he-qingwen-cffex-obs-202311/observedAt` | 新增2023年11月9日中金所党委书记、董事长履职观察点（值：`{"year":2023,"month":11,"day":9}`） | observedAt={"year":2023,"month":11,"day":9}（时间点观察） | `supported_observation` | S005@1（正文第1段） | 公开投影：{"year":2023,"month":11,"day":9} | 已写入 `research-data/people/he-qingwen.json` 并投影至 `generatedResearch.ts` |

## 推理台账

- 无 `derived` 推理；全部36条事实均为 `supported_direct` 或 `supported_observation`。

## 冲突与拒绝记录

| 争议属性 | 说法A及来源 | 说法B及来源 | 是否同一日期／职务口径 | 处理及理由 | 待查链接／搜索式 |
| --- | --- | --- | --- | --- | --- |
| 出生年月与会机关任职真伪 | 旧库原始记录：1969年11月生，2008.05—2015.08任证监会市场监管部副处长、处长，2015.08任湖南证监局局长 | S001 财新网＋S002 红网＋S004 第一财经：1967年1月生，“未曾在证监会机关部门履职”，历任河南局、湖北局、江西局局长，2018年11月方由江西局调任湖南局局长 | 核心身份与整段履历 | **采信财新、一财与红网，彻底清除旧库编造的市场部经历与错误生年** | 无需再查 |

## 职业时间线缺口与下一轮

| 缺口 | 已知边界（不强推任期） | 要找的材料 | 下一条完整查询 | 优先级 |
| --- | --- | --- | --- | --- |
| 河南局、湖北局、江西局三段任职各自的起始年份及教育背景 | 已知先后任河南局纪委书记兼副局长、湖北局纪委书记、江西局局长（2018.11卸任） | 江西证监局／湖北证监局历史政务公开 | `"何庆文" "江西证监局" 2014 OR 2015 OR 2016` | 低 |

## 本轮交付与续接

- 新增有效岗位／教育经历／日期属性：补齐性别“男”、出生年月“1967年1月”与现职级“正厅局级”；新增河南证监局、湖北证监局、江西证监局3段历史任职，升级2018.11—2021.06湖南证监局局长任期，并新增2023-11-09中金所董事长观察点。
- 删除或纠正的错误及依据：证伪旧库“1969年11月生”“证监会市场监管部副处长／处长”“2015.08任湖南局局长”三项严重失实。
- 来源对应复查结果：全部已发布事实均绑定 `reading: "read"` 原文定位摘录，无悬空引用，无观察点冒充连续任期起止；重名干扰源已显式归档为 `reading: "wrong_person"`。
- 页面及结构验证（仅实际执行后填写）：已通过 `npm run research:check`、`npm run audit:data`、`npm run test:records`、`npm run test:relations`、`npm run test:research`、`npm run test:safety` 及生产构建 `npm run build` 校验。
- 结束状态：本轮研究完成（核心锚点与主干履历已入库，细分早期缺口转入后续深化队列）。
- 停止条件满足情况：已核清核心身份、现职状态、关键正副局／部级履历与学历锚点，证伪旧库硬伤并留下精确下一查询。
- 上次停在查询ID／来源ID：`Q001` ／ `S006`
- 最后处理事实ID／推理ID及当前阶段：`F039@1` ／ 无 `I` 推理项（已完成工作台导入与公开投影）
- 已证实待入库事实及原因／拟写入字段：无（本轮已证实事实已全部通过 `research:import --write --expect` 入库）。
- 旧模型线索对账完成与剩余项：旧库核心学历与主干履历线索已完成对账；待核候选见上表 `candidate` 项。
- 输入变更后需要重新计算或撤销的推理：无依赖推理受影响。
- 下一步必须先执行的搜索式或原文链接：`"何庆文" "江西证监局" 局长 2015 OR 2016`
- 尚未访问的高价值来源：《中国证券期货年鉴》历史卷、学位论文库及部分脚本受阻的交易所官网内页（详见渠道覆盖表）。
- 是否需要用户提供合法访问权限或已有资料：否（公开渠道与本地 Google Chrome 浏览器即可继续推进）。
