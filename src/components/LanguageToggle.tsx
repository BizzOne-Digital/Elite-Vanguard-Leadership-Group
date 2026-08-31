import React from 'react';
import { Language, useLanguage } from '../i18n/LanguageContext';

interface LanguageToggleProps {
  id?: string;
  /** Tighter padding for the mobile header bar */
  compact?: boolean;
  className?: string;
}

const OPTIONS: { code: Language; label: string }[] = [
  { code: 'en', label: 'EN' },
  { code: 'es', label: 'ES' },
];

export const LanguageToggle: React.FC<LanguageToggleProps> = ({ id, compact = false, className = '' }) => {
  const { language, setLanguage, t } = useLanguage();

  return (
    <div
      id={id}
      role="group"
      aria-label={t('Switch language')}
      className={`flex items-center rounded-lg border border-[#222222] bg-[#111111] overflow-hidden shrink-0 ${className}`}
    >
      {OPTIONS.map((opt) => {
        const isActive = language === opt.code;
        return (
          <button
            key={opt.code}
            type="button"
            onClick={() => setLanguage(opt.code)}
            aria-pressed={isActive}
            className={`${
              compact ? 'px-1.5 py-1 text-[10px]' : 'px-2.5 py-1.5 text-[11px]'
            } font-medium uppercase tracking-wider transition-colors cursor-pointer ${
              isActive
                ? 'bg-[#C5A059] text-[#0A0A0A] font-semibold'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            {opt.label}
          </button>
        );
      })}
    </div>
  );
};
