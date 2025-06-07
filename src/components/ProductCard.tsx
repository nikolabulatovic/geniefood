import Image from 'next/image';
import { motion } from 'framer-motion';

interface ProductCardProps {
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

const ProductCard = ({
  filter,
  imageSrc,
  imageAlt,
  title,
  description,
}: ProductCardProps) => {
  return (
    <motion.li
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      data-filter={filter}>
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ type: 'spring', stiffness: 300 }}>
        <div>
          <a href='javascript:void(0);' className='block'>
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={500}
              height={500}
              className='transform hover:scale-110 transition-transform duration-500'
            />
          </a>
          <motion.a
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            data-fancybox='products'
            data-src={imageSrc}
            data-caption={description}>
            <span className='text-lg font-semibold'>{title}</span>
          </motion.a>
        </div>
        <div className='p-4'>
          <motion.h5 whileHover={{ scale: 1.05 }}>{title}</motion.h5>
          <h6></h6>
        </div>
      </motion.div>
    </motion.li>
  );
};

export default ProductCard;
