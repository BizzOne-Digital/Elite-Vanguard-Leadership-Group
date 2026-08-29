import React from 'react';
import { PageId } from '../types';
import { COMPANY_INFO, CORE_VALUES } from '../data/content';
import { SectionHeader } from '../components/SectionHeader';
import { CTAButton } from '../components/CTAButton';
import { Shield, Target, Compass, Award, CheckCircle, ArrowRight } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div id="about-page" className="w-full pt-28 sm:pt-32 pb-20 bg-[#0A0A0A] text-slate-300">
      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-24">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 border border-[#222222] rounded text-[11px] font-mono font-semibold uppercase tracking-[0.25em] text-[#C5A059] bg-[#141414]">
            <Shield className="w-3.5 h-3.5" />
            Institutional Background & Philosophy
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white tracking-tight leading-tight">
            About Elite Vanguard Leadership Group
          </h1>
          <div className="h-[1px] w-24 mx-auto my-6 bg-gradient-to-r from-transparent via-[#C5A059] to-transparent" />
          <p className="text-base sm:text-xl text-slate-300 font-light leading-relaxed">
            Translating time-tested military principles into high-performance commercial, industrial, and institutional excellence.
          </p>
        </div>
      </section>

      {/* 1. VERBATIM COMPANY DESCRIPTION SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="border border-[#222222] bg-[#141414] rounded-xl p-8 sm:p-12 shadow-2xl relative">
          <div className="absolute -top-3 left-8 bg-[#C5A059] text-[#0A0A0A] text-[10px] font-bold uppercase tracking-widest px-3 py-0.5 rounded">
            Firm Overview
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-mono uppercase tracking-widest text-[#C5A059] block">
                Official Charter & Positioning
              </span>
              <p className="text-lg sm:text-2xl font-serif font-medium text-white leading-relaxed">
                &ldquo;{COMPANY_INFO.description}&rdquo;
              </p>
              <div className="pt-2 text-xs font-mono text-slate-500">
                Elite Vanguard Leadership Group LLC
              </div>
            </div>
            <div className="lg:col-span-4 border-t lg:border-t-0 lg:border-l border-[#222222] lg:pl-8 space-y-4 text-xs sm:text-sm text-slate-300">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                <span><strong className="text-white">Veteran-Led:</strong> Decades of elite military command and combat support discipline.</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                <span><strong className="text-white">Operational Focus:</strong> Bridging boardroom strategy to frontline supervisor execution.</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                <span><strong className="text-white">High-Consequence Rigor:</strong> Zero-defect mentality for infrastructure, defense, and logistics.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE OPERATIONAL GAP PHILOSOPHY */}
      <section className="bg-[#111111] py-20 border-y border-[#222222] mb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="The Strategic Challenge"
            title="Closing the Strategy-Execution Chasm"
            subtitle="Why traditional executive consulting fails at the frontline level—and how military operational discipline resolves it."
            align="center"
            theme="dark"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {/* The Problem */}
            <div className="p-8 rounded-xl border border-[#222222] bg-[#141414] space-y-4">
              <div className="text-xs font-mono uppercase tracking-widest text-slate-500">
                The Industry Problem
              </div>
              <h3 className="font-serif text-2xl font-bold text-white">
                Strategy Without Operational Grounding
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed font-light">
                Enterprise organizations invest millions in strategic plans, only to see initiatives stall because frontline supervisors, shift leads, and field foremen lack the structured command tools, clear standards, and accountability frameworks required to execute.
              </p>
              <ul className="space-y-2 text-xs text-slate-400 pt-2 border-t border-[#222222]">
                <li>• Diluted executive messaging across management tiers</li>
                <li>• Frontline reluctance to enforce non-negotiable standards</li>
                <li>• Lack of squad-level ownership and after-action review culture</li>
              </ul>
            </div>

            {/* The Elite Vanguard Solution */}
            <div className="p-8 rounded-xl border-2 border-[#C5A059] bg-[#1A1A1A] space-y-4 shadow-xl">
              <div className="text-xs font-mono uppercase tracking-widest text-[#C5A059]">
                The Elite Vanguard Solution
              </div>
              <h3 className="font-serif text-2xl font-bold text-white">
                Military Precision Applied to Business
              </h3>
              <p className="text-sm text-slate-200 leading-relaxed font-light">
                We embed time-tested military principles—direct example leadership, mission-type orders, rigorous standard operating procedures, and decentralized execution—into corporate teams, transforming supervisors into decisive, accountable leaders.
              </p>
              <ul className="space-y-2 text-xs text-[#C5A059] pt-2 border-t border-[#C5A059]/30">
                <li>✓ Clear commander's intent translated to shift supervisors</li>
                <li>✓ Culture of personal responsibility: Own the Outcome</li>
                <li>✓ Decisive decision-making under high-pressure conditions</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. MISSION & VISION DUAL STATEMENT SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Mission Card */}
          <div className="p-10 rounded-xl border border-[#222222] bg-[#141414] flex flex-col justify-between relative shadow-xl">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 border border-[#222222] rounded text-[10px] font-mono uppercase tracking-[0.25em] text-[#C5A059] bg-[#1A1A1A]">
                <Target className="w-3.5 h-3.5" />
                Mission Statement
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-white leading-snug italic mb-6">
                &ldquo;{COMPANY_INFO.mission}&rdquo;
              </h3>
            </div>
            <div className="pt-6 border-t border-[#222222] text-xs uppercase tracking-widest text-[#C5A059] font-medium">
              Mission First, People Always
            </div>
          </div>

          {/* Vision Card */}
          <div className="p-10 rounded-xl border border-[#222222] bg-[#141414] text-slate-300 flex flex-col justify-between relative shadow-xl">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 border border-[#222222] rounded text-[10px] font-mono uppercase tracking-[0.25em] text-[#C5A059] bg-[#1A1A1A]">
                <Compass className="w-3.5 h-3.5" />
                Vision Statement
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-white leading-snug mb-6">
                &ldquo;{COMPANY_INFO.vision}&rdquo;
              </h3>
            </div>
            <div className="pt-6 border-t border-[#222222] text-xs uppercase tracking-widest text-[#C5A059] font-medium">
              Nationwide Operational Leadership Benchmark
            </div>
          </div>
        </div>
      </section>

      {/* 4. VERBATIM CORE TEAM VALUES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <SectionHeader
          badge="Guiding Principles"
          title="Core Team Values"
          subtitle="Our five non-negotiable operational principles guiding every engagement."
          align="center"
          theme="dark"
        />

        <div className="space-y-4 mt-12 max-w-4xl mx-auto">
          {CORE_VALUES.map((val) => (
            <div
              key={val.number}
              className="p-6 sm:p-8 rounded-xl border border-[#222222] bg-[#141414] hover:border-[#C5A059]/50 transition-all flex flex-col sm:flex-row items-start sm:items-center gap-6"
            >
              <div className="w-12 h-12 shrink-0 rounded-lg border border-[#222222] bg-[#1A1A1A] flex items-center justify-center font-mono text-lg font-bold text-[#C5A059]">
                {val.number}
              </div>
              <div className="space-y-1.5 flex-1">
                <h3 className="font-serif text-xl font-bold text-white">
                  {val.title}
                </h3>
                <p className="text-sm text-slate-400 font-light leading-relaxed">
                  {val.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. TEAM CALLOUT & CONSULTATION TRIGGER */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8 border-t border-[#222222]">
        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-4">
          Meet the Veterans Leading Elite Vanguard
        </h2>
        <p className="text-base text-slate-400 max-w-2xl mx-auto mb-8 font-light">
          Discover the background and decorated service history of our co-founders across the military, infrastructure, and private equity sectors.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <CTAButton
            onClick={() => onNavigate('team')}
            variant="primary-brass"
            size="md"
            icon="arrow"
          >
            Explore Leadership Team
          </CTAButton>
          <CTAButton
            onClick={() => onNavigate('booking')}
            variant="outline-brass"
            size="md"
            icon="calendar"
          >
            Book a Consultation
          </CTAButton>
        </div>
      </section>
    </div>
  );
};
