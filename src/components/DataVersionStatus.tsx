'use client';
import { useEffect, useState } from 'react';
import { PUBLIC_DATA_VERSION } from '../data/generatedResearchVersion';

export function versionMessage(pageVersion: string, response: { state?: string; runningVersion?: string; currentVersion?: string } | null) {
  if (!response) return '正在核对';
  if (response.state === 'ok' && response.runningVersion === pageVersion && response.currentVersion === pageVersion) return '与当前文件一致';
  if (response.state === 'stale' || (response.state === 'ok' && response.runningVersion !== pageVersion)) return '页面已过期：请重新构建／重启服务后刷新';
  return '无法确认一致性：请检查研究事务及构建状态';
}
export function DataVersionStatus() {
  const [message, setMessage] = useState('正在核对');
  useEffect(() => {
    let active = true, inFlight = false;
    let controller: AbortController | undefined;
    const check = async () => {
      if (inFlight || document.hidden) return;
      inFlight = true;
      controller = new AbortController();
      const timeout = setTimeout(() => controller?.abort(), 10000);
      try {
        const response = await fetch('/api/research-version', { cache: 'no-store', signal: controller.signal });
        if (!response.ok) throw Error('unavailable');
        const data = await response.json();
        if (active) setMessage(versionMessage(PUBLIC_DATA_VERSION, data || {}));
      } catch { if (active) setMessage('无法确认一致性：版本检查不可用'); }
      finally { clearTimeout(timeout); inFlight = false; }
    };
    void check();
    const timer = setInterval(check, 60000);
    window.addEventListener('focus', check);
    document.addEventListener('visibilitychange', check);
    return () => { active = false; controller?.abort(); clearInterval(timer); window.removeEventListener('focus', check); document.removeEventListener('visibilitychange', check); };
  }, []);
  const ok = message === '与当前文件一致';
  return <div role="status" className={`shrink-0 px-4 py-1 text-[11px] border-b ${ok ? 'bg-slate-50 text-slate-600' : 'bg-amber-50 text-amber-900'}`}>
    <span title={PUBLIC_DATA_VERSION}>数据版本 {PUBLIC_DATA_VERSION.slice(0, 12)}</span> · {message}
    <span className="ml-2">（版本一致不代表事实已核验）</span>
  </div>;
}
