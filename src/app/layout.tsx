import type { Metadata, Viewport } from 'next';
import './globals.css';
import { ThemeProvider } from '@/contexts/ThemeContext';

const description =
  'Gen!e je brend kompanije Macrobiotic Prom, koja već više od 37 godina pravi zdraviju hranu na biljnoj bazi. Naša misija je jednostavna: učiniti biljne obroke neverovatno ukusnim, zdravijim, jednostavnim za korišćenje i dobrim za planetu.';

export const metadata: Metadata = {
  title: 'Genie Food',
  description,
  openGraph: {
    title: 'Genie Food',
    description,
    images: ['https://geniefood.rs/images/genie-cover.jpg'],
    url: 'https://geniefood.rs',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    images: ['https://geniefood.rs/images/genie-cover.jpg'],
  },
};

export const viewport: Viewport = {
  colorScheme: 'light dark',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className='light' suppressHydrationWarning>
      <body>
        <ThemeProvider initialTheme='light'>{children}</ThemeProvider>
      </body>
    </html>
  );
}
