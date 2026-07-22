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
      className="relative flex flex-col items-center justify-center bg-[#FDFBF7] pt-10 pb-6 md:pt-16 md:pb-10 overflow-hidden"
    >
      {/* Seamless background circle pattern */}
      <svg className="absolute inset-0 w-full h-full opacity-40 pointer-events-none z-0">
        <defs>
          <pattern
            id="bg-pattern-landing"
            x="0"
            y="0"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="20" cy="20" r="14" fill="none" stroke="#C9A84C" strokeWidth="0.5" opacity="0.3" />
            <circle cx="20" cy="20" r="1.5" fill="#C9A84C" opacity="0.3" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#bg-pattern-landing)" />
      </svg>

      {/* LANTERNS */}
      <Lantern className="left-[1%] md:left-[12%] -top-[20px]" stringLength={180} delay={0} size={1.0} />
      <Lantern className="left-[12%] md:left-[26%] -top-[20px]" stringLength={320} delay={1.5} size={0.8} />
      <Lantern className="right-[12%] md:right-[26%] -top-[20px]" stringLength={150} delay={0.5} size={0.7} />
      <Lantern className="right-[1%] md:right-[12%] -top-[20px]" stringLength={280} delay={2.2} size={0.9} />

      {/* MAIN ARCH CARD */}
      <motion.div
        className="relative z-20 w-[92vw] max-w-[500px] bg-[#5C0E22] rounded-t-[300px] rounded-b-3xl shadow-2xl flex flex-col items-center pb-14 pt-8 mt-2 md:mt-4"
        style={{
          boxShadow: '0 20px 50px rgba(0,0,0,0.3), inset 0 2px 10px rgba(255,255,255,0.1)',
        }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        {/* Inner Gold Border */}
        <div className="absolute inset-[10px] md:inset-[14px] border border-[#C9A84C]/30 rounded-t-[290px] rounded-b-2xl pointer-events-none" />

        {/* Ganesha Logo */}
        <div className="relative w-36 h-36 md:w-44 md:h-44 mx-auto mt-4 mb-5 flex items-center justify-center shrink-0 bg-white rounded-full p-2 md:p-3 shadow-[0_0_20px_rgba(253,224,139,0.4)] border-2 border-[#E8C96D]">
          <img 
            src="/assets/images/ganesha.png" 
            alt="Shree Ganeshay Namah" 
            className="w-full h-full object-contain drop-shadow-md scale-[1.35]" 
          />
        </div>

        {/* Text Content */}
        <div className="text-center px-6 md:px-8 relative z-10 w-full">
          <p className="font-serif italic text-base md:text-lg text-[#E8C96D] mb-4 opacity-95">
            Together with their families
          </p>

          <h1
            className="font-serif uppercase text-4xl md:text-5xl text-[#E8C96D]"
            style={{ letterSpacing: '0.15em' }}
          >
            {WEDDING.bride.name}
          </h1>

          <p className="font-serif italic text-4xl md:text-5xl text-[#C9A84C] my-2 opacity-90">
            &amp;
          </p>

          <h1
            className="font-serif uppercase text-4xl md:text-5xl text-[#E8C96D]"
            style={{ letterSpacing: '0.15em' }}
          >
            {WEDDING.groom.name}
          </h1>

          <p className="font-serif italic text-sm md:text-base text-[#E8C96D] mt-5 opacity-90 tracking-wide max-w-[300px] mx-auto leading-relaxed">
            cordially invite you to join the celebration of their union
          </p>

          {/* Date Section */}
          <div className="flex items-center justify-center gap-3 md:gap-4 mt-8 w-full px-2">
            <div className="flex flex-col items-center flex-1">
              <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] md:tracking-[0.3em] text-[#E8C96D] mb-2 opacity-95 font-semibold">
                Saturday
              </span>
              <div className="w-full max-w-[90px] h-[1px] bg-[#C9A84C]/50" />
            </div>

            <div className="text-6xl md:text-7xl font-serif text-[#E8C96D] mx-2" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}>
              05
            </div>

            <div className="flex flex-col items-center flex-1">
              <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] md:tracking-[0.3em] text-[#E8C96D] mb-2 opacity-95 font-semibold">
                December 2026
              </span>
              <div className="w-full max-w-[90px] h-[1px] bg-[#C9A84C]/50" />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Animated Scroll Down Indicator */}
      <motion.div
        className="mt-5 flex flex-col items-center gap-1 text-[#C9A84C] pointer-events-none z-20"
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
