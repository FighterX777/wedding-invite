'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useWeddingStore } from '@/store/useWeddingStore';

// ─── Floating Petal ──────────────────────────────────────────────────────────
function FloatingPetals() {
  const petals = ['🌸', '🌺', '✿', '❀', '🌼'];
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-20">
      {[...Array(14)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-lg select-none"
          style={{
            left: `${5 + i * 7}%`,
            top: `-5%`,
            opacity: 0,
          }}
          animate={{
            y: ['0vh', '110vh'],
            x: [0, Math.sin(i) * 60],
            rotate: [0, 360 * (i % 2 === 0 ? 1 : -1)],
            opacity: [0, 0.6, 0.6, 0],
          }}
          transition={{
            duration: 6 + i * 0.8,
            delay: i * 0.5,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {petals[i % petals.length]}
        </motion.div>
      ))}
    </div>
  );
}

// ─── Ornamental Door SVG ──────────────────────────────────────────────────────
function DoorOrnaments({ side }: { side: 'left' | 'right' }) {
  const isLeft = side === 'left';
  
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      {/* 1. Seamless background pattern matching reference */}
      <svg className="absolute inset-0 w-full h-full opacity-30">
        <defs>
          <pattern id={`bg-pattern-${side}`} x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="20" cy="20" r="14" fill="none" stroke="#C9A84C" strokeWidth="0.5" opacity="0.3" />
            <circle cx="20" cy="20" r="1" fill="#C9A84C" opacity="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#bg-pattern-${side})`} />
      </svg>

      {/* 2. Inset Borders and Corners */}
      <div className="absolute inset-[15px] md:inset-[25px] border border-[#C9A84C]/30 pointer-events-none">
        {/* Corners */}
        <div className="absolute top-[-1px] left-[-1px] w-6 h-6 border-t-[1.5px] border-l-[1.5px] border-[#C9A84C]/70" />
        <div className="absolute top-[-1px] right-[-1px] w-6 h-6 border-t-[1.5px] border-r-[1.5px] border-[#C9A84C]/70" />
        <div className="absolute bottom-[-1px] left-[-1px] w-6 h-6 border-b-[1.5px] border-l-[1.5px] border-[#C9A84C]/70" />
        <div className="absolute bottom-[-1px] right-[-1px] w-6 h-6 border-b-[1.5px] border-r-[1.5px] border-[#C9A84C]/70" />
        
        {/* Corner dots */}
        <div className="absolute top-[3px] left-[3px] w-1 h-1 rounded-full bg-[#C9A84C]/70" />
        <div className="absolute top-[3px] right-[3px] w-1 h-1 rounded-full bg-[#C9A84C]/70" />
        <div className="absolute bottom-[3px] left-[3px] w-1 h-1 rounded-full bg-[#C9A84C]/70" />
        <div className="absolute bottom-[3px] right-[3px] w-1 h-1 rounded-full bg-[#C9A84C]/70" />
      </div>

      {/* 3. Centered perfectly circular Mandala */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] aspect-square max-w-[800px] max-h-[800px] pointer-events-none">
        <svg viewBox="0 0 800 800" className="w-full h-full">
          <g transform="translate(400, 400)">
            {/* Soft inner glow behind mandala */}
            <radialGradient id={`glow-${side}`} cx="0" cy="0" r="300" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#C9A84C" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#C9A84C" stopOpacity="0" />
            </radialGradient>
            <circle r="300" fill={`url(#glow-${side})`} />

            {/* Concentric rings */}
            <circle r="320" fill="none" stroke="#C9A84C" strokeWidth="0.5" opacity="0.15" />
            <circle r="280" fill="none" stroke="#C9A84C" strokeWidth="0.5" opacity="0.3" strokeDasharray="4 6" />
            <circle r="240" fill="none" stroke="#C9A84C" strokeWidth="1" opacity="0.4" />
            <circle r="220" fill="none" stroke="#C9A84C" strokeWidth="0.5" opacity="0.2" />
            
            <circle r="160" fill="none" stroke="#C9A84C" strokeWidth="1.5" opacity="0.5" />
            {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
              <circle key={i} cx={Math.cos(angle * Math.PI / 180) * 160} cy={Math.sin(angle * Math.PI / 180) * 160} r="4" fill="#C9A84C" opacity="0.6" />
            ))}

            <circle r="100" fill="none" stroke="#C9A84C" strokeWidth="0.5" opacity="0.3" strokeDasharray="2 4" />
            <circle r="60" fill="none" stroke="#C9A84C" strokeWidth="1" opacity="0.2" />
            <circle r="2" fill="#C9A84C" opacity="0.6" />
          </g>
        </svg>
      </div>

      {/* 4. Center Edge Shadow */}
      <div 
        className={`absolute top-0 bottom-0 w-[8px] z-10 ${isLeft ? 'right-0' : 'left-0'}`} 
        style={{ 
          background: isLeft 
            ? 'linear-gradient(to right, transparent, rgba(0,0,0,0.5))'
            : 'linear-gradient(to left, transparent, rgba(0,0,0,0.5))' 
        }} 
      />
    </div>
  );
}

