import { AboutFAQSection } from "@/components/sections/about/about-faq";
import { HeroSection } from "@/components/sections/about/about-hero";
import { AboutSection1 } from "@/components/sections/about/about-section1";
import { AboutSection2 } from "@/components/sections/about/about-section2";
import { AboutSection3 } from "@/components/sections/about/about-section3";
import { AboutSection4 } from "@/components/sections/about/about-section4";
import { AboutSection5 } from "@/components/sections/about/about-section5";
import { AboutSection6 } from "@/components/sections/about/about-section6";
import { NewsSection } from "@/components/sections/about/news-section";
import { NewsletterSection } from "@/components/partials/newsletter-section";

function HomePage() {
  return (
    <main>
      <HeroSection />
      <AboutSection1 />
      <AboutSection2 />
      <AboutSection3 />
      <AboutSection4 />
      <AboutFAQSection />
      <AboutSection5 />
      <AboutSection6 />
      <NewsSection />
      <NewsletterSection />
    </main>
  );
}

export default HomePage;
