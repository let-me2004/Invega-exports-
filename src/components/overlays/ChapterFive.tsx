'use client';
import React from 'react';

interface ChapterProps {
  scrollProgress: number;
}

export const ChapterFive: React.FC<ChapterProps> = ({ scrollProgress }) => {
  const isVisible = scrollProgress > 0.66 && scrollProgress < 0.83;
  if (!isVisible) return null;

  return (
    <div className="absolute inset-0 pointer-events-none flex flex-col justify-between p-6 md:p-12 lg:p-24 z-10 animate-in fade-in duration-1000">
      <div className="flex justify-between items-start w-full reveal-text">
        <div>
          <h2 className="premium-heading text-sm text-white/50 tracking-[0.2em] mb-2">PHASE IV</h2>
          <h1 className="premium-heading text-2xl text-white tracking-[0.1em]">THE VOYAGE</h1>
        </div>
        <div className="diamond-indicator"><span>4</span></div>
      </div>

      <div className="flex flex-col items-start justify-center flex-1 w-full max-w-7xl w-full mx-auto">
        <h2 className="text-4xl md:text-5xl lg:text-6xl text-white leading-[1.2] premium-heading mb-6 reveal-text">
          CROSSING BORDERS AT<br/>THE SPEED OF COMMERCE.
        </h2>
        <p className="text-white/70 text-base md:text-lg tracking-wide leading-relaxed max-w-3xl reveal-text">
          Once on the water, visibility is everything. We track vessel telemetry, weather patterns, and port congestion in real-time. You know exactly where your capital is, and exactly when it will arrive.
        </p>
      </div>
    </div>
  );
};

