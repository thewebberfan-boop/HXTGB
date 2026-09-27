// 稳定读取入口：研究候选库不被客户端导入。
import { OFFICIALS_DATA as LEGACY_OFFICIALS, isOfficialPastInUnit as legacyPast, isOfficialUnresolvedInUnit as legacyUnresolved } from './legacyData';
import type { Official } from '../types';
import { careerStatus } from '../lib/recordSemantics';
import { PUBLIC_RESEARCH_PATCHES } from './generatedResearch';
import { applyResearchPatches } from '../lib/researchProjection';
export * from './legacyData';
export const OFFICIALS_DATA = applyResearchPatches(LEGACY_OFFICIALS, PUBLIC_RESEARCH_PATCHES);
export function isOfficialPastInUnit(official: Official, unitId: string): boolean {
  if (official.researchCurrentStatusPending && official.currentUnitId === unitId) {
    return official.careerHistory.some(r => r.unitId === unitId && careerStatus(r) === 'historical');
  }
  return legacyPast(official, unitId);
}
export function isOfficialUnresolvedInUnit(official: Official, unitId: string): boolean {
  if (official.researchCurrentStatusPending && official.currentUnitId === unitId) return !isOfficialPastInUnit(official, unitId);
  return legacyUnresolved(official, unitId);
}
