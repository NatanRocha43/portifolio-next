"use client";
import Image from "next/image";
import { Project } from "../../_data/projects";

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

export function ProjectCard({ project, onClick }: ProjectCardProps) {
  return (
    <article
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick();
        }
      }}
      className="cursor-pointer border rounded-lg overflow-hidden shadow hover:shadow-lg transition  focus:outline-blue-500"
      aria-label={`Abrir detalhes do projeto ${project.title}`}
    >
      <div className="relative w-full h-48">
        <Image
          src={project.image}
          alt={`Imagem do projeto ${project.title}`}
          fill
          style={{ objectFit: "cover" }}
          className="rounded-t"
          loading="lazy"
        />
      </div>
      <div className="p-4">
        <h3 className="text-base font-extrabold text-white">{project.title}</h3>
        <p className="text-xs font-medium leading-relaxed text-[#E1E1E1]">
          {project.techs.join(" - ")}
        </p>
      </div>
    </article>
  );
}
