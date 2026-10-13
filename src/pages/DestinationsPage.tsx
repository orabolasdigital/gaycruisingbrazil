import React, { useState } from 'react';
import { PhotoCard } from '../components/PhotoCard';
import { REGIONS, BRAZILIAN_STATES } from '../data/content';
import { useLanguage } from '../context/LanguageContext';
import { Navigation } from 'lucide-react';

export const DestinationsPage: React.FC = () => {
  const { lang, t } = useLanguage();
  const [activeRegion, setActiveRegion] = useState<string>('all');

  const filteredStates = BRAZILIAN_STATES.filter((state) => {
    if (activeRegion === 'all') return true;
    return state.regionId === activeRegion;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-14 space-y-8 sm:space-y-12 overflow-x-hidden">
      {/* Editorial Header */}
      <div className="border-b border-[#2B2B2F] pb-6 sm:pb-8">
        <div className="flex items-center gap-2 mb-2 font-mono text-xs text-[#FF173E]">
          <Navigation className="w-3.5 h-3.5" />
          <span className="uppercase tracking-widest font-semibold">
            {t('GEOGRAPHIC DIRECTORY', 'DIRETÓRIO GEOGRÁFICO')}
          </span>
        </div>
        <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl uppercase font-normal text-[#F3F1EE] tracking-tight">
          {t('DESTINATIONS & STATES', 'DESTINOS & ESTADOS')}
        </h1>
        <p className="mt-3 text-xs sm:text-sm text-[#A5A4A8] max-w-2xl leading-relaxed">
          {t(
            'Explore all 26 Brazilian states and the Federal District to browse local adult venues.',
            'Explore todos os 26 estados brasileiros e o Distrito Federal para visualizar estabelecimentos locais.'
          )}
        </p>

        {/* Region Filter Tabs */}
        <div className="mt-6 flex items-center flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setActiveRegion('all')}
            className={`min-h-[40px] px-3.5 py-1.5 font-heading text-xs uppercase tracking-wider rounded-[2px] transition-colors border cursor-pointer ${
              activeRegion === 'all'
                ? 'bg-blood-gradient text-white border-transparent'
                : 'bg-[#19191B] text-[#A5A4A8] border-[#2B2B2F] hover:text-[#F3F1EE]'
            }`}
          >
            {t('ALL STATES', 'TODOS OS ESTADOS')}
          </button>
          {REGIONS.map((reg) => (
            <button
              key={reg.id}
              type="button"
              onClick={() => setActiveRegion(reg.id)}
              className={`min-h-[40px] px-3.5 py-1.5 font-heading text-xs uppercase tracking-wider rounded-[2px] transition-colors border cursor-pointer ${
                activeRegion === reg.id
                  ? 'bg-blood-gradient text-white border-transparent'
                  : 'bg-[#19191B] text-[#A5A4A8] border-[#2B2B2F] hover:text-[#F3F1EE]'
              }`}
            >
              {lang === 'en' ? reg.nameEn : reg.namePt}
            </button>
          ))}
        </div>
      </div>

      {/* States Grid: 2 cols on mobile, 3 on tablet, 4 on desktop */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5">
        {filteredStates.map((state) => {
          const region = REGIONS.find((r) => r.id === state.regionId);
          return (
            <PhotoCard
              key={state.stateCode}
              to={`/states/${state.stateCode}`}
              title={lang === 'en' ? state.stateNameEn : state.stateNamePt}
              subtitle={lang === 'en' ? state.capitalEn : state.capitalPt}
              code={state.stateCode}
              imageUrl={state.imageUrl}
              aspectRatio="2:3"
              category={region ? (lang === 'en' ? region.nameEn : region.namePt) : 'BRAZIL'}
            />
          );
        })}
      </div>
    </div>
  );
};
