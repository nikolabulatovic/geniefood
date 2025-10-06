'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';
import NavLink from './NavLink';
import LanguageLink from './LanguageLink';

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
    { href: '#products', label: t('nav.products') },
    { href: '#about', label: t('nav.about') },
    { href: '#contact', label: t('nav.contact') },
  ];

  return (
    <>
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
                <NavLink
                  key={item.href}
                  href={item.href}
                  label={item.label}
                  className='text-lg'
                />
              ))}
              <div className='flex items-center space-x-2 ml-4'>
                <LanguageLink
                  href='/sr'
                  label={t('languages.sr')}
                  isActive={currentLocale === 'sr'}
                />
                <span className='text-primary'>|</span>
                <LanguageLink
                  href='/en'
                  label={t('languages.en')}
                  isActive={currentLocale === 'en'}
                />
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
                    <NavLink
                      key={item.href}
                      href={item.href}
                      label={item.label}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className='text-lg'
                    />
                  ))}
                  <div className='flex items-center space-x-4 pt-4 border-t border-primary/20'>
                    <LanguageLink
                      href='/sr'
                      label={t('languages.sr')}
                      isActive={currentLocale === 'sr'}
                      onClick={() => setIsMobileMenuOpen(false)}
                    />
                    <span className='text-primary'>|</span>
                    <LanguageLink
                      href='/en'
                      label={t('languages.en')}
                      isActive={currentLocale === 'en'}
                      onClick={() => setIsMobileMenuOpen(false)}
                    />
                  </div>
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
      <div className='h-20 bg-genie-light-blue'></div>
    </>
  );
};

export default Header;
