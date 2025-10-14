import Image from 'next/image';
import { motion } from 'framer-motion';
import { useProductModal } from '@/contexts/ProductModalContext';
import { Product } from '@/types/Product';

type ProductCardProps = Product;

const DEFAULT_SCALE = 75;

const breakTitle = (title: string) => {
  const lines = [];

  if (title.length > 32) {
    const lastSpace = title.lastIndexOf(' ', 24);

    lines.push(title.slice(0, lastSpace));
    lines.push(title.slice(lastSpace + 1));
  } else {
    lines.push(title);
  }

  return lines.map((line, index) => <div key={index}>{line}</div>);
};

const productScaleMap = {
  // nutritivni_kvasac: 175,
};

{
  /* tailwind-class: group-hover:scale-75 */
}

const ProductCard = ({
  id,
  productType,
  imageSrc,
  imageAlt,
  title,
  weight,
  description,
  benefits,
}: ProductCardProps) => {
  const { openModal } = useProductModal();

  const handleProductClick = () => {
    const product = {
      id,
      productType,
      imageSrc,
      imageAlt,
      title,
      weight,
      description,
      benefits,
    };

    openModal(product);
  };

  return (
    <motion.li
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      data-filter={productType}
      className='pt-4 relative'>
      <div className='text-lg text-secondary font-poppins font-semibold text-center absolute px-4 py-2 rounded-lg w-full -mt-4 mb-4'>
        {breakTitle(title)}
      </div>
      <div className='w-full h-full relative aspect-[4/4] px-8 group'>
        <div className='w-full h-full bg-[url(/images/rectangle-curved-stroke.png)] bg-contain bg-center bg-no-repeat max-w-[600px] p-[5.5%]'>
          <div className='mask-[url(/images/rectangle.png)] mask-contain mask-no-repeat mask-center bg-black/50 w-full h-full'>
            <div className='w-full h-full bg-size-[115%] bg-center bg-no-repeat bg-[url(/images/galerija-1.jpg)] opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
          </div>
        </div>
        <button
          onClick={handleProductClick}
          className='absolute top-0 left-0 w-full h-full flex items-center justify-center cursor-pointer'>
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
        </button>
      </div>
    </motion.li>
  );
};

export default ProductCard;
