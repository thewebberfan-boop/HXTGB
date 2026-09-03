import { Globe, Terminal, ExternalLink, Zap, Shield, Sparkles } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between selection:bg-indigo-500 selection:text-white">
      {/* Background Glow */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -right-40 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl" />
      </div>

      {/* Navigation */}
      <header className="border-b border-slate-800/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center shadow-lg shadow-indigo-500/20">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
              HXTGB
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/thewebberfan-boop/HXTGB"
              target="_blank"
              rel="noreferrer"
              className="text-xs sm:text-sm text-slate-400 hover:text-white transition-colors flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-800 hover:border-slate-700 bg-slate-900/50"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              GitHub
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-5xl mx-auto px-6 py-20 flex-1 flex flex-col justify-center">
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 text-xs font-medium">
            <Zap className="w-3.5 h-3.5" />
            Next.js 15 & Vercel Ready
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
            欢迎来到{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
              HXTGB
            </span>
          </h1>

          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            项目已成功初始化！支持本地服务极速预览以及推送到 GitHub 自动触发 Vercel 自动化部署。
          </p>

          {/* Quick Access Status Cards */}
          <div className="pt-8 grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
            {/* Local Server Card */}
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all shadow-xl">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400">
                  <Terminal className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-lg text-white">本地开发模式</h3>
              </div>
              <p className="text-sm text-slate-400 mb-4">
                服务器运行在指定端口 <code className="px-1.5 py-0.5 rounded bg-slate-800 text-indigo-300 font-mono text-xs">4000</code>：
              </p>
              <div className="p-3 rounded-lg bg-slate-950 font-mono text-xs text-slate-300 border border-slate-800/80">
                http://localhost:4000/
              </div>
            </div>

            {/* Cloud Vercel Card */}
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all shadow-xl">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400">
                  <Globe className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-lg text-white">Vercel 云端部署</h3>
              </div>
              <p className="text-sm text-slate-400 mb-4">
                推送 <code className="px-1.5 py-0.5 rounded bg-slate-800 text-purple-300 font-mono text-xs">main</code> 分支后自动同步部署至：
              </p>
              <a
                href="https://hxtgb.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-lg bg-slate-950 font-mono text-xs text-purple-300 border border-slate-800/80 flex items-center justify-between hover:border-purple-500/40 transition-colors group"
              >
                <span>https://hxtgb.vercel.app/</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-purple-400 transition-colors" />
              </a>
            </div>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 pt-12 border-t border-slate-800/60">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-white font-medium">
              <Zap className="w-4 h-4 text-indigo-400" />
              快速热重载
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              基于 Next.js App Router 与 React 19，代码修改秒级热更新。
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-white font-medium">
              <Shield className="w-4 h-4 text-purple-400" />
              类型安全
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              全面集成 TypeScript 严谨类型检查，保障项目代码质量。
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-white font-medium">
              <Sparkles className="w-4 h-4 text-pink-400" />
              Tailwind 样式
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              内置 Tailwind CSS 响应式原子化样式表，自由打造现代 Web UI。
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800/80 py-6 text-center text-xs text-slate-500">
        <p>© {new Date().getFullYear()} HXTGB Project. Powered by Next.js & Vercel.</p>
      </footer>
    </div>
  );
}
