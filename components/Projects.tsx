"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";

const projects = [
  {
    id: "google-emoney",
    title: "Google eMoney",
    company: "Google (via Filter)",
    image: "/images/projects/google.png",
    description:
      "Consumer payment platform for YouTube and Google Play in Japan",
    tags: ["Mobile", "Payments", "Google"],
    details: {
      role: "Senior UX Designer",
      year: "2018–2019",
      overview:
        "Designed the consumer payment experience for Google's eMoney platform, enabling Japanese users to make purchases on YouTube and Google Play using Felica chip technology.",
      challenges: [
        "Complex regulatory requirements for Japanese payment systems",
        "Integration with existing Google Play purchase flows",
        "Support for multiple eMoney providers (Suica, PASMO, etc.)",
      ],
      solutions: [
        "Designed intuitive first-time eMoney setup flow with clear provider selection",
        "Created seamless returning user experience with one-tap payments",
        "Developed error handling patterns for failed transactions",
      ],
      impact:
        "Contributed to Google's expanding payment ecosystem in the Japanese market, enabling millions of users to make frictionless purchases.",
    },
  },
  {
    id: "paypal-partner",
    title: "PayPal Partner Servicing",
    company: "PayPal (via Cognizant)",
    image: "/images/projects/paypal.png",
    description:
      "Self-service dashboard for PayPal Partners with real-time merchant data",
    tags: ["Dashboard", "B2B", "PayPal"],
    details: {
      role: "Senior Associate UX Designer",
      year: "2016–2018",
      overview:
        "Designed a comprehensive servicing portal for PayPal Partners (including Shopify, BigCommerce, and other platforms) to manage their merchant relationships and access real-time business insights.",
      challenges: [
        "Partners needed visibility into merchant performance across multiple dimensions",
        "Complex data relationships between partners, merchants, and transactions",
        "Different user types with varying permission levels",
      ],
      solutions: [
        "Created role-based dashboard views with customizable widgets",
        "Designed real-time analytics with drill-down capabilities",
        "Developed bulk action patterns for managing large merchant portfolios",
      ],
      impact:
        "Enabled PayPal Partners to self-serve 80% of their merchant management tasks, reducing support tickets and improving partner satisfaction.",
    },
  },
  {
    id: "chase-payments",
    title: "Chase Payments",
    company: "JPMorgan Chase",
    image: "/images/projects/chase.png",
    description:
      "Component-based design system for credit card, auto loan, and mortgage payments",
    tags: ["Web", "Payments", "Chase"],
    details: {
      role: "UX Designer",
      year: "2014–2016",
      overview:
        "Led the responsive redesign of Chase Personal Banking's payment experiences, creating a unified component-based system that works across credit cards, auto loans, and mortgages.",
      challenges: [
        "Users anxious about payment confirmation and transaction status",
        "Legacy systems with inconsistent payment flows across products",
        "Mobile users needed quick access to make payments on-the-go",
      ],
      solutions: [
        "Redesigned confirmation screens with clear visual hierarchy and delight",
        "Created fluid, reusable payment components that scale across products",
        "Implemented progressive disclosure to simplify complex payment options",
      ],
      impact:
        "Improved payment completion rates by reducing user anxiety around transaction status. The component system became the foundation for Chase's modern payment experiences.",
    },
  },
  {
    id: "chase-otp",
    title: "Chase ATM OTP",
    company: "JPMorgan Chase",
    image: "/images/projects/chase-otp.png",
    description: "Next-generation ATM access via mobile one-time password",
    tags: ["Mobile", "Security", "Chase"],
    details: {
      role: "UX Designer",
      year: "2015–2016",
      overview:
        "Designed the mobile experience for Chase's cardless ATM access, allowing customers to withdraw cash using a secure one-time password generated on their phone.",
      challenges: [
        "Security requirements while maintaining ease of use",
        "Time-sensitive OTP codes requiring clear urgency indicators",
        "Integration with existing Chase mobile app architecture",
      ],
      solutions: [
        "Created clear, prominent OTP display with countdown timer",
        "Designed location-aware ATM finder integrated into the flow",
        "Implemented clear error states for expired or incorrect codes",
      ],
      impact:
        "Enabled millions of Chase customers to access ATMs without physical cards, pioneering a new standard in banking convenience and security.",
    },
  },
  {
    id: "wallyhome",
    title: "Wallyhome",
    company: "Startup",
    image: "/images/projects/wallyhome.png",
    description:
      "Smart home sensor dashboard with improved installation flow",
    tags: ["IoT", "Dashboard", "Startup"],
    details: {
      role: "UX Designer (Graduate Project)",
      year: "2013",
      overview:
        "Redesigned the setup and monitoring experience for Wallyhome's smart home sensor system, focusing on first-time user onboarding and daily dashboard interaction.",
      challenges: [
        "Complex sensor installation process causing user dropoff",
        "Dashboard information overload for non-technical users",
        "Alert fatigue from too many notifications",
      ],
      solutions: [
        "Simplified installation flow through progressive onboarding",
        "Redesigned dashboard with clear priority hierarchy",
        "Created smart notification system based on urgency levels",
      ],
      impact:
        "User testing showed 40% improvement in successful sensor installation rates and increased daily app engagement.",
    },
  },
  {
    id: "motion-design",
    title: "Motion Design Explorations",
    company: "Personal Projects",
    image: "/images/projects/motion.png",
    description: "Personal motion design work and visual explorations",
    tags: ["Motion", "Visual Design"],
    details: {
      role: "Designer",
      year: "Ongoing",
      overview:
        "A collection of personal motion design explorations and experiments, showcasing animation principles and visual storytelling through movement.",
      challenges: [
        "Exploring the intersection of design and animation",
        "Creating meaningful micro-interactions",
        "Balancing aesthetic appeal with purposeful motion",
      ],
      solutions: [
        "Studied animation principles from film and traditional animation",
        "Experimented with various tools including After Effects and Principle",
        "Applied learnings to product work at ServiceNow and other companies",
      ],
      impact:
        "These explorations inform my product work, bringing thoughtful motion and delight to enterprise software experiences.",
    },
  },
];

