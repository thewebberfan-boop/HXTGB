'use client';

import React, { useState } from 'react';
import { Official } from '../types';
import { getOfficialColor } from '../data/csrcData';

interface OfficialIdPhotoProps {
  official: Official;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  showBadge?: boolean;
}

export const OfficialIdPhoto: React.FC<OfficialIdPhotoProps> = ({
  official,
  size = 'md',
  className = '',
  showBadge = true,
}) => {
  const [hasError, setHasError] = useState(false);
  const color = getOfficialColor(official.id);

  // 尺寸映射 (标准 3:4 证件照比例)
  const sizeConfig = {
    sm: {
      container: 'w-11 h-[58px] rounded-lg',
      text: 'text-sm font-bold',
      badge: 'text-[7.5px] px-1 py-0.2',
    },
    md: {
      container: 'w-16 h-[85px] rounded-xl',
      text: 'text-base font-bold',
      badge: 'text-[8.5px] px-1 py-0.2',
    },
    lg: {
      container: 'w-24 h-[128px] sm:w-28 sm:h-[148px] rounded-2xl',
      text: 'text-2xl font-bold',
      badge: 'text-[10px] px-1.5 py-0.5',
    },
  }[size];

  const avatarSrc = official.avatarUrl || `/avatars/${official.id}.svg`;

  return (
    <div
      className={`relative shrink-0 overflow-hidden select-none border border-black/10 shadow-sm transition-all ${sizeConfig.container} ${className}`}
      style={{
        boxShadow: `0 2px 8px -1px ${color.primary}25, 0 1px 3px 0 rgba(0, 0, 0, 0.08)`,
      }}
    >
      {!hasError ? (
        <img
          src={avatarSrc}
          alt={`${official.name} 证件照片`}
          className="w-full h-full object-cover object-top"
          onError={() => setHasError(true)}
          loading="lazy"
        />
      ) : (
        /* 加载失败或无相片时的标准政务正装备用视觉 */
        <div
          className="w-full h-full flex flex-col items-center justify-between p-1 bg-gradient-to-b from-red-700 to-red-900 text-white relative"
        >
          <div className="flex-1 flex items-center justify-center">
            <span className={sizeConfig.text}>{official.name.slice(0, 1)}</span>
          </div>
          <div className="w-full text-center bg-black/40 py-0.5 rounded-sm">
            <span className="text-[8px] font-mono leading-none block scale-90 truncate">
              {official.name}
            </span>
          </div>
        </div>
      )}

      {/* 证件照相纸光泽与外框层次 */}
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] ring-1 ring-inset ring-white/20" />

      {/* 规格微标 (仅在 lg 尺寸右下角展示“标准2寸”印记) */}
      {size === 'lg' && showBadge && (
        <div className="absolute top-1.5 right-1.5 bg-black/50 backdrop-blur-xs text-white text-[8.5px] font-mono px-1 rounded-sm border border-white/20">
          2寸免冠
        </div>
      )}
    </div>
  );
};
