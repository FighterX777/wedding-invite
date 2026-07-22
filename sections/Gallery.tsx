'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { SectionTitle } from '@/components/ui/SectionTitle';

// Gallery items with colored placeholder cards
const GALLERY_ITEMS = [
  { id: 1, label: 'Engagement', emoji: '💍', color: '#6B1B2A', span: 'tall' },
  { id: 2, label: 'Haldi Day', emoji: '🌸', color: '#D4A017', span: 'normal' },
  { id: 3, label: 'Mehendi', emoji: '🌿', color: '#1A4A3A', span: 'normal' },
  { id: 4, label: 'Together', emoji: '❤️', color: '#6B1B2A', span: 'wide' },
  { id: 5, label: 'Sangeet', emoji: '🎶', color: '#9B4F96', span: 'normal' },
  { id: 6, label: 'Candid', emoji: '📸', color: '#C9A84C', span: 'tall' },
  { id: 7, label: 'Portrait', emoji: '🌟', color: '#2D5A8A', span: 'normal' },
  { id: 8, label: 'Family', emoji: '🏡', color: '#4A3728', span: 'normal' },
  { id: 9, label: 'Reception', emoji: '✨', color: '#1A4A3A', span: 'wide' },
];

interface GalleryCard {
  id: number;
  label: string;
  emoji: string;
  color: string;
  span: string;
}

function GalleryItem({ item, onClick }: { item: GalleryCard; onClick: () => void }) {
  return (
    <motion.div
      className={`relative rounded-2xl overflow-hidden cursor-pointer ${
        item.span === 'tall' ? 'row-span-2' : item.span === 'wide' ? 'col-span-2' : ''
      }`}
      style={{ aspectRatio: item.span === 'tall' ? '1/2' : item.span === 'wide' ? '2/1' : '1/1' }}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
      onClick={onClick}
    >
      {/* Colored placeholder card */}
      <div
        className="absolute inset-0 flex flex-col items-center justify-center gap-3"
        style={{ background: `linear-gradient(135deg, ${item.color}, ${item.color}bb)` }}
      >
        <span className="text-5xl">{item.emoji}</span>
        <span className="font-serif text-white/90 text-lg">{item.label}</span>
      </div>

      {/* Overlay on hover */}
      <motion.div
        className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300"
      >
        <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
          <span className="text-white text-lg">🔍</span>
        </div>
      </motion.div>
    </motion.div>
  );
}

function Lightbox({ item, onClose }: { item: GalleryCard; onClose: () => void }) {
  return (
    <motion.div
      className="fixed inset-0 z-[80] flex items-center justify-center bg-black/90 backdrop-blur-md p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="relative w-full max-w-sm aspect-square rounded-3xl overflow-hidden shadow-2xl"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="absolute inset-0 flex flex-col items-center justify-center gap-4"
          style={{ background: `linear-gradient(135deg, ${item.color}, ${item.color}cc)` }}
        >
          <span className="text-8xl">{item.emoji}</span>
          <span className="font-serif text-white text-2xl">{item.label}</span>
        </div>
      </motion.div>

      <button
        onClick={onClose}
        className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
        aria-label="Close lightbox"
      >
        <X size={18} />
      </button>
    </motion.div>
  );
}

export function Gallery() {
  const [selected, setSelected] = useState<GalleryCard | null>(null);

  return (
    <section id="gallery" className="bg-[#FDFAF5] py-24 px-6">
      <div className="max-w-2xl mx-auto">
        <SectionTitle
          eyebrow="Memories"
          title="Our Gallery"
          subtitle="A glimpse into the beautiful moments we've shared together."
        />

        {/* Masonry-style grid */}
        <div className="grid grid-cols-3 gap-3 auto-rows-[100px]">
          {GALLERY_ITEMS.map((item) => (
            <GalleryItem
              key={item.id}
              item={item}
              onClick={() => setSelected(item)}
            />
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <Lightbox item={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
