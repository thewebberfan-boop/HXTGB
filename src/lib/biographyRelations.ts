import type { Official, CareerRecord, EducationInfo, InstitutionIdentity } from '../types';
import { resolveInstitution } from './institutionIdentity';

// Relationships are computed from biography records, never stored person-to-person edges.
// Exact aliases only: do not merge predecessors, subsidiaries or similarly named schools.
const institutionAliases: Record<string, string> = {
  '中国证监会': '中国证券监督管理委员会',
  '中国证监会机关': '中国证券监督管理委员会',
  '中国证券监督管理委员会机关': '中国证券监督管理委员会',
  '上期所': '上海期货交易所', '大商所': '大连商品交易所',
  '郑商所': '郑州商品交易所', '中金所': '中国金融期货交易所',
  '广期所': '广州期货交易所', '上交所': '上海证券交易所',
  '深交所': '深圳证券交易所', '北交所': '北京证券交易所',
};
const clean = (value?: string) => (value || '').replace(/\s+/g, '').trim();
const usable = (value: string) => value.length >= 3 && !/未知|不详|待核|未公开|某|其他/.test(value);
const yearOK = (value: unknown): value is number => Number.isInteger(value) && Number(value) > 1800 && Number(value) < 2200;
const monthOK = (value: number | null | undefined) => value == null || (Number.isInteger(value) && value >= 1 && value <= 12);

export function normalizeSchoolName(school: string): string {
  // Preserve campus, independent-college and predecessor names until explicitly resolved.
  return clean(school);
}

export function getEduSpan(_official: Official, edu: EducationInfo) {
  const endYear = edu.endYear ?? edu.graduationYear;
  if (edu.isDerivedSpan || !yearOK(edu.startYear) || !yearOK(endYear) || edu.startYear > endYear) return null;
  return { startYear: edu.startYear, endYear };
}

export function checkSpaceMatch(a: CareerRecord, b: CareerRecord, identities: InstitutionIdentity[] = []): { isMatch: boolean; reason?: string } {
  const nameA = institutionAliases[clean(a.unitName)] || clean(a.unitName);
  const nameB = institutionAliases[clean(b.unitName)] || clean(b.unitName);
  // IDs in legacy data sometimes refer to broad parent units, so a shared ID alone is insufficient.
  const identityA = resolveInstitution(nameA, a.startYear, a.endYear === null ? new Date().getFullYear() : a.endYear, identities);
  const identityB = resolveInstitution(nameB, b.startYear, b.endYear === null ? new Date().getFullYear() : b.endYear, identities);
  if (!usable(nameA) || !usable(nameB) || !identityA || identityA !== identityB) return { isMatch: false };
  const department = clean(a.department);
  const sameDept = department && department === clean(b.department) && !/领导班子|待核|未公开/.test(department);
  return { isMatch: true, reason: `${nameA}${nameA !== nameB ? ` / ${nameB}（有来源的更名关联）` : ''}${sameDept ? ` · ${department}（同部门）` : '（同机构）'}` };
}

type Overlap = {
  hasOverlap: boolean; overlapMonths: number; overlapDisplay: string;
  startStr: string; endStr: string; start: number; end: number; uncertain: boolean;
};
const noOverlap = (): Overlap => ({ hasOverlap: false, overlapMonths: 0, overlapDisplay: '', startStr: '', endStr: '', start: 0, end: -1, uncertain: false });
const formatMonth = (value: number) => `${Math.floor(value / 12)}.${String(value % 12 + 1).padStart(2, '0')}`;

export function calculatePreciseOverlap(
  startA: number, startMonthA: number | undefined, endA: number | null, endMonthA: number | null | undefined,
  startB: number, startMonthB: number | undefined, endB: number | null, endMonthB: number | null | undefined,
  currentYear = new Date().getFullYear(), currentMonth = new Date().getMonth() + 1,
): Overlap {
  if (!yearOK(startA) || !yearOK(startB) || !yearOK(currentYear) || !monthOK(currentMonth)
    || (endA !== null && !yearOK(endA)) || (endB !== null && !yearOK(endB))
    || ![startMonthA, endMonthA, startMonthB, endMonthB].every(monthOK)) return noOverlap();
  const now = currentYear * 12 + currentMonth - 1;
  const aStart = startA * 12 + (startMonthA ?? 1) - 1;
  const bStart = startB * 12 + (startMonthB ?? 1) - 1;
  const aEnd = endA === null ? now : endA * 12 + (endMonthA ?? 12) - 1;
  const bEnd = endB === null ? now : endB * 12 + (endMonthB ?? 12) - 1;
  if (aStart > aEnd || bStart > bEnd) return noOverlap();
  const start = Math.max(aStart, bStart), end = Math.min(aEnd, bEnd, now);
  if (start > end) return noOverlap();
  const uncertain = startMonthA == null || startMonthB == null
    || (endA !== null && endMonthA == null) || (endB !== null && endMonthB == null);
  const startStr = uncertain ? String(Math.floor(start / 12)) : formatMonth(start);
  const endStr = endA === null && endB === null ? '至今' : uncertain ? String(Math.floor(end / 12)) : formatMonth(end);
  return {
    hasOverlap: true, overlapMonths: end - start + 1, start, end, uncertain, startStr, endStr,
    overlapDisplay: uncertain ? `${startStr}—${endStr} 可能同期（月份未明）`
      : start === end ? `${startStr} 同月边界（是否同期待核）` : `${startStr}—${endStr} 月份重叠`,
  };
}

