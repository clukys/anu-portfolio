'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import Link from 'next/link';

// Job data
const jobs = [
  {
    id: 1,
    company: "Mercury",
    role: "Staff Product Designer — AI Accounting Systems",
    location: "San Francisco, CA",
    workType: "Remote",
    salary: "$229K–$286K",
    topPick: true,
    tags: ["AI Experience", "Fintech", "Complex Workflows"],
    whyYou: "Your enterprise AI work at ServiceNow (Now Assist, conversational AI) maps directly to Mercury's AI accounting vision. Chase payments background is a bonus.",
    applyUrl: "https://job-boards.greenhouse.io/mercury/jobs/5818177004",
    resumeFile: "/resumes/resume_2_mercury.pdf",
    interview: {
      process: "5 rounds · ~3 weeks · Live 2hr design exercise included",
      questions: [
        "Walk me through a complex workflow you simplified — what was your process?",
        "How do you design for trust in financial products?",
        "Tell me about a time you had to balance automation with user control.",
        "How do you approach designing for edge cases in high-stakes domains?",
        "What does good AI UX look like to you?"
      ],
      talkingPoints: [
        "Chase payments redesign — high-stakes financial UX under compliance constraints",
        "ServiceNow conversational AI — designing for trust in enterprise automation",
        "Map Studio — turning complex spatial data into intuitive interfaces"
      ],
      referralTip: null
    }
  },
  {
    id: 2,
    company: "Superhuman",
    role: "Staff Product Designer — Go Enterprise",
    location: "San Francisco, CA",
    workType: "Hybrid",
    salary: null,
    topPick: true,
    tags: ["Enterprise AI", "Conversational AI", "Admin Surfaces"],
    whyYou: "Leading AI-native enterprise experiences at ServiceNow (Employee Works, Move Works) is a near-perfect match for designing Go's enterprise agent rollout.",
    applyUrl: "https://job-boards.greenhouse.io/grammarly/jobs/7663989",
    resumeFile: "/resumes/resume_1_grammarly.pdf",
    interview: {
      process: "7 rounds · ~16 days · Portfolio + EAGER values focus",
      questions: [
        "How do you make complex AI behavior feel trustworthy to enterprise admins?",
        "Walk me through designing an admin control surface — what trade-offs did you make?",
        "How do you balance power-user needs with ease of onboarding?",
        "Tell me about a time you influenced product direction through design.",
        "How do you measure success for enterprise AI experiences?"
      ],
      talkingPoints: [
        "Employee Works at ServiceNow — shipped conversational AI within enterprise constraints",
        "Move Works design leadership — AI-native workflows for enterprise employees",
        "WSD platform scaling — growing from 0 to enterprise-scale with 49% customer install"
      ],
      referralTip: null
    }
  },
  {
    id: 3,
    company: "Intuit",
    role: "Staff Product Designer — AIA Team",
    location: "Mountain View, CA",
    workType: "Hybrid",
    salary: "$211K–$243K",
    topPick: true,
    tags: ["AI", "Fintech", "Design Systems", "Scale"],
    whyYou: "Intuit's AI-powered fintech mission aligns with your Chase + PayPal payments background and your AI experience design work at ServiceNow.",
    applyUrl: "https://jobs.intuit.com/search-jobs?keyword=staff+product+designer",
    resumeFile: "/resumes/resume_8_intuit.pdf",
    interview: {
      process: "5–6 rounds · 3–4 weeks · Portfolio presentation to design leadership",
      questions: [
        "How have you used data and research to drive design decisions at scale?",
        "Walk me through a project where you improved a complex financial workflow.",
        "How do you design for users with varying levels of financial literacy?",
        "Tell me about a time you partnered cross-functionally to ship something hard.",
        "How do you contribute to a design system while also shipping features?"
      ],
      talkingPoints: [
        "Chase and PayPal experience — deep financial services UX expertise",
        "ServiceNow scale — designing for enterprise customers with 49% adoption rates",
        "AI experience design — conversational UI and intelligent product experiences"
      ],
      referralTip: null
    }
  },
  {
    id: 4,
    company: "Faire",
    role: "Staff Product Designer — Discovery Experience",
    location: "San Francisco, CA",
    workType: "Hybrid",
    salary: "$212K+",
    topPick: false,
    tags: ["Marketplace", "AI Search", "Design Systems", "Storytelling"],
    whyYou: "10+ years of complex product thinking and design systems experience at scale. Your enterprise platform work shows you can handle marketplace-level complexity.",
    applyUrl: "https://job-boards.greenhouse.io/faire/jobs/8445628002",
    resumeFile: "/resumes/resume_3_faire.pdf",
    interview: {
      process: "4 rounds · ~3 weeks · 4hr onsite with portfolio + design exercise",
      questions: [
        "How would you redesign our search experience to help retailers discover new brands?",
        "Walk me through how you've evolved a design system at scale.",
        "How do you tell the story of your design decisions to executive stakeholders?",
        "What's your approach to designing for personalization and AI-assisted experiences?",
        "How do you mentor other designers while leading a complex initiative?"
      ],
      talkingPoints: [
        "Map Studio — complex spatial discovery experience with high adoption rates",
        "Reservation Management — designing discovery + booking flows at enterprise scale",
        "Design systems leadership across ServiceNow's WSD platform"
      ],
      referralTip: null
    }
  },
  {
    id: 5,
    company: "Webflow",
    role: "Staff Product Designer — New Products",
    location: "Remote (US)",
    workType: "Remote",
    salary: "$187K–$238K",
    topPick: false,
    tags: ["AI-Native", "Agentic UX", "Technical Domains", "Remote"],
    whyYou: "Your conversational AI and agentic workflow experience at ServiceNow positions you well for Webflow's AI-native product vision.",
    applyUrl: "https://job-boards.greenhouse.io/webflow/jobs/7624566",
    resumeFile: "/resumes/resume_4_webflow.pdf",
    interview: {
      process: "5 stages · ~30 days · Rated easiest process among target companies",
      questions: [
        "How do you approach designing agentic/AI-native workflows?",
        "Walk me through how you've collaborated cross-functionally in a remote environment.",
        "Tell me about a time you shipped a technically complex product.",
        "How do you maintain design quality while moving fast?",
        "What does AI-native UX mean to you — how is it different from traditional UX?"
      ],
      talkingPoints: [
        "Employee Works — shipped conversational AI experience within catalog constraints",
        "Remote/distributed team collaboration at ServiceNow across 5+ years",
        "Figma Make and Claude Code in toolkit — genuinely AI-native design practice"
      ],
      referralTip: "Jeff Jean-Baptiste (Senior PD at Webflow) is an ex-ServiceNow designer — worth reaching out on LinkedIn!"
    }
  },
  {
    id: 6,
    company: "Waymo",
    role: "UX Designer — Design System",
    location: "Mountain View / San Francisco",
    workType: "Hybrid",
    salary: null,
    topPick: false,
    tags: ["Design Systems", "Autonomous Vehicles", "Maps", "Alphabet"],
    whyYou: "Map Studio experience (indoor mapping, spatial UI) is rare and directly relevant. Your design systems work at ServiceNow adds depth.",
    applyUrl: "https://careers.withwaymo.com/jobs/ux-designer-design-system-mountain-view-california-united-states-san-francisco",
    resumeFile: "/resumes/resume_9_waymo.pdf",
    interview: {
      process: "5–6 rounds · 4–6 weeks · Google-style structured interviews",
      questions: [
        "How do you build a design system that serves both consumer and internal tooling?",
        "Walk me through how you approach spatial or map-based UX challenges.",
        "How do you document and evangelize design system adoption?",
        "Tell me about a time you had to advocate for design quality under pressure.",
        "How would you approach designing for safety-critical experiences?"
      ],
      talkingPoints: [
        "Map Studio — leading indoor mapping UX, shipped as part of Mapwize acquisition",
        "Reservation Management with map integration — spatial UI at 49% install rate",
        "Design systems contribution across ServiceNow's enterprise platform"
      ],
      referralTip: null
    }
  },
  {
    id: 7,
    company: "Calendly",
    role: "Staff Product Designer — New Products",
    location: "San Francisco Bay Area",
    workType: "Hybrid",
    salary: null,
    topPick: false,
    tags: ["AI Features", "Product Thinking", "Scheduling", "Enterprise"],
    whyYou: "Enterprise SaaS experience + AI features background is a strong match for Calendly's push into AI-powered scheduling.",
    applyUrl: "https://job-boards.greenhouse.io/calendly/jobs/8416032002",
    resumeFile: "/resumes/resume_5_calendly.pdf",
    interview: {
      process: "4–5 rounds · ~2 weeks · Conversational, design systems focused",
      questions: [
        "How do you approach designing AI features that users actually trust and use?",
        "Walk me through a project where you improved enterprise user onboarding.",
        "How do you balance simplicity with feature depth in a scheduling product?",
        "Tell me about how you've worked with PMs and engineers to define scope.",
        "What's your process for usability testing complex workflows?"
      ],
      talkingPoints: [
        "ServiceNow enterprise onboarding — scaled WSD from 0 to broad adoption",
        "Conversational AI experience — Now Assist and Employee Works",
        "Cross-functional leadership — partnered with PMs, engineers, and researchers"
      ],
      referralTip: null
    }
  },
  {
    id: 8,
    company: "GoFundMe",
    role: "Staff Product Designer",
    location: "San Francisco Bay Area",
    workType: "Hybrid",
    salary: null,
    topPick: false,
    tags: ["Consumer", "Social Impact", "Design Leadership"],
    whyYou: "Strong end-to-end design ownership and cross-functional leadership experience. Consumer payment background (Chase, PayPal) is directly relevant.",
    applyUrl: "https://job-boards.greenhouse.io/gofundme/jobs/7592223",
    resumeFile: "/resumes/resume_6_gofundme.pdf",
    interview: {
      process: "4–5 rounds · 2–4 weeks · Take-home + 3hr team interview",
      questions: [
        "How do you design donation experiences that inspire trust and generosity?",
        "Walk me through a consumer payments project and the emotional considerations.",
        "How have you used AI to improve design speed or quality in your workflow?",
        "Tell me about a time you simplified a complex user journey.",
        "How do you incorporate feedback from diverse user groups?"
      ],
      talkingPoints: [
        "Chase Personal Banking payments — consumer-facing payment redesign with emotional UX",
        "PayPal partner portal — trust-focused financial services design",
        "Usability testing expertise — incorporating voice of customer into design"
      ],
      referralTip: null
    }
  },
  {
    id: 9,
    company: "Dropbox",
    role: "Staff Product Designer — Mobile Design Systems",
    location: "San Francisco, CA",
    workType: "Hybrid",
    salary: null,
    topPick: false,
    tags: ["Design Systems", "Mobile", "Scale"],
    whyYou: "Design systems leadership at enterprise scale (ServiceNow WSD platform) and mobile experience (Map Studio mobile) are strong fits.",
    applyUrl: "https://job-boards.greenhouse.io/dropbox/jobs/7621857",
    resumeFile: "/resumes/resume_7_dropbox.pdf",
    interview: {
      process: "5hr onsite · 4–6 weeks · Intense visual design scrutiny",
      questions: [
        "Show me your design system work — how do you ensure consistency at scale?",
        "How do you balance mobile and desktop design system parity?",
        "Walk me through how you document components for engineering handoff.",
        "Tell me about a time you deprecated a pattern in favor of a better one.",
        "How do you evangelize design system adoption across product teams?"
      ],
      talkingPoints: [
        "ServiceNow WSD platform — design system ownership across enterprise product",
        "Map Studio mobile — shipped mobile-first spatial experience (desktop + mobile)",
        "Reservation Management — consistent design patterns at 31% active usage"
      ],
      referralTip: null
    }
  },
  {
    id: 10,
    company: "Google",
    role: "Senior UX Designer — Labs",
    location: "Mountain View / San Francisco, CA",
    workType: "Hybrid",
    salary: null,
    topPick: false,
    tags: ["Google", "AI Labs", "Consumer", "Scale"],
    whyYou: "You already designed for Google (Filter consulting) — consumer payment platform for YouTube and Google Play. That direct Google ecosystem experience is a major differentiator.",
    applyUrl: "https://careers.google.com",
    resumeFile: "/resumes/resume_11_google.pdf",
    interview: {
      process: "6–7 rounds · 6–8 weeks · Highly structured Google-style interviews",
      questions: [
        "Tell me about a time you used data to make a design decision — what was the impact?",
        "How do you design for 1 billion users while maintaining quality?",
        "Walk me through your Google payment platform project — what were the constraints?",
        "How do you navigate ambiguity in early-stage product work?",
        "Tell me about a time you disagreed with a PM — how did you handle it?"
      ],
      talkingPoints: [
        "Filter/Google consulting — directly designed for YouTube and Google Play payment flows",
        "Industry-wide safety protocol — contributed to Google ecosystem security standards",
        "Enterprise AI at ServiceNow — AI-native experience design at massive scale"
      ],
      referralTip: null
    }
  },
  {
    id: 11,
    company: "Meta",
    role: "Product Designer (Watch for openings)",
    location: "Menlo Park, CA",
    workType: "Hybrid",
    salary: null,
    topPick: false,
    tags: ["AI Studio", "Social", "Scale", "Watch List"],
    whyYou: "No Bay Area PD roles open right now but worth monitoring. AI Studio + WhatsApp enterprise experiences would fit your conversational AI background well.",
    applyUrl: "https://www.metacareers.com/jobs",
    resumeFile: null,
    interview: {
      process: "6 rounds · 4–6 weeks · Rigorous portfolio review + design exercise",
      questions: [
        "How do you design at the intersection of consumer and enterprise?",
        "Walk me through how you've used AI in your design practice.",
        "How do you ensure designs scale to billions of users?",
        "Tell me about a time you drove alignment across a large cross-functional team.",
        "What does responsible AI design mean to you?"
      ],
      talkingPoints: [
        "Conversational AI at ServiceNow — Now Assist and Employee Works",
        "Enterprise-to-consumer experience translation — WSD to employee-facing products",
        "10+ years designing for Google, PayPal, Chase, and ServiceNow — breadth + depth"
      ],
      referralTip: null
    }
  }
];

