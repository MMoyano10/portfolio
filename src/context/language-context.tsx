'use client';

import { createContext, useContext, useEffect, useState } from 'react';

export type Language = 'en' | 'es';
const LanguageContext = createContext<{ language: Language; setLanguage: (value: Language) => void }>({ language: 'en', setLanguage: () => {} });

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return <LanguageContext.Provider value={{ language, setLanguage }}>{children}</LanguageContext.Provider>;
}

export function useLanguage() { return useContext(LanguageContext); }

export function localized<T>(language: Language, en: T, es: T): T { return language === 'en' ? en : es; }
