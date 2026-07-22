'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useScrollDirection } from '@/hooks/useScrollDirection';
import { useWeddingStore } from '@/store/useWeddingStore';
import {
  Home,
  BookOpen,
  Calendar,
  ImageIcon,
  Users,
  Heart,
} from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { id: 'home', label: 'Home', icon: Home, href: '#home' },
  { id: 'events', label: 'Events', icon: Calendar, href: '#events' },
  { id: 'family', label: 'Family', icon: Users, href: '#family' },
  { id: 'rsvp', label: 'RSVP', icon: Heart, href: '#rsvp' },
];

export function BottomNav() {
  const direction = useScrollDirection();
  const { activeSection, setActiveSection } = useWeddingStore();
  const [isScrolledPastHero, setIsScrolledPastHero] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show nav when scrolled past 75% of the screen height
      if (window.scrollY > window.innerHeight * 0.75) {
        setIsScrolledPastHero(true);
      } else {
        setIsScrolledPastHero(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isVisible = isScrolledPastHero && direction !== 'down';

  const handleClick = (id: string, href: string) => {
    setActiveSection(id);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.nav
          aria-label="Main navigation"
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        >
          <div className="flex items-center gap-1 px-4 py-3 rounded-full bg-[#FDFBF7] border border-[#C9A84C]/40 shadow-xl shadow-black/10">
            {navItems.map(({ id, label, icon: Icon, href }) => {
              const isActive = activeSection === id;
              return (
                <button
                  key={id}
                  onClick={() => handleClick(id, href)}
                  aria-label={label}
                  className={cn(
                    'relative flex flex-col items-center justify-center w-11 h-11 rounded-full transition-all duration-300',
                    isActive
                      ? 'text-[#C9A84C]'
                      : 'text-[#5a4a3a]/50 hover:text-[#C9A84C]'
                  )}
                >
                  {isActive && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute inset-0 rounded-full bg-[#C9A84C]/10"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  <Icon size={18} strokeWidth={isActive ? 2 : 1.5} />
                </button>
              );
            })}
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
