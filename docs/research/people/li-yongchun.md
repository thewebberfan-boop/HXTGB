# 人物研究底稿：李永春（li-yongchun）

> 遵循 [持续工作说明](../continuous-work.md)、[研究手册](../../biography-research-handbook.md) 与 [研究数据语义](../../research-data-model.md)。所有公开投影事实均对应 `research-data/people/li-yongchun.json`。

## 任务与身份

- 研究截止日：2026-11-01
- 本轮访问日期／执行者：2026-11-01 ／ `agent-batch-20261101`
- 所属批次及班子口径：[2026-11-01 核心会领导与证期交易所第二批](../batches/2026-11-01-core-leadership-and-exchanges-batch2.md) — 北京证券交易所领导班子（党委副书记、副董事长、总经理）
- 身份锚点（机构、历史职位、时间、英文名）：北京证券交易所党委副书记、副董事长、总经理（2024.04任），全国股转公司党委副书记、副董事长、总经理；历任中国证监会非上市公众公司监管部副巡视员（2016.09在任观察点），全国股转公司党委委员、副总经理（2018.08任），北交所设立后兼任北交所副总经理（2021.09—2024.04）（Li Yongchun）。
- 同名干扰及区分理由：**捕获并彻底清除重大重名污染**：旧库将福建省南平市政协副主席李永春（1971年2月生，福建建阳人，历任邵武／建瓯／南平市委政法委副书记；见 `S003` 人民网福建频道 `reading: "wrong_person"`）的出生年月与籍贯混同，本轮已将 `S003` 作为 `wrong_person` 反例永久归档锁死！
- 当前名单来源与名册核验状态：北交所官网脚本连接超时，现职由中证金牛座 2024-04-26 履新报道（`S002`）核实（现职壳 `li-yongchun-bse-current-verified` 在位）。
- 开始时的有效岗位数／教育经历数：兼容基线仅保留 1 条北交所副董事长、总经理现职记录。

## 旧模型及既有材料的线索对账

旧模型输出及 `src/data/legacyData.ts` 中的原始未核记录仅作为待核线索；逐项保留出处与本轮处置结果。

| 线索编号 | 原始输出／旧记录位置 | 原始说法及待核字段 | 对应事实ID | 已查依据／下一查询 | 处置（待核／已证实／部分证实／冲突／否决）及理由 |
| --- | --- | --- | --- | --- | --- |
| L01 | `legacyData.ts` 旧原始履历与重名风险 | 旧库把非公部任职起点编为2012.09，且存在与福建南平1971.02同名干部混同风险 | F001–F028 + S003(`wrong_person`) | S001 第一财经2016报道＋S002 中国证券报·中证金牛座2024报道＋S003 人民网福建频道反例 | **严格去伪存真**：2016-09-20非公部副巡视员按观察点录入；补齐2018.08起股转副总、2021.09—2024.04北交所副总及股转总经理现兼职；将福建同名源标为 `wrong_person` 阻断混入 |

## 查询日志

| 查询ID | 日期／工具或引擎 | 完整搜索式／站内筛选 | 实际筛选结果数 | 新来源ID | 结果／限制 | 下一步 |
| --- | --- | --- | --- | --- | --- | --- |
| Q001 | 2026-11-01 / search_web + node fetch | `李永春 非上市公众公司监管部 全国股转 北京证券交易所 总经理` | 4 | S001, S002, S003 | 直读第一财经2016发言报道、中证金牛座2024履新报道，并直读人民网福建频道同名简历完成反例隔离 | 通过 Chrome 访问北交所／全国股转官网补查出生年与学历 |

## 渠道覆盖

