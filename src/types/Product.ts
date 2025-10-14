export interface Product {
  id: string;
  productType: string;
  imageSrc: string;
  imageAlt: string;
  title: string;
  weight: string;
  description: string;
  benefits?: string[];
}

export interface ProductsData {
  products: Product[];
}
