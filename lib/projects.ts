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
    title: "Google eMoney",
    company: "Filter (Consulting for Google) · Mountain View, CA",
    image: "/images/projects/google-emoney/cover.png",
    images: ["/images/projects/google-emoney/cover.png"],
    era: "7 – 8 years ago",
    challenge:
      "Designing a unified, trustworthy payment experience that feels local across dozens of global markets — within Google's ecosystem.",
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
    image: "/images/projects/paypal-partner/cover.png",
    images: [
      "/images/projects/paypal-partner/cover.png",
      "/images/projects/paypal-partner/slide-01.png",
      "/images/projects/paypal-partner/slide-02.png",
      "/images/projects/paypal-partner/slide-03.png",
      "/images/projects/paypal-partner/slide-04.png",
      "/images/projects/paypal-partner/slide-05.png",
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
        title: "Partner Vision",
        blocks: [
          {
            type: "text",
            content:
              "A PayPal Partner is a service/solutions provider which helps facilitate payments between the merchant (SMB) and their customers. The goal was to increase Partner satisfaction by providing self-service tools, enable Partners to manage their business effectively through merchant activity dashboards and notifications, and help Partners grow their business with Data and Insights.",
          },
        ],
      },
      {
        title: "My Role",
        blocks: [
          {
            type: "text",
            content:
              "Hybrid designer: Interaction + Visual design. Solution discovery, Feature prioritization with 3-in-a-box team, Usability study learnings based design iterations, Delivery of design assets.",
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
              "Curtis — Financial manager/analyst who interacts with marketing and accounting teams. Curtis is very data driven and checks the Summary page to see all the key metrics to keep track of the company's performance. He cares about TPV, Revenue Share, Regional performance, and Benchmarking. He likes the idea of checking data on his phone anytime, anywhere.",
          },
          {
            type: "text",
            content:
              "Amber — Business ops who interacts with Tech support and Product teams. Amber cares about the stability of business from all aspects. She monitors number of transactions, API error rate, and new merchants. She checks on the API error rate every day to track and locate API errors and check for error spikes.",
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
            type: "heading",
            content: "Project",
          },
          {
            type: "text",
            content:
              "Chase Mobile app — Redesign of Payments, Pay Bill flows. The goal of the design is to simplify payment tasks for Chase native mobile app consumers within a newly evolving design platform.",
          },
          {
            type: "heading",
            content: "My Role",
          },
          {
            type: "text",
            content:
              "Design iterations — Next generation payment / move money concepts. Created prototypes alternatives. Iterated Pay Bill flows with user testing.",
          },
          {
            type: "heading",
            content: "Challenges",
          },
          {
            type: "text",
            content:
              "Payment flow simplification. Scaling the payment form for all payment products. Identify and optimize payment input form entry and touch points.",
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
    id: "wallyhome",
    title: "Wallyhome",
    company: "WallyHome · San Francisco, CA",
    image: "/images/projects/wallyhome/cover.png",
    images: [
      "/images/projects/wallyhome/cover.png",
      "/images/projects/wallyhome/slide-01.png",
      "/images/projects/wallyhome/slide-02.png",
      "/images/projects/wallyhome/slide-03.png",
      "/images/projects/wallyhome/slide-04.png",
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
        title: "Project",
        blocks: [
          {
            type: "text",
            content:
              "Design a brand new experience for the wallyhome hub and sensor system that provides insights into the health of home allowing homeowners to monitor temperature, moisture and humidity.",
          },
        ],
      },
      {
        title: "My Role",
        blocks: [
          {
            type: "text",
            content:
              "Interaction designer, User studies. Delivered Responsive design of Wallyhome Dashboard and account settings pages.",
          },
        ],
      },
      {
        title: "Challenges",
        blocks: [
          {
            type: "text",
            content:
              "2 person UX team in a fast paced start up environment. Hub+Sensor System installation, System Usage, System management.",
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
]
