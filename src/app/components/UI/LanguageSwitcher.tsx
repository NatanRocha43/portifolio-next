"use client";

import { useLanguage } from "../../context/LanguageContext";
import { Language } from "../../_types";

interface LanguageSwitcherProps {
  className?: string;
  isMobile?: boolean;
}

const LANGUAGES: Array<{ code: Language; label: string; full: string }> = [
  { code: "pt", label: "PT", full: "Português" },
  { code: "en", label: "EN", full: "English" },
  { code: "es", label: "ES", full: "Español" },
];

export default function LanguageSwitcher({ className = "", isMobile = false }: LanguageSwitcherProps) {
  const { language, setLanguage, t } = useLanguage();

  return (
    <div
      role="group"
      aria-label={t.header.aria.switchLanguage}
      className={`inline-flex items-center p-1 rounded-full bg-[#F5F4F2] border border-[#E5E4E1] ${className}`}
    >
      {LANGUAGES.map(({ code, label, full }) => {
        const isActive = language === code;
        return (
          <button
            key={code}
            type="button"
            onClick={() => setLanguage(code)}
            aria-pressed={isActive}
            aria-label={`${full} (${label})`}
            className={`transition-all duration-200 rounded-full font-medium text-xs flex items-center justify-center cursor-pointer select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7C3AED] ${
              isMobile
                ? "min-w-[44px] min-h-[44px] px-3.5 text-sm"
                : "min-w-[32px] h-7 px-2.5"
            } ${
              isActive
                ? "bg-[#1A1A1A] text-[#FAFAF9] font-bold shadow-xs"
                : "text-[#5C5C5C] hover:text-[#1A1A1A] hover:bg-[#EAE8E4]/60"
            }`}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}
