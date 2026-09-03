'use client';

import React from 'react';
import { ViewMode } from '../types';
import { Building2, Users, GitCommitVertical, ExternalLink } from 'lucide-react';

interface HeaderProps {
  currentView: ViewMode;
  onViewChange: (view: ViewMode) => void;
  selectedOfficialsCount: number;
}

export const Header: React.FC<HeaderProps> = ({
  currentView,
  onViewChange,
  selectedOfficialsCount,
}) => {
  return (
    <header className="sticky top-0 z-50 mac-glass border-b border-black/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        {/* Left: Window Controls & Title */}
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-1.5 mr-1">
            <span className="w-3 h-3 rounded-full bg-[#ff5f56] border border-[#e0443e]/40 shadow-xs" />
            <span className="w-3 h-3 rounded-full bg-[#ffbd2e] border border-[#dea123]/40 shadow-xs" />
            <span className="w-3 h-3 rounded-full bg-[#27c93f] border border-[#1aab29]/40 shadow-xs" />
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-base sm:text-lg tracking-tight text-[#1d1d1f]">
                中国证监会系统 · 政务知识图谱
              </span>
              <span className="hidden md:inline-flex text-[11px] font-medium text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full border border-blue-200/60">
                CSRC System
              </span>
            </div>
            <span className="text-[11px] text-[#86868b] hidden sm:inline">
              机构单位编制库 · 主要领导干部履历档案 · 履职时空泳道演进图谱
            </span>
          </div>
        </div>

        {/* Center: macOS Style Segmented Control */}
        <div className="flex items-center">
          <nav className="mac-segmented-control flex items-center p-1 bg-black/[0.06] rounded-xl border border-black/[0.04]">
            <button
              onClick={() => onViewChange('units')}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 text-xs sm:text-sm font-medium rounded-lg transition-all duration-150 ${
                currentView === 'units'
                  ? 'bg-white text-[#1d1d1f] shadow-sm font-semibold'
                  : 'text-[#515154] hover:text-[#1d1d1f]'
              }`}
            >
              <Building2 className="w-4 h-4" />
              <span>系统单位</span>
            </button>

            <button
              onClick={() => onViewChange('officials')}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 text-xs sm:text-sm font-medium rounded-lg transition-all duration-150 ${
                currentView === 'officials'
                  ? 'bg-white text-[#1d1d1f] shadow-sm font-semibold'
                  : 'text-[#515154] hover:text-[#1d1d1f]'
              }`}
            >
              <Users className="w-4 h-4" />
              <span>官员简历</span>
            </button>

            <button
              onClick={() => onViewChange('swimlanes')}
              className={`relative flex items-center gap-1.5 px-3.5 py-1.5 text-xs sm:text-sm font-medium rounded-lg transition-all duration-150 ${
                currentView === 'swimlanes'
                  ? 'bg-white text-blue-600 shadow-sm font-semibold'
                  : 'text-[#515154] hover:text-[#1d1d1f]'
              }`}
            >
              <GitCommitVertical className="w-4 h-4" />
              <span>时空泳道</span>
              {selectedOfficialsCount > 0 && (
                <span className="w-4 h-4 rounded-full bg-blue-600 text-white text-[10px] flex items-center justify-center font-bold">
                  {selectedOfficialsCount}
                </span>
              )}
            </button>
          </nav>
        </div>

        {/* Right: Quick External Links */}
        <div className="flex items-center gap-2">
          <a
            href="http://www.csrc.gov.cn"
            target="_blank"
            rel="noreferrer"
            className="text-xs text-[#6e6e73] hover:text-[#1d1d1f] transition-colors hidden lg:flex items-center gap-1 px-2.5 py-1.5 rounded-lg border border-black/[0.08] hover:bg-black/[0.03]"
          >
            <span>证监会官网</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </header>
  );
};
