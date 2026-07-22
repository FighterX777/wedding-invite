'use client';

import { motion } from 'framer-motion';
import { GoldDivider } from './GoldDivider';
import { cn } from '@/lib/utils';

interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export function SectionTitle({
  eyebrow,
  title,
  subtitle,
  centered = true,
  className,
}: SectionTitleProps) {
  return (
    <motion.div
      className={cn('mb-12', centered && 'text-center', className)}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      {eyebrow && (
        <p className="text-[#C9A84C] text-xs md:text-sm tracking-[0.4em] uppercase font-sans font-semibold mb-3">
          {eyebrow}
        </p>
      )}
      <GoldDivider className="mb-6" />
      <h2 className="font-serif text-4xl md:text-5xl text-[#1A1A1A] leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-[#5a4a3a]/70 font-sans text-base leading-relaxed max-w-xl mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
