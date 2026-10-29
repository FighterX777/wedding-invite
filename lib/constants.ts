// ============================================================
// Wedding Constants — Sample Data
// Customize all values here for real weddings
// ============================================================

export const WEDDING = {
  bride: {
    name: 'Komal',
    fullName: 'Komal',
    parents: 'Mr. & Mrs. Gupta',
    occupation: 'Architect & Design Lead',
    description:
      'A dreamer with an eye for beauty, Komal brings warmth and creativity to every room she enters. Her love for art and culture is what first drew Sabhye to her.',
  },
  groom: {
    name: 'Sabhye',
    fullName: 'Sabhye',
    parents: 'Mr. & Mrs. Singhal',
    occupation: 'Entrepreneur & Venture Capitalist',
    description:
      'Sabhye is driven by passion and purpose. Beneath his ambitious exterior lies a man of deep values, boundless generosity, and a smile that lights up every room.',
  },
  date: new Date('2026-12-05T19:00:00+05:30'),
  dateDisplay: 'Saturday, 5 December 2026',
  venue: 'Atrio Hotel by Devam, New Delhi',
  hashtag: '#KomalMeetsSabhye',
};

export const EVENTS = [
  {
    id: 'baraat',
    name: 'Reception of Baraat',
    emoji: '🎺',
    date: 'December 5, 2026',
    time: '7:00 PM',
    start: '20261205T190000',
    end: '20261205T220000',
    venue: 'Atrio Hotel by Devam, New Delhi',
    dressCode: 'Indian Festive',
    description: 'A grand welcome for the groom’s procession as the celebrations begin.',
    mapUrl: 'https://maps.google.com',
    color: '#C9A84C',
    gradient: 'from-amber-50 to-yellow-50',
  },
  {
    id: 'dinner',
    name: 'Dinner',
    emoji: '🍽️',
    date: 'December 5, 2026',
    time: '8:00 PM',
    start: '20261205T200000',
    end: '20261205T223000',
    venue: 'Atrio Hotel by Devam, New Delhi',
    dressCode: 'Indian Formal',
    description: 'An evening of good food, warm conversations, and celebration with family and friends.',
    mapUrl: 'https://maps.google.com',
    color: '#1A4A3A',
    gradient: 'from-emerald-50 to-teal-50',
  },
  {
    id: 'doli',
    name: 'Doli',
    emoji: '🌙',
    date: 'December 5, 2026',
    time: 'Late Night',
    start: '20261205T120000',
    end: '20261205T150000',
    venue: 'Atrio Hotel by Devam, New Delhi',
    dressCode: 'Traditional',
    description: 'Taaron ki Chaon mai — a tender farewell under the shade of the stars.',
    mapUrl: 'https://maps.google.com',
    color: '#6B1B2A',
    gradient: 'from-rose-50 to-amber-50',
  },
];


export const BRIDE_FAMILY = [
  { name: 'Maneshwar Das Gupta', relation: "Bride's Grandfather", role: 'Senior Architect' },
  { name: 'Saroj Bala Gupta', relation: "Bride's Grandmother", role: 'Senior Architect' },
  { name: 'Sanju Kumar Gupta', relation: "Bride's Father", role: 'Senior Architect' },
  { name: 'Deepa Gupta', relation: "Bride's Mother", role: 'Educator' },
  { name: 'Amol Gupta', relation: "Bride's Brother", role: 'Software Engineer' },
];

export const GROOM_FAMILY = [
  { name: 'Pramod Kumar Singhal', relation: "Groom's Father", role: 'Business Magnate' },
  { name: 'Poonam Singhal', relation: "Groom's Mother", role: 'Philanthropist' },
  { name: 'Vasudha Singhal', relation: "Groom's Sister", role: 'Pediatric Doctor' },
];

export const GALLERY_ITEMS = [
  { id: 1, alt: 'Engagement ceremony', span: 'tall' },
  { id: 2, alt: 'Couple at sunset', span: 'normal' },
  { id: 3, alt: 'Pre-wedding shoot', span: 'normal' },
  { id: 4, alt: 'Family portrait', span: 'wide' },
  { id: 5, alt: 'Traditional ceremony', span: 'normal' },
  { id: 6, alt: 'Candid moment', span: 'tall' },
  { id: 7, alt: 'Couple portrait', span: 'normal' },
  { id: 8, alt: 'Celebration', span: 'normal' },
  { id: 9, alt: 'Mehndi ceremony', span: 'wide' },
];
