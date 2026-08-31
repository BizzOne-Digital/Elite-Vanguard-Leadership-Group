import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { ES_TRANSLATIONS } from './translations';

export type Language = 'en' | 'es';

const STORAGE_KEY = 'elite_vanguard_language';

interface LanguageContextValue {
  language: Language;
  setLanguage: (lang: Language) => void;
  /**
   * Translate an English source string. English is the default language, so
   * any string without a Spanish entry falls back to the original text.
   */
  t: (text: string) => string;
}

const LanguageContext = createContext<LanguageContextValue>({
  language: 'en',
  setLanguage: () => undefined,
  t: (text: string) => text,
});

const readStoredLanguage = (): Language => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored === 'es' ? 'es' : 'en';
  } catch {
    return 'en';
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // English remains the default language.
  const [language, setLanguageState] = useState<Language>(readStoredLanguage);

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // Ignore if storage is blocked
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const t = useCallback(
    (text: string) => (language === 'es' ? ES_TRANSLATIONS[text] ?? text : text),
    [language]
  );

  const value = useMemo(() => ({ language, setLanguage, t }), [language, setLanguage, t]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = (): LanguageContextValue => useContext(LanguageContext);
