export type Block =
  | { type: "text"; content: string }
  | { type: "heading"; content: string }
  | { type: "image"; src: string; caption?: string; alt?: string }
  | { type: "video"; url: string; caption?: string }
  | { type: "quote"; text: string; attribution?: string }
  | { type: "divider" }

export type Section = {
  title?: string
  blocks: Block[]
}

export type Project = {
  id: string
  title: string
  company: string
  image: string
  description: string
  tags: string[]
  role: string
  year: string
  bullets?: string[]
  sections?: Section[]
}

export const projects: Project[] = [
  {
    id: "servicenow-uex",
    title: "ServiceNow — Employee Experience",
    company: "ServiceNow · San Jose, CA",
    image: "/images/projects/servicenow-uex.png",
    description:
      "AI-native conversational employee experience design — Employee Works and Move Works",
    tags: ["AI", "Conversational UI", "Enterprise"],
    role: "Staff Product Designer — Unified Employee Experience",
    year: "Oct 2024 – Present",
    bullets: [
      "Transitioned to UEX to lead AI-native employee experience design, bringing cross-product perspective.",
      "Shipped Employee Works — a conversational chat-based employee experience within catalog authoring constraints.",
      "Leading design for Move Works catalog experience.",
    ],
    sections: [
      {
        title: "Overview",
        blocks: [{ type: "text", content: "Add your overview here..." }],
      },
      {
        title: "Challenge",
        blocks: [
          { type: "text", content: "Describe the challenge you faced..." },
          {
            type: "quote",
            text: "Add a key insight or quote here.",
            attribution: "Source",
          },
        ],
      },
      {
        title: "Process",
        blocks: [
          { type: "text", content: "Walk through your design process..." },
          {
            type: "image",
            src: "/images/projects/servicenow-uex.png",
            caption: "Caption for this image",
          },
        ],
      },
      {
        title: "Outcome",
        blocks: [
          { type: "text", content: "Describe the impact and results..." },
        ],
      },
    ],
  },
  {
    id: "servicenow-wsd",
    title: "ServiceNow — Workplace Service Delivery",
    company: "ServiceNow · San Jose, CA",
    image: "/images/projects/servicenow-wsd.png",
    description:
      "Map Studio, Reservation Management, and workplace planning — from launch to $3B enterprise platform",
    tags: ["Enterprise", "Workplace", "Mobile"],
    role: "Staff Product Designer — Workplace Service Delivery",
    year: "Apr 2019 – Oct 2024",
    bullets: [
      "First designer on the WSD team; scaled product from initial market adoption (2020) to mature enterprise platform (2024).",
      "Contributed to Employee Workflows business — ~29% of total ACV (~$3B of $11B revenue in 2024).",
      "Led end-to-end design for Map Studio and Reservation Management — 49% customer install rate, 31% active usage for Reservation Management; 47% for Indoor Mapping.",
      "Designed workplace planning features supporting six-figure ACV ($100K–$750K) enterprise sales and expansions.",
      "Shipped Map Studio as part of the Mapwize acquisition, bringing map and reservation experiences to desktop and mobile.",
    ],
    sections: [
      {
        title: "Overview",
        blocks: [{ type: "text", content: "Add your overview here..." }],
      },
      {
        title: "Challenge",
        blocks: [
          { type: "text", content: "Describe the challenge you faced..." },
          {
            type: "quote",
            text: "Add a key insight or quote here.",
            attribution: "Source",
          },
        ],
      },
      {
        title: "Process",
        blocks: [
          { type: "text", content: "Walk through your design process..." },
          {
            type: "image",
            src: "/images/projects/servicenow-wsd.png",
            caption: "Caption for this image",
          },
        ],
      },
      {
        title: "Outcome",
        blocks: [
          { type: "text", content: "Describe the impact and results..." },
        ],
      },
    ],
  },
  {
    id: "google-emoney",
    title: "Google eMoney",
    company: "Filter (Consulting for Google) · Mountain View, CA",
    image: "/images/projects/google.png",
    description:
      "Consumer payment platform enabling users to add preferred payment methods across YouTube and Google Play",
    tags: ["Mobile", "Payments", "Google"],
    role: "Senior UX Designer",
    year: "Aug 2018 – Apr 2019",
    bullets: [
      "Designed consumer payment platform enabling users to add preferred payment methods across YouTube and Google Play.",
      "Contributed to industry-wide protocol to keep users safe across the Google ecosystem.",
    ],
  },
  {
    id: "paypal-partner",
    title: "PayPal Partner Servicing",
    company: "Cognizant Technology Solutions (PayPal) · San Jose, CA",
    image: "/images/projects/paypal.png",
    description:
      "Servicing portal for PayPal Partners with real-time merchant activity and aggregated business insights",
    tags: ["Dashboard", "B2B", "PayPal"],
    role: "Senior Associate UX Designer",
    year: "Aug 2016 – Aug 2018",
    bullets: [
      "Designed the servicing portal for PayPal Partners, including real-time merchant activity and aggregated business insights reporting.",
    ],
  },
  {
    id: "chase-payments",
    title: "Chase Personal Banking",
    company: "JPMorgan Chase (Contract) · San Francisco, CA",
    image: "/images/projects/chase.png",
    description:
      "Responsive redesign of Chase Personal Banking payments website and next-generation mobile payment concepts",
    tags: ["Web", "Mobile", "Payments"],
    role: "UX Designer",
    year: "Oct 2014 – May 2016",
    bullets: [
      "Led responsive redesign of the Chase Personal Banking payments website.",
      "Designed next-generation payment concepts for Chase Mobile.",
    ],
  },
  {
    id: "wallyhome",
    title: "Wallyhome",
    company: "Graduate Project · University of Washington",
    image: "/images/projects/wallyhome.png",
    description:
      "Smart home sensor dashboard with improved installation and monitoring experience",
    tags: ["IoT", "Dashboard", "Graduate"],
    role: "UX Designer (MS HCDE Graduate Project)",
    year: "2013",
    bullets: [
      "Redesigned the setup and monitoring experience for Wallyhome's smart home sensor system.",
      "Focused on first-time user onboarding and daily dashboard interaction.",
    ],
  },
]
