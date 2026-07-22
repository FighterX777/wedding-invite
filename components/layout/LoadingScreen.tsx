'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    // Simulate loading with increasing intervals
    const stages = [
      { target: 30, delay: 200 },
      { target: 60, delay: 600 },
      { target: 85, delay: 1000 },
      { target: 100, delay: 1600 },
    ];

    let current = 0;
    const timers: ReturnType<typeof setTimeout>[] = [];

    stages.forEach(({ target, delay }) => {
      const t = setTimeout(() => {
        setProgress(target);
        if (target === 100) {
          setTimeout(() => {
            setDone(true);
            setTimeout(onComplete, 800);
          }, 400);
        }
      }, delay);
      timers.push(t);
    });

    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0d0a07]"
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          {/* Mandala ornament */}
          <motion.div
            className="mb-8 relative"
            initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
              <circle cx="40" cy="40" r="36" stroke="#C9A84C" strokeWidth="0.5" />
              <circle cx="40" cy="40" r="28" stroke="#C9A84C" strokeWidth="0.5" />
              <circle cx="40" cy="40" r="20" stroke="#C9A84C" strokeWidth="0.5" />
              {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
                <g key={angle} transform={`rotate(${angle} 40 40)`}>
                  <line x1="40" y1="4" x2="40" y2="14" stroke="#C9A84C" strokeWidth="1" />
                  <circle cx="40" cy="20" r="2" fill="#C9A84C" />
                </g>
              ))}
              <circle cx="40" cy="40" r="4" fill="#C9A84C" />
            </svg>

            {/* Rotating ring */}
            <motion.div
              className="absolute inset-0"
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
            >
              <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                <circle
                  cx="40"
                  cy="40"
                  r="36"
                  stroke="#C9A84C"
                  strokeWidth="1"
                  strokeDasharray="8 4"
                  opacity="0.4"
                />
              </svg>
            </motion.div>
          </motion.div>

          {/* Brand text */}
          <motion.p
            className="font-serif text-[#C9A84C] text-sm tracking-[0.4em] uppercase mb-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            An Invitation
          </motion.p>
          <motion.h1
            className="font-serif text-white text-2xl tracking-wider mb-12"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            Komal & Sabhye
          </motion.h1>

          {/* Progress bar */}
          <motion.div
            className="w-48 h-[1px] bg-white/10 relative overflow-hidden rounded-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <motion.div
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#C9A84C] to-[#E8C96D]"
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            />
          </motion.div>

          <motion.p
            className="text-white/30 text-xs tracking-widest mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            {progress < 100 ? 'Preparing your invitation...' : 'Welcome'}
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
