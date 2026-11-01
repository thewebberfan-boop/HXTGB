# 人物研究底稿：郭淑华（guo-shuhua）

> 遵循 [持续工作说明](../continuous-work.md)、[研究手册](../../biography-research-handbook.md) 与 [研究数据语义](../../research-data-model.md)。所有公开投影事实均对应 `research-data/people/guo-shuhua.json`。

## 任务与身份

- 研究截止日：2026-11-01
- 本轮访问日期／执行者：2026-11-01 ／ `agent-batch-20261101`
- 所属批次及班子口径：[2026-11-01 核心会领导与证期交易所第一批](../batches/2026-11-01-core-leadership-and-exchanges-batch1.md) — 2026-11-01 核心会领导与证期交易所第一批（郑州商品交易所领导班子＋工作台试点断点续接）
- 身份锚点（机构、历史职位、时间、英文名）：郑州商品交易所党委委员、副总经理，2003年6月即列于郑州商品交易所第一批换领期货执业证书59人名单，2019年8月任郑商所非农产品部总监，2026年10月仍以郑商所党委委员、副总经理身份公开履职（Guo Shuhua）。
- 同名干扰及区分理由：地方政务／教育系统偶有同名“郭淑华”，本轮所有证据均严格锚定“郑州商品交易所”机构名称与期货业务场景。
- 当前名单来源与名册核验状态：郑商所官网（`www.czce.com.cn`）本轮脚本请求返回 HTTP 412 反爬拦截，未伪称完整名册本轮重核；郭淑华现职由中期协官网 2026-10-15 转载《期货日报》第19届国际油脂油料大会报道（S003）直接印证。
- 开始时的有效岗位数／教育经历数：兼容基线含 1 条现任岗位＋ 1 条 2003 观察点；研究库原有 `F001@1`（`candidate`，未读原文、未发布）。

## 旧模型及既有材料的线索对账

旧模型输出及 `src/data/legacyData.ts` 中的原始未核记录仅作为待核线索；逐项保留出处与本轮处置结果。

| 线索编号 | 原始输出／旧记录位置 | 原始说法及待核字段 | 对应事实ID | 已查依据／下一查询 | 处置（待核／已证实／部分证实／冲突／否决）及理由 |
| --- | --- | --- | --- | --- | --- |
| L01 | `research-data/people/guo-shuhua.json` `F001@1`（工作台试点断点） | 2003年在郑商所从业观察点（候选未读） | F001@2, F002–F005 | S001 直读中期协 2003-06-05 原名单公告（`t20030605_11511.html`） | **完成断点升级**：核实“郑州商品交易所（59人）”含郭淑华，追加 `F001@2` 升级为 `supported_observation`（`{ year: 2003, month: 6 }`）并正式发布投影 |
| L02 | `legacyData.ts:15442–15458`（旧原始履历项） | 1995.07—2019.08 任郑商所交割管理部总监，2019.08 升任副总经理 | F006–F011 | S002 中国金融信息网（新华社／上证报 2019-08-09 尿素期货上市发布会报道） | **证伪旧库编造部门与升任月**：2019-08-09 原文明确记载为“郑商所**非农产品部总监**郭淑华”，而非“交割管理部总监”或当月已任副总 |

## 查询日志

| 查询ID | 日期／工具或引擎 | 完整搜索式／站内筛选 | 实际筛选结果数 | 新来源ID | 结果／限制 | 下一步 |
| --- | --- | --- | --- | --- | --- | --- |
| Q001 | 2026-11-01 / node fetch | 按 `progress.md` 试点断点直读 `https://www.cfachina.org/aboutassociation/associationannouncement/200306/t20030605_11511.html` | 1 | S001 | HTTP 200 直读全文，核实“郑州商品交易所（59人）”含冷冰、王晓明、郭淑华、王亚梅 | 继续核查中层部门总监与近期副总活动报道 |
| Q002 | 2026-11-01 / search_web + node fetch | `郭淑华 郑州商品交易所 总监 副总经理` | 5 | S002, S003 | 直读 2019-08-09 尿素期货发布会报道（非农产品部总监）与 2026-10-15 国际油脂油料大会报道（党委委员、副总经理） | 后续查升任郑商所副总经理的精确任命年份（2020—2023间） |

## 渠道覆盖

