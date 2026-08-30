import React, { useState } from 'react';
import { PageId } from '../types';
import { SERVICE_CATEGORIES, TARGET_INDUSTRIES } from '../data/content';
import { SectionHeader } from '../components/SectionHeader';
import { CTAButton } from '../components/CTAButton';
import { DeploymentRoadmap } from '../components/DeploymentRoadmap';
import {

  ArrowRight,
  CheckCircle2,
  Layers,
  Target,
  Briefcase,
  Award,
  ChevronRight,
  Sparkles
} from 'lucide-react';

interface ServicesPageProps {
  onNavigate: (page: PageId) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate }) => {
  const [selectedServiceId, setSelectedServiceId] = useState<string>(SERVICE_CATEGORIES[0].id);

  const selectedService = SERVICE_CATEGORIES.find((s) => s.id === selectedServiceId) || SERVICE_CATEGORIES[0];

  return (
    <div id="services-page" className="w-full pt-28 sm:pt-32 pb-20 bg-[#0A0A0A] text-slate-300">
      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-20">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 border border-[#222222] rounded text-[11px] font-mono font-semibold uppercase tracking-[0.25em] text-[#C5A059] bg-[#141414]">
            <Layers className="w-3.5 h-3.5" />
            Executive Consulting Architecture
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white tracking-tight leading-tight">
            Consulting & Leadership Practice Areas
          </h1>
          <div className="h-[1px] w-24 mx-auto my-6 bg-gradient-to-r from-transparent via-[#C5A059] to-transparent" />
          <p className="text-base sm:text-xl text-slate-300 font-light leading-relaxed">
            A structured framework designed to translate battle-tested operational rigor into commercial and frontline excellence.
          </p>
        </div>
      </section>

      {/* Architecture Notice */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="border border-[#222222] bg-[#141414] rounded-xl p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img src="/image/logo.png" alt="Elite Vanguard" className="w-5 h-5 rounded shrink-0" />
            <p className="text-xs text-slate-300 font-mono">
              <span className="text-[#C5A059] font-bold">FRAMEWORK NOTICE:</span> Practice areas are structured based on firm positioning and target domains. Custom corporate scopes and tailored curriculums are finalized during the diagnostic engagement.
            </p>
          </div>
          <CTAButton
            onClick={() => onNavigate('booking')}
            variant="primary-brass"
            size="sm"
            icon="arrow"
            className="shrink-0"
          >
            Custom Scope Request
          </CTAButton>
        </div>
      </section>

      {/* 1. INTERACTIVE PRACTICE AREA SELECTOR & DEEP DIVE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Practice Areas List */}
          <div className="lg:col-span-4 space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-[#C5A059] block mb-3 px-2">
              Practice Area Categories
            </span>
            {SERVICE_CATEGORIES.map((service, index) => {
              const isSelected = service.id === selectedServiceId;
              return (
                <button
                  key={service.id}
                  onClick={() => setSelectedServiceId(service.id)}
                  className={`w-full p-4 text-left rounded-xl border transition-all flex items-center justify-between cursor-pointer ${
                    isSelected
                      ? 'border-[#C5A059] bg-[#1A1A1A] text-white shadow-lg'
                      : 'border-[#222222] bg-[#141414] text-slate-400 hover:border-[#333333] hover:text-slate-200'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`font-mono text-xs ${isSelected ? 'text-[#C5A059] font-bold' : 'text-slate-500'}`}>
                      0{index + 1}
                    </span>
                    <span className="font-serif text-sm sm:text-base font-semibold">
                      {service.title}
                    </span>
                  </div>
                  <ChevronRight className={`w-4 h-4 transition-transform ${isSelected ? 'text-[#C5A059] translate-x-1' : 'text-slate-600'}`} />
                </button>
              );
            })}
          </div>

          {/* Right Column: Active Practice Area Detail Card */}
          <div className="lg:col-span-8 border border-[#222222] bg-[#141414] rounded-xl p-8 sm:p-10 shadow-2xl relative">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-6 border-b border-[#222222]">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#C5A059] block mb-1">
                  Practice Architecture
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                  {selectedService.title}
                </h2>
              </div>
              <div className="px-3 py-1 bg-[#111111] border border-[#222222] rounded text-xs font-mono text-[#C5A059]">
                Target: {selectedService.targetAudience}
              </div>
            </div>

            <p className="text-sm sm:text-base text-[#C5A059] font-medium mb-4 italic">
              {selectedService.subtitle}
            </p>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-light mb-8">
              {selectedService.overview}
            </p>

            {/* Focus Areas & Deliverables Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-[#222222]">
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#C5A059] font-semibold mb-3 flex items-center gap-2">
                  <Target className="w-3.5 h-3.5" />
                  Core Focus Areas
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                  {selectedService.focusAreas.map((area, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059] shrink-0 mt-0.5" />
                      <span>{area}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#C5A059] font-semibold mb-3 flex items-center gap-2">
                  <Award className="w-3.5 h-3.5" />
                  Key Engagement Outputs
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                  {selectedService.deliverables.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#222222] flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-slate-500 font-mono">
                Elite Vanguard Engagement Standard
              </span>
              <CTAButton
                onClick={() => onNavigate('booking')}
                variant="primary-brass"
                size="sm"
                icon="arrow"
              >
                Inquire About {selectedService.title}
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE 5-PHASE DEPLOYMENT ROADMAP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <DeploymentRoadmap onNavigate={onNavigate} />
      </section>

      {/* 3. TARGET AUDIENCE APPLICATION MATRIX */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <SectionHeader
          badge="Sector Integration"
          title="Tailored Application Across Key Domains"
          subtitle="How our consulting services integrate into your specific industry requirements."
          align="center"
          theme="dark"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {TARGET_INDUSTRIES.map((ind, i) => (
            <div key={ind.id} className="p-6 rounded-xl border border-[#222222] bg-[#141414] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono text-[#C5A059]">Sector 0{i + 1}</span>
                  <Briefcase className="w-4 h-4 text-[#C5A059]" />
                </div>
                <h3 className="font-serif text-lg font-bold text-white mb-2">
                  {ind.title}
                </h3>
                <p className="text-xs text-slate-400 mb-4 leading-relaxed">
                  {ind.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#222222]">
                <button
                  onClick={() => onNavigate('booking')}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-[#C5A059] hover:text-white transition-colors cursor-pointer"
                >
                  <span>Request Sector Proposal</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Final Services CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8 border-t border-[#222222]">
        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-4">
          Initiate an Executive Practice Consultation
        </h2>
        <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto mb-8 font-light">
          Discuss your organization’s operational challenges, supervisory development needs, and customized leadership academy formats.
        </p>

        <CTAButton
          onClick={() => onNavigate('booking')}
          variant="primary-brass"
          size="lg"
          icon="arrow"
        >
          Book a Consultation
        </CTAButton>
      </section>
    </div>
  );
};
