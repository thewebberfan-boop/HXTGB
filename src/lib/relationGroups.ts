import type { Official, CareerRecord, EducationInfo, InstitutionIdentity } from '../types';
import { checkSpaceMatch, calculatePreciseOverlap, getEduSpan } from './biographyRelations';
import { resolveInstitution } from './institutionIdentity';

export type RelationKind = 'confirmed' | 'possible' | 'school_other_time' | 'school_unknown_time' | 'sequential';
export type RelationRecord = { type: 'career'; value: CareerRecord } | { type: 'education'; value: EducationInfo };
export interface BiographyRelation {
  official: Official;
  target: RelationRecord;
  other: RelationRecord;
  kind: RelationKind;
  explanation: string;
  period: string;
  weight: number;
}
const priority: Record<RelationKind, number> = { confirmed: 0, possible: 1, school_other_time: 2, school_unknown_time: 3, sequential: 4 };
export function sortRelations(relations: BiographyRelation[]) {
  return relations.sort((a, b) => priority[a.kind] - priority[b.kind] || b.weight - a.weight || a.official.id.localeCompare(b.official.id));
}
function validCareer(record: CareerRecord) {
  if (record.isDerived || !record.startYear || (record.endYear === null && record.isCurrent === false)) return false;
  return calculatePreciseOverlap(record.startYear, record.startMonth, record.endYear, record.endMonth,
    record.startYear, record.startMonth, record.endYear, record.endMonth).hasOverlap;
}
/** Conservative inner interval: contains months certainly inside a year-only span. */
function innerCareer(record: CareerRecord) {
  const now = new Date();
  return { start: record.startYear! * 12 + (record.startMonth ?? 12) - 1,
    end: record.endYear === null ? now.getFullYear() * 12 + now.getMonth()
      : Math.min(record.endYear * 12 + (record.endMonth ?? 1) - 1, now.getFullYear() * 12 + now.getMonth()) };
}
export function careerRelations(target: Official, record: CareerRecord, all: Official[], identities: InstitutionIdentity[] = []): BiographyRelation[] {
  if (!validCareer(record)) return [];
  const results: BiographyRelation[] = [];
  for (const other of all) {
    if (other.id === target.id) continue;
    const candidates: BiographyRelation[] = [];
    for (const candidate of other.careerHistory || []) {
      if (!validCareer(candidate)) continue;
      const space = checkSpaceMatch(record, candidate, identities);
      if (!space.isMatch) continue;
      const overlap = calculatePreciseOverlap(record.startYear!, record.startMonth, record.endYear, record.endMonth,
        candidate.startYear!, candidate.startMonth, candidate.endYear, candidate.endMonth);
      const a = innerCareer(record), b = innerCareer(candidate);
      // Strict inequality prevents month-only handovers being called proven coexistence.
      const definite = overlap.hasOverlap && Math.max(a.start, b.start) < Math.min(a.end, b.end);
      const kind = overlap.hasOverlap ? definite ? 'confirmed' : 'possible' : 'sequential';
      const definiteStart = Math.max(a.start, b.start), definiteEnd = Math.min(a.end, b.end);
      const yearLabel = `${Math.floor(definiteStart / 12)}—${Math.floor(definiteEnd / 12)}`;
      candidates.push({ official: other, target: { type: 'career', value: record }, other: { type: 'career', value: candidate }, kind,
        explanation: `${space.reason} · ${kind === 'sequential' ? '先后任职，不推断直接接替' : '任职记录交集，不证明相识或直接共事'}`,
        period: kind === 'sequential' ? (a.start < b.start ? '本段任职在前，对方在后' : '对方任职在前，本段在后')
          : definite && overlap.uncertain ? `${yearLabel} 存在重叠（月份不完整）` : overlap.overlapDisplay,
        weight: overlap.overlapMonths });
    }
    // Scope is this target record only. Never import another target career's intersection here.
    const best = sortRelations(candidates)[0];
    if (best) results.push(best);
  }
  return sortRelations(results);
}

export function educationRelations(target: Official, record: EducationInfo, all: Official[], schools: InstitutionIdentity[] = []): BiographyRelation[] {
  if (!record.school || /未公开|未知|不详|待核|某/.test(record.school)) return [];
  const span = getEduSpan(target, record);
  const key = resolveInstitution(record.school, span?.startYear, span?.endYear, schools);
  if (!key) return [];
  const results: BiographyRelation[] = [];
  for (const other of all) {
    if (other.id === target.id) continue;
    const candidates: BiographyRelation[] = [];
    for (const candidate of other.education || []) {
      const otherSpan = getEduSpan(other, candidate);
      if (resolveInstitution(candidate.school, otherSpan?.startYear, otherSpan?.endYear, schools) !== key) continue;
      let kind: RelationKind = 'school_unknown_time', period = '同校，是否同期待核', weight = 0;
      if (span && otherSpan) {
        const start = Math.max(span.startYear, otherSpan.startYear), end = Math.min(span.endYear, otherSpan.endYear, new Date().getFullYear());
        weight = Math.max(0, end - start);
        if (start > end) { kind = 'school_other_time'; period = '同校，不同时期'; }
        else if (start < end) { kind = 'confirmed'; period = `${start}—${end} 存在重叠（仅年份）`; }
        else { kind = 'possible'; period = `${start} 同年边界，是否同期待核`; }
      }
      candidates.push({ official: other, target: { type: 'education', value: record }, other: { type: 'education', value: candidate }, kind,
        explanation: `${record.school}${record.school !== candidate.school ? ` / ${candidate.school}（有来源的更名关联）` : ''} · 校友关联不代表同班或相识`, period, weight });
    }
    const best = sortRelations(candidates)[0];
    if (best) results.push(best);
  }
  return sortRelations(results);
}
