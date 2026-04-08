export type ProjectTab = {
  id: string
  label: string
  comingSoon?: boolean
  description?: string
  role?: string
  year?: string
  challenge?: string
  image?: string
  images?: string[]
  bullets?: string[]
  sections?: Section[]
}

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
  images?: string[]
  description: string
  challenge?: string
  tags: string[]
  role: string
  year: string
  era?: string
  bullets?: string[]
  sections?: Section[]
  tabs?: ProjectTab[]
}

export const projects: Project[] = [
  {
    id: "servicenow",
    title: "ServiceNow",
    company: "ServiceNow · San Jose, CA",
    image: "/images/projects/servicenow-uex/cover.png",
    era: "2019 – Present",
    description:
      "From first designer on the Workplace Service Delivery team to AI-native Employee Experience — six years building enterprise workplace products at scale.",
    tags: ["AI", "Enterprise", "Conversational UI", "Workplace", "Mobile"],
    role: "Staff Product Designer",
    year: "Apr 2019 – Present",
    tabs: [
      {
        id: "uex",
        label: "Employee Experience",
        role: "Staff Product Designer — Unified Employee Experience",
        year: "Oct 2024 – Present",
        bullets: [
          "Shipped Employee Works — a conversational chat-based employee experience for enterprise employees, designed within the constraints of ServiceNow's catalog authoring system.",
          "Bridged the gap between AI capabilities and platform constraints — finding the interaction model that worked for employees without requiring catalog re-architecture.",
          "Led cross-functional design across product, engineering, and content, bringing a cross-product perspective from 5 years of WSD to the UEX team.",
        ],
        sections: [
          {
            title: "Overview",
            blocks: [
              {
                type: "text",
                content:
                  "Enterprise employee workflows — travel requests, equipment orders, onboarding tasks, approvals — typically require navigating multiple systems, forms, and policies. The promise of conversational AI is that employees could simply say what they need and the system handles the rest.\n\nAt ServiceNow, I transitioned to the Unified Employee Experience team to lead AI-native design for Employee Works — a shipped conversational experience — and to define what AI-first enterprise UX looks like at scale.",
              },
            ],
          },
          {
            title: "What Was Shipped — Employee Works",
            blocks: [
              {
                type: "text",
                content:
                  "Employee Works is a conversational chat-based employee experience — employees interact with a chat interface to request services, get answers, and complete workflows that would otherwise require navigating ServiceNow's catalog.\n\nThe core design challenge: make the experience feel AI-native and intent-driven while working within the constraints of ServiceNow's catalog authoring system. The catalog defines how services are structured — and redesigning it wasn't an option.",
              },
              {
                type: "quote",
                text: "How might AI capture employee intent and orchestrate complex enterprise workflows — without requiring navigation, and without breaking the catalog?",
              },
              {
                type: "text",
                content:
                  "My approach was a hybrid interaction model: conversation captures intent, AI gathers missing context through natural dialogue, and structured UI components surface only when a decision point requires it. The catalog serves as the backend engine — invisible to the employee, but powering everything.",
              },
            ],
          },
          {
            title: "Design Principles",
            blocks: [
              {
                type: "text",
                content:
                  "Intent-first — Employees start with what they need, not where to navigate.\n\nProgressive disclosure — Structured UI appears only at real decision points, not upfront as a form.\n\nHuman-in-the-loop — Employees review and confirm before the system acts. AI proposes, people decide.\n\nConversation as orchestration — A single chat thread can coordinate multiple systems, approvals, and fulfillment steps.",
              },
            ],
          },
          {
            title: "Cross-Functional Design Leadership",
            blocks: [
              {
                type: "text",
                content:
                  "Shipping Employee Works required working across a complex stakeholder landscape — product managers defining catalog scope, engineering teams with platform constraints, content designers shaping AI voice and tone, and accessibility requirements for enterprise deployment.\n\nI brought a unique perspective to the UEX team: five years designing WSD gave me deep knowledge of how employees actually use ServiceNow's workplace products. That context shaped how I framed the AI interaction model — not as a replacement for catalog-based workflows, but as a more natural way to enter them.",
              },
            ],
          },
          {
            title: "Current — Move Works",
            blocks: [
              {
                type: "text",
                content:
                  "Currently leading design for the Move Works catalog experience — designing the employee-facing interaction model for relocation and mobility workflows within the conversational UEX platform.\n\nMove Works represents the next application of the AI-native patterns established in Employee Works: intent-driven entry, progressive workflow orchestration, and structured UI at decision points.",
              },
            ],
          },
        ],
      },
      {
        id: "wsd",
        label: "Workplace Service Delivery",
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
      { id: "vision", label: "Vision & Strategy", comingSoon: true },
      { id: "presentations", label: "Presentations", comingSoon: true },
      { id: "ai-portfolio", label: "AI Portfolio", comingSoon: true },
      { id: "mentoring", label: "Mentoring", comingSoon: true },
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
          { type: "heading", content: "Google Play — User Flow Videos" },
          {
            type: "video",
            url: "/videos/google-emoney/Click_REdy_Play_Association_ExistingBillingProfile.m4v",
            caption: "Play Store — Existing Billing Customer: eMoney association flow",
          },
          {
            type: "video",
            url: "/videos/google-emoney/Click_REdy_Play_Association_NewBillingProfile.m4v",
            caption: "Play Store — New Billing Customer: first-time eMoney association",
          },
          { type: "heading", content: "YouTube App — User Flow Videos" },
          {
            type: "video",
            url: "/videos/google-emoney/Click_REdy_YT_Association_ExistingBillingProfile.m4v",
            caption: "YouTube App — Existing Billing Customer: eMoney association flow",
          },
          {
            type: "video",
            url: "/videos/google-emoney/Click_REdy_YT_Association_NewExistingBillingProfile.m4v",
            caption: "YouTube App — New Billing Customer: first-time eMoney association",
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
    id: "paypal",
    title: "PayPal",
    company: "Cognizant Technology Solutions (PayPal) · San Jose, CA",
    image: "/images/projects/paypal-partner/cover.png",
    era: "8 – 10 years ago",
    description:
      "Data and insights platform design for enterprise PayPal Partners — plus motion design explorations for merchant onboarding.",
    tags: ["Dashboard", "Data Visualization", "B2B", "Motion", "Onboarding"],
    role: "Interaction + Visual Designer",
    year: "Aug 2016 – Aug 2018",
    tabs: [
      {
        id: "partner",
        label: "Partner Servicing",
        role: "Hybrid designer: Interaction + Visual design — 3-in-a-box team",
        year: "Aug 2016 – Aug 2018",
        bullets: [
          "Designed a data and insights portal giving enterprise partners (Shopify, Woo, BigCommerce) real-time visibility into revenue share, transaction volume, and merchant activity.",
          "Led end-to-end design across solution discovery, feature scoping, usability testing, and production handoff as part of a 3-in-a-box team.",
          "Conducted partner interviews across NA and EMEA to define personas and surface the core insight: partners were making business decisions with no live data.",
        ],
        sections: [
          {
            title: "The Data Problem",
            blocks: [
              {
                type: "text",
                content:
                  "A PayPal Partner — like Shopify or BigCommerce — could process millions of transactions per day on behalf of thousands of merchants. Yet their visibility into that data was nearly zero.\n\nBusiness performance reports arrived as static PDFs. Finance teams couldn't slice revenue by geography or time. Operations had no way to identify at-risk merchants before they churned. Support teams logged issues manually across disconnected tools.\n\nThe goal: give partners self-service access to the data they needed to run their business — in real time.",
              },
            ],
          },
          {
            title: "Research — What Partners Said",
            blocks: [
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
                  "Interviews across NA and EMEA confirmed that partners had no proactive monitoring of their business with PayPal. Support and issue resolution took too long due to manual, offline processes. Critical business decisions — marketing, risk, operations — were being made without data.",
              },
              {
                type: "image",
                src: "/images/projects/paypal-partner/slide-05.png",
                alt: "PayPal Partner — Research insights from partner interviews",
                caption: "Research synthesis from partner interviews across NA and EMEA",
              },
            ],
          },
          {
            title: "Partner Personas",
            blocks: [
              {
                type: "text",
                content:
                  "Six partner personas were identified, each with distinct data needs:\n\n**Executives** (CxO / VP Finance / VP Sales) — Revenue forecasts, transaction volume, merchant growth, buyer payment methods.\n\n**Finance** (Analyst / VP Finance / CFO) — Revenue share trends, PayPal product revenue correlations, buyer-to-revenue relationships.\n\n**Operations** (Sales Ops / Sales Analyst) — Active merchants, high-revenue merchant types, at-risk merchant churn prediction, benchmarking.\n\n**Marketing** (Director / VP Marketing / CMO) — Cross-border trade volumes, buyer demographics, revenue maximization opportunities.\n\n**Tech Teams** (CTO / Engineering Managers) — PayPal integration docs, roadmap resources, API error monitoring.\n\n**Support** (Support Engineer / Director) — Merchant onboarding issues, account access, general support queries.",
              },
            ],
          },
          {
            title: "Design — Data and Insights",
            blocks: [
              {
                type: "text",
                content:
                  "The core of the platform was real-time data visualization — designed to be responsive across mobile and web, filterable by time period and geography, and actionable rather than just informational.\n\nKey views designed:\n\n**Summary Dashboard** — PayPal balance, revenue share, new merchants, and period-over-period trends at a glance.\n\n**Payment Volume Over Time** — Area charts showing TPV trends with in-country vs. cross-border breakdown.\n\n**What's Trending** — Category-level performance across verticals (Footwear, Fashion, Furniture) with 90-day forecasts.\n\n**Net Total Payment Volume** — Multi-dimensional breakdown by industry vertical, filterable by period.",
              },
              {
                type: "image",
                src: "/images/projects/paypal-partner/slide-02.png",
                alt: "PayPal Partner — Data and Insights mobile views",
                caption: "Data and Insights — real-time dashboards across Summary, Payment Volume, Trending, and Net TPV",
              },
              {
                type: "image",
                src: "/images/projects/paypal-partner/slide-01.png",
                alt: "PayPal Partner — Merchant Activity Dashboards and Notifications",
                caption: "Merchant activity dashboards and proactive notifications — API error alerts, account access issues",
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
            title: "Design Challenges",
            blocks: [
              {
                type: "text",
                content:
                  "Designing during feature definition — foundation patterns were still being established as I was building on top of them. Data visualization at responsive breakpoints required careful decisions about what to show at each screen size. Partner recruitment for usability studies had to account for six distinct roles with different data literacy levels.",
              },
            ],
          },
          {
            title: "Outcome",
            blocks: [
              {
                type: "text",
                content:
                  "MVP goals: mitigate losses and increase sales volume, resolve issues faster, reduce customer friction, and enable faster marketing, risk, and operational decisions.\n\nMeasured via in-product feedback, beta partner interviews, and page instrumentation. The self-service model replaced manual PDF reports and gave enterprise partners the live data infrastructure they needed to manage their business with PayPal.",
              },
            ],
          },
        ],
      },
      {
        id: "motion",
        label: "Motion Design",
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
              {
                type: "video",
                url: "/videos/paypal-partner/3.mp4",
                caption: "Customer experience journey map — Amanda's merchant onboarding story",
              },
            ],
          },
          {
            title: "Design Patterns Explored",
            blocks: [
              { type: "heading", content: "Progressive Reveal" },
              {
                type: "text",
                content:
                  "An animated bar draws focus while content slides to reveal the next step with a single call-to-action button.",
              },
              {
                type: "video",
                url: "/videos/paypal-partner/4.m4v",
                caption: "Progressive reveal pattern — animated bar brings focus and attention",
              },
              { type: "heading", content: "Accordion" },
              {
                type: "text",
                content:
                  "Collapsed rows show step completion; content slides upward to reveal subsequent steps with one primary action button.",
              },
              {
                type: "video",
                url: "/videos/paypal-partner/5.m4v",
                caption: "Accordion pattern — collapsed rows indicate completion of previous steps",
              },
              { type: "heading", content: "Numbered and Sequenced" },
              {
                type: "text",
                content:
                  "Numbered icons indicate current position; animated checkmarks show completion with a side panel previewing previous steps.",
              },
              {
                type: "video",
                url: "/videos/paypal-partner/6.m4v",
                caption: "Numbered and sequenced pattern — animated checkmarks and step preview",
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
              {
                type: "video",
                url: "/videos/paypal-partner/7.m4v",
                caption: "Final accordion solution — complete merchant signup flow",
              },
              {
                type: "video",
                url: "/videos/paypal-partner/8.m4v",
                caption: "Merchant onboarding — country selection and email verification",
              },
              {
                type: "video",
                url: "/videos/paypal-partner/9.mp4",
                caption: "Merchant onboarding — conditional business account information gathering",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "botcentral",
    title: "Facebook Messenger Bots — Early Conversational UI",
    company: "BotCentral · San Francisco, CA",
    image: "/images/projects/botcentral/cover.png",
    images: [
      "/images/projects/botcentral/cover.png",
      "/images/projects/botcentral/slide-01.png",
      "/images/projects/botcentral/slide-02.png",
    ],
    era: "8 – 10 years ago",
    challenge:
      "In 2016, Facebook opened Messenger to developers. The question was: what could brands actually do with bots? Quick explorations to identify real consumer use cases and demonstrate them fast.",
    description:
      "Early conversational UI explorations during the Facebook Messenger bot era — rapid hi-fidelity mockups for Kate Spade, Airbnb, and Shopify to explore what commerce, support, and analytics could look like in chat.",
    tags: ["Conversational UI", "Mobile", "Rapid Prototyping"],
    role: "UX Designer — rapid concept design and hi-fidelity mockups for BotCentral's developer-facing portal.",
    year: "2016",
    bullets: [
      "Explored conversational commerce, customer support, and analytics use cases in Facebook Messenger — a year before chatbots became mainstream.",
      "Shipped rapid hi-fidelity mockups for Kate Spade (shopping), Airbnb (guest queries), and Shopify (seller analytics) to demonstrate bot potential to developers.",
    ],
    sections: [
      {
        title: "The Moment",
        blocks: [
          {
            type: "text",
            content:
              "In 2016, Facebook Messenger opened its platform to developers — and nobody knew quite what to do with it. BotCentral was building the tooling for developers to create Messenger bots, and needed to show what was actually possible.\n\nThe job: identify unmet consumer needs that could work in chat, brainstorm fast, and get to hi-fidelity quickly enough to make developers believe in the medium.",
          },
        ],
      },
      {
        title: "Explorations",
        blocks: [
          {
            type: "text",
            content:
              "Three rapid concepts, each targeting a different use case:\n\n**Kate Spade** — Conversational e-commerce. Browsing product categories, discovering items, and completing a purchase inside Messenger.\n\n**Airbnb** — Guest support. Common help queries handled conversationally — booking questions, property details, host communication — without leaving the app.\n\n**Shopify** — Seller analytics. Daily digests of top products, orders, and sales performance surfaced as a push notification and conversation.",
          },
          {
            type: "image",
            src: "/images/projects/botcentral/slide-01.png",
            alt: "BotCentral — Facebook Messenger bot mockups",
            caption: "Kate Spade Messenger bot — conversational e-commerce: browsing, product detail, and purchase flow",
          },
          {
            type: "image",
            src: "/images/projects/botcentral/slide-02.png",
            alt: "BotCentral — UX Laboratory side project",
            caption: "UX Laboratory Design Forum — a side community project for UX designers worldwide",
          },
        ],
      },
      {
        title: "Reflection",
        blocks: [
          {
            type: "text",
            content:
              "This was early-stage thinking about what conversational interfaces could do — before the language models that make them genuinely useful existed. The instinct that chat could be an interaction surface for commerce, support, and data was right. The technology just needed to catch up.\n\nThat same instinct is now what I apply at ServiceNow: designing AI-native conversational experiences for enterprise workflows.",
          },
        ],
      },
    ],
  },
  {
    id: "chase",
    title: "JPMorgan Chase",
    company: "JPMorgan Chase (Contract) · San Francisco, CA",
    image: "/images/projects/chase-payments/cover.png",
    era: "10 – 12 years ago",
    description:
      "Chase Mobile Banking — redesign of Payments and Pay Bill flows, cardless ATM OTP, and responsive web payments.",
    tags: ["Web", "Mobile", "Payments", "iOS", "Android"],
    role: "UX Designer",
    year: "Oct 2014 – May 2016",
    tabs: [
      {
        id: "payments",
        label: "Mobile Payments",
        role: "UX Designer",
        year: "Oct 2014 – May 2016",
        bullets: [
          "Designed next-generation payment and Pay Bill flows for Chase Mobile — scaled across Credit Card, Auto Loan, Merchant Bill Pay, P2P, and Mortgage.",
          "Led responsive redesign of the Chase Personal Banking payments website for Credit Card and Auto-loan.",
          "Influenced the design and launch of the streamlined Quick Pay feature.",
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
              { type: "heading", content: "User Research" },
              {
                type: "quote",
                text: "Users are anxious when making a bill payment and are often uncertain whether a payment went through.",
              },
              {
                type: "text",
                content:
                  "Research showed users felt the existing flow had too many steps. Design needed to work across multiple payment products: Merchant Bill Pay, Credit Card, Transfer, Auto Loan, and Mortgage.",
              },
              { type: "heading", content: "Design Solutions" },
              {
                type: "text",
                content:
                  "Redesigned payment form as a component-based fluid design system with: consistent experience across all payment tasks, streamlined flow by reducing verify steps, enhanced error prevention, and a celebratory confirmation page with product education opportunities. Added timeline view for upcoming, pending, and past payments.",
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
            title: "Chase Responsive Web — Credit Card / Auto-loan Payments",
            blocks: [
              {
                type: "text",
                content:
                  "Responsive redesign of www.chase.com for Credit card and Auto-loan payments. UX Refresh: create a seamless, coherent, consistent experience in alignment with design principles — Simple, Human, Capable, Interoperable, Accessible.",
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
        id: "otp",
        label: "ATM One Time Passcode",
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
]
