import React from 'react';
import { PageId } from '../types';
import { COMPANY_INFO, TARGET_INDUSTRIES } from '../data/content';
import { CTAButton } from './CTAButton';
import { Shield, Phone, Mail, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onReplaySplash?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onReplaySplash }) => {
  const handleNav = (page: PageId) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="site-footer" className="bg-[#0A0A0A] text-slate-300 border-t border-[#222222] relative overflow-hidden">
      {/* Subtle Gold Accent Top Border */}
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#C5A059] to-transparent opacity-50" />

      {/* Top Banner: High-Impact Lead Generation Consultation CTA */}
      <div className="border-b border-[#222222] bg-[#111111]/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 mb-3 border border-[#222222] rounded text-[11px] font-semibold uppercase tracking-[0.2em] text-[#C5A059] bg-[#141414]">
                <span className="w-1.5 h-1.5 bg-[#C5A059] rounded-full inline-block"></span>
                Executive Engagement
              </div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-white tracking-tight">
                Bridge the Critical Gap Between Strategy and Frontline Execution
              </h3>
              <p className="mt-3 text-sm sm:text-base text-slate-400 max-w-2xl leading-relaxed">
                Equip your organization with the discipline, accountability, and operational precision needed to navigate complex, high-consequence environments.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 lg:items-end">
              <CTAButton
                id="footer-banner-consultation-btn"
                onClick={() => handleNav('booking')}
                variant="primary-brass"
                size="md"
                className="w-full sm:w-auto text-center"
              >
                Book a Consultation
              </CTAButton>
              <a
                id="footer-banner-phone"
                href={COMPANY_INFO.phoneLink}
                className="inline-flex items-center justify-center gap-2 text-xs uppercase tracking-widest text-[#C5A059] hover:text-white py-2 transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Direct: {COMPANY_INFO.phoneFormatted}</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links & Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Col 1: Brand & Mission */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 border border-[#222222] bg-[#111111] rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-[#C5A059]" />
              </div>
              <div>
                <span className="block font-serif text-xl font-bold tracking-wider text-white uppercase">
                  Elite Vanguard
                </span>
                <span className="block text-[11px] tracking-[0.25em] uppercase text-[#C5A059] font-medium">
                  Leadership Group LLC
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-sans pr-4">
              A veteran-led management consulting and leadership development firm translating time-tested military principles into high-performance commercial and operational excellence.
            </p>

            {/* Mission Statement Excerpt */}
            <div className="p-4 border-l-2 border-[#C5A059] bg-[#141414] rounded-r-lg border-y border-r border-[#222222] text-xs text-slate-300 italic leading-relaxed">
              <span className="block font-sans not-italic font-bold text-[10px] tracking-widest uppercase text-[#C5A059] mb-1">
                Our Mission
              </span>
              &ldquo;{COMPANY_INFO.mission}&rdquo;
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-serif text-sm font-bold tracking-widest uppercase text-[#C5A059] border-b border-[#222222] pb-2">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {[
                { id: 'home', label: 'Home' },
                { id: 'about', label: 'About Us' },
                { id: 'services', label: 'Services' },
                { id: 'team', label: 'Our Team' },
                { id: 'booking', label: 'Booking' },
                { id: 'contact', label: 'Contact' },
              ].map((item) => (
                <li key={item.id}>
                  <button
                    id={`footer-nav-${item.id}`}
                    onClick={() => handleNav(item.id as PageId)}
                    className="text-slate-400 hover:text-[#C5A059] hover:translate-x-1 transition-all inline-flex items-center gap-1 cursor-pointer"
                  >
                    <span>{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Target Sectors */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-serif text-sm font-bold tracking-widest uppercase text-[#C5A059] border-b border-[#222222] pb-2">
              Target Sectors
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              {TARGET_INDUSTRIES.map((industry) => (
                <li key={industry.id} className="leading-snug">
                  <button
                    onClick={() => handleNav('services')}
                    className="hover:text-white transition-colors text-left"
                  >
                    {industry.shortLabel}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact & Direct Inquiries */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif text-sm font-bold tracking-widest uppercase text-[#C5A059] border-b border-[#222222] pb-2">
              Direct Contact
            </h4>
            
            <div className="space-y-3 text-xs sm:text-sm text-slate-300">
              <div>
                <span className="block text-[10px] uppercase tracking-wider text-slate-500">Leadership Contact</span>
                <span className="font-semibold text-white">{COMPANY_INFO.contactPerson}</span>
              </div>

              <div>
                <span className="block text-[10px] uppercase tracking-wider text-slate-500">Direct Telephone</span>
                <a
                  id="footer-phone-link"
                  href={COMPANY_INFO.phoneLink}
                  className="inline-flex items-center gap-2 text-white hover:text-[#C5A059] transition-colors mt-0.5"
                >
                  <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>{COMPANY_INFO.phoneFormatted}</span>
                </a>
              </div>

              <div>
                <span className="block text-[10px] uppercase tracking-wider text-slate-500">Confidential Inquiries</span>
                <a
                  id="footer-email-link"
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="inline-flex items-center gap-2 text-white hover:text-[#C5A059] transition-colors mt-0.5 break-all"
                >
                  <Mail className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                  <span>{COMPANY_INFO.email}</span>
                </a>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => handleNav('booking')}
                className="w-full text-center py-2.5 px-4 text-xs font-semibold uppercase tracking-widest rounded-lg border border-[#222222] bg-[#141414] text-[#C5A059] hover:bg-[#C5A059] hover:text-[#0A0A0A] hover:border-[#C5A059] transition-all flex items-center justify-center gap-2"
              >
                <span>Request Consultation</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Legal Bar */}
        <div className="mt-14 pt-8 border-t border-[#222222] flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div className="flex flex-wrap items-center gap-3">
            <p>
              &copy; {new Date().getFullYear()} {COMPANY_INFO.legalName}. All rights reserved.
            </p>
            {onReplaySplash && (
              <>
                <span className="text-slate-700">|</span>
                <button
                  onClick={onReplaySplash}
                  className="text-slate-500 hover:text-[#C5A059] transition-colors cursor-pointer text-[11px] font-mono uppercase tracking-wider"
                  title="Replay Brand Intro Sequence"
                >
                  Replay Intro
                </button>
              </>
            )}
          </div>
          <div className="flex items-center gap-4 sm:gap-6 text-slate-400 text-[11px]">
            <span className="text-[#C5A059]">•</span>
            <span>Executive Consulting</span>
            <span className="text-[#C5A059]">•</span>
            <span>Operational Rigor</span>
            <span className="text-[#C5A059]">•</span>
            <span>Frontline Execution</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
