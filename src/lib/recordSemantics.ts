import type { CareerRecord, EducationInfo, FieldEvidence, Official, PartialDate } from '../types';

export function validDate(date?: PartialDate): date is PartialDate {
  if (!date || !Number.isInteger(date.year) || date.year < 1801 || date.year > 2199) return false;
  if (date.month !== undefined && (!Number.isInteger(date.month) || date.month < 1 || date.month > 12)) return false;
  if (date.day !== undefined && (date.month === undefined || !Number.isInteger(date.day)
    || date.day < 1 || date.day > new Date(Date.UTC(date.year, date.month, 0)).getUTCDate())) return false;
  return true;
}

export function formatDate(date?: PartialDate, fallback = '时间待核'): string {
  if (!validDate(date)) return fallback;
  return `${date.year}${date.month === undefined ? '' : `.${String(date.month).padStart(2, '0')}`}${date.day === undefined ? '' : `.${String(date.day).padStart(2, '0')}`}`;
}

export function careerStatus(record: CareerRecord): 'current' | 'historical' | 'unknown' {
  if (record.recordKind === 'observation') return 'unknown';
  if (record.tenureStatus) return record.tenureStatus;
  if (record.isCurrent === false || typeof record.endYear === 'number') return 'historical';
  if (record.isCurrent === true || record.endYear === null) return 'current';
  return 'unknown';
}

export function formatCareerDates(record: CareerRecord): string {
  if (record.recordKind === 'observation') return `${formatDate(record.observedAt)}有任职记载（观察点，非任期）`;
  const start = formatDate(record.startYear ? { year: record.startYear, month: record.startMonth, day: record.startDay } : undefined, '起始时间待核');
  const status = careerStatus(record);
  const end = typeof record.endYear === 'number'
    ? formatDate({ year: record.endYear, month: record.endMonth ?? undefined, day: record.endDay })
    : status === 'current'
      ? validDate(record.confirmedAsOf) ? `截至${formatDate(record.confirmedAsOf)}在任` : record.tenureStatus ? '在任确认日期待核' : '至今（旧记录，现状待复核）'
      : status === 'historical' ? '结束时间待核（历史任职）' : '结束及现任状态待核';
  return `${start} — ${end}`;
}

export function formatEducation(education: EducationInfo): string {
  const degree = education.degree === '大专' ? '专科（旧学历记录）'
    : education.degree === '其他' ? '其他（旧分类待核）'
      : education.degree ? education.degreeStatus === 'pursuing' ? `攻读${education.degree}学位`
        : `${education.degree}学位${education.degreeStatus === 'awarded' ? '（已获授）' : '（获授状态待核）'}` : '学位待核';
  const status = education.studyStatus && ({ studying: '在读', graduated: '已毕业', completed: '结业', unknown: '学习状态待核' }[education.studyStatus]);
  return [education.educationLevel && `${education.educationLevel}层次`, degree, status].filter(Boolean).join(' · ');
}

/** 用于排序，不推算缺失的教育时段或任期。 */
export function careerSortDate(record: CareerRecord): number {
  const date = record.recordKind === 'observation' ? record.observedAt
    : record.confirmedAsOf ?? (record.endYear ? { year: record.endYear, month: record.endMonth ?? undefined }
      : record.startYear ? { year: record.startYear, month: record.startMonth } : undefined);
  return validDate(date) ? date.year * 12 + (date.month ?? 0) : 0;
}

export interface CareerInterval {
  start: PartialDate;
  end: PartialDate;
  uncertain: boolean;
}

