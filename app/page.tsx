'use client';

import dynamic from 'next/dynamic';
import { useState, useCallback } from 'react';
import { LenisProvider } from '@/features/lenis/LenisProvider';
import { LoadingScreen } from '@/components/layout/LoadingScreen';
import { ScrollProgress } from '@/components/ui/ScrollProgress';
import { BottomNav } from '@/components/layout/BottomNav';
import { MusicPlayer } from '@/components/layout/MusicPlayer';
import { HeroScene } from '@/sections/HeroScene';

// Dynamic imports for code splitting — heavy sections load after hero
const Landing = dynamic(() => import('@/sections/Landing').then(m => ({ default: m.Landing })));
const BrideGroom = dynamic(() => import('@/sections/BrideGroom').then(m => ({ default: m.BrideGroom })));
const Events = dynamic(() => import('@/sections/Events').then(m => ({ default: m.Events })));
const Countdown = dynamic(() => import('@/sections/Countdown').then(m => ({ default: m.Countdown })));
const Gallery = dynamic(() => import('@/sections/Gallery').then(m => ({ default: m.Gallery })));
const Family = dynamic(() => import('@/sections/Family').then(m => ({ default: m.Family })));
const RSVP = dynamic(() => import('@/sections/RSVP').then(m => ({ default: m.RSVP })));
const Footer = dynamic(() => import('@/sections/Footer').then(m => ({ default: m.Footer })));

export default function WeddingPage() {
  const [loading, setLoading] = useState(true);

  const handleLoadComplete = useCallback(() => {
    setLoading(false);
  }, []);

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
          <Gallery />
          <Family />
          <RSVP />
          <Footer />
        </main>
      </LenisProvider>
    </>
  );
}
