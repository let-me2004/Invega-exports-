'use client';
import { useEffect, useRef, useState, useCallback } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { gsap } from 'gsap';
import { useTransition } from '@/lib/TransitionContext';
import './PillNav.css';

interface PillNavItem {
  label: string;
  href: string;
  ariaLabel?: string;
}

interface PillNavProps {
  logo?: string;
  logoAlt?: string;
  logoText?: string;
  items: PillNavItem[];
  className?: string;
  ease?: string;
  navBgColor?: string;
  pillBgColor?: string;
  pillTextColor?: string;
  hoverBgColor?: string;
  hoverTextColor?: string;
  activeDotColor?: string;
  onMobileMenuClick?: () => void;
  initialLoadAnimation?: boolean;
}

// Nav order for directional transitions
const PAGE_ORDER: Record<string, number> = {
  '/': 0,
  '/story': 1,
  '/founders': 2, 
  '/contact': 3,
};

const PAGE_NAMES: Record<string, string> = {
  '/': 'THE JOURNEY',
  '/story': 'OUR STORY',
  '/founders': 'FOUNDERS', 
  '/contact': 'CONNECT',
};

export const PillNav = ({
  logo,
  logoAlt = 'Logo',
  logoText,
  items,
  className = '',
  ease = 'power3.easeOut',
  navBgColor = '#ffffff',
  pillBgColor = 'transparent',
  pillTextColor = '#001f5b',
  hoverBgColor = '#0033a0',
  hoverTextColor = '#ffffff',
  activeDotColor = '#0033a0',
  onMobileMenuClick,
  initialLoadAnimation = true,
}: PillNavProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const circleRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const tlRefs = useRef<(gsap.core.Timeline | null)[]>([]);
  const activeTweenRefs = useRef<(gsap.core.Tween | null)[]>([]);
  const logoImgRef = useRef<HTMLImageElement | null>(null);
  const logoTweenRef = useRef<gsap.core.Tween | null>(null);
  const hamburgerRef = useRef<HTMLButtonElement | null>(null);
  const mobileMenuRef = useRef<HTMLDivElement | null>(null);
  const navItemsRef = useRef<HTMLDivElement | null>(null);
  const logoRef = useRef<HTMLAnchorElement | null>(null);

  const pathname = usePathname();
  const router = useRouter();
  const { setTransition } = useTransition();

  useEffect(() => {
    const layout = () => {
      circleRefs.current.forEach((circle, index) => {
        if (!circle?.parentElement) return;

        const pill = circle.parentElement;
        const rect = pill.getBoundingClientRect();
        const { width: w, height: h } = rect;
        const R = ((w * w) / 4 + h * h) / (2 * h);
        const D = Math.ceil(2 * R) + 2;
        const delta = Math.ceil(R - Math.sqrt(Math.max(0, R * R - (w * w) / 4))) + 1;
        const originY = D - delta;

        circle.style.width = `${D}px`;
        circle.style.height = `${D}px`;
        circle.style.bottom = `-${delta}px`;

        gsap.set(circle, {
          xPercent: -50,
          scale: 0,
          transformOrigin: `50% ${originY}px`,
        });

        const label = pill.querySelector('.pill-label') as HTMLElement;
        const white = pill.querySelector('.pill-label-hover') as HTMLElement;

        if (label) gsap.set(label, { y: 0 });
        if (white) gsap.set(white, { y: h + 12, opacity: 0 });

        tlRefs.current[index]?.kill();
        const tl = gsap.timeline({ paused: true });

        tl.to(circle, { scale: 1.2, xPercent: -50, duration: 2, ease, overwrite: 'auto' }, 0);

        if (label) {
          tl.to(label, { y: -(h + 8), duration: 2, ease, overwrite: 'auto' }, 0);
        }

        if (white) {
          gsap.set(white, { y: Math.ceil(h + 100), opacity: 0 });
          tl.to(white, { y: 0, opacity: 1, duration: 2, ease, overwrite: 'auto' }, 0);
        }

        tlRefs.current[index] = tl;
      });
    };

    layout();

    const onResize = () => layout();
    window.addEventListener('resize', onResize);

    if (document.fonts?.ready) {
      document.fonts.ready.then(layout).catch(() => {});
    }

    const menu = mobileMenuRef.current;
    if (menu) {
      gsap.set(menu, { visibility: 'hidden', opacity: 0, scaleY: 1 });
    }

    if (initialLoadAnimation) {
      const logoEl = logoRef.current;
      const navItems = navItemsRef.current;

      if (logoEl) {
        gsap.set(logoEl, { scale: 0 });
        gsap.to(logoEl, { scale: 1, duration: 0.6, ease });
      }

      if (navItems) {
        gsap.set(navItems, { width: 0, overflow: 'hidden' });
        gsap.to(navItems, { width: 'auto', duration: 0.6, ease });
      }
    }

    return () => window.removeEventListener('resize', onResize);
  }, [items, ease, initialLoadAnimation]);

  const handleEnter = (i: number) => {
    const tl = tlRefs.current[i];
    if (!tl) return;
    activeTweenRefs.current[i]?.kill();
    activeTweenRefs.current[i] = tl.tweenTo(tl.duration(), {
      duration: 0.3,
      ease,
      overwrite: 'auto',
    });
  };

  const handleLeave = (i: number) => {
    const tl = tlRefs.current[i];
    if (!tl) return;
    activeTweenRefs.current[i]?.kill();
    activeTweenRefs.current[i] = tl.tweenTo(0, {
      duration: 0.2,
      ease,
      overwrite: 'auto',
    });
  };

  const handleLogoEnter = () => {
    const img = logoImgRef.current;
    if (!img) return;
    logoTweenRef.current?.kill();
    gsap.set(img, { rotate: 0 });
    logoTweenRef.current = gsap.to(img, {
      rotate: 360,
      duration: 0.2,
      ease,
      overwrite: 'auto',
    });
  };

  const handleNavigate = useCallback((href: string, e: React.MouseEvent) => {
    e.preventDefault();
    const currentOrder = PAGE_ORDER[pathname] ?? 0;
    const targetOrder = PAGE_ORDER[href] ?? 0;
    const direction = targetOrder >= currentOrder ? 'right' : 'left';
    const pageName = PAGE_NAMES[href] || '';
    setTransition(direction, pageName);
    setTimeout(() => router.push(href), 50);
  }, [pathname, router, setTransition]);

    const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    const hamburger = hamburgerRef.current;
    const menu = mobileMenuRef.current;
    if (hamburger) {
      const lines = hamburger.querySelectorAll('.hamburger-line');
      gsap.to(lines[0], { rotation: 0, y: 0, duration: 0.3, ease });
      gsap.to(lines[1], { rotation: 0, y: 0, duration: 0.3, ease });
    }
    if (menu) {
      gsap.to(menu, {
        opacity: 0, y: 10, scaleY: 1, duration: 0.2, ease,
        transformOrigin: 'top center',
        onComplete: () => gsap.set(menu, { visibility: 'hidden' }),
      });
    }
  };

  const toggleMobileMenu = () => {
    const newState = !isMobileMenuOpen;
    setIsMobileMenuOpen(newState);

    const hamburger = hamburgerRef.current;
    const menu = mobileMenuRef.current;

    if (hamburger) {
      const lines = hamburger.querySelectorAll('.hamburger-line');
      if (newState) {
        gsap.to(lines[0], { rotation: 45, y: 3, duration: 0.3, ease });
        gsap.to(lines[1], { rotation: -45, y: -3, duration: 0.3, ease });
      } else {
        gsap.to(lines[0], { rotation: 0, y: 0, duration: 0.3, ease });
        gsap.to(lines[1], { rotation: 0, y: 0, duration: 0.3, ease });
      }
    }

    if (menu) {
      if (newState) {
        gsap.set(menu, { visibility: 'visible' });
        gsap.fromTo(
          menu,
          { opacity: 0, y: 10, scaleY: 1 },
          { opacity: 1, y: 0, scaleY: 1, duration: 0.3, ease, transformOrigin: 'top center' }
        );
      } else {
        gsap.to(menu, {
          opacity: 0, y: 10, scaleY: 1, duration: 0.2, ease,
          transformOrigin: 'top center',
          onComplete: () => gsap.set(menu, { visibility: 'hidden' }),
        });
      }
    }

    onMobileMenuClick?.();
  };

  const cssVars = {
    '--nav-bg': navBgColor,
    '--pill-bg': pillBgColor,
    '--pill-text': pillTextColor,
    '--hover-bg': hoverBgColor,
    '--hover-text': hoverTextColor,
    '--active-dot': activeDotColor,
  } as React.CSSProperties;

  return (
    <div className="pill-nav-container">
      <nav className={`pill-nav ${className}`} aria-label="Primary" style={cssVars}>
        {/* Logo */}
        <a
          className="pill-logo"
          href="/"
          aria-label="Home"
          onMouseEnter={handleLogoEnter}
          onClick={(e) => handleNavigate('/', e)}
          ref={logoRef}
        >
          {logo ? (
            <img src={logo} alt={logoAlt} ref={logoImgRef} />
          ) : (
            <span className="pill-logo-text">{logoText || 'IE'}</span>
          )}
        </a>

        {/* Desktop nav items */}
        <div className="pill-nav-items desktop-only" ref={navItemsRef}>
          <ul className="pill-list" role="menubar">
            {items.map((item, i) => (
              <li key={item.href || `item-${i}`} role="none">
                <a
                  role="menuitem"
                  href={item.href}
                  className={`pill${pathname === item.href ? ' is-active' : ''}`}
                  aria-label={item.ariaLabel || item.label}
                  onMouseEnter={() => handleEnter(i)}
                  onMouseLeave={() => handleLeave(i)}
                  onClick={(e) => handleNavigate(item.href, e)}
                >
                  <span
                    className="hover-circle"
                    aria-hidden="true"
                    ref={(el) => { circleRefs.current[i] = el; }}
                  />
                  <span className="label-stack">
                    <span className="pill-label">{item.label}</span>
                    <span className="pill-label-hover" aria-hidden="true">
                      {item.label}
                    </span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile hamburger */}
        <button
          className="mobile-menu-button mobile-only"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
          ref={hamburgerRef}
        >
          <span className="hamburger-line" />
          <span className="hamburger-line" />
        </button>
      </nav>

      {/* Mobile dropdown */}
      <div className="mobile-menu-popover mobile-only" ref={mobileMenuRef} style={cssVars}>
        <ul className="mobile-menu-list">
          {items.map((item, i) => (
            <li key={item.href || `mobile-item-${i}`}>
              <a
                href={item.href}
                className={`mobile-menu-link${pathname === item.href ? ' is-active' : ''}`}
                                onClick={(e) => {
                  if (isMobileMenuOpen) closeMobileMenu();
                  handleNavigate(item.href, e);
                }}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

