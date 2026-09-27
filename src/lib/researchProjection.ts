import type { CareerRecord, EducationInfo, Official, FieldEvidence } from '../types';
import type { PublicResearchPatch } from '../types/research';
import { validateRecord } from './recordValidation';

/** 公开投影在兼容基线上应用。已接管字段失效时删除，不得悄悄回退基线旧值。 */
export function applyResearchPatches(baseline: Official[], patches: PublicResearchPatch[]): Official[] {
  return baseline.map(person => {
    const changes = patches.filter(p => p.personId === person.id);
    if (!changes.length) return person;
    const result: Official = JSON.parse(JSON.stringify(person));
    const touchedCareers = new Set<string>(), touchedEducation = new Set<string>();
    const sourceMap = new Map((result.sources || []).map(source => [source.id, source]));
    for (const patch of changes) {
      patch.sources.forEach(source => sourceMap.set(source.id, source));
      let target: Record<string, unknown>;
      let evidence: Record<string, FieldEvidence | undefined>;
      if (patch.target.kind === 'basic') {
        target = result as unknown as Record<string, unknown>;
        evidence = result.basicFieldEvidence ||= {};
      } else {
        const records = patch.target.kind === 'career' ? result.careerHistory : result.education;
        let record = records.find(r => r.id === patch.target.recordId);
        if (!record) {
          record = { id: patch.target.recordId } as CareerRecord | EducationInfo;
          (records as (CareerRecord | EducationInfo)[]).push(record);
        }
        target = record as unknown as Record<string, unknown>;
        evidence = record.fieldEvidence ||= {};
        (patch.target.kind === 'career' ? touchedCareers : touchedEducation).add(patch.target.recordId!);
      }
      if (patch.value === undefined) delete target[patch.target.field];
      else target[patch.target.field] = patch.value;
      evidence[patch.target.field] = patch.evidence;
    }
    result.sources = [...sourceMap.values()];
    result.researchNotices = [];
    for (const record of result.education.filter(r => touchedEducation.has(r.id!))) {
      if (!record.degree) delete record.degreeStatus;
    }
    for (const record of result.careerHistory.filter(r => touchedCareers.has(r.id))) {
      const recordChanges = changes.filter(p => p.target.kind === 'career' && p.target.recordId === record.id);
      const intervalFields = ['unitId', 'unitName', 'recordKind', 'tenureStatus', 'confirmedAsOf', 'startYear', 'startMonth', 'startDay', 'endYear', 'endMonth', 'endDay'];
      if (recordChanges.some(p => ['tenureStatus', 'recordKind', 'endYear'].includes(p.target.field))) {
        delete record.isCurrent;
        if (record.endYear === null) delete record.endYear;
      }
      if (record.recordKind === 'observation') {
        delete record.isCurrent; delete record.tenureStatus; delete record.confirmedAsOf;
        delete record.startYear; delete record.startMonth; delete record.startDay;
        delete record.endYear; delete record.endMonth; delete record.endDay;
      }
      if (record.startYear == null) { delete record.startMonth; delete record.startDay; }
      if (record.endYear == null) { delete record.endMonth; delete record.endDay; }
      if (record.startMonth == null) delete record.startDay;
      if (record.endMonth == null) delete record.endDay;
      if (recordChanges.some(p => intervalFields.includes(p.target.field) && p.value !== undefined && p.evidence.basis === 'derived')) record.isDerived = true;
      if (recordChanges.some(p => intervalFields.includes(p.target.field) && p.value === undefined)) {
        record.isDerived = true;
        if (recordChanges.some(p => p.value === undefined && ['tenureStatus', 'confirmedAsOf'].includes(p.target.field))) record.tenureStatus = 'unknown';
      }
      delete record.sourceNote; delete record.notes; delete record.confidence;
    }
    const usable = (record: CareerRecord | EducationInfo, kind: 'career' | 'education') => {
      for (const [field, item] of Object.entries(record.fieldEvidence || {})) {
        if (item?.status === 'verified' && (record as unknown as Record<string, unknown>)[field] === undefined) {
          (record.fieldEvidence as Record<string, FieldEvidence>)[field] = { ...item, status: 'needs_review', note: '依赖字段已变化，待重新核验' };
        }
      }
      const missing = kind === 'career' && (!(record as CareerRecord).unitName || !(record as CareerRecord).position || typeof (record as CareerRecord).unitId !== 'string');
      const observationAsTenure = kind === 'career' && (record as CareerRecord).recordKind !== 'observation'
        && Object.values(record.fieldEvidence || {}).some(item => item?.status === 'verified' && item.basis === 'observation');
      if (missing || observationAsTenure || validateRecord(record, result.sources || [], kind).length) {
        result.researchNotices!.push(`经历 ${record.id} 的必要字段或证据已变化，暂不展示，待复核。`);
        return false;
      }
      return true;
    };
    result.careerHistory = result.careerHistory.filter(r => !touchedCareers.has(r.id) || usable(r, 'career'));
    result.education = result.education.filter(r => !touchedEducation.has(r.id!) || usable(r, 'education'));
    for (const record of result.education.filter(r => touchedEducation.has(r.id!))) {
      delete record.confidence;
      if (changes.some(p => p.target.kind === 'education' && p.target.recordId === record.id && /Year$/.test(p.target.field)
        && (p.value === undefined || p.evidence.basis === 'derived'))) record.isDerivedSpan = true;
    }
    if (result.birthYear === undefined) delete result.birthMonth;
    if (changes.some(p => p.target.kind === 'basic')) delete result.basicInfoConfidence;
    if (result.gender === undefined) result.gender = '未公开';
    const affectedCurrent = person.careerHistory.some(r => touchedCareers.has(r.id) && r.unitId === person.currentUnitId
      && (r.isCurrent === true || r.endYear === null || r.tenureStatus === 'current'));
    if (affectedCurrent) {
      result.researchCurrentStatusPending = true;
      result.currentPosition = '当前职务待核（详见已核验履历）';
      result.servingStatus = 'unknown'; result.isCurrentServing = false;
      result.servingStatusLabel = '当前履职状态待核'; delete result.servingStatusNote;
    }
    delete result.bioSummary;
    result.profileReview = { status: 'partially_verified', note: '研究库仅逐字段管理已接管内容，其余兼容数据仍待复核。' };
    return result;
  });
}
