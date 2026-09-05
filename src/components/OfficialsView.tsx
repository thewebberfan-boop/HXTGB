'use client';

import React, { useState, useMemo, useEffect } from 'react';
import { Official, Unit } from '../types';
import {
  getOfficialColor,
  isOfficialActiveInUnit,
  isOfficialPastInUnit,
  sortOfficialsByRankAndSeniority,
} from '../data/csrcData';
import {
  GraduationCap,
  Briefcase,
  Calendar,
  MapPin,
  GitCommitVertical,
  ArrowLeft,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Check,
  Building,
  Sparkles,
  ShieldCheck,
  X
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

  const unitMap = useMemo(() => {
    const map = new Map<string, Unit>();
    units.forEach((u) => map.set(u.id, u));
    return map;
  }, [units]);

  const currentSelectedUnit = useMemo(() => {
    if (!selectedUnitId || selectedUnitId === 'all') return null;
    return unitMap.get(selectedUnitId) || null;
  }, [selectedUnitId, unitMap]);

  // 获取当前选中机构的在职班子与曾任干部，严格按职级资历降序排序
  const currentUnitOfficials = useMemo(() => {
    if (!selectedUnitId || selectedUnitId === 'all') return null;
    const currentServing = officials
      .filter((off) => isOfficialActiveInUnit(off, selectedUnitId))
      .sort(sortOfficialsByRankAndSeniority);
    const pastServing = officials
      .filter((off) => isOfficialPastInUnit(off, selectedUnitId))
      .sort(sortOfficialsByRankAndSeniority);
    return {
      currentServing,
      pastServing,
      all: [...currentServing, ...pastServing],
    };
  }, [selectedUnitId, officials]);

  // 当选中机构时，候选干部列表严格按照：在职干部(按职级资历降序) -> 曾任干部(按职级资历降序)
  const candidateOfficials = useMemo(() => {
    if (currentUnitOfficials) {
      return currentUnitOfficials.all;
    }
    return officials;
  }, [currentUnitOfficials, officials]);

  useEffect(() => {
    if (selectedUnitId && selectedUnitId !== 'all') {
      const isServingInUnit = activeOfficial && isOfficialActiveInUnit(activeOfficial, selectedUnitId);
      const isPastInUnit = activeOfficial && isOfficialPastInUnit(activeOfficial, selectedUnitId);

      const serving = officials
        .filter((off) => isOfficialActiveInUnit(off, selectedUnitId))
        .sort(sortOfficialsByRankAndSeniority);
      const past = officials
        .filter((off) => isOfficialPastInUnit(off, selectedUnitId))
        .sort(sortOfficialsByRankAndSeniority);

      // 如果当前干部不属于该机构，或当前干部为曾任但机构有在任班子（且非外部指定干部跳转），默认定位到首位在职干部
      if (!isServingInUnit && !isPastInUnit) {
        if (serving.length > 0) {
          setActiveOfficial(serving[0]);
        } else if (past.length > 0) {
          setActiveOfficial(past[0]);
        }
      } else if (!isServingInUnit && serving.length > 0 && !activeOfficialId) {
        setActiveOfficial(serving[0]);
      }
    }
  }, [selectedUnitId, officials, activeOfficialId]);

  const currentIndex = candidateOfficials.findIndex((o) => o.id === activeOfficial?.id);
  const handlePrevOfficial = () => {
    if (candidateOfficials.length === 0) return;
    if (currentIndex > 0) {
      setActiveOfficial(candidateOfficials[currentIndex - 1]);
    } else {
      setActiveOfficial(candidateOfficials[candidateOfficials.length - 1]);
    }
  };
  const handleNextOfficial = () => {
    if (candidateOfficials.length === 0) return;
    if (currentIndex >= 0 && currentIndex < candidateOfficials.length - 1) {
      setActiveOfficial(candidateOfficials[currentIndex + 1]);
    } else {
      setActiveOfficial(candidateOfficials[0]);
    }
  };

  const calculateAge = (birthYear: number) => {
    return 2026 - birthYear;
  };

  const isSelectedInSwimlane = activeOfficial
    ? selectedOfficialIds.includes(activeOfficial.id)
    : false;
  const currentUnit = activeOfficial ? unitMap.get(activeOfficial.currentUnitId) : null;

  return (
    <div className="space-y-6">
      {/* 若从侧边栏或筛选中选中了具体机构，呈现机构班子快捷选择栏 */}
      {currentSelectedUnit && currentUnitOfficials && (
        <div className="mac-card rounded-2xl p-4 bg-white/95 border border-black/[0.06] shadow-xs space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-base">🏛️</span>
              <div>
                <span className="font-bold text-sm text-gray-900 mr-2">
                  {currentSelectedUnit.name}
                </span>
                <span className="text-[10px] text-blue-700 bg-blue-50 border border-blue-200 px-1.5 py-0.2 rounded font-medium">
                  {currentSelectedUnit.level}
                </span>
              </div>
            </div>
            <button
              onClick={() => onSelectUnit?.(null)}
              className="text-xs text-blue-600 hover:text-blue-800 flex items-center gap-1 font-medium"
            >
              <span>清除机构定位显示全部干部</span>
              <X className="w-3 h-3" />
            </button>
          </div>

          {/* 在职班子与曾任干部快捷切换 Pills */}
          <div className="flex flex-wrap items-center gap-2 pt-1 border-t border-black/[0.04]">
            <span className="text-[11px] font-semibold text-gray-400 shrink-0">在职班子:</span>
            {currentUnitOfficials.currentServing.map((off) => {
              const isActive = activeOfficial?.id === off.id;
              return (
                <button
                  key={off.id}
                  onClick={() => setActiveOfficial(off)}
                  className={`px-3 py-1 rounded-xl text-xs font-medium transition-all flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-xs scale-105'
                      : 'bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200/80'
                  }`}
                >
                  <span>{off.name}</span>
                  <span className={`text-[10px] ${isActive ? 'text-blue-100' : 'text-emerald-600'}`}>
                    {off.currentRank.replace('局级', '')}
                  </span>
                </button>
              );
            })}
            {currentUnitOfficials.currentServing.length === 0 && (
              <span className="text-xs text-gray-400 italic">暂无在职班子记录</span>
            )}

            {currentUnitOfficials.pastServing.length > 0 && (
              <>
                <span className="text-gray-300 mx-1">|</span>
                <span className="text-[11px] font-semibold text-gray-400 shrink-0">曾在此任职:</span>
                {currentUnitOfficials.pastServing.map((off) => {
                  const isActive = activeOfficial?.id === off.id;
                  return (
                    <button
                      key={off.id}
                      onClick={() => setActiveOfficial(off)}
                      className={`px-3 py-1 rounded-xl text-xs font-medium transition-all flex items-center gap-1.5 ${
                        isActive
                          ? 'bg-blue-600 text-white shadow-xs scale-105'
                          : 'bg-gray-100 hover:bg-gray-200 text-gray-700 border border-black/[0.05]'
                      }`}
                    >
                      <span>{off.name}</span>
                      <span className={`text-[10px] ${isActive ? 'text-blue-100' : 'text-gray-400'}`}>
                        {off.currentRank.replace('局级', '')}
                      </span>
                    </button>
                  );
                })}
              </>
            )}
          </div>
        </div>
      )}

      {/* 核心改动：全屏宽幅全息干部档案看板（彻底移除了冗余的左侧41人列表列，空间完全留给详细履历） */}
      {activeOfficial ? (
        <div className="space-y-6">
          {/* 1. 干部履历概貌首长卡 (Hero Profile Banner) */}
          <div className="mac-card rounded-2xl p-6 sm:p-8 border border-black/[0.08] bg-white shadow-sm relative overflow-hidden">
            <div className="flex flex-col sm:flex-row items-start justify-between gap-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 flex-1 min-w-0">
                {/* 干部标准 2 寸免冠证件照 */}
                <OfficialIdPhoto official={activeOfficial} size="lg" />

                <div className="space-y-2 flex-1 min-w-0">
                  <div className="flex items-center gap-2.5 flex-wrap">
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
                      {activeOfficial.name}
                    </h2>
                    <PositionRankBadge rank={activeOfficial.currentRank} />
                    <span className="text-xs text-gray-500 bg-gray-100 px-2.5 py-0.5 rounded-lg font-mono">
                      {calculateAge(activeOfficial.birthYear)}岁
                    </span>

                    {/* 履职在任/离任/退休/处分状态徽标 */}
                    {activeOfficial.servingStatus === 'investigated' ? (
                      <span className="text-xs font-bold text-rose-800 bg-rose-50 border border-rose-200 px-2.5 py-0.5 rounded-lg flex items-center gap-1.5 shadow-2xs">
                        <span className="w-2 h-2 rounded-full bg-rose-600 animate-pulse" />
                        <span>{activeOfficial.servingStatusLabel || '审查调查 / 撤职处分'}</span>
                      </span>
                    ) : activeOfficial.servingStatus === 'retired' ? (
                      <span className="text-xs font-bold text-slate-700 bg-slate-100 border border-slate-200 px-2.5 py-0.5 rounded-lg flex items-center gap-1.5 shadow-2xs">
                        <span>🏛️</span>
                        <span>{activeOfficial.servingStatusLabel || '正常退休'}</span>
                      </span>
                    ) : activeOfficial.servingStatus === 'transferred' ? (
                      <span className="text-xs font-bold text-indigo-700 bg-indigo-50 border border-indigo-200 px-2.5 py-0.5 rounded-lg flex items-center gap-1.5 shadow-2xs">
                        <span>🔄</span>
                        <span>{activeOfficial.servingStatusLabel || '调离系统'}</span>
                      </span>
                    ) : (
                      <span className="text-xs font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-lg flex items-center gap-1.5 shadow-2xs">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        <span>现任在职</span>
                      </span>
                    )}
                  </div>

                  <p className="text-base sm:text-lg font-semibold text-gray-800">
                    {activeOfficial.currentPosition}
                  </p>

                  {/* 离任、退休或审查处分事实说明卡 */}
                  {activeOfficial.servingStatusNote && activeOfficial.servingStatus !== 'serving' && (
                    <div
                      className={`p-3 rounded-xl text-xs leading-relaxed border my-1.5 ${
                        activeOfficial.servingStatus === 'investigated'
                          ? 'bg-rose-50/90 border-rose-200/90 text-rose-900 shadow-2xs'
                          : activeOfficial.servingStatus === 'retired'
                          ? 'bg-slate-50 border-slate-200 text-slate-700'
                          : 'bg-blue-50/80 border-blue-200 text-blue-900'
                      }`}
                    >
                      <span className="font-bold mr-1.5">
                        {activeOfficial.servingStatus === 'investigated'
                          ? '⚠️ 纪检监察审查/处分官方通报：'
                          : activeOfficial.servingStatus === 'retired'
                          ? '🏛️ 离任/退休事实：'
                          : 'ℹ️ 职务调动/变动情况：'}
                      </span>
                      <span>{activeOfficial.servingStatusNote}</span>
                    </div>
                  )}

                  <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500 pt-1">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-gray-400" />
                      {activeOfficial.birthYear}年{activeOfficial.birthMonth}月生
                    </span>

                    {activeOfficial.nativePlace && (
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-gray-400" />
                        籍贯：{activeOfficial.nativePlace}
                      </span>
                    )}

                    <span className="flex items-center gap-1">
                      <Building className="w-3.5 h-3.5 text-gray-400" />
                      编制归属：{currentUnit?.name || '中国证监会系统'}
                    </span>

                    {activeOfficial.basicInfoConfidence && (
                      <span className="flex items-center gap-1.5 pl-1 border-l border-black/[0.08]">
                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span className="text-gray-400">信息置信度：</span>
                        <span
                          className={`px-1.5 py-0.5 rounded text-[10.5px] font-semibold ${
                            activeOfficial.basicInfoConfidence.level === 'high'
                              ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                              : activeOfficial.basicInfoConfidence.level === 'medium'
                              ? 'bg-blue-50 text-blue-700 border border-blue-200'
                              : 'bg-amber-50 text-amber-700 border border-amber-200'
                          }`}
                          title={`信源依据：${activeOfficial.basicInfoConfidence.source || '官方档案'}`}
                        >
                          {activeOfficial.basicInfoConfidence.score}% · {activeOfficial.basicInfoConfidence.label}
                        </span>
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* 右侧泳道动作大按钮 */}
              <div className="flex flex-col items-stretch sm:items-end gap-2.5 shrink-0 w-full sm:w-auto">
                <button
                  onClick={() => onNavigateToSwimlaneWithOfficial(activeOfficial.id)}
                  className="flex items-center justify-center gap-2 px-5 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-sm font-semibold shadow-sm transition-all hover:scale-[1.02] active:scale-95"
                >
                  <GitCommitVertical className="w-4 h-4" />
                  <span>在时空演进泳道中分析</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onToggleOfficialSelection(activeOfficial.id)}
                  className={`flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl text-xs font-medium border transition-colors ${
                    isSelectedInSwimlane
                      ? 'bg-blue-50 text-blue-700 border-blue-200'
                      : 'bg-gray-50 hover:bg-gray-100 text-gray-700 border-black/[0.05]'
                  }`}
                >
                  <GitCommitVertical className="w-3.5 h-3.5" />
                  <span>{isSelectedInSwimlane ? '已加入泳道对比池' : '+ 加入泳道对比池'}</span>
                  {isSelectedInSwimlane && <Check className="w-3.5 h-3.5 text-blue-600" />}
                </button>
              </div>
            </div>
          </div>

          {/* 2. 履职特质与评价 */}
          {activeOfficial.bioSummary && (
            <div className="mac-card rounded-2xl p-5 sm:p-6 border border-black/[0.08] bg-white shadow-xs space-y-2">
              <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-blue-600" />
                <span>履职特质与业务擅长</span>
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed bg-gray-50/80 p-4 rounded-xl border border-black/[0.04]">
                {activeOfficial.bioSummary}
              </p>
            </div>
          )}

          {/* 3. 教育背景与学历学位 (宽幅网格) */}
          <div className="mac-card rounded-2xl p-6 border border-black/[0.08] bg-white shadow-xs space-y-4">
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider flex items-center gap-1.5">
              <GraduationCap className="w-4 h-4 text-blue-600" />
              <span>教育背景与学位学历</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5">
              {activeOfficial.education.map((edu, idx) => (
                <div
                  key={idx}
                  className="p-4 bg-gray-50/80 rounded-xl border border-black/[0.04] text-xs space-y-1.5 hover:bg-blue-50/20 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-sm text-gray-900">
                      {edu.school}
                    </span>
                    <span className="font-medium text-blue-700 bg-blue-100/80 px-2 py-0.5 rounded text-[10.5px]">
                      {edu.degree}
                    </span>
                  </div>
                  <div className="text-gray-700 font-medium">专业方向：{edu.major || '全日制'}</div>
                  {edu.graduationYear && (
                    <div className="text-[11px] text-gray-400 font-mono">
                      毕业年份：{edu.graduationYear} 年
                    </div>
                  )}
                  {edu.confidence && (
                    <div className="pt-2 mt-2 border-t border-black/[0.04] space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] text-gray-400 font-medium">考证置信度</span>
                        <span
                          className={`px-1.5 py-0.2 rounded text-[9.5px] font-semibold ${
                            edu.confidence.level === 'high'
                              ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                              : edu.confidence.level === 'medium'
                              ? 'bg-blue-50 text-blue-700 border border-blue-200'
                              : 'bg-amber-50 text-amber-700 border border-amber-200'
                          }`}
                        >
                          {edu.confidence.score}% · {edu.confidence.label}
                        </span>
                      </div>
                      {edu.confidence.source && (
                        <div className="text-[10px] text-gray-500 truncate" title={edu.confidence.source}>
                          信源：{edu.confidence.source}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* 4. 完整履职履历时间线 (宽幅全景时间轴) */}
          <div className="mac-card rounded-2xl p-6 sm:p-8 border border-black/[0.08] bg-white shadow-xs space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-black/[0.06]">
              <h3 className="text-sm font-bold text-gray-900 tracking-tight flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-blue-600" />
                <span>完整履职履历与任职演进（共 {activeOfficial.careerHistory.length} 段履职记录）</span>
              </h3>
              <span className="text-xs text-gray-400">
                按任职时间先后顺序完整展开
              </span>
            </div>

            {/* 置信度评价体系图例 */}
            <div className="p-3 bg-gray-50/90 rounded-xl border border-black/[0.04] flex flex-wrap items-center justify-between gap-2 text-xs text-gray-600">
              <div className="flex items-center gap-2 font-medium text-gray-700">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>履职考据置信度标准：</span>
              </div>
              <div className="flex flex-wrap items-center gap-3 text-[11px]">
                <div className="flex items-center gap-1.5">
                  <span className="px-1.5 py-0.2 rounded bg-emerald-100 text-emerald-800 font-semibold border border-emerald-300">
                    95%+ · 官方确证
                  </span>
                  <span className="text-gray-400">国务院任免/法定公示/公报</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="px-1.5 py-0.2 rounded bg-blue-100 text-blue-800 font-semibold border border-blue-300">
                    85%+ · 权威财媒
                  </span>
                  <span className="text-gray-400">《财新》/证券时报头版要闻</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="px-1.5 py-0.2 rounded bg-amber-100 text-amber-800 font-semibold border border-amber-300">
                    70%+ · 新闻推导
                  </span>
                  <span className="text-gray-400">公开行业活动/通报反推</span>
                </div>
              </div>
            </div>

            <div className="relative pl-7 sm:pl-8 space-y-6 before:absolute before:left-3 before:top-3 before:bottom-3 before:w-0.5 before:bg-gray-200">
              {activeOfficial.careerHistory.map((item, idx) => {
                const isLatest = idx === activeOfficial.careerHistory.length - 1;
                return (
                  <div key={item.id} className="relative group">
                    {/* Timeline Node Dot */}
                    <div
                      className={`absolute -left-7 sm:-left-8 top-1.5 w-3.5 h-3.5 rounded-full border-2 border-white shadow-xs ${
                        isLatest ? 'bg-blue-600 ring-4 ring-blue-100' : 'bg-gray-400'
                      }`}
                    />

                    {/* Record Card */}
                    <div
                      className={`p-4 sm:p-5 rounded-2xl border transition-all ${
                        item.isDerived
                          ? 'bg-amber-50/25 hover:bg-amber-50/45 border-dashed border-amber-300/80 shadow-2xs'
                          : 'bg-gray-50/70 hover:bg-gray-50/90 border-black/[0.04]'
                      }`}
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="font-bold text-base text-gray-900">
                            {item.unitName}
                            {item.department ? ` · ${item.department}` : ''}
                          </span>
                          {item.isDerived && (
                            <span className="text-[10px] font-medium text-amber-800 bg-amber-100/90 border border-amber-300 px-2 py-0.5 rounded-md">
                              📰 新闻推导
                            </span>
                          )}
                        </div>

                        <span className="text-xs font-mono font-semibold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-lg">
                          {item.startYear}
                          {item.startMonth ? `.${item.startMonth}` : ''} -{' '}
                          {item.endYear
                            ? `${item.endYear}${item.endMonth ? `.${item.endMonth}` : ''}`
                            : '至今'}
                        </span>
                      </div>

                      <div className="flex items-center gap-2.5 mt-1.5 flex-wrap">
                        <span className="text-sm font-semibold text-gray-800">
                          {item.position}
                        </span>
                        <PositionRankBadge rank={item.rank} />
                      </div>

                      {/* 置信度评价与信源依据 */}
                      {item.confidence && (
                        <div className="mt-3 p-3 rounded-xl bg-white/95 border border-black/[0.05] space-y-1 text-xs shadow-2xs">
                          <div className="flex items-center justify-between">
                            <span className="font-semibold text-gray-600 text-[11px] flex items-center gap-1">
                              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                              履历考据置信度
                            </span>
                            <span
                              className={`px-2 py-0.5 rounded-md font-bold text-[10.5px] ${
                                item.confidence.level === 'high'
                                  ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                                  : item.confidence.level === 'medium'
                                  ? 'bg-blue-100 text-blue-800 border border-blue-300'
                                  : 'bg-amber-100 text-amber-800 border border-amber-300'
                              }`}
                            >
                              {item.confidence.score}% · {item.confidence.label}
                            </span>
                          </div>
                          {item.confidence.source && (
                            <div className="text-[11px] text-gray-600 leading-relaxed pt-0.5">
                              <span className="font-medium text-gray-400">信源依据：</span>
                              {item.confidence.source}
                            </div>
                          )}
                        </div>
                      )}

                      {item.sourceNote && !item.confidence && (
                        <div className="text-xs text-amber-800 bg-amber-50/90 border border-amber-200/80 px-3 py-1.5 rounded-xl mt-3 leading-relaxed">
                          <span className="font-bold">推导佐证依据：</span>
                          {item.sourceNote}
                        </div>
                      )}

                      {item.notes && (
                        <p className="text-xs text-gray-600 mt-2.5 leading-relaxed bg-white/70 p-2.5 rounded-xl border border-black/[0.03]">
                          {item.notes}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* 5. 底部横幅快捷跳转 */}
          <div className="mac-card rounded-2xl p-4 sm:p-5 border border-black/[0.06] bg-gray-50 flex items-center justify-between">
            <button
              onClick={() => onNavigateToSwimlaneWithOfficial(activeOfficial.id)}
              className="flex items-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-xl shadow-xs transition-colors"
            >
              <GitCommitVertical className="w-3.5 h-3.5" />
              <span>在时空演进泳道中展开该干部的演进轨迹</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            {onBackToSwimlane && (
              <button
                onClick={onBackToSwimlane}
                className="px-4 py-2 bg-white hover:bg-gray-100 text-gray-700 text-xs font-medium rounded-xl border border-black/[0.06] transition-colors"
              >
                返回时空泳道
              </button>
            )}
          </div>
        </div>
      ) : (
        <div className="mac-card rounded-2xl p-16 text-center text-gray-400 text-sm">
          请从左侧选择一位领导干部查看详细档案
        </div>
      )}
    </div>
  );
};
