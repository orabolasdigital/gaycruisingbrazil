import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { NavigationMenu } from './NavigationMenu';
import { LanguageSwitcher } from './LanguageSwitcher';
import { useLanguage } from '../context/LanguageContext';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { lang, t } = useLanguage();
  const location = useLocation();

  React.useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className="sticky top-0 z-50 bg-[#080809]/95 backdrop-blur-md border-b border-[#2B2B2F] no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 sm:h-20 gap-4 sm:gap-8">
          {/* Zone 1: Brand Typographic Signature */}
          <Link
            to="/"
            className="group flex flex-col items-start leading-none shrink-0 py-1 transition-opacity hover:opacity-95"
            aria-label="Gay Cruising Brazil Home"
          >
            <div className="flex items-center gap-1.5">
              <span className="font-heading font-normal text-2xl sm:text-3xl tracking-wide text-[#F3F1EE] group-hover:text-white transition-colors">
                GAY CRUISING
              </span>
              <span className="w-1.5 h-1.5 bg-[#F0203E] rounded-[1px] mt-0.5 shrink-0" />
            </div>
            <span className="font-heading text-[11px] sm:text-xs font-light tracking-[0.34em] text-[#A5A4A8] group-hover:text-[#F0203E] transition-colors">
              BRAZIL
            </span>
          </Link>

          {/* Zone 2: Desktop Navigation */}
          <NavigationMenu />

          {/* Zone 3: Language Switcher + Actions */}
          <div className="flex items-center gap-2 sm:gap-4 shrink-0">
            {/* 18+ badge indicator (hidden on very small mobile) */}
            <span
              className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 border border-[#2B2B2F] bg-[#111113] text-[10px] font-mono tracking-widest text-[#A5A4A8] rounded-[2px]"
              title="Adult 18+"
            >
              <ShieldCheck className="w-3 h-3 text-[#F0203E]" />
              <span>18+</span>
            </span>

            {/* Language Switcher */}
            <LanguageSwitcher />

            {/* Direct action on desktop */}
            <Link
              to="/destinations"
              className="hidden md:inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#19191B] hover:bg-[#F0203E] text-[#F3F1EE] hover:text-white border border-[#2B2B2F] hover:border-[#F0203E] text-xs font-heading uppercase tracking-wider font-normal rounded-[2px] transition-all min-h-[36px]"
            >
              <span>{t('EXPLORE', 'EXPLORAR')}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>

            {/* Mobile menu trigger: touch target 44x44px */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden min-w-[44px] min-h-[44px] flex items-center justify-center p-2.5 text-[#F3F1EE] hover:text-[#F0203E] hover:bg-[#19191B] border border-[#2B2B2F] rounded-[2px] transition-colors cursor-pointer"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer / Compact Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#080809] border-b border-[#2B2B2F] px-4 pt-3 pb-6 animate-in slide-in-from-top duration-200">
          <div className="mb-3 flex items-center justify-between text-xs text-[#A5A4A8] border-b border-[#2B2B2F] pb-2.5">
            <span className="font-mono uppercase tracking-wider text-[11px]">
              {t('NAVIGATION', 'NAVEGAÇÃO')}
            </span>
            <span className="text-[#F0203E] font-mono font-bold text-xs">18+ ADULT</span>
          </div>

          <NavigationMenu mobile onItemClick={() => setMobileMenuOpen(false)} />

          <div className="mt-4 pt-3 border-t border-[#2B2B2F] flex flex-col gap-2.5">
            <Link
              to="/destinations"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full min-h-[46px] flex items-center justify-center gap-2 py-3 bg-[#F0203E] hover:bg-[#7E1425] text-white font-heading text-sm uppercase tracking-widest font-normal rounded-[2px] transition-colors"
            >
              <span>{t('BROWSE DESTINATIONS', 'EXPLORAR DESTINOS')}</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
