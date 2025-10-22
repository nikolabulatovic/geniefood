import { useState, useEffect, useRef } from 'react';
import { useTranslation } from '@/contexts/I18nContext';
import { motion } from 'framer-motion';

import { ProductType } from '@/types/ProductType';

const categories = [
  { id: '', label: 'categories.all' },
  { id: ProductType.DODACI, label: 'categories.foodAdditives' },
  { id: ProductType.MAKROBIOTIKA, label: 'categories.macrobiotics' },
  { id: ProductType.DELIKATESI, label: 'categories.delicatessen' },
  { id: ProductType.NAMAZI, label: 'categories.spreads' },
  { id: ProductType.PUTERI, label: 'categories.butters' },
];

type ProductFiltersProps = {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
};

const ProductFilters = ({
  activeFilter,
  onFilterChange,
}: ProductFiltersProps) => {
  const { t } = useTranslation('products');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const activeCategory =
    categories.find((cat) => cat.id === activeFilter) || categories[0];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className='site-filters clearfix center m-b40 filter-dark wow fadeIn'>
      {/* Mobile Dropdown (< 768px) */}
      <div ref={dropdownRef} className='md:hidden relative max-w-xs mx-auto'>
        <motion.button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className='cursor-pointer w-full bg-primary/90 backdrop-blur-sm text-secondary px-4 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-between font-intro font-bold text-lg border-2 border-genie-green/20 hover:border-genie-green/40'
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}>
          <span>{t(activeCategory.label)}</span>
          <motion.span
            animate={{ rotate: isDropdownOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className='text-xl'>
            ⌄
          </motion.span>
        </motion.button>

        <motion.div
          initial={false}
          animate={{
            opacity: isDropdownOpen ? 1 : 0,
            height: isDropdownOpen ? 'auto' : 0,
            y: isDropdownOpen ? 0 : -10,
          }}
          transition={{ duration: 0.3 }}
          className='absolute top-full left-0 right-0 mt-2 bg-white/95 backdrop-blur-sm rounded-lg shadow-xl border border-genie-green/20 overflow-hidden z-50'>
          {categories.map((category, index) => (
            <motion.button
              key={category.id}
              onClick={() => {
                onFilterChange(category.id);
                setIsDropdownOpen(false);
              }}
              className={`cursor-pointer w-full text-left px-4 py-3 font-intro font-bold text-lg transition-all duration-300 hover:bg-genie-green/20 ${
                activeFilter === category.id
                  ? 'bg-primary text-secondary'
                  : 'text-gray-700'
              }`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}>
              {t(category.label)}
            </motion.button>
          ))}
        </motion.div>
      </div>

      {/* Desktop Button Layout (>= 768px) */}
      <ul
        className='hidden md:flex flex-wrap justify-center gap-2 md:gap-3 lg:gap-8'
        data-toggle='buttons'>
        {categories.map((category, index) => (
          <motion.li
            key={category.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            data-filter={category.id}
            className='group'>
            <input type='radio' className='hidden' />
            <motion.button
              onClick={() => onFilterChange(category.id)}
              className={`relative cursor-pointer block sm:px-2 md:px-4 lg:px-6 py-2 md:py-3 font-intro text-lg lg:text-xl font-bold hover:shadow-[0_0_7px_2px_rgba(0,0,0,0.1)] transition-all duration-300 transform rounded-md hover:-translate-y-1 hover:scale-105 focus:outline-none active:scale-95 overflow-hidden ${
                activeFilter === category.id
                  ? 'bg-primary text-secondary'
                  : 'text-white'
              }`}
              whileHover={{ scale: 1.12, rotate: -3 }}
              whileTap={{ scale: 0.98, rotate: 2 }}>
              <span className='relative z-10 transition-colors duration-300'>
                {t(category.label)}
              </span>
              <span
                className={`absolute inset-0 z-0 scale-0 group-hover:scale-100 transition-transform transition duration-300 ease-out ${
                  activeFilter !== category.id ? 'bg-genie-green' : 'bg-primary'
                }`}></span>
            </motion.button>
          </motion.li>
        ))}
      </ul>

      <style jsx>{`
        .filters li .group:hover .z-10 {
          color: white !important;
        }
        .filters li .group:hover .bg-genie-green {
          opacity: 1;
        }
        .filters li .bg-genie-green {
          opacity: 0.9;
        }
      `}</style>
    </motion.div>
  );
};

export default ProductFilters;
