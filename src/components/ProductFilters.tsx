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

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className='site-filters clearfix center m-b40 filter-dark wow fadeIn'>
      <ul
        className='filters flex flex-wrap justify-center gap-2 md:gap-3 lg:gap-8'
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
              className={`relative cursor-pointer block sm:px-2 md:px-4 lg:px-6 py-2 md:py-3 font-intro text-xl font-bold hover:shadow-[0_0_7px_2px_rgba(0,0,0,0.1)] transition-all duration-300 transform rounded-md hover:-translate-y-1 hover:scale-105 focus:outline-none active:scale-95 overflow-hidden ${
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
