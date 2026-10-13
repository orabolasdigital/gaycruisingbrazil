import React from 'react';
import { Link } from 'react-router-dom';
import { HeartHandshake, PhoneCall, ShieldCheck } from 'lucide-react';
import { NAV_ITEMS } from '../data/content';
import { useLanguage } from '../context/LanguageContext';

export const Footer: React.FC = () => {
  const { lang, t } = useLanguage();

  return (
    <footer className="bg-[#080809] border-t border-[#2B2B2F] text-[#A5A4A8] text-xs no-print">
      {/* Top Healthcare Notice Bar */}
      <div className="bg-[#111113] border-b border-[#2B2B2F] py-3.5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-xs font-mono">
          <div className="flex items-center gap-2 text-[#F3F1EE]">
            <HeartHandshake className="w-4 h-4 text-[#F0203E] shrink-0" />
            <span className="font-semibold uppercase tracking-wider text-[11px]">
              {t('PUBLIC HEALTH & SUPPORT:', 'SAÚDE PÚBLICA & APOIO:')}
            </span>
            <span className="text-[#A5A4A8] text-[11px]">
              {t(
                'Free PrEP/PEP via Brazil’s SUS network · Confidential screening',
                'PrEP/PEP 100% gratuita no SUS · Testagem confidencial'
              )}
            </span>
          </div>

          <div className="flex items-center flex-wrap gap-3 text-[11px] text-[#A5A4A8]">
            <span className="inline-flex items-center gap-1">
              <PhoneCall className="w-3 h-3 text-[#F0203E]" />
              <span>{t('Human Rights: Dial 100', 'Direitos Humanos: Disque 100')}</span>
            </span>
            <span>·</span>
            <span>SUS: 136</span>
            <span>·</span>
            <span>CVV: 188</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10">
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex flex-col items-start leading-none">
              <div className="flex items-center gap-1.5">
                <span className="font-heading font-normal text-2xl tracking-wide text-[#F3F1EE]">
                  GAY CRUISING
                </span>
                <span className="w-1.5 h-1.5 bg-[#F0203E] rounded-[1px] mt-0.5" />
              </div>
              <span className="font-heading text-xs font-light tracking-[0.32em] text-[#A5A4A8]">
                BRAZIL
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[#A5A4A8] leading-relaxed max-w-sm">
              {t(
                "An independent editorial guide to Brazil's gay adult nightlife, venues, creators, and community.",
                "Portal editorial independente dedicado ao entretenimento noturno gay adulto, locais, criadores e comunidade no Brasil."
              )}
            </p>

            <div className="pt-1 flex items-center gap-2 font-mono text-[10px]">
              <span className="px-1.5 py-0.5 bg-[#111113] border border-[#2B2B2F] text-[#F0203E] font-semibold rounded-[1px]">
                18+ ADULT
              </span>
              <span>·</span>
              <span>{t('Informational Only', 'Estritamente Informativo')}</span>
            </div>
          </div>

          {/* Navigation Links Column */}
          <div className="md:col-span-3 space-y-2.5">
            <h4 className="font-heading text-base uppercase tracking-wider text-[#F3F1EE] font-light border-b border-[#2B2B2F] pb-1.5">
              {t('SECTIONS', 'SEÇÕES')}
            </h4>
            <ul className="space-y-1.5">
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <Link
                    to={item.path}
                    className="hover:text-[#F0203E] transition-colors text-xs font-mono block py-1"
                  >
                    {lang === 'en' ? item.labelEn : item.labelPt}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal and Compliance Column */}
          <div className="md:col-span-4 space-y-2.5">
            <h4 className="font-heading text-base uppercase tracking-wider text-[#F3F1EE] font-light border-b border-[#2B2B2F] pb-1.5">
              {t('COMPLIANCE', 'CONFORMIDADE')}
            </h4>
            <p className="text-xs text-[#A5A4A8] leading-relaxed">
              {t(
                'This portal complies with applicable Brazilian legal frameworks. Entry to referenced establishments strictly restricted to adults aged 18 and older.',
                'Este portal adota os padrões da legislação brasileira. Acesso a estabelecimentos estritamente proibido a menores de 18 anos.'
              )}
            </p>
            <div className="p-2.5 bg-[#111113] border border-[#2B2B2F] rounded-[2px] text-[10px] font-mono text-[#A5A4A8]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#F0203E] inline mr-1" />
              <span>
                {t(
                  'Consent policy: No Means No. Verified adult safety protocols.',
                  'Política de consentimento: Não é Não. Protocolos verificados.'
                )}
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-4 border-t border-[#2B2B2F] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-[#A5A4A8]/70">
          <div>
            © {new Date().getFullYear()} GAY CRUISING BRAZIL (GCB).
          </div>
          <div className="flex items-center gap-3 text-[10px]">
            <span>Blackout Editorial</span>
            <span>·</span>
            <span>Edition 1.3</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
