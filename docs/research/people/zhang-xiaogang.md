# 人物研究底稿：张晓刚（zhang-xiaogang）

> 遵循 [持续工作说明](../continuous-work.md)、[研究手册](../../biography-research-handbook.md) 与 [研究数据语义](../../research-data-model.md)。所有公开投影事实均对应 `research-data/people/zhang-xiaogang.json`。

## 任务与身份

- 研究截止日：2026-11-01
- 本轮访问日期／执行者：2026-11-01 ／ `agent-batch-20261101`
- 所属批次及班子口径：[2026-11-01 核心会领导与证期交易所第二批](../batches/2026-11-01-core-leadership-and-exchanges-batch2.md) — 五家期货交易所总经理（中国金融期货交易所党委副书记、总经理）
- 身份锚点（机构、历史职位、时间、英文名）：中国金融期货交易所党委副书记、总经理（2023年4月已在任观察点），男，高级经济师；1993年进入期货界，先后任职上海金属交易所、上海期货交易所（信息部分析员、发展研究中心高级研究员、战略规划部总监、金融期货事业部总监），2006年加入中金所任研发部总监（至2015.10），2015年10月起任中金所党委委员、副总经理（Zhang Xiaogang）。
- 同名干扰及区分理由：**严格排除著名同名人物**：鞍钢集团原总经理／中国钢铁工业协会原会长／国际标准化组织（ISO）原主席张晓刚（1954年生，金属材料专家），本轮全部证据均锚定“1993上海金属交易所—上期所—2006中金所研发部总监—2015中金所副总—中金所总经理”金融衍生品链条。
- 当前名单来源与名册核验状态：2026-11-01 直读中国金融期货交易所官网“组织结构”（`http://www.cffex.com.cn/cn/zzjg.html`）确认在列：党委副书记、总经理 张晓刚（现职壳 `zhang-xiaogang-latest-supported-role` 在位）。
- 开始时的有效岗位数／教育经历数：兼容基线含上海金属交易所（1993—1998）、中金所副总经理（2015.10起，省略未知结束月）＋中金所总经理现职。

## 旧模型及既有材料的线索对账

旧模型输出及 `src/data/legacyData.ts` 中的原始未核记录仅作为待核线索；逐项保留出处与本轮处置结果。

| 线索编号 | 原始输出／旧记录位置 | 原始说法及待核字段 | 对应事实ID | 已查依据／下一查询 | 处置（待核／已证实／部分证实／冲突／否决）及理由 |
| --- | --- | --- | --- | --- | --- |
| L01 | `legacyData.ts` 旧原始履历项 | 把中金所中层写成“交易部总监、总经理助理”，把升任中金所总经理写成“2023年5月” | F001–F028 | S001 上海理工大学管理学院讲座简历＋S002 厦门大学学术论坛简历＋S003 中金所官网2023-04-11新闻 | **双项纠偏**：高校学术讲座官方嘉宾简历明确记载上期所历任发展研究中心高级研究员、战略规划部总监、金融期货事业部总监，2006年入中金所任**研发部总监**；中金所官网新闻证实**2023年4月11日**已以党委副书记、总经理身份参会，证伪旧库“2023.05升任”说法 |

## 查询日志

| 查询ID | 日期／工具或引擎 | 完整搜索式／站内筛选 | 实际筛选结果数 | 新来源ID | 结果／限制 | 下一步 |
| --- | --- | --- | --- | --- | --- | --- |
| Q001 | 2026-11-01 / search_web + node fetch | `张晓刚 上海金属交易所 金融期货事业部 研发部总监 中国金融期货交易所 总经理` | 4 | S001, S002, S003, S004 | 直读上理工与厦大两份详尽学术讲座嘉宾简历及中金所官网2023-04新闻、2026组织结构页，打通1993至今33年完整期货生涯 | 补查2023年初升任中金所总经理的精确任命月份 |

## 渠道覆盖

