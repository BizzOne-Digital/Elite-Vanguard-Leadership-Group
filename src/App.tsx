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
import { BookingPage } from './pages/BookingPage';
import { ContactPage } from './pages/ContactPage';
import { Phone, Calendar, Sparkles } from 'lucide-react';
import { COMPANY_INFO } from './data/content';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
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

  // Initialize always on 'home' screen upon page load/refresh
  useEffect(() => {
    // If there is any stale hash like #contact on initial load, clean it up so home is the default landing
    if (window.location.hash) {
      try {
        history.replaceState(null, '', window.location.pathname + window.location.search);
      } catch {
        window.location.hash = '';
      }
    }
    setCurrentPage('home');

    // Handle back/forward navigation
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageId;
      const validPages: PageId[] = ['home', 'about', 'services', 'team', 'booking', 'contact'];
      if (validPages.includes(hash)) {
        setCurrentPage(hash);
      } else if (!hash) {
        setCurrentPage('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page: PageId) => {
    setCurrentPage(page);
    try {
      if (page === 'home') {
        history.replaceState(null, '', window.location.pathname + window.location.search);
      } else {
        history.pushState(null, '', `#${page}`);
      }
    } catch {
      window.location.hash = page === 'home' ? '' : page;
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
        {currentPage === 'booking' && <BookingPage onNavigate={navigateTo} />}
        {currentPage === 'contact' && <ContactPage onNavigate={navigateTo} />}
      </main>

      {/* Global Executive Footer */}
      <Footer onNavigate={navigateTo} onReplaySplash={replaySplash} />

      {/* Quick Consultation Floating Pill on Mobile / Desktop */}
      {currentPage !== 'booking' && (
        <div className="fixed bottom-5 right-5 z-40 flex items-center gap-2">
          <a
            href={COMPANY_INFO.phoneLink}
            title="Call Walter directly"
            className="w-11 h-11 rounded-full bg-[#141414] border border-[#222222] text-[#C5A059] hover:text-[#0A0A0A] hover:bg-[#C5A059] hover:border-[#C5A059] shadow-xl flex items-center justify-center transition-all duration-300 active:scale-95"
            aria-label="Direct Phone Contact"
          >
            <Phone className="w-5 h-5" />
          </a>

          <button
            onClick={() => navigateTo('booking')}
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#C5A059] text-[#0A0A0A] text-xs uppercase tracking-widest font-bold shadow-2xl hover:bg-[#D4AF37] transition-all duration-300 cursor-pointer border border-[#C5A059] active:scale-95"
          >
            <Calendar className="w-4 h-4" />
            <span>Consultation</span>
          </button>
        </div>
      )}
    </div>
  );
}
