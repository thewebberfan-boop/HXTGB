'use client';

import React, { useState, useMemo } from 'react';
import { ViewMode, Official, Unit } from '../types';
import { getOfficialColor } from '../data/csrcData';
import {
  Building2,
  Users,
  GitCommitVertical,
  PanelLeftClose,
  PanelLeftOpen,
  ArrowDownUp,
  Sparkles,
  Eye,
  Plus,
  Search,
  Check,
  ExternalLink,
  ShieldCheck
} from 'lucide-react';

interface SidebarProps {
  currentView: ViewMode;
  onViewChange: (view: ViewMode) => void;
  selectedOfficialIds: string[];
  onToggleOfficialSelection: (officialId: string) => void;
  onSelectAllOfficials: (ids: string[]) => void;
  onClearOfficials: () => void;
  units: Unit[];
  officials: Official[];
  activeLaneUnitIds: string[];
  onAddLane: (unitId: string) => void;
  onAutoFitLanes: () => void;
  onShowAllUnits: () => void;
  isTimeReversed: boolean;
  onToggleTimeReversed: () => void;
  hoveredOfficialId: string | null;
  onHoverOfficial: (id: string | null) => void;
  isCollapsed: boolean;
  onToggleCollapse: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  currentView,
  onViewChange,
  selectedOfficialIds,
  onToggleOfficialSelection,
  onSelectAllOfficials,
  onClearOfficials,
  units,
  officials,
  activeLaneUnitIds,
  onAddLane,
  onAutoFitLanes,
  onShowAllUnits,
  isTimeReversed,
  onToggleTimeReversed,
  hoveredOfficialId,
  onHoverOfficial,
  isCollapsed,
  onToggleCollapse,
}) => {
  const [isAddLaneOpen, setIsAddLaneOpen] = useState(false);
  const [filterOfficialKeyword, setFilterOfficialKeyword] = useState('');

  // 推荐核心班子
  const handleSelectCoreLeadership = () => {
    onSelectAllOfficials([
      'wu-qing',
      'li-ming',
      'chen-huaping',
      'qiu-yong',
      'cai-jianchun',
      'sha-yan',
      'li-jizun',
      'zhou-guihua',
      'tian-xiangyang',
      'xiong-jun',
      'zhu-lihong',
      'he-qingwen',
      'yu-wenqiang',
      'lu-wenshan',
      'ge-yiping'
    ]);
  };

  // 过滤官员
  const filteredOfficials = useMemo(() => {
    return officials.filter((o) =>
      o.name.toLowerCase().includes(filterOfficialKeyword.toLowerCase()) ||
      o.currentPosition.toLowerCase().includes(filterOfficialKeyword.toLowerCase())
    );
  }, [officials, filterOfficialKeyword]);

  // 收起状态：紧凑窄边栏
  if (isCollapsed) {
    return (
      <aside className="w-14 shrink-0 bg-white/95 backdrop-blur-md border-r border-black/[0.08] shadow-sm flex flex-col items-center justify-between py-3 h-screen sticky top-0 z-40 transition-all duration-200 select-none">
        {/* Top: 展开按钮与红黄绿微点缀 */}
        <div className="flex flex-col items-center gap-3">
          <div className="flex flex-col items-center gap-1">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
          </div>

          <button
            onClick={onToggleCollapse}
            className="p-2 rounded-xl hover:bg-black/[0.05] text-gray-600 hover:text-blue-600 transition-colors mt-1"
            title="展开侧边导航栏"
          >
            <PanelLeftOpen className="w-4 h-4" />
          </button>

          <div className="w-8 h-[1px] bg-black/[0.06] my-1" />

          {/* 3 个视图图标切换 */}
          <nav className="flex flex-col items-center gap-2">
            <button
              onClick={() => onViewChange('units')}
              className={`p-2.5 rounded-xl transition-all relative ${
                currentView === 'units'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'text-gray-500 hover:bg-black/[0.05] hover:text-gray-900'
              }`}
              title="系统单位"
            >
              <Building2 className="w-4 h-4" />
            </button>

            <button
              onClick={() => onViewChange('officials')}
              className={`p-2.5 rounded-xl transition-all relative ${
                currentView === 'officials'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'text-gray-500 hover:bg-black/[0.05] hover:text-gray-900'
              }`}
              title="官员简历"
            >
              <Users className="w-4 h-4" />
            </button>

            <button
              onClick={() => onViewChange('swimlanes')}
              className={`p-2.5 rounded-xl transition-all relative ${
                currentView === 'swimlanes'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'text-gray-500 hover:bg-black/[0.05] hover:text-gray-900'
              }`}
              title="时空泳道"
            >
              <GitCommitVertical className="w-4 h-4" />
              {selectedOfficialIds.length > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-blue-600 text-white text-[9px] flex items-center justify-center font-bold ring-2 ring-white">
                  {selectedOfficialIds.length}
                </span>
              )}
            </button>
          </nav>
        </div>

        {/* 底部竖排文本 */}
        <div
          className="font-medium text-[11px] text-gray-400 tracking-widest cursor-pointer hover:text-blue-600 mb-2"
          style={{ writingMode: 'vertical-rl', textOrientation: 'upright' }}
          onClick={onToggleCollapse}
        >
          展开导航
        </div>
      </aside>
    );
  }

  // 展开状态：完整的 macOS 风格侧边栏
  return (
    <aside className="w-72 sm:w-80 shrink-0 bg-white/95 backdrop-blur-md border-r border-black/[0.08] shadow-sm flex flex-col h-screen sticky top-0 z-40 transition-all duration-200 select-none">
      {/* 顶部标题与窗口按钮 */}
      <div className="p-4 border-b border-black/[0.06] bg-gray-50/60">
        <div className="flex items-center justify-between mb-3">
          {/* macOS 窗口红黄绿三色圆点 */}
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-[#ff5f56] border border-[#e0443e]/40 shadow-2xs" />
            <span className="w-3 h-3 rounded-full bg-[#ffbd2e] border border-[#dea123]/40 shadow-2xs" />
            <span className="w-3 h-3 rounded-full bg-[#27c93f] border border-[#1aab29]/40 shadow-2xs" />
          </div>

          {/* 收起侧边栏按钮 */}
          <button
            onClick={onToggleCollapse}
            className="p-1.5 rounded-lg hover:bg-black/[0.06] text-gray-500 hover:text-gray-900 transition-colors flex items-center gap-1 text-xs"
            title="收起侧边栏，最大化泳道显示空间"
          >
            <PanelLeftClose className="w-4 h-4" />
            <span className="text-[11px]">收起</span>
          </button>
        </div>

        {/* 系统标题 */}
        <div>
          <div className="flex items-center gap-1.5">
            <h1 className="font-bold text-sm sm:text-base text-gray-900 tracking-tight">
              中国证监会系统
            </h1>
            <span className="text-[10px] font-semibold text-blue-600 bg-blue-50 px-1.5 py-0.2 rounded border border-blue-200/60">
              政务图谱
            </span>
          </div>
          <p className="text-[11px] text-gray-500 mt-0.5">
            机构单位编制库 · 官员履历 · 时空演进泳道
          </p>
        </div>
      </div>

      {/* 导航切换项 (3个核心页面) */}
      <div className="p-3 border-b border-black/[0.06] bg-white">
        <div className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider px-2 mb-1.5">
          页面导航
        </div>

        <nav className="space-y-1">
          <button
            onClick={() => onViewChange('units')}
            className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium transition-all ${
              currentView === 'units'
                ? 'bg-blue-600 text-white shadow-xs font-semibold'
                : 'text-gray-700 hover:bg-gray-100/80'
            }`}
          >
            <div className="flex items-center gap-2">
              <Building2 className="w-4 h-4" />
              <span>系统单位档案</span>
            </div>
            <span
              className={`text-[10px] px-1.5 py-0.2 rounded ${
                currentView === 'units'
                  ? 'bg-white/20 text-white'
                  : 'bg-gray-100 text-gray-500'
              }`}
            >
              {units.length} 单位
            </span>
          </button>

          <button
            onClick={() => onViewChange('officials')}
            className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium transition-all ${
              currentView === 'officials'
                ? 'bg-blue-600 text-white shadow-xs font-semibold'
                : 'text-gray-700 hover:bg-gray-100/80'
            }`}
          >
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              <span>官员简历档案</span>
            </div>
            <span
              className={`text-[10px] px-1.5 py-0.2 rounded ${
                currentView === 'officials'
                  ? 'bg-white/20 text-white'
                  : 'bg-gray-100 text-gray-500'
              }`}
            >
              {officials.length} 领导
            </span>
          </button>

          <button
            onClick={() => onViewChange('swimlanes')}
            className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium transition-all ${
              currentView === 'swimlanes'
                ? 'bg-blue-600 text-white shadow-xs font-semibold'
                : 'text-gray-700 hover:bg-gray-100/80'
            }`}
          >
            <div className="flex items-center gap-2">
              <GitCommitVertical className="w-4 h-4" />
              <span>时空演进泳道</span>
            </div>
            <span
              className={`text-[10px] px-1.5 py-0.2 rounded font-bold ${
                currentView === 'swimlanes'
                  ? 'bg-white text-blue-600'
                  : 'bg-blue-100 text-blue-700'
              }`}
            >
              {selectedOfficialIds.length} 选中
            </span>
          </button>
        </nav>
      </div>

      {/* 泳道专属控制与官员多选区（在时空泳道视图时呈现） */}
      {currentView === 'swimlanes' ? (
        <div className="flex-1 overflow-y-auto p-3 space-y-4 text-xs">
          {/* 泳道控制按钮 */}
          <div>
            <div className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider px-1 mb-1.5">
              泳道图表控制 ({activeLaneUnitIds.length} 列)
            </div>

            <div className="grid grid-cols-2 gap-1.5">
              <button
                onClick={onToggleTimeReversed}
                className="flex items-center justify-center gap-1 p-2 bg-gray-50 hover:bg-gray-100 text-gray-700 font-medium rounded-xl border border-black/[0.04] transition-colors text-[11px]"
                title="反转时间流向"
              >
                <ArrowDownUp className="w-3 h-3 text-gray-500" />
                <span>{isTimeReversed ? '近期→早期' : '早期→近期'}</span>
              </button>

              <button
                onClick={onAutoFitLanes}
                className="flex items-center justify-center gap-1 p-2 bg-blue-50 hover:bg-blue-100 text-blue-600 font-medium rounded-xl border border-blue-200/40 transition-colors text-[11px]"
                title="仅显示勾选官员涉及的单位"
              >
                <Sparkles className="w-3 h-3" />
                <span>仅显相关单位</span>
              </button>

              <button
                onClick={onShowAllUnits}
                className="flex items-center justify-center gap-1 p-2 bg-gray-50 hover:bg-gray-100 text-gray-700 font-medium rounded-xl border border-black/[0.04] transition-colors text-[11px]"
                title="平铺全部24个单位"
              >
                <Eye className="w-3 h-3 text-gray-500" />
                <span>全景 (24单位)</span>
              </button>

              {/* 添加单位下拉 */}
              <div className="relative">
                <button
                  onClick={() => setIsAddLaneOpen(!isAddLaneOpen)}
                  className="w-full flex items-center justify-center gap-1 p-2 bg-gray-50 hover:bg-gray-100 text-gray-700 font-medium rounded-xl border border-black/[0.04] transition-colors text-[11px]"
                >
                  <Plus className="w-3 h-3" />
                  <span>添加单位</span>
                </button>

                {isAddLaneOpen && (
                  <div className="absolute left-0 bottom-full mb-1 w-56 bg-white rounded-xl shadow-2xl border border-black/[0.08] p-2 z-50 max-h-60 overflow-y-auto">
                    <div className="text-[10px] font-semibold text-gray-400 px-2 py-1">
                      选择添加至泳道
                    </div>
                    {units
                      .filter((u) => !activeLaneUnitIds.includes(u.id))
                      .map((u) => (
                        <button
                          key={u.id}
                          onClick={() => {
                            onAddLane(u.id);
                            setIsAddLaneOpen(false);
                          }}
                          className="w-full text-left px-2.5 py-1.5 text-xs text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors flex items-center justify-between"
                        >
                          <span className="truncate">{u.tinyName || u.shortName}</span>
                          <span className="text-[10px] text-gray-400 shrink-0 ml-1">
                            {u.level}
                          </span>
                        </button>
                      ))}
                    {units.filter((u) => !activeLaneUnitIds.includes(u.id)).length === 0 && (
                      <div className="text-xs text-gray-400 text-center py-2">
                        全部单位已在泳道中
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* 官员多选对比列表 */}
          <div className="pt-2 border-t border-black/[0.05]">
            <div className="flex items-center justify-between mb-1.5 px-1">
              <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider">
                对比官员名单
              </span>
              <div className="flex items-center gap-1.5 text-[11px]">
                <button
                  onClick={handleSelectCoreLeadership}
                  className="text-blue-600 hover:underline font-medium"
                >
                  核心班子
                </button>
                <span className="text-gray-300">|</span>
                <button
                  onClick={() => onSelectAllOfficials(officials.map((o) => o.id))}
                  className="text-gray-500 hover:text-gray-800"
                >
                  全选
                </button>
                <span className="text-gray-300">|</span>
                <button
                  onClick={onClearOfficials}
                  className="text-gray-400 hover:text-gray-700"
                >
                  清空
                </button>
              </div>
            </div>

            {/* 搜索框 */}
            <div className="relative mb-2">
              <Search className="w-3.5 h-3.5 text-gray-400 absolute left-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="按姓名或职务过滤..."
                value={filterOfficialKeyword}
                onChange={(e) => setFilterOfficialKeyword(e.target.value)}
                className="w-full pl-8 pr-3 py-1.5 bg-black/[0.03] text-xs rounded-xl border border-transparent focus:bg-white focus:border-blue-500/30 outline-none"
              />
            </div>

            {/* 官员选项列表 */}
            <div className="space-y-1 max-h-[calc(100vh-420px)] overflow-y-auto pr-0.5">
              {filteredOfficials.map((official) => {
                const isSelected = selectedOfficialIds.includes(official.id);
                const color = getOfficialColor(official.id);
                const isHovered = hoveredOfficialId === official.id;

                return (
                  <div
                    key={official.id}
                    onClick={() => onToggleOfficialSelection(official.id)}
                    onMouseEnter={() => onHoverOfficial(official.id)}
                    onMouseLeave={() => onHoverOfficial(null)}
                    className={`p-2 rounded-xl cursor-pointer transition-all flex items-center justify-between border ${
                      isSelected
                        ? 'bg-blue-50/40 border-blue-200/80 shadow-2xs'
                        : 'bg-white hover:bg-gray-50 border-black/[0.04]'
                    }`}
                  >
                    <div className="flex items-center gap-2 overflow-hidden">
                      <div
                        className="w-5 h-5 rounded-md flex items-center justify-center text-[10px] font-bold text-white shrink-0 shadow-2xs"
                        style={{ backgroundColor: color.primary }}
                      >
                        {official.name.slice(0, 1)}
                      </div>

                      <div className="truncate">
                        <div className="flex items-center gap-1.5">
                          <span className="font-bold text-gray-900 text-xs truncate">
                            {official.name}
                          </span>
                          <span className="text-[10px] text-gray-500 bg-gray-100 px-1 py-0.2 rounded font-medium">
                            {official.currentRank}
                          </span>
                        </div>
                        <p className="text-[10px] text-gray-400 truncate mt-0.5">
                          {official.currentPosition}
                        </p>
                      </div>
                    </div>

                    <div
                      className={`w-4 h-4 rounded-md border flex items-center justify-center shrink-0 transition-colors ${
                        isSelected
                          ? 'border-transparent text-white'
                          : 'border-gray-300 bg-white'
                      }`}
                      style={{
                        backgroundColor: isSelected ? color.primary : undefined,
                      }}
                    >
                      {isSelected && <Check className="w-3 h-3 text-white" />}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      ) : (
        /* 在单位或官员页面时的侧边辅助说明 */
        <div className="flex-1 p-4 text-xs text-gray-500 space-y-3">
          <div className="bg-gray-50 p-3 rounded-xl border border-black/[0.04] space-y-1.5">
            <span className="font-semibold text-gray-700 block">系统说明</span>
            <p className="text-[11px] leading-relaxed text-gray-600">
              收录中国证监会机关司局、派出机构、会管交易所与事业单位。点击上方可自由切换视图。
            </p>
          </div>
        </div>
      )}

      {/* 底部信息条 */}
      <div className="p-3 border-t border-black/[0.06] bg-gray-50/50 flex items-center justify-between text-[11px] text-gray-400">
        <span className="flex items-center gap-1">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
          证监公开档案
        </span>
        <a
          href="http://www.csrc.gov.cn"
          target="_blank"
          rel="noreferrer"
          className="text-gray-500 hover:text-blue-600 flex items-center gap-0.5"
        >
          <span>官网</span>
          <ExternalLink className="w-2.5 h-2.5" />
        </a>
      </div>
    </aside>
  );
};
