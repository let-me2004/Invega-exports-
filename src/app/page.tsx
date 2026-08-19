'use client';
import React from 'react';
import dynamic from 'next/dynamic';
import { ScrollExpand } from '@/components/animations/ScrollExpand';
import { ProcessGrid } from '@/components/ProcessGrid';
import { FooterCTA } from '@/components/FooterCTA';
import { Footer } from '@/components/layout/Footer';
import ExportAdvantages from '@/components/ExportAdvantages';

const ScrollJourney = dynamic(
  () => import('@/components/ScrollJourney').then((mod) => mod.ScrollJourney),
  { ssr: false }
);

const SmoothScroll = dynamic(
  () => import('@/components/SmoothScroll').then((mod) => mod.SmoothScroll),
  { ssr: false }
);

export default function Home() {
  return (
    <main className="bg-black text-white relative">
      <SmoothScroll>
        <ScrollExpand
          src="/12028879_1920_1080_24fps.mp4"
          mediaType="video"
          title="BRIDGING BORDERS"
          scrollHint="Scroll to explore"
          useWindowScroll
        >
          <h2 className="text-5xl md:text-7xl lg:text-[7vw] premium-heading leading-tight text-white mb-6">
            MATHEMATICAL PRECISION
          </h2>
          <p className="text-white/80 max-w-4xl mx-auto text-base md:text-xl font-light text-white/80 leading-relaxed">
            Every pixel, everywhere. We move capital across borders with absolute certainty. From inland sourcing to oceanic transit.
          </p>
        </ScrollExpand>

        {/* Cinematic Transition Breather */}
        <div className="w-full relative z-20 bg-black">
          {/* Top Gradient: Fades the hard bottom edge of the video into black */}
          <div className="absolute top-0 left-0 w-full h-48 bg-gradient-to-b from-transparent via-black/80 to-black -translate-y-full pointer-events-none" />
          
          {/* Spacer content to give the user a visual rest before the next heavy animation */}
          <div className="h-[25vh] flex items-center justify-center">
            <div className="flex items-center gap-6 opacity-40">
              <div className="w-16 h-[1px] bg-white"></div>
              <span className="text-white text-xs tracking-[0.4em] uppercase font-bold">Supply Chain Engaged</span>
              <div className="w-16 h-[1px] bg-white"></div>
            </div>
          </div>
        </div>

        <ScrollJourney />
        <ExportAdvantages />
        <ProcessGrid />
        <FooterCTA />
        <Footer />
      </SmoothScroll>
    </main>
  );
}
