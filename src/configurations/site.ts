export const siteConfig = {
  name: "Zentro Solutions",
  shortName: "Zentro",
  title: "Zentro Solutions | Never Miss a Call. Never Miss a Client.",
  description:
    "Zentro Solutions provides 24/7 live human call answering, chat, email, and social media message support for businesses of all sizes. Capture every lead, book more appointments, and deliver exceptional customer experiences—without missing a single inquiry.",

  tagline: "24/7 Live Human Support for Growing Businesses",

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

  creator: "TechSaws",
  publisher: "TechSaws",

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
    "24/7 Live Human Call Answering",
    "Inbound & Outbound Call Handling",
    "Appointment Scheduling & Booking",
    "Lead Capture & Qualification",
    "Live Chat Support",
    "Email & Social Media Message Handling",
    "CRM & Calendar Integration",
    "Custom Call Scripts & Workflows",
    "Scalable Support Teams",
    "Secure & Confidential Operations",
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
