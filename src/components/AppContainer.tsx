'use client';

import React, { useState } from 'react';
import { ViewMode, Official } from '../types';
import { UNITS_DATA, OFFICIALS_DATA } from '../data/csrcData';
import { Sidebar } from './Sidebar';
import { UnitsView } from './UnitsView';
import { OfficialsView } from './OfficialsView';
import { SwimlaneView } from './SwimlaneView';

export function AppContainer() {
  // 核心需求二：默认将“时空泳道”作为网站首页
  const [currentView, setCurrentView] = useState<ViewMode>('swimlanes');
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState<boolean>(false);
  const [isTimeReversed, setIsTimeReversed] = useState<boolean>(false);
  const [hoveredOfficialId, setHoveredOfficialId] = useState<string | null>(null);

  // 跨页面跳转聚焦定位状态（从泳道跳转到机构或官员主页）
  const [focusedUnitId, setFocusedUnitId] = useState<string | null>(null);
  const [focusedOfficialId, setFocusedOfficialId] = useState<string | null>(null);

  // 官员页面当前选中的组织机构过滤
  const [officialsSelectedUnitId, setOfficialsSelectedUnitId] = useState<string | null>(null);

  // 默认精选核心领导班子
  const [selectedOfficialIds, setSelectedOfficialIds] = useState<string[]>([
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
    'lu-dabiao',
  ]);

  // 默认激活所有系统单位（SwimlaneView 会根据选中的官员动态自适应过滤掉无内容的单位）
  const defaultLaneUnitIds = UNITS_DATA.map((u) => u.id);
  const [activeLaneUnitIds, setActiveLaneUnitIds] = useState<string[]>(defaultLaneUnitIds);

  // 切换官员勾选
  const handleToggleOfficialSelection = (officialId: string) => {
    setSelectedOfficialIds((prev) => {
      const isAlreadySelected = prev.includes(officialId);
      if (isAlreadySelected) {
        return prev.filter((id) => id !== officialId);
      } else {
        // 选中官员时，将其履历单位自动补充到泳道候选池，确保其单位泳道自动浮现
        const off = OFFICIALS_DATA.find((o) => o.id === officialId);
        if (off) {
          const uids = [off.currentUnitId, ...off.careerHistory.map((r) => r.unitId)].filter(Boolean);
          setActiveLaneUnitIds((lanes) => Array.from(new Set([...lanes, ...uids])));
        }
        return [...prev, officialId];
      }
    });
  };

  const handleSelectAllOfficials = (ids: string[]) => {
    setSelectedOfficialIds(ids);
    const uids = new Set<string>();
    OFFICIALS_DATA.filter((o) => ids.includes(o.id)).forEach((off) => {
      if (off.currentUnitId) uids.add(off.currentUnitId);
      off.careerHistory.forEach((r) => {
        if (r.unitId) uids.add(r.unitId);
      });
    });
    setActiveLaneUnitIds((lanes) => Array.from(new Set([...lanes, ...uids])));
  };

  const handleClearOfficials = () => {
    setSelectedOfficialIds([]);
  };

  // 添加单位到泳道
  const handleAddLane = (unitId: string) => {
    if (!activeLaneUnitIds.includes(unitId)) {
      setActiveLaneUnitIds((prev) => [...prev, unitId]);
    }
  };

  // 移除泳道
  const handleRemoveLane = (unitId: string) => {
    if (activeLaneUnitIds.length <= 1) return;
    setActiveLaneUnitIds((prev) => prev.filter((id) => id !== unitId));
  };

  // 拖拽重排泳道
  const handleReorderLanes = (newLaneIds: string[]) => {
    setActiveLaneUnitIds(newLaneIds);
  };

  // 核心交互：列头点击「补全干部」，补全该单位在系统中的全部官员并在侧边栏选中，同时自动补充其历任单位泳道
  const handleCompleteUnitOfficials = (unitId: string) => {
    const matchingOfficials = OFFICIALS_DATA.filter(
      (o) =>
        o.currentUnitId === unitId ||
        o.careerHistory.some(
          (r) => r.unitId === unitId || (unitId === 'csrc-main' && r.unitId.startsWith('csrc-'))
        )
    );

    if (matchingOfficials.length === 0) return;

    // 1. 将该单位全部官员在左侧边栏自动选中
    const matchingIds = matchingOfficials.map((o) => o.id);
    setSelectedOfficialIds((prev) => Array.from(new Set([...prev, ...matchingIds])));

    // 2. 将这些官员历任的全部单位自动补充到泳道候选池，触发“单位”泳道自动补充展示
    const unitIdsToAdd = new Set<string>();
    unitIdsToAdd.add(unitId);
    matchingOfficials.forEach((o) => {
      if (o.currentUnitId) unitIdsToAdd.add(o.currentUnitId);
      o.careerHistory.forEach((rec) => {
        if (rec.unitId) unitIdsToAdd.add(rec.unitId);
      });
    });

    setActiveLaneUnitIds((prev) => {
      const combined = new Set(prev);
      unitIdsToAdd.forEach((uid) => combined.add(uid));
      return Array.from(combined);
    });
  };

  // 一键匹配相关单位
  const handleAutoFitLanes = () => {
    const selected = OFFICIALS_DATA.filter((o) => selectedOfficialIds.includes(o.id));
    const unitIdSet = new Set<string>();
    selected.forEach((off) => {
      off.careerHistory.forEach((rec) => {
        unitIdSet.add(rec.unitId);
      });
    });
    if (unitIdSet.size > 0) {
      setActiveLaneUnitIds(Array.from(unitIdSet));
    }
  };

  // 展示全部单位
  const handleShowAllUnits = () => {
    setActiveLaneUnitIds(UNITS_DATA.map((u) => u.id));
  };

  // 视图跳转支持
  const handleSelectOfficialFromUnit = (official: Official) => {
    setCurrentView('officials');
  };

  const handleNavigateToSwimlane = (unitId?: string) => {
    if (unitId && !activeLaneUnitIds.includes(unitId)) {
      setActiveLaneUnitIds((prev) => [...prev, unitId]);
    }
    setCurrentView('swimlanes');
  };

  const handleNavigateToSwimlaneWithOfficial = (officialId: string) => {
    if (!selectedOfficialIds.includes(officialId)) {
      setSelectedOfficialIds((prev) => [...prev, officialId]);
    }
    setCurrentView('swimlanes');
  };

  // 从泳道跳转到机构主页
  const handleNavigateToUnitPage = (unitId: string) => {
    setFocusedUnitId(unitId);
    setCurrentView('units');
  };

  // 从泳道跳转到官员主页
  const handleNavigateToOfficialPage = (officialId: string) => {
    setFocusedOfficialId(officialId);
    setCurrentView('officials');
  };

  // 需求四：通用返回时空泳道（保持原有的所有官员和泳道筛选配置）
  const handleBackToSwimlane = () => {
    setCurrentView('swimlanes');
  };

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-[#f5f5f7] text-[#1d1d1f] selection:bg-blue-500 selection:text-white">
      {/* 统一的 macOS 风格左侧多功能侧边栏 */}
      <Sidebar
        currentView={currentView}
        onViewChange={setCurrentView}
        selectedOfficialIds={selectedOfficialIds}
        onToggleOfficialSelection={handleToggleOfficialSelection}
        onSelectAllOfficials={handleSelectAllOfficials}
        onClearOfficials={handleClearOfficials}
        units={UNITS_DATA}
        officials={OFFICIALS_DATA}
        activeLaneUnitIds={activeLaneUnitIds}
        onAddLane={handleAddLane}
        onAutoFitLanes={handleAutoFitLanes}
        onShowAllUnits={handleShowAllUnits}
        isTimeReversed={isTimeReversed}
        onToggleTimeReversed={() => setIsTimeReversed(!isTimeReversed)}
        hoveredOfficialId={hoveredOfficialId}
        onHoverOfficial={setHoveredOfficialId}
        isCollapsed={isSidebarCollapsed}
        onToggleCollapse={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
        selectedUnitIdForOfficials={officialsSelectedUnitId}
        onSelectUnitForOfficials={setOfficialsSelectedUnitId}
      />

      {/* 主视图区域：完整高度与宽度留给图谱 */}
      <main className="flex-1 min-w-0 h-screen overflow-hidden flex flex-col">
        {currentView === 'swimlanes' && (
          <div className="p-3 w-full h-full">
            <SwimlaneView
              units={UNITS_DATA}
              officials={OFFICIALS_DATA}
              selectedOfficialIds={selectedOfficialIds}
              activeLaneUnitIds={activeLaneUnitIds}
              onReorderLanes={handleReorderLanes}
              onRemoveLane={handleRemoveLane}
              onCompleteUnitOfficials={handleCompleteUnitOfficials}
              onNavigateToUnit={handleNavigateToUnitPage}
              onNavigateToOfficial={handleNavigateToOfficialPage}
              isTimeReversed={isTimeReversed}
              hoveredOfficialId={hoveredOfficialId}
              onHoverOfficial={setHoveredOfficialId}
            />
          </div>
        )}

        {currentView === 'units' && (
          <div className="p-4 sm:p-6 w-full h-full overflow-y-auto">
            <div className="max-w-7xl mx-auto space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-bold text-gray-900 tracking-tight">
                    系统单位编制档案
                  </h2>
                  <p className="text-xs text-gray-500 mt-0.5">
                    收录证监会机关内设部门、地方证监局、三大证券交易所及会管核心事业单位
                  </p>
                </div>
                <button
                  onClick={handleBackToSwimlane}
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-white hover:bg-gray-50 text-gray-700 hover:text-blue-600 rounded-xl border border-black/[0.08] shadow-2xs text-xs font-semibold transition-all hover:scale-105 active:scale-95"
                >
                  <span>← 返回时空泳道</span>
                </button>
              </div>
              <UnitsView
                units={UNITS_DATA}
                officials={OFFICIALS_DATA}
                onSelectOfficial={handleSelectOfficialFromUnit}
                onNavigateToSwimlane={handleNavigateToSwimlane}
                onBackToSwimlane={handleBackToSwimlane}
                initialUnitId={focusedUnitId}
              />
            </div>
          </div>
        )}

        {currentView === 'officials' && (
          <div className="p-4 sm:p-6 w-full h-full overflow-y-auto">
            <div className="max-w-7xl mx-auto space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-bold text-gray-900 tracking-tight">
                    主要领导干部履历档案
                  </h2>
                  <p className="text-xs text-gray-500 mt-0.5">
                    汇集证监会系统核心领导班子的年龄、学历、任职经历与调任轨迹
                  </p>
                </div>
                <button
                  onClick={handleBackToSwimlane}
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-white hover:bg-gray-50 text-gray-700 hover:text-blue-600 rounded-xl border border-black/[0.08] shadow-2xs text-xs font-semibold transition-all hover:scale-105 active:scale-95"
                >
                  <span>← 返回时空泳道</span>
                </button>
              </div>
              <OfficialsView
                officials={OFFICIALS_DATA}
                units={UNITS_DATA}
                selectedOfficialIds={selectedOfficialIds}
                onToggleOfficialSelection={handleToggleOfficialSelection}
                onNavigateToSwimlaneWithOfficial={handleNavigateToSwimlaneWithOfficial}
                onBackToSwimlane={handleBackToSwimlane}
                activeOfficialId={focusedOfficialId}
                selectedUnitId={officialsSelectedUnitId}
                onSelectUnit={setOfficialsSelectedUnitId}
              />
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
