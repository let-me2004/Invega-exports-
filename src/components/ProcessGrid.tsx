'use client';
import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const steps = [
  {
    num: '01',
    title: 'DYNAMIC SOURCING',
    desc: 'You tell us what you need. We bridge the gap between global buyers and India’s vast manufacturing and agricultural landscape to secure the right products at the right price.',
  },
  {
    num: '02',
    title: 'QUALITY & COMPLIANCE',
    desc: 'Indian export regulations can be complex. We act as your shield, handling strict quality checks, shipping bills, and regulatory compliance so your business carries zero risk.',
  },
  {
    num: '03',
    title: 'MODERN LOGISTICS',
    desc: 'We leverage established digital freight networks to route your cargo efficiently. Say goodbye to black boxes—we provide clear communication and transparent tracking.',
  }
];

export const ProcessGrid = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(cardsRef.current,
        { y: 50, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          stagger: 0.2, 
          duration: 0.8, 
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
          }
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="w-full bg-white text-black py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="premium-heading text-3xl md:text-5xl font-light mb-16 text-center">
          OUR EXPORT PROCESS
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div 
              key={i}
              ref={el => { cardsRef.current[i] = el; }}
              className="group relative border border-gray-200 p-8 hover:bg-black hover:border-black transition-colors duration-500 overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-6 opacity-10 font-display text-8xl premium-heading group-hover:text-white transition-colors duration-500">
                {step.num}
              </div>
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 bg-black text-white flex items-center justify-center font-bold mb-8 group-hover:bg-white group-hover:text-black transition-colors duration-500">
                    {step.num}
                  </div>
                  <h3 className="text-2xl premium-heading mb-4 group-hover:text-white transition-colors duration-500">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed group-hover:text-white/90 transition-colors duration-500">
                    {step.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
