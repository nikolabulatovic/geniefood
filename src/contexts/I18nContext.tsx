'use client';

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react';

// Types
type Locale = 'sr' | 'en';

interface Translations {
  [key: string]: unknown;
}

interface I18nContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  translations: Translations;
  t: (key: string, namespace?: string) => string;
}

// Create the context
const I18nContext = createContext<I18nContextType | undefined>(undefined);

// Provider component
interface I18nProviderProps {
  children: ReactNode;
  initialLocale?: Locale;
  messages?: Translations;
}

export function I18nProvider({
  children,
  initialLocale = 'sr',
  messages,
}: I18nProviderProps) {
  const [locale, setLocale] = useState<Locale>(initialLocale);
  const [translations, setTranslations] = useState<Translations>(
    messages || {},
  );

  // Load translations when locale changes (only if messages not provided)
  useEffect(() => {
    if (messages) {
      // If messages are provided, use them directly
      setTranslations(messages);
      return;
    }

    const loadTranslations = async () => {
      try {
        const importedMessages = await import(`@/messages/${locale}.json`);
        setTranslations(importedMessages.default);
      } catch (error) {
        console.error(
          `Failed to load translations for locale: ${locale}`,
          error,
        );
        // Fallback to default locale if current fails
        if (locale !== 'sr') {
          const fallbackMessages = await import(`@/messages/sr.json`);
          setTranslations(fallbackMessages.default);
        }
      }
    };

    loadTranslations();
  }, [locale, messages]);

  // Translation function
  const t = (key: string, namespace?: string): string => {
    try {
      const target = namespace ? translations[namespace] : translations;
      if (!target) return key;

      // Handle nested keys like 'header.nav.products'
      const keys = key.split('.');
      let result: unknown = target;

      for (const k of keys) {
        if (
          result &&
          typeof result === 'object' &&
          result !== null &&
          k in result
        ) {
          result = (result as Record<string, unknown>)[k];
        } else {
          return key; // Return key if translation not found
        }
      }

      return typeof result === 'string' ? result : key;
    } catch (error) {
      console.error('Translation error:', error);
      return key;
    }
  };

  const value: I18nContextType = {
    locale,
    setLocale,
    translations,
    t,
  };

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

// Custom hook to use the I18n context
export function useI18n(): I18nContextType {
  const context = useContext(I18nContext);
  if (context === undefined) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
}

// Convenience hook for translations only
export function useTranslation(namespace?: string) {
  const { t, locale } = useI18n();

  return {
    t: (key: string) => t(key, namespace),
    locale,
  };
}
