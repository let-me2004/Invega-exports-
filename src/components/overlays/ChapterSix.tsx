'use client';
import React from 'react';

interface ChapterProps {
  scrollProgress: number;
}

export const ChapterSix: React.FC<ChapterProps> = ({ scrollProgress }) => {
  const isVisible = scrollProgress > 0.83;
  if (!isVisible) return null;

  return (
    <div className="absolute inset-0 pointer-events-none flex flex-col justify-between p-6 md:p-12 lg:p-24 z-10 animate-in fade-in duration-1000">
      <div className="flex justify-between items-start w-full reveal-text">
        <div>
          <h2 className="premium-heading text-sm text-white/50 tracking-[0.2em] mb-2">PHASE V</h2>
          <h1 className="premium-heading text-lg md:text-2xl text-white tracking-[0.1em]">DESTINATION</h1>
        </div>
        <div className="diamond-indicator"><span>5</span></div>
      </div>

      <div className="flex flex-col items-start justify-center flex-1 w-full max-w-7xl w-full mx-auto">
        <h2 className="text-[1.75rem] sm:text-4xl md:text-5xl lg:text-6xl text-white leading-[1.2] premium-heading mb-6 reveal-text">
          SAFE HARBOR AND<br/>IMMEDIATE REALIZATION.
        </h2>
        <p className="text-white/70 text-sm md:text-lg tracking-wide leading-relaxed max-w-3xl reveal-text">
          Arrival is only half the job. As the cargo hits the destination port, our financial infrastructure kicks in. Foreign exchange is hedged, remittances are tracked, and eBRC realization is triggered automatically. The cycle completes.
        </p>
      </div>
    </div>
  );
};



