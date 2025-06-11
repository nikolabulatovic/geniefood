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

const DEFAULT_SCALE = 135;

const productScaleMap = {
  nutritivni_kvasac: 175,
};

{
  /* tailwind-class: hover:scale-135 hover:scale-175 */
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
      data-filter={filter}
      // style={{
      //   backgroundImage: "url('/images/vertical-thought-bubble.png')",
      //   backgroundSize: 'contain',
      //   backgroundPosition: 'center',
      //   backgroundRepeat: 'no-repeat',
      // }}
      className='max-w-[600px] mx-auto'>
      <div className='w-full h-full aspect-[4/4]'>
        <a
          href='javascript:void(0);'
          className='flex items-center justify-center h-full'>
          <span className='relative h-3/4 w-3/4'>
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className={`transform hover:scale-${
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