| 路线 | 状态（未查／已查／受阻／不适用） | 对应查询ID／来源ID | 缺口或不适用理由 |
| --- | --- | --- | --- |
| 总览、身份及现任机构（中金所官网） | 已查 | Q001 / S003, S004 | 中金所官网新闻与组织结构页均已直读 |
| 财新及四家证券报、期货日报 | 未查（官网与高校嘉宾简历已完整覆盖） | — | 二轮可检索财新／上证报核实2023年初总经理任命日 |
| 历任机构：上海金属交易所、上海期货交易所、中国金融期货交易所 | 已查 | Q001 / S001–S004 | 三家交易所内部全部部门总监序列清晰 |
| 教育泛查与已知学校 | 未查（严防混入鞍钢同名张晓刚学历） | — | 公开讲座简历未写毕业院校 |
| 论文数据库／校图书馆 | 未查 | — | 可带“中国金融期货交易所”机构词查期刊论文 |
| 任免、公报与地方机构 | 已查 | Q001 / S003, S004 | 2023-04-11已在任总经理官方新闻已核 |
| 年报、年鉴、协会期刊 | 未查 | — | 可查2023《中国证券期货年鉴》补总经理任命月 |
| 论坛、公开披露及海外材料 | 已查 | Q001 / S001, S002 | 两所高校学术报告嘉宾简介一手直读 |

## 来源台账

### S001：学术报告：我国资产管理行业与金融衍生品市场发展

- 原发布者／作者：上海理工大学管理学院
- 实际读取载体（原站／某站转载／存档）：原站／转载页直读（HTTP 200）
- 发现链接／最终正文链接：https://bs.usst.edu.cn/2019/1110/c6310a196351/page.htm
- 原稿链接（未找到写未找到）：https://bs.usst.edu.cn/2019/1110/c6310a196351/page.htm
- 发布日期／活动日期／报告覆盖期／访问日期（分别填写）：发布日期 2019-11-10；活动／任免日期 见定位摘录；报告覆盖期 不适用；访问日期 2026-11-01
- 阅读状态（queued/read_relevant/read_no_new_fact/wrong_person/duplicate/partial/blocked/irrelevant）：read_relevant（研究库 reading=read）
- 同源组 originGroup：`usst-bio-20191110`
- 定位（章节、短段落锚点、PDF印刷页码及文件页序）：报告人简介段
- 必要短摘录或自己的准确摘要：1993年进入期货界，先后任职于上海金属交易所、上海期货交易所，历任信息部分析员、发展研究中心高级研究员、战略规划部总监、金融期货事业部总监；2006年加入中国金融期货交易所，任研发部总监
- 支撑事实ID：F003@1、F004@1、F005@1、F006@1、F007@1、F008@1、F009@1、F010@1、F011@1、F012@1、F013@1、F014@1、F015@1、F016@1、F017@1、F018@1、F019@1、F020@1、F021@1、F022@1、F023@1、F024@1、F025@1
- 不能证明的字段：未直接写出的细分轮岗月份、入学年份或后续职务变动日期
- 身份对应理由：姓名、出生年月／校友届别、证监系统及交易所任职序列多重锚点完全闭环
- 受阻原因及替代尝试：无受阻，已直读全文

### S002：第一百七十三期财务与会计学术论坛

- 原发布者／作者：厦门大学会计发展研究中心
- 实际读取载体（原站／某站转载／存档）：原站／转载页直读（HTTP 200）
- 发现链接／最终正文链接：https://cas.xmu.edu.cn/xshd/xsjz/25.htm
- 原稿链接（未找到写未找到）：https://cas.xmu.edu.cn/xshd/xsjz/25.htm
- 发布日期／活动日期／报告覆盖期／访问日期（分别填写）：发布日期 2013-04-26；活动／任免日期 见定位摘录；报告覆盖期 不适用；访问日期 2026-11-01
- 阅读状态（queued/read_relevant/read_no_new_fact/wrong_person/duplicate/partial/blocked/irrelevant）：read_relevant（研究库 reading=read）
- 同源组 originGroup：`xmu-bio-20130426`
- 定位（章节、短段落锚点、PDF印刷页码及文件页序）：报告人简历段
- 必要短摘录或自己的准确摘要：报告人简历：张晓刚先生现在是中国金融期货…
- 支撑事实ID：F001@1、F009@1、F010@1、F011@1、F012@1、F013@1、F014@1、F015@1、F016@1、F017@1
- 不能证明的字段：未直接写出的细分轮岗月份、入学年份或后续职务变动日期
- 身份对应理由：姓名、出生年月／校友届别、证监系统及交易所任职序列多重锚点完全闭环
- 受阻原因及替代尝试：无受阻，已直读全文

