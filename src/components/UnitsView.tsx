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
  Building
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
    <div className="space-y-6">
      {/* 顶部快捷机构导航与工具栏 (macOS Toolbar style) */}
      <div className="mac-card rounded-2xl p-4 sm:p-5 border border-black/[0.06] bg-white/95 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3 flex-1 min-w-0">
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

            {/* 快速机构切换选择器 */}
            <div className="flex items-center gap-2 flex-1 max-w-md">
              <Building className="w-4 h-4 text-gray-400 shrink-0" />
              <select
                value={activeUnit?.id || ''}
                onChange={(e) => {
                  const targetId = e.target.value;
                  const found = units.find((u) => u.id === targetId);
                  if (found) {
                    setActiveUnit(found);
                    onSelectUnit?.(found.id);
                  }
                }}
                className="w-full px-3 py-2 bg-black/[0.03] hover:bg-black/[0.05] focus:bg-white text-xs sm:text-sm font-medium text-gray-800 rounded-xl border border-black/[0.06] focus:border-blue-500/40 focus:ring-2 focus:ring-blue-500/10 transition-all outline-none cursor-pointer"
              >
                {units.map((u) => (
                  <option key={u.id} value={u.id}>
                    [{u.category.replace('内设部门', '司局')}] {u.name} ({u.level})
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* 右侧核心动作 */}
          <div className="flex items-center gap-3 shrink-0">
            {activeUnit && (
              <button
                onClick={() => onNavigateToSwimlane(activeUnit.id)}
                className="flex items-center gap-1.5 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-semibold shadow-xs transition-all hover:scale-[1.02] active:scale-95"
                title="在时空演进泳道图谱中展开该单位"
              >
                <GitCommitVertical className="w-3.5 h-3.5" />
                <span>在时空泳道中展开</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}

            {activeUnit?.websiteUrl && (
              <a
                href={activeUnit.websiteUrl}
                target="_blank"
                rel="noreferrer"
                className="hidden md:flex items-center gap-1 px-3 py-2 bg-gray-50 hover:bg-gray-100 text-gray-700 hover:text-blue-600 rounded-xl border border-black/[0.06] text-xs font-medium transition-colors"
              >
                <span>官方网站</span>
                <ExternalLink className="w-3.5 h-3.5 text-gray-400" />
              </a>
            )}
          </div>
        </div>
      </div>

      {/* 核心改动：全屏宽幅全息单位档案看板（删除了冗余的左侧卡片列表，空间完全留给详细信息） */}
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

          {/* 3. 现任主要领导干部班子 (宽幅全景网格卡片) */}
          <div className="mac-card rounded-2xl p-6 sm:p-7 border border-black/[0.08] bg-white shadow-xs space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-black/[0.06] gap-2">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shadow-2xs">
                  <UserCheck className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-gray-900 tracking-tight">
                    现任主要领导干部班子 ({activeLeaders.length}人)
                  </h3>
                  <p className="text-xs text-gray-500">
                    收录该单位在任的主要领导干部，点击干部卡片可直接查看其个人全息履历档案
                  </p>
                </div>
              </div>
              <span className="text-xs text-blue-600 font-medium">
                共关联 {activeLeaders.length} 位在职领导
              </span>
            </div>

            {activeLeaders.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 pt-2">
                {activeLeaders.map((leader) => (
                  <div
                    key={leader.id}
                    onClick={() => onSelectOfficial(leader)}
                    className="p-4 rounded-2xl border border-black/[0.06] hover:border-blue-400/80 bg-gray-50/60 hover:bg-blue-50/20 transition-all cursor-pointer flex flex-col justify-between group relative overflow-hidden shadow-2xs hover:shadow-xs"
                  >
                    <div className="flex items-start gap-3">
                      {/* 干部 1 寸标准免冠证件照 */}
                      <OfficialIdPhoto official={leader} size="sm" />

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-1.5 flex-wrap">
                          <span className="font-bold text-base text-gray-900 group-hover:text-blue-600 transition-colors">
                            {leader.name}
                          </span>
                          <PositionRankBadge rank={leader.currentRank} />
                        </div>
                        <p className="text-xs text-gray-700 mt-1 font-medium leading-snug line-clamp-2">
                          {leader.currentPosition}
                        </p>
                        <p className="text-[11px] text-gray-400 mt-1">
                          {leader.birthYear}年生（约{new Date().getFullYear() - leader.birthYear}岁）
                        </p>
                      </div>
                    </div>

                    <div className="mt-4 pt-2.5 border-t border-black/[0.05] flex items-center justify-between text-xs text-blue-600 font-medium">
                      <span className="group-hover:translate-x-0.5 transition-transform flex items-center gap-0.5">
                        <span>查看个人档案</span>
                        <span>→</span>
                      </span>
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
                ))}
              </div>
            ) : (
              <div className="p-8 bg-gray-50 rounded-2xl border border-black/[0.04] text-xs text-gray-400 text-center">
                暂未收录该单位现任主要领导班子个人档案
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
