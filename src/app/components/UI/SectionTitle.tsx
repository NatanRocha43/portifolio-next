import React from "react";

interface SectionTitleProps {
  title: string;
  description?: string;
  id?: string;
  align?: "left" | "center";
}

export function SectionTitle({
  title,
  description,
  id,
  align = "left",
}: SectionTitleProps) {
  const isCenter = align === "center";

  return (
    <div
      className={`flex flex-col mb-8 sm:mb-12 ${
        isCenter ? "items-center text-center mx-auto" : "items-start text-left"
      }`}
    >
      <h2
        id={id}
        className="font-display text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight text-[#1A1A1A] leading-[1.15]"
      >
        {title}
      </h2>

      {description && (
        <p className="text-base sm:text-lg text-[#5C5C5C] max-w-2xl mt-3 leading-relaxed font-normal">
          {description}
        </p>
      )}
    </div>
  );
}