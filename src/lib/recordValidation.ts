import type { CareerRecord, EducationInfo, InformationSource } from '../types';
import { evidenceFieldLabels, validDate } from './recordSemantics';

/** 结构审计，不声称验证了来源正文的真实性。旧置信度不升级为字段核验。 */
export function validateRecord(record: CareerRecord | EducationInfo, sources: InformationSource[], kind: 'career' | 'education'): string[] {
  const errors: string[] = [];
  const sourceMap = new Map(sources.map(source => [source.id, source]));
  const fields = record.fieldEvidence || {};
  const careerFields = ['unitId', 'recordKind', 'unitName', 'department', 'position', 'rank', 'startYear', 'startMonth', 'startDay', 'endYear', 'endMonth', 'endDay', 'observedAt', 'tenureStatus', 'confirmedAsOf'];
  const educationFields = ['school', 'degree', 'degreeStatus', 'educationLevel', 'studyStatus', 'major', 'startYear', 'endYear', 'graduationYear', 'educationMode', 'isInService'];
  for (const [field, evidence] of Object.entries(fields)) {
    if (!(kind === 'career' ? careerFields : educationFields).includes(field)) errors.push(`不支持的证据字段：${field}`);
    if (!evidence) continue;
    if (!['verified', 'needs_review', 'conflicted', 'rejected'].includes(evidence.status)) errors.push(`核验状态无效：${field}`);
    if (!['direct', 'observation', 'derived'].includes(evidence.basis)) errors.push(`证据性质无效：${field}`);
    if (!Array.isArray(evidence.sourceIds)) { errors.push(`字段来源列表无效：${field}`); continue; }
    for (const id of evidence.sourceIds) if (!sourceMap.has(id)) errors.push(`字段来源不存在：${field}/${id}`);
    if (evidence.status === 'verified') {
      if (!evidence.reviewedAt || !/^\d{4}-\d{2}-\d{2}$/.test(evidence.reviewedAt)) errors.push(`已核验字段缺少复核日期：${field}`);
      if (!evidence.sourceIds.some(id => /^https?:\/\//.test(sourceMap.get(id)?.url || ''))) errors.push(`已核验字段缺少可定位来源：${field}`);
      if ((record as unknown as Record<string, unknown>)[field] == null) errors.push(`已核验字段没有值：${evidenceFieldLabels[field] || field}`);
    }
    if (evidence.basis === 'observation' && ['startYear', 'startMonth', 'startDay', 'endYear', 'endMonth', 'endDay'].includes(field)) {
      errors.push(`任职观察不能绑定为任期起止：${field}`);
    }
  }
  for (const id of record.sourceIds || []) if (!sourceMap.has(id)) errors.push(`履历来源不存在：${id}`);
  if (kind === 'career') {
    const r = record as CareerRecord;
    if (r.recordKind !== undefined && !['tenure', 'observation'].includes(r.recordKind)) errors.push('记录类型无效');
    if (r.tenureStatus !== undefined && !['current', 'historical', 'unknown'].includes(r.tenureStatus)) errors.push('任职状态无效');
    if (r.recordKind === 'observation') {
      if (!validDate(r.observedAt)) errors.push('观察点缺少有效观察日期');
      if ([r.startYear, r.startMonth, r.startDay, r.endYear, r.endMonth, r.endDay].some(value => value !== undefined)) errors.push('观察点不得混填任期起止');
      if ((r.tenureStatus && r.tenureStatus !== 'unknown') || r.isCurrent === true || r.confirmedAsOf) errors.push('观察点不得自动声称现任或离任');
    } else if (r.observedAt) errors.push('观察日期须使用观察点记录');
    if (r.confirmedAsOf && !validDate(r.confirmedAsOf)) errors.push('在任确认截至日无效');
    if (r.tenureStatus === 'current' && !validDate(r.confirmedAsOf)) errors.push('新现任记录必须填写证据截至日');
    if (r.tenureStatus === 'current' && (typeof r.endYear === 'number' || r.isCurrent === false)) errors.push('现任状态与结束日期或旧状态冲突');
    if (r.tenureStatus && r.tenureStatus !== 'current' && (r.endYear === null || r.isCurrent === true)) errors.push('历史或待核状态不能使用旧至今标记');
    for (const side of ['start', 'end'] as const) {
      const year = r[`${side}Year`], month = r[`${side}Month`] ?? undefined, day = r[`${side}Day`];
      if (year != null && !validDate({ year, month, day })) errors.push(`${side}日期无效`);
      if (year == null && (month !== undefined || day !== undefined)) errors.push(`${side}月日缺少年份`);
    }
    if (r.startYear && typeof r.endYear === 'number') {
      const start = r.startYear * 10000 + (r.startMonth ?? 1) * 100 + (r.startDay ?? 1);
      const end = r.endYear * 10000 + (r.endMonth ?? 12) * 100 + (r.endDay ?? 31);
      if (start > end) errors.push('任期起止倒置');
    }
  } else {
    const r = record as EducationInfo;
    if (r.degreeStatus && !['awarded', 'pursuing', 'unknown'].includes(r.degreeStatus)) errors.push('学位获授状态无效');
    if ((r.degreeStatus === 'awarded' || r.degreeStatus === 'pursuing') && (!r.degree || r.degree === '大专' || r.degree === '其他')) errors.push('学位获授状态需要明确的学位类型');
    if (r.studyStatus && !['studying', 'graduated', 'completed', 'unknown'].includes(r.studyStatus)) errors.push('学习状态无效');
    if (!r.school?.trim() && !r.degree && !r.educationLevel) errors.push('教育记录至少保留一项有意义的学校、学历或学位信息');
    for (const year of [r.startYear, r.endYear, r.graduationYear]) if (year !== undefined && !validDate({ year })) errors.push('教育年份无效');
    const end = r.endYear ?? r.graduationYear;
    if (r.startYear && end && r.startYear > end) errors.push('教育起止倒置');
  }
  return errors;
}
