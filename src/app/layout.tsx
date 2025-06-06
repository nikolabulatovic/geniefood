import type { Metadata } from 'next';
import { blugie } from './fonts';
import './globals.css';

// TODO: Add metadata
export const metadata: Metadata = {
  title: 'Genie Food - Your Personal AI Chef',
  description: 'Get personalized meal plans and recipes powered by AI',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={blugie.variable}>
        <main className='min-h-screen bg-white'>{children}</main>
      </body>
    </html>
  );
}
