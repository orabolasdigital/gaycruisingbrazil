import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PhotoCard } from '../components/PhotoCard';
import { REGIONS, BRAZILIAN_STATES } from '../data/content';
import { useLanguage } from '../context/LanguageContext';
import { Compass, ArrowRight, Shield } from 'lucide-react';

export const HomePage: React.FC = () => {
  const { lang, t } = useLanguage();
  const [selectedRegion, setSelectedRegion] = useState<string>('all');

  const filteredRegions = selectedRegion === 'all'
    ? REGIONS
    : REGIONS.filter((r) => r.id === selectedRegion);

  return (
    <div className="space-y-10 sm:space-y-16 pb-16 overflow-x-hidden">
      {/* 1. Concise Visual Opening (Hero) */}
      <section className="relative border-b border-[#2B2B2F] bg-[#080809] pt-10 sm:pt-16 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col items-start">
          {/* Classification Tag */}
          <div className="flex items-center gap-2 mb-3">
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-[#111113] border border-[#2B2B2F] text-[10px] font-mono text-[#FF173E] rounded-[2px]">
              <Shield className="w-3 h-3" />
              <span className="font-bold tracking-wider">18+ ADULT</span>
            </span>
            <span className="text-[#2B2B2F]">/</span>
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#A5A4A8]">
              {t('GEOGRAPHIC DIRECTORY', 'DIRETÓRIO GEOGRÁFICO')}
            </span>
          </div>

          {/* Requested Headline & Short Subtitle */}
          <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl lg:text-8xl uppercase font-normal tracking-tight text-[#F3F1EE] leading-none text-balance">
            {t('EXPLORE BRAZIL', 'EXPLORE O BRASIL')}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF173E] to-[#C90028]">
              {t('AFTER DARK.', 'AFTER DARK.')}
            </span>
          </h1>

          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-[#A5A4A8] max-w-xl font-normal">
            {t('Discover gay venues across Brazil.', 'Descubra locais gays pelo Brasil.')}
          </p>

          {/* Category Shortcut Chips */}
          <div className="mt-6 flex items-center flex-wrap gap-2 text-xs font-mono">
            <Link
              to="/categories/gay-saunas"
              className="px-3 py-1.5 bg-[#111113] hover:bg-[#19191B] border border-[#2B2B2F] hover:border-[#FF173E] text-[#F3F1EE] rounded-[2px] transition-colors"
            >
              {t('Gay Saunas', 'Saunas Gays')}
            </Link>
            <Link
              to="/categories/sex-clubs"
              className="px-3 py-1.5 bg-[#111113] hover:bg-[#19191B] border border-[#2B2B2F] hover:border-[#FF173E] text-[#F3F1EE] rounded-[2px] transition-colors"
            >
              {t('Sex Clubs', 'Sex Clubs')}
            </Link>
            <Link
              to="/categories/cruising-bars"
              className="px-3 py-1.5 bg-[#111113] hover:bg-[#19191B] border border-[#2B2B2F] hover:border-[#FF173E] text-[#F3F1EE] rounded-[2px] transition-colors"
            >
              {t('Cruising Bars', 'Bares Cruiser')}
            </Link>
            <Link
              to="/categories/adult-cabins"
              className="px-3 py-1.5 bg-[#111113] hover:bg-[#19191B] border border-[#2B2B2F] hover:border-[#FF173E] text-[#F3F1EE] rounded-[2px] transition-colors"
            >
              {t('Adult Cabins', 'Cabines Adultas')}
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Region Filter Toolbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between flex-wrap gap-3 pb-4 border-b border-[#2B2B2F]">
          <div className="flex items-center gap-2">
            <Compass className="w-4 h-4 text-[#FF173E]" />
            <span className="font-heading text-lg sm:text-xl uppercase tracking-wider text-[#F3F1EE]">
              {t('REGIONS OF BRAZIL', 'REGIÕES DO BRASIL')}
            </span>
          </div>

          {/* Quick Segmented Region Tabs: 44px touch targets on mobile */}
          <div className="flex items-center flex-wrap gap-1.5">
            <button
              type="button"
              onClick={() => setSelectedRegion('all')}
              className={`min-h-[40px] px-3.5 py-1.5 font-heading text-xs uppercase tracking-wider rounded-[2px] transition-colors border cursor-pointer ${
                selectedRegion === 'all'
                  ? 'bg-blood-gradient text-white border-transparent'
                  : 'bg-[#111113] text-[#A5A4A8] border-[#2B2B2F] hover:text-[#F3F1EE]'
              }`}
            >
              {t('ALL', 'TODAS')}
            </button>
            {REGIONS.map((region) => (
              <button
                key={region.id}
                type="button"
                onClick={() => setSelectedRegion(region.id)}
                className={`min-h-[40px] px-3.5 py-1.5 font-heading text-xs uppercase tracking-wider rounded-[2px] transition-colors border cursor-pointer ${
                  selectedRegion === region.id
                    ? 'bg-blood-gradient text-white border-transparent'
                    : 'bg-[#111113] text-[#A5A4A8] border-[#2B2B2F] hover:text-[#F3F1EE]'
                }`}
              >
                {lang === 'en' ? region.nameEn : region.namePt}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 3. States Grouped By Region */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        {filteredRegions.map((region) => {
          const statesInRegion = BRAZILIAN_STATES.filter((s) => s.regionId === region.id);

          return (
            <section key={region.id} aria-labelledby={`region-${region.id}`} className="space-y-4">
              <div className="flex items-end justify-between border-b border-[#2B2B2F] pb-2">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#FF173E] block">
                    {t('BRAZIL REGION', 'REGIÃO')}
                  </span>
                  <h2
                    id={`region-${region.id}`}
                    className="font-heading text-2xl sm:text-3xl lg:text-4xl uppercase font-normal text-[#F3F1EE] tracking-wide"
                  >
                    {lang === 'en' ? region.nameEn : region.namePt}
                  </h2>
                </div>

                <Link
                  to={`/regions/${region.slug}`}
                  className="group inline-flex items-center gap-1 text-xs font-mono text-[#A5A4A8] hover:text-[#FF173E] transition-colors py-1"
                >
                  <span>{t('View Region', 'Ver Região')}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* 2 columns on mobile, 3 on tablet, 4 on desktop */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5">
                {statesInRegion.map((state) => (
                  <PhotoCard
                    key={state.stateCode}
                    to={`/states/${state.stateCode}`}
                    title={lang === 'en' ? state.stateNameEn : state.stateNamePt}
                    subtitle={lang === 'en' ? state.capitalEn : state.capitalPt}
                    code={state.stateCode}
                    imageUrl={state.imageUrl}
                    aspectRatio="2:3"
                    category={lang === 'en' ? region.nameEn : region.namePt}
                  />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
};
