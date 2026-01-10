import type { Metadata } from 'next';
import '../globals.css';

export const metadata: Metadata = {
  title: 'Genie Food',
  description:
    'Gen!e je brend kompanije Macrobiotic Prom, koja već više od 37 godina pravi zdraviju hranu na biljnoj bazi. Naša misija je jednostavna: učiniti biljne obroke neverovatno ukusnim, zdravijim, jednostavnim za korišćenje i dobrim za planetu.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
