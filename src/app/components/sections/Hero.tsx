"use client";

import IconButton from "../UI/IconButton";
import { ArrowRight, ArrowDownToLine } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  const stats = [
    t.hero.stats.stat1,
    t.hero.stats.stat2,
    t.hero.stats.stat3,
  ];

  return (
    <section
      id="home"
      className="min-h-[90vh] sm:min-h-screen flex items-center pt-32 sm:pt-40 lg:pt-44 pb-16 px-6 sm:px-12 max-w-[1200px] mx-auto w-full"
      aria-label={t.hero.titlePrefix + t.hero.titleHighlight + t.hero.titleSuffix}
    >
      <div className="w-full flex flex-col items-start text-left">
        {/* Big Editorial Heading with Fraunces */}
        <h1 className="font-display text-3xl sm:text-5xl lg:text-[70px] xl:text-[72px] font-bold tracking-tight text-[#1A1A1A] leading-[1.15] sm:leading-[1.1] max-w-4xl mb-6">
          {t.hero.titlePrefix}
          <span className="bg-gradient-to-r from-[#8B5CF6] to-[#A78BFA] bg-clip-text text-transparent italic font-normal">
            {t.hero.titleHighlight}
          </span>{" "}
          {t.hero.titleSuffix}
        </h1>

        {/* Subtitle / Description */}
        <p className="text-base sm:text-lg text-[#5C5C5C] max-w-2xl leading-relaxed mb-10 font-normal">
          {t.hero.subtitle}
        </p>

        {/* Call to Actions */}
        <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-16 sm:mb-20">
          <IconButton
            href="#contact"
            text={t.hero.ctaContact}
            ariaLabel={t.hero.ctaContact}
            variant="primary"
            icon={<ArrowRight className="w-4 h-4" aria-hidden="true" />}
          />

          <IconButton
            href="#projects"
            text={t.hero.ctaProjects}
            ariaLabel={t.hero.ctaProjects}
            variant="secondary"
          />

          <IconButton
            href={t.hero.cvFile}
            download={t.hero.cvDownloadName}
            target="_blank"
            rel="noopener noreferrer"
            ariaLabel={`${t.hero.ctaCv} (PDF)`}
            text={t.hero.ctaCv}
            variant="secondary"
            icon={<ArrowDownToLine className="w-4 h-4 text-[#7C3AED]" aria-hidden="true" />}
          />
        </div>

        {/* Stats Strip - Semântico para leitores de tela */}
        <dl className="grid grid-cols-3 gap-6 sm:gap-16 pt-8 border-t border-[#E5E4E1] w-full max-w-2xl">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col">
              <dd className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1A1A1A] block tracking-tight order-1">
                {stat.value}
              </dd>
              <dt className="text-xs sm:text-sm text-[#5C5C5C] mt-1 block order-2">
                {stat.label}
              </dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
