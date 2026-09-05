'use client';

import React, { useState, useMemo } from 'react';
import { ViewMode, Official, Unit } from '../types';
import { getOfficialColor, isOfficialActiveInUnit, isOfficialPastInUnit } from '../data/csrcData';
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
  ShieldCheck,
  ChevronDown,
  ChevronRight,
  Layers,
  Building,
  X
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
  selectedUnitIdForOfficials?: string | null;
  onSelectUnitForOfficials?: (unitId: string | null) => void;
  selectedUnitIdForUnits?: string | null;
  onSelectUnitForUnits?: (unitId: string | null) => void;
}

export interface OrgSubCategory {
  id: string;
  title: string;
  icon: string;
  unitIds: string[];
}

export interface OrgTopCategory {
  id: string;
  title: string;
  icon: string;
  badge?: string;
  subCategories: OrgSubCategory[];
}

export const TOP_ORG_CATEGORIES: OrgTopCategory[] = [
  {
    id: 'top-csrc',
    title: '证监会系统',
    icon: '🏛️',
    badge: '监管核心',
    subCategories: [
      {
        id: 'cat-csrc-main',
        title: '证监会机关部门 / 司局',
        icon: '🏛️',
        unitIds: [
          'csrc-main',
          'csrc-bgt',
          'csrc-fx',
          'csrc-ss',
          'csrc-jg',
          'csrc-sc1',
          'csrc-sc2',
          'csrc-qh',
          'csrc-jc',
          'csrc-fl',
          'csrc-gj',
          'csrc-kj',
        ],
      },
      {
        id: 'cat-sec',
        title: '证券交易所',
        icon: '📈',
        unitIds: ['csrc-sse', 'csrc-szse', 'csrc-bse'],
      },
      {
        id: 'cat-fut',
        title: '期货交易所',
        icon: '🌾',
        unitIds: ['csrc-shfe', 'csrc-czce', 'csrc-dce', 'csrc-cffex', 'csrc-gfex'],
      },
      {
        id: 'cat-infra',
        title: '会管企事业单位 / 行业协会',
        icon: '🏢',
        unitIds: [
          'csrc-csdc',
          'csrc-csf',
          'csrc-csdata',
          'csrc-sipf',
          'csrc-cfmmc',
          'csrc-cfr',
          'csrc-isc',
          'csrc-amac',
          'csrc-sac',
        ],
      },
      {
        id: 'cat-bureau',
        title: '地方证监局派出机构',
        icon: '🌐',
        unitIds: [
          'csrc-df',
          'csrc-bj',
          'csrc-sh',
          'csrc-gd',
          'csrc-sz',
          'csrc-js',
          'csrc-zj',
          'csrc-sc',
          'csrc-yn',
          'csrc-fj',
          'csrc-ah',
        ],
      },
    ],
  },
  {
    id: 'top-other',
    title: '其他系统与部委机关',
    icon: '🌐',
    badge: '跨界关联',
    subCategories: [
      {
        id: 'cat-gov-local',
        title: '各级地方人民政府',
        icon: '🏙️',
        unitIds: ['gov-local'],
      },
      {
        id: 'cat-pbc-cbirc',
        title: '央行系与金融监管总局',
        icon: '🏦',
        unitIds: ['pbc', 'cbirc'],
      },
      {
        id: 'cat-sasac-cic',
        title: '国资委与大型国有金融机构',
        icon: '🏭',
        unitIds: ['sasac-cic'],
      },
    ],
  },
];

