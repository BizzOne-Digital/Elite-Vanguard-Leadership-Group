import React from 'react';
import { PageId } from '../types';
import { FOUNDER_PROFILES, COMPANY_INFO } from '../data/content';
import { SectionHeader } from '../components/SectionHeader';
import { CTAButton } from '../components/CTAButton';
import { Award, CheckCircle, UserCheck, ArrowRight, Phone } from 'lucide-react';

interface TeamPageProps {
  onNavigate: (page: PageId) => void;
}

export const TeamPage: React.FC<TeamPageProps> = ({ onNavigate }) => {
  return (
    <div id="team-page" className="w-full pt-28 sm:pt-32 pb-20 bg-[#0A0A0A] text-slate-300">
      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-20">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 border border-[#222222] rounded text-[11px] font-mono font-semibold uppercase tracking-[0.25em] text-[#C5A059] bg-[#141414]">
            <img src="/image/logo.png" alt="Elite Vanguard" className="w-3.5 h-3.5 rounded" />
            Executive Leadership & Co-Founders
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white tracking-tight leading-tight">
            Our Leadership Team
          </h1>
          <div className="h-[1px] w-24 mx-auto my-6 bg-gradient-to-r from-transparent via-[#C5A059] to-transparent" />
          <p className="text-base sm:text-xl text-slate-300 font-light leading-relaxed">
            Battle-tested leadership grounded in elite military service, presidential protection, heavy transit infrastructure, and commercial operational management.
          </p>
        </div>
      </section>

      {/* 4 CO-FOUNDERS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 space-y-16 sm:space-y-24">
        {FOUNDER_PROFILES.map((founder, index) => {
          const isEven = index % 2 === 0;
          return (
            <div
              key={founder.id}
              id={`founder-card-${founder.id}`}
              className="border border-[#222222] bg-[#141414] rounded-xl shadow-2xl p-6 sm:p-10 lg:p-12 relative overflow-hidden"
            >
              {/* Founder Header Index Badge */}
              <div className="absolute top-4 right-4 sm:top-6 sm:right-6 font-mono text-2xl sm:text-4xl font-bold text-white/5">
                0{index + 1}
              </div>

              <div
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center ${
                  isEven ? '' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Portrait Image Column */}
                <div className={`lg:col-span-5 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="relative border border-[#222222] rounded-xl p-2 bg-[#111111] shadow-xl">
                    <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-[#0A0A0A]">
                      <img
                        src={founder.image}
                        alt={founder.name}
                        className="w-full h-full object-cover filter contrast-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-60" />
                    </div>

                    {/* Image Placeholder Info Indicator for Future Client Replacement */}
                    <div className="mt-2 text-center">
                      <span className="text-[10px] font-mono tracking-widest text-slate-500 uppercase">
                        Asset Path: /public/images/team/{founder.id}.jpg
                      </span>
                    </div>
                  </div>
                </div>

                {/* Biography & Credentials Column */}
                <div className={`lg:col-span-7 space-y-6 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div>
                    {founder.badge && (
                      <div className="inline-block px-3 py-1 mb-3 border border-[#222222] rounded text-[10px] sm:text-[11px] font-mono uppercase tracking-widest text-[#C5A059] bg-[#1A1A1A]">
                        {founder.badge}
                      </div>
                    )}
                    <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight">
                      {founder.name}
                    </h2>
                    <p className="text-sm sm:text-base font-mono text-[#C5A059] tracking-wider uppercase font-semibold mt-1">
                      {founder.role}
                    </p>
                  </div>

                  {/* Verbatim Biography Block (Preserved Exactly Word-For-Word) */}
                  <div className="border-l-2 border-[#C5A059] pl-4 sm:pl-6 py-1">
                    <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans font-light">
                      {founder.bio}
                    </p>
                  </div>

                  {/* Highlights & Credentials */}
                  {founder.highlights && founder.highlights.length > 0 && (
                    <div className="pt-4 border-t border-[#222222]">
                      <span className="text-xs font-mono uppercase tracking-widest text-[#C5A059] block mb-3 font-semibold">
                        Key Leadership Highlights
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {founder.highlights.map((highlight, hIdx) => (
                          <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-300">
                            <CheckCircle className="w-3.5 h-3.5 text-[#C5A059] shrink-0 mt-0.5" />
                            <span>{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Direct Contact Button */}
                  <div className="pt-2">
                    <CTAButton
                      onClick={() => onNavigate('booking')}
                      variant="primary-brass"
                      size="sm"
                      icon="arrow"
                    >
                      Request Consultation with Leadership
                    </CTAButton>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* LEADERSHIP PHILOSOPHY STATEMENT */}
      <section className="bg-[#111111] py-20 border-y border-[#222222] mb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#C5A059]">
            Leadership Standard
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-white italic">
            &ldquo;Authentic authority is earned through presence, competence, and service. We train leaders who set the pace, share the burdens of their teams, and inspire by direct example rather than distant oversight.&rdquo;
          </h2>
          <div className="text-xs font-mono uppercase tracking-widest text-[#C5A059]">
            Core Value: Lead from the Front
          </div>
        </div>
      </section>

      {/* Direct Engagement CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-4">
          Book A Consultation
        </h2>
        <p className="text-sm sm:text-base text-slate-400 max-w-xl mx-auto mb-8 font-light">
          Reach out to discuss high-level strategic alignment, operational consulting engagements, or leadership development cohorts.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <CTAButton
            onClick={() => onNavigate('booking')}
            variant="primary-brass"
            size="md"
            icon="calendar"
          >
            Book a Consultation
          </CTAButton>
          {/* <div
            className="inline-flex items-center gap-2 px-6 py-3 border border-[#222222] rounded-lg bg-[#141414] text-xs font-medium uppercase tracking-widest text-slate-400"
          >
            <Phone className="w-4 h-4 text-slate-500" />
            <span>Call: [Phone - TBD]</span>
          </div> */}
        </div>
      </section>
    </div>
  );
};
