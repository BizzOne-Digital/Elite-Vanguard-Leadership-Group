import React, { useState, useEffect } from 'react';
import { PageId } from './types';
import { SEOHead } from './components/SEOHead';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { SplashScreen } from './components/SplashScreen';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { TeamPage } from './pages/TeamPage';
import { EventsPage } from './pages/EventsPage';
import { BookingPage } from './pages/BookingPage';
import { ContactPage } from './pages/ContactPage';
import { Calendar, Sparkles } from 'lucide-react';
import { useLanguage } from './i18n/LanguageContext';

const VALID_PAGES: PageId[] = ['home', 'about', 'services', 'team', 'events', 'booking', 'contact'];

const getPageFromPath = (): PageId => {
  const segment = window.location.pathname.replace(/^\/+|\/+$/g, '').toLowerCase();
  return (VALID_PAGES as string[]).includes(segment) ? (segment as PageId) : 'home';
};

export default function App() {
  const { t } = useLanguage();
  const [currentPage, setCurrentPage] = useState<PageId>(getPageFromPath);
  const [showSplash, setShowSplash] = useState<boolean>(() => {
    // Check if splash has already run in this session
    try {
      const hasViewed = sessionStorage.getItem('elite_vanguard_splash_viewed');
      return !hasViewed;
    } catch {
      return true;
    }
  });

  const handleSplashComplete = () => {
    try {
      sessionStorage.setItem('elite_vanguard_splash_viewed', 'true');
    } catch {
      // Ignore if cookies/storage blocked
    }
    setShowSplash(false);
  };

  const replaySplash = () => {
    setShowSplash(true);
  };

  // Resolve the current page from the URL path on load/refresh, and keep it in
  // sync with browser back/forward navigation.
  useEffect(() => {
    // Normalize legacy hash URLs (e.g. /#contact) to their proper route (/contact)
    const legacyHash = window.location.hash.replace('#', '').toLowerCase();
    if (legacyHash && (VALID_PAGES as string[]).includes(legacyHash)) {
      try {
        history.replaceState(null, '', `/${legacyHash}${window.location.search}`);
      } catch {
        // Ignore if history API is unavailable
      }
      setCurrentPage(legacyHash as PageId);
    } else {
      setCurrentPage(getPageFromPath());
    }

    // Handle back/forward navigation
    const handlePopState = () => {
      setCurrentPage(getPageFromPath());
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (page: PageId) => {
    setCurrentPage(page);
    try {
      const target = `/${page}${window.location.search}`;
      if (window.location.pathname + window.location.search !== target) {
        history.pushState(null, '', target);
      }
    } catch {
      window.location.pathname = `/${page}`;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0A0A0A] text-slate-300 selection:bg-[#C5A059] selection:text-[#0A0A0A] relative">
      {/* Full-Screen Premium Executive Intro Splash */}
      {showSplash && <SplashScreen onComplete={handleSplashComplete} />}

      {/* Dynamic SEO Head & Schema Injector */}
      <SEOHead page={currentPage} />

      {/* Sticky Navigation Bar */}
      <Navbar currentPage={currentPage} onNavigate={navigateTo} />

      {/* Main Page Content */}
      <main className="flex-1 w-full">
        {currentPage === 'home' && <HomePage onNavigate={navigateTo} />}
        {currentPage === 'about' && <AboutPage onNavigate={navigateTo} />}
        {currentPage === 'services' && <ServicesPage onNavigate={navigateTo} />}
        {currentPage === 'team' && <TeamPage onNavigate={navigateTo} />}
        {currentPage === 'events' && <EventsPage onNavigate={navigateTo} />}
        {currentPage === 'booking' && <BookingPage onNavigate={navigateTo} />}
        {currentPage === 'contact' && <ContactPage onNavigate={navigateTo} />}
      </main>

      {/* Global Executive Footer */}
      <Footer onNavigate={navigateTo} onReplaySplash={replaySplash} />

      {/* Quick Consultation Floating Pill on Mobile / Desktop */}
      {currentPage !== 'booking' && (
        <div className="fixed bottom-5 right-5 z-40 flex items-center gap-2">
          <button
            onClick={() => navigateTo('booking')}
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#C5A059] text-[#0A0A0A] text-xs uppercase tracking-widest font-bold shadow-2xl hover:bg-[#D4AF37] transition-all duration-300 cursor-pointer border border-[#C5A059] active:scale-95"
          >
            <Calendar className="w-4 h-4" />
            <span>{t('Consultation')}</span>
          </button>
        </div>
      )}
    </div>
  );
}
