'use client';

import { motion } from 'framer-motion';
import { useTranslation } from '@/contexts/I18nContext';
import SectionHeading from './SectionHeading';

const Contact = () => {
  const { t } = useTranslation('contact');

  const contactInfo = [
    {
      icon: (
        <svg
          className='w-6 h-6'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
          />
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'
          />
        </svg>
      ),
      title: t('address'),
      value: t('addressValue'),
    },
    {
      icon: (
        <svg
          className='w-6 h-6'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
          />
        </svg>
      ),
      title: t('email'),
      value: t('emailValue'),
    },
    {
      icon: (
        <svg
          className='w-6 h-6'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
          />
        </svg>
      ),
      title: t('phone'),
      value: t('phoneValue'),
    },
  ];

  return (
    <section id='contact' className='py-20 bg-genie-salmon relative'>
      <div className='container mx-auto px-4'>
        <SectionHeading title={t('title')} />

        <div className='max-w-6xl mt-8 mx-auto'>
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 items-center'>
            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className='flex items-start space-x-4 p-4 bg-secondary/60 backdrop-blur-sm rounded-lg hover:bg-secondary/80 transition-all duration-300'>
                <div className='flex-shrink-0 text-primary'>{item.icon}</div>
                <div className='flex-1'>
                  <h6 className='text-lg font-semibold text-white mb-1'>
                    {item.title}
                  </h6>
                  <span className='text-white/90 text-sm'>{item.value}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
