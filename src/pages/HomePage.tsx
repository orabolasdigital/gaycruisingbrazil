import React, { useState } from 'react';
import { Hero } from '../components/Hero';
import { SectionHeading } from '../components/SectionHeading';
import { EditorialCard } from '../components/EditorialCard';
import {
  DESTINATIONS_DATA,
  VENUES_DATA,
  EVENTS_DATA,
  CREATORS_DATA,
  COMMUNITY_DATA,
  CAREERS_DATA,
} from '../data/content';
import { useLanguage } from '../context/LanguageContext';
import { CheckCircle2, Mail, ShieldCheck } from 'lucide-react';

export const HomePage: React.FC = () => {
  const { lang, t } = useLanguage();
  const [emailInput, setEmailInput] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setNewsletterSubscribed(true);
      setEmailInput('');
    }
  };

  return (
    <div className="space-y-12 sm:space-y-20 pb-16 overflow-x-hidden">
      {/* 1. Hero Section */}
      <Hero />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14 sm:space-y-20">
        {/* 2. Destinations Section: Visual 2:3 Cards */}
        <section aria-labelledby="section-destinations">
          <SectionHeading
            kicker={t('01 / SURVEY', '01 / MAPEAMENTO')}
            title={t('DESTINATIONS', 'DESTINOS')}
            description={t(
              'Key metropolitan centers with active adult nightlife scenes.',
              'Principais centros urbanos com vida noturna gay adulta ativa.'
            )}
            viewAllLink="/destinations"
            viewAllText={t('EXPLORE ALL', 'VER TODOS')}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {DESTINATIONS_DATA.map((dest, idx) => (
              <EditorialCard
                key={dest.id}
                item={dest}
                type="destination"
                index={idx}
                aspectRatio="2:3"
              />
            ))}
          </div>
        </section>

        {/* 3. Venues Section: Architectural 16:9 Cards */}
        <section aria-labelledby="section-venues" className="pt-2">
          <SectionHeading
            kicker={t('02 / DIRECTORY', '02 / DIRETÓRIO')}
            title={t('VENUES & SPACES', 'LOCAIS & ESPAÇOS')}
            description={t(
              'Clubs, bathhouses, and private social lounges with verified safety standards.',
              'Clubes, saunas e lounges sociais com padrões verificados de segurança.'
            )}
            viewAllLink="/venues"
            viewAllText={t('VIEW DIRECTORY', 'VER DIRETÓRIO')}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {VENUES_DATA.map((venue, idx) => (
              <EditorialCard
                key={venue.id}
                item={venue}
                type="venue"
                index={idx}
                aspectRatio="16:9"
              />
            ))}
          </div>
        </section>

        {/* 4. Nightlife & Events Section */}
        <section aria-labelledby="section-events" className="pt-2">
          <SectionHeading
            kicker={t('03 / CALENDAR', '03 / CALENDÁRIO')}
            title={t('NIGHTLIFE & EVENTS', 'NOITE & EVENTOS')}
            description={t(
              'Selected warehouse nights, circuit gatherings, and thematic assemblies.',
              'Noites de galpão, encontros de circuito e reuniões temáticas selecionadas.'
            )}
            viewAllLink="/events"
            viewAllText={t('VIEW CALENDAR', 'VER CALENDÁRIO')}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {EVENTS_DATA.map((event, idx) => (
              <EditorialCard
                key={event.id}
                item={event}
                type="event"
                index={idx}
                aspectRatio="2:3"
              />
            ))}
          </div>
        </section>

        {/* 5. Creators Section */}
        <section aria-labelledby="section-creators" className="pt-2">
          <SectionHeading
            kicker={t('04 / SPOTLIGHT', '04 / DESTAQUE')}
            title={t('CREATORS & ARTISTS', 'CRIADORES & ARTISTAS')}
            description={t(
              'Professional portfolios of independent adult digital creators and visual directors.',
              'Portfólios profissionais de criadores digitais e diretores visuais independentes.'
            )}
            viewAllLink="/creators"
            viewAllText={t('VIEW CREATORS', 'VER CRIADORES')}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {CREATORS_DATA.map((creator, idx) => (
              <EditorialCard
                key={creator.id}
                item={creator}
                type="creator"
                index={idx}
                aspectRatio="2:3"
              />
            ))}
          </div>
        </section>

        {/* 6. Community & Care Section */}
        <section aria-labelledby="section-community" className="pt-2">
          <SectionHeading
            kicker={t('05 / HEALTH & RIGHTS', '05 / SAÚDE & DIREITOS')}
            title={t('COMMUNITY & SUPPORT', 'COMUNIDADE & APOIO')}
            description={t(
              'Essential health guidelines, free public PrEP/PEP access, and legal rights in Brazil.',
              'Orientações essenciais de saúde, acesso gratuito a PrEP/PEP e direitos legais no Brasil.'
            )}
            viewAllLink="/community"
            viewAllText={t('VIEW RESOURCES', 'VER RECURSOS')}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {COMMUNITY_DATA.map((comm, idx) => (
              <EditorialCard
                key={comm.id}
                item={comm}
                type="community"
                index={idx}
                aspectRatio="2:3"
              />
            ))}
          </div>
        </section>

        {/* 7. Careers Section */}
        <section aria-labelledby="section-careers" className="pt-2">
          <SectionHeading
            kicker={t('06 / INDUSTRY', '06 / MERCADO')}
            title={t('HOSPITALITY CAREERS', 'CARREIRAS NA NOITE')}
            description={t(
              'Conventional employment opportunities in adult nightlife operations and production.',
              'Oportunidades formais de trabalho em hospitalidade e produção de vida noturna.'
            )}
            viewAllLink="/careers"
            viewAllText={t('VIEW OPENINGS', 'VER VAGAS')}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {CAREERS_DATA.map((career, idx) => (
              <EditorialCard
                key={career.id}
                item={career}
                type="career"
                index={idx}
                aspectRatio="2:3"
              />
            ))}
          </div>
        </section>

        {/* 8. Editorial Dispatch Newsletter */}
        <section className="bg-[#111113] border border-[#2B2B2F] p-6 sm:p-10 rounded-[2px] relative overflow-hidden">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-2 font-mono text-xs text-[#F0203E]">
              <Mail className="w-3.5 h-3.5" />
              <span className="uppercase tracking-widest font-semibold">
                {t('EDITORIAL DISPATCH', 'BOLETIM EDITORIAL')}
              </span>
            </div>
            <h3 className="font-heading text-3xl sm:text-4xl uppercase font-light text-[#F3F1EE] leading-tight">
              {t('GCB NIGHTLIFE DISPATCH', 'BOLETIM GCB DA NOITE')}
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-[#A5A4A8] leading-relaxed">
              {t(
                'Receive verified editorial updates on destination guides and public health notices.',
                'Receba atualizações editoriais verificadas sobre guias de destinos e comunicados de saúde.'
              )}
            </p>

            {newsletterSubscribed ? (
              <div className="mt-4 p-3 bg-[#19191B] border border-[#F0203E] rounded-[2px] flex items-center gap-2.5 text-xs text-[#F3F1EE]">
                <CheckCircle2 className="w-4 h-4 text-[#F0203E] shrink-0" />
                <span>
                  {t(
                    'Subscription confirmed. You will receive upcoming dispatches.',
                    'Inscrição confirmada. Você receberá os próximos boletins.'
                  )}
                </span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="mt-4 flex flex-col sm:flex-row gap-2.5">
                <input
                  type="email"
                  required
                  placeholder={t('Enter your email address', 'Digite seu endereço de e-mail')}
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  className="flex-1 min-h-[44px] bg-[#19191B] border border-[#2B2B2F] focus:border-[#F0203E] text-[#F3F1EE] px-3.5 py-2.5 text-xs sm:text-sm rounded-[2px] focus:outline-none transition-colors"
                />
                <button
                  type="submit"
                  className="min-h-[44px] px-5 py-2.5 bg-[#F0203E] hover:bg-[#7E1425] text-white font-heading uppercase tracking-wider text-xs font-normal rounded-[2px] transition-colors cursor-pointer shrink-0"
                >
                  {t('SUBSCRIBE', 'INSCREVER-SE')}
                </button>
              </form>
            )}

            <div className="mt-3 flex items-center gap-1.5 text-[10px] font-mono text-[#A5A4A8]">
              <ShieldCheck className="w-3 h-3 text-[#F0203E]" />
              <span>{t('Strict privacy · No spam · Unsubscribe anytime', 'Privacidade estrita · Sem spam · Cancele quando quiser')}</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
