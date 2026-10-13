import React, { useState } from 'react';
import { EditorialCard } from '../components/EditorialCard';
import { VENUES_DATA } from '../data/content';
import { useLanguage } from '../context/LanguageContext';
import { Building2, ShieldCheck } from 'lucide-react';

export const VenuesPage: React.FC = () => {
  const { lang, t } = useLanguage();
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  const filterOptions = [
    { id: 'all', labelEn: 'All Venues', labelPt: 'Todos os Estabelecimentos' },
    { id: 'club', labelEn: 'Clubs & Dancefloors', labelPt: 'Clubs & Pistas' },
    { id: 'thermas', labelEn: 'Bathhouses & Spas', labelPt: 'Termas & Spas' },
    { id: 'lounge', labelEn: 'Private Lounges', labelPt: 'Lounges Privativos' },
  ];

  const filteredVenues = VENUES_DATA.filter((venue) => {
    if (selectedFilter === 'all') return true;
    if (selectedFilter === 'club') return venue.id.includes('club');
    if (selectedFilter === 'thermas') return venue.id.includes('thermas');
    if (selectedFilter === 'lounge') return venue.id.includes('lounge') || venue.id.includes('cinema');
    return true;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-14 space-y-8 sm:space-y-12 overflow-x-hidden">
      {/* Editorial Header */}
      <div className="border-b border-[#2B2B2F] pb-6 sm:pb-8">
        <div className="flex items-center gap-2 mb-2 font-mono text-xs text-[#F0203E]">
          <Building2 className="w-3.5 h-3.5" />
          <span className="uppercase tracking-widest font-semibold">
            {t('VENUE DIRECTORY', 'DIRETÓRIO DE ESTABELECIMENTOS')}
          </span>
        </div>
        <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl uppercase font-light text-[#F3F1EE] tracking-tight">
          {t('VENUES & SPACES', 'LOCAIS & ESTABELECIMENTOS')}
        </h1>
        <p className="mt-3 text-xs sm:text-sm text-[#A5A4A8] max-w-2xl leading-relaxed">
          {t(
            'Independent index of clubs, bathhouses, and private adult social lounges adhering to certified safety and consent standards.',
            'Índice independente de clubes, saunas e lounges sociais adultos com padrões certificados de segurança e consentimento.'
          )}
        </p>

        {/* Filters: min 44px touch targets on mobile */}
        <div className="mt-6 flex items-center flex-wrap gap-2">
          {filterOptions.map((opt) => (
            <button
              key={opt.id}
              type="button"
              onClick={() => setSelectedFilter(opt.id)}
              className={`min-h-[44px] px-4 py-2 font-heading text-xs uppercase tracking-wider rounded-[2px] transition-colors border cursor-pointer ${
                selectedFilter === opt.id
                  ? 'bg-[#F0203E] text-white border-[#F0203E] font-normal'
                  : 'bg-[#19191B] text-[#A5A4A8] border-[#2B2B2F] hover:text-[#F3F1EE]'
              }`}
            >
              {lang === 'en' ? opt.labelEn : opt.labelPt}
            </button>
          ))}
        </div>
      </div>

      {/* Venues Grid: Single col on mobile, 2 cols on md+ */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        {filteredVenues.map((item, idx) => (
          <EditorialCard
            key={item.id}
            item={item}
            type="venue"
            index={idx}
            aspectRatio="16:9"
          />
        ))}
      </div>

      {/* Consent Charter Strip */}
      <div className="bg-[#111113] border-l-2 border-[#F0203E] border-y border-r border-[#2B2B2F] p-5 sm:p-6 rounded-[2px]">
        <div className="flex items-start gap-3">
          <ShieldCheck className="w-5 h-5 text-[#F0203E] shrink-0 mt-0.5" />
          <div className="space-y-1 text-xs text-[#A5A4A8] leading-relaxed">
            <h3 className="font-heading text-sm uppercase font-normal text-[#F3F1EE]">
              {t('GCB Consent & Integrity Standard', 'Padrão de Integridade e Consentimento GCB')}
            </h3>
            <p>
              {t(
                'All featured spaces must uphold non-negotiable consent policies: No Means No. Unsubstantiated safety or harassment reports lead to immediate de-indexing.',
                'Todos os espaços destacados devem cumprir a política estrita de Não é Não. Relatos comprovados de abuso resultam em descredenciamento imediato.'
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