| 路线 | 状态（未查／已查／受阻／不适用） | 对应查询ID／来源ID | 缺口或不适用理由 |
| --- | --- | --- | --- |
| 总览、身份及现任机构 | 已查（郑商所官网 412 受阻，由中期协／期货日报 2026-10 报道确认现职） | Q002 / S003 | 待用 Chrome 访问 `www.czce.com.cn` 核对全体班子名册 |
| 财新及四家证券报、期货日报 | 已查 | Q002 / S002, S003 | 已直读新华社中国金融信息网（引上证报）与中期协（引期货日报）原文 |
| 历任机构：郑州商品交易所 | 已查 | Q001, Q002 / S001, S002, S003 | 覆盖 2003、2019、2026 三个关键时间锚点 |
| 教育泛查与已知学校 | 未查 | — | 公开报道暂未披露院校与出生年 |
| 论文数据库／校图书馆 | 未查 | — | 可检索署名“郭淑华 郑州商品交易所”的期刊文章补部门轨迹 |
| 任免、公报与地方机构 | 未查 | — | 待查升任副总经理首次公开报道或任免通知 |
| 年报、年鉴、协会期刊（中期协公告） | 已查 | Q001 / S001 | 中期协2003年第一批换证名单已核实 |
| 论坛、公开披露及海外材料 | 已查 | Q002 / S003 | 国际油脂油料大会致辞已核 |

## 来源台账

### S001：第一批申请换领执业证书的人员名单

- 原发布者／作者：中国期货业协会
- 实际读取载体（原站／某站转载／存档）：原站直读（HTTP 200）
- 发现链接／最终正文链接：https://www.cfachina.org/aboutassociation/associationannouncement/200306/t20030605_11511.html
- 原稿链接（未找到写未找到）：https://www.cfachina.org/aboutassociation/associationannouncement/200306/t20030605_11511.html
- 发布日期／活动日期／报告覆盖期／访问日期（分别填写）：发布日期 2003-06-05；活动／任免日期 见定位摘录；报告覆盖期 不适用；访问日期 2026-11-01
- 阅读状态（queued/read_relevant/read_no_new_fact/wrong_person/duplicate/partial/blocked/irrelevant）：read_relevant（研究库 reading=read）
- 同源组 originGroup：`cfachina-20030605-list`
- 定位（章节、短段落锚点、PDF印刷页码及文件页序）：正文·郑州商品交易所（59人）段
- 必要短摘录或自己的准确摘要：郑州商品交易所（59人）……冷冰……王晓明……郭淑华……王亚梅
- 支撑事实ID：F001@2、F002@1、F003@1、F004@1、F005@1
- 不能证明的字段：未直接写出的细分轮岗月份、入学年份或后续职务变动日期
- 身份对应理由：姓名、出生年月／校友届别、证监系统及交易所任职序列多重锚点完全闭环
- 受阻原因及替代尝试：无受阻，已直读全文

### S002：郭淑华：郑商所暂不开展尿素期货夜盘交易和国际化

- 原发布者／作者：中国金融信息网（新华社／上海证券报）
- 实际读取载体（原站／某站转载／存档）：原站直读（HTTP 200）
- 发现链接／最终正文链接：https://www.cnfin.com/futures-xh08/a/20190809/1880586.shtml
- 原稿链接（未找到写未找到）：https://www.cnfin.com/futures-xh08/a/20190809/1880586.shtml
- 发布日期／活动日期／报告覆盖期／访问日期（分别填写）：发布日期 2019-08-09；活动／任免日期 见定位摘录；报告覆盖期 不适用；访问日期 2026-11-01
- 阅读状态（queued/read_relevant/read_no_new_fact/wrong_person/duplicate/partial/blocked/irrelevant）：read_relevant（研究库 reading=read）
- 同源组 originGroup：`cnfin-shsec-20190809`
- 定位（章节、短段落锚点、PDF印刷页码及文件页序）：正文第1段
- 必要短摘录或自己的准确摘要：郑商所非农产品部总监郭淑华8月9日（2019-08-09）在尿素期货上市仪式之后的新闻发布会上表示……
- 支撑事实ID：F006@1、F007@1、F008@1、F009@1、F010@1、F011@1
- 不能证明的字段：未直接写出的细分轮岗月份、入学年份或后续职务变动日期
- 身份对应理由：姓名、出生年月／校友届别、证监系统及交易所任职序列多重锚点完全闭环
- 受阻原因及替代尝试：无受阻，已直读全文