function careerOverlap(a: CareerRecord, b: CareerRecord) {
  // Legacy null means current. Explicitly historical/derived records must not become current evidence.
  if ((a.endYear === null && a.isCurrent === false) || (b.endYear === null && b.isCurrent === false)
    || a.isDerived || b.isDerived || !yearOK(a.startYear) || !yearOK(b.startYear)) return noOverlap();
  return calculatePreciseOverlap(a.startYear, a.startMonth, a.endYear, a.endMonth,
    b.startYear, b.startMonth, b.endYear, b.endMonth);
}

export function getColleagueTotalIntersections(a: Official, b: Official) {
  const intervals: Overlap[] = [];
  for (const ra of a.careerHistory || []) for (const rb of b.careerHistory || []) {
    if (!checkSpaceMatch(ra, rb).isMatch) continue;
    const overlap = careerOverlap(ra, rb);
    if (overlap.hasOverlap) intervals.push(overlap);
  }
  // Union the time intervals: multiple roles at once must not multiply elapsed time.
  const merged: { start: number; end: number }[] = [];
  for (const interval of intervals.sort((x, y) => x.start - y.start)) {
    const previous = merged[merged.length - 1];
    if (previous && interval.start <= previous.end + 1) previous.end = Math.max(previous.end, interval.end);
    else merged.push({ start: interval.start, end: interval.end });
  }
  const totalMonths = merged.reduce((sum, span) => sum + span.end - span.start + 1, 0);
  const uncertain = intervals.some(span => span.uncertain);
  return {
    totalCount: merged.length, totalMonths,
    totalDisplay: !merged.length ? '暂无可计算交集' : uncertain
      ? `${merged.length} 段可能同期区间（去重；月份未明）`
      : `${merged.length} 段同期区间 · 覆盖 ${totalMonths} 个自然月（去重）`,
  };
}

export interface AlumniMatch {
  official: Official; education: EducationInfo; overlapYears: number; overlapDisplay: string;
  totalIntersectionCount: number; totalIntersectionDisplay: string; reason: string;
}
export function findAlumniForEdu(target: Official, edu: EducationInfo, all: Official[]): AlumniMatch[] {
  const school = normalizeSchoolName(edu.school), span = getEduSpan(target, edu);
  if (!usable(school) || !span) return [];
  const matches: AlumniMatch[] = [];
  const now = new Date().getFullYear();
  for (const other of all) {
    if (other.id === target.id) continue;
    let best: AlumniMatch | undefined;
    for (const candidate of other.education || []) {
      if (normalizeSchoolName(candidate.school) !== school) continue;
      const otherSpan = getEduSpan(other, candidate);
      if (!otherSpan) continue;
      const start = Math.max(span.startYear, otherSpan.startYear);
      const end = Math.min(span.endYear, otherSpan.endYear, now);
      if (start > end) continue;
      const years = end - start + 1;
      if (!best || years > best.overlapYears) {
        const totals = getColleagueTotalIntersections(target, other);
        best = { official: other, education: candidate, overlapYears: years,
          overlapDisplay: `${start}—${end} 可能同期（仅年份）`,
          reason: `${school} · 由双方教育时段推导，非同班或相识证明`,
          totalIntersectionCount: totals.totalCount, totalIntersectionDisplay: totals.totalDisplay };
      }
    }
    if (best) matches.push(best);
  }
  return matches.sort((a, b) => b.overlapYears - a.overlapYears || a.official.id.localeCompare(b.official.id));
}

export interface ColleagueMatch {
  official: Official; record: CareerRecord; overlapMonths: number; overlapDisplay: string;
  totalIntersectionCount: number; totalIntersectionDisplay: string; reason: string;
}
export function findColleaguesForCareer(target: Official, record: CareerRecord, all: Official[]): ColleagueMatch[] {
  const matches: ColleagueMatch[] = [];
  for (const other of all) {
    if (other.id === target.id) continue;
    let best: ColleagueMatch | undefined;
    for (const candidate of other.careerHistory || []) {
      const space = checkSpaceMatch(record, candidate);
      if (!space.isMatch) continue;
      const overlap = careerOverlap(record, candidate);
      if (!overlap.hasOverlap) continue;
      if (!best || overlap.overlapMonths > best.overlapMonths) {
        const totals = getColleagueTotalIntersections(target, other);
        best = { official: other, record: candidate, overlapMonths: overlap.overlapMonths,
          overlapDisplay: overlap.overlapDisplay, reason: `${space.reason} · 履历推导`,
          totalIntersectionCount: totals.totalCount, totalIntersectionDisplay: totals.totalDisplay };
      }
    }
    if (best) matches.push(best);
  }
  return matches.sort((a, b) => b.overlapMonths - a.overlapMonths || a.official.id.localeCompare(b.official.id));
}
