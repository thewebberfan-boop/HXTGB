'use client';

import React, { useState, useMemo, useEffect } from 'react';
import { Official, Unit, EducationInfo, CareerRecord } from '../types';
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
  Users,
  X,
  Maximize2
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


// ==================== 时空重叠匹配引擎 (Alumni & Colleague Matching Engine) ====================

const CURRENT_DATA_YEAR = 2026;
const CURRENT_DATA_MONTH = 3;

/**
 * 严谨的月份级时间区间交集计算函数
 * 彻底消除过去朴素整数减法 + 1 造成的虚高错误，精确到年和月
 */
export function calculatePreciseOverlap(
  startA: number,
  startMonthA: number | undefined,
  endA: number | null,
  endMonthA: number | null | undefined,
  startB: number,
  startMonthB: number | undefined,
  endB: number | null,
  endMonthB: number | null | undefined,
  currentYear = CURRENT_DATA_YEAR,
  currentMonth = CURRENT_DATA_MONTH
): {
  hasOverlap: boolean;
  overlapMonths: number;
  overlapDisplay: string;
  startStr: string;
  endStr: string;
} {
  const smA = startA * 12 + ((startMonthA || 1) - 1);
  const emA = endA ? endA * 12 + ((endMonthA || 12) - 1) : currentYear * 12 + (currentMonth - 1);

  const smB = startB * 12 + ((startMonthB || 1) - 1);
  const emB = endB ? endB * 12 + ((endMonthB || 12) - 1) : currentYear * 12 + (currentMonth - 1);

  const ovStart = Math.max(smA, smB);
  const ovEnd = Math.min(emA, emB);

  if (ovStart > ovEnd) {
    return {
      hasOverlap: false,
      overlapMonths: 0,
      overlapDisplay: '',
      startStr: '',
      endStr: '',
    };
  }

  const totalMonths = ovEnd - ovStart + 1;
  const years = Math.floor(totalMonths / 12);
  const remMonths = totalMonths % 12;

  let overlapDisplay = '';
  if (years > 0 && remMonths >= 2) {
    overlapDisplay = `重合 ${years}年${remMonths}个月`;
  } else if (years > 0) {
    overlapDisplay = `重合约 ${years} 年`;
  } else {
    overlapDisplay = `重合 ${Math.max(1, remMonths)} 个月`;
  }

  const startY = Math.floor(ovStart / 12);
  const startM = (ovStart % 12) + 1;
  const endY = Math.floor(ovEnd / 12);
  const endM = (ovEnd % 12) + 1;

  const startStr = `${startY}.${startM < 10 ? '0' + startM : startM}`;
  const endStr = !endA && !endB && endY >= currentYear ? '至今' : `${endY}.${endM < 10 ? '0' + endM : endM}`;

  return {
    hasOverlap: true,
    overlapMonths: totalMonths,
    overlapDisplay,
    startStr,
    endStr,
  };
}

/**
 * 统计两位官员在整个历史生涯中的“总交汇次数”与“累计总共事时长”
 */
export function getColleagueTotalIntersections(
  targetOfficial: Official,
  colleagueOfficial: Official
): {
  totalCount: number;
  totalMonths: number;
  totalDisplay: string;
} {
  let totalCount = 0;
  let totalMonths = 0;

  for (const rA of targetOfficial.careerHistory || []) {
    for (const rB of colleagueOfficial.careerHistory || []) {
      const { isMatch } = checkSpaceMatch(rA, rB);
      if (isMatch) {
        const ov = calculatePreciseOverlap(
          rA.startYear,
          rA.startMonth,
          rA.endYear,
          rA.endMonth,
          rB.startYear,
          rB.startMonth,
          rB.endYear,
          rB.endMonth
        );
        if (ov.hasOverlap) {
          totalCount += 1;
          totalMonths += ov.overlapMonths;
        }
      }
    }
  }

  const years = Math.floor(totalMonths / 12);
  const remMonths = totalMonths % 12;
  let durStr = '';
  if (years > 0 && remMonths >= 2) {
    durStr = `${years}年${remMonths}个月`;
  } else if (years > 0) {
    durStr = `约 ${years} 年`;
  } else {
    durStr = `${Math.max(1, remMonths)} 个月`;
  }

  return {
    totalCount,
    totalMonths,
    totalDisplay: `累计交汇 ${totalCount} 次 · 共 ${durStr}`,
  };
}

export function normalizeSchoolName(school: string): string {
  let s = (school || '').trim();
  s = s.replace(/（.*?）|\(.*?\)/g, '').trim();

  if (s.includes('人民大学')) return '中国人民大学';
  if (s.includes('清华大学')) return '清华大学';
  if (s.includes('北京大学')) return '北京大学';
  if (s.includes('复旦大学')) return '复旦大学';
  if (s.includes('浙江大学')) return '浙江大学';
  if (s.includes('南京大学')) return '南京大学';
  if (s.includes('中山大学')) return '中山大学';
  if (s.includes('山东大学')) return '山东大学';
  if (s.includes('武汉大学')) return '武汉大学';
  if (s.includes('厦门大学')) return '厦门大学';
  if (s.includes('南开大学')) return '南开大学';
  if (s.includes('吉林大学')) return '吉林大学';
  if (s.includes('西安交通大学') || s.includes('陕西财经')) return '西安交通大学';
  if (s.includes('华中科技') || s.includes('华中理工')) return '华中科技大学';
  if (s.includes('中南财经')) return '中南财经政法大学';
  if (s.includes('西南财经')) return '西南财经大学';
  if (s.includes('上海财经')) return '上海财经大学';
  if (s.includes('中央财经')) return '中央财经大学';
  if (s.includes('对外经济贸易') || s.includes('对外经贸')) return '对外经济贸易大学';
  if (s.includes('东北财经')) return '东北财经大学';
  if (s.includes('江西财经')) return '江西财经大学';
  if (s.includes('安徽财贸') || s.includes('安徽财经')) return '安徽财经大学';
  if (s.includes('中国政法')) return '中国政法大学';
  if (s.includes('西南政法')) return '西南政法大学';
  if (s.includes('华东政法')) return '华东政法大学';
  if (s.includes('社会科学院') || s.includes('社科院')) return '中国社会科学院研究生院';
  if (s.includes('财政科学研究所') || s.includes('财政部科研所')) return '财政部财政科学研究所';
  if (s.includes('湖南财经') || s.includes('湖南大学')) return '湖南大学';
  if (s.includes('斯坦福')) return '斯坦福大学';
  if (s.includes('杜克大学')) return '杜克大学';
  if (s.includes('伦敦商学院')) return '伦敦商学院';

  for (const suffix of ['经济管理学院', '光华管理学院', '五道口金融学院', '财政金融学院', '劳动人事学院', '商学院', '管理学院', '法学院', '金融学院', '经济学院', '研究生院']) {
    if (s.endsWith(suffix)) {
      s = s.slice(0, -suffix.length).trim();
    }
  }
  return s;
}