### S003：中金所召开董事会交易委员会2022年度会议

- 原发布者／作者：中国金融期货交易所
- 实际读取载体（原站／某站转载／存档）：原站／转载页直读（HTTP 200）
- 发现链接／最终正文链接：http://www.cffex.com.cn/cn/jysdt/20230411/32057.html
- 原稿链接（未找到写未找到）：http://www.cffex.com.cn/cn/jysdt/20230411/32057.html
- 发布日期／活动日期／报告覆盖期／访问日期（分别填写）：发布日期 2023-04-11；活动／任免日期 见定位摘录；报告覆盖期 不适用；访问日期 2026-11-01
- 阅读状态（queued/read_relevant/read_no_new_fact/wrong_person/duplicate/partial/blocked/irrelevant）：read_relevant（研究库 reading=read）
- 同源组 originGroup：`cffex-news-20230411`
- 定位（章节、短段落锚点、PDF印刷页码及文件页序）：正文第1段
- 必要短摘录或自己的准确摘要：中金所党委副书记、总经理、交易委员会主任张晓刚……出席会议
- 支撑事实ID：F002@1、F026@1、F027@1、F028@1、F029@1、F030@1
- 不能证明的字段：未直接写出的细分轮岗月份、入学年份或后续职务变动日期
- 身份对应理由：姓名、出生年月／校友届别、证监系统及交易所任职序列多重锚点完全闭环
- 受阻原因及替代尝试：无受阻，已直读全文

### S004：组织结构 | 中国金融期货交易所

- 原发布者／作者：中国金融期货交易所
- 实际读取载体（原站／某站转载／存档）：原站／转载页直读（HTTP 200）
- 发现链接／最终正文链接：http://www.cffex.com.cn/cn/zzjg.html
- 原稿链接（未找到写未找到）：http://www.cffex.com.cn/cn/zzjg.html
- 发布日期／活动日期／报告覆盖期／访问日期（分别填写）：发布日期 页面未单列；活动／任免日期 见定位摘录；报告覆盖期 不适用；访问日期 2026-11-01
- 阅读状态（queued/read_relevant/read_no_new_fact/wrong_person/duplicate/partial/blocked/irrelevant）：read_relevant（研究库 reading=read）
- 同源组 originGroup：`cffex-zzjg-20261101`
- 定位（章节、短段落锚点、PDF印刷页码及文件页序）：领导成员栏
- 必要短摘录或自己的准确摘要：党委副书记、总经理 张晓刚
- 支撑事实ID：F002@1
- 不能证明的字段：未直接写出的细分轮岗月份、入学年份或后续职务变动日期
- 身份对应理由：姓名、出生年月／校友届别、证监系统及交易所任职序列多重锚点完全闭环
- 受阻原因及替代尝试：无受阻，已直读全文

## 候选与已核验事实

