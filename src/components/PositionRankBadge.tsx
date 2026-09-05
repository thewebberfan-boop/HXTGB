import React from 'react';
import { UnitLevel } from '../types';

export type ConciseRank = '部' | '副部' | '厅' | '副厅' | '处' | '副处' | string;

/**
 * 将长格式级别（如“副厅局级”、“正部级”）解析为极简中文（“副厅”、“部”、“处”等）
 */
export function getConciseRank(rank?: UnitLevel | string): string {
  if (!rank) return '';
  if (rank.includes('副部')) return '副部';
  if (rank.includes('正部') || rank === '部级') return '部';
  if (rank.includes('副厅')) return '副厅';
  if (rank.includes('正厅') || rank.includes('厅局')) return '厅';
  if (rank.includes('副处')) return '副处';
  if (rank.includes('正处') || rank.includes('处级')) return '处';
  return rank.replace(/局?级$/, '');
}

/**
 * 获取级别徽章的样式类名（阶梯式配色）
 */
export function getRankBadgeStyle(concise: string): { bg: string; text: string; border: string } {
  switch (concise) {
    case '部':
      return {
        bg: 'bg-rose-50',
        text: 'text-rose-700 font-bold',
        border: 'border-rose-200/80',
      };
    case '副部':
      return {
        bg: 'bg-amber-50',
        text: 'text-amber-800 font-bold',
        border: 'border-amber-200/80',
      };
    case '厅':
      return {
        bg: 'bg-blue-50',
        text: 'text-blue-700 font-semibold',
        border: 'border-blue-200/80',
      };
    case '副厅':
      return {
        bg: 'bg-cyan-50',
        text: 'text-cyan-800 font-medium',
        border: 'border-cyan-200/80',
      };
    case '处':
      return {
        bg: 'bg-emerald-50',
        text: 'text-emerald-700 font-medium',
        border: 'border-emerald-200/80',
      };
    case '副处':
      return {
        bg: 'bg-teal-50',
        text: 'text-teal-700 font-medium',
        border: 'border-teal-200/80',
      };
    default:
      return {
        bg: 'bg-gray-50',
        text: 'text-gray-600 font-medium',
        border: 'border-gray-200',
      };
  }
}

interface PositionRankBadgeProps {
  rank?: UnitLevel | string;
  isMini?: boolean;
  className?: string;
}

/**
 * 职位级别极简徽章组件
 * 在官员档案主页和时空泳道中公用
 */
export const PositionRankBadge: React.FC<PositionRankBadgeProps> = ({
  rank,
  isMini = false,
  className = '',
}) => {
  const concise = getConciseRank(rank);
  if (!concise) return null;

  const style = getRankBadgeStyle(concise);

  if (isMini) {
    return (
      <span
        className={`inline-flex items-center justify-center px-1 py-0.2 rounded text-[9px] border leading-none shrink-0 select-none ${style.bg} ${style.text} ${style.border} ${className}`}
        title={`职务编制级别：${rank}`}
      >
        {concise}
      </span>
    );
  }

  return (
    <span
      className={`inline-flex items-center gap-1 px-1.5 py-0.5 rounded-md text-[10px] border leading-tight shrink-0 select-none shadow-2xs ${style.bg} ${style.text} ${style.border} ${className}`}
      title={`职务编制级别：${rank}`}
    >
      <span className="w-1 h-1 rounded-full bg-current opacity-60" />
      {concise}
    </span>
  );
};
