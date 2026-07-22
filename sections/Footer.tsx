'use client';

import { motion } from 'framer-motion';
import { Share2, Copy, MessageCircle } from 'lucide-react';
import { GoldDivider } from '@/components/ui/GoldDivider';
import { useState } from 'react';

export function Footer() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      `You're invited to Komal & Sabhye's Wedding! 💍\n${window.location.href}`
    );
    window.open(`https://wa.me/?text=${text}`, '_blank');
  };

  const handleShare = async () => {
    if (navigator.share) {
      await navigator.share({
        title: 'Komal & Sabhye Wedding Invitation',
        text: "You're invited to our wedding celebration! 💍",
        url: window.location.href,
      }).catch(() => {});
    } else {
      handleCopy();
    }
  };

  return (
    <footer className="relative bg-[#0d0a07] py-20 px-6 overflow-hidden">
      {/* Background ornament */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03]">
        <svg width="500" height="500" viewBox="0 0 500 500" fill="none">
          {[50, 100, 150, 200, 220].map((r) => (
            <circle key={r} cx="250" cy="250" r={r} stroke="#C9A84C" strokeWidth="0.5" />
          ))}
          {[0, 45, 90, 135, 180, 225, 270, 315].map((a) => (
            <line
              key={a}
              x1="250"
              y1="30"
              x2="250"
              y2="470"
              stroke="#C9A84C"
              strokeWidth="0.3"
              transform={`rotate(${a} 250 250)`}
            />
          ))}
        </svg>
      </div>

      <div className="relative z-10 max-w-md mx-auto text-center">
        {/* Mandala top */}
        <motion.div
          className="flex justify-center mb-8"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: 'spring' }}
        >
          <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
            <circle cx="30" cy="30" r="28" stroke="#C9A84C" strokeWidth="0.5" />
            {[0, 60, 120, 180, 240, 300].map((a) => (
              <g key={a} transform={`rotate(${a} 30 30)`}>
                <line x1="30" y1="4" x2="30" y2="12" stroke="#C9A84C" strokeWidth="1" />
                <circle cx="30" cy="16" r="1.5" fill="#C9A84C" />
              </g>
            ))}
            <circle cx="30" cy="30" r="3" fill="#C9A84C" />
          </svg>
        </motion.div>

        <motion.p
          className="text-[#C9A84C] text-xs tracking-[0.5em] uppercase font-sans mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          With love & gratitude
        </motion.p>

        <motion.h2
          className="font-serif text-white text-4xl md:text-5xl mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          Thank You
        </motion.h2>

        <motion.p
          className="font-sans text-white/50 text-sm leading-relaxed mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          Your presence, prayers, and blessings mean the world to us. We are truly grateful to have you in our lives as we begin this beautiful journey together.
        </motion.p>

        <GoldDivider className="mb-8" />

        <motion.div
          className="font-serif text-[#C9A84C] text-2xl mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          Komal ❤️ Sabhye
        </motion.div>

        {/* Share buttons */}
        <motion.div
          className="flex items-center justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <button
            onClick={handleShare}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10 text-white/50 hover:text-[#C9A84C] hover:border-[#C9A84C]/40 transition-colors duration-200 font-sans text-xs tracking-wider"
            aria-label="Share invitation"
          >
            <Share2 size={13} />
            Share
          </button>
          <button
            onClick={handleCopy}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10 text-white/50 hover:text-[#C9A84C] hover:border-[#C9A84C]/40 transition-colors duration-200 font-sans text-xs tracking-wider"
            aria-label="Copy link"
          >
            <Copy size={13} />
            {copied ? 'Copied!' : 'Copy Link'}
          </button>
          <button
            onClick={handleWhatsApp}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10 text-white/50 hover:text-[#25D366] hover:border-[#25D366]/40 transition-colors duration-200 font-sans text-xs tracking-wider"
            aria-label="Share on WhatsApp"
          >
            <MessageCircle size={13} />
            WhatsApp
          </button>
        </motion.div>

        {/* Bottom line */}
        <motion.p
          className="text-white/15 font-sans text-xs"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          Made with ❤️ by Amol Gupta
        </motion.p>
      </div>
    </footer>
  );
}
