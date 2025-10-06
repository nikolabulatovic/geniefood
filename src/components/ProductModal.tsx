import React from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import GradientDot from '@/components/GradientDot';

interface Product {
  id: string;
  filter: string;
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  position: {
    left: string;
    top: string;
  };
}

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

type NutritionalData = {
  label: string;
  value: string;
  isSubItem?: boolean;
};

// Sample nutritional data - you can make this dynamic later
const getNutritionalData = (productId: string): NutritionalData[] => {
  const nutritionalData = {
    'tempeh-sirovi': [
      { label: 'Energija', value: '607kcal (2536kJ)' },
      { label: 'Masti', value: '' },
      { label: 'Zasićene masne kiseline', value: '4,28g', isSubItem: true },
      { label: 'Ugljeni hidrati', value: '16,68g' },
      { label: 'Šećeri', value: '4,55g', isSubItem: true },
      { label: 'Vlakna', value: '10,50g' },
      { label: 'Proteini', value: '21,23g' },
      { label: 'So', value: '0,05g' },
    ],
    'nutritivni-kvasac': [
      { label: 'Energija', value: '350kcal (1464kJ)' },
      { label: 'Masti', value: '4,2g' },
      { label: 'Ugljeni hidrati', value: '28,5g' },
      { label: 'Vlakna', value: '18,0g' },
      { label: 'Proteini', value: '45,0g' },
      { label: 'So', value: '0,1g' },
      { label: 'Vitamin B12', value: '2,4μg' },
      { label: 'Folna kiselina', value: '200μg' },
    ],
    default: [
      { label: 'Energija', value: '450kcal (1883kJ)' },
      { label: 'Masti', value: '12,5g' },
      { label: 'Ugljeni hidrati', value: '35,2g' },
      { label: 'Vlakna', value: '8,1g' },
      { label: 'Proteini', value: '18,7g' },
      { label: 'So', value: '0,3g' },
    ],
  };

  return (
    nutritionalData[productId as keyof typeof nutritionalData] ||
    nutritionalData.default
  );
};

// Sample ingredient data
const getIngredients = (productId: string) => {
  const ingredients = {
    'tempeh-sirovi': ['Soja', 'Voda', 'Kvasac', 'Prirodni konzervans'],
    'tempeh-przeni': [
      'Soja',
      'Voda',
      'Kvasac',
      'Prirodni konzervans',
      'Začini',
    ],
    'seitan-przeni': [
      'Pšenični gluten',
      'Voda',
      'Začini',
      'Prirodni konzervans',
    ],
    'nutritivni-kvasac': [
      'Kvasac',
      'Prirodni konzervans',
      'Vitamin B12',
      'Folna kiselina',
    ],
    default: ['Prirodni sastojci', 'Bez konzervansa', 'Organski proizvod'],
  };

  return (
    ingredients[productId as keyof typeof ingredients] || ingredients.default
  );
};

