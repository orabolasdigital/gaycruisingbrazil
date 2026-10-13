import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { PhotoCard } from '../components/PhotoCard';
import { VENUE_CATEGORIES, VENUES, BRAZILIAN_STATES } from '../data/content';
import { useLanguage } from '../context/LanguageContext';
import { Building2, Filter, ChevronRight, Layers } from 'lucide-react';

export const CategoriesPage: React.FC = () => {
  const { categorySlug } = useParams<{ categorySlug?: string }>();
  const { lang, t } = useLanguage();
  const navigate = useNavigate();

  const activeCategory = categorySlug
    ? VENUE_CATEGORIES.find((c) => c.slug === categorySlug)
    : null;

  const [selectedState, setSelectedState] = useState<string>('all');

  const venuesForCategory = VENUES.filter((v) => {
    const matchesCategory = activeCategory ? v.categoryId === activeCategory.id : true;
    const matchesState = selectedState === 'all' ? true : v.stateCode === selectedState;
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
        <Link to="/categories" className="hover:text-[#FF173E] transition-colors">
          {t('Categories', 'Categorias')}
        </Link>
        {activeCategory && (
          <>
            <ChevronRight className="w-3.5 h-3.5 text-[#2B2B2F]" />
            <span className="text-[#F3F1EE]">{lang === 'en' ? activeCategory.nameEn : activeCategory.namePt}</span>
          </>
        )}
      </nav>

      {/* Header */}
      <div className="border-b border-[#2B2B2F] pb-6 sm:pb-8">
        <div className="flex items-center gap-2 mb-2 font-mono text-xs text-[#FF173E]">
          <Layers className="w-3.5 h-3.5" />
          <span className="uppercase tracking-widest font-semibold">
            {t('VENUE ARCHETYPE TAXONOMY', 'TAXONOMIA DE ESTABELECIMENTOS')}
          </span>
        </div>
        <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl uppercase font-normal text-[#F3F1EE] tracking-tight">
          {activeCategory
            ? (lang === 'en' ? activeCategory.nameEn : activeCategory.namePt)
            : t('VENUE CATEGORIES', 'CATEGORIAS DE ESTABELECIMENTOS')}
        </h1>
        <p className="mt-3 text-xs sm:text-sm text-[#A5A4A8] max-w-2xl leading-relaxed">
          {activeCategory
            ? (lang === 'en' ? activeCategory.descriptionEn : activeCategory.descriptionPt)
            : t(
                'Explore Brazil’s gay adult entertainment spaces categorized by venue atmosphere and amenities.',
                'Explore os espaços de entretenimento adulto gay no Brasil categorizados por proposta e estrutura.'
              )}
        </p>

        {/* 4 Category Filter Pills/Buttons */}
        <div className="mt-6 flex items-center flex-wrap gap-2">
          <Link
            to="/categories"
            className={`min-h-[40px] px-3.5 py-1.5 font-heading text-xs uppercase tracking-wider rounded-[2px] transition-colors border ${
              !activeCategory
                ? 'bg-blood-gradient text-white border-transparent'
                : 'bg-[#111113] text-[#A5A4A8] border-[#2B2B2F] hover:text-[#F3F1EE]'
            }`}
          >
            {t('ALL CATEGORIES', 'TODAS')}
          </Link>
          {VENUE_CATEGORIES.map((cat) => (
            <Link
              key={cat.id}
              to={`/categories/${cat.slug}`}
              className={`min-h-[40px] px-3.5 py-1.5 font-heading text-xs uppercase tracking-wider rounded-[2px] transition-colors border ${
                activeCategory?.id === cat.id
                  ? 'bg-blood-gradient text-white border-transparent'
                  : 'bg-[#111113] text-[#A5A4A8] border-[#2B2B2F] hover:text-[#F3F1EE]'
              }`}
            >
              {lang === 'en' ? cat.nameEn : cat.namePt}
            </Link>
          ))}
        </div>
      </div>

      {/* State Filter for the selected Category */}
      <div className="flex items-center flex-wrap gap-2 text-xs font-mono">
        <span className="text-[#A5A4A8] mr-1 uppercase text-[11px]">{t('Filter by State:', 'Filtrar por Estado:')}</span>
        <button
          type="button"
          onClick={() => setSelectedState('all')}
          className={`px-2.5 py-1 rounded-[1px] border cursor-pointer ${
            selectedState === 'all'
              ? 'bg-[#FF173E] text-white border-[#FF173E]'
              : 'bg-[#19191B] text-[#A5A4A8] border-[#2B2B2F] hover:text-[#F3F1EE]'
          }`}
        >
          {t('All States', 'Todos os Estados')}
        </button>
        {['SP', 'RJ', 'SC', 'BA', 'MG'].map((code) => (
          <button
            key={code}
            type="button"
            onClick={() => setSelectedState(code)}
            className={`px-2.5 py-1 rounded-[1px] border cursor-pointer ${
              selectedState === code
                ? 'bg-[#FF173E] text-white border-[#FF173E]'
                : 'bg-[#19191B] text-[#A5A4A8] border-[#2B2B2F] hover:text-[#F3F1EE]'
            }`}
          >
            {code}
          </button>
        ))}
      </div>

      {/* Venues Grid */}
      {venuesForCategory.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {venuesForCategory.map((venue) => {
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
        <div className="bg-[#111113] border border-[#2B2B2F] p-8 sm:p-12 text-center rounded-[2px] space-y-3">
          <Building2 className="w-8 h-8 text-[#A5A4A8]/40 mx-auto" />
          <h3 className="font-heading text-2xl uppercase font-normal text-[#F3F1EE]">
            {t('No venues listed yet for this selection.', 'Nenhum estabelecimento cadastrado para esta seleção.')}
          </h3>
          <p className="text-xs sm:text-sm text-[#A5A4A8] max-w-md mx-auto">
            {t(
              'Our correspondents are continuously updating the directory across Brazil.',
              'Nosso catálogo está sendo continuamente atualizado por correspondentes em todo o Brasil.'
            )}
          </p>
        </div>
      )}
    </div>
  );
};
