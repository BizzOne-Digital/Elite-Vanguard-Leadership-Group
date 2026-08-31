import React from 'react';
import { PageId } from '../types';
import { COMPANY_INFO, TARGET_INDUSTRIES, CORE_VALUES, FOUNDER_PROFILES } from '../data/content';
import { SectionHeader } from '../components/SectionHeader';
import { CTAButton } from '../components/CTAButton';
import { OperationalReadinessDiagnostic } from '../components/OperationalReadinessDiagnostic';
import { DeploymentRoadmap } from '../components/DeploymentRoadmap';
import { MethodologyComparison } from '../components/MethodologyComparison';
import { CaseScenarios } from '../components/CaseScenarios';
import {
  Shield,
  ArrowRight,
  CheckCircle2,
  Compass,
  Layers,
  Target,
  Users,
  Building2,
  Award,
  ChevronRight,
  Phone,
  Sparkles,
  TrendingUp,
  Briefcase
} from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const { t } = useLanguage();
  return (
    <div id="home-page" className="w-full bg-[#0A0A0A] text-slate-300">
      {/* 1. CINEMATIC HERO SECTION */}
      <section
        id="hero-section"
        className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center bg-[#0A0A0A] overflow-hidden pt-28 pb-16"
      >
        {/* Background Image with Deep Obsidian Cinematic Overlay */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=2000&q=80"
            alt="Executive Leadership Strategy Session"
            className="w-full h-full object-cover object-center filter grayscale contrast-125 opacity-20 scale-105 transform animate-pulse duration-[10000ms]"
          />
          {/* Multi-layered Gradients for Deep Obsidian Contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/85 to-[#0A0A0A]/60" />
          <div className="absolute inset-0 bg-radial-at-c from-transparent via-[#0A0A0A]/70 to-[#0A0A0A]" />
        </div>

        {/* Subtle Gold Grid Lines / Geometry */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#C5A05908_1px,transparent_1px),linear-gradient(to_bottom,#C5A05908_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Institutional Prestige Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 mb-8 border border-[#222222] bg-[#111111]/90 rounded-lg backdrop-blur-md shadow-lg shadow-black/40">

                <img src="/image/logo.png" alt="Elite Vanguard" className="w-3.5 h-3.5 rounded" />
            <span className="text-xs sm:text-sm font-medium uppercase tracking-[0.25em] text-[#C5A059]">
              {t('Veteran-Led Executive & Operational Consulting')}
            </span>
          </div>

          {/* Approved Homepage Headline Area */}
          <div className="mb-6">
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white tracking-tight leading-[1.1] max-w-5xl mx-auto">
              {t('Translating Military Discipline Into Frontline Operational Excellence')}
            </h1>
            {/* Visual Headline Approval Reservation Notice */}
            <div className="mt-3 inline-block">
              <span className="text-[10px] tracking-[0.2em] uppercase text-slate-500 font-mono">
                [APPROVED HOMEPAGE HEADLINE HOLDER]
              </span>
            </div>
          </div>

          {/* Subtitle with High-Stakes Focus */}
          <p className="mt-4 text-base sm:text-xl text-slate-300 max-w-3xl mx-auto font-sans font-light leading-relaxed">
            {t('Bridging the critical divide between executive strategy and field execution for enterprise operations, public sector agencies, defense contractors, and high-consequence industries.')}
          </p>

          {/* Dual CTAs */}
          <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <CTAButton
              id="hero-primary-cta"
              onClick={() => onNavigate('booking')}
              variant="primary-brass"
              size="lg"
              icon="arrow"
              className="w-full sm:w-auto shadow-2xl"
            >
              {t('Book a Consultation')}
            </CTAButton>

            <CTAButton
              id="hero-secondary-cta"
              onClick={() => onNavigate('services')}
              variant="outline-brass"
              size="lg"
              icon="chevron"
              className="w-full sm:w-auto"
            >
              {t('Explore Practice Areas')}
            </CTAButton>
          </div>

          {/* Direct Coordinate Trigger */}
          <div className="mt-8 pt-6 border-t border-[#222222] flex items-center justify-center gap-6 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <span className="text-[#C5A059] font-medium tracking-wider">{t('Direct Engagement:')}</span>
              <span className="font-mono text-slate-400">
                [Phone - TBD]
              </span>
            </div>
            <span className="hidden sm:inline text-slate-600">|</span>
            <span className="hidden sm:inline tracking-wider text-slate-400">
              {COMPANY_INFO.contactPerson} • [Email - TBD]
            </span>
          </div>

          {/* Proven Executive Impact Stats Bar (Inspired by High-Performance Consulting Standards) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 pt-8 border-t border-[#222222]">
            <div className="p-4 rounded-xl border border-[#222222] bg-[#111111]/80 backdrop-blur-sm text-left">
              <span className="text-2xl sm:text-3xl font-serif font-extrabold text-white block">{t('38+ Team')}</span>
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#C5A059]">{t('Supervisory Command Span')}</span>
            </div>
            <div className="p-4 rounded-xl border border-[#222222] bg-[#111111]/80 backdrop-blur-sm text-left">
              <span className="text-2xl sm:text-3xl font-serif font-extrabold text-white block">{t('Zero-Defect')}</span>
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#C5A059]">{t('Operational Standard')}</span>
            </div>
            <div className="p-4 rounded-xl border border-[#222222] bg-[#111111]/80 backdrop-blur-sm text-left">
              <span className="text-2xl sm:text-3xl font-serif font-extrabold text-white block">100%</span>
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#C5A059]">{t('Outcome Ownership')}</span>
            </div>
            <div className="p-4 rounded-xl border border-[#222222] bg-[#111111]/80 backdrop-blur-sm text-left">
              <span className="text-2xl sm:text-3xl font-serif font-extrabold text-white block">{t('National')}</span>
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#C5A059]">{t('Consulting Capability')}</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. POSITIONING STRIP (The 5 Target Audiences) */}
      <section
        id="positioning-strip"
        className="bg-[#111111] border-y border-[#222222] py-8 relative z-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-5">
            <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.3em] uppercase text-[#C5A059]">
              {t('Institutional Focus & Key Industry Domains')}
            </span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 lg:gap-6 items-center">
            {TARGET_INDUSTRIES.map((industry, index) => (
              <button
                key={industry.id}
                onClick={() => onNavigate('services')}
                className="group p-4 rounded-xl border border-[#222222] hover:border-[#C5A059]/50 bg-[#141414] hover:bg-[#1A1A1A] transition-all duration-300 text-left h-full flex flex-col justify-between cursor-pointer"
              >
                <div className="text-[10px] font-mono text-[#C5A059] mb-1">
                  0{index + 1}
                </div>
                <div className="font-serif text-xs sm:text-sm font-semibold text-white group-hover:text-[#C5A059] transition-colors leading-snug line-clamp-2">
                  {t(industry.shortLabel)}
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 3. ABOUT SECTION (Split Layout with Verbatim Description) */}
      <section id="about-overview-section" className="py-20 sm:py-28 bg-[#0A0A0A] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Col: Editorial Visual & Positioning */}
            <div className="lg:col-span-5 relative">
              <div className="relative border border-[#222222] p-2 bg-[#111111] rounded-xl shadow-2xl overflow-hidden">
                <img
                  src="https://www.shutterstock.com/image-photo/speaker-giving-talk-conference-hall-260nw-2653698805.jpg"
                  alt="Operational Execution and Infrastructure"
                  className="w-full h-[400px] object-cover filter contrast-110 rounded-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-80" />

                {/* Floating Prestige Callout */}
                <div className="absolute bottom-6 left-6 right-6 p-4 bg-[#141414]/95 border border-[#222222] rounded-lg backdrop-blur-md">
                  <span className="block text-[10px] font-mono tracking-widest uppercase text-[#C5A059] mb-1">
                    {t('Leadership Standard')}
                  </span>
                  <p className="text-xs sm:text-sm font-serif font-bold text-white leading-tight">
                    &ldquo;{t('Authentic authority is earned through presence, competence, and service.')}&rdquo;
                  </p>
                </div>
              </div>
            </div>

            {/* Right Col: Verbatim Company Description */}
            <div className="lg:col-span-7 space-y-6">
              <SectionHeader
                badge={t('About Elite Vanguard')}
                title={t('Bridging the Critical Divide Between Strategy & Frontline Execution')}
                align="left"
                theme="dark"
              />

              {/* Verbatim Company Description Box */}
              <div className="p-6 sm:p-8 border-l-2 border-[#C5A059] bg-[#141414] rounded-r-xl border-y border-r border-[#222222] shadow-lg">
                <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-sans font-light">
                  {t(COMPANY_INFO.description)}
                </p>
              </div>

              {/* Three Core Competencies */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                <div className="p-4 rounded-xl border border-[#222222] bg-[#141414]">
                  <Layers className="w-5 h-5 text-[#C5A059] mb-2" />
                  <h4 className="font-serif font-bold text-sm text-white">{t('Military Rigor')}</h4>
                  <p className="text-xs text-slate-400 mt-1">{t('Time-tested command and squad-level accountability.')}</p>
                </div>

                <div className="p-4 rounded-xl border border-[#222222] bg-[#141414]">
                  <Target className="w-5 h-5 text-[#C5A059] mb-2" />
                  <h4 className="font-serif font-bold text-sm text-white">{t('Frontline Precision')}</h4>
                  <p className="text-xs text-slate-400 mt-1">{t('Direct transition of directives to supervisor-level execution.')}</p>
                </div>

                <div className="p-4 rounded-xl border border-[#222222] bg-[#141414]">
                  <Compass className="w-5 h-5 text-[#C5A059] mb-2" />
                  <h4 className="font-serif font-bold text-sm text-white">{t('Decisive Outcomes')}</h4>
                  <p className="text-xs text-slate-400 mt-1">{t('Uncompromising mission success in high-risk domains.')}</p>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <CTAButton
                  onClick={() => onNavigate('team')}
                  variant="primary-brass"
                  size="md"
                  icon="arrow"
                >
                  {t('Meet Our Leadership')}
                </CTAButton>
                <CTAButton
                  onClick={() => onNavigate('about')}
                  variant="outline-brass"
                  size="md"
                  icon="chevron"
                >
                  {t('Learn About Our Approach')}
                </CTAButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. INTERACTIVE DIAGNOSTIC TOOL SECTION (Featured Direct on Homepage) */}
      <section id="readiness-diagnostic-section" className="py-20 sm:py-28 bg-[#111111] border-y border-[#222222]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge={t('Executive Self-Assessment')}
            title={t('Operational Readiness & Leadership Gap Diagnostic')}
            subtitle={t('Measure how effectively your C-suite directives are converted into frontline shift discipline and accountability.')}
            align="center"
            theme="dark"
          />

          <div className="mt-12">
            <OperationalReadinessDiagnostic onNavigate={onNavigate} />
          </div>
        </div>
      </section>

      {/* 5. STRATEGIC ARCHITECTURE: The Operational Bridge */}
      <section id="differentiation-section" className="py-20 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge={t('Strategic Architecture')}
            title={t('The Operational Bridge')}
            subtitle={t('Organizations rarely fail at formulating strategy. They fail at translating strategic intent into frontline daily execution.')}
            align="center"
            theme="dark"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mt-12 relative">
            {/* Step 1: Executive Strategy */}
            <div className="p-8 rounded-xl border border-[#222222] bg-[#141414] relative flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono tracking-widest text-[#C5A059] uppercase">{t('Phase 01')}</span>
                  <Building2 className="w-5 h-5 text-[#C5A059]" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-white mb-3">{t('Executive Strategy')}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {t('High-level directives, organizational objectives, enterprise governance, and capital allocation formulated in boardrooms and executive suites.')}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#222222] text-xs font-mono text-[#C5A059]">
                {t('Strategic Intent Defined')}
              </div>
            </div>

            {/* Step 2: Frontline Execution */}
            <div className="p-8 rounded-xl border-2 border-[#C5A059] bg-[#1A1A1A] relative flex flex-col justify-between shadow-2xl shadow-black/80 transform md:-translate-y-2">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#C5A059] text-[#0A0A0A] text-[10px] font-bold uppercase tracking-widest px-3 py-0.5 rounded">
                {t('The Critical Bridge')}
              </div>
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono tracking-widest text-[#C5A059] uppercase">{t('Phase 02')}</span>
                  <Users className="w-5 h-5 text-[#C5A059]" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-white mb-3">{t('Frontline Execution')}</h3>
                <p className="text-sm text-slate-200 leading-relaxed">
                  {t('Where strategy meets reality: supervisors, foremen, crew leaders, and field teams operating with clear standards, total accountability, and decisive leadership.')}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#C5A059]/30 text-xs font-mono text-[#C5A059] font-bold">
                {t('Elite Vanguard Engagement Zone')}
              </div>
            </div>

            {/* Step 3: Operational Excellence */}
            <div className="p-8 rounded-xl border border-[#222222] bg-[#141414] relative flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono tracking-widest text-[#C5A059] uppercase">{t('Phase 03')}</span>
                  <Award className="w-5 h-5 text-[#C5A059]" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-white mb-3">{t('Operational Excellence')}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {t('Repeatable high performance, zero-defect culture, reliable safety metrics, and consistent mission accomplishment across high-consequence environments.')}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#222222] text-xs font-mono text-[#C5A059]">
                {t('Uncompromising Mission Success')}
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <CTAButton
              onClick={() => onNavigate('booking')}
              variant="primary-brass"
              size="md"
              icon="arrow"
            >
              {t('Request Operational Diagnostics')}
            </CTAButton>
          </div>
        </div>
      </section>

      {/* 6. DEPLOYMENT ROADMAP SECTION (5-Phase Blueprint) */}
      <section id="deployment-blueprint-section" className="py-20 sm:py-28 bg-[#111111] border-y border-[#222222]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge={t('Execution Blueprint')}
            title={t('How We Engage & Transform Organizations')}
            subtitle={t('A structured, battle-tested consulting engagement framework engineered for high-consequence enterprise and municipal operations.')}
            align="center"
            theme="dark"
          />

          <div className="mt-12">
            <DeploymentRoadmap onNavigate={onNavigate} />
          </div>
        </div>
      </section>

      {/* 7. METHODOLOGY COMPARISON (Why Traditional Training Fails) */}
      <section id="methodology-comparison-section" className="py-20 sm:py-28 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MethodologyComparison onNavigate={onNavigate} />
        </div>
      </section>

      {/* 8. CASE SCENARIOS & MEASURED ROI */}
      <section id="case-scenarios-section" className="py-20 sm:py-28 bg-[#111111] border-y border-[#222222]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CaseScenarios onNavigate={onNavigate} />
        </div>
      </section>

      {/* 9. TARGET INDUSTRIES SECTION */}
      <section id="industries-section" className="py-20 sm:py-28 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge={t('Target Sectors')}
            title={t('Institutional & Industry Focus')}
            subtitle={t('We tailor battle-tested leadership principles to the operational realities of high-consequence domains.')}
            align="center"
            theme="dark"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {TARGET_INDUSTRIES.map((industry, idx) => (
              <div
                key={industry.id}
                className="border border-[#222222] bg-[#141414] rounded-xl hover:border-[#C5A059]/50 transition-all duration-300 flex flex-col overflow-hidden group shadow-lg"
              >
                {/* Image */}
                <div className="h-48 relative overflow-hidden bg-[#111111]">
                  <img
                    src={industry.image}
                    alt={industry.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent opacity-90" />
                  <span className="absolute top-3 left-3 bg-[#0A0A0A]/90 border border-[#222222] text-[#C5A059] text-[10px] font-mono px-2 py-0.5 rounded">
                    Sector 0{idx + 1}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-lg font-bold text-white group-hover:text-[#C5A059] transition-colors leading-snug mb-3">
                      {t(industry.title)}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4">
                      {t(industry.description)}
                    </p>

                    {/* Applications list */}
                    <div className="space-y-1.5 pt-2 border-t border-[#222222]">
                      {industry.applications.slice(0, 3).map((app, appIdx) => (
                        <div key={appIdx} className="flex items-center gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-3 h-3 text-[#C5A059] shrink-0" />
                          <span>{t(app)}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#222222]">
                    <button
                      onClick={() => onNavigate('booking')}
                      className="w-full flex items-center justify-between text-xs font-semibold uppercase tracking-widest text-[#C5A059] hover:text-white transition-colors cursor-pointer"
                    >
                      <span>{t('Engage Consulting')}</span>
                      <ChevronRight className="w-4 h-4 text-[#C5A059] group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. MISSION SECTION (Cinematic Dark Declaration) */}
      <section
        id="mission-statement-section"
        className="py-24 sm:py-32 bg-[#111111] relative overflow-hidden border-y border-[#222222]"
      >
        <div className="absolute inset-0 pointer-events-none opacity-15">
          <img
            src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=2000&q=80"
            alt="Mission Focus"
            className="w-full h-full object-cover filter contrast-150 grayscale"
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 border border-[#222222] rounded text-[11px] font-mono uppercase tracking-[0.3em] text-[#C5A059] bg-[#141414]">
            {t('Institutional Mission')}
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight leading-[1.25] italic">
            &ldquo;{t(COMPANY_INFO.mission)}&rdquo;
          </h2>

          <div className="h-[1px] w-24 mx-auto my-8 bg-[#C5A059]" />

          <span className="text-xs uppercase tracking-[0.25em] text-[#C5A059] font-medium">
            Elite Vanguard Leadership Group LLC
          </span>
        </div>
      </section>

      {/* 11. CORE VALUES (Verbatim 5 Values Grid) */}
      <section id="values-section" className="py-20 sm:py-28 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge={t('Foundational Principles')}
            title={t('Core Team Values')}
            subtitle={t('Our consulting and leadership philosophy is anchored in five non-negotiable operational principles.')}
            align="center"
            theme="dark"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-12">
            {CORE_VALUES.map((val) => (
              <div
                key={val.number}
                className="p-8 rounded-xl border border-[#222222] bg-[#141414] hover:border-[#C5A059]/50 transition-all duration-300 group flex flex-col justify-between relative"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xl font-bold text-[#C5A059]">
                      {val.number}
                    </span>
                    <span className="w-8 h-[1px] bg-[#C5A059]/30 group-hover:w-16 group-hover:bg-[#C5A059] transition-all" />
                  </div>

                  <h3 className="font-serif text-xl font-bold text-white group-hover:text-[#C5A059] transition-colors mb-3">
                    {t(val.title)}
                  </h3>

                  <p className="text-sm text-slate-400 leading-relaxed font-sans font-light">
                    {t(val.description)}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#222222] text-[10px] uppercase font-mono tracking-widest text-slate-500">
                  {t('Elite Vanguard Operational Standard')}
                </div>
              </div>
            ))}

            {/* Sixth Block: Consultation Callout */}
            <div className="p-8 rounded-xl border border-[#C5A059] bg-[#141414] flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs font-bold text-[#C5A059] uppercase tracking-widest">
                  {t('Leadership Alignment')}
                </span>
                <h3 className="font-serif text-2xl font-bold text-white mt-3 mb-2">
                  {t('Instill These Values Into Your Frontline')}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {t('Transform organizational culture and equip supervisors with decisive execution capabilities.')}
                </p>
              </div>

              <div className="mt-6">
                <CTAButton
                  onClick={() => onNavigate('booking')}
                  variant="primary-brass"
                  size="sm"
                  className="w-full"
                >
                  {t('Book a Consultation')}
                </CTAButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 12. EXECUTIVE LEADERSHIP PREVIEW */}
      <section id="leadership-preview-section" className="py-20 bg-[#111111] border-t border-[#222222]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge={t('Executive Leadership')}
            title={t('Veteran Leadership & Frontline Command')}
            subtitle={t('Led by decorated military veterans with extensive track records across infrastructure, public transit, and commercial enterprises.')}
            align="center"
            theme="dark"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
            {/* Walter Horton Preview */}
            <div className="border border-[#222222] bg-[#141414] rounded-xl p-6 sm:p-8 flex flex-col md:flex-row gap-6 items-center shadow-xl">
              <div className="w-32 h-32 md:w-40 md:h-40 shrink-0 rounded-lg border border-[#222222] overflow-hidden bg-[#0A0A0A]">
                <img
                  src={FOUNDER_PROFILES[0].image}
                  alt={FOUNDER_PROFILES[0].name}
                  className="w-full h-full object-cover filter contrast-105"
                />
              </div>
              <div className="flex-1 space-y-2 text-center md:text-left">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#C5A059] block">
                  {t(FOUNDER_PROFILES[0].badge || '')}
                </span>
                <h3 className="font-serif text-2xl font-bold text-white">
                  {FOUNDER_PROFILES[0].name}
                </h3>
                <p className="text-xs text-[#C5A059] font-medium uppercase tracking-wider">
                  {t(FOUNDER_PROFILES[0].role)}
                </p>
                <p className="text-xs text-slate-400 line-clamp-3 leading-relaxed">
                  {t('Decorated U.S. Army veteran, former Presidential Escort (3rd U.S. Infantry Regiment / The Old Guard), private equity operations veteran, and NYC Jacobi Hospital transportation supervisor.')}
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => onNavigate('team')}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#C5A059] hover:text-white uppercase tracking-wider cursor-pointer"
                  >
                    <span>{t('Read Executive Biography')}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Trevor McLeod Preview */}
            <div className="border border-[#222222] bg-[#141414] rounded-xl p-6 sm:p-8 flex flex-col md:flex-row gap-6 items-center shadow-xl">
              <div className="w-32 h-32 md:w-40 md:h-40 shrink-0 rounded-lg border border-[#222222] overflow-hidden bg-[#0A0A0A]">
                <img
                  src={FOUNDER_PROFILES[1].image}
                  alt={FOUNDER_PROFILES[1].name}
                  className="w-full h-full object-cover filter contrast-105"
                />
              </div>
              <div className="flex-1 space-y-2 text-center md:text-left">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#C5A059] block">
                  {t(FOUNDER_PROFILES[1].badge || '')}
                </span>
                <h3 className="font-serif text-2xl font-bold text-white">
                  {FOUNDER_PROFILES[1].name}
                </h3>
                <p className="text-xs text-[#C5A059] font-medium uppercase tracking-wider">
                  {t(FOUNDER_PROFILES[1].role)}
                </p>
                <p className="text-xs text-slate-400 line-clamp-3 leading-relaxed">
                  {t('U.S. Army veteran, retired Local Union #3 IBEW Journeyperson, transit infrastructure leader (Second Avenue Subway & Freedom Tower post-9/11 restoration), and dedicated community leader.')}
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => onNavigate('team')}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#C5A059] hover:text-white uppercase tracking-wider cursor-pointer"
                  >
                    <span>{t('Read Executive Biography')}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 text-center">
            <CTAButton
              onClick={() => onNavigate('team')}
              variant="outline-brass"
              size="md"
              icon="chevron"
            >
              {t('View Full Leadership Team & 4 Co-Founders')}
            </CTAButton>
          </div>
        </div>
      </section>

      {/* 13. FINAL LEAD CONSULTATION BANNER */}
      <section id="final-cta-section" className="py-20 bg-[#0A0A0A] border-t border-[#222222]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#C5A059]">
            {t('Confidential Executive Engagement')}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white">
            {t('Ready to Align Executive Strategy With Frontline Precision?')}
          </h2>
          <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
            {t("Schedule an initial consultation to discuss your organization's leadership development, operational rigor, and high-consequence performance goals.")}
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <CTAButton
              onClick={() => onNavigate('booking')}
              variant="primary-brass"
              size="lg"
              icon="arrow"
              className="w-full sm:w-auto"
            >
              {t('Book a Consultation')}
            </CTAButton>

            <div
              className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-lg border border-[#222222] bg-[#141414] text-xs uppercase tracking-widest text-slate-400 w-full sm:w-auto"
            >
              <Phone className="w-4 h-4 text-slate-500" />
              <span>{t('Call Direct: [Phone - TBD]')}</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
