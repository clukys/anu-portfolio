"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    title: "Staff Product Designer",
    subtitle: "Unified Employee Experience",
    company: "ServiceNow",
    location: "San Jose, CA",
    period: "Oct 2024 – Present",
    highlights: [
      "Transitioned to UEX to lead AI-native employee experiences",
      "Shipped Employee Works: a new conversational chat-based employee experience",
      "Leading design for Move Works",
      "Partnered with Now Assist team on conversational AI chat experiences",
    ],
  },
  {
    title: "Staff Product Designer",
    subtitle: "Workplace Service Delivery",
    company: "ServiceNow",
    location: "San Jose, CA",
    period: "Apr 2019 – Oct 2024",
    highlights: [
      "First designer on the WSD team; scaled from initial market adoption to mature enterprise platform",
      "Contributed to ServiceNow Employee Workflows business (~$3B of $11B total revenue in 2024)",
      "Led end-to-end design for Map Studio and Reservation Management (49% customer installation, 31% active usage)",
      "Designed workplace planning features supporting $100K–$750K ACV enterprise deals",
      "Shipped Map Studio as part of the Mapwize acquisition",
    ],
  },
  {
    title: "Senior UX Designer",
    company: "Filter (Consulting for Google)",
    location: "Mountain View, CA",
    period: "Aug 2018 – Apr 2019",
    highlights: [
      "Designed consumer payment platform for YouTube and Google Play",
      "Contributed to industry-wide protocol for user safety across Google ecosystem",
    ],
  },
  {
    title: "Senior Associate, UX Designer",
    company: "Cognizant Technology Solutions (PayPal)",
    location: "San Jose, CA",
    period: "Aug 2016 – Aug 2018",
    highlights: [
      "Designed servicing portal for PayPal Partners with real-time merchant insights",
    ],
  },
  {
    title: "UX Designer",
    company: "JPMorgan Chase (Contract)",
    location: "San Francisco, CA",
    period: "Oct 2014 – May 2016",
    highlights: [
      "Led responsive redesign of Chase Personal Banking payments website",
      "Designed next-gen payment concepts for Chase Mobile",
    ],
  },
];

function ExperienceCard({
  exp,
  index,
}: {
  exp: (typeof experiences)[0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      className="relative pl-8 md:pl-12 pb-12 last:pb-0 group"
    >
      {/* Timeline line */}
      <div className="absolute left-0 top-2 bottom-0 w-px bg-light-gray group-last:bg-transparent" />

      {/* Timeline dot */}
      <div className="absolute left-0 top-2 w-px flex justify-center -translate-x-1/2">
        <div className="w-3 h-3 rounded-full bg-cream border-2 border-accent group-hover:bg-accent transition-colors" />
      </div>

      <div className="bg-white/50 rounded-2xl p-6 md:p-8 border border-light-gray/50 hover:border-accent/20 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
          <div>
            <h3 className="font-serif text-xl md:text-2xl text-navy">
              {exp.title}
            </h3>
            {exp.subtitle && (
              <p className="text-accent text-sm font-medium mt-0.5">
                {exp.subtitle}
              </p>
            )}
            <p className="text-navy/50 text-sm mt-1">
              {exp.company} · {exp.location}
            </p>
          </div>
          <span className="text-sm text-navy/40 font-medium whitespace-nowrap">
            {exp.period}
          </span>
        </div>

        <ul className="space-y-2">
          {exp.highlights.map((highlight, i) => (
            <li
              key={i}
              className="text-navy/60 text-sm leading-relaxed flex gap-3"
            >
              <span className="text-accent mt-1.5 flex-shrink-0">
                <svg
                  width="6"
                  height="6"
                  viewBox="0 0 6 6"
                  fill="currentColor"
                >
                  <circle cx="3" cy="3" r="3" />
                </svg>
              </span>
              {highlight}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-32 bg-cream relative" ref={ref}>
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-16"
        >
          <p className="text-accent font-medium tracking-[0.2em] uppercase text-sm mb-4">
            Experience
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl text-navy">
            A decade of
            <br />
            <span className="text-accent">crafting experiences.</span>
          </h2>
        </motion.div>

        <div className="relative">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} exp={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
