import React, { useState } from 'react';
import { PageId, ConsultationRequest } from '../types';
import { COMPANY_INFO, TARGET_INDUSTRIES } from '../data/content';
import { CTAButton } from '../components/CTAButton';
import {

  Phone,
  Mail,
  Calendar,
  Clock,
  CheckCircle2,
  Building2,
  User,
  Briefcase,
  MessageSquare,
  Lock,
  ArrowRight
} from 'lucide-react';

interface BookingPageProps {
  onNavigate: (page: PageId) => void;
}

export const BookingPage: React.FC<BookingPageProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState<ConsultationRequest>({
    fullName: '',
    organization: '',
    title: '',
    email: '',
    phone: '',
    industry: TARGET_INDUSTRIES[0].title,
    operationalChallenge: '',
    preferredDate: '',
    preferredTime: 'Morning (08:00 - 12:00 EST)',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!formData.fullName.trim() || !formData.email.trim() || !formData.phone.trim()) {
      setErrorMsg('Please complete all required fields (Full Name, Work Email, and Direct Phone).');
      return;
    }

    setIsSubmitting(true);
    // Simulate high-reliability enterprise submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 900);
  };

  return (
    <div id="booking-page" className="w-full pt-28 sm:pt-32 pb-20 bg-[#0A0A0A] text-slate-300">
      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 border border-[#222222] rounded text-[11px] font-mono font-semibold uppercase tracking-[0.25em] text-[#C5A059] bg-[#141414]">
            <Calendar className="w-3.5 h-3.5" />
            Executive Engagement
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white tracking-tight leading-tight">
            Book a Consultation
          </h1>
          <div className="h-[1px] w-24 mx-auto my-6 bg-gradient-to-r from-transparent via-[#C5A059] to-transparent" />
          <p className="text-base sm:text-xl text-slate-300 font-light leading-relaxed">
            Schedule a confidential consultation with Walter Horton and our leadership team to evaluate your organization's operational challenges, supervisory capabilities, and high-consequence performance goals.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Direct Credentials & Executive Guarantee */}
          <div className="lg:col-span-4 space-y-6">
            <div className="border border-[#222222] bg-[#141414] rounded-xl p-6 sm:p-8 shadow-xl space-y-6">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#C5A059] block mb-1">
                  Direct Coordination
                </span>
                <h3 className="font-serif text-2xl font-bold text-white">
                  Elite Vanguard Leadership Group
                </h3>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-slate-300 pt-4 border-t border-[#222222]">
                <div>
                  <span className="block text-[10px] uppercase tracking-wider text-[#C5A059]">Lead Executive</span>
                  <span className="font-semibold text-white text-base">{COMPANY_INFO.contactPerson}</span>
                </div>

                <div>
                  <span className="block text-[10px] uppercase tracking-wider text-[#C5A059]">Direct Phone</span>
                  <div
                    id="booking-sidebar-phone"
                    className="inline-flex items-center gap-2 text-sm font-mono text-slate-400 mt-0.5"
                  >
                    <Phone className="w-4 h-4 text-slate-500" />
                    <span>[Phone - TBD]</span>
                  </div>
                </div>

                <div>
                  <span className="block text-[10px] uppercase tracking-wider text-[#C5A059]">Confidential Email</span>
                  <div
                    id="booking-sidebar-email"
                    className="inline-flex items-center gap-2 text-sm text-slate-400 mt-0.5 break-all"
                  >
                    <Mail className="w-4 h-4 text-slate-500 shrink-0" />
                    <span>[Email - TBD]</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#222222] space-y-3">
                <div className="flex items-start gap-2 text-xs text-slate-400">
                  <Lock className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                  <span>All consultations and organizational inquiries are handled with strict executive confidentiality.</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-slate-400">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                  <span>Initial assessment reviews strategy-to-execution gaps and potential cohort academy scopes.</span>
                </div>
              </div>
            </div>

            {/* Target Domains Quick Ref */}
            <div className="border border-[#222222] bg-[#141414] rounded-xl p-6 space-y-3">
              <span className="text-xs font-mono uppercase tracking-widest text-[#C5A059] block">
                Primary Consulting Audiences
              </span>
              <ul className="space-y-1.5 text-xs text-slate-400">
                {TARGET_INDUSTRIES.map((ind) => (
                  <li key={ind.id} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#C5A059] rounded-full shrink-0" />
                    <span>{ind.shortLabel}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Premium Booking Form */}
          <div className="lg:col-span-8">
            <div className="border border-[#222222] bg-[#141414] rounded-xl p-8 sm:p-12 shadow-2xl relative">
              {isSubmitted ? (
                /* Success Confirmation View */
                <div id="booking-success-view" className="text-center py-12 space-y-6">
                  <div className="w-16 h-16 mx-auto rounded-full border-2 border-[#C5A059] bg-[#1A1A1A] flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8 text-[#C5A059]" />
                  </div>

                  <div className="space-y-2">
                    <span className="text-xs font-mono uppercase tracking-widest text-[#C5A059]">
                      Consultation Request Received
                    </span>
                    <h2 className="text-3xl font-serif font-bold text-white">
                      Thank You, {formData.fullName}
                    </h2>
                    <p className="text-sm sm:text-base text-slate-300 max-w-lg mx-auto font-light leading-relaxed">
                      Your consultation request for <strong>{formData.organization || 'your organization'}</strong> has been routed directly to Walter Horton. We will review your operational requirements and contact you at <strong>{formData.email}</strong> or <strong>{formData.phone}</strong> promptly.
                    </p>
                  </div>

                  <div className="p-6 border border-[#222222] bg-[#111111] rounded-xl text-left max-w-md mx-auto text-xs space-y-2 text-slate-300">
                    <div className="flex justify-between border-b border-[#222222] pb-1">
                      <span className="text-[#C5A059]">Sector:</span>
                      <span className="font-semibold text-right text-white">{formData.industry}</span>
                    </div>
                    <div className="flex justify-between border-b border-[#222222] pb-1">
                      <span className="text-[#C5A059]">Preferred Window:</span>
                      <span className="text-white">{formData.preferredTime}</span>
                    </div>
                    {formData.preferredDate && (
                      <div className="flex justify-between border-b border-[#222222] pb-1">
                        <span className="text-[#C5A059]">Requested Date:</span>
                        <span className="text-white">{formData.preferredDate}</span>
                      </div>
                    )}
                  </div>

                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          fullName: '',
                          organization: '',
                          title: '',
                          email: '',
                          phone: '',
                          industry: TARGET_INDUSTRIES[0].title,
                          operationalChallenge: '',
                          preferredDate: '',
                          preferredTime: 'Morning (08:00 - 12:00 EST)',
                          message: '',
                        });
                      }}
                      className="text-xs uppercase tracking-widest font-mono text-[#C5A059] hover:text-white underline underline-offset-4 cursor-pointer"
                    >
                      Submit Another Request
                    </button>
                    <CTAButton
                      onClick={() => onNavigate('home')}
                      variant="primary-brass"
                      size="sm"
                      icon="arrow"
                    >
                      Return to Home
                    </CTAButton>
                  </div>
                </div>
              ) : (
                /* The Consultation Form */
                <form id="consultation-booking-form" onSubmit={handleSubmit} className="space-y-6">
                  <div className="border-b border-[#222222] pb-4 mb-6">
                    <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                      Executive Consultation Request
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-400 mt-1">
                      Please provide details regarding your organization, sector, and core operational focus.
                    </p>
                  </div>

                  {errorMsg && (
                    <div className="p-3 border border-red-500/50 bg-red-950/40 text-red-300 rounded-lg text-xs">
                      {errorMsg}
                    </div>
                  )}

                  {/* Section 1: Contact Information */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="fullName"
                        className="block text-xs font-mono uppercase tracking-wider text-[#C5A059] mb-1.5"
                      >
                        Full Name *
                      </label>
                      <div className="relative">
                        <input
                          id="fullName"
                          name="fullName"
                          type="text"
                          required
                          value={formData.fullName}
                          onChange={handleChange}
                          placeholder="e.g. Marcus Vance"
                          className="w-full bg-[#111111] border border-[#222222] focus:border-[#C5A059] rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="title"
                        className="block text-xs font-mono uppercase tracking-wider text-[#C5A059] mb-1.5"
                      >
                        Title / Role
                      </label>
                      <input
                        id="title"
                        name="title"
                        type="text"
                        value={formData.title}
                        onChange={handleChange}
                        placeholder="e.g. VP of Operations / Plant Manager"
                        className="w-full bg-[#111111] border border-[#222222] focus:border-[#C5A059] rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="organization"
                        className="block text-xs font-mono uppercase tracking-wider text-[#C5A059] mb-1.5"
                      >
                        Organization / Agency *
                      </label>
                      <input
                        id="organization"
                        name="organization"
                        type="text"
                        required
                        value={formData.organization}
                        onChange={handleChange}
                        placeholder="e.g. Apex Logistics Corp / City Water Dept"
                        className="w-full bg-[#111111] border border-[#222222] focus:border-[#C5A059] rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="industry"
                        className="block text-xs font-mono uppercase tracking-wider text-[#C5A059] mb-1.5"
                      >
                        Target Sector *
                      </label>
                      <select
                        id="industry"
                        name="industry"
                        value={formData.industry}
                        onChange={handleChange}
                        className="w-full bg-[#111111] border border-[#222222] focus:border-[#C5A059] rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none transition-colors"
                      >
                        {TARGET_INDUSTRIES.map((ind) => (
                          <option key={ind.id} value={ind.title} className="bg-[#141414] text-white">
                            {ind.title}
                          </option>
                        ))}
                        <option value="Other High-Consequence Commercial Enterprise" className="bg-[#141414] text-white">
                          Other Commercial / Industrial Enterprise
                        </option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs font-mono uppercase tracking-wider text-[#C5A059] mb-1.5"
                      >
                        Work Email *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="executive@company.com"
                        className="w-full bg-[#111111] border border-[#222222] focus:border-[#C5A059] rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-xs font-mono uppercase tracking-wider text-[#C5A059] mb-1.5"
                      >
                        Direct Telephone *
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="(555) 000-0000"
                        className="w-full bg-[#111111] border border-[#222222] focus:border-[#C5A059] rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Section 2: Operational Focus & Schedule */}
                  <div className="space-y-4 pt-4 border-t border-[#222222]">
                    <div>
                      <label
                        htmlFor="operationalChallenge"
                        className="block text-xs font-mono uppercase tracking-wider text-[#C5A059] mb-1.5"
                      >
                        Core Leadership or Operational Challenge
                      </label>
                      <textarea
                        id="operationalChallenge"
                        name="operationalChallenge"
                        rows={3}
                        value={formData.operationalChallenge}
                        onChange={handleChange}
                        placeholder="Describe the primary friction points between executive strategy and field performance, supervisory cohort needs, or operational rigor objectives..."
                        className="w-full bg-[#111111] border border-[#222222] focus:border-[#C5A059] rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none transition-colors"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label
                          htmlFor="preferredDate"
                          className="block text-xs font-mono uppercase tracking-wider text-[#C5A059] mb-1.5"
                        >
                          Preferred Date Window
                        </label>
                        <input
                          id="preferredDate"
                          name="preferredDate"
                          type="date"
                          value={formData.preferredDate}
                          onChange={handleChange}
                          className="w-full bg-[#111111] border border-[#222222] focus:border-[#C5A059] rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none transition-colors"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="preferredTime"
                          className="block text-xs font-mono uppercase tracking-wider text-[#C5A059] mb-1.5"
                        >
                          Preferred Time Window
                        </label>
                        <select
                          id="preferredTime"
                          name="preferredTime"
                          value={formData.preferredTime}
                          onChange={handleChange}
                          className="w-full bg-[#111111] border border-[#222222] focus:border-[#C5A059] rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none transition-colors"
                        >
                          <option value="Morning (08:00 - 12:00 EST)" className="bg-[#141414]">Morning (08:00 - 12:00 EST)</option>
                          <option value="Afternoon (12:00 - 17:00 EST)" className="bg-[#141414]">Afternoon (12:00 - 17:00 EST)</option>
                          <option value="Late Afternoon (17:00 - 19:00 EST)" className="bg-[#141414]">Late Afternoon (17:00 - 19:00 EST)</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-xs font-mono uppercase tracking-wider text-[#C5A059] mb-1.5"
                      >
                        Additional Context / Notes
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={2}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Any additional background, cohort size, or specific timeline constraints..."
                        className="w-full bg-[#111111] border border-[#222222] focus:border-[#C5A059] rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#222222] flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="text-xs text-slate-400 flex items-center gap-1.5">
                      <img src="/image/logo.png" alt="Elite Vanguard" className="w-4 h-4 rounded" />
                      <span>Confidentiality & Executive Discretion Guaranteed</span>
                    </div>

                    <CTAButton
                      id="submit-consultation-btn"
                      type="submit"
                      disabled={isSubmitting}
                      variant="primary-brass"
                      size="md"
                      icon="arrow"
                      className="w-full sm:w-auto"
                    >
                      {isSubmitting ? 'Transmitting Request...' : 'Submit Consultation Request'}
                    </CTAButton>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