export const ORG_CATEGORIES = TOP_ORG_CATEGORIES.flatMap((top) => top.subCategories);

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
  selectedUnitIdForOfficials = null,
  onSelectUnitForOfficials,
  selectedUnitIdForUnits = null,
  onSelectUnitForUnits,
}) => {
  const [isAddLaneOpen, setIsAddLaneOpen] = useState(false);
  const [filterOfficialKeyword, setFilterOfficialKeyword] = useState('');
  const [filterOrgKeyword, setFilterOrgKeyword] = useState('');
  const [collapsedOrgCats, setCollapsedOrgCats] = useState<Record<string, boolean>>({});

  const toggleOrgCat = (catId: string) => {
    setCollapsedOrgCats((prev) => ({ ...prev, [catId]: !prev[catId] }));
  };

  // 统计每个机构的关联干部人数（严格区分：在职与曾任）
  const unitStatsMap = useMemo(() => {
    const map = new Map<string, { current: number; past: number; total: number }>();
    units.forEach((u) => map.set(u.id, { current: 0, past: 0, total: 0 }));

    officials.forEach((o) => {
      units.forEach((u) => {
        if (isOfficialActiveInUnit(o, u.id)) {
          map.get(u.id)!.current += 1;
        } else if (isOfficialPastInUnit(o, u.id)) {
          map.get(u.id)!.past += 1;
        }
      });
    });

    units.forEach((u) => {
      const entry = map.get(u.id);
      if (entry) entry.total = entry.current + entry.past;
    });

    return map;
  }, [units, officials]);

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

          {/* 3 个视图图标切换 (泳道 · 机构 · 官员) */}
          <nav className="flex flex-col items-center gap-2">
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
      {/* 顶部标题与整合导航栏（合并“泳道” “机构” “官员”三按钮） */}
      <div className="p-3.5 border-b border-black/[0.06] bg-gray-50/70">
        <div className="flex items-center justify-between mb-2">
          {/* macOS 窗口红黄绿三色圆点 + 网站名称 */}
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56] border border-[#e0443e]/40 shadow-2xs" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e] border border-[#dea123]/40 shadow-2xs" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f] border border-[#1aab29]/40 shadow-2xs" />
            </div>
            <h1 className="font-bold text-xs sm:text-sm text-gray-900 tracking-tight ml-0.5">
              中国证监会系统 · 政务图谱
            </h1>
          </div>

          {/* 收起侧边栏按钮 */}
          <button
            onClick={onToggleCollapse}
            className="p-1 rounded-md hover:bg-black/[0.06] text-gray-500 hover:text-gray-900 transition-colors flex items-center gap-1 text-xs"
            title="收起侧边栏，最大化泳道显示空间"
          >
            <PanelLeftClose className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* 核心需求三：精简合并为“泳道” “机构” “官员”三个紧凑按钮 */}
        <div className="p-0.5 bg-black/[0.06] rounded-xl flex items-center gap-0.5 border border-black/[0.03]">
          <button
            onClick={() => onViewChange('swimlanes')}
            className={`flex-1 py-1.5 text-xs font-semibold rounded-lg flex items-center justify-center gap-1 transition-all ${
              currentView === 'swimlanes'
                ? 'bg-white text-blue-600 shadow-xs'
                : 'text-gray-600 hover:text-gray-900 hover:bg-white/40'
            }`}
            title="时空演进泳道图谱"
          >
            <GitCommitVertical className="w-3.5 h-3.5 shrink-0" />
            <span>泳道</span>
            {selectedOfficialIds.length > 0 && (
              <span
                className={`text-[9px] px-1 py-0.2 rounded-full font-bold leading-none ${
                  currentView === 'swimlanes'
                    ? 'bg-blue-100 text-blue-700'
                    : 'bg-black/[0.08] text-gray-600'
                }`}
              >
                {selectedOfficialIds.length}
              </span>
            )}
          </button>

          <button
            onClick={() => onViewChange('units')}
            className={`flex-1 py-1.5 text-xs font-semibold rounded-lg flex items-center justify-center gap-1 transition-all ${
              currentView === 'units'
                ? 'bg-white text-blue-600 shadow-xs'
                : 'text-gray-600 hover:text-gray-900 hover:bg-white/40'
            }`}
            title="系统单位编制档案"
          >
            <Building2 className="w-3.5 h-3.5 shrink-0" />
            <span>机构</span>
          </button>

          <button
            onClick={() => onViewChange('officials')}
            className={`flex-1 py-1.5 text-xs font-semibold rounded-lg flex items-center justify-center gap-1 transition-all ${
              currentView === 'officials'
                ? 'bg-white text-blue-600 shadow-xs'
                : 'text-gray-600 hover:text-gray-900 hover:bg-white/40'
            }`}
            title="主要领导干部履历档案"
          >
            <Users className="w-3.5 h-3.5 shrink-0" />
            <span>官员</span>
          </button>
        </div>
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
      ) : (currentView === 'officials' || currentView === 'units') ? (
        /* 组织机构架构筛选与导航控件（官员页面与机构页面共用） */
        <div className="flex-1 overflow-y-auto p-3 space-y-3 text-xs">
          <div>
            <div className="flex items-center justify-between px-1 mb-1.5">
              <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider flex items-center gap-1">
                <Layers className="w-3 h-3 text-blue-600" />
                <span>
                  {currentView === 'units' ? '组织机构架构导航' : '组织机构架构筛选'}
                </span>
              </span>
              {(currentView === 'units' ? selectedUnitIdForUnits : selectedUnitIdForOfficials) && (
                <button
                  onClick={() => {
                    if (currentView === 'units') {
                      onSelectUnitForUnits?.(null);
                    } else {
                      onSelectUnitForOfficials?.(null);
                    }
                  }}
                  className="text-[11px] text-blue-600 hover:text-blue-800 font-medium flex items-center gap-0.5"
                >
                  <span>重置全部</span>
                  <X className="w-2.5 h-2.5" />
                </button>
              )}
            </div>

            {/* 机构搜索框 */}
            <div className="relative mb-2">
              <Search className="w-3.5 h-3.5 text-gray-400 absolute left-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="搜索机构名称或简称..."
                value={filterOrgKeyword}
                onChange={(e) => setFilterOrgKeyword(e.target.value)}
                className="w-full pl-8 pr-3 py-1.5 bg-black/[0.03] text-xs rounded-xl border border-transparent focus:bg-white focus:border-blue-500/30 outline-none"
              />
            </div>

            {/* 全部机构选项卡 */}
            <button
              onClick={() => {
                if (currentView === 'units') {
                  onSelectUnitForUnits?.(null);
                } else {
                  onSelectUnitForOfficials?.(null);
                }
              }}
              className={`w-full p-2 rounded-xl text-left transition-all mb-2 flex items-center justify-between border ${
                (currentView === 'units' ? selectedUnitIdForUnits : selectedUnitIdForOfficials) === null
                  ? 'bg-blue-600 text-white border-blue-600 shadow-xs'
                  : 'bg-white hover:bg-gray-50 border-black/[0.05] text-gray-800'
              }`}
            >
              <div className="flex items-center gap-2">
                <Building className="w-4 h-4 shrink-0" />
                <span className="font-bold text-xs">
                  {currentView === 'units' ? '全部系统单位档案' : '全部机构与单位'}
                </span>
              </div>
              <span
                className={`text-[10px] px-1.5 py-0.5 rounded-md font-mono font-medium ${
                  (currentView === 'units' ? selectedUnitIdForUnits : selectedUnitIdForOfficials) === null
                    ? 'bg-white/20 text-white'
                    : 'bg-black/[0.05] text-gray-500'
                }`}
              >
                {currentView === 'units' ? `${units.length}个单位` : `${officials.length}位干部`}
              </span>
            </button>
          </div>

          {/* 顶级组织架构分类树：1. 证监会系统 (主系统)  2. 其他系统与部委机关 (跨界关联) */}
          <div className="space-y-4 pr-0.5">
            {TOP_ORG_CATEGORIES.map((topCat) => {
              const matchingInTop = topCat.subCategories.flatMap((sub) =>
                units.filter((u) => sub.unitIds.includes(u.id))
              );
              if (matchingInTop.length === 0) return null;

              return (
                <div key={topCat.id} className="space-y-2">
                  {/* 顶级栏目标头 */}
                  <div className="flex items-center justify-between px-1.5 pt-1 text-xs font-black text-gray-800 tracking-tight">
                    <div className="flex items-center gap-1.5">
                      <span>{topCat.icon}</span>
                      <span>{topCat.title}</span>
                    </div>
                    {topCat.badge && (
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-blue-50 text-blue-700 border border-blue-200/60">
                        {topCat.badge}
                      </span>
                    )}
                  </div>

                  {/* 二级分类分组 */}
                  <div className="space-y-2">
                    {topCat.subCategories.map((cat) => {
                      const isCollapsedCat = !!collapsedOrgCats[cat.id];
                      const matchingUnits = units.filter(
                        (u) =>
                          cat.unitIds.includes(u.id) &&
                          (!filterOrgKeyword ||
                            u.name.toLowerCase().includes(filterOrgKeyword.toLowerCase()) ||
                            u.shortName.toLowerCase().includes(filterOrgKeyword.toLowerCase()) ||
                            (u.tinyName && u.tinyName.toLowerCase().includes(filterOrgKeyword.toLowerCase())))
                      );

                      if (matchingUnits.length === 0) return null;

                      return (
                        <div key={cat.id} className="bg-gray-50/60 rounded-xl border border-black/[0.04] p-1.5 space-y-1">
                          <div
                            onClick={() => toggleOrgCat(cat.id)}
                            className="flex items-center justify-between px-1.5 py-1 text-[11px] font-bold text-gray-700 cursor-pointer hover:text-blue-600 select-none"
                          >
                            <div className="flex items-center gap-1">
                              <span>{cat.icon}</span>
                              <span>{cat.title}</span>
                              <span className="text-[10px] text-gray-400 font-normal">({matchingUnits.length})</span>
                            </div>
                            {isCollapsedCat ? (
                              <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
                            ) : (
                              <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
                            )}
                          </div>

                          {!isCollapsedCat && (
                            <div className="space-y-1 pt-0.5">
                              {matchingUnits.map((unit) => {
                                const isUnits = currentView === 'units';
                                const isSelected = isUnits
                                  ? selectedUnitIdForUnits === unit.id
                                  : selectedUnitIdForOfficials === unit.id;
                                const stats = unitStatsMap.get(unit.id) || { current: 0, past: 0, total: 0 };
                                const displayName = unit.tinyName || unit.shortName;

                                return (
                                  <div
                                    key={unit.id}
                                    onClick={() => {
                                      if (isUnits) {
                                        onSelectUnitForUnits?.(isSelected ? null : unit.id);
                                      } else {
                                        onSelectUnitForOfficials?.(isSelected ? null : unit.id);
                                      }
                                    }}
                                    className={`px-2 py-1.5 rounded-lg cursor-pointer transition-all flex items-center justify-between border ${
                                      isSelected
                                        ? 'bg-blue-50 border-blue-500/60 ring-1 ring-blue-500/20 shadow-2xs'
                                        : 'bg-white hover:bg-gray-50/80 border-black/[0.03]'
                                    }`}
                                  >
                                    <div className="truncate flex items-center gap-1.5">
                                      <span
                                        className={`w-1.5 h-1.5 rounded-full shrink-0 ${
                                          isSelected ? 'bg-blue-600' : 'bg-gray-300'
                                        }`}
                                      />
                                      <span
                                        className={`text-xs truncate ${
                                          isSelected ? 'font-bold text-blue-700' : 'font-medium text-gray-800'
                                        }`}
                                      >
                                        {displayName}
                                      </span>
                                      <span className="text-[9px] text-gray-400 bg-gray-100 px-1 py-0.2 rounded shrink-0">
                                        {unit.level.replace('局级', '').replace('级', '')}
                                      </span>
                                    </div>

                                    {/* 人数与编制统计 */}
                                    <div className="flex items-center gap-1 shrink-0 text-[9.5px]">
                                      {isUnits ? (
                                        stats.current > 0 ? (
                                          <span
                                            className="text-blue-700 bg-blue-50 border border-blue-200/60 px-1.5 py-0.2 rounded font-medium"
                                            title={`现任主要负责人 ${stats.current} 位`}
                                          >
                                            班子 {stats.current}
                                          </span>
                                        ) : (
                                          <span className="text-gray-400 bg-gray-100 px-1 py-0.2 rounded text-[9px]">
                                            直属
                                          </span>
                                        )
                                      ) : (
                                        <>
                                          {stats.current > 0 && (
                                            <span
                                              className="text-emerald-700 bg-emerald-50 border border-emerald-200/60 px-1 py-0.2 rounded font-medium"
                                              title={`当前在该机构在职干部 ${stats.current} 位`}
                                            >
                                              在职 {stats.current}
                                            </span>
                                          )}
                                          {stats.past > 0 && (
                                            <span
                                              className="text-gray-500 bg-gray-100 px-1 py-0.2 rounded"
                                              title={`曾在该机构任职干部 ${stats.past} 位`}
                                            >
                                              曾任 {stats.past}
                                            </span>
                                          )}
                                          {stats.total === 0 && (
                                            <span className="text-gray-300 text-[9px]">-</span>
                                          )}
                                        </>
                                      )}
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : null}

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
