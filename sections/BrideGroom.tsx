'use client';

import { motion } from 'framer-motion';
import { WEDDING } from '@/lib/constants';

function PersonCard({ person, side }: { person: typeof WEDDING.bride; side: 'bride' | 'groom' }) {
  const isBride = side === 'bride';

  return (
    <motion.div 
      className="flex w-full max-w-[320px] flex-col items-center md:max-w-[360px]"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {/* Decorative monogram medallion in place of a portrait */}
      <div
        aria-hidden="true"
        className="relative mb-5 flex h-24 w-24 items-center justify-center rounded-full border border-[#C9A84C]/55 bg-[radial-gradient(circle_at_35%_30%,#fffdf6_0%,#f4e8ce_58%,#e5d1a9_100%)] shadow-[0_8px_24px_rgba(92,14,34,0.1)] sm:mb-6 sm:h-28 sm:w-28"
      >
        <div className="absolute inset-[6px] rounded-full border border-[#C9A84C]/45" />
        <span className="font-serif text-4xl text-[#5C0E22] sm:text-5xl">
          {person.name.charAt(0)}
        </span>
        <span className="absolute bottom-5 text-[8px] uppercase tracking-[0.3em] text-[#A77B2B]">
          {isBride ? 'Bride' : 'Groom'}
        </span>
      </div>

      <div className="mb-4 h-px w-12 bg-gradient-to-r from-transparent via-[#C9A84C]/70 to-transparent">
        <span className="sr-only">Couple member</span>
      </div>

      {/* Name */}
      <h3 className="mb-1 text-center font-serif text-2xl uppercase tracking-[0.12em] text-[#5C0E22] sm:text-[28px] sm:tracking-[0.15em]">
        {person.fullName}
      </h3>

      {/* Title */}
      <p className="mb-4 font-serif text-2xl italic text-[#C9A84C] sm:mb-5 sm:text-3xl" style={{ fontFamily: 'var(--font-cursive)' }}>
        {isBride ? 'The Bride' : 'The Groom'}
      </p>

      {/* Description */}
      <p className="max-w-[320px] text-center font-serif text-sm leading-relaxed text-[#5C0E22] opacity-90 sm:text-base md:max-w-[360px]">
        {person.description}
      </p>
    </motion.div>
  );
}

export function BrideGroom() {
  return (
    <section id="couple" className="relative bg-[#FDFBF7] pt-10 pb-16 md:pt-16 md:pb-24 px-6 overflow-hidden flex items-center">
      {/* Seamless background circle pattern */}
      <svg className="absolute inset-0 w-full h-full opacity-40 pointer-events-none z-0">
        <defs>
          <pattern
            id="bg-pattern-couple"
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
        <rect width="100%" height="100%" fill="url(#bg-pattern-couple)" />
      </svg>
      
      {/* Section Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center">
        
        {/* Title Area */}
        <motion.p 
          className="text-[#C9A84C] text-xs md:text-sm tracking-[0.4em] uppercase font-sans mb-3 font-semibold"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          The Beloveds
        </motion.p>
        
        <motion.h2 
          className="font-serif text-4xl md:text-[52px] text-[#5C0E22] uppercase tracking-[0.1em] md:tracking-[0.15em] mb-4 text-center"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Meet the Couple
        </motion.h2>
        
        {/* Divider line */}
        <motion.div 
          className="flex items-center justify-center gap-3 mb-10 md:mb-16 w-full"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="w-16 md:w-24 h-[1px] bg-[#C9A84C]/50" />
          <div className="w-2.5 h-2.5 rounded-full border border-[#C9A84C] bg-transparent flex items-center justify-center">
            <div className="w-1 h-1 rounded-full bg-[#C9A84C]" />
          </div>
          <div className="w-16 md:w-24 h-[1px] bg-[#C9A84C]/50" />
        </motion.div>

        {/* Couple Grid */}
        <div className="flex w-full flex-col items-center justify-center gap-9 md:flex-row md:items-start md:gap-12 lg:gap-20">
           <PersonCard person={WEDDING.bride} side="bride" />
           
           {/* Center Gold Heart */}
           <motion.div 
             className="flex items-center justify-center text-3xl text-[#C9A84C] drop-shadow-md md:mt-8 md:text-5xl"
             initial={{ opacity: 0, scale: 0 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ type: 'spring', delay: 0.8 }}
           >
             ♥
           </motion.div>

           <PersonCard person={WEDDING.groom} side="groom" />
        </div>

      </div>
    </section>
  );
}
