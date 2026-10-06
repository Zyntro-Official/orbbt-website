// JSON-LD Schema definitions for SEO / AEO
import { CHROME_STORE_URL } from "@/lib/config"
import { faqs } from "@/lib/faqs"

// FAQPage Schema
export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
}

// SoftwareApplication Schema (Chrome Extension)
export const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Orbbt Chrome Extension",
  description:
    "Job application tracker for Chrome. Save jobs, companies and contacts from LinkedIn and Indeed in one click, then track them on a Kanban board or table with deadline reminders.",
  url: "https://orbbt.app/#chrome-extension",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Chrome",
  ...(CHROME_STORE_URL && {
    installUrl: CHROME_STORE_URL,
    downloadUrl: CHROME_STORE_URL,
  }),
  offers: [
    { "@type": "Offer", name: "Free", price: "0", priceCurrency: "USD" },
    {
      "@type": "Offer",
      name: "Pro",
      price: "7.99",
      priceCurrency: "USD",
      description:
        "Billed monthly. 30 AI Resume Job Matches per month and email deadline reminders.",
    },
  ],
  featureList: [
    "One-click job capture from LinkedIn and Indeed",
    "Kanban board and jobs table",
    "Company directory and contacts linked to jobs",
    "Deadline reminders by push notification and email",
    "AI Resume Job Match",
  ],
  publisher: {
    "@type": "Organization",
    name: "Zyntro",
    url: "https://orbbt.app",
  },
}

// Organization + WebSite Schema
export const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Orbbt",
  legalName: "Zyntro",
  url: "https://orbbt.app",
  logo: "https://orbbt.app/orbbt-logo.png",
  sameAs: [
    "https://www.linkedin.com/company/orbbt",
    "https://instagram.com/orbbt",
    // add Chrome Web Store URL after launch
    ...(CHROME_STORE_URL ? [CHROME_STORE_URL] : []),
  ],
}
