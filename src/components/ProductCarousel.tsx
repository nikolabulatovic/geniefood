import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';
import useWindowWidth from '@/hooks/useWindowWidth';

import ProductCard from './ProductCard';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

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

interface ProductCarouselProps {
  products: Product[];
}

const getSlidesPerView = (windowWidth: number) => {
  if (windowWidth < 320) {
    return 1;
  }
  if (windowWidth < 768) {
    return 2;
  }
  if (windowWidth < 1024) {
    return 3;
  }
  if (windowWidth < 1540) {
    return 4;
  }
  return 4;
};

const ProductCarousel = ({ products }: ProductCarouselProps) => {
  const windowWidth = useWindowWidth();

  let slidesPerView = Math.min(products.length, getSlidesPerView(windowWidth));

  if (products.length === slidesPerView + 1) {
    slidesPerView -= 1;
  }

  const isSliderNecessary = products.length > slidesPerView;

  const navigation = isSliderNecessary;
  const pagination = isSliderNecessary
    ? {
        clickable: true,
      }
    : false;
  const centeredSlides = isSliderNecessary;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className='w-full py-12 relative'>
      {/* Custom navigation buttons */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        effect='coverflow'
        grabCursor={true}
        centeredSlides={centeredSlides}
        slidesPerView={slidesPerView}
        slidesPerGroup={1}
        initialSlide={0}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 1.5,
          slideShadows: false,
        }}
        pagination={pagination}
        navigation={navigation}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        className='w-full h-full !pb-16'>
        {products.map((product, index) => (
          <SwiperSlide
            key={index}
            className='w-full h-[400px] !flex items-center justify-center'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className='w-full h-full transform transition-all duration-500 rounded-xl overflow-hidden'>
              <ProductCard {...product} />
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom styles for Swiper */}
      <style jsx global>{`
        .swiper-pagination {
          bottom: 0;
        }
        .swiper-pagination-bullet-active {
          background: theme('colors.genie-green');
          transform: scale(1.2);
        }
        .swiper-button-disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .swiper-button-prev,
        .swiper-button-next {
          font-size: 1.2rem;
          font-weight: bold;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
        }

        .swiper-button-prev:after,
        .swiper-button-next:after {
          font-size: 1.2rem;
          font-weight: bold;
        }
      `}</style>
    </motion.div>
  );
};

export default ProductCarousel;
