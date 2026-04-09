"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "AI Lab", href: "#ai-lab", external: true },
  { label: "Experience", href: "#experience" },
  { label: "All Projects", href: "/projects", external: true },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // Scroll progress for the thin top bar — agentation-style
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track active section
  useEffect(() => {
    const sections = navLinks.map((l) => l.href.replace("#", ""));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveSection(e.target.id);
        });
      },
      { threshold: 0.3 }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Scroll progress bar — thin, accent, agentation-style */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-accent z-[60] origin-left"
        style={{ scaleX }}
      />

      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
          scrolled
            ? "bg-cream/92 backdrop-blur-md border-b border-navy/5"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="group flex items-center">
            <span
              className="font-serif text-xl text-navy tracking-tight"
              style={{
                fontVariationSettings: "'wght' 400",
                transition: "font-variation-settings 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.fontVariationSettings = "'wght' 700";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.fontVariationSettings = "'wght' 400";
              }}
            >
              AV
            </span>
          </a>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = !link.external && activeSection === link.href.replace("#", "");
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`relative text-sm transition-colors duration-150 ${
                      isActive ? "text-navy" : "text-navy/50 hover:text-navy"
                    } ${link.external ? "flex items-center gap-1" : ""}`}
                    style={{
                      fontWeight: isActive ? 600 : 400,
                      transition: "color 0.15s, font-weight 0.2s",
                    }}
                  >
                    {link.label}
                    {link.external && (
                      <span className="text-accent text-[10px] font-semibold tracking-wide bg-accent/10 px-1.5 py-0.5 rounded-full">NEW</span>
                    )}
                    <span
                      className="absolute -bottom-0.5 left-0 h-px bg-accent transition-all duration-200"
                      style={{ width: isActive ? "100%" : "0%" }}
                    />
                  </a>
                </li>
              );
            })}
          </ul>

          {/* CTA group */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="/Anuradha_Vellineni_Resume_2026.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 border border-navy/20 text-navy text-xs font-medium rounded-full hover:border-accent hover:text-accent transition-colors duration-150"
            >
              Resume
              <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                <path d="M6 1v7M3 5l3 3 3-3M2 11h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center px-4 py-2 border border-navy/20 text-navy text-xs font-medium rounded-full hover:border-accent hover:text-accent transition-colors duration-150"
            >
              Contact
            </a>
            <a
              href="https://www.linkedin.com/in/anuradhave/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2 bg-navy text-cream text-xs font-medium rounded-full hover:bg-navy/80 transition-colors duration-150"
            >
              Connect
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path
                  d="M3 9L9 3M9 3H4.5M9 3V7.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>

          {/* Mobile button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.2 }}
              className="block w-5 h-px bg-navy"
            />
            <motion.span
              animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.15 }}
              className="block w-5 h-px bg-navy"
            />
            <motion.span
              animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.2 }}
              className="block w-5 h-px bg-navy"
            />
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden bg-cream/98 backdrop-blur-md border-t border-navy/5"
            >
              <ul className="flex flex-col items-center py-8 gap-5">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.2 }}
                  >
                    <a
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center gap-2 text-sm font-medium text-navy/60 hover:text-navy transition-colors duration-150"
                    >
                      {link.label}
                      {link.external && (
                        <span className="text-accent text-[10px] font-semibold tracking-wide bg-accent/10 px-1.5 py-0.5 rounded-full">NEW</span>
                      )}
                    </a>
                  </motion.li>
                ))}
                <motion.li
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.2 }}
                  className="pt-2 flex gap-3"
                >
                  <a
                    href="#contact"
                    onClick={() => setMobileOpen(false)}
                    className="inline-flex items-center px-5 py-2.5 border border-navy/20 text-navy text-sm font-medium rounded-full"
                  >
                    Contact
                  </a>
                  <a
                    href="https://www.linkedin.com/in/anuradhave/"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileOpen(false)}
                    className="inline-flex items-center gap-2 px-6 py-2.5 bg-navy text-cream text-sm font-medium rounded-full"
                  >
                    Connect on LinkedIn
                  </a>
                </motion.li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
