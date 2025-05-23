'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import { projects, Project } from '../../_data/projects'
import { ProjectCard } from '../UI/ProjectCard'
import { Modal } from '../UI/Modal'
import { SectionTitle } from '../UI/SectionTitle'

export default function ProjectsPage() {
    const [showAll, setShowAll] = useState(false)
    const [selectedProject, setSelectedProject] = useState<Project | null>(null)
    const [height, setHeight] = useState(0)
    const [visibleCount, setVisibleCount] = useState(3)
    const hiddenRef = useRef<HTMLDivElement>(null)

    const updateVisibleCount = useCallback(() => {
        const width = window.innerWidth
        if (width < 640) setVisibleCount(1)
        else if (width < 1024) setVisibleCount(2)
        else setVisibleCount(3)
    }, [])

    useEffect(() => {
        updateVisibleCount()
        window.addEventListener("resize", updateVisibleCount)
        return () => window.removeEventListener("resize", updateVisibleCount)
    }, [updateVisibleCount])

    const extraCards = projects.slice(visibleCount)

    useEffect(() => {
        if (!showAll) {
            setHeight(0)
            return
        }
        if (hiddenRef.current) {
            setHeight(hiddenRef.current.scrollHeight)
        }
    }, [showAll, visibleCount])

    useEffect(() => {
        const handleResize = () => {
            if (showAll && hiddenRef.current) {
                setHeight(hiddenRef.current.scrollHeight)
            }
        }
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [showAll])

    return (
        <div className="flex flex-col justify-center min-h-screen m-auto gap-6 max-w-xl lg:max-w-4xl px-4" role="main">
            <SectionTitle
                id="projects-title"
                title="Projetos"
                subtitle="Alguns de meus trabalhos"
            />

            <section aria-labelledby="projects-title">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.slice(0, visibleCount).map((project) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            onClick={() => setSelectedProject(project)}
                        />
                    ))}
                </div>
            </section>

            <section
                id="additional-projects"
                aria-labelledby="projects-title"
                className="overflow-hidden transition-[max-height] duration-700 ease-in-out"
                style={{ maxHeight: `${height}px` }}
            >
                <div
                    ref={hiddenRef}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 pb-6"
                >
                    {extraCards.map((project) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            onClick={() => setSelectedProject(project)}
                        />
                    ))}
                </div>
            </section>

            <div className="text-center">
                <button
                    onClick={() => setShowAll((prev) => !prev)}
                    aria-expanded={showAll}
                    aria-controls="additional-projects"
                    className="inline-flex justify-center min-w-[170px] items-center gap-2 rounded-full border border-[#4FC3F7] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#4FC3F7]/10 cursor-pointer"
                >
                    {showAll ? 'Mostrar menos ' : 'Mostrar mais (' + extraCards.length + ')'}
                </button>
            </div>

            {selectedProject && (
                <Modal project={selectedProject} onClose={() => setSelectedProject(null)} />
            )}
        </div>
    )
}