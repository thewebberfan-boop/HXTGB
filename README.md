# 中国证监会系统干部人事全景推演与组织架构知识库系统 (HXTGB)

> **CSRC Cadre Trajectory & Institutional Radar System**  
> 面向中国资本市场监管与金融治理体系的专业级干部人事履历时空推演、组织编制全景穿梭及多维证据链评价知识图谱系统。

---

## 目录 (Table of Contents)

- [一、项目背景与系统定位](#一项目背景与系统定位)
- [二、系统核心功能模块](#二系统核心功能模块)
  - [1. 组织机构全景架构与层级导航](#1-组织机构全景架构与层级导航)
  - [2. 机构编制与干部任职档案看板 (Units View)](#2-机构编制与干部任职档案看板-units-view)
  - [3. 干部全息个人档案与置信度评价 (Officials View)](#3-干部全息个人档案与置信度评价-officials-view)
  - [4. 时空演进穿梭泳道图谱 (Swimlane View)](#4-时空演进穿梭泳道图谱-swimlane-view)
- [三、技术架构与设计规范](#三技术架构与设计规范)
- [四、项目目录结构](#四项目目录结构)
- [五、核心数据模型与规范 (Data Schema)](#五核心数据模型与规范-data-schema)
- [六、干部数据收集与交叉校验标准规范 (SOP)](#六干部数据收集与交叉校验标准规范-sop)
- [七、本地开发与运行指南](#七本地开发与运行指南)
  - [1. 环境要求](#1-环境要求)
  - [2. 安装与启动](#2-安装与启动)
  - [3. 工作区硬性规范](#3-工作区硬性规范)

---

## 一、项目背景与系统定位

中国证券监督管理委员会（CSRC）作为国家资本市场最高监管机构，下辖机关司局、证券/期货交易所、会管企事业单位、自律协会与全国各省市监管局。监管干部在机关司局、交易所一线、地方监管局以及地方各级人民政府、央行/金融监管总局等跨部门、跨层级交流调动频繁，具有极强的专业性与政策延续性。

**HXTGB 系统**致力于为资本市场政策分析、监管人事脉络梳理提供一个高置信度、可溯源验证、支持时空演进模拟的立体化分析底座。

---

## 二、系统核心功能模块

### 1. 组织机构全景架构与层级导航
- **两层顶级系统划分**：
  - **🏛️ 证监会系统（监管核心）**：内设司局、证券交易所、期货交易所、会管企事业单位/行业协会、地方证监局派出机构；
  - **🌐 其他系统与部委机关（跨界关联）**：各级地方人民政府、央行系与金融监管总局、国资委与大型国有金融机构；
  - **顶级分类收起/展开**：左侧侧边栏支持一键收起折叠顶级分类；
- **机构实时统计徽标**：彻底废除模糊的“班子人数”，统一展示精确的关联干部数量：`在职 X` 与 `曾任 Y`；
- **地方人民政府省市三级菜单**：
  - 在“各级地方人民政府”下建立**省/直辖市**（上海市、江苏省、广东省、山东省、天津市、其他地方统合）三级子菜单；
  - 清楚区分**省级机构/直辖市级**与**各市级机构**（如副省级市、计划单列市、市辖区），精准承载干部的跨系统从政足迹。

### 2. 机构编制与干部任职档案看板 (Units View)
- **两级板块结构**：
  - **一级板块**：严格划分“**现任在任领导班子**”与“**历任 / 曾任主要领导干部**”；
  - **二级板块**：在各一级板块内部，根据官员在当前机构的具体职务智能归类分级（如“主席/党委书记”、“党委委员/副主席”、“司局长主要负责人”、“副司局长”、“交易所董事长”、“总经理”、“地方党政主要领导”、“市辖区党政正职”等）；
- **任职起止显著呈现**：
  - 每个干部卡片均带有专属的日历胶囊徽标，精确呈现起止年份、月份及任期总跨度（如 `📅 2024.02 - 至今 (已履任约 2 年)` 或 `📅 2017.12 - 2024.02 (任期约 7 年)`）；
- **机构全貌档案**：法定编制级别、建制年份、三定方案法定职责条款、官方网站、办公地址等一应俱全。

### 3. 干部全息个人档案与置信度评价 (Officials View)
- **真实免冠证件照**：收录并渲染真实免冠证件照（支持防裂图自动回退）；
- **全生命周期履历时间线**：涵盖教育背景、早期科研/基干经历、跨系统多段任职履历；
- **分段信息置信度评估**：对每位干部的学历、各段任职起止与基础信息给出三级置信度评分（高/中/推导）与权威证据链溯源说明；
- **准确履职状态标注**：清晰标注现任在职、正常退休、调离免职、立案调查/纪律审查等法定履职状态。

### 4. 时空演进穿梭泳道图谱 (Swimlane View)
- **多单位并行时空泳道**：横向对比多个监管机构与地方政府部门；
- **干部流动连线**：基于 SVG 动态贝塞尔曲线绘制干部跨单位调动、升迁、派驻路径；
- **时空反转与自适应布局**：支持时间轴正序（过去→现在）与倒序（现在→过去）一键翻转，支持智能贴合视窗大小；
- **动态干部对比**：支持在泳道上方点击“补全干部/取消干部”动态追加或移除特定人员的时空轨迹。

---

## 三、技术架构与设计规范

| 维度 | 技术选型与实现方案 |
| :--- | :--- |
| **前端基座** | Next.js 15 (App Router) + React 19 + TypeScript (Strict Mode) |
| **样式与动效** | Tailwind CSS + 原生 CSS Variables，全面遵循现代 macOS Human Interface 拟物与毛玻璃规范 |
| **图标体系** | Lucide React |
| **数据源架构** | 高度结构化静态数据集 (`src/data/csrcData.ts`)，支持客户端高响应毫秒级筛选与图遍历 |
| **部署环境** | Vercel / Node.js 生产容器，统一配置运行在端口 **4000** |

---

## 四、项目目录结构

```text
HXTGB/
├── .github/                       # GitHub 工作流配置
├── public/
│   ├── photos/                    # 干部真实免冠证件照静态资产
│   └── favicon.ico
├── src/
│   ├── app/                       # Next.js App Router 路由与主入口
│   │   ├── globals.css            # 全局样式与毛玻璃、macOS 设计变量
│   │   ├── layout.tsx             # 根布局容器
│   │   └── page.tsx               # 根页面承载
│   ├── components/                # 核心交互视图与展示组件
│   │   ├── AppContainer.tsx       # 全局顶层状态管理器与视图路由器
│   │   ├── Header.tsx             # 顶部全局导航栏与数据统计
│   │   ├── Sidebar.tsx            # 左侧多级组织树与干部筛选导航栏
│   │   ├── SwimlaneView.tsx       # 时空演进穿梭泳道图谱
│   │   ├── UnitsView.tsx          # 机构全息档案与两级板块干部看板
│   │   ├── OfficialsView.tsx      # 干部全息名录与个人深度主页
│   │   ├── OfficialIdPhoto.tsx    # 干部真实证件照/头像组件
│   │   └── PositionRankBadge.tsx  # 干部职务编制级别徽章
│   ├── data/
│   │   └── csrcData.ts            # 证监会系统全量机构与干部核心数据库
│   └── types/
│       └── index.ts               # 全局 TypeScript 接口定义 (Schema)
├── GEMINI.md                      # 工作区规范（端口 4000、Chrome 预览等）
├── package.json                   # 依赖配置与启动脚本 (默认指定端口 4000)
├── tsconfig.json                  # TypeScript 严格编译规则
└── README.md                      # 项目权威文档说明
```

---

## 五、核心数据模型与规范 (Data Schema)

在 `src/types/index.ts` 中定义了系统的核心数据结构：

### 1. 机构单位 (`Unit`)
```typescript
export interface Unit {
  id: string;                      // 机构唯一代号，如 'csrc-main', 'csrc-sse', 'gov-sh-prov'
  name: string;                    // 机构官方全称
  shortName: string;               // 简称（如“中国证监会机关”、“上交所”）
  tinyName?: string;               // 泳道极简徽标（如“会机关”、“上交所”）
  category: UnitCategory;          // 归属体系（会机关部门/会管单位/派出机构等）
  topCategory?: 'csrc' | 'other';  // 顶级分类：证监会系统 | 其他系统部委
  subCategory?: string;            // 二级分类（如“各级地方人民政府”、“证券交易所”）
  level: UnitLevel;                // 编制级别（正部级、副部级、正厅局级等）
  establishedYear: number;         // 建制成立年份
  description: string;             // 机构职能概貌
  mainDuties: string[];            // 三定方案法定核心业务范围
  websiteUrl?: string;             // 官方网站网址
  address?: string;                // 办公地址
  currentLeaderIds?: string[];     // 现任主要在任领导班子成员 ID 列表
}
```

### 2. 干部个人档案 (`Official`)
```typescript
export interface Official {
  id: string;                      // 干部唯一 ID，如 'wu-qing', 'fang-xinghai'
  name: string;                    // 姓名
  avatarUrl?: string;              // 证件照相对路径 (/photos/name.jpg)
  gender: '男' | '女';
  birthYear: number;               // 出生年份
  birthMonth?: number;
  nativePlace?: string;            // 籍贯
  currentUnitId: string;           // 当前在任或历史最后在任机构 ID
  currentPosition: string;         // 当前或最终职务
  currentRank: UnitLevel;          // 编制级别
  education: EducationInfo[];      // 终身教育履历
  careerHistory: CareerRecord[];   // 完整履职历程时间线
  isCurrentServing?: boolean;      // 是否在职在任
  servingStatus?: OfficialServingStatus; // serving | retired | investigated | transferred
  servingStatusLabel?: string;     // 中文状态标签（如“现任在职”、“正常退休”、“开除党籍公职”）
  servingStatusNote?: string;      // 状态纪实说明
}
```

### 3. 分段履职记录 (`CareerRecord`) 与置信度 (`ConfidenceInfo`)
```typescript
export interface CareerRecord {
  id: string;
  unitId: string;                  // 任职机构 ID
  unitName: string;                // 当时机构名称
  department?: string;             // 内设部门/司局/处室
  position: string;                // 担任职务
  rank?: UnitLevel;
  startYear: number;               // 任职起始年
  startMonth?: number;             // 任职起始月
  endYear: number | null;          // 任职截止年（null 表示至今）
  endMonth?: number | null;
  notes?: string;                  // 任职期间重大业务攻坚、分管领域或历史背景
  confidence?: ConfidenceInfo;     // 置信度评价（高/中/推导）与证据链信源说明
}
```

---

## 六、干部数据收集与交叉校验标准规范 (SOP)

为保障干部人事信息与履历时间线的权威性与精准度，系统执行严格的标准作业程序：

1. **分批次覆盖机制**：
   - **第一批次（核心层）**：证监会会领导班子、机关主要司局长（办公厅、发行司、上市司、机构司、稽查局等）及重点派出机构（北京证监局、上海证监局）；
   - **第二批次（基础设施层）**：各大证券交易所（上交所、深交所、北交所）、期货交易所（上期所、中金所、大商所等）及核心会管企事业单位（中国结算、中证数据、保证金监控中心、中证金融、证券业协会等）；
   - **第三批次（关联与跨界层）**：其他地方监管局主要领导，以及出现在重点干部履历中的地方政府机关（如上海市、深圳市、南京市等）与金融央企。
2. **三级信息置信度评价体系**：
   - **高（90-100分，官方红头与政务确证）**：由国务院任免通知、中国证监会党委公告、中国政府网政务通报直接印证；
   - **中（80-89分，权威财媒与历史专访）**：《财新周刊》、《证券时报》、《上海证券报》等主流财经媒体人事专访及上市公司高管任职公告交叉印证；
   - **推导（70-79分，学术与历史会议考证）**：依据历年金融年鉴、署名学术论文发表单位及历史新闻公报推导反推的跨度，予以明确标注 `isDerived: true`。

---

## 七、本地开发与运行指南

### 1. 环境要求
- **Node.js**: `v18.18.0` 或更高版本；
- **包管理器**: `npm`（建议 `v9.0+`）；
- **默认浏览器**: 按照项目规范，本地调试请优先调用 **Google Chrome**。

### 2. 安装与启动

```bash
# 1. 克隆代码仓库
git clone https://github.com/thewebberfan-boop/HXTGB.git
cd HXTGB

# 2. 安装项目依赖
npm install

# 3. 启动本地开发服务 (统一指定运行在 4000 端口)
npm run dev

# 4. 生产构建打包验证
npm run build

# 5. 启动生产预览服务 (端口 4000)
npm start
```

服务启动后，在 Google Chrome 中访问：  
👉 **`http://localhost:4000/`**

### 3. 工作区硬性规范
本项目内置了严格的开发工作区规范（见 `GEMINI.md`）：
- **默认工作浏览器**：始终将 **Google Chrome** 作为默认工作浏览器；
- **默认本地服务端口与网址**：本地开发与预览服务始终运行在端口 **4000**，统一访问网址为 **`http://localhost:4000/`**。
