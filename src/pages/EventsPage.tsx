import React from 'react';
import { PageId } from '../types';
import { COMMUNITY_EVENTS } from '../data/content';
import { CTAButton } from '../components/CTAButton';
import { Calendar, Clock, MapPin, HeartHandshake, CheckCircle, Users } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

interface EventsPageProps {
  onNavigate: (page: PageId) => void;
}

export const EventsPage: React.FC<EventsPageProps> = ({ onNavigate }) => {
  const { t } = useLanguage();

  return (
    <div id="events-page" className="w-full pt-28 sm:pt-32 pb-20 bg-[#0A0A0A] text-slate-300">
      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-20">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 border border-[#222222] rounded text-[11px] font-mono font-semibold uppercase tracking-[0.25em] text-[#C5A059] bg-[#141414]">
            <img src="/image/logo.png" alt="Elite Vanguard" className="w-3.5 h-3.5 rounded" />
            {t('Community & Non-Profit Involvement')}
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white tracking-tight leading-tight">
            {t('Events')}
          </h1>
          <div className="h-[1px] w-24 mx-auto my-6 bg-gradient-to-r from-transparent via-[#C5A059] to-transparent" />
          <p className="text-base sm:text-xl text-slate-300 font-light leading-relaxed">
            {t('Every member of our leadership works with or partners alongside non-profit organizations. Service does not stop at the boardroom — we stay actively involved in the communities we serve.')}
          </p>
        </div>
      </section>

      {/* EVENT LISTINGS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 space-y-16 sm:space-y-24">
        {COMMUNITY_EVENTS.map((event, index) => {
          const isEven = index % 2 === 0;
          return (
            <div
              key={event.id}
              id={`event-card-${event.id}`}
              className="border border-[#222222] bg-[#141414] rounded-xl shadow-2xl p-6 sm:p-10 lg:p-12 relative overflow-hidden"
            >
              {/* Event Index Badge */}
              <div className="absolute top-4 right-4 sm:top-6 sm:right-6 font-mono text-2xl sm:text-4xl font-bold text-white/5">
                0{index + 1}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
                {/* Event Flyer Column */}
                <div className={`lg:col-span-5 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="relative border border-[#222222] rounded-xl p-2 bg-[#111111] shadow-xl">
                    <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-[#0A0A0A]">
                      <img
                        src={event.image}
                        alt={`${event.title} — ${event.organization}`}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                </div>

                {/* Event Details Column */}
                <div className={`lg:col-span-7 space-y-6 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className="inline-block px-3 py-1 border border-[#222222] rounded text-[10px] sm:text-[11px] font-mono uppercase tracking-widest text-[#C5A059] bg-[#1A1A1A]">
                        {event.status === 'upcoming' ? t('Upcoming Event') : t('Past Event')}
                      </span>
                      <span className="inline-block px-3 py-1 border border-[#222222] rounded text-[10px] sm:text-[11px] font-mono uppercase tracking-widest text-slate-400 bg-[#1A1A1A]">
                        {t(event.role)}
                      </span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight">
                      {t(event.title)}
                    </h2>
                    <p className="text-sm sm:text-base font-mono text-[#C5A059] tracking-wider uppercase font-semibold mt-1">
                      {event.organization}
                    </p>
                  </div>

                  {/* Logistics Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="flex items-start gap-2.5 p-3 border border-[#222222] bg-[#111111] rounded-lg">
                      <Calendar className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                      <div>
                        <span className="block text-[10px] font-mono uppercase tracking-widest text-slate-500">
                          {t('Date')}
                        </span>
                        <span className="text-xs sm:text-sm text-slate-200">{t(event.date)}</span>
                      </div>
                    </div>

                    {event.time && (
                      <div className="flex items-start gap-2.5 p-3 border border-[#222222] bg-[#111111] rounded-lg">
                        <Clock className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                        <div>
                          <span className="block text-[10px] font-mono uppercase tracking-widest text-slate-500">
                            {t('Time')}
                          </span>
                          <span className="text-xs sm:text-sm text-slate-200">{event.time}</span>
                        </div>
                      </div>
                    )}

                    <div className="flex items-start gap-2.5 p-3 border border-[#222222] bg-[#111111] rounded-lg sm:col-span-2">
                      <MapPin className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                      <div>
                        <span className="block text-[10px] font-mono uppercase tracking-widest text-slate-500">
                          {t('Location')}
                        </span>
                        <span className="text-xs sm:text-sm text-slate-200">{t(event.location)}</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5 p-3 border border-[#222222] bg-[#111111] rounded-lg sm:col-span-2">
                      <HeartHandshake className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                      <div>
                        <span className="block text-[10px] font-mono uppercase tracking-widest text-slate-500">
                          {t('Cause')}
                        </span>
                        <span className="text-xs sm:text-sm text-slate-200">{t(event.cause)}</span>
                      </div>
                    </div>
                  </div>

                  {/* Event Description */}
                  <div className="border-l-2 border-[#C5A059] pl-4 sm:pl-6 py-1">
                    <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans font-light">
                      {t(event.description)}
                    </p>
                  </div>

                  {/* Event Highlights */}
                  {event.highlights && event.highlights.length > 0 && (
                    <div className="pt-4 border-t border-[#222222]">
                      <span className="text-xs font-mono uppercase tracking-widest text-[#C5A059] block mb-3 font-semibold">
                        {t('Event Details')}
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {event.highlights.map((highlight, hIdx) => (
                          <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-300">
                            <CheckCircle className="w-3.5 h-3.5 text-[#C5A059] shrink-0 mt-0.5" />
                            <span>{t(highlight)}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Engagement Button */}
                  <div className="pt-2">
                    <CTAButton
                      onClick={() => onNavigate('contact')}
                      variant="primary-brass"
                      size="sm"
                      icon="arrow"
                    >
                      {t('Get Involved')}
                    </CTAButton>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* COMMUNITY COMMITMENT STATEMENT */}
      <section className="bg-[#111111] py-20 border-y border-[#222222] mb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#C5A059]">
            {t('Community Standard')}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-white italic">
            &ldquo;{t('Leadership is measured by service. We show up for the communities that raised us — not for recognition, but because presence is the standard we teach.')}&rdquo;
          </h2>
          <div className="text-xs font-mono uppercase tracking-widest text-[#C5A059]">
            {t('Core Value: Service Before Self')}
          </div>
        </div>
      </section>

      {/* Partnership CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 border border-[#222222] rounded text-[11px] font-semibold uppercase tracking-[0.2em] text-[#C5A059] bg-[#141414]">
          <Users className="w-3.5 h-3.5" />
          {t('Non-Profit Partnerships')}
        </div>
        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-4">
          {t('Partner With Us On Your Next Event')}
        </h2>
        <p className="text-sm sm:text-base text-slate-400 max-w-xl mx-auto mb-8 font-light">
          {t('If your organization is planning a community initiative, fundraiser, or leadership event, reach out — we welcome the opportunity to serve alongside you.')}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <CTAButton
            onClick={() => onNavigate('contact')}
            variant="primary-brass"
            size="md"
            icon="arrow"
          >
            {t('Contact Us')}
          </CTAButton>
        </div>
      </section>
    </div>
  );
};