/** 只为可定位任期提供区间。观察点、未知结束及明确状态待核的记录不产生任期。 */
export function careerInterval(record: CareerRecord, now = new Date()): CareerInterval | null {
  if (record.recordKind === 'observation' || record.tenureStatus === 'unknown') return null;
  const start = record.startYear ? { year: record.startYear, month: record.startMonth, day: record.startDay } : undefined;
  const end = typeof record.endYear === 'number'
    ? { year: record.endYear, month: record.endMonth ?? undefined, day: record.endDay }
    : careerStatus(record) === 'current'
      ? record.confirmedAsOf ?? (record.tenureStatus ? undefined : { year: now.getFullYear(), month: now.getMonth() + 1 })
      : undefined;
  if (!validDate(start) || !validDate(end)) return null;
  if (start.year * 12 + (start.month ?? 1) > end.year * 12 + (end.month ?? 12)) return null;
  if (start.year === end.year && start.month === end.month && start.day !== undefined && end.day !== undefined && start.day > end.day) return null;
  return { start, end, uncertain: start.month === undefined || end.month === undefined };
}

export function careerPlot(record: CareerRecord, now = new Date()) {
  if (record.recordKind === 'observation') {
    if (!validDate(record.observedAt)) return null;
    return { kind: 'observation' as const, start: record.observedAt, end: record.observedAt, uncertain: record.observedAt.month === undefined };
  }
  const interval = careerInterval(record, now);
  return interval ? { kind: 'tenure' as const, ...interval } : null;
}

export function boundSourceIds(record: CareerRecord | EducationInfo): string[] {
  return [...new Set([...(record.sourceIds || []), ...Object.values(record.fieldEvidence || {}).flatMap(item => item?.sourceIds || [])])];
}

export const evidenceFieldLabels: Record<string, string> = {
  birthYear: '出生年', birthMonth: '出生月', nativePlace: '籍贯', gender: '性别', currentRank: '个人职级', unitId: '机构对应', recordKind: '记录类型', educationMode: '培养方式', isInService: '在职学习',
  unitName: '机构', department: '部门', position: '职务', rank: '职级',
  startYear: '起始年', startMonth: '起始月', startDay: '起始日', endYear: '结束年', endMonth: '结束月', endDay: '结束日',
  observedAt: '任职观察点', tenureStatus: '任职状态', confirmedAsOf: '在任确认截至日',
  school: '学校', degree: '学位', degreeStatus: '学位获授状态', educationLevel: '教育层次', studyStatus: '学习状态', major: '专业', graduationYear: '毕业年',
};
export const evidenceStatusLabels: Record<FieldEvidence['status'], string> = {
  needs_review: '待核验', verified: '已核验', conflicted: '存在争议', rejected: '已否决',
};
export const evidenceBasisLabels: Record<FieldEvidence['basis'], string> = {
  direct: '原文记载', observation: '时间点观察', derived: '事实推导',
};

/** 核验结论只针对参与关系计算的字段；链接存在本身不等于已核验。 */
export function relationEvidence(person: Official, record: CareerRecord | EducationInfo, kind: 'career' | 'education') {
  const sources = new Set((person.sources || []).filter(s => s.url).map(s => s.id));
  const fields: string[] = kind === 'career' ? ['unitName', 'startYear'] : ['school', 'startYear'];
  if (kind === 'career') {
    const r = record as CareerRecord;
    fields.push(typeof r.endYear === 'number' ? 'endYear' : 'tenureStatus', ...(typeof r.endYear !== 'number' ? ['confirmedAsOf'] : []));
    for (const field of ['startMonth', 'startDay', 'endMonth', 'endDay'] as const) if (r[field] != null) fields.push(field);
    if (r.isDerived) return 'needs_review';
  } else {
    const r = record as EducationInfo;
    fields.push(r.endYear !== undefined ? 'endYear' : 'graduationYear');
    if (r.isDerivedSpan) return 'needs_review';
  }
  const evidence = record.fieldEvidence as Record<string, FieldEvidence> | undefined;
  if (fields.some(field => evidence?.[field]?.status === 'conflicted' || evidence?.[field]?.status === 'rejected')) return 'conflicted';
  return fields.every(field => {
    const item = evidence?.[field];
    return item?.status === 'verified' && item.basis === 'direct' && item.sourceIds.some(id => sources.has(id));
  }) ? 'verified' : 'needs_review';
}
