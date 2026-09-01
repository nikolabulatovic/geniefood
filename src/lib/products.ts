import productsSr from '@/data/products-sr.json';
import productsEn from '@/data/products-en.json';
import { Product } from '@/types/Product';

export function getProductsData(locale: string): Product[] {
  return locale === 'sr'
    ? (productsSr.products as Product[])
    : (productsEn.products as Product[]);
}

export function getProductById(
  locale: string,
  id: string,
): Product | undefined {
  return getProductsData(locale).find((product) => product.id === id);
}
