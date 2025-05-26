import Image from "next/image";
import { Project } from "../../_data/projects";

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}
export function ProjectCard({ project, onClick }: ProjectCardProps) {
  return (
    <div
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick();
        }
      }}
      className="cursor-pointer bg-neutral-800 rounded-xl shadow-md transform transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1 hover:scale-[1.015] hover:bg-neutral-700"
      aria-label={`Abrir detalhes do projeto ${project.title}`}
    >
      <div className="flex flex-col bg-white">
        <Image
          src={project.image}
          alt={`Imagem do projeto ${project.title}`}
          width={300}
          height={190}
          className="rounded-t w-[300px] h-[190px] scale-[0.95]"
          loading="lazy"
        />
      </div>
      <div className="p-4">
        <h3 className="text-base font-extrabold text-white">{project.title}</h3>
        <p className="text-xs font-medium leading-relaxed text-[#E1E1E1]">
          {project.techs.join(" - ")}
        </p>
      </div>
    </div>
  );
}