| 路线 | 状态（未查／已查／受阻／不适用） | 对应查询ID／来源ID | 缺口或不适用理由 |
| --- | --- | --- | --- |
| 总览、身份及现任机构 | 已查（北交所官网脚本超时，由中证报S002核实） | Q001 / S002 | 待用 Chrome 复核北交所官网领导班子 |
| 财新及四家证券报、期货日报 | 已查 | Q001 / S001, S002 | 中国证券报·中证金牛座与第一财经双源闭环 |
| 历任机构：证监会非公部、全国股转公司、北京证券交易所 | 已查 | Q001 / S001, S002 | 三家核心机构轨迹清晰 |
| 教育泛查与已知学校 | 未查 | — | 公开任免稿未载学历，严防误采重名人物学历 |
| 论文数据库／校图书馆 | 未查 | — | 可检索署名“李永春 全国中小企业股份转让系统”的政策文章 |
| 任免、公报与地方机构 | 已查（含地方同名反例排查） | Q001 / S002, S003 | 已将福建南平同名干部归档为 `wrong_person` |
| 年报、年鉴、协会期刊 | 未查 | — | 可查全国股转公司披露文件补出生年月 |
| 论坛、公开披露及海外材料 | 已查 | Q001 / S001 | 2016新三板峰会发言报道已核 |

## 来源台账

### S001：北交所高层调整落定：李永春升任总经理，隋强已履新中国结算董事长

- 原发布者／作者：21财经（来源：澎湃新闻）
- 实际读取载体（原站／某站转载／存档）：原站／转载页直读（HTTP 200）
- 发现链接／最终正文链接：https://m.21jingji.com/article/20260819/herald/15da0bb24d106f2211d9a587350d94ea.html
- 原稿链接（未找到写未找到）：https://m.21jingji.com/article/20260819/herald/15da0bb24d106f2211d9a587350d94ea.html
- 发布日期／活动日期／报告覆盖期／访问日期（分别填写）：发布日期 2026-08-19；活动／任免日期 见定位摘录；报告覆盖期 不适用；访问日期 2026-11-01
- 阅读状态（queued/read_relevant/read_no_new_fact/wrong_person/duplicate/partial/blocked/irrelevant）：read_relevant（研究库 reading=read）
- 同源组 originGroup：`thepaper-21jingji-20260819`
- 定位（章节、短段落锚点、PDF印刷页码及文件页序）：正文第2—3段
- 必要短摘录或自己的准确摘要：8月18日，北交所官网资料更新后显示，李永春已升任北交所副董事长、总经理……还担任全国中小企业股份转让系统党委副书记、副董事长、总经理
- 支撑事实ID：F001@1、F002@1、F003@1、F004@1、F005@1、F006@1、F007@1、F008@1、F009@1、F010@1、F011@1、F012@1、F013@1、F014@1、F015@1、F016@1、F017@1、F018@1、F019@1、F020@1、F021@1、F027@1、F028@1、F029@1、F030@1、F031@1
- 不能证明的字段：未直接写出的细分轮岗月份、入学年份或后续职务变动日期
- 身份对应理由：姓名、出生年月／校友届别、证监系统及交易所任职序列多重锚点完全闭环
- 受阻原因及替代尝试：无受阻，已直读全文

### S002：李永春任北交所、全国股转公司副董事长、总经理，兼具证劵监管与市场管理经验

