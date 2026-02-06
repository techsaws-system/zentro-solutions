"use client";

import Image from "next/image";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export function FeaturesCapabilitiesSection() {
  const leftFeatures = [
    "Live answering by people, 24/7",
    "Flexible call routing options",
    "Lead intake and qualification",
    "Payment collection",
  ];

  const rightFeatures = [
    "English and Spanish coverage, 24/7",
    "Instant notifications",
    "Appointment booking",
    "Outbound calling",
  ];

  return (
    <section className="w-full bg-white py-24 md:py-28 lg:py-32 px-6 md:px-10 lg:px-12">
      <div className="max-w-7xl mx-auto text-center">
        {/* Decorative image (top center) */}
        <div className="flex justify-center mb-8 md:mb-10">
          <Image
            src="/images/ruby-shapes.png"
            alt="Decorative graphic shapes"
            width={260}
            height={80}
            priority
          />
        </div>

        {/* Heading */}
        <h2 className="text-[#0B1B4D] font-semibold text-4xl md:text-5xl lg:text-6xl tracking-tight mb-12 md:mb-16">
          Zentro Solutions features and capabilities
        </h2>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 lg:gap-x-24 gap-y-8 md:gap-y-10 text-left mb-12 md:mb-16">
          {/* Left column */}
          <div className="space-y-6 md:space-y-8">
            {leftFeatures.map((item) => (
              <div key={item} className="flex items-start gap-5">
                <span className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#8B0A5A] text-[#8B0A5A]">
                  <Check size={22} strokeWidth={3} />
                </span>
                <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-[#0B1B4D] leading-snug">
                  {item}
                </p>
              </div>
            ))}
          </div>

          {/* Right column */}
          <div className="space-y-6 md:space-y-8">
            {rightFeatures.map((item) => (
              <div key={item} className="flex items-start gap-5">
                <span className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#8B0A5A] text-[#8B0A5A]">
                  <Check size={22} strokeWidth={3} />
                </span>
                <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-[#0B1B4D] leading-snug">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <Button
          className="
            bg-[#001F5C]
            hover:bg-[#001F5C]/90
            text-white
            font-semibold
            rounded-xl
            h-14 px-10 text-lg
            md:h-16 md:px-12 md:text-xl
          "
        >
          View all features
        </Button>
      </div>
    </section>
  );
}
