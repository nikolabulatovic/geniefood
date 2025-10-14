import React from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import GradientDot from '@/components/GradientDot';
import { Product } from '@/types/Product';
import { useTranslations } from 'next-intl';

const isSubItem = (key: keyof Product['nutritionalData']) => {
  return key === 'saturatedFats' || key === 'sugars';
};

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({
  product,
  isOpen,
  onClose,
}) => {
  const t = useTranslations('products');

  if (!product) return null;

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
                        Nutritivni benefiti
                      </h3>
                      <ul className='space-y-3'>
                        {product.benefits?.map((benefit, index) => (
                          <motion.li
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className='flex items-center text-gray-700 text-lg'>
                            <span className='w-2 h-2 bg-genie-green rounded-full mr-4 flex-shrink-0'></span>
                            {benefit}
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
                        {Object.entries(product.nutritionalData ?? {}).map(
                          ([key, value], index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, x: 20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 }}
                              className={`flex justify-between items-center py-2 px-4 rounded-lg transition-colors hover:bg-blue-50 ${
                                isSubItem(
                                  key as keyof Product['nutritionalData'],
                                )
                                  ? 'ml-6 border-l-2 border-genie-green bg-green-50'
                                  : 'bg-blue-50'
                              }`}>
                              <span
                                className={`text-gray-700 ${
                                  isSubItem(
                                    key as keyof Product['nutritionalData'],
                                  )
                                    ? 'text-sm'
                                    : 'font-semibold text-base'
                                }`}>
                                {t(`nutritionalData.${key}`)}
                              </span>
                              <span className='text-gray-800 font-bold text-lg'>
                                {value}
                              </span>
                            </motion.div>
                          ),
                        )}
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
