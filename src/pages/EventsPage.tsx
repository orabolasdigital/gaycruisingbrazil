import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { EditorialCard } from '../components/EditorialCard';
import { EVENTS_DATA } from '../data/content';
import { useLanguage } from '../context/LanguageContext';
import { CalendarDays, PlusSquare, ChevronRight } from 'lucide-react';

export const EventsPage: React.FC = () => {
  const { lang, t } = useLanguage();
  const [activeType, setActiveType] = useState<string>('all');
  const [showSubmitModal, setShowSubmitModal] = useState(false);

  const filterOptions = [
    { id: 'all', labelEn: 'All Events', labelPt: 'Toda a Agenda' },
    { id: 'underground', labelEn: 'Underground & Techno', labelPt: 'Underground & Techno' },
    { id: 'circuit', labelEn: 'Circuit Weekends', labelPt: 'Finais de Semana de Circuito' },
    { id: 'leather', labelEn: 'Leather & Socials', labelPt: 'Leather & Encontros' },
  ];

  const filteredEvents = EVENTS_DATA.filter((ev) => {
    if (activeType === 'all') return true;
    if (activeType === 'underground') return ev.id.includes('underground');
    if (activeType === 'circuit') return ev.id.includes('circuit');
    if (activeType === 'leather') return ev.id.includes('leather');
    return true;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-14 space-y-8 sm:space-y-12 overflow-x-hidden">
      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono text-[#A5A4A8]">
        <Link to="/" className="hover:text-[#FF173E] transition-colors">
          {t('Home', 'Início')}
        </Link>
        <ChevronRight className="w-3.5 h-3.5 text-[#2B2B2F]" />
        <span className="text-[#F3F1EE]">{t('Nightlife & Events', 'Noite & Eventos')}</span>
      </nav>

      {/* Editorial Header */}
      <div className="border-b border-[#2B2B2F] pb-6 sm:pb-8">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2 font-mono text-xs text-[#FF173E]">
              <CalendarDays className="w-3.5 h-3.5" />
              <span className="uppercase tracking-widest font-semibold">
                {t('NIGHTLIFE AGENDA', 'AGENDA DA NOITE')}
              </span>
            </div>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl uppercase font-normal text-[#F3F1EE] tracking-tight">
              {t('NIGHTLIFE & EVENTS', 'NOITE & EVENTOS')}
            </h1>
            <p className="mt-3 text-xs sm:text-sm text-[#A5A4A8] max-w-2xl leading-relaxed">
              {t(
                'Curated programming of underground electronic parties, circuit festivals, and thematic assemblies in Brazil.',
                'Programação selecionada de noites de música eletrônica, festivais e encontros temáticos no Brasil.'
              )}
            </p>
          </div>

          <button
            type="button"
            onClick={() => setShowSubmitModal(true)}
            className="min-h-[44px] inline-flex items-center gap-2 px-4 py-2.5 bg-[#19191B] hover:bg-[#FF173E] text-[#F3F1EE] hover:text-white border border-[#2B2B2F] hover:border-[#FF173E] text-xs font-heading uppercase tracking-wider font-normal rounded-[2px] transition-colors cursor-pointer"
          >
            <PlusSquare className="w-4 h-4" />
            <span>{t('SUBMIT EVENT', 'SUBMETER EVENTO')}</span>
          </button>
        </div>

        {/* Filter Buttons */}
        <div className="mt-6 flex items-center flex-wrap gap-2">
          {filterOptions.map((opt) => (
            <button
              key={opt.id}
              type="button"
              onClick={() => setActiveType(opt.id)}
              className={`min-h-[40px] px-3.5 py-1.5 font-heading text-xs uppercase tracking-wider rounded-[2px] transition-colors border cursor-pointer ${
                activeType === opt.id
                  ? 'bg-blood-gradient text-white border-transparent'
                  : 'bg-[#19191B] text-[#A5A4A8] border-[#2B2B2F] hover:text-[#F3F1EE]'
              }`}
            >
              {lang === 'en' ? opt.labelEn : opt.labelPt}
            </button>
          ))}
        </div>
      </div>

      {/* Events Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {filteredEvents.map((item, idx) => (
          <EditorialCard
            key={item.id}
            item={item}
            type="event"
            index={idx}
            aspectRatio="2:3"
          />
        ))}
      </div>

      {/* Event Submission Modal */}
      {showSubmitModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xs flex items-center justify-center p-4"
        >
          <div className="bg-[#111113] border border-[#2B2B2F] max-w-md w-full p-6 sm:p-8 rounded-[2px] relative space-y-4 shadow-2xl">
            <h3 className="font-heading text-3xl uppercase font-normal text-[#F3F1EE]">
              {t('SUBMIT NIGHTLIFE EVENT', 'SUBMETER EVENTO DA NOITE')}
            </h3>
            <p className="text-xs text-[#A5A4A8] leading-relaxed">
              {t(
                'All event entries must strictly enforce 18+ adult admission and maintain visible safety marshals.',
                'Todos os eventos devem cumprir estritamente a entrada para maiores de 18 anos e manter equipe visível de apoio.'
              )}
            </p>
            <div className="p-3 bg-[#19191B] border border-[#2B2B2F] text-xs font-mono text-[#F3F1EE] space-y-1">
              <div className="text-[#A5A4A8] text-[11px]">{t('Editorial Submission Desk:', 'Contato de Produção Editorial:')}</div>
              <div className="text-[#FF173E] font-semibold">events@gaycruisingbrazil.com</div>
            </div>
            <div className="flex justify-end pt-2 border-t border-[#2B2B2F]">
              <button
                type="button"
                onClick={() => setShowSubmitModal(false)}
                className="min-h-[44px] px-5 py-2 bg-[#19191B] hover:bg-[#2B2B2F] text-[#F3F1EE] text-xs font-heading uppercase tracking-wider rounded-[2px] cursor-pointer"
              >
                {t('CLOSE', 'FECHAR')}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
