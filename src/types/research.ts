import type { FieldEvidence, InformationSource } from './index';

export type FactStatus = 'candidate' | 'supported_direct' | 'supported_observation' | 'derived' | 'conflicted' | 'rejected';
export type FactValue = string | number | boolean | { year: number; month?: number; day?: number };
export interface RevisionRef { id: string; revision: number }
export interface Citation extends RevisionRef { locator: string; statement: string }
export interface FactTarget {
  kind: 'basic' | 'career' | 'education';
  recordId?: string;
  field: string;
}
export interface Review {
  at: string;
  by: string;
  identity: string;
  countercheck: string;
}
export interface EvidenceRevision {
  id: string;
  revision: number;
  source: InformationSource;
  reading: 'unread' | 'read' | 'blocked' | 'wrong_person' | 'withdrawn';
  originalPublisher?: string;
  originGroup: string; // 同源转载共用此编号；不是独立证据计数
  note: string;
}
export interface RuleRevision {
  id: string;
  revision: number;
  description: string;
  assumptions: string[];
  invalidWhen: string[];
  allowedWording: string;
  enabled: boolean;
}
export interface FactRevision {
  id: string;
  revision: number;
  target: FactTarget;
  value?: FactValue;
  status: FactStatus;
  citations: Citation[];
  review?: Review;
  note: string;
  alternatives?: { value: FactValue; citations: Citation[]; note: string }[];
  inference?: {
    rule: RevisionRef;
    inputs: { personId: string; fact: RevisionRef }[];
    rationale: string;
  };
}
export interface PublicationEvent {
  id: string;
  factId: string;
  action: 'publish' | 'withdraw';
  at: string;
  reason: string;
}
export interface ResearchDossier {
  schemaVersion: 1;
  personId: string;
  evidence: EvidenceRevision[];
  facts: FactRevision[];
  rules: RuleRevision[];
  publications: PublicationEvent[];
}
export interface FactEvaluation {
  state: 'eligible' | 'candidate' | 'conflicted' | 'rejected' | 'stale';
  reasons: string[];
}
/** 仅包含可公开值或撤下指令；候选值、冲突双方与底稿不进入客户端。 */
export interface PublicResearchPatch {
  personId: string;
  factId: string;
  revision: number;
  target: FactTarget;
  value?: FactValue;
  evidence: FieldEvidence;
  sources: InformationSource[];
}
