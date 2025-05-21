import React, { FC, memo } from "react"
import { Service } from "../../_data/services"

const ServiceCard: FC<{ service: Service }> = ({ service }) => {
  const descriptionId = `${service.title.toLowerCase().replace(/\s+/g, "-")}-description`
  const titleId = `${service.title.toLowerCase().replace(/\s+/g, "-")}-title`

  return (
    <article
      aria-labelledby={titleId}
      aria-describedby={descriptionId}
      className={`bg-neutral-800 rounded-xl p-6 shadow-md transform transition-all duration-300 ease-in-out cursor-default hover:shadow-xl hover:-translate-y-1 hover:scale-[1.015] hover:bg-neutral-700
          ${service.spanTwoCols ? "lg:col-span-2" : ""
        }`}
    >
      <div className="mb-3" aria-hidden="true">
        {service.icon}
      </div>
      <h3 id={titleId} className="text-base font-extrabold text-white">
        {service.title}
      </h3>
      <p id={descriptionId} className="text-xs font-medium leading-relaxed text-[#E1E1E1]">
        {service.description}
      </p>
    </article>
  )
}

export default memo(ServiceCard)
