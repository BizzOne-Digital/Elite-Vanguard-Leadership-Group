import React from 'react';
import { ArrowRight, ChevronRight, Phone, Mail, Calendar } from 'lucide-react';

interface CTAButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: 'primary-brass' | 'outline-brass' | 'navy-solid' | 'ghost-brass';
  size?: 'sm' | 'md' | 'lg';
  icon?: 'arrow' | 'chevron' | 'phone' | 'mail' | 'calendar' | 'none';
  className?: string;
  id?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export const CTAButton: React.FC<CTAButtonProps> = ({
  children,
  onClick,
  href,
  variant = 'primary-brass',
  size = 'md',
  icon = 'arrow',
  className = '',
  id,
  type = 'button',
  disabled = false,
}) => {
  // Size classes
  const sizeStyles = {
    sm: 'px-4 py-2 text-xs tracking-wider uppercase font-semibold',
    md: 'px-6 py-3 text-xs sm:text-sm tracking-wider uppercase font-bold',
    lg: 'px-8 py-4 text-sm sm:text-base tracking-widest uppercase font-bold',
  };

  // Variant classes
  const variantStyles = {
    'primary-brass':
      'bg-[#C5A059] text-[#0A0A0A] font-semibold hover:bg-[#D4AF37] shadow-lg shadow-black/60 border border-[#C5A059] active:scale-[0.99] transition-colors',
    'outline-brass':
      'border border-[#C5A059] text-[#C5A059] hover:bg-[#C5A059]/10 hover:border-[#D4AF37] hover:text-white backdrop-blur-sm active:scale-[0.99] transition-colors',
    'navy-solid':
      'bg-[#141414] text-white border border-[#222222] hover:border-[#C5A059] hover:bg-[#1A1A1A] active:scale-[0.99] transition-colors',
    'ghost-brass':
      'text-[#C5A059] hover:text-white hover:underline underline-offset-8 decoration-[#C5A059] p-0 transition-colors',
  };

  const iconComponent = {
    arrow: <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />,
    chevron: <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />,
    phone: <Phone className="w-4 h-4" />,
    mail: <Mail className="w-4 h-4" />,
    calendar: <Calendar className="w-4 h-4" />,
    none: null,
  }[icon];

  const baseStyles =
    'group inline-flex items-center justify-center gap-3 transition-all duration-300 select-none cursor-pointer text-center font-sans tracking-widest';

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${
    disabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : ''
  } ${className}`;

  if (href) {
    return (
      <a id={id} href={href} className={combinedClasses}>
        <span>{children}</span>
        {iconComponent}
      </a>
    );
  }

  return (
    <button
      id={id}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClasses}
    >
      <span>{children}</span>
      {iconComponent}
    </button>
  );
};
