import React, { useState } from 'react';
import { PageId } from '../types';
import { COMPANY_INFO } from '../data/content';
import { CTAButton } from '../components/CTAButton';
import { 
  Shield, 
  Phone, 
  Mail, 
  User, 
  Send, 
  CheckCircle2, 
  Calendar,
  MessageSquare,
  Globe2
} from 'lucide-react';

interface ContactPageProps {
  onNavigate: (page: PageId) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatusMessage('Please fill in all required fields.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  return (
    <div id="contact-page" className="w-full pt-28 sm:pt-32 pb-20 bg-[#0A0A0A] text-slate-300">
      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-20">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 border border-[#222222] rounded text-[11px] font-mono font-semibold uppercase tracking-[0.25em] text-[#C5A059] bg-[#141414]">
            <Mail className="w-3.5 h-3.5" />
            Executive Inquiries
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white tracking-tight leading-tight">
            Contact Elite Vanguard Leadership Group
          </h1>
          <div className="h-[1px] w-24 mx-auto my-6 bg-gradient-to-r from-transparent via-[#C5A059] to-transparent" />
          <p className="text-base sm:text-xl text-slate-300 font-light leading-relaxed">
            Connect directly with our executive team to explore management consulting partnerships, leadership academies, and operational diagnostics.
          </p>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Official Contact Coordinates */}
          <div className="lg:col-span-5 space-y-6">
            <div className="border border-[#222222] bg-[#141414] rounded-xl p-8 shadow-2xl space-y-8">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#C5A059] block mb-1">
                  Firm Information
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                  {COMPANY_INFO.name}
                </h2>
                <p className="text-xs text-slate-400 font-mono uppercase tracking-wider mt-1">
                  {COMPANY_INFO.legalName}
                </p>
              </div>

              <div className="space-y-6 pt-4 border-t border-[#222222]">
                {/* Contact Person */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 border border-[#222222] bg-[#111111] rounded-lg flex items-center justify-center shrink-0">
                    <User className="w-5 h-5 text-[#C5A059]" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#C5A059] block">
                      Contact Person
                    </span>
                    <span className="text-lg font-serif font-bold text-white">
                      {COMPANY_INFO.contactPerson}
                    </span>
                    <span className="text-xs text-slate-400 block">
                      Executive Leadership & Consulting
                    </span>
                  </div>
                </div>

                {/* Telephone */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 border border-[#222222] bg-[#111111] rounded-lg flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-[#C5A059]" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#C5A059] block">
                      Direct Telephone
                    </span>
                    <a
                      id="contact-phone-direct"
                      href={COMPANY_INFO.phoneLink}
                      className="text-base font-mono font-bold text-white hover:text-[#C5A059] transition-colors block mt-0.5"
                    >
                      {COMPANY_INFO.phoneFormatted}
                    </a>
                    <span className="text-xs text-slate-500">
                      Direct Line • Prompt Executive Response
                    </span>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 border border-[#222222] bg-[#111111] rounded-lg flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-[#C5A059]" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#C5A059] block">
                      Executive Email
                    </span>
                    <a
                      id="contact-email-direct"
                      href={`mailto:${COMPANY_INFO.email}`}
                      className="text-sm font-sans font-medium text-white hover:text-[#C5A059] transition-colors block mt-0.5 break-all"
                    >
                      {COMPANY_INFO.email}
                    </a>
                    <span className="text-xs text-slate-500">
                      Confidential Strategic Communications
                    </span>
                  </div>
                </div>
              </div>

              {/* National Service Capability Box */}
              <div className="p-4 border-l-2 border-[#C5A059] bg-[#111111] rounded-r-lg space-y-1">
                <div className="flex items-center gap-2 text-xs font-mono text-[#C5A059] uppercase tracking-wider">
                  <Globe2 className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>National Consulting Capability</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Serving enterprise organizations, municipal utilities, defense contractors, and infrastructure teams nationwide with on-site diagnostics, academies, and remote executive advisory.
                </p>
              </div>

              <div className="pt-2">
                <CTAButton
                  onClick={() => onNavigate('booking')}
                  variant="primary-brass"
                  size="md"
                  icon="calendar"
                  className="w-full"
                >
                  Schedule Formal Consultation
                </CTAButton>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Message Form */}
          <div className="lg:col-span-7">
            <div className="border border-[#222222] bg-[#141414] rounded-xl p-8 sm:p-12 shadow-2xl">
              {isSubmitted ? (
                <div id="contact-success-state" className="text-center py-12 space-y-6">
                  <div className="w-16 h-16 mx-auto rounded-full border-2 border-[#C5A059] bg-[#1A1A1A] flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8 text-[#C5A059]" />
                  </div>
                  <div className="space-y-2">
                    <span className="text-xs font-mono uppercase tracking-widest text-[#C5A059]">
                      Message Dispatched
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                      Thank You, {formData.name}
                    </h2>
                    <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                      Your inquiry has been sent directly to Walter Horton. We will review your correspondence and respond via <strong>{formData.email}</strong> shortly.
                    </p>
                  </div>
                  <div className="pt-4">
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
                      }}
                      className="text-xs font-mono uppercase tracking-widest text-[#C5A059] hover:text-white underline cursor-pointer"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form id="direct-contact-form" onSubmit={handleSubmit} className="space-y-6">
                  <div className="border-b border-[#222222] pb-4">
                    <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                      Send Direct Message
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-400 mt-1">
                      For general inquiries, strategic partnership discussions, or confidential executive questions.
                    </p>
                  </div>

                  {statusMessage && (
                    <div className="p-3 border border-red-500/50 bg-red-950/40 text-red-300 rounded-lg text-xs">
                      {statusMessage}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-xs font-mono uppercase tracking-wider text-[#C5A059] mb-1.5">
                        Your Name *
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full bg-[#111111] border border-[#222222] focus:border-[#C5A059] rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wider text-[#C5A059] mb-1.5">
                        Your Email *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="w-full bg-[#111111] border border-[#222222] focus:border-[#C5A059] rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="phone" className="block text-xs font-mono uppercase tracking-wider text-[#C5A059] mb-1.5">
                        Telephone Number
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="(240) 000-0000"
                        className="w-full bg-[#111111] border border-[#222222] focus:border-[#C5A059] rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-xs font-mono uppercase tracking-wider text-[#C5A059] mb-1.5">
                        Inquiry Subject
                      </label>
                      <input
                        id="subject"
                        name="subject"
                        type="text"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Leadership Development / Consulting Inquiry"
                        className="w-full bg-[#111111] border border-[#222222] focus:border-[#C5A059] rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-mono uppercase tracking-wider text-[#C5A059] mb-1.5">
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Please outline your message, organization details, or consulting inquiry..."
                      className="w-full bg-[#111111] border border-[#222222] focus:border-[#C5A059] rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none transition-colors"
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <span className="text-xs text-slate-500 font-mono">
                      * Required Fields
                    </span>
                    <CTAButton
                      id="submit-contact-message"
                      type="submit"
                      disabled={isSubmitting}
                      variant="primary-brass"
                      size="md"
                      icon="arrow"
                    >
                      {isSubmitting ? 'Transmitting...' : 'Send Message'}
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
