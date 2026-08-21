'use client';
import React from 'react';

const images = [
  { src: '/pictures/pexels-alexander-bobrov-390088-3277769.jpg', label: 'ocean transit', rot: '-rotate-6', y: 'translate-y-6', mobHide: 'hidden md:block' },
  { src: '/pictures/pexels-kelly-13766346.jpg', label: 'cargo handling', rot: '-rotate-2', y: 'translate-y-1', mobHide: '' },
  { src: '/pictures/pexels-fatih-turan-63325184-16229885.jpg', label: 'global reach', rot: 'rotate-1', y: '-translate-y-2', mobHide: '' },
  { src: '/pictures/pexels-dendoktoor-9328777.jpg', label: 'precision', rot: 'rotate-4', y: 'translate-y-2', mobHide: '' },
  { src: '/pictures/pexels-giantasparagus-35501714.jpg', label: 'fulfillment', rot: 'rotate-8', y: 'translate-y-8', mobHide: 'hidden md:block' },
];

export const PolaroidStack = () => {
  return (
    <div className="w-full flex justify-center items-center gap-[-20px] md:gap-6 lg:gap-10 pt-4 pb-16 px-4">
      {images.map((img, i) => (
        <div 
          key={i}
          className={elative group w-24 h-32 md:w-40 md:h-52 lg:w-48 lg:h-64 bg-[#f4f4f4] p-1.5 md:p-2 lg:p-3 pb-6 md:pb-10 lg:pb-14 shadow-2xl transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] 
            \ \ \
            hover:!z-50 hover:!scale-110 hover:!rotate-0 hover:!-translate-y-8 cursor-pointer
            -mx-3 md:mx-0 /* Overlap on mobile */
          }
          style={{
            transformOrigin: 'center center',
            boxShadow: '0 25px 50px -12px rgba(0,0,0,0.8)'
          }}
        >
          <div className="w-full h-full relative overflow-hidden bg-gray-900 border border-black/10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src={img.src} 
              alt={img.label} 
              className="w-full h-full object-cover filter grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
            />
          </div>
          <div className="absolute bottom-2 md:bottom-3 lg:bottom-5 left-0 w-full text-center text-[6px] md:text-[10px] lg:text-xs text-black/60 uppercase tracking-[0.25em] font-semibold">
            {img.label}
          </div>
        </div>
      ))}
    </div>
  );
};
