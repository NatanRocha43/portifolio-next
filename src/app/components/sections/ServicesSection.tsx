import React, { FC } from "react"
import { services } from "../../_data/services"
import ServiceCard from "../UI/ServiceCard"
import { SectionTitle } from '../UI/SectionTitle';

const ServicesSection: FC = () => {
  return (
    <section
      className="w-full relative min-h-screen flex flex-col items-center justify-center py-12"
      aria-labelledby="services-title"
    >
      <div className="flex flex-col mx-auto items-center gap-6 px-4 max-w-xl lg:max-w-4xl text-center">
        
        <SectionTitle
          id="Serivices"
          title="O que eu faço"
          subtitle="Soluções"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left [grid-auto-flow:dense] w-full">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </div>
    </section>

  )
}

export default ServicesSection
