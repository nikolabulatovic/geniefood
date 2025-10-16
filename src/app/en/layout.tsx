import type { Metadata } from 'next';
import '../globals.css';

export const metadata: Metadata = {
  title: 'Genie Food',
  description: 'The most delicious plant-based products in Serbia',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
