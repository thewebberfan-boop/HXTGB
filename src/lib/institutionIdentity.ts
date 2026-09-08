import type { InstitutionIdentity, InstitutionHistoryEntry } from '../types';

const clean = (name: string) => name.replace(/\s+/g, '');
export function isIdentityHistory(entry: InstitutionHistoryEntry) {
  return entry.continuity === 'same_entity' && ['rename', 'established'].includes(entry.changeType)
    && entry.sources.some(source => /^https?:\/\//.test(source.url || ''))
    && Number.isInteger(entry.startYear) && Number.isInteger(entry.endYear)
    && entry.startYear! <= entry.endYear!;
}

/** null means a known historical name has an invalid/unknown period or ambiguous identity. */
export function resolveInstitution(name: string, start: number | undefined, end: number | undefined, identities: InstitutionIdentity[]): string | null {
  const normalized = clean(name);
  const candidates = new Set<string>();
  let knownHistorical = false;
  for (const identity of identities) {
    if (clean(identity.name) === normalized) candidates.add(identity.id);
    for (const entry of identity.history || []) {
      if (clean(entry.name) !== normalized) continue;
      knownHistorical = true;
      if (isIdentityHistory(entry) && start !== undefined && end !== undefined
        && start >= entry.startYear! && end <= entry.endYear! && start <= end) candidates.add(identity.id);
    }
  }
  if (candidates.size > 1) return null;
  if (candidates.size === 1) return `entity:${[...candidates][0]}`;
  return knownHistorical ? null : `name:${normalized}`;
}
