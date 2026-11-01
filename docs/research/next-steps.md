# 下一步计划

更新日期：2026-11-01。当前不仅已完成研究语义、版本化工作台、发布影响预览、版本一致性及备份恢复基础设施，还已通过 **[第一批（9人＋4所名册）](batches/2026-11-01-core-leadership-and-exchanges-batch1.md)** 与 **[第二批（16人）](batches/2026-11-01-core-leadership-and-exchanges-batch2.md)** 实战跑通全链路闭环（累计纳管 **25 名核心干部**、**`1,116` 条版本化字段事实**，全库结构化可定位来源达 **`302` 条**）。下一阶段按优先级推进**第三批（Batch 3）副职深化**与**受阻官网名册补核**；本计划不自动授权跨范围扩张或新增外部服务。

## 1. 续接第三批（Batch 3）干部履历核验与受阻官网名册补核（优先）

- 按 [研究续接索引](progress.md) 与 [第二批批次说明](batches/2026-11-01-core-leadership-and-exchanges-batch2.md) 的第三批队列推进：
  1. **Batch 3A**：会领导班子成员 `liu-haoling`（刘浩凌）及上交所／中金所交叉董事 `cai-jianchun`（蔡建春）；
  2. **Batch 3B**：上交所、深交所、北交所其余副总经理、纪委书记及总法律顾问（共 16 人）；
  3. **Batch 3C**：五家期货交易所（上期所、大商所、郑商所、中金所、广期所）其余副总经理、纪委书记（注：`wang-xiaoming-czce` 受 `scripts/test-records.mjs:159` 待复核回归断言保护，升级前须同步评估测试夹具迁移）。
- 针对脚本直连受反爬／重置限制的 4 家交易所官网（`szse.cn`、`bse.cn`、`dce.com.cn`、`czce.com.cn`），在需要更新机构级 `rosterReview.status = complete` 时使用默认浏览器 **Google Chrome** 直读官网班子页并补齐名册快照。
- 持续严守证据纪律：已证实但起止日期不完整的历史任职使用 `tenureStatus: 'historical'` 并省略未知边界；单次活动／会议报道使用 `recordKind: 'observation'`；同名干扰源显式标记 `reading: 'wrong_person'`；无原文性别代词／称谓支撑时不臆测填报性别。

## 2. 第一、二批已入库人物的二轮细化（并行可选）

- 对已入库 25 人的次优先级早期缺口（如 `chen-huaping` 本科院校 `candidate`、`wu-qing` 1989—1998 早期单位 `candidate` 与 2019 市委常委起始月 `conflicted`、部分干部的博士学位论文年份及地方证监局轮岗精确月份），结合《中国证券期货年鉴》历史卷、母校校友网与学位论文馆藏目录追加修订版本（`@2+`）。

## 3. 将验证流程固化为自动检查（后续工程）

- 经授权后增加持续集成（GitHub Actions）：自动运行 `npm run research:check`、`npm run audit:data`、`npx tsc --noEmit`、71 项单元测试（`test:records`、`test:relations`、`test:research`、`test:safety`）及 `npm run build`。
- 先检查已提交投影是否过期（`research:check`），再执行构建，确保全新检出无需依赖本地缓存或临时文件即可通过全部门禁。

## 4. 补足运行保障与本地仓库维护

- 当前工作目录位于 macOS OneDrive 云同步路径下，历史 `.git` 目录中部分旧松散对象带有 `dataless` 云端占位标记导致直接 `mmap` 受阻；远端同步可通过干净本地克隆核对状态后推送至 `origin/main`，后续可视需要将工作区迁出云同步目录或为 `.git` 执行完整本地固定（Always Keep on This Device）。
- 保持单写入者与 `previewToken` 确认机制，不绕过 `research-release.mjs` 版本门槛启动旧构建。

## 下次接手的第一动作

先读 [续接索引](progress.md)，恢复 2026-11-01 第一、二批已完成状态（25 人已入库）与第三批（Batch 3A/3B/3C）起点，再核对用户当次指令执行。
