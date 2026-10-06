/*
  Sections Page — Root Composition
*/

// Route Pages
import ChromeExtensionPage from "./chrome-extension/page"
import ComparisonPage from "./comparison/page"
import FaqPage from "./faq/page"
import FinalCtaPage from "./final-cta/page"
import HeroPage from "./hero/page"
import HowItWorksPage from "./how-it-works/page"
import MobileWaitlistPage from "./mobile/page"
import PricingPage from "./pricing/page"
import ProblemPage from "./problem/page"
import ProductPage from "./product/page"

// SEO
import { JsonLd } from "@/components/JsonLd"
import { faqs } from "@/lib/faqs"
import { faqSchema, orgSchema, softwareSchema } from "@/lib/schema"

export default function SectionsPage() {
  return (
    <>
      <HeroPage />
      {/* <FeaturesPage /> */}
      {/* <ProductShowcasePage /> */}
      <ProductPage />
      <ProblemPage />
      <HowItWorksPage />
      <ChromeExtensionPage />
      <ComparisonPage />
      <PricingPage />
      <MobileWaitlistPage />
      <FaqPage faqs={faqs} />
      <FinalCtaPage />

      {/* JSON-LD Structured Data */}
      <JsonLd data={faqSchema} />
      <JsonLd data={softwareSchema} />
      <JsonLd data={orgSchema} />
    </>
  )
}
