'use client';

import React, { useState } from 'react';
import { ViewMode, Official } from '../types';
import { UNITS_DATA, OFFICIALS_DATA } from '../data/csrcData';
import { Sidebar } from './Sidebar';
import { UnitsView } from './UnitsView';
import { OfficialsView } from './OfficialsView';
import { SwimlaneView } from './SwimlaneView';

export function AppContainer() {
  const [currentView, setCurrentView] = useState<ViewMode>('units');
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState<boolean>(false);
  const [isTimeReversed, setIsTimeReversed] = useState<boolean>(false);
  const [hoveredOfficialId, setHoveredOfficialId] = useState<string | null>(null);

  // 默认精选核心领导班子
  const [selectedOfficialIds, setSelectedOfficialIds] = useState<string[]>([
    'wu-qing',
    'qiu-yong',
    'sha-yan',
    'zhou-guihua',
    'tian-xiangyang',
    'he-qingwen',
    'ran-hua',
    'yu-wenqiang',
    'lu-wenshan',
    'ge-yiping',
  ]);

  // 默认激活的核心泳道单位列表（涵盖所有期货所、中国结算、中证数据、中证金融等）
  const defaultLaneUnitIds = [
    'csrc-main',
    'csrc-sse',
    'csrc-szse',
    'csrc-bse',
    'csrc-cffex',
    'csrc-shfe',
    'csrc-dce',
    'csrc-czce',
    'csrc-gfex',
    'csrc-csdc',
    'csrc-csf',
    'csrc-csdata',
    'csrc-sipf',
    'csrc-bj',
    'csrc-sh',
    'csrc-gd',
    'csrc-sz',
    'gov-sh',
  ];
  const [activeLaneUnitIds, setActiveLaneUnitIds] = useState<string[]>(defaultLaneUnitIds);

  // 切换官员勾选
  const handleToggleOfficialSelection = (officialId: string) => {
    setSelectedOfficialIds((prev) =>
      prev.includes(officialId)
        ? prev.filter((id) => id !== officialId)
        : [...prev, officialId]
    );
  };

  const handleSelectAllOfficials = (ids: string[]) => {
    setSelectedOfficialIds(ids);
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
              </div>
              <UnitsView
                units={UNITS_DATA}
                officials={OFFICIALS_DATA}
                onSelectOfficial={handleSelectOfficialFromUnit}
                onNavigateToSwimlane={handleNavigateToSwimlane}
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
              </div>
              <OfficialsView
                officials={OFFICIALS_DATA}
                units={UNITS_DATA}
                selectedOfficialIds={selectedOfficialIds}
                onToggleOfficialSelection={handleToggleOfficialSelection}
                onNavigateToSwimlaneWithOfficial={handleNavigateToSwimlaneWithOfficial}
              />
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
