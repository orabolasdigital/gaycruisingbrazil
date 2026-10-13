import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Compass, Shield } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Hero: React.FC = () => {
  const { lang, t } = useLanguage();

  return (
    <section className="relative border-b border-[#2B2B2F] bg-[#080809] overflow-hidden">
      {/* Background Editorial Architectural Texture */}
      <div className="absolute inset-0 pointer-events-none opacity-15">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hero-editorial-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#2B2B2F" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-editorial-grid)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Main Editorial Text Column */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Classification Strip */}
            <div className="flex items-center gap-2 mb-4">
              <span className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-[#111113] border border-[#2B2B2F] text-[11px] font-mono text-[#F0203E] rounded-[2px]">
                <Shield className="w-3 h-3" />
                <span className="font-semibold tracking-wider">18+ ADULT</span>
              </span>
              <span className="text-[#2B2B2F]">/</span>
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#A5A4A8]">
                {t('EDITORIAL GUIDE', 'GUIA EDITORIAL')}
              </span>
            </div>

            {/* Short Expressive Headline (Barlow Condensed Light, Tall & Elegant) */}
            <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl lg:text-8xl uppercase font-light tracking-tight text-[#F3F1EE] leading-[0.92] text-balance">
              {t('DISCOVER BRAZIL', 'DESCUBRA O BRASIL')} <br />
              <span className="text-[#F0203E] font-normal">{t('AFTER DARK.', 'AFTER DARK.')}</span>
            </h1>

            {/* Single Sentence Subtitle */}
            <p className="mt-4 sm:mt-6 text-sm sm:text-base lg:text-lg text-[#A5A4A8] max-w-xl leading-relaxed">
              {t(
                "An independent guide to Brazil's gay adult nightlife, venues and community.",
                "Um guia independente dedicado à vida noturna gay adulta, espaços e comunidade no Brasil."
              )}
            </p>

            {/* Primary Action Buttons: >= 44px touch targets on mobile */}
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row w-full sm:w-auto items-stretch sm:items-center gap-3">
              <Link
                to="/destinations"
                className="min-h-[46px] inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#F0203E] hover:bg-[#7E1425] text-white font-heading text-base uppercase tracking-widest font-normal rounded-[2px] transition-colors"
              >
                <span>{t('EXPLORE DESTINATIONS', 'EXPLORAR DESTINOS')}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/venues"
                className="min-h-[46px] inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#19191B] hover:bg-[#2B2B2F] text-[#F3F1EE] border border-[#2B2B2F] font-heading text-base uppercase tracking-widest font-light rounded-[2px] transition-colors"
              >
                <Compass className="w-4 h-4 text-[#F0203E]" />
                <span>{t('VENUES DIRECTORY', 'DIRETÓRIO DE LOCAIS')}</span>
              </Link>
            </div>
          </div>

          {/* Visual Magazine Cover Artwork (2:3 Aspect Ratio) */}
          <div className="lg:col-span-5 w-full">
            <div className="relative aspect-[2/3] max-w-sm mx-auto bg-[#111113] border border-[#2B2B2F] rounded-[2px] overflow-hidden flex flex-col justify-between p-6 sm:p-8 select-none">
              {/* Subtle Ambient Crimson Spotlight */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#F0203E]/10 blur-3xl pointer-events-none" />

              {/* Cover Top Heading */}
              <div className="relative z-10 flex items-center justify-between border-b border-[#2B2B2F] pb-3 text-xs font-mono text-[#A5A4A8]">
                <span className="text-[#F0203E] tracking-widest uppercase">GCB ISSUE 01</span>
                <span>2026</span>
              </div>

              {/* Graphic Noir Atmosphere */}
              <div className="relative z-10 my-auto text-center space-y-3">
                <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-[#F0203E] block">
                  {t('CURATED NIGHTLIFE', 'NOITE CURADA')}
                </span>
                <div className="font-heading text-4xl sm:text-5xl font-light uppercase tracking-wider text-[#F3F1EE] leading-tight">
                  {t('NIGHT ARCHIVE', 'ARQUIVO DA NOITE')}
                </div>
                <div className="w-10 h-[1px] bg-[#F0203E] mx-auto" />
                <p className="text-xs text-[#A5A4A8] font-mono uppercase tracking-wider max-w-[220px] mx-auto">
                  SÃO PAULO · RIO · FLORIPA · SALVADOR
                </p>
              </div>

              {/* Cover Bottom Footer */}
              <div className="relative z-10 border-t border-[#2B2B2F] pt-3 flex items-center justify-between text-[11px] font-mono text-[#A5A4A8]">
                <span>BLACKOUT EDITORIAL</span>
                <span className="text-[#F0203E] font-bold">18+</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
