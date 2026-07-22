'use client';

import { motion } from 'framer-motion';
import { BRIDE_FAMILY, GROOM_FAMILY } from '@/lib/constants';
import { SectionTitle } from '@/components/ui/SectionTitle';

interface FamilyMember {
  name: string;
  relation: string;
  role: string;
}

function FamilyCard({ member, index, accentColor }: { member: FamilyMember; index: number; accentColor: string }) {
  return (
    <motion.div
      className="relative bg-white rounded-2xl p-5 border border-[#C9A84C]/10 shadow-sm"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -2, borderColor: '#C9A84C44' }}
    >
      {/* Avatar initial */}
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-serif text-xl mb-4 shadow-sm"
        style={{ background: `linear-gradient(135deg, ${accentColor}, ${accentColor}99)` }}
      >
        {member.name[0]}
      </div>

      <h4 className="font-serif text-xl text-[#1A1A1A] leading-tight mb-1">{member.name}</h4>
      <p className="font-sans text-[#C9A84C] text-xs md:text-sm tracking-wider uppercase mb-1">
        {member.relation}
      </p>
    </motion.div>
  );
}

function FamilyColumn({
  title,
  emoji,
  members,
  accentColor,
}: {
  title: string;
  emoji: string;
  members: FamilyMember[];
  accentColor: string;
}) {
  return (
    <div>
      <motion.div
        className="flex items-center gap-2 mb-5"
        initial={{ opacity: 0, x: -15 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span className="text-2xl">{emoji}</span>
        <h3
          className="font-serif text-xl"
          style={{ color: accentColor }}
        >
          {title}
        </h3>
      </motion.div>
      <div className="grid grid-cols-2 gap-3">
        {members.map((m, i) => (
          <FamilyCard key={m.name} member={m} index={i} accentColor={accentColor} />
        ))}
      </div>
    </div>
  );
}

export function Family() {
  return (
    <section id="family" className="bg-[#F7F3EC] py-16 md:py-24 px-6">
      <div className="max-w-2xl mx-auto">
        <SectionTitle
          eyebrow="With Blessings"
          title="Our Families"
          subtitle="Two families, one heart. We are overjoyed to share this celebration with our loved ones."
        />

        <div className="space-y-10">
          <FamilyColumn
            title="Bride's Family"
            emoji="🌸"
            members={BRIDE_FAMILY}
            accentColor="#6B1B2A"
          />
          <FamilyColumn
            title="Groom's Family"
            emoji="🌿"
            members={GROOM_FAMILY}
            accentColor="#1A4A3A"
          />
        </div>
      </div>
    </section>
  );
}
