'use client';

import React, { useState, useMemo } from 'react';
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
  UserCheck
} from 'lucide-react';

interface OfficialsViewProps {
  officials: Official[];
  units: Unit[];
  selectedOfficialIds: string[];
  onToggleOfficialSelection: (officialId: string) => void;
  onNavigateToSwimlaneWithOfficial: (officialId: string) => void;
  activeOfficialId?: string | null;
}

export const OfficialsView: React.FC<OfficialsViewProps> = ({
  officials,
  units,
  selectedOfficialIds,
  onToggleOfficialSelection,
  onNavigateToSwimlaneWithOfficial,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedUnitId, setSelectedUnitId] = useState<string>('all');
  const [selectedRank, setSelectedRank] = useState<string>('all');
  const [activeOfficial, setActiveOfficial] = useState<Official | null>(officials[0] || null);

  // 单位映射表
  const unitMap = useMemo(() => {
    const map = new Map<string, Unit>();
    units.forEach((u) => map.set(u.id, u));
    return map;
  }, [units]);

  // 过滤官员
  const filteredOfficials = useMemo(() => {
    return officials.filter((off) => {
      const matchSearch =
        off.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        off.currentPosition.toLowerCase().includes(searchTerm.toLowerCase()) ||
        off.education.some(
          (edu) =>
            edu.school.toLowerCase().includes(searchTerm.toLowerCase()) ||
            (edu.major && edu.major.toLowerCase().includes(searchTerm.toLowerCase()))
        );

      const matchUnit =
        selectedUnitId === 'all' || off.currentUnitId === selectedUnitId;

      const matchRank =
        selectedRank === 'all' || off.currentRank === selectedRank;

      return matchSearch && matchUnit && matchRank;
    });
  }, [officials, searchTerm, selectedUnitId, selectedRank]);

  // 计算年龄（基准年份：2026年）
  const calculateAge = (birthYear: number) => {
    return 2026 - birthYear;
  };

  return (
    <div className="space-y-6">
      {/* 顶部搜索与过滤栏 */}
      <div className="mac-card rounded-2xl p-4 sm:p-5 border border-black/[0.06] bg-white/95">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
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

          <div className="flex flex-wrap items-center gap-2.5">
            <div className="flex items-center gap-1.5 text-xs text-[#86868b] mr-1">
              <Filter className="w-3.5 h-3.5" />
              <span>筛选:</span>
            </div>

            {/* 现任单位筛选 */}
            <select
              value={selectedUnitId}
              onChange={(e) => setSelectedUnitId(e.target.value)}
              className="px-3 py-1.5 bg-black/[0.03] hover:bg-black/[0.05] text-xs font-medium text-gray-700 rounded-lg border border-black/[0.06] outline-none cursor-pointer"
            >
              <option value="all">全部现任单位</option>
              {units.map((u) => (
                <option key={u.id} value={u.id}>
                  {u.shortName}
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
              共 <strong className="text-gray-900">{filteredOfficials.length}</strong> 位主要领导
            </span>
          </div>
        </div>
      </div>

      {/* 主体两栏布局：左侧官员卡片列表，右侧 macOS Inspector 简历全景档案 */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* 左侧官员列表 */}
        <div className="lg:col-span-5 space-y-3">
          {filteredOfficials.map((official) => {
            const isSelectedInSwimlane = selectedOfficialIds.includes(official.id);
            const isActiveInspector = activeOfficial?.id === official.id;
            const officialColor = getOfficialColor(official.id);
            const currentUnit = unitMap.get(official.currentUnitId);

            return (
              <div
                key={official.id}
                onClick={() => setActiveOfficial(official)}
                className={`mac-card rounded-2xl p-4 cursor-pointer transition-all border relative overflow-hidden ${
                  isActiveInspector
                    ? 'border-blue-500/60 ring-2 ring-blue-500/10 bg-blue-50/20'
                    : 'hover:border-gray-300'
                }`}
              >
                {/* 官员专属色条 */}
                <div
                  className="absolute left-0 top-0 bottom-0 w-1.5"
                  style={{ backgroundColor: officialColor.primary }}
                />

                <div className="flex items-start justify-between gap-3 pl-2">
                  <div className="flex items-start gap-3">
                    {/* 姓名首字母圆形头像徽标 */}
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center font-bold text-white shadow-xs shrink-0 text-base"
                      style={{ backgroundColor: officialColor.primary }}
                    >
                      {official.name.slice(0, 1)}
                    </div>

                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-bold text-base text-gray-900">
                          {official.name}
                        </h3>
                        <span className="text-[11px] font-semibold text-gray-700 bg-gray-100 px-2 py-0.5 rounded-md">
                          {official.currentRank}
                        </span>
                        <span className="text-xs text-gray-400">
                          {calculateAge(official.birthYear)} 岁
                        </span>
                      </div>

                      <p className="text-xs text-gray-700 font-medium mt-1 leading-snug">
                        {official.currentPosition}
                      </p>

                      <div className="flex flex-wrap items-center gap-2 mt-2 text-[11px] text-gray-500">
                        <span>{currentUnit?.shortName || '证监系统'}</span>
                        <span>•</span>
                        <span>
                          {official.education[official.education.length - 1]?.school || '高校'}
                        </span>
                        <span>•</span>
                        <span className="text-blue-600 font-medium">
                          {official.careerHistory.length} 段重要任职
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
                      className={`px-2.5 py-1 text-[11px] font-medium rounded-lg transition-all flex items-center gap-1 ${
                        isSelectedInSwimlane
                          ? 'bg-blue-600 text-white shadow-xs'
                          : 'bg-black/[0.04] text-gray-600 hover:bg-black/[0.08]'
                      }`}
                      title="加入时空泳道图谱对比"
                    >
                      <GitCommitVertical className="w-3 h-3" />
                      <span>{isSelectedInSwimlane ? '已加入泳道' : '+ 泳道对比'}</span>
                    </button>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onNavigateToSwimlaneWithOfficial(official.id);
                      }}
                      className="text-[11px] text-gray-400 hover:text-blue-600 transition-colors flex items-center gap-0.5 mt-1"
                    >
                      <span>单人演进</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* 右侧：活跃官员的详细履历档案全景 (macOS Inspector Detail) */}
        <div className="lg:col-span-7 sticky top-20">
          {activeOfficial ? (
            <div className="mac-card rounded-2xl p-6 bg-white border border-black/[0.06] shadow-sm space-y-6">
              {/* Profile Header */}
              <div className="flex items-start justify-between pb-5 border-b border-black/[0.06]">
                <div className="flex items-center gap-4">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center font-bold text-white text-2xl shadow-md"
                    style={{
                      backgroundColor: getOfficialColor(activeOfficial.id).primary,
                    }}
                  >
                    {activeOfficial.name.slice(0, 1)}
                  </div>

                  <div>
                    <div className="flex items-center gap-2.5">
                      <h2 className="text-2xl font-bold text-gray-900 tracking-tight">
                        {activeOfficial.name}
                      </h2>
                      <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200/80">
                        {activeOfficial.currentRank}
                      </span>
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
                        <div className="bg-gray-50/60 hover:bg-gray-50 p-3.5 rounded-xl border border-black/[0.04] transition-colors">
                          <div className="flex flex-wrap items-center justify-between gap-1 mb-1">
                            <span className="font-semibold text-sm text-gray-900">
                              {item.unitName}
                              {item.department ? ` · ${item.department}` : ''}
                            </span>
                            <span className="text-xs font-mono font-medium text-blue-600">
                              {item.startYear}
                              {item.startMonth ? `.${item.startMonth}` : ''} -{' '}
                              {item.endYear
                                ? `${item.endYear}${item.endMonth ? `.${item.endMonth}` : ''}`
                                : '至今'}
                            </span>
                          </div>

                          <div className="flex items-center gap-2 mt-1">
                            <span className="text-xs font-medium text-gray-800">
                              {item.position}
                            </span>
                            {item.rank && (
                              <span className="text-[10px] text-gray-500 bg-gray-200/70 px-1.5 py-0.2 rounded">
                                {item.rank}
                              </span>
                            )}
                          </div>

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
