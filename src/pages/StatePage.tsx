import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { PhotoCard } from '../components/PhotoCard';
import { BRAZILIAN_STATES, REGIONS, VENUES, VENUE_CATEGORIES } from '../data/content';
import { useLanguage } from '../context/LanguageContext';
import { ArrowLeft, ChevronRight, MapPin, Building2, PlusCircle } from 'lucide-react';

export const StatePage: React.FC = () => {
  const { stateCode } = useParams<{ stateCode: string }>();
  const { lang, t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const state = BRAZILIAN_STATES.find(
    (s) => s.stateCode.toUpperCase() === stateCode?.toUpperCase()
  );

  if (!state) {
    return <Navigate to="/" replace />;
  }

  const region = REGIONS.find((r) => r.id === state.regionId);

  // Venues belonging to this state
  const stateVenues = VENUES.filter(
    (v) => v.stateCode.toUpperCase() === state.stateCode.toUpperCase()
  );

  const filteredVenues = stateVenues.filter((v) => {
    if (selectedCategory === 'all') return true;
    return v.categoryId === selectedCategory;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-14 space-y-8 overflow-x-hidden">
      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono text-[#A5A4A8] flex-wrap">
        <Link to="/" className="hover:text-[#FF173E] transition-colors">
          {t('Home', 'Início')}
        </Link>
        <ChevronRight className="w-3.5 h-3.5 text-[#2B2B2F]" />
        {region && (
          <>
            <Link to={`/regions/${region.slug}`} className="hover:text-[#FF173E] transition-colors">
              {lang === 'en' ? region.nameEn : region.namePt}
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#2B2B2F]" />
          </>
        )}
        <span className="text-[#F3F1EE]">{lang === 'en' ? state.stateNameEn : state.stateNamePt}</span>
      </nav>

      {/* State Header */}
      <div className="border-b border-[#2B2B2F] pb-6 sm:pb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="px-1.5 py-0.5 bg-[#19191B] border border-[#2B2B2F] text-[10px] font-mono font-bold text-[#FF173E] rounded-[1px]">
              {state.stateCode}
            </span>
            <span className="text-xs font-mono text-[#A5A4A8] uppercase tracking-wider">
              {region ? (lang === 'en' ? region.nameEn : region.namePt) : 'Brazil'}
            </span>
          </div>

          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl uppercase font-normal text-[#F3F1EE] tracking-tight">
            {lang === 'en' ? state.stateNameEn : state.stateNamePt}
          </h1>

          <div className="mt-2 flex items-center gap-2 text-xs font-mono text-[#A5A4A8]">
            <MapPin className="w-3.5 h-3.5 text-[#FF173E]" />
            <span>
              {t('Capital:', 'Capital:')} {lang === 'en' ? state.capitalEn : state.capitalPt}
            </span>
          </div>
        </div>

        {region && (
          <Link
            to={`/regions/${region.slug}`}
            className="min-h-[44px] inline-flex items-center gap-2 px-4 py-2 bg-[#111113] hover:bg-[#19191B] border border-[#2B2B2F] hover:border-[#FF173E] text-xs font-heading uppercase tracking-wider text-[#F3F1EE] rounded-[2px] transition-colors shrink-0"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>{lang === 'en' ? `Back to ${region.nameEn}` : `Voltar a ${region.namePt}`}</span>
          </Link>
        )}
      </div>

      {/* Category Filter for this State */}
      {stateVenues.length > 0 && (
        <div className="flex items-center flex-wrap gap-2 pb-2">
          <button
            type="button"
            onClick={() => setSelectedCategory('all')}
            className={`min-h-[40px] px-3.5 py-1.5 font-heading text-xs uppercase tracking-wider rounded-[2px] transition-colors border cursor-pointer ${
              selectedCategory === 'all'
                ? 'bg-blood-gradient text-white border-transparent'
                : 'bg-[#111113] text-[#A5A4A8] border-[#2B2B2F] hover:text-[#F3F1EE]'
            }`}
          >
            {t('ALL VENUES', 'TODOS OS LOCAIS')}
          </button>
          {VENUE_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSelectedCategory(cat.id)}
              className={`min-h-[40px] px-3.5 py-1.5 font-heading text-xs uppercase tracking-wider rounded-[2px] transition-colors border cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-blood-gradient text-white border-transparent'
                  : 'bg-[#111113] text-[#A5A4A8] border-[#2B2B2F] hover:text-[#F3F1EE]'
              }`}
            >
              {lang === 'en' ? cat.nameEn : cat.namePt}
            </button>
          ))}
        </div>
      )}

      {/* Venues Grid or Honest Empty State */}
      {filteredVenues.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredVenues.map((venue) => {
            const cat = VENUE_CATEGORIES.find((c) => c.id === venue.categoryId);
            return (
              <PhotoCard
                key={venue.id}
                to={`/venues/${venue.slug}`}
                title={venue.name}
                subtitle={`${venue.city} · ${cat ? (lang === 'en' ? cat.nameEn : cat.namePt) : ''}`}
                code={venue.stateCode}
                imageUrl={venue.coverImageUrl}
                aspectRatio="16:9"
                category={cat ? (lang === 'en' ? cat.nameEn : cat.namePt) : 'VENUE'}
              />
            );
          })}
        </div>
      ) : (
        /* Honest, clean empty state as required */
        <div className="bg-[#111113] border border-[#2B2B2F] p-8 sm:p-12 text-center rounded-[2px] space-y-4">
          <Building2 className="w-8 h-8 text-[#A5A4A8]/40 mx-auto" />
          <div className="space-y-1">
            <h3 className="font-heading text-2xl uppercase font-normal text-[#F3F1EE]">
              {t('No venues listed yet.', 'Nenhum estabelecimento cadastrado ainda.')}
            </h3>
            <p className="text-xs sm:text-sm text-[#A5A4A8] max-w-md mx-auto">
              {t(
                `Our directory for ${state.stateNameEn} is currently being mapped by authorized correspondents.`,
                `Nosso catálogo para ${state.stateNamePt} está em processo de mapeamento institucional.`
              )}
            </p>
          </div>

          <div className="pt-2">
            <Link
              to="/client-area"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#19191B] hover:bg-[#FF173E] border border-[#2B2B2F] hover:border-[#FF173E] text-[#F3F1EE] hover:text-white font-heading text-xs uppercase tracking-wider rounded-[2px] transition-colors"
            >
              <PlusCircle className="w-4 h-4" />
              <span>{t('Submit a Venue Listing', 'Cadastrar um Estabelecimento')}</span>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};
