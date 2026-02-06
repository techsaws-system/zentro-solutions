export const siteConfig = {
  name: "Zentro Solutions",
  shortName: "Zentro",
  title: "Zentro Solutions | Every Call Answered. Every Customer Covered.",
  description:
    "Zentro Solutions provides live, 24/7 human coverage for calls, chat, email, and social media messages for businesses of any size. Capture every lead, book more appointments, and deliver exceptional customer experiences without missing a single inquiry.",

  tagline: "Live Human Support, 24/7, for Growing Businesses",

  url: process.env.NEXT_PUBLIC_SITE_URL,
  ogImage: "/favicons/og-image.png",
  logo: "/favicons/logo.png",

  keywords: [
    "virtual receptionist",
    "live call answering service",
    "24/7 answering service",
    "business call answering",
    "inbound call handling",
    "appointment booking service",
    "lead capture service",
    "customer support outsourcing",
    "live chat support",
    "email support service",
    "social media message management",
    "virtual front desk",
    "customer communication service",
    "outsourced receptionist",
    "small business answering service",
    "enterprise call handling",
    "Zentro Solutions",
  ],

  authors: [
    {
      name: "Zentro Solutions",
      url: process.env.NEXT_PUBLIC_SITE_URL,
    },
  ],

  creator: "Zentro Solutions",
  publisher: "Zentro Solutions",

  language: "en-US",
  locale: "en_US",

  themeColor: "#fb782f",
  backgroundColor: "#ffffff",

  contact: {
    email: "info@zentrosolutions.com",
  },

  links: {
    home: "/",
  },

  features: [
    "Around-the-clock live human call coverage",
    "Incoming and outgoing call management",
    "Scheduling and booking appointments",
    "Lead capture and screening",
    "Real-time live chat support",
    "Email and social message management",
    "CRM and calendar integrations",
    "Tailored call scripts and workflows",
    "Teams that scale with you",
    "Secure, confidential operations",
  ],

  seoDefaults: {
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-snippet": -1,
        "max-image-preview": "large",
        "max-video-preview": -1,
      },
    },
  },
} as const;

export type SiteConfig = typeof siteConfig;
