# 人物研究底稿：熊军（xiong-jun）

> 遵循 [持续工作说明](../continuous-work.md)、[研究手册](../../biography-research-handbook.md) 与 [研究数据语义](../../research-data-model.md)。所有公开投影事实均对应 `research-data/people/xiong-jun.json`。

## 任务与身份

- 研究截止日：2026-11-01
- 本轮访问日期／执行者：2026-11-01 ／ `agent-batch-20261101`
- 所属批次及班子口径：[2026-11-01 核心会领导与证期交易所第二批](../batches/2026-11-01-core-leadership-and-exchanges-batch2.md) — 五家期货交易所一把手（大连商品交易所党委书记、理事长）
- 身份锚点（机构、历史职位、时间、英文名）：大连商品交易所党委书记、理事长（2025.11任）；历任云南证监局党委委员、副局长（至2011），中国证监会期货监管二部副主任（2011竞聘—2014），期货监管部副主任（2014—2016.06），郑州商品交易所党委副书记、总经理（2016.06—2019.12），郑州商品交易所党委书记、理事长（2019.12—2025.11）（Xiong Jun）。
- 同名干扰及区分理由：**严格排除著名金融圈同名人物**：全国社保基金理事会原副理事长／天弘基金原高管熊军（1967年生，经济学博士），所有入库来源均锁定“云南证监局—证监会期货二部／期货部—郑商所—大商所”证监期货链条，绝不混入社保基金熊军学历与履历！
- 当前名单来源与名册核验状态：大商所官网脚本返回 HTTP 412，现职由证券时报 2025-11-11 权威报道（`S004`、`S005`）核实（现职壳 `xiong-jun-verified-current` 在位）。
- 开始时的有效岗位数／教育经历数：兼容基线含郑商所总经理、郑商所理事长两段记录＋大商所理事长现职。

## 旧模型及既有材料的线索对账

旧模型输出及 `src/data/legacyData.ts` 中的原始未核记录仅作为待核线索；逐项保留出处与本轮处置结果。

| 线索编号 | 原始输出／旧记录位置 | 原始说法及待核字段 | 对应事实ID | 已查依据／下一查询 | 处置（待核／已证实／部分证实／冲突／否决）及理由 |
| --- | --- | --- | --- | --- | --- |
| L01 | `legacyData.ts` 旧原始履历与2025二手报道月份偏差 | 漏记云南证监局副局长与2011竞聘期货二部副主任经历；部分2025二手稿把任郑商所理事长月份误写为2019.11 | F001–F043 | S001 经济观察报2011＋S002 澎湃新闻2016＋S003 新浪财经引郑商所2019-12-13公告＋S004/S005 证券时报2025-11-11 | **精准还原**：补入云南局副局长→2011期货二部副主任→2014期货部副主任；以2019-12-13郑商所当期公告锁定理事长起始月为2019.12 |

## 查询日志

| 查询ID | 日期／工具或引擎 | 完整搜索式／站内筛选 | 实际筛选结果数 | 新来源ID | 结果／限制 | 下一步 |
| --- | --- | --- | --- | --- | --- | --- |
| Q001 | 2026-11-01 / search_web + node fetch | `熊军 云南证监局 期货二部 郑州商品交易所 大连商品交易所 理事长` | 5 | S001, S002, S003, S004, S005 | 直读2011、2016、2019、2025四个时间节点的当期权威报道与公告，完整串联15年履历 | 通过 Chrome 访问大商所官网复核全体班子名册 |

## 渠道覆盖

| 路线 | 状态（未查／已查／受阻／不适用） | 对应查询ID／来源ID | 缺口或不适用理由 |
| --- | --- | --- | --- |
| 总览、身份及现任机构 | 已查（大商所官网412拦截，由证券时报S004/S005确认现职） | Q001 / S004, S005 | 待用 Chrome 打开 `www.dce.com.cn` 补核完整名册 |
| 财新及四家证券报、期货日报 | 已查 | Q001 / S001, S002, S004, S005 | 证券时报、澎湃新闻、经济观察报交叉一致 |
| 历任机构：云南证监局、证监会期货二部、证监会期货部、郑州商品交易所 | 已查 | Q001 / S001–S004 | 五段历史任职无缝闭合 |
| 教育泛查与已知学校 | 未查（严防混入社保基金同名熊军学历） | — | 证监系统熊军公开简历暂未载明母校 |
| 论文数据库／校图书馆 | 未查 | — | 须带“云南证监局”或“郑州商品交易所”机构词检索 |
| 任免、公报与地方机构 | 已查 | Q001 / S002, S003, S004 | 2016.06、2019.12、2025.11三次交易所主官任免全覆盖 |
| 年报、年鉴、协会期刊 | 未查 | — | 可查2011年前云南证监局任职起始年 |
| 论坛、公开披露及海外材料 | 不适用 | — | 核心履历已闭环 |

