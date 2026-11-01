# 人物研究底稿：鲁颂宾（lu-songbin）

> 遵循 [持续工作说明](../continuous-work.md)、[研究手册](../../biography-research-handbook.md) 与 [研究数据语义](../../research-data-model.md)。所有公开投影事实均对应 `research-data/people/lu-songbin.json`。

## 任务与身份

- 研究截止日：2026-11-01
- 本轮访问日期／执行者：2026-11-01 ／ `agent-batch-20261101`
- 所属批次及班子口径：[2026-11-01 核心会领导与证期交易所第一批](../batches/2026-11-01-core-leadership-and-exchanges-batch1.md) — 2026-11-01 核心会领导与证期交易所第一批（北京证券交易所领导班子）
- 身份锚点（机构、历史职位、时间、英文名）：北京证券交易所董事长，男，北京大学经济学博士；历任中国证监会办公厅新闻处处长、综合处处长、副局级研究员、办公厅副主任（2015.04任）、福建证监局党委书记兼局长（2017—2020.08）、江苏证监局党委书记兼局长（2020.08起）、中国证监会非上市公众公司监管部主任（2023.05在任观察点）（Lu Songbin）。
- 同名干扰及区分理由：全网检索“鲁颂宾”姓名高度唯一，无同名人物干扰。
- 当前名单来源与名册核验状态：北交所官网（`www.bse.cn` / `www.bseinfo.net`）本轮脚本请求超时受阻，维持 `csrc-bse` 名册待浏览器复核状态；鲁颂宾现任北交所董事长已由北京市地方金融管理局官网 2025-10-30 论坛报道（S005）等权威信源交叉核实。
- 开始时的有效岗位数／教育经历数：兼容基线初始仅保留 1 条现任岗位（北交所董事长），性别“未公开”，教育经历 0 条。

## 旧模型及既有材料的线索对账

旧模型输出及 `src/data/legacyData.ts` 中的原始未核记录仅作为待核线索；逐项保留出处与本轮处置结果。

| 线索编号 | 原始输出／旧记录位置 | 原始说法及待核字段 | 对应事实ID | 已查依据／下一查询 | 处置（待核／已证实／部分证实／冲突／否决）及理由 |
| --- | --- | --- | --- | --- | --- |
| L01 | `legacyData.ts:13187–13202`（旧原始教育项） | 1993山东大学经济学学士、1996中国人民大学金融学硕士 | F002–F008 | S001 人民网江苏频道＋S002 21金融圈 | **否决旧无源本硕，录入已证实博士**：权威报道一致载明“北京大学经济学博士”（F002–F008）；旧库“山大本科／人大硕士”无任何公开证据支持，不予采信 |
| L02 | `legacyData.ts:13215–13230`（旧原始履历项） | 2011.08—2024.01 一直任证监会非上市公众公司监管部副主任／副司长（完全漏记办公厅、福建局、江苏局） | F009–F043 | S001 人民网江苏＋S003 江苏省委新闻网＋S004 上证报中国证券网 | **彻底证伪并重建**：实为办公厅新闻处／综合处处长→2015.04办公厅副主任→2017—2020.08福建证监局党委书记、局长→2020.08起江苏证监局党委书记、局长（2022.02仍在任）→2023-05-19观察点任非上市公众公司监管部主任 |

## 查询日志

| 查询ID | 日期／工具或引擎 | 完整搜索式／站内筛选 | 实际筛选结果数 | 新来源ID | 结果／限制 | 下一步 |
| --- | --- | --- | --- | --- | --- | --- |
| Q001 | 2026-11-01 / search_web + node fetch | `鲁颂宾 北京大学 办公厅 福建证监局 江苏证监局 公众公司部 北交所` | 6 | S001, S002, S003, S004, S005 | 直读人民网江苏频道、新浪财经21金融圈、中共江苏省委新闻网、上证报中国证券网及北京市地方金融管理局官网5篇原文 | 二轮通过 Chrome 访问北交所官网核对完整班子及鲁颂宾履新北交所董事长的精确月份 |

## 渠道覆盖

