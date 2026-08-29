import React, { useState } from 'react';
import { PageId } from '../types';
import { Shield, Search, Compass, Users, CheckCircle2, ChevronRight, Award, Zap } from 'lucide-react';
import { CTAButton } from './CTAButton';

interface RoadmapPhase {
  phase: string;
  title: string;
  tagline: string;
  duration: string;
  description: string;
  activities: string[];
  deliverables: string[];
}

const PHASES: RoadmapPhase[] = [
  {
    phase: 'Phase 01',
    title: 'Operational & Supervisory Diagnostic',
    tagline: 'Uncovering the Friction Points in Field Execution',
    duration: 'Weeks 1 – 3',
    description: 'We conduct on-the-ground field observations, shadow shift supervisors, evaluate SOP adherence, and interview executive leaders to pinpoint exactly where strategic intent is lost in translation.',
    activities: [
      'Frontline shift shadowing & supervisor interaction audits',
      'Standard Operating Procedure (SOP) friction analysis',
      'Executive-to-field communication channel diagnostics',
      'Supervisory accountability baseline scoring'
    ],
    deliverables: [
      'Comprehensive Operational Friction Report',
      'Strategy-to-Execution Gap Matrix',
      'Tailored Consulting Roadmap & Target KPIs'
    ]
  },
  {
    phase: 'Phase 02',
    title: 'Command Alignment & Standard Hardening',
    tagline: 'Bridging Executive Intent to Squad-Level Goals',
    duration: 'Weeks 4 – 6',
    description: 'We align executive leadership, division directors, and frontline managers around non-negotiable operational standards, establishing absolute role ownership and eliminating structural ambiguity.',
    activities: [
      'Executive governance & command intent workshops',
      'Standardization of core operating procedures & safety protocols',
      'Definition of frontline accountability metrics (Own the Outcome)',
      'Establishment of cross-shift communication rhythms'
    ],
    deliverables: [
      'Standardized Command Intent Playbook',
      'Shift-Level KPI & Accountability Dashboard',
      'Revised Frontline Standard Operating Guidelines'
    ]
  },
  {
    phase: 'Phase 03',
    title: 'Tactical Leadership Academies',
    tagline: 'Instilling Combat-Proven Command Presence in Shift Supervisors',
    duration: 'Weeks 7 – 12',
    description: 'We deploy intensive, cohort-based leadership development for foremen, crew leaders, and emerging managers—teaching decisive decision-making, active mentorship, and composure under pressure.',
    activities: [
      'Interactive squad-level command presence intensives',
      'High-pressure simulation exercises & conflict resolution drills',
      'Constructive feedback and peer-to-peer accountability training',
      'Mission First, People Always operational balancing'
    ],
    deliverables: [
      'Frontline Supervisor Leadership Certification',
      'Tactical Field Leader Toolkit',
      'Individual Leadership Growth Plans'
    ]
  },
  {
    phase: 'Phase 04',
    title: 'Field Execution & After-Action Hardening',
    tagline: 'Embedding Zero-Defect Habits on the Jobsite',
    duration: 'Weeks 13 – 18',
    description: 'We return to the field alongside trained supervisors, conducting structured After-Action Reviews (AARs) to ensure new leadership disciplines translate directly into daily operational performance.',
    activities: [
      'Direct on-site coaching during live operational shifts',
      'Implementation of disciplined After-Action Reviews (AARs)',
      'Real-time bottleneck identification and tactical remediation',
      'Verification of quality and safety standard adherence'
    ],
    deliverables: [
      'Standardized After-Action Review (AAR) Protocol',
      'Field Execution Compliance Audits',
      'Mid-Point Operational Impact Assessment'
    ]
  },
  {
    phase: 'Phase 05',
    title: 'Longitudinal Governance & Cultural Mastery',
    tagline: 'Sustaining High-Performance Excellence Over Time',
    duration: 'Ongoing Quarterly Cadence',
    description: 'We institutionalize continuous operational rigor, building internal leadership pipelines, quarterly executive reviews, and succession frameworks to ensure long-term mission success.',
    activities: [
      'Quarterly executive governance and performance reviews',
      'Supervisor cohort alumni mentorship and refresher clinics',
      'Talent succession planning and internal cadre development',
      'Enterprise-wide operational standard benchmarking'
    ],
    deliverables: [
      'Longitudinal Operational Excellence Scorecard',
      'Annual Leadership Succession Blueprint',
      'Executive Leadership Advisory Access'
    ]
  }
];

