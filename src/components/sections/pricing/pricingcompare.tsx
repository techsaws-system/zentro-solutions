"use client";

import { useState } from "react";

type Plan = {
  minutes: number;
  description: string;
  price: number;
  popular?: boolean;
};

const plansByTab: Record<string, Plan[]> = {
  virtual: [
    { minutes: 50, description: "Made for early-stage teams", price: 250 },
    {
      minutes: 100,
      description: "Great for solo operators",
      price: 395,
    },
    {
      minutes: 200,
      description: "Fits small businesses across industries",
      price: 720,
      popular: true,
    },
    {
      minutes: 500,
      description: "For growing, larger organizations",
      price: 1725,
    },
  ],
  chat: [
    { minutes: 30, description: "Designed for small teams", price: 150 },
    { minutes: 75, description: "Supports expanding support teams", price: 299 },
    {
      minutes: 150,
      description: "For mid-size businesses",
      price: 549,
      popular: true,
    },
    { minutes: 300, description: "Built for large-scale operations", price: 999 },
  ],
  bundled: [
    { minutes: 100, description: "Starter combo plan", price: 399 },
    { minutes: 200, description: "Growth bundle", price: 699 },
    {
      minutes: 400,
      description: "Professional plan",
      price: 1299,
      popular: true,
    },
    { minutes: 800, description: "Enterprise plan", price: 2399 },
  ],
};

const tabs = [
  { id: "virtual", label: "Virtual receptionist pricing" },
  { id: "chat", label: "Live chat pricing" },
  { id: "bundled", label: "Bundled pricing" },
];

export function PricingComparison() {
  const [activeTab, setActiveTab] = useState("virtual");
  const plans = plansByTab[activeTab];
  const mobilePlans = [...plans, ...plans];

  return (
    <section className="w-full py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-10 mb-10 sm:mb-16">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative pb-3 text-base sm:text-lg font-semibold transition-colors ${
                activeTab === tab.id
                  ? "text-purple-800"
                  : "text-gray-500 hover:text-gray-900"
              }`}
            >
              {tab.label}
              {activeTab === tab.id && (
                <span className="absolute left-0 right-0 -bottom-1 h-[3px] bg-purple-800 rounded-full" />
              )}
            </button>
          ))}
        </div>

        {/* Pricing Grid */}
        <div className="relative flex justify-center">
          {/* FIXED top connector line */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl px-[2.75rem] z-0 hidden sm:block">
            <div className="h-[2px] w-full bg-purple-800 rounded-full" />
          </div>

          <div className="hidden sm:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-6xl w-full gap-6 md:gap-0 relative z-10">
            {plans.map((plan, index) => {
              const isPopular = plan.popular;

              return (
                <div
                  key={index}
                  className={`
                    relative bg-white flex flex-col items-center text-center
                    px-6 sm:px-10 py-10 sm:py-14 min-h-[36rem] sm:min-h-[48rem]
                    rounded-[2rem] sm:rounded-none
                    ${
                      isPopular
                        ? "border-[4px] border-purple-800 sm:rounded-[2.75rem] z-20 sm:scale-[1.04] sm:-translate-y-2"
                        : "border border-purple-800"
                    }
                    ${!isPopular && index === 0 ? "sm:rounded-l-[2.75rem]" : ""}
                    ${!isPopular && index === plans.length - 1 ? "sm:rounded-r-[2.75rem]" : ""}
                    ${!isPopular && index !== plans.length - 1 ? "sm:-mr-px" : ""}
                  `}
                >
                  {/* Badge cut-out */}
                  {isPopular && (
                    <>
                      <div className="absolute -top-[2px] left-0 right-0 h-[6px] bg-white z-10" />
                      <div className="absolute -top-6 px-8 py-2 bg-purple-800 text-white rounded-full text-sm font-semibold z-20">
                        Top choice
                      </div>
                    </>
                  )}

                  <div className="text-[4rem] sm:text-[5.5rem] font-extrabold text-[#0b1b4d] leading-none mt-6 sm:mt-8">
                    {plan.minutes}
                  </div>
                  <div className="mt-3 sm:mt-4 text-lg sm:text-xl font-medium text-[#0b1b4d]">
                    minutes each
                    <br />
                    month
                  </div>

                  <div className="w-full border-t border-purple-800 my-8 sm:my-10" />

                  <p className="text-xl sm:text-2xl font-semibold text-[#0b1b4d] px-2">
                    {plan.description}
                  </p>

                  <div className="w-full border-t border-purple-800 my-8 sm:my-10" />

                  <div className="text-[3.5rem] sm:text-[4.5rem] font-extrabold text-[#0b1b4d] leading-none">
                    ${plan.price.toLocaleString()}
                  </div>
                  <div className="mt-2 text-lg sm:text-xl font-medium text-[#0b1b4d]">
                    per month
                  </div>

                  <button className="mt-auto bg-orange-500 hover:bg-orange-600 text-white text-lg sm:text-xl font-bold px-8 sm:px-12 py-4 rounded-2xl transition-colors w-full sm:w-auto">
                    Get started
                  </button>
                </div>
              );
            })}
          </div>

          <div className="sm:hidden w-full overflow-hidden">
            <div className="auto-scroll-track gap-6">
              {mobilePlans.map((plan, index) => (
                <div
                  key={`${plan.minutes}-${plan.price}-${index}`}
                  className="
                    bg-white flex flex-col items-center text-center
                    px-6 py-10 min-h-[32rem] w-[280px]
                    border border-purple-800 rounded-[2rem]
                  "
                >
                  <div className="text-[3.5rem] font-extrabold text-[#0b1b4d] leading-none mt-6">
                    {plan.minutes}
                  </div>
                  <div className="mt-3 text-lg font-medium text-[#0b1b4d]">
                    minutes each
                    <br />
                    month
                  </div>

                  <div className="w-full border-t border-purple-800 my-6" />

                  <p className="text-xl font-semibold text-[#0b1b4d] px-2">
                    {plan.description}
                  </p>

                  <div className="w-full border-t border-purple-800 my-6" />

                  <div className="text-[3rem] font-extrabold text-[#0b1b4d] leading-none">
                    ${plan.price.toLocaleString()}
                  </div>
                  <div className="mt-2 text-lg font-medium text-[#0b1b4d]">
                    per month
                  </div>

                  <button className="mt-auto bg-orange-500 hover:bg-orange-600 text-white text-lg font-bold px-8 py-4 rounded-2xl transition-colors w-full">
                    Get started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
