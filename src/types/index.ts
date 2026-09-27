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

export type InformationSourceType =
  | 'official_profile'
  | 'appointment'
  | 'official_notice'
  | 'discipline_notice'
  | 'institution_disclosure'
  | 'authoritative_media'
  | 'academic'
  | 'other';

/** 可复核的信息来源。supports 用于说明该来源具体支撑哪些字段或履历记录。 */
export interface InformationSource {
  id: string;
  title: string;
  publisher: string;
  url?: string;
  sourceType: InformationSourceType;
  publishedDate?: string;
  accessedDate: string;
  supports: string[];
  note?: string;
}

export interface ProfileReview {
  status: 'verified' | 'partially_verified' | 'needs_review';
  reviewedAt?: string;
  note?: string;
}

/** 精度由实际提供的字段决定；未知月份／日期不补值。 */
export interface PartialDate {
  year: number;
  month?: number;
  day?: number;
}

export interface FieldEvidence {
  status: 'needs_review' | 'verified' | 'conflicted' | 'rejected';
  basis: 'direct' | 'observation' | 'derived';
  sourceIds: string[];
  reviewedAt?: string;
  note?: string;
}

export type CareerEvidenceField = 'unitId' | 'recordKind' | 'unitName' | 'department' | 'position' | 'rank'
  | 'startYear' | 'startMonth' | 'startDay' | 'endYear' | 'endMonth' | 'endDay'
  | 'observedAt' | 'tenureStatus' | 'confirmedAsOf';
export type EducationEvidenceField = 'school' | 'degree' | 'degreeStatus' | 'educationLevel' | 'studyStatus'
  | 'major' | 'startYear' | 'endYear' | 'graduationYear' | 'educationMode' | 'isInService';

export interface CareerRecord {
  recordKind?: 'tenure' | 'observation'; // 未填为旧任期记录；观察点不代表连续任期
  tenureStatus?: 'current' | 'historical' | 'unknown';
  observedAt?: PartialDate; // 活动／材料实际确认任职的时点，不是发稿日或上任日
  confirmedAsOf?: PartialDate; // 现任状态的证据截止时间，不自动延长到系统今天
  fieldEvidence?: Partial<Record<CareerEvidenceField, FieldEvidence>>;
  sourceIds?: string[]; // 本段事实对应 Official.sources 的 ID
  id: string;
  unitId: string; // 空字符串表示外部历史机构，避免错误链接到站内其他机构页
  unitName: string;
  department?: string;
  position: string;
  rank?: UnitLevel;
  startYear?: number;
  startMonth?: number;
  startDay?: number;
  endYear?: number | null; // undefined 为未知；null 仅兼容旧“至今”，新记录使用 tenureStatus
  endMonth?: number | null;
  endDay?: number;
  isCurrent?: boolean;
  isDerived?: boolean; // 是否属于公开新闻/会议报道推导反推履历
  sourceNote?: string; // 推导来源或佐证说明
  notes?: string;
  confidence?: ConfidenceInfo; // 该段履历置信度评价
}

export interface EducationInfo {
  id?: string;
  sourceIds?: string[];
  degree?: '学士' | '硕士' | '博士' | '大专' | '其他'; // 大专仅兼容旧值，新数据写 educationLevel
  school?: string;
  educationLevel?: '专科' | '本科' | '研究生' | '其他';
  studyStatus?: 'studying' | 'graduated' | 'completed' | 'unknown';
  degreeStatus?: 'awarded' | 'pursuing' | 'unknown'; // 毕业／在读与是否获得学位分别核验
  fieldEvidence?: Partial<Record<EducationEvidenceField, FieldEvidence>>;
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
  | 'unknown'      // 当前履职状态待核
  | 'serving'       // 现任在职
  | 'retired'       // 正常退休/到龄离休
  | 'investigated'  // 违纪审查/撤职处分/立案调查
  | 'transferred';  // 调离系统/免职转任

export interface PortraitSource {
  kind: 'official_portrait' | 'official_event_photo' | 'authoritative_news_photo';
  title: string;
  publisher: string;
  url: string;
  accessedDate: string;
  note?: string;
}

export interface Official {
  basicFieldEvidence?: Record<string, FieldEvidence | undefined>;
  researchNotices?: string[];
  researchCurrentStatusPending?: boolean;
  id: string;
  name: string;
  avatarUrl?: string;
  avatarVerified?: boolean; // false 时禁止加载历史图片资产，直接显示姓名占位头像
  portraitSource?: PortraitSource; // 肖像单独留存来源；不得以人物履历来源替代图片来源
  gender: '男' | '女' | '未公开';
  birthYear?: number;
  birthMonth?: number;
  nativePlace?: string; // 籍贯
  currentUnitId: string;
  currentPosition: string;
  currentRank?: UnitLevel;
  education: EducationInfo[];
  careerHistory: CareerRecord[];
  bioSummary?: string;
  basicInfoConfidence?: ConfidenceInfo; // 年龄、籍贯等基础信息置信度
  isCurrentServing?: boolean; // 是否在任在职（退休、离任、曾任为 false）
  servingStatus?: OfficialServingStatus; // 履职状态
  servingStatusLabel?: string; // 履职状态中文标签（如“现任在职”、“正常退休”、“开除党籍公职”、“留党察看/政务撤职”）
  servingStatusNote?: string; // 状态详细说明或官方通报纪实
  statusBadgeColor?: 'emerald' | 'slate' | 'rose' | 'amber' | 'blue';
  sources?: InformationSource[]; // 构建本人物档案所使用的可复核来源
  profileReview?: ProfileReview; // 档案整体核验状态，避免局部证据被误读为全档案已核验
}

export interface InstitutionHistoryEntry {
  id: string;
  name: string; // 当时名称；不改写履历原文
  startYear?: number;
  endYear?: number; // 未知不等于至今
  changeType: 'established' | 'rename' | 'merge' | 'split' | 'other';
  continuity: 'same_entity' | 'related_entity' | 'unverified';
  note?: string;
  sources: InformationSource[];
}

export interface InstitutionIdentity {
  id: string;
  name: string;
  history?: InstitutionHistoryEntry[];
}

export interface Unit {
  rosterReview?: {
    status: 'complete' | 'partial' | 'needs_review';
    asOf?: PartialDate;
    scope: string; // 党委、经营管理层、董事等口径
    sources: InformationSource[];
    note?: string;
  };
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
  history?: InstitutionHistoryEntry[];
}

export type ViewMode = 'units' | 'officials' | 'swimlanes';
