"use client";

import { motion, useScroll, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/projects";

function ProjectSection({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });
  const isEven = index % 2 === 0;

  const num = String(index + 1).padStart(2, "0");

  return (
    <section
      ref={sectionRef}
      className={`relative min-h-screen flex flex-col justify-center py-28 md:py-36 overflow-hidden ${
        isEven ? "bg-[#F5F3EE]" : "bg-[#0A1628]"
      }`}
    >
      {/* Decorative large number background */}
      <div
        className={`absolute right-6 top-1/2 -translate-y-1/2 font-serif text-[18vw] font-bold leading-none select-none pointer-events-none ${
          isEven ? "text-navy/5" : "text-white/5"
        }`}
        aria-hidden="true"
      >
        {num}
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        {/* Top meta row */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex items-center gap-4 mb-10"
        >
          <span
            className={`font-mono text-xs tracking-[0.3em] ${
              isEven ? "text-accent" : "text-accent"
            }`}
          >
            {num}
          </span>
          <div
            className={`h-px flex-1 max-w-[60px] ${
              isEven ? "bg-accent/40" : "bg-accent/40"
            }`}
          />
          <span
            className={`text-xs tracking-[0.2em] uppercase font-medium ${
              isEven ? "text-navy/40" : "text-white/40"
            }`}
          >
            {project.year}
          </span>
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 32 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.08, ease: "easeOut" }}
          className={`font-serif text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[0.9] mb-4 ${
            isEven ? "text-navy" : "text-white"
          }`}
        >
          {project.title.includes("—") ? (
            <>
              {project.title.split("—")[0].trim()}
              <br />
              <em className="italic text-accent">
                — {project.title.split("—")[1].trim()}
              </em>
            </>
          ) : (
            project.title
          )}
        </motion.h2>

        {/* Company */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.14, ease: "easeOut" }}
          className={`text-sm mb-14 tracking-wide ${
            isEven ? "text-navy/50" : "text-white/50"
          }`}
        >
          {project.company}
        </motion.p>

        {/* Content grid: image + info */}
        <div
          className={`grid md:grid-cols-2 gap-10 md:gap-16 items-start ${
            isEven ? "" : "md:[&>*:first-child]:order-last"
          }`}
        >
          {/* Image panel */}
          <motion.div
            initial={{ opacity: 0, x: isEven ? -40 : 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.18, ease: "easeOut" }}
            className="relative"
          >
            <Link href={`/projects/${project.id}`}>
              <div className="group relative aspect-[4/3] overflow-hidden rounded-lg">
                <Image
                  src={`/images/projects/${project.id}/cover.png`}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  onError={(e) => {
                    // Fallback to old path if new path doesn't exist
                    const img = e.currentTarget as HTMLImageElement;
                    img.src = project.image;
                  }}
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/20 transition-colors duration-500 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-accent text-white text-sm font-medium px-6 py-3 rounded-full">
                    View Case Study →
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Info panel */}
          <motion.div
            initial={{ opacity: 0, x: isEven ? 40 : -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.22, ease: "easeOut" }}
            className="flex flex-col justify-center"
          >
            {/* Role */}
            <div className="mb-8">
              <p
                className={`text-xs tracking-[0.25em] uppercase font-semibold mb-2 ${
                  isEven ? "text-accent" : "text-accent"
                }`}
              >
                Role
              </p>
              <p
                className={`text-lg font-medium leading-snug ${
                  isEven ? "text-navy" : "text-white"
                }`}
              >
                {project.role}
              </p>
            </div>

            {/* Divider */}
            <div
              className={`h-px mb-8 ${
                isEven ? "bg-navy/10" : "bg-white/10"
              }`}
            />

            {/* Challenge / Description */}
            <div className="mb-8">
              <p
                className={`text-xs tracking-[0.25em] uppercase font-semibold mb-3 ${
                  isEven ? "text-accent" : "text-accent"
                }`}
              >
                Challenge
              </p>
              <p
                className={`text-base leading-relaxed ${
                  isEven ? "text-navy/70" : "text-white/70"
                }`}
              >
                {project.challenge || project.description}
              </p>
            </div>

            {/* Key highlights */}
            {project.bullets && project.bullets.length > 0 && (
              <div className="mb-8">
                <p
                  className={`text-xs tracking-[0.25em] uppercase font-semibold mb-3 ${
                    isEven ? "text-accent" : "text-accent"
                  }`}
                >
                  Impact
                </p>
                <ul className="space-y-2">
                  {project.bullets.slice(0, 2).map((bullet, i) => (
                    <li
                      key={i}
                      className={`flex gap-3 text-sm leading-relaxed ${
                        isEven ? "text-navy/60" : "text-white/60"
                      }`}
                    >
                      <span
                        className="mt-2 flex-shrink-0 w-1 h-1 rounded-full bg-accent"
                        aria-hidden="true"
                      />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className={`px-3 py-1 text-xs rounded-full border ${
                    isEven
                      ? "border-navy/15 text-navy/50"
                      : "border-white/15 text-white/50"
                  }`}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-10">
              <Link
                href={`/projects/${project.id}`}
                className={`inline-flex items-center gap-2 text-sm font-medium group ${
                  isEven ? "text-navy" : "text-white"
                }`}
              >
                <span className="border-b border-current pb-0.5 group-hover:border-accent group-hover:text-accent transition-colors">
                  Read case study
                </span>
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
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default function ProjectsPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });

  return (
    <div ref={containerRef} className="relative">
      {/* Sticky progress bar */}
      <motion.div
        className="fixed top-0 left-0 h-0.5 bg-accent z-50 origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Back nav */}
      <div className="fixed top-0 left-0 right-0 z-40 mix-blend-difference pointer-events-none">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-5 flex items-center justify-between">
          <span className="font-serif text-white text-xl pointer-events-auto">
            AV
          </span>
        </div>
      </div>

      {/* Back link */}
      <div className="fixed top-4 left-6 md:left-12 z-50 pointer-events-auto">
        <Link
          href="/#work"
          className="inline-flex items-center gap-2 text-sm font-medium text-white mix-blend-difference hover:text-accent transition-colors"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M13 8H3M7 4l-4 4 4 4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Back
        </Link>
      </div>

      {/* Hero / intro section */}
      <section className="min-h-[60vh] md:min-h-[70vh] bg-[#0A1628] flex items-end pb-20 md:pb-28 pt-32 relative overflow-hidden">
        {/* Decorative grid */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "linear-gradient(rgba(196,149,106,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(196,149,106,0.5) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-accent text-xs font-semibold tracking-[0.3em] uppercase mb-6"
          >
            Selected Work
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: "easeOut" }}
            className="font-serif text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-white leading-[0.88] mb-8"
          >
            Every
            <br />
            <em className="italic text-accent">project,</em>
            <br />
            one page.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.22, ease: "easeOut" }}
            className="text-white/50 text-lg max-w-md leading-relaxed"
          >
            A decade of product design across fintech, enterprise, and AI &mdash; from
            early freelance to leading at ServiceNow.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-12 flex items-center gap-3 text-white/30 text-xs tracking-widest"
          >
            <span>SCROLL</span>
            <div className="h-px w-12 bg-white/20" />
            <span>{projects.length} PROJECTS</span>
          </motion.div>
        </div>
      </section>

      {/* Project sections */}
      {projects.map((project, index) => (
        <ProjectSection key={project.id} project={project} index={index} />
      ))}

      {/* Footer closer */}
      <section className="bg-[#0A1628] py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-accent text-xs font-semibold tracking-[0.3em] uppercase mb-6"
          >
            Let&apos;s Connect
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-5xl md:text-6xl text-white mb-10"
          >
            Interested in working
            <br />
            <em className="italic text-accent">together?</em>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <Link
              href="/#contact"
              className="inline-flex items-center gap-3 bg-accent text-white text-sm font-medium px-8 py-4 rounded-full hover:bg-accent/90 transition-colors"
            >
              Get in touch
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
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
    </div>
  );
}
