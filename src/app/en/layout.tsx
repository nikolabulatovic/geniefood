import type { Metadata } from 'next';
import '../globals.css';

const description =
  'Gen!e is a brand by Macrobiotic Prom, a company making plant-based food for 37 years. Our goal is simple: create meals that are healthier, taste amazing, and respect the planet.';

export const metadata: Metadata = {
  title: 'Genie Food',
  description,
  openGraph: {
    title: 'Genie Food',
    description,
    images: ['https://geniefood.rs/images/genie-cover.jpg'],
    url: 'https://geniefood.rs/en',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    images: ['https://geniefood.rs/images/genie-cover.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