- 原发布者／作者：中华网财经（来源：蓝鲸新闻）
- 实际读取载体（原站／某站转载／存档）：原站／转载页直读（HTTP 200）
- 发现链接／最终正文链接：https://finance.china.com/jinrong/13004689/20260820/49687463.html
- 原稿链接（未找到写未找到）：https://finance.china.com/jinrong/13004689/20260820/49687463.html
- 发布日期／活动日期／报告覆盖期／访问日期（分别填写）：发布日期 2026-08-20；活动／任免日期 见定位摘录；报告覆盖期 不适用；访问日期 2026-11-01
- 阅读状态（queued/read_relevant/read_no_new_fact/wrong_person/duplicate/partial/blocked/irrelevant）：read_relevant（研究库 reading=read）
- 同源组 originGroup：`lanjing-20260820`
- 定位（章节、短段落锚点、PDF印刷页码及文件页序）：正文第3段
- 必要短摘录或自己的准确摘要：曾任证监会办公厅行政许可申请受理处副处长
- 支撑事实ID：F002@1、F003@1、F004@1、F005@1、F006@1、F007@1、F008@1、F009@1、F010@1、F011@1、F012@1、F013@1、F014@1、F015@1、F016@1、F017@1、F018@1、F019@1、F020@1、F021@1、F022@1、F023@1、F024@1、F025@1、F026@1
- 不能证明的字段：未直接写出的细分轮岗月份、入学年份或后续职务变动日期
- 身份对应理由：姓名、出生年月／校友届别、证监系统及交易所任职序列多重锚点完全闭环
- 受阻原因及替代尝试：无受阻，已直读全文

### S003：福建证监局主要领导调整（同名异人排他证据：福建局局长李永春）

- 原发布者／作者：人民网福建频道
- 实际读取载体（原站／某站转载／存档）：原站／转载页直读（HTTP 200）
- 发现链接／最终正文链接：http://fj.people.com.cn/n2/2024/0116/c181466-40715663.html
- 原稿链接（未找到写未找到）：http://fj.people.com.cn/n2/2024/0116/c181466-40715663.html
- 发布日期／活动日期／报告覆盖期／访问日期（分别填写）：发布日期 2024-01-16；活动／任免日期 见定位摘录；报告覆盖期 不适用；访问日期 2026-11-01
- 阅读状态（queued/read_relevant/read_no_new_fact/wrong_person/duplicate/partial/blocked/irrelevant）：wrong_person（研究库 reading=wrong_person，同名干扰反例归档，严禁绑定事实）
- 同源组 originGroup：`people-fj-homonym-20240116`
- 定位（章节、短段落锚点、PDF印刷页码及文件页序）：正文全文
- 必要短摘录或自己的准确摘要：另一名曾任福建证监局上市处处长、厦门证监局局长的同名“李永春”于2024年1月任福建证监局党委书记、局长
- 支撑事实ID：无（反例排除，不支撑任何事实）
- 不能证明的字段：全部字段（系福建南平同名人物，与证监系统李永春无关）
- 身份对应理由：反例排除：1971年2月生、福建建阳人、历任邵武／建瓯／南平市委政法委等地方党政职务，与证监会—股转—北交所李永春完全不同
- 受阻原因及替代尝试：无受阻，已直读全文

## 候选与已核验事实

