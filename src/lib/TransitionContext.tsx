'use client';
import React, { createContext, useContext, useState, useCallback } from 'react';

type TransitionDirection = 'left' | 'right';

interface TransitionContextType {
  direction: TransitionDirection;
  pageName: string;
  setTransition: (direction: TransitionDirection, pageName: string) => void;
}

const TransitionContext = createContext<TransitionContextType>({
  direction: 'right',
  pageName: '',
  setTransition: () => {},
});

export const useTransition = () => useContext(TransitionContext);

export const TransitionProvider = ({ children }: { children: React.ReactNode }) => {
  const [direction, setDirection] = useState<TransitionDirection>('right');
  const [pageName, setPageName] = useState('');

  const setTransition = useCallback((dir: TransitionDirection, name: string) => {
    setDirection(dir);
    setPageName(name);
  }, []);

  return (
    <TransitionContext.Provider value={{ direction, pageName, setTransition }}>
      {children}
    </TransitionContext.Provider>
  );
};
