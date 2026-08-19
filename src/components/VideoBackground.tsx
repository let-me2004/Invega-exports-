'use client';
import React from 'react';

interface VideoBackgroundProps {
  scrollProgress: number;
}

function getOpacity(progress: number, fadeInStart: number, peakStart: number, peakEnd: number, fadeOutEnd: number) {
  if (progress <= fadeInStart || progress >= fadeOutEnd) return 0;
  if (progress >= peakStart && progress <= peakEnd) return 1;
  if (progress > fadeInStart && progress < peakStart) {
    return (progress - fadeInStart) / (peakStart - fadeInStart);
  }
  if (progress > peakEnd && progress < fadeOutEnd) {
    return 1 - (progress - peakEnd) / (fadeOutEnd - peakEnd);
  }
  return 0;
}

export const VideoBackground: React.FC<VideoBackgroundProps> = ({ scrollProgress }) => {
  // Only show videos after the globe starts fading (0.1)
  if (scrollProgress < 0.1) return null;

  // Chapter 2: Truck (0.16 to 0.33)
  const v1Opacity = getOpacity(scrollProgress, 0.1, 0.16, 0.28, 0.33);
  // Chapter 3: Rail (0.33 to 0.50)
  const v2Opacity = getOpacity(scrollProgress, 0.28, 0.33, 0.45, 0.50);
  // Chapter 4: Port (0.50 to 0.66)
  const v3Opacity = getOpacity(scrollProgress, 0.45, 0.50, 0.61, 0.66);
  // Chapter 5: Ocean (0.66 to 0.83)
  const v4Opacity = getOpacity(scrollProgress, 0.61, 0.66, 0.78, 0.83);
  // Chapter 6: Arrival (0.83 to 1.0)
  const v5Opacity = getOpacity(scrollProgress, 0.78, 0.83, 1.0, 1.0); // Ends at 1.0

  return (
    <div className="fixed inset-0 z-0 pointer-events-none bg-[#1e2630]">
      
      {/* Video 1: Truck */}
      <video
        src="/truck being loaded with cargo container using crane on port.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ opacity: v1Opacity }}
      />

      {/* Video 2: Rail */}
      <video
        src="/cargo rail carrying cargos.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ opacity: v2Opacity }}
      />

      {/* Video 3: Port Drone */}
      <video
        src="/container on port footage by drone.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ opacity: v3Opacity }}
      />

      {/* Video 4: Ocean Voyage */}
      <video
        src="/ship far away in ocean with orange sky.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ opacity: v4Opacity }}
      />

      {/* Video 5: Arrival */}
      <video
        src="/big ship being pushed by 3 small ships toward thr port.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ opacity: v5Opacity }}
      />
      
      {/* Dark overlay to ensure text legibility at all times */}
      <div 
        className="absolute inset-0 bg-[#1e2630]" 
        style={{ opacity: 0.4 }} 
      />
    </div>
  );
};
