import React, { useState, useEffect } from 'react';
import { Shield } from 'lucide-react';

interface SplashScreenProps {
  onComplete: () => void;
  forceShow?: boolean;
}

export const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete, forceShow = false }) => {
  const [stage, setStage] = useState<number>(1); // 1: Dark start, 2: Logo, 3: Name, 4: Divider, 5: Progress, 6: Exiting
  const [progressWidth, setProgressWidth] = useState<number>(0);
  const [isExiting, setIsExiting] = useState<boolean>(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState<boolean>(false);

  useEffect(() => {
    // Check if user prefers reduced motion
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (motionQuery.matches) {
      setPrefersReducedMotion(true);
      const timer = setTimeout(() => {
        onComplete();
      }, 400);
      return () => clearTimeout(timer);
    }

    // Sequence stages with precise luxury timing (Total sequence ~ 2.1 seconds)
    // Stage 1: 0ms -> 300ms (Midnight navy darkness with subtle atmospheric emergence)
    const t1 = setTimeout(() => setStage(2), 300); // Stage 2: Logo fades in with slight elevation
    const t2 = setTimeout(() => setStage(3), 650); // Stage 3: ELITE VANGUARD typography reveals
    const t3 = setTimeout(() => setStage(4), 1000); // Stage 4: Antique brass divider expands
    const t4 = setTimeout(() => {
      setStage(5);
      setProgressWidth(100);
    }, 1250); // Stage 5: Loading text & progress line smoothly complete
    const t5 = setTimeout(() => {
      setIsExiting(true);
    }, 1900); // Stage 6: Fade-out transition commences
    const t6 = setTimeout(() => {
      onComplete();
    }, 2350); // Complete and unmount splash overlay

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
      clearTimeout(t6);
    };
  }, [onComplete]);

  const handleSkip = () => {
    setIsExiting(true);
    setTimeout(() => {
      onComplete();
    }, 250);
  };

  return (
    <div
      id="elite-vanguard-splash-screen"
      role="status"
      aria-live="polite"
      aria-label="Elite Vanguard Leadership Group Initializing"
      onClick={handleSkip}
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-[#0A111D] transition-opacity duration-700 ease-out select-none cursor-pointer ${
        isExiting ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      style={{
        backgroundColor: '#0A111D',
      }}
    >
      {/* Background Architectural & Atmospheric Texture */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Deep Command Navy radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,#101A2B_0%,#0A111D_100%)] opacity-90" />

        {/* Very subtle architectural geometric grid lines */}
        <div 
          className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#C2AA78_1px,transparent_1px),linear-gradient(to_bottom,#C2AA78_1px,transparent_1px)] bg-[size:5rem_5rem]" 
        />

        {/* Vignette Shadow */}
        <div className="absolute inset-0 bg-radial-at-c from-transparent via-[#0A111D]/40 to-[#0A111D] pointer-events-none" />
      </div>

      {/* Central Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center max-w-lg mx-auto px-6 text-center">
        {/* STAGE 2: Logo Mark (Clean, authoritative insignia placeholder for client vector logo) */}
        <div
          className={`transition-all duration-700 ease-out transform mb-6 ${
            stage >= 2
              ? 'opacity-100 translate-y-0 scale-100'
              : 'opacity-0 translate-y-3 scale-95'
          }`}
        >
          <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl border border-[#A88A52]/40 bg-[#101A2B] shadow-2xl shadow-black/80 flex items-center justify-center group overflow-hidden">
            {/* Subtle inner sheen */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#A88A52]/15 via-transparent to-transparent opacity-60" />
            
            {/* Insignia Shield */}
            <Shield className="w-8 h-8 sm:w-10 sm:h-10 text-[#C2AA78] transition-transform duration-500" strokeWidth={1.5} />

            {/* Corner Precision Accents */}
            <div className="absolute top-1 left-1 w-1.5 h-1.5 border-t border-l border-[#C2AA78]/50" />
            <div className="absolute top-1 right-1 w-1.5 h-1.5 border-t border-r border-[#C2AA78]/50" />
            <div className="absolute bottom-1 left-1 w-1.5 h-1.5 border-b border-l border-[#C2AA78]/50" />
            <div className="absolute bottom-1 right-1 w-1.5 h-1.5 border-b border-r border-[#C2AA78]/50" />
          </div>
        </div>

        {/* STAGE 3: Brand Name & Typography */}
        <div
          className={`transition-all duration-700 ease-out transform space-y-1.5 ${
            stage >= 3
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-2'
          }`}
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#F3EFE7] tracking-[0.22em] uppercase leading-tight font-display">
            Elite Vanguard
          </h1>
          <p className="text-[11px] sm:text-xs font-sans uppercase tracking-[0.35em] text-[#C2AA78] font-medium leading-relaxed">
            Leadership Group LLC
          </p>
        </div>

        {/* STAGE 4: Thin Antique Brass Divider (Animate width 0 -> 140px) */}
        <div className="my-6 flex items-center justify-center w-full">
          <div
            className="h-[1px] bg-gradient-to-r from-transparent via-[#A88A52] to-transparent transition-all duration-700 ease-out"
            style={{
              width: stage >= 4 ? '140px' : '0px',
              opacity: stage >= 4 ? 0.85 : 0,
            }}
          />
        </div>

        {/* STAGE 5: Understated Loading Indicator */}
        <div
          className={`transition-all duration-600 ease-out flex flex-col items-center gap-3 w-full max-w-[200px] ${
            stage >= 4
              ? 'opacity-100'
              : 'opacity-0'
          }`}
        >
          {/* Subtle Progress Bar */}
          <div className="w-full h-[1.5px] bg-[#20252B] rounded-full overflow-hidden relative">
            <div
              className="h-full bg-gradient-to-r from-[#A88A52] to-[#C2AA78] transition-all duration-700 ease-out rounded-full"
              style={{
                width: `${progressWidth}%`,
              }}
            />
          </div>

          {/* Understated Status Text */}
          <span className="text-[9px] sm:text-[10px] font-mono tracking-[0.28em] uppercase text-[#A88A52] font-medium">
            Initializing Leadership Excellence
          </span>
        </div>
      </div>

      {/* Understated Fast-Forward / Skip Hint */}
      <div className="absolute bottom-6 right-6 z-10 text-[9px] font-mono tracking-widest uppercase text-slate-500/60 hover:text-slate-400 transition-colors">
        Click anywhere to continue
      </div>
    </div>
  );
};
