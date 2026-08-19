'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useTransition } from '@/lib/TransitionContext';
import { usePathname } from 'next/navigation';

export default function Template({ children }: { children: React.ReactNode }) {
  const { direction, pageName } = useTransition();
  const pathname = usePathname();

  const isRight = direction === 'right';

  return (
    <>
      {/* Phase 1: White curtain slides IN from one side, holds in center with page name */}
      <motion.div
        key={`curtain-${pathname}`}
        className="fixed top-0 left-0 w-full h-[100vh] bg-white z-[100] flex items-center justify-center"
        initial={{ x: isRight ? '100%' : '-100%' }}
        animate={{
          x: ['0%', '0%', isRight ? '-100%' : '100%'],
        }}
        transition={{
          duration: 1.4,
          times: [0, 0.4, 1], // arrive at 0-40%, hold 40%, exit 40-100%
          ease: [0.76, 0, 0.24, 1],
        }}
      >
        {/* Page name on the curtain */}
        <motion.h1
          className="premium-heading text-5xl md:text-7xl text-black tracking-[0.15em] font-light select-none"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{
            opacity: [0, 1, 1, 0],
            scale: [0.9, 1, 1, 0.95],
          }}
          transition={{
            duration: 1.4,
            times: [0, 0.25, 0.5, 0.85],
          }}
        >
          {pageName}
        </motion.h1>
      </motion.div>

      {/* Phase 2: Page content slides in from the same direction, pushing the curtain out */}
      <motion.div
        key={`content-${pathname}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        {children}
      </motion.div>
    </>
  );
}
