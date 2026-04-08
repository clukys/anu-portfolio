"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/projects";

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
    >
      <Link href={`/projects/${project.id}`} className="group block">
        <div className="relative bg-white rounded-2xl overflow-hidden border border-light-gray/50 card-hover hover:border-accent/40">
          {/* Image */}
          <div className="relative aspect-[16/10] overflow-hidden bg-surface">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          {/* Content */}
          <div className="p-6">
            <div className="flex items-start justify-between gap-4 mb-3">
              <div>
                <h3 className="font-serif text-xl text-navy group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-navy/50 text-sm mt-0.5">{project.company}</p>
                {project.era && (
                  <p className="text-accent/70 text-xs mt-1 font-medium tracking-wide">
                    {project.era}
                  </p>
                )}
              </div>
              <div className="w-8 h-8 rounded-full border border-light-gray group-hover:border-accent group-hover:bg-accent/10 flex items-center justify-center flex-shrink-0 transition-all">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  className="text-navy/40 group-hover:text-accent transition-colors"
                >
                  <path
                    d="M4 10L10 4M10 4H5M10 4V9"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>

            <p className="text-navy/60 text-sm leading-relaxed mb-4 line-clamp-2">
              {project.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-surface text-navy/60 text-xs rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="work"
      className="py-28 md:py-36 bg-surface relative"
      ref={ref}
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-16"
        >
          <p className="text-accent font-semibold tracking-[0.2em] uppercase text-sm mb-4">
            Work
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl text-navy">
            Selected
            <br />
            <span className="italic text-accent">projects.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}

          {/* AI Experiments card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: projects.length * 0.1, ease: "easeOut" }}
          >
            <Link href="#ai-lab" className="group block h-full">
              <div className="relative bg-navy rounded-2xl overflow-hidden border border-navy h-full flex flex-col justify-between p-6 min-h-[280px] card-hover">
                {/* Background glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-transparent pointer-events-none" />

                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-accent text-[10px] font-semibold tracking-widest uppercase bg-accent/15 px-2.5 py-1 rounded-full">AI Lab</span>
                  </div>
                  <h3 className="font-serif text-2xl text-cream group-hover:text-accent transition-colors leading-snug">
                    AI Side Projects &amp; Experiments
                  </h3>
                  <p className="text-cream/50 text-sm leading-relaxed mt-3">
                    Building with AI tools — emergency prep chatbots, community platforms, complaint trackers, and more. Quick iterations, real learnings.
                  </p>
                </div>

                <div className="flex items-center gap-2 mt-6 text-accent text-sm font-medium group-hover:gap-3 transition-all">
                  <span>View experiments</span>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </Link>
          </motion.div>
        </div>

        {/* View all — fashion scroll page */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.6, ease: "easeOut" }}
          className="mt-14 text-center"
        >
          <Link
            href="/projects"
            className="inline-flex items-center gap-3 text-sm font-medium text-navy/60 hover:text-navy border border-navy/15 hover:border-navy/40 px-8 py-3.5 rounded-full transition-all duration-300 group"
          >
            <span>View all projects — editorial view</span>
            <svg
              className="group-hover:translate-x-1 transition-transform"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
            >
              <path
                d="M2 7h10M7 2l5 5-5 5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
