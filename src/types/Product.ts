export interface Product {
  id: string;
  productType: string;
  imageSrc: string;
  imageAlt: string;
  imageRatio?: string;
  title: string;
  weight: string;
  description: string;
  benefits?: string[];
  nutritionalData?: {
    energy: string;
    fats: string;
    saturatedFats: string;
    carbohydrates: string;
    sugars: string;
    fiber: string;
    proteins: string;
    salt: string;
    vitaminB1?: string;
    vitaminB2?: string;
    vitaminB3?: string;
    vitaminB5?: string;
    vitaminB6?: string;
    vitaminB7?: string;
    vitaminB9?: string;
    vitaminB12?: string;
  };
}

export interface ProductsData {
  products: Product[];
}
