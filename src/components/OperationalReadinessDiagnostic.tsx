import React, { useState } from 'react';
import { PageId } from '../types';
import { CheckCircle2, ArrowRight, RotateCcw, AlertTriangle, Sparkles, TrendingUp } from 'lucide-react';
import { CTAButton } from './CTAButton';
import { useLanguage } from '../i18n/LanguageContext';

interface DiagnosticQuestion {
  id: string;
  pillar: string;
  question: string;
  options: {
    label: string;
    points: number;
    description: string;
  }[];
}

const QUESTIONS: DiagnosticQuestion[] = [
  {
    id: 'translation',
    pillar: 'Strategy-to-Field Translation',
    question: 'How effectively do frontline supervisors understand and execute executive strategic directives?',
    options: [
      {
        label: 'Diluted or Misaligned',
        points: 10,
        description: 'Strategic intent gets lost between C-suite directives and frontline shift reality.',
      },
      {
        label: 'Inconsistent Execution',
        points: 18,
        description: 'Some shifts execute well, but quality and speed fluctuate across different crews.',
      },
      {
        label: 'Decisive Alignment',
        points: 25,
        description: 'Supervisors clearly communicate mission objectives and execute with minimal drift.',
      },
    ],
  },
  {
    id: 'accountability',
    pillar: 'Supervisory Accountability & Ownership',
    question: 'What is the dominant reaction when operational bottlenecks or performance deficits occur?',
    options: [
      {
        label: 'Finger-Pointing & Excuses',
        points: 10,
        description: 'Deficits are attributed to supply chain delays, staff shortages, or upper management.',
      },
      {
        label: 'Reactive Problem Solving',
        points: 18,
        description: 'Supervisors fix immediate fires but fail to install preventative root-cause discipline.',
      },
      {
        label: '100% Outcome Ownership',
        points: 25,
        description: 'Leaders embody "Own the Outcome", conduct after-action reviews, and hold teams accountable.',
      },
    ],
  },
  {
    id: 'sopRigor',
    pillar: 'Operational Rigor & SOP Adherence',
    question: 'How strictly are Standard Operating Procedures (SOPs), safety protocols, and quality standards enforced on the frontline?',
    options: [
      {
        label: 'Informal / Shortcuts Taken',
        points: 10,
        description: 'SOPs exist in manuals but are frequently bypassed under time pressure.',
      },
      {
        label: 'Compliance Without Passion',
        points: 18,
        description: 'Checklists are completed mechanically without true zero-defect pride.',
      },
      {
        label: 'Zero-Defect Culture',
        points: 25,
        description: 'Standards are non-negotiable; supervisors actively coach and inspect for perfection.',
      },
    ],
  },
  {
    id: 'adaptability',
    pillar: 'Decisive Adaptability Under Pressure',
    question: 'How do your mid-level and frontline leaders perform in high-consequence, unexpected operational disruptions?',
    options: [
      {
        label: 'Paralysis or Panic',
        points: 10,
        description: 'Teams stall waiting for higher-level guidance or react chaotically.',
      },
      {
        label: 'Slow Escalation',
        points: 18,
        description: 'Decisions are deferred up the chain of command, creating costly operational downtime.',
      },
      {
        label: 'Calm, Decisive Action',
        points: 25,
        description: 'Leaders assess risk rapidly, communicate with composure, and execute tactical contingencies.',
      },
    ],
  },
];

interface OperationalReadinessDiagnosticProps {
  onNavigate: (page: PageId) => void;
}

