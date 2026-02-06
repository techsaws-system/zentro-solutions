import Image from "next/image";

export function AboutSection2() {
  return (
    <section className="bg-gray-50 py-16 sm:py-20 lg:py-32 px-6 lg:px-16">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Image */}
          <div className="relative h-56 sm:h-64 lg:h-72 flex items-center justify-center lg:justify-start order-2 lg:order-1 max-sm:hidden">
            <div className="w-full max-w-md rounded-3xl overflow-hidden shadow-2xl relative">
              {/* Light cream background */}
              <div className="absolute inset-0 bg-yellow-100 z-0"></div>

              {/* Teal accent border on left */}
              <div className="absolute left-0 top-0 bottom-0 w-2 bg-teal-500 z-10"></div>

              {/* Image container */}
              <div className="relative z-5 w-full h-full">
                <Image
                  src="/images/about-img1.png"
                  alt="Product feature showcase"
                  width={500}
                  height={400}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-5 sm:space-y-6 order-1 lg:order-2">
            {/* Main Heading */}
            <h2 className="text-[#001a4d] font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight text-balance">
              Why teams choose us
            </h2>

            {/* Description */}
            <p className="text-[#1a3a6b] text-base sm:text-lg leading-relaxed">
              We blend modern technology with human expertise to deliver
              personalized customer experiences at scale. Every business is
              different, so our solutions stay flexible and tailored to your
              needs. From smooth integrations to dedicated support, we help
              your business thrive in a competitive market.
            </p>

            {/* Features List */}
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-start gap-4">
                <span className="text-[#F4B860] font-bold text-xl mt-1">✓</span>
                <span className="text-[#1a3a6b] text-base">
                  24/7 customer support with expert guidance
                </span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-[#F4B860] font-bold text-xl mt-1">✓</span>
                <span className="text-[#1a3a6b] text-base">
                  Advanced reporting and analytics tools
                </span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-[#F4B860] font-bold text-xl mt-1">✓</span>
                <span className="text-[#1a3a6b] text-base">
                  Seamless integration with existing systems
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