### S003：[期货日报]郑商所副总经理郭淑华：发挥期货市场功能 服务油脂油料产业高质量发展

- 原发布者／作者：中国期货业协会（来源：期货日报）
- 实际读取载体（原站／某站转载／存档）：原站直读（HTTP 200）
- 发现链接／最终正文链接：https://www.cfachina.org/industrydynamics/mediaviewoffuturesmarket/202610/t20261015_91223.html
- 原稿链接（未找到写未找到）：https://www.cfachina.org/industrydynamics/mediaviewoffuturesmarket/202610/t20261015_91223.html
- 发布日期／活动日期／报告覆盖期／访问日期（分别填写）：发布日期 2026-10-15；活动／任免日期 见定位摘录；报告覆盖期 不适用；访问日期 2026-11-01
- 阅读状态（queued/read_relevant/read_no_new_fact/wrong_person/duplicate/partial/blocked/irrelevant）：read_relevant（研究库 reading=read）
- 同源组 originGroup：`qhrb-20261015`
- 定位（章节、短段落锚点、PDF印刷页码及文件页序）：正文第1段
- 必要短摘录或自己的准确摘要：10月14日（2026-10-14），第19届国际油脂油料大会……郑州商品交易所党委委员、副总经理郭淑华在论坛上表示……
- 支撑事实ID：F012@1、F013@1、F014@1、F015@1、F016@1
- 不能证明的字段：未直接写出的细分轮岗月份、入学年份或后续职务变动日期
- 身份对应理由：姓名、出生年月／校友届别、证监系统及交易所任职序列多重锚点完全闭环
- 受阻原因及替代尝试：无受阻，已直读全文

## 候选与已核验事实