// ─── Door Knob ───────────────────────────────────────────────────────────────
function DoorKnob({ side }: { side: 'left' | 'right' }) {
  const isLeft = side === 'left';
  return (
    <div className="relative flex items-center justify-center">
      {/* Latch */}
      <div 
        className="absolute top-1/2 -translate-y-1/2 h-[4px] w-6"
        style={{
          background: 'linear-gradient(to bottom, #E8C96D, #8B6914)',
          [isLeft ? 'right' : 'left']: '-8px',
          zIndex: 1,
          boxShadow: '0 2px 4px rgba(0,0,0,0.5)',
          borderRadius: '2px',
        }}
      />
      {/* Knob */}
      <div
        className="w-12 h-12 md:w-16 md:h-16 rounded-full relative z-10"
        style={{
          background: 'radial-gradient(circle at 35% 35%, #FFF0BA 0%, #D4A820 40%, #8B6914 80%, #3A2000 100%)',
          boxShadow: '0 8px 24px rgba(0,0,0,0.8), inset 0 2px 4px rgba(255,255,255,0.6), inset 0 -4px 8px rgba(0,0,0,0.6)',
          border: '1px solid rgba(255,220,100,0.3)',
        }}
      >
        <div 
          className="absolute inset-[15%] rounded-full"
          style={{
            background: 'linear-gradient(135deg, #8B6914 0%, #F5E080 50%, #8B6914 100%)',
            boxShadow: 'inset 0 2px 6px rgba(0,0,0,0.6)',
          }}
        />
      </div>
    </div>
  );
}



