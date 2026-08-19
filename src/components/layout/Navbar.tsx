'use client';
import React from 'react';
import Link from 'next/link';
import { TransitionLink } from '@/components/TransitionLink';

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white border-b border-black/5 px-8 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <TransitionLink href="/" className="premium-heading text-xl font-bold text-[#001f5b] tracking-widest">
            INVEGA EXPORTS
          </TransitionLink>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <TransitionLink href="/" className="text-sm font-semibold tracking-widest text-[#001f5b] hover:text-[#0033a0] transition-colors uppercase">
            The Journey
          </TransitionLink>
          <TransitionLink href="/story" className="text-sm font-semibold tracking-widest text-[#001f5b] hover:text-[#0033a0] transition-colors uppercase">
            Our Story
          </TransitionLink>
          <TransitionLink href="/contact" className="text-sm font-semibold tracking-widest text-[#001f5b] hover:text-[#0033a0] transition-colors uppercase">
            Connect
          </TransitionLink>
          <TransitionLink href="/contact" className="text-sm font-bold tracking-widest text-white bg-[#0033a0] px-6 py-3 rounded-full hover:bg-[#001f5b] transition-colors uppercase">
            Let's work together
          </TransitionLink>
        </div>
      </div>
    </nav>
  );
};
