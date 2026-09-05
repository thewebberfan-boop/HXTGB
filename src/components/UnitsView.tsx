'use client';

import React, { useState, useMemo, useEffect } from 'react';
import { Unit, Official, UnitLevel } from '../types';
import {
  Building2,
  ExternalLink,
  Calendar,
  MapPin,
  UserCheck,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  GitCommitVertical,
  Building,
  Users,
  History,
  ShieldCheck,
  Check
} from 'lucide-react';
import { PositionRankBadge } from './PositionRankBadge';
import { OfficialIdPhoto } from './OfficialIdPhoto';
import {
  isOfficialActiveInUnit,
  isOfficialPastInUnit,
  sortOfficialsByRankAndSeniority
} from '../data/csrcData';

interface UnitsViewProps {
  units: Unit[];
  officials: Official[];
  onSelectOfficial: (official: Official) => void;
  onNavigateToSwimlane: (unitId?: string) => void;
  onBackToSwimlane?: () => void;
  initialUnitId?: string | null;
  initialOfficialId?: string | null;
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
  initialOfficialId,
  selectedUnitId,
  onSelectUnit,
}) => {
  // 当前在看板详细查看的单位
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

  // 1. 获取当前单位所有在职领导干部（严格区分：现任在任班子）
  const servingLeaders = useMemo(() => {
    if (!activeUnit) return [];
    return officials
      .filter((off) => isOfficialActiveInUnit(off, activeUnit.id))
      .sort(sortOfficialsByRankAndSeniority);
  }, [activeUnit, officials]);

  // 2. 获取当前单位所有曾任/历任领导干部（历史曾在此任职）
  const pastLeaders = useMemo(() => {
    if (!activeUnit) return [];
    return officials
      .filter((off) => isOfficialPastInUnit(off, activeUnit.id))
      .sort(sortOfficialsByRankAndSeniority);
  }, [activeUnit, officials]);

  // 3. 标签切换状态：'all' | 'serving' | 'past'
  const [officialTab, setOfficialTab] = useState<'all' | 'serving' | 'past'>('all');

  // 4. 核心需求二：默认官员定位（如果不是跳转进来，请默认定位在“在职”的官员）
  const [focusedOfficialId, setFocusedOfficialId] = useState<string | null>(() => {
    if (initialOfficialId) return initialOfficialId;
    return servingLeaders[0]?.id || pastLeaders[0]?.id || null;
  });

  useEffect(() => {
    if (initialOfficialId) {
      const exists = [...servingLeaders, ...pastLeaders].some((o) => o.id === initialOfficialId);
      if (exists) {
        setFocusedOfficialId(initialOfficialId);
        return;
      }
    }
    // 不是跳转进来或该干部不属于当前单位，默认定位在“在职”第一位官员
    setFocusedOfficialId(servingLeaders[0]?.id || pastLeaders[0]?.id || null);
  }, [activeUnit?.id, initialOfficialId, servingLeaders, pastLeaders]);

  const displayedLeaders = useMemo(() => {
    if (officialTab === 'serving') return servingLeaders;
    if (officialTab === 'past') return pastLeaders;
    return [...servingLeaders, ...pastLeaders];
  }, [officialTab, servingLeaders, pastLeaders]);

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
      {/* 全屏宽幅全息单位档案看板 */}
      {activeUnit ? (
        <div className="space-y-6">
          {/* 1. 单位概貌首长卡 (Hero Dossier Banner) */}
          <div className="mac-card rounded-2xl p-6 sm:p-8 border border-black/[0.08] bg-white shadow-sm relative overflow-hidden">
            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
              <div className="space-y-3 flex-1">
                {/* 徽章行 */}
                <div className="flex items-center gap-2.5 flex-wrap">
                  <span className="text-xs font-semibold text-blue-800 bg-blue-50 border border-blue-200/80 px-3 py-1 rounded-lg shadow-2xs">
                    {activeUnit.category}
                  </span>
                  <span
                    className={`text-xs font-semibold px-3 py-1 rounded-lg border shadow-2xs ${getLevelBadgeClass(
                      activeUnit.level
                    )}`}
                  >
                    编制级别：{activeUnit.level}
                  </span>
                  <span className="text-xs text-gray-500 bg-gray-100 px-2.5 py-1 rounded-lg flex items-center gap-1 font-mono">
                    <Calendar className="w-3.5 h-3.5 text-gray-400" />
                    建制成立：{activeUnit.establishedYear} 年
                  </span>
                  {activeUnit.address && (
                    <span className="hidden sm:flex text-xs text-gray-500 bg-gray-100 px-2.5 py-1 rounded-lg items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-gray-400" />
                      {activeUnit.address}
                    </span>
                  )}
                </div>

                {/* 单位正式名称 */}
                <div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight leading-tight">
                    {activeUnit.name}
                  </h2>
                  <p className="text-sm text-gray-500 font-mono mt-1 flex items-center gap-2">
                    <span>机构简称与代号：{activeUnit.shortName}</span>
                    {activeUnit.tinyName && (
                      <span className="text-blue-600 font-medium">
                        （泳道列头微标：{activeUnit.tinyName}）
                      </span>
                    )}
                  </p>
                </div>
              </div>

              {/* 右侧泳道快捷大按钮 */}
              <div className="flex flex-col sm:flex-row lg:flex-col items-stretch sm:items-center lg:items-end gap-2 shrink-0">
                <button
                  onClick={() => onNavigateToSwimlane(activeUnit.id)}
                  className="flex items-center justify-center gap-2 px-5 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-sm font-semibold shadow-sm transition-all hover:scale-[1.02] active:scale-95"
                >
                  <GitCommitVertical className="w-4 h-4" />
                  <span>在时空演进泳道中展开</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                {activeUnit.websiteUrl && (
                  <a
                    href={activeUnit.websiteUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-1.5 px-4 py-2 bg-gray-50 hover:bg-gray-100 text-gray-700 hover:text-blue-600 text-xs font-medium rounded-xl border border-black/[0.05] transition-colors"
                  >
                    <span>访问官方网站主页</span>
                    <ExternalLink className="w-3.5 h-3.5 text-gray-400" />
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* 2. 核心职能与主要法定职责（并排双栏或自适应宽卡片） */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* 机构定位与概况介绍 (5列) */}
            <div className="lg:col-span-5 mac-card rounded-2xl p-6 border border-black/[0.08] bg-white shadow-xs space-y-4">
              <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider flex items-center gap-1.5">
                <Building2 className="w-4 h-4 text-blue-600" />
                <span>机构定位与概况介绍</span>
              </h3>
              <div className="bg-gray-50/80 p-4 rounded-xl border border-black/[0.04] text-sm text-gray-700 leading-relaxed space-y-3">
                <p className="indent-0">{activeUnit.description}</p>
              </div>

              {/* 机构基本属性列表 */}
              <div className="pt-3 border-t border-black/[0.05] space-y-2.5 text-xs">
                <div className="flex items-center justify-between py-1">
                  <span className="text-gray-400">组织归属体系</span>
                  <span className="font-semibold text-gray-800">{activeUnit.category}</span>
                </div>
                <div className="flex items-center justify-between py-1">
                  <span className="text-gray-400">法定编制级别</span>
                  <span className="font-semibold text-gray-800">{activeUnit.level}</span>
                </div>
                <div className="flex items-center justify-between py-1">
                  <span className="text-gray-400">建制成立年份</span>
                  <span className="font-mono text-gray-800">{activeUnit.establishedYear} 年</span>
                </div>
                {activeUnit.address && (
                  <div className="flex items-start justify-between py-1 gap-2">
                    <span className="text-gray-400 shrink-0">办公所在地</span>
                    <span className="text-gray-700 text-right">{activeUnit.address}</span>
                  </div>
                )}
              </div>
            </div>

            {/* 主要职责与业务范围 (7列) */}
            <div className="lg:col-span-7 mac-card rounded-2xl p-6 border border-black/[0.08] bg-white shadow-xs space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-600" />
                  <span>主要法定职责与业务范围 ({activeUnit.mainDuties.length}项核心职能)</span>
                </h3>
                <span className="text-[11px] text-gray-400">依据证监会三定方案与章程规定</span>
              </div>

              <div className="space-y-2.5">
                {activeUnit.mainDuties.map((duty, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-3 rounded-xl bg-gray-50/70 border border-black/[0.03] text-sm text-gray-700 leading-relaxed hover:bg-blue-50/20 transition-colors"
                  >
                    <div className="w-5 h-5 rounded-md bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                      {idx + 1}
                    </div>
                    <span>{duty}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 3. 单位领导干部档案看板：严格区分「在任领导班子」与「历任/曾任干部」 */}
          <div className="mac-card rounded-2xl p-6 sm:p-7 border border-black/[0.08] bg-white shadow-xs space-y-5">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-4 border-b border-black/[0.06] gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shadow-2xs">
                  <UserCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 tracking-tight flex items-center gap-2">
                    <span>机构干部任职档案</span>
                    <span className="text-xs text-gray-500 font-normal">
                      (在职班子 {servingLeaders.length} 人 · 历任曾任 {pastLeaders.length} 人)
                    </span>
                  </h3>
                  <p className="text-xs text-gray-500 mt-0.5">
                    严格区分当前在任的领导班子与历史曾任干部，支持快速筛选与全息履历穿梭
                  </p>
                </div>
              </div>

              {/* 分组筛选 Pills */}
              <div className="flex items-center gap-1.5 p-1 bg-black/[0.03] rounded-xl border border-black/[0.04] shrink-0 text-xs">
                <button
                  onClick={() => setOfficialTab('all')}
                  className={`px-3 py-1 rounded-lg font-semibold transition-all ${
                    officialTab === 'all'
                      ? 'bg-white text-gray-900 shadow-2xs'
                      : 'text-gray-500 hover:text-gray-800'
                  }`}
                >
                  全部干部 ({servingLeaders.length + pastLeaders.length})
                </button>
                <button
                  onClick={() => setOfficialTab('serving')}
                  className={`px-3 py-1 rounded-lg font-semibold transition-all flex items-center gap-1 ${
                    officialTab === 'serving'
                      ? 'bg-emerald-600 text-white shadow-2xs'
                      : 'text-emerald-700 hover:text-emerald-800'
                  }`}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-300" />
                  <span>在任班子 ({servingLeaders.length})</span>
                </button>
                <button
                  onClick={() => setOfficialTab('past')}
                  className={`px-3 py-1 rounded-lg font-semibold transition-all flex items-center gap-1 ${
                    officialTab === 'past'
                      ? 'bg-gray-700 text-white shadow-2xs'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <span>历任/曾任 ({pastLeaders.length})</span>
                </button>
              </div>
            </div>

            {/* 干部卡片网格 */}
            {displayedLeaders.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 pt-1">
                {displayedLeaders.map((leader) => {
                  const isServing = isOfficialActiveInUnit(leader, activeUnit.id);
                  const isFocused = leader.id === focusedOfficialId;
                  const histRecord = leader.careerHistory.find(
                    (r) =>
                      r.unitId === activeUnit.id ||
                      (activeUnit.id === 'csrc-main' && r.unitId.startsWith('csrc-'))
                  );

                  return (
                    <div
                      key={leader.id}
                      onClick={() => setFocusedOfficialId(leader.id)}
                      className={`p-4 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between group relative overflow-hidden shadow-2xs ${
                        isFocused
                          ? 'ring-2 ring-blue-500 border-blue-500 bg-blue-50/40 shadow-xs'
                          : isServing
                          ? 'border-emerald-200/80 bg-white hover:border-blue-400/80 hover:bg-blue-50/20'
                          : 'border-black/[0.06] bg-gray-50/60 hover:border-gray-300 hover:bg-gray-100/60'
                      }`}
                    >
                      <div>
                        {/* 状态徽标行 */}
                        <div className="flex items-center justify-between gap-1 mb-2.5">
                          {isServing ? (
                            <span className="text-[10px] font-bold text-emerald-800 bg-emerald-100/90 border border-emerald-300 px-2 py-0.5 rounded-md flex items-center gap-1">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                              <span>现任在职</span>
                            </span>
                          ) : (
                            <span
                              className={`text-[10px] font-bold px-2 py-0.5 rounded-md border truncate max-w-[170px] ${
                                leader.servingStatus === 'investigated'
                                  ? 'text-rose-900 bg-rose-100/90 border-rose-300'
                                  : leader.servingStatus === 'retired'
                                  ? 'text-slate-800 bg-slate-100 border-slate-300'
                                  : leader.servingStatus === 'transferred'
                                  ? 'text-indigo-900 bg-indigo-100/90 border-indigo-300'
                                  : 'text-amber-900 bg-amber-100/80 border-amber-300/80'
                              }`}
                              title={leader.servingStatusNote || leader.servingStatusLabel || '曾在此任职 / 历任'}
                            >
                              {leader.servingStatusLabel || '曾在此任职 / 历任'}
                            </span>
                          )}

                          {isFocused && (
                            <span className="text-[9.5px] bg-blue-600 text-white font-bold px-1.5 py-0.5 rounded shadow-2xs shrink-0">
                              当前定位
                            </span>
                          )}
                        </div>

                        <div className="flex items-start gap-3">
                          {/* 干部免冠证件照 */}
                          <OfficialIdPhoto official={leader} size="sm" />

                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-1.5 flex-wrap">
                              <span className="font-bold text-base text-gray-900 group-hover:text-blue-600 transition-colors">
                                {leader.name}
                              </span>
                              <PositionRankBadge rank={leader.currentRank} />
                            </div>

                            {/* 职务展示 */}
                            {isServing ? (
                              <p className="text-xs text-gray-800 mt-1 font-semibold leading-snug line-clamp-2">
                                {leader.currentPosition}
                              </p>
                            ) : (
                              <div className="mt-1 space-y-0.5">
                                <p className="text-xs text-amber-900 font-semibold leading-snug line-clamp-2">
                                  曾任：{histRecord?.position || leader.currentPosition}
                                  {histRecord && (
                                    <span className="text-[10px] text-gray-500 font-mono font-normal ml-1">
                                      ({histRecord.startYear}-{histRecord.endYear || '离任'})
                                    </span>
                                  )}
                                </p>
                                <p className="text-[11px] text-gray-500 truncate" title={leader.servingStatusNote || leader.currentPosition}>
                                  履职状态：{leader.servingStatusLabel || leader.currentPosition}
                                </p>
                              </div>
                            )}

                            <p className="text-[11px] text-gray-400 mt-1 font-mono">
                              {leader.birthYear}年生（约{new Date().getFullYear() - leader.birthYear}岁）
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* 底部交互按钮栏 */}
                      <div className="mt-4 pt-2.5 border-t border-black/[0.05] flex items-center justify-between text-xs font-medium">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onSelectOfficial(leader);
                          }}
                          className="text-blue-600 hover:text-blue-800 flex items-center gap-0.5 group-hover:translate-x-0.5 transition-transform"
                        >
                          <span>查看个人档案</span>
                          <span>→</span>
                        </button>

                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onNavigateToSwimlane(activeUnit.id);
                          }}
                          className="text-[11px] text-gray-400 hover:text-blue-600 transition-colors"
                        >
                          在泳道中分析
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="p-10 bg-gray-50 rounded-2xl border border-black/[0.04] text-xs text-gray-500 text-center space-y-2">
                <Users className="w-8 h-8 text-gray-300 mx-auto" />
                <p className="font-semibold text-gray-600">
                  {officialTab === 'serving'
                    ? `该机构当前暂未收录现任在职领导班子档案`
                    : officialTab === 'past'
                    ? `该机构暂无历史曾任干部档案`
                    : `暂未收录该单位干部任职档案`}
                </p>
              </div>
            )}
          </div>

          {/* 4. 办公地址、联系方式与官方网络入口 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {activeUnit.address && (
              <div className="mac-card rounded-2xl p-5 border border-black/[0.08] bg-white shadow-xs flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-gray-100 text-gray-600 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                    办公物理地址
                  </h4>
                  <p className="text-sm font-semibold text-gray-800 mt-1">
                    {activeUnit.address}
                  </p>
                  <span className="text-xs text-gray-400 mt-0.5 block">
                    中国证券监督管理委员会监管系统编制机构
                  </span>
                </div>
              </div>
            )}

            {activeUnit.websiteUrl && (
              <div className="mac-card rounded-2xl p-5 border border-black/[0.08] bg-white shadow-xs flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                  <Building2 className="w-4 h-4" />
                </div>
                <div className="truncate flex-1">
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                    官方网站网络入口
                  </h4>
                  <a
                    href={activeUnit.websiteUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-mono font-semibold text-blue-600 hover:underline flex items-center gap-1 mt-1 truncate"
                  >
                    <span className="truncate">{activeUnit.websiteUrl}</span>
                    <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                  </a>
                  <span className="text-xs text-gray-400 mt-0.5 block">
                    点击可在新标签页中打开官方门户
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* 5. 底部横幅：一键返回或跳转泳道 */}
          <div className="mac-card rounded-2xl p-4 sm:p-5 border border-black/[0.06] bg-gray-50 flex items-center justify-between">
            <button
              onClick={() => onNavigateToSwimlane(activeUnit.id)}
              className="flex items-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-xl shadow-xs transition-colors"
            >
              <GitCommitVertical className="w-3.5 h-3.5" />
              <span>在时空演进泳道中展开该单位</span>
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
          请从左侧边栏选择一个机构查看其编制档案
        </div>
      )}
    </div>
  );
};
