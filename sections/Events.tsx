'use client';

import { motion } from 'framer-motion';
import { Droplet, Leaf, Music, Heart, Sparkles, MapPin, Clock, Calendar, Shirt } from 'lucide-react';
import { EVENTS } from '@/lib/constants';
import { downloadICS, generateICS } from '@/lib/calendar';

const getEventIcon = (id: string) => {
  switch (id) {
    case 'haldi': return <Droplet size={14} className="text-[#E8C96D] fill-[#E8C96D]" />;
    case 'mehendi': return <Leaf size={14} className="text-[#E8C96D] fill-[#E8C96D]" />;
    case 'sangeet': return <Music size={14} className="text-[#E8C96D] fill-[#E8C96D]" />;
    case 'wedding': return <Heart size={14} className="text-[#E8C96D] fill-[#E8C96D]" />;
    default: return <Sparkles size={14} className="text-[#E8C96D] fill-[#E8C96D]" />;
  }
};

function EventCard({ event, index, isDesktopLeft }: { event: (typeof EVENTS)[number], index: number, isDesktopLeft: boolean }) {
  const handleCalendar = () => {
    const ics = generateICS({
      title: `${event.name} — Komal & Sabhye Wedding`,
      description: event.description,
      location: event.venue,
      startDate: '20261204T100000', // Mock start date for now
      endDate: '20261204T130000',
    });
    downloadICS(ics, event.name);
  };

  return (
    <motion.div
      className={`relative w-full max-w-[380px] bg-gradient-to-br from-[#FFFDF5] to-[#FDF5DD] rounded-xl p-6 md:p-8 shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-[#E8C96D]/40 ${isDesktopLeft ? 'md:text-right text-left' : 'text-left'}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: 0.2 }}
      whileHover={{ scale: 1.02 }}
    >
      {/* Inner dashed border */}
      <div className="absolute inset-[6px] rounded-lg border-[1.5px] border-dashed border-[#C9A84C]/30 pointer-events-none" />

      {/* Badge / Icon */}
      <div className={`absolute top-6 md:top-8 w-10 h-10 rounded-full bg-[#5C0E22] flex items-center justify-center shadow-md z-10 ${isDesktopLeft ? 'md:right-6 md:left-auto left-6' : 'left-6'}`}>
        {getEventIcon(event.id)}
      </div>

      {/* Content */}
      <div className={`relative z-10 ${isDesktopLeft ? 'md:mr-16 ml-16 md:ml-0' : 'ml-16'}`}>
        {/* Header */}
        <p className="text-[8px] md:text-[9px] tracking-[0.2em] text-[#C9A84C] uppercase mb-2 font-sans font-semibold">
          {event.date}
        </p>
        <h3 className="text-xl md:text-2xl font-serif uppercase tracking-[0.15em] text-[#5C0E22] mb-3">
          {event.name}
        </h3>

        {/* Description */}
        <p className="text-[10px] md:text-xs font-sans text-[#3D251E]/70 tracking-wide leading-relaxed mb-5">
          {event.description}
        </p>

        {/* Details List */}
        <div className={`space-y-2 mb-6 ${isDesktopLeft ? 'md:flex md:flex-col md:items-end' : ''}`}>
          <div className={`flex items-center gap-2 text-[10px] md:text-xs text-[#5a4a3a] ${isDesktopLeft ? 'md:flex-row-reverse' : ''}`}>
            <Clock size={12} className="text-[#C9A84C] flex-shrink-0" />
            <span className="font-sans">{event.time}</span>
          </div>
          <div className={`flex items-start gap-2 text-[10px] md:text-xs text-[#5a4a3a] ${isDesktopLeft ? 'md:flex-row-reverse md:text-right' : ''}`}>
            <MapPin size={12} className="text-[#C9A84C] flex-shrink-0 mt-0.5" />
            <span className="font-sans">{event.venue}</span>
          </div>
          <div className={`flex items-center gap-2 text-[10px] md:text-xs text-[#5a4a3a] ${isDesktopLeft ? 'md:flex-row-reverse' : ''}`}>
            <Shirt size={12} className="text-[#C9A84C] flex-shrink-0" />
            <span className="font-sans">{event.dressCode}</span>
          </div>
        </div>

        {/* Action button */}
        <button
          onClick={handleCalendar}
          className={`flex items-center gap-2 py-2 px-4 rounded-lg border border-[#C9A84C]/40 text-[#5C0E22] font-sans text-[9px] tracking-wider uppercase hover:bg-[#C9A84C]/10 transition-colors duration-200 ${isDesktopLeft ? 'md:ml-auto' : ''}`}
        >
          <Calendar size={12} className="text-[#C9A84C]" />
          Add to Calendar
        </button>
      </div>
    </motion.div>
  );
}

export function Events() {
  return (
    <section id="events" className="relative bg-[#FDFBF7] py-24 px-4 overflow-hidden">
      {/* Background circle pattern */}
      <svg className="absolute inset-0 w-full h-full opacity-30 pointer-events-none z-0">
        <defs>
          <pattern id="bg-pattern-events" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="20" cy="20" r="14" fill="none" stroke="#C9A84C" strokeWidth="0.5" opacity="0.3" />
            <circle cx="20" cy="20" r="1.5" fill="#C9A84C" opacity="0.3" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#bg-pattern-events)" />
      </svg>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.h2 
            className="text-3xl md:text-4xl font-serif uppercase tracking-[0.2em] text-[#5C0E22] mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            The Celebrations
          </motion.h2>
          <motion.div 
            className="flex items-center justify-center gap-3 opacity-60"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.6 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="w-16 h-[1px] bg-[#C9A84C]" />
            <div className="w-2.5 h-2.5 rounded-full border-[1.5px] border-[#C9A84C] flex items-center justify-center">
              <div className="w-1 h-1 rounded-full bg-[#C9A84C]" />
            </div>
            <div className="w-16 h-[1px] bg-[#C9A84C]" />
          </motion.div>
        </div>

        {/* Timeline Layout */}
        <div className="relative py-10">
          {/* Center/Left Vertical Line (Animated) */}
          <motion.div 
            className="absolute left-[16px] md:left-[50%] top-0 bottom-0 w-[1px] bg-[#C9A84C]/40 md:-translate-x-1/2 origin-top"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            viewport={{ once: true, margin: '-100px' }}
          />

          <div className="space-y-12 md:space-y-24">
            {EVENTS.map((event, i) => {
              const isDesktopLeft = i % 2 === 0;
              return (
                <div className="relative flex items-center w-full" key={event.id}>
                  
                  {/* Desktop Left Side */}
                  <div className={`hidden md:flex w-1/2 pr-12 ${isDesktopLeft ? 'justify-end' : 'opacity-0 pointer-events-none'}`}>
                    {isDesktopLeft && <EventCard event={event} index={i} isDesktopLeft={true} />}
                  </div>

                  {/* Dot (Animated) */}
                  <div className="absolute left-[16px] md:left-[50%] top-1/2 -translate-y-1/2 flex items-center justify-center -translate-x-1/2 z-20">
                    <motion.div 
                      className="w-[18px] h-[18px] rounded-full border-[1.5px] border-[#C9A84C] bg-[#FDFBF7] flex items-center justify-center shadow-[0_0_10px_rgba(201,168,76,0.3)]"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true, margin: '-50px' }}
                      transition={{ type: 'spring', delay: 0.4 + i * 0.1 }}
                    >
                      <div className="w-2 h-2 rounded-full bg-[#C9A84C]" />
                    </motion.div>
                  </div>

                  {/* Desktop Right Side + Mobile All Cards */}
                  <div className={`w-full pl-10 md:w-1/2 md:pl-12 flex justify-start ${!isDesktopLeft ? 'md:flex' : 'md:hidden'}`}>
                    <EventCard event={event} index={i} isDesktopLeft={false} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
