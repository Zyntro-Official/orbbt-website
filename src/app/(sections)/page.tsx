/*
Sections Page — Root Composition
*/

// Route Pages
import ComparisonPage from "./comparison/page"
import FaqPage from "./faq/page"
import FinalCtaPage from "./final-cta/page"
import HeroPage from "./hero/page"
import HowItWorksPage from "./how-it-works/page"
import MobileWaitlistPage from "./mobile/page"
import PricingPage from "./pricing/page"
import ProblemPage from "./problem/page"
import ProductPage from "./product/page"

// Constants
const FAQS = [
  {
    q: "What is orbbt?",
    a: "An all-in-one workspace for your job search: saved jobs, contact management, company profiles, deadline reminders, and follow-ups in one place.",
  },
  {
    q: "Can I import jobs I already saved?",
    a: "Yes. Paste a job URL or use the browser extension, and orbbt pulls in the role, company, and description.",
  },
  {
    q: "Does the AI apply to jobs for me?",
    a: "No. You stay in control of everything. The AI helps score job compatibility, highlight skill gaps, and track deadlines, while you decide where and what gets submitted.",
  },
  {
    q: "Where does my data live?",
    a: "Your applications and documents are private to your account and are never used to train public models.",
  },
  {
    q: "Is there a free plan?",
    a: "Yes. The free plan covers up to 25 tracked applications, the pipeline, and the browser extension.",
  },
  {
    q: "Which browsers does the extension support?",
    a: "Chrome and other Chromium browsers at launch, with Firefox planned.",
  },
  {
    q: "When is the mobile app coming?",
    a: "It is in development. Waitlist members get access first when the beta opens.",
  },
  {
    q: "Can I cancel Pro anytime?",
    a: "Yes. Pro is month to month, and your data stays accessible on the free plan.",
  },
]

export default function SectionsPage() {
  return (
    <>
      <HeroPage />
      {/* <FeaturesPage /> */}
      {/* <ProductShowcasePage /> */}
      <ProductPage />
      <ProblemPage />
      <HowItWorksPage />
      <ComparisonPage />
      <PricingPage />
      <MobileWaitlistPage />
      <FaqPage faqs={FAQS} />
      <FinalCtaPage />
    </>
  )
}
