'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Music, VolumeX } from 'lucide-react';
import { useWeddingStore } from '@/store/useWeddingStore';

export function MusicPlayer() {
  const { musicEnabled, setMusicEnabled } = useWeddingStore();
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!audioRef.current || !mounted) return;
    const audio = audioRef.current;

    if (musicEnabled) {
      audio.play().catch(() => {});
      // Fade in
      let vol = 0;
      const fadeIn = setInterval(() => {
        if (vol < 0.35) {
          vol = Math.min(vol + 0.02, 0.35);
          audio.volume = vol;
        } else {
          clearInterval(fadeIn);
        }
      }, 80);
    } else {
      // Fade out
      let vol = audio.volume;
      const fadeOut = setInterval(() => {
        if (vol > 0) {
          vol = Math.max(vol - 0.02, 0);
          audio.volume = vol;
        } else {
          clearInterval(fadeOut);
          audio.pause();
        }
      }, 80);
    }
  }, [musicEnabled, mounted]);

  if (!mounted) return null;

  return (
    <>
      <audio id="wedding-bg-music" ref={audioRef} src="/assets/audio/ReelAudio-73181.mp3" loop preload="auto" />
      <motion.button
        onClick={() => setMusicEnabled(!musicEnabled)}
        className="fixed top-5 right-5 z-50 w-11 h-11 rounded-full bg-white/80 backdrop-blur-xl border border-white/60 shadow-lg flex items-center justify-center text-[#5a4a3a] hover:text-[#C9A84C] hover:border-[#C9A84C]/30 transition-colors duration-300"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2.5, type: 'spring' }}
        whileTap={{ scale: 0.9 }}
        aria-label={musicEnabled ? 'Pause music' : 'Play music'}
      >
        {musicEnabled ? (
          <motion.div
            key="music"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="relative"
          >
            <Music size={16} />
            {/* Pulse ring when playing */}
            <motion.div
              className="absolute inset-0 rounded-full border border-[#C9A84C]"
              animate={{ scale: [1, 1.8], opacity: [0.6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </motion.div>
        ) : (
          <motion.div key="mute" initial={{ scale: 0 }} animate={{ scale: 1 }}>
            <VolumeX size={16} />
          </motion.div>
        )}
      </motion.button>
    </>
  );
}