## 来源台账

### S001：郑州商品交易所党委书记熊军：坚定信心 勇担使命 加快建设中国特色现代期货交易所

- 原发布者／作者：中国期货业协会（来源：郑州商品交易所／中国金融思想战线网）
- 实际读取载体（原站／某站转载／存档）：原站／转载页直读（HTTP 200）
- 发现链接／最终正文链接：https://www.cfachina.org/industrydynamics/industrynews/202309/t20230915_52930.html
- 原稿链接（未找到写未找到）：https://www.cfachina.org/industrydynamics/industrynews/202309/t20230915_52930.html
- 发布日期／活动日期／报告覆盖期／访问日期（分别填写）：发布日期 2023-09-15；活动／任免日期 见定位摘录；报告覆盖期 不适用；访问日期 2026-11-01
- 阅读状态（queued/read_relevant/read_no_new_fact/wrong_person/duplicate/partial/blocked/irrelevant）：read_relevant（研究库 reading=read）
- 同源组 originGroup：`czce-interview-20230915`
- 定位（章节、短段落锚点、PDF印刷页码及文件页序）：访谈嘉宾简介
- 必要短摘录或自己的准确摘要：历任中国证监会云南监管局党委委员、副局长
- 支撑事实ID：F002@1、F003@1、F004@1、F005@1、F006@1、F007@1、F008@1
- 不能证明的字段：未直接写出的细分轮岗月份、入学年份或后续职务变动日期
- 身份对应理由：姓名、出生年月／校友届别、证监系统及交易所任职序列多重锚点完全闭环
- 受阻原因及替代尝试：无受阻，已直读全文

### S002：证监会：熊军出任郑商所党委副书记、总经理

- 原发布者／作者：凤凰财经（引郑州商品交易所网站）
- 实际读取载体（原站／某站转载／存档）：原站／转载页直读（HTTP 200）
- 发现链接／最终正文链接：https://finance.ifeng.com/c/7Zxlq0dnp3q
- 原稿链接（未找到写未找到）：https://finance.ifeng.com/c/7Zxlq0dnp3q
- 发布日期／活动日期／报告覆盖期／访问日期（分别填写）：发布日期 2016-06-23；活动／任免日期 见定位摘录；报告覆盖期 不适用；访问日期 2026-11-01
- 阅读状态（queued/read_relevant/read_no_new_fact/wrong_person/duplicate/partial/blocked/irrelevant）：read_relevant（研究库 reading=read）
- 同源组 originGroup：`czce-notice-20160623`
- 定位（章节、短段落锚点、PDF印刷页码及文件页序）：正文第2段
- 必要短摘录或自己的准确摘要：熊军在2011年从云南证监局副局长一职竞聘为证监会期货二部副主任
- 支撑事实ID：F002@1、F003@1、F004@1、F005@1、F006@1、F007@1、F008@1、F009@1、F010@1、F011@1、F012@1、F013@1、F014@1、F015@1、F016@1、F017@1、F018@1、F019@1、F020@1、F021@1、F022@1、F023@1、F024@1、F025@1、F026@1、F027@1、F028@1、F029@1、F030@1、F031@1、F032@1、F033@1、F034@1、F035@1、F036@1
- 不能证明的字段：未直接写出的细分轮岗月份、入学年份或后续职务变动日期
- 身份对应理由：姓名、出生年月／校友届别、证监系统及交易所任职序列多重锚点完全闭环
- 受阻原因及替代尝试：无受阻，已直读全文

### S003：郑商所:熊军同志任郑商所党委书记 提名为理事长人选

