"use client";

import { MessageCircle, Users, Building2 } from "lucide-react";

export function AboutSection5() {
  return (
    <div className="layout-standard section-padding-standard my-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-24 text-center">
        <div className="flex flex-col items-center gap-6">
          <MessageCircle size={48} className="text-primary md:size-[56px]" />

          <h1 className="text-2xl font-heading md:text-3xl font-bold text-white">
            1.1+ million
          </h1>

          <p className="text-base md:text-xl font-medium leading-snug text-white/80">
            conversations handled each month
          </p>
        </div>

        <div className="flex flex-col items-center gap-6">
          <Users size={48} className="text-primary md:size-[56px]" />

          <h1 className="text-2xl font-heading md:text-3xl font-bold text-white">
            1.6+ million
          </h1>

          <p className="text-base md:text-xl font-medium leading-snug text-white/80">
            leads generated each year
          </p>
        </div>

        <div className="flex flex-col items-center gap-6">
          <Building2 size={48} className="text-primary md:size-[56px]" />

          <h1 className="text-2xl font-heading md:text-3xl font-bold text-white">
            15,000+
          </h1>

          <p className="text-base md:text-xl font-medium leading-snug text-white/80">
            businesses trust Zentro Solutions.
          </p>
        </div>
      </div>
    </div>
  );
}
