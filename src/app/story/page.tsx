'use client';

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SmoothScroll } from '@/components/SmoothScroll';
import { FooterCTA } from '@/components/FooterCTA';
import { Footer } from '@/components/layout/Footer';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function StoryPage() {
  const headerRef = useRef<HTMLDivElement>(null);
  const narrativeRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // 1. Initial Page Load Animation for the Header
    const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

    tl.fromTo(
      '.story-subtitle',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, delay: 0.2 }
    );

    tl.fromTo(
      '.reveal-text',
      { y: '110%' },
      { y: '0%', duration: 1.2, stagger: 0.15 },
      "-=0.8"
    );

    // 2. Scroll-Triggered Animations for the Story Blocks
    const blocks = gsap.utils.toArray('.narrative-block');
    blocks.forEach((block: any) => {
      gsap.fromTo(
        block,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: block,
            start: 'top 85%', // Trigger when the top of the block reaches 85% of the viewport height
            toggleActions: 'play none none none' // Play once and stay
          }
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <main className="bg-white min-h-[100dvh] text-black pt-32 relative selection:bg-[#737373] selection:text-white">
      <SmoothScroll>
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 pb-32">
          
          {/* Header */}
          <header ref={headerRef} className="mb-20">
            <h4 className="story-subtitle uppercase tracking-[0.2em] text-sm font-bold mb-6 text-[#737373]">
              Our Story
            </h4>
            <h1 className="text-4xl md:text-6xl lg:text-[5vw] premium-heading leading-tight mb-8">
              <span className="block overflow-hidden pb-2">
                <span className="block reveal-text">WHY TWO ENGINEERS</span>
              </span>
              <span className="block overflow-hidden pb-2">
                <span className="block reveal-text text-[#737373]">BUILT AN EXPORT COMPANY.</span>
              </span>
            </h1>
          </header>

          {/* Main Narrative */}
          <article ref={narrativeRef} className="space-y-16 text-lg md:text-xl text-gray-700 leading-relaxed font-light">
            
            <section className="narrative-block grid md:grid-cols-12 gap-8 md:gap-16">
              <div className="md:col-span-4">
                <h3 className="text-2xl premium-heading text-black mb-4">The Latency Problem</h3>
              </div>
              <div className="md:col-span-7 md:col-start-6 lg:col-span-6 lg:col-start-7 space-y-6">
                <p>
                  Most export and trading companies are built by traditional merchants. <strong>Invega Exports was built by two friends sharing the exact same engineering background.</strong>
                </p>
                <p>
                  When we first looked at the global supply chain, we didn't just see ships and cargo containers. We saw a distributed network suffering from massive latency, analog bottlenecks, and data loss. Traditional import/export is weighed down by manual paperwork, unpredictable customs delays, and a complete lack of transparency for the buyer. 
                </p>
              </div>
            </section>

            <div className="narrative-block w-full h-[1px] bg-gray-200" />

            <section className="narrative-block grid md:grid-cols-12 gap-8 md:gap-16">
              <div className="md:col-span-4">
                <h3 className="text-2xl premium-heading text-black mb-4">The Systems Approach</h3>
              </div>
              <div className="md:col-span-7 md:col-start-6 lg:col-span-6 lg:col-start-7 space-y-6">
                <p>
                  As engineers, we realized that the physical movement of goods is only half the equation; the other half is information flow. 
                </p>
                <p>
                  We treat physical cargo the way a software engineer treats data: with strict organization, transparent tracking, and optimized routing. Instead of relying on the chaotic, paper-heavy methods of traditional exporters, we leverage modern digital freight networks and compliance platforms.
                </p>
                <p>
                  We manage the complexities of Indian customs, shipping bills, and quality control using a strict, systems-driven process. We remove the human error and miscommunication that typically plagues cross-border trade.
                </p>
              </div>
            </section>

            <div className="narrative-block w-full h-[1px] bg-gray-200" />

            <section className="narrative-block grid md:grid-cols-12 gap-8 md:gap-16">
              <div className="md:col-span-4">
                <h3 className="text-2xl premium-heading text-black mb-4">Our Promise</h3>
              </div>
              <div className="md:col-span-7 md:col-start-6 lg:col-span-6 lg:col-start-7 space-y-6">
                <p>
                  If you are a buyer outside of India looking to source products, you don't want the headache of opaque suppliers, language barriers, and unpredictable delays. You just want your goods delivered on time, to exact specifications.
                </p>
                <p>
                  At Invega Exports, we are a straightforward trading partner powered by next-generation technology. You get the vast manufacturing and agricultural power of India, delivered with the absolute reliability and transparency of a modern tech company. 
                </p>
              </div>
            </section>

          </article>
        </div>
        
        <FooterCTA />
        <Footer />
      </SmoothScroll>
    </main>
  );
}

