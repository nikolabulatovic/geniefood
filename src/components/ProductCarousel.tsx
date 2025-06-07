import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Navigation,
  Pagination,
  Autoplay,
  EffectCoverflow,
} from 'swiper/modules';
import { motion } from 'framer-motion';
import ProductCard from './ProductCard';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

interface Product {
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

const ProductCarousel = ({ products }: ProductCarouselProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className='w-full py-12 relative'>
      {/* Custom navigation buttons */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
        effect='coverflow'
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={1}
        slidesPerGroup={1}
        initialSlide={1}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 1.5,
          slideShadows: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          // Mobile (default)
          320: {
            slidesPerView: 1,
            spaceBetween: 40,
          },
          // Tablet
          768: {
            slidesPerView: 2,
            spaceBetween: 60,
          },
          // Laptop
          1024: {
            slidesPerView: 3,
            spaceBetween: 80,
          },
        }}
        className='w-full h-[600px] !pb-16'>
        {products.map((product, index) => (
          <SwiperSlide
            key={index}
            className='w-full h-[400px] !flex items-center justify-center'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className='w-full h-full transform transition-all duration-500 hover:scale-105 hover:shadow-2xl rounded-xl overflow-hidden bg-white'>
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
          background: white;
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
