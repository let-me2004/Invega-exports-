'use client';
import React, { useState, useEffect } from 'react';
import PixelSwap from '@/components/animations/PixelSwap';

export const GlobalLoader = () => {
  const [isActive, setIsActive] = useState(false);
  const [isUnmounted, setIsUnmounted] = useState(false);

  useEffect(() => {
    // Trigger the shatter effect after a 1.2s delay to show the loading screen first
    const timer = setTimeout(() => {
      setIsActive(true);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  if (isUnmounted) return null;

  return (
    <div 
      className={`fixed inset-0 z-[9999] ${isActive ? 'pointer-events-none' : ''}`}
    >
      <PixelSwap
        firstContent={
          <div className="w-full h-full bg-black flex flex-col items-center justify-center pointer-events-auto">
            <div className="w-20 h-20 bg-white rounded-none flex items-center justify-center mb-8 shadow-2xl border border-white/20">
               <span className="text-black font-black tracking-widest text-2xl">IE</span>
            </div>
            <h1 className="text-white text-3xl md:text-5xl tracking-[0.4em] font-black uppercase ml-[0.4em]">
              INVEGA
            </h1>
          </div>
        }
        secondContent={<div className="w-full h-full bg-transparent" />}
        pixelSize={64}
        gap={0}
        pixelRadius={0}
        pixelSpin={0}
        pixelScale={0.35}
        duration={1400}
        pixelDuration={450}
        pattern="random"
        randomness={0.5}
        fade={true}
        trigger="manual"
        active={isActive}
        onComplete={() => setIsUnmounted(true)}
        aspectRatio="auto"
        className="w-full h-full"
        mode="shatter"
      />
    </div>
  );
};
