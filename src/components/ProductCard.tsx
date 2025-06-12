import Image from 'next/image';
import { motion } from 'framer-motion';

interface ProductCardProps {
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

const DEFAULT_SCALE = 75;

const productScaleMap = {
  // nutritivni_kvasac: 175,
};

{
  /* tailwind-class: group-hover:scale-75 */
}

const ProductCard = ({
  id,
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
      <div className='w-full h-full relative aspect-[4/4] px-8 group'>
        <div className='mask-[url(/images/cloud.png)] mask-contain mask-no-repeat mask-center bg-black/50 h-full max-w-[600px] mx-auto'>
          <div className='w-full h-full bg-contain bg-center bg-no-repeat bg-[url(/images/galerija-1.jpg)] opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
        </div>
        <a
          href='javascript:void(0);'
          className='absolute top-0 left-0 w-full h-full flex items-center justify-center'>
          <span className='relative h-1/2 w-1/2'>
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className={`transform group-hover:translate-y-35 group-hover:scale-${
                productScaleMap[id as keyof typeof productScaleMap] ??
                DEFAULT_SCALE
              } transition-transform duration-500 mx-auto`}
            />
          </span>
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
        <h6></h6>
      </div>
    </motion.li>
  );
};

export default ProductCard;
