import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

const ProductFilters = () => {
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
        className='filters flex flex-wrap justify-center gap-4'
        data-toggle='buttons'>
        {categories.map((category, index) => (
          <motion.li
            key={category.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            data-filter={category.id}
            className='btn group'>
            <input type='radio' className='hidden' />
            <motion.a
              href='#'
              className='block px-6 py-3 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}>
              <span className='text-gray-700 group-hover:text-primary font-medium transition-colors duration-300'>
                {t(category.label)}
              </span>
            </motion.a>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

export default ProductFilters;
