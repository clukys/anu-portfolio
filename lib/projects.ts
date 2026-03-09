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
        blocks: [
          {
            type: "text",
            content:
              "Enterprise employee workflows — such as travel planning, workspace reservations, and approvals — often require navigating multiple systems, forms, and documents.\n\nAt ServiceNow, I explored how conversational AI could serve as an orchestration layer for these workflows. Instead of requiring employees to navigate complex interfaces, the goal was to allow users to begin with intent while the system dynamically assembles the necessary steps.\n\nThe result was a design exploration of AI-native employee experiences combining conversational interaction with structured UI components.",
          },
        ],
      },
      {
        title: "Problem",
        blocks: [
          {
            type: "text",
            content:
              "Enterprise workflows typically involve fragmented systems, repetitive data entry, multiple approval steps, and scattered documentation and policies. Even simple tasks — such as booking business travel — can require navigating several applications.",
          },
          {
            type: "quote",
            text: "How might AI capture user intent and guide employees through complex workflows while maintaining clarity and control?",
          },
        ],
      },
      {
        title: "Design Approach",
        blocks: [
          {
            type: "text",
            content:
              "I explored a hybrid interaction model where conversation captures intent, AI gathers missing context, and structured UI modules appear when decisions are required.",
          },
          { type: "heading", content: "Core Principles" },
          {
            type: "text",
            content:
              "Intent-first interaction — Users begin with goals rather than navigating menus.\n\nProgressive disclosure — Structured UI appears only when decision points require it.\n\nHuman-in-the-loop control — Users review and confirm actions before completion.\n\nConversation as orchestration — Dialogue coordinates multiple systems and workflow steps.",
          },
        ],
      },
      {
        title: "Example Scenario — AI-Assisted Travel Planning",
        blocks: [
          {
            type: "text",
            content:
              'A prototype explored how employees could plan business travel through a conversational interface.\n\n1. Intent — User begins: "Plan travel for next week\'s client meeting."\n\n2. Context Gathering — The system asks clarifying questions: destination, travel dates, meeting location.\n\n3. Structured UI Module — Once context is gathered, the conversation reveals a structured interface with flight options, itinerary preview, and travel policy checks.\n\n4. Contextual Information — Relevant policy guidelines, approval requirements, and supporting documentation appear inline.\n\n5. Review and Confirmation — The user reviews and confirms. The system completes the workflow while minimizing manual navigation.',
          },
        ],
      },
      {
        title: "Prototyping & Exploration",
        blocks: [
          {
            type: "text",
            content:
              "To explore these ideas I developed prototypes using narrative storyboards, usability testing scripts, conversational UI flows, and chat-based design system components.\n\nI also experimented with AI-assisted prototyping workflows (including Claude Code) to rapidly explore conversational interaction patterns.",
          },
        ],
      },
      {
        title: "Key Insights",
        blocks: [
          {
            type: "text",
            content:
              "Early testing revealed several patterns:\n\n• Users prefer starting with intent rather than navigation\n• Structured UI within conversation improves clarity\n• Minimal input flows reduce cognitive load\n• Contextual information prevents system switching",
          },
        ],
      },
      {
        title: "Outcome",
        blocks: [
          {
            type: "text",
            content:
              "This work demonstrates that conversational AI can significantly simplify complex enterprise workflows. The design patterns I developed — intent capture, progressive UI disclosure, and inline policy context — are now informing how ServiceNow thinks about AI-native experiences across the platform.\n\nEmployee Works shipped as a conversational chat-based employee experience, and the patterns are being applied to the Move Works catalog experience currently in flight.",
          },
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
        blocks: [
          {
            type: "text",
            content:
              "Joined ServiceNow as the first designer on the Workplace Service Delivery team in 2019 — a team building products that didn't yet exist in the market. Over five years, I scaled the product from early market adoption to a mature enterprise platform contributing to a $3B business unit.\n\nMy work spanned three major product areas: Map Studio (indoor mapping), Reservation Management, and Workplace Planning & Real Estate Forecasting.",
          },
        ],
      },
      {
        title: "Map Studio",
        blocks: [
          {
            type: "text",
            content:
              "Following the Mapwize acquisition, I led the design for Map Studio — a tool that lets enterprise customers build, manage, and publish indoor maps for their office spaces. This included both the desktop authoring experience and the employee-facing mobile map experience.",
          },
          { type: "heading", content: "Challenge" },
          {
            type: "text",
            content:
              "Mapwize had a powerful but developer-centric mapping tool. The challenge was making it accessible to workplace admins with no GIS or coding background — while preserving the precision enterprise customers needed for large, complex campuses.",
          },
          { type: "heading", content: "Outcome" },
          {
            type: "text",
            content:
              "Map Studio achieved a 47% active usage rate among installed customers — significantly above benchmark for an enterprise mapping product. The experience reduced map setup time and enabled admins to independently manage campus changes without engineering support.",
          },
        ],
      },
      {
        title: "Reservation Management",
        blocks: [
          {
            type: "text",
            content:
              "Designed end-to-end reservation experiences for desks, rooms, and amenities — covering both employee-facing booking flows and admin management tools.",
          },
          { type: "heading", content: "Challenge" },
          {
            type: "text",
            content:
              "Post-pandemic hybrid work transformed how employees use office space. Reservations needed to feel as easy as booking a ride — but had to accommodate complex enterprise policies: capacity limits, approval workflows, neighborhood assignments, and health attestations.",
          },
          { type: "heading", content: "Outcome" },
          {
            type: "text",
            content:
              "Reservation Management reached 49% customer install rate and 31% active usage — strong metrics for an enterprise module. The product directly supported six-figure ACV deals ($100K–$750K) and became a key driver in the Employee Workflows business.",
          },
        ],
      },
      {
        title: "Workplace Planning & Real Estate Forecasting",
        blocks: [
          {
            type: "text",
            content:
              "Designed forecasting and planning tools that help real estate and facilities teams make data-driven decisions about their portfolio — which offices to expand, consolidate, or close.",
          },
          { type: "heading", content: "Challenge" },
          {
            type: "text",
            content:
              "Workplace leaders were making million-dollar real estate decisions based on gut feel and spreadsheets. The challenge was designing a system that could surface utilization data, model future scenarios, and present recommendations in a way that non-technical stakeholders could act on.",
          },
          { type: "heading", content: "Outcome" },
          {
            type: "text",
            content:
              "The planning tools became key assets in enterprise sales cycles, enabling account teams to demonstrate ROI for large deals. Features supported expansions into accounts at the $100K–$750K ACV tier.",
          },
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
    sections: [
      {
        title: "Overview",
        blocks: [
          {
            type: "text",
            content:
              "As a Senior UX Designer embedded at Google through Filter, I worked on the eMoney platform — a consumer-facing system that unified how users add and manage payment methods across Google products including YouTube and Google Play.",
          },
        ],
      },
      {
        title: "Problem",
        blocks: [
          {
            type: "text",
            content:
              "Google's payment ecosystem had grown organically across products, creating an inconsistent experience. Users in key markets faced friction adding local payment methods, and the lack of a unified payment surface created trust and safety challenges.",
          },
          {
            type: "quote",
            text: "How do you design a payment experience that feels local and trustworthy across dozens of markets — while maintaining consistency across the Google ecosystem?",
          },
        ],
      },
      {
        title: "Process",
        blocks: [
          {
            type: "text",
            content:
              "I worked closely with Google's payments, legal, and trust & safety teams to map the full payment addition journey — from entry point across different Google products, through method selection, verification, and confirmation.\n\nThe work included deep research into local payment preferences and regulatory requirements, and collaboration on the industry-wide safety protocol.",
          },
        ],
      },
      {
        title: "Outcome",
        blocks: [
          {
            type: "text",
            content:
              "The eMoney platform shipped as a unified payment management experience across YouTube and Google Play. The safety protocol developed during this engagement contributed to Google's broader ecosystem approach to payment security, protecting users across multiple products.",
          },
        ],
      },
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
    sections: [
      {
        title: "Overview",
        blocks: [
          {
            type: "text",
            content:
              "Designed a self-service web portal for PayPal's partner network — financial institutions and merchants who integrate PayPal into their products. The portal gave partners real-time visibility into merchant activity and aggregated business performance data.",
          },
        ],
      },
      {
        title: "Problem",
        blocks: [
          {
            type: "text",
            content:
              "PayPal partners lacked a centralized way to monitor the merchants in their portfolio. They were working with fragmented data across multiple tools, making it difficult to spot issues, identify growth opportunities, or provide timely support to their merchants.",
          },
          {
            type: "quote",
            text: "Partners needed a single source of truth — a place to see their merchant portfolio at a glance and drill into what matters.",
          },
        ],
      },
      {
        title: "Process",
        blocks: [
          {
            type: "text",
            content:
              "I led the UX design from discovery through delivery — conducting stakeholder interviews with partner relationship managers to understand their daily workflows, designing information architecture for a complex data hierarchy, and iterating on dashboard layouts through usability testing.\n\nKey design challenges included handling variable data density across partner portfolio sizes and designing for both at-a-glance monitoring and deep-dive analysis.",
          },
        ],
      },
      {
        title: "Outcome",
        blocks: [
          {
            type: "text",
            content:
              "The partner portal consolidated data from multiple systems into a single interface, reducing the time partners spent context-switching between tools. Real-time merchant activity feeds and aggregated reporting gave partners the visibility they needed to proactively manage their portfolio and support merchant success.",
          },
        ],
      },
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
    sections: [
      {
        title: "Overview",
        blocks: [
          {
            type: "text",
            content:
              "Led the UX for a responsive redesign of Chase's Personal Banking payments web experience — a high-stakes surface used by millions of customers to pay bills, transfer money, and manage scheduled payments.\n\nAlso contributed concept design for next-generation mobile payment experiences.",
          },
        ],
      },
      {
        title: "Problem",
        blocks: [
          {
            type: "text",
            content:
              "Chase's payments website was built for desktop at a time when mobile usage was surging. The experience was complex and form-heavy, with a navigation model that didn't translate to smaller screens. Customers were abandoning payment tasks on mobile.",
          },
          {
            type: "quote",
            text: "Payments are one of the highest-trust interactions in banking. The redesign had to feel secure and familiar while being dramatically simpler to use.",
          },
        ],
      },
      {
        title: "Process",
        blocks: [
          {
            type: "text",
            content:
              "The project involved an audit of the existing experience across device types, followed by competitive analysis of payment UX patterns in banking and fintech. I designed responsive layout systems that preserved the trust signals customers associated with Chase while simplifying task flows for mobile contexts.\n\nFor the next-gen mobile concepts, I explored gesture-based payment flows and contextual notifications — bringing emerging interaction patterns to a conservative financial context.",
          },
        ],
      },
      {
        title: "Outcome",
        blocks: [
          {
            type: "text",
            content:
              "The redesigned payments experience improved mobile task completion and established responsive design standards that were adopted across Chase's digital banking product suite. The mobile payment concepts contributed to Chase's longer-term mobile roadmap.",
          },
        ],
      },
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
    sections: [
      {
        title: "Overview",
        blocks: [
          {
            type: "text",
            content:
              "My MS HCDE graduate project at the University of Washington — a redesign of Wallyhome's smart home sensor system. Wallyhome made leak detection sensors for home use, but the setup and monitoring experience made it difficult for non-technical users to get value from the product.",
          },
        ],
      },
      {
        title: "Problem",
        blocks: [
          {
            type: "text",
            content:
              "Wallyhome's existing setup flow required technical knowledge that most homeowners didn't have, leading to abandoned installations and underused sensors. The monitoring dashboard was data-dense but not actionable — users couldn't tell at a glance if their home was protected.",
          },
          {
            type: "quote",
            text: "If you can't tell at a glance that your home is protected, the sensor doesn't give you peace of mind — it gives you more to worry about.",
          },
        ],
      },
      {
        title: "Process",
        blocks: [
          {
            type: "text",
            content:
              "I conducted contextual inquiry sessions with homeowners in their homes — watching how they interacted with existing smart home products and talking through their concerns about water damage and home monitoring.\n\nKey insights informed the redesign: users wanted binary confidence (is my home safe right now?), not detailed sensor data. Installation needed to feel like setting up a coffee maker, not configuring a network device.",
          },
        ],
      },
      {
        title: "Outcome",
        blocks: [
          {
            type: "text",
            content:
              "The redesigned onboarding reduced installation steps and used plain-language guidance with visual feedback at each step. The monitoring dashboard led with a clear home status indicator, with detailed sensor data accessible as a secondary layer.\n\nThis project deepened my approach to designing for non-technical users — a principle that's carried through every enterprise product I've worked on since.",
          },
        ],
      },
    ],
  },
]
