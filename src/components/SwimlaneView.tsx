'use client';

import React, { useState, useMemo, useRef } from 'react';
import { Official, Unit, CareerRecord, UnitLevel } from '../types';
import { getOfficialColor } from '../data/csrcData';
import { GripVertical, X } from 'lucide-react';

interface SwimlaneViewProps {
  units: Unit[];
  officials: Official[];
  selectedOfficialIds: string[];
  activeLaneUnitIds: string[];
  onReorderLanes: (newLaneIds: string[]) => void;
  onRemoveLane: (unitId: string) => void;
  isTimeReversed: boolean;
  hoveredOfficialId: string | null;
  onHoverOfficial: (id: string | null) => void;
}

export const SwimlaneView: React.FC<SwimlaneViewProps> = ({
  units,
  officials,
  selectedOfficialIds,
  activeLaneUnitIds,
  onReorderLanes,
  onRemoveLane,
  isTimeReversed,
  hoveredOfficialId,
  onHoverOfficial,
}) => {
  const [activeTooltip, setActiveTooltip] = useState<{
    record: CareerRecord;
    official: Official;
    x: number;
    y: number;
  } | null>(null);
  const [hoveredLaneUnit, setHoveredLaneUnit] = useState<Unit | null>(null);
  const [laneTooltipPos, setLaneTooltipPos] = useState<{ x: number; y: number } | null>(null);

  // 拖拽重排状态
  const [draggedLaneIndex, setDraggedLaneIndex] = useState<number | null>(null);
  const [dragOverLaneIndex, setDragOverLaneIndex] = useState<number | null>(null);

  const chartScrollContainerRef = useRef<HTMLDivElement>(null);

  // 尺寸参数
  const MIN_YEAR = 1996;
  const MAX_YEAR = 2026;
  const YEAR_HEIGHT = 44; // 每年 44px
  const TOTAL_HEIGHT = (MAX_YEAR - MIN_YEAR + 1) * YEAR_HEIGHT;
  const LANE_WIDTH = 58; // 泳道单列宽度 58px

  // 年份列表
  const years = useMemo(() => {
    const list: number[] = [];
    for (let y = MIN_YEAR; y <= MAX_YEAR; y++) {
      list.push(y);
    }
    return isTimeReversed ? list.reverse() : list;
  }, [MIN_YEAR, MAX_YEAR, isTimeReversed]);

  // 单位字典
  const unitMap = useMemo(() => {
    const map = new Map<string, Unit>();
    units.forEach((u) => map.set(u.id, u));
    return map;
  }, [units]);

  // 当前有效泳道列表
  const activeLanes = useMemo(() => {
    return activeLaneUnitIds
      .map((id) => unitMap.get(id))
      .filter((u): u is Unit => Boolean(u));
  }, [activeLaneUnitIds, unitMap]);

  // 当前选中的官员
  const selectedOfficials = useMemo(() => {
    return officials.filter((o) => selectedOfficialIds.includes(o.id));
  }, [officials, selectedOfficialIds]);

  // 拖拽排序
  const handleDragStart = (index: number) => {
    setDraggedLaneIndex(index);
  };

  const handleDragOver = (e: React.DragEvent, index: number) => {
    e.preventDefault();
    if (draggedLaneIndex === null || draggedLaneIndex === index) return;
    setDragOverLaneIndex(index);
  };

  const handleDrop = (e: React.DragEvent, dropIndex: number) => {
    e.preventDefault();
    if (draggedLaneIndex === null || draggedLaneIndex === dropIndex) {
      setDraggedLaneIndex(null);
      setDragOverLaneIndex(null);
      return;
    }

    const updated = [...activeLaneUnitIds];
    const [movedItem] = updated.splice(draggedLaneIndex, 1);
    updated.splice(dropIndex, 0, movedItem);
    onReorderLanes(updated);
    setDraggedLaneIndex(null);
    setDragOverLaneIndex(null);
  };

  // 年份对应的 Y 轴绝对坐标 (像素)
  const getYearYPosition = (year: number, month: number = 1) => {
    const clampedYear = Math.max(MIN_YEAR, Math.min(MAX_YEAR, year));
    const yearFraction = (month - 1) / 12;

    if (!isTimeReversed) {
      return (clampedYear - MIN_YEAR + yearFraction) * YEAR_HEIGHT;
    } else {
      return (MAX_YEAR - clampedYear + (1 - yearFraction)) * YEAR_HEIGHT;
    }
  };

  // 级别超简标签
  const getMicroRank = (level: UnitLevel) => {
    switch (level) {
      case '正部级':
        return { text: '部', bg: 'bg-red-500 text-white' };
      case '副部级':
        return { text: '副部', bg: 'bg-purple-500 text-white' };
      case '正厅局级':
        return { text: '厅', bg: 'bg-blue-600 text-white' };
      case '副厅局级':
        return { text: '副厅', bg: 'bg-cyan-600 text-white' };
      default:
        return { text: '处', bg: 'bg-gray-500 text-white' };
    }
  };

  // 计算所有任职卡片的绝对坐标（在泳道容器内）
  const { laneRecordsMap, blockCoordMap } = useMemo(() => {
    const lMap: {
      [laneId: string]: Array<{
        official: Official;
        record: CareerRecord;
        top: number;
        height: number;
        left: number;
        width: number;
        centerX: number;
        bottom: number;
      }>;
    } = {};

    const cMap = new Map<
      string,
      {
        left: number;
        top: number;
        width: number;
        height: number;
        centerX: number;
        bottom: number;
      }
    >();

    activeLanes.forEach((lane, laneIdx) => {
      const laneLeft = laneIdx * LANE_WIDTH;
      const rawRecords: { official: Official; record: CareerRecord }[] = [];

      selectedOfficials.forEach((official) => {
        official.careerHistory.forEach((rec) => {
          const matches =
            rec.unitId === lane.id ||
            (lane.id === 'csrc-main' &&
              rec.unitId.startsWith('csrc-') &&
              !activeLaneUnitIds.includes(rec.unitId));

          if (matches) {
            rawRecords.push({ official, record: rec });
          }
        });
      });

      // 计算卡片位置及重叠避让
      const positioned = rawRecords.map((item, i) => {
        const startY = getYearYPosition(item.record.startYear, item.record.startMonth || 1);
        const endY = getYearYPosition(item.record.endYear || 2026, item.record.endMonth || 12);
        const top = Math.min(startY, endY);
        const height = Math.max(32, Math.abs(endY - startY));

        const hasOverlap = rawRecords.some((other, j) => {
          if (i === j) return false;
          const oStartY = getYearYPosition(other.record.startYear, other.record.startMonth || 1);
          const oEndY = getYearYPosition(other.record.endYear || 2026, other.record.endMonth || 12);
          const oTop = Math.min(oStartY, oEndY);
          const oBottom = Math.max(oStartY, oEndY);
          return !(top + height < oTop || top > oBottom);
        });

        const isMulti = hasOverlap && rawRecords.length > 1;
        const width = isMulti ? LANE_WIDTH / 2 - 3 : LANE_WIDTH - 6;
        const blockRelLeft = isMulti ? (i % 2 === 0 ? 2 : LANE_WIDTH / 2 + 1) : 3;
        const absLeft = laneLeft + blockRelLeft;
        const centerX = absLeft + width / 2;
        const bottom = top + height;

        const res = {
          official: item.official,
          record: item.record,
          top,
          height,
          left: blockRelLeft,
          width,
          centerX,
          bottom,
        };

        cMap.set(item.record.id, {
          left: absLeft,
          top,
          width,
          height,
          centerX,
          bottom,
        });

        return res;
      });

      lMap[lane.id] = positioned;
    });

    return { laneRecordsMap: lMap, blockCoordMap: cMap };
  }, [activeLanes, selectedOfficials, isTimeReversed]);

  // 跨泳道流转连线：箭头精准指向目标职位 label 的上方正中间！
  const trajectoryCurves = useMemo(() => {
    const paths: {
      id: string;
      officialId: string;
      color: string;
      pathD: string;
      fromName: string;
      toName: string;
    }[] = [];

    selectedOfficials.forEach((official) => {
      const color = getOfficialColor(official.id);
      const history = official.careerHistory;

      for (let i = 0; i < history.length - 1; i++) {
        const currentRec = history[i];
        const nextRec = history[i + 1];

        // 跨单位流动
        if (currentRec.unitId !== nextRec.unitId) {
          const fromCoord = blockCoordMap.get(currentRec.id);
          const toCoord = blockCoordMap.get(nextRec.id);

          if (fromCoord && toCoord) {
            // 起点：原职位 label 的下方中间
            const x1 = fromCoord.centerX;
            const y1 = !isTimeReversed ? fromCoord.bottom : fromCoord.top;

            // 终点：目标职位 label 的上方中间（精准指向 label 上方中心！）
            const x2 = toCoord.centerX;
            const y2 = !isTimeReversed ? toCoord.top : toCoord.bottom;

            const deltaY = Math.max(16, Math.abs(y2 - y1) * 0.45);
            const cp1x = x1;
            const cp1y = !isTimeReversed ? y1 + deltaY : y1 - deltaY;
            const cp2x = x2;
            const cp2y = !isTimeReversed ? y2 - deltaY : y2 + deltaY;

            const pathD = `M ${x1} ${y1} C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${x2} ${y2}`;

            paths.push({
              id: `${official.id}-${currentRec.id}-${nextRec.id}`,
              officialId: official.id,
              color: color.primary,
              pathD,
              fromName: currentRec.unitName,
              toName: nextRec.unitName,
            });
          }
        }
      }
    });

    return paths;
  }, [selectedOfficials, blockCoordMap, isTimeReversed]);

  return (
    <div className="w-full h-full relative">
      {/* 
        主泳道图谱容器：
        - 充满可视高度，双向自由滚动
        - 列头通过 sticky top-0 牢牢锁定在顶部，纵向上滑时永不移出视线！
        - 左侧年份标尺通过 sticky left-0 牢牢锁定在左侧！
      */}
      <div
        ref={chartScrollContainerRef}
        className="mac-card rounded-2xl bg-white border border-black/[0.06] shadow-sm relative h-[calc(100vh-28px)] overflow-auto"
      >
        <div className="relative min-w-max">
          {/* 1. 顶部锁定表头行 (Sticky Top) */}
          <div className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-black/[0.08] flex items-stretch min-w-max shadow-2xs">
            {/* 左上角交叉区域 (Sticky Top + Left) */}
            <div className="sticky left-0 z-40 w-16 shrink-0 border-r border-black/[0.06] flex flex-col items-center justify-center bg-gray-100/90 text-gray-600 text-xs font-semibold py-2.5 shadow-xs">
              <span className="text-[11px] font-bold">年份</span>
              <span className="text-[9px] text-gray-400 font-normal">
                {isTimeReversed ? '26-96' : '96-26'}
              </span>
            </div>

            {/* 各单位窄版竖排表头 */}
            <div className="flex flex-1 items-stretch">
              {activeLanes.map((lane, index) => {
                const isOver = dragOverLaneIndex === index;
                const microRank = getMicroRank(lane.level);
                const displayName = lane.tinyName || lane.shortName;

                return (
                  <div
                    key={lane.id}
                    data-lane-unit-id={lane.id}
                    draggable
                    onDragStart={() => handleDragStart(index)}
                    onDragOver={(e) => handleDragOver(e, index)}
                    onDrop={(e) => handleDrop(e, index)}
                    onMouseEnter={(e) => {
                      setHoveredLaneUnit(lane);
                      setLaneTooltipPos({ x: e.clientX, y: e.clientY });
                    }}
                    onMouseMove={(e) => {
                      setLaneTooltipPos({ x: e.clientX, y: e.clientY });
                    }}
                    onMouseLeave={() => {
                      setHoveredLaneUnit(null);
                      setLaneTooltipPos(null);
                    }}
                    style={{ width: `${LANE_WIDTH}px` }}
                    className={`shrink-0 border-r border-black/[0.06] flex flex-col items-center justify-between py-2 px-0.5 cursor-move select-none transition-all relative group h-32 ${
                      isOver ? 'bg-blue-100 border-blue-500' : 'bg-white hover:bg-blue-50/50'
                    }`}
                    title="左右拖拽调换泳道排序"
                  >
                    {/* Top: 抓手 & 级别小角标 */}
                    <div className="flex flex-col items-center gap-1 w-full">
                      <GripVertical className="w-3 h-3 text-gray-300 group-hover:text-gray-600 transition-colors" />
                      <span
                        className={`text-[8.5px] font-bold px-1 py-0.2 rounded leading-none ${microRank.bg}`}
                      >
                        {microRank.text}
                      </span>
                    </div>

                    {/* Middle: 机构名称竖排展示 */}
                    <div
                      className="font-semibold text-[11px] text-gray-800 tracking-wider flex items-center justify-center my-0.5 leading-tight text-center"
                      style={{
                        writingMode: 'vertical-rl',
                        textOrientation: 'upright',
                        letterSpacing: '1px',
                      }}
                    >
                      {displayName}
                    </div>

                    {/* Bottom: 移除泳道 */}
                    <div className="h-3 flex items-center justify-center">
                      {activeLanes.length > 1 && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onRemoveLane(lane.id);
                          }}
                          className="opacity-0 group-hover:opacity-100 text-gray-400 hover:text-red-500 p-0.5 rounded transition-opacity"
                          title="隐藏此泳道"
                        >
                          <X className="w-2.5 h-2.5" />
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* 2. 泳道纵向主体网格 */}
          <div
            className="relative flex min-w-max"
            style={{ height: `${TOTAL_HEIGHT}px` }}
          >
            {/* 左侧锁定时间标尺 (Sticky Left) */}
            <div className="sticky left-0 z-20 w-16 shrink-0 border-r border-black/[0.06] bg-gray-50/90 backdrop-blur-xs select-none relative shadow-xs">
              {years.map((year) => {
                const y = getYearYPosition(year, 1);
                const isMilestone = year % 5 === 0 || year === 2026 || year === 1996;
                return (
                  <div
                    key={year}
                    className="absolute left-0 right-0 flex items-center justify-end pr-2"
                    style={{ top: `${y}px`, height: `${YEAR_HEIGHT}px` }}
                  >
                    <span
                      className={`font-mono text-xs ${
                        isMilestone
                          ? 'font-bold text-gray-900'
                          : 'text-gray-400 text-[10px]'
                      }`}
                    >
                      {year}
                    </span>
                    <div
                      className={`h-[1px] ${
                        isMilestone ? 'w-2 bg-gray-500' : 'w-1 bg-gray-300'
                      } ml-1`}
                    />
                  </div>
                );
              })}
            </div>

            {/* 右侧主网格内容区域 */}
            <div className="flex flex-1 relative">
              {/* 水平年份参考横虚线 */}
              <div className="absolute inset-0 pointer-events-none z-0">
                {years.map((year) => {
                  const y = getYearYPosition(year, 1);
                  const isMilestone = year % 5 === 0;
                  return (
                    <div
                      key={year}
                      className={`absolute left-0 right-0 border-b ${
                        isMilestone
                          ? 'border-gray-200/90 border-dashed'
                          : 'border-gray-100'
                      }`}
                      style={{ top: `${y}px`, height: `${YEAR_HEIGHT}px` }}
                    />
                  );
                })}
              </div>

              {/* 跨泳道流动轨迹 SVG 曲线层 */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none z-10"
                style={{ minWidth: '100%' }}
              >
                <defs>
                  {selectedOfficials.map((o) => {
                    const color = getOfficialColor(o.id);
                    return (
                      <marker
                        key={`arrow-${o.id}`}
                        id={`arrow-${o.id}`}
                        viewBox="0 0 10 10"
                        refX="5"
                        refY="5"
                        markerWidth="6"
                        markerHeight="6"
                        orient="auto-start-reverse"
                      >
                        <path d="M 0 1.5 L 7 5 L 0 8.5 z" fill={color.primary} />
                      </marker>
                    );
                  })}
                </defs>

                {trajectoryCurves.map((curve) => {
                  const isHighlighted =
                    hoveredOfficialId === null || hoveredOfficialId === curve.officialId;

                  return (
                    <g key={curve.id} className="transition-opacity duration-200">
                      {/* 外晕 */}
                      <path
                        d={curve.pathD}
                        fill="none"
                        stroke={curve.color}
                        strokeWidth={isHighlighted ? 4 : 1.5}
                        strokeOpacity={isHighlighted ? 0.35 : 0.05}
                        strokeLinecap="round"
                      />
                      {/* 核心流转虚线 */}
                      <path
                        d={curve.pathD}
                        fill="none"
                        stroke={curve.color}
                        strokeWidth={isHighlighted ? 2.5 : 1}
                        strokeOpacity={isHighlighted ? 0.95 : 0.2}
                        strokeDasharray={isHighlighted ? '5,3' : undefined}
                        markerEnd={`url(#arrow-${curve.officialId})`}
                      />
                    </g>
                  );
                })}
              </svg>

              {/* 各单位泳道内容 */}
              {activeLanes.map((lane) => {
                const records = laneRecordsMap[lane.id] || [];

                return (
                  <div
                    key={lane.id}
                    style={{ width: `${LANE_WIDTH}px` }}
                    className="shrink-0 border-r border-black/[0.06] relative z-20 hover:bg-black/[0.005] transition-colors"
                  >
                    {/* 任职卡片 Block */}
                    {records.map(({ official, record, top, height, left, width }) => {
                      const color = getOfficialColor(official.id);
                      const isOfficialHighlighted =
                        hoveredOfficialId === null ||
                        hoveredOfficialId === official.id;

                      return (
                        <div
                          key={record.id}
                          onMouseEnter={(e) => {
                            onHoverOfficial(official.id);
                            setActiveTooltip({
                              record,
                              official,
                              x: e.clientX,
                              y: e.clientY,
                            });
                          }}
                          onMouseMove={(e) => {
                            if (activeTooltip) {
                              setActiveTooltip({
                                record,
                                official,
                                x: e.clientX,
                                y: e.clientY,
                              });
                            }
                          }}
                          onMouseLeave={() => {
                            onHoverOfficial(null);
                            setActiveTooltip(null);
                          }}
                          className={`absolute rounded-lg cursor-pointer transition-all duration-150 border-l-[3.5px] border-t border-r border-b border-black/[0.08] flex flex-col items-center justify-center p-0.5 select-none ${
                            isOfficialHighlighted
                              ? 'opacity-100 shadow-xs hover:shadow-md hover:scale-105 hover:z-40'
                              : 'opacity-20 grayscale'
                          }`}
                          style={{
                            top: `${top}px`,
                            height: `${height}px`,
                            left: `${left}px`,
                            width: `${width}px`,
                            backgroundColor: '#ffffff',
                            borderLeftColor: color.primary,
                            boxShadow: isOfficialHighlighted
                              ? `0 2px 8px ${color.primary}30`
                              : undefined,
                          }}
                        >
                          {/* 核心显示：官员姓名（3个汉字清晰排布） */}
                          <span
                            className="font-bold text-[11px] sm:text-xs text-gray-900 tracking-tight leading-tight text-center truncate w-full block"
                            style={{
                              color: isOfficialHighlighted ? color.primary : '#1f2937',
                            }}
                          >
                            {official.name}
                          </span>

                          {/* 较长任期显示年限 */}
                          {height >= 50 && (
                            <span className="text-[9px] font-mono text-gray-400 leading-none mt-0.5 scale-90">
                              {record.startYear % 100}-{record.endYear ? record.endYear % 100 : '今'}
                            </span>
                          )}

                          {/* 更长任期展示职务前三字 */}
                          {height >= 75 && (
                            <span className="text-[9px] text-gray-500 line-clamp-1 text-center scale-90 leading-none mt-0.5">
                              {record.position.slice(0, 3)}
                            </span>
                          )}
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* 泳道表头悬停详情 Tooltip */}
      {hoveredLaneUnit && laneTooltipPos && (
        <div
          className="fixed z-50 pointer-events-none transform -translate-x-1/2 mt-2"
          style={{
            left: `${laneTooltipPos.x}px`,
            top: `${laneTooltipPos.y + 12}px`,
          }}
        >
          <div className="mac-card rounded-xl p-3 bg-white/95 backdrop-blur-md border border-black/[0.1] shadow-xl text-xs max-w-xs space-y-1">
            <div className="flex items-center justify-between gap-2 border-b border-black/[0.06] pb-1">
              <span className="font-bold text-gray-900 text-sm">
                {hoveredLaneUnit.name}
              </span>
              <span className="text-blue-600 bg-blue-50 px-1.5 py-0.2 rounded font-semibold text-[10px]">
                {hoveredLaneUnit.level}
              </span>
            </div>
            <div className="text-gray-500 text-[11px]">
              建制年份：{hoveredLaneUnit.establishedYear}年 | 机构简称：{hoveredLaneUnit.shortName}
            </div>
            <p className="text-gray-600 text-[11px] line-clamp-2 leading-relaxed">
              {hoveredLaneUnit.description}
            </p>
          </div>
        </div>
      )}

      {/* 任职记录悬停 Tooltip */}
      {activeTooltip && (
        <div
          className="fixed z-50 pointer-events-none transform -translate-x-1/2 -translate-y-full -mt-3"
          style={{
            left: `${activeTooltip.x}px`,
            top: `${activeTooltip.y}px`,
          }}
        >
          <div className="mac-card rounded-xl p-3.5 bg-white/95 backdrop-blur-md border border-black/[0.1] shadow-xl text-xs max-w-xs space-y-1.5 animate-in fade-in zoom-in-95 duration-75">
            <div className="flex items-center justify-between gap-2 border-b border-black/[0.06] pb-1.5">
              <div className="flex items-center gap-1.5">
                <span
                  className="w-2.5 h-2.5 rounded-full"
                  style={{
                    backgroundColor: getOfficialColor(activeTooltip.official.id).primary,
                  }}
                />
                <span className="font-bold text-gray-900 text-sm">
                  {activeTooltip.official.name}
                </span>
                <span className="text-gray-400">
                  ({activeTooltip.official.currentRank})
                </span>
              </div>
              <span className="text-blue-600 font-mono font-medium text-[11px]">
                {activeTooltip.record.startYear}.{activeTooltip.record.startMonth || 1} -{' '}
                {activeTooltip.record.endYear
                  ? `${activeTooltip.record.endYear}.${activeTooltip.record.endMonth || 12}`
                  : '至今'}
              </span>
            </div>

            <div className="text-gray-800 font-semibold">
              {activeTooltip.record.unitName}
              {activeTooltip.record.department ? ` · ${activeTooltip.record.department}` : ''}
            </div>

            <div className="text-gray-700">
              担任职务：<span className="font-medium">{activeTooltip.record.position}</span>
              {activeTooltip.record.rank && (
                <span className="ml-1.5 text-gray-500 bg-gray-100 px-1 py-0.2 rounded">
                  {activeTooltip.record.rank}
                </span>
              )}
            </div>

            {activeTooltip.record.notes && (
              <p className="text-gray-600 text-[11px] leading-relaxed bg-gray-50 p-2 rounded-lg border border-black/[0.03]">
                {activeTooltip.record.notes}
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