export function getEduSpan(official: Official, edu: EducationInfo): { startYear: number; endYear: number } {
  if (edu.startYear && edu.endYear) {
    return { startYear: edu.startYear, endYear: edu.endYear };
  }

  const gradYear = edu.graduationYear;
  const degree = edu.degree;
  const birth = official.birthYear || 1970;

  if (gradYear) {
    if (degree === '学士' || degree === '大专') {
      return { startYear: gradYear - 4, endYear: gradYear };
    } else if (degree === '硕士') {
      return { startYear: gradYear - 3, endYear: gradYear };
    } else if (degree === '博士') {
      return { startYear: gradYear - 4, endYear: gradYear };
    } else {
      return { startYear: gradYear - 3, endYear: gradYear };
    }
  } else {
    if (degree === '学士' || degree === '大专') {
      return { startYear: birth + 18, endYear: birth + 22 };
    } else if (degree === '硕士') {
      return { startYear: birth + 22, endYear: birth + 25 };
    } else if (degree === '博士') {
      return { startYear: birth + 25, endYear: birth + 29 };
    } else {
      return { startYear: birth + 20, endYear: birth + 24 };
    }
  }
}

export interface AlumniMatch {
  official: Official;
  education: EducationInfo;
  overlapYears: number;
  overlapDisplay: string;
  totalIntersectionCount: number;
  totalIntersectionDisplay: string;
  reason: string;
}

export function findAlumniForEdu(
  targetOfficial: Official,
  targetEdu: EducationInfo,
  allOfficials: Official[]
): AlumniMatch[] {
  const normSchool = normalizeSchoolName(targetEdu.school);
  if (!normSchool || normSchool.length < 3) return [];

  const targetSpan = getEduSpan(targetOfficial, targetEdu);
  const matches: AlumniMatch[] = [];

  for (const other of allOfficials) {
    if (other.id === targetOfficial.id) continue;

    let bestMatchForOther: AlumniMatch | null = null;

    for (const otherEdu of other.education || []) {
      const otherNormSchool = normalizeSchoolName(otherEdu.school);
      if (otherNormSchool === normSchool) {
        const otherSpan = getEduSpan(other, otherEdu);
        const ovStart = Math.max(targetSpan.startYear, otherSpan.startYear);
        const ovEnd = Math.min(targetSpan.endYear, otherSpan.endYear);

        if (ovStart <= ovEnd) {
          // 学制重叠年限计算：跨越的共同学年数
          const years = Math.max(1, ovEnd - ovStart);
          if (!bestMatchForOther || years > bestMatchForOther.overlapYears) {
            const stats = getColleagueTotalIntersections(targetOfficial, other);
            bestMatchForOther = {
              official: other,
              education: otherEdu,
              overlapYears: years,
              overlapDisplay: `同窗 ${years} 年`,
              totalIntersectionCount: stats.totalCount,
              totalIntersectionDisplay: stats.totalDisplay,
              reason: `${normSchool}校友`,
            };
          }
        }
      }
    }

    if (bestMatchForOther) {
      matches.push(bestMatchForOther);
    }
  }

  return matches.sort((a, b) => b.overlapYears - a.overlapYears);
}

const DEPT_KEYWORDS: [string, string[]][] = [
  ['发行', ['发行', '发审', '新股']],
  ['上市', ['上市', '公司监管', '上市公司']],
  ['机构', ['机构监管', '证券公司', '券商', '中介机构']],
  ['基金', ['基金监管', '公募基金', '私募基金', '资管']],
  ['期货', ['期货监管', '期货部']],
  ['稽查', ['稽查局', '稽查总队', '稽查大队', '案件稽查', '执法局', '稽查']],
  ['办公厅', ['办公厅', '办公室', '研究室', '政策研究']],
  ['法律', ['法律部', '法规处', '行政复议', '法制']],
  ['国际', ['国际部', '国际合作', '涉外']],
  ['科技', ['科技监管', '信息中心', '计算机', '信息技术']],
  ['会计', ['会计部', '财务部', '预算', '首席会计师']],
  ['人事', ['人事部', '人事教育', '党委组织部', '组织部']],
  ['处罚', ['行政处罚', '案件审理', '处罚委']],
  ['市场', ['市场监管', '市场部', '市场一处', '交易部', '综合司']],
  ['非公', ['非上市公众公司', '创新业务', '打非']],
  ['债券', ['公司债券', '债券监管']],
  ['信访', ['信访办', '投资者保护', '投保局']],
];

function isCsrcLeadership(record: CareerRecord): boolean {
  const pos = record.position || '';
  const dept = (record.department || '').trim();
  const uid = record.unitId || '';
  const uname = record.unitName || '';

  if (['银行', '政府', '市委', '发改委', '计委', '国资委', '财政部', '交易所', '结算', '中证', '投保', '监控中心', '协会', '学院', '公司', '股份'].some(k => uname.includes(k))) {
    return false;
  }

  if (!uname.includes('证监会') && !uname.includes('证券监督管理委员会') && uname !== '国务院证券委' && uname !== '中国证监会机关' && uname !== '中国证监会') {
    return false;
  }

  if (['发行', '上市', '机构', '基金', '期货', '稽查', '办公厅', '法律', '国际', '科技', '会计', '人事', '处罚', '债券', '非公', '信访', '外事', '信息中心'].some(d => dept.includes(d))) {
    return false;
  }

  if (['主席助理', '驻会纪检', '纪检监察组长', '纪委书记'].some(t => pos.includes(t))) {
    return true;
  }

  if ((pos.includes('主席') || pos.includes('副主席')) && !['工会', '协会', '交易所'].some(neg => pos.includes(neg))) {
    return true;
  }

  if (pos.startsWith('党委书记') || pos.startsWith('党委副书记') || pos.includes('党委委员、副主席') || pos.includes('副主席、党委委员') || pos.includes('党委副书记、副主席')) {
    return true;
  }

  return false;
}

