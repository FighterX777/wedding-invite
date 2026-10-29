'use client';

import { createContext, useContext, useEffect, useRef } from 'react';
import Lenis from 'lenis';
import { useWeddingStore } from '@/store/useWeddingStore';

const LenisContext = createContext<Lenis | null>(null);

export function useLenis() {
  return useContext(LenisContext);
}

export function LenisProvider({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);
  const inviteOpened = useWeddingStore((state) => state.inviteOpened);

  useEffect(() => {
    // Disable Lenis on mobile/touch devices for native 60fps smooth momentum scrolling
    const isMobile = window.matchMedia('(pointer: coarse)').matches || window.innerWidth < 768;
    if (isMobile) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
    });

    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    if (inviteOpened) {
      lenisRef.current?.start();
    } else {
      lenisRef.current?.stop();
    }
  }, [inviteOpened]);

  return (
    <LenisContext.Provider value={lenisRef.current}>
      {children}
    </LenisContext.Provider>
  );
}
