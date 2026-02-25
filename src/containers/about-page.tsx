import { AboutFAQSection } from "@/components/sections/about/about-faq";
import { HeroSection } from "@/components/sections/about/about-hero";
import { AboutSection1 } from "@/components/sections/about/about-section1";
import { AboutSection2 } from "@/components/sections/about/about-section2";
import { AboutSection4 } from "@/components/sections/about/about-section4";
import { AboutSection5 } from "@/components/sections/about/about-section5";
import { AboutSection6 } from "@/components/sections/about/about-section6";
import { NewsletterSection } from "@/components/partials/newsletter-section";
import { AboutSection3 } from "@/components/sections/about/about-section3";
import Canvas01 from "@/canvas/canvas-01";
import { ReviewsSection } from "@/components/partials/reviews-section";

function AboutPage() {
  return (
    <main>
      <HeroSection />
      <AboutSection1 />
      <AboutSection2 />
      <AboutSection4 />
      <AboutSection3 />
      <AboutFAQSection />
      <Canvas01>
        <AboutSection5 />
      </Canvas01>
      <AboutSection6 />
      <ReviewsSection />
      <NewsletterSection />
    </main>
  );
}

export default AboutPage;
