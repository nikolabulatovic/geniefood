'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const currentLocale = pathname.split('/')[1];
  const t = useTranslations('header');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#about', label: t('nav.about') },
    { href: '#products', label: t('nav.products') },
    { href: '#gallery', label: t('nav.gallery') },
    { href: '#contact', label: t('nav.contact') },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-secondary/70 backdrop-blur-md shadow-lg'
          : 'bg-secondary'
      }`}>
      <div className='container mx-auto px-4'>
        <div className='flex items-center justify-between h-20'>
          {/* Logo */}
          <Link href='/' className='relative z-10'>
            <Image
              src='/assets/genie/images/logo-y.png'
              alt='Genie'
              width={120}
              height={40}
              className='transition-transform hover:scale-105'
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className='hidden md:flex items-center space-x-8'>
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className='text-primary hover:text-white transition-colors duration-300 font-medium'>
                {item.label}
              </Link>
            ))}
            <div className='flex items-center space-x-2 ml-4'>
              <Link
                href='/en'
                className={`px-2 py-1 rounded-md transition-colors duration-300 ${
                  currentLocale === 'en'
                    ? 'bg-primary text-secondary'
                    : 'text-primary hover:bg-primary/20'
                }`}>
                {t('languages.en')}
              </Link>
              <span className='text-primary'>|</span>
              <Link
                href='/sr'
                className={`px-2 py-1 rounded-md transition-colors duration-300 ${
                  currentLocale === 'sr'
                    ? 'bg-primary text-secondary'
                    : 'text-primary hover:bg-primary/20'
                }`}>
                {t('languages.sr')}
              </Link>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className='md:hidden relative z-10 p-2 text-primary hover:text-white transition-colors'>
            <div className='w-6 h-5 flex flex-col justify-between'>
              <span
                className={`w-full h-0.5 bg-current transform transition-all duration-300 ${
                  isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              />
              <span
                className={`w-full h-0.5 bg-current transition-all duration-300 ${
                  isMobileMenuOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`w-full h-0.5 bg-current transform transition-all duration-300 ${
                  isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className='md:hidden absolute top-0 left-0 right-0 bg-secondary/95 backdrop-blur-md shadow-lg'>
            <div className='container mx-auto px-4 py-20'>
              <nav className='flex flex-col space-y-6'>
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className='text-primary hover:text-white transition-colors duration-300 text-lg font-medium'>
                    {item.label}
                  </Link>
                ))}
                <div className='flex items-center space-x-4 pt-4 border-t border-primary/20'>
                  <Link
                    href='/en'
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`px-3 py-1 rounded-md transition-colors duration-300 ${
                      currentLocale === 'en'
                        ? 'bg-primary text-secondary'
                        : 'text-primary hover:bg-primary/20'
                    }`}>
                    {t('languages.en')}
                  </Link>
                  <span className='text-primary'>|</span>
                  <Link
                    href='/sr'
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`px-3 py-1 rounded-md transition-colors duration-300 ${
                      currentLocale === 'sr'
                        ? 'bg-primary text-secondary'
                        : 'text-primary hover:bg-primary/20'
                    }`}>
                    {t('languages.sr')}
                  </Link>
                </div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
