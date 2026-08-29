import React from 'react';
import { PageId } from '../types';
import { Shield, XCircle, CheckCircle2, ArrowRight } from 'lucide-react';
import { CTAButton } from './CTAButton';

interface ComparisonRow {
  dimension: string;
  traditional: string;
  eliteVanguard: string;
}

const COMPARISON_DATA: ComparisonRow[] = [
  {
    dimension: 'Core Methodology',
    traditional: 'Theoretical classroom lectures, abstract personality tests, and generic PowerPoint slides.',
    eliteVanguard: 'Battle-tested military command discipline, squad-level accountability, and scenario simulations.',
  },
  {
    dimension: 'Frontline Engagement',
    traditional: 'Disconnected from jobsite, shop floor, or utility field realities; delivered by career academics.',
    eliteVanguard: 'Delivered by combat veterans and frontline operational veterans who have commanded in high-stakes environments.',
  },
  {
    dimension: 'Accountability Framework',
    traditional: 'Passive attendance metrics; vague "behavioral shift" goals with zero field verification.',
    eliteVanguard: '"Own the Outcome" non-negotiables, real-time After-Action Reviews (AARs), and documented shift KPIs.',
  },
  {
    dimension: 'Standard Enforcement',
    traditional: 'Tolerates loose interpretations of procedures; focuses on consensus over operational rigor.',
    eliteVanguard: 'Zero-defect habit formation; trains supervisors to "Lead from the Front" and inspect what they expect.',
  },
  {
    dimension: 'Crisis & High-Pressure Execution',
    traditional: 'Struggles when unexpected friction occurs; relies on slow escalation up the organizational chart.',
    eliteVanguard: 'Instills decisive adaptability; empowers supervisors to assess risk rapidly and act with composure.',
  },
  {
    dimension: 'Longitudinal Impact',
    traditional: 'Fades within 30 days of the seminar; no structural bridge between C-suite and shift leads.',
    eliteVanguard: 'Builds permanent supervisory cohorts, internal mentor pipelines, and quarterly governance reviews.',
  },
];

interface MethodologyComparisonProps {
  onNavigate: (page: PageId) => void;
}

export const MethodologyComparison: React.FC<MethodologyComparisonProps> = ({ onNavigate }) => {
  return (
    <div id="methodology-comparison-card" className="border border-[#222222] bg-[#141414] rounded-2xl p-6 sm:p-10 shadow-2xl space-y-8">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-2">
        <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#C5A059] block">
          Strategic Differentiation
        </span>
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-white">
          Why Conventional Corporate Training Fails
        </h3>
        <p className="text-xs sm:text-sm text-slate-400 font-light">
          Compare traditional seminar models against Elite Vanguard's battle-tested operational discipline.
        </p>
      </div>

      {/* Comparison Table / Cards */}
      <div className="space-y-4">
        {/* Desktop Table Header */}
        <div className="hidden md:grid grid-cols-12 gap-4 pb-3 border-b border-[#222222] text-xs font-mono uppercase tracking-wider text-slate-500">
          <div className="col-span-3">Operational Dimension</div>
          <div className="col-span-4 text-slate-400">Traditional Corporate Seminars</div>
          <div className="col-span-5 text-[#C5A059] font-bold flex items-center gap-1.5">
            <Shield className="w-3.5 h-3.5" />
            <span>The Elite Vanguard Standard</span>
          </div>
        </div>

        {/* Rows */}
        {COMPARISON_DATA.map((row, idx) => (
          <div
            key={idx}
            className="p-4 sm:p-5 rounded-xl border border-[#222222] bg-[#111111] grid grid-cols-1 md:grid-cols-12 gap-4 items-center hover:border-[#333333] transition-colors"
          >
            {/* Dimension Title */}
            <div className="md:col-span-3">
              <span className="font-serif font-bold text-sm text-white">
                {row.dimension}
              </span>
            </div>

            {/* Traditional (Negative) */}
            <div className="md:col-span-4 p-3 rounded-lg border border-red-950/30 bg-red-950/10 space-y-1">
              <div className="flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-wider text-red-400">
                <XCircle className="w-3.5 h-3.5 text-red-500 shrink-0" />
                <span>Conventional Approach</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                {row.traditional}
              </p>
            </div>

            {/* Elite Vanguard (Positive) */}
            <div className="md:col-span-5 p-3 rounded-lg border border-[#C5A059]/40 bg-[#1A1A1A] space-y-1 shadow-md">
              <div className="flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-wider text-[#C5A059] font-bold">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                <span>Elite Vanguard Execution</span>
              </div>
              <p className="text-xs text-slate-200 leading-relaxed font-medium">
                {row.eliteVanguard}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Footer CTA */}
      <div className="pt-4 border-t border-[#222222] flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-xs text-slate-400 flex items-center gap-2">
          <Shield className="w-4 h-4 text-[#C5A059] shrink-0" />
          <span>Proven leadership principles engineered for commercial and frontline excellence.</span>
        </div>

        <CTAButton
          onClick={() => onNavigate('booking')}
          variant="primary-brass"
          size="sm"
          icon="arrow"
        >
          Request Operational Consultation
        </CTAButton>
      </div>
    </div>
  );
};