| 路线 | 状态（未查／已查／受阻／不适用） | 对应查询ID／来源ID | 缺口或不适用理由 |
| --- | --- | --- | --- |
| 总览、身份及现任机构 | 已查（北交所官网脚本连接超时，已由北京市地方金融管理局官网S005替代） | Q001 / S005 | 待用 Chrome 打开 `www.bse.cn` 核对全体管理层名册 |
| 财新及四家证券报、期货日报 | 已查 | Q001 / S002, S004 | 已直读上海证券报·中国证券网及21金融圈原文 |
| 历任机构：证监会办公厅、福建证监局、江苏证监局、证监会非公部 | 已查 | Q001 / S001, S003, S004 | 四段核心机构链条全部打通 |
| 教育泛查与已知学校（北京大学） | 已查 | Q001 / S001, S002 | 确认北京大学经济学博士 |
| 论文数据库／校图书馆 | 未查 | — | 可检索北大经济学博士学位论文确定毕业年份与导师 |
| 任免、公报与地方机构 | 已查 | Q001 / S001, S003, S005 | 江苏局上任报道、镇江公务会见及北京市金融局归档均已核 |
| 年报、年鉴、协会期刊 | 未查 | — | 可补查出生年月与籍贯 |
| 论坛、公开披露及海外材料 | 已查 | Q001 / S005 | 2025金融街论坛年会发言官方归档已直读 |

## 来源台账

### S001：鲁颂宾任江苏证监局局长 曾撰文：道阻且长 行则将至

- 原发布者／作者：人民网江苏频道（来源：新华报业网）
- 实际读取载体（原站／某站转载／存档）：原站直读（HTTP 200）
- 发现链接／最终正文链接：http://js.people.com.cn/n2/2020/0807/c360300-34212195.html
- 原稿链接（未找到写未找到）：http://js.people.com.cn/n2/2020/0807/c360300-34212195.html
- 发布日期／活动日期／报告覆盖期／访问日期（分别填写）：发布日期 2020-08-07；活动／任免日期 见定位摘录；报告覆盖期 不适用；访问日期 2026-11-01
- 阅读状态（queued/read_relevant/read_no_new_fact/wrong_person/duplicate/partial/blocked/irrelevant）：read_relevant（研究库 reading=read）
- 同源组 originGroup：`xhby-people-20200807`
- 定位（章节、短段落锚点、PDF印刷页码及文件页序）：正文第3段
- 必要短摘录或自己的准确摘要：公开资料显示，其为北京大学经济学博士
- 支撑事实ID：F002@1、F003@1、F004@1、F005@1、F006@1、F007@1、F008@1、F009@1、F010@1、F011@1、F012@1、F013@1、F014@1、F015@1、F016@1、F017@1、F018@1、F019@1、F020@1、F021@1、F022@1、F023@1、F024@1、F025@1、F026@1、F027@1、F028@1、F029@1、F030@1、F031@1、F032@1、F033@1、F034@1、F035@1、F036@1、F037@1、F038@1、F039@1、F040@1
- 不能证明的字段：未直接写出的细分轮岗月份、入学年份或后续职务变动日期
- 身份对应理由：姓名、出生年月／校友届别、证监系统及交易所任职序列多重锚点完全闭环
- 受阻原因及替代尝试：无受阻，已直读全文

### S002：证监体系多局换“帅” 消息人士称人事调整未结束

- 原发布者／作者：21金融圈（新浪财经转载）
- 实际读取载体（原站／某站转载／存档）：原站直读（HTTP 200）
- 发现链接／最终正文链接：https://finance.sina.com.cn/stock/t/2020-06-14/doc-iircuyvi8464671.shtml
- 原稿链接（未找到写未找到）：https://finance.sina.com.cn/stock/t/2020-06-14/doc-iircuyvi8464671.shtml
- 发布日期／活动日期／报告覆盖期／访问日期（分别填写）：发布日期 2020-06-14；活动／任免日期 见定位摘录；报告覆盖期 不适用；访问日期 2026-11-01
- 阅读状态（queued/read_relevant/read_no_new_fact/wrong_person/duplicate/partial/blocked/irrelevant）：read_relevant（研究库 reading=read）
- 同源组 originGroup：`21jingji-20200614`
- 定位（章节、短段落锚点、PDF印刷页码及文件页序）：鲁颂宾段
- 必要短摘录或自己的准确摘要：鲁颂宾，男，北京大学经济学博士
- 支撑事实ID：F001@1、F002@1、F003@1、F004@1、F005@1、F006@1、F007@1
- 不能证明的字段：未直接写出的细分轮岗月份、入学年份或后续职务变动日期
- 身份对应理由：姓名、出生年月／校友届别、证监系统及交易所任职序列多重锚点完全闭环
- 受阻原因及替代尝试：无受阻，已直读全文

### S003：徐曙海会见江苏证监局局长鲁颂宾

