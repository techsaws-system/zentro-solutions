import Canvas01 from "@/canvas/canvas-01";

import HeroSection from "@/components/sections/home/hero-section";
import CollaborationSection from "@/components/sections/home/collaboration-section";
import AboutSection from "@/components/sections/home/about-section";
import ServicesSection from "@/components/sections/home/services-section";
import { FeaturesCapabilitiesSection } from "@/components/sections/home/future-capabilities";
import { RubyBenefitsSection } from "@/components/sections/home/ruby-benefits";
import { RubyStatsSection } from "@/components/sections/home/ruby-stats";
import { ReviewsSection } from "@/components/partials/reviews-section";
import { NewsletterSection } from "@/components/partials/newsletter-section";

function HomePage() {
  return (
    <main>
      <HeroSection />
      <CollaborationSection />
      <AboutSection />
      <Canvas01>
        <ServicesSection />
      </Canvas01>
      <FeaturesCapabilitiesSection />
      <RubyBenefitsSection />
      <RubyStatsSection />
      <ReviewsSection />
      <NewsletterSection />

    </main>
  );
}

export default HomePage;
