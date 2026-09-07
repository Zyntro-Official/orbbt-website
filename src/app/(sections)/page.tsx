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

export default function SectionsPage() {
  return (
    <>
      <HeroPage />
      {/* <FeaturesPage /> */}
      {/* <ProductShowcasePage /> */}
      <ProductPage />
      <MobileWaitlistPage />
      <ProblemPage />
      <HowItWorksPage />
      <ComparisonPage />
      <PricingPage />
      <FaqPage />
      <FinalCtaPage />
    </>
  )
}
