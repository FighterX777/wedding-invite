'use client';

import dynamic from 'next/dynamic';
import { useState, useCallback, useEffect } from 'react';
import { LenisProvider } from '@/features/lenis/LenisProvider';
import { LoadingScreen } from '@/components/layout/LoadingScreen';
import { ScrollProgress } from '@/components/ui/ScrollProgress';
import { BottomNav } from '@/components/layout/BottomNav';
import { MusicPlayer } from '@/components/layout/MusicPlayer';
import { HeroScene } from '@/sections/HeroScene';
import { useWeddingStore } from '@/store/useWeddingStore';

// Dynamic imports for code splitting — heavy sections load after hero
const Landing = dynamic(() => import('@/sections/Landing').then(m => ({ default: m.Landing })));
const BrideGroom = dynamic(() => import('@/sections/BrideGroom').then(m => ({ default: m.BrideGroom })));
const Events = dynamic(() => import('@/sections/Events').then(m => ({ default: m.Events })));
const Countdown = dynamic(() => import('@/sections/Countdown').then(m => ({ default: m.Countdown })));
const Family = dynamic(() => import('@/sections/Family').then(m => ({ default: m.Family })));
const RSVP = dynamic(() => import('@/sections/RSVP').then(m => ({ default: m.RSVP })));
const Footer = dynamic(() => import('@/sections/Footer').then(m => ({ default: m.Footer })));

export default function WeddingPage() {
  const [loading, setLoading] = useState(true);
  const inviteOpened = useWeddingStore((state) => state.inviteOpened);

  const handleLoadComplete = useCallback(() => {
    setLoading(false);
  }, []);

  useEffect(() => {
    const { body, documentElement } = document;
    const previousBodyOverflow = body.style.overflow;
    const previousDocumentOverflow = documentElement.style.overflow;

    if (inviteOpened) {
      body.style.overflow = previousBodyOverflow;
      documentElement.style.overflow = previousDocumentOverflow;
    } else {
      window.scrollTo(0, 0);
      body.style.overflow = 'hidden';
      documentElement.style.overflow = 'hidden';
    }

    return () => {
      body.style.overflow = previousBodyOverflow;
      documentElement.style.overflow = previousDocumentOverflow;
    };
  }, [inviteOpened]);

  return (
    <>
      {/* Elegant loading screen */}
      <LoadingScreen onComplete={handleLoadComplete} />

      <LenisProvider>
        <main>
          <ScrollProgress />
          <MusicPlayer />
          <BottomNav />

          {/* Sections */}
          <HeroScene />
          <Landing />
          <BrideGroom />
          <Events />
          <Countdown />
          <Family />
          <RSVP />
          <Footer />
        </main>
      </LenisProvider>
    </>
  );
}
