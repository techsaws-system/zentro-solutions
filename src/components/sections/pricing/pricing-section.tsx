"use client";

import React from "react";

import { ArrowDown, PhoneCall } from "lucide-react";
import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";

export function PricingSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    phone: "",
    service: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section className="py-16 sm:py-[100px] layout-standard">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-start">
        <div className="space-y-5 sm:space-y-6">
          <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Plans Start at <br />{" "}
            <span className="text-primary font-extrabold">$349</span> / month
          </h1>
          <p className="text-white/80 text-lg md:text-2xl !leading-relaxed">
            With{" "}
            <span className="text-white font-semibold">
              Zentro Solutions<span className="text-primary">.</span>
            </span>
            , you decide how your calls are handled: real people delivering a
            human touch or AI technology designed for speed and scale. Want to
            learn which option fits you best? Call or fill out this form.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-4 pt-4 w-full sm:w-auto">
            <span className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary-hover transition md:order-1 order-2 w-full sm:w-auto cursor-pointer">
              <PhoneCall
                strokeWidth={3}
                className="mr-2 -translate-y-[1px]"
                size={16}
              />{" "}
              Call Now
            </span>

            <a
              href="/about"
              className="inline-flex items-center bg-black text-primary-foreground justify-center rounded-lg border border-border px-6 py-3 text-sm font-semibold hover:bg-black/80 transition md:order-2 order-1 w-full sm:w-auto group border-none"
            >
              See Pricing Details{" "}
              <ArrowDown
                strokeWidth={3}
                className="ml-2 text-primary -translate-y-[1px] group-hover:animate-bounce"
                size={16}
              />
            </a>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm md:text-base font-medium text-white mb-2 uppercase font-heading">
                Given name
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full px-4 py-3 border-4 border-accent rounded-lg bg-transparent text-white focus-within:outline-none focus-within:ring-0"
              />
            </div>
            <div>
              <label className="block text-sm md:text-base font-medium text-white mb-2 uppercase font-heading">
                Surname
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full px-4 py-3 border-4 border-accent rounded-lg bg-transparent text-white focus-within:outline-none focus-within:ring-0"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm md:text-base font-medium text-white mb-2 uppercase font-heading">
              Company
            </label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full px-4 py-3 border-4 border-accent rounded-lg bg-transparent text-white focus-within:outline-none focus-within:ring-0"
            />
          </div>

          <div>
            <label className="block text-sm md:text-base font-medium text-white mb-2 uppercase font-heading">
              Email address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border-4 border-accent rounded-lg bg-transparent text-white focus-within:outline-none focus-within:ring-0"
            />
          </div>

          <div>
            <label className="block text-sm md:text-base font-medium text-white mb-2 uppercase font-heading">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 border-4 border-accent rounded-lg bg-transparent text-white focus-within:outline-none focus-within:ring-0"
            />
          </div>

          <div>
            <label className="block text-sm md:text-base font-medium text-white mb-2 uppercase font-heading">
              Which service do you need?
            </label>
            <input
              type="text"
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full px-4 py-3 border-4 border-accent rounded-lg bg-transparent text-white focus-within:outline-none focus-within:ring-0"
            />
          </div>

          <div className="flex justify-end pt-4">
            <Button
              type="submit"
              className="!px-8 !py-6 bg-primary rounded-full text-heading hover:bg-primary-hover text-sm md:text-base font-bold"
            >
              Submit Your Form
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
