import Image from "next/image";

export function AboutSection4() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-32 px-6 lg:px-16">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-5 sm:space-y-6">
            {/* Main Heading */}
            <h2 className="text-[#001a4d] font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight text-balance">
              Who we support
            </h2>

            {/* Description */}
            <p className="text-[#1a3a6b] text-base sm:text-lg leading-relaxed">
              The people we serve matter as much as the work we do. We believe
              small businesses are the backbone of their communities and
              deserve every opportunity to succeed. By giving them the
              services, tools, and analytics to manage customer interactions,
              we save time, reduce stress, and help them focus on what they do
              best.
            </p>
          </div>

          {/* Right Image */}
          <div className="relative h-72 sm:h-80 lg:h-96 flex items-center justify-center lg:justify-end max-sm:hidden">
            <div className="w-full max-w-md rounded-3xl overflow-hidden shadow-2xl relative">
              {/* Light cream background */}
              <div className="absolute inset-0 bg-yellow-100 z-0"></div>

              {/* Teal accent border on right */}
              <div className="absolute right-0 top-0 bottom-0 w-2 bg-teal-500 z-10"></div>

              {/* Image container */}
              <div className="relative z-5 w-full h-full">
                <Image
                  src="/images/about-img3.png"
                  alt="Zentro Solutions team members"
                  width={500}
                  height={400}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
