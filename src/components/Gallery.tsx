import Image from 'next/image';
import SectionHeading from './SectionHeading';
import { motion } from 'framer-motion';

const galleryImages = [
  '/images/tempeh-sirovi-sa-oblakom.png',
  '/images/tempeh-przeni-sa-oblakom.png',
  '/images/seitan-przeni-sa-oblakom.png',
  '/images/nutritivni-kvasac-sa-oblakom.png',
  '/images/tofu-dimljeni.png',
  '/images/humus-u-crevu.png',
  '/images/badem-puter.png',
];

const Gallery = () => {
  return (
    <section
      className='section-full content-inner bg-genie-salmon pt-2 pb-32'
      id='gallery'>
      <div className='container mx-auto px-4'>
        <div className='text-black mb-12'>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className='space-y-6'>
            <SectionHeading title='Galerija' />
          </motion.div>
          <motion.div
            className='max-w-6xl mx-auto'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}>
            <p className='text-2xl text-gray-700 leading-relaxed text-shadow-[0_0.1px_0.1px_#2a2a2ac2]'>
              Pogledajte naše fantastične proizvode i ukusne inovacije na bazi
              biljaka! Od različitih opcija za doručak, ručak ili večeru na
              biljnoj bazi, tu smo da vam pomognemo da pripremanje i
              konzumiranje kvalitetne hrane bude lako i prijatno.
            </p>
          </motion.div>
        </div>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
          {galleryImages.map((src, idx) => (
            <div
              key={idx}
              className='rounded-lg overflow-hidden shadow-lg bg-white'>
              <a href={src} target='_blank' rel='noopener noreferrer'>
                <Image
                  src={src}
                  alt={`Gallery image ${idx + 1}`}
                  width={428}
                  height={338}
                  className='object-cover w-full h-56 hover:scale-105 transition-transform duration-300'
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
