"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { aiExperiments, type AIExperiment } from "@/lib/ai-experiments";
import { StoryboardGenerator } from "./StoryboardGenerator";

function ExternalLinkIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 14 14" fill="none">
      <path
        d="M4 10L10 4M10 4H5M10 4V9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <polygon points="3,1 13,7 3,13" fill="currentColor" />
    </svg>
  );
}

function ExperimentCard({
  exp,
  index,
}: {
  exp: AIExperiment;
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12, ease: "easeOut" }}
      className="bg-white rounded-2xl border border-light-gray/50 overflow-hidden hover:border-accent/40 hover:shadow-lg transition-all duration-300"
    >
      {/* Card header */}
      <div className="p-7 pb-5">
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex items-center gap-3">
            <span className="text-3xl">{exp.emoji}</span>
            <div>
              <div className="flex items-center gap-2 mb-0.5">
                <span className="px-2.5 py-0.5 bg-accent/10 text-accent text-xs font-semibold rounded-full tracking-wide">
                  {exp.badge}
                </span>
              </div>
              <h3 className="font-serif text-xl text-navy">{exp.title}</h3>
              <p className="text-navy/50 text-sm">{exp.subtitle}</p>
            </div>
          </div>
        </div>

        <p className="text-navy/65 text-sm leading-relaxed mb-5">
          {exp.description}
        </p>

        {/* Demo credentials */}
        {"demoCredentials" in exp && exp.demoCredentials && (
          <div className="mb-5 px-4 py-3 bg-surface rounded-xl text-xs text-navy/60 font-mono space-y-1">
            <div>
              <span className="text-navy/40">Track ID: </span>
              <span className="text-navy/80">{exp.demoCredentials.trackingId}</span>
            </div>
            <div>
              <span className="text-navy/40">Login: </span>
              <span className="text-navy/80">{exp.demoCredentials.username}</span>
            </div>
          </div>
        )}

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {exp.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-surface text-navy/55 text-xs rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* CTA links */}
        <div className="flex flex-wrap gap-3">
          <a
            href={exp.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-navy text-cream text-xs font-medium rounded-full hover:bg-navy/80 transition-colors"
          >
            View Live <ExternalLinkIcon />
          </a>
          {exp.screencast && (
            <a
              href={exp.screencast}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-surface text-navy/70 text-xs font-medium rounded-full hover:bg-light-gray/60 transition-colors border border-light-gray"
            >
              <PlayIcon /> Screencast
            </a>
          )}
          {"googleStitch" in exp && exp.googleStitch && (
            <a
              href={exp.googleStitch}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-surface text-navy/70 text-xs font-medium rounded-full hover:bg-light-gray/60 transition-colors border border-light-gray"
            >
              <PlayIcon /> Google Stitch
            </a>
          )}
        </div>
      </div>

      {/* Key Learnings */}
      <div className="border-t border-light-gray/60 px-7 py-5 bg-surface/50">
        <p className="text-xs font-semibold text-navy/40 uppercase tracking-widest mb-3">
          Key Learnings
        </p>
        <ul className="space-y-2">
          {exp.learnings.map((l, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-navy/65">
              <span className="mt-1.5 w-1 h-1 rounded-full bg-accent flex-shrink-0" />
              {l}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export default function AIExperiments() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="min-h-screen py-32 md:py-40 bg-surface" ref={ref}>
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-16"
        >
          <a
            href="/"
            className="inline-flex items-center gap-2 text-sm text-navy/50 hover:text-accent transition-colors mb-10 group"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M10 4L6 8L10 12"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Back to portfolio
          </a>

          <p className="text-accent font-semibold tracking-[0.2em] uppercase text-sm mb-4">
            Personal Experiments
          </p>
          <h1 className="font-serif text-5xl sm:text-6xl text-navy mb-6">
            AI
            <br />
            <span className="italic text-accent">Lab.</span>
          </h1>
          <p className="text-navy/60 text-lg max-w-xl leading-relaxed">
            Weekend builds, hackathon projects, and course exercises — exploring
            what&apos;s possible when design meets AI tools like Bolt, Claude,
            Gemini, and ActivePieces.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {aiExperiments.map((exp, index) => (
            <ExperimentCard key={exp.id} exp={exp} index={index} />
          ))}
        </div>

        {/* Storyboard / Script Generator */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          className="mt-8"
        >
          <StoryboardGenerator />
        </motion.div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center text-navy/30 text-sm"
        >
          Experiments are ongoing — more coming soon ✦
        </motion.p>
      </div>
    </section>
  );
}
