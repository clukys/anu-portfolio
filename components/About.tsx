"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 relative" ref={ref}>
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="text-accent font-medium tracking-[0.2em] uppercase text-sm mb-4">
            About
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl text-navy mb-12">
            Designing for people,
            <br />
            <span className="text-accent">at scale.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="space-y-6"
          >
            <p className="text-navy/70 leading-relaxed text-lg font-light">
              I&apos;m a Staff Product Designer with over a decade of experience
              crafting digital experiences for some of the world&apos;s most
              impactful companies — including ServiceNow, Google, PayPal, and
              JPMorgan Chase.
            </p>
            <p className="text-navy/70 leading-relaxed text-lg font-light">
              Currently at ServiceNow, I lead design for AI-native employee
              experiences, shipping products that serve millions of enterprise
              users worldwide. My work has directly contributed to ServiceNow&apos;s
              Employee Workflows business, which represents ~$3B of the
              company&apos;s $11B total revenue.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="space-y-8"
          >
            <div>
              <h3 className="font-serif text-xl text-navy mb-2">Education</h3>
              <div className="space-y-3">
                <div>
                  <p className="text-navy font-medium">
                    MS in Human Centered Design &amp; Engineering
                  </p>
                  <p className="text-navy/50 text-sm">
                    University of Washington · 2011–2013
                  </p>
                </div>
                <div>
                  <p className="text-navy font-medium">
                    M.Arch in Digital Architecture
                  </p>
                  <p className="text-navy/50 text-sm">
                    Anna University, India · 2004–2006
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-serif text-xl text-navy mb-2">Location</h3>
              <p className="text-navy/70">Cupertino, CA</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
