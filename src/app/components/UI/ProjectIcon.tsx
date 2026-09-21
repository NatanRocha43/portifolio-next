import React from "react";
import { SiDrupal, SiVtex, SiNotion, SiReact } from "react-icons/si";

import { ProjectIconType } from "../../_types";

export type { ProjectIconType };
interface ProjectIconProps {
  type: ProjectIconType;
  size?: "sm" | "md" | "lg";
}

export function ProjectIcon({ type, size = "md" }: ProjectIconProps) {
  const sizeClasses = {
    sm: "w-9 h-9 rounded-xl",
    md: "w-12 h-12 rounded-2xl",
    lg: "w-14 h-14 rounded-2xl",
  };

  const iconSizes = {
    sm: "w-4 h-4",
    md: "w-6 h-6",
    lg: "w-7 h-7",
  };

  const currentSize = iconSizes[size];

  switch (type) {
    case "vtex":
      return (
        <div
          aria-hidden="true"
          className={`${sizeClasses[size]} bg-pink-50 border border-pink-100 flex items-center justify-center text-[#F71963] shrink-0 shadow-xs`}
          title="VTEX IO"
        >
          <SiVtex className={currentSize} aria-hidden="true" />
        </div>
      );
    case "react":
      return (
        <div
          aria-hidden="true"
          className={`${sizeClasses[size]} bg-sky-50 border border-sky-100 flex items-center justify-center text-[#0284C7] shrink-0 shadow-xs`}
          title="React"
        >
          <SiReact className={currentSize} aria-hidden="true" />
        </div>
      );
    case "drupal":
      return (
        <div
          aria-hidden="true"
          className={`${sizeClasses[size]} bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0077C0] shrink-0 shadow-xs`}
          title="Drupal DX8"
        >
          <SiDrupal className={currentSize} aria-hidden="true" />
        </div>
      );
    case "notion":
      return (
        <div
          aria-hidden="true"
          className={`${sizeClasses[size]} bg-neutral-100 border border-neutral-200 flex items-center justify-center text-[#1A1A1A] shrink-0 shadow-xs`}
          title="Notion API"
        >
          <SiNotion className={currentSize} aria-hidden="true" />
        </div>
      );
    default:
      return (
        <div
          aria-hidden="true"
          className={`${sizeClasses[size]} bg-sky-50 border border-sky-100 flex items-center justify-center text-[#0284C7] shrink-0 shadow-xs`}
        >
          <SiReact className={currentSize} aria-hidden="true" />
        </div>
      );
  }
}
