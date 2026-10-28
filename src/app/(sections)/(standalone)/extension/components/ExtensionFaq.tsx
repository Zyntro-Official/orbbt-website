/*
  Extension FAQ Section
*/

// UI Components
import FaqPage from "@/app/(sections)/faq/page"

// Constants — FAQs
const EXTENSION_FAQS = [
  {
    q: "Is the Orbbt Chrome Extension free to use?",
    a: "Yes! The Orbbt Chrome Extension is 100% free with unlimited job saves, recruiter contact capturing, and instant syncing across your devices.",
  },
  {
    q: "Which browsers and job sites are supported?",
    a: "Orbbt works on Google Chrome and all Chromium-based browsers including Brave, Microsoft Edge, Arc, and Opera. It is fully optimized for LinkedIn and Indeed job detail pages.",
  },
  {
    q: "Does the extension track or read my personal browsing history?",
    a: "No. We respect your privacy. Orbbt only activates when you open a job listing and interact with the extension. We never track your search history or sell your data.",
  },
  {
    q: "Do I need an account to use the extension?",
    a: "Yes, you just need a free Orbbt account so that every role and contact you save can sync in real-time to your Kanban board, table view, and mobile app.",
  },
  {
    q: "Can I edit details after saving a job?",
    a: "Absolutely. You can edit salary notes, stage (Saved, Applied, Interviewing, Offer), application deadlines, and custom tags at any time from your dashboard or extension.",
  },
]

export default function ExtensionFaq() {
  return (
    <FaqPage
      faqs={EXTENSION_FAQS}
      subtitle="Quick answers to the most common questions about the extension."
    />
  )
}

