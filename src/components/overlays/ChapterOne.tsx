'use client';
import React from 'react';

interface ChapterOneProps {
  scrollProgress: number;
  geoData: { country: string; city: string; loading: boolean };
}

export const ChapterOne: React.FC<ChapterOneProps> = ({ scrollProgress, geoData }) => {
  // Only visible for first 20% (if not using GSAP pinning)
  // With GSAP pinning, we keep it visible, but we can return normally.
  if (scrollProgress > 0.2 && scrollProgress !== 0.05) return null;

  return (
    <div className="absolute inset-0 pointer-events-none flex flex-col justify-between p-6 md:p-12 lg:p-24 z-10">
      
      <div className="flex justify-between items-start w-full reveal-text">
        <div>
          <h2 className="premium-heading text-sm text-white/50 tracking-[0.2em] mb-2">INVEGA EXPORTS</h2>
          <h1 className="premium-heading text-2xl text-white tracking-[0.1em]">THE JOURNEY</h1>
        </div>
        <div className="diamond-indicator"><span>0</span></div>
      </div>
      
      <div className="flex justify-between items-end w-full flex-1 mb-16">
        <div className="flex flex-col gap-8 opacity-80 pointer-events-none reveal-text">
          <div className="flex items-center gap-4 group">
            <div className="w-2 h-2 rounded-full bg-white opacity-50 transition-opacity" />
            <span className="premium-heading text-xs text-white/50">LUXEMBOURG</span>
          </div>
          <div className="flex items-center gap-4 group">
            <div className="w-2 h-2 rounded-full bg-white opacity-50 transition-opacity" />
            <span className="premium-heading text-xs text-white/50">KARACHI</span>
          </div>
          <div className="flex items-center gap-4 group">
            <div className="w-2 h-2 rounded-full bg-white shadow-[0_0_10px_#fff]" />
            <span className="premium-heading text-xs text-white font-bold tracking-widest">
              {geoData.loading ? 'DETECTING...' : (geoData.city ? geoData.city.toUpperCase() : 'MUMBAI')}
            </span>
          </div>
        </div>

        <div className="flex flex-col items-end text-right max-w-2xl reveal-text">
          <h2 className="premium-heading text-4xl md:text-5xl text-white leading-[1.3] font-light mb-6">
            MATHEMATICAL PRECISION<br/>
            IN GLOBAL TRADE.
          </h2>
          <p className="text-white/70 text-lg md:text-2xl tracking-wide leading-relaxed max-w-2xl">
            We move capital across borders by moving physical goods with absolute certainty.
            From inland sourcing to oceanic transit and immediate financial realization, 
            every node is optimized.
          </p>
        </div>
      </div>
      
      <div className="w-full flex justify-center reveal-text">
        <div className="w-[1px] h-16 bg-gradient-to-b from-white/50 to-transparent" />
      </div>
    </div>
  );
};

