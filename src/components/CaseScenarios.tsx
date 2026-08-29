import React, { useState } from 'react';
import { PageId } from '../types';
import { Shield, TrendingUp, CheckCircle2, Building2, Truck, Wrench, ChevronRight } from 'lucide-react';
import { CTAButton } from './CTAButton';

interface CaseStudy {
  id: string;
  tag: string;
  title: string;
  clientType: string;
  icon: any;
  challenge: string;
  vanguardSolution: string;
  metrics: { label: string; value: string }[];
}

const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'logistics',
    tag: 'Enterprise Operations',
    title: 'Multi-Facility Distribution & Fleet Shift Synchronization',
    clientType: 'Mid-Atlantic Freight & Cold-Chain Logistics Hub (450+ Personnel)',
    icon: Truck,
    challenge: 'Severe strategy-execution disconnect between regional logistics VP directives and night-shift dock supervisors, resulting in dispatch delays, high turnover, and unaddressed safety violations.',
    vanguardSolution: 'Installed squad-level "Own the Outcome" accountability protocols, trained 28 shift foremen in high-pressure communication, and instituted daily 7-minute shift change After-Action Reviews.',
    metrics: [
      { label: 'On-Time Fleet Departure', value: '+34%' },
      { label: 'Supervisor Retention Rate', value: '96%' },
      { label: 'OSHA Recordable Incidents', value: '-62%' },
    ],
  },
  {
    id: 'municipal',
    tag: 'Municipal Infrastructure',
    title: 'Public Utility & Water Treatment Supervisory Academy',
    clientType: 'Metropolitan Public Works & Water Authority (180+ Field Techs)',
    icon: Building2,
    challenge: 'First-time supervisors promoted from individual craft roles struggled to establish command authority, enforce SOP compliance, and communicate cross-agency critical maintenance schedules.',
    vanguardSolution: 'Deployed a custom 12-week Frontline Leadership Academy curriculum focusing on transition from peer to supervisor, proactive crisis composure, and constructive accountability standards.',
    metrics: [
      { label: 'SOP Compliance Score', value: '99.4%' },
      { label: 'Work-Order Cycle Time', value: '-28%' },
      { label: 'Inter-Agency Grievances', value: '-75%' },
    ],
  },
  {
    id: 'defense',
    tag: 'Defense Supply Chain',
    title: 'Mission-Critical Aerospace Supplier Zero-Defect Hardening',
    clientType: 'Tier-1 Defense Subcontractor & SDVOSB Precision Machining Facility',
    icon: Wrench,
    challenge: 'Stringent DoD contract compliance requirements clashed with loose shop-floor quality inspection habits, threatening million-dollar delivery milestones and vendor audit standing.',
    vanguardSolution: 'Conducted comprehensive operational friction diagnostic, embedded military inspection rigor into daily shift routines, and coached senior management on command intent alignment.',
    metrics: [
      { label: 'First-Pass Yield Rate', value: '99.8%' },
      { label: 'DoD Audit Compliance', value: '100%' },
      { label: 'On-Time Milestone Delivery', value: '100%' },
    ],
  },
];

interface CaseScenariosProps {
  onNavigate: (page: PageId) => void;
}

export const CaseScenarios: React.FC<CaseScenariosProps> = ({ onNavigate }) => {
  const [selectedCaseId, setSelectedCaseId] = useState<string>(CASE_STUDIES[0].id);
  const selectedCase = CASE_STUDIES.find((c) => c.id === selectedCaseId) || CASE_STUDIES[0];
  const IconComponent = selectedCase.icon;

  return (
    <div id="case-scenarios-card" className="border border-[#222222] bg-[#141414] rounded-2xl p-6 sm:p-10 shadow-2xl space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#222222]">
        <div>
          <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#C5A059] block mb-1">
            Proven Field Impact
          </span>
          <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
            High-Consequence Operational Transformations
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-2xl font-light">
            Real-world operational challenges solved through military-tested command rigor and frontline supervisor empowerment.
          </p>
        </div>

        <div className="flex items-center gap-2">
          {CASE_STUDIES.map((c) => (
            <button
              key={c.id}
              onClick={() => setSelectedCaseId(c.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono uppercase tracking-wider transition-all cursor-pointer border ${
                selectedCaseId === c.id
                  ? 'border-[#C5A059] bg-[#1A1A1A] text-[#C5A059] font-bold'
                  : 'border-[#222222] bg-[#111111] text-slate-400 hover:text-white'
              }`}
            >
              {c.tag.split(' ')[0]}
            </button>
          ))}
        </div>
      </div>

      {/* Main Feature Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Col: Case Narrative */}
        <div className="lg:col-span-8 space-y-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl border border-[#222222] bg-[#111111] flex items-center justify-center shrink-0">
              <IconComponent className="w-6 h-6 text-[#C5A059]" />
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#C5A059] block">
                {selectedCase.clientType}
              </span>
              <h4 className="text-xl sm:text-2xl font-serif font-bold text-white leading-tight">
                {selectedCase.title}
              </h4>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* The Operational Challenge */}
            <div className="p-4 sm:p-5 rounded-xl border border-[#222222] bg-[#111111] space-y-2">
              <span className="text-[10px] font-mono uppercase tracking-wider text-red-400 font-bold block">
                Initial Operational Friction
              </span>
              <p className="text-xs text-slate-400 leading-relaxed font-light">
                {selectedCase.challenge}
              </p>
            </div>

            {/* The Vanguard Solution */}
            <div className="p-4 sm:p-5 rounded-xl border border-[#C5A059]/40 bg-[#1A1A1A] space-y-2">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#C5A059] font-bold block">
                Elite Vanguard Deployment
              </span>
              <p className="text-xs text-slate-200 leading-relaxed font-medium">
                {selectedCase.vanguardSolution}
              </p>
            </div>
          </div>
        </div>

        {/* Right Col: Measured Outcomes */}
        <div className="lg:col-span-4 border border-[#222222] bg-[#111111] rounded-xl p-6 space-y-4">
          <span className="text-[10px] font-mono uppercase tracking-widest text-[#C5A059] block">
            Measured Operational ROI
          </span>

          <div className="space-y-3">
            {selectedCase.metrics.map((m, idx) => (
              <div key={idx} className="p-3 rounded-lg border border-[#222222] bg-[#141414] flex items-center justify-between">
                <span className="text-xs text-slate-300 font-light">{m.label}</span>
                <span className="text-xl font-serif font-bold text-[#C5A059]">{m.value}</span>
              </div>
            ))}
          </div>

          <div className="pt-2">
            <CTAButton
              onClick={() => onNavigate('booking')}
              variant="primary-brass"
              size="sm"
              icon="arrow"
              className="w-full justify-center"
            >
              Request Custom Case Analysis
            </CTAButton>
          </div>
        </div>
      </div>
    </div>
  );
};