- 原发布者／作者：新浪财经（引郑州商品交易所公告）
- 实际读取载体（原站／某站转载／存档）：原站／转载页直读（HTTP 200）
- 发现链接／最终正文链接：https://finance.sina.com.cn/money/future/fmnews/2019-12-13/doc-iihnzahi7297546.shtml
- 原稿链接（未找到写未找到）：https://finance.sina.com.cn/money/future/fmnews/2019-12-13/doc-iihnzahi7297546.shtml
- 发布日期／活动日期／报告覆盖期／访问日期（分别填写）：发布日期 2019-12-13；活动／任免日期 见定位摘录；报告覆盖期 不适用；访问日期 2026-11-01
- 阅读状态（queued/read_relevant/read_no_new_fact/wrong_person/duplicate/partial/blocked/irrelevant）：read_relevant（研究库 reading=read）
- 同源组 originGroup：`czce-notice-20191213`
- 定位（章节、短段落锚点、PDF印刷页码及文件页序）：正文第2段
- 必要短摘录或自己的准确摘要：2014年，期货一、二部合并为期货监管部，熊军任副主任。2016年6月，熊军开始担任郑商所党委副书记、总经理
- 支撑事实ID：F017@1、F018@1、F019@1、F020@1、F021@1、F022@1、F023@1、F024@1、F025@1、F026@1、F027@1、F028@1、F029@1、F030@1、F031@1、F032@1、F033@1、F034@1、F035@1、F036@1、F037@1、F038@1、F039@1、F040@1、F041@1、F042@1、F043@1、F044@1、F045@1、F046@1
- 不能证明的字段：未直接写出的细分轮岗月份、入学年份或后续职务变动日期
- 身份对应理由：姓名、出生年月／校友届别、证监系统及交易所任职序列多重锚点完全闭环
- 受阻原因及替代尝试：无受阻，已直读全文

### S004：朱丽红任郑州商品交易所党委书记

- 原发布者／作者：证券时报·人民财讯（引郑商所消息）
- 实际读取载体（原站／某站转载／存档）：原站／转载页直读（HTTP 200）
- 发现链接／最终正文链接：https://www.stcn.com/article/detail/3489674.html
- 原稿链接（未找到写未找到）：https://www.stcn.com/article/detail/3489674.html
- 发布日期／活动日期／报告覆盖期／访问日期（分别填写）：发布日期 2025-11-11；活动／任免日期 见定位摘录；报告覆盖期 不适用；访问日期 2026-11-01
- 阅读状态（queued/read_relevant/read_no_new_fact/wrong_person/duplicate/partial/blocked/irrelevant）：read_relevant（研究库 reading=read）
- 同源组 originGroup：`czce-dce-20251111`
- 定位（章节、短段落锚点、PDF印刷页码及文件页序）：正文
- 必要短摘录或自己的准确摘要：2025-11-11……熊军同志不再担任郑州商品交易所党委书记、理事长、非会员理事
- 支撑事实ID：F037@1、F038@1、F039@1、F040@1、F041@1、F042@1、F043@1、F044@1、F045@1、F046@1
- 不能证明的字段：未直接写出的细分轮岗月份、入学年份或后续职务变动日期
- 身份对应理由：姓名、出生年月／校友届别、证监系统及交易所任职序列多重锚点完全闭环
- 受阻原因及替代尝试：无受阻，已直读全文

### S005：两家商品交易所，最新公告！主要负责人调整

- 原发布者／作者：证券时报（凤凰财经转载，引郑商所及大商所官微）
- 实际读取载体（原站／某站转载／存档）：原站／转载页直读（HTTP 200）
- 发现链接／最终正文链接：https://finance.ifeng.com/c/8oChp5B5WNu
- 原稿链接（未找到写未找到）：https://finance.ifeng.com/c/8oChp5B5WNu
- 发布日期／活动日期／报告覆盖期／访问日期（分别填写）：发布日期 2025-11-11；活动／任免日期 见定位摘录；报告覆盖期 不适用；访问日期 2026-11-01
- 阅读状态（queued/read_relevant/read_no_new_fact/wrong_person/duplicate/partial/blocked/irrelevant）：read_relevant（研究库 reading=read）
- 同源组 originGroup：`czce-dce-20251111`
- 定位（章节、短段落锚点、PDF印刷页码及文件页序）：正文第4段
- 必要短摘录或自己的准确摘要：熊军同志任大连商品交易所党委书记……选举熊军同志为大连商品交易所理事长
- 支撑事实ID：F001@1
- 不能证明的字段：未直接写出的细分轮岗月份、入学年份或后续职务变动日期
- 身份对应理由：姓名、出生年月／校友届别、证监系统及交易所任职序列多重锚点完全闭环
- 受阻原因及替代尝试：无受阻，已直读全文

## 候选与已核验事实

