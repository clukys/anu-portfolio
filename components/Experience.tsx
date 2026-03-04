"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    title: "Staff Product Designer",
    subtitle: "Unified Employee Experience",
    company: "ServiceNow",
    period: "Oct 2024 – Present",
    highlights: [
      "Leading AI-native employee experiences; shipped Employee Works conversational chat",
      "Leading design for Move Works integration",
      "Partnered with Now Assist team on conversational AI experiences",
    ],
  },
  {
    title: "Staff Product Designer",
    subtitle: "Workplace Service Delivery",
    company: "ServiceNow",
    period: "Apr 2019 – Oct 2024",
    highlights: [
      "First designer on WSD; scaled to mature enterprise platform contributing ~$3B revenue",
      "Led Map Studio (49% customer installation) and Reservation Management (31% active usage)",
      "Supported $100K–$750K ACV enterprise deals",
    ],
  },
  {
    title: "Senior UX Designer",
    company: "Filter (Consulting for Google)",
    period: "Aug 2018 – Apr 2019",
    highlights: [
      "Consumer payment platform for YouTube and Google Play (Japan eMoney/Felica)",
    ],
  },
  {
    title: "Senior Associate, UX Designer",
    company: "Cognizant (PayPal)",
    period: "Aug 2016 – Aug 2018",
    highlights: [
      "PayPal Partner servicing portal with real-time merchant insights",
    ],
  },
  {
    title: "UX Designer",
    company: "JPMorgan Chase",
    period: "Oct 2014 – May 2016",
    highlights: [
      "Responsive redesign of Chase Personal Banking payments",
      "Next-gen payment concepts for Chase Mobile",
    ],
  },
];

function TimelineItem({
  exp,
  index,
}: {
  exp: (typeof experiences)[0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      className="relative pl-8 pb-12 last:pb-0 group"
    >
      {/* Timeline line */}
      <div className="absolute left-[5px] top-3 bottom-0 w-px bg-light-gray group-last:h-0" />

      {/* Timeline dot */}
      <div className="absolute left-0 top-2 w-3 h-3 rounded-full bg-cream border-2 border-accent group-hover:bg-accent transition-colors duration-300" />

      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4 mb-3">
        <div>
          <h3 className="font-serif text-xl text-navy">
            {exp.title}
          </h3>
          {exp.subtitle && (
            <p className="text-accent text-sm font-medium">{exp.subtitle}</p>
          )}
          <p className="text-navy/50 text-sm mt-0.5">{exp.company}</p>
        </div>
        <span className="text-sm text-navy/40 font-medium whitespace-nowrap">
          {exp.period}
        </span>
      </div>

      <ul className="space-y-2">
        {exp.highlights.map((highlight, i) => (
          <li key={i} className="text-navy/60 text-sm leading-relaxed flex gap-3">
            <span className="text-accent mt-1.5 flex-shrink-0">
              <svg width="6" height="6" viewBox="0 0 6 6" fill="currentColor">
                <circle cx="3" cy="3" r="3" />
              </svg>
            </span>
            {highlight}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-28 md:py-36 relative" ref={ref}>
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-16"
        >
          <p className="text-accent font-semibold tracking-[0.2em] uppercase text-sm mb-4">
            Experience
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl text-navy">
            A decade of
            <br />
            <span className="italic text-accent">crafting experiences.</span>
          </h2>
        </motion.div>

        <div className="relative">
          {experiences.map((exp, index) => (
            <TimelineItem key={index} exp={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