// ─── Main Hero Scene ──────────────────────────────────────────────────────────
export function HeroScene() {
  const [opened, setOpened] = useState(false);
  const [contentGone, setContentGone] = useState(false);
  const { setInviteOpened, setMusicEnabled } = useWeddingStore();
  const containerRef = useRef<HTMLDivElement>(null);

  const handleOpen = () => {
    if (opened) return;
    setOpened(true);
    setInviteOpened(true);
    setMusicEnabled(true);

    // Force sync play to bypass strict browser autoplay policies
    const audioEl = document.getElementById('wedding-bg-music') as HTMLAudioElement;
    if (audioEl) {
      audioEl.volume = 0.4; // Set audible volume immediately
      const playPromise = audioEl.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {});
      }
    }

    // After content visible, remove the scene entirely
    setTimeout(() => {
      setContentGone(true);
    }, 2000);
  };

  // CSS perspective door animation
  const doorVariants = {
    closed: { rotateY: 0 },
    open: { rotateY: opened ? -92 : 0 },
  };

  if (contentGone) return null;

  return (
    <section
      id="home"
      ref={containerRef}
      className="fixed inset-0 z-50 w-full overflow-hidden"
    >

      {/* Floating petals */}
      <FloatingPetals />

      {/* ── DOORS CONTAINER ── */}
      <div
        className="absolute inset-0"
        style={{ perspective: '2000px', perspectiveOrigin: '50% 50%' }}
      >
        {/* LEFT DOOR */}
        <motion.div
          className="absolute top-0 left-0 bottom-0 w-[50.2%] overflow-hidden"
          style={{
            transformOrigin: 'left center',
            transformStyle: 'preserve-3d',
            zIndex: 10,
            background: '#5C0E22',
          }}
          animate={{ rotateY: opened ? -92 : 0 }}
          transition={{ duration: 1.4, ease: [0.25, 0.1, 0.1, 1.0], delay: 0 }}
        >
          <DoorOrnaments side="left" />

          {/* Left inner shadow when door closes */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: opened
                ? 'linear-gradient(to left, rgba(0,0,0,0.6) 0%, transparent 40%)'
                : 'linear-gradient(to right, transparent 80%, rgba(0,0,0,0.3) 100%)',
              transition: 'all 1.4s ease',
            }}
          />
        </motion.div>

        {/* RIGHT DOOR */}
        <motion.div
          className="absolute top-0 right-0 bottom-0 w-[50.2%] overflow-hidden"
          style={{
            transformOrigin: 'right center',
            transformStyle: 'preserve-3d',
            zIndex: 10,
            background: '#5C0E22',
          }}
          animate={{ rotateY: opened ? 92 : 0 }}
          transition={{ duration: 1.4, ease: [0.25, 0.1, 0.1, 1.0], delay: 0 }}
        >
          <DoorOrnaments side="right" />

          {/* Right inner shadow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: opened
                ? 'linear-gradient(to right, rgba(0,0,0,0.6) 0%, transparent 40%)'
                : 'linear-gradient(to left, transparent 80%, rgba(0,0,0,0.3) 100%)',
              transition: 'all 1.4s ease',
            }}
          />
        </motion.div>
      </div>

      {/* ── CENTER SEAM LINE ── */}
      <AnimatePresence>
        {!opened && (
          <motion.div
            className="absolute inset-y-0 left-1/2 w-[2px] -translate-x-1/2 z-20 pointer-events-none"
            style={{
              background:
                'linear-gradient(to bottom, transparent 5%, #C9A84C 20%, #E8C96D 50%, #C9A84C 80%, transparent 95%)',
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
        )}
      </AnimatePresence>

      {/* ── DOOR CONTENT OVERLAY (text + knobs) ── */}
      <AnimatePresence>
        {!contentGone && (
          <motion.div
            className="absolute inset-0 z-30 pointer-events-none flex flex-col items-center justify-center"
            initial={{ backgroundColor: 'rgba(0,0,0,0.4)' }}
            animate={{ 
              backgroundColor: opened ? 'rgba(0,0,0,1)' : 'rgba(0,0,0,0.4)',
              opacity: opened ? [1, 1, 0] : 1
            }}
            transition={{ duration: 1.5, times: [0, 0.3, 1] }}
          >
            {/* Golden glow over names on tap */}
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] pointer-events-none mix-blend-screen z-0"
              style={{ background: 'radial-gradient(circle, #E8C96D 0%, transparent 70%)' }}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ 
                opacity: opened ? [0, 0.8, 0] : 0,
                scale: opened ? [0.5, 1.5, 2] : 0.5
              }}
              transition={{ duration: 1.5, times: [0, 0.3, 1] }}
            />

            {/* Top label */}
            <motion.p
              className="text-[#C9A84C] text-[10px] md:text-xs tracking-[0.5em] uppercase font-sans mb-5"
              style={{ textShadow: '0 2px 12px rgba(0,0,0,0.8)' }}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: opened ? 0 : 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              AN INVITATION AWAITS
            </motion.p>

            {/* Monogram — large initials */}
            <motion.div
              className="font-serif text-center mb-3"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: opened ? 0 : 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              <div
                className="flex items-center justify-center gap-2 leading-none"
                style={{ filter: 'drop-shadow(0 4px 20px rgba(0,0,0,0.9))' }}
              >
                <span
                  className="font-serif text-[80px] md:text-[110px] leading-none"
                  style={{
                    color: 'transparent',
                    background:
                      'linear-gradient(135deg, #E8C96D 0%, #C9A84C 40%, #F0D878 70%, #C9A84C 100%)',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    textShadow: 'none',
                  }}
                >
                  K
                </span>
                <span
                  className="font-serif text-[50px] md:text-[70px] leading-none pb-4"
                  style={{
                    color: 'transparent',
                    background:
                      'linear-gradient(135deg, #E8C96D 0%, #C9A84C 50%, #E8C96D 100%)',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                  }}
                >
                  &amp;
                </span>
                <span
                  className="font-serif text-[80px] md:text-[110px] leading-none"
                  style={{
                    color: 'transparent',
                    background:
                      'linear-gradient(135deg, #E8C96D 0%, #C9A84C 40%, #F0D878 70%, #C9A84C 100%)',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    textShadow: 'none',
                  }}
                >
                  S
                </span>
              </div>
            </motion.div>

            {/* Cursive names */}
            <motion.p
              className="font-serif italic text-2xl md:text-3xl mb-8"
              style={{
                color: '#E8C96D',
                textShadow: '0 2px 16px rgba(0,0,0,0.9)',
              }}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: opened ? 0 : 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              Komal &amp; Sabhye
            </motion.p>

            {/* Open button wrapper ring */}
            <motion.div 
              className="p-[6px] rounded-[100px] border border-[#C9A84C]/30 mb-2 backdrop-blur-sm pointer-events-auto"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: opened ? 0 : 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.8 }}
            >
              <motion.button
                className="relative overflow-hidden block w-full h-full"
                onClick={handleOpen}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                aria-label="Open invitation"
                disabled={opened}
                style={{
                  background: 'linear-gradient(135deg, #C9A84C, #E8C96D, #C9A84C)',
                  borderRadius: '100px',
                  padding: '12px 40px',
                  boxShadow: '0 4px 24px rgba(201,168,76,0.3), inset 0 1px 0 rgba(255,255,255,0.2)',
                }}
              >
                {/* Shimmer sweep */}
                <motion.span
                  className="absolute inset-0 rounded-full"
                  style={{
                    background:
                      'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.4) 50%, transparent 100%)',
                    translateX: '-100%',
                  }}
                  animate={{ translateX: ['−100%', '200%'] }}
                  transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 1 }}
                />
                <span
                  className="relative font-sans text-[11px] tracking-[0.35em] uppercase font-semibold"
                  style={{ color: '#3D1A00' }}
                >
                  Open the Invitation
                </span>
              </motion.button>
            </motion.div>

            <motion.p
              className="font-sans text-[9px] tracking-[0.4em] uppercase mt-3"
              style={{ color: 'rgba(201,168,76,0.5)' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: opened ? 0 : 1 }}
              transition={{ delay: 1.1 }}
            >
              Tap to enter
            </motion.p>

            {/* Door knobs */}
            <motion.div
              className="absolute bottom-[10%] left-1/2 -translate-x-1/2 flex items-center gap-[4px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: opened ? 0 : 1 }}
              transition={{ delay: 0.9, duration: 0.5 }}
            >
              {/* Left knob */}
              <div
                style={{
                  transform: 'translateX(-4px)',
                  filter: 'drop-shadow(0 6px 12px rgba(0,0,0,0.7))',
                }}
              >
                <DoorKnob side="left" />
              </div>
              {/* Right knob */}
              <div
                style={{
                  transform: 'translateX(4px)',
                  filter: 'drop-shadow(0 6px 12px rgba(0,0,0,0.7))',
                }}
              >
                <DoorKnob side="right" />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Light glow effect when doors open */}
      <AnimatePresence>
        {opened && (
          <motion.div
            className="absolute inset-0 z-5 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.8, 0] }}
            transition={{ duration: 1.5, times: [0, 0.3, 1] }}
            style={{
              background:
                'radial-gradient(ellipse at center, rgba(201,168,76,0.15) 0%, transparent 70%)',
            }}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
