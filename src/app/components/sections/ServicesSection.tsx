import React, { FC } from 'react'
import { services } from '../../_data/services'
import ServiceCard from '../UI/ServiceCard'

const ServicesSection: FC = () => {
  return (
    <section
      className="w-full pt-32 lg:pt-36"
      aria-labelledby="services-title"
    >
      <div className='flex flex-col mx-auto items-center gap-6 px-4 max-w-xl lg:max-w-4xl text-center'>
          <h2
            id="services-title"
            className="text-2xl lg:text-5xl font-extrabold text-white text-center"
          >
            O que eu faço
          </h2>
          <span className="text-sm lg:text-3xl font-extrabold leading-tight bg-gradient-to-r from-[#4FC3F7] to-white bg-clip-text text-transparent text-center">
            Soluções
          </span>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left [grid-auto-flow:dense]">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
