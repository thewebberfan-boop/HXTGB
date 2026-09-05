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
  confidence?: ConfidenceInfo; // 学历置信度评价
}

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
}

export interface Unit {
  id: string;
  name: string;
  shortName: string;
  tinyName?: string;
  category: UnitCategory;
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
