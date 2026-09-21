"use client";

import React, { FC, useMemo } from "react";
import { services as defaultServices } from "../../_data/services";
import ServiceCard from "../UI/ServiceCard";
import { SectionTitle } from "../UI/SectionTitle";
import { useLanguage } from "../../context/LanguageContext";

const ServicesSection: FC = () => {
  const { t } = useLanguage();

  const localizedServices = useMemo(() => {
    return t.services.items.map((item, idx) => ({
      ...item,
      icon: defaultServices[idx]?.icon,
    }));
  }, [t.services.items]);

  const corePrinciples = localizedServices.slice(0, 3);
  const stacksAndPlatforms = localizedServices.slice(3, 5);

  return (
    <section
      id="services"
      className="py-20 sm:py-28 px-6 sm:px-12 max-w-[1200px] mx-auto w-full border-t border-[#E5E4E1]"
      aria-label={t.services.title}
    >
      <SectionTitle
        title={t.services.title}
        description={t.services.subtitle}
      />

      <div className="flex flex-col gap-6 w-full">
        {/* Row 1: 3 Principles Side by Side */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {corePrinciples.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>

        {/* Row 2: Front-End Ecosystem & Enterprise Platforms Side by Side (50% each) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {stacksAndPlatforms.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