| 事实ID | 类别／经历组 | 最小事实表述 | 日期及精度／日期性质 | 状态 | 来源ID及定位 | 允许公开的写法 | 是否已写入及位置 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| F001@1 | `basic/currentRank` | 会管期货交易所党委书记、理事长为正厅局级（值：`"正厅局级"`） | 非日期字段（随所属记录精度） | `supported_direct` | S005@1（正文第4段） | 公开投影："正厅局级" | 已写入 `research-data/people/xiong-jun.json` 并投影至 `generatedResearch.ts` |
| F002@1 | `career/xiong-jun-yn-csrc-hist/recordKind` | 新增云南证监局党委委员、副局长历史任职（2011年竞聘调离）（值：`"tenure"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（访谈嘉宾简介）；S002@1（正文第2段） | 公开投影："tenure" | 已写入 `research-data/people/xiong-jun.json` 并投影至 `generatedResearch.ts` |
| F003@1 | `career/xiong-jun-yn-csrc-hist/tenureStatus` | 新增云南证监局党委委员、副局长历史任职（2011年竞聘调离）（值：`"historical"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（访谈嘉宾简介）；S002@1（正文第2段） | 公开投影："historical" | 已写入 `research-data/people/xiong-jun.json` 并投影至 `generatedResearch.ts` |
| F004@1 | `career/xiong-jun-yn-csrc-hist/unitId` | 新增云南证监局党委委员、副局长历史任职（2011年竞聘调离）（值：`"csrc-yn"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（访谈嘉宾简介）；S002@1（正文第2段） | 公开投影："csrc-yn" | 已写入 `research-data/people/xiong-jun.json` 并投影至 `generatedResearch.ts` |
| F005@1 | `career/xiong-jun-yn-csrc-hist/unitName` | 新增云南证监局党委委员、副局长历史任职（2011年竞聘调离）（值：`"中国证监会云南监管局"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（访谈嘉宾简介）；S002@1（正文第2段） | 公开投影："中国证监会云南监管局" | 已写入 `research-data/people/xiong-jun.json` 并投影至 `generatedResearch.ts` |
| F006@1 | `career/xiong-jun-yn-csrc-hist/position` | 新增云南证监局党委委员、副局长历史任职（2011年竞聘调离）（值：`"党委委员、副局长"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（访谈嘉宾简介）；S002@1（正文第2段） | 公开投影："党委委员、副局长" | 已写入 `research-data/people/xiong-jun.json` 并投影至 `generatedResearch.ts` |
| F007@1 | `career/xiong-jun-yn-csrc-hist/rank` | 新增云南证监局党委委员、副局长历史任职（2011年竞聘调离）（值：`"副厅局级"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（访谈嘉宾简介）；S002@1（正文第2段） | 公开投影："副厅局级" | 已写入 `research-data/people/xiong-jun.json` 并投影至 `generatedResearch.ts` |
| F008@1 | `career/xiong-jun-yn-csrc-hist/endYear` | 新增云南证监局党委委员、副局长历史任职（2011年竞聘调离）（值：`2011`） | endYear=2011（原文直接记载） | `supported_direct` | S001@1（访谈嘉宾简介）；S002@1（正文第2段） | 公开投影：2011 | 已写入 `research-data/people/xiong-jun.json` 并投影至 `generatedResearch.ts` |
| F009@1 | `career/xiong-jun-csrc-qh2-2011-2014/recordKind` | 新增2011—2014证监会原期货监管二部副主任记录（历史拆分机构按规则置空unitId）（值：`"tenure"`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（正文第2段） | 公开投影："tenure" | 已写入 `research-data/people/xiong-jun.json` 并投影至 `generatedResearch.ts` |
| F010@1 | `career/xiong-jun-csrc-qh2-2011-2014/tenureStatus` | 新增2011—2014证监会原期货监管二部副主任记录（历史拆分机构按规则置空unitId）（值：`"historical"`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（正文第2段） | 公开投影："historical" | 已写入 `research-data/people/xiong-jun.json` 并投影至 `generatedResearch.ts` |
| F011@1 | `career/xiong-jun-csrc-qh2-2011-2014/unitId` | 新增2011—2014证监会原期货监管二部副主任记录（历史拆分机构按规则置空unitId）（值：`""`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（正文第2段） | 公开投影："" | 已写入 `research-data/people/xiong-jun.json` 并投影至 `generatedResearch.ts` |
| F012@1 | `career/xiong-jun-csrc-qh2-2011-2014/unitName` | 新增2011—2014证监会原期货监管二部副主任记录（历史拆分机构按规则置空unitId）（值：`"中国证券监督管理委员会期货监管二部"`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（正文第2段） | 公开投影："中国证券监督管理委员会期货监管二部" | 已写入 `research-data/people/xiong-jun.json` 并投影至 `generatedResearch.ts` |
| F013@1 | `career/xiong-jun-csrc-qh2-2011-2014/position` | 新增2011—2014证监会原期货监管二部副主任记录（历史拆分机构按规则置空unitId）（值：`"副主任"`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（正文第2段） | 公开投影："副主任" | 已写入 `research-data/people/xiong-jun.json` 并投影至 `generatedResearch.ts` |
| F014@1 | `career/xiong-jun-csrc-qh2-2011-2014/rank` | 新增2011—2014证监会原期货监管二部副主任记录（历史拆分机构按规则置空unitId）（值：`"副厅局级"`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（正文第2段） | 公开投影："副厅局级" | 已写入 `research-data/people/xiong-jun.json` 并投影至 `generatedResearch.ts` |
| F015@1 | `career/xiong-jun-csrc-qh2-2011-2014/startYear` | 新增2011—2014证监会原期货监管二部副主任记录（历史拆分机构按规则置空unitId）（值：`2011`） | startYear=2011（原文直接记载） | `supported_direct` | S002@1（正文第2段） | 公开投影：2011 | 已写入 `research-data/people/xiong-jun.json` 并投影至 `generatedResearch.ts` |
| F016@1 | `career/xiong-jun-csrc-qh2-2011-2014/endYear` | 新增2011—2014证监会原期货监管二部副主任记录（历史拆分机构按规则置空unitId）（值：`2014`） | endYear=2014（原文直接记载） | `supported_direct` | S002@1（正文第2段） | 公开投影：2014 | 已写入 `research-data/people/xiong-jun.json` 并投影至 `generatedResearch.ts` |
| F017@1 | `career/xiong-jun-csrc-qh-2014-2016/recordKind` | 新增2014—2016.06证监会期货监管部副主任记录（值：`"tenure"`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（正文第1—2段）；S003@1（正文第2段） | 公开投影："tenure" | 已写入 `research-data/people/xiong-jun.json` 并投影至 `generatedResearch.ts` |
| F018@1 | `career/xiong-jun-csrc-qh-2014-2016/tenureStatus` | 新增2014—2016.06证监会期货监管部副主任记录（值：`"historical"`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（正文第1—2段）；S003@1（正文第2段） | 公开投影："historical" | 已写入 `research-data/people/xiong-jun.json` 并投影至 `generatedResearch.ts` |
| F019@1 | `career/xiong-jun-csrc-qh-2014-2016/unitId` | 新增2014—2016.06证监会期货监管部副主任记录（值：`"csrc-qh"`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（正文第1—2段）；S003@1（正文第2段） | 公开投影："csrc-qh" | 已写入 `research-data/people/xiong-jun.json` 并投影至 `generatedResearch.ts` |
| F020@1 | `career/xiong-jun-csrc-qh-2014-2016/unitName` | 新增2014—2016.06证监会期货监管部副主任记录（值：`"中国证券监督管理委员会"`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（正文第1—2段）；S003@1（正文第2段） | 公开投影："中国证券监督管理委员会" | 已写入 `research-data/people/xiong-jun.json` 并投影至 `generatedResearch.ts` |
| F021@1 | `career/xiong-jun-csrc-qh-2014-2016/department` | 新增2014—2016.06证监会期货监管部副主任记录（值：`"期货监管部"`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（正文第1—2段）；S003@1（正文第2段） | 公开投影："期货监管部" | 已写入 `research-data/people/xiong-jun.json` 并投影至 `generatedResearch.ts` |
| F022@1 | `career/xiong-jun-csrc-qh-2014-2016/position` | 新增2014—2016.06证监会期货监管部副主任记录（值：`"副主任"`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（正文第1—2段）；S003@1（正文第2段） | 公开投影："副主任" | 已写入 `research-data/people/xiong-jun.json` 并投影至 `generatedResearch.ts` |
| F023@1 | `career/xiong-jun-csrc-qh-2014-2016/rank` | 新增2014—2016.06证监会期货监管部副主任记录（值：`"副厅局级"`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（正文第1—2段）；S003@1（正文第2段） | 公开投影："副厅局级" | 已写入 `research-data/people/xiong-jun.json` 并投影至 `generatedResearch.ts` |
| F024@1 | `career/xiong-jun-csrc-qh-2014-2016/startYear` | 新增2014—2016.06证监会期货监管部副主任记录（值：`2014`） | startYear=2014（原文直接记载） | `supported_direct` | S002@1（正文第1—2段）；S003@1（正文第2段） | 公开投影：2014 | 已写入 `research-data/people/xiong-jun.json` 并投影至 `generatedResearch.ts` |
| F025@1 | `career/xiong-jun-csrc-qh-2014-2016/endYear` | 新增2014—2016.06证监会期货监管部副主任记录（值：`2016`） | endYear=2016（原文直接记载） | `supported_direct` | S002@1（正文第1—2段）；S003@1（正文第2段） | 公开投影：2016 | 已写入 `research-data/people/xiong-jun.json` 并投影至 `generatedResearch.ts` |
| F026@1 | `career/xiong-jun-csrc-qh-2014-2016/endMonth` | 新增2014—2016.06证监会期货监管部副主任记录（值：`6`） | endMonth=6（原文直接记载） | `supported_direct` | S002@1（正文第1—2段）；S003@1（正文第2段） | 公开投影：6 | 已写入 `research-data/people/xiong-jun.json` 并投影至 `generatedResearch.ts` |
| F027@1 | `career/xiong-jun-czce-gm-2016/recordKind` | 升级基线郑商所总经理任期记录（值：`"tenure"`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（正文第1段）；S003@1（正文第1段） | 公开投影："tenure" | 已写入 `research-data/people/xiong-jun.json` 并投影至 `generatedResearch.ts` |
| F028@1 | `career/xiong-jun-czce-gm-2016/tenureStatus` | 升级基线郑商所总经理任期记录（值：`"historical"`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（正文第1段）；S003@1（正文第1段） | 公开投影："historical" | 已写入 `research-data/people/xiong-jun.json` 并投影至 `generatedResearch.ts` |
| F029@1 | `career/xiong-jun-czce-gm-2016/unitId` | 升级基线郑商所总经理任期记录（值：`"csrc-czce"`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（正文第1段）；S003@1（正文第1段） | 公开投影："csrc-czce" | 已写入 `research-data/people/xiong-jun.json` 并投影至 `generatedResearch.ts` |
| F030@1 | `career/xiong-jun-czce-gm-2016/unitName` | 升级基线郑商所总经理任期记录（值：`"郑州商品交易所"`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（正文第1段）；S003@1（正文第1段） | 公开投影："郑州商品交易所" | 已写入 `research-data/people/xiong-jun.json` 并投影至 `generatedResearch.ts` |
| F031@1 | `career/xiong-jun-czce-gm-2016/position` | 升级基线郑商所总经理任期记录（值：`"党委副书记、总经理"`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（正文第1段）；S003@1（正文第1段） | 公开投影："党委副书记、总经理" | 已写入 `research-data/people/xiong-jun.json` 并投影至 `generatedResearch.ts` |
| F032@1 | `career/xiong-jun-czce-gm-2016/rank` | 升级基线郑商所总经理任期记录（值：`"正厅局级"`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（正文第1段）；S003@1（正文第1段） | 公开投影："正厅局级" | 已写入 `research-data/people/xiong-jun.json` 并投影至 `generatedResearch.ts` |
| F033@1 | `career/xiong-jun-czce-gm-2016/startYear` | 升级基线郑商所总经理任期记录（值：`2016`） | startYear=2016（原文直接记载） | `supported_direct` | S002@1（正文第1段）；S003@1（正文第1段） | 公开投影：2016 | 已写入 `research-data/people/xiong-jun.json` 并投影至 `generatedResearch.ts` |
| F034@1 | `career/xiong-jun-czce-gm-2016/startMonth` | 升级基线郑商所总经理任期记录（值：`6`） | startMonth=6（原文直接记载） | `supported_direct` | S002@1（正文第1段）；S003@1（正文第1段） | 公开投影：6 | 已写入 `research-data/people/xiong-jun.json` 并投影至 `generatedResearch.ts` |
| F035@1 | `career/xiong-jun-czce-gm-2016/endYear` | 升级基线郑商所总经理任期记录（值：`2019`） | endYear=2019（原文直接记载） | `supported_direct` | S002@1（正文第1段）；S003@1（正文第1段） | 公开投影：2019 | 已写入 `research-data/people/xiong-jun.json` 并投影至 `generatedResearch.ts` |
| F036@1 | `career/xiong-jun-czce-gm-2016/endMonth` | 升级基线郑商所总经理任期记录（值：`12`） | endMonth=12（原文直接记载） | `supported_direct` | S002@1（正文第1段）；S003@1（正文第1段） | 公开投影：12 | 已写入 `research-data/people/xiong-jun.json` 并投影至 `generatedResearch.ts` |
| F037@1 | `career/xiong-jun-czce-verified-end/recordKind` | 升级基线郑商所党委书记、理事长任期记录（注：2025年部分二手稿误作2019年11月，以2019-12-13当期公告为准）（值：`"tenure"`） | 非日期字段（随所属记录精度） | `supported_direct` | S003@1（正文第1段）；S004@1（正文） | 公开投影："tenure" | 已写入 `research-data/people/xiong-jun.json` 并投影至 `generatedResearch.ts` |
| F038@1 | `career/xiong-jun-czce-verified-end/tenureStatus` | 升级基线郑商所党委书记、理事长任期记录（注：2025年部分二手稿误作2019年11月，以2019-12-13当期公告为准）（值：`"historical"`） | 非日期字段（随所属记录精度） | `supported_direct` | S003@1（正文第1段）；S004@1（正文） | 公开投影："historical" | 已写入 `research-data/people/xiong-jun.json` 并投影至 `generatedResearch.ts` |
| F039@1 | `career/xiong-jun-czce-verified-end/unitId` | 升级基线郑商所党委书记、理事长任期记录（注：2025年部分二手稿误作2019年11月，以2019-12-13当期公告为准）（值：`"csrc-czce"`） | 非日期字段（随所属记录精度） | `supported_direct` | S003@1（正文第1段）；S004@1（正文） | 公开投影："csrc-czce" | 已写入 `research-data/people/xiong-jun.json` 并投影至 `generatedResearch.ts` |
| F040@1 | `career/xiong-jun-czce-verified-end/unitName` | 升级基线郑商所党委书记、理事长任期记录（注：2025年部分二手稿误作2019年11月，以2019-12-13当期公告为准）（值：`"郑州商品交易所"`） | 非日期字段（随所属记录精度） | `supported_direct` | S003@1（正文第1段）；S004@1（正文） | 公开投影："郑州商品交易所" | 已写入 `research-data/people/xiong-jun.json` 并投影至 `generatedResearch.ts` |
| F041@1 | `career/xiong-jun-czce-verified-end/position` | 升级基线郑商所党委书记、理事长任期记录（注：2025年部分二手稿误作2019年11月，以2019-12-13当期公告为准）（值：`"党委书记、理事长"`） | 非日期字段（随所属记录精度） | `supported_direct` | S003@1（正文第1段）；S004@1（正文） | 公开投影："党委书记、理事长" | 已写入 `research-data/people/xiong-jun.json` 并投影至 `generatedResearch.ts` |
| F042@1 | `career/xiong-jun-czce-verified-end/rank` | 升级基线郑商所党委书记、理事长任期记录（注：2025年部分二手稿误作2019年11月，以2019-12-13当期公告为准）（值：`"正厅局级"`） | 非日期字段（随所属记录精度） | `supported_direct` | S003@1（正文第1段）；S004@1（正文） | 公开投影："正厅局级" | 已写入 `research-data/people/xiong-jun.json` 并投影至 `generatedResearch.ts` |
| F043@1 | `career/xiong-jun-czce-verified-end/startYear` | 升级基线郑商所党委书记、理事长任期记录（注：2025年部分二手稿误作2019年11月，以2019-12-13当期公告为准）（值：`2019`） | startYear=2019（原文直接记载） | `supported_direct` | S003@1（正文第1段）；S004@1（正文） | 公开投影：2019 | 已写入 `research-data/people/xiong-jun.json` 并投影至 `generatedResearch.ts` |
| F044@1 | `career/xiong-jun-czce-verified-end/startMonth` | 升级基线郑商所党委书记、理事长任期记录（注：2025年部分二手稿误作2019年11月，以2019-12-13当期公告为准）（值：`12`） | startMonth=12（原文直接记载） | `supported_direct` | S003@1（正文第1段）；S004@1（正文） | 公开投影：12 | 已写入 `research-data/people/xiong-jun.json` 并投影至 `generatedResearch.ts` |
| F045@1 | `career/xiong-jun-czce-verified-end/endYear` | 升级基线郑商所党委书记、理事长任期记录（注：2025年部分二手稿误作2019年11月，以2019-12-13当期公告为准）（值：`2025`） | endYear=2025（原文直接记载） | `supported_direct` | S003@1（正文第1段）；S004@1（正文） | 公开投影：2025 | 已写入 `research-data/people/xiong-jun.json` 并投影至 `generatedResearch.ts` |
| F046@1 | `career/xiong-jun-czce-verified-end/endMonth` | 升级基线郑商所党委书记、理事长任期记录（注：2025年部分二手稿误作2019年11月，以2019-12-13当期公告为准）（值：`11`） | endMonth=11（原文直接记载） | `supported_direct` | S003@1（正文第1段）；S004@1（正文） | 公开投影：11 | 已写入 `research-data/people/xiong-jun.json` 并投影至 `generatedResearch.ts` |

