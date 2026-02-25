"use client";

import Image from "next/image";

export function AboutSection6() {
  return (
    <section className="!layout-standard section-padding-standard my-8">
      <h2 className="font-heading text-3xl md:text-4xl text-heading lg:text-5xl font-bold leading-tight tracking-tight md:mb-20 mb-12">
        Our Vision & Mission
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 lg:gap-24 items-start">
        <div className="flex gap-6 md:gap-10 items-start max-md:flex-col">
          <div className="shrink-0">
            <Image
              src="/images/Final_VisionIconFull.svg"
              alt="Vision icon"
              width={140}
              height={140}
              className="max-md:w-20 max-md:h-20"
            />
          </div>

          <div>
            <h4 className="text-heading font-heading text-2xl md:text-3xl lg:text-4xl tracking-tight font-semibold mb-4 md:mb-6">
              Vision
            </h4>

            <p className="text-base md:text-lg lg:text-xl font-medium !leading-relaxed max-w-xl">
              We deliver exceptional experiences that build customer loyalty and
              empower businesses to pursue their purpose freely, helping diverse
              local economies grow and thrive.
            </p>
          </div>
        </div>

        <div className="flex gap-6 md:gap-10 items-start max-md:flex-col">
          <div className="shrink-0">
            <Image
              src="/images/Final_MissionBadgeFull.svg"
              alt="Mission badge"
              width={140}
              height={140}
              className="max-md:w-20 max-md:h-20"
            />
          </div>

          {/* Text */}
          <div>
            <h4 className="text-heading font-heading text-2xl md:text-3xl lg:text-4xl tracking-tight font-semibold mb-4 md:mb-6">
              Mission
            </h4>

            <p className="text-base md:text-lg lg:text-xl font-medium !leading-relaxed max-w-xl">
              We create meaningful connections and actionable insights that
              capture opportunities and give businesses control over when and
              how they communicate so they can achieve more.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
