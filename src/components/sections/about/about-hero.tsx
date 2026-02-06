import Image from "next/image";

export function HeroSection() {
  return (
    <section className="min-h-[70vh] bg-gradient-to-br from-[#001a4d] to-[#003d99] flex items-center px-6 lg:px-16 py-16 sm:py-20">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8">
            {/* Label */}
            <div className="inline-block">
              <p className="text-[#F4B860] font-bold text-sm sm:text-[20px] tracking-wider">
                ABOUT ZENTRO SOLUTIONS
              </p>
            </div>

            {/* Main Heading */}
            <h1 className="text-white font-bold text-[70px] max-sm:text-4xl lg:text-6xl leading-tight text-balance">
              First impressions become long-term loyalty here.
            </h1>

            {/* Subtitle */}
            <p className="text-gray-300 text-lg sm:text-[22px] leading-relaxed max-w-lg">
              The people, technology, and service at Zentro Solutions unite to
              deliver distinctive customer experiences.
            </p>
          </div>

          {/* Right Images */}
          <div className="relative h-96 lg:h-[500px] flex items-center justify-center max-sm:h-auto max-sm:mt-8 max-sm:flex-col max-sm:gap-6 max-sm:hidden">
            {/* Bottom Left Image */}
            <div className="absolute bottom-0 left-0 w-64 lg:w-80 rounded-3xl overflow-hidden border-8 border-[#F4B860] shadow-2xl z-10 max-sm:static max-sm:w-56">
              <Image
                src="/images/about-hero-img.png"
                alt="Team member photo"
                width={400}
                height={500}
                className="w-full h-auto object-cover"
                priority
              />
            </div>

            {/* Top Right Image */}
            <div className="absolute top-0 right-0 w-64 lg:w-80 rounded-3xl overflow-hidden border-8 border-[#F4B860] shadow-2xl z-20 max-sm:static max-sm:w-56">
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