export const OperationalReadinessDiagnostic: React.FC<OperationalReadinessDiagnosticProps> = ({ onNavigate }) => {
  const { t } = useLanguage();
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number>>({
    translation: 18,
    accountability: 10,
    sopRigor: 18,
    adaptability: 18,
  });

  const totalScore: number = Object.values(selectedAnswers).reduce<number>((acc, curr) => acc + (typeof curr === 'number' ? curr : 0), 0);

  const getReadinessTier = (score: number) => {
    if (score >= 88) {
      return {
        tier: 'High-Performance Command Posture',
        badgeColor: 'text-emerald-400 border-emerald-500/40 bg-emerald-950/30',
        summary: 'Your organization possesses strong frontline leadership fundamentals. The primary opportunity is institutionalizing longitudinal academies and scaling command presence across new facilities.',
        recommendation: 'Executive Advisory & Advanced Cohort Scaling',
      };
    } else if (score >= 65) {
      return {
        tier: 'Moderate Strategy-Execution Friction',
        badgeColor: 'text-[#C5A059] border-[#C5A059]/40 bg-[#C5A059]/10',
        summary: 'A measurable gap exists between executive intent and daily field operations. Frontline supervisors require squad-level command training, structured feedback habits, and after-action review disciplines.',
        recommendation: 'Targeted Supervisory Academies & SOP Hardening',
      };
    } else {
      return {
        tier: 'High-Risk Operational Vulnerability',
        badgeColor: 'text-amber-400 border-amber-500/40 bg-amber-950/30',
        summary: 'Critical friction in supervisory accountability, standard adherence, and tactical communication is eroding margin, safety, and mission consistency.',
        recommendation: 'Comprehensive Operational & Leadership Diagnostic',
      };
    }
  };

  const currentTier = getReadinessTier(totalScore);

  const handleSelectOption = (questionId: string, points: number) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionId]: points,
    }));
  };

  const handleReset = () => {
    setSelectedAnswers({
      translation: 18,
      accountability: 10,
      sopRigor: 18,
      adaptability: 18,
    });
  };

  return (
    <div id="readiness-diagnostic-card" className="border border-[#222222] bg-[#141414] rounded-2xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#222222]">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-2 border border-[#222222] rounded text-[10px] font-mono uppercase tracking-[0.25em] text-[#C5A059] bg-[#111111]">
            <Sparkles className="w-3 h-3" />
            {t('Interactive Assessment Tool')}
          </div>
          <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
            {t('Operational Readiness & Execution Diagnostic')}
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-2xl font-light">
            {t("Evaluate your organization's frontline command alignment across 4 high-consequence pillars to calculate your Execution Index.")}
          </p>
        </div>

        <button
          onClick={handleReset}
          className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-slate-400 hover:text-white transition-colors cursor-pointer self-start md:self-auto py-1 px-2.5 rounded border border-[#222222] bg-[#111111]"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>{t('Reset Diagnostic')}</span>
        </button>
      </div>

      {/* Main Grid: Interactive Questions on Left, Live Score Meter on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-8 items-start">
        {/* Left Column: 4 Assessment Questions */}
        <div className="lg:col-span-7 space-y-6">
          {QUESTIONS.map((q, qIndex) => (
            <div key={q.id} className="p-4 sm:p-5 rounded-xl border border-[#222222] bg-[#111111] space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#C5A059]">
                  {t('Pillar')} 0{qIndex + 1}: {t(q.pillar)}
                </span>
                <span className="text-xs font-mono text-slate-400">
                  {t('Selected:')} {selectedAnswers[q.id]}/25 {t('pts')}
                </span>
              </div>

              <p className="text-sm font-serif font-semibold text-white">
                {t(q.question)}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1">
                {q.options.map((opt) => {
                  const isSelected = selectedAnswers[q.id] === opt.points;
                  return (
                    <button
                      key={opt.label}
                      onClick={() => handleSelectOption(q.id, opt.points)}
                      className={`p-3 text-left rounded-lg border transition-all cursor-pointer flex flex-col justify-between ${
                        isSelected
                          ? 'border-[#C5A059] bg-[#1A1A1A] text-white shadow-md'
                          : 'border-[#222222] bg-[#141414] text-slate-400 hover:border-[#333333] hover:text-slate-200'
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <span className={`text-xs font-bold ${isSelected ? 'text-[#C5A059]' : 'text-slate-300'}`}>
                            {t(opt.label)}
                          </span>
                          <span className={`text-[10px] font-mono ${isSelected ? 'text-[#C5A059]' : 'text-slate-600'}`}>
                            {opt.points} {t('pts')}
                          </span>
                        </div>
                        <p className="text-[11px] leading-relaxed text-slate-400">
                          {t(opt.description)}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Right Column: Live Operational Score & Diagnostic Output */}
        <div className="lg:col-span-5 border border-[#222222] bg-[#111111] rounded-xl p-6 sm:p-8 space-y-6 lg:sticky lg:top-24">
          <div className="text-center space-y-3 pb-6 border-b border-[#222222]">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#C5A059] block">
              {t('Frontline Execution Index')}
            </span>

            {/* Visual Gauge Display */}
            <div className="relative inline-flex items-center justify-center">
              <div className="w-32 h-32 rounded-full border-4 border-[#222222] bg-[#141414] flex flex-col items-center justify-center shadow-inner">
                <span className="text-4xl font-serif font-extrabold text-white">
                  {totalScore}
                </span>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#C5A059]">
                  {t('/ 100 Total')}
                </span>
              </div>
            </div>

            {/* Score Tier Badge */}
            <div>
              <span className={`inline-block px-3 py-1 rounded text-xs font-mono uppercase tracking-wider border ${currentTier.badgeColor}`}>
                {t(currentTier.tier)}
              </span>
            </div>
          </div>

          {/* Diagnostic Assessment Summary */}
          <div className="space-y-4 text-xs leading-relaxed">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400 block mb-1">
                {t('Executive Diagnostic Findings:')}
              </span>
              <p className="text-slate-300 font-light">
                {t(currentTier.summary)}
              </p>
            </div>

            <div className="p-3.5 rounded-lg border border-[#222222] bg-[#141414] space-y-1.5">
              <span className="font-mono text-[10px] uppercase tracking-wider text-[#C5A059] flex items-center gap-1.5">
                <TrendingUp className="w-3.5 h-3.5 text-[#C5A059]" />
                {t('Recommended Strategic Action')}
              </span>
              <p className="text-white font-serif font-medium text-xs">
                {t(currentTier.recommendation)}
              </p>
            </div>
          </div>

          {/* Direct Route to Consultation */}
          <div className="pt-2">
            <CTAButton
              onClick={() => onNavigate('booking')}
              variant="primary-brass"
              size="md"
              icon="arrow"
              className="w-full justify-center shadow-xl"
            >
              {t('Discuss Findings With Walter')}
            </CTAButton>
            <p className="text-[11px] text-slate-400 text-center mt-2 font-mono">
              {t('Confidential executive review with lead consultant.')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
