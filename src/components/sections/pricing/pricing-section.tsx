"use client";

import React from "react";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { FormEvent, useState } from "react";

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
    <section className="py-16 sm:py-[100px] px-6 md:px-12" style={{ backgroundColor: "#002362" }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-start">
          {/* Left Column */}
          <div className="space-y-5 sm:space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              Plans start at $99 per month
            </h1>
            <p className="text-white leading-relaxed text-base sm:text-lg">
              With{" "}
              <span className="text-white font-semibold">Zentro Solutions</span>
              , you decide how your calls are handled: real people delivering a
              human touch or AI technology designed for speed and scale. Want
              to learn which option fits you best? Call{" "}
              <a
                href="tel:+18774692551"
                className="font-bold text-white underline"
              >
                (877) 469-2551
              </a>{" "}
              or fill out this form.
            </p>
          </div>

          {/* Right Column - Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Given name
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-white rounded bg-transparent text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Surname
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-white rounded bg-transparent text-white"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-white mb-2">
                Company
              </label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-white rounded bg-transparent text-white"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white mb-2">
                Email address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-white rounded bg-transparent text-white"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white mb-2">
                Phone
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-white rounded bg-transparent text-white"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white mb-2">
                Which service do you need?
              </label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-white rounded bg-transparent text-white"
              >
                <option value="">Select an option</option>
                <option value="virtual-receptionist">
                  Virtual Receptionist Service
                </option>
                <option value="call-answering">Call Answering Service</option>
                <option value="customer-support">Customer Support Service</option>
              </select>
            </div>

            <div className="flex justify-end pt-4">
              <button
                type="submit"
                className="px-8 py-3 border-2 border-white rounded-full font-medium text-white hover:bg-white hover:text-gray-900 transition-colors flex items-center gap-2 w-full sm:w-auto justify-center"
              >
                See pricing details <ArrowRight size={20} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
