import React from 'react';

interface SectionHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  theme?: 'dark' | 'light';
  id?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  title,
  subtitle,
  align = 'center',
  theme = 'dark',
  id,
}) => {
  const isDark = theme === 'dark';
  const isCenter = align === 'center';

  return (
    <div
      id={id}
      className={`max-w-3xl mb-12 sm:mb-16 ${
        isCenter ? 'mx-auto text-center' : 'text-left'
      }`}
    >
      {badge && (
        <div className={`inline-flex items-center gap-2 px-3 py-1 mb-4 border rounded text-[11px] font-semibold uppercase tracking-[0.2em] ${
          isDark 
            ? 'border-[#222222] text-[#C5A059] bg-[#111111]' 
            : 'border-[#222222] text-[#C5A059] bg-[#141414]'
        }`}>
          <span className="w-1.5 h-1.5 bg-[#C5A059] rounded-full inline-block"></span>
          {badge}
        </div>
      )}
      
      <h2 className={`text-3xl sm:text-4xl md:text-5xl font-serif font-bold tracking-tight leading-[1.15] ${
        isDark ? 'text-white' : 'text-white'
      }`}>
        {title}
      </h2>

      {/* Subtle Gold Accent Divider */}
      <div className={`h-[1px] w-20 my-5 bg-gradient-to-r ${
        isCenter ? 'mx-auto from-transparent via-[#C5A059] to-transparent' : 'from-[#C5A059] via-[#DFBA6B] to-transparent'
      }`} />

      {subtitle && (
        <p className={`text-base sm:text-lg leading-relaxed ${
          isDark ? 'text-slate-400' : 'text-slate-400'
        }`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};
