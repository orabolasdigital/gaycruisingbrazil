import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language } from '../types';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
  t: (enText: string, ptText: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // English is the native and initial default language
  const [lang, setLangState] = useState<Language>(() => {
    const saved = localStorage.getItem('gcb_lang');
    return (saved === 'en' || saved === 'pt') ? saved : 'en';
  });

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem('gcb_lang', newLang);
  };

  const toggleLang = () => {
    setLang(lang === 'en' ? 'pt' : 'en');
  };

  // Helper function: returns enText when lang === 'en', ptText when lang === 'pt'
  const t = (enText: string, ptText: string) => {
    return lang === 'en' ? enText : ptText;
  };

  useEffect(() => {
    document.documentElement.lang = lang === 'en' ? 'en' : 'pt-BR';
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
