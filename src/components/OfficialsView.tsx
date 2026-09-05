'use client';

import React, { useState, useMemo, useEffect } from 'react';
import { Official, Unit, CareerRecord } from '../types';
import { getOfficialColor } from '../data/csrcData';
import {
  Search,
  GraduationCap,
  Briefcase,
  Calendar,
  MapPin,
  ChevronRight,
  GitCommitVertical,
  Filter,
  ArrowUpRight,
  UserCheck,
  ArrowLeft
} from 'lucide-react';
import { PositionRankBadge } from './PositionRankBadge';
import { OfficialIdPhoto } from './OfficialIdPhoto';

interface OfficialsViewProps {
  officials: Official[];
  units: Unit[];
  selectedOfficialIds: string[];
  onToggleOfficialSelection: (officialId: string) => void;
  onNavigateToSwimlaneWithOfficial: (officialId: string) => void;
  onBackToSwimlane?: () => void;
  activeOfficialId?: string | null;
  selectedUnitId?: string | null;
  onSelectUnit?: (unitId: string | null) => void;
}

const RANK_SCORE: Record<string, number> = {
  '正部级': 6,
  '副部级': 5,
  '正厅局级': 4,
  '副厅局级': 3,
  '正处级': 2,
  '副处级': 1,
};

export const OfficialsView: React.FC<OfficialsViewProps> = ({
  officials,
  units,
  selectedOfficialIds,
  onToggleOfficialSelection,
  onNavigateToSwimlaneWithOfficial,
  onBackToSwimlane,
  activeOfficialId,
  selectedUnitId = null,
  onSelectUnit,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRank, setSelectedRank] = useState<string>('all');
  const [activeOfficial, setActiveOfficial] = useState<Official | null>(() => {
    if (activeOfficialId) {
      return officials.find((o) => o.id === activeOfficialId) || officials[0] || null;
    }
    return officials[0] || null;
  });

  useEffect(() => {
    if (activeOfficialId) {
      const found = officials.find((o) => o.id === activeOfficialId);
      if (found) setActiveOfficial(found);
    }
  }, [activeOfficialId, officials]);

  // 单位映射表
  const unitMap = useMemo(() => {
    const map = new Map<string, Unit>();
    units.forEach((u) => map.set(u.id, u));
    return map;
  }, [units]);

  // 当前选中的机构对象
  const currentSelectedUnit = useMemo(() => {
    if (!selectedUnitId || selectedUnitId === 'all') return null;
    return unitMap.get(selectedUnitId) || null;
  }, [selectedUnitId, unitMap]);

  // 获取某位官员在所选机构或全局的“最高级别”
  const getHighestRankScore = (off: Official, targetUnitId?: string | null) => {
    let ranks: string[] = [];
    if (targetUnitId && targetUnitId !== 'all') {
      const unitRanks = off.careerHistory
        .filter((r) => r.unitId === targetUnitId)
        .map((r) => r.rank)
        .filter(Boolean) as string[];
      ranks = [...unitRanks];
      if (off.currentUnitId === targetUnitId) {
        ranks.push(off.currentRank);
      }
      ranks.push(off.currentRank);
    } else {
      ranks = [off.currentRank, ...off.careerHistory.map((r) => r.rank).filter(Boolean) as string[]];
    }
    const scores = ranks.map((r) => RANK_SCORE[r] || 0);
    return scores.length > 0 ? Math.max(...scores) : RANK_SCORE[off.currentRank] || 0;
  };

  // 获取官员在所选机构的任职最早起始年份（用于同级别/同职务下时间先后排序）
  const getEarliestStartYear = (off: Official, targetUnitId?: string | null) => {
    if (targetUnitId && targetUnitId !== 'all') {
      const recs = off.careerHistory.filter((r) => r.unitId === targetUnitId);
      if (recs.length > 0) {
        return Math.min(...recs.map((r) => r.startYear));
      }
    }
    return off.careerHistory.length > 0 ? Math.min(...off.careerHistory.map((r) => r.startYear)) : 9999;
  };

  // 排序算法：级别降序 -> 同职务时间先后升序 -> 出生年份
  const sortOfficialsList = (list: Official[], targetUnitId?: string | null) => {
    return [...list].sort((a, b) => {
      // 1. 最高级别从高到低 (多个级别取最高级别)
      const rankA = getHighestRankScore(a, targetUnitId);
      const rankB = getHighestRankScore(b, targetUnitId);
      if (rankB !== rankA) return rankB - rankA;

      // 2. 同级别/同职务下，按照任职时间先后顺序排序
      const yearA = getEarliestStartYear(a, targetUnitId);
      const yearB = getEarliestStartYear(b, targetUnitId);
      if (yearA !== yearB) return yearA - yearB;

      // 3. 次级按出生年份稳定排序
      return a.birthYear - b.birthYear;
    });
  };

  // 过滤并智能分组官员：在职组 与 曾任组
  const { currentServingOfficials, pastServingOfficials, allFilteredOfficials } = useMemo(() => {
    const targetUnitId = selectedUnitId && selectedUnitId !== 'all' ? selectedUnitId : null;

    // 先根据搜索词与职级进行通用过滤
    const baseFiltered = officials.filter((off) => {
      const matchSearch =
        !searchTerm ||
        off.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        off.currentPosition.toLowerCase().includes(searchTerm.toLowerCase()) ||
        off.education.some(
          (edu) =>
            edu.school.toLowerCase().includes(searchTerm.toLowerCase()) ||
            (edu.major && edu.major.toLowerCase().includes(searchTerm.toLowerCase()))
        );

      const matchRank = selectedRank === 'all' || off.currentRank === selectedRank;
      return matchSearch && matchRank;
    });

    if (targetUnitId) {
      // 筛选与所选机构相关的官员
      const unitRelated = baseFiltered.filter(
        (off) =>
          off.currentUnitId === targetUnitId ||
          off.careerHistory.some((r) => r.unitId === targetUnitId)
      );

      // 分成在职与曾任两大分组
      const currentList: Official[] = [];
      const pastList: Official[] = [];

      unitRelated.forEach((off) => {
        const isCurrentServing =
          off.currentUnitId === targetUnitId ||
          off.careerHistory.some((r) => r.unitId === targetUnitId && (r.isCurrent || r.endYear === null));

        if (isCurrentServing) {
          currentList.push(off);
        } else {
          pastList.push(off);
        }
      });

      return {
        currentServingOfficials: sortOfficialsList(currentList, targetUnitId),
        pastServingOfficials: sortOfficialsList(pastList, targetUnitId),
        allFilteredOfficials: sortOfficialsList(unitRelated, targetUnitId),
      };
    }

    // 未选具体机构时（全部机构）：全部作为主体显示，并按级别和资历严格排序
    const sorted = sortOfficialsList(baseFiltered, null);
    return {
      currentServingOfficials: sorted,
      pastServingOfficials: [],
      allFilteredOfficials: sorted,
    };
  }, [officials, searchTerm, selectedRank, selectedUnitId]);

  // 计算年龄（基准年份：2026年）
  const calculateAge = (birthYear: number) => {
    return 2026 - birthYear;
  };

  return (
    <div className="space-y-6">
      {/* 顶部搜索与过滤栏 */}
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

            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="搜索官员姓名、现任职务、毕业院校、专业..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-4 py-2 bg-black/[0.03] hover:bg-black/[0.05] focus:bg-white text-sm rounded-xl border border-transparent focus:border-blue-500/40 focus:ring-2 focus:ring-blue-500/10 transition-all outline-none"
              />
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            <div className="flex items-center gap-1.5 text-xs text-[#86868b] mr-1">
              <Filter className="w-3.5 h-3.5" />
              <span>筛选:</span>
            </div>

            {/* 机构组织筛选（与左侧侧边栏双向联动） */}
            <select
              value={selectedUnitId || 'all'}
              onChange={(e) => onSelectUnit?.(e.target.value === 'all' ? null : e.target.value)}
              className="px-3 py-1.5 bg-black/[0.03] hover:bg-black/[0.05] text-xs font-medium text-gray-700 rounded-lg border border-black/[0.06] outline-none cursor-pointer"
            >
              <option value="all">全部机构架构</option>
              {units.map((u) => (
                <option key={u.id} value={u.id}>
                  {u.tinyName || u.shortName} ({u.level.replace('局级', '')})
                </option>
              ))}
            </select>

            {/* 职级筛选 */}
            <select
              value={selectedRank}
              onChange={(e) => setSelectedRank(e.target.value)}
              className="px-3 py-1.5 bg-black/[0.03] hover:bg-black/[0.05] text-xs font-medium text-gray-700 rounded-lg border border-black/[0.06] outline-none cursor-pointer"
            >
              <option value="all">全部行政级别</option>
              <option value="正部级">正部级</option>
              <option value="副部级">副部级</option>
              <option value="正厅局级">正厅局级</option>
              <option value="副厅局级">副厅局级</option>
            </select>

            <span className="text-xs text-gray-400 ml-2">
              共 <strong className="text-gray-900">{allFilteredOfficials.length}</strong> 位干部
            </span>
          </div>
        </div>

        {/* 若选中了具体机构，展示该机构的聚焦横幅 */}
        {currentSelectedUnit && (
          <div className="mt-4 pt-3.5 border-t border-black/[0.06] flex items-center justify-between flex-wrap gap-2">
            <div className="flex items-center gap-2">
              <span className="text-lg">🏛️</span>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-sm text-gray-900">
                    {currentSelectedUnit.name}
                  </span>
                  <span className="text-[10px] text-blue-700 bg-blue-100/70 border border-blue-200 px-1.5 py-0.2 rounded font-medium">
                    {currentSelectedUnit.level}
                  </span>
                  <span className="text-xs text-gray-400">
                    建制：{currentSelectedUnit.establishedYear}年
                  </span>
                </div>
                <p className="text-[11px] text-gray-500 line-clamp-1 mt-0.5">
                  {currentSelectedUnit.description}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1.5 text-xs">
                <span className="text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-lg font-medium">
                  在职主要领导: {currentServingOfficials.length} 人
                </span>
                <span className="text-gray-600 bg-gray-100 border border-gray-200 px-2 py-0.5 rounded-lg font-medium">
                  曾在此任职: {pastServingOfficials.length} 人
                </span>
              </div>
              <button
                onClick={() => onSelectUnit?.(null)}
                className="text-xs text-gray-400 hover:text-blue-600 hover:underline ml-2"
              >
                重置查看全部
              </button>
            </div>
          </div>
        )}
      </div>

      {/* 主体两栏布局：左侧官员卡片列表，右侧 macOS Inspector 简历全景档案 */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* 左侧官员列表（根据机构实现智能两级分组与级别/任期排序） */}
        <div className="lg:col-span-5 space-y-5">
          {/* 渲染官员卡片的公用闭包 */}
          {(() => {
            const renderCard = (official: Official, isCurrentServingGroup: boolean) => {
              const isSelectedInSwimlane = selectedOfficialIds.includes(official.id);
              const isActiveInspector = activeOfficial?.id === official.id;
              const officialColor = getOfficialColor(official.id);
              const currentUnit = unitMap.get(official.currentUnitId);

              // 如果是在选定机构下且属于曾任干部，找到其在该机构的历史任职
              const pastRecordsInSelectedUnit = currentSelectedUnit
                ? official.careerHistory.filter((r) => r.unitId === currentSelectedUnit.id)
                : [];

              return (
                <div
                  key={official.id}
                  onClick={() => setActiveOfficial(official)}
                  className={`mac-card rounded-2xl p-3.5 cursor-pointer transition-all border relative overflow-hidden ${
                    isActiveInspector
                      ? 'border-blue-500/70 ring-2 ring-blue-500/15 bg-blue-50/25'
                      : 'hover:border-gray-300'
                  }`}
                >
                  {/* 官员专属左侧高亮色条 */}
                  <div
                    className="absolute left-0 top-0 bottom-0 w-1.5"
                    style={{ backgroundColor: officialColor.primary }}
                  />

                  <div className="flex items-start justify-between gap-2.5 pl-1.5">
                    <div className="flex items-start gap-3 flex-1 min-w-0">
                      {/* 核心需求二：官员标准正装免冠证件照（1寸微缩版） */}
                      <OfficialIdPhoto official={official} size="sm" />

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-1.5 flex-wrap">
                          <h3 className="font-bold text-sm sm:text-base text-gray-900 truncate">
                            {official.name}
                          </h3>
                          <PositionRankBadge rank={official.currentRank} />
                          <span className="text-[11px] text-gray-400">
                            {calculateAge(official.birthYear)}岁
                          </span>

                          {/* 机构分组标签 */}
                          {currentSelectedUnit && (
                            <span
                              className={`text-[9px] px-1.5 py-0.2 rounded-md font-medium shrink-0 ${
                                isCurrentServingGroup
                                  ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                                  : 'bg-slate-100 text-slate-600 border border-slate-200'
                              }`}
                            >
                              {isCurrentServingGroup ? '现任班子' : '曾在此任职'}
                            </span>
                          )}
                        </div>

                        <p className="text-xs text-gray-700 font-medium mt-1 leading-snug truncate">
                          {official.currentPosition}
                        </p>

                        {/* 若为曾任干部，展示其在该机构的历史任期与职务 */}
                        {!isCurrentServingGroup && pastRecordsInSelectedUnit.length > 0 && (
                          <div className="text-[10.5px] text-blue-700 bg-blue-50/90 border border-blue-200/60 px-2 py-0.5 rounded-md mt-1.5 leading-tight flex items-center gap-1">
                            <span className="font-bold shrink-0">曾任：</span>
                            <span className="truncate">
                              {pastRecordsInSelectedUnit
                                .map(
                                  (r) =>
                                    `${r.position} (${r.startYear}-${r.endYear || '至今'})`
                                )
                                .join('；')}
                            </span>
                          </div>
                        )}

                        <div className="flex flex-wrap items-center gap-2 mt-2 text-[11px] text-gray-400">
                          <span className="text-gray-600 font-medium">
                            {currentUnit?.tinyName || currentUnit?.shortName || '系统'}
                          </span>
                          <span>•</span>
                          <span className="truncate">
                            {official.education[official.education.length - 1]?.school || '高校'}
                          </span>
                          <span>•</span>
                          <span className="text-blue-600 font-mono">
                            {official.careerHistory.length}段任职
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* 快捷操作：泳道对比勾选 */}
                    <div className="flex flex-col items-end gap-1.5 shrink-0">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onToggleOfficialSelection(official.id);
                        }}
                        className={`px-2 py-1 text-[10.5px] font-medium rounded-lg transition-all flex items-center gap-1 ${
                          isSelectedInSwimlane
                            ? 'bg-blue-600 text-white shadow-xs'
                            : 'bg-black/[0.04] text-gray-600 hover:bg-black/[0.08]'
                        }`}
                        title="加入时空泳道图谱对比"
                      >
                        <GitCommitVertical className="w-3 h-3" />
                        <span>{isSelectedInSwimlane ? '已加' : '+ 泳道'}</span>
                      </button>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onNavigateToSwimlaneWithOfficial(official.id);
                        }}
                        className="text-[10px] text-gray-400 hover:text-blue-600 transition-colors flex items-center gap-0.5 mt-0.5"
                        title="单独在泳道中展开此人完整履历"
                      >
                        <span>泳道</span>
                        <ArrowUpRight className="w-2.5 h-2.5" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            };

            // 模式 A：选中了具体机构，按「在职主要领导」与「曾任干部」严格两级分组排版
            if (currentSelectedUnit) {
              return (
                <>
                  {/* 分组 1：在职领导班子 */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between px-1">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-gray-900">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 ring-4 ring-emerald-100" />
                        <span>在职主要领导班子 ({currentServingOfficials.length}人)</span>
                      </div>
                      <span className="text-[10px] text-emerald-700 bg-emerald-50 border border-emerald-200/80 px-2 py-0.5 rounded-md font-medium">
                        按级别最高优先 · 任期先后排序
                      </span>
                    </div>

                    {currentServingOfficials.length > 0 ? (
                      currentServingOfficials.map((off) => renderCard(off, true))
                    ) : (
                      <div className="p-4 bg-gray-50/60 rounded-xl text-xs text-gray-400 text-center border border-dashed border-gray-200">
                        暂无该机构当前在任班子主要领导记录
                      </div>
                    )}
                  </div>

                  {/* 分组 2：曾在此机构任职干部 */}
                  {pastServingOfficials.length > 0 && (
                    <div className="space-y-3 pt-4 border-t border-black/[0.06]">
                      <div className="flex items-center justify-between px-1">
                        <div className="flex items-center gap-1.5 text-xs font-bold text-gray-700">
                          <span className="w-2 h-2 rounded-full bg-slate-400 ring-4 ring-slate-100" />
                          <span>曾在此机构任职干部 ({pastServingOfficials.length}人)</span>
                        </div>
                        <span className="text-[10px] text-gray-500 bg-gray-100 px-2 py-0.5 rounded-md font-medium">
                          历任转出 · 级别最高优先
                        </span>
                      </div>

                      {pastServingOfficials.map((off) => renderCard(off, false))}
                    </div>
                  )}
                </>
              );
            }

            // 模式 B：全部机构模式，展示全体干部（按级别由高到低，同级别按任期先后排序）
            return (
              <div className="space-y-3">
                <div className="flex items-center justify-between px-1">
                  <span className="text-xs font-bold text-gray-800">
                    全部主要领导干部档案 ({allFilteredOfficials.length}人)
                  </span>
                  <span className="text-[10px] text-blue-600 bg-blue-50 px-2 py-0.5 rounded-md font-medium">
                    按级别由高到低 · 资历先后排序
                  </span>
                </div>

                {allFilteredOfficials.map((off) => renderCard(off, true))}
              </div>
            );
          })()}
        </div>

        {/* 右侧：活跃官员的详细履历档案全景 (macOS Inspector Detail) */}
        <div className="lg:col-span-7 sticky top-20">
          {activeOfficial ? (
            <div className="mac-card rounded-2xl p-6 bg-white border border-black/[0.06] shadow-sm space-y-6">
              {/* Profile Header */}
              <div className="flex items-start justify-between pb-5 border-b border-black/[0.06]">
                <div className="flex items-center gap-5">
                  {/* 核心需求二：官员标准正装免冠证件照（标准2寸大图，带相纸光泽与红底渐变） */}
                  <OfficialIdPhoto official={activeOfficial} size="lg" />

                  <div>
                    <div className="flex items-center gap-2.5">
                      <h2 className="text-2xl font-bold text-gray-900 tracking-tight">
                        {activeOfficial.name}
                      </h2>
                      <PositionRankBadge rank={activeOfficial.currentRank} />
                    </div>

                    <p className="text-sm font-medium text-gray-700 mt-1">
                      {activeOfficial.currentPosition}
                    </p>

                    <div className="flex items-center gap-4 text-xs text-gray-500 mt-2">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-gray-400" />
                        {activeOfficial.birthYear}年{activeOfficial.birthMonth}月生（约
                        {calculateAge(activeOfficial.birthYear)}岁）
                      </span>
                      {activeOfficial.nativePlace && (
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-gray-400" />
                          籍贯：{activeOfficial.nativePlace}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => onNavigateToSwimlaneWithOfficial(activeOfficial.id)}
                  className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium rounded-xl shadow-xs transition-colors shrink-0"
                >
                  <GitCommitVertical className="w-3.5 h-3.5" />
                  <span>在泳道中分析</span>
                </button>
              </div>

              {/* 简要评价 */}
              {activeOfficial.bioSummary && (
                <div className="bg-gray-50/80 p-3.5 rounded-xl border border-black/[0.04] text-xs leading-relaxed text-gray-700">
                  <span className="font-semibold text-gray-800 mr-1">履职特质：</span>
                  {activeOfficial.bioSummary}
                </div>
              )}

              {/* 学历与教育背景 */}
              <div>
                <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                  <GraduationCap className="w-4 h-4 text-blue-600" />
                  <span>教育背景与学位学历</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeOfficial.education.map((edu, idx) => (
                    <div
                      key={idx}
                      className="p-3 bg-gray-50/70 rounded-xl border border-black/[0.04] text-xs space-y-1"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-gray-900">
                          {edu.school}
                        </span>
                        <span className="font-medium text-blue-600 bg-blue-50 px-2 py-0.5 rounded text-[10px]">
                          {edu.degree}
                        </span>
                      </div>
                      <div className="text-gray-600">专业：{edu.major || '全日制'}</div>
                      {edu.graduationYear && (
                        <div className="text-[11px] text-gray-400">
                          毕业年份：{edu.graduationYear}年
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* 履职履历完整时间线 */}
              <div>
                <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                  <Briefcase className="w-4 h-4 text-blue-600" />
                  <span>完整履职履历（按时间演进）</span>
                </h4>

                <div className="relative pl-6 space-y-6 before:absolute before:left-2.5 before:top-2 before:bottom-2 before:w-0.5 before:bg-gray-200">
                  {activeOfficial.careerHistory.map((item, idx) => {
                    const isLatest = idx === activeOfficial.careerHistory.length - 1;
                    return (
                      <div key={item.id} className="relative group">
                        {/* Timeline Node Dot */}
                        <div
                          className={`absolute -left-6 top-1 w-3 h-3 rounded-full border-2 border-white shadow-xs ${
                            isLatest ? 'bg-blue-600 ring-2 ring-blue-200' : 'bg-gray-400'
                          }`}
                        />

                        {/* Record Content */}
                        <div
                          className={`p-3.5 rounded-xl border transition-colors ${
                            item.isDerived
                              ? 'bg-amber-50/20 hover:bg-amber-50/40 border-dashed border-amber-300/70 shadow-2xs'
                              : 'bg-gray-50/60 hover:bg-gray-50 border-black/[0.04]'
                          }`}
                        >
                          <div className="flex flex-wrap items-center justify-between gap-1 mb-1">
                            <div className="flex items-center gap-1.5">
                              <span className="font-semibold text-sm text-gray-900">
                                {item.unitName}
                                {item.department ? ` · ${item.department}` : ''}
                              </span>
                              {item.isDerived && (
                                <span className="text-[9.5px] font-medium text-amber-800 bg-amber-100/90 border border-amber-300/80 px-1.5 py-0.2 rounded-md">
                                  📰 新闻推导
                                </span>
                              )}
                            </div>
                            <span className="text-xs font-mono font-medium text-blue-600">
                              {item.startYear}
                              {item.startMonth ? `.${item.startMonth}` : ''} -{' '}
                              {item.endYear
                                ? `${item.endYear}${item.endMonth ? `.${item.endMonth}` : ''}`
                                : '至今'}
                            </span>
                          </div>

                          <div className="flex items-center gap-2 mt-1 flex-wrap">
                            <span className="text-xs font-semibold text-gray-900">
                              {item.position}
                            </span>
                            <PositionRankBadge rank={item.rank} />
                          </div>

                          {item.sourceNote && (
                            <div className="text-[11px] text-amber-800 bg-amber-50/80 border border-amber-200/60 px-2 py-1 rounded-md mt-2 leading-tight">
                              <span className="font-medium">推导佐证：</span>
                              {item.sourceNote}
                            </div>
                          )}

                          {item.notes && (
                            <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                              {item.notes}
                            </p>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ) : (
            <div className="mac-card rounded-2xl p-12 text-center text-gray-400">
              请从左侧选择一位领导干部查看详细履历档案
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