function getDeptCategory(record: CareerRecord): string | null {
  const text = `${record.department || ''} ${record.position || ''}`;
  for (const [catName, kwList] of DEPT_KEYWORDS) {
    for (const kw of kwList) {
      if (text.includes(kw)) return catName;
    }
  }
  return null;
}

function getRealEntity(record: CareerRecord): [string, string] {
  const uname = record.unitName || '';
  const uid = record.unitId || '';
  const notes = record.notes || '';

  for (const bank of ['中国建设银行', '中国工商银行', '中国银行', '中国农业银行', '交通银行', '国家开发银行']) {
    if (uname.includes(bank)) return ['bank', bank];
  }
  if (uname.includes('人民银行') || uname.includes('外汇管理局') || uname.includes('央行')) {
    return ['pboc', '中国人民银行'];
  }
  if (uname.includes('发改委') || uname.includes('国家计委')) {
    return ['ndrc', '国家发改委/国家计委'];
  }
  if (uname.includes('国资委')) {
    return ['sasac', '国务院国资委'];
  }
  if (uname.includes('财政部')) {
    return ['mof', '财政部'];
  }

  if (uid.startsWith('gov-') || uname.includes('政府') || uname.includes('市委') || uname.includes('金融办') || uname.includes('区委')) {
    for (const city of ['上海', '南京', '深圳', '北京', '广州', '山东', '江苏', '广东', '天津', '重庆']) {
      if (uname.includes(city) || notes.includes(city)) {
        return ['gov', `${city}党政机构`];
      }
    }
    return ['gov', '地方党政机构'];
  }

  const exchangeMap: [string, string][] = [
    ['上海证券交易所', '上海证券交易所'],
    ['深圳证券交易所', '深圳证券交易所'],
    ['北京证券交易所', '北京证券交易所'],
    ['全国股转公司', '全国股转公司'],
    ['新三板', '全国股转公司'],
    ['中国金融期货交易所', '中国金融期货交易所'],
    ['中金所', '中国金融期货交易所'],
    ['郑州商品交易所', '郑州商品交易所'],
    ['大连商品交易所', '大连商品交易所'],
    ['广州期货交易所', '广州期货交易所'],
    ['上海期货交易所', '上海期货交易所'],
    ['证券登记结算', '中国结算'],
    ['中国结算', '中国结算'],
    ['中证数据', '中证数据'],
    ['证券金融', '中证金融'],
    ['中证金融', '中证金融'],
    ['研究所', '资本市场研究所/学院'],
    ['中证信息', '中证信息'],
    ['保护基金', '投保基金'],
    ['投保基金', '投保基金'],
    ['期货市场监控中心', '保证金监控中心'],
    ['保证金监控中心', '保证金监控中心'],
    ['证券业协会', '中国证券业协会'],
    ['证券投资基金业协会', '中国证券投资基金业协会'],
    ['期货业协会', '中国期货业协会'],
    ['资本市场学院', '资本市场研究所/学院']
  ];

  for (const [kw, name] of exchangeMap) {
    if (uname.includes(kw) || notes.includes(kw)) {
      return ['exchange', name];
    }
  }

  if (uname.includes('监管局') || uname.includes('证监局')) {
    for (const prov of ['北京', '上海', '深圳', '广东', '江苏', '浙江', '山东', '四川', '重庆', '湖北', '湖南', '天津', '大连', '青岛', '宁波', '厦门', '西藏', '新疆']) {
      if (uname.includes(prov)) {
        return ['bureau', `中国证监会${prov}监管局`];
      }
    }
    return ['bureau', '证监会派出机构'];
  }

  if (['中国投资有限责任公司', '中投公司', '中央汇金', '全国社保基金', '证通股份'].some(c => uname.includes(c))) {
    return ['central_corp', uname];
  }

  if ((uname.includes('证监会') || uname.includes('证券监督管理委员会') || uname === '国务院证券委') && !['局', '所', '中心', '公司', '协会', '学院'].some(k => uname.includes(k))) {
    return ['csrc', '中国证监会机关'];
  }
  if (uid === 'csrc-main' && !['局', '所', '中心', '公司', '协会', '学院', '银行', '政府', '市委', '发改委', '计委', '国资委', '财政部'].some(k => uname.includes(k))) {
    return ['csrc', '中国证监会机关'];
  }

  return ['other', uname];
}

function checkSpaceMatch(recA: CareerRecord, recB: CareerRecord): { isMatch: boolean; reason?: string } {
  const [entA_type, entA_name] = getRealEntity(recA);
  const [entB_type, entB_name] = getRealEntity(recB);

  if (entA_type !== entB_type || entA_type === 'other' || entA_type === 'central_corp') {
    return { isMatch: false };
  }

  if (entA_type === 'bank') {
    return entA_name === entB_name ? { isMatch: true, reason: `${entA_name}同事` } : { isMatch: false };
  }

  if (entA_type === 'pboc') {
    return { isMatch: true, reason: '中国人民银行系统同事' };
  }

  if (entA_type === 'gov') {
    return entA_name === entB_name && entA_name !== '地方党政机构'
      ? { isMatch: true, reason: `${entA_name}同事` }
      : { isMatch: false };
  }

  if (entA_type === 'exchange') {
    return entA_name === entB_name ? { isMatch: true, reason: `${entA_name}同事` } : { isMatch: false };
  }

  if (entA_type === 'bureau') {
    return entA_name === entB_name && entA_name !== '证监会派出机构'
      ? { isMatch: true, reason: `${entA_name}同事` }
      : { isMatch: false };
  }

  if (['ndrc', 'sasac', 'mof'].includes(entA_type)) {
    return entA_name === entB_name ? { isMatch: true, reason: `${entA_name}同事` } : { isMatch: false };
  }

  if (entA_type === 'csrc') {
    const leadA = isCsrcLeadership(recA);
    const leadB = isCsrcLeadership(recB);
    if (leadA && leadB) {
      return { isMatch: true, reason: '证监会会领导班子' };
    }

    const deptA = getDeptCategory(recA);
    const deptB = getDeptCategory(recB);
    if (deptA && deptB && deptA === deptB) {
      return { isMatch: true, reason: `证监会${deptA}监管业务部门` };
    }
  }

  return { isMatch: false };
}

export interface ColleagueMatch {
  official: Official;
  record: CareerRecord;
  overlapMonths: number;
  overlapDisplay: string;
  totalIntersectionCount: number;
  totalIntersectionDisplay: string;
  reason: string;
}

