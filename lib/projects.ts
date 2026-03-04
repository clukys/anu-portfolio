export const projects = [
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

export type Project = (typeof projects)[0];
