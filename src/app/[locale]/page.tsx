'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

import About from '@/components/About';
import Products from '@/components/Products';
import Gallery from '@/components/Gallery';
import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('about');

  return (
    <>
      <div className='flex items-center bg-genie-light-blue relative min-h-screen'>
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
      <div
        className='h-16 absolute bg-genie-light-blue relative z-1'
        style={{
          clipPath: 'polygon(100% 0, 0 100%, 0 0)',
        }}></div>
      <div className='relative -mt-12'>
        <div className='absolute -mt-4 h-20 w-full bg-secondary' />
        <div
          className='h-16 absolute bg-genie-green relative'
          style={{
            clipPath: 'polygon(100% 0, 0 101%, 101% 101%)',
          }}></div>
        <Products />
        <div
          className='h-16 absolute bg-genie-green relative z-1'
          style={{
            clipPath: 'polygon(100% 0, 0 0, 100% 100%)',
          }}></div>
      </div>
      <div className='relative -mt-12'>
        <div className='absolute -mt-4 h-20 w-full bg-secondary' />
        <div
          className='h-16 absolute bg-genie-salmon relative'
          style={{
            clipPath: 'polygon(0 101%, 0 0, 101% 101%)',
          }}></div>
        <Gallery />
        <div
          className='h-16 absolute bg-genie-salmon relative z-1'
          style={{
            clipPath: 'polygon(100% 0, 0 100%, 0 0)',
          }}></div>
      </div>
      <div className='relative -mt-12'>
        <div className='absolute -mt-4 h-20 w-full bg-secondary' />
        <div
          className='h-16 w-full relative bg-primary'
          style={{
            clipPath: 'polygon(100% 0, 0 101%, 101% 101%)',
          }}></div>
        <About />
      </div>
      {/* <style jsx>{`
        .genie-green-diagonal::before,
        .primary-diagonal::before {
          content: '';
          position: absolute;
          inset: 0;
          background: inherit;
          z-index: 10;
          clip-path: polygon(50% 50%, 100% 0, 100% 100%, 0 100%);
          transform: translateY(-4px);
        }
        .genie-salmon-diagonal::before {
          content: '';
          position: absolute;
          inset: 0;
          background: inherit;
          z-index: 10;
          clip-path: polygon(0 100%, 0 0, 100% 100%);
          transform: translateY(-4px);
        }
      `}</style> */}
    </>
  );
}
