'use client';
import { PillNav } from './PillNav';

export const PillNavWrapper = () => {
  return (
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
  );
};
