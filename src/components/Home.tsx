'use client';

import { Montserrat, Poppins } from 'next/font/google';
import localFont from 'next/font/local';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

import { blugie } from '@/app/fonts';
import About from '@/components/About';
import Products from '@/components/Products';
import Contact from '@/components/Contact';
import { useTranslation } from '@/contexts/I18nContext';
import ProductModal from '@/components/ProductModal';
import {
  ProductModalProvider,
  useProductModal,
} from '@/contexts/ProductModalContext';
import Header from './Header';
import { AnimatedText } from './AnimatedText';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-montserrat',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
});

const intro = localFont({
  src: '../../public/fonts/Intro-Regular.ttf',
  variable: '--font-intro',
  display: 'swap',
});

function HomeContent() {
  const { t, locale } = useTranslation('cover');
  const { selectedProduct, isModalOpen, closeModal } = useProductModal();
  const [showScrollButton, setShowScrollButton] = useState(true);
  const heroSpeechText = t('text');

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

  const heroSpeechTextClassesByLocale =
    locale === 'sr'
      ? 'xl:text-5xl 2xl:text-6xl xl:max-w-[420px] 2xl:max-w-[540px]'
      : 'xl:text-4xl 2xl:text-5xl xl:max-w-[400px] 2xl:max-w-[480px]';

  return (
    <>
      <div
        className='flex items-center bg-tertiary relative w-full overflow-hidden min-h-[500px] min-[320px]:min-h-[700px] min-[450px]:min-h-[900px] min-[580px]:min-h-[1000px] min-[640px]:min-h-[800px] min-[768px]:min-h-[900px] min-[870px]:min-h-[1050px] min-[1024px]:min-h-[1200px] lg:min-h-screen'
        style={{ aspectRatio: '16/9' }}>
        <picture className='absolute inset-0 block'>
          <source
            media='(min-width: 1024px)'
            srcSet='/images/cover-alt-with-color-desktop.png'
          />
          <source
            media='(min-width: 640px)'
            srcSet='/images/cover-alt-with-color-tablet.png'
          />
          <img
            src='/images/cover-alt-with-color-mobile.png'
            alt={t('text-alt')}
            className='w-full h-full object-cover'
            loading='eager'
            decoding='async'
            fetchPriority='high'
          />
        </picture>

        {/* Speech bubble text overlays */}
        <div className='bubble-background-mobile absolute flex items-center justify-center pointer-events-none aspect-square w-[220px] min-[300px]:w-[250px] min-[450px]:w-[300px] md:hidden bottom-[-30px] left-[-10px] min-[320px]:bottom-[20px] min-[400px]:bottom-[20px] min-[400px]:left-[-10px] min-[450px]:bottom-[70px] min-[450px]:left-[20px] min-[540px]:bottom-[50px] min-[540px]:left-[50px] min-[580px]:bottom-[100px] min-[580px]:left-[80px] min-[640px]:bottom-[50px] min-[640px]:left-[100px]'>
          <AnimatedText
            text={heroSpeechText}
            delay={0.6}
            staggerDelay={0.15}
            className='inset-0 text-amber-950 font-intro font-semibold text-md min-[300px]:text-lg min-[320px]:text-xl min-[450px]:text-2xl leading-tight tracking-wide text-center px-12 py-8'
          />
        </div>

        <div className='bubble-background-tablet absolute items-center justify-center pointer-events-none hidden md:flex lg:hidden w-[400px] h-[330px] min-[768px]:bottom-[30px] min-[768px]:left-[100px] min-[870px]:bottom-[80px] min-[870px]:left-[200px]'>
          <AnimatedText
            text={heroSpeechText}
            delay={0.6}
            staggerDelay={0.15}
            className='text-amber-950 font-intro font-semibold text-3xl leading-tight tracking-wide text-center px-8 py-6 rounded-3xl max-w-[320px] bottom-32 min-[870px]:bottom-40 min-[940px]:bottom-36 left-20 min-[870px]:left-24 min-[940px]:left-28'
          />
        </div>

        <div className='bubble-background-desktop absolute items-center justify-center pointer-events-none hidden lg:flex min-[1024px]:left-[8%] min-[1024px]:top-[30%] min-h-[1100px]:top-[34%] min-[1100px]:left-[12%] min-[1200px]:left-[15%] min-[1350px]:left-[18%] min-[1024px]:w-[500px] min-[1024px]:h-[400px] min-[1530px]:w-[620px] min-[1530px]:h-[500px] min-[1700px]:w-[35%] min-[1700px]:h-[29vw]'>
          <AnimatedText
            text={heroSpeechText}
            delay={0.6}
            staggerDelay={0.15}
            className={`absolute text-amber-950 font-intro font-semibold lg:text-4xl lg:max-w-[360px] leading-tight tracking-wide text-center px-6 py-6 ${heroSpeechTextClassesByLocale}`}
          />
        </div>

        {/* Scroll to Products Button */}
        <AnimatePresence>
          {showScrollButton && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 1 }}
              className='hidden lg:block absolute bottom-24 right-4'>
              <motion.button
                onClick={scrollToProducts}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className='cursor-pointer bg-genie-light-blue/90 backdrop-blur-sm text-secondary px-5 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 font-intro font-bold text-lg border-2 border-genie-green/20 hover:border-genie-green/40'>
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
      <div className='h-16 absolute relative z-1 top-[-1px] w-full overflow-hidden'>
        <picture className='absolute inset-0 block w-full h-full'>
          <source
            media='(min-width: 1024px)'
            srcSet='/images/cover-extension.jpg'
          />
          <source
            media='(min-width: 640px)'
            srcSet='/images/cover-extension.jpg'
          />
          <img
            src='/images/cover-extension.jpg'
            alt=''
            className='w-full h-full object-cover'
            style={{ objectPosition: 'center bottom' }}
            loading='lazy'
          />
        </picture>
      </div>
      <div className='relative -mt-12'>
        <div className='absolute -mt-4 h-20 w-full bg-secondary' />
        <div
          className='h-16 absolute relative w-full overflow-hidden bg-cover bg-center bg-no-repeat'
          style={{
            backgroundImage: 'url(/images/cover-extension.jpg)',
            backgroundPosition: 'center bottom',
          }}
        />
        <div className='absolute h-4 w-full bg-secondary' />
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
          className='h-16 absolute bg-tertiary relative'
          style={{
            clipPath: 'polygon(0 101%, 0 0, 101% 101%)',
          }}></div>
        <About />
        <div
          className='h-16 absolute bg-tertiary relative z-1 top-[-1px]'
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
    </>
  );
}

export default function Home() {
  return (
    <>
      <div
        className={`${blugie.variable} ${montserrat.variable} ${poppins.variable} ${intro.variable} font-sans`}>
        <Header />
        <main className='min-h-screen bg-white'>
          <ProductModalProvider>
            <HomeContent />
          </ProductModalProvider>
        </main>
      </div>
    </>
  );
}