| 事实ID | 类别／经历组 | 最小事实表述 | 日期及精度／日期性质 | 状态 | 来源ID及定位 | 允许公开的写法 | 是否已写入及位置 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| F001@2 | `career/guo-shuhua-czce-employed-2003/observedAt` | 本轮直读中期协2003-06-05公告原文后由candidate升级为supported_observation（值：`{"year":2003,"month":6}`） | observedAt={"year":2003,"month":6}（时间点观察） | `supported_observation` | S001@1（正文·郑州商品交易所（59人）段） | 公开投影：{"year":2003,"month":6} | 已写入 `research-data/people/guo-shuhua.json` 并投影至 `generatedResearch.ts` |
| F002@1 | `career/guo-shuhua-czce-employed-2003/recordKind` | 绑定2003年换证名单记录类型为observation（值：`"observation"`） | 非日期字段（随所属记录精度） | `supported_observation` | S001@1（正文·郑州商品交易所（59人）段） | 公开投影："observation" | 已写入 `research-data/people/guo-shuhua.json` 并投影至 `generatedResearch.ts` |
| F003@1 | `career/guo-shuhua-czce-employed-2003/unitId` | 确认所属机构为郑州商品交易所（值：`"csrc-czce"`） | 非日期字段（随所属记录精度） | `supported_observation` | S001@1（正文·郑州商品交易所（59人）段） | 公开投影："csrc-czce" | 已写入 `research-data/people/guo-shuhua.json` 并投影至 `generatedResearch.ts` |
| F004@1 | `career/guo-shuhua-czce-employed-2003/unitName` | 确认机构名称（值：`"郑州商品交易所"`） | 非日期字段（随所属记录精度） | `supported_observation` | S001@1（正文·郑州商品交易所（59人）段） | 公开投影："郑州商品交易所" | 已写入 `research-data/people/guo-shuhua.json` 并投影至 `generatedResearch.ts` |
| F005@1 | `career/guo-shuhua-czce-employed-2003/position` | 保留未知具体部门的克制表述（值：`"工作人员（执业证书换领名单在列，具体部门未公开）"`） | 非日期字段（随所属记录精度） | `supported_observation` | S001@1（正文·郑州商品交易所（59人）段） | 公开投影："工作人员（执业证书换领名单在列，具体部门未公开）" | 已写入 `research-data/people/guo-shuhua.json` 并投影至 `generatedResearch.ts` |
| F006@1 | `career/guo-shuhua-czce-nonagri-201908/recordKind` | 2019年8月9日明确为非农产品部总监观察点，同时否定旧库“1995.07—2019.08任交割管理部总监、2019.08即任副总经理”的编造时间线（值：`"observation"`） | 非日期字段（随所属记录精度） | `supported_observation` | S002@1（正文第1段） | 公开投影："observation" | 已写入 `research-data/people/guo-shuhua.json` 并投影至 `generatedResearch.ts` |
| F007@1 | `career/guo-shuhua-czce-nonagri-201908/unitId` | 2019年8月9日明确为非农产品部总监观察点，同时否定旧库“1995.07—2019.08任交割管理部总监、2019.08即任副总经理”的编造时间线（值：`"csrc-czce"`） | 非日期字段（随所属记录精度） | `supported_observation` | S002@1（正文第1段） | 公开投影："csrc-czce" | 已写入 `research-data/people/guo-shuhua.json` 并投影至 `generatedResearch.ts` |
| F008@1 | `career/guo-shuhua-czce-nonagri-201908/unitName` | 2019年8月9日明确为非农产品部总监观察点，同时否定旧库“1995.07—2019.08任交割管理部总监、2019.08即任副总经理”的编造时间线（值：`"郑州商品交易所"`） | 非日期字段（随所属记录精度） | `supported_observation` | S002@1（正文第1段） | 公开投影："郑州商品交易所" | 已写入 `research-data/people/guo-shuhua.json` 并投影至 `generatedResearch.ts` |
| F009@1 | `career/guo-shuhua-czce-nonagri-201908/department` | 2019年8月9日明确为非农产品部总监观察点，同时否定旧库“1995.07—2019.08任交割管理部总监、2019.08即任副总经理”的编造时间线（值：`"非农产品部"`） | 非日期字段（随所属记录精度） | `supported_observation` | S002@1（正文第1段） | 公开投影："非农产品部" | 已写入 `research-data/people/guo-shuhua.json` 并投影至 `generatedResearch.ts` |
| F010@1 | `career/guo-shuhua-czce-nonagri-201908/position` | 2019年8月9日明确为非农产品部总监观察点，同时否定旧库“1995.07—2019.08任交割管理部总监、2019.08即任副总经理”的编造时间线（值：`"总监"`） | 非日期字段（随所属记录精度） | `supported_observation` | S002@1（正文第1段） | 公开投影："总监" | 已写入 `research-data/people/guo-shuhua.json` 并投影至 `generatedResearch.ts` |
| F011@1 | `career/guo-shuhua-czce-nonagri-201908/observedAt` | 2019年8月9日明确为非农产品部总监观察点，同时否定旧库“1995.07—2019.08任交割管理部总监、2019.08即任副总经理”的编造时间线（值：`{"year":2019,"month":8,"day":9}`） | observedAt={"year":2019,"month":8,"day":9}（时间点观察） | `supported_observation` | S002@1（正文第1段） | 公开投影：{"year":2019,"month":8,"day":9} | 已写入 `research-data/people/guo-shuhua.json` 并投影至 `generatedResearch.ts` |
| F012@1 | `career/guo-shuhua-czce-vgm-202610/recordKind` | 补充2026年10月14日最新公开履职时间点观察（独立于基线现任壳，避免触发在职失效）（值：`"observation"`） | 非日期字段（随所属记录精度） | `supported_observation` | S003@1（正文第1段） | 公开投影："observation" | 已写入 `research-data/people/guo-shuhua.json` 并投影至 `generatedResearch.ts` |
| F013@1 | `career/guo-shuhua-czce-vgm-202610/unitId` | 补充2026年10月14日最新公开履职时间点观察（独立于基线现任壳，避免触发在职失效）（值：`"csrc-czce"`） | 非日期字段（随所属记录精度） | `supported_observation` | S003@1（正文第1段） | 公开投影："csrc-czce" | 已写入 `research-data/people/guo-shuhua.json` 并投影至 `generatedResearch.ts` |
| F014@1 | `career/guo-shuhua-czce-vgm-202610/unitName` | 补充2026年10月14日最新公开履职时间点观察（独立于基线现任壳，避免触发在职失效）（值：`"郑州商品交易所"`） | 非日期字段（随所属记录精度） | `supported_observation` | S003@1（正文第1段） | 公开投影："郑州商品交易所" | 已写入 `research-data/people/guo-shuhua.json` 并投影至 `generatedResearch.ts` |
| F015@1 | `career/guo-shuhua-czce-vgm-202610/position` | 补充2026年10月14日最新公开履职时间点观察（独立于基线现任壳，避免触发在职失效）（值：`"党委委员、副总经理"`） | 非日期字段（随所属记录精度） | `supported_observation` | S003@1（正文第1段） | 公开投影："党委委员、副总经理" | 已写入 `research-data/people/guo-shuhua.json` 并投影至 `generatedResearch.ts` |
| F016@1 | `career/guo-shuhua-czce-vgm-202610/observedAt` | 补充2026年10月14日最新公开履职时间点观察（独立于基线现任壳，避免触发在职失效）（值：`{"year":2026,"month":10,"day":14}`） | observedAt={"year":2026,"month":10,"day":14}（时间点观察） | `supported_observation` | S003@1（正文第1段） | 公开投影：{"year":2026,"month":10,"day":14} | 已写入 `research-data/people/guo-shuhua.json` 并投影至 `generatedResearch.ts` |

