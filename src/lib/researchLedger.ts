import type { ResearchDossier, FactRevision, FactTarget, FactValue, RevisionRef, FactEvaluation, PublicResearchPatch, Citation } from '../types/research';
import { validDate } from './recordSemantics';

export const RESEARCH_FIELDS = {
  basic: ['birthYear', 'birthMonth', 'nativePlace', 'gender', 'currentRank'],
  career: ['unitId', 'unitName', 'department', 'position', 'rank', 'recordKind', 'tenureStatus', 'startYear', 'startMonth', 'startDay', 'endYear', 'endMonth', 'endDay', 'observedAt', 'confirmedAsOf'],
  education: ['school', 'degree', 'degreeStatus', 'educationLevel', 'studyStatus', 'major', 'startYear', 'endYear', 'graduationYear', 'educationMode', 'isInService'],
} as const;
export const targetKey = (target: FactTarget) => `${target.kind}/${target.recordId || ''}/${target.field}`;
export const latest = <T extends RevisionRef>(items: T[], id: string): T | undefined => items.filter(x => x.id === id).sort((a, b) => b.revision - a.revision)[0];
export const currentFacts = (dossier: ResearchDossier) => [...new Set(dossier.facts.map(f => f.id))].map(id => latest(dossier.facts, id)!);
const meaningful = (value: unknown): value is string => typeof value === 'string' && value.trim().length > 0;
export const validReviewDate = (value: unknown) => {
  if (typeof value !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  const [year, month, day] = value.split('-').map(Number);
  return validDate({ year, month, day });
};
const webURL = (url?: string) => { try { return ['http:', 'https:'].includes(new URL(url || '').protocol); } catch { return false; } };
const ranks = ['正部级', '副部级', '正厅局级', '副厅局级', '正处级', '副处级'];

export function validFactValue(target: FactTarget, value: FactValue | undefined): boolean {
  if (!(RESEARCH_FIELDS[target.kind] as readonly string[] | undefined)?.includes(target.field)) return false;
  const field = target.field;
  if (['observedAt', 'confirmedAsOf'].includes(field)) return typeof value === 'object' && value !== null
    && Object.keys(value).every(key => ['year', 'month', 'day'].includes(key)) && validDate(value);
  if (/Year$/.test(field)) return typeof value === 'number' && validDate({ year: value });
  if (/Month$/.test(field)) return typeof value === 'number' && Number.isInteger(value) && value >= 1 && value <= 12;
  if (/Day$/.test(field)) return typeof value === 'number' && Number.isInteger(value) && value >= 1 && value <= 31;
  if (field === 'isInService') return typeof value === 'boolean';
  const enums: Record<string, string[]> = { gender: ['男', '女', '未公开'], rank: ranks, currentRank: ranks,
    recordKind: ['tenure', 'observation'], tenureStatus: ['current', 'historical', 'unknown'], degree: ['学士', '硕士', '博士'],
    degreeStatus: ['awarded', 'pursuing', 'unknown'], studyStatus: ['studying', 'graduated', 'completed', 'unknown'],
    educationLevel: ['专科', '本科', '研究生', '其他'], educationMode: ['全日制', '在职'] };
  if (enums[field]) return typeof value === 'string' && enums[field].includes(value);
  return field === 'unitId' ? typeof value === 'string' : meaningful(value);
}

/** 版本变化即失效，哪怕值没变；重新复核必须追加新版本引用。循环和缺失依赖均拒绝。 */
export function evaluateFact(store: ResearchDossier[], personId: string, ref: RevisionRef, visiting = new Set<string>()): FactEvaluation {
  const dossier = store.find(d => d.personId === personId);
  const fact = dossier && latest(dossier.facts, ref.id);
  const fail = (reason: string): FactEvaluation => ({ state: 'stale', reasons: [reason] });
  if (!dossier || !fact) return fail(`缺少事实 ${personId}/${ref.id}`);
  if (fact.revision !== ref.revision) return fail(`输入事实版本已变化 ${personId}/${ref.id}`);
  const key = `${personId}/${ref.id}`;
  if (visiting.has(key)) return fail(`推理循环 ${key}`);
  if (['candidate', 'conflicted', 'rejected'].includes(fact.status)) return { state: fact.status as 'candidate' | 'conflicted' | 'rejected', reasons: [fact.note || '尚不符合公开条件'] };
  if (!validFactValue(fact.target, fact.value)) return fail('字段值或类型无效');
  if (!fact.review || !validReviewDate(fact.review.at) || ![fact.review.by, fact.review.identity, fact.review.countercheck].every(meaningful)) return fail('缺少复核、身份对应或反向检查记录');
  for (const citation of fact.citations) {
    const evidence = latest(dossier.evidence, citation.id);
    if (!evidence || evidence.revision !== citation.revision || evidence.reading !== 'read' || !webURL(evidence.source.url)
      || !meaningful(citation.locator) || !meaningful(citation.statement)) return fail(`证据不可用或版本变化 ${citation.id}`);
  }
  if (fact.status === 'derived') {
    const inference = fact.inference;
    if (!inference || !inference.inputs.length || !meaningful(inference.rationale)) return fail('推理缺少输入或论证');
    const rule = latest(dossier.rules, inference.rule.id);
    if (!rule || rule.revision !== inference.rule.revision || !rule.enabled) return fail('推理规则已变化或停用');
    const next = new Set(visiting).add(key);
    const reasons = inference.inputs.flatMap(input => {
      const state = evaluateFact(store, input.personId, input.fact, next);
      return state.state === 'eligible' ? [] : [`${input.personId}/${input.fact.id}：${state.reasons.join('；')}`];
    });
    if (reasons.length) return { state: 'stale', reasons };
  } else {
    if (!fact.citations.length) return fail('直接事实缺少已读证据');
    if (fact.inference) return fail('推理结果不得伪装为直接证据');
    if (fact.status === 'supported_observation' && fact.target.kind === 'career'
      && /^(start|end)(Year|Month|Day)$/.test(fact.target.field)) return fail('观察点不能证明任期起止');
  }
  return { state: 'eligible', reasons: [] };
}

/** 结构校验允许保留过期依赖，但拒绝悬空引用、重复编号和无效数据。 */
export function validateResearchStore(store: ResearchDossier[]): string[] {
  const errors: string[] = [];
  const seenPeople = new Set<string>();
  for (const dossier of store) {
    const error = (message: string) => errors.push(`${dossier.personId}: ${message}`);
    if (!/^[a-z0-9][a-z0-9-]*$/.test(dossier.personId) || seenPeople.has(dossier.personId)) error('人物ID无效或重复');
    seenPeople.add(dossier.personId);
    if (dossier.schemaVersion !== 1) error('研究库版本不支持');
    for (const items of [dossier.evidence, dossier.facts, dossier.rules]) {
      for (const id of new Set(items.map(item => item.id))) {
        if (!meaningful(id)) error('空ID');
        const revisions = items.filter(item => item.id === id).map(item => item.revision).sort((a, b) => a - b);
        if (revisions.some((v, i) => v !== i + 1)) error(`${id}版本必须从1连续追加且不重复`);
      }
    }
    const hasRef = (items: RevisionRef[], ref: RevisionRef) => items.some(item => item.id === ref.id && item.revision === ref.revision);
    for (const evidence of dossier.evidence) {
      if (!['unread', 'read', 'blocked', 'wrong_person', 'withdrawn'].includes(evidence.reading)) error(`${evidence.id}阅读状态无效`);
      if (![evidence.source.id, evidence.source.title, evidence.source.publisher, evidence.originGroup].every(meaningful)
        || !validReviewDate(evidence.source.accessedDate)) error(`${evidence.id}来源元数据不完整`);
      if (evidence.source.url && !webURL(evidence.source.url)) error(`${evidence.id}来源URL无效`);
      if (evidence.reading === 'read' && !webURL(evidence.source.url)) error(`${evidence.id}已读来源需可定位URL`);
    }
    for (const rule of dossier.rules) if (typeof rule.enabled !== 'boolean' || !meaningful(rule.description) || !meaningful(rule.allowedWording)
      || !rule.assumptions.length || !rule.invalidWhen.length || ![...rule.assumptions, ...rule.invalidWhen].every(meaningful)) error(`${rule.id}推理规则缺少边界`);
    const targets = new Map<string, string>();
    for (const fact of dossier.facts) {
      if (!['candidate', 'supported_direct', 'supported_observation', 'derived', 'conflicted', 'rejected'].includes(fact.status)) error(`${fact.id}事实状态无效`);
      if (!(RESEARCH_FIELDS[fact.target.kind] as readonly string[] | undefined)?.includes(fact.target.field)
        || Object.keys(fact.target).some(key => !['kind', 'field', 'recordId'].includes(key))
        || (fact.target.kind === 'basic' ? fact.target.recordId !== undefined : !meaningful(fact.target.recordId))) error(`${fact.id}目标字段无效`);
      if (targetKey(latest(dossier.facts, fact.id)!.target) !== targetKey(fact.target)) error(`${fact.id}不得改变事实目标`);
      const key = targetKey(fact.target);
      if (targets.has(key) && targets.get(key) !== fact.id) error(`${fact.id}同一字段必须使用同一事实ID追加版本`);
      targets.set(key, fact.id);
      if (fact.value !== undefined && !validFactValue(fact.target, fact.value)) error(`${fact.id}字段值无效`);
      if (fact.status === 'conflicted' && (!fact.alternatives || fact.alternatives.length < 2)) error(`${fact.id}冲突必须保留至少两个版本`);
      for (const alternative of fact.alternatives || []) if (!validFactValue(fact.target, alternative.value) || !alternative.citations.length || !meaningful(alternative.note)) error(`${fact.id}冲突版本缺少值、依据或说明`);
      const citations = [...fact.citations, ...(fact.alternatives || []).flatMap(a => a.citations)];
      for (const citation of citations) if (!hasRef(dossier.evidence, citation) || !meaningful(citation.locator) || !meaningful(citation.statement)) error(`${fact.id}证据引用无效 ${citation.id}`);
      if (fact.inference) {
        if (!hasRef(dossier.rules, fact.inference.rule)) error(`${fact.id}规则引用不存在`);
        for (const input of fact.inference.inputs) if (!hasRef(store.find(d => d.personId === input.personId)?.facts || [], input.fact)) error(`${fact.id}输入引用不存在`);
      }
    }
    const events = new Set<string>();
    for (const event of dossier.publications) {
      if (events.has(event.id) || !meaningful(event.id) || !dossier.facts.some(f => f.id === event.factId)
        || !['publish', 'withdraw'].includes(event.action) || !validReviewDate(event.at) || !meaningful(event.reason)) error('发布事件编号、目标、日期或理由无效');
      events.add(event.id);
    }
  }
  return errors;
}

/** 导入只允许数组尾部追加；历史事实、证据、规则和发布事件不可原地重写。 */
export function assertAppendOnly(previous: ResearchDossier, next: ResearchDossier): void {
  if (previous.personId !== next.personId || previous.schemaVersion !== next.schemaVersion) throw Error('不能替换人物或库版本');
  for (const key of ['facts', 'evidence', 'rules', 'publications'] as const) {
    if (next[key].length < previous[key].length || previous[key].some((item, i) => JSON.stringify(item) !== JSON.stringify(next[key][i]))) throw Error(`${key}只能追加，不能改写或删除历史`);
  }
}

function factCitations(store: ResearchDossier[], dossier: ResearchDossier, fact: FactRevision, seen = new Set<string>()): { dossier: ResearchDossier; citation: Citation }[] {
  const key = `${dossier.personId}/${fact.id}`;
  if (seen.has(key)) return [];
  const next = new Set(seen).add(key);
  return [...fact.citations.map(citation => ({ dossier, citation })), ...(fact.inference?.inputs || []).flatMap(input => {
    const other = store.find(d => d.personId === input.personId)!;
    return factCitations(store, other, latest(other.facts, input.fact.id)!, next);
  })];
}

export function compileResearchPatches(store: ResearchDossier[]): PublicResearchPatch[] {
  const errors = validateResearchStore(store);
  if (errors.length) throw Error(errors.join('\n'));
  return store.flatMap(dossier => currentFacts(dossier).flatMap(fact => {
    const event = [...dossier.publications].reverse().find(e => e.factId === fact.id);
    if (!event) return []; // 候选库与网站发布完全分离
    const state = evaluateFact(store, dossier.personId, fact);
    const eligible = event.action === 'publish' && state.state === 'eligible';
    const sources = eligible ? factCitations(store, dossier, fact).map(({ dossier: owner, citation }) => {
      const source = latest(owner.evidence, citation.id)!.source;
      return { id: `research:${owner.personId}:${citation.id}:v${citation.revision}`, title: source.title, publisher: source.publisher,
        url: source.url, sourceType: source.sourceType, accessedDate: source.accessedDate,
        ...(source.publishedDate ? { publishedDate: source.publishedDate } : {}),
        supports: [`${fact.target.recordId || dossier.personId}/${fact.target.field}`], note: `${citation.locator}；${citation.statement}` };
    }) : [];
    const unique = [...new Map(sources.map(s => [s.id, s])).values()];
    return [{ personId: dossier.personId, factId: fact.id, revision: fact.revision, target: fact.target,
      ...(eligible ? { value: fact.value } : {}), sources: unique,
      evidence: { status: eligible ? 'verified' as const : state.state === 'conflicted' ? 'conflicted' as const : state.state === 'rejected' ? 'rejected' as const : 'needs_review' as const,
        basis: fact.status === 'derived' ? 'derived' as const : fact.status === 'supported_observation' ? 'observation' as const : 'direct' as const,
        sourceIds: unique.map(s => s.id), ...(eligible ? { reviewedAt: fact.review!.at } : {}),
        note: eligible ? fact.status === 'derived' ? `受约束推导：${latest(dossier.rules, fact.inference!.rule.id)!.allowedWording}` : '已按研究库逐字段复核'
          : '该字段已撤下或依据已变化，等待重新核验；不回退旧值。' },
    }];
  }));
}
