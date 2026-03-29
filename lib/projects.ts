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
  images?: string[]           // organized subfolder images
  description: string
  challenge?: string          // one-line challenge statement for fashion page
  tags: string[]
  role: string
  year: string
  era?: string                // human-readable era label e.g. "8+ years ago"
  bullets?: string[]
  sections?: Section[]
}

export const projects: Project[] = [
  {
    id: "servicenow-uex",
    title: "ServiceNow — Employee Experience",
    company: "ServiceNow · San Jose, CA",
    image: "/images/projects/servicenow-uex/cover.png",
    images: [
      "/images/projects/servicenow-uex/cover.png",
      "/images/projects/servicenow-uex/motion.png",
    ],
    era: "Current",
    challenge:
      "How might AI capture employee intent and orchestrate complex enterprise workflows without requiring navigation?",
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
    image: "/images/projects/servicenow-wsd/cover.png",
    images: ["/images/projects/servicenow-wsd/cover.png"],
    era: "2019 – 2024",
    challenge:
      "Building an enterprise workplace platform from the ground up — from zero to $3B, as the team's first designer.",
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
    title: "Google Payments Platform",
    company: "Filter (Consulting for Google) · Mountain View, CA",
    image: "/images/projects/google-emoney/cover.png",
    images: [
      "/images/projects/google-emoney/cover.png",
      "/images/projects/google-emoney/mobile-01.png",
      "/images/projects/google-emoney/mobile-02.png",
      "/images/projects/google-emoney/mobile-03.png",
      "/images/projects/google-emoney/mobile-04.png",
      "/images/projects/google-emoney/mobile-05.png",
      "/images/projects/google-emoney/mobile-06.png",
      "/images/projects/google-emoney/psd2-01.png",
      "/images/projects/google-emoney/psd2-02.png",
      "/images/projects/google-emoney/psd2-03.png",
      "/images/projects/google-emoney/psd2-04.png",
    ],
    era: "7 – 8 years ago",
    challenge:
      "The Payments Platform UX team's goal was to provide Google users with their preferred payment method anywhere in the world. The team worked across 500+ forms of payments, 204 locales, and 1.4 billion people, working closely with Google partners to add new payment methods to their purchase flows.",
    description:
      "Two projects on Google's Payments Platform: eMoney (adding Japan eMoney payment types to GPay across YouTube and Play) and PSD2 Risk Based Authentication (European payment security and fraud prevention protocol 3DS2.0).",
    tags: ["Mobile", "Payments", "Google"],
    role: "Senior UX Designer — Payments Platform UX team",
    year: "Aug 2018 – Apr 2019",
    bullets: [
      "Designed eMoney payment flows for Japan users across YouTube and Play — $46M in incremental revenue.",
      "Designed PSD2 3DS2.0 risk-based authentication experience across 6+ Google products — influenced the industry standard for European payment security guidelines.",
      "Met with industry peers from Microsoft and Sony to help define 3DS2.n guidelines for emerging IoT devices like smart TV.",
    ],
    sections: [
      {
        title: "eMoney — Background",
        blocks: [
          {
            type: "text",
            content:
              "eMoney is a contactless payment system unique to Japan utilizing Felica technology, available in both physical card and mobile formats. User balances are stored on a chip within the mobile device.\n\nThe Payments Platform UX team's goal: make sure customers can add and use their favorite payment method with Google Pay. The team worked across 500+ forms of payments, 204 locales, and 1.4 billion people.",
          },
          {
            type: "heading",
            content: "Why eMoney?",
          },
          {
            type: "text",
            content:
              "Japan is the #1 Google Play market by expenditure. Approximately 60% of Japanese users wanted eMoney capability for digital purchases. Users could earn loyalty points through eMoney transactions in Google Play. The infrastructure was already established — roughly 2 million Felica terminals across Japan — and eMoney cards were already prevalent in user wallets.\n\nGoal: add eMoney payment types (Rakuten Edy, WAON, Suica, Nanaco) to GPay so users can make purchases on Google partners like Play and YouTube.",
          },
        ],
      },
      {
        title: "eMoney — Project Challenges",
        blocks: [
          {
            type: "text",
            content:
              "I was brand new — my design teammates were on a research trip. Deadline: 3 weeks. I iterated closely with a Content Strategist and Payments PM, and met weekly with designers and PMs from YouTube, Play, and Payments Engineering.",
          },
          {
            type: "heading",
            content: "Three Design Constraints",
          },
          {
            type: "text",
            content:
              "1. Terms of Service placement varied between apps — sometimes visible under the payment method selector, other times buried behind a link.\n\n2. New Payment Profile placement differed across apps, with field ordering dependent on partner requirements.\n\n3. Co-branding requirements were inconsistent — Google branding sometimes appeared with ToS and sometimes was restricted to specific areas.",
          },
        ],
      },
      {
        title: "eMoney — Design Choices",
        blocks: [
          {
            type: "text",
            content:
              "Solution: Separate Partner ToS from Payment + Service Provider ToS by introducing Co-Branding. Designed two options — ToS on a new page with Co-Branding, and Inline ToS.\n\nPlay partner guidelines restricted where GPay Branding occurs within the Play app (only at Checkout), requiring a different approach than YouTube.",
          },
          {
            type: "heading",
            content: "Two Core Use Cases",
          },
          {
            type: "text",
            content:
              "Use Case 1 — Existing Google Pay Association: Users who previously associated eMoney in the Google Pay app had already accepted the service provider's terms. They only needed to accept Google Pay's Payments Privacy ToS in YouTube and Play before purchasing.\n\nUse Case 2 — First-Time eMoney Association: Users associating eMoney for the first time required acceptance of both the service provider's and Google Pay's terms before transacting.",
          },
          {
            type: "heading",
            content: "Google Play User Journeys",
          },
          {
            type: "text",
            content:
              "Existing Billing Customer: Select Rakuten Edy → review and agree to ToS → balance displays in 1-Tap Buy screen → purchase with latency messaging at 3-second intervals.\n\nNew Billing Customer: Add payment method → ToS → input name and postal code → association loader (up to 8 seconds) → proceed to purchase.\n\nInsufficient Balance: eMoney disabled, system defaults to alternative payment methods.",
          },
          {
            type: "image",
            src: "/images/projects/google-emoney/mobile-01.png",
            alt: "Google eMoney — YouTube payment flow",
            caption: "YouTube payment flow — new user eMoney association with co-branded ToS",
          },
          {
            type: "image",
            src: "/images/projects/google-emoney/mobile-03.png",
            alt: "Google eMoney — Play payment flow",
            caption: "Google Play payment flow — inline ToS per Play branding guidelines",
          },
        ],
      },
      {
        title: "eMoney — Summary and Impact",
        blocks: [
          {
            type: "text",
            content:
              "Adapted to process constraints. Developed strong cross-functional relationships. Turned design complexity into simplicity.\n\neMoney is now available for Japan users — $46M in incremental revenue and increased spend for Play customers.",
          },
        ],
      },
      {
        title: "PSD2 — Risk Based Authentication",
        blocks: [
          {
            type: "text",
            content:
              "European Payments Service Directive PSD2 — payment security and fraud prevention protocol 3DS2.0. The goal was to give Google users a safer, secure way to transact with scalable authentication. Protect the good user, present hard challenges to the bad user.",
          },
          {
            type: "text",
            content:
              "3DS2.0 is a way to provide security to online card transactions. The project would: Build Trust (build the strongest security technologies into our products), be Compliant with European laws (strict user protection laws), and Innovate (lead by example to advance online security for all — PayPal, Apple, Amazon, Microsoft). More data for the issuer to combat fraud and reduce false positives, with the advantage for Google of shifting the liability to the issuer.",
          },
        ],
      },
      {
        title: "PSD2 — Challenges",
        blocks: [
          {
            type: "text",
            content:
              "Understanding the EMVCo (EuroPay Master Visa Consortium) 3-D Secure Protocol specification. Understanding the suite of risk challenges. Deadline: 2 weeks for conceptual mocks involving 6+ Google products across Native, mWeb, and Web.",
          },
          {
            type: "text",
            content:
              "Designed new standardised 3D Secure challenges to authenticate directly with the Issuer bank: OTP (verify by phone and/or email), Security questions (tighter security), and Out of band (redirect to bank app — fingerprint, FaceID). The new 3DS2.0 experience included Issuer bank + Card network branding zone, Challenge/processing zone, and Help/information zone.",
          },
        ],
      },
      {
        title: "PSD2 — User Journeys",
        blocks: [
          {
            type: "text",
            content:
              "Created OTP risk challenge experiences across the ecosystem for: Play Cart buy flow, GPay P2P, 3P Native buy flow, 3P mWeb buy flow, 3P Web buy flow, and Cloud signup for free trial. Designed Android OS UX/UI including single select, multi select, out of band, HTML/mobile web, loading screen, and text input with OTP auto-fill on Android.",
          },
        ],
      },
      {
        title: "PSD2 — Summary and Impact",
        blocks: [
          {
            type: "text",
            content:
              "Consolidated purchase flows, brought buy-in from product teams and influenced 3DS2.0 guidelines. Met with industry peers from Microsoft and Sony to help define 3DS2.n guidelines for emerging IoT devices like smart TV. Influenced the industry standard for European payment security guidelines. Q3 2019 3DS2.0 Launch.",
          },
        ],
      },
    ],
  },
  {
    id: "paypal-partner",
    title: "PayPal Partner Servicing",
    company: "Cognizant Technology Solutions (PayPal) · San Jose, CA",
    image: "/images/projects/paypal-partner/cover.png",
    images: [
      "/images/projects/paypal-partner/cover.png",
      "/images/projects/paypal-partner/slide-01.png",
      "/images/projects/paypal-partner/slide-02.png",
      "/images/projects/paypal-partner/slide-03.png",
      "/images/projects/paypal-partner/slide-04.png",
      "/images/projects/paypal-partner/slide-05.png",
      "/images/projects/paypal-partner/pres-01.png",
      "/images/projects/paypal-partner/pres-02.png",
      "/images/projects/paypal-partner/pres-03.png",
      "/images/projects/paypal-partner/pres-04.png",
      "/images/projects/paypal-partner/pres-05.png",
    ],
    era: "8 – 10 years ago",
    challenge:
      "Partners had to use multiple tools and channels to resolve issues and manage their business, causing significant operational overhead and delays. Support and issue resolution took too long because of manual and offline processes. Partners had no way to proactively monitor their business with PayPal or take action to mitigate risks.",
    description:
      "Design of the new servicing experience for PayPal Partners. The goal was to increase Partner satisfaction by providing self-service tools, enable Partners to manage their business effectively through merchant activity dashboards and notifications, and help Partners grow their business with Data and Insights.",
    tags: ["Dashboard", "B2B", "PayPal"],
    role: "Hybrid designer: Interaction + Visual design. Solution discovery, Feature prioritization with 3-in-a-box team, Usability study learnings based design iterations, Delivery of design assets.",
    year: "Aug 2016 – Aug 2018",
    bullets: [
      "Conducted partner interviews across NA and EMEA to define the servicing experience.",
      "Designed the servicing portal with real-time merchant activity dashboards, business insights, and notifications for two target personas.",
    ],
    sections: [
      {
        title: "Overview",
        blocks: [
          {
            type: "text",
            content:
              "A PayPal Partner is a service/solutions provider that helps facilitate payments between merchants (SMBs) and their customers. Partners processing millions of daily transactions faced inefficient manual processes — support teams logged tickets separately for transaction errors, tech teams troubleshot API issues using third-party sites, and business reports arrived as static PDFs, preventing finance and operations teams from analyzing PayPal data effectively.\n\nGoal: increase Partner satisfaction by providing self-service tools, merchant activity dashboards, notifications, and business insights.",
          },
        ],
      },
      {
        title: "My Role",
        blocks: [
          {
            type: "text",
            content:
              "Hybrid designer: Interaction + Visual design. Part of 3-in-a-box team (Product, Design, Engineering) across solution discovery, problem definition, concept prototyping, feature validation, usability testing, design iteration, and production-ready UI specifications.",
          },
        ],
      },
      {
        title: "Challenges",
        blocks: [
          {
            type: "text",
            content:
              "Feature definition scoping for Beta. Data visualization responsiveness. Designing as foundation patterns were getting defined. Partner recruitment based on user roles for usability study.",
          },
        ],
      },
      {
        title: "Research — Partner Interviews",
        blocks: [
          {
            type: "text",
            content:
              "We conducted partner interviews across NA and EMEA. Key findings:",
          },
          {
            type: "quote",
            text: "We have no clarity today about how our TPV and Revenue Share is distributed across North America and United Kingdom. We want to slice-n-dice our TPV and Revenue Share numbers across Geography and Time, and drill-down to see the next level.",
            attribution: "Shopify",
          },
          {
            type: "quote",
            text: "We power over 30% of all commerce sites but as we are open source we do not have the ability to record & track all clients. Anything you can offer to help us in this space is hugely valuable to us.",
            attribution: "Woo",
          },
          {
            type: "quote",
            text: "We have many PayPal products integrated & if I am not sure what product is best for certain clients, how is my customer supposed to know as well?",
            attribution: "BigCommerce",
          },
          {
            type: "text",
            content:
              "Partners had to use multiple tools and channels to resolve issues and manage their business, causing significant operational overhead and delays. Support and issue resolution took too long because of manual and offline processes necessitated due to lack of data with partners. Partners had no way to proactively monitor their business with PayPal and take action to mitigate risks. Partners did not have reports or insights on their key business performance KPIs.",
          },
          {
            type: "image",
            src: "/images/projects/paypal-partner/slide-05.png",
            alt: "PayPal Partner — Research insights from partner interviews",
            caption: "Research insights from partner interviews across NA and EMEA",
          },
        ],
      },
      {
        title: "Target Personas",
        blocks: [
          {
            type: "text",
            content:
              "Six partner personas were identified through research across NA and EMEA:\n\n**Executives** (CxO / VP Finance / VP Sales) — Revenue forecasts, transaction volume, merchant growth, buyer payment methods.\n\n**Finance** (Analyst / VP Finance / CFO) — Revenue share trends, PayPal product revenue correlations, buyer-to-revenue relationships.\n\n**Operations** (Sales Ops / Sales Analyst) — Active merchants, high-revenue merchant types, at-risk merchant churn, benchmarking.\n\n**Marketing** (Director / VP Marketing / CMO) — Cross-border trade, volume and revenue maximization, buyer demographics.\n\n**Tech Teams** (CTO / Engineering Managers) — PayPal integration docs, roadmap resources, maintenance materials.\n\n**Support** (Support Engineer / Director) — Onboarding and contract signup questions, general support inquiries.",
          },
        ],
      },
      {
        title: "Design — Partner Servicing Experience",
        blocks: [
          {
            type: "text",
            content:
              "Designed mobile and web views for both personas. Curtis's summary page shows key financial metrics, regional performance, and benchmarking against peers. Amber's summary page focuses on transactions, API error rates, and new merchants, with a notifications system for new system alerts.",
          },
          {
            type: "image",
            src: "/images/projects/paypal-partner/slide-01.png",
            alt: "PayPal Partner — Merchant Activity Dashboards and Notifications",
            caption: "Merchant activity dashboards and notifications — real-time partner portal",
          },
          {
            type: "image",
            src: "/images/projects/paypal-partner/slide-02.png",
            alt: "PayPal Partner — Data and Insights",
            caption: "Data and Insights — helping partners grow their business",
          },
          {
            type: "image",
            src: "/images/projects/paypal-partner/slide-03.png",
            alt: "PayPal Partner — Partner ecosystem model",
            caption: "Partner ecosystem model — PayPal, Partner, SMB, Consumer",
          },
          {
            type: "image",
            src: "/images/projects/paypal-partner/slide-04.png",
            alt: "PayPal Partner — Partner types taxonomy",
            caption: "Partner types across Hosted, Installed, ERP/LE, Marketplaces and Solution Providers",
          },
        ],
      },
      {
        title: "Measurement",
        blocks: [
          {
            type: "text",
            content:
              "MVP goals: Mitigate losses and increase sales volume. Resolve issues faster, reduce customer friction. Make critical marketing, risk, and operational business decisions faster. Measurement included in-product feedback and beta partner interviews, with page instrumentation for usage analytics.",
          },
        ],
      },
    ],
  },
  {
    id: "botcentral",
    title: "BotCentral",
    company: "BotCentral · San Francisco, CA",
    image: "/images/projects/botcentral/cover.png",
    images: [
      "/images/projects/botcentral/cover.png",
      "/images/projects/botcentral/slide-01.png",
      "/images/projects/botcentral/slide-02.png",
    ],
    era: "8 – 10 years ago",
    challenge:
      "Identifying unmet needs of consumers in messenger bots. Brainstormed, Created quick mockups as sample design bots to pique the interest of developers visiting BotCentral.",
    description:
      "Design of BotCentral's developer facing portal with sample hi-fidelity chatbot mockups for Kate Spade, Airbnb, and Shopify.",
    tags: ["Conversational UI", "Mobile", "B2B"],
    role: "Created sample Hi-Fidelity mock-ups of Facebook messenger apps for Kate Spade's e-commerce product categories, Airbnb help queries from a guest and Daily analytics on top products, orders and sale information to Shopify users.",
    year: "2016",
    bullets: [
      "Created hi-fidelity Facebook Messenger bot mockups for Kate Spade, Airbnb, and Shopify to demonstrate conversational commerce to developers.",
      "Designed BotCentral's developer-facing portal experience.",
    ],
    sections: [
      {
        title: "Project",
        blocks: [
          {
            type: "text",
            content:
              "Design of BotCentral's developer facing portal, where developers could discover and build conversational applications for Facebook Messenger. Sample hi-fidelity mockups were created to demonstrate the potential of messenger bots to developers visiting the platform.",
          },
        ],
      },
      {
        title: "My Role",
        blocks: [
          {
            type: "text",
            content:
              "Created sample Hi-Fidelity mock-ups of Facebook messenger apps for Kate Spade's e-commerce product categories, Airbnb help queries from a guest and Daily analytics on top products, orders and sale information to Shopify users.",
          },
        ],
      },
      {
        title: "Challenges",
        blocks: [
          {
            type: "text",
            content:
              "Identifying unmet needs of consumers in messenger bots. Brainstormed, Created quick mockups as sample design bots to pique the interest of developers visiting BotCentral.",
          },
        ],
      },
      {
        title: "Design Work",
        blocks: [
          {
            type: "image",
            src: "/images/projects/botcentral/slide-01.png",
            alt: "BotCentral — Kate Spade Facebook Messenger bot mockup",
            caption: "Kate Spade Facebook Messenger bot — e-commerce browsing, product categories, and shopping flow",
          },
          {
            type: "image",
            src: "/images/projects/botcentral/slide-02.png",
            alt: "BotCentral — UX Laboratory",
            caption: "UX Laboratory Design Forum — lab-like environment for UX designers worldwide",
          },
        ],
      },
    ],
  },
  {
    id: "chase-payments",
    title: "Chase Personal Banking",
    company: "JPMorgan Chase (Contract) · San Francisco, CA",
    image: "/images/projects/chase-payments/cover.png",
    images: [
      "/images/projects/chase-payments/cover.png",
      "/images/projects/chase-payments/otp.png",
      "/images/projects/chase-payments/slide-01.png",
      "/images/projects/chase-payments/slide-02.png",
      "/images/projects/chase-payments/slide-03.png",
      "/images/projects/chase-payments/slide-04.png",
      "/images/projects/chase-payments/slide-05.png",
      "/images/projects/chase-payments/slide-06.png",
      "/images/projects/chase-payments/slide-07.png",
      "/images/projects/chase-payments/pres-01.png",
      "/images/projects/chase-payments/pres-02.jpg",
      "/images/projects/chase-payments/pres-03.png",
      "/images/projects/chase-payments/pres-04.jpg",
    ],
    era: "10 – 12 years ago",
    challenge:
      "Payment flow simplification. Scaling the payment form for all payment products. Identify and optimize payment input form entry and touch points.",
    description:
      "Chase Mobile app — redesign of Payments and Pay Bill flows, cardless ATM OTP, and responsive web payments for Credit Card and Auto-loan.",
    tags: ["Web", "Mobile", "Payments"],
    role: "UX Designer",
    year: "Oct 2014 – May 2016",
    bullets: [
      "Led responsive redesign of the Chase Personal Banking payments website.",
      "Designed next-generation payment and Pay Bill flows for Chase Mobile.",
      "Designed the cardless ATM One Time Passcode feature for iOS and Android.",
    ],
    sections: [
      {
        title: "Chase Mobile — Payments / Pay Bill",
        blocks: [
          {
            type: "text",
            content:
              "Chase Mobile app — Redesign of Payments and Pay Bill flows. Goal: simplify payment tasks for Chase native mobile app consumers within a newly evolving design platform.",
          },
          {
            type: "heading",
            content: "User Research",
          },
          {
            type: "quote",
            text: "Users are anxious when making a bill payment and are often uncertain whether a payment went through.",
          },
          {
            type: "text",
            content:
              "Research showed users felt the existing flow had too many steps. Design needed to work across multiple payment products: Merchant Bill Pay, Credit Card, Transfer, Auto Loan, and Mortgage.",
          },
          {
            type: "heading",
            content: "Design Solutions",
          },
          {
            type: "text",
            content:
              "Redesigned payment form as a component-based fluid design system with: consistent experience across all payment tasks, streamlined flow by reducing verify steps, enhanced error prevention, and a celebratory confirmation page with product education opportunities. Added timeline view for upcoming, pending, and past payments.",
          },
          {
            type: "heading",
            content: "Result",
          },
          {
            type: "text",
            content:
              "Influenced the design and launch of the streamlined Quick Pay feature.",
          },
          {
            type: "image",
            src: "/images/projects/chase-payments/slide-01.png",
            alt: "Chase Mobile — Scaling payment form across all products",
            caption: "Scaling the payment form across all payment products — Credit Card, Auto-loan, Merchant Bill, P2P",
          },
          {
            type: "image",
            src: "/images/projects/chase-payments/slide-02.png",
            alt: "Chase Mobile — P2P Payments before and after redesign",
            caption: "Peer to peer payments — simplified flow before and after redesign",
          },
          {
            type: "image",
            src: "/images/projects/chase-payments/slide-03.png",
            alt: "Chase Mobile — P2P Payments redesign annotated",
            caption: "Annotated redesign rationale — contact-first flow, streamlined amount entry, action sheet confirmation",
          },
        ],
      },
      {
        title: "Chase Mobile ATM — One Time Passcode",
        blocks: [
          {
            type: "heading",
            content: "Project",
          },
          {
            type: "text",
            content:
              "Chase mobile ATM — One time passcode. The goal of the design is to introduce a new way for Chase mobile app consumers to withdraw cash from a Chase eATM with just a one time passcode generated within the app.",
          },
          {
            type: "heading",
            content: "My Role",
          },
          {
            type: "text",
            content:
              "Interaction + Visual design. Collaborated with Product stakeholders. Iterated and delivered key screens for iOS and Android device layouts.",
          },
          {
            type: "heading",
            content: "Challenges",
          },
          {
            type: "text",
            content:
              "Multiple entry points — authenticated vs unauthenticated. New Product feature integration work with service limitations.",
          },
          {
            type: "image",
            src: "/images/projects/chase-payments/slide-04.png",
            alt: "Chase ATM OTP — First time user experience feature flow",
            caption: "First time user experience — generated 8-digit access code with countdown timer and nearby ATM locations",
          },
          {
            type: "image",
            src: "/images/projects/chase-payments/slide-05.png",
            alt: "Chase ATM OTP — Multiple entry points",
            caption: "Multiple entry points — login screen, account dashboard, hamburger nav, and locations screen",
          },
        ],
      },
      {
        title: "Chase Responsive Web — Credit Card / Auto-loan Payments",
        blocks: [
          {
            type: "heading",
            content: "Project",
          },
          {
            type: "text",
            content:
              "Responsive redesign of www.chase.com for Credit card and Auto-loan payments.",
          },
          {
            type: "heading",
            content: "My Role",
          },
          {
            type: "text",
            content:
              "Interaction designer — Worked with product stakeholders from distributed teams. Delivered key UX documentation — annotated wireframes for different device layouts.",
          },
          {
            type: "heading",
            content: "Challenges",
          },
          {
            type: "text",
            content:
              "UX Refresh: Create a seamless coherent, consistent experience in alignment with design principles: Simple, Human, Capable, Interoperable, Accessible. Work within API Service Limitations.",
          },
          {
            type: "image",
            src: "/images/projects/chase-payments/slide-06.png",
            alt: "Chase Responsive Web — Payment screens across device sizes",
            caption: "Responsive payment screens — consistent experience across desktop, tablet, and mobile",
          },
          {
            type: "image",
            src: "/images/projects/chase-payments/slide-07.png",
            alt: "Chase Responsive Web — Auto-loan payment",
            caption: "Auto-loan payment — responsive layout with payment input form",
          },
        ],
      },
    ],
  },
  {
    id: "chase-otp",
    title: "Chase ATM — One Time Passcode",
    company: "JPMorgan Chase (Contract) · San Francisco, CA",
    image: "/images/projects/chase-payments/otp.png",
    images: [
      "/images/projects/chase-payments/otp.png",
      "/images/projects/chase-payments/slide-04.png",
      "/images/projects/chase-payments/slide-05.png",
    ],
    era: "10 – 12 years ago",
    challenge:
      "Multiple entry points for the ATM OTP feature in both authenticated and unauthenticated scenarios — with service limitations constraining the integration.",
    description:
      "Designed a new way for Chase mobile app consumers to withdraw cash from a Chase eATM using an 8-digit one time passcode generated within the app — no debit card needed.",
    tags: ["Mobile", "iOS", "Android"],
    role: "Interaction + Visual Design — iOS and Android",
    year: "Oct 2014 – May 2016",
    bullets: [
      "Designed cardless ATM OTP feature covering 4 entry points and 8+ scenario flows for iOS and Android.",
      "Applied first-time user experience design principles validated by usability study.",
      "Chose bottom placement for OOBE card after user study found no clear winner — bottom had stronger dismissability.",
    ],
    sections: [
      {
        title: "Overview",
        blocks: [
          {
            type: "text",
            content:
              "The goal of the design was to introduce a new way for Chase mobile app consumers to withdraw cash from a Chase eATM with just an 8-digit one time passcode generated within the app — no debit card needed.\n\nI worked on the Interaction and Visual design, collaborating with product stakeholders and iterating key screens for both iOS and Android.",
          },
        ],
      },
      {
        title: "Challenge — Multiple Entry Points",
        blocks: [
          {
            type: "text",
            content:
              "The main challenge was handling multiple entry points in both authenticated and unauthenticated scenarios:",
          },
          {
            type: "text",
            content:
              "Entry point #1 — OOBE Card: \"New for you!\" card showcasing the OTP feature.\n\nEntry point #2 — Side menu Find ATM List Item: User taps on the side menu to find ATMs.\n\nEntry point #3 — Get ATM Access Code Text Link: User taps on the link from the account dashboard.\n\nEntry point #4 — Login screen ATM and Branch link: Unauthenticated and unenrolled scenario.",
          },
          {
            type: "image",
            src: "/images/projects/chase-payments/slide-05.png",
            alt: "Chase ATM OTP — multiple entry points",
            caption: "Four entry points — login screen, account dashboard, hamburger nav, and locations screen",
          },
        ],
      },
      {
        title: "First Time User Experience",
        blocks: [
          {
            type: "text",
            content:
              "The success of a new feature depends on effectively communicating it while minimizing disruption. These design principles provided a framework for using interstitials sparingly:",
          },
          {
            type: "quote",
            text: "Don't show and tell. Let the users play. Always allow users to dismiss. Make it brief.",
          },
          {
            type: "text",
            content:
              "Scenarios covered:\n• User restarted the app (TouchID + step-up password auth, ID + password auth)\n• User backgrounded the app (code in-session, code expired)\n• Alerts based on app settings (location services enabled, availability of cardless ATM)\n• Alerts based on profile eligibility (jailbroken device, user account closed)",
          },
          {
            type: "image",
            src: "/images/projects/chase-payments/slide-04.png",
            alt: "Chase ATM OTP — first time user experience",
            caption: "First time experience — generated 8-digit access code with countdown timer and nearby ATM locations",
          },
        ],
      },
      {
        title: "User Study",
        blocks: [
          {
            type: "text",
            content:
              "We ran a user study to understand preference between two prototype approaches for discoverability of the new ATM access code feature.",
          },
          {
            type: "text",
            content:
              "Prototype #1 — \"Get ATM Access Code\" is one extra tap away when tapping Find ATM/Branch from the side menu.\n\nPrototype #2 — \"Get ATM Access Code\" is grouped under ATM/Branch options from the side menu and one less click to access the new feature.",
          },
          {
            type: "text",
            content:
              "Key learnings:\n• Preference was split on bottom placement vs. top inline with the conversation deck.\n• Primary reason for preferring bottom placement: ability to dismiss the OOBE.\n• Primary reason for preferring top placement: it did not look like a pop-up.\n\nWe chose bottom placement after usability study validation — no clear winner, but bottom placement was also most feasible in the 1-month pilot development effort.",
          },
        ],
      },
    ],
  },
  {
    id: "wallyhome",
    title: "Wallyhome",
    company: "Snupi Technologies (WallyHome) · San Francisco, CA",
    image: "/images/projects/wallyhome/cover.png",
    images: [
      "/images/projects/wallyhome/cover.png",
      "/images/projects/wallyhome/slide-01.png",
      "/images/projects/wallyhome/slide-02.png",
      "/images/projects/wallyhome/slide-03.png",
      "/images/projects/wallyhome/slide-04.png",
      "/images/projects/wallyhome/pres-01.png",
      "/images/projects/wallyhome/pres-02.png",
    ],
    era: "13 years ago",
    challenge:
      "2 person UX team in a fast paced start up environment. Hub+Sensor System installation, System Usage, System management.",
    description:
      "Design a brand new experience for the wallyhome hub and sensor system that provides insights into the health of home allowing homeowners to monitor temperature, moisture and humidity.",
    tags: ["IoT", "Dashboard", "Mobile"],
    role: "Interaction designer, User studies. Delivered Responsive design of Wallyhome Dashboard and account settings pages.",
    year: "Jun 2014 – Oct 2014",
    bullets: [
      "Designed the responsive dashboard and account settings for WallyHome's hub and sensor system.",
      "Conducted user studies to inform onboarding and system management flows.",
    ],
    sections: [
      {
        title: "Overview",
        blocks: [
          {
            type: "text",
            content:
              "Wallyhome is a hub and sensor system that monitors temperature, moisture, and humidity in homes. The technology uses existing house wiring as an antenna, enabling sensors to last 10+ years on battery power.\n\nI joined Snupi Technologies as part of a small 2-person UX team, working alongside content, hardware, software engineers, and the co-founder/VP of Marketing to ship the first product launch.",
          },
        ],
      },
      {
        title: "My Role",
        blocks: [
          {
            type: "text",
            content:
              "UX Designer — Interaction design and user research. Delivered the responsive dashboard, account settings, onboarding, and system management experiences.",
          },
        ],
      },
      {
        title: "Research Process",
        blocks: [
          {
            type: "text",
            content:
              "Applied a User Centered Design process across multiple research phases:\n\nRounds 1–2: User interviews (phone) and online surveys to understand pain points.\n\nRounds 3–4: In-home and remote usability testing focused on dashboard learnability, ease of use, content, alerts, and account settings.",
          },
          {
            type: "heading",
            content: "Key Findings from Beta Testing",
          },
          {
            type: "text",
            content:
              "64% of users reported issues with Wally, primarily sensor communication failures. Most users found switching to the mobile app easy or very easy.\n\n100% of users receiving disconnect alerts felt adequately notified.\n\nUsers wanted sensor signal strength visibility, data download capabilities, and manual threshold input. Some users were concerned about accidentally moving sensors and wanted adhesion guidance.",
          },
        ],
      },
      {
        title: "Challenges",
        blocks: [
          {
            type: "text",
            content:
              "2-person UX team in a fast-paced startup environment. Key design challenges: Hub + Sensor System installation, System Usage flows, and System Management.",
          },
        ],
      },
      {
        title: "Design Work",
        blocks: [
          {
            type: "image",
            src: "/images/projects/wallyhome/slide-01.png",
            alt: "WallyHome Dashboard — sensor cards with temperature and humidity readings",
            caption: "Dashboard — sensor cards showing temperature and humidity across home locations",
          },
          {
            type: "image",
            src: "/images/projects/wallyhome/slide-02.png",
            alt: "WallyHome Onboarding — Plan of Attack location selection",
            caption: "Onboarding — Plan of Attack: guided sensor location selection flow",
          },
          {
            type: "image",
            src: "/images/projects/wallyhome/slide-03.png",
            alt: "WallyHome — System management screens",
            caption: "System management and account settings",
          },
          {
            type: "image",
            src: "/images/projects/wallyhome/slide-04.png",
            alt: "WallyHome — Hub and sensor screens",
            caption: "Hub installation and sensor configuration",
          },
        ],
      },
      {
        title: "Outcomes",
        blocks: [
          {
            type: "text",
            content:
              "Research insights directly informed WallyHome's blog content, customer support troubleshooting documentation, first product launch preparation, and installation/setup user experience improvements. The study revealed strong value for vacation homes and multi-property owners.",
          },
        ],
      },
    ],
  },
  {
    id: "motion-design",
    title: "Motion Design Explorations",
    company: "PayPal · San Jose, CA",
    image: "/images/projects/paypal.png",
    images: ["/images/projects/paypal.png"],
    era: "8 – 10 years ago",
    challenge:
      "PayPal's merchant onboarding experience was lengthy and complex. The challenge was to design micro-interactions that guide user attention and focus, making a multi-step setup flow feel simple and fast.",
    description:
      "Micro-interaction design for PayPal's merchant onboarding — exploring progressive reveal, accordion, and sequenced patterns to help merchants connect with PayPal through partner platforms like BigCommerce.",
    tags: ["Motion", "Onboarding", "PayPal"],
    role: "Motion/Interaction Designer — Prototyped in Framer",
    year: "2016",
    bullets: [
      "Designed micro-interactions to guide user attention during multi-step merchant onboarding.",
      "Explored three patterns — progressive reveal, accordion, and numbered/sequenced — selecting the accordion for its simplicity and engineering feasibility.",
      "Built a working prototype in Framer demonstrating the complete merchant signup flow.",
    ],
    sections: [
      {
        title: "The Problem",
        blocks: [
          {
            type: "text",
            content:
              "Merchant 'Amanda' owns a florist business and needs to connect with PayPal through a partner platform (BigCommerce) to process transactions. She faces a lengthy, complex setup process with multiple steps.\n\nGoal: create a simple one-page flow to help merchants like Amanda quickly connect with PayPal and receive funds faster.",
          },
        ],
      },
      {
        title: "Design Patterns Explored",
        blocks: [
          {
            type: "heading",
            content: "Progressive Reveal",
          },
          {
            type: "text",
            content:
              "An animated bar draws focus while content slides to reveal the next step with a single call-to-action button.",
          },
          {
            type: "heading",
            content: "Accordion",
          },
          {
            type: "text",
            content:
              "Collapsed rows show step completion; content slides upward to reveal subsequent steps with one primary action button.",
          },
          {
            type: "heading",
            content: "Numbered and Sequenced",
          },
          {
            type: "text",
            content:
              "Numbered icons indicate current position; animated checkmarks show completion with a side panel previewing previous steps.",
          },
        ],
      },
      {
        title: "Final Solution",
        blocks: [
          {
            type: "text",
            content:
              "Selected the accordion pattern variant — chosen for its simplicity and implementation feasibility. The flow accommodates country selection, email verification, and conditional business account information gathering.\n\nA working prototype was built in Framer demonstrating the complete merchant signup flow.",
          },
        ],
      },
    ],
  },
]
