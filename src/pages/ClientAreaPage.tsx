import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Building, ShieldCheck, Mail, CheckCircle2, ArrowRight } from 'lucide-react';

export const ClientAreaPage: React.FC = () => {
  const { lang, t } = useLanguage();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [venueName, setVenueName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [cityState, setCityState] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (venueName && contactEmail) {
      setFormSubmitted(true);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16 space-y-10 overflow-x-hidden">
      {/* Header */}
      <div className="border-b border-[#2B2B2F] pb-6 sm:pb-8">
        <div className="flex items-center gap-2 mb-2 font-mono text-xs text-[#FF173E]">
          <Building className="w-3.5 h-3.5" />
          <span className="uppercase tracking-widest font-semibold">
            {t('VENUE MANAGEMENT & PARTNERS', 'GESTÃO DE ESTABELECIMENTOS & PARCEIROS')}
          </span>
        </div>
        <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl uppercase font-normal text-[#F3F1EE] tracking-tight">
          {t('CLIENT AREA & VENUE PORTAL', 'ÁREA DO CLIENTE & PORTAL DO LOCAL')}
        </h1>
        <p className="mt-3 text-xs sm:text-sm text-[#A5A4A8] max-w-2xl leading-relaxed">
          {t(
            'Dedicated portal for verified venue operators, club directors, and event promoters across Brazil to manage listings, event schedules, and employment vacancies.',
            'Portal dedicado a proprietários, diretores de clubes e produtores de eventos no Brasil para gerenciar fichas cadastrais, agendas e editais de vagas.'
          )}
        </p>
      </div>

      {/* Feature Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-[#111113] border border-[#2B2B2F] p-5 rounded-[2px] space-y-2">
          <span className="font-heading text-lg uppercase text-[#F3F1EE] block">
            {t('Verified Directory Listing', 'Cadastro Verificado no Guia')}
          </span>
          <p className="text-xs text-[#A5A4A8] leading-relaxed">
            {t(
              'Publish official photography, verified operating hours, and location amenities without third-party intermediaries.',
              'Publique fotos oficiais, horários verificados de funcionamento e estrutura sem intermediários.'
            )}
          </p>
        </div>

        <div className="bg-[#111113] border border-[#2B2B2F] p-5 rounded-[2px] space-y-2">
          <span className="font-heading text-lg uppercase text-[#F3F1EE] block">
            {t('Event Feed Synchronization', 'Sincronização de Eventos')}
          </span>
          <p className="text-xs text-[#A5A4A8] leading-relaxed">
            {t(
              'Distribute weekly theme nights and circuit festivals directly to thousands of targeted nightlife attendees.',
              'Distribua noites temáticas semanais e festivais de circuito diretamente para o público segmentado.'
            )}
          </p>
        </div>

        <div className="bg-[#111113] border border-[#2B2B2F] p-5 rounded-[2px] space-y-2">
          <span className="font-heading text-lg uppercase text-[#F3F1EE] block">
            {t('Hospitality Recruitment', 'Recrutamento de Equipe')}
          </span>
          <p className="text-xs text-[#A5A4A8] leading-relaxed">
            {t(
              'List verified job openings for bar staff, sound/lighting technicians, door security, and floor managers.',
              'Publique vagas formais para equipe de bar, técnicos de luz/som, portaria e coordenação de pista.'
            )}
          </p>
        </div>
      </div>

      {/* Venue Operator Submission / Request Form */}
      <div className="bg-[#111113] border border-[#2B2B2F] p-6 sm:p-10 rounded-[2px]">
        <h2 className="font-heading text-2xl sm:text-3xl uppercase font-normal text-[#F3F1EE] mb-2">
          {t('REQUEST VENUE ONBOARDING', 'SOLICITAR CADASTRO DE ESTABELECIMENTO')}
        </h2>
        <p className="text-xs sm:text-sm text-[#A5A4A8] mb-6">
          {t(
            'Are you the authorized owner or director of an adult gay establishment in Brazil? Submit your initial credentials below for editorial verification.',
            'Você é proprietário ou diretor autorizado de um estabelecimento adulto gay no Brasil? Envie suas credenciais para verificação editorial.'
          )}
        </p>

        {formSubmitted ? (
          <div className="p-4 bg-[#19191B] border border-[#FF173E] rounded-[2px] flex items-center gap-3 text-sm text-[#F3F1EE]">
            <CheckCircle2 className="w-5 h-5 text-[#FF173E] shrink-0" />
            <div>
              <span className="font-bold block">{t('Onboarding Request Sent', 'Solicitação Enviada com Sucesso')}</span>
              <p className="text-xs text-[#A5A4A8] mt-0.5">
                {t(
                  'Our editorial operations desk will contact you via email to verify business credentials.',
                  'Nossa equipe de operações entrará em contato por e-mail para validar as credenciais do local.'
                )}
              </p>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono text-[#A5A4A8] uppercase mb-1">
                  {t('Establishment Name', 'Nome do Estabelecimento')}
                </label>
                <input
                  type="text"
                  required
                  value={venueName}
                  onChange={(e) => setVenueName(e.target.value)}
                  placeholder="Ex: Thermas Paulista"
                  className="w-full min-h-[44px] bg-[#19191B] border border-[#2B2B2F] focus:border-[#FF173E] text-[#F3F1EE] px-3.5 py-2 text-xs sm:text-sm rounded-[2px] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-[#A5A4A8] uppercase mb-1">
                  {t('City & State (e.g. SP, RJ)', 'Cidade & Estado (ex: São Paulo - SP)')}
                </label>
                <input
                  type="text"
                  required
                  value={cityState}
                  onChange={(e) => setCityState(e.target.value)}
                  placeholder="São Paulo - SP"
                  className="w-full min-h-[44px] bg-[#19191B] border border-[#2B2B2F] focus:border-[#FF173E] text-[#F3F1EE] px-3.5 py-2 text-xs sm:text-sm rounded-[2px] focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono text-[#A5A4A8] uppercase mb-1">
                {t('Official Contact Email', 'E-mail Oficial de Contato')}
              </label>
              <input
                type="email"
                required
                value={contactEmail}
                onChange={(e) => setContactEmail(e.target.value)}
                placeholder="contato@estabelecimento.com.br"
                className="w-full min-h-[44px] bg-[#19191B] border border-[#2B2B2F] focus:border-[#FF173E] text-[#F3F1EE] px-3.5 py-2 text-xs sm:text-sm rounded-[2px] focus:outline-none"
              />
            </div>

            <div className="flex items-center gap-2 text-[11px] font-mono text-[#A5A4A8] pt-1">
              <ShieldCheck className="w-3.5 h-3.5 text-[#FF173E]" />
              <span>
                {t(
                  '18+ verification strictly required. Only legal operating venues eligible.',
                  'Verificação 18+ estrita. Apenas locais devidamente regularizados.'
                )}
              </span>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="min-h-[44px] px-6 py-2.5 bg-blood-gradient hover:opacity-95 text-white font-heading uppercase tracking-wider text-xs font-normal rounded-[2px] transition-opacity cursor-pointer"
              >
                {t('SUBMIT CREDENTIALS', 'ENVIAR CREDENCIAIS')}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
