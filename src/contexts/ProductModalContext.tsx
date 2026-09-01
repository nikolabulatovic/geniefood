'use client';

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  ReactNode,
} from 'react';
import { Product } from '@/types/Product';
import { getProductById } from '@/lib/products';
import { useI18n } from '@/contexts/I18nContext';

const PRODUCT_QUERY_PARAM = 'product';

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

function getProductIdFromUrl(): string | null {
  if (typeof window === 'undefined') return null;
  return new URLSearchParams(window.location.search).get(PRODUCT_QUERY_PARAM);
}

function setProductUrl(productId: string | null, push = false) {
  const url = new URL(window.location.href);
  if (productId) {
    url.searchParams.set(PRODUCT_QUERY_PARAM, productId);
  } else {
    url.searchParams.delete(PRODUCT_QUERY_PARAM);
  }
  if (push) {
    window.history.pushState({ productModal: true }, '', url);
  } else {
    window.history.replaceState({}, '', url);
  }
}

interface ProductModalProviderProps {
  children: ReactNode;
}

export const ProductModalProvider: React.FC<ProductModalProviderProps> = ({
  children,
}) => {
  const { locale } = useI18n();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = useCallback((product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
    const currentId = getProductIdFromUrl();
    if (currentId !== product.id) {
      setProductUrl(product.id, true);
    }
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    setSelectedProduct(null);
    if (getProductIdFromUrl()) {
      setProductUrl(null);
    }
  }, []);

  const syncModalFromUrl = useCallback(() => {
    const productId = getProductIdFromUrl();
    if (productId) {
      const product = getProductById(locale, productId);
      if (product) {
        setSelectedProduct(product);
        setIsModalOpen(true);
        return;
      }
    }
    setIsModalOpen(false);
    setSelectedProduct(null);
  }, [locale]);

  useEffect(() => {
    const productId = getProductIdFromUrl();
    if (!productId) return;

    const product = getProductById(locale, productId);
    if (product) {
      setSelectedProduct(product);
      setIsModalOpen(true);
      requestAnimationFrame(() => {
        document.getElementById('products')?.scrollIntoView({
          behavior: 'smooth',
        });
      });
    }
  }, [locale]);

  useEffect(() => {
    const handlePopState = () => syncModalFromUrl();
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [syncModalFromUrl]);

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
