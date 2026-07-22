'use client';

import { motion, useScroll, useSpring } from 'framer-motion';

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#C9A84C] via-[#E8C96D] to-[#C9A84C] origin-left z-[60] will-change-transform"
      style={{ scaleX: scrollYProgress }}
    />
  );
}
