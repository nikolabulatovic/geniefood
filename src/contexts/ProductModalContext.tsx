import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Product } from '@/types/Product';

interface ProductModalContextType {
  selectedProduct: Product | null;
  isModalOpen: boolean;
  openModal: (product: Product) => void;
  closeModal: () => void;
}

const ProductModalContext = createContext<ProductModalContextType | undefined>(
  undefined,
);

export const useProductModal = () => {
  const context = useContext(ProductModalContext);
  if (!context) {
    throw new Error(
      'useProductModal must be used within a ProductModalProvider',
    );
  }
  return context;
};

interface ProductModalProviderProps {
  children: ReactNode;
}

export const ProductModalProvider: React.FC<ProductModalProviderProps> = ({
  children,
}) => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <ProductModalContext.Provider
      value={{
        selectedProduct,
        isModalOpen,
        openModal,
        closeModal,
      }}>
      {children}
    </ProductModalContext.Provider>
  );
};
