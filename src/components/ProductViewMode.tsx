import { motion } from 'framer-motion';
import { useTranslation } from '@/contexts/I18nContext';

interface ProductViewModeProps {
  viewMode: 'grid' | 'list';
  onViewModeChange: (mode: 'grid' | 'list') => void;
}

const ProductViewMode = ({
  viewMode,
  onViewModeChange,
}: ProductViewModeProps) => {
  const { t } = useTranslation('products');

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className='flex justify-center items-center gap-4 mb-12'>
      <span className='text-lg text-gray-700 font-bold'>{t('viewMode')}:</span>
      <button
        onClick={() => onViewModeChange('list')}
        className={`cursor-pointer px-3 py-2 font-intro text-lg font-bold transition-all duration-300 transform rounded-md hover:shadow-[0_0_7px_2px_rgba(0,0,0,0.1)] hover:-translate-y-1 hover:scale-105 focus:outline-none active:scale-95 ${
          viewMode === 'list'
            ? 'bg-white/25 text-white'
            : 'text-white hover:bg-genie-green'
        }`}>
        {t('viewModeList')}
      </button>
      <button
        onClick={() => onViewModeChange('grid')}
        className={`cursor-pointer px-3 py-2 font-intro text-lg font-bold transition-all duration-300 transform rounded-md hover:shadow-[0_0_7px_2px_rgba(0,0,0,0.1)] hover:-translate-y-1 hover:scale-105 focus:outline-none active:scale-95 ${
          viewMode === 'grid'
            ? 'bg-white/25 text-white'
            : 'text-white hover:bg-genie-green'
        }`}>
        {t('viewModeGrid')}
      </button>
    </motion.div>
  );
};

export default ProductViewMode;
