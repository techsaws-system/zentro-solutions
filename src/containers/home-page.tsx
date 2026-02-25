import Canvas01 from "@/canvas/canvas-01";

import HeroSection from "@/components/sections/home/hero-section";
import CollaborationSection from "@/components/sections/home/collaboration-section";
import AboutSection from "@/components/sections/home/about-section";
import ServicesSection from "@/components/sections/home/services-section";
import { FeaturesCapabilitiesSection } from "@/components/sections/home/future-capabilities";
import { ReviewsSection } from "@/components/partials/reviews-section";
import { NewsletterSection } from "@/components/partials/newsletter-section";
import BenefitsSection from "@/components/sections/home/benefits-section";

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
      <Canvas01>
        <BenefitsSection />
      </Canvas01>
      <ReviewsSection />
      <NewsletterSection />
    </main>
  );
}

export default HomePage;
