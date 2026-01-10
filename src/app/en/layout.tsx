import type { Metadata } from 'next';
import '../globals.css';

export const metadata: Metadata = {
  title: 'Genie Food',
  description:
    'Gen!e is a brand by Macrobiotic Prom, a company making plant-based food for 37 years. Our goal is simple: create meals that are healthier, taste amazing, and respect the planet.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