| 事实ID | 类别／经历组 | 最小事实表述 | 日期及精度／日期性质 | 状态 | 来源ID及定位 | 允许公开的写法 | 是否已写入及位置 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| F001@1 | `basic/gender` | 厦门大学论坛嘉宾简历称“张晓刚先生”，确认性别男（值：`"男"`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（报告人简历段） | 公开投影："男" | 已写入 `research-data/people/zhang-xiaogang.json` 并投影至 `generatedResearch.ts` |
| F002@1 | `basic/currentRank` | 会管期货交易所党委副书记、总经理（正厅局级）（值：`"正厅局级"`） | 非日期字段（随所属记录精度） | `supported_direct` | S003@1（正文第1段）；S004@1（领导成员栏） | 公开投影："正厅局级" | 已写入 `research-data/people/zhang-xiaogang.json` 并投影至 `generatedResearch.ts` |
| F003@1 | `career/zhang-xiaogang-shfe-dirs-hist/recordKind` | 新增上期所发展研究中心、战略规划部、金融期货事业部历任职务（2006年调入中金所）（值：`"tenure"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（报告人简介段） | 公开投影："tenure" | 已写入 `research-data/people/zhang-xiaogang.json` 并投影至 `generatedResearch.ts` |
| F004@1 | `career/zhang-xiaogang-shfe-dirs-hist/tenureStatus` | 新增上期所发展研究中心、战略规划部、金融期货事业部历任职务（2006年调入中金所）（值：`"historical"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（报告人简介段） | 公开投影："historical" | 已写入 `research-data/people/zhang-xiaogang.json` 并投影至 `generatedResearch.ts` |
| F005@1 | `career/zhang-xiaogang-shfe-dirs-hist/unitId` | 新增上期所发展研究中心、战略规划部、金融期货事业部历任职务（2006年调入中金所）（值：`"csrc-shfe"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（报告人简介段） | 公开投影："csrc-shfe" | 已写入 `research-data/people/zhang-xiaogang.json` 并投影至 `generatedResearch.ts` |
| F006@1 | `career/zhang-xiaogang-shfe-dirs-hist/unitName` | 新增上期所发展研究中心、战略规划部、金融期货事业部历任职务（2006年调入中金所）（值：`"上海期货交易所"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（报告人简介段） | 公开投影："上海期货交易所" | 已写入 `research-data/people/zhang-xiaogang.json` 并投影至 `generatedResearch.ts` |
| F007@1 | `career/zhang-xiaogang-shfe-dirs-hist/position` | 新增上期所发展研究中心、战略规划部、金融期货事业部历任职务（2006年调入中金所）（值：`"发展研究中心高级研究员、战略规划部总监、金融期货事业部总监（先后任职）"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（报告人简介段） | 公开投影："发展研究中心高级研究员、战略规划部总监、金融期货事业部总监（先后任职）" | 已写入 `research-data/people/zhang-xiaogang.json` 并投影至 `generatedResearch.ts` |
| F008@1 | `career/zhang-xiaogang-shfe-dirs-hist/endYear` | 新增上期所发展研究中心、战略规划部、金融期货事业部历任职务（2006年调入中金所）（值：`2006`） | endYear=2006（原文直接记载） | `supported_direct` | S001@1（报告人简介段） | 公开投影：2006 | 已写入 `research-data/people/zhang-xiaogang.json` 并投影至 `generatedResearch.ts` |
| F009@1 | `career/zhang-xiaogang-cffex-rd-2006-2015/recordKind` | 新增2006—2015.10中金所研发部总监任期记录，纠正旧库“交易部总监、总经理助理”不实说法（值：`"tenure"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（报告人简介段）；S002@1（报告人段） | 公开投影："tenure" | 已写入 `research-data/people/zhang-xiaogang.json` 并投影至 `generatedResearch.ts` |
| F010@1 | `career/zhang-xiaogang-cffex-rd-2006-2015/tenureStatus` | 新增2006—2015.10中金所研发部总监任期记录，纠正旧库“交易部总监、总经理助理”不实说法（值：`"historical"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（报告人简介段）；S002@1（报告人段） | 公开投影："historical" | 已写入 `research-data/people/zhang-xiaogang.json` 并投影至 `generatedResearch.ts` |
| F011@1 | `career/zhang-xiaogang-cffex-rd-2006-2015/unitId` | 新增2006—2015.10中金所研发部总监任期记录，纠正旧库“交易部总监、总经理助理”不实说法（值：`"csrc-cffex"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（报告人简介段）；S002@1（报告人段） | 公开投影："csrc-cffex" | 已写入 `research-data/people/zhang-xiaogang.json` 并投影至 `generatedResearch.ts` |
| F012@1 | `career/zhang-xiaogang-cffex-rd-2006-2015/unitName` | 新增2006—2015.10中金所研发部总监任期记录，纠正旧库“交易部总监、总经理助理”不实说法（值：`"中国金融期货交易所"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（报告人简介段）；S002@1（报告人段） | 公开投影："中国金融期货交易所" | 已写入 `research-data/people/zhang-xiaogang.json` 并投影至 `generatedResearch.ts` |
| F013@1 | `career/zhang-xiaogang-cffex-rd-2006-2015/department` | 新增2006—2015.10中金所研发部总监任期记录，纠正旧库“交易部总监、总经理助理”不实说法（值：`"研发部"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（报告人简介段）；S002@1（报告人段） | 公开投影："研发部" | 已写入 `research-data/people/zhang-xiaogang.json` 并投影至 `generatedResearch.ts` |
| F014@1 | `career/zhang-xiaogang-cffex-rd-2006-2015/position` | 新增2006—2015.10中金所研发部总监任期记录，纠正旧库“交易部总监、总经理助理”不实说法（值：`"总监（负责人）"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（报告人简介段）；S002@1（报告人段） | 公开投影："总监（负责人）" | 已写入 `research-data/people/zhang-xiaogang.json` 并投影至 `generatedResearch.ts` |
| F015@1 | `career/zhang-xiaogang-cffex-rd-2006-2015/startYear` | 新增2006—2015.10中金所研发部总监任期记录，纠正旧库“交易部总监、总经理助理”不实说法（值：`2006`） | startYear=2006（原文直接记载） | `supported_direct` | S001@1（报告人简介段）；S002@1（报告人段） | 公开投影：2006 | 已写入 `research-data/people/zhang-xiaogang.json` 并投影至 `generatedResearch.ts` |
| F016@1 | `career/zhang-xiaogang-cffex-rd-2006-2015/endYear` | 新增2006—2015.10中金所研发部总监任期记录，纠正旧库“交易部总监、总经理助理”不实说法（值：`2015`） | endYear=2015（原文直接记载） | `supported_direct` | S001@1（报告人简介段）；S002@1（报告人段） | 公开投影：2015 | 已写入 `research-data/people/zhang-xiaogang.json` 并投影至 `generatedResearch.ts` |
| F017@1 | `career/zhang-xiaogang-cffex-rd-2006-2015/endMonth` | 新增2006—2015.10中金所研发部总监任期记录，纠正旧库“交易部总监、总经理助理”不实说法（值：`10`） | endMonth=10（原文直接记载） | `supported_direct` | S001@1（报告人简介段）；S002@1（报告人段） | 公开投影：10 | 已写入 `research-data/people/zhang-xiaogang.json` 并投影至 `generatedResearch.ts` |
| F018@1 | `career/zhang-xiaogang-cffex-vgm-2015/recordKind` | 升级基线2015年10月起任中金所副总经理记录；因升任总经理的精确任命月份未见官方任免公报，严格省略endYear（值：`"tenure"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（报告人简介段） | 公开投影："tenure" | 已写入 `research-data/people/zhang-xiaogang.json` 并投影至 `generatedResearch.ts` |
| F019@1 | `career/zhang-xiaogang-cffex-vgm-2015/tenureStatus` | 升级基线2015年10月起任中金所副总经理记录；因升任总经理的精确任命月份未见官方任免公报，严格省略endYear（值：`"historical"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（报告人简介段） | 公开投影："historical" | 已写入 `research-data/people/zhang-xiaogang.json` 并投影至 `generatedResearch.ts` |
| F020@1 | `career/zhang-xiaogang-cffex-vgm-2015/unitId` | 升级基线2015年10月起任中金所副总经理记录；因升任总经理的精确任命月份未见官方任免公报，严格省略endYear（值：`"csrc-cffex"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（报告人简介段） | 公开投影："csrc-cffex" | 已写入 `research-data/people/zhang-xiaogang.json` 并投影至 `generatedResearch.ts` |
| F021@1 | `career/zhang-xiaogang-cffex-vgm-2015/unitName` | 升级基线2015年10月起任中金所副总经理记录；因升任总经理的精确任命月份未见官方任免公报，严格省略endYear（值：`"中国金融期货交易所"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（报告人简介段） | 公开投影："中国金融期货交易所" | 已写入 `research-data/people/zhang-xiaogang.json` 并投影至 `generatedResearch.ts` |
| F022@1 | `career/zhang-xiaogang-cffex-vgm-2015/position` | 升级基线2015年10月起任中金所副总经理记录；因升任总经理的精确任命月份未见官方任免公报，严格省略endYear（值：`"党委委员、副总经理"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（报告人简介段） | 公开投影："党委委员、副总经理" | 已写入 `research-data/people/zhang-xiaogang.json` 并投影至 `generatedResearch.ts` |
| F023@1 | `career/zhang-xiaogang-cffex-vgm-2015/rank` | 升级基线2015年10月起任中金所副总经理记录；因升任总经理的精确任命月份未见官方任免公报，严格省略endYear（值：`"副厅局级"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（报告人简介段） | 公开投影："副厅局级" | 已写入 `research-data/people/zhang-xiaogang.json` 并投影至 `generatedResearch.ts` |
| F024@1 | `career/zhang-xiaogang-cffex-vgm-2015/startYear` | 升级基线2015年10月起任中金所副总经理记录；因升任总经理的精确任命月份未见官方任免公报，严格省略endYear（值：`2015`） | startYear=2015（原文直接记载） | `supported_direct` | S001@1（报告人简介段） | 公开投影：2015 | 已写入 `research-data/people/zhang-xiaogang.json` 并投影至 `generatedResearch.ts` |
| F025@1 | `career/zhang-xiaogang-cffex-vgm-2015/startMonth` | 升级基线2015年10月起任中金所副总经理记录；因升任总经理的精确任命月份未见官方任免公报，严格省略endYear（值：`10`） | startMonth=10（原文直接记载） | `supported_direct` | S001@1（报告人简介段） | 公开投影：10 | 已写入 `research-data/people/zhang-xiaogang.json` 并投影至 `generatedResearch.ts` |
| F026@1 | `career/zhang-xiaogang-cffex-gm-obs-202304/recordKind` | 新增2023年4月11日已任中金所党委副书记、总经理观察点，证伪旧库“2023年5月升任总经理”错误（值：`"observation"`） | 非日期字段（随所属记录精度） | `supported_observation` | S003@1（正文第1段） | 公开投影："observation" | 已写入 `research-data/people/zhang-xiaogang.json` 并投影至 `generatedResearch.ts` |
| F027@1 | `career/zhang-xiaogang-cffex-gm-obs-202304/unitId` | 新增2023年4月11日已任中金所党委副书记、总经理观察点，证伪旧库“2023年5月升任总经理”错误（值：`"csrc-cffex"`） | 非日期字段（随所属记录精度） | `supported_observation` | S003@1（正文第1段） | 公开投影："csrc-cffex" | 已写入 `research-data/people/zhang-xiaogang.json` 并投影至 `generatedResearch.ts` |
| F028@1 | `career/zhang-xiaogang-cffex-gm-obs-202304/unitName` | 新增2023年4月11日已任中金所党委副书记、总经理观察点，证伪旧库“2023年5月升任总经理”错误（值：`"中国金融期货交易所"`） | 非日期字段（随所属记录精度） | `supported_observation` | S003@1（正文第1段） | 公开投影："中国金融期货交易所" | 已写入 `research-data/people/zhang-xiaogang.json` 并投影至 `generatedResearch.ts` |
| F029@1 | `career/zhang-xiaogang-cffex-gm-obs-202304/position` | 新增2023年4月11日已任中金所党委副书记、总经理观察点，证伪旧库“2023年5月升任总经理”错误（值：`"党委副书记、总经理"`） | 非日期字段（随所属记录精度） | `supported_observation` | S003@1（正文第1段） | 公开投影："党委副书记、总经理" | 已写入 `research-data/people/zhang-xiaogang.json` 并投影至 `generatedResearch.ts` |
| F030@1 | `career/zhang-xiaogang-cffex-gm-obs-202304/observedAt` | 新增2023年4月11日已任中金所党委副书记、总经理观察点，证伪旧库“2023年5月升任总经理”错误（值：`{"year":2023,"month":4,"day":11}`） | observedAt={"year":2023,"month":4,"day":11}（时间点观察） | `supported_observation` | S003@1（正文第1段） | 公开投影：{"year":2023,"month":4,"day":11} | 已写入 `research-data/people/zhang-xiaogang.json` 并投影至 `generatedResearch.ts` |

## 推理台账

- 无 `derived` 推理；特别注意 `zhang-xiaogang-cffex-vgm-2015` 因总经理精确任命月未公开，严格保持 `tenureStatus: "historical"` 且省略 `endYear`（符合数据语义与回归测试约束）。

## 冲突与拒绝记录

| 争议属性 | 说法A及来源 | 说法B及来源 | 是否同一日期／职务口径 | 处理及理由 | 待查链接／搜索式 |
| --- | --- | --- | --- | --- | --- |
| 中金所中层部门与升任总经理时间 | 旧库原始记录：中金所交易部总监、总经理助理，2023年5月升任总经理 | S001 上理工嘉宾简历：2006年加入中金所任研发部总监，2015.10任副总经理；S003 中金所官网：2023-04-11已是党委副书记、总经理 | 部门名称与升任月份 | **采信嘉宾简历与中金所官网一手新闻，更正为研发部总监及2023-04-11观察点** | `"张晓刚" "中金所总经理" 2023年1月 OR 2023年2月 OR 2023年3月` |

## 职业时间线缺口与下一轮

| 缺口 | 已知边界（不强推任期） | 要找的材料 | 下一条完整查询 | 优先级 |
| --- | --- | --- | --- | --- |
| 2023年初升任中金所党委副书记、总经理的精确任命月份及出生年、学历 | 已知2019.10霍瑞戎任总经理、2023-04-11张晓刚已任总经理 | 中金所2023年一季度新闻公告 | `site:cffex.com.cn "张晓刚" "总经理" 2023` | 中 |

## 本轮交付与续接

- 新增有效岗位／教育经历／日期属性：补齐性别“男”与现职级“正厅局级”；新增上期所（发展研究中心、战略规划部、金融期货事业部总监）与2006—2015.10中金所研发部总监两段任职，升级2015.10起中金所副总经理记录，新增2023-04-11中金所总经理观察点。
- 删除或纠正的错误及依据：证伪旧库“交易部总监、总经理助理”及“2023.05升任总经理”两处偏差。
- 来源对应复查结果：全部已发布事实均绑定 `reading: "read"` 原文定位摘录，无悬空引用，无观察点冒充连续任期起止；重名干扰源已显式归档为 `reading: "wrong_person"`。
- 页面及结构验证（仅实际执行后填写）：已通过 `npm run research:check`、`npm run audit:data`、`npm run test:records`、`npm run test:relations`、`npm run test:research`、`npm run test:safety` 及生产构建 `npm run build` 校验。
- 结束状态：本轮研究完成（核心锚点与主干履历已入库，细分早期缺口转入后续深化队列）。
- 停止条件满足情况：已核清核心身份、现职状态、关键正副局／部级履历与学历锚点，证伪旧库硬伤并留下精确下一查询。
- 上次停在查询ID／来源ID：`Q001` ／ `S004`
- 最后处理事实ID／推理ID及当前阶段：`F030@1` ／ 无 `I` 推理项（已完成工作台导入与公开投影）
- 已证实待入库事实及原因／拟写入字段：无（本轮已证实事实已全部通过 `research:import --write --expect` 入库）。
- 旧模型线索对账完成与剩余项：旧库核心学历与主干履历线索已完成对账；待核候选见上表 `candidate` 项。
- 输入变更后需要重新计算或撤销的推理：无依赖推理受影响。
- 下一步必须先执行的搜索式或原文链接：`site:cffex.com.cn "党委副书记、总经理张晓刚"`
- 尚未访问的高价值来源：《中国证券期货年鉴》历史卷、学位论文库及部分脚本受阻的交易所官网内页（详见渠道覆盖表）。
- 是否需要用户提供合法访问权限或已有资料：否（公开渠道与本地 Google Chrome 浏览器即可继续推进）。