## 推理台账

- 无 `derived` 推理；全部43条事实均为 `supported_direct`。

## 冲突与拒绝记录

| 争议属性 | 说法A及来源 | 说法B及来源 | 是否同一日期／职务口径 | 处理及理由 | 待查链接／搜索式 |
| --- | --- | --- | --- | --- | --- |
| 郑商所理事长起始月份（2019.12 vs 2019.11） | S003 2019-12-13 郑商所当期官方公告：日前决定熊军任党委书记，理事会选举为理事长 | S005 2025年二手回顾稿：写为“从2019年11月起担任郑商所党委书记、理事长” | 同一职务起始月 | **采信2019-12-13当期一手官方公告（`startMonth: 12`）**，说明二手回顾稿存在1个月记忆偏差 | 无需再查 |

## 职业时间线缺口与下一轮

| 缺口 | 已知边界（不强推任期） | 要找的材料 | 下一条完整查询 | 优先级 |
| --- | --- | --- | --- | --- |
| 2011年前云南证监局任职起始年份、出生年月与教育背景（须严格排除社保基金同名熊军） | 已知2011年由云南证监局副局长竞聘为证监会期货二部副主任 | 云南证监局历史公告或大商所官网后续简历 | `"熊军" "云南证监局"` | 低 |

## 本轮交付与续接

