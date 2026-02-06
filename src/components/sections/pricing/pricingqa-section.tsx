"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

export function PricingQASection() {
  const cards = [
    {
      id: 1,
      image: "/images/pricing-card-1-phone-money.jpg",
      title: "Virtual receptionist pricing: per-minute vs per-call",
      buttonText: "See the difference",
      bgColor: "bg-teal-600",
    },
    {
      id: 2,
      image: "/images/pricing-card-2-woman.jpg",
      title: "Virtual receptionist pricing fundamentals",
      buttonText: "See the details",
      bgColor: "bg-[#00205B]",
    },
    {
      id: 3,
      image: "/images/pricing-card-3.jpg",
      title: "The definitive guide to small business answering services",
      buttonText: "View the guide",
      bgColor: "bg-purple-900",
    },
  ];
  const mobileCards = [...cards, ...cards];

  return (
    <section className="w-full bg-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-10 sm:mb-16 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
            Questions about virtual receptionist pricing?
          </h2>
          <p className="mt-3 sm:mt-4 text-2xl sm:text-3xl font-semibold text-orange-500 md:text-4xl">
            We&apos;ll break it down.
          </p>
        </div>

        {/* Cards */}
        <div className="hidden sm:grid gap-6 sm:gap-10 md:grid-cols-3">
          {cards.map((card) => (
            <div
              key={card.id}
              className="
                flex flex-col overflow-hidden
                rounded-[2.5rem]
                shadow-lg
                bg-white
              "
            >
              {/* Image */}
              <div className="relative h-48 sm:h-56 w-full">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div
                className={`
                  flex flex-1 flex-col justify-between
                  ${card.bgColor}
                  p-6 sm:p-10
                  text-white
                `}
              >
                {/* Title — 34px, weight 700, white */}
                <h3 className="leading-tight font-[700] text-white text-2xl sm:text-[34px]">
                  {card.title}
                </h3>

                {/* Button — 24px, weight 700, white */}
                <Button
                  variant="outline"
                  className="
                    mt-12
                    w-full sm:w-fit
                    rounded-full
                    border-2 border-white
                    bg-transparent
                    text-white
                    font-[700]
                    text-lg sm:text-2xl
                    px-6 sm:px-10
                    py-3 sm:py-[18px]
                    hover:bg-white hover:text-slate-900
                    transition-colors
                  "
                >
                  {card.buttonText}
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="sm:hidden overflow-hidden">
          <div className="auto-scroll-track gap-6">
            {mobileCards.map((card, index) => (
              <div
                key={`${card.id}-${index}`}
                className="
                  flex flex-col overflow-hidden
                  rounded-[2rem]
                  shadow-lg
                  bg-white
                  w-[280px]
                "
              >
                <div className="relative h-44 w-full">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div
                  className={`
                    flex flex-1 flex-col justify-between
                    ${card.bgColor}
                    p-6
                    text-white
                  `}
                >
                  <h3 className="leading-tight font-[700] text-white text-xl">
                    {card.title}
                  </h3>

                  <Button
                    variant="outline"
                    className="
                      mt-8
                      w-full
                      rounded-full
                      border-2 border-white
                      bg-transparent
                      text-white
                      font-[700]
                      text-lg
                      px-6
                      py-3
                      hover:bg-white hover:text-slate-900
                      transition-colors
                    "
                  >
                    {card.buttonText}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
