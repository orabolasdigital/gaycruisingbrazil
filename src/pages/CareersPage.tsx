import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { EditorialCard } from '../components/EditorialCard';
import { CAREERS_DATA } from '../data/content';
import { useLanguage } from '../context/LanguageContext';
import { Briefcase, CheckCircle, ChevronRight } from 'lucide-react';

export const CareersPage: React.FC = () => {
  const { lang, t } = useLanguage();
  const [selectedJob, setSelectedJob] = useState<string | null>(null);
  const [appliedJobs, setAppliedJobs] = useState<string[]>([]);
  const [applicantName, setApplicantName] = useState('');
  const [applicantEmail, setApplicantEmail] = useState('');

  const handleApply = (jobId: string) => {
    setSelectedJob(jobId);
  };

  const handleSubmitApplication = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedJob && applicantName.trim() && applicantEmail.trim()) {
      setAppliedJobs([...appliedJobs, selectedJob]);
      setSelectedJob(null);
      setApplicantName('');
      setApplicantEmail('');
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-14 space-y-8 sm:space-y-12 overflow-x-hidden">
      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono text-[#A5A4A8]">
        <Link to="/" className="hover:text-[#FF173E] transition-colors">
          {t('Home', 'Início')}
        </Link>
        <ChevronRight className="w-3.5 h-3.5 text-[#2B2B2F]" />
        <span className="text-[#F3F1EE]">{t('Hospitality Careers', 'Carreiras na Noite')}</span>
      </nav>

      {/* Editorial Header */}
      <div className="border-b border-[#2B2B2F] pb-6 sm:pb-8">
        <div className="flex items-center gap-2 mb-2 font-mono text-xs text-[#FF173E]">
          <Briefcase className="w-3.5 h-3.5" />
          <span className="uppercase tracking-widest font-semibold">
            {t('HOSPITALITY CAREERS', 'CARREIRAS DE HOSPITALIDADE')}
          </span>
        </div>
        <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl uppercase font-normal text-[#F3F1EE] tracking-tight">
          {t('NIGHTLIFE CAREERS', 'CARREIRAS NA NOITE')}
        </h1>
        <p className="mt-3 text-xs sm:text-sm text-[#A5A4A8] max-w-2xl leading-relaxed">
          {t(
            'Conventional employment opportunities across nightlife operations, bar mixology, sound/lighting, and venue management.',
            'Oportunidades de emprego convencional em operações noturnas, coquetelaria, iluminação e gestão de espaços.'
          )}
        </p>
      </div>

      {/* Job Openings Grid: 2:3 ratio */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {CAREERS_DATA.map((item, idx) => {
          const isApplied = appliedJobs.includes(item.id);
          return (
            <div key={item.id} className="flex flex-col justify-between">
              <EditorialCard
                item={item}
                type="career"
                index={idx}
                aspectRatio="2:3"
              />
              <div className="mt-3">
                {isApplied ? (
                  <div className="min-h-[44px] p-2 bg-[#111113] border border-[#FF173E] text-[#FF173E] text-xs font-mono rounded-[2px] flex items-center justify-center gap-1.5">
                    <CheckCircle className="w-4 h-4" />
                    <span>{t('Application Submitted', 'Candidatura Enviada')}</span>
                  </div>
                ) : (
                  <button
                    type="button"
                    onClick={() => handleApply(item.id)}
                    className="w-full min-h-[44px] py-2.5 bg-[#19191B] hover:bg-[#FF173E] text-[#F3F1EE] hover:text-white border border-[#2B2B2F] hover:border-[#FF173E] font-heading text-xs uppercase tracking-wider font-normal rounded-[2px] transition-colors cursor-pointer"
                  >
                    {t('APPLY FOR ROLE', 'CANDIDATAR-SE')}
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Application Modal */}
      {selectedJob && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xs flex items-center justify-center p-4"
        >
          <div className="bg-[#111113] border border-[#2B2B2F] max-w-md w-full p-6 sm:p-8 rounded-[2px] space-y-4 shadow-2xl">
            <h3 className="font-heading text-3xl uppercase font-normal text-[#F3F1EE]">
              {t('APPLICATION FORM', 'FORMULÁRIO DE CANDIDATURA')}
            </h3>
            <p className="text-xs text-[#A5A4A8]">
              {t(
                'Submit your details to route your credentials to the venue’s management team.',
                'Preencha seus dados para encaminhamento direto à equipe de gestão do estabelecimento.'
              )}
            </p>

            <form onSubmit={handleSubmitApplication} className="space-y-3 pt-1">
              <div>
                <label className="block text-[11px] font-mono text-[#A5A4A8] uppercase mb-1">
                  {t('Full Name', 'Nome Completo')}
                </label>
                <input
                  type="text"
                  required
                  value={applicantName}
                  onChange={(e) => setApplicantName(e.target.value)}
                  placeholder="Lucas Oliveira"
                  className="w-full min-h-[44px] bg-[#19191B] border border-[#2B2B2F] focus:border-[#FF173E] text-[#F3F1EE] px-3 py-2 text-sm rounded-[2px] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-[11px] font-mono text-[#A5A4A8] uppercase mb-1">
                  {t('Contact Email', 'E-mail de Contato')}
                </label>
                <input
                  type="email"
                  required
                  value={applicantEmail}
                  onChange={(e) => setApplicantEmail(e.target.value)}
                  placeholder="lucas@example.com"
                  className="w-full min-h-[44px] bg-[#19191B] border border-[#2B2B2F] focus:border-[#FF173E] text-[#F3F1EE] px-3 py-2 text-sm rounded-[2px] focus:outline-none"
                />
              </div>

              <div className="text-[10px] font-mono text-[#A5A4A8] pt-1">
                * {t('Minimum age 18 strictly enforced by law.', 'Idade mínima de 18 anos exigida por lei.')}
              </div>

              <div className="flex items-center justify-end gap-2.5 pt-3 border-t border-[#2B2B2F]">
                <button
                  type="button"
                  onClick={() => setSelectedJob(null)}
                  className="min-h-[44px] px-4 py-2 bg-[#19191B] hover:bg-[#2B2B2F] text-[#A5A4A8] text-xs font-heading uppercase tracking-wider rounded-[2px] cursor-pointer"
                >
                  {t('CANCEL', 'CANCELAR')}
                </button>
                <button
                  type="submit"
                  className="min-h-[44px] px-5 py-2 bg-blood-gradient hover:opacity-95 text-white text-xs font-heading uppercase tracking-wider font-normal rounded-[2px] transition-opacity cursor-pointer"
                >
                  {t('SUBMIT', 'ENVIAR')}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
