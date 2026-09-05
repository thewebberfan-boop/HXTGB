'use client';

import React, { useState, useMemo, useEffect } from 'react';
import { Unit, Official, UnitLevel } from '../types';
import {
  Search,
  Building2,
  ExternalLink,
  Calendar,
  ChevronRight,
  Filter,
  MapPin,
  UserCheck,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  GitCommitVertical,
  Building,
  X
} from 'lucide-react';
import { PositionRankBadge } from './PositionRankBadge';
import { OfficialIdPhoto } from './OfficialIdPhoto';

interface UnitsViewProps {
  units: Unit[];
  officials: Official[];
  onSelectOfficial: (official: Official) => void;
  onNavigateToSwimlane: (unitId?: string) => void;
  onBackToSwimlane?: () => void;
  initialUnitId?: string | null;
  selectedUnitId?: string | null;
  onSelectUnit?: (unitId: string | null) => void;
}

export const UnitsView: React.FC<UnitsViewProps> = ({
  units,
  officials,
  onSelectOfficial,
  onNavigateToSwimlane,
  onBackToSwimlane,
  initialUnitId,
  selectedUnitId,
  onSelectUnit,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedLevel, setSelectedLevel] = useState<string>('all');

  // 当前在右侧看板详细查看的单位
  const [activeUnit, setActiveUnit] = useState<Unit | null>(() => {
    if (initialUnitId) {
      return units.find((u) => u.id === initialUnitId) || units[0] || null;
    }
    if (selectedUnitId) {
      return units.find((u) => u.id === selectedUnitId) || units[0] || null;
    }
    return units[0] || null;
  });

  // 当外部选中的单位变更时同步更新
  useEffect(() => {
    if (selectedUnitId) {
      const found = units.find((u) => u.id === selectedUnitId);
      if (found) setActiveUnit(found);
    }
  }, [selectedUnitId, units]);

  useEffect(() => {
    if (initialUnitId) {
      const found = units.find((u) => u.id === initialUnitId);
      if (found) setActiveUnit(found);
    }
  }, [initialUnitId, units]);

  // 类别选项
  const categories: { label: string; value: string }[] = [
    { label: '全部类别', value: 'all' },
    { label: '会机关内设部门/司局', value: '会机关内设部门' },
    { label: '会管单位/交易所', value: '会管单位/交易所' },
    { label: '直属事业单位', value: '直属事业单位' },
    { label: '派出机构 (地方证监局)', value: '派出机构' },
    { label: '行业自律组织', value: '行业自律组织' },
  ];

  // 级别选项
  const levels: { label: string; value: string }[] = [
    { label: '全部编制级别', value: 'all' },
    { label: '正部级', value: '正部级' },
    { label: '副部级', value: '副部级' },
    { label: '正厅局级', value: '正厅局级' },
    { label: '副厅局级', value: '副厅局级' },
  ];

  // 过滤单位列表
  const filteredUnits = useMemo(() => {
    return units.filter((u) => {
      const matchSearch =
        !searchTerm ||
        u.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        u.shortName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (u.tinyName && u.tinyName.toLowerCase().includes(searchTerm.toLowerCase())) ||
        u.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        u.mainDuties.some((d) => d.toLowerCase().includes(searchTerm.toLowerCase()));

      const matchCategory =
        selectedCategory === 'all' || u.category === selectedCategory;

      const matchLevel =
        selectedLevel === 'all' || u.level === selectedLevel;

      return matchSearch && matchCategory && matchLevel;
    });
  }, [units, searchTerm, selectedCategory, selectedLevel]);

  // 根据 unitId 获取关联主要领导
  const getLeadersForUnit = (unit: Unit) => {
    return officials.filter((off) => off.currentUnitId === unit.id);
  };

  const getLevelBadgeClass = (level: UnitLevel) => {
    switch (level) {
      case '正部级':
        return 'bg-red-50 text-red-700 border-red-200/80';
      case '副部级':
        return 'bg-purple-50 text-purple-700 border-purple-200/80';
      case '正厅局级':
        return 'bg-blue-50 text-blue-700 border-blue-200/80';
      case '副厅局级':
        return 'bg-cyan-50 text-cyan-700 border-cyan-200/80';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  // 当前活跃单位的领导班子
  const activeLeaders = activeUnit ? getLeadersForUnit(activeUnit) : [];

  return (
    <div className="space-y-5">
      {/* 顶部搜索与过滤工具栏 (macOS Toolbar style) */}
      <div className="mac-card rounded-2xl p-4 sm:p-5 border border-black/[0.06] bg-white/95 shadow-xs">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="flex items-center gap-3 flex-1">
            {/* 返回时空泳道按钮 */}
            {onBackToSwimlane && (
              <button
                onClick={onBackToSwimlane}
                className="flex items-center gap-1.5 px-3 py-2 bg-blue-50 hover:bg-blue-100 text-blue-700 hover:text-blue-800 rounded-xl text-xs font-semibold border border-blue-200/60 shadow-2xs transition-all hover:scale-[1.02] active:scale-95 shrink-0"
                title="返回跳转前的时空演进泳道图谱"
              >
                <ArrowLeft className="w-3.5 h-3.5 text-blue-600" />
                <span>返回泳道</span>
              </button>
            )}

            {/* 搜索框 */}
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="搜索单位全称、简称、职责或业务关键字..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-4 py-2 bg-black/[0.03] hover:bg-black/[0.05] focus:bg-white text-sm rounded-xl border border-transparent focus:border-blue-500/40 focus:ring-2 focus:ring-blue-500/10 transition-all outline-none"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 p-0.5"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>

          {/* 过滤筛选器 */}
          <div className="flex flex-wrap items-center gap-2.5">
            <div className="flex items-center gap-1.5 text-xs text-[#86868b] mr-1">
              <Filter className="w-3.5 h-3.5" />
              <span>筛选:</span>
            </div>

            {/* 类别下拉 */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-3 py-1.5 bg-black/[0.03] hover:bg-black/[0.05] text-xs font-medium text-gray-700 rounded-lg border border-black/[0.06] outline-none cursor-pointer"
            >
              {categories.map((c) => (
                <option key={c.value} value={c.value}>
                  {c.label}
                </option>
              ))}
            </select>

            {/* 级别下拉 */}
            <select
              value={selectedLevel}
              onChange={(e) => setSelectedLevel(e.target.value)}
              className="px-3 py-1.5 bg-black/[0.03] hover:bg-black/[0.05] text-xs font-medium text-gray-700 rounded-lg border border-black/[0.06] outline-none cursor-pointer"
            >
              {levels.map((l) => (
                <option key={l.value} value={l.value}>
                  {l.label}
                </option>
              ))}
            </select>

            <span className="text-xs text-gray-400 ml-1">
              共 <strong className="text-gray-900">{filteredUnits.length}</strong> 个系统单位
            </span>
          </div>
        </div>

        {/* 侧边栏选定提示徽章 */}
        {selectedUnitId && (
          <div className="mt-3 pt-3 border-t border-black/[0.04] flex items-center justify-between text-xs text-blue-700 bg-blue-50/50 px-3 py-1.5 rounded-xl">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
              <span>
                侧边栏当前定位机构：
                <strong>
                  {units.find((u) => u.id === selectedUnitId)?.name || selectedUnitId}
                </strong>
              </span>
            </div>
            <button
              onClick={() => onSelectUnit?.(null)}
              className="text-blue-600 hover:text-blue-800 underline hover:no-underline text-xs flex items-center gap-1 font-medium"
            >
              <span>清除定位显示全部</span>
              <X className="w-3 h-3" />
            </button>
          </div>
        )}
      </div>

      {/* 核心改动：页面内展示 Master-Detail 双栏布局（彻底告别 Modal 弹窗） */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* 左侧：系统单位卡片列表 (lg:col-span-5) */}
        <div className="lg:col-span-5 space-y-3">
          <div className="flex items-center justify-between px-1 text-xs text-gray-500 font-medium">
            <span className="flex items-center gap-1.5">
              <Building className="w-3.5 h-3.5 text-blue-600" />
              <span>系统单位档案清册 ({filteredUnits.length})</span>
            </span>
            <span className="text-[11px] text-gray-400">点击卡片切换详情</span>
          </div>

          <div className="space-y-3 max-h-[calc(100vh-230px)] overflow-y-auto pr-1">
            {filteredUnits.length > 0 ? (
              filteredUnits.map((unit) => {
                const leaders = getLeadersForUnit(unit);
                const isSelected = activeUnit?.id === unit.id;

                return (
                  <div
                    key={unit.id}
                    onClick={() => {
                      setActiveUnit(unit);
                      onSelectUnit?.(unit.id);
                    }}
                    className={`mac-card rounded-2xl p-4 cursor-pointer transition-all border relative overflow-hidden group ${
                      isSelected
                        ? 'border-blue-500/80 ring-2 ring-blue-500/15 bg-blue-50/25 shadow-xs'
                        : 'border-black/[0.06] hover:border-blue-300/80 bg-white hover:bg-gray-50/50'
                    }`}
                  >
                    {/* 活跃项左侧竖排高亮指示条 */}
                    {isSelected && (
                      <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-blue-600" />
                    )}

                    <div>
                      {/* Top Badges */}
                      <div className="flex items-center justify-between gap-2 mb-2 pl-0.5">
                        <div className="flex items-center gap-1.5 flex-wrap">
                          <span className="text-[10.5px] font-medium text-gray-500 bg-gray-100/90 px-2 py-0.5 rounded-md">
                            {unit.category}
                          </span>
                          <span
                            className={`text-[10.5px] font-semibold px-2 py-0.5 rounded-md border ${getLevelBadgeClass(
                              unit.level
                            )}`}
                          >
                            {unit.level}
                          </span>
                        </div>
                        <span className="text-[11px] text-gray-400 font-mono">
                          建制 {unit.establishedYear}
                        </span>
                      </div>

                      {/* Name & Short Name */}
                      <div className="pl-0.5">
                        <h3
                          className={`font-bold text-sm sm:text-base transition-colors leading-snug ${
                            isSelected
                              ? 'text-blue-700'
                              : 'text-gray-900 group-hover:text-blue-600'
                          }`}
                        >
                          {unit.name}
                        </h3>
                        <p className="text-xs text-gray-500 font-mono mt-0.5">
                          {unit.shortName}
                          {unit.tinyName && unit.tinyName !== unit.shortName ? ` · ${unit.tinyName}` : ''}
                        </p>
                      </div>

                      {/* Description snippet */}
                      <p className="text-xs text-gray-600 mt-2 line-clamp-2 leading-relaxed pl-0.5">
                        {unit.description}
                      </p>
                    </div>

                    {/* Bottom: Leaders & Inspector Link */}
                    <div className="mt-3.5 pt-2.5 border-t border-black/[0.05] flex items-center justify-between text-xs pl-0.5">
                      <div className="flex items-center gap-1 overflow-hidden">
                        {leaders.length > 0 ? (
                          <div className="flex items-center gap-1 text-gray-700 truncate">
                            <UserCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                            <span className="truncate text-[11.5px]">
                              现任班子: {leaders.map((l) => l.name).join('、')}
                            </span>
                          </div>
                        ) : (
                          <span className="text-[11px] text-gray-400">
                            点击右侧查看职能编制详情
                          </span>
                        )}
                      </div>

                      <span
                        className={`text-xs flex items-center font-medium transition-transform group-hover:translate-x-0.5 shrink-0 ${
                          isSelected ? 'text-blue-700 font-bold' : 'text-blue-600'
                        }`}
                      >
                        档案
                        <ChevronRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="mac-card rounded-2xl p-8 text-center text-gray-400 text-xs">
                没有找到符合条件的系统单位
              </div>
            )}
          </div>
        </div>

        {/* 右侧：页面内全息单位档案看板 In-Page Inspector (lg:col-span-7, sticky top-6) */}
        <div className="lg:col-span-7 sticky top-6">
          {activeUnit ? (
            <div className="mac-card rounded-2xl p-6 sm:p-7 border border-black/[0.08] bg-white shadow-sm space-y-6 max-h-[calc(100vh-140px)] overflow-y-auto">
              {/* 看板头部 Header */}
              <div className="pb-5 border-b border-black/[0.07]">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                  <div className="space-y-1.5 flex-1">
                    <div className="flex items-center gap-2 flex-wrap mb-1">
                      <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2.5 py-0.5 rounded-md">
                        {activeUnit.category}
                      </span>
                      <span
                        className={`text-xs font-semibold px-2.5 py-0.5 rounded-md border ${getLevelBadgeClass(
                          activeUnit.level
                        )}`}
                      >
                        编制级别：{activeUnit.level}
                      </span>
                      <span className="text-xs text-gray-400 flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-gray-400" />
                        建制：{activeUnit.establishedYear} 年
                      </span>
                    </div>

                    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight leading-snug">
                      {activeUnit.name}
                    </h2>
                    <p className="text-xs text-gray-500 font-mono">
                      机构简称 / 代码：{activeUnit.shortName}
                      {activeUnit.tinyName ? `（泳道微标：${activeUnit.tinyName}）` : ''}
                    </p>
                  </div>

                  {/* 核心操作：泳道联动按钮 */}
                  <div className="flex flex-col items-end gap-2 shrink-0">
                    <button
                      onClick={() => onNavigateToSwimlane(activeUnit.id)}
                      className="flex items-center gap-1.5 px-3.5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-semibold shadow-xs transition-all hover:scale-[1.02] active:scale-95"
                      title="在时空演进泳道图谱中展开该单位所有任职干部的轨迹"
                    >
                      <GitCommitVertical className="w-3.5 h-3.5" />
                      <span>在时空泳道中展开</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>

                    {activeUnit.websiteUrl && (
                      <a
                        href={activeUnit.websiteUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs text-gray-500 hover:text-blue-600 flex items-center gap-1 transition-colors"
                      >
                        <span>访问官方网站</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* 机构职能与概况介绍 */}
              <div>
                <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                  <Building2 className="w-4 h-4 text-blue-600" />
                  <span>机构职能与概况介绍</span>
                </h4>
                <div className="bg-gray-50/80 p-4 rounded-xl border border-black/[0.04] text-xs sm:text-sm text-gray-700 leading-relaxed space-y-2">
                  <p>{activeUnit.description}</p>
                </div>
              </div>

              {/* 主要职责与业务范围 */}
              <div>
                <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-600" />
                  <span>主要职责与业务范围 ({activeUnit.mainDuties.length}项法定职责)</span>
                </h4>
                <div className="space-y-2">
                  {activeUnit.mainDuties.map((duty, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 text-xs text-gray-700 p-2.5 rounded-lg bg-gray-50/60 border border-black/[0.03]"
                    >
                      <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{duty}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 现任主要领导班子 */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider flex items-center gap-1.5">
                    <UserCheck className="w-4 h-4 text-blue-600" />
                    <span>现任主要领导干部班子 ({activeLeaders.length}人)</span>
                  </h4>
                  <span className="text-[11px] text-gray-400 font-normal">
                    点击干部卡片可直接查看其个人全息档案
                  </span>
                </div>

                {activeLeaders.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {activeLeaders.map((leader) => (
                      <div
                        key={leader.id}
                        onClick={() => onSelectOfficial(leader)}
                        className="p-3.5 rounded-xl border border-black/[0.06] hover:border-blue-400/80 bg-gray-50/70 hover:bg-blue-50/30 transition-all cursor-pointer flex items-center gap-3 group relative overflow-hidden shadow-2xs"
                      >
                        {/* 干部 1 寸标准免冠证件照 */}
                        <OfficialIdPhoto official={leader} size="sm" />

                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-1.5 flex-wrap">
                            <span className="font-bold text-sm text-gray-900 group-hover:text-blue-600 transition-colors">
                              {leader.name}
                            </span>
                            <PositionRankBadge rank={leader.currentRank} />
                          </div>
                          <p className="text-xs text-gray-600 mt-1 truncate font-medium">
                            {leader.currentPosition}
                          </p>
                          <div className="flex items-center gap-1 text-[11px] text-blue-600 group-hover:translate-x-0.5 transition-transform mt-1 font-medium">
                            <span>查看档案</span>
                            <span>→</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="p-4 bg-gray-50 rounded-xl border border-black/[0.04] text-xs text-gray-400 text-center">
                    暂未收录该单位现任主要领导班子简历档案
                  </div>
                )}
              </div>

              {/* 办公地址与联系信息 */}
              <div>
                <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-blue-600" />
                  <span>办公地址与网络入口</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  {activeUnit.address && (
                    <div className="flex items-start gap-2.5 p-3.5 bg-gray-50/80 rounded-xl border border-black/[0.04]">
                      <MapPin className="w-4 h-4 text-gray-400 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium text-gray-800 block">办公地址</span>
                        <span className="text-gray-600 mt-0.5 block leading-relaxed">
                          {activeUnit.address}
                        </span>
                      </div>
                    </div>
                  )}

                  {activeUnit.websiteUrl && (
                    <div className="flex items-start gap-2.5 p-3.5 bg-gray-50/80 rounded-xl border border-black/[0.04]">
                      <Building2 className="w-4 h-4 text-gray-400 shrink-0 mt-0.5" />
                      <div className="truncate flex-1">
                        <span className="font-medium text-gray-800 block">官方网站</span>
                        <a
                          href={activeUnit.websiteUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="text-blue-600 hover:underline flex items-center gap-1 font-mono mt-0.5 truncate"
                        >
                          <span className="truncate">{activeUnit.websiteUrl}</span>
                          <ExternalLink className="w-3 h-3 shrink-0" />
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* 看板底部快捷跳转栏 */}
              <div className="pt-4 border-t border-black/[0.07] flex items-center justify-between">
                <button
                  onClick={() => onNavigateToSwimlane(activeUnit.id)}
                  className="flex items-center gap-1.5 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-xl shadow-xs transition-colors"
                >
                  <GitCommitVertical className="w-3.5 h-3.5" />
                  <span>在时空泳道中查看该单位</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                {onBackToSwimlane && (
                  <button
                    onClick={onBackToSwimlane}
                    className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-medium rounded-xl transition-colors"
                  >
                    返回时空泳道
                  </button>
                )}
              </div>
            </div>
          ) : (
            <div className="mac-card rounded-2xl p-12 text-center text-gray-400 text-xs">
              请从左侧单位列表或侧边栏选择一个机构查看详细档案
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
