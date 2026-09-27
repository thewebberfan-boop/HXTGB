import type { FieldEvidence, Official } from '../types';
import { evidenceBasisLabels, evidenceFieldLabels, evidenceStatusLabels } from '../lib/recordSemantics';

export function RecordEvidence({ record, official }: { record: { fieldEvidence?: Record<string, FieldEvidence | undefined>; recordKind?: string; isDerived?: boolean }; official: Official }) {
  const fields = Object.entries(record.fieldEvidence || {});
  const observation = 'recordKind' in record && record.recordKind === 'observation';
  return <div className="text-xs space-y-2" data-record-evidence>
    <div className="flex flex-wrap gap-1 text-gray-600">
      {observation && <span className="px-2 py-1 rounded bg-blue-50 text-blue-700">时间点观察 · 不代表连续任期</span>}
      {!fields.length && <span className="px-2 py-1 rounded bg-amber-50 text-amber-800">字段证据待核验</span>}
      {'isDerived' in record && record.isDerived && <span className="px-2 py-1 rounded bg-amber-50">推导记录</span>}
    </div>
    {!!fields.length && <details className="rounded border p-2 bg-white">
      <summary className="cursor-pointer text-blue-700">逐项核验与依据（{fields.length}项）</summary>
      <ul className="mt-2 space-y-3">{fields.map(([field, item]) => item && <li key={field}>
        <p className="font-medium">{evidenceFieldLabels[field] || field}：{evidenceStatusLabels[item.status]} · {evidenceBasisLabels[item.basis]}</p>
        {item.reviewedAt && <p>复核日期：{item.reviewedAt}</p>}
        {item.note && <p>{item.note}</p>}
        {item.sourceIds.map(id => {
          const source = official.sources?.find(s => s.id === id);
          return <p key={id}>{source?.url ? <a href={source.url} target="_blank" rel="noreferrer" className="text-blue-700 underline">{source.title}</a> : source?.title || `来源待补：${id}`}</p>;
        })}
      </li>)}</ul>
    </details>}
  </div>;
}
