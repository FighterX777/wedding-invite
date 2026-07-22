// ============================================================
// Wedding Constants — Sample Data
// Customize all values here for real weddings
// ============================================================

export const WEDDING = {
  bride: {
    name: 'Komal',
    fullName: 'Komal Gupta',
    parents: 'Mr. & Mrs. Gupta',
    occupation: 'Architect & Design Lead',
    description:
      'A dreamer with an eye for beauty, Komal brings warmth and creativity to every room she enters. Her love for art and culture is what first drew Sabhye to her.',
  },
  groom: {
    name: 'Sabhye',
    fullName: 'Sabhye Singhal',
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
    id: 'haldi',
    name: 'Haldi',
    emoji: '🌸',
    date: 'December 4, 2026',
    time: '10:00 AM',
    venue: 'Atrio Hotel by Devam, New Delhi',
    dressCode: 'Yellow & White',
    description:
      'A vibrant morning ceremony blessing the couple with turmeric for prosperity and good luck.',
    mapUrl: 'https://maps.google.com',
    color: '#F5C542',
    gradient: 'from-yellow-100 to-amber-50',
  },
  {
    id: 'mehendi',
    name: 'Mehendi',
    emoji: '🌿',
    date: 'December 4, 2026',
    time: '4:00 PM',
    venue: 'Atrio Hotel by Devam, New Delhi',
    dressCode: 'Green & Floral',
    description:
      'An evening of intricate henna art, folk music, and celebration with the women of the family.',
    mapUrl: 'https://maps.google.com',
    color: '#4A7C59',
    gradient: 'from-green-50 to-emerald-50',
  },
  {
    id: 'sangeet',
    name: 'Sangeet',
    emoji: '🎶',
    date: 'December 4, 2026',
    time: '7:00 PM',
    venue: 'Atrio Hotel by Devam, New Delhi',
    dressCode: 'Cocktail / Indian Festive',
    description:
      'A night of music, dance performances, and unforgettable memories as both families come together.',
    mapUrl: 'https://maps.google.com',
    color: '#9B4F96',
    gradient: 'from-purple-50 to-pink-50',
  },
  {
    id: 'wedding',
    name: 'Wedding',
    emoji: '💍',
    date: 'December 5, 2026',
    time: '7:00 PM',
    venue: 'Atrio Hotel by Devam, New Delhi',
    dressCode: 'Indian Formal / Sherwani & Saree',
    description:
      'The grand union of Komal and Sabhye under a canopy of marigolds and starlight.',
    mapUrl: 'https://maps.google.com',
    color: '#C9A84C',
    gradient: 'from-amber-50 to-yellow-50',
  },
  {
    id: 'reception',
    name: 'Reception',
    emoji: '✨',
    date: 'December 6, 2026',
    time: '7:30 PM',
    venue: 'Atrio Hotel by Devam, New Delhi',
    dressCode: 'Black Tie / Indian Formal',
    description:
      'A glittering celebration to welcome the newlyweds into the next chapter of their lives.',
    mapUrl: 'https://maps.google.com',
    color: '#1A4A3A',
    gradient: 'from-emerald-50 to-teal-50',
  },
];


export const BRIDE_FAMILY = [
  { name: 'S.K. Gupta', relation: "Bride's Father", role: 'Senior Architect' },
  { name: 'Deepa Gupta', relation: "Bride's Mother", role: 'Educator' },
  { name: 'Amol Gupta', relation: "Bride's Brother", role: 'Software Engineer' },
];

export const GROOM_FAMILY = [
  { name: 'Pramod Kumar Singhal', relation: "Groom's Father", role: 'Business Magnate' },
  { name: 'Poonam Singhal', relation: "Groom's Mother", role: 'Philanthropist' },
  { name: 'Ananya Singhal', relation: "Groom's Sister", role: 'Pediatric Doctor' },
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
