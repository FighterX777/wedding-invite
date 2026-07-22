import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Komal & Sabhye | Wedding Invitation',
  description:
    'Join us as we celebrate the wedding of Komal Gupta & Sabhye Singhal on February 14th, 2025 at The Taj Palace, New Delhi.',
  keywords: ['wedding', 'invitation', 'Komal', 'Sabhye', 'Indian wedding', 'Taj Palace'],
  authors: [{ name: 'Komal & Sabhye' }],
  openGraph: {
    title: 'Komal & Sabhye | Wedding Invitation 💍',
    description:
      'You are cordially invited to our wedding celebration. February 14th, 2025 · The Taj Palace, New Delhi.',
    type: 'website',
  },
  manifest: '/manifest.json',
  icons: {
    icon: '/favicon.ico',
  },
};

export const viewport: Viewport = {
  themeColor: '#C9A84C',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Google Fonts — must be in <head> directly */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
