"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const recommendations = [
  {
    quote:
      "With very little information and onboarding, Anu is able to jump right into a project. If she doesn't have the answer, she'll find it. She's sharp, resourceful, and extremely easy to work with.",
    name: "Suja Raju",
    title: "Design Lead, Google",
  },
  {
    quote:
      "Anu was the primary designer for a complex flow to support a new form of payment in some of Google's mobile apps. With very little instruction, Anu was able to map out the various cases of the flow in a thorough and thoughtful way.",
    name: "Zak Stern",
    title: "Product Manager, Google",
  },
  {
    quote:
      "Flexible. Fast. Resourceful. Delightful! While working with Anu at PayPal, I watched her continually strive to improve the user experience, while interacting professionally and gracefully to meet the demands of a challenging project.",
    name: "Kathryn Klein",
    title: "Creative Director, After Midnight Inc.",
  },
  {
    quote:
      "It has been a pleasure having Anuradha on my UX team. Never have I met someone so determined to out-do herself on every project she works on. Not only is she a fantastic UX designer but also an incredible team player.",
    name: "Steven Lee",
    title: "Vice President, JPMorgan Chase",
  },
  {
    quote:
      "Anu jumped right into several complex projects that were struggling to find a balance between design, engineering, content, and product. Taking the initiative to find some organization within these projects was exactly what was needed.",
    name: "Brandon Tineo",
    title: "Senior Software Engineer, PayPal",
  },
  {
    quote:
      "I would recommend Anu for any position looking for a creative, meticulous UX Designer. Not only does she have a delightful personality that meshes with various types of work styles, but she also works tirelessly to deliver thoughtful, polished design work.",
    name: "Jacquelyn Jaech",
    title: "Co-Founder & CMO, Snupi Technologies",
  },
];

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

        {/* Recommendations */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
          className="mt-24"
        >
          <p className="text-accent font-semibold tracking-[0.2em] uppercase text-sm mb-3">
            Recommendations
          </p>
          <h3 className="font-serif text-3xl text-navy mb-12">
            What colleagues say
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recommendations.map((rec, index) => (
              <motion.div
                key={rec.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.5,
                  delay: 0.6 + index * 0.08,
                  ease: "easeOut",
                }}
                className="bg-surface rounded-2xl p-6 border border-light-gray/50 flex flex-col gap-4"
              >
                <span className="text-accent font-serif text-3xl leading-none select-none">&ldquo;</span>
                <p className="text-navy/70 leading-relaxed text-sm flex-1">
                  {rec.quote}
                </p>
                <div className="pt-2 border-t border-light-gray/60">
                  <p className="text-navy font-medium text-sm">{rec.name}</p>
                  <p className="text-navy/50 text-xs mt-0.5">{rec.title}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
