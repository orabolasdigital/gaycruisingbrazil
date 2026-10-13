import React from 'react';
import { Link } from 'react-router-dom';
import { EditorialCard } from '../components/EditorialCard';
import { COMMUNITY_DATA } from '../data/content';
import { useLanguage } from '../context/LanguageContext';
import { HeartHandshake, ChevronRight } from 'lucide-react';

export const CommunityPage: React.FC = () => {
  const { lang, t } = useLanguage();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-14 space-y-8 sm:space-y-12 overflow-x-hidden">
      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono text-[#A5A4A8]">
        <Link to="/" className="hover:text-[#FF173E] transition-colors">
          {t('Home', 'Início')}
        </Link>
        <ChevronRight className="w-3.5 h-3.5 text-[#2B2B2F]" />
        <span className="text-[#F3F1EE]">{t('Community & Support', 'Comunidade & Apoio')}</span>
      </nav>

      {/* Editorial Header */}
      <div className="border-b border-[#2B2B2F] pb-6 sm:pb-8">
        <div className="flex items-center gap-2 mb-2 font-mono text-xs text-[#FF173E]">
          <HeartHandshake className="w-3.5 h-3.5" />
          <span className="uppercase tracking-widest font-semibold">
            {t('PUBLIC HEALTH & SUPPORT', 'SAÚDE PÚBLICA & APOIO')}
          </span>
        </div>
        <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl uppercase font-normal text-[#F3F1EE] tracking-tight">
          {t('COMMUNITY & SUPPORT', 'COMUNIDADE & APOIO')}
        </h1>
        <p className="mt-3 text-xs sm:text-sm text-[#A5A4A8] max-w-2xl leading-relaxed">
          {t(
            'Essential resources on preventative sexual healthcare through Brazil’s SUS, nightlife harm reduction, and legal protections.',
            'Recursos essenciais sobre saúde preventiva no SUS, redução de danos na vida noturna e proteção legal.'
          )}
        </p>
      </div>

      {/* Emergency Hotlines Emergency Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
        <div className="bg-[#111113] border-l-2 border-[#FF173E] border-y border-r border-[#2B2B2F] p-5 rounded-[2px] space-y-2">
          <div className="flex items-center justify-between text-xs font-mono text-[#A5A4A8]">
            <span className="text-[#FF173E] font-bold">DIAL 100</span>
            <span>FEDERAL GOVERNMENT</span>
          </div>
          <h2 className="font-heading text-xl uppercase font-normal text-[#F3F1EE]">
            {t('Human Rights Hotline', 'Disque Direitos Humanos')}
          </h2>
          <p className="text-xs text-[#A5A4A8] leading-relaxed">
            {t(
              'Free 24/7 federal phone line for filing official reports of discrimination based on sexual orientation or gender identity.',
              'Canal federal gratuito 24h para registro de queixas formais de violação de direitos humanos e discriminação.'
            )}
          </p>
        </div>

        <div className="bg-[#111113] border-l-2 border-[#FF173E] border-y border-r border-[#2B2B2F] p-5 rounded-[2px] space-y-2">
          <div className="flex items-center justify-between text-xs font-mono text-[#A5A4A8]">
            <span className="text-[#FF173E] font-bold">DIAL 136</span>
            <span>MINISTRY OF HEALTH</span>
          </div>
          <h2 className="font-heading text-xl uppercase font-normal text-[#F3F1EE]">
            {t('SUS Healthcare & PrEP / PEP', 'SUS Saúde & PrEP / PEP')}
          </h2>
          <p className="text-xs text-[#A5A4A8] leading-relaxed">
            {t(
              'Information on public clinics dispensing free PrEP and emergency Post-Exposure Prophylaxis (PEP within 72h).',
              'Informações sobre postos públicos que fornecem PrEP gratuita e Profilaxia Pós-Exposição de emergência (PEP em até 72h).'
            )}
          </p>
        </div>

        <div className="bg-[#111113] border-l-2 border-[#FF173E] border-y border-r border-[#2B2B2F] p-5 rounded-[2px] space-y-2">
          <div className="flex items-center justify-between text-xs font-mono text-[#A5A4A8]">
            <span className="text-[#FF173E] font-bold">DIAL 188</span>
            <span>CVV BRASIL</span>
          </div>
          <h2 className="font-heading text-xl uppercase font-normal text-[#F3F1EE]">
            {t('Emotional Crisis Support', 'Apoio Emocional Gratuito')}
          </h2>
          <p className="text-xs text-[#A5A4A8] leading-relaxed">
            {t(
              'Voluntary, confidential 24/7 emotional support and crisis intervention available across Brazil.',
              'Atendimento voluntário, anônimo e confidencial 24h para suporte psicológico e acolhimento emocional em todo o Brasil.'
            )}
          </p>
        </div>
      </div>

      {/* Community Editorial Articles: 2:3 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {COMMUNITY_DATA.map((item, idx) => (
          <EditorialCard
            key={item.id}
            item={item}
            type="community"
            index={idx}
            aspectRatio="2:3"
          />
        ))}
      </div>
    </div>
  );
};
