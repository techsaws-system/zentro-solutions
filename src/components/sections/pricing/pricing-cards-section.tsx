"use client";

import { Button } from "@/components/ui/button";

import {  ArrowRight } from "lucide-react";

type Plan = {
  title: string;
  price?: string;
  features?: string[];
  customFeatures?: string[];
  highlight?: boolean;
  custom?: boolean;
  subtitle?: string;
  cta: string;
};

const plans: Plan[] = [
  {
    title: "Email Support",
    price: "Starting from $349 / month",
    features: [
      "Customer email replies",
      "Order tracking & updates",
      "Refund & return assistance",
      "FAQ & customer inquiries",
      "6 days per week coverage",
      "Dedicated support agent",
    ],
    cta: "Get Started",
  },
  {
    title: "Email + Live Chat Support",
    price: "Starting from $549 / month",
    features: [
      "Everything in Package A",
      "Live chat customer support",
      "Faster response times",
      "7 days per week coverage",
      "Up to 150 customer chats monthly",
      "Dedicated support team",
    ],
    cta: "Get Started",
  },
  {
    title: "Full 24/7 Customer Support",
    price: "Starting from $849 / month",
    features: [
      "Email + live chat support",
      "24/7 customer coverage",
      "Order management assistance",
      "Priority support handling",
      "Multiple dedicated agents",
      "Weekly performance reporting",
    ],
    highlight: true,
    cta: "Talk to Sales",
  },
  {
    title: "Custom Plans Available",
    custom: true,
    subtitle:
      "Pricing may vary depending on support volume, business size, and customer message load. We also offer tailored packages based on your specific needs.",
    customFeatures: [
      "Flexible team size and coverage hours",
      "Channel mix based on your workflow",
      "Service levels aligned to your goals",
      "Monthly optimization and growth reviews",
    ],
    cta: "Request Custom Quote",
  },
];

export function PricingCardsSection() {
  return (
    <section className="layout-standard section-padding-standard mt-8 pb-4">
      <div className="text-center mb-16">
        <h2 className="font-heading text-3xl md:text-4xl text-heading lg:text-5xl font-bold leading-tight tracking-tight max-w-7xl mx-auto text-center">
          Premium Customer Support <span className="text-accent">Packages</span>
        </h2>
        <p className="mt-4 lg:text-xl md:text-lg text-base font-medium">
          Built for performance, retention, and operational excellence.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {plans.map((plan, i) => (
          <div
            key={i}
            data-card
            className="relative rounded-3xl border border-border bg-card p-8 flex flex-col shadow-sm hover:shadow-xl transition-all duration-300"
          >
            {plan.highlight && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-secondary text-white text-xs font-bold px-4 py-2 rounded-full text-heading">
                MOST POPULAR
              </div>
            )}

            <h3 className="lg:text-2xl md:text-2xl text-xl text-heading font-heading font-bold">
              {plan.title}
            </h3>

            {plan.price && (
              <p className="mt-1 md:text-lg text-base font-semibold text-gray-700">
                {plan.price}
              </p>
            )}

            {plan.features && (
              <ul className="mt-6 space-y-4 text-sm text-gray-700 flex-grow">
                {plan.features.map((f, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="w-6 h-6 flex items-center justify-center rounded-full bg-primary flex-shrink-0 text-heading text-xs font-bold">
                      ✓
                    </span>
                    <span className="font-medium">{f}</span>
                  </li>
                ))}
              </ul>
            )}

            {plan.custom && (
              <div className="mt-2 flex-grow">
                <p className="text-sm font-medium">{plan.subtitle}</p>
                {plan.customFeatures && (
                  <ul className="mt-6 space-y-4 text-sm">
                    {plan.customFeatures.map((f, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="w-6 h-6 flex items-center justify-center rounded-full bg-primary flex-shrink-0 text-heading text-xs font-bold">
                          ✓
                        </span>
                        <span className="font-medium text-sm">{f}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}

            <Button
              className={`mt-8 h-[56px] w-full rounded-xl text-base
                ${
                  plan.highlight
                    ? "bg-secondary hover:bg-secondary-hover text-white"
                    : "bg-black text-primary-foreground hover:bg-black/80"
                }`}
            >
              {plan.cta} <ArrowRight />
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
}
