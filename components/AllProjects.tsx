"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { projects } from "@/lib/projects";
import { ProjectTabs } from "@/components/ProjectTabs";
import { BlockRenderer } from "@/components/BlockRenderer";

function ProjectRow({
  project,
  index,
  isSelected,
  onClick,
}: {
  project: (typeof projects)[0];
  index: number;
  isSelected: boolean;
  onClick: () => void;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
    >
      <button
        onClick={onClick}
        className="group w-full text-left"
      >
        <div
          className={`flex items-center gap-6 py-5 px-6 rounded-xl border transition-all duration-200 ${
            isSelected
              ? "bg-white border-accent/40 shadow-sm"
              : "bg-white/50 border-light-gray/50 hover:bg-white hover:border-accent/20"
          }`}
        >
          {/* Thumbnail */}
          <div className="relative w-20 h-14 rounded-lg overflow-hidden bg-surface flex-shrink-0">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              sizes="80px"
            />
          </div>

          {/* Info */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-3 mb-1">
              <h3 className={`font-serif text-lg transition-colors ${isSelected ? "text-accent" : "text-navy group-hover:text-accent"}`}>
                {project.title}
              </h3>
              {project.era && (
                <span className="text-accent/60 text-xs font-medium tracking-wide hidden sm:block">
                  {project.era}
                </span>
              )}
            </div>
            <p className="text-navy/50 text-sm truncate">{project.company}</p>
          </div>

          {/* Tags — hidden on small */}
          <div className="hidden lg:flex gap-2 flex-shrink-0">
            {project.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-surface text-navy/50 text-xs rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Toggle icon */}
          <div
            className={`w-7 h-7 rounded-full border flex items-center justify-center flex-shrink-0 transition-all ${
              isSelected ? "border-accent bg-accent/10" : "border-light-gray group-hover:border-accent/40"
            }`}
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              className={`transition-transform duration-200 ${isSelected ? "rotate-180 text-accent" : "text-navy/30"}`}
            >
              <path
                d="M2 4l4 4 4-4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </button>
    </motion.div>
  );
}

export default function AllProjects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const expandedRef = useRef<HTMLDivElement>(null);

  const selectedProject = projects.find((p) => p.id === selectedId) ?? null;

  function handleClick(id: string) {
    setSelectedId((prev) => (prev === id ? null : id));
  }

  useEffect(() => {
    if (selectedId && expandedRef.current) {
      setTimeout(() => {
        expandedRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 50);
    }
  }, [selectedId]);

  return (
    <section id="all-projects" className="py-28 md:py-36 bg-cream relative" ref={ref}>
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-12"
        >
          <p className="text-accent font-semibold tracking-[0.2em] uppercase text-sm mb-4">
            All Projects
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl text-navy">
            Full case
            <br />
            <span className="italic text-accent">studies.</span>
          </h2>
        </motion.div>

        {/* Project list */}
        <div className="space-y-3">
          {projects.map((project, index) => (
            <ProjectRow
              key={project.id}
              project={project}
              index={index}
              isSelected={selectedId === project.id}
              onClick={() => handleClick(project.id)}
            />
          ))}
        </div>

        {/* Inline case study */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              ref={expandedRef}
              key={selectedProject.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="mt-8 bg-white rounded-2xl border border-accent/20 overflow-hidden"
            >
              {/* Hero image */}
              <div className="relative w-full aspect-[16/7]">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
              </div>

              <div className="px-8 py-12">
                {/* Header */}
                <div className="flex flex-wrap items-start justify-between gap-6 mb-10">
                  <div>
                    <h2 className="font-serif text-3xl md:text-4xl text-navy mb-2">
                      {selectedProject.title}
                    </h2>
                    <p className="text-navy/50 text-base">{selectedProject.company}</p>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {selectedProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-4 py-1.5 bg-accent/10 text-accent text-sm font-medium rounded-full border border-accent/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {selectedProject.tabs && selectedProject.tabs.length > 0 ? (
                  <ProjectTabs tabs={selectedProject.tabs} />
                ) : (
                  <>
                    {/* Meta */}
                    <div className="grid sm:grid-cols-2 gap-8 mb-12 pb-12 border-b border-light-gray">
                      <div>
                        <p className="text-navy/40 text-xs uppercase tracking-widest mb-2">Role</p>
                        <p className="text-navy font-medium text-lg">{selectedProject.role}</p>
                      </div>
                      <div>
                        <p className="text-navy/40 text-xs uppercase tracking-widest mb-2">Year</p>
                        <p className="text-navy font-medium text-lg">{selectedProject.year}</p>
                      </div>
                    </div>

                    {/* Description + Bullets */}
                    <div className="mb-12 max-w-3xl">
                      <p className="text-navy/70 leading-relaxed text-xl mb-8">
                        {selectedProject.description}
                      </p>
                      {selectedProject.bullets && selectedProject.bullets.length > 0 && (
                        <ul className="space-y-4">
                          {selectedProject.bullets.map((bullet, i) => (
                            <li key={i} className="flex gap-3 text-navy/70 leading-relaxed text-base">
                              <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-accent" />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>

                    {/* Sections */}
                    {selectedProject.sections && selectedProject.sections.length > 0 && (
                      <div className="space-y-12">
                        {selectedProject.sections.map((section, si) => (
                          <div key={si}>
                            {section.title && (
                              <h3 className="font-serif text-2xl text-navy mb-6">{section.title}</h3>
                            )}
                            <div className="space-y-6">
                              {section.blocks.map((block, bi) => (
                                <BlockRenderer key={bi} block={block} />
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </>
                )}

                {/* Close */}
                <div className="mt-12 pt-8 border-t border-light-gray text-center">
                  <button
                    onClick={() => setSelectedId(null)}
                    className="inline-flex items-center gap-2 text-sm text-navy/50 hover:text-navy transition-colors"
                  >
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path
                        d="M2 7h10"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
