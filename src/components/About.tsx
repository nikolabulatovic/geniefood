'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

const About = () => {
  const t = useTranslations('about');

  return (
    <section id='about' className='min-h-screen bg-primary py-20'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-row lg:flex-col items-center'>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className='space-y-6'>
            <motion.h2
              className='text-2xl font-bold text-center my-6 flex items-center justify-center gap-4'
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}>
              <Image
                src='/images/sprout.png'
                alt='Sprout'
                width={40}
                height={40}
                className='w-8 h-8 md:w-10 md:h-10'
              />
              <span className='inline-block px-6 py-2'>{t('title')}</span>
            </motion.h2>
            <motion.div
              className='space-y-4 text-secondary/90 text-lg'
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}>
              <p>{t('paragraph1')}</p>
              <p>{t('paragraph2')}</p>
              <p>{t('paragraph3')}</p>
              <p>{t('paragraph4')}</p>
            </motion.div>
          </motion.div>

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
        </div>
      </div>
    </section>
  );
};

export default About;
