'use client';

import { motion } from 'framer-motion';
import { WEDDING } from '@/lib/constants';

function PersonCard({ person, side }: { person: typeof WEDDING.bride; side: 'bride' | 'groom' }) {
  const isBride = side === 'bride';
  
  // Using beautiful high-quality placeholders for the couple
  const imgUrl = isBride 
    ? 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&q=80' 
    : 'https://images.unsplash.com/photo-1610036127112-259a4c8a2b53?w=800&q=80';

  return (
    <motion.div 
      className="flex flex-col items-center max-w-[320px] md:max-w-[360px] w-full"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {/* Arched Photo Frame */}
      <div className="p-[6px] border border-[#C9A84C]/40 rounded-t-[200px] rounded-b-2xl shadow-2xl shadow-[#C9A84C]/10 bg-[#FDFBF7] mb-8">
        <div className="w-[240px] md:w-[280px] aspect-[4/5] rounded-t-[190px] rounded-b-xl overflow-hidden border-[6px] border-white relative shadow-inner bg-[#5C0E22]/5">
          <img 
            src={imgUrl} 
            alt={person.name} 
            className="absolute inset-0 w-full h-full object-cover object-top" 
          />
        </div>
      </div>

      {/* Name */}
      <h3 className="font-serif text-2xl md:text-[28px] text-[#5C0E22] uppercase tracking-[0.15em] mb-1 text-center">
        {person.fullName}
      </h3>
      
      {/* Title */}
      <p className="font-serif italic text-2xl md:text-3xl text-[#C9A84C] mb-5" style={{ fontFamily: 'var(--font-cursive)' }}>
        {isBride ? 'The Bride' : 'The Groom'}
      </p>

      {/* Description */}
      <p className="text-center font-serif text-sm md:text-base text-[#5C0E22] opacity-90 leading-relaxed max-w-[320px] md:max-w-[360px]">
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
        <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-12 md:gap-16 lg:gap-24 w-full">
           <PersonCard person={WEDDING.bride} side="bride" />
           
           {/* Center Gold Heart */}
           <motion.div 
             className="text-[#C9A84C] text-3xl md:text-5xl drop-shadow-md flex items-center justify-center md:mt-[180px]"
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
