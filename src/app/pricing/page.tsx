import { NewsletterSection } from "@/components/partials/newsletter-section";
import { ReviewsSection } from "@/components/partials/reviews-section";
import { FeatureSection, PlanSection } from "@/components/sections/pricing/feature-section";
import { PricingSection } from "@/components/sections/pricing/pricing-section";
import { PricingComparison } from "@/components/sections/pricing/pricingcompare";
import { PricingQASection } from "@/components/sections/pricing/pricingqa-section";
import { TestimonialsSection } from "@/components/sections/pricing/testimonial";

function HomePage() {
  return (
    <main>
      <PricingSection />
      <PricingComparison />
      <ReviewsSection />
      <PricingQASection/>
      <FeatureSection/>
      <NewsletterSection />
    </main>
  );
}

export default HomePage;
