import type { Metadata, Viewport } from 'next';
import './globals.css';
import { ThemeProvider } from '@/contexts/ThemeContext';

export const metadata: Metadata = {
  title: 'Genie Food',
  description:
    '**Gen!e** je brend kompanije **Macrobiotic Prom**, koja već više od 37 godina pravi zdraviju hranu na biljnoj bazi. Naša misija je jednostavna: učiniti biljne obroke neverovatno ukusnim, zdravijim, jednostavnim za korišćenje i dobrim za planetu.',
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