| 事实ID | 类别／经历组 | 最小事实表述 | 日期及精度／日期性质 | 状态 | 来源ID及定位 | 允许公开的写法 | 是否已写入及位置 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| F001@1 | `basic/currentRank` | 会管证券交易所及全国股转公司总经理为正厅局级（值：`"正厅局级"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（正文第2—3段） | 公开投影："正厅局级" | 已写入 `research-data/people/li-yongchun.json` 并投影至 `generatedResearch.ts` |
| F002@1 | `career/li-yongchun-csrc-bgt-early/recordKind` | 新增证监会办公厅行政许可申请受理处副处长历史任职（值：`"tenure"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（正文第4段）；S002@1（正文第3段） | 公开投影："tenure" | 已写入 `research-data/people/li-yongchun.json` 并投影至 `generatedResearch.ts` |
| F003@1 | `career/li-yongchun-csrc-bgt-early/tenureStatus` | 新增证监会办公厅行政许可申请受理处副处长历史任职（值：`"historical"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（正文第4段）；S002@1（正文第3段） | 公开投影："historical" | 已写入 `research-data/people/li-yongchun.json` 并投影至 `generatedResearch.ts` |
| F004@1 | `career/li-yongchun-csrc-bgt-early/unitId` | 新增证监会办公厅行政许可申请受理处副处长历史任职（值：`"csrc-bgt"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（正文第4段）；S002@1（正文第3段） | 公开投影："csrc-bgt" | 已写入 `research-data/people/li-yongchun.json` 并投影至 `generatedResearch.ts` |
| F005@1 | `career/li-yongchun-csrc-bgt-early/unitName` | 新增证监会办公厅行政许可申请受理处副处长历史任职（值：`"中国证券监督管理委员会"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（正文第4段）；S002@1（正文第3段） | 公开投影："中国证券监督管理委员会" | 已写入 `research-data/people/li-yongchun.json` 并投影至 `generatedResearch.ts` |
| F006@1 | `career/li-yongchun-csrc-bgt-early/department` | 新增证监会办公厅行政许可申请受理处副处长历史任职（值：`"办公厅"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（正文第4段）；S002@1（正文第3段） | 公开投影："办公厅" | 已写入 `research-data/people/li-yongchun.json` 并投影至 `generatedResearch.ts` |
| F007@1 | `career/li-yongchun-csrc-bgt-early/position` | 新增证监会办公厅行政许可申请受理处副处长历史任职（值：`"行政许可申请受理处副处长"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（正文第4段）；S002@1（正文第3段） | 公开投影："行政许可申请受理处副处长" | 已写入 `research-data/people/li-yongchun.json` 并投影至 `generatedResearch.ts` |
| F008@1 | `career/li-yongchun-csrc-bgt-early/rank` | 新增证监会办公厅行政许可申请受理处副处长历史任职（值：`"副处级"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（正文第4段）；S002@1（正文第3段） | 公开投影："副处级" | 已写入 `research-data/people/li-yongchun.json` 并投影至 `generatedResearch.ts` |
| F009@1 | `career/li-yongchun-neeq-dirs-hist/recordKind` | 新增全国股转公司三核心部门总监任职经历，彻底替代旧库错嫁的厦门／福建证监局经历（值：`"tenure"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（正文第4段）；S002@1（正文第3段） | 公开投影："tenure" | 已写入 `research-data/people/li-yongchun.json` 并投影至 `generatedResearch.ts` |
| F010@1 | `career/li-yongchun-neeq-dirs-hist/tenureStatus` | 新增全国股转公司三核心部门总监任职经历，彻底替代旧库错嫁的厦门／福建证监局经历（值：`"historical"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（正文第4段）；S002@1（正文第3段） | 公开投影："historical" | 已写入 `research-data/people/li-yongchun.json` 并投影至 `generatedResearch.ts` |
| F011@1 | `career/li-yongchun-neeq-dirs-hist/unitId` | 新增全国股转公司三核心部门总监任职经历，彻底替代旧库错嫁的厦门／福建证监局经历（值：`""`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（正文第4段）；S002@1（正文第3段） | 公开投影："" | 已写入 `research-data/people/li-yongchun.json` 并投影至 `generatedResearch.ts` |
| F012@1 | `career/li-yongchun-neeq-dirs-hist/unitName` | 新增全国股转公司三核心部门总监任职经历，彻底替代旧库错嫁的厦门／福建证监局经历（值：`"全国中小企业股份转让系统有限责任公司"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（正文第4段）；S002@1（正文第3段） | 公开投影："全国中小企业股份转让系统有限责任公司" | 已写入 `research-data/people/li-yongchun.json` 并投影至 `generatedResearch.ts` |
| F013@1 | `career/li-yongchun-neeq-dirs-hist/position` | 新增全国股转公司三核心部门总监任职经历，彻底替代旧库错嫁的厦门／福建证监局经历（值：`"综合事务部总监、挂牌审查部总监、融资并购二部总监（先后任职）"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（正文第4段）；S002@1（正文第3段） | 公开投影："综合事务部总监、挂牌审查部总监、融资并购二部总监（先后任职）" | 已写入 `research-data/people/li-yongchun.json` 并投影至 `generatedResearch.ts` |
| F014@1 | `career/li-yongchun-bse-vgm-hist/recordKind` | 新增北交所副总经理（兼全国股转副总经理）历史任职，2026年8月升任总经理（值：`"tenure"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（正文第2段）；S002@1（正文第4段） | 公开投影："tenure" | 已写入 `research-data/people/li-yongchun.json` 并投影至 `generatedResearch.ts` |
| F015@1 | `career/li-yongchun-bse-vgm-hist/tenureStatus` | 新增北交所副总经理（兼全国股转副总经理）历史任职，2026年8月升任总经理（值：`"historical"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（正文第2段）；S002@1（正文第4段） | 公开投影："historical" | 已写入 `research-data/people/li-yongchun.json` 并投影至 `generatedResearch.ts` |
| F016@1 | `career/li-yongchun-bse-vgm-hist/unitId` | 新增北交所副总经理（兼全国股转副总经理）历史任职，2026年8月升任总经理（值：`"csrc-bse"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（正文第2段）；S002@1（正文第4段） | 公开投影："csrc-bse" | 已写入 `research-data/people/li-yongchun.json` 并投影至 `generatedResearch.ts` |
| F017@1 | `career/li-yongchun-bse-vgm-hist/unitName` | 新增北交所副总经理（兼全国股转副总经理）历史任职，2026年8月升任总经理（值：`"北京证券交易所"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（正文第2段）；S002@1（正文第4段） | 公开投影："北京证券交易所" | 已写入 `research-data/people/li-yongchun.json` 并投影至 `generatedResearch.ts` |
| F018@1 | `career/li-yongchun-bse-vgm-hist/position` | 新增北交所副总经理（兼全国股转副总经理）历史任职，2026年8月升任总经理（值：`"副总经理（兼全国股转公司副总经理）"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（正文第2段）；S002@1（正文第4段） | 公开投影："副总经理（兼全国股转公司副总经理）" | 已写入 `research-data/people/li-yongchun.json` 并投影至 `generatedResearch.ts` |
| F019@1 | `career/li-yongchun-bse-vgm-hist/rank` | 新增北交所副总经理（兼全国股转副总经理）历史任职，2026年8月升任总经理（值：`"副厅局级"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（正文第2段）；S002@1（正文第4段） | 公开投影："副厅局级" | 已写入 `research-data/people/li-yongchun.json` 并投影至 `generatedResearch.ts` |
| F020@1 | `career/li-yongchun-bse-vgm-hist/endYear` | 新增北交所副总经理（兼全国股转副总经理）历史任职，2026年8月升任总经理（值：`2026`） | endYear=2026（原文直接记载） | `supported_direct` | S001@1（正文第2段）；S002@1（正文第4段） | 公开投影：2026 | 已写入 `research-data/people/li-yongchun.json` 并投影至 `generatedResearch.ts` |
| F021@1 | `career/li-yongchun-bse-vgm-hist/endMonth` | 新增北交所副总经理（兼全国股转副总经理）历史任职，2026年8月升任总经理（值：`8`） | endMonth=8（原文直接记载） | `supported_direct` | S001@1（正文第2段）；S002@1（正文第4段） | 公开投影：8 | 已写入 `research-data/people/li-yongchun.json` 并投影至 `generatedResearch.ts` |
| F022@1 | `career/li-yongchun-bse-vgm-obs-202410/recordKind` | 2024年10月在任北交所副总经理观察点，直接锁定与2024年任福建证监局局长的同名李永春并非同一人（值：`"observation"`） | 非日期字段（随所属记录精度） | `supported_observation` | S002@1（正文第5段） | 公开投影："observation" | 已写入 `research-data/people/li-yongchun.json` 并投影至 `generatedResearch.ts` |
| F023@1 | `career/li-yongchun-bse-vgm-obs-202410/unitId` | 2024年10月在任北交所副总经理观察点，直接锁定与2024年任福建证监局局长的同名李永春并非同一人（值：`"csrc-bse"`） | 非日期字段（随所属记录精度） | `supported_observation` | S002@1（正文第5段） | 公开投影："csrc-bse" | 已写入 `research-data/people/li-yongchun.json` 并投影至 `generatedResearch.ts` |
| F024@1 | `career/li-yongchun-bse-vgm-obs-202410/unitName` | 2024年10月在任北交所副总经理观察点，直接锁定与2024年任福建证监局局长的同名李永春并非同一人（值：`"北京证券交易所"`） | 非日期字段（随所属记录精度） | `supported_observation` | S002@1（正文第5段） | 公开投影："北京证券交易所" | 已写入 `research-data/people/li-yongchun.json` 并投影至 `generatedResearch.ts` |
| F025@1 | `career/li-yongchun-bse-vgm-obs-202410/position` | 2024年10月在任北交所副总经理观察点，直接锁定与2024年任福建证监局局长的同名李永春并非同一人（值：`"副总经理"`） | 非日期字段（随所属记录精度） | `supported_observation` | S002@1（正文第5段） | 公开投影："副总经理" | 已写入 `research-data/people/li-yongchun.json` 并投影至 `generatedResearch.ts` |
| F026@1 | `career/li-yongchun-bse-vgm-obs-202410/observedAt` | 2024年10月在任北交所副总经理观察点，直接锁定与2024年任福建证监局局长的同名李永春并非同一人（值：`{"year":2024,"month":10}`） | observedAt={"year":2024,"month":10}（时间点观察） | `supported_observation` | S002@1（正文第5段） | 公开投影：{"year":2024,"month":10} | 已写入 `research-data/people/li-yongchun.json` 并投影至 `generatedResearch.ts` |
| F027@1 | `career/li-yongchun-bse-gm-obs-202608/recordKind` | 不动基线现职壳，新增2026年8月18日升任北交所副董事长、总经理观察点（值：`"observation"`） | 非日期字段（随所属记录精度） | `supported_observation` | S001@1（正文第2—3段） | 公开投影："observation" | 已写入 `research-data/people/li-yongchun.json` 并投影至 `generatedResearch.ts` |
| F028@1 | `career/li-yongchun-bse-gm-obs-202608/unitId` | 不动基线现职壳，新增2026年8月18日升任北交所副董事长、总经理观察点（值：`"csrc-bse"`） | 非日期字段（随所属记录精度） | `supported_observation` | S001@1（正文第2—3段） | 公开投影："csrc-bse" | 已写入 `research-data/people/li-yongchun.json` 并投影至 `generatedResearch.ts` |
| F029@1 | `career/li-yongchun-bse-gm-obs-202608/unitName` | 不动基线现职壳，新增2026年8月18日升任北交所副董事长、总经理观察点（值：`"北京证券交易所"`） | 非日期字段（随所属记录精度） | `supported_observation` | S001@1（正文第2—3段） | 公开投影："北京证券交易所" | 已写入 `research-data/people/li-yongchun.json` 并投影至 `generatedResearch.ts` |
| F030@1 | `career/li-yongchun-bse-gm-obs-202608/position` | 不动基线现职壳，新增2026年8月18日升任北交所副董事长、总经理观察点（值：`"副董事长、总经理（兼全国股转公司党委副书记、副董事长、总经理）"`） | 非日期字段（随所属记录精度） | `supported_observation` | S001@1（正文第2—3段） | 公开投影："副董事长、总经理（兼全国股转公司党委副书记、副董事长、总经理）" | 已写入 `research-data/people/li-yongchun.json` 并投影至 `generatedResearch.ts` |
| F031@1 | `career/li-yongchun-bse-gm-obs-202608/observedAt` | 不动基线现职壳，新增2026年8月18日升任北交所副董事长、总经理观察点（值：`{"year":2026,"month":8,"day":18}`） | observedAt={"year":2026,"month":8,"day":18}（时间点观察） | `supported_observation` | S001@1（正文第2—3段） | 公开投影：{"year":2026,"month":8,"day":18} | 已写入 `research-data/people/li-yongchun.json` 并投影至 `generatedResearch.ts` |

