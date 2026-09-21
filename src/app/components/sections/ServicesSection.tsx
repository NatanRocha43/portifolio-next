import React, { FC } from "react";
import { services } from "../../_data/services";
import ServiceCard from "../UI/ServiceCard";
import { SectionTitle } from "../UI/SectionTitle";

const CORE_PRINCIPLES = services.slice(0, 3);
const STACKS_AND_PLATFORMS = services.slice(3, 5);

const ServicesSection: FC = () => {
  return (
    <section
      id="services"
      className="py-20 sm:py-28 px-6 sm:px-12 max-w-[1200px] mx-auto w-full border-t border-[#E5E4E1]"
      aria-label="Soluções e Competências de Natan Rocha"
    >
      <SectionTitle
        title="Soluções & Especialidades"
        description="Construção de aplicações escaláveis, arquitetura front-end limpa e otimizações de conversão."
      />

      <div className="flex flex-col gap-6 w-full">
        {/* Row 1: 3 Principles Side by Side */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {CORE_PRINCIPLES.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>

        {/* Row 2: Front-End Ecosystem & Enterprise Platforms Side by Side (50% each) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {STACKS_AND_PLATFORMS.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
