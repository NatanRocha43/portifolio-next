import React, { FC, memo } from "react";
import { Service } from "../../_types";

interface ServiceCardProps {
  service: Service;
  className?: string;
}

const ServiceCard: FC<ServiceCardProps> = ({ service, className = "" }) => {
  return (
    <article
      className={`p-6 sm:p-8 rounded-2xl bg-white border border-[#E5E4E1] hover:border-[#7C3AED] hover:-translate-y-0.5 transition-all duration-200 shadow-xs flex flex-col justify-between ${className}`}
    >
      <div>
        <div className="w-10 h-10 rounded-xl bg-[#F5F4F2] flex items-center justify-center mb-5 text-[#7C3AED]" aria-hidden="true">
          {service.icon}
        </div>

        <h3 className="font-display font-bold text-lg sm:text-xl text-[#1A1A1A] tracking-tight mb-2.5">
          {service.title}
        </h3>

        <p className="text-sm text-[#5C5C5C] leading-relaxed font-normal">
          {service.description}
        </p>
      </div>

      {service.tags && service.tags.length > 0 && (
        <div role="list" aria-label={`Tecnologias de ${service.title}`} className="flex flex-wrap gap-1.5 mt-6 pt-5 border-t border-[#F0EFED]">
          {service.tags.map((tag) => (
            <span
              key={tag}
              role="listitem"
              className="px-3 py-1 rounded-full bg-[#F5F4F2] border border-[#E5E4E1] text-xs font-medium text-[#1A1A1A]"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </article>
  );
};

export default memo(ServiceCard);
