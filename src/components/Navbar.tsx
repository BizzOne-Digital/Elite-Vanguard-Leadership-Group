import React, { useState, useEffect } from 'react';
import { PageId } from '../types';
import { COMPANY_INFO } from '../data/content';
import { CTAButton } from './CTAButton';
import { Menu, X, Phone } from 'lucide-react';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Services' },
    { id: 'team', label: 'Our Team' },
    { id: 'booking', label: 'Booking' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      id="main-navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#0A0A0A]/95 backdrop-blur-md border-b border-[#222222] shadow-xl shadow-black/80 py-3'
          : 'bg-gradient-to-b from-[#0A0A0A]/90 via-[#0A0A0A]/60 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <button
            id="nav-brand-logo"
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3.5 text-left group cursor-pointer focus:outline-none"
          >
            <img src="/image/logo.png" alt="Elite Vanguard Logo" className="flex-shrink-0 w-20 h-20 rounded-lg object-cover object-center transition-all duration-300 shadow-sm" />
            <div className="flex flex-col">
              <span className="font-serif text-lg sm:text-xl font-bold tracking-widest text-white uppercase group-hover:text-[#C5A059] transition-colors leading-tight">
                Elite Vanguard
              </span>
              <span className="text-[10px] tracking-[0.25em] uppercase text-[#C5A059] font-medium leading-tight">
                Leadership Group LLC
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav id="desktop-nav-menu" className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  id={`nav-link-${link.id}`}
                  onClick={() => handleNavClick(link.id)}
                  className={`px-3.5 py-2 text-xs xl:text-sm font-medium tracking-wider uppercase transition-all duration-200 cursor-pointer relative ${
                    isActive
                      ? 'text-[#C5A059] font-semibold'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-3.5 right-3.5 h-[2px] bg-[#C5A059] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Desktop Right Actions: Phone + Primary CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <div
              id="nav-quick-phone"
              className="flex items-center gap-2 text-xs tracking-wider text-slate-500 py-1.5 px-3 rounded-lg border border-[#222222] bg-[#111111]"
              title="Phone number - TBD"
            >
              <Phone className="w-3.5 h-3.5 text-slate-500" />
              <span className="font-mono text-xs text-slate-400">[Phone - TBD]</span>
            </div>

            <CTAButton
              id="nav-cta-consultation"
              onClick={() => handleNavClick('booking')}
              variant="primary-brass"
              size="sm"
              icon="arrow"
            >
              Book a Consultation
            </CTAButton>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-3">
            <CTAButton
              id="mobile-nav-cta-quick"
              onClick={() => handleNavClick('booking')}
              variant="primary-brass"
              size="sm"
              icon="none"
              className="py-1.5 px-3 text-[11px]"
            >
              Consultation
            </CTAButton>

            <button
              id="mobile-menu-toggle-btn"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white border border-[#222222] bg-[#111111] rounded-lg focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="lg:hidden bg-[#0A0A0A]/98 border-b border-[#222222] px-6 py-8 shadow-2xl transition-all"
        >
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  id={`mobile-link-${link.id}`}
                  onClick={() => handleNavClick(link.id)}
                  className={`text-left text-base uppercase tracking-widest py-2.5 px-3 border-l-2 transition-all cursor-pointer rounded-r-lg ${
                    isActive
                      ? 'border-[#C5A059] text-[#C5A059] bg-[#141414] font-semibold'
                      : 'border-transparent text-slate-400 hover:text-white hover:bg-[#111111]'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}

            <div className="pt-6 mt-4 border-t border-[#222222] flex flex-col gap-4">
              <div
                id="mobile-phone-link"
                className="flex items-center gap-3 text-sm text-slate-400 px-3 py-2 bg-[#111111] rounded-lg border border-[#222222]"
              >
                <Phone className="w-4 h-4 text-slate-500" />
                <span>Direct Contact: [Phone - TBD]</span>
              </div>

              <CTAButton
                id="mobile-drawer-cta"
                onClick={() => handleNavClick('booking')}
                variant="primary-brass"
                size="md"
                className="w-full justify-center"
              >
                Book a Consultation
              </CTAButton>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
