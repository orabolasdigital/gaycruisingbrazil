import React from 'react';
import { EditorialCard } from '../components/EditorialCard';
import { CREATORS_DATA } from '../data/content';
import { useLanguage } from '../context/LanguageContext';
import { Camera, UserCheck } from 'lucide-react';

export const CreatorsPage: React.FC = () => {
  const { lang, t } = useLanguage();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-14 space-y-8 sm:space-y-12 overflow-x-hidden">
      {/* Editorial Header */}
      <div className="border-b border-[#2B2B2F] pb-6 sm:pb-8">
        <div className="flex items-center gap-2 mb-2 font-mono text-xs text-[#F0203E]">
          <Camera className="w-3.5 h-3.5" />
          <span className="uppercase tracking-widest font-semibold">
            {t('CREATOR DIRECTORY', 'DIRETÓRIO DE CRIADORES')}
          </span>
        </div>
        <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl uppercase font-light text-[#F3F1EE] tracking-tight">
          {t('CREATORS & ARTISTS', 'CRIADORES & ARTISTAS')}
        </h1>
        <p className="mt-3 text-xs sm:text-sm text-[#A5A4A8] max-w-2xl leading-relaxed">
          {t(
            'Institutional showcase of independent adult digital creators, photographers, and visual directors shaping queer aesthetics in Brazil.',
            'Mostra institucional de criadores digitais adultos, fotógrafos e diretores visuais independentes no Brasil.'
          )}
        </p>
      </div>

      {/* Non-Explicit Protocol Banner */}
      <div className="bg-[#111113] border border-[#2B2B2F] p-4 sm:p-5 rounded-[2px] flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <UserCheck className="w-5 h-5 text-[#F0203E] shrink-0" />
          <div className="text-xs text-[#A5A4A8]">
            <span className="font-heading uppercase text-sm font-normal text-[#F3F1EE] block">
              {t('Strict Non-Explicit Standard', 'Padrão Rigoroso Não Explícito')}
            </span>
            <p className="mt-0.5">
              {t(
                'All GCB creator profiles focus exclusively on artistic direction, portfolios, and professional bios without explicit content.',
                'Todos os perfis de criadores no GCB focam exclusivamente em direção artística, portfólios e bios profissionais, sem conteúdo explícito.'
              )}
            </p>
          </div>
        </div>
      </div>

      {/* Creators Grid: 2:3 ratio */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {CREATORS_DATA.map((item, idx) => (
          <EditorialCard
            key={item.id}
            item={item}
            type="creator"
            index={idx}
            aspectRatio="2:3"
          />
        ))}
      </div>
    </div>
  );
};
