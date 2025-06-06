'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id='about' className='min-h-screen bg-primary py-20'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-row lg:flex-col items-center'>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className='space-y-6'>
            <motion.h2
              className='text-2xl font-bold text-center my-6 flex items-center justify-center gap-4'
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}>
              <Image
                src='/images/sprout.png'
                alt='Sprout'
                width={40}
                height={40}
                className='w-8 h-8 md:w-10 md:h-10'
              />
              <span className='inline-block px-6 py-2'>O nama</span>
            </motion.h2>
            <motion.div
              className='space-y-4 text-secondary/90 text-lg'
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}>
              <p>
                GEN!E je novi brend kompanije Macrobiotic Prom koja na našem
                tržištu postoji više od 30 godina. Naša ideja je bila da
                ponudimo zdraviju alternativu proizvodima tradicionalne ishrane
                i pokažemo da je moguće hraniti se zdravo i istovremeno uživati
                u 100% biljnoj hrani.
              </p>
              <p>
                Verujemo da briga o planeti počinje na tanjiru zbog čega se u
                našoj &quot;kuhinji&quot; rađaju velike ideje, testiraju novi
                recepti, prikupljaju povratne informacije od kupaca i stvaraju
                sjajni, novi proizvodi. Kroz naše proizvode, želimo da unesemo
                raznolikost, inovacije i umetnost zdrave ishrane u našu ponudu.
              </p>
              <p>
                Svi naši proizvodi imaju prepoznatljiv ukus, napravljeni su po
                autentičnim receptima i tradicionalnim metodama. Želimo da
                pokažemo da raznovrsna i kvalitetna biljna ishrana nije samo
                stvar ukusa već i način na koji možemo da unapredimo svoje
                zdravlje.
              </p>
              <p>
                Naši proizvodi namenjeni su veganima, vegetarijancima,
                ljubiteljima mesa, ljubiteljima biljaka, skepticima i
                poklonicima biljne ishrane – svima koji žele da uživaju u
                zdravoj i ukusnoj hrani.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className='relative w-full aspect-[4/3] overflow-hidden shadow-2xl'>
            <Image
              src='https://geniefood.rs/var/site/storage/images/_aliases/w800/9/6/3/0/369-17-ser-SR/e33331c4e287-4.jpg'
              alt='O nama'
              fill
              className='object-cover hover:scale-105 transition-transform duration-700'
              sizes='(max-width: 768px) 100vw, 50vw'
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
