'use client'
import Image from 'next/image'
import { Project } from '../../_data/projects'

interface ModalProps {
  project: Project
  onClose: () => void
}

export function Modal({ project, onClose }: ModalProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-xl w-full relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-black text-xl font-bold cursor-pointer"
          aria-label="Fechar modal"
        >
          ×
        </button>
        <div className="relative w-full h-60 mb-4">
          <Image
            src={project.image}
            alt={project.title}
            fill
            style={{ objectFit: 'cover' }}
            className="rounded"
            loading="lazy"
          />
        </div>
        <h2 className="text-xl font-bold mb-2">{project.title}</h2>
        <p className="text-sm text-gray-500 mb-4">{project.techs.join(', ')}</p>
        <p>{project.description}</p>
      </div>
    </div>
  )
}
