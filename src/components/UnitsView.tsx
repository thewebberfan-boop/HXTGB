'use client';

import React, { useState, useMemo, useEffect } from 'react';
import { Unit, Official, UnitLevel, UnitCategory } from '../types';
import {
  Search,
  Building2,
  ExternalLink,
  Calendar,
  ShieldAlert,
  ChevronRight,
  Filter,
  MapPin,
  Phone,
  UserCheck,
  CheckCircle2,
  ArrowRight,
  ArrowLeft
} from 'lucide-react';

interface UnitsViewProps {
  units: Unit[];
  officials: Official[];
  onSelectOfficial: (official: Official) => void;
  onNavigateToSwimlane: (unitId?: string) => void;
  onBackToSwimlane?: () => void;
  initialUnitId?: string | null;
}

export const UnitsView: React.FC<UnitsViewProps> = ({
  units,
  officials,
  onSelectOfficial,
  onNavigateToSwimlane,
  onBackToSwimlane,
  initialUnitId,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedLevel, setSelectedLevel] = useState<string>('all');
  const [activeUnit, setActiveUnit] = useState<Unit | null>(() => {
    if (initialUnitId) {
      return units.find((u) => u.id === initialUnitId) || null;
    }
    return null;
  });

  useEffect(() => {
    if (initialUnitId) {
      const found = units.find((u) => u.id === initialUnitId);
      if (found) setActiveUnit(found);
    }
  }, [initialUnitId, units]);

  // 类别选项
  const categories: { label: string; value: string }[] = [
    { label: '全部类别', value: 'all' },
    { label: '会机关内设司局', value: '会机关内设部门' },
    { label: '派出机构 (证监局)', value: '派出机构' },
    { label: '会管单位 / 交易所', value: '会管单位/交易所' },
    { label: '直属事业单位', value: '直属事业单位' },
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
        u.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        u.shortName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        u.description.toLowerCase().includes(searchTerm.toLowerCase());

      const matchCategory =
        selectedCategory === 'all' || u.category === selectedCategory;

      const matchLevel =
        selectedLevel === 'all' || u.level === selectedLevel;

      return matchSearch && matchCategory && matchLevel;
    });
  }, [units, searchTerm, selectedCategory, selectedLevel]);

  // 根据 unitId 获取关联领导
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

  return (
    <div className="space-y-6">
      {/* 顶部搜索与过滤工具栏 (macOS Toolbar style) */}
      <div className="mac-card rounded-2xl p-4 sm:p-5 border border-black/[0.06] bg-white/95">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="flex items-center gap-3 flex-1">
            {/* 需求四：通用返回时空泳道按钮 */}
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
                placeholder="搜索单位名称、简称、主要业务关键字..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-4 py-2 bg-black/[0.03] hover:bg-black/[0.05] focus:bg-white text-sm rounded-xl border border-transparent focus:border-blue-500/40 focus:ring-2 focus:ring-blue-500/10 transition-all outline-none"
              />
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

            <span className="text-xs text-gray-400 ml-2">
              共 <strong className="text-gray-900">{filteredUnits.length}</strong> 个系统单位
            </span>
          </div>
        </div>
      </div>

      {/* 单位卡片网格列表 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
        {filteredUnits.map((unit) => {
          const leaders = getLeadersForUnit(unit);
          return (
            <div
              key={unit.id}
              onClick={() => setActiveUnit(unit)}
              className="mac-card rounded-2xl p-5 cursor-pointer flex flex-col justify-between hover:border-blue-400/40 group relative overflow-hidden"
            >
              {/* Top Row: Category & Badges */}
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-medium text-gray-500 bg-gray-100/90 px-2 py-0.5 rounded-md">
                    {unit.category}
                  </span>
                  <span
                    className={`text-[11px] font-semibold px-2 py-0.5 rounded-md border ${getLevelBadgeClass(
                      unit.level
                    )}`}
                  >
                    {unit.level}
                  </span>
                </div>

                {/* Unit Name */}
                <h3 className="font-semibold text-base text-gray-900 group-hover:text-blue-600 transition-colors leading-snug">
                  {unit.name}
                </h3>
                <p className="text-xs text-gray-500 font-mono mt-0.5">
                  {unit.shortName}
                </p>

                {/* Established Year & Info */}
                <div className="flex items-center gap-3 text-xs text-gray-500 mt-2.5">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-gray-400" />
                    <span>建制: {unit.establishedYear} 年</span>
                  </div>
                  {unit.websiteUrl && (
                    <span className="text-blue-500 hover:underline flex items-center gap-0.5">
                      官网入口
                    </span>
                  )}
                </div>

                {/* Description snippet */}
                <p className="text-xs text-gray-600 mt-3 line-clamp-2 leading-relaxed">
                  {unit.description}
                </p>
              </div>

              {/* Bottom: Leaders & Action */}
              <div className="mt-5 pt-3.5 border-t border-black/[0.05] flex items-center justify-between">
                <div className="flex items-center gap-1.5 overflow-hidden">
                  {leaders.length > 0 ? (
                    <div className="flex items-center gap-1 text-xs text-gray-700">
                      <UserCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span className="truncate">
                        现任负责人: {leaders.map((l) => l.name).join('、')}
                      </span>
                    </div>
                  ) : (
                    <span className="text-[11px] text-gray-400">点击查看职责编制详情</span>
                  )}
                </div>

                <span className="text-xs text-blue-600 flex items-center font-medium group-hover:translate-x-0.5 transition-transform shrink-0">
                  详情
                  <ChevronRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* 抽屉/模态框：单位完整介绍与编制档案 (macOS Modal) */}
      {activeUnit && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/40 backdrop-blur-xs">
          <div
            className="mac-card w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl p-6 bg-white shadow-2xl relative animate-in fade-in zoom-in-95 duration-150"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between pb-4 border-b border-black/[0.07]">
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2.5 py-0.5 rounded-full">
                    {activeUnit.category}
                  </span>
                  <span
                    className={`text-xs font-semibold px-2.5 py-0.5 rounded-full border ${getLevelBadgeClass(
                      activeUnit.level
                    )}`}
                  >
                    编制级别：{activeUnit.level}
                  </span>
                  <span className="text-xs text-gray-400">
                    成立年份：{activeUnit.establishedYear} 年
                  </span>
                </div>
                <h2 className="text-xl font-bold text-gray-900 tracking-tight">
                  {activeUnit.name}
                </h2>
                <p className="text-xs text-gray-500 font-mono mt-0.5">
                  机构别名 / 简称：{activeUnit.shortName}
                </p>
              </div>

              <button
                onClick={() => setActiveUnit(null)}
                className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 flex items-center justify-center transition-colors text-sm font-semibold"
              >
                ✕
              </button>
            </div>

            {/* Modal Body */}
            <div className="py-5 space-y-5 text-sm">
              {/* 单位简介 */}
              <div>
                <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                  机构职能与概况介绍
                </h4>
                <p className="text-gray-700 leading-relaxed bg-gray-50/80 p-3.5 rounded-xl border border-black/[0.04]">
                  {activeUnit.description}
                </p>
              </div>

              {/* 主要业务清单 */}
              <div>
                <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                  主要职责与业务范围
                </h4>
                <ul className="space-y-2">
                  {activeUnit.mainDuties.map((duty, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 text-xs text-gray-700"
                    >
                      <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{duty}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 办公地址与官网 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {activeUnit.address && (
                  <div className="flex items-start gap-2 p-3 bg-gray-50 rounded-xl border border-black/[0.04] text-xs">
                    <MapPin className="w-4 h-4 text-gray-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium text-gray-800 block">办公地址</span>
                      <span className="text-gray-600">{activeUnit.address}</span>
                    </div>
                  </div>
                )}

                {activeUnit.websiteUrl && (
                  <div className="flex items-start gap-2 p-3 bg-gray-50 rounded-xl border border-black/[0.04] text-xs">
                    <Building2 className="w-4 h-4 text-gray-400 shrink-0 mt-0.5" />
                    <div className="truncate">
                      <span className="font-medium text-gray-800 block">官方网站</span>
                      <a
                        href={activeUnit.websiteUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-blue-600 hover:underline flex items-center gap-1 font-mono"
                      >
                        {activeUnit.websiteUrl}
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                )}
              </div>

              {/* 现任领导干部 */}
              <div>
                <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                  现任主要领导干部
                </h4>
                {getLeadersForUnit(activeUnit).length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {getLeadersForUnit(activeUnit).map((leader) => (
                      <div
                        key={leader.id}
                        onClick={() => {
                          setActiveUnit(null);
                          onSelectOfficial(leader);
                        }}
                        className="p-3 rounded-xl border border-blue-100 bg-blue-50/50 hover:bg-blue-100/50 transition-colors cursor-pointer flex items-center justify-between group"
                      >
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-semibold text-gray-900 text-sm">
                              {leader.name}
                            </span>
                            <span className="text-[11px] text-blue-700 bg-blue-100/80 px-1.5 py-0.2 rounded font-medium">
                              {leader.currentRank}
                            </span>
                          </div>
                          <p className="text-xs text-gray-500 mt-0.5">
                            {leader.currentPosition}
                          </p>
                        </div>
                        <span className="text-xs text-blue-600 group-hover:translate-x-1 transition-transform">
                          查看简历 →
                        </span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-xs text-gray-400 italic">
                    暂未录入该单位现任主要领导简历档案
                  </p>
                )}
              </div>
            </div>

            {/* Modal Footer Actions */}
            <div className="pt-4 border-t border-black/[0.07] flex items-center justify-between">
              <button
                onClick={() => {
                  const uId = activeUnit.id;
                  setActiveUnit(null);
                  onNavigateToSwimlane(uId);
                }}
                className="flex items-center gap-1.5 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium rounded-xl shadow-xs transition-colors"
              >
                <span>在时空泳道中查看该单位</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => setActiveUnit(null)}
                className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-medium rounded-xl transition-colors"
              >
                关闭
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
