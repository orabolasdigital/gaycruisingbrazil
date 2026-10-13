import React from 'react';
import { Link } from 'react-router-dom';

interface PhotoCardProps {
  to: string;
  title: string;
  subtitle?: string;
  code?: string;
  imageUrl?: string;
  aspectRatio?: '2:3' | '3:4' | '4:5' | '16:9';
  category?: string;
  className?: string;
}

export const PhotoCard: React.FC<PhotoCardProps> = ({
  to,
  title,
  subtitle,
  code,
  imageUrl,
  aspectRatio = '2:3',
  category,
  className = '',
}) => {
  const getRatioClass = () => {
    switch (aspectRatio) {
      case '16:9':
        return 'aspect-[16/9]';
      case '4:5':
        return 'aspect-[4/5]';
      case '3:4':
        return 'aspect-[3/4]';
      case '2:3':
      default:
        return 'aspect-[2/3]';
    }
  };

  return (
    <Link
      to={to}
      className={`group relative block w-full ${getRatioClass()} bg-[#111113] border border-[#2B2B2F] hover:border-[#FF173E] rounded-[2px] overflow-hidden select-none transition-all duration-200 cursor-pointer ${className}`}
    >
      {/* Background Photography or Architectural Placeholder */}
      {imageUrl ? (
        <img
          src={imageUrl}
          alt={title}
          loading="lazy"
          draggable={false}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      ) : (
        /* Neutral Blackout Editorial Placeholder */
        <div className="absolute inset-0 bg-gradient-to-b from-[#111113] via-[#0d0d0f] to-[#19191B] flex flex-col justify-between p-4">
          <div className="flex items-center justify-between text-[10px] font-mono text-[#A5A4A8]">
            <span className="text-[#FF173E] tracking-widest uppercase">
              {category || 'GCB GUIDE'}
            </span>
            {code && (
              <span className="px-1.5 py-0.5 bg-[#19191B] border border-[#2B2B2F] rounded-[1px] text-[#F3F1EE] font-bold font-mono">
                {code}
              </span>
            )}
          </div>

          <div className="my-auto text-center space-y-1">
            <span className="font-heading text-4xl sm:text-5xl font-normal text-[#2B2B2F] group-hover:text-[#FF173E]/30 transition-colors block">
              {code || 'GCB'}
            </span>
          </div>

          <div className="text-[9px] font-mono text-[#A5A4A8]/40 tracking-widest uppercase">
            BRAZIL AFTER DARK
          </div>
        </div>
      )}

      {/* Gentle Black Gradient for Readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent pointer-events-none" />

      {/* Discrete Code Badge in Top-Right if with image */}
      {imageUrl && code && (
        <div className="absolute top-3 right-3 z-10 px-2 py-0.5 bg-black/70 backdrop-blur-xs border border-[#2B2B2F] text-[10px] font-mono font-bold text-[#F3F1EE] rounded-[1px]">
          {code}
        </div>
      )}

      {/* Bottom Content: Title & Location/Category */}
      <div className="absolute bottom-0 inset-x-0 p-4 sm:p-5 z-10 space-y-1">
        {subtitle && (
          <span className="block font-mono text-[10px] sm:text-[11px] text-[#A5A4A8] tracking-widest uppercase truncate">
            {subtitle}
          </span>
        )}
        <h3 className="font-heading text-2xl sm:text-3xl uppercase font-normal text-[#F3F1EE] group-hover:text-white transition-colors leading-none truncate">
          {title}
        </h3>
      </div>
    </Link>
  );
};