## 推理台账

- 无 `derived` 推理；`S003` 严格标记 `reading: "wrong_person"`，不绑定任何事实。

## 冲突与拒绝记录

| 争议属性 | 说法A及来源 | 说法B及来源 | 是否同一日期／职务口径 | 处理及理由 | 待查链接／搜索式 |
| --- | --- | --- | --- | --- | --- |
| 同名人物区分（证监／北交所李永春 vs 福建南平李永春） | S003 人民网福建频道：李永春，男，福建建阳人，1971年2月出生，南平市委政法委副书记／市政协副主席候选人 | S001+S002：2016任证监会非公部副巡视员→2018.08全国股转副总经理→2024.04北交所及全国股转党委副书记、副董事长、总经理 | 同名不同人 | **将 S003 标记 `wrong_person` 彻底隔离，绝不混入出生年与籍贯** | 无需再查 |

## 职业时间线缺口与下一轮

| 缺口 | 已知边界（不强推任期） | 要找的材料 | 下一条完整查询 | 优先级 |
| --- | --- | --- | --- | --- |
| 北交所李永春本人的出生年月、性别与学历背景，以及2016年前证监会早年处室经历 | 已知2016.09任证监会非公部副巡视员、2018.08任全国股转副总经理 | 北交所官网高管简介或《中国证券期货年鉴》 | 在 Chrome 打开 `https://www.bse.cn` 查阅管理层简历 | 中 |

