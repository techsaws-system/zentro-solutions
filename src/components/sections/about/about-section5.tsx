"use client";

import { MessageCircle, Users, Building2 } from "lucide-react";

export function AboutSection5() {
  return (
    <section className="w-full bg-white">
      {/* Full-width navy container */}
      <div
        className="
          w-full
          bg-[#0B1B4D]
          text-white
          py-16 sm:py-20 lg:py-28
          rounded-tl-[120px]
          max-sm:rounded-tl-[48px]
        "
      >
        {/* Inner content alignment */}
        <div className="max-w-7xl mx-auto px-6">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 sm:gap-16 md:gap-24 text-center">
            {/* Stat 1 */}
            <div className="flex flex-col items-center gap-6">
              <MessageCircle size={48} className="text-teal-300 sm:size-[56px]" />

              <p className="text-2xl sm:text-3xl font-bold text-[#FFD166]">1.1+ million</p>

              <p className="text-xl sm:text-2xl font-semibold leading-snug">
                conversations handled
                <br />
                each month
              </p>
            </div>

            {/* Stat 2 */}
            <div className="flex flex-col items-center gap-6">
              <Users size={48} className="text-teal-300 sm:size-[56px]" />

              <p className="text-2xl sm:text-3xl font-bold text-[#FFD166]">1.6+ million</p>

              <p className="text-xl sm:text-2xl font-semibold leading-snug">
                leads generated each
                <br />
                year
              </p>
            </div>

            {/* Stat 3 */}
            <div className="flex flex-col items-center gap-6">
              <Building2 size={48} className="text-[#FFB703] sm:size-[56px]" />

              <p className="text-2xl sm:text-3xl font-bold text-[#FFD166]">15,000+</p>

              <p className="text-xl sm:text-2xl font-semibold leading-snug">
                businesses trust Zentro Solutions.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 sm:mt-16 md:mt-24 text-center">
            <a
              href="#"
              className="text-orange-500 font-bold text-lg sm:text-xl hover:underline"
            >
              Discover more
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
