# 🌸 Komal & Sabhye — Digital Wedding Invitation

A premium, highly interactive digital wedding invitation built with modern web technologies. Designed to provide a magical, app-like experience for guests, featuring rich animations, ambient music, and beautiful typography.

## ✨ Features

- **Immersive Hero Reveal**: An animated traditional door that opens to reveal the main invitation with a subtle zoom and glow effect.
- **Magical Backgrounds**: Seamless geometric SVG patterns paired with floating golden bubbles that slowly drift and pop gracefully.
- **Interactive Timeline**: A beautifully animated vertical timeline layout for wedding events (Haldi, Mehendi, Sangeet, Wedding, Reception) that adapts perfectly to desktop and mobile screens.
- **Rich Media & Audio**: Integrated ambient background music with a custom player and an elegant photo gallery.
- **Guest Utilities**: Add-to-Calendar (.ics generation) functionality and embedded Google Maps for the venue.
- **Fully Responsive**: Meticulously crafted to look stunning on both 4K desktop displays and small mobile screens.

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **State Management**: [Zustand](https://github.com/pmndrs/zustand)
- **Icons**: [Lucide React](https://lucide.dev/)

## 🚀 Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the invitation.

## 🎨 Customization

All wedding details are centralized in the codebase to make it easy to adapt this template for another wedding:
- Modify `lib/constants.ts` to change names, dates, venues, and the events timeline.
- Replace images in the `public/assets/images` directory.
- Replace the background audio in `public/assets/audio`.