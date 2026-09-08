import type { Unit } from '../types';
import { isIdentityHistory } from '../lib/institutionIdentity';

const labels = { established: '设立', rename: '更名', merge: '合并', split: '拆分', other: '其他调整' };
export function InstitutionHistoryCard({ unit }: { unit: Unit }) {
  const history = [...(unit.history || [])].sort((a, b) => (b.startYear ?? -Infinity) - (a.startYear ?? -Infinity));
  return <section className="mac-card rounded-2xl p-6 bg-white border border-black/[0.08] space-y-4">
    <h3 className="text-lg font-bold">历史沿革</h3>
    <p className="text-xs text-gray-500">当前名称：{unit.name}。历史名称按适用年代保留；仅有来源、连续性已确认的更名用于身份匹配。合并、拆分不自动视为同一机构。</p>
    {!history.length ? <p className="text-sm text-gray-500 border border-dashed rounded-xl p-4">尚未录入有来源的历史沿革，不表示该机构从未更名。当前仅按明确名称匹配。</p> : history.map(entry => <article key={entry.id} className="rounded-xl border p-4 space-y-2">
      <div className="font-semibold">{entry.name} <span className="text-xs text-gray-500">{labels[entry.changeType]}</span></div>
      <p className="text-sm">适用年份：{entry.startYear ?? '待核'}—{entry.endYear ?? '待核'} · {isIdentityHistory(entry) ? '已启用同一实体匹配' : '仅展示沿革，不合并身份'}</p>
      {entry.note && <p className="text-sm text-gray-600">{entry.note}</p>}
      <ul className="text-xs space-y-1">{entry.sources.map(source => <li key={source.id}>{source.url ? <a className="text-blue-600 underline" href={source.url} target="_blank" rel="noreferrer">{source.title}</a> : source.title} · {source.publisher} · 访问 {source.accessedDate}</li>)}</ul>
      {!entry.sources.length && <p className="text-xs text-amber-700">来源待补，不参与身份归并</p>}
    </article>)}
  </section>;
}
