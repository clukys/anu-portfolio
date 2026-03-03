"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Design",
    skills: [
      "Product Thinking",
      "Interaction Design",
      "Visual Design",
      "AI-Powered Experience Design",
      "Design Systems",
      "Conversational UI",
      "Usability Testing",
    ],
  },
  {
    title: "Tools",
    skills: ["Figma Make", "Claude Code", "V0", "Bolt", "Figma MCP"],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-32 relative" ref={ref}>
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-16"
        >
          <p className="text-accent font-medium tracking-[0.2em] uppercase text-sm mb-4">
            Skills
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl text-navy">
            Expertise &amp;
            <br />
            <span className="text-accent">capabilities.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: catIndex * 0.15,
                ease: "easeOut",
              }}
            >
              <h3 className="font-serif text-2xl text-navy mb-6">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                      duration: 0.4,
                      delay: catIndex * 0.15 + skillIndex * 0.05,
                      ease: "easeOut",
                    }}
                    className="px-4 py-2.5 bg-white border border-light-gray rounded-full text-sm text-navy/70 hover:border-accent hover:text-accent hover:bg-accent/5 transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
