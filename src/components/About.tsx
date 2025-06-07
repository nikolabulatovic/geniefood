'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import SectionHeading from './SectionHeading';

const About = () => {
  const t = useTranslations('about');

  return (
    <section id='about' className='min-h-screen bg-primary py-20'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-col lg:flex-row items-center gap-28'>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className='space-y-6 w-1/2'>
            <SectionHeading title={t('title')} />
            <motion.div
              className='font-poppins space-y-4 text-secondary text-xl text-shadow-[0_3px_5px_rgb(0_0_0_/_0.15)]'
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
        </div>
      </div>
    </section>
  );
};

export default About;
