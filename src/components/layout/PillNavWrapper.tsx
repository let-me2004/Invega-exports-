'use client';
import { PillNav } from './PillNav';

export const PillNavWrapper = () => {
  return (
    <>
      <div className="fixed top-0 left-0 w-full h-32 bg-gradient-to-b from-black via-black/80 to-transparent pointer-events-none z-[98]"></div>
      <PillNav
        logoText="IE"
        items={[
          { label: 'The Journey', href: '/' },
          { label: 'Our Story', href: '/story' },
          { label: 'Founders', href: '/founders' },
          { label: 'Connect', href: '/contact' },
        ]}
        navBgColor="#ffffff"
        pillBgColor="transparent"
        pillTextColor="#000000"
        hoverBgColor="#000000"
        hoverTextColor="#ffffff"
        activeDotColor="#000000"
        initialLoadAnimation
      />
    </>
  );
};
