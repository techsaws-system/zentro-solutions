"use client";

import React from "react";

import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";

export function NewsletterSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    newsletter: false,
    terms: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#001a4d] mb-6">
            Stay current on everything Zentro Solutions.
          </h2>
          <p className="text-lg text-gray-600">
            Get the latest from Zentro Solutions in our monthly newsletter,
            Minutes - including tips, insights, in-depth how-tos, and more.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="First name (required)"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E85D75] focus:border-transparent placeholder-gray-400"
              required
            />
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Last name (required)"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E85D75] focus:border-transparent placeholder-gray-400"
              required
            />
          </div>

          {/* Email Field */}
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email address (required)"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E85D75] focus:border-transparent placeholder-gray-400"
            required
          />

          {/* Checkboxes */}
          <div className="space-y-4">
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                name="newsletter"
                checked={formData.newsletter}
                onChange={handleChange}
                className="w-5 h-5 mt-0.5 border border-gray-300 rounded focus:ring-2 focus:ring-[#E85D75]"
              />
              <span className="text-gray-700">
                I agree to receive the Zentro Solutions newsletter and can opt
                out anytime.
              </span>
            </label>

            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                name="terms"
                checked={formData.terms}
                onChange={handleChange}
                className="w-5 h-5 mt-0.5 border border-gray-300 rounded focus:ring-2 focus:ring-[#E85D75]"
                required
              />
              <span className="text-gray-700">
                I agree to the Zentro Solutions{" "}
                <a
                  href="#privacy"
                  className="text-[#FF9500] hover:underline font-semibold"
                >
                  privacy statement
                </a>{" "}
                and{" "}
                <a
                  href="#terms"
                  className="text-[#FF9500] hover:underline font-semibold"
                >
                  terms of service
                </a>
                .
              </span>
            </label>
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <Button
              type="submit"
              className="w-full md:w-auto px-8 py-3 bg-[#E85D75] hover:bg-[#d14960] text-white font-bold rounded-full transition-colors"
            >
              Join the list
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
