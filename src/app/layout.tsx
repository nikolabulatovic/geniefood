import type { Metadata, Viewport } from 'next';
import './globals.css';
import { ThemeProvider } from '@/contexts/ThemeContext';

export const metadata: Metadata = {
  title: 'Genie Food',
  description: 'Najukusniji biljni proizvodi u Srbiji',
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