interface DeploymentRoadmapProps {
  onNavigate: (page: PageId) => void;
}

export const DeploymentRoadmap: React.FC<DeploymentRoadmapProps> = ({ onNavigate }) => {
  const [activePhaseIndex, setActivePhaseIndex] = useState<number>(0);
  const activePhase = PHASES[activePhaseIndex];

  return (
    <div id="deployment-roadmap-card" className="border border-[#222222] bg-[#141414] rounded-2xl p-6 sm:p-10 shadow-2xl space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#222222]">
        <div>
          <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#C5A059] block mb-1">
            Methodology & Deployment
          </span>
          <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
            The 5-Phase Battle-Tested Consulting Blueprint
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-2xl font-light">
            How Elite Vanguard systematically bridges executive strategy to frontline execution across enterprise and municipal operations.
          </p>
        </div>

        <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-lg border border-[#222222] bg-[#111111] text-xs font-mono text-slate-300">
          <Zap className="w-3.5 h-3.5 text-[#C5A059]" />
          <span>Structured Deployment Model</span>
        </div>
      </div>

      {/* Phase Stepper Pills */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 sm:gap-3">
        {PHASES.map((p, idx) => {
          const isActive = idx === activePhaseIndex;
          return (
            <button
              key={p.phase}
              onClick={() => setActivePhaseIndex(idx)}
              className={`p-3 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                isActive
                  ? 'border-[#C5A059] bg-[#1A1A1A] text-white shadow-lg'
                  : 'border-[#222222] bg-[#111111] text-slate-400 hover:border-[#333333] hover:text-slate-200'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className={`text-[10px] font-mono uppercase ${isActive ? 'text-[#C5A059] font-bold' : 'text-slate-500'}`}>
                  {p.phase}
                </span>
                <span className="text-[10px] font-mono text-slate-500 hidden sm:inline">
                  {p.duration.split(' ')[0]}
                </span>
              </div>
              <p className="text-xs font-serif font-semibold line-clamp-2 leading-snug">
                {p.title}
              </p>
            </button>
          );
        })}
      </div>

      {/* Active Phase Deep Dive */}
      <div className="border border-[#222222] bg-[#111111] rounded-xl p-6 sm:p-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#222222]">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#C5A059] uppercase tracking-wider mb-1">
              <span>{activePhase.phase}</span>
              <span>•</span>
              <span>{activePhase.duration}</span>
            </div>
            <h4 className="text-xl sm:text-2xl font-serif font-bold text-white">
              {activePhase.title}
            </h4>
            <p className="text-xs sm:text-sm text-[#C5A059] font-medium italic mt-0.5">
              {activePhase.tagline}
            </p>
          </div>

          <div className="self-start sm:self-auto">
            <CTAButton
              onClick={() => onNavigate('booking')}
              variant="primary-brass"
              size="sm"
              icon="arrow"
            >
              Schedule Phase 01 Diagnostic
            </CTAButton>
          </div>
        </div>

        <p className="text-sm text-slate-300 leading-relaxed font-light">
          {activePhase.description}
        </p>

        {/* Two Columns: Core Activities vs Verified Deliverables */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
          {/* Key Activities */}
          <div className="p-4 rounded-xl border border-[#222222] bg-[#141414] space-y-3">
            <span className="text-[11px] font-mono uppercase tracking-wider text-[#C5A059] block">
              Core Strategic Activities
            </span>
            <ul className="space-y-2 text-xs text-slate-300">
              {activePhase.activities.map((act, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-[#C5A059] rounded-full mt-1.5 shrink-0" />
                  <span>{act}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Hard Deliverables */}
          <div className="p-4 rounded-xl border border-[#222222] bg-[#141414] space-y-3">
            <span className="text-[11px] font-mono uppercase tracking-wider text-[#C5A059] block">
              Documented Deliverables & Tooling
            </span>
            <ul className="space-y-2 text-xs text-slate-300">
              {activePhase.deliverables.map((del, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059] mt-0.5 shrink-0" />
                  <span className="font-medium text-white">{del}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
