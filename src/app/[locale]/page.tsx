'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

import About from '@/components/About';
import Products from '@/components/Products';
import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('about');

  return (
    <>
      <div className='flex items-center bg-tertiary relative shadow-2xl h-screen'>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className='flex justify-center items-center relative overflow-hidden p-10 w-full'>
          <div className='relative w-full h-full md:w-3/4 aspect-[16/9]'>
            <Image
              src='https://geniefood.rs/var/site/storage/images/_aliases/w800/9/6/3/0/369-17-ser-SR/e33331c4e287-4.jpg'
              alt={t('title')}
              fill
              className='object-cover'
              sizes='(max-width: 768px) 100vw, 50vw'
              priority
            />
          </div>
        </motion.div>
      </div>
      <Products />
      <About />
    </>
  );
}