const ProductModal: React.FC<ProductModalProps> = ({
  product,
  isOpen,
  onClose,
}) => {
  if (!product) return null;

  const nutritionalData = getNutritionalData(product.id);
  const ingredients = getIngredients(product.id);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Full Screen Backdrop with Blur */}
          <motion.div
            initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            animate={{ opacity: 1, backdropFilter: 'blur(8px)' }}
            exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            transition={{ duration: 0.4 }}
            className='fixed inset-0 bg-black/70 z-[9999] flex items-center justify-center p-4'
            onClick={onClose}>
            {/* Modal Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.7, y: 100 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.7, y: 100 }}
              transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              className='relative rounded-3xl shadow-2xl max-w-5xl w-full max-h-[95vh] overflow-hidden border border-blue-300'
              style={{
                background:
                  'linear-gradient(to right, #adc9d5, #b8d1dc, #c3d9e3, #adc9d5)',
              }}
              onClick={(e) => e.stopPropagation()}>
              {/* Close Button */}
              <button
                onClick={onClose}
                className='absolute top-6 right-6 z-10 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110 group'>
                <svg
                  className='w-6 h-6 text-gray-600 group-hover:text-gray-800 transition-colors'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M6 18L18 6M6 6l12 12'
                  />
                </svg>
              </button>

              {/* Scrollable Content */}
              <div className='relative overflow-y-auto max-h-[95vh]'>
                {/* Header with Product Image */}
                <div className='relative pt-8 pb-6 px-8'>
                  <div className='flex flex-col lg:flex-row gap-8 items-center'>
                    {/* Product Image */}
                    <div className='relative w-full lg:w-80 h-64 lg:h-80'>
                      <div className='absolute inset-0 bg-blue-200 rounded-2xl blur-sm'></div>
                      <div className='relative w-full h-full bg-white rounded-2xl shadow-xl p-6 flex items-center justify-center border border-blue-200'>
                        <Image
                          src={product.imageSrc}
                          alt={product.imageAlt}
                          width={200}
                          height={200}
                          className='object-contain max-w-full max-h-full'
                        />
                      </div>
                    </div>

                    {/* Product Info */}
                    <div className='flex-1 text-center lg:text-left'>
                      <h2
                        className='text-4xl lg:text-5xl font-bold pb-4'
                        style={{
                          // background:
                          //   'linear-gradient(to right, #f1dbaa,rgb(242, 216, 167),rgb(243, 219, 168), #f1dbaa)',
                          // WebkitBackgroundClip: 'text',
                          // WebkitTextFillColor: 'transparent',
                          // backgroundClip: 'text',
                          // filter: 'drop-shadow(1.5px 1.5px 1px #000000)',
                          color: 'var(--color-secondary)',
                          fontFamily: 'var(--font-poppins)',
                          fontWeight: '600',
                        }}>
                        {product.title}
                      </h2>

                      {/* Description */}
                      <div className='mb-6'>
                        <h3 className='text-xl font-semibold text-gray-800 mb-3 flex items-center'>
                          <GradientDot
                            fromColor='from-primary'
                            toColor='to-tertiary'
                            className='mr-3'
                          />
                          Opis
                        </h3>
                        <p className='text-gray-700 leading-relaxed text-lg'>
                          {product.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Grid */}
                <div className='px-8 pb-8'>
                  <div className='grid lg:grid-cols-2 gap-8'>
                    {/* Ingredients */}
                    <div className='bg-genie-green/60 rounded-2xl p-6 shadow-lg border border-blue-200'>
                      <h3 className='text-2xl font-bold text-gray-800 mb-6 flex items-center'>
                        <GradientDot
                          fromColor='from-primary'
                          toColor='to-tertiary'
                          className='mr-3'
                        />
                        Sastojci
                      </h3>
                      <ul className='space-y-3'>
                        {ingredients.map((ingredient, index) => (
                          <motion.li
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className='flex items-center text-gray-700 text-lg'>
                            <span className='w-2 h-2 bg-genie-green rounded-full mr-4 flex-shrink-0'></span>
                            {ingredient}
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Nutritional Table */}
                    <div className='bg-genie-green/60 rounded-2xl p-6 shadow-lg border border-blue-200'>
                      <h3 className='text-2xl font-bold text-gray-800 mb-6 flex items-center'>
                        <GradientDot
                          fromColor='from-primary'
                          toColor='to-tertiary'
                          className='mr-3'
                        />
                        Nutritivne vrednosti
                      </h3>
                      <div className='space-y-3'>
                        {nutritionalData.map((item, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className={`flex justify-between items-center py-3 px-4 rounded-lg transition-colors hover:bg-blue-50 ${
                              item.isSubItem
                                ? 'ml-6 border-l-2 border-genie-green bg-green-50'
                                : 'bg-blue-50'
                            }`}>
                            <span
                              className={`text-gray-700 ${
                                item.isSubItem
                                  ? 'text-sm'
                                  : 'font-semibold text-base'
                              }`}>
                              {item.label}
                            </span>
                            <span className='text-gray-800 font-bold text-lg'>
                              {item.value}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProductModal;
