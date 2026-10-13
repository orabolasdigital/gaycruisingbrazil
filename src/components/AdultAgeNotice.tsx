import React, { useState, useEffect, useRef } from 'react';
import { ShieldAlert, LogOut, Check } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { LanguageSwitcher } from './LanguageSwitcher';

export const AdultAgeNotice: React.FC = () => {
  const { lang, t } = useLanguage();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [hasExited, setHasExited] = useState<boolean>(false);
  const confirmBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    // Check sessionStorage (per session)
    const confirmed = sessionStorage.getItem('gcb_18_confirmed');
    if (!confirmed) {
      setIsOpen(true);
    }
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setTimeout(() => confirmBtnRef.current?.focus(), 50);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleConfirm = () => {
    sessionStorage.setItem('gcb_18_confirmed', 'true');
    setIsOpen(false);
  };

  const handleExit = () => {
    setHasExited(true);
    try {
      window.location.href = 'https://www.google.com';
    } catch {
      // Handled via hasExited view state
    }
  };

  if (!isOpen) {
    // Discreet persistent top strip for ongoing sessions
    return (
      <aside aria-label="18+ Adult Classification Notice" className="bg-[#111113] border-b border-[#2B2B2F] px-4 py-1.5 text-[11px] text-[#A5A4A8] no-print">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 tracking-wide">
            <span className="font-heading font-normal text-[#FF173E] tracking-wider text-xs">18+</span>
            <span className="text-[#2B2B2F]">|</span>
            <span className="truncate">
              {t(
                'Adult photographic directory. Strictly for audiences aged 18 and older.',
                'Catálogo fotográfico adulto. Estritamente para maiores de 18 anos.'
              )}
            </span>
          </div>
          <span className="hidden sm:inline-block font-mono text-[10px] text-stone-500 tracking-widest uppercase">
            {t('RATED 18+ ADULT', 'CLASSIFICAÇÃO 18+')}
          </span>
        </div>
      </aside>
    );
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="adult-notice-title"
      aria-describedby="adult-notice-desc"
      className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto no-print"
    >
      <div className="bg-[#111113] border border-[#2B2B2F] max-w-md w-full p-6 sm:p-8 rounded-[2px] shadow-2xl relative animate-in fade-in zoom-in-95 duration-200">
        {/* Top Accent Line */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-blood-gradient" />

        {/* Modal Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#2B2B2F] mb-6">
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 bg-[#19191B] border border-[#2B2B2F] text-[#FF173E] font-mono text-xs font-bold tracking-wider rounded-[1px]">
              18+
            </span>
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#A5A4A8]">
              {t('EDITORIAL VERIFICATION', 'VERIFICAÇÃO EDITORIAL')}
            </span>
          </div>
          <LanguageSwitcher />
        </div>

        {hasExited ? (
          <div className="py-8 text-center space-y-4">
            <h2 className="font-heading text-3xl text-[#F3F1EE] uppercase font-normal tracking-wide">
              {t('ACCESS RESTRICTED', 'ACESSO RESTRITO')}
            </h2>
            <p className="text-sm text-[#A5A4A8] leading-relaxed">
              {t(
                'You have chosen to exit. You may close this tab or navigate away.',
                'Você optou por sair. Você pode fechar esta aba ou navegar para outro site.'
              )}
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            <div>
              <h2
                id="adult-notice-title"
                className="font-heading text-3xl sm:text-4xl text-[#F3F1EE] uppercase font-normal tracking-wide leading-tight"
              >
                {t('ADULT CONTENT NOTICE', 'AVISO DE CONTEÚDO ADULTO')}
              </h2>
              <p
                id="adult-notice-desc"
                className="mt-3 text-sm text-[#A5A4A8] leading-relaxed"
              >
                {t(
                  'This website contains information about adult-oriented venues and nightlife. You must be 18 or older to continue.',
                  'Este site contém informações sobre estabelecimentos e vida noturna destinados ao público adulto. Você deve ter 18 anos ou mais para continuar.'
                )}
              </p>
            </div>

            {/* Action Buttons: 44px touch targets on mobile */}
            <div className="flex flex-col gap-3 pt-2">
              <button
                ref={confirmBtnRef}
                type="button"
                onClick={handleConfirm}
                className="w-full min-h-[46px] px-6 py-3 bg-blood-gradient hover:opacity-95 text-white font-heading text-base uppercase tracking-widest font-normal rounded-[2px] transition-opacity cursor-pointer flex items-center justify-center gap-2"
              >
                <Check className="w-4 h-4" />
                <span>{t('I AM 18 OR OLDER', 'TENHO 18 ANOS OU MAIS')}</span>
              </button>

              <button
                type="button"
                onClick={handleExit}
                className="w-full min-h-[44px] px-6 py-2.5 bg-[#19191B] hover:bg-[#2B2B2F] text-[#A5A4A8] hover:text-[#F3F1EE] border border-[#2B2B2F] font-heading text-sm uppercase tracking-widest rounded-[2px] transition-colors cursor-pointer flex items-center justify-center gap-2"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span>{t('EXIT WEBSITE', 'SAIR DO SITE')}</span>
              </button>
            </div>

            <p className="text-[10px] font-mono text-[#A5A4A8]/60 text-center uppercase tracking-wider leading-relaxed">
              {t(
                'Session confirmation · No personal data is collected · Strictly 18+',
                'Confirmação de sessão · Nenhum dado pessoal coletado · Estritamente 18+'
              )}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
