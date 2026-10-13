import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { PhotoCard } from '../components/PhotoCard';
import { REGIONS, BRAZILIAN_STATES } from '../data/content';
import { useLanguage } from '../context/LanguageContext';
import { ArrowLeft, ChevronRight, Compass } from 'lucide-react';

export const RegionPage: React.FC = () => {
  const { regionSlug } = useParams<{ regionSlug: string }>();
  const { lang, t } = useLanguage();

  const region = REGIONS.find(
    (r) => r.slug.toLowerCase() === regionSlug?.toLowerCase() || r.id.toLowerCase() === regionSlug?.toLowerCase()
  );

  if (!region) {
    return <Navigate to="/" replace />;
  }

  const states = BRAZILIAN_STATES.filter((s) => s.regionId === region.id);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-14 space-y-8 overflow-x-hidden">
      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono text-[#A5A4A8]">
        <Link to="/" className="hover:text-[#FF173E] transition-colors">
          {t('Home', 'Início')}
        </Link>
        <ChevronRight className="w-3.5 h-3.5 text-[#2B2B2F]" />
        <span className="text-[#F3F1EE]">{lang === 'en' ? region.nameEn : region.namePt}</span>
      </nav>

      {/* Region Header */}
      <div className="border-b border-[#2B2B2F] pb-6 sm:pb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <span className="text-[10px] font-mono text-[#FF173E] uppercase tracking-widest block mb-1">
            {t('BRAZILIAN REGION', 'REGIÃO BRASILEIRA')}
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl uppercase font-normal text-[#F3F1EE] tracking-tight">
            {lang === 'en' ? region.nameEn : region.namePt}
          </h1>
          <p className="mt-2 text-xs sm:text-sm text-[#A5A4A8] max-w-xl">
            {t(
              `States and federal units across the ${region.nameEn} region of Brazil.`,
              `Estados e unidades federativas da região ${region.namePt} do Brasil.`
            )}
          </p>
        </div>

        <Link
          to="/"
          className="min-h-[44px] inline-flex items-center gap-2 px-4 py-2 bg-[#111113] hover:bg-[#19191B] border border-[#2B2B2F] hover:border-[#FF173E] text-xs font-heading uppercase tracking-wider text-[#F3F1EE] rounded-[2px] transition-colors shrink-0"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>{t('All Regions', 'Todas as Regiões')}</span>
        </Link>
      </div>

      {/* States Grid: 2 cols on mobile, 3 on tablet, 4 on desktop */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5">
        {states.map((state) => (
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
    </div>
  );
};
