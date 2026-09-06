'use client';

import React, { useState, useEffect } from 'react';
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
  const [currentSrc, setCurrentSrc] = useState<string>(
    official.avatarUrl || `/avatars/${official.id}.jpg`
  );
  const [fallbackStage, setFallbackStage] = useState<number>(0); // 0: real jpg, 1: svg, 2: placeholder badge
  const color = getOfficialColor(official.id);

  useEffect(() => {
    if (official.avatarVerified === false) {
      setFallbackStage(2);
      return;
    }
    setCurrentSrc(official.avatarUrl || `/avatars/${official.id}.jpg`);
    setFallbackStage(0);
  }, [official.id, official.avatarUrl, official.avatarVerified]);

  const handleImageError = () => {
    if (fallbackStage === 0) {
      setFallbackStage(1);
      setCurrentSrc(`/avatars/${official.id}.svg`);
    } else {
      setFallbackStage(2);
    }
  };

  // 尺寸映射 (标准 3:4 证件照比例)
  const sizeConfig = {
    sm: {
      container: 'w-11 h-[58px] rounded-lg',
      text: 'text-sm font-bold',
      badge: 'text-[7px] px-1 py-0.2',
    },
    md: {
      container: 'w-16 h-[85px] rounded-xl',
      text: 'text-base font-bold',
      badge: 'text-[8px] px-1 py-0.2',
    },
    lg: {
      container: 'w-24 h-[128px] sm:w-28 sm:h-[148px] rounded-2xl',
      text: 'text-2xl font-bold',
      badge: 'text-[9.5px] px-1.5 py-0.5',
    },
  }[size];

  const isRealPhoto = fallbackStage === 0 && currentSrc.endsWith('.jpg');

  return (
    <div
      className={`relative shrink-0 overflow-hidden select-none border border-black/10 shadow-sm transition-all bg-slate-900 ${sizeConfig.container} ${className}`}
      style={{
        boxShadow: `0 2px 10px -1px ${color.primary}25, 0 1px 3px 0 rgba(0, 0, 0, 0.12)`,
      }}
    >
      {official.avatarVerified !== false && fallbackStage < 2 ? (
        <img
          src={currentSrc}
          alt={`${official.name} 证件照片`}
          className="w-full h-full object-cover object-top"
          onError={handleImageError}
          loading="lazy"
        />
      ) : (
        /* 加载失败或无相片时的标准政务备用视觉 */
        <div className="w-full h-full flex flex-col items-center justify-between p-1 bg-gradient-to-b from-red-800 to-red-950 text-white relative">
          <div className="flex-1 flex items-center justify-center">
            <span className={sizeConfig.text}>{official.name.slice(0, 1)}</span>
          </div>
          <div className="w-full text-center bg-black/50 py-0.5 rounded-sm backdrop-blur-2xs">
            <span className="text-[8px] font-mono leading-none block scale-90 truncate">
              {official.name}
            </span>
          </div>
        </div>
      )}

      {/* 证件照相纸光泽与外框层次 */}
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] ring-1 ring-inset ring-white/20" />

      {/* 规格微标 */}
      {size === 'lg' && showBadge && (
        <div className="absolute top-1.5 right-1.5 bg-black/60 backdrop-blur-xs text-white text-[8.5px] font-medium px-1.5 py-0.5 rounded-md border border-white/20 shadow-xs flex items-center gap-1">
          {official.avatarVerified !== false && isRealPhoto ? (
            <>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block animate-pulse" />
              <span>标准工作照</span>
            </>
          ) : (
            <span>{official.avatarVerified === false ? '照片待核' : '2寸免冠'}</span>
          )}
        </div>
      )}
    </div>
  );
};
