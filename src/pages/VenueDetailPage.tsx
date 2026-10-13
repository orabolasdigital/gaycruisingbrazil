import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { VENUES, VENUE_CATEGORIES, BRAZILIAN_STATES } from '../data/content';
import { useLanguage } from '../context/LanguageContext';
import {
  ArrowLeft,
  ChevronRight,
  MapPin,
  Clock,
  Globe,
  Share2,
  ShieldAlert,
  Calendar,
  ExternalLink,
  Navigation,
  CheckCircle2,
} from 'lucide-react';

export const VenueDetailPage: React.FC = () => {
  const { venueSlug } = useParams<{ venueSlug: string }>();
  const { lang, t } = useLanguage();

  const venue = VENUES.find(
    (v) => v.slug.toLowerCase() === venueSlug?.toLowerCase() || v.id.toLowerCase() === venueSlug?.toLowerCase()
  );

  if (!venue) {
    return <Navigate to="/" replace />;
  }

  const category = VENUE_CATEGORIES.find((c) => c.id === venue.categoryId);
  const state = BRAZILIAN_STATES.find((s) => s.stateCode === venue.stateCode);

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${venue.name}, ${venue.city}, ${venue.stateCode}, Brazil`
  )}`;

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-14 space-y-8 overflow-x-hidden">
      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono text-[#A5A4A8] flex-wrap">
        <Link to="/" className="hover:text-[#FF173E] transition-colors">
          {t('Home', 'Início')}
        </Link>
        <ChevronRight className="w-3.5 h-3.5 text-[#2B2B2F]" />
        {state && (
          <>
            <Link to={`/states/${state.stateCode}`} className="hover:text-[#FF173E] transition-colors">
              {lang === 'en' ? state.stateNameEn : state.stateNamePt}
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#2B2B2F]" />
          </>
        )}
        <span className="text-[#F3F1EE] truncate max-w-[200px]">{venue.name}</span>
      </nav>

      {/* Main Photographic Header Banner */}
      <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] bg-[#111113] border border-[#2B2B2F] rounded-[2px] overflow-hidden select-none">
        {venue.coverImageUrl ? (
          <img
            src={venue.coverImageUrl}
            alt={venue.name}
            className="w-full h-full object-cover"
            draggable={false}
          />
        ) : (
          /* Neutral Architectural Noir Placeholder */
          <div className="absolute inset-0 bg-gradient-to-br from-[#111113] via-[#0d0d0f] to-[#19191B] flex flex-col justify-between p-6">
            <div className="flex items-center justify-between text-xs font-mono text-[#A5A4A8]">
              <span className="text-[#FF173E] font-bold tracking-widest uppercase">
                {category ? (lang === 'en' ? category.nameEn : category.namePt) : 'VENUE'}
              </span>
              <span className="px-2 py-0.5 bg-[#19191B] border border-[#2B2B2F] text-[10px] text-[#F3F1EE]">
                {venue.stateCode} · {venue.city}
              </span>
            </div>
            <div className="text-center my-auto">
              <span className="font-heading text-5xl sm:text-7xl font-normal text-[#2B2B2F] tracking-wide block">
                {venue.name}
              </span>
            </div>
            <div className="flex items-center justify-between text-[10px] font-mono text-[#A5A4A8]/60">
              <span>GCB ARCHIVE</span>
              <span className="text-[#FF173E]">18+ ADULT</span>
            </div>
          </div>
        )}

        {/* Gradient Scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none" />

        {/* Headline over cover */}
        <div className="absolute bottom-0 inset-x-0 p-5 sm:p-8 z-10 space-y-1">
          <div className="flex items-center gap-2 mb-1 flex-wrap">
            <span className="px-2 py-0.5 bg-[#FF173E] text-white font-mono text-[10px] uppercase font-bold rounded-[1px]">
              {category ? (lang === 'en' ? category.nameEn : category.namePt) : 'VENUE'}
            </span>
            <span className="px-2 py-0.5 bg-black/70 backdrop-blur-xs border border-[#2B2B2F] text-[10px] font-mono text-[#A5A4A8] rounded-[1px]">
              {venue.city}, {venue.stateCode}
            </span>
            <span className="px-2 py-0.5 bg-black/70 backdrop-blur-xs border border-[#2B2B2F] text-[10px] font-mono text-[#FF173E] font-bold rounded-[1px]">
              18+
            </span>
          </div>

          <h1 className="font-heading text-4xl sm:text-6xl uppercase font-normal text-white tracking-tight leading-none">
            {venue.name}
          </h1>
        </div>
      </div>

      {/* Main Content & Sidebar Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column (8 cols): Description, Features, Events */}
        <div className="lg:col-span-8 space-y-8">
          {/* Objective Description */}
          <div className="bg-[#111113] border border-[#2B2B2F] p-6 sm:p-8 rounded-[2px] space-y-4">
            <h2 className="font-heading text-2xl uppercase font-normal text-[#F3F1EE] border-b border-[#2B2B2F] pb-2">
              {t('ABOUT THIS VENUE', 'SOBRE O ESTABELECIMENTO')}
            </h2>
            <p className="text-sm sm:text-base text-[#A5A4A8] leading-relaxed">
              {lang === 'en' ? venue.descriptionEn : venue.descriptionPt}
            </p>

            {/* Verified Amenities / Features */}
            {venue.featuresEn && venue.featuresEn.length > 0 && (
              <div className="pt-4 border-t border-[#2B2B2F] space-y-2">
                <span className="text-[11px] font-mono text-[#A5A4A8] uppercase tracking-wider block">
                  {t('FACILITIES & AMENITIES', 'ESTRUTURA & FACILIDADES')}
                </span>
                <div className="flex flex-wrap gap-2">
                  {(lang === 'en' ? venue.featuresEn : venue.featuresPt || venue.featuresEn).map((feat) => (
                    <span
                      key={feat}
                      className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#19191B] border border-[#2B2B2F] text-xs font-mono text-[#F3F1EE] rounded-[1px]"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#FF173E]" />
                      <span>{feat}</span>
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Photographic Gallery Placeholders */}
          <div className="bg-[#111113] border border-[#2B2B2F] p-6 sm:p-8 rounded-[2px] space-y-4">
            <h2 className="font-heading text-2xl uppercase font-normal text-[#F3F1EE] border-b border-[#2B2B2F] pb-2">
              {t('VENUE GALLERY', 'GALERIA FOTOGRÁFICA')}
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {[1, 2, 3].map((idx) => (
                <div
                  key={idx}
                  className="aspect-[4/3] bg-[#19191B] border border-[#2B2B2F] rounded-[2px] flex flex-col justify-between p-3 select-none"
                >
                  <span className="text-[9px] font-mono text-[#A5A4A8]/60">0{idx}</span>
                  <div className="text-center font-heading text-xs uppercase text-[#A5A4A8]/40">
                    {t('ARCHIVE SHOT', 'REGISTRO')}
                  </div>
                  <span className="text-[9px] font-mono text-[#FF173E]/70 text-right">GCB</span>
                </div>
              ))}
            </div>
            <p className="text-[11px] font-mono text-[#A5A4A8]/60">
              {t(
                'High-resolution non-explicit photography provided by verified venue management.',
                'Fotografias não explícitas fornecidas pela gestão verificada do estabelecimento.'
              )}
            </p>
          </div>

          {/* Event Schedule Container (Structured for future verified feeds) */}
          <div className="bg-[#111113] border border-[#2B2B2F] p-6 sm:p-8 rounded-[2px] space-y-4">
            <div className="flex items-center justify-between border-b border-[#2B2B2F] pb-2">
              <h2 className="font-heading text-2xl uppercase font-normal text-[#F3F1EE]">
                {t('UPCOMING PROGRAMMING', 'PROGRAMAÇÃO & EVENTOS')}
              </h2>
              <Calendar className="w-4 h-4 text-[#FF173E]" />
            </div>

            <p className="text-xs sm:text-sm text-[#A5A4A8] leading-relaxed">
              {t(
                'Weekly theme nights, circuit guest DJs, and resident schedules will be synchronized directly via the official venue feed.',
                'Noites temáticas semanais, DJs convidados e programações residentes serão sincronizados via canal oficial do estabelecimento.'
              )}
            </p>

            <div className="p-3 bg-[#19191B] border border-[#2B2B2F] rounded-[1px] text-xs font-mono text-[#A5A4A8]">
              {t('Official Event Feed:', 'Canal de Eventos Oficial:')}{' '}
              <span className="text-[#FF173E]">
                {venue.officialEventFeedUrl || t('Awaiting direct integration', 'Aguardando integração direta')}
              </span>
            </div>
          </div>
        </div>

        {/* Right Column (4 cols): Practical Details & Actions */}
        <div className="lg:col-span-4 space-y-6">
          {/* Practical Card */}
          <div className="bg-[#111113] border border-[#2B2B2F] p-6 rounded-[2px] space-y-5">
            <h3 className="font-heading text-xl uppercase font-normal text-[#F3F1EE] border-b border-[#2B2B2F] pb-2">
              {t('PRACTICAL DETAILS', 'INFORMAÇÕES PRÁTICAS')}
            </h3>

            {/* Address */}
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs font-mono text-[#A5A4A8]">
                <MapPin className="w-3.5 h-3.5 text-[#FF173E]" />
                <span className="uppercase">{t('LOCATION', 'LOCALIZAÇÃO')}</span>
              </div>
              <p className="text-xs sm:text-sm text-[#F3F1EE] font-mono pl-5.5">
                {venue.address ? `${venue.address}, ${venue.city} - ${venue.stateCode}` : `${venue.city} - ${venue.stateCode}`}
              </p>
            </div>

            {/* Opening Hours */}
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs font-mono text-[#A5A4A8]">
                <Clock className="w-3.5 h-3.5 text-[#FF173E]" />
                <span className="uppercase">{t('HOURS', 'HORÁRIO')}</span>
              </div>
              <p className="text-xs sm:text-sm text-[#F3F1EE] font-mono pl-5.5">
                {lang === 'en' ? venue.openingHoursEn : venue.openingHoursPt || venue.openingHoursEn}
              </p>
            </div>

            {/* Official Website */}
            {venue.websiteUrl && (
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-xs font-mono text-[#A5A4A8]">
                  <Globe className="w-3.5 h-3.5 text-[#FF173E]" />
                  <span className="uppercase">{t('OFFICIAL WEBSITE', 'SITE OFICIAL')}</span>
                </div>
                <div className="pl-5.5">
                  <a
                    href={venue.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono text-[#FF173E] hover:underline inline-flex items-center gap-1"
                  >
                    <span>{venue.websiteUrl.replace('https://', '')}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            )}

            {/* Open Map CTA */}
            <div className="pt-2">
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full min-h-[46px] flex items-center justify-center gap-2 px-4 py-2.5 bg-blood-gradient hover:opacity-90 text-white font-heading text-sm uppercase tracking-wider rounded-[2px] transition-opacity"
              >
                <Navigation className="w-4 h-4" />
                <span>{t('OPEN IN MAPS', 'ABRIR NO MAPA')}</span>
              </a>
            </div>
          </div>

          {/* 18+ Classification Warning */}
          <div className="bg-[#111113] border border-[#2B2B2F] p-4 rounded-[2px] flex items-start gap-3">
            <ShieldAlert className="w-5 h-5 text-[#FF173E] shrink-0 mt-0.5" />
            <div className="text-[11px] font-mono text-[#A5A4A8] leading-relaxed">
              <span className="text-[#F3F1EE] font-bold block uppercase mb-0.5">
                {t('STRICTLY 18+ ADULT', 'ESTRITAMENTE MAIORES DE 18')}
              </span>
              {t(
                'Original government-issued photo ID required at door. No minors permitted.',
                'Apresentação de documento oficial com foto obrigatória na portaria. Proibida entrada de menores.'
              )}
            </div>
          </div>

          {/* Claim / Edit Portal */}
          <div className="p-4 bg-[#19191B] border border-[#2B2B2F] rounded-[2px] text-xs space-y-2">
            <span className="font-heading uppercase text-sm font-normal text-[#F3F1EE] block">
              {t('OWNER OR PROMOTER?', 'PROPRIETÁRIO OU PRODUTOR?')}
            </span>
            <p className="text-[11px] text-[#A5A4A8] leading-relaxed">
              {t(
                'Claim this listing or update operating details through the official Client Area.',
                'Reivindique esta ficha ou atualize dados cadastrais pela Área do Cliente oficial.'
              )}
            </p>
            <Link
              to="/client-area"
              className="inline-block text-[11px] font-mono text-[#FF173E] hover:underline"
            >
              {t('Access Client Portal →', 'Acessar Área do Cliente →')}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
