export const aiExperiments = [
  {
    id: "emergency-preparedness",
    title: "Emergency Preparedness",
    subtitle: "AI Chat via ActivePieces",
    badge: "Bolt Hackathon",
    emoji: "🚨",
    description:
      "An emergency preparedness assistant with an AI chat integration powered by ActivePieces. Users get structured, actionable guidance during crisis situations — all formatted consistently using JSON-guided prompts.",
    url: "https://spectacular-dodol-485b0b.netlify.app",
    screencast: "https://app.screencast.com/RhPYhVRYJbH3t",
    tags: ["ActivePieces", "AI Chat", "JSON Prompts", "Netlify"],
    learnings: [
      "JSON-formatted prompts guide AI to follow a consistent output structure every time",
      "ActivePieces supports JSON output format, making it easy to automate and integrate workflows",
      "Structured prompting dramatically reduces hallucination and improves reliability",
    ],
  },
  {
    id: "chantradhe",
    title: "Chantradhe",
    subtitle: "Community Donation Platform",
    badge: "Weekend Build",
    emoji: "🪔",
    description:
      "A fully responsive community website built in a single weekend. Features a donation tracking system with mock data, deployed live at chantradhe.com using Bolt + Supabase.",
    url: "https://chantradhe.com",
    screencast: "https://app.screencast.com/xYntHL2nm2G6K",
    tags: ["Bolt", "Supabase", "Claude", "Gemini", "Responsive"],
    learnings: [
      "Built and deployed a fully responsive site in a single weekend",
      "Used Claude and Google Gemini together for content development",
      "Bolt's log console is a great debugging companion",
      "Supabase deployment in Bolt is much simpler than Replit",
      '"Make a plan, don\'t code" — asked Bolt to maintain a PRD to track all changes',
      "Used mock data while waiting for webhook approval to keep momentum",
    ],
  },
  {
    id: "erp-digest",
    title: "ERP Digest",
    subtitle: "Parent Complaint Tracker",
    badge: "Course Exercise",
    emoji: "📋",
    description:
      "A centralized complaint management website for working busy parents. Tracks issue status through a clean dashboard. Also used as a testbed for audio prompting — describing a dishwasher issue by voice to see if Google Stitch could generate mock screens.",
    url: "https://melodious-platypus-dbdd8a.netlify.app",
    screencast: "https://app.screencast.com/ixY2cQjuSeMD4",
    demoCredentials: {
      trackingId: "CMP-A1B2C3D4",
      username: "anuv_follow@live.com",
    },
    googleStitch: "https://youtu.be/ak3JjKNxudM",
    tags: ["Netlify", "Audio Prompts", "Google Stitch", "AI UX"],
    learnings: [
      "Tested audio prompting (voice description of a dishwasher issue) to evaluate AI's ability to generate mock screens",
      "Google Stitch exploration: can a verbal problem description produce UI mockups?",
      "Multi-modal prompting opens new doors for rapid prototyping",
    ],
  },
];

export type AIExperiment = (typeof aiExperiments)[0];
