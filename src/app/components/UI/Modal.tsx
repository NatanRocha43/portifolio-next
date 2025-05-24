"use client";
import { useEffect } from "react";
import { Project } from "../../_data/projects";
import { X } from "lucide-react";

interface ModalProps {
  project: Project;
  onClose: () => void;
}

export function Modal({ project, onClose }: ModalProps) {
  // Evita scroll no body enquanto o modal estiver aberto
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-xl w-full relative overflow-y-auto max-h-[90vh]">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-black cursor-pointer z-40"
          aria-label="Fechar modal"
        >
          <X size={28} aria-hidden="true" />
        </button>
        <h2 className="text-xl font-bold mb-2">{project.title}</h2>
        <p className="text-sm text-gray-500 mb-4">{project.techs.join(", ")}</p>
        <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
          {project.description
            .trim()
            .split("\n\n")
            .map((paragraph, idx) => (
              <p key={idx}>{paragraph.trim()}</p>
            ))}
        </div>
      </div>
    </div>
  );
}
