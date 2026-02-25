import Image from "next/image";

export function HeroSection() {
  return (
    <section className="min-h-[70vh] bg-gradient-to-br from-accent to-secondary flex items-center px-6 lg:px-16 py-16 md:py-20">
      <div className="layout-standard">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="space-y-6">
            <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              First Impressions Become Long Term Loyalty Here.
            </h1>

            <p className="text-white/80 text-lg md:text-2xl !leading-relaxed max-w-lg">
              The people, technology, and service at Zentro Solutions unite to
              deliver distinctive customer experiences.
            </p>
          </div>

          <div className="relative h-96 lg:h-[500px] flex items-center justify-center max-sm:h-auto max-sm:mt-8 max-sm:flex-col max-sm:gap-6 max-sm:hidden">
            <div className="absolute bottom-0 left-0 w-64 lg:w-80 rounded-3xl overflow-hidden border-8 border-primary shadow-2xl z-10 max-sm:static max-sm:w-56">
              <Image
                src="/images/about-hero-img.png"
                alt="Team member photo"
                width={400}
                height={500}
                className="w-full h-auto object-cover"
                priority
              />
            </div>

            <div className="absolute top-0 right-0 w-64 lg:w-80 rounded-3xl overflow-hidden border-8 border-primary shadow-2xl z-20 max-sm:static max-sm:w-56">
              <Image
                src="/images/about-hero-img2.png"
                alt="Team member photo"
                width={400}
                height={500}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
