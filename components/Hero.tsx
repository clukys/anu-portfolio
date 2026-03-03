"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Subtle decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-navy/5 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="text-accent font-medium tracking-[0.2em] uppercase text-sm mb-6">
            Staff Product Designer
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-navy leading-[1.1] mb-8"
        >
          Anuradha
          <br />
          <span className="text-accent">Vellineni</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="text-lg sm:text-xl text-navy/60 max-w-2xl mx-auto leading-relaxed font-light"
        >
          Love everything about Design and Technology. I believe that good
          design should be easy and delightful to use.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="mt-12 flex items-center justify-center gap-6"
        >
          <a
            href="#experience"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-navy text-cream text-sm font-medium tracking-wide rounded-full hover:bg-navy-light transition-colors"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 border border-navy/20 text-navy text-sm font-medium tracking-wide rounded-full hover:border-accent hover:text-accent transition-colors"
          >
            Get in Touch
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-5 h-8 rounded-full border-2 border-navy/20 flex items-start justify-center p-1"
          >
            <div className="w-1 h-2 bg-accent rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