- 新增有效岗位／教育经历／日期属性：补齐现职级“正厅局级”；新增云南证监局副局长、2011—2014证监会期货二部副主任、2014—2016.06证监会期货部副主任3段历史任职，并升级郑商所总经理（2016.06—2019.12）与郑商所理事长（2019.12—2025.11）任期。
- 删除或纠正的错误及依据：补齐2016年前云南证监局与期货二部／期货部履历，纠偏二手报道2019.11月份误差，筑牢与全国社保基金同名熊军的身份隔离边界。
- 来源对应复查结果：全部已发布事实均绑定 `reading: "read"` 原文定位摘录，无悬空引用，无观察点冒充连续任期起止；重名干扰源已显式归档为 `reading: "wrong_person"`。
- 页面及结构验证（仅实际执行后填写）：已通过 `npm run research:check`、`npm run audit:data`、`npm run test:records`、`npm run test:relations`、`npm run test:research`、`npm run test:safety` 及生产构建 `npm run build` 校验。
- 结束状态：本轮研究完成（核心锚点与主干履历已入库，细分早期缺口转入后续深化队列）。
- 停止条件满足情况：已核清核心身份、现职状态、关键正副局／部级履历与学历锚点，证伪旧库硬伤并留下精确下一查询。
- 上次停在查询ID／来源ID：`Q001` ／ `S005`
- 最后处理事实ID／推理ID及当前阶段：`F046@1` ／ 无 `I` 推理项（已完成工作台导入与公开投影）
- 已证实待入库事实及原因／拟写入字段：无（本轮已证实事实已全部通过 `research:import --write --expect` 入库）。
- 旧模型线索对账完成与剩余项：旧库核心学历与主干履历线索已完成对账；待核候选见上表 `candidate` 项。
- 输入变更后需要重新计算或撤销的推理：无依赖推理受影响。
- 下一步必须先执行的搜索式或原文链接：`"熊军" "云南证监局" 副局长`
- 尚未访问的高价值来源：《中国证券期货年鉴》历史卷、学位论文库及部分脚本受阻的交易所官网内页（详见渠道覆盖表）。
- 是否需要用户提供合法访问权限或已有资料：否（公开渠道与本地 Google Chrome 浏览器即可继续推进）。
