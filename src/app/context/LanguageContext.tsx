"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { translations, TranslationDictionary, Language } from "../_translations";

interface LanguageContextProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationDictionary;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

const STORAGE_KEY = "natan_portfolio_lang";

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("pt");

  useEffect(() => {
    try {
      const savedLang = localStorage.getItem(STORAGE_KEY) as Language | null;
      if (savedLang && (savedLang === "pt" || savedLang === "en" || savedLang === "es")) {
        setLanguageState(savedLang);
        return;
      }

      // Auto-detect from browser preference
      const browserLang = navigator.language.toLowerCase();
      if (browserLang.startsWith("en")) {
        setLanguageState("en");
      } else if (browserLang.startsWith("es")) {
        setLanguageState("es");
      }
    } catch {
      // Ignore storage errors (private browsing, etc.)
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem(STORAGE_KEY, lang);
      document.documentElement.lang = lang === "pt" ? "pt-BR" : lang;
    } catch {
      // Ignore storage errors
    }
  };

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = language === "pt" ? "pt-BR" : language;
    }
  }, [language]);

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextProps {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
