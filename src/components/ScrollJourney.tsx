'use client';
import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { GlobeScene } from '@/components/three/GlobeScene';
import { ChapterOne } from '@/components/overlays/ChapterOne';
import { ChapterTwo } from '@/components/overlays/ChapterTwo';
import { ChapterThree } from '@/components/overlays/ChapterThree';
import { ChapterFour } from '@/components/overlays/ChapterFour';
import { ChapterFive } from '@/components/overlays/ChapterFive';
import { ChapterSix } from '@/components/overlays/ChapterSix';

// Ensure ScrollTrigger is registered before use
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export const ScrollJourney = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useGSAP(() => {
    const panels = gsap.utils.toArray('.curtain-panel');
    
    // Total duration of scroll
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: '+=400%', // 4 vertical wipes
        pin: true,
        scrub: 1,
      }
    });

    // Helper to animate text inside a panel
    const animateText = (panel: Element, offset: string) => {
      tl.fromTo(panel.querySelectorAll('.reveal-text'),
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.1, duration: 0.5 },
        offset
      );
    };

    // Text for Panel 0 (Truck) is just static for now, or animate on load
    animateText(panels[0] as Element, "0");

    // Wipe Panel 1 (Rail) up
    if (panels[1]) {
      tl.fromTo(panels[1] as HTMLElement, 
        { yPercent: 100 }, 
        { yPercent: 0, ease: "none", duration: 1 }
      );
      animateText(panels[1] as Element, "-=0.3");
    }
    
    // Wipe Panel 2 (Port) up
    if (panels[2]) {
      tl.fromTo(panels[2] as HTMLElement, 
        { yPercent: 100 }, 
        { yPercent: 0, ease: "none", duration: 1 }
      );
      animateText(panels[2] as Element, "-=0.3");
    }

    // Wipe Panel 3 (Ocean) up
    if (panels[3]) {
      tl.fromTo(panels[3] as HTMLElement, 
        { yPercent: 100 }, 
        { yPercent: 0, ease: "none", duration: 1 }
      );
      animateText(panels[3] as Element, "-=0.3");
    }

    // Wipe Panel 4 (Arrival) up
    if (panels[4]) {
      tl.fromTo(panels[4] as HTMLElement, 
        { yPercent: 100 }, 
        { yPercent: 0, ease: "none", duration: 1 }
      );
      animateText(panels[4] as Element, "-=0.3");
    }

  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="relative w-full h-[100dvh] overflow-hidden bg-black">
      
      {/* Chapter 2: Truck (Now first panel) */}
      <section className="curtain-panel absolute inset-0 z-10 w-full h-full bg-black">
        <video src="/truck being loaded with cargo container using crane on port.mp4" autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/60" />
        <ChapterTwo scrollProgress={0.25} />
      </section>

      {/* Chapter 3: Rail */}
      <section className="curtain-panel absolute inset-0 z-30 w-full h-full bg-black">
        <video src="/cargo rail carrying cargos.mp4" autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/60" />
        <ChapterThree scrollProgress={0.4} />
      </section>

      {/* Chapter 4: Port */}
      <section className="curtain-panel absolute inset-0 z-40 w-full h-full overflow-hidden bg-black">
        <video src="/container on port footage by drone.mp4" autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/60" />
        <ChapterFour scrollProgress={0.55} />
      </section>

      {/* Chapter 5: Ocean */}
      <section className="curtain-panel absolute inset-0 z-50 w-full h-full bg-black">
        <video src="/ship far away in ocean with orange sky.mp4" autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/60" />
        <ChapterFive scrollProgress={0.7} />
      </section>

      {/* Chapter 6: Arrival */}
      <section className="curtain-panel absolute inset-0 z-50 w-full h-full bg-black">
        <video src="/big ship being pushed by 3 small ships toward thr port.mp4" autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/60" />
        <ChapterSix scrollProgress={0.9} />
      </section>

    </div>
  );
};

