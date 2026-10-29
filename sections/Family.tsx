'use client';

import { motion } from 'framer-motion';
import { BRIDE_FAMILY, GROOM_FAMILY } from '@/lib/constants';

interface FamilyMember {
  name: string;
  relation: string;
  role: string;
}

function FamilyList({
  title,
  members,
  side,
}: {
  title: string;
  members: FamilyMember[];
  side: 'bride' | 'groom';
}) {
  const accentColor = side === 'bride' ? '#6B1B2A' : '#1A4A3A';

  return (
    <div className="w-full">
      <motion.div
        className="mb-5 flex items-center gap-3"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.55 }}
      >
        <span aria-hidden="true" className="text-xl leading-none text-pink-400">✿</span>
        <h3 className="font-serif text-lg text-[#9B5360] sm:text-xl" style={{ color: side === 'bride' ? '#9B5360' : accentColor }}>
          {title}
        </h3>
      </motion.div>

      <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {members.map((member, index) => (
          <motion.li
            key={member.name}
            className="min-h-[158px] rounded-2xl border border-[#EEE8DE] bg-white p-5 shadow-[0_2px_4px_rgba(44,36,32,0.07)] transition-shadow hover:shadow-[0_8px_20px_rgba(44,36,32,0.1)]"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-20px' }}
            transition={{ duration: 0.4, delay: index * 0.06 }}
          >
            <div
              aria-hidden="true"
              className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl text-xl text-white shadow-sm"
              style={{ background: `linear-gradient(145deg, ${accentColor}, ${side === 'bride' ? '#A56876' : '#6C9581'})` }}
            >
              <span className="font-serif">{member.name.charAt(0)}</span>
            </div>
            <p className="font-serif text-lg leading-snug text-[#625B55] sm:text-xl">
              {member.name}
            </p>
            <p className="mt-1 font-sans text-xs font-medium uppercase leading-relaxed text-[#C49A36]">
              {member.relation}
            </p>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}

export function Family() {
  return (
    <section id="family" className="relative overflow-hidden bg-[#F7F3EB] px-5 py-16 sm:px-8 sm:py-20 md:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at 50% 0%, rgba(255,255,255,0.8), transparent 55%), radial-gradient(ellipse at 0% 100%, rgba(201,168,76,0.08), transparent 42%)',
        }}
      />
      <div className="relative mx-auto max-w-[672px]">
        <motion.header
          className="mb-12 text-center sm:mb-14"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.65 }}
        >
          <p className="font-sans text-xs font-bold uppercase tracking-[0.34em] text-[#C9A84C] sm:text-sm">
            With blessings
          </p>
          <div className="mx-auto mt-3 flex w-40 items-center gap-3" aria-hidden="true">
            <span className="h-px flex-1 bg-[#C9A84C]/45" />
            <span className="text-sm text-[#C9A84C]">✦</span>
            <span className="h-px flex-1 bg-[#C9A84C]/45" />
          </div>
          <h2 className="mt-6 font-serif text-4xl text-[#262321] sm:text-5xl md:text-[52px]">
            Our Families
          </h2>
          <p className="mx-auto mt-4 max-w-xl font-sans text-sm leading-relaxed text-[#92877B] sm:text-base">
            Two families, one heart. We are overjoyed to share this celebration with our loved ones.
          </p>
        </motion.header>

        <div className="relative mx-auto flex max-w-[672px] flex-col gap-10">
          <FamilyList title="Bride’s Family" members={BRIDE_FAMILY} side="bride" />
          <FamilyList title="Groom’s Family" members={GROOM_FAMILY} side="groom" />
        </div>
      </div>
    </section>
  );
}
