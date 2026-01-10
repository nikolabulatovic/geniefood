import type { Metadata } from 'next';
import '../globals.css';

const description =
  'Gen!e je brend kompanije Macrobiotic Prom, koja već više od 37 godina pravi zdraviju hranu na biljnoj bazi. Naša misija je jednostavna: učiniti biljne obroke neverovatno ukusnim, zdravijim, jednostavnim za korišćenje i dobrim za planetu.';

export const metadata: Metadata = {
  title: 'Genie Food',
  description,
  openGraph: {
    title: 'Genie Food',
    description,
    images: ['https://geniefood.rs/images/genie-cover.jpg'],
    url: 'https://geniefood.rs/sr',
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
