import type { Metadata } from 'next';
import '../globals.css';

export const metadata: Metadata = {
  title: 'Genie Food',
  description: 'Najukusniji biljni proizvodi u Srbiji',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
