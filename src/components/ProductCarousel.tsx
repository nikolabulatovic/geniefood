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
  activeFilter: string;
}

const getSlidesPerView = (windowWidth: number) => {
  if (windowWidth < 500) {
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

const ProductCarousel = ({ products, activeFilter }: ProductCarouselProps) => {
  const windowWidth = useWindowWidth();

  const filteredProducts = activeFilter
    ? products.filter((product) => product.filter === activeFilter)
    : products;

  const maxSlidesPerView = getSlidesPerView(windowWidth);
  const slidesPerView = Math.min(filteredProducts.length, maxSlidesPerView);

  const isSliderNecessary = filteredProducts.length > maxSlidesPerView;
  const isAllFilter = !activeFilter; // When activeFilter is empty, show all products

  const navigation = isSliderNecessary;
  const pagination = isSliderNecessary
    ? {
        dynamicBullets: true,
        dynamicMainBullets: 5,
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
      {isAllFilter ? (
        /* Grid layout for "All" filter */
        <div className='grid gap-8 justify-items-center max-w-7xl mx-auto px-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className='w-full max-w-[300px] transform transition-all duration-500 rounded-xl overflow-hidden list-none'>
              <ProductCard {...product} />
            </motion.div>
          ))}
        </div>
      ) : isSliderNecessary ? (
        /* Swiper for multiple products */
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          effect='coverflow'
          grabCursor={true}
          centeredSlides={centeredSlides}
          slidesPerView={slidesPerView}
          spaceBetween={30}
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
            delay: 500000,
            disableOnInteraction: false,
          }}
          className='w-full h-full !pb-16'>
          {filteredProducts.map((product) => (
            <SwiperSlide
              key={product.id}
              className='!flex items-center justify-center'>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className='w-full h-full transform transition-all duration-500 rounded-xl overflow-hidden'>
                <ProductCard {...product} />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        /* Simple flex container for few products */
        <div className='flex justify-center items-center gap-8 flex-wrap'>
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className='w-[300px] h-[400px] transform transition-all duration-500 rounded-xl overflow-hidden list-none'>
              <ProductCard {...product} />
            </motion.div>
          ))}
        </div>
      )}

      {/* Custom styles for Swiper */}
      <style jsx global>{`
        .swiper-pagination {
          bottom: 21px !important;
        }

        .swiper-pagination-bullet-active {
          background: var(--color-primary);
          transform: scale(1.2);
        }

        .swiper-button-disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .swiper-button-prev,
        .swiper-button-next {
          background: #41230388;
          color: var(--color-primary);
          font-size: 1.2rem;
          font-weight: bold;
          width: 2rem;
          height: 2rem;
          border-radius: 15%;
          box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
          position: absolute;
          top: 95%;
          z-index: 11;
        }

        .swiper-button-prev {
          left: 50px;
        }

        .swiper-button-next {
          right: 50px;
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
