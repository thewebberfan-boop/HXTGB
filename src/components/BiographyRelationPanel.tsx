import type { Official, Unit, InformationSource } from '../types';
import { careerRelations, educationRelations, type RelationRecord, type RelationKind } from '../lib/relationGroups';
import { SCHOOL_IDENTITIES } from '../data/schoolIdentities';
import { PositionRankBadge } from './PositionRankBadge';

const groups: { kind: RelationKind; label: string }[] = [
  { kind: 'confirmed', label: '明确重叠 · 按现有履历计算' },
  { kind: 'possible', label: '可能重叠 · 边界待核' },
  { kind: 'school_other_time', label: '同校校友 · 不同时期' },
  { kind: 'school_unknown_time', label: '同校校友 · 是否同期待核' },
  { kind: 'sequential', label: '同机构先后任职 · 非同期同事' },
];
function recordTitle(record: RelationRecord) {
  return record.type === 'career' ? `${record.value.unitName} · ${record.value.department || ''} · ${record.value.position}`
    : `${record.value.school} · ${record.value.degree} · ${record.value.major || '专业未明'}`;
}
function recordDates(record: RelationRecord) {
  if (record.type === 'education') return `${record.value.startYear ?? '入学年待核'}—${record.value.endYear ?? record.value.graduationYear ?? '结束年待核'}${record.value.isDerivedSpan ? '（原记录为推算，不用于确定同期）' : ''}`;
  const r = record.value;
  return `${r.startYear ?? '待核'}${r.startMonth ? `.${r.startMonth}` : ''}—${r.endYear === null ? r.isCurrent === false ? '结束时间待核' : '至今' : r.endYear}${r.endYear !== null && r.endMonth ? `.${r.endMonth}` : ''}`;
}
export function relationSources(person: Official, record: RelationRecord): { bound: InformationSource[]; unbound: InformationSource[] } {
  const ids = record.value.sourceIds || [];
  const bound = (person.sources || []).filter(source => ids.includes(source.id)
    || Boolean(record.value.id && source.supports.includes(record.value.id)));
  return { bound, unbound: (person.sources || []).filter(source => !bound.includes(source)) };
}
function Evidence({ person, record }: { person: Official; record: RelationRecord }) {
  const sources = relationSources(person, record);
  const links = (items: InformationSource[]) => items.map(source => <li key={source.id} className="break-words">
    {source.url ? <a href={source.url} target="_blank" rel="noreferrer" className="text-blue-700 underline">{source.title}</a> : source.title}
    <span className="text-gray-500"> · {source.publisher} · 访问 {source.accessedDate}</span>
  </li>);
  return <section className="min-w-0 space-y-2 border rounded-lg p-3 bg-white">
    <h5 className="font-semibold">{person.name}</h5>
    <p>{recordTitle(record)}</p><p className="text-gray-500">{recordDates(record)}</p>
    {record.type === 'career' && <p>当时职级：{record.value.rank || '未公开，不以现职级代替'}</p>}
    <p className="font-medium">本段绑定来源</p>
    {sources.bound.length ? <ul className="space-y-1">{links(sources.bound)}</ul> : <p className="text-amber-700">尚未完成本段来源绑定；计算结果不等于事实已核验。</p>}
    {record.value.confidence?.source && <p>原记录文字依据：{record.value.confidence.source}</p>}
    {record.type === 'career' && record.value.sourceNote && <p>{record.value.sourceNote}</p>}
    {!!sources.unbound.length && <details><summary className="cursor-pointer text-gray-600">其他档案来源（{sources.unbound.length}，不自动为本段背书）</summary><ul className="mt-2 space-y-1">{links(sources.unbound)}</ul></details>}
  </section>;
}
export function BiographyRelationPanel({ target, record, officials, units, onSelect }: {
  target: Official; record: RelationRecord; officials: Official[]; units: Unit[]; onSelect: (person: Official) => void;
}) {
  const relations = record.type === 'career' ? careerRelations(target, record.value, officials, units)
    : educationRelations(target, record.value, officials, SCHOOL_IDENTITIES);
  const contemporaries = relations.filter(relation => relation.kind === 'confirmed' || relation.kind === 'possible');
  return <div className="lg:col-span-8 min-w-0 space-y-3">
    <h4 className="text-sm font-bold">{record.type === 'career' ? '同事与先后任职关联' : '同窗与校友关联'} <span className="text-blue-600">{contemporaries.length} 人有同期交集</span></h4>
    <p className="text-xs text-gray-500">仅匹配左侧本段经历，不汇入其他履历段的关联。关系随履历动态计算，不证明相识；“明确”仅指日期交集，原始事实仍需核验。</p>
    {!relations.length && <p className="text-xs border border-dashed rounded-lg p-4 text-gray-500">信息不足或暂无匹配，不代表现实不存在关联。</p>}
    {groups.map(group => {
      const items = relations.filter(relation => relation.kind === group.kind);
      if (!items.length) return null;
      return <details key={group.kind} open={group.kind !== 'sequential'} className="rounded-xl border border-black/[0.08] bg-white p-3">
        <summary className="cursor-pointer text-xs font-semibold">{group.label} · {items.length} 人</summary>
        <div className="mt-3 space-y-3">{items.map(relation => <article key={relation.official.id} className="p-3 rounded-xl bg-gray-50 border border-black/[0.05] space-y-2">
          <div className="flex items-start justify-between flex-wrap gap-2">
            <button className="font-semibold text-blue-700 text-sm hover:underline" onClick={() => onSelect(relation.official)}>{relation.official.name} · 查看档案 →</button>
            {relation.other.type === 'career' && <span className="text-xs flex items-center gap-1">当时职级：{relation.other.value.rank ? <PositionRankBadge rank={relation.other.value.rank} /> : '待核'}</span>}
          </div>
          <p className="text-xs font-medium break-words">{recordTitle(relation.other)}</p>
          <p className="text-xs text-gray-500">该段经历：{recordDates(relation.other)}</p>
          <p className="text-xs text-blue-700">{relation.period}</p>
          <p className="text-xs text-gray-500">{relation.explanation}</p>
          <details><summary className="cursor-pointer text-xs text-blue-700">核对双方履历与来源</summary>
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-2 mt-2 text-xs">
              <Evidence person={target} record={relation.target} /><Evidence person={relation.official} record={relation.other} />
            </div>
          </details>
        </article>)}</div>
      </details>;
    })}
  </div>;
}
