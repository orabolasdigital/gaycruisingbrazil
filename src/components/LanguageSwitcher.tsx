import React from 'react';
import { useLanguage } from '../context/LanguageContext';

interface LanguageSwitcherProps {
  className?: string;
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ className = '' }) => {
  const { lang, setLang } = useLanguage();

  return (
    <div
      role="group"
      aria-label="Language selector"
      className={`inline-flex items-center border border-[#2B2B2F] bg-[#111113] p-0.5 rounded-[2px] text-xs font-mono ${className}`}
    >
      <button
        type="button"
        onClick={() => setLang('en')}
        aria-pressed={lang === 'en'}
        className={`min-h-[32px] px-2.5 py-1 tracking-wider uppercase transition-colors rounded-[1px] cursor-pointer ${
          lang === 'en'
            ? 'bg-[#F0203E] text-white font-semibold'
            : 'text-[#A5A4A8] hover:text-[#F3F1EE] hover:bg-[#19191B]'
        }`}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => setLang('pt')}
        aria-pressed={lang === 'pt'}
        className={`min-h-[32px] px-2.5 py-1 tracking-wider uppercase transition-colors rounded-[1px] cursor-pointer ${
          lang === 'pt'
            ? 'bg-[#F0203E] text-white font-semibold'
            : 'text-[#A5A4A8] hover:text-[#F3F1EE] hover:bg-[#19191B]'
        }`}
      >
        PT
      </button>
    </div>
  );
};