- 原发布者／作者：中共江苏省委新闻网（来源：镇江日报）
- 实际读取载体（原站／某站转载／存档）：原站直读（HTTP 200）
- 发现链接／最终正文链接：http://www.zgjssw.gov.cn/shixianchuanzhen/zhenjiang/202202/t20220217_7423604.shtml
- 原稿链接（未找到写未找到）：http://www.zgjssw.gov.cn/shixianchuanzhen/zhenjiang/202202/t20220217_7423604.shtml
- 发布日期／活动日期／报告覆盖期／访问日期（分别填写）：发布日期 2022-02-17；活动／任免日期 见定位摘录；报告覆盖期 不适用；访问日期 2026-11-01
- 阅读状态（queued/read_relevant/read_no_new_fact/wrong_person/duplicate/partial/blocked/irrelevant）：read_relevant（研究库 reading=read）
- 同源组 originGroup：`zgjssw-20220217`
- 定位（章节、短段落锚点、PDF印刷页码及文件页序）：正文第1段
- 必要短摘录或自己的准确摘要：2022年2月16日，市委副书记、市长徐曙海会见了江苏证监局党委书记、局长鲁颂宾
- 支撑事实ID：F033@1、F034@1、F035@1、F036@1、F037@1、F038@1、F039@1、F040@1
- 不能证明的字段：未直接写出的细分轮岗月份、入学年份或后续职务变动日期
- 身份对应理由：姓名、出生年月／校友届别、证监系统及交易所任职序列多重锚点完全闭环
- 受阻原因及替代尝试：无受阻，已直读全文

### S004：证监会公众公司部主任鲁颂宾：常态化推进北交所市场高质量扩容 持续丰富北交所产品体系

- 原发布者／作者：上海证券报·中国证券网
- 实际读取载体（原站／某站转载／存档）：原站直读（HTTP 200）
- 发现链接／最终正文链接：https://news.cnstock.com/news,bwkx-202305-5063455.htm
- 原稿链接（未找到写未找到）：https://news.cnstock.com/news,bwkx-202305-5063455.htm
- 发布日期／活动日期／报告覆盖期／访问日期（分别填写）：发布日期 2023-05-19；活动／任免日期 见定位摘录；报告覆盖期 不适用；访问日期 2026-11-01
- 阅读状态（queued/read_relevant/read_no_new_fact/wrong_person/duplicate/partial/blocked/irrelevant）：read_relevant（研究库 reading=read）
- 同源组 originGroup：`cnstock-20230519`
- 定位（章节、短段落锚点、PDF印刷页码及文件页序）：正文第1段
- 必要短摘录或自己的准确摘要：证监会非上市公众公司监管部主任鲁颂宾19日（2023-05-19）在“第五届上市西城区企业上市主题交流活动”中表示……
- 支撑事实ID：F041@1、F042@1、F043@1、F044@1、F045@1、F046@1
- 不能证明的字段：未直接写出的细分轮岗月份、入学年份或后续职务变动日期
- 身份对应理由：姓名、出生年月／校友届别、证监系统及交易所任职序列多重锚点完全闭环
- 受阻原因及替代尝试：无受阻，已直读全文

### S005：北交所董事长鲁颂宾：加强对重大战略、重点领域和薄弱环节的服务力度

- 原发布者／作者：北京市地方金融管理局（来源：上海证券报）
- 实际读取载体（原站／某站转载／存档）：原站直读（HTTP 200）
- 发现链接／最终正文链接：https://jrj.beijing.gov.cn/ztzl/2025ltnh/zjgd/202510/t20251030_4247166.html
- 原稿链接（未找到写未找到）：https://jrj.beijing.gov.cn/ztzl/2025ltnh/zjgd/202510/t20251030_4247166.html
- 发布日期／活动日期／报告覆盖期／访问日期（分别填写）：发布日期 2025-10-29；活动／任免日期 见定位摘录；报告覆盖期 不适用；访问日期 2026-11-01
- 阅读状态（queued/read_relevant/read_no_new_fact/wrong_person/duplicate/partial/blocked/irrelevant）：read_relevant（研究库 reading=read）
- 同源组 originGroup：`bjjrj-20251029`
- 定位（章节、短段落锚点、PDF印刷页码及文件页序）：正文全文
- 必要短摘录或自己的准确摘要：2025年10月29日以北京证券交易所董事长身份出席2025金融街论坛年会并发言
- 支撑事实ID：作为现职或背景交叉核验依据保留
- 不能证明的字段：未直接写出的细分轮岗月份、入学年份或后续职务变动日期
- 身份对应理由：姓名、出生年月／校友届别、证监系统及交易所任职序列多重锚点完全闭环
- 受阻原因及替代尝试：无受阻，已直读全文

