import Image from 'next/image';

const Products = () => {
  return (
    <div
      className='section-full content-inner bg-white creative-work'
      id='products'>
      <div className='container-fluid'>
        <div
          className='section-head text-black text-center wow zoomIn'
          data-wow-duration='1.80s'
          style={{
            visibility: 'visible',
            animationDuration: '1.8s',
            animationName: 'zoomIn',
          }}>
          <h2 className='h2'>Proizvodi</h2>
          <div className='dez-separator bg-primary'></div>
          <div className='ezrichtext-field'>
            <p>
              Za vas pripremamo proizvode u kojima nema sastojaka životinjskog
              porekla, a koji predstavljaju pametan izbor za sve koji brinu o
              svom zdravlju i dobrobiti svih živih bića. Zakoračite u
              gastronomsku avanturu biljne ishrane i otkrijte potpuno novi svet
              ukusa.
            </p>
          </div>
        </div>
        <div
          className='site-filters clearfix center m-b40 filter-dark wow fadeIn'
          data-wow-duration='1.80s'
          style={{
            visibility: 'visible',
            animationDuration: '1.8s',
            animationName: 'fadeIn',
          }}>
          <ul className='filters' data-toggle='buttons'>
            <li data-filter='' className='btn active'>
              <input type='radio' />
              <a href='#' className=''>
                <span>Svi</span>
              </a>
            </li>
            <li data-filter='57' className='btn'>
              <input type='radio' />
              <a href='#' className=''>
                <span>Dodatak jelima</span>
              </a>
            </li>
            <li data-filter='63' className='btn'>
              <input type='radio' />
              <a href='#' className=''>
                <span>Makrobiotika</span>
              </a>
            </li>
            <li data-filter='68' className='btn'>
              <input type='radio' />
              <a href='#' className=''>
                <span>Gurman</span>
              </a>
            </li>
            <li data-filter='3755' className='btn'>
              <input type='radio' />
              <a href='#' className=''>
                <span>Delikates</span>
              </a>
            </li>
            <li data-filter='3756' className='btn'>
              <input type='radio' />
              <a href='#' className=''>
                <span>Namazi</span>
              </a>
            </li>
            <li data-filter='3757' className='btn'>
              <input type='radio' />
              <a href='#' className=''>
                <span>Puteri</span>
              </a>
            </li>
          </ul>
        </div>
        <div
          className='wow fadeIn'
          data-wow-duration='1.80s'
          style={{
            visibility: 'visible',
            animationDuration: '1.8s',
            animationName: 'fadeIn',
          }}>
          <ul
            id='masonry'
            className='row dez-gallery-listing gallery-grid-6 gallery mfp-gallery'
            style={{ position: 'relative', height: '2684.14px' }}>
            <li
              data-filter='57'
              className='card-container col-lg-2 col-md-3 col-sm-4 col-6'
              style={{
                margin: '0px -1px',
                position: 'absolute',
                left: '0px',
                top: '0px',
              }}>
              <div className='dez-box dez-gallery-box pricing-bx text-center'>
                <div className='dez-thum dez-img-overlay1 dez-img-effect'>
                  <a href='javascript:void(0);'>
                    <Image
                      src='https://geniefood.rs/var/site/storage/images/_aliases/w500/2/7/0/0/30072-1-ser-SR/18259ed84c98-nutritivni-kvasac.jpg'
                      alt='Nutritivni kvasac u ljuspicama - 200g'
                      width={500}
                      height={500}
                    />
                  </a>
                  <a
                    data-fancybox='products'
                    data-src='/var/site/storage/images/2/7/0/0/30072-1-ser-SR/18259ed84c98-nutritivni-kvasac.jpg'
                    className='txt overlay-bx mfp-link mfp-btn'
                    data-caption='<p>Jedinstvenog ukusa koji podseća na sir, nutritivni kvasac je odličan izvor vitamina i minerala. Ne sadrži gluten, a bogat je proteinima, selenom, cinkom, folnom kiselinom i vitaminima B grupe. Sadrži svih devet esencijalnih aminokiselina što ga čini kompletnim proteinom. Koristi se kao dodatak supama, testeninama, sendvičima, salatama, varivima, a može se koristiti i za izradu veganskog sira.</p><table><tbody><tr><td>Nutritivne vrednosti:</td><td>Na 100g</td></tr><tr><td>Energija</td><td>1081kJ / 428 kcal</td></tr><tr><td>Masti</td><td>4,2g</td></tr><tr><td><ul><li>Zasićene masne kiseline</li></ul></td><td>0,6g</td></tr><tr><td>Ugljeni hidrati</td><td>40,2g</td></tr><tr><td><ul><li>Šećeri</li></ul></td><td>15,6g</td></tr><tr><td>Vlakna</td><td>27,1g</td></tr><tr><td>Proteini</td><td>46,5 g</td></tr><tr><td>So</td><td>0,036g</td></tr><tr><td>Tiamin (B1)</td><td>37,1mg</td></tr><tr><td>Riboflavin (B2)</td><td>27,1mg</td></tr><tr><td>Niacin (B3)</td><td>339,6mg</td></tr><tr><td>Pantotenska kiselina (B5)</td><td>185,3mg</td></tr><tr><td>Piridoksin (B6)</td><td>49,2mg</td></tr><tr><td>Biotin (B7)</td><td>273,5mcg</td></tr><tr><td>Folna kiselina (B9)</td><td>6,3mg</td></tr><tr><td>Kobalamin (B12)</td><td>36mcg</td></tr></tbody></table>'>
                    <span>Nutritivni kvasac u ljuspicama - 200g</span>
                  </a>
                </div>
                <div className='dez-content'>
                  <h5 className='dez-title m-tb10'>
                    Nutritivni kvasac u ljuspicama - 200g
                  </h5>
                  <h6 className='price'></h6>
                </div>
              </div>
            </li>
            <li
              data-filter='63'
              className='card-container col-lg-2 col-md-3 col-sm-4 col-6'
              style={{
                margin: '0px -1px',
                position: 'absolute',
                left: '496px',
                top: '0px',
              }}>
              <div className='dez-box dez-gallery-box pricing-bx text-center'>
                <div className='dez-thum dez-img-overlay1 dez-img-effect'>
                  <a href='javascript:void(0);'>
                    <Image
                      src='https://geniefood.rs/var/site/storage/images/_aliases/w500/4/8/7/9/29784-1-ser-SR/706ac4b05330-1.jpg'
                      alt='Prženi tempeh – 200g'
                      width={500}
                      height={500}
                    />
                  </a>
                  <a
                    data-fancybox='products'
                    data-src='/var/site/storage/images/4/8/7/9/29784-1-ser-SR/706ac4b05330-1.jpg'
                    className='txt overlay-bx mfp-link mfp-btn'
                    data-caption='<p style="text-align:justify;">Proizvod dobijen fermentacijom termički obrađene soje uz dodatak specijalne vrste plesni. Velike nutritivne i energetske vrednosti. Jedan od retkih proizvoda biljnog porekla koji sadrži vitamin B12. Odličan prilog jelima od povrća jer povećava biološku vrednost obroka i daje dugotrajan osećaj sitosti. Idealna zamena za meso.&nbsp;</p><p style="text-align:justify;"><strong>Sastav</strong>: soja 98%, nehidrogenizovano biljno ulje (suncokret), starter kultura (Rhizopus Oligosporus), morska so.</p><table><tbody><tr><td>Nutritivne vrednosti:</td><td>Na 100g</td></tr><tr><td>Energija</td><td>185kcal (774kJ)</td></tr><tr><td>Masti</td><td>8,0g</td></tr><tr><td><ul><li>Zasićene masne kiseline</li></ul></td><td>0,9g</td></tr><tr><td>Ugljeni hidrati</td><td>25,7g</td></tr><tr><td><ul><li>Šećeri</li></ul></td><td><0,5g</td></tr><tr><td>Vlakna</td><td>1,2g</td></tr><tr><td>Proteini</td><td>19,7g</td></tr><tr><td>So</td><td>0,74g</td></tr></tbody></table>'>
                    <span>Prženi tempeh – 200g</span>
                  </a>
                </div>
                <div className='dez-content'>
                  <h5 className='dez-title m-tb10'>Prženi tempeh – 200g</h5>
                  <h6 className='price'></h6>
                </div>
              </div>
            </li>
            <li
              data-filter='63'
              className='card-container col-lg-2 col-md-3 col-sm-4 col-6'
              style={{
                margin: '0px -1px',
                position: 'absolute',
                left: '993px',
                top: '0px',
              }}>
              <div className='dez-box dez-gallery-box pricing-bx text-center'>
                <div className='dez-thum dez-img-overlay1 dez-img-effect'>
                  <a href='javascript:void(0);'>
                    <Image
                      src='https://geniefood.rs/var/site/storage/images/_aliases/w500/7/3/8/9/29837-1-ser-SR/b039f0514187-10.jpg'
                      alt='Seitan prženi – 180g'
                      width={500}
                      height={500}
                    />
                  </a>
                  <a
                    data-fancybox='products'
                    data-src='/var/site/storage/images/7/3/8/9/29837-1-ser-SR/b039f0514187-10.jpg'
                    className='txt overlay-bx mfp-link mfp-btn'
                    data-caption='<p style="text-align:justify;">Seitan je jelo od pšeničnog proteina bogato kalcijumom, vitaminima B grupe i proteinima (33%). Radi se o pšeničnom glutenu koji u prehrani gotovo u celosti može nadomestiti potrebu za mesom. Jela sa sejtanom se pripremaju na isti način kao i jela s mesom. Može se koristiti kao dodatak jelima od povrća ili zamena za šnicle od mesa.</p><p style="text-align:justify;"><strong>Sastav</strong>: Voda, pšenični gluten, pšenično brašno, morska so, mešavina začina, nehidrogenizovano biljno ulje (suncokret)</p><table><tbody><tr><td>Nutritivne vrednosti:</td><td>Na 100g</td></tr><tr><td>Energija</td><td>221kcal (928kJ)</td></tr><tr><td>Masti</td><td>4,8g</td></tr><tr><td><ul><li>Zasićene masne kiseline</li></ul></td><td>0,2g</td></tr><tr><td>Ugljeni hidrati</td><td>13,1g</td></tr><tr><td><ul><li>Šećeri</li></ul></td><td>0,3g</td></tr><tr><td>Vlakna</td><td>0,9g</td></tr><tr><td>Proteini</td><td>33,4g</td></tr><tr><td>So</td><td>0,9g</td></tr></tbody></table>'>
                    <span>Seitan prženi – 180g</span>
                  </a>
                </div>
                <div className='dez-content'>
                  <h5 className='dez-title m-tb10'>Seitan prženi – 180g</h5>
                  <h6 className='price'></h6>
                </div>
              </div>
            </li>
            <li
              data-filter='63'
              className='card-container col-lg-2 col-md-3 col-sm-4 col-6'
              style={{
                margin: '0px -1px',
                position: 'absolute',
                left: '1490px',
                top: '0px',
              }}>
              <div className='dez-box dez-gallery-box pricing-bx text-center'>
                <div className='dez-thum dez-img-overlay1 dez-img-effect'>
                  <a href='javascript:void(0);'>
                    <Image
                      src='https://geniefood.rs/var/site/storage/images/_aliases/w500/7/4/8/9/29847-1-ser-SR/cac83b5b74ab-12.jpg'
                      alt='Tempeh 200g'
                      width={500}
                      height={500}
                    />
                  </a>
                  <a
                    data-fancybox='products'
                    data-src='/var/site/storage/images/7/4/8/9/29847-1-ser-SR/cac83b5b74ab-12.jpg'
                    className='txt overlay-bx mfp-link mfp-btn'
                    data-caption='<p style="text-align:justify;">Tempeh је izuzetno hranljiv i ukusan proteinski proizvod od fermentisanih sojinih zrna koji brzo daje osećaj sitosti. Odličan izbor za osobe koje nameravaju da smanje ili prekinu unos namirnica životinjskog porekla. Služi se uz povrće i žitarice ili kao dodatak sendvičima. Može se pržiti ili dodavati jelima koja se kuvaju ili dinstaju. Jedan od retkih proizvoda biljnog porekla koji sadrži vitamin B12.</p><p style="text-align:justify;"><strong>Sastav</strong>: soja 98%, starter kultura (Rhizopus Oligosporus).</p><table><tbody><tr><td>Nutritivne vrednosti:</td><td>Na 100g</td></tr><tr><td>Energija</td><td>203kcal (852kJ)</td></tr><tr><td>Masti</td><td>9,2g</td></tr><tr><td><ul><li>Zasićene masne kiseline</li></ul></td><td>0,6g</td></tr><tr><td>Ugljeni hidrati</td><td>11,9g</td></tr><tr><td><ul><li>Šećeri</li></ul></td><td>2,1g</td></tr><tr><td>Vlakna</td><td>3,3g</td></tr><tr><td>Proteini</td><td>18,4g</td></tr><tr><td>So</td><td>0,1g</td></tr></tbody></table>'>
                    <span>Tempeh 200g</span>
                  </a>
                </div>
                <div className='dez-content'>
                  <h5 className='dez-title m-tb10'>Tempeh 200g</h5>
                  <h6 className='price'></h6>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Products;
