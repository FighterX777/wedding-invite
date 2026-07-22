'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useCountdown, padTwo } from '@/hooks/useCountdown';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { WEDDING } from '@/lib/constants';

interface DigitProps {
  value: number;
  label: string;
}

function CountdownDigit({ value, label }: DigitProps) {
  const display = padTwo(value);

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="relative w-20 h-24 md:w-28 md:h-32">
        {/* Card background */}
        <div className="absolute inset-0 bg-white rounded-2xl shadow-md border border-[#C9A84C]/10" />

        {/* Gold top strip */}
        <div className="absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent" />

        {/* Number */}
        <AnimatePresence mode="wait">
          <motion.div
            key={display}
            className="absolute inset-0 flex items-center justify-center font-serif text-4xl md:text-5xl text-[#1A1A1A]"
            initial={{ opacity: 0, y: -12, filter: 'blur(4px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: 12, filter: 'blur(4px)' }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
          >
            {display}
          </motion.div>
        </AnimatePresence>
      </div>

      <p className="font-sans text-[10px] tracking-[0.4em] uppercase text-[#C9A84C]">
        {label}
      </p>
    </div>
  );
}

export function Countdown() {
  const { days, hours, minutes, seconds } = useCountdown();

  return (
    <section
      id="countdown"
      className="relative bg-[#1A1A1A] py-24 px-6 overflow-hidden"
    >
      {/* Background radial gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#2a1f0e_0%,_#1A1A1A_70%)] pointer-events-none" />

      {/* Scattered gold dots */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-[#C9A84C]"
          style={{
            left: `${5 + i * 5}%`,
            top: `${(i * 47) % 100}%`,
            opacity: 0.1 + ((i * 17) % 20) / 100,
          }}
          animate={{ opacity: [0.05, 0.3, 0.05] }}
          transition={{
            duration: 2 + ((i * 11) % 30) / 10,
            repeat: Infinity,
            delay: ((i * 7) % 20) / 10,
          }}
        />
      ))}

      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <motion.p
          className="text-[#C9A84C] text-xs tracking-[0.5em] uppercase font-sans mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Counting down to forever
        </motion.p>

        <motion.h2
          className="font-serif text-white text-4xl md:text-5xl mb-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          The Big Day
        </motion.h2>

        <motion.p
          className="font-sans text-white/40 text-sm mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {WEDDING.dateDisplay} · {WEDDING.venue}
        </motion.p>

        <motion.div
          className="flex items-start justify-center gap-4 md:gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <CountdownDigit value={days} label="Days" />

          <div className="text-[#C9A84C] text-3xl font-serif mt-8 opacity-60">:</div>

          <CountdownDigit value={hours} label="Hours" />

          <div className="text-[#C9A84C] text-3xl font-serif mt-8 opacity-60">:</div>

          <CountdownDigit value={minutes} label="Min" />

          <div className="text-[#C9A84C] text-3xl font-serif mt-8 opacity-60">:</div>

          <CountdownDigit value={seconds} label="Sec" />
        </motion.div>

        <motion.p
          className="font-serif text-white/20 text-sm mt-12 italic"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          "Two souls, one destiny"
        </motion.p>
      </div>
    </section>
  );
}
