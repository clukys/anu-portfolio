"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: "10+", label: "Years Experience" },
  { value: "5", label: "Companies" },
  { value: "MS", label: "HCDE, UW" },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-28 md:py-36 relative" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-16"
        >
          <p className="text-accent font-semibold tracking-[0.2em] uppercase text-sm mb-4">
            About
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl text-navy">
            Designing for people,
            <br />
            <span className="italic text-accent">at scale.</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Left: Bio */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="lg:col-span-3 space-y-6"
          >
            <p className="text-navy/70 leading-relaxed text-lg">
              I&apos;m a Staff Product Designer with over a decade of experience
              crafting digital experiences for some of the world&apos;s most
              impactful companies — including ServiceNow, Google, PayPal, and
              JPMorgan Chase.
            </p>
            <p className="text-navy/70 leading-relaxed text-lg">
              Currently at ServiceNow, I lead design for AI-native employee
              experiences, shipping products that serve millions of enterprise
              users worldwide. My work has directly contributed to ServiceNow&apos;s
              Employee Workflows business, representing ~$3B of the company&apos;s
              $11B total revenue.
            </p>
            <p className="text-navy/70 leading-relaxed text-lg">
              I hold a Master&apos;s in Human Centered Design & Engineering from the
              University of Washington — where my passion for understanding the
              voice of users became foundational to my practice.
            </p>
          </motion.div>

          {/* Right: Stats & Education */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="lg:col-span-2 space-y-8"
          >
            {/* Open to opportunities badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/30 rounded-full">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span className="text-sm font-medium text-accent">
                Open to new opportunities
              </span>
            </div>

            {/* Stat cards */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.5,
                    delay: 0.4 + index * 0.1,
                    ease: "easeOut",
                  }}
                  className="bg-surface rounded-xl p-4 border-l-2 border-accent"
                >
                  <p className="font-serif text-2xl text-navy">{stat.value}</p>
                  <p className="text-navy/50 text-xs mt-1 leading-tight">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Education */}
            <div className="space-y-4 pt-4">
              <h3 className="font-serif text-lg text-navy">Education</h3>
              <div className="space-y-4">
                <div className="bg-white/80 rounded-xl p-4 border border-light-gray/50">
                  <p className="text-navy font-medium text-sm">
                    MS, Human Centered Design & Engineering
                  </p>
                  <p className="text-navy/50 text-sm mt-1">
                    University of Washington · 2011–2013
                  </p>
                </div>
                <div className="bg-white/80 rounded-xl p-4 border border-light-gray/50">
                  <p className="text-navy font-medium text-sm">
                    M.Arch, Digital Architecture
                  </p>
                  <p className="text-navy/50 text-sm mt-1">
                    Anna University, India · 2004–2006
                  </p>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-2 text-navy/60 pt-2">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className="text-accent"
              >
                <path
                  d="M8 8.5a2 2 0 100-4 2 2 0 000 4z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path
                  d="M13 6.5c0 4.5-5 7.5-5 7.5s-5-3-5-7.5a5 5 0 0110 0z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
              </svg>
              <span className="text-sm">Cupertino, CA</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
