import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface SectionHeadingProps {
  kicker?: string;
  title: string;
  description?: string;
  viewAllLink?: string;
  viewAllText?: string;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  kicker,
  title,
  description,
  viewAllLink,
  viewAllText,
  className = '',
}) => {
  return (
    <div className={`border-b border-[#2B2B2F] pb-3 sm:pb-4 mb-6 sm:mb-8 ${className}`}>
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
        <div>
          {kicker && (
            <div className="flex items-center gap-2 mb-1">
              <span className="w-1.5 h-0.5 bg-[#FF173E]" />
              <span className="text-[11px] font-mono tracking-widest uppercase text-[#FF173E]">
                {kicker}
              </span>
            </div>
          )}
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl uppercase font-normal text-[#F3F1EE] tracking-wide">
            {title}
          </h2>
          {description && (
            <p className="mt-1.5 text-xs sm:text-sm text-[#A5A4A8] max-w-xl leading-relaxed">
              {description}
            </p>
          )}
        </div>

        {viewAllLink && (
          <Link
            to={viewAllLink}
            className="group inline-flex items-center gap-1.5 font-heading text-xs tracking-wider uppercase text-[#A5A4A8] hover:text-[#FF173E] transition-colors shrink-0 py-1 min-h-[36px]"
          >
            <span>{viewAllText || 'VIEW ALL'}</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        )}
      </div>
    </div>
  );
};
