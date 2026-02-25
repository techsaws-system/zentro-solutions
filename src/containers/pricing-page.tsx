import Canvas01 from "@/canvas/canvas-01";
import { NewsletterSection } from "@/components/partials/newsletter-section";
import { ReviewsSection } from "@/components/partials/reviews-section";
import { PricingSection } from "@/components/sections/pricing/pricing-section";
import { PricingCardsSection } from "@/components/sections/pricing/pricing-cards-section";

function PricingPage() {
  return (
    <main>
      <Canvas01>
        <PricingSection />
      </Canvas01>
      <PricingCardsSection />
      <ReviewsSection />
      <NewsletterSection />
    </main>
  );
}

export default PricingPage;