## 候选与已核验事实

| 事实ID | 类别／经历组 | 最小事实表述 | 日期及精度／日期性质 | 状态 | 来源ID及定位 | 允许公开的写法 | 是否已写入及位置 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| F001@1 | `basic/gender` | 补充基线留空的性别字段（值：`"男"`） | 非日期字段（随所属记录精度） | `supported_direct` | S002@1（鲁颂宾段） | 公开投影："男" | 已写入 `research-data/people/lu-songbin.json` 并投影至 `generatedResearch.ts` |
| F002@1 | `education/lu-songbin-edu-phd/school` | 确证北京大学经济学博士学位；入学及毕业年份未披露不推算（值：`"北京大学"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（正文第3段）；S002@1（鲁颂宾段） | 公开投影："北京大学" | 已写入 `research-data/people/lu-songbin.json` 并投影至 `generatedResearch.ts` |
| F003@1 | `education/lu-songbin-edu-phd/degree` | 确证北京大学经济学博士学位；入学及毕业年份未披露不推算（值：`"博士"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（正文第3段）；S002@1（鲁颂宾段） | 公开投影："博士" | 已写入 `research-data/people/lu-songbin.json` 并投影至 `generatedResearch.ts` |
| F004@1 | `education/lu-songbin-edu-phd/degreeStatus` | 确证北京大学经济学博士学位；入学及毕业年份未披露不推算（值：`"awarded"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（正文第3段）；S002@1（鲁颂宾段） | 公开投影："awarded" | 已写入 `research-data/people/lu-songbin.json` 并投影至 `generatedResearch.ts` |
| F005@1 | `education/lu-songbin-edu-phd/educationLevel` | 确证北京大学经济学博士学位；入学及毕业年份未披露不推算（值：`"研究生"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（正文第3段）；S002@1（鲁颂宾段） | 公开投影："研究生" | 已写入 `research-data/people/lu-songbin.json` 并投影至 `generatedResearch.ts` |
| F006@1 | `education/lu-songbin-edu-phd/studyStatus` | 确证北京大学经济学博士学位；入学及毕业年份未披露不推算（值：`"graduated"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（正文第3段）；S002@1（鲁颂宾段） | 公开投影："graduated" | 已写入 `research-data/people/lu-songbin.json` 并投影至 `generatedResearch.ts` |
| F007@1 | `education/lu-songbin-edu-phd/major` | 确证北京大学经济学博士学位；入学及毕业年份未披露不推算（值：`"经济学"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（正文第3段）；S002@1（鲁颂宾段） | 公开投影："经济学" | 已写入 `research-data/people/lu-songbin.json` 并投影至 `generatedResearch.ts` |
| F008@1 | `career/lu-songbin-bgt-div-hist/recordKind` | 办公厅两处长历史任职确认，起止年月未公开故留空（值：`"tenure"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（正文第3段） | 公开投影："tenure" | 已写入 `research-data/people/lu-songbin.json` 并投影至 `generatedResearch.ts` |
| F009@1 | `career/lu-songbin-bgt-div-hist/tenureStatus` | 办公厅两处长历史任职确认，起止年月未公开故留空（值：`"historical"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（正文第3段） | 公开投影："historical" | 已写入 `research-data/people/lu-songbin.json` 并投影至 `generatedResearch.ts` |
| F010@1 | `career/lu-songbin-bgt-div-hist/unitId` | 办公厅两处长历史任职确认，起止年月未公开故留空（值：`"csrc-bgt"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（正文第3段） | 公开投影："csrc-bgt" | 已写入 `research-data/people/lu-songbin.json` 并投影至 `generatedResearch.ts` |
| F011@1 | `career/lu-songbin-bgt-div-hist/unitName` | 办公厅两处长历史任职确认，起止年月未公开故留空（值：`"中国证券监督管理委员会"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（正文第3段） | 公开投影："中国证券监督管理委员会" | 已写入 `research-data/people/lu-songbin.json` 并投影至 `generatedResearch.ts` |
| F012@1 | `career/lu-songbin-bgt-div-hist/department` | 办公厅两处长历史任职确认，起止年月未公开故留空（值：`"办公厅"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（正文第3段） | 公开投影："办公厅" | 已写入 `research-data/people/lu-songbin.json` 并投影至 `generatedResearch.ts` |
| F013@1 | `career/lu-songbin-bgt-div-hist/position` | 办公厅两处长历史任职确认，起止年月未公开故留空（值：`"新闻处处长、综合处处长"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（正文第3段） | 公开投影："新闻处处长、综合处处长" | 已写入 `research-data/people/lu-songbin.json` 并投影至 `generatedResearch.ts` |
| F014@1 | `career/lu-songbin-bgt-div-hist/rank` | 办公厅两处长历史任职确认，起止年月未公开故留空（值：`"正处级"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（正文第3段） | 公开投影："正处级" | 已写入 `research-data/people/lu-songbin.json` 并投影至 `generatedResearch.ts` |
| F015@1 | `career/lu-songbin-bgt-deputy-2015/recordKind` | 2015年4月任证监会办公厅副主任；2017年调任月份未披露故省略endYear或仅保留已知起点（值：`"tenure"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（正文第3段） | 公开投影："tenure" | 已写入 `research-data/people/lu-songbin.json` 并投影至 `generatedResearch.ts` |
| F016@1 | `career/lu-songbin-bgt-deputy-2015/tenureStatus` | 2015年4月任证监会办公厅副主任；2017年调任月份未披露故省略endYear或仅保留已知起点（值：`"historical"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（正文第3段） | 公开投影："historical" | 已写入 `research-data/people/lu-songbin.json` 并投影至 `generatedResearch.ts` |
| F017@1 | `career/lu-songbin-bgt-deputy-2015/unitId` | 2015年4月任证监会办公厅副主任；2017年调任月份未披露故省略endYear或仅保留已知起点（值：`"csrc-bgt"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（正文第3段） | 公开投影："csrc-bgt" | 已写入 `research-data/people/lu-songbin.json` 并投影至 `generatedResearch.ts` |
| F018@1 | `career/lu-songbin-bgt-deputy-2015/unitName` | 2015年4月任证监会办公厅副主任；2017年调任月份未披露故省略endYear或仅保留已知起点（值：`"中国证券监督管理委员会"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（正文第3段） | 公开投影："中国证券监督管理委员会" | 已写入 `research-data/people/lu-songbin.json` 并投影至 `generatedResearch.ts` |
| F019@1 | `career/lu-songbin-bgt-deputy-2015/department` | 2015年4月任证监会办公厅副主任；2017年调任月份未披露故省略endYear或仅保留已知起点（值：`"办公厅"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（正文第3段） | 公开投影："办公厅" | 已写入 `research-data/people/lu-songbin.json` 并投影至 `generatedResearch.ts` |
| F020@1 | `career/lu-songbin-bgt-deputy-2015/position` | 2015年4月任证监会办公厅副主任；2017年调任月份未披露故省略endYear或仅保留已知起点（值：`"副主任"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（正文第3段） | 公开投影："副主任" | 已写入 `research-data/people/lu-songbin.json` 并投影至 `generatedResearch.ts` |
| F021@1 | `career/lu-songbin-bgt-deputy-2015/rank` | 2015年4月任证监会办公厅副主任；2017年调任月份未披露故省略endYear或仅保留已知起点（值：`"副厅局级"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（正文第3段） | 公开投影："副厅局级" | 已写入 `research-data/people/lu-songbin.json` 并投影至 `generatedResearch.ts` |
| F022@1 | `career/lu-songbin-bgt-deputy-2015/startYear` | 2015年4月任证监会办公厅副主任；2017年调任月份未披露故省略endYear或仅保留已知起点（值：`2015`） | startYear=2015（原文直接记载） | `supported_direct` | S001@1（正文第3段） | 公开投影：2015 | 已写入 `research-data/people/lu-songbin.json` 并投影至 `generatedResearch.ts` |
| F023@1 | `career/lu-songbin-bgt-deputy-2015/startMonth` | 2015年4月任证监会办公厅副主任；2017年调任月份未披露故省略endYear或仅保留已知起点（值：`4`） | startMonth=4（原文直接记载） | `supported_direct` | S001@1（正文第3段） | 公开投影：4 | 已写入 `research-data/people/lu-songbin.json` 并投影至 `generatedResearch.ts` |
| F024@1 | `career/lu-songbin-fj-csrc-2017-2020/recordKind` | 补回旧库完全漏记的2017—2020.08福建证监局党委书记、局长任期（值：`"tenure"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（正文第1-4段） | 公开投影："tenure" | 已写入 `research-data/people/lu-songbin.json` 并投影至 `generatedResearch.ts` |
| F025@1 | `career/lu-songbin-fj-csrc-2017-2020/tenureStatus` | 补回旧库完全漏记的2017—2020.08福建证监局党委书记、局长任期（值：`"historical"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（正文第1-4段） | 公开投影："historical" | 已写入 `research-data/people/lu-songbin.json` 并投影至 `generatedResearch.ts` |
| F026@1 | `career/lu-songbin-fj-csrc-2017-2020/unitId` | 补回旧库完全漏记的2017—2020.08福建证监局党委书记、局长任期（值：`"csrc-fj"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（正文第1-4段） | 公开投影："csrc-fj" | 已写入 `research-data/people/lu-songbin.json` 并投影至 `generatedResearch.ts` |
| F027@1 | `career/lu-songbin-fj-csrc-2017-2020/unitName` | 补回旧库完全漏记的2017—2020.08福建证监局党委书记、局长任期（值：`"中国证监会福建监管局"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（正文第1-4段） | 公开投影："中国证监会福建监管局" | 已写入 `research-data/people/lu-songbin.json` 并投影至 `generatedResearch.ts` |
| F028@1 | `career/lu-songbin-fj-csrc-2017-2020/position` | 补回旧库完全漏记的2017—2020.08福建证监局党委书记、局长任期（值：`"党委书记、局长"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（正文第1-4段） | 公开投影："党委书记、局长" | 已写入 `research-data/people/lu-songbin.json` 并投影至 `generatedResearch.ts` |
| F029@1 | `career/lu-songbin-fj-csrc-2017-2020/rank` | 补回旧库完全漏记的2017—2020.08福建证监局党委书记、局长任期（值：`"正厅局级"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（正文第1-4段） | 公开投影："正厅局级" | 已写入 `research-data/people/lu-songbin.json` 并投影至 `generatedResearch.ts` |
| F030@1 | `career/lu-songbin-fj-csrc-2017-2020/startYear` | 补回旧库完全漏记的2017—2020.08福建证监局党委书记、局长任期（值：`2017`） | startYear=2017（原文直接记载） | `supported_direct` | S001@1（正文第1-4段） | 公开投影：2017 | 已写入 `research-data/people/lu-songbin.json` 并投影至 `generatedResearch.ts` |
| F031@1 | `career/lu-songbin-fj-csrc-2017-2020/endYear` | 补回旧库完全漏记的2017—2020.08福建证监局党委书记、局长任期（值：`2020`） | endYear=2020（原文直接记载） | `supported_direct` | S001@1（正文第1-4段） | 公开投影：2020 | 已写入 `research-data/people/lu-songbin.json` 并投影至 `generatedResearch.ts` |
| F032@1 | `career/lu-songbin-fj-csrc-2017-2020/endMonth` | 补回旧库完全漏记的2017—2020.08福建证监局党委书记、局长任期（值：`8`） | endMonth=8（原文直接记载） | `supported_direct` | S001@1（正文第1-4段） | 公开投影：8 | 已写入 `research-data/people/lu-songbin.json` 并投影至 `generatedResearch.ts` |
| F033@1 | `career/lu-songbin-js-csrc-2020/recordKind` | 补回旧库完全漏记的2020年8月起江苏证监局党委书记、局长任期；离任精确年月待核故省略endYear（值：`"tenure"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（正文第1段）；S003@1（正文第1段） | 公开投影："tenure" | 已写入 `research-data/people/lu-songbin.json` 并投影至 `generatedResearch.ts` |
| F034@1 | `career/lu-songbin-js-csrc-2020/tenureStatus` | 补回旧库完全漏记的2020年8月起江苏证监局党委书记、局长任期；离任精确年月待核故省略endYear（值：`"historical"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（正文第1段）；S003@1（正文第1段） | 公开投影："historical" | 已写入 `research-data/people/lu-songbin.json` 并投影至 `generatedResearch.ts` |
| F035@1 | `career/lu-songbin-js-csrc-2020/unitId` | 补回旧库完全漏记的2020年8月起江苏证监局党委书记、局长任期；离任精确年月待核故省略endYear（值：`"csrc-js"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（正文第1段）；S003@1（正文第1段） | 公开投影："csrc-js" | 已写入 `research-data/people/lu-songbin.json` 并投影至 `generatedResearch.ts` |
| F036@1 | `career/lu-songbin-js-csrc-2020/unitName` | 补回旧库完全漏记的2020年8月起江苏证监局党委书记、局长任期；离任精确年月待核故省略endYear（值：`"中国证监会江苏监管局"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（正文第1段）；S003@1（正文第1段） | 公开投影："中国证监会江苏监管局" | 已写入 `research-data/people/lu-songbin.json` 并投影至 `generatedResearch.ts` |
| F037@1 | `career/lu-songbin-js-csrc-2020/position` | 补回旧库完全漏记的2020年8月起江苏证监局党委书记、局长任期；离任精确年月待核故省略endYear（值：`"党委书记、局长"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（正文第1段）；S003@1（正文第1段） | 公开投影："党委书记、局长" | 已写入 `research-data/people/lu-songbin.json` 并投影至 `generatedResearch.ts` |
| F038@1 | `career/lu-songbin-js-csrc-2020/rank` | 补回旧库完全漏记的2020年8月起江苏证监局党委书记、局长任期；离任精确年月待核故省略endYear（值：`"正厅局级"`） | 非日期字段（随所属记录精度） | `supported_direct` | S001@1（正文第1段）；S003@1（正文第1段） | 公开投影："正厅局级" | 已写入 `research-data/people/lu-songbin.json` 并投影至 `generatedResearch.ts` |
| F039@1 | `career/lu-songbin-js-csrc-2020/startYear` | 补回旧库完全漏记的2020年8月起江苏证监局党委书记、局长任期；离任精确年月待核故省略endYear（值：`2020`） | startYear=2020（原文直接记载） | `supported_direct` | S001@1（正文第1段）；S003@1（正文第1段） | 公开投影：2020 | 已写入 `research-data/people/lu-songbin.json` 并投影至 `generatedResearch.ts` |
| F040@1 | `career/lu-songbin-js-csrc-2020/startMonth` | 补回旧库完全漏记的2020年8月起江苏证监局党委书记、局长任期；离任精确年月待核故省略endYear（值：`8`） | startMonth=8（原文直接记载） | `supported_direct` | S001@1（正文第1段）；S003@1（正文第1段） | 公开投影：8 | 已写入 `research-data/people/lu-songbin.json` 并投影至 `generatedResearch.ts` |
| F041@1 | `career/lu-songbin-csrc-nplc-202305/recordKind` | 活动报道仅支持2023-05-19时点任非上市公众公司监管部主任，按observation记录，不伪造任期起止；机构改革前原非公部不等同现市场二司，用空unitId（值：`"observation"`） | 非日期字段（随所属记录精度） | `supported_observation` | S004@1（正文第1段） | 公开投影："observation" | 已写入 `research-data/people/lu-songbin.json` 并投影至 `generatedResearch.ts` |
| F042@1 | `career/lu-songbin-csrc-nplc-202305/unitId` | 活动报道仅支持2023-05-19时点任非上市公众公司监管部主任，按observation记录，不伪造任期起止；机构改革前原非公部不等同现市场二司，用空unitId（值：`""`） | 非日期字段（随所属记录精度） | `supported_observation` | S004@1（正文第1段） | 公开投影："" | 已写入 `research-data/people/lu-songbin.json` 并投影至 `generatedResearch.ts` |
| F043@1 | `career/lu-songbin-csrc-nplc-202305/unitName` | 活动报道仅支持2023-05-19时点任非上市公众公司监管部主任，按observation记录，不伪造任期起止；机构改革前原非公部不等同现市场二司，用空unitId（值：`"中国证券监督管理委员会非上市公众公司监管部"`） | 非日期字段（随所属记录精度） | `supported_observation` | S004@1（正文第1段） | 公开投影："中国证券监督管理委员会非上市公众公司监管部" | 已写入 `research-data/people/lu-songbin.json` 并投影至 `generatedResearch.ts` |
| F044@1 | `career/lu-songbin-csrc-nplc-202305/position` | 活动报道仅支持2023-05-19时点任非上市公众公司监管部主任，按observation记录，不伪造任期起止；机构改革前原非公部不等同现市场二司，用空unitId（值：`"主任"`） | 非日期字段（随所属记录精度） | `supported_observation` | S004@1（正文第1段） | 公开投影："主任" | 已写入 `research-data/people/lu-songbin.json` 并投影至 `generatedResearch.ts` |
| F045@1 | `career/lu-songbin-csrc-nplc-202305/rank` | 活动报道仅支持2023-05-19时点任非上市公众公司监管部主任，按observation记录，不伪造任期起止；机构改革前原非公部不等同现市场二司，用空unitId（值：`"正厅局级"`） | 非日期字段（随所属记录精度） | `supported_observation` | S004@1（正文第1段） | 公开投影："正厅局级" | 已写入 `research-data/people/lu-songbin.json` 并投影至 `generatedResearch.ts` |
| F046@1 | `career/lu-songbin-csrc-nplc-202305/observedAt` | 活动报道仅支持2023-05-19时点任非上市公众公司监管部主任，按observation记录，不伪造任期起止；机构改革前原非公部不等同现市场二司，用空unitId（值：`{"year":2023,"month":5,"day":19}`） | observedAt={"year":2023,"month":5,"day":19}（时间点观察） | `supported_observation` | S004@1（正文第1段） | 公开投影：{"year":2023,"month":5,"day":19} | 已写入 `research-data/people/lu-songbin.json` 并投影至 `generatedResearch.ts` |

## 推理台账

- 本轮无 `derived` 推理；2023-05-19 出席西城区活动报道仅证明当日以“证监会非上市公众公司监管部主任”身份履职，严格按 `recordKind: observation`（`observedAt: 2023-05-19`）录入，不虚构江苏局离任月或非公部起止月。

## 冲突与拒绝记录

| 争议属性 | 说法A及来源 | 说法B及来源 | 是否同一日期／职务口径 | 处理及理由 | 待查链接／搜索式 |
| --- | --- | --- | --- | --- | --- |
| 2015—2023 核心厅局级履历 | 旧库 `legacyData.ts:13215`：2011.08—2024.01 证监会非公部副主任／副司长 | S001+S003+S004：2015.04办公厅副主任→2017—2020.08福建局局长→2020.08起江苏局局长→2023.05非公部主任 | 整段正副局级岗位轨迹 | **采信一手权威报道，彻底淘汰旧库编造轨迹** | 无需再查 |

## 职业时间线缺口与下一轮

| 缺口 | 已知边界（不强推任期） | 要找的材料 | 下一条完整查询 | 优先级 |
| --- | --- | --- | --- | --- |
| 出生年月、籍贯、本硕院校及北大博士毕业年份 | 已知男、北京大学经济学博士 | 北交所法定披露文件或北大博士论文库 | `"鲁颂宾" "北京大学" 博士论文 OR 出生` | 中 |
| 江苏证监局调任非公部主任精确年月、任北交所党委书记／董事长精确年月及北交所完整班子名册 | 已知 2022.02 仍在江苏局、2023.05 已任非公部主任、2025.10 在任北交所董事长 | 北交所官网公告及权威人事报道 | `"鲁颂宾" "北京证券交易所" "党委书记" OR "董事长" 2024` | 高 |

## 本轮交付与续接

- 新增有效岗位／教育经历／日期属性：补齐性别“男”；新增北京大学经济学博士记录；新增 4 段核验历史任职（办公厅处长、2015.04办公厅副主任、2017—2020.08福建证监局局长、2020.08起江苏证监局局长）及 1 条观察点（2023-05-19 非上市公众公司监管部主任）。
- 删除或纠正的错误及依据：证伪旧库编造的“山大本科／人大硕士”及“2011—2024长任非公部副司长”两处严重失实。
- 来源对应复查结果：全部已发布事实均绑定 `reading: "read"` 原文定位摘录，无悬空引用，无观察点冒充连续任期起止。
- 页面及结构验证（仅实际执行后填写）：已通过 `npm run research:check`、`npm run audit:data`、`npm run test:records`、`npm run test:relations`、`npm run test:research`、`npm run test:safety` 及生产构建 `npm run build` 校验。
- 结束状态：本轮研究完成（核心锚点与主干履历已入库，细分早期缺口转入二轮深化队列）。
- 停止条件满足情况：已核清核心身份、现职状态、关键正副局／部级履历与母校学历，证伪旧库硬伤并留下精确下一查询。
- 上次停在查询ID／来源ID：`Q001` ／ `S005`
- 最后处理事实ID／推理ID及当前阶段：`F046@1` ／ 无 `I` 推理项（已完成工作台导入与公开投影）
- 已证实待入库事实及原因／拟写入字段：无（本轮已证实事实已全部通过 `research:import --write --expect` 入库）。
- 旧模型线索对账完成与剩余项：旧库核心学历与主干履历线索已完成对账；待核候选见上表 `candidate`／`conflicted` 项。
- 输入变更后需要重新计算或撤销的推理：无依赖推理受影响。
- 下一步必须先执行的搜索式或原文链接：`"鲁颂宾" "北京证券交易所" "党委书记" 2024`
- 尚未访问的高价值来源：《中国证券期货年鉴》历史卷、学位论文库及部分脚本受阻的交易所官网内页（详见渠道覆盖表）。
- 是否需要用户提供合法访问权限或已有资料：否（公开渠道与本地 Google Chrome 浏览器即可继续推进）。
