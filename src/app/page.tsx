'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

import About from '@/components/About';
import Products from '@/components/Products';
import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('about');

  return (
    <main>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className='relative w-full aspect-[4/3] overflow-hidden shadow-2xl'>
        <Image
          src='https://geniefood.rs/var/site/storage/images/_aliases/w800/9/6/3/0/369-17-ser-SR/e33331c4e287-4.jpg'
          alt={t('title')}
          fill
          className='object-cover hover:scale-105 transition-transform duration-700'
          sizes='(max-width: 768px) 100vw, 50vw'
          priority
        />
      </motion.div>
      <About />
      <Products />
    </main>
  );
}
