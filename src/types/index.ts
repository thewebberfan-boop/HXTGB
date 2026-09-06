export type UnitLevel = 
  | '正部级' 
  | '副部级' 
  | '正厅局级' 
  | '副厅局级' 
  | '正处级' 
  | '副处级';

export type ConciseRank = '部' | '副部' | '厅' | '副厅' | '处' | '副处' | string;

export type UnitCategory = 
  | '会机关内设部门' 
  | '派出机构' 
  | '会管单位/交易所' 
  | '直属事业单位' 
  | '行业自律组织';

export type ConfidenceTier = 'high' | 'medium' | 'derived';

export interface ConfidenceInfo {
  level: ConfidenceTier;
  score: number; // e.g. 98, 88, 72
  label: string; // e.g. '官方确证', '权威财媒', '新闻推导'
  source?: string; // 详实信源与证据链说明
}

export interface CareerRecord {
  id: string;
  unitId: string;
  unitName: string;
  department?: string;
  position: string;
  rank?: UnitLevel;
  startYear: number;
  startMonth?: number;
  endYear: number | null; // null 表示至今
  endMonth?: number | null;
  isCurrent?: boolean;
  isDerived?: boolean; // 是否属于公开新闻/会议报道推导反推履历
  sourceNote?: string; // 推导来源或佐证说明
  notes?: string;
  confidence?: ConfidenceInfo; // 该段履历置信度评价
}

export interface EducationInfo {
  degree: '学士' | '硕士' | '博士' | '大专' | '其他';
  school: string;
  major?: string;
  graduationYear?: number;
  startYear?: number; // 在校起始年份
  endYear?: number; // 在校毕业/结业年份
  isDerivedSpan?: boolean; // 在校时段是否为学制推理
  isInService?: boolean; // 是否属于“在职”学历 / 在职研究生 / 在职学位
  educationMode?: '全日制' | '在职'; // 培养类型：全日制或在职
  confidence?: ConfidenceInfo; // 学历置信度评价
}

export type OfficialServingStatus = 
  | 'serving'       // 现任在职
  | 'retired'       // 正常退休/到龄离休
  | 'investigated'  // 违纪审查/撤职处分/立案调查
  | 'transferred';  // 调离系统/免职转任

export interface Official {
  id: string;
  name: string;
  avatarUrl?: string;
  gender: '男' | '女';
  birthYear: number;
  birthMonth?: number;
  nativePlace?: string; // 籍贯
  currentUnitId: string;
  currentPosition: string;
  currentRank: UnitLevel;
  education: EducationInfo[];
  careerHistory: CareerRecord[];
  bioSummary?: string;
  basicInfoConfidence?: ConfidenceInfo; // 年龄、籍贯等基础信息置信度
  isCurrentServing?: boolean; // 是否在任在职（退休、离任、曾任为 false）
  servingStatus?: OfficialServingStatus; // 履职状态
  servingStatusLabel?: string; // 履职状态中文标签（如“现任在职”、“正常退休”、“开除党籍公职”、“留党察看/政务撤职”）
  servingStatusNote?: string; // 状态详细说明或官方通报纪实
  statusBadgeColor?: 'emerald' | 'slate' | 'rose' | 'amber' | 'blue';
}

export interface Unit {
  id: string;
  name: string;
  shortName: string;
  tinyName?: string;
  category: UnitCategory;
  topCategory?: 'csrc' | 'other'; // 顶级栏目：证监会系统 | 其他
  subCategory?: string; // 二级栏目
  level: UnitLevel;
  establishedYear: number;
  establishedDate?: string;
  description: string;
  mainDuties: string[];
  websiteUrl?: string;
  address?: string;
  contactPhone?: string;
  currentLeaderIds?: string[];
  tagColor?: string;
}

export type ViewMode = 'units' | 'officials' | 'swimlanes';
