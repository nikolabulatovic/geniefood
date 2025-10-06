import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

type ProductFiltersProps = {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
};

const ProductFilters = ({
  activeFilter,
  onFilterChange,
}: ProductFiltersProps) => {
  const t = useTranslations('products');

  const categories = [
    { id: '', label: 'categories.all' },
    { id: '57', label: 'categories.foodAdditives' },
    { id: '63', label: 'categories.macrobiotics' },
    { id: '68', label: 'categories.gourmet' },
    { id: '3755', label: 'categories.delicatessen' },
    { id: '3756', label: 'categories.spreads' },
    { id: '3757', label: 'categories.butters' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className='site-filters clearfix center m-b40 filter-dark wow fadeIn'>
      <ul
        className='filters flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-8'
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
              className={`relative block px-8 py-3 font-intro text-xl font-bold hover:shadow-[0_0_7px_2px_rgba(0,0,0,0.1)] transition-all duration-300 transform rounded-md hover:-translate-y-1 hover:scale-105 focus:outline-none active:scale-95 overflow-hidden ${
                activeFilter === category.id ? 'bg-genie-green text-white' : ''
              }`}
              whileHover={{ scale: 1.12, rotate: -3 }}
              whileTap={{ scale: 0.98, rotate: 2 }}>
              <span className='relative z-10 text-white transition-colors duration-300'>
                {t(category.label)}
              </span>
              <span className='absolute inset-0 z-0 bg-genie-green scale-0 group-hover:scale-100 transition-transform duration-300 ease-out'></span>
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
