'use client';

import React, { useState, useMemo, useRef, useEffect } from 'react';
import { Official, Unit, CareerRecord, UnitLevel } from '../types';
import { getOfficialColor } from '../data/csrcData';
import { GripVertical, X, UserPlus, UserMinus, Sparkles, Check, ExternalLink } from 'lucide-react';
import { PositionRankBadge } from './PositionRankBadge';

interface SwimlaneViewProps {
  units: Unit[];
  officials: Official[];
  selectedOfficialIds: string[];
  activeLaneUnitIds: string[];
  onReorderLanes: (newLaneIds: string[]) => void;
  onRemoveLane: (unitId: string) => void;
  onCompleteUnitOfficials: (unitId: string) => void;
  onNavigateToUnit: (unitId: string) => void;
  onNavigateToOfficial: (officialId: string) => void;
  isTimeReversed: boolean;
  hoveredOfficialId: string | null;
  onHoverOfficial: (id: string | null) => void;
  onSelectCoreLeadership?: () => void;
  onShowAllUnits?: () => void;
}

export const SwimlaneView: React.FC<SwimlaneViewProps> = ({
  units,
  officials,
  selectedOfficialIds,
  activeLaneUnitIds,
  onReorderLanes,
  onRemoveLane,
  onCompleteUnitOfficials,
  onNavigateToUnit,
  onNavigateToOfficial,
  isTimeReversed,
  hoveredOfficialId,
  onHoverOfficial,
  onSelectCoreLeadership,
  onShowAllUnits,
}) => {
  const [activeTooltip, setActiveTooltip] = useState<{
    record: CareerRecord;
    official: Official;
    x: number;
    y: number;
  } | null>(null);
  const [hoveredLaneUnit, setHoveredLaneUnit] = useState<Unit | null>(null);
  const [laneTooltipPos, setLaneTooltipPos] = useState<{ x: number; y: number } | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const toastTimerRef = useRef<NodeJS.Timeout | null>(null);

  // 容器宽高测量（动态自适应宽度与列头高度）
  const [containerWidth, setContainerWidth] = useState<number>(1200);
  const [containerHeight, setContainerHeight] = useState<number>(800);

  // 拖拽重排状态
  const [draggedLaneIndex, setDraggedLaneIndex] = useState<number | null>(null);
  const [dragOverLaneIndex, setDragOverLaneIndex] = useState<number | null>(null);

  const chartScrollContainerRef = useRef<HTMLDivElement>(null);

  // 尺寸参数
  const MIN_YEAR = 1996;
  const MAX_YEAR = 2026;
  const YEAR_HEIGHT = 44; // 每年 44px
  const TOTAL_HEIGHT = (MAX_YEAR - MIN_YEAR + 1) * YEAR_HEIGHT;
  const TIME_RULER_WIDTH = 64; // 左侧年份固定标尺 64px
  const MIN_LANE_WIDTH = 58; // 最小宽度（保证至少可显示 3 个汉字）

  // 双位数规范化年份辅助函数（如 2004 显示为 '04'，2007 显示为 '07'）
  const format2DigitYear = (year?: number) => year ? String(year % 100).padStart(2, '0') : '--';

  // 监听容器尺寸，动态自适应宽度与高度
  useEffect(() => {
    const el = chartScrollContainerRef.current;
    if (!el) return;

    const handleResize = () => {
      if (el.clientWidth > 0) {
        setContainerWidth(el.clientWidth);
      }
      if (el.clientHeight > 0) {
        setContainerHeight(el.clientHeight);
      }
    };

    handleResize();
    const observer = new ResizeObserver(handleResize);
    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, []);

  // 浮层提示触发
  const triggerToast = (msg: string) => {
    if (toastTimerRef.current) clearTimeout(toastTimerRef.current);
    setToastMessage(msg);
    toastTimerRef.current = setTimeout(() => {
      setToastMessage(null);
    }, 2400);
  };

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

  // 当前勾选的官员
  const selectedOfficials = useMemo(() => {
    return officials.filter((o) => selectedOfficialIds.includes(o.id));
  }, [officials, selectedOfficialIds]);

  // 全国各省市派出机构 ID 集合（在泳道图中统一汇聚为 csrc-df 单一泳道）
  const REGIONAL_BUREAU_IDS = useMemo(
    () => [
      'csrc-bj', 'csrc-sh', 'csrc-gd', 'csrc-sz', 'csrc-js', 
      'csrc-zj', 'csrc-sc', 'csrc-yn', 'csrc-fj', 'csrc-ah', 'csrc-df'
    ],
    []
  );

  // 1. 核心需求：根据选中的官员，动态过滤掉“没有履职内容”的空单位泳道
  // 需求一：将各地政府统一为一个 gov-local 泳道；
  // 需求二：将各地方证监局统一合并为 csrc-df 一个泳道；
  const visibleLanes = useMemo(() => {
    // 归一化候选泳道列表：各地方局统合为 csrc-df；地方政府统合为 gov-local
    const normalizedLaneIds: string[] = [];

    activeLaneUnitIds.forEach((id) => {
      if (REGIONAL_BUREAU_IDS.includes(id)) {
        if (!normalizedLaneIds.includes('csrc-df')) {
          normalizedLaneIds.push('csrc-df');
        }
      } else if (id === 'gov-sh' || id === 'gov-local') {
        if (!normalizedLaneIds.includes('gov-local')) {
          normalizedLaneIds.push('gov-local');
        }
      } else {
        if (!normalizedLaneIds.includes(id)) {
          normalizedLaneIds.push(id);
        }
      }
    });

    const candidateLanes = normalizedLaneIds
      .map((id) => unitMap.get(id))
      .filter((u): u is Unit => Boolean(u));

    // 如果未选择任何官员，则保留已选泳道
    if (selectedOfficials.length === 0) {
      return candidateLanes;
    }

    // 动态过滤：仅保留当前选中官员有任职履历或现任的单位
    return candidateLanes.filter((lane) => {
      return selectedOfficials.some((official) => {
        if (lane.id === 'csrc-df') {
          return (
            REGIONAL_BUREAU_IDS.includes(official.currentUnitId) ||
            official.careerHistory.some((rec) => REGIONAL_BUREAU_IDS.includes(rec.unitId))
          );
        }
        if (lane.id === 'gov-local') {
          return (
            official.currentUnitId === 'gov-local' ||
            official.careerHistory.some(
              (rec) => rec.unitId === 'gov-local' || rec.unitId === 'gov-sh' || rec.unitName.includes('政府')
            )
          );
        }
        return (
          official.currentUnitId === lane.id ||
          official.careerHistory.some(
            (rec) =>
              rec.unitId === lane.id ||
              (lane.id === 'csrc-main' &&
                rec.unitId.startsWith('csrc-') &&
                !REGIONAL_BUREAU_IDS.includes(rec.unitId) &&
                !candidateLanes.some((cl) => cl.id === rec.unitId))
          )
        );
      });
    });
  }, [activeLaneUnitIds, unitMap, selectedOfficials, REGIONAL_BUREAU_IDS]);

  // 2. 核心需求一（下半部分）：按照屏幕宽度平均分配各单位的泳道宽度（保证 >= MIN_LANE_WIDTH）
  const computedLaneWidth = useMemo(() => {
    const count = Math.max(1, visibleLanes.length);
    // 减去左侧固定时间标尺及少量边缘留白
    const availableWidth = Math.max(0, containerWidth - TIME_RULER_WIDTH - 4);
    const allocated = Math.floor(availableWidth / count);
    return Math.max(MIN_LANE_WIDTH, allocated);
  }, [containerWidth, visibleLanes.length, TIME_RULER_WIDTH, MIN_LANE_WIDTH]);

  // 3. 统计系统中各单位拥有的全部官员列表与数量（供一键补全/取消双向切换使用）
  const laneOfficialsMap = useMemo(() => {
    const map = new Map<string, Official[]>();
    units.forEach((u) => {
      const isRegionalLane = u.id === 'csrc-df';
      const isLocalGovLane = u.id === 'gov-local';
      const matched = officials.filter((o) => {
        if (isRegionalLane) {
          return (
            REGIONAL_BUREAU_IDS.includes(o.currentUnitId) ||
            o.careerHistory.some((r) => REGIONAL_BUREAU_IDS.includes(r.unitId))
          );
        }
        if (isLocalGovLane) {
          return (
            o.currentUnitId === 'gov-local' ||
            o.careerHistory.some((r) => r.unitId === 'gov-local' || r.unitId === 'gov-sh' || r.unitName.includes('政府'))
          );
        }
        return (
          o.currentUnitId === u.id ||
          o.careerHistory.some(
            (r) => r.unitId === u.id || (u.id === 'csrc-main' && r.unitId.startsWith('csrc-'))
          )
        );
      });
      map.set(u.id, matched);
    });
    return map;
  }, [units, officials, REGIONAL_BUREAU_IDS]);

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

    // 找到在原始 activeLaneUnitIds 中的映射
    const draggedUnit = visibleLanes[draggedLaneIndex];
    const targetUnit = visibleLanes[dropIndex];
    if (!draggedUnit || !targetUnit) return;

    const updated = [...activeLaneUnitIds];
    const fromIdx = updated.indexOf(draggedUnit.id);
    const toIdx = updated.indexOf(targetUnit.id);

    if (fromIdx !== -1 && toIdx !== -1) {
      const [moved] = updated.splice(fromIdx, 1);
      updated.splice(toIdx, 0, moved);
      onReorderLanes(updated);
    }

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

    const isWide = computedLaneWidth >= 110;

    visibleLanes.forEach((lane, laneIdx) => {
      const laneLeft = laneIdx * computedLaneWidth;
      const rawRecords: { official: Official; record: CareerRecord }[] = [];

      selectedOfficials.forEach((official) => {
        official.careerHistory.forEach((rec) => {
          let matches = false;
          if (lane.id === 'csrc-df') {
            matches = rec.unitId === 'csrc-df' || REGIONAL_BUREAU_IDS.includes(rec.unitId);
          } else if (lane.id === 'gov-local') {
            matches =
              rec.unitId === 'gov-local' ||
              rec.unitId === 'gov-sh' ||
              rec.unitName.includes('政府') ||
              Boolean(rec.department && rec.department.includes('政府'));
          } else if (lane.id === 'csrc-main') {
            matches =
              rec.unitId === 'csrc-main' ||
              (rec.unitId.startsWith('csrc-') &&
                !REGIONAL_BUREAU_IDS.includes(rec.unitId) &&
                !visibleLanes.some((l) => l.id === rec.unitId));
          } else {
            matches = rec.unitId === lane.id;
          }

          if (matches && rec.startYear) {
            rawRecords.push({ official, record: rec });
          }
        });
      });

      // 计算卡片位置及重叠避让
      const positioned = rawRecords.map((item, i) => {
        const startY = getYearYPosition(item.record.startYear!, item.record.startMonth || 1);
        const endY = getYearYPosition(item.record.endYear || 2026, item.record.endMonth || 12);
        const top = Math.min(startY, endY);
        const height = Math.max(32, Math.abs(endY - startY));

        const hasOverlap = rawRecords.some((other, j) => {
          if (i === j) return false;
          const oStartY = getYearYPosition(other.record.startYear!, other.record.startMonth || 1);
          const oEndY = getYearYPosition(other.record.endYear || 2026, other.record.endMonth || 12);
          const oTop = Math.min(oStartY, oEndY);
          const oBottom = Math.max(oStartY, oEndY);
          return !(top + height < oTop || top > oBottom);
        });

        const isMulti = hasOverlap && rawRecords.length > 1;
        const width = isMulti
          ? Math.max(26, Math.floor((computedLaneWidth - (isWide ? 14 : 5)) / 2))
          : computedLaneWidth - (isWide ? 10 : 5);
        const blockRelLeft = isMulti
          ? (i % 2 === 0 ? (isWide ? 5 : 2) : Math.floor(computedLaneWidth / 2) + (isWide ? 2 : 1))
          : (isWide ? 5 : 2.5);
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
  }, [visibleLanes, selectedOfficials, computedLaneWidth, isTimeReversed]);

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

            // 终点：目标职位 label 的上方中间（精准指向目标职位卡片 Label 正中！）
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

  const isWideMode = computedLaneWidth >= 110;

  // 1. 核心需求一：泳道图列头高度根据容器高度和宽窄模式动态自适应
  const computedHeaderHeight = useMemo(() => {
    const base = Math.max(74, Math.min(106, Math.round(containerHeight * 0.11)));
    if (isWideMode) {
      // 宽屏模式：文字横排，高度适度压缩至 74px ~ 84px，释放宝贵的时间线纵向空间
      return Math.min(base, 84);
    }
    // 窄屏模式：文字竖排，保证 3~5 汉字舒适排布
    return Math.max(base, 84);
  }, [containerHeight, isWideMode]);

  return (
    <div className="w-full h-full relative select-none">
      {/* 快捷操作反馈 Toast 浮层 */}
      {toastMessage && (
        <div className="absolute top-3 left-1/2 -translate-x-1/2 z-50 bg-gray-900/90 text-white text-xs px-4 py-2 rounded-xl shadow-xl flex items-center gap-2 backdrop-blur-md animate-in fade-in slide-in-from-top-2 duration-150 border border-white/10">
          <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* 
        主泳道图谱容器：
        - 充满可视高度，双向自由滚动
        - 列头通过 sticky top-0 牢牢锁定在顶部，纵向上滑时永不移出视线！
        - 左侧年份标尺通过 sticky left-0 牢牢锁定在左侧！
        - 泳道自适应屏幕宽度平分，列头自适应屏幕高度！
      */}
      <div
        ref={chartScrollContainerRef}
        className="mac-card rounded-2xl bg-white border border-black/[0.06] shadow-sm relative h-[calc(100vh-28px)] overflow-auto"
      >
        <div className="relative min-w-full w-max">
          {/* 1. 顶部锁定表头行 (Sticky Top) */}
          <div className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-black/[0.08] flex items-stretch min-w-max shadow-2xs">
            {/* 左上角交叉区域 (Sticky Top + Left) */}
            <div
              style={{ width: `${TIME_RULER_WIDTH}px`, height: `${computedHeaderHeight}px` }}
              className="sticky left-0 z-40 shrink-0 border-r border-black/[0.06] flex flex-col items-center justify-center bg-gray-100/95 text-gray-600 text-xs font-semibold py-1.5 shadow-xs"
            >
              <span className="text-[11px] font-bold">年份</span>
              <span className="text-[9px] text-gray-400 font-normal">
                {isTimeReversed ? '26-96' : '96-26'}
              </span>
              <span className="text-[8.5px] text-blue-600 bg-blue-50 px-1 py-0.2 rounded font-medium mt-1">
                {visibleLanes.length}泳道
              </span>
            </div>

            {/* 各单位自适应宽度的表头列 */}
            <div className="flex flex-1 items-stretch">
              {visibleLanes.length === 0 ? (
                <div className="flex-1 flex items-center px-4 text-xs text-gray-400 italic">
                  未选择泳道机构（可在左侧侧边栏添加或载入）
                </div>
              ) : (
                visibleLanes.map((lane, index) => {
                const isOver = dragOverLaneIndex === index;
                const microRank = getMicroRank(lane.level);
                const displayName = lane.tinyName || lane.shortName;
                const laneOfficials = laneOfficialsMap.get(lane.id) || [];
                const totalOfficialsInUnit = laneOfficials.length;
                const isAllSelected =
                  totalOfficialsInUnit > 0 &&
                  laneOfficials.every((o) => selectedOfficialIds.includes(o.id));

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
                    style={{ width: `${computedLaneWidth}px`, height: `${computedHeaderHeight}px` }}
                    className={`shrink-0 border-r border-black/[0.06] flex flex-col justify-between py-1.5 px-1 cursor-move transition-all relative group ${
                      isOver ? 'bg-blue-100 border-blue-500' : 'bg-white hover:bg-blue-50/40'
                    }`}
                    title="左右拖拽调换泳道排序"
                  >
                    {/* Top: 抓手 & 级别小角标 & 右上角机构主页跳转 & 移除按钮 */}
                    <div className="flex items-center justify-between w-full px-0.5">
                      <div className="flex items-center gap-1">
                        <GripVertical className="w-3 h-3 text-gray-300 group-hover:text-gray-600 transition-colors shrink-0" />
                        <span
                          className={`text-[8.5px] font-bold px-1 py-0.2 rounded leading-none ${microRank.bg}`}
                        >
                          {microRank.text}
                        </span>
                      </div>

                      <div className="flex items-center gap-0.5">
                        {/* 需求四：右上角跳转到机构主页按钮 */}
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onNavigateToUnit(lane.id);
                          }}
                          className="opacity-0 group-hover:opacity-100 text-gray-400 hover:text-blue-600 p-0.5 rounded hover:bg-blue-50 transition-all"
                          title={`前往「${lane.name}」机构编制档案主页 ↗`}
                        >
                          <ExternalLink className="w-2.5 h-2.5" />
                        </button>
                        {visibleLanes.length > 1 && (
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              onRemoveLane(lane.id);
                            }}
                            className="opacity-0 group-hover:opacity-100 text-gray-400 hover:text-red-500 p-0.5 rounded hover:bg-red-50 transition-opacity"
                            title="从泳道视图中移除"
                          >
                            <X className="w-2.5 h-2.5" />
                          </button>
                        )}
                      </div>
                    </div>

                    {/* Middle: 机构名称（宽屏横排，窄屏竖排） */}
                    <div className="my-auto flex items-center justify-center w-full px-0.5">
                      {isWideMode ? (
                        <div className="text-center">
                          <span className="font-bold text-xs text-gray-900 leading-tight line-clamp-2">
                            {lane.shortName || displayName}
                          </span>
                        </div>
                      ) : (
                        <div
                          className="font-semibold text-[11px] text-gray-800 tracking-wider flex items-center justify-center leading-tight text-center"
                          style={{
                            writingMode: 'vertical-rl',
                            textOrientation: 'upright',
                            letterSpacing: '1px',
                          }}
                        >
                          {displayName}
                        </div>
                      )}
                    </div>

                    {/* Bottom: 核心需求「补全/取消该单位所有官员及关联泳道」双向切换按钮 */}
                    <div className="w-full flex items-center justify-center pt-1 border-t border-black/[0.04]">
                      {isWideMode ? (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onCompleteUnitOfficials(lane.id);
                            if (isAllSelected) {
                              triggerToast(`已取消勾选「${displayName}」关联的全部 ${totalOfficialsInUnit} 位干部`);
                            } else {
                              triggerToast(
                                `已补全「${displayName}」的全部 ${totalOfficialsInUnit} 位干部并自动联动关联泳道！`
                              );
                            }
                          }}
                          className={`w-full py-0.5 px-1.5 rounded-lg text-[10px] font-medium flex items-center justify-center gap-1 shadow-2xs transition-all hover:scale-[1.02] active:scale-95 border ${
                            isAllSelected
                              ? 'bg-amber-50 hover:bg-amber-100 text-amber-700 border-amber-300'
                              : 'bg-blue-50 hover:bg-blue-100 text-blue-600 border-blue-200/50'
                          }`}
                          title={
                            isAllSelected
                              ? `点击取消勾选「${displayName}」关联的全部 ${totalOfficialsInUnit} 位干部`
                              : `点击一键补全「${displayName}」全部 ${totalOfficialsInUnit} 位履历官员，并自动补充其流转单位泳道`
                          }
                        >
                          {isAllSelected ? (
                            <>
                              <UserMinus className="w-2.5 h-2.5 shrink-0 text-amber-600" />
                              <span className="truncate">取消干部 ({totalOfficialsInUnit})</span>
                            </>
                          ) : (
                            <>
                              <UserPlus className="w-2.5 h-2.5 shrink-0 text-blue-600" />
                              <span className="truncate">补全干部 ({totalOfficialsInUnit})</span>
                            </>
                          )}
                        </button>
                      ) : (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onCompleteUnitOfficials(lane.id);
                            if (isAllSelected) {
                              triggerToast(`已取消勾选「${displayName}」关联干部`);
                            } else {
                              triggerToast(
                                `已补全「${displayName}」的 ${totalOfficialsInUnit} 位干部履历与关联泳道`
                              );
                            }
                          }}
                          className={`p-0.5 w-full rounded-md text-[9px] font-medium flex items-center justify-center gap-0.5 shadow-2xs transition-all hover:scale-105 active:scale-95 border ${
                            isAllSelected
                              ? 'bg-amber-50 hover:bg-amber-100 text-amber-700 border-amber-300'
                              : 'bg-blue-50 hover:bg-blue-100 text-blue-600 border-blue-200/50'
                          }`}
                          title={
                            isAllSelected
                              ? `取消勾选「${displayName}」关联的全部 ${totalOfficialsInUnit} 位干部`
                              : `补全「${displayName}」全部 ${totalOfficialsInUnit} 位履历官员及关联泳道`
                          }
                        >
                          {isAllSelected ? (
                            <>
                              <UserMinus className="w-2.5 h-2.5 text-amber-600 shrink-0" />
                              <span className="text-[8.5px] font-bold text-amber-700">{totalOfficialsInUnit}</span>
                            </>
                          ) : (
                            <>
                              <UserPlus className="w-2.5 h-2.5 text-blue-600 shrink-0" />
                              <span className="text-[8.5px] font-bold">{totalOfficialsInUnit}</span>
                            </>
                          )}
                        </button>
                      )}
                    </div>
                  </div>
                );
              }))}
            </div>
          </div>

          {/* 2. 泳道纵向主体网格 */}
          <div
            className="relative flex min-w-full w-max"
            style={{ height: `${TOTAL_HEIGHT}px` }}
          >
            {/* 左侧锁定时间标尺 (Sticky Left) */}
            <div
              style={{ width: `${TIME_RULER_WIDTH}px` }}
              className="sticky left-0 z-20 shrink-0 border-r border-black/[0.06] bg-gray-50/90 backdrop-blur-xs select-none relative shadow-xs"
            >
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
              {visibleLanes.length === 0 ? (
                <div className="flex-1 flex flex-col items-center justify-center p-12 text-center select-none sticky top-28 left-0 right-0 h-[calc(100vh-160px)] min-h-[420px]">
                  <div className="w-16 h-16 rounded-2xl bg-blue-50 border border-blue-100/80 flex items-center justify-center text-blue-600 mb-4 shadow-xs">
                    <Sparkles className="w-8 h-8 stroke-[1.75]" />
                  </div>
                  <h3 className="text-base font-bold text-gray-800 tracking-tight mb-2">
                    时空泳道暂未选择对比机构或人员
                  </h3>
                  <p className="text-xs text-gray-500 max-w-md leading-relaxed mb-6">
                    当前泳道尚未加载任何官员或机构。您可以在左侧侧边栏勾选感兴趣的干部、添加机构，或直接点击下方按钮一键载入对比。
                  </p>
                  <div className="flex items-center gap-3">
                    {onSelectCoreLeadership && (
                      <button
                        onClick={onSelectCoreLeadership}
                        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 active:scale-95 text-white text-xs font-semibold rounded-xl shadow-sm transition-all flex items-center gap-1.5 cursor-pointer"
                      >
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>载入核心领导班子</span>
                      </button>
                    )}
                    {onShowAllUnits && (
                      <button
                        onClick={onShowAllUnits}
                        className="px-4 py-2 bg-white hover:bg-gray-50 active:scale-95 text-gray-700 text-xs font-semibold rounded-xl border border-black/[0.08] shadow-2xs transition-all flex items-center gap-1.5 cursor-pointer"
                      >
                        <span>显示全部 24 个单位泳道</span>
                      </button>
                    )}
                  </div>
                </div>
              ) : (
                <>
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
              {visibleLanes.map((lane) => {
                const records = laneRecordsMap[lane.id] || [];

                return (
                  <div
                    key={lane.id}
                    style={{ width: `${computedLaneWidth}px` }}
                    className="shrink-0 border-r border-black/[0.06] relative z-20 hover:bg-black/[0.005] transition-colors"
                  >
                    {/* 任职卡片 Block */}
                    {records.map(({ official, record, top, height, left, width }) => {
                      const color = getOfficialColor(official.id);
                      const isOfficialHighlighted =
                        hoveredOfficialId === null ||
                        hoveredOfficialId === official.id;
                      const isDerived = !!record.isDerived;

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
                          className={`absolute rounded-lg cursor-pointer transition-all duration-150 flex flex-col justify-center p-1 select-none overflow-hidden ${
                            isDerived
                              ? 'border-l-[3.5px] border-t border-r border-b border-dashed border-amber-600/40'
                              : 'border-l-[3.5px] border-t border-r border-b border-black/[0.08]'
                          } ${
                            isOfficialHighlighted
                              ? 'opacity-100 shadow-xs hover:shadow-md hover:scale-105 hover:z-40'
                              : 'opacity-20 grayscale'
                          }`}
                          style={{
                            top: `${top}px`,
                            height: `${height}px`,
                            left: `${left}px`,
                            width: `${width}px`,
                            // 推导履历使用略浅、带半透明质感的浅灰底色；确证履历使用纯白
                            backgroundColor: isDerived ? '#f8fafc' : '#ffffff',
                            borderLeftColor: color.primary,
                            boxShadow: isOfficialHighlighted
                              ? `0 2px 8px ${color.primary}30`
                              : undefined,
                          }}
                        >
                          {/* 宽屏与窄屏自适应显示 */}
                          {isWideMode ? (
                            <div className="w-full h-full flex flex-col justify-between py-0.5 leading-tight group/card">
                              <div className="flex items-center justify-between gap-1">
                                <div className="flex items-center gap-1 truncate">
                                  <span
                                    className="font-bold text-xs text-gray-900 truncate"
                                    style={{
                                      color: isOfficialHighlighted ? color.primary : '#111827',
                                    }}
                                  >
                                    {official.name}
                                  </span>
                                  {isDerived && (
                                    <span
                                      className="text-[8px] px-1 py-0.2 rounded bg-amber-50 text-amber-700 border border-amber-300/80 font-normal shrink-0 leading-none"
                                      title={`新闻推导履历：${record.sourceNote || '由公开新闻报道与履职线索推导'}`}
                                    >
                                      推
                                    </span>
                                  )}
                                </div>
                                <div className="flex items-center gap-0.5 shrink-0">
                                  <span className="text-[9px] text-gray-400 bg-gray-100 px-1 py-0.2 rounded font-mono shrink-0">
                                    {format2DigitYear(record.startYear)}-{record.endYear ? format2DigitYear(record.endYear) : '今'}
                                  </span>
                                  {/* 需求四：卡片右上角跳转官员主页 */}
                                  <button
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      onNavigateToOfficial(official.id);
                                    }}
                                    className="opacity-0 group-hover/card:opacity-100 text-gray-400 hover:text-blue-600 p-0.5 rounded hover:bg-blue-50 transition-all shrink-0"
                                    title={`查看「${official.name}」官员档案主页 ↗`}
                                  >
                                    <ExternalLink className="w-2.5 h-2.5" />
                                  </button>
                                </div>
                              </div>

                              {/* 职务与需求六职位级别极简公用标签 */}
                              <div className="flex items-center gap-1 truncate font-medium mt-0.5">
                                <PositionRankBadge rank={record.rank} isMini />
                                <span className="text-[10px] text-gray-600 truncate">{record.position}</span>
                              </div>

                              {/* 备注或部门 */}
                              {height >= 60 && record.department && (
                                <div className="text-[9px] text-gray-400 truncate mt-0.5">
                                  {record.department}
                                </div>
                              )}
                            </div>
                          ) : (
                            /* 窄屏紧凑模式（核心突出 3 汉字人名与简洁级别） */
                            <div className="w-full flex flex-col items-center justify-center group/card relative">
                              <div className="flex items-center justify-center gap-0.5 w-full">
                                <span
                                  className="font-bold text-[11px] sm:text-xs text-gray-900 tracking-tight leading-tight text-center truncate"
                                  style={{
                                    color: isOfficialHighlighted ? color.primary : '#1f2937',
                                  }}
                                >
                                  {official.name}
                                </span>
                                {isDerived && (
                                  <span
                                    className="text-[7.5px] px-0.5 py-0.2 rounded bg-amber-50 text-amber-700 border border-amber-300 font-normal shrink-0 leading-none"
                                    title="新闻推导履历"
                                  >
                                    推
                                  </span>
                                )}
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    onNavigateToOfficial(official.id);
                                  }}
                                  className="opacity-0 group-hover/card:opacity-100 text-gray-400 hover:text-blue-600 p-0.5 rounded hover:bg-blue-50 transition-all shrink-0"
                                  title={`查看「${official.name}」档案 ↗`}
                                >
                                  <ExternalLink className="w-2 h-2" />
                                </button>
                              </div>

                              {height >= 44 && (
                                <span className="text-[9px] font-mono text-gray-400 leading-none mt-0.5 scale-90">
                                  {format2DigitYear(record.startYear)}-{record.endYear ? format2DigitYear(record.endYear) : '今'}
                                </span>
                              )}

                              {height >= 65 && (
                                <div className="flex items-center justify-center gap-0.5 mt-0.5 scale-90">
                                  <PositionRankBadge rank={record.rank} isMini />
                                  <span className="text-[9px] text-gray-500 line-clamp-1 text-center leading-none">
                                    {record.position.slice(0, 3)}
                                  </span>
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                );
              })}
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* 泳道表头悬停详情 Tooltip */}
      {hoveredLaneUnit && laneTooltipPos && (
        <div
          className="fixed z-50 pointer-events-auto transform -translate-x-1/2 mt-2"
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
              <div className="flex items-center gap-1.5">
                <span className="text-blue-600 bg-blue-50 px-1.5 py-0.2 rounded font-semibold text-[10px]">
                  {hoveredLaneUnit.level}
                </span>
                <button
                  onClick={() => onNavigateToUnit(hoveredLaneUnit.id)}
                  className="flex items-center gap-0.5 px-1.5 py-0.5 bg-blue-50 hover:bg-blue-100 text-blue-600 text-[10px] rounded font-medium border border-blue-200/60 shadow-2xs transition-all hover:scale-105"
                  title="前往该机构编制档案主页 ↗"
                >
                  <span>机构主页</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </button>
              </div>
            </div>
            <div className="text-gray-500 text-[11px]">
              建制年份：{hoveredLaneUnit.establishedYear}年 | 机构简称：{hoveredLaneUnit.shortName}
            </div>
            <div className="text-blue-600 text-[11px] font-medium">
              系统记录任职干部：{(laneOfficialsMap.get(hoveredLaneUnit.id) || []).length} 位
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
          className="fixed z-50 pointer-events-auto transform -translate-x-1/2 -translate-y-full -mt-3"
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
                <span className="text-gray-400 text-[11px]">
                  ({activeTooltip.official.currentRank})
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-blue-600 font-mono font-medium text-[11px]">
                  {format2DigitYear(activeTooltip.record.startYear)}.{activeTooltip.record.startMonth || 1} -{' '}
                  {activeTooltip.record.endYear
                    ? `${format2DigitYear(activeTooltip.record.endYear)}.${activeTooltip.record.endMonth || 12}`
                    : '至今'}
                </span>
                <button
                  onClick={() => onNavigateToOfficial(activeTooltip.official.id)}
                  className="flex items-center gap-0.5 px-1.5 py-0.5 bg-blue-50 hover:bg-blue-100 text-blue-600 text-[10px] rounded font-medium border border-blue-200/60 shadow-2xs transition-all hover:scale-105"
                  title="前往官员全息档案主页 ↗"
                >
                  <span>主页</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </button>
              </div>
            </div>

            <div className="text-gray-800 font-semibold">
              {activeTooltip.record.unitName}
              {activeTooltip.record.department ? ` · ${activeTooltip.record.department}` : ''}
            </div>

            <div className="text-gray-700 flex items-center gap-1.5 flex-wrap">
              <span>担任职务：</span>
              <span className="font-medium">{activeTooltip.record.position}</span>
              <PositionRankBadge rank={activeTooltip.record.rank} />
            </div>

            {/* 履历考据置信度与证据链 */}
            {activeTooltip.record.confidence && (
              <div className="p-2 rounded-lg bg-gray-50 border border-black/[0.04] space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] text-gray-500 font-medium">考据置信度</span>
                  <span
                    className={`px-1.5 py-0.2 rounded font-semibold text-[10px] ${
                      activeTooltip.record.confidence.level === 'high'
                        ? 'bg-emerald-100 text-emerald-800 border border-emerald-300/60'
                        : activeTooltip.record.confidence.level === 'medium'
                        ? 'bg-blue-100 text-blue-800 border border-blue-300/60'
                        : 'bg-amber-100 text-amber-800 border border-amber-300/60'
                    }`}
                  >
                    {activeTooltip.record.confidence.score}% · {activeTooltip.record.confidence.label}
                  </span>
                </div>
                {activeTooltip.record.confidence.source && (
                  <div className="text-[10.5px] text-gray-600 leading-snug line-clamp-2">
                    <span className="text-gray-400">信源依据：</span>
                    {activeTooltip.record.confidence.source}
                  </div>
                )}
              </div>
            )}

            {activeTooltip.record.isDerived && !activeTooltip.record.confidence && (
              <div className="flex items-start gap-1.5 text-[11px] text-amber-900 bg-amber-50/90 border border-amber-200/80 p-2 rounded-lg leading-snug">
                <span className="shrink-0 font-bold px-1 py-0.2 bg-amber-200/70 rounded text-[9px] text-amber-800">
                  新闻推导
                </span>
                <span className="text-gray-700 leading-tight">
                  {activeTooltip.record.sourceNote || '根据公开新闻动态、干部大会报道或历史任职线索反推'}
                </span>
              </div>
            )}

            {activeTooltip.record.notes && (
              <p className="text-gray-600 text-[11px] leading-relaxed bg-gray-50 p-2 rounded-lg border border-black/[0.03]">
                {activeTooltip.record.notes}
              </p>
            )}
          </div>
        </div>
      )}

      {/* 底部悬浮图例说明：清晰告知用户实线确证与虚线推导的视觉规范 */}
      <div className="absolute bottom-3 right-4 z-40 bg-white/95 backdrop-blur-md border border-black/[0.08] rounded-xl px-3 py-1.5 shadow-md flex items-center gap-3 text-[11px] text-gray-600 pointer-events-auto select-none">
        <div className="flex items-center gap-1.5">
          <span className="w-3.5 h-2.5 bg-white border border-gray-400 rounded-xs shadow-2xs inline-block" />
          <span className="font-medium text-gray-700">实线白底：确证履历</span>
        </div>
        <span className="text-gray-300">|</span>
        <div className="flex items-center gap-1.5">
          <span className="w-3.5 h-2.5 bg-slate-100 border border-dashed border-amber-500/80 rounded-xs inline-block" />
          <span className="flex items-center gap-0.5">
            <span className="font-medium text-gray-700">虚线浅色</span>
            <span className="text-[8px] bg-amber-100 text-amber-800 border border-amber-300/70 px-0.5 rounded leading-none">推</span>
            <span className="font-medium text-gray-700">：新闻推导</span>
          </span>
        </div>
      </div>
    </div>
  );
};
