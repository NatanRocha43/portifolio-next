"use client";

import dynamic from "next/dynamic";
import Header from "./components/sections/Header";
import Hero from "./components/sections/Hero";
import BrandsMarquee from "./components/sections/BrandsMarquee";
import AboutMe from "./components/sections/AboutMe";
import ServicesSection from "./components/sections/ServicesSection";
import ProjectsCarousel from "./components/sections/ProjectsCarousel";
import OpenToOpportunities from "./components/sections/OpenToOpportunities";
import Footer from "./components/sections/Footer";
import { LanguageProvider, useLanguage } from "./context/LanguageContext";

const Form = dynamic(() => import("./components/sections/Form").then((mod) => mod.Form), {
  ssr: true,
});

function PortfolioContent() {
  const { t } = useLanguage();

  return (
    <div className="relative min-h-screen bg-[#FAFAF9] text-[#1A1A1A] overflow-x-hidden font-body selection:bg-[#8B5CF6] selection:text-white">
      {/* Skip Link para leitores de tela e navegação por teclado */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2.5 focus:bg-[#1A1A1A] focus:text-[#FAFAF9] focus:rounded-full focus:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#7C3AED] text-xs font-semibold"
      >
        {t.header.aria.skipLink}
      </a>

      <Header />

      <main id="main-content" tabIndex={-1} className="outline-none">
        <Hero />
        <BrandsMarquee />
        <AboutMe />
        <ServicesSection />
        <ProjectsCarousel />
        <OpenToOpportunities />
        <Form />
      </main>

      <Footer />
    </div>
  );
}

export default function Home() {
  return (
    <LanguageProvider>
      <PortfolioContent />
    </LanguageProvider>
  );
}
