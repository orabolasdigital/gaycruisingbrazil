import React from 'react';
import { NavLink } from 'react-router-dom';
import { NAV_ITEMS } from '../data/content';
import { useLanguage } from '../context/LanguageContext';

interface NavigationMenuProps {
  mobile?: boolean;
  onItemClick?: () => void;
}

export const NavigationMenu: React.FC<NavigationMenuProps> = ({ mobile = false, onItemClick }) => {
  const { lang } = useLanguage();

  if (mobile) {
    return (
      <nav aria-label="Mobile Navigation" className="flex flex-col divide-y divide-[#2B2B2F] border-y border-[#2B2B2F]">
        {NAV_ITEMS.map((item) => (
          <NavLink
            key={item.id}
            to={item.path}
            onClick={onItemClick}
            className={({ isActive }) =>
              `min-h-[48px] flex items-center justify-between py-3 px-4 font-heading text-lg tracking-wider uppercase transition-colors ${
                isActive
                  ? 'text-[#F0203E] bg-[#111113] font-normal border-l-2 border-[#F0203E]'
                  : 'text-[#F3F1EE] hover:text-[#F0203E] hover:bg-[#111113]'
              }`
            }
          >
            <span>{lang === 'en' ? item.labelEn : item.labelPt}</span>
            <span className="text-xs font-mono text-[#A5A4A8]">→</span>
          </NavLink>
        ))}
      </nav>
    );
  }

  return (
    <nav aria-label="Main Navigation" className="hidden lg:flex items-center gap-7">
      {NAV_ITEMS.map((item) => (
        <NavLink
          key={item.id}
          to={item.path}
          className={({ isActive }) =>
            `relative py-2 font-heading text-base tracking-wider uppercase whitespace-nowrap transition-colors duration-150 ${
              isActive
                ? 'text-[#F0203E] font-normal'
                : 'text-[#A5A4A8] hover:text-[#F3F1EE]'
            }`
          }
        >
          {({ isActive }) => (
            <>
              <span>{lang === 'en' ? item.labelEn : item.labelPt}</span>
              {isActive && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#F0203E]" />
              )}
            </>
          )}
        </NavLink>
      ))}
    </nav>
  );
};
