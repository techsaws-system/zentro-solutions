"use client";

import Image from "next/image";

export function AboutSection6() {
  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Top Headings */}
        <div className="mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-[#0B1B4D] font-bold text-3xl sm:text-4xl lg:text-[50px] mb-4 sm:mb-6">
            Culture and values
          </h2>

          <h3 className="text-pink-600 font-bold text-2xl sm:text-3xl lg:text-[38px]">
            Zentro Solutions&apos; vision and mission
          </h3>
        </div>

        {/* Vision + Mission */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 lg:gap-24 items-start">
          {/* Vision */}
          <div className="flex gap-6 sm:gap-10 items-start max-sm:flex-col">
            {/* Image */}
            <div className="shrink-0">
              <Image
                src="/images/Final_VisionIconFull.svg"
                alt="Vision icon"
                width={140}
                height={140}
                className="max-sm:w-20 max-sm:h-20"
              />
            </div>

            {/* Text */}
            <div>
              <h4 className="text-[#0B1B4D] font-bold text-2xl sm:text-3xl lg:text-[34px] mb-4 sm:mb-6">
                Vision
              </h4>

              <p className="text-[#0B1B4D] text-base sm:text-lg lg:text-[20px] leading-relaxed max-w-xl">
                We deliver exceptional experiences that build customer loyalty
                and empower businesses to pursue their purpose freely, helping
                diverse local economies grow and thrive.
              </p>
            </div>
          </div>

          {/* Mission */}
          <div className="flex gap-6 sm:gap-10 items-start max-sm:flex-col">
            {/* Image */}
            <div className="shrink-0">
              <Image
                src="/images/Final_MissionBadgeFull.svg"
                alt="Mission badge"
                width={140}
                height={140}
                className="max-sm:w-20 max-sm:h-20"
              />
            </div>

            {/* Text */}
            <div>
              <h4 className="text-[#0B1B4D] font-bold text-2xl sm:text-3xl lg:text-[34px] mb-4 sm:mb-6">
                Mission
              </h4>

              <p className="text-[#0B1B4D] text-base sm:text-lg lg:text-[20px] leading-relaxed max-w-xl">
                We create meaningful connections and actionable insights that
                capture opportunities and give businesses control over when and
                how they communicate so they can achieve more.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