type FilterType = 'all' | 'top-picks' | 'remote' | 'on-site';
type SortType = 'fit' | 'salary' | 'deadline';

// Company logo colors for initials
const companyColors: Record<string, string> = {
  Mercury: '#5849BE',
  Superhuman: '#000000',
  Intuit: '#365ABF',
  Faire: '#2A2A2A',
  Webflow: '#4353FF',
  Waymo: '#00AC4D',
  Calendly: '#006BFF',
  GoFundMe: '#02A95C',
  Dropbox: '#0061FF',
  Google: '#4285F4',
  Meta: '#0081FB',
};

function getInitials(company: string): string {
  return company.split(' ').map(w => w[0]).join('').slice(0, 2);
}

function JobCard({ job, index }: { job: typeof jobs[0]; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      className="bg-surface rounded-2xl overflow-hidden border border-light-gray/50"
    >
      {/* Card Content */}
      <div className="p-6">
        {/* Header Row */}
        <div className="flex items-start gap-4 mb-4">
          {/* Company Logo */}
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-semibold text-sm shrink-0"
            style={{ backgroundColor: companyColors[job.company] || '#C4956A' }}
          >
            {getInitials(job.company)}
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-2">
              <div>
                <h3 className="font-serif text-xl text-navy leading-tight">{job.company}</h3>
                <p className="text-navy/70 text-sm mt-0.5 leading-snug">{job.role}</p>
              </div>
              {job.topPick && (
                <span className="shrink-0 px-3 py-1 bg-accent/20 text-accent text-xs font-semibold rounded-full">
                  Top Pick
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Location & Work Type */}
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="text-navy/60 text-sm">{job.location}</span>
          <span className="text-navy/30">·</span>
          <span className={`px-2 py-0.5 text-xs font-medium rounded-full ${
            job.workType === 'Remote'
              ? 'bg-emerald-100 text-emerald-700'
              : job.workType === 'Hybrid'
              ? 'bg-blue-100 text-blue-700'
              : 'bg-orange-100 text-orange-700'
          }`}>
            {job.workType}
          </span>
          {job.salary && (
            <>
              <span className="text-navy/30">·</span>
              <span className="text-accent font-medium text-sm">{job.salary}</span>
            </>
          )}
        </div>

        {/* Why You */}
        <p className="text-navy/70 text-sm leading-relaxed mb-4 line-clamp-2">
          <span className="font-semibold text-navy">Why you:</span> {job.whyYou}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {job.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 bg-navy/5 text-navy/60 text-xs rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3">
          {job.resumeFile ? (
            <a
              href={job.resumeFile}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-navy text-cream text-sm font-medium rounded-full hover:bg-navy-light transition-colors"
            >
              Download Resume
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          ) : (
            <span className="inline-flex items-center gap-2 px-4 py-2.5 bg-navy/30 text-cream/70 text-sm font-medium rounded-full cursor-not-allowed">
              No Resume Yet
            </span>
          )}
          <button
            onClick={() => setExpanded(!expanded)}
            className="inline-flex items-center gap-2 px-4 py-2.5 border border-navy/20 text-navy text-sm font-medium rounded-full hover:border-accent hover:text-accent transition-colors"
          >
            Interview Prep
            <motion.svg
              animate={{ rotate: expanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </motion.svg>
          </button>
          <a
            href={job.applyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 text-accent text-sm font-medium hover:underline"
          >
            Apply
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>

      {/* Interview Prep Accordion */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 pt-2 border-t border-light-gray/50">
              {/* Process Overview */}
              <div className="mb-5">
                <h4 className="text-xs font-semibold text-navy/50 uppercase tracking-wider mb-2">
                  Interview Process
                </h4>
                <p className="text-navy text-sm">{job.interview.process}</p>
              </div>

              {/* Key Questions */}
              <div className="mb-5">
                <h4 className="text-xs font-semibold text-navy/50 uppercase tracking-wider mb-3">
                  5 Questions to Prepare
                </h4>
                <ol className="space-y-2">
                  {job.interview.questions.map((q, i) => (
                    <li key={i} className="flex gap-3 text-sm text-navy/80">
                      <span className="shrink-0 w-5 h-5 rounded-full bg-accent/20 text-accent text-xs font-semibold flex items-center justify-center">
                        {i + 1}
                      </span>
                      <span>{q}</span>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Talking Points */}
              <div className="mb-5">
                <h4 className="text-xs font-semibold text-navy/50 uppercase tracking-wider mb-3">
                  Anu-Specific Talking Points
                </h4>
                <ul className="space-y-2">
                  {job.interview.talkingPoints.map((point, i) => (
                    <li key={i} className="flex gap-3 text-sm text-navy/80">
                      <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-accent mt-2" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Referral Tip */}
              {job.interview.referralTip && (
                <div className="p-4 bg-accent/10 rounded-xl">
                  <h4 className="text-xs font-semibold text-accent uppercase tracking-wider mb-2">
                    Referral Tip
                  </h4>
                  <p className="text-navy text-sm">{job.interview.referralTip}</p>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function JobsPage() {
  const [filter, setFilter] = useState<FilterType>('all');
  const [sort, setSort] = useState<SortType>('fit');

  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true });

  // Filter jobs
  const filteredJobs = jobs.filter((job) => {
    if (filter === 'all') return true;
    if (filter === 'top-picks') return job.topPick;
    if (filter === 'remote') return job.workType === 'Remote';
    if (filter === 'on-site') return job.workType === 'Hybrid' || job.workType === 'On-site';
    return true;
  });

  // Sort jobs
  const sortedJobs = [...filteredJobs].sort((a, b) => {
    if (sort === 'fit') {
      // Top picks first, then by id
      if (a.topPick && !b.topPick) return -1;
      if (!a.topPick && b.topPick) return 1;
      return a.id - b.id;
    }
    if (sort === 'salary') {
      // Parse salary for sorting, null salaries go last
      const getSalaryMax = (s: string | null) => {
        if (!s) return 0;
        const match = s.match(/\$?([\d,]+)K?/g);
        if (match) {
          const nums = match.map(m => parseInt(m.replace(/[$K,]/g, '')) * (m.includes('K') ? 1000 : 1));
          return Math.max(...nums);
        }
        return 0;
      };
      return getSalaryMax(b.salary) - getSalaryMax(a.salary);
    }
    return 0;
  });

  // Stats
  const activeRoles = jobs.filter(j => !j.tags.includes('Watch List')).length;
  const tailoredResumes = jobs.filter(j => j.resumeFile).length;
  const topPicks = jobs.filter(j => j.topPick).length;

  const filterButtons: { key: FilterType; label: string }[] = [
    { key: 'all', label: 'All' },
    { key: 'top-picks', label: 'Top Picks' },
    { key: 'remote', label: 'Remote' },
    { key: 'on-site', label: 'On-site' },
  ];

  const sortButtons: { key: SortType; label: string }[] = [
    { key: 'fit', label: 'By Fit' },
    { key: 'salary', label: 'By Salary' },
  ];

  return (
    <main className="min-h-screen bg-cream">
      {/* Navigation back to portfolio */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/80 backdrop-blur-md border-b border-light-gray/30">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="text-navy/60 hover:text-navy text-sm font-medium flex items-center gap-2 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Portfolio
          </Link>
          <span className="text-navy/40 text-xs font-medium flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            Private
          </span>
        </div>
      </nav>

      {/* Header */}
      <header className="pt-32 pb-12 px-6" ref={headerRef}>
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-navy mb-3">
              Your Job Search
            </h1>
            <p className="text-navy/60 text-lg mb-6">
              {jobs.length} roles curated for you · March 2026
            </p>
          </motion.div>

          {/* Stat Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-wrap gap-3"
          >
            <div className="px-4 py-2 bg-surface rounded-full text-sm text-navy/70">
              <span className="font-semibold text-navy">{activeRoles}</span> Active Roles
            </div>
            <div className="px-4 py-2 bg-surface rounded-full text-sm text-navy/70">
              <span className="font-semibold text-navy">{tailoredResumes}</span> Tailored Resumes
            </div>
            <div className="px-4 py-2 bg-surface rounded-full text-sm text-navy/70">
              <span className="font-semibold text-navy">{jobs.length}</span> Interview Guides
            </div>
          </motion.div>
        </div>
      </header>

      {/* Filter Bar */}
      <section className="sticky top-16 z-40 bg-cream/95 backdrop-blur-sm border-b border-light-gray/30 py-4 px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-2">
            {filterButtons.map(({ key, label }) => (
              <button
                key={key}
                onClick={() => setFilter(key)}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-all ${
                  filter === key
                    ? 'bg-navy text-cream'
                    : 'bg-surface text-navy/70 hover:bg-navy/10'
                }`}
              >
                {label}
                {key === 'top-picks' && (
                  <span className="ml-1.5 text-xs opacity-70">({topPicks})</span>
                )}
              </button>
            ))}
          </div>

          {/* Sort Buttons */}
          <div className="flex items-center gap-2">
            <span className="text-navy/40 text-sm">Sort:</span>
            {sortButtons.map(({ key, label }) => (
              <button
                key={key}
                onClick={() => setSort(key)}
                className={`px-3 py-1.5 text-sm font-medium rounded-full transition-all ${
                  sort === key
                    ? 'bg-accent/20 text-accent'
                    : 'text-navy/50 hover:text-navy'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Job Cards Grid */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {sortedJobs.map((job, index) => (
              <JobCard key={job.id} job={job} index={index} />
            ))}
          </div>

          {sortedJobs.length === 0 && (
            <div className="text-center py-20">
              <p className="text-navy/40 text-lg">No jobs match the current filter.</p>
            </div>
          )}
        </div>
      </section>

      {/* Footer Note */}
      <footer className="py-12 px-6 border-t border-light-gray/30">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-navy/40 text-sm">
            Resumes and prep guides generated overnight by Lucky 🤖
          </p>
        </div>
      </footer>
    </main>
  );
}
