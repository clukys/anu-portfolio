"use client";

import { motion, useScroll, useInView, useTransform } from "framer-motion";
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
  const imageRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const isEven = index % 2 === 0;

  const num = String(index + 1).padStart(2, "0");

  // Subtle parallax for images
  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  // Staggered fade-in variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as const },
    },
  };

  return (
    <section
      ref={sectionRef}
      className={`relative min-h-screen flex flex-col justify-center py-28 md:py-36 overflow-hidden ${
        isEven ? "bg-[#FAFAF8]" : "bg-[#0A1628]"
      }`}
    >
      {/* Subtle decorative number */}
      <div
        className={`absolute right-8 top-1/2 -translate-y-1/2 font-serif text-[16vw] font-bold leading-none select-none pointer-events-none ${
          isEven ? "text-navy/[0.03]" : "text-white/[0.03]"
        }`}
        aria-hidden="true"
      >
        {num}
      </div>

      <motion.div
        className="max-w-6xl mx-auto px-6 md:px-12 w-full"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Top meta row */}
        <motion.div
          variants={itemVariants}
          className="flex items-center gap-4 mb-12"
        >
          <span className="font-mono text-xs tracking-[0.3em] text-accent">
            {num}
          </span>
          <div className="h-px w-12 bg-accent/30" />
          <span
            className={`text-xs tracking-[0.2em] uppercase font-medium ${
              isEven ? "text-navy/35" : "text-white/35"
            }`}
          >
            {project.year}
          </span>
        </motion.div>

        {/* Title */}
        <motion.h2
          variants={itemVariants}
          className={`font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[0.92] mb-3 ${
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
          variants={itemVariants}
          className={`text-sm mb-16 tracking-wide ${
            isEven ? "text-navy/40" : "text-white/40"
          }`}
        >
          {project.company}
        </motion.p>

        {/* Content grid */}
        <div
          className={`grid md:grid-cols-2 gap-12 md:gap-20 items-start ${
            isEven ? "" : "md:[&>*:first-child]:order-last"
          }`}
        >
          {/* Image panel with parallax */}
          <motion.div
            ref={imageRef}
            variants={itemVariants}
            className="relative"
          >
            <Link href={`/projects/${project.id}`}>
              <div className="group relative aspect-[4/3] overflow-hidden rounded-xl shadow-sm">
                <motion.div
                  className="absolute inset-0"
                  style={{ y: imageY }}
                >
                  <Image
                    src={`/images/projects/${project.id}/cover.png`}
                    alt={project.title}
                    fill
                    className="object-cover scale-110 transition-transform duration-1000 ease-out group-hover:scale-[1.15]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    onError={(e) => {
                      const img = e.currentTarget as HTMLImageElement;
                      img.src = project.image;
                    }}
                  />
                </motion.div>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/10 transition-colors duration-500 flex items-end p-6">
                  <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0 bg-white/90 backdrop-blur-sm text-navy text-sm font-medium px-5 py-2.5 rounded-full">
                    View Case Study →
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Info panel */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="flex flex-col justify-center"
          >
            {/* Role */}
            <motion.div variants={itemVariants} className="mb-8">
              <p className="text-[11px] tracking-[0.3em] uppercase font-semibold mb-2.5 text-accent">
                Role
              </p>
              <p
                className={`text-base font-medium leading-relaxed ${
                  isEven ? "text-navy" : "text-white"
                }`}
              >
                {project.role}
              </p>
            </motion.div>

            {/* Divider */}
            <motion.div
              variants={itemVariants}
              className={`h-px mb-8 ${
                isEven ? "bg-navy/8" : "bg-white/8"
              }`}
            />

            {/* Challenge */}
            <motion.div variants={itemVariants} className="mb-8">
              <p className="text-[11px] tracking-[0.3em] uppercase font-semibold mb-3 text-accent">
                Challenge
              </p>
              <p
                className={`text-[15px] leading-[1.7] ${
                  isEven ? "text-navy/65" : "text-white/65"
                }`}
              >
                {project.challenge || project.description}
              </p>
            </motion.div>

            {/* Impact bullets */}
            {project.bullets && project.bullets.length > 0 && (
              <motion.div variants={itemVariants} className="mb-8">
                <p className="text-[11px] tracking-[0.3em] uppercase font-semibold mb-3 text-accent">
                  Impact
                </p>
                <ul className="space-y-2.5">
                  {project.bullets.slice(0, 3).map((bullet, i) => (
                    <li
                      key={i}
                      className={`flex gap-3 text-sm leading-relaxed ${
                        isEven ? "text-navy/55" : "text-white/55"
                      }`}
                    >
                      <span
                        className="mt-[7px] flex-shrink-0 w-1 h-1 rounded-full bg-accent"
                        aria-hidden="true"
                      />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}

            {/* Tags */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className={`px-3 py-1 text-[11px] tracking-wide rounded-full border ${
                    isEven
                      ? "border-navy/10 text-navy/45"
                      : "border-white/10 text-white/45"
                  }`}
                >
                  {tag}
                </span>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div variants={itemVariants} className="mt-10">
              <Link
                href={`/projects/${project.id}`}
                className={`inline-flex items-center gap-2.5 text-sm font-medium group ${
                  isEven ? "text-navy" : "text-white"
                }`}
              >
                <span className="border-b border-current/30 pb-0.5 group-hover:border-accent group-hover:text-accent transition-all duration-300">
                  Read case study
                </span>
                <svg
                  className="group-hover:translate-x-1.5 transition-transform duration-300"
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
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default function ProjectsPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });

  return (
    <div ref={containerRef} className="relative">
      {/* Elegant progress bar */}
      <motion.div
        className="fixed top-0 left-0 h-[2px] bg-gradient-to-r from-accent to-accent/70 z-50 origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Fixed nav - mix blend for visibility on all sections */}
      <div className="fixed top-0 left-0 right-0 z-40 mix-blend-difference pointer-events-none">
        <div className="max-w-6xl mx-auto px-6 md:px-12 py-5 flex items-center justify-between">
          <span className="font-serif text-white text-xl pointer-events-auto">
            AV
          </span>
        </div>
      </div>

      {/* Back link */}
      <div className="fixed top-4 left-6 md:left-12 z-50 pointer-events-auto">
        <Link
          href="/#work"
          className="inline-flex items-center gap-2 text-sm font-medium text-white mix-blend-difference hover:text-accent transition-colors duration-300"
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

      {/* Hero section */}
      <section className="min-h-[65vh] md:min-h-[75vh] bg-[#0A1628] flex items-end pb-20 md:pb-28 pt-32 relative overflow-hidden">
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(196,149,106,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(196,149,106,0.8) 1px, transparent 1px)",
            backgroundSize: "100px 100px",
          }}
        />

        <div className="max-w-6xl mx-auto px-6 md:px-12 w-full relative">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-accent text-xs font-semibold tracking-[0.35em] uppercase mb-8"
          >
            Selected Work
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.12, ease: [0.25, 0.1, 0.25, 1] }}
            className="font-serif text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white leading-[0.9] mb-8"
          >
            Every
            <br />
            <em className="italic text-accent">project,</em>
            <br />
            one page.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.24, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-white/40 text-lg max-w-md leading-relaxed"
          >
            A decade of product design across fintech, enterprise, and AI &mdash; from
            early freelance to leading at ServiceNow.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.6 }}
            className="mt-14 flex items-center gap-3 text-white/25 text-xs tracking-[0.25em]"
          >
            <span>SCROLL</span>
            <div className="h-px w-16 bg-white/15" />
            <span>{projects.length} PROJECTS</span>
          </motion.div>
        </div>
      </section>

      {/* Project sections */}
      {projects.map((project, index) => (
        <ProjectSection key={project.id} project={project} index={index} />
      ))}

      {/* Footer */}
      <section className="bg-[#0A1628] py-28 md:py-36">
        <div className="max-w-6xl mx-auto px-6 md:px-12 text-center">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-accent text-xs font-semibold tracking-[0.35em] uppercase mb-8"
          >
            Let&apos;s Connect
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-12"
          >
            Interested in working
            <br />
            <em className="italic text-accent">together?</em>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <Link
              href="/#contact"
              className="inline-flex items-center gap-3 bg-accent text-white text-sm font-medium px-8 py-4 rounded-full hover:bg-accent/85 transition-all duration-300 hover:shadow-lg hover:shadow-accent/20"
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
