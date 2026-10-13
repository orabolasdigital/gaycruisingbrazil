import React, { useState } from 'react';
import { EditorialCard } from '../components/EditorialCard';
import { DESTINATIONS_DATA } from '../data/content';
import { useLanguage } from '../context/LanguageContext';
import { Navigation } from 'lucide-react';

export const DestinationsPage: React.FC = () => {
  const { lang, t } = useLanguage();
  const [activeRegion, setActiveRegion] = useState<string>('all');

  const regions = [
    { id: 'all', labelEn: 'All Destinations', labelPt: 'Todos os Destinos' },
    { id: 'sudeste', labelEn: 'Southeast (SP / RJ)', labelPt: 'Sudeste (SP / RJ)' },
    { id: 'sul', labelEn: 'South (SC)', labelPt: 'Sul (SC)' },
    { id: 'nordeste', labelEn: 'Northeast (BA)', labelPt: 'Nordeste (BA)' },
  ];

  const filtered = DESTINATIONS_DATA.filter((item) => {
    if (activeRegion === 'all') return true;
    if (activeRegion === 'sudeste') return item.id === 'sao-paulo' || item.id === 'rio-de-janeiro';
    if (activeRegion === 'sul') return item.id === 'florianopolis';
    if (activeRegion === 'nordeste') return item.id === 'salvador';
    return true;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-14 space-y-8 sm:space-y-12 overflow-x-hidden">
      {/* Editorial Header */}
      <div className="border-b border-[#2B2B2F] pb-6 sm:pb-8">
        <div className="flex items-center gap-2 mb-2 font-mono text-xs text-[#F0203E]">
          <Navigation className="w-3.5 h-3.5" />
          <span className="uppercase tracking-widest font-semibold">
            {t('GEOGRAPHIC DIRECTORY', 'DIRETÓRIO GEOGRÁFICO')}
          </span>
        </div>
        <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl uppercase font-light text-[#F3F1EE] tracking-tight">
          {t('DESTINATIONS', 'DESTINOS')}
        </h1>
        <p className="mt-3 text-xs sm:text-sm text-[#A5A4A8] max-w-2xl leading-relaxed">
          {t(
            'Curated mapping of key Brazilian metropolitan centers with active adult nightlife ecosystems.',
            'Mapeamento dos principais centros metropolitanos brasileiros com vida noturna adulta ativa.'
          )}
        </p>

        {/* Region Filter Tabs: touch target 44px on mobile */}
        <div className="mt-6 flex items-center flex-wrap gap-2">
          {regions.map((reg) => (
            <button
              key={reg.id}
              type="button"
              onClick={() => setActiveRegion(reg.id)}
              className={`min-h-[44px] px-4 py-2 font-heading text-xs uppercase tracking-wider rounded-[2px] transition-colors border cursor-pointer ${
                activeRegion === reg.id
                  ? 'bg-[#F0203E] text-white border-[#F0203E] font-normal'
                  : 'bg-[#19191B] text-[#A5A4A8] border-[#2B2B2F] hover:text-[#F3F1EE]'
              }`}
            >
              {lang === 'en' ? reg.labelEn : reg.labelPt}
            </button>
          ))}
        </div>
      </div>

      {/* Editorial Grid: Single column on mobile, 2 on tablet, 3 on desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {filtered.map((item, idx) => (
          <EditorialCard
            key={item.id}
            item={item}
            type="destination"
            index={idx}
            aspectRatio="2:3"
          />
        ))}
      </div>
    </div>
  );
};
