'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart } from 'lucide-react';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { GoldDivider } from '@/components/ui/GoldDivider';
import { WEDDING } from '@/lib/constants';

export function RSVP() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async () => {
    // Fire confetti
    if (typeof window !== 'undefined') {
      const confetti = (await import('canvas-confetti')).default;
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#C9A84C', '#E8C96D', '#6B1B2A', '#F5E6C8', '#ffffff'],
      });
      setTimeout(() => {
        confetti({
          particleCount: 80,
          angle: 60,
          spread: 55,
          origin: { x: 0, y: 0.65 },
          colors: ['#C9A84C', '#E8C96D', '#6B1B2A'],
        });
        confetti({
          particleCount: 80,
          angle: 120,
          spread: 55,
          origin: { x: 1, y: 0.65 },
          colors: ['#C9A84C', '#E8C96D', '#6B1B2A'],
        });
      }, 200);
    }
    setSubmitted(true);
  };

  return (
    <section id="rsvp" className="bg-[#FDFAF5] py-24 px-6">
      <div className="max-w-2xl mx-auto">
        <SectionTitle
          eyebrow="Join Us"
          title="RSVP"
          subtitle="We'd love to celebrate this joyous occasion with you. Please let us know if you can make it!"
        />

        <AnimatePresence mode="wait">
          {!submitted ? (
            <motion.div
              key="form"
              className="bg-white rounded-3xl p-8 border border-[#C9A84C]/10 shadow-sm"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
            >
              {/* Decorative top */}
              <div className="flex items-center justify-center mb-8">
                <div className="w-16 h-16 rounded-full bg-[#C9A84C]/10 flex items-center justify-center">
                  <Heart size={28} className="text-[#C9A84C]" fill="#C9A84C" />
                </div>
              </div>

              <p className="font-serif text-2xl text-[#1A1A1A] text-center mb-2">
                Will you be joining us?
              </p>
              <p className="font-sans text-sm text-[#5a4a3a]/60 text-center mb-8">
                Komal & Sabhye would be honoured by your presence at their wedding celebration.
              </p>

              <GoldDivider className="mb-8" />

              {/* Event details summary */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { label: 'Date', value: WEDDING.dateDisplay },
                  { label: 'Time', value: '7:00 PM onwards' },
                  { label: 'Venue', value: WEDDING.venue.split(',')[0] },
                  { label: 'City', value: 'New Delhi, India' },
                ].map(({ label, value }) => (
                  <div key={label} className="bg-[#F7F3EC] rounded-xl p-4">
                    <p className="text-[#C9A84C] text-[10px] tracking-[0.3em] uppercase font-sans mb-1">
                      {label}
                    </p>
                    <p className="font-serif text-[#1A1A1A] text-sm">{value}</p>
                  </div>
                ))}
              </div>

              {/* Map Embed */}
              <div className="w-full h-48 md:h-56 rounded-xl overflow-hidden mb-8 border border-[#C9A84C]/20 shadow-sm relative z-0">
                <iframe
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  src="https://maps.google.com/maps?q=Atrio%20Hotel%20by%20Devam,%20New%20Delhi&t=&z=15&ie=UTF8&iwloc=&output=embed"
                />
              </div>

              {/* RSVP Buttons — as requested, button only, not functional form */}
              <div className="space-y-3">
                <motion.button
                  onClick={handleSubmit}
                  className="w-full py-4 rounded-2xl bg-gradient-to-r from-[#C9A84C] to-[#E8C96D] text-white font-sans text-sm tracking-[0.2em] uppercase font-medium shadow-lg shadow-[#C9A84C]/20 hover:shadow-xl hover:shadow-[#C9A84C]/30 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  ✓ Yes, I'll be there! 🎉
                </motion.button>

                <motion.button
                  className="w-full py-4 rounded-2xl border border-[#1A1A1A]/15 text-[#5a4a3a]/60 font-sans text-sm tracking-[0.2em] uppercase hover:border-[#5a4a3a]/30 hover:text-[#5a4a3a] transition-all duration-300"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                >
                  ✗ Unable to attend
                </motion.button>
              </div>

              <p className="text-center text-[#5a4a3a]/30 font-sans text-xs mt-6">
                Kindly RSVP before November 15, 2026
              </p>
            </motion.div>
          ) : (
            <motion.div
              key="success"
              className="bg-white rounded-3xl p-10 border border-[#C9A84C]/20 shadow-sm text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, type: 'spring' }}
            >
              <motion.div
                className="w-20 h-20 rounded-full bg-gradient-to-br from-[#C9A84C] to-[#E8C96D] flex items-center justify-center mx-auto mb-6 shadow-lg"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
              >
                <Heart size={36} className="text-white" fill="white" />
              </motion.div>

              <h3 className="font-serif text-3xl text-[#1A1A1A] mb-3">
                We can't wait to see you! 🎊
              </h3>
              <p className="font-sans text-sm text-[#5a4a3a]/60 leading-relaxed mb-6">
                Thank you for confirming your attendance. We are overjoyed to celebrate this beautiful occasion with you. See you on December 5th!
              </p>

              <GoldDivider />

              <p className="font-serif text-[#C9A84C] text-lg mt-4 italic">
                Komal & Sabhye
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
