import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import ProductFilters from './ProductFilters';
import SectionHeading from './SectionHeading';
import ProductCarousel from './ProductCarousel';

const Products = () => {
  const t = useTranslations('products');
  const [activeFilter, setActiveFilter] = useState('');

  const products = [
    {
      id: 'nutritivni_kvasac',
      filter: '57',
      imageSrc: '/images/nutritivni-kvasac.png',
      imageAlt: 'Nutritivni kvasac u ljuspicama - 200g',
      title: 'Nutritivni kvasac u ljuspicama - 200g',
      description:
        'Jedinstvenog ukusa koji podseća na sir, nutritivni kvasac je odličan izvor vitamina i minerala. Ne sadrži gluten, a bogat je proteinima, selenom, cinkom, folnom kiselinom i vitaminima B grupe. Sadrži svih devet esencijalnih aminokiselina što ga čini kompletnim proteinom. Koristi se kao dodatak supama, testeninama, sendvičima, salatama, varivima, a može se koristiti i za izradu veganskog sira.',
      descriptionOld:
        '<p>Jedinstvenog ukusa koji podseća na sir, nutritivni kvasac je odličan izvor vitamina i minerala. Ne sadrži gluten, a bogat je proteinima, selenom, cinkom, folnom kiselinom i vitaminima B grupe. Sadrži svih devet esencijalnih aminokiselina što ga čini kompletnim proteinom. Koristi se kao dodatak supama, testeninama, sendvičima, salatama, varivima, a može se koristiti i za izradu veganskog sira.</p><table><tbody><tr><td>Nutritivne vrednosti:</td><td>Na 100g</td></tr><tr><td>Energija</td><td>1081kJ / 428 kcal</td></tr><tr><td>Masti</td><td>4,2g</td></tr><tr><td><ul><li>Zasićene masne kiseline</li></ul></td><td>0,6g</td></tr><tr><td>Ugljeni hidrati</td><td>40,2g</td></tr><tr><td><ul><li>Šećeri</li></ul></td><td>15,6g</td></tr><tr><td>Vlakna</td><td>27,1g</td></tr><tr><td>Proteini</td><td>46,5 g</td></tr><tr><td>So</td><td>0,036g</td></tr><tr><td>Tiamin (B1)</td><td>37,1mg</td></tr><tr><td>Riboflavin (B2)</td><td>27,1mg</td></tr><tr><td>Niacin (B3)</td><td>339,6mg</td></tr><tr><td>Pantotenska kiselina (B5)</td><td>185,3mg</td></tr><tr><td>Piridoksin (B6)</td><td>49,2mg</td></tr><tr><td>Biotin (B7)</td><td>273,5mcg</td></tr><tr><td>Folna kiselina (B9)</td><td>6,3mg</td></tr><tr><td>Kobalamin (B12)</td><td>36mcg</td></tr></tbody></table>',
      position: { left: '0px', top: '0px' },
    },
    {
      id: 'tempeh_przeni',
      filter: '63',
      imageSrc: '/images/tempeh-przeni.png',
      imageAlt: 'Prženi tempeh – 200g',
      title: 'Prženi tempeh – 200g',
      description:
        'Proizvod dobijen fermentacijom termički obrađene soje uz dodatak specijalne vrste plesni. Velike nutritivne i energetske vrednosti. Jedan od retkih proizvoda biljnog porekla koji sadrži vitamin B12. Odličan prilog jelima od povrća jer povećava biološku vrednost obroka i daje dugotrajan osećaj sitosti. Idealna zamena za meso.',
      descriptionOld:
        '<p style="text-align:justify;">Proizvod dobijen fermentacijom termički obrađene soje uz dodatak specijalne vrste plesni. Velike nutritivne i energetske vrednosti. Jedan od retkih proizvoda biljnog porekla koji sadrži vitamin B12. Odličan prilog jelima od povrća jer povećava biološku vrednost obroka i daje dugotrajan osećaj sitosti. Idealna zamena za meso.&nbsp;</p><p style="text-align:justify;"><strong>Sastav</strong>: soja 98%, nehidrogenizovano biljno ulje (suncokret), starter kultura (Rhizopus Oligosporus), morska so.</p><table><tbody><tr><td>Nutritivne vrednosti:</td><td>Na 100g</td></tr><tr><td>Energija</td><td>185kcal (774kJ)</td></tr><tr><td>Masti</td><td>8,0g</td></tr><tr><td><ul><li>Zasićene masne kiseline</li></ul></td><td>0,9g</td></tr><tr><td>Ugljeni hidrati</td><td>25,7g</td></tr><tr><td><ul><li>Šećeri</li></ul></td><td><0,5g</td></tr><tr><td>Vlakna</td><td>1,2g</td></tr><tr><td>Proteini</td><td>19,7g</td></tr><tr><td>So</td><td>0,74g</td></tr></tbody></table>',
      position: { left: '496px', top: '0px' },
    },
    {
      id: 'seitan_przeni',
      filter: '63',
      imageSrc: '/images/seitan-przeni.png',
      imageAlt: 'Seitan prženi – 180g',
      title: 'Seitan prženi – 180g',
      description:
        'Seitan je jelo od pšeničnog proteina bogato kalcijumom, vitaminima B grupe i proteinima (33%). Radi se o pšeničnom glutenu koji u prehrani gotovo u celosti može nadomestiti potrebu za mesom. Jela sa sejtanom se pripremaju na isti način kao i jela s mesom. Može se koristiti kao dodatak jelima od povrća ili zamena za šnicle od mesa.',
      descriptionOld:
        '<p style="text-align:justify;">Seitan je jelo od pšeničnog proteina bogato kalcijumom, vitaminima B grupe i proteinima (33%). Radi se o pšeničnom glutenu koji u prehrani gotovo u celosti može nadomestiti potrebu za mesom. Jela sa sejtanom se pripremaju na isti način kao i jela s mesom. Može se koristiti kao dodatak jelima od povrća ili zamena za šnicle od mesa.</p><p style="text-align:justify;"><strong>Sastav</strong>: Voda, pšenični gluten, pšenično brašno, morska so, mešavina začina, nehidrogenizovano biljno ulje (suncokret)</p><table><tbody><tr><td>Nutritivne vrednosti:</td><td>Na 100g</td></tr><tr><td>Energija</td><td>221kcal (928kJ)</td></tr><tr><td>Masti</td><td>4,8g</td></tr><tr><td><ul><li>Zasićene masne kiseline</li></ul></td><td>0,2g</td></tr><tr><td>Ugljeni hidrati</td><td>13,1g</td></tr><tr><td><ul><li>Šećeri</li></ul></td><td>0,3g</td></tr><tr><td>Vlakna</td><td>0,9g</td></tr><tr><td>Proteini</td><td>33,4g</td></tr><tr><td>So</td><td>0,9g</td></tr></tbody></table>',
      position: { left: '993px', top: '0px' },
    },
    {
      id: 'tempeh_sirovi',
      filter: '63',
      imageSrc: '/images/tempeh-sirovi.png',
      imageAlt: 'Tempeh 200g',
      title: 'Tempeh 200g',
      description:
        'Tempeh јe izuzetno hranljiv i ukusan proteinski proizvod od fermentisanih sojinih zrna koji brzo daje osećaj sitosti. Odličan izbor za osobe koje nameravaju da smanje ili prekinu unos namirnica životinjskog porekla. Služi se uz povrće i žitarice ili kao dodatak sendvičima. Može se pržiti ili dodavati jelima koja se kuvaju ili dinstaju. Jedan od retkih proizvoda biljnog porekla koji sadrži vitamin B12.',
      descriptionOld:
        '<p style="text-align:justify;">Tempeh јe izuzetno hranljiv i ukusan proteinski proizvod od fermentisanih sojinih zrna koji brzo daje osećaj sitosti. Odličan izbor za osobe koje nameravaju da smanje ili prekinu unos namirnica životinjskog porekla. Služi se uz povrće i žitarice ili kao dodatak sendvičima. Može se pržiti ili dodavati jelima koja se kuvaju ili dinstaju. Jedan od retkih proizvoda biljnog porekla koji sadrži vitamin B12.</p><p style="text-align:justify;"><strong>Sastav</strong>: soja 98%, starter kultura (Rhizopus Oligosporus).</p><table><tbody><tr><td>Nutritivne vrednosti:</td><td>Na 100g</td></tr><tr><td>Energija</td><td>203kcal (852kJ)</td></tr><tr><td>Masti</td><td>9,2g</td></tr><tr><td><ul><li>Zasićene masne kiseline</li></ul></td><td>0,6g</td></tr><tr><td>Ugljeni hidrati</td><td>11,9g</td></tr><tr><td><ul><li>Šećeri</li></ul></td><td>2,1g</td></tr><tr><td>Vlakna</td><td>3,3g</td></tr><tr><td>Proteini</td><td>18,4g</td></tr><tr><td>So</td><td>0,1g</td></tr></tbody></table>',
      position: { left: '1490px', top: '0px' },
    },
    {
      id: 'tofu_dimljeni',
      filter: '63',
      imageSrc: '/images/tofu-dimljeni.png',
      imageAlt: 'Tofu dimljeni - 200g',
      title: 'Tofu dimljeni - 200g',
      description:
        'Tofu јe izuzetno hranljiv i ukusan proteinski proizvod od fermentisanih sojinih zrna koji brzo daje osećaj sitosti. Odličan izbor za osobe koje nameravaju da smanje ili prekinu unos namirnica životinjskog porekla. Služi se uz povrće i žitarice ili kao dodatak sendvičima. Može se pržiti ili dodavati jelima koja se kuvaju ili dinstaju. Jedan od retkih proizvoda biljnog porekla koji sadrži vitamin B12.',
      descriptionOld:
        '<p style="text-align:justify;">Tempeh јe izuzetno hranljiv i ukusan proteinski proizvod od fermentisanih sojinih zrna koji brzo daje osećaj sitosti. Odličan izbor za osobe koje nameravaju da smanje ili prekinu unos namirnica životinjskog porekla. Služi se uz povrće i žitarice ili kao dodatak sendvičima. Može se pržiti ili dodavati jelima koja se kuvaju ili dinstaju. Jedan od retkih proizvoda biljnog porekla koji sadrži vitamin B12.</p><p style="text-align:justify;"><strong>Sastav</strong>: soja 98%, starter kultura (Rhizopus Oligosporus).</p><table><tbody><tr><td>Nutritivne vrednosti:</td><td>Na 100g</td></tr><tr><td>Energija</td><td>203kcal (852kJ)</td></tr><tr><td>Masti</td><td>9,2g</td></tr><tr><td><ul><li>Zasićene masne kiseline</li></ul></td><td>0,6g</td></tr><tr><td>Ugljeni hidrati</td><td>11,9g</td></tr><tr><td><ul><li>Šećeri</li></ul></td><td>2,1g</td></tr><tr><td>Vlakna</td><td>3,3g</td></tr><tr><td>Proteini</td><td>18,4g</td></tr><tr><td>So</td><td>0,1g</td></tr></tbody></table>',
      position: { left: '1490px', top: '0px' },
    },
    {
      id: 'badem_puter',
      filter: '63',
      imageSrc: '/images/badem-puter.png',
      imageAlt: 'Badem Puter 170g',
      title: 'Badem Puter 170g',
      description:
        'Badem puter je izuzetno hranljiv i ukusan proteinski proizvod od fermentisanih sojinih zrna koji brzo daje osećaj sitosti. Odličan izbor za osobe koje nameravaju da smanje ili prekinu unos namirnica životinjskog porekla. Služi se uz povrće i žitarice ili kao dodatak sendvičima. Može se pržiti ili dodavati jelima koja se kuvaju ili dinstaju. Jedan od retkih proizvoda biljnog porekla koji sadrži vitamin B12.',
      descriptionOld:
        '<p style="text-align:justify;">Tempeh јe izuzetno hranljiv i ukusan proteinski proizvod od fermentisanih sojinih zrna koji brzo daje osećaj sitosti. Odličan izbor za osobe koje nameravaju da smanje ili prekinu unos namirnica životinjskog porekla. Služi se uz povrće i žitarice ili kao dodatak sendvičima. Može se pržiti ili dodavati jelima koja se kuvaju ili dinstaju. Jedan od retkih proizvoda biljnog porekla koji sadrži vitamin B12.</p><p style="text-align:justify;"><strong>Sastav</strong>: soja 98%, starter kultura (Rhizopus Oligosporus).</p><table><tbody><tr><td>Nutritivne vrednosti:</td><td>Na 100g</td></tr><tr><td>Energija</td><td>203kcal (852kJ)</td></tr><tr><td>Masti</td><td>9,2g</td></tr><tr><td><ul><li>Zasićene masne kiseline</li></ul></td><td>0,6g</td></tr><tr><td>Ugljeni hidrati</td><td>11,9g</td></tr><tr><td><ul><li>Šećeri</li></ul></td><td>2,1g</td></tr><tr><td>Vlakna</td><td>3,3g</td></tr><tr><td>Proteini</td><td>18,4g</td></tr><tr><td>So</td><td>0,1g</td></tr></tbody></table>',
      position: { left: '1490px', top: '0px' },
    },
    {
      id: 'humus_u_crevu',
      filter: '63',
      imageSrc: '/images/humus-u-crevu.png',
      imageAlt: 'Humus u crevu 200g',
      title: 'Humus u crevu 200g',
      description:
        'Humus u crevu je izuzetno hranljiv i ukusan proteinski proizvod od fermentisanih sojinih zrna koji brzo daje osećaj sitosti. Odličan izbor za osobe koje nameravaju da smanje ili prekinu unos namirnica životinjskog porekla. Služi se uz povrće i žitarice ili kao dodatak sendvičima. Može se pržiti ili dodavati jelima koja se kuvaju ili dinstaju. Jedan od retkih proizvoda biljnog porekla koji sadrži vitamin B12.',
      descriptionOld:
        '<p style="text-align:justify;">Tempeh јe izuzetno hranljiv i ukusan proteinski proizvod od fermentisanih sojinih zrna koji brzo daje osećaj sitosti. Odličan izbor za osobe koje nameravaju da smanje ili prekinu unos namirnica životinjskog porekla. Služi se uz povrće i žitarice ili kao dodatak sendvičima. Može se pržiti ili dodavati jelima koja se kuvaju ili dinstaju. Jedan od retkih proizvoda biljnog porekla koji sadrži vitamin B12.</p><p style="text-align:justify;"><strong>Sastav</strong>: soja 98%, starter kultura (Rhizopus Oligosporus).</p><table><tbody><tr><td>Nutritivne vrednosti:</td><td>Na 100g</td></tr><tr><td>Energija</td><td>203kcal (852kJ)</td></tr><tr><td>Masti</td><td>9,2g</td></tr><tr><td><ul><li>Zasićene masne kiseline</li></ul></td><td>0,6g</td></tr><tr><td>Ugljeni hidrati</td><td>11,9g</td></tr><tr><td><ul><li>Šećeri</li></ul></td><td>2,1g</td></tr><tr><td>Vlakna</td><td>3,3g</td></tr><tr><td>Proteini</td><td>18,4g</td></tr><tr><td>So</td><td>0,1g</td></tr></tbody></table>',
      position: { left: '1490px', top: '0px' },
    },
  ];

  return (
    <section
      className='section-full content-inner bg-genie-green'
      id='products'
      style={{
        background:
          'linear-gradient(180deg, #93b184 0%, var(--color-genie-green) 100%)',
      }}>
      <div className='container-fluid pt-2 pb-32'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className='flex flex-col justify-center items-center section-head text-black mb-16'>
          <SectionHeading title={t('title')} />
          <motion.div
            className='bg-primary mx-auto mb-8'
            initial={{ width: 0 }}
            whileInView={{ width: '100px' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          <motion.div
            className='max-w-6xl mx-auto'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}>
            <p className='text-2xl text-gray-700 text-center leading-relaxed text-shadow-[0_0.1px_0.1px_#2a2a2ac2]'>
              {t('description')}
            </p>
          </motion.div>
        </motion.div>

        <ProductFilters
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
        />

        <ProductCarousel products={products} activeFilter={activeFilter} />
      </div>
      {/* <div className='container w-128 border-b border-secondary/30 mx-auto' /> */}
    </section>
  );
};

export default Products;
