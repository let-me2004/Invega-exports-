'use client';
import React, { useRef } from 'react';
import GlareHover from '@/components/animations/GlareHover';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Footer } from '@/components/layout/Footer';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function FoundersPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const reveals = gsap.utils.toArray('.reveal-block');
    reveals.forEach((el: any) => {
      gsap.fromTo(el, 
        { y: 50, opacity: 0 },
        { 
          y: 0, opacity: 1, 
          duration: 1, 
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
          }
        }
      );
    });
  }, { scope: containerRef });

  return (
    <main ref={containerRef} className="bg-black min-h-[100dvh] text-white pt-32 md:pt-48 pb-24 relative selection:bg-[#737373] selection:text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="mb-32 reveal-block">
          <div className="w-12 h-1 bg-white mb-8"></div>
          <h1 className="premium-heading text-4xl md:text-6xl lg:text-[5vw] tracking-[0.1em] mb-8 leading-tight">
            THE ARCHITECTS
          </h1>
          <p className="text-xl md:text-2xl text-[#737373] font-light max-w-3xl leading-relaxed">
            Two engineers. Same major. One shared vision: to strip the latency and black-box mechanics out of global trade through mathematical precision.
          </p>
        </div>

        {/* The Founders Grid */}
        <div className="grid md:grid-cols-2 gap-16 md:gap-8 mb-32">
                                                            {/* Founder 1 */}
          <div className="group reveal-block border-t border-white/20 pt-8">
            <h2 className="premium-heading text-2xl md:text-3xl tracking-widest mb-6 group-hover:text-[#737373] transition-colors duration-500">
              ANUKALP
            </h2>
            <div className="w-full mb-8 relative bg-[#0a0a0a]">
              <GlareHover
                width="100%"
                height="100%"
                background="transparent"
                borderColor="rgba(255,255,255,0.1)"
                borderRadius="0"
                glareColor="#ffffff"
                glareOpacity={0.15}
                transitionDuration={800}
              >
                <img 
                  src="/pictures/anukalp.png" 
                  alt="Anukalp" 
                  className="w-full h-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 pointer-events-none"></div>
                
                {/* System Architecture Tag */}
                <div className="absolute bottom-4 left-4 pointer-events-none z-20">
                  <span className="premium-heading text-white text-xs tracking-[0.4em] uppercase">System Architecture</span>
                </div>

                {/* Name Tag / Watermark Cover */}
                <div className="absolute bottom-0 right-0 bg-[#0a0a0a] border-t border-l border-white/10 px-8 py-4 pointer-events-none z-30">
                  <span className="premium-heading text-white text-xs tracking-[0.3em] uppercase">Anukalp</span>
                </div>
              </GlareHover>
            </div>
            <p className="text-[#737373] text-lg leading-relaxed">
              Applying systems engineering principles to supply chain orchestration. Focused on the algorithmic routing of capital and cargo, ensuring that every shipment is tracked, verified, and delivered with absolute certainty.
            </p>
          </div>

                                                            {/* Founder 2 */}
          <div className="group reveal-block border-t border-white/20 pt-8">
            <h2 className="premium-heading text-2xl md:text-3xl tracking-widest mb-6 group-hover:text-[#737373] transition-colors duration-500">
              ISHAAN
            </h2>
            <div className="w-full mb-8 relative bg-[#0a0a0a]">
              <GlareHover
                width="100%"
                height="100%"
                background="transparent"
                borderColor="rgba(255,255,255,0.1)"
                borderRadius="0"
                glareColor="#ffffff"
                glareOpacity={0.15}
                transitionDuration={800}
              >
                <img 
                  src="/pictures/ishaan.jpeg" 
                  alt="Ishaan" 
                  className="w-full h-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 pointer-events-none"></div>
                
                {/* Global Logistics Tag */}
                <div className="absolute bottom-4 left-4 pointer-events-none z-20">
                  <span className="premium-heading text-white/50 text-xs tracking-[0.4em] uppercase">Global Logistics</span>
                </div>

                {/* Name Tag */}
                <div className="absolute bottom-0 right-0 bg-[#0a0a0a] border-t border-l border-white/10 px-8 py-4 pointer-events-none z-30">
                  <span className="premium-heading text-white/50 text-xs tracking-[0.3em] uppercase">Ishaan</span>
                </div>
              </GlareHover>
            </div>
            <p className="text-[#737373] text-lg leading-relaxed">
              Bridging the physical and digital. Expertise in navigating the complex regulatory frameworks of international trade, transforming friction-heavy border crossings into frictionless, API-driven clearances.
            </p>
          </div>
        </div>

        {/* Closing Ethos */}
        <div className="reveal-block max-w-4xl border-l-4 border-white pl-8 md:pl-12 py-4 mb-32">
          <h3 className="premium-heading text-3xl md:text-4xl tracking-widest mb-6 leading-relaxed">
            "WE AREN'T JUST MOVING CONTAINERS. WE ARE RE-ENGINEERING HOW COMMERCE FLOWS ACROSS BORDERS."
          </h3>
          <p className="text-[#737373] tracking-[0.2em] text-sm uppercase">?" The Founders</p>
        </div>

      </div>
      
      <Footer />
    </main>
  );
}










