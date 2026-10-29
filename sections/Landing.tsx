'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { WEDDING } from '@/lib/constants';

function Lantern({
  delay,
  style,
  className,
  size = 1,
  stringLength = 100,
}: {
  delay: number;
  style?: any;
  className?: string;
  size?: number;
  stringLength?: number;
}) {
  return (
    <motion.div
      className={`absolute z-30 flex flex-col items-center pointer-events-none will-change-transform ${className || ''}`}
      style={{ ...style, transformOrigin: 'top center', scale: size }}
      animate={{ rotate: [-3, 3, -3] }}
      transition={{ duration: 7, delay, repeat: Infinity, ease: 'easeInOut' }}
    >
      {/* String */}
      <div
        className="w-[1.5px] bg-gradient-to-b from-transparent via-[#3D251E] to-[#3D251E]"
        style={{ height: stringLength }}
      />

      {/* Lantern */}
      <div className="relative flex flex-col items-center">
        {/* Top hat */}
        <div className="w-0 h-0 border-l-[14px] border-l-transparent border-r-[14px] border-r-transparent border-b-[18px] border-b-[#3D251E]" />
        <div className="w-[36px] h-[6px] bg-[#2A1810] rounded-sm -mt-[2px]" />

        {/* Glass body */}
        <div className="w-[30px] h-[40px] border-x-[2.5px] border-[#3D251E] relative flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-[#FDE08B] opacity-90" />
          {/* Inner Glow */}
          <div className="w-5 h-5 bg-[#FFF] rounded-full opacity-80" />
          {/* Vertical Grid Line */}
          <div className="absolute top-0 bottom-0 left-1/2 w-[2px] bg-[#3D251E] -translate-x-1/2" />
          {/* Horizontal Grid Line */}
          <div className="absolute left-0 right-0 top-1/2 h-[2px] bg-[#3D251E] -translate-y-1/2" />
        </div>

        {/* Bottom Base */}
        <div className="w-[36px] h-[6px] bg-[#2A1810] rounded-sm" />
        <div className="w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[14px] border-t-[#3D251E]" />

        {/* Lightweight ambient light glow */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80px] h-[80px] rounded-full pointer-events-none" 
          style={{ background: 'radial-gradient(circle, rgba(253,224,139,0.35) 0%, transparent 70%)' }}
        />
      </div>
    </motion.div>
  );
}

