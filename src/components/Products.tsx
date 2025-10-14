import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import ProductFilters from './ProductFilters';
import ProductViewMode from './ProductViewMode';
import SectionHeading from './SectionHeading';
import ProductCarousel from './ProductCarousel';
import { Product } from '@/types/Product';

import productsSr from '@/data/products-sr.json';
import productsEn from '@/data/products-en.json';

const getProductsData = (locale: string): Product[] => {
  return locale === 'sr'
    ? (productsSr.products as Product[])
    : (productsEn.products as Product[]);
};

const Products = () => {
  const t = useTranslations('products');
  const locale = useLocale();
  const [activeFilter, setActiveFilter] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('list');

  const products = getProductsData(locale);

  return (
    <section
      className='section-full content-inner bg-genie-green'
      id='products'
      style={{
        background:
          'linear-gradient(180deg, #93b184 0%, var(--color-genie-green) 100%)',
      }}>
      <div className='container-fluid pt-2 pb-32'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className='flex flex-col justify-center items-center section-head text-black mb-16'>
          <SectionHeading title={t('title')} />
          <motion.div
            className='bg-primary mx-auto mb-8'
            initial={{ width: 0 }}
            whileInView={{ width: '100px' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          <motion.div
            className='max-w-6xl mx-auto'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}>
            <p className='text-2xl text-gray-700 text-center leading-relaxed text-shadow-[0_0.1px_0.1px_#2a2a2ac2]'>
              {t('description')}
            </p>
          </motion.div>
        </motion.div>

        <ProductViewMode viewMode={viewMode} onViewModeChange={setViewMode} />

        <ProductFilters
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
        />

        <ProductCarousel
          products={products}
          activeFilter={activeFilter}
          viewMode={viewMode}
        />
      </div>
      {/* <div className='container w-128 border-b border-secondary/30 mx-auto' /> */}
    </section>
  );
};

export default Products;
