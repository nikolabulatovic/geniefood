import React, { useState } from 'react';
import Image from 'next/image';
import SectionHeading from './SectionHeading';
import { motion } from 'framer-motion';

const galleryImages = [
  '/images/galerija-1.jpg',
  '/images/galerija-2.jpg',
  '/images/galerija-3.jpg',
  '/images/galerija-4.jpg',
  '/images/galerija-5.jpg',
  '/images/galerija-6.jpg',
  '/images/galerija-7.jpg',
  '/images/galerija-8.jpg',
];

const Gallery = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section
      className='section-full content-inner bg-genie-salmon pt-2 pb-32'
      id='gallery'>
      <div className='container mx-auto px-4'>
        <div className='text-black mb-12'>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className='space-y-6'>
            <SectionHeading title='Galerija' />
          </motion.div>
          <motion.div
            className='max-w-6xl mx-auto'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}>
            <p className='text-2xl text-gray-700 leading-relaxed text-shadow-[0_0.1px_0.1px_#2a2a2ac2]'>
              Pogledajte naše fantastične proizvode i ukusne inovacije na bazi
              biljaka! Od različitih opcija za doručak, ručak ili večeru na
              biljnoj bazi, tu smo da vam pomognemo da pripremanje i
              konzumiranje kvalitetne hrane bude lako i prijatno.
            </p>
          </motion.div>
        </div>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 relative z-40'>
          <div
            className={`fixed inset-0 bg-genie-salmon/80 z-30 pointer-events-none transition-opacity duration-1000 ease-in-out ${
              hoveredIdx !== null ? 'opacity-100' : 'opacity-0'
            }`}
          />
          {galleryImages.map((src, idx) => (
            <div
              key={idx}
              className='relative rounded-[10rem] hover:rounded-lg hover:scale-125 transition-[scale,border-radius] duration-600 overflow-hidden shadow-lg bg-white group aspect-[1/1]'
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
              style={{ zIndex: hoveredIdx === idx ? 50 : -1 }}>
              <a
                href={src}
                target='_blank'
                rel='noopener noreferrer'
                className='relative'>
                <Image
                  src={src}
                  alt={`Gallery image ${idx + 1}`}
                  width={428}
                  height={338}
                  className='object-cover w-full h-full hover:scale-105 transition-transform duration-300'
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