function ProjectCard({
  project,
  index,
  onClick,
}: {
  project: (typeof projects)[0];
  index: number;
  onClick: () => void;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      onClick={onClick}
      className="group cursor-pointer"
    >
      <div className="relative bg-white rounded-2xl overflow-hidden border border-light-gray/50 card-hover hover:border-accent/40">
        {/* Image */}
        <div className="relative aspect-[16/10] overflow-hidden bg-surface">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-start justify-between gap-4 mb-3">
            <div>
              <h3 className="font-serif text-xl text-navy group-hover:text-accent transition-colors">
                {project.title}
              </h3>
              <p className="text-navy/50 text-sm mt-0.5">{project.company}</p>
            </div>
            <div className="w-8 h-8 rounded-full border border-light-gray group-hover:border-accent group-hover:bg-accent/10 flex items-center justify-center flex-shrink-0 transition-all">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                className="text-navy/40 group-hover:text-accent transition-colors"
              >
                <path
                  d="M4 10L10 4M10 4H5M10 4V9"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          <p className="text-navy/60 text-sm leading-relaxed mb-4 line-clamp-2">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-surface text-navy/60 text-xs rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function ProjectModal({
  project,
  onClose,
}: {
  project: (typeof projects)[0];
  onClose: () => void;
}) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEsc);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "auto";
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-navy/60 modal-overlay" />

      {/* Modal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="relative w-full max-w-4xl max-h-[90vh] bg-cream rounded-3xl overflow-hidden shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-10 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-accent hover:text-cream transition-colors"
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path
              d="M4 4l10 10M14 4L4 14"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>

        {/* Hero image — full width, outside scroll */}
        <div className="relative w-full flex-shrink-0" style={{ aspectRatio: "16/9" }}>
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 896px"
          />
        </div>

        {/* Scrollable content — starts 20px below image */}
        <div className="overflow-y-auto flex-1 mt-5 modal-scroll">

          {/* Content */}
          <div className="p-8 md:p-12">
            {/* Header */}
            <div className="flex flex-wrap items-start justify-between gap-4 mb-8">
              <div>
                <h2 className="font-serif text-3xl md:text-4xl text-navy mb-2">
                  {project.title}
                </h2>
                <p className="text-navy/50">{project.company}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-1.5 bg-accent/10 text-accent text-sm font-medium rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Meta */}
            <div className="grid sm:grid-cols-2 gap-6 mb-10 pb-10 border-b border-light-gray">
              <div>
                <p className="text-navy/40 text-sm uppercase tracking-wider mb-1">
                  Role
                </p>
                <p className="text-navy font-medium">
                  {project.details.role}
                </p>
              </div>
              <div>
                <p className="text-navy/40 text-sm uppercase tracking-wider mb-1">
                  Year
                </p>
                <p className="text-navy font-medium">
                  {project.details.year}
                </p>
              </div>
            </div>

            {/* Overview */}
            <div className="mb-10">
              <h3 className="font-serif text-xl text-navy mb-4">Overview</h3>
              <p className="text-navy/70 leading-relaxed">
                {project.details.overview}
              </p>
            </div>

            {/* Challenges & Solutions */}
            <div className="grid md:grid-cols-2 gap-8 mb-10">
              <div>
                <h3 className="font-serif text-xl text-navy mb-4">
                  Challenges
                </h3>
                <ul className="space-y-3">
                  {project.details.challenges.map((challenge, i) => (
                    <li
                      key={i}
                      className="flex gap-3 text-navy/70 leading-relaxed"
                    >
                      <span className="text-accent mt-2 flex-shrink-0">
                        <svg width="6" height="6" viewBox="0 0 6 6" fill="currentColor">
                          <circle cx="3" cy="3" r="3" />
                        </svg>
                      </span>
                      {challenge}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-serif text-xl text-navy mb-4">
                  Solutions
                </h3>
                <ul className="space-y-3">
                  {project.details.solutions.map((solution, i) => (
                    <li
                      key={i}
                      className="flex gap-3 text-navy/70 leading-relaxed"
                    >
                      <span className="text-accent mt-2 flex-shrink-0">
                        <svg width="6" height="6" viewBox="0 0 6 6" fill="currentColor">
                          <circle cx="3" cy="3" r="3" />
                        </svg>
                      </span>
                      {solution}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Impact */}
            <div className="bg-surface rounded-2xl p-6 md:p-8 border-l-4 border-accent">
              <h3 className="font-serif text-xl text-navy mb-3">Impact</h3>
              <p className="text-navy/70 leading-relaxed">
                {project.details.impact}
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);

  return (
    <>
      <section
        id="work"
        className="py-28 md:py-36 bg-surface relative"
        ref={ref}
      >
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mb-16"
          >
            <p className="text-accent font-semibold tracking-[0.2em] uppercase text-sm mb-4">
              Work
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl text-navy">
              Selected
              <br />
              <span className="italic text-accent">projects.</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
