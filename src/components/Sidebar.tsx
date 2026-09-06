'use client';

import React, { useState, useMemo } from 'react';
import { ViewMode, Official, Unit } from '../types';
import { getOfficialColor, isOfficialActiveInUnit, isOfficialPastInUnit, sortOfficialsByRankAndSeniority } from '../data/csrcData';
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
  activeOfficialId?: string | null;
  onSelectOfficial?: (officialId: string) => void;
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
        unitIds: [
          'gov-sh-prov',
          'gov-sh-dist',
          'gov-js-prov',
          'gov-js-city',
          'gov-gd-prov',
          'gov-gd-city',
          'gov-sd-prov',
          'gov-tj-prov',
          'gov-local',
          'gov-sh',
          'gov-js',
          'gov-gd',
          'gov-sd',
          'gov-tj'
        ],
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

export interface ProvincialGovMenu {
  id: string;
  name: string;
  badge: string;
  icon: string;
  units: {
    id: string;
    name: string;
    tier: string;
  }[];
}

export const PROVINCIAL_GOV_MENUS: ProvincialGovMenu[] = [
  {
    id: 'prov-sh',
    name: '上海市',
    badge: '直辖市',
    icon: '🏙️',
    units: [
      { id: 'gov-sh-prov', name: '上海市委 / 市政府及金融办', tier: '直辖市级' },
      { id: 'gov-sh-dist', name: '虹口区委 / 区人民政府', tier: '市辖区' },
    ],
  },
  {
    id: 'prov-js',
    name: '江苏省',
    badge: '省',
    icon: '🏛️',
    units: [
      { id: 'gov-js-prov', name: '江苏省人民政府', tier: '省级机构' },
      { id: 'gov-js-city', name: '南京市人民政府', tier: '副省级市' },
    ],
  },
  {
    id: 'prov-gd',
    name: '广东省',
    badge: '省',
    icon: '🌴',
    units: [
      { id: 'gov-gd-prov', name: '广东省人民政府', tier: '省级机构' },
      { id: 'gov-gd-city', name: '深圳市人民政府', tier: '计划单列市' },
    ],
  },
  {
    id: 'prov-sd',
    name: '山东省',
    badge: '省',
    icon: '🌾',
    units: [
      { id: 'gov-sd-prov', name: '山东省人民政府', tier: '省级机构' },
    ],
  },
  {
    id: 'prov-tj',
    name: '天津市',
    badge: '直辖市',
    icon: '⚓',
    units: [
      { id: 'gov-tj-prov', name: '天津市人民政府', tier: '直辖市级' },
    ],
  },
  {
    id: 'prov-other',
    name: '其他地方政府',
    badge: '统合',
    icon: '🌐',
    units: [
      { id: 'gov-local', name: '各级地方党政机关（统合）', tier: '统合机构' },
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
  activeOfficialId,
  onSelectOfficial,
}) => {
  const [isAddLaneOpen, setIsAddLaneOpen] = useState(false);
  const [filterOfficialKeyword, setFilterOfficialKeyword] = useState('');
  const [filterOrgKeyword, setFilterOrgKeyword] = useState('');
  const [collapsedTopCats, setCollapsedTopCats] = useState<Record<string, boolean>>({});
  const [collapsedOrgCats, setCollapsedOrgCats] = useState<Record<string, boolean>>({});
  const [collapsedProvCats, setCollapsedProvCats] = useState<Record<string, boolean>>({});

  // 官员页面专用的单手风琴展开机构状态：仅展开当前选中的机构，打开其他机构自动收起上一个
  const [expandedUnitIdForOfficials, setExpandedUnitIdForOfficials] = useState<string | null>(
    () => selectedUnitIdForOfficials || null
  );

  React.useEffect(() => {
    if (selectedUnitIdForOfficials !== undefined) {
      setExpandedUnitIdForOfficials(selectedUnitIdForOfficials);
    }
  }, [selectedUnitIdForOfficials]);

  const handleToggleUnitAccordion = (unitId: string) => {
    if (expandedUnitIdForOfficials === unitId) {
      // 再次点击同一个机构 -> 收起
      setExpandedUnitIdForOfficials(null);
      onSelectUnitForOfficials?.(null);
    } else {
      // 点击其他机构 -> 打开该机构官员列表，并自动收起上一个已经展开的机构
      setExpandedUnitIdForOfficials(unitId);
      onSelectUnitForOfficials?.(unitId);

      // 默认自动定位到该机构的首位在职或曾任干部
      const serving = officials
        .filter((off) => isOfficialActiveInUnit(off, unitId))
        .sort(sortOfficialsByRankAndSeniority);
      if (serving.length > 0) {
        onSelectOfficial?.(serving[0].id);
      } else {
        const past = officials
          .filter((off) => isOfficialPastInUnit(off, unitId))
          .sort(sortOfficialsByRankAndSeniority);
        if (past.length > 0) {
          onSelectOfficial?.(past[0].id);
        }
      }
    }
  };

  const renderUnitOfficialsAccordion = (unitId: string) => {
    const serving = officials
      .filter((off) => isOfficialActiveInUnit(off, unitId))
      .sort(sortOfficialsByRankAndSeniority);
    const past = officials
      .filter((off) => isOfficialPastInUnit(off, unitId))
      .sort(sortOfficialsByRankAndSeniority);

    if (serving.length === 0 && past.length === 0) {
      return (
        <div className="mt-1 pl-2.5 pr-2 py-2 bg-gray-50/90 rounded-lg border border-black/[0.04] text-[10.5px] text-gray-400 italic text-center">
          暂无关联的在职或曾任干部记录
        </div>
      );
    }

    return (
      <div className="mt-1 pl-2 pr-1.5 py-2 bg-blue-50/30 rounded-lg border border-blue-100/80 space-y-2 text-[11px] animate-in slide-in-from-top-1 duration-150 shadow-2xs">
        {/* 在职班子 */}
        <div>
          <div className="flex items-center justify-between text-[10px] text-emerald-800 font-semibold px-1 mb-1">
            <span className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>在职班子 ({serving.length}人)</span>
            </span>
          </div>
          {serving.length > 0 ? (
            <div className="space-y-0.5">
              {serving.map((off) => {
                const isActive = (activeOfficialId || officials[0]?.id) === off.id;
                return (
                  <button
                    key={off.id}
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectOfficial?.(off.id);
                    }}
                    className={`w-full text-left px-2 py-1.5 rounded-md transition-all flex items-center justify-between group cursor-pointer ${
                      isActive
                        ? 'bg-blue-600 text-white font-bold shadow-2xs'
                        : 'hover:bg-white text-gray-800 hover:text-blue-700'
                    }`}
                  >
                    <div className="flex items-center gap-1.5 min-w-0 truncate">
                      <span className="truncate">{off.name}</span>
                    </div>
                    <div className="flex items-center gap-1 shrink-0">
                      <span
                        className={`text-[9.5px] px-1.5 py-0.2 rounded font-mono ${
                          isActive
                            ? 'bg-white/20 text-white'
                            : 'text-emerald-700 bg-emerald-50 border border-emerald-200/60'
                        }`}
                      >
                        {off.currentRank.replace('局级', '').replace('级', '')}
                      </span>
                      <span
                        className={`text-[9px] font-mono ${
                          isActive ? 'text-blue-100' : 'text-gray-400'
                        }`}
                      >
                        {2026 - off.birthYear}岁
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          ) : (
            <div className="text-[10px] text-gray-400 italic px-2 py-0.5">暂无在职班子记录</div>
          )}
        </div>

        {/* 曾在此任职干部 */}
        {past.length > 0 && (
          <div className="pt-1.5 border-t border-black/[0.05]">
            <div className="text-[10px] text-gray-500 font-semibold px-1 mb-1 flex items-center gap-1">
              <span>🏛️ 曾在此任职 ({past.length}人)</span>
            </div>
            <div className="space-y-0.5 max-h-48 overflow-y-auto pr-0.5">
              {past.map((off) => {
                const isActive = (activeOfficialId || officials[0]?.id) === off.id;
                return (
                  <button
                    key={off.id}
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectOfficial?.(off.id);
                    }}
                    className={`w-full text-left px-2 py-1.5 rounded-md transition-all flex items-center justify-between group cursor-pointer ${
                      isActive
                        ? 'bg-blue-600 text-white font-bold shadow-2xs'
                        : 'hover:bg-white text-gray-700 hover:text-blue-700'
                    }`}
                  >
                    <div className="flex items-center gap-1.5 min-w-0 truncate">
                      <span className="truncate">{off.name}</span>
                    </div>
                    <div className="flex items-center gap-1 shrink-0">
                      <span
                        className={`text-[9.5px] px-1.5 py-0.2 rounded font-mono ${
                          isActive
                            ? 'bg-white/20 text-white'
                            : 'text-gray-500 bg-gray-100'
                        }`}
                      >
                        {off.currentRank.replace('局级', '').replace('级', '')}
                      </span>
                      <span
                        className={`text-[9px] font-mono ${
                          isActive ? 'text-blue-100' : 'text-gray-400'
                        }`}
                      >
                        {2026 - off.birthYear}岁
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    );
  };

  const toggleTopCat = (topCatId: string) => {
    setCollapsedTopCats((prev) => ({ ...prev, [topCatId]: !prev[topCatId] }));
  };

  const toggleOrgCat = (catId: string) => {
    setCollapsedOrgCats((prev) => ({ ...prev, [catId]: !prev[catId] }));
  };

  const toggleProvCat = (provId: string) => {
    setCollapsedProvCats((prev) => ({ ...prev, [provId]: !prev[provId] }));
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
                  setExpandedUnitIdForOfficials(null);
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
          <div className="space-y-3 pr-0.5">
            {TOP_ORG_CATEGORIES.map((topCat) => {
              const matchingInTop = topCat.subCategories.flatMap((sub) =>
                units.filter((u) => sub.unitIds.includes(u.id))
              );
              if (matchingInTop.length === 0) return null;

              const isTopCollapsed = !!collapsedTopCats[topCat.id];

              return (
                <div key={topCat.id} className="space-y-1.5">
                  {/* 顶级栏目标头（支持点击一键收起/展开） */}
                  <div
                    onClick={() => toggleTopCat(topCat.id)}
                    className="flex items-center justify-between px-2 py-1.5 rounded-lg bg-gray-100/80 hover:bg-gray-200/70 cursor-pointer text-xs font-black text-gray-800 tracking-tight select-none transition-colors border border-black/[0.04]"
                  >
                    <div className="flex items-center gap-1.5">
                      <span>{topCat.icon}</span>
                      <span>{topCat.title}</span>
                      {topCat.badge && (
                        <span className="text-[10px] font-semibold px-1.5 py-0.2 rounded bg-white text-blue-700 border border-blue-200/60 shadow-2xs">
                          {topCat.badge}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-1 text-gray-400">
                      {isTopCollapsed ? (
                        <ChevronRight className="w-3.5 h-3.5 text-gray-500" />
                      ) : (
                        <ChevronDown className="w-3.5 h-3.5 text-gray-500" />
                      )}
                    </div>
                  </div>

                  {/* 二级分类分组（顶级未收起时展开） */}
                  {!isTopCollapsed && (
                    <div className="space-y-2 pt-0.5">
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
                          <div key={cat.id} className="bg-gray-50/70 rounded-xl border border-black/[0.04] p-1.5 space-y-1">
                            {/* 二级分类标头 */}
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

                            {/* 二级分类未收起时的内容 */}
                            {!isCollapsedCat && (
                              <div className="space-y-1 pt-0.5">
                                {cat.id === 'cat-gov-local' ? (
                                  /* 各级地方人民政府：按省/直辖市建立三级菜单，区别展示省级机构与各市/区 */
                                  <div className="space-y-1.5 pl-0.5">
                                    {PROVINCIAL_GOV_MENUS.map((prov) => {
                                      const matchingProvUnits = prov.units.filter((pu) => {
                                        const u = units.find((x) => x.id === pu.id);
                                        if (!u) return false;
                                        if (!filterOrgKeyword) return true;
                                        const kw = filterOrgKeyword.toLowerCase();
                                        return (
                                          prov.name.toLowerCase().includes(kw) ||
                                          pu.name.toLowerCase().includes(kw) ||
                                          u.name.toLowerCase().includes(kw) ||
                                          u.shortName.toLowerCase().includes(kw)
                                        );
                                      });

                                      if (matchingProvUnits.length === 0) return null;
                                      const isProvCollapsed = !!collapsedProvCats[prov.id];

                                      const provStats = matchingProvUnits.reduce(
                                        (acc, pu) => {
                                          const s = unitStatsMap.get(pu.id) || { current: 0, past: 0, total: 0 };
                                          return { current: acc.current + s.current, past: acc.past + s.past };
                                        },
                                        { current: 0, past: 0 }
                                      );

                                      return (
                                        <div
                                          key={prov.id}
                                          className="bg-white/90 rounded-lg border border-black/[0.04] p-1.5 space-y-1 shadow-2xs"
                                        >
                                          <div
                                            onClick={() => toggleProvCat(prov.id)}
                                            className="flex items-center justify-between px-1.5 py-1 text-[11px] font-bold text-gray-800 cursor-pointer hover:text-blue-600 select-none rounded hover:bg-gray-100/60 transition-colors"
                                          >
                                            <div className="flex items-center gap-1.5 truncate">
                                              <span>{prov.icon}</span>
                                              <span>{prov.name}</span>
                                              <span className="text-[9px] font-medium text-gray-500 bg-gray-100 px-1 py-0.2 rounded">
                                                {prov.badge}
                                              </span>
                                            </div>
                                            <div className="flex items-center gap-1 shrink-0">
                                              {provStats.current > 0 && (
                                                <span className="text-[9px] text-emerald-700 bg-emerald-50 border border-emerald-200/60 px-1 rounded font-medium">
                                                  在职 {provStats.current}
                                                </span>
                                              )}
                                              {provStats.past > 0 && (
                                                <span className="text-[9px] text-gray-500 bg-gray-100 px-1 rounded font-medium">
                                                  曾任 {provStats.past}
                                                </span>
                                              )}
                                              {provStats.current === 0 && provStats.past === 0 && (
                                                <span className="text-gray-300 text-[9px]">-</span>
                                              )}
                                              {isProvCollapsed ? (
                                                <ChevronRight className="w-3 h-3 text-gray-400 ml-0.5" />
                                              ) : (
                                                <ChevronDown className="w-3 h-3 text-gray-400 ml-0.5" />
                                              )}
                                            </div>
                                          </div>

                                          {!isProvCollapsed && (
                                            <div className="space-y-1 pl-1.5 pt-0.5 border-l-2 border-blue-200/60 ml-2 mb-1">
                                              {matchingProvUnits.map((pu) => {
                                                const unit = units.find((u) => u.id === pu.id);
                                                if (!unit) return null;
                                                const isUnits = currentView === 'units';
                                                const isSelected = isUnits
                                                  ? selectedUnitIdForUnits === unit.id
                                                  : selectedUnitIdForOfficials === unit.id;
                                                const stats = unitStatsMap.get(unit.id) || {
                                                  current: 0,
                                                  past: 0,
                                                  total: 0,
                                                };

                                                const isExpanded = !isUnits && expandedUnitIdForOfficials === unit.id;
                                                return (
                                                  <div key={unit.id} className="space-y-1">
                                                    <div
                                                      onClick={() => {
                                                        if (isUnits) {
                                                          onSelectUnitForUnits?.(isSelected ? null : unit.id);
                                                        } else {
                                                          handleToggleUnitAccordion(unit.id);
                                                        }
                                                      }}
                                                      className={`px-2 py-1.5 rounded-lg cursor-pointer transition-all flex items-center justify-between border ${
                                                        isSelected
                                                          ? 'bg-blue-50 border-blue-500/60 ring-1 ring-blue-500/20 shadow-2xs'
                                                          : 'bg-white hover:bg-gray-50/90 border-black/[0.03]'
                                                      }`}
                                                    >
                                                      <div className="truncate flex items-center gap-1.5 min-w-0 pr-1">
                                                        <span
                                                          className={`w-1.5 h-1.5 rounded-full shrink-0 ${
                                                            isSelected ? 'bg-blue-600' : 'bg-gray-300'
                                                          }`}
                                                        />
                                                        <span
                                                          className={`text-xs truncate ${
                                                            isSelected
                                                              ? 'font-bold text-blue-700'
                                                              : 'font-medium text-gray-800'
                                                          }`}
                                                          title={unit.name}
                                                        >
                                                          {pu.name}
                                                        </span>
                                                        <span className="text-[9px] text-blue-600 bg-blue-50 px-1 py-0.2 rounded shrink-0 font-medium">
                                                          {pu.tier}
                                                        </span>
                                                      </div>

                                                      {/* 官员统计：在职 与 曾任 + 折叠指示 */}
                                                      <div className="flex items-center gap-1 shrink-0 text-[9px]">
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
                                                            className="text-gray-500 bg-gray-100 px-1 py-0.2 rounded font-medium"
                                                            title={`曾在该机构任职干部 ${stats.past} 位`}
                                                          >
                                                            曾任 {stats.past}
                                                          </span>
                                                        )}
                                                        {stats.current === 0 && stats.past === 0 && (
                                                          <span className="text-gray-300 text-[9px]">-</span>
                                                        )}
                                                        {!isUnits && (
                                                          isExpanded ? (
                                                            <ChevronDown className="w-3.5 h-3.5 text-blue-600 shrink-0 ml-0.5" />
                                                          ) : (
                                                            <ChevronRight className="w-3 h-3 text-gray-400 shrink-0 ml-0.5" />
                                                          )
                                                        )}
                                                      </div>
                                                    </div>

                                                    {isExpanded && renderUnitOfficialsAccordion(unit.id)}
                                                  </div>
                                                );
                                              })}
                                            </div>
                                          )}
                                        </div>
                                      );
                                    })}
                                  </div>
                                ) : (
                                  /* 标准机构列表 */
                                  matchingUnits.map((unit) => {
                                    const isUnits = currentView === 'units';
                                    const isSelected = isUnits
                                      ? selectedUnitIdForUnits === unit.id
                                      : selectedUnitIdForOfficials === unit.id;
                                    const stats = unitStatsMap.get(unit.id) || { current: 0, past: 0, total: 0 };
                                    const displayName = unit.tinyName || unit.shortName;

                                    const isExpanded = !isUnits && expandedUnitIdForOfficials === unit.id;
                                    return (
                                      <div key={unit.id} className="space-y-1">
                                        <div
                                          onClick={() => {
                                            if (isUnits) {
                                              onSelectUnitForUnits?.(isSelected ? null : unit.id);
                                            } else {
                                              handleToggleUnitAccordion(unit.id);
                                            }
                                          }}
                                          className={`px-2 py-1.5 rounded-lg cursor-pointer transition-all flex items-center justify-between border ${
                                            isSelected
                                              ? 'bg-blue-50 border-blue-500/60 ring-1 ring-blue-500/20 shadow-2xs'
                                              : 'bg-white hover:bg-gray-50/80 border-black/[0.03]'
                                          }`}
                                        >
                                          <div className="truncate flex items-center gap-1.5 min-w-0 pr-1">
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

                                          {/* 人数与任职统计：统一在职与曾任 + 折叠指示 */}
                                          <div className="flex items-center gap-1 shrink-0 text-[9.5px]">
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
                                                className="text-gray-500 bg-gray-100 px-1 py-0.2 rounded font-medium"
                                                title={`曾在该机构任职干部 ${stats.past} 位`}
                                              >
                                                曾任 {stats.past}
                                              </span>
                                            )}
                                            {stats.current === 0 && stats.past === 0 && (
                                              <span className="text-gray-300 text-[9px]">-</span>
                                            )}
                                            {!isUnits && (
                                              isExpanded ? (
                                                <ChevronDown className="w-3.5 h-3.5 text-blue-600 shrink-0 ml-0.5" />
                                              ) : (
                                                <ChevronRight className="w-3 h-3 text-gray-400 shrink-0 ml-0.5" />
                                              )
                                            )}
                                          </div>
                                        </div>

                                        {isExpanded && renderUnitOfficialsAccordion(unit.id)}
                                      </div>
                                    );
                                  })
                                )}
                              </div>
                            )}
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
