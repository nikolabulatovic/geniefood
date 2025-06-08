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
      <div className='flex items-center bg-genie-light-blue relative shadow-2xl min-h-screen'>
        <div className='flex justify-center items-center relative overflow-hidden p-10 w-full'>
          <motion.div
            initial={{ opacity: 0, scale: 0.5, x: 150, y: 100 }}
            whileInView={{ opacity: 1, scale: 1, x: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.8, ease: 'easeOut' }}
            className='relative w-[20%] max-w-xs h-full md:w-3/4 aspect-[16/12.5]'>
            <Image
              src='/images/genie-cover-tekst-plavo.jpg'
              alt={t('cover-text')}
              fill
              className='object-cover'
              sizes='(max-width: 768px) 100vw, 50vw'
              priority
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className='relative ml-20 w-[20%] max-w-md h-full md:w-3/4 aspect-[9/13]'>
            <Image
              src='/images/genie-cover-lice-plavo.jpg'
              alt={t('cover-title')}
              fill
              className='object-cover'
              sizes='(max-width: 768px) 100vw, 50vw'
              priority
            />
          </motion.div>
        </div>
      </div>
      <Products />
      <About />
    </>
  );
}
