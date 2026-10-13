import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PhotoCard } from '../components/PhotoCard';
import { VENUES, VENUE_CATEGORIES, BRAZILIAN_STATES } from '../data/content';
import { useLanguage } from '../context/LanguageContext';
import { Building2, ShieldCheck, ChevronRight } from 'lucide-react';

export const VenuesPage: React.FC = () => {
  const { lang, t } = useLanguage();
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [selectedState, setSelectedState] = useState<string>('all');

  const filteredVenues = VENUES.filter((venue) => {
    const matchesCategory = selectedFilter === 'all' ? true : venue.categoryId === selectedFilter;
    const matchesState = selectedState === 'all' ? true : venue.stateCode === selectedState;
    return matchesCategory && matchesState;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-14 space-y-8 sm:space-y-12 overflow-x-hidden">
      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono text-[#A5A4A8]">
        <Link to="/" className="hover:text-[#FF173E] transition-colors">
          {t('Home', 'Início')}
        </Link>
        <ChevronRight className="w-3.5 h-3.5 text-[#2B2B2F]" />
        <span className="text-[#F3F1EE]">{t('Venues & Directory', 'Locais & Estabelecimentos')}</span>
      </nav>

      {/* Header */}
      <div className="border-b border-[#2B2B2F] pb-6 sm:pb-8">
        <div className="flex items-center gap-2 mb-2 font-mono text-xs text-[#FF173E]">
          <Building2 className="w-3.5 h-3.5" />
          <span className="uppercase tracking-widest font-semibold">
            {t('VERIFIED VENUE DIRECTORY', 'DIRETÓRIO DE ESTABELECIMENTOS')}
          </span>
        </div>
        <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl uppercase font-normal text-[#F3F1EE] tracking-tight">
          {t('VENUES & SPACES', 'LOCAIS & ESTABELECIMENTOS')}
        </h1>
        <p className="mt-3 text-xs sm:text-sm text-[#A5A4A8] max-w-2xl leading-relaxed">
          {t(
            'Independent index of bathhouses, sex clubs, cruising bars, and adult cabins across Brazil.',
            'Índice independente de saunas, sex clubs, bares cruiser e cabines adultas no Brasil.'
          )}
        </p>

        {/* Category Filters */}
        <div className="mt-6 flex items-center flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setSelectedFilter('all')}
            className={`min-h-[40px] px-3.5 py-1.5 font-heading text-xs uppercase tracking-wider rounded-[2px] transition-colors border cursor-pointer ${
              selectedFilter === 'all'
                ? 'bg-blood-gradient text-white border-transparent'
                : 'bg-[#19191B] text-[#A5A4A8] border-[#2B2B2F] hover:text-[#F3F1EE]'
            }`}
          >
            {t('ALL VENUES', 'TODOS OS LOCAIS')}
          </button>
          {VENUE_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSelectedFilter(cat.id)}
              className={`min-h-[40px] px-3.5 py-1.5 font-heading text-xs uppercase tracking-wider rounded-[2px] transition-colors border cursor-pointer ${
                selectedFilter === cat.id
                  ? 'bg-blood-gradient text-white border-transparent'
                  : 'bg-[#19191B] text-[#A5A4A8] border-[#2B2B2F] hover:text-[#F3F1EE]'
              }`}
            >
              {lang === 'en' ? cat.nameEn : cat.namePt}
            </button>
          ))}
        </div>
      </div>

      {/* Venues Grid with PhotoCard */}
      {filteredVenues.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredVenues.map((venue) => {
            const cat = VENUE_CATEGORIES.find((c) => c.id === venue.categoryId);
            return (
              <PhotoCard
                key={venue.id}
                to={`/venues/${venue.slug}`}
                title={venue.name}
                subtitle={`${venue.city} · ${venue.stateCode}`}
                code={venue.stateCode}
                imageUrl={venue.coverImageUrl}
                aspectRatio="16:9"
                category={cat ? (lang === 'en' ? cat.nameEn : cat.namePt) : 'VENUE'}
              />
            );
          })}
        </div>
      ) : (
        <div className="bg-[#111113] border border-[#2B2B2F] p-8 text-center rounded-[2px] space-y-2">
          <Building2 className="w-8 h-8 text-[#A5A4A8]/40 mx-auto" />
          <h3 className="font-heading text-xl uppercase font-normal text-[#F3F1EE]">
            {t('No venues listed yet for this filter.', 'Nenhum estabelecimento cadastrado para este filtro.')}
          </h3>
        </div>
      )}

      {/* Consent Charter Strip */}
      <div className="bg-[#111113] border-l-2 border-[#FF173E] border-y border-r border-[#2B2B2F] p-5 sm:p-6 rounded-[2px]">
        <div className="flex items-start gap-3">
          <ShieldCheck className="w-5 h-5 text-[#FF173E] shrink-0 mt-0.5" />
          <div className="space-y-1 text-xs text-[#A5A4A8] leading-relaxed">
            <h3 className="font-heading text-base uppercase font-normal text-[#F3F1EE]">
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