export function Landing() {
  return (
    <section
      id="landing"
      className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden bg-[#F4EBDD] px-4 pb-10 pt-16 sm:px-6 md:py-16"
    >
      {/* Warm, layered light gives the invitation a more atmospheric backdrop. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            'radial-gradient(ellipse at 50% 44%, rgba(255,255,255,0.98) 0%, rgba(255,250,239,0.88) 27%, transparent 62%), radial-gradient(ellipse at 8% 82%, rgba(201,168,76,0.2) 0%, transparent 38%), radial-gradient(ellipse at 94% 20%, rgba(92,14,34,0.11) 0%, transparent 36%), linear-gradient(135deg, #f8f1e5 0%, #eee1cd 50%, #f7efe2 100%)',
        }}
      />

      {/* Fine Mughal-inspired jaali pattern instead of generic repeating circles. */}
      <svg aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 h-full w-full opacity-60">
        <defs>
          <pattern
            id="bg-pattern-landing"
            x="0"
            y="0"
            width="112"
            height="112"
            patternUnits="userSpaceOnUse"
          >
            <path d="M56 4 108 56 56 108 4 56Z" fill="none" stroke="#A77B2B" strokeWidth="0.7" strokeOpacity="0.2" />
            <path d="M56 20 92 56 56 92 20 56Z" fill="none" stroke="#6B1B2A" strokeWidth="0.65" strokeOpacity="0.14" />
            <path d="M56 20 C61 36 76 51 92 56 C76 61 61 76 56 92 C51 76 36 61 20 56 C36 51 51 36 56 20Z" fill="none" stroke="#A77B2B" strokeWidth="0.65" strokeOpacity="0.18" />
            <circle cx="56" cy="56" r="5" fill="none" stroke="#A77B2B" strokeWidth="0.8" strokeOpacity="0.24" />
            <circle cx="56" cy="56" r="1.5" fill="#A77B2B" fillOpacity="0.3" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#bg-pattern-landing)" />
      </svg>

      {/* Soft vignette frames the card and adds depth on wide displays. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            'linear-gradient(90deg, rgba(74,14,26,0.055), transparent 22%, transparent 78%, rgba(74,14,26,0.055)), linear-gradient(0deg, rgba(74,14,26,0.06), transparent 24%, transparent 78%, rgba(255,255,255,0.22))',
        }}
      />

      {/* LANTERNS */}
      <Lantern className="left-[2%] sm:left-[8%] md:left-[12%] -top-[20px]" stringLength={180} delay={0} size={0.8} />
      <Lantern className="left-[16%] md:left-[26%] -top-[20px] hidden sm:flex" stringLength={320} delay={1.5} size={0.65} />
      <Lantern className="right-[16%] md:right-[26%] -top-[20px] hidden sm:flex" stringLength={150} delay={0.5} size={0.6} />
      <Lantern className="right-[2%] sm:right-[8%] md:right-[12%] -top-[20px]" stringLength={280} delay={2.2} size={0.75} />

      {/* MAIN ARCH CARD */}
      <motion.div
        className="relative z-20 mt-2 flex w-[min(92vw,460px)] max-w-full flex-col items-center rounded-t-[300px] rounded-b-3xl bg-gradient-to-b from-[#681B32] via-[#5C0E22] to-[#4A0E1A] px-5 pb-8 pt-6 shadow-2xl sm:px-8 sm:pb-10 sm:pt-7 md:mt-0 md:pb-11 md:pt-8"
        style={{
          boxShadow: '0 24px 60px rgba(54,12,25,0.24), inset 0 2px 12px rgba(255,255,255,0.12)',
        }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        {/* Inner Gold Border */}
        <div className="pointer-events-none absolute inset-2.5 rounded-t-[290px] rounded-b-2xl border border-[#E8C96D]/35 sm:inset-3 md:inset-3.5" />

        {/* Ganesha Logo */}
        <div className="relative mx-auto mb-4 mt-2 flex h-28 w-28 shrink-0 items-center justify-center rounded-full border-2 border-[#E8C96D] bg-white p-2 shadow-[0_0_28px_rgba(253,224,139,0.32)] sm:mb-5 sm:h-32 sm:w-32 md:h-36 md:w-36">
          <img 
            src="/assets/images/ganesha.png" 
            alt="Shree Ganeshay Namah" 
            className="w-full h-full object-contain drop-shadow-md scale-[1.35]" 
          />
        </div>

        {/* Text Content */}
        <div className="relative z-10 w-full px-1 text-center sm:px-2">
          <p className="mb-3 font-serif text-sm italic text-[#E8C96D] opacity-95 sm:mb-4 sm:text-base md:text-lg">
            Together with their families
          </p>

          <h1
            className="font-serif text-4xl uppercase text-[#F0D47D] sm:text-5xl"
            style={{ letterSpacing: '0.15em' }}
          >
            {WEDDING.bride.name}
          </h1>

          <p className="my-1 font-serif text-3xl italic text-[#E8C96D] opacity-90 sm:my-2 sm:text-4xl">
            &amp;
          </p>

          <h1
            className="font-serif text-4xl uppercase text-[#F0D47D] sm:text-5xl"
            style={{ letterSpacing: '0.15em' }}
          >
            {WEDDING.groom.name}
          </h1>

          <p className="mx-auto mt-3 max-w-[280px] font-serif text-sm italic leading-relaxed tracking-wide text-[#F2D98A]/90 sm:mt-4 sm:text-base">
            cordially invite you to join the celebration of their union
          </p>

          {/* Date Section */}
          <div className="mx-auto mb-1 mt-5 h-px w-24 bg-gradient-to-r from-transparent via-[#E8C96D]/80 to-transparent sm:mt-6" />
          <div className="grid w-full grid-cols-[1fr_auto_1fr] items-center gap-2 px-0 sm:gap-4 sm:px-2">
            <div className="flex min-w-0 flex-col items-center">
              <span className="mb-2 whitespace-nowrap text-[9px] font-semibold uppercase tracking-[0.12em] text-[#F2D98A] opacity-95 sm:text-xs sm:tracking-[0.22em]">
                Saturday
              </span>
              <div className="h-px w-full max-w-[72px] bg-[#E8C96D]/55" />
            </div>

            <div className="mx-1 font-serif text-5xl text-[#F0D47D] sm:mx-2 sm:text-6xl md:text-7xl" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}>
              05
            </div>

            <div className="flex min-w-0 flex-col items-center">
              <span className="mb-2 whitespace-nowrap text-[9px] font-semibold uppercase tracking-[0.08em] text-[#F2D98A] opacity-95 sm:text-xs sm:tracking-[0.18em]">
                December 2026
              </span>
              <div className="h-px w-full max-w-[72px] bg-[#E8C96D]/55" />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Animated Scroll Down Indicator */}
      <motion.div
        className="pointer-events-none z-20 mt-4 flex flex-col items-center gap-1 text-[#A77B2B] sm:mt-5"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: [0.5, 1, 0.5], y: [0, 5, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] font-sans font-semibold">Scroll Down</span>
        <ChevronDown size={18} />
      </motion.div>
    </section>
  );
}