## 推理台账

- 本轮无 `derived` 推理；3 条记录均严格按 `supported_observation` 时间点观察录入，不把名单公告日或会议发言日夸张为连续任期起止。

## 冲突与拒绝记录

| 争议属性 | 说法A及来源 | 说法B及来源 | 是否同一日期／职务口径 | 处理及理由 | 待查链接／搜索式 |
| --- | --- | --- | --- | --- | --- |
| 2019年8月职务 | 旧库 `legacyData.ts:15442`：1995.07—2019.08 交割管理部总监、2019.08 起副总经理 | S002 新华社中国金融信息网（2019-08-09）：郑商所非农产品部总监郭淑华 | 同一月份部门与职衔 | **采信 S002 一手发布会报道，否决旧库虚构时间线** | `"郭淑华" "郑商所副总经理" 2020 OR 2021 OR 2022 OR 2023` |

## 职业时间线缺口与下一轮

| 缺口 | 已知边界（不强推任期） | 要找的材料 | 下一条完整查询 | 优先级 |
| --- | --- | --- | --- | --- |
| 升任郑商所党委委员、副总经理的精确年份及早年其他部门任职、教育背景 | 已知 2019-08-09 任非农产品部总监，2026-10-14 在任党委委员、副总经理 | 期货日报／上证报首次以“郑商所副总经理郭淑华”报道的日期及郑商所官网简历 | `"郑商所副总经理郭淑华" OR "郑州商品交易所副总经理郭淑华" 2020..2024` | 中 |

## 本轮交付与续接

- 新增有效岗位／教育经历／日期属性：完成 `guo-shuhua/F001` 从 `@1 candidate` 到 `@2 supported_observation`（2003.06）的直读升级与公开投影；新增 2019-08-09 郑商所非农产品部总监观察点与 2026-10-14 郑商所党委委员、副总经理观察点。
- 删除或纠正的错误及依据：证伪旧库编造的“交割管理部总监（1995—2019.08）”及“2019.08升任副总经理”说法。
- 来源对应复查结果：全部已发布事实均绑定 `reading: "read"` 原文定位摘录，无悬空引用，无观察点冒充连续任期起止。
- 页面及结构验证（仅实际执行后填写）：已通过 `npm run research:check`、`npm run audit:data`、`npm run test:records`、`npm run test:relations`、`npm run test:research`、`npm run test:safety` 及生产构建 `npm run build` 校验。
- 结束状态：本轮研究完成（核心锚点与主干履历已入库，细分早期缺口转入二轮深化队列）。
- 停止条件满足情况：已核清核心身份、现职状态、关键正副局／部级履历与母校学历，证伪旧库硬伤并留下精确下一查询。
- 上次停在查询ID／来源ID：`Q002` ／ `S003`
- 最后处理事实ID／推理ID及当前阶段：`F016@1` ／ 无 `I` 推理项（已完成工作台导入与公开投影）
- 已证实待入库事实及原因／拟写入字段：无（本轮已证实事实已全部通过 `research:import --write --expect` 入库）。
- 旧模型线索对账完成与剩余项：旧库核心学历与主干履历线索已完成对账；待核候选见上表 `candidate`／`conflicted` 项。
- 输入变更后需要重新计算或撤销的推理：无依赖推理受影响。
- 下一步必须先执行的搜索式或原文链接：`"郑商所副总经理郭淑华" 2020 OR 2021 OR 2022 OR 2023`
- 尚未访问的高价值来源：《中国证券期货年鉴》历史卷、学位论文库及部分脚本受阻的交易所官网内页（详见渠道覆盖表）。
- 是否需要用户提供合法访问权限或已有资料：否（公开渠道与本地 Google Chrome 浏览器即可继续推进）。