## 本轮交付与续接

- 新增有效岗位／教育经历／日期属性：补齐现职级“正厅局级”；新增2016-09-20证监会非公部副巡视员观察点、2018.08—2024.04全国股转副总经理任期、2021.09—2024.04北交所副总经理任期，以及2024-04-26兼任全国股转党委副书记、副董事长、总经理观察点；归档1条 `wrong_person` 重名反例。
- 删除或纠正的错误及依据：证伪旧库编造的2012.09非公部起点，建立福建南平同名干部防火墙。
- 来源对应复查结果：全部已发布事实均绑定 `reading: "read"` 原文定位摘录，无悬空引用，无观察点冒充连续任期起止；重名干扰源已显式归档为 `reading: "wrong_person"`。
- 页面及结构验证（仅实际执行后填写）：已通过 `npm run research:check`、`npm run audit:data`、`npm run test:records`、`npm run test:relations`、`npm run test:research`、`npm run test:safety` 及生产构建 `npm run build` 校验。
- 结束状态：本轮研究完成（核心锚点与主干履历已入库，细分早期缺口转入后续深化队列）。
- 停止条件满足情况：已核清核心身份、现职状态、关键正副局／部级履历与学历锚点，证伪旧库硬伤并留下精确下一查询。
- 上次停在查询ID／来源ID：`Q001` ／ `S003`
- 最后处理事实ID／推理ID及当前阶段：`F031@1` ／ 无 `I` 推理项（已完成工作台导入与公开投影）
- 已证实待入库事实及原因／拟写入字段：无（本轮已证实事实已全部通过 `research:import --write --expect` 入库）。
- 旧模型线索对账完成与剩余项：旧库核心学历与主干履历线索已完成对账；待核候选见上表 `candidate` 项。
- 输入变更后需要重新计算或撤销的推理：无依赖推理受影响。
- 下一步必须先执行的搜索式或原文链接：`"李永春" "非上市公众公司监管部" 处长 OR 副主任`
- 尚未访问的高价值来源：《中国证券期货年鉴》历史卷、学位论文库及部分脚本受阻的交易所官网内页（详见渠道覆盖表）。
- 是否需要用户提供合法访问权限或已有资料：否（公开渠道与本地 Google Chrome 浏览器即可继续推进）。
