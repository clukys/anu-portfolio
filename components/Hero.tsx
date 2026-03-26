"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// Agentation-inspired: each word/phrase reveals upward through a mask
function MaskReveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <span className={`block overflow-hidden ${className}`}>
      <motion.span
        className="block"
        initial={{ y: "110%", opacity: 0 }}
        animate={{ y: "0%", opacity: 1 }}
        transition={{ duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.span>
    </span>
  );
}

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden pt-20">
      {/* Minimal background tone — no heavy blurs */}
      <div className="absolute inset-0 bg-gradient-to-br from-cream via-cream to-surface" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/4 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Text */}
          <div className="order-2 lg:order-1">
            {/* Label */}
            <div className="overflow-hidden mb-6">
              <motion.p
                initial={{ y: "110%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="text-accent font-semibold tracking-[0.2em] uppercase text-xs"
              >
                Staff Product Designer
              </motion.p>
            </div>

            {/* Main headline — mask reveal per line */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] text-navy leading-[1.0] mb-8">
              <MaskReveal delay={0.1}>Designing experiences</MaskReveal>
              <MaskReveal delay={0.2}>
                that feel{" "}
                <em className="italic text-accent">inevitable.</em>
              </MaskReveal>
            </h1>

            {/* Name + location */}
            <div className="mb-6">
              <MaskReveal delay={0.3} className="mb-0.5">
                <span className="text-xl sm:text-2xl text-navy font-serif">
                  Anuradha Vellineni
                </span>
              </MaskReveal>
              <div className="overflow-hidden">
                <motion.p
                  initial={{ y: "110%", opacity: 0 }}
                  animate={{ y: "0%", opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.38, ease: [0.16, 1, 0.3, 1] }}
                  className="text-navy/50 text-sm"
                >
                  Cupertino, CA · Open to opportunities
                </motion.p>
              </div>
            </div>

            {/* Bio */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.48, ease: "easeOut" }}
              className="text-base text-navy/55 max-w-md leading-relaxed font-light mb-10"
            >
              10+ years crafting digital experiences at ServiceNow, Google,
              PayPal, and JPMorgan Chase. I design AI-native products that serve
              millions of enterprise users.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.55, ease: "easeOut" }}
              className="flex flex-wrap items-center gap-3"
            >
              <a
                href="#work"
                className="inline-flex items-center gap-2 px-6 py-3 bg-navy text-cream text-sm font-medium rounded-full hover:bg-navy/80 transition-colors duration-150"
              >
                View My Work
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M2 7h10M7 3l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 border border-navy/20 text-navy text-sm font-medium rounded-full hover:border-accent hover:text-accent transition-colors duration-150"
              >
                Get in Touch
              </a>
            </motion.div>
          </div>

          {/* Right: Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Thin border accent */}
              <div className="absolute -inset-3 border border-accent/25 rounded-2xl rotate-2" />

              {/* Photo */}
              <div className="relative w-64 sm:w-72 md:w-80 lg:w-96 aspect-[4/5] rounded-2xl overflow-hidden shadow-xl shadow-navy/8">
                <Image
                  src="/images/anu-photo.jpg"
                  alt="Anuradha Vellineni"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 640px) 256px, (max-width: 768px) 288px, (max-width: 1024px) 320px, 384px"
                />
                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy/10 to-transparent" />
              </div>

              {/* Accent dot */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.7 }}
                className="absolute -bottom-4 -left-4 w-8 h-8 bg-accent rounded-full"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll cue — minimal line */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.0, duration: 0.6 }}
        className="absolute bottom-8 left-6 md:left-12 hidden md:flex flex-col items-center gap-3"
      >
        <span className="text-[10px] tracking-[0.3em] text-navy/30 uppercase rotate-90 origin-left translate-x-8">
          Scroll
        </span>
        <motion.div
          className="w-px h-16 bg-navy/15 origin-top"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ delay: 1.2, duration: 0.8, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
