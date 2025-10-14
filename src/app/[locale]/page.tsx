'use client';

import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

import About from '@/components/About';
import Products from '@/components/Products';
import Contact from '@/components/Contact';
import { useTranslations } from 'next-intl';
import ProductModal from '@/components/ProductModal';
import {
  ProductModalProvider,
  useProductModal,
} from '@/contexts/ProductModalContext';

function HomeContent() {
  const t = useTranslations('cover');
  const { selectedProduct, isModalOpen, closeModal } = useProductModal();
  const [showScrollButton, setShowScrollButton] = useState(true);

  const scrollToProducts = () => {
    const productsSection = document.getElementById('products');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setShowScrollButton(scrollTop <= 100);
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Check initial scroll position
    handleScroll();

    // Cleanup
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className='flex items-center bg-genie-light-blue relative min-h-screen'>
        <div className='flex justify-center items-center relative overflow-hidden p-10 w-full'>
          <motion.div
            initial={{ opacity: 0, scale: 0.5, x: 150, y: 100 }}
            whileInView={{ opacity: 1, scale: 1, x: 0, y: 0 }}
            transition={{ duration: 1.2, delay: 0.8, ease: 'easeOut' }}
            className='relative w-[20%] max-w-xs h-full md:w-3/4 aspect-[16/12.5]'>
            <Image
              src='/images/genie-cover-tekst-plavo.jpg'
              alt={t('text-alt')}
              fill
              className='object-cover'
              sizes='(max-width: 768px) 100vw, 50vw'
              priority
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className='relative ml-20 w-[20%] max-w-md h-full md:w-3/4 aspect-[9/13]'>
            <Image
              src='/images/genie-cover-lice-plavo.jpg'
              alt={t('title-alt')}
              fill
              className='object-cover'
              sizes='(max-width: 768px) 100vw, 50vw'
              priority
            />
          </motion.div>
        </div>

        {/* Scroll to Products Button */}
        <AnimatePresence>
          {showScrollButton && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 1 }}
              className='absolute bottom-32 left-1/2 transform -translate-x-1/2'>
              <motion.button
                onClick={scrollToProducts}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className='cursor-pointer bg-primary/90 backdrop-blur-sm text-secondary px-5 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 font-intro font-bold text-lg border-2 border-genie-green/20 hover:border-genie-green/40'>
                <div className='flex flex-col text-xl text-secondary text-center -mt-4'>
                  <motion.div
                    animate={{ y: [0, 4, 0] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                    className='text-4xl'>
                    ⌄
                  </motion.div>
                  <motion.div
                    animate={{ y: [0, 4, 0] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: 0.2,
                    }}
                    className='text-4xl -mt-7'>
                    ⌄
                  </motion.div>
                </div>
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div
        className='h-16 absolute bg-genie-light-blue relative z-1 top-[-1px]'
        style={{
          clipPath: 'polygon(100% 0, 0 100%, 0 0)',
        }}></div>
      <div className='relative -mt-12'>
        <div className='absolute -mt-4 h-20 w-full bg-secondary' />
        <div
          className='h-16 absolute bg-[#93b184] relative'
          style={{
            clipPath: 'polygon(100% 0, 0 101%, 101% 101%)',
          }}></div>
        <Products />
        <div
          className='h-16 absolute bg-genie-green relative z-1 top-[-1px]'
          style={{
            clipPath: 'polygon(100% 0, 0 0, 100% 100%)',
          }}></div>
      </div>
      <div className='relative -mt-12'>
        <div className='absolute -mt-4 h-20 w-full bg-secondary' />
        <div
          className='h-16 absolute bg-primary relative'
          style={{
            clipPath: 'polygon(0 101%, 0 0, 101% 101%)',
          }}></div>
        <About />
        <div
          className='h-16 absolute bg-primary relative z-1 top-[-1px]'
          style={{
            clipPath: 'polygon(100% 0, 0 100%, 0 0)',
          }}></div>
      </div>
      <div className='relative -mt-12'>
        <div className='absolute -mt-4 h-20 w-full bg-secondary' />
        <div
          className='h-16 w-full bg-genie-salmon relative'
          style={{
            clipPath: 'polygon(100% 0, 0 101%, 101% 101%)',
          }}></div>
        <Contact />
      </div>

      <ProductModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
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

export default function Home() {
  return (
    <ProductModalProvider>
      <HomeContent />
    </ProductModalProvider>
  );
}
