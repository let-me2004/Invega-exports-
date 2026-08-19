'use client';
import React, { useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { useTransition } from '@/lib/TransitionContext';

// Nav order: The Journey (/) = 0, Our Story (/story) = 1, Connect (/contact) = 2
const PAGE_ORDER: Record<string, number> = {
  '/': 0,
  '/story': 1,
  '/contact': 2,
};

const PAGE_NAMES: Record<string, string> = {
  '/': 'THE JOURNEY',
  '/story': 'OUR STORY',
  '/contact': 'CONNECT',
};

interface TransitionLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export const TransitionLink = ({ href, children, className }: TransitionLinkProps) => {
  const router = useRouter();
  const { setTransition } = useTransition();

  const handleClick = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    
    // Determine direction based on page order
    const currentPath = window.location.pathname;
    const currentOrder = PAGE_ORDER[currentPath] ?? 0;
    const targetOrder = PAGE_ORDER[href] ?? 0;
    const direction = targetOrder >= currentOrder ? 'right' : 'left';
    const pageName = PAGE_NAMES[href] || '';

    // Set transition state, then navigate
    setTransition(direction, pageName);
    
    // Small delay to let the exit animation start
    setTimeout(() => {
      router.push(href);
    }, 50);
  }, [href, router, setTransition]);

  return (
    <a href={href} onClick={handleClick} className={className}>
      {children}
    </a>
  );
};
