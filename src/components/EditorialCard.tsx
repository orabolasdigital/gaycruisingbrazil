import React from 'react';
import { ArrowUpRight, MapPin } from 'lucide-react';
import { EditorialItem } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface EditorialCardProps {
  item: EditorialItem;
  type?: 'destination' | 'venue' | 'event' | 'creator' | 'community' | 'career';
  index?: number;
  featured?: boolean;
  aspectRatio?: '2:3' | '16:9';
}

export const EditorialCard: React.FC<EditorialCardProps> = ({
  item,
  type = 'venue',
  index = 0,
  featured = false,
  aspectRatio = '2:3',
}) => {
  const { lang, t } = useLanguage();

  const title = lang === 'en' ? item.titleEn : item.titlePt;
  const category = lang === 'en' ? item.categoryEn : item.categoryPt;
  const subtitle = lang === 'en' ? item.subtitleEn : item.subtitlePt;
  const description = lang === 'en' ? item.descriptionEn : item.descriptionPt;
  const location = lang === 'en' ? item.locationEn : item.locationPt;

  const ratioClass = aspectRatio === '16:9' ? 'aspect-[16/9]' : 'aspect-[2/3]';

  return (
    <article
      className={`group bg-[#19191B] border border-[#2B2B2F] hover:border-[#F0203E] rounded-[2px] transition-all duration-200 flex flex-col justify-between overflow-hidden ${
        featured ? 'md:col-span-2' : ''
      }`}
    >
      <div>
        {/* Visual Media Slot (2:3 or 16:9) */}
        <div className={`relative w-full ${ratioClass} bg-[#111113] overflow-hidden border-b border-[#2B2B2F] select-none`}>
          {item.imageUrl ? (
            <img
              src={item.imageUrl}
              alt={title}
              draggable={false}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            /* Editorial Graphic Cover Fallback (Magazine Noir) */
            <div className="absolute inset-0 p-5 flex flex-col justify-between bg-gradient-to-b from-[#111113] via-[#0d0d0f] to-[#19191B]">
              <div className="flex items-center justify-between text-[10px] font-mono text-[#A5A4A8]">
                <span className="text-[#F0203E] tracking-widest uppercase">{category}</span>
                <span>VOL. 0{index + 1}</span>
              </div>

              {/* Architectural Graphic Accent */}
              <div className="text-center my-auto space-y-2">
                <span className="font-mono text-[9px] tracking-[0.25em] text-[#A5A4A8]/70 uppercase block">
                  {location}
                </span>
                <div className="font-heading text-2xl sm:text-3xl font-light uppercase tracking-wider text-[#F3F1EE] leading-tight">
                  {item.id.replace('-', ' ')}
                </div>
                <div className="w-8 h-[1px] bg-[#F0203E]/70 mx-auto" />
              </div>

              <div className="flex items-center justify-between text-[9px] font-mono text-[#A5A4A8]/60 border-t border-[#2B2B2F]/60 pt-2">
                <span>GCB EDITORIAL</span>
                <span className="text-[#F0203E]">18+</span>
              </div>
            </div>
          )}

          {/* Discreet Dark Gradient Overlay for text protection */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />

          {/* Minimal Watermark Container for future proofing */}
          <div className="absolute bottom-2 right-2 text-[9px] font-mono text-white/40 tracking-widest uppercase pointer-events-none">
            GCB
          </div>
        </div>

        {/* Content Section */}
        <div className="p-4 sm:p-5">
          {/* Metadata Row: Zero-Pill discipline */}
          <div className="flex items-center flex-wrap gap-2 text-xs text-[#A5A4A8] mb-2 font-mono">
            <span className="text-[#F0203E] font-semibold">{category}</span>
            <span aria-hidden="true">·</span>
            <span>{location}</span>
          </div>

          <h3 className="font-heading text-2xl sm:text-3xl uppercase font-light text-[#F3F1EE] group-hover:text-white transition-colors leading-tight">
            {title}
          </h3>

          <p className="text-xs font-mono text-[#F0203E]/90 mt-1 uppercase tracking-wider">
            {subtitle}
          </p>

          <p className="mt-2.5 text-xs sm:text-sm text-[#A5A4A8] leading-relaxed line-clamp-2">
            {description}
          </p>
        </div>
      </div>

      {/* Card Footer */}
      <div className="px-4 sm:px-5 py-3 border-t border-[#2B2B2F]/60 flex items-center justify-between text-xs font-mono text-[#A5A4A8] bg-[#111113]/50 min-h-[44px]">
        <span className="text-[11px] truncate max-w-[200px]">{item.meta}</span>
        <span className="inline-flex items-center gap-1 text-[#F3F1EE] group-hover:text-[#F0203E] transition-colors font-heading uppercase tracking-wider text-sm font-normal shrink-0">
          <span>{t('EXPLORE', 'EXPLORAR')}</span>
          <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </span>
      </div>
    </article>
  );
};