export function findColleaguesForCareer(
  targetOfficial: Official,
  targetRecord: CareerRecord,
  allOfficials: Official[]
): ColleagueMatch[] {
  const matches: ColleagueMatch[] = [];

  for (const other of allOfficials) {
    if (other.id === targetOfficial.id) continue;

    let bestMatchForOther: ColleagueMatch | null = null;

    for (const recB of other.careerHistory || []) {
      const { isMatch, reason } = checkSpaceMatch(targetRecord, recB);
      if (isMatch && reason) {
        const ov = calculatePreciseOverlap(
          targetRecord.startYear,
          targetRecord.startMonth,
          targetRecord.endYear,
          targetRecord.endMonth,
          recB.startYear,
          recB.startMonth,
          recB.endYear,
          recB.endMonth
        );

        if (ov.hasOverlap) {
          if (!bestMatchForOther || ov.overlapMonths > bestMatchForOther.overlapMonths) {
            const stats = getColleagueTotalIntersections(targetOfficial, other);
            bestMatchForOther = {
              official: other,
              record: recB,
              overlapMonths: ov.overlapMonths,
              overlapDisplay: ov.overlapDisplay,
              totalIntersectionCount: stats.totalCount,
              totalIntersectionDisplay: stats.totalDisplay,
              reason,
            };
          }
        }
      }
    }

    if (bestMatchForOther) {
      matches.push(bestMatchForOther);
    }
  }

  return matches.sort((a, b) => b.overlapMonths - a.overlapMonths);
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
  const [showBioModal, setShowBioModal] = useState(false);
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

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && showBioModal) {
        setShowBioModal(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [showBioModal]);

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


  const handleSelectOfficial = (official: Official) => {
    setActiveOfficial(official);
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      const scrollContainers = document.querySelectorAll('.overflow-y-auto');
      scrollContainers.forEach((el) => el.scrollTo({ top: 0, behavior: 'smooth' }));
    }
  };

  const calculateAge = (birthYear: number) => {
    return 2026 - birthYear;
  };

  // 官员任职履历按时间倒序排序（由近及远：现任/最新职务置顶，早期履历在后）
  const sortedCareerHistory = useMemo(() => {
    if (!activeOfficial) return [];
    return [...activeOfficial.careerHistory].sort((a, b) => {
      // 1. 结束年份降序：无 endYear (即“至今”) 权重最高 (置顶)
      const endA = a.endYear ?? 9999;
      const endB = b.endYear ?? 9999;
      if (endA !== endB) {
        return endB - endA;
      }
      // 2. 结束月份降序
      const endMonthA = a.endMonth ?? (a.endYear ? 12 : 12);
      const endMonthB = b.endMonth ?? (b.endYear ? 12 : 12);
      if (endMonthA !== endMonthB) {
        return endMonthB - endMonthA;
      }
      // 3. 起始年份降序
      const startA = a.startYear ?? 0;
      const startB = b.startYear ?? 0;
      if (startA !== startB) {
        return startB - startA;
      }
      // 4. 起始月份降序
      const startMonthA = a.startMonth ?? 1;
      const startMonthB = b.startMonth ?? 1;
      return startMonthB - startMonthA;
    });
  }, [activeOfficial]);

  // 官员教育履历按时间倒序排序（由近及远：最高/最新学历置顶）
  const sortedEducation = useMemo(() => {
    if (!activeOfficial) return [];
    return [...activeOfficial.education].sort((a, b) => {
      const endA = a.endYear ?? a.graduationYear ?? (a.startYear ? a.startYear + 4 : 0);
      const endB = b.endYear ?? b.graduationYear ?? (b.startYear ? b.startYear + 4 : 0);
      if (endA !== endB) {
        return endB - endA;
      }
      const startA = a.startYear ?? 0;
      const startB = b.startYear ?? 0;
      return startB - startA;
    });
  }, [activeOfficial]);

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
          {/* 1. 干部履历概貌与特质全息看板 (左侧身份档案与右侧特质动态分享空间，紧凑置顶) */}
          <div className="sticky top-0 z-30 mac-card rounded-2xl p-4 sm:p-5 border border-black/[0.08] bg-white/95 backdrop-blur-md shadow-sm">
            <div className="flex flex-col lg:flex-row items-stretch gap-4 lg:gap-5">
              {/* 左侧：2寸免冠照 + 核心政务属性与职务 (自适应收缩/扩展，为右侧特质动态分享空间) */}
              <div className="flex items-start sm:items-center gap-4 min-w-0 w-full lg:w-auto lg:max-w-[55%] shrink-0 pr-0 lg:pr-5 border-b lg:border-b-0 lg:border-r border-black/[0.06] pb-3.5 lg:pb-0">
                <OfficialIdPhoto official={activeOfficial} size="md" />

                <div className="space-y-1.5 flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h2 className="text-xl sm:text-2xl font-extrabold text-gray-900 tracking-tight">
                      {activeOfficial.name}
                    </h2>
                    <PositionRankBadge rank={activeOfficial.currentRank} />
                    <span className="text-[11px] text-gray-500 bg-gray-100 px-2 py-0.5 rounded-md font-mono">
                      {calculateAge(activeOfficial.birthYear)}岁
                    </span>

                    {/* 履职在任/离任/退休/处分状态徽标 */}
                    {activeOfficial.servingStatus === 'investigated' ? (
                      <span className="text-[11px] font-bold text-rose-800 bg-rose-50 border border-rose-200 px-2 py-0.5 rounded-md flex items-center gap-1 shadow-2xs">
                        <span className="w-1.5 h-1.5 rounded-full bg-rose-600 animate-pulse" />
                        <span>{activeOfficial.servingStatusLabel || '审查调查 / 撤职处分'}</span>
                      </span>
                    ) : activeOfficial.servingStatus === 'retired' ? (
                      <span className="text-[11px] font-bold text-slate-700 bg-slate-100 border border-slate-200 px-2 py-0.5 rounded-md flex items-center gap-1 shadow-2xs">
                        <span>🏛️</span>
                        <span>{activeOfficial.servingStatusLabel || '正常退休'}</span>
                      </span>
                    ) : activeOfficial.servingStatus === 'transferred' ? (
                      <span className="text-[11px] font-bold text-indigo-700 bg-indigo-50 border border-indigo-200 px-2 py-0.5 rounded-md flex items-center gap-1 shadow-2xs">
                        <span>🔄</span>
                        <span>{activeOfficial.servingStatusLabel || '调离系统'}</span>
                      </span>
                    ) : (
                      <span className="text-[11px] font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-md flex items-center gap-1 shadow-2xs">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        <span>现任在职</span>
                      </span>
                    )}
                  </div>

                  <div className="text-sm font-semibold text-gray-800 flex items-center gap-2 flex-wrap">
                    <span>{activeOfficial.currentPosition}</span>
                    {activeOfficial.servingStatusNote && activeOfficial.servingStatus !== 'serving' && (
                      <span className="text-[11px] font-normal text-gray-500 bg-gray-50 border border-gray-200 px-2 py-0.5 rounded">
                        {activeOfficial.servingStatusNote}
                      </span>
                    )}
                  </div>

                  <div className="flex flex-wrap items-center gap-3 text-[11px] text-gray-500 pt-0.5">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-gray-400" />
                      {activeOfficial.birthYear}年{activeOfficial.birthMonth}月生
                    </span>

                    {activeOfficial.nativePlace && (
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-gray-400" />
                        籍贯：{activeOfficial.nativePlace}
                      </span>
                    )}

                    <span className="flex items-center gap-1">
                      <Building className="w-3 h-3 text-gray-400" />
                      编制归属：{currentUnit?.name || '中国证监会系统'}
                    </span>

                    {activeOfficial.basicInfoConfidence && (
                      <span className="flex items-center gap-1 pl-1 border-l border-black/[0.08]">
                        <ShieldCheck className="w-3 h-3 text-emerald-600 shrink-0" />
                        <span className="text-gray-400">信息置信度:</span>
                        <span
                          className={`px-1.5 py-0.2 rounded text-[10px] font-semibold ${
                            activeOfficial.basicInfoConfidence.level === 'high'
                              ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                              : 'bg-blue-50 text-blue-700 border border-blue-200'
                          }`}
                        >
                          {activeOfficial.basicInfoConfidence.score}% · {activeOfficial.basicInfoConfidence.label}
                        </span>
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* 右侧：履职特质与业务擅长 (与左侧动态分享空间，支持卡内滚动与全息弹窗) */}
              <div className="flex-1 min-w-0 flex flex-col justify-center">
                {activeOfficial.bioSummary ? (
                  <div className="p-3 bg-blue-50/40 hover:bg-blue-50/70 rounded-xl border border-blue-100/60 text-xs text-gray-700 transition-all flex flex-col justify-center h-full">
                    <div className="flex items-center justify-between gap-2 mb-1 shrink-0">
                      <div className="flex items-center gap-1.5 font-bold text-blue-700 text-[11px]">
                        <Sparkles className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                        <span>履职特质与业务擅长：</span>
                      </div>
                      <button
                        type="button"
                        onClick={() => setShowBioModal(true)}
                        className="inline-flex items-center gap-1 text-[10.5px] font-semibold text-blue-600 hover:text-blue-800 bg-white/90 hover:bg-blue-100/80 border border-blue-200/70 px-2 py-0.5 rounded-lg shadow-2xs transition-all hover:scale-105 active:scale-95 cursor-pointer shrink-0"
                        title="点击打开弹窗查看完整特质述评"
                      >
                        <Maximize2 className="w-3 h-3 text-blue-600" />
                        <span>弹窗全文</span>
                      </button>
                    </div>

                    {/* 卡内平滑滚动区域：高度自适应，支持滚动查看全部文字，杜绝截断 */}
                    <div className="max-h-[66px] sm:max-h-[74px] overflow-y-auto pr-1 text-[11.5px] text-gray-600 leading-relaxed select-text">
                      <p className="whitespace-normal">
                        {activeOfficial.bioSummary}
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="p-3 bg-gray-50/60 rounded-xl border border-black/[0.04] text-xs text-gray-400 text-center flex items-center justify-center h-full">
                    暂无补充特质履职记述
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* 全息弹窗：完整履职特质与业务擅长深度述评 */}
          {showBioModal && activeOfficial && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/45 backdrop-blur-xs animate-in fade-in duration-150"
              onClick={() => setShowBioModal(false)}
            >
              <div
                className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-black/[0.08] overflow-hidden flex flex-col max-h-[85vh] animate-in zoom-in-95 duration-150"
                onClick={(e) => e.stopPropagation()}
              >
                {/* 弹窗头部 */}
                <div className="px-6 py-4 border-b border-black/[0.06] bg-gradient-to-r from-blue-50/80 via-indigo-50/40 to-white flex items-center justify-between">
                  <div className="flex items-center gap-3.5 min-w-0">
                    <OfficialIdPhoto official={activeOfficial} size="sm" />
                    <div className="min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="text-base sm:text-lg font-bold text-gray-900 tracking-tight">
                          {activeOfficial.name}
                        </h3>
                        <PositionRankBadge rank={activeOfficial.currentRank} />
                        <span className="text-[11px] text-gray-500 font-mono bg-gray-100 px-2 py-0.5 rounded-md">
                          {calculateAge(activeOfficial.birthYear)}岁
                        </span>
                      </div>
                      <p className="text-xs text-blue-700 font-semibold mt-1 flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                        <span>履职特质与业务擅长全息述评</span>
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => setShowBioModal(false)}
                    className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 hover:text-gray-800 flex items-center justify-center transition-colors shrink-0 ml-2"
                    title="关闭 (ESC)"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {/* 弹窗内容 */}
                <div className="p-6 overflow-y-auto space-y-4">
                  <div className="p-5 bg-blue-50/40 rounded-2xl border border-blue-100/70 text-sm leading-relaxed text-gray-800">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-blue-800 mb-2.5">
                      <Sparkles className="w-4 h-4 text-blue-600" />
                      <span>深度履职研判与监管业务擅长：</span>
                    </div>
                    <p className="leading-7 whitespace-pre-line text-[13.5px] text-gray-700">
                      {activeOfficial.bioSummary || '暂无补充特质履职记述'}
                    </p>
                  </div>

                  {/* 核心元数据档案网格 */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                    <div className="p-3 bg-gray-50 rounded-xl border border-black/[0.04]">
                      <span className="text-gray-400 block text-[11px] mb-0.5">现任职务</span>
                      <span className="font-semibold text-gray-800 truncate block" title={activeOfficial.currentPosition}>
                        {activeOfficial.currentPosition}
                      </span>
                    </div>
                    <div className="p-3 bg-gray-50 rounded-xl border border-black/[0.04]">
                      <span className="text-gray-400 block text-[11px] mb-0.5">编制归属</span>
                      <span className="font-semibold text-gray-800 truncate block" title={currentUnit?.name || '中国证监会系统'}>
                        {currentUnit?.name || '中国证监会系统'}
                      </span>
                    </div>
                    <div className="p-3 bg-gray-50 rounded-xl border border-black/[0.04]">
                      <span className="text-gray-400 block text-[11px] mb-0.5">出生籍贯</span>
                      <span className="font-semibold text-gray-800">
                        {activeOfficial.birthYear}年 · {activeOfficial.nativePlace || '未公开'}
                      </span>
                    </div>
                    <div className="p-3 bg-gray-50 rounded-xl border border-black/[0.04]">
                      <span className="text-gray-400 block text-[11px] mb-0.5">履职状态</span>
                      <span className="font-semibold text-gray-800">
                        {activeOfficial.servingStatus === 'investigated'
                          ? '立案调查'
                          : activeOfficial.servingStatus === 'retired'
                          ? '正常退休'
                          : activeOfficial.servingStatus === 'transferred'
                          ? '调离系统'
                          : '现任在职'}
                      </span>
                    </div>
                  </div>
                </div>

                {/* 弹窗底部操作条 */}
                <div className="px-6 py-3.5 border-t border-black/[0.06] bg-gray-50/80 flex items-center justify-between">
                  <span className="text-xs text-gray-400">按 ESC 键或点击外部遮罩亦可快速退出</span>
                  <button
                    onClick={() => setShowBioModal(false)}
                    className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-semibold shadow-xs transition-colors"
                  >
                    完成查阅
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* 3. 教育背景与学位学历 (左1/3个人求学档案，右2/3同期同校校友矩阵) */}
          <div className="mac-card rounded-2xl p-5 sm:p-7 border border-black/[0.08] bg-white shadow-xs space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-black/[0.06]">
              <h3 className="text-sm font-bold text-gray-900 tracking-tight flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-blue-600" />
                <span>教育背景与在校履历（共 {sortedEducation.length} 段学历档案 · 时间倒序）</span>
              </h3>
              <span className="text-xs text-gray-400">
                最新学历置顶 · 在校全时段展示 · 右侧联动同期同校校友圈
              </span>
            </div>

            <div className="space-y-4">
              {sortedEducation.map((edu, idx) => {
                const alumniList = findAlumniForEdu(activeOfficial, edu, officials);
                const span = getEduSpan(activeOfficial, edu);
                const durationYears = Math.max(1, span.endYear - span.startYear);
                return (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl border border-black/[0.06] bg-gray-50/70 hover:bg-gray-50/95 transition-all shadow-2xs"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
                      {/* 左侧：个人学历信息 (精确占 1/3: lg:col-span-4) */}
                      <div className="lg:col-span-4 space-y-2.5 pr-0 lg:pr-4 border-b lg:border-b-0 lg:border-r border-black/[0.06] pb-4 lg:pb-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="font-extrabold text-base text-gray-900">
                            {edu.school}
                          </span>
                          <span className="font-bold text-xs text-blue-800 bg-blue-100/90 border border-blue-200 px-2 py-0.5 rounded-md">
                            {edu.degree}
                          </span>
                        </div>

                        {/* 明确补充在校全部时段（包含推理标记） */}
                        <div className="p-2 rounded-lg bg-white border border-black/[0.05] space-y-1">
                          <div className="text-[11px] font-mono font-bold text-blue-700 flex items-center justify-between">
                            <span className="flex items-center gap-1">
                              <Calendar className="w-3 h-3 text-blue-500" />
                              <span>在校时段: {span.startYear} - {span.endYear}</span>
                            </span>
                            <span className="text-[10px] text-gray-500 font-normal">
                              ({durationYears}年制)
                            </span>
                          </div>
                          <div className="text-[10px] text-gray-400 flex items-center justify-between">
                            <span>{edu.graduationYear ? `毕业年份: ${edu.graduationYear}年` : '学制推算'}</span>
                            <span className="text-emerald-700 font-medium bg-emerald-50 px-1.5 py-0.2 rounded text-[9.5px]">
                              {edu.isDerivedSpan ? '学制推算时段' : '官方确证时段'}
                            </span>
                          </div>
                        </div>

                        <div className="text-xs text-gray-700 font-medium">
                          <span className="text-gray-400">专业方向：</span>
                          <span className="text-gray-800 font-semibold">{edu.major || '全日制统招'}</span>
                        </div>

                        {edu.confidence && (
                          <div className="p-2.5 rounded-lg bg-white/90 border border-black/[0.04] space-y-1 text-xs">
                            <div className="flex items-center justify-between">
                              <span className="font-semibold text-gray-500 text-[10px] flex items-center gap-1">
                                <ShieldCheck className="w-3 h-3 text-emerald-600" />
                                学历考证置信度
                              </span>
                              <span
                                className={`px-1.5 py-0.2 rounded font-bold text-[9.5px] ${
                                  edu.confidence.level === 'high'
                                    ? 'bg-emerald-100 text-emerald-800'
                                    : 'bg-blue-100 text-blue-800'
                                }`}
                              >
                                {edu.confidence.score}% · {edu.confidence.label}
                              </span>
                            </div>
                            {edu.confidence.source && (
                              <div className="text-[10px] text-gray-500 truncate" title={edu.confidence.source}>
                                {edu.confidence.source}
                              </div>
                            )}
                          </div>
                        )}
                      </div>

                      {/* 右侧：同期同校校友矩阵 (精确占 2/3: lg:col-span-8) */}
                      <div className="lg:col-span-8 space-y-2.5">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1.5 text-xs font-bold text-gray-700">
                            <span>🎓 同期同校校友</span>
                            <span className="text-blue-600 font-mono bg-blue-50 border border-blue-200 px-1.5 py-0.2 rounded-full text-[10.5px]">
                              {alumniList.length} 人
                            </span>
                          </div>
                          {alumniList.length > 0 && (
                            <span className="text-[10px] text-gray-400 bg-gray-100 px-2 py-0.5 rounded-md font-medium">
                              按同窗年限从长到短排序
                            </span>
                          )}
                        </div>

                        {alumniList.length > 0 ? (
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 max-h-[320px] overflow-y-auto pr-1">
                            {alumniList.map((alumni) => {
                              const oSpan = getEduSpan(alumni.official, alumni.education);
                              return (
                                <button
                                  key={alumni.official.id}
                                  onClick={() => handleSelectOfficial(alumni.official)}
                                  className="w-full text-left p-3 rounded-xl bg-white hover:bg-blue-50/40 border border-black/[0.06] hover:border-blue-300 transition-all shadow-2xs group flex items-start gap-2.5"
                                >
                                  <OfficialIdPhoto official={alumni.official} size="sm" />
                                  <div className="flex-1 min-w-0 space-y-1">
                                    <div className="flex items-center justify-between gap-1">
                                      <div className="flex items-center gap-1.5 flex-wrap">
                                        <span className="font-bold text-xs text-gray-900 group-hover:text-blue-600 transition-colors">
                                          {alumni.official.name}
                                        </span>
                                        <PositionRankBadge rank={alumni.official.currentRank} />
                                        {alumni.official.birthYear && (
                                          <span className="text-[10px] text-gray-500 bg-gray-100 px-1.5 py-0.2 rounded font-mono">
                                            {calculateAge(alumni.official.birthYear)}岁
                                          </span>
                                        )}
                                      </div>
                                      <span className="text-[10px] font-bold font-mono text-purple-700 bg-purple-50 border border-purple-200 px-1.5 py-0.2 rounded shrink-0">
                                        {alumni.overlapDisplay}
                                      </span>
                                    </div>
                                    <div className="text-[11px] text-gray-700 font-medium truncate">
                                      {alumni.education.degree} · {alumni.education.major || alumni.education.school}
                                    </div>
                                    <div className="text-[10px] text-gray-500 font-mono">
                                      在校: {oSpan.startYear} - {oSpan.endYear}
                                    </div>
                                    {/* 跨期交汇属性 */}
                                    {alumni.totalIntersectionCount > 0 && (
                                      <div className="text-[9.5px] font-bold text-amber-700 bg-amber-50/80 px-1.5 py-0.2 rounded border border-amber-200 flex items-center gap-1">
                                        <span>🌟 兼同事关系: {alumni.totalIntersectionDisplay}</span>
                                      </div>
                                    )}
                                  </div>
                                </button>
                              );
                            })}
                          </div>
                        ) : (
                          <div className="h-28 rounded-xl border border-dashed border-black/[0.08] bg-white/60 flex flex-col items-center justify-center text-center p-3">
                            <span className="text-gray-300 text-base mb-1">🏛️</span>
                            <span className="text-xs text-gray-400">暂无同一时期在校校友档案重叠</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* 4. 完整履职履历时间线 (左1/3主干部履历，右2/3同期同事矩阵) */}
          <div className="mac-card rounded-2xl p-5 sm:p-7 border border-black/[0.08] bg-white shadow-xs space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-black/[0.06]">
              <h3 className="text-sm font-bold text-gray-900 tracking-tight flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-blue-600" />
                <span>完整履职履历与任职演进（共 {sortedCareerHistory.length} 段履职记录 · 时间倒序）</span>
              </h3>
              <span className="text-xs text-gray-400">
                现任/最新职务置顶 · 沿时间线由近及远追溯 · 右侧联动高密度同期同事网络
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
                  <span className="text-gray-400">国务院任免/中纪委审查通报/法定公报</span>
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
              {sortedCareerHistory.map((item, idx) => {
                const isLatest = idx === 0 || !item.endYear;
                const colleaguesList = findColleaguesForCareer(activeOfficial, item, officials);

                return (
                  <div key={item.id} className="relative group">
                    {/* Timeline Node Dot */}
                    <div
                      className={`absolute -left-7 sm:-left-8 top-1.5 w-3.5 h-3.5 rounded-full border-2 border-white shadow-xs ${
                        isLatest ? 'bg-blue-600 ring-4 ring-blue-100' : 'bg-gray-400'
                      }`}
                    />

                    {/* Record Horizontal Long Card with 1/3 vs 2/3 Columns */}
                    <div
                      className={`p-5 rounded-2xl border transition-all ${
                        item.isDerived
                          ? 'bg-amber-50/25 hover:bg-amber-50/45 border-dashed border-amber-300/80 shadow-2xs'
                          : 'bg-gray-50/70 hover:bg-gray-50/95 border-black/[0.06] shadow-2xs'
                      }`}
                    >
                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
                        {/* 左侧：主官员履历卡片 (精确占 1/3: lg:col-span-4) */}
                        <div className="lg:col-span-4 space-y-2.5 pr-0 lg:pr-4 border-b lg:border-b-0 lg:border-r border-black/[0.06] pb-4 lg:pb-0">
                          <div className="flex items-center justify-between gap-2 flex-wrap">
                            <span className="font-bold text-base text-gray-900 leading-tight">
                              {item.unitName}
                            </span>
                            <span className="text-xs font-mono font-semibold text-blue-700 bg-blue-50 px-2 py-0.5 rounded-md">
                              {item.startYear}
                              {item.startMonth ? `.${item.startMonth < 10 ? '0' + item.startMonth : item.startMonth}` : ''} -{' '}
                              {item.endYear
                                ? `${item.endYear}${item.endMonth ? `.${item.endMonth < 10 ? '0' + item.endMonth : item.endMonth}` : ''}`
                                : '至今'}
                            </span>
                          </div>

                          {item.department && (
                            <div className="text-xs font-medium text-gray-600">
                              部门：{item.department}
                            </div>
                          )}

                          <div className="flex items-center gap-2 mt-1 flex-wrap">
                            <span className="text-sm font-bold text-gray-800">
                              {item.position}
                            </span>
                            <PositionRankBadge rank={item.rank} />
                            {item.isDerived && (
                              <span className="text-[10px] font-medium text-amber-800 bg-amber-100/90 border border-amber-300 px-1.5 py-0.2 rounded">
                                📰 新闻推导
                              </span>
                            )}
                          </div>

                          {/* 置信度评价与信源依据 */}
                          {item.confidence && (
                            <div className="mt-2 p-2.5 rounded-xl bg-white/95 border border-black/[0.05] space-y-1 text-xs shadow-2xs">
                              <div className="flex items-center justify-between">
                                <span className="font-semibold text-gray-600 text-[10.5px] flex items-center gap-1">
                                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                                  履历考据置信度
                                </span>
                                <span
                                  className={`px-2 py-0.5 rounded-md font-bold text-[10px] ${
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
                                <div className="text-[10.5px] text-gray-500 leading-relaxed truncate" title={item.confidence.source}>
                                  信源：{item.confidence.source}
                                </div>
                              )}
                            </div>
                          )}

                          {item.sourceNote && !item.confidence && (
                            <div className="text-xs text-amber-800 bg-amber-50/90 border border-amber-200/80 px-2.5 py-1 rounded-xl mt-2 leading-relaxed">
                              <span className="font-bold">推导依据：</span>
                              {item.sourceNote}
                            </div>
                          )}

                          {item.notes && (
                            <p className="text-xs text-gray-600 mt-2 leading-relaxed bg-white/70 p-2.5 rounded-xl border border-black/[0.03]">
                              {item.notes}
                            </p>
                          )}
                        </div>

                        {/* 右侧：同期同事标准卡片矩阵 (精确占 2/3: lg:col-span-8) */}
                        <div className="lg:col-span-8 space-y-2.5">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-1.5 text-xs font-bold text-gray-700">
                              <span>👥 同期机构/部门同事</span>
                              <span className="text-blue-600 font-mono bg-blue-50 border border-blue-200 px-1.5 py-0.2 rounded-full text-[10.5px]">
                                {colleaguesList.length} 人
                              </span>
                            </div>
                            {colleaguesList.length > 0 && (
                              <span className="text-[10px] text-gray-400 bg-gray-100 px-2 py-0.5 rounded-md font-medium">
                                按实际重合时长严谨降序
                              </span>
                            )}
                          </div>

                          {colleaguesList.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 max-h-[360px] overflow-y-auto pr-1">
                              {colleaguesList.map((colleague) => {
                                const recB = colleague.record;
                                const timeB = `${recB.startYear}${recB.startMonth ? `.${recB.startMonth < 10 ? '0' + recB.startMonth : recB.startMonth}` : ''} - ${recB.endYear ? `${recB.endYear}${recB.endMonth ? `.${recB.endMonth < 10 ? '0' + recB.endMonth : recB.endMonth}` : ''}` : '至今'}`;
                                return (
                                  <button
                                    key={colleague.official.id}
                                    onClick={() => handleSelectOfficial(colleague.official)}
                                    className="w-full text-left p-3 rounded-xl bg-white hover:bg-blue-50/40 border border-black/[0.06] hover:border-blue-300 transition-all shadow-2xs group flex items-start gap-2.5"
                                  >
                                    <OfficialIdPhoto official={colleague.official} size="sm" />
                                    <div className="flex-1 min-w-0 space-y-1">
                                      {/* 第一行：姓名、职级、严谨的月份级重合时间 */}
                                      <div className="flex items-center justify-between gap-1">
                                        <div className="flex items-center gap-1.5 flex-wrap">
                                          <span className="font-bold text-xs text-gray-900 group-hover:text-blue-600 transition-colors">
                                            {colleague.official.name}
                                          </span>
                                          <PositionRankBadge rank={colleague.official.currentRank} />
                                          {colleague.official.birthYear && (
                                            <span className="text-[10px] text-gray-500 bg-gray-100 px-1.5 py-0.2 rounded font-mono">
                                              {calculateAge(colleague.official.birthYear)}岁
                                            </span>
                                          )}
                                        </div>
                                        <span className="text-[10px] font-bold font-mono text-blue-700 bg-blue-50 border border-blue-200 px-1.5 py-0.2 rounded shrink-0 shadow-2xs">
                                          {colleague.overlapDisplay}
                                        </span>
                                      </div>

                                      {/* 第二行：该同事覆盖此重合时期的单位机构与部门 */}
                                      <div className="text-[11px] text-gray-800 font-medium truncate">
                                        {recB.unitName}
                                        {recB.department ? ` · ${recB.department}` : ''}
                                      </div>

                                      {/* 第三行：该同事在此时期的职务与起止时间 */}
                                      <div className="text-[10.5px] text-gray-600 flex items-center gap-1 flex-wrap">
                                        <span className="font-semibold text-gray-700">{recB.position}</span>
                                        <span className="text-gray-400 font-mono text-[10px]">({timeB})</span>
                                      </div>

                                      {/* 第四行：如果存在多次跨期交汇，展示总交汇时间属性！ */}
                                      {colleague.totalIntersectionCount > 1 && (
                                        <div className="mt-1 px-2 py-0.5 rounded-md bg-amber-50/90 border border-amber-200/90 text-[10px] font-bold text-amber-800 flex items-center gap-1">
                                          <span>🔥</span>
                                          <span>{colleague.totalIntersectionDisplay}</span>
                                        </div>
                                      )}

                                      {/* 第五行：去掉“交汇区间”字样，明确展示共事背景属性 */}
                                      <div className="text-[10px] text-gray-500 flex items-center justify-between pt-0.5 border-t border-black/[0.03]">
                                        <span className="truncate text-gray-500">
                                          🏛️ {colleague.reason}
                                        </span>
                                        <span className="opacity-0 group-hover:opacity-100 text-[10px] text-blue-600 font-medium transition-opacity flex items-center gap-0.5 shrink-0">
                                          查看档案 →
                                        </span>
                                      </div>
                                    </div>
                                  </button>
                                );
                              })}
                            </div>
                          ) : (
                            <div className="h-28 rounded-xl border border-dashed border-black/[0.08] bg-white/60 flex flex-col items-center justify-center text-center p-3">
                              <span className="text-gray-300 text-base mb-1">👥</span>
                              <span className="text-xs text-gray-400">暂无同期机构或部门同事重叠记录</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* 5. 底部横幅快捷跳转 */}
          <div className="mac-card rounded-2xl p-4 sm:p-5 border border-black/[0.06] bg-gray-50 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2.5 flex-wrap">
              <button
                onClick={() => onNavigateToSwimlaneWithOfficial(activeOfficial.id)}
                className="flex items-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-xl shadow-xs transition-colors"
              >
                <GitCommitVertical className="w-3.5 h-3.5" />
                <span>在时空演进泳道中展开该干部的演进轨迹</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => onToggleOfficialSelection(activeOfficial.id)}
                className={`flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl text-xs font-medium border transition-colors ${
                  isSelectedInSwimlane
                    ? 'bg-blue-50 text-blue-700 border-blue-200 shadow-2xs'
                    : 'bg-white hover:bg-gray-100 text-gray-700 border-black/[0.06]'
                }`}
              >
                <GitCommitVertical className="w-3.5 h-3.5" />
                <span>{isSelectedInSwimlane ? '已加入泳道对比池' : '+ 加入泳道对比池'}</span>
                {isSelectedInSwimlane && <Check className="w-3.5 h-3.5 text-blue-600" />}
              </button>
            </div>

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
