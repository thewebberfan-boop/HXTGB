import type { Official, InstitutionIdentity } from '../types';
import type { ResearchDossier } from '../types/research';
import { currentFacts, evaluateFact } from './researchLedger';
import { careerRelations, educationRelations } from './relationGroups';

const same = (a: unknown, b: unknown) => JSON.stringify(a) === JSON.stringify(b);
export function previewPublicChanges(before: Official[], after: Official[], previous: ResearchDossier[], next: ResearchDossier[], identities: InstitutionIdentity[] = [], schools: InstitutionIdentity[] = []) {
  const fieldChanges: { personId: string; name: string; path: string; before: unknown; after: unknown }[] = [];
  const removedRecords: { personId: string; name: string; kind: string; recordId: string; reason: string[] }[] = [];
  const changedPeople = new Set<string>();
  for (const person of after) {
    const old = before.find(p => p.id === person.id);
    if (!old || same(old, person)) continue;
    changedPeople.add(person.id);
    const compare = (prefix: string, a: object, b: object) => {
      for (const field of new Set([...Object.keys(a), ...Object.keys(b)])) {
        const left = (a as Record<string, unknown>)[field], right = (b as Record<string, unknown>)[field];
        if (!same(left, right)) fieldChanges.push({ personId: person.id, name: person.name, path: `${prefix}${field}`, before: left ?? null, after: right ?? null });
      }
    };
    const { careerHistory: oldCareer, education: oldEducation, ...oldBasic } = old;
    const { careerHistory, education, ...basic } = person;
    compare('', oldBasic, basic);
    for (const [kind, a, b] of [['career', oldCareer, careerHistory], ['education', oldEducation, education]] as const) {
      const oldMap = new Map(a.map((record, index) => [record.id || `legacy-index-${index}`, record]));
      const newMap = new Map(b.map((record, index) => [record.id || `legacy-index-${index}`, record]));
      for (const id of new Set([...oldMap.keys(), ...newMap.keys()])) {
        compare(`${kind}/${id}/`, oldMap.get(id) || {}, newMap.get(id) || {});
        if (oldMap.has(id) && !newMap.has(id)) removedRecords.push({ personId: person.id, name: person.name, kind, recordId: id, reason: person.researchNotices || [] });
      }
    }
  }
  const inferenceChanges: { personId: string; factId: string; before: unknown; after: unknown }[] = [];
  const stateMap = (store: ResearchDossier[]) => new Map(store.flatMap(d => currentFacts(d).map(f => [`${d.personId}/${f.id}`, { personId: d.personId, factId: f.id, derived: !!f.inference, ...evaluateFact(store, d.personId, f) }] as const)));
  const beforeStates = stateMap(previous), afterStates = stateMap(next);
  for (const [id, state] of afterStates) {
    const old = beforeStates.get(id);
    if (state.derived && !same(old, state)) inferenceChanges.push({ personId: state.personId, factId: state.factId, before: old || null, after: state });
  }
  // 对受影响人物及其反向关联均比较，不能只报告导入人物自身。
  const relations = (people: Official[]) => new Map(people.flatMap(p => {
    const career = p.careerHistory.flatMap(r => careerRelations(p, r, people, identities).map(match => ({ key: `${p.id}/career/${r.id}/${match.official.id}`, targetPersonId: p.id, recordId: r.id, otherPersonId: match.official.id, kind: match.kind, period: match.period, evidenceStatus: match.evidenceStatus })));
    const education = p.education.flatMap((r, i) => educationRelations(p, r, people, schools).map(match => ({ key: `${p.id}/education/${r.id || i}/${match.official.id}`, targetPersonId: p.id, recordId: r.id || `${i}`, otherPersonId: match.official.id, kind: match.kind, period: match.period, evidenceStatus: match.evidenceStatus })));
    return [...career, ...education].filter(r => changedPeople.has(r.targetPersonId) || changedPeople.has(r.otherPersonId)).map(r => [r.key, r] as const);
  }));
  const beforeRelations = changedPeople.size ? relations(before) : new Map();
  const afterRelations = changedPeople.size ? relations(after) : new Map();
  const relationChanges = [...new Set([...beforeRelations.keys(), ...afterRelations.keys()])].flatMap(key => {
    const a = beforeRelations.get(key), b = afterRelations.get(key);
    return same(a, b) ? [] : [{ action: !a ? 'added' : !b ? 'removed' : 'changed', before: a || null, after: b || null }];
  });
  return { changedPeople: [...changedPeople], fieldChanges, removedRecords, inferenceChanges, relationChanges,
    warning: removedRecords.length ? '注意：字段修改导致整段经历暂不展示，请核对下列影响。' : undefined };
}
