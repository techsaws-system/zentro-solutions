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
    <section className="mb-[7rem]">
      <div className="max-w-2xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl text-heading lg:text-5xl font-bold leading-tight tracking-tight mb-6">
            Stay current on <span className="text-accent">everything</span> Zentro Solutions
            <span className="text-primary">.</span>
          </h2>
          <p className="text-lg font-medium">
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
              className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent placeholder-gray-400"
              required
            />
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Last name (required)"
              className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent placeholder-gray-400"
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
            className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent placeholder-gray-400"
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
                className="w-5 h-5 mt-0.5 border border-border rounded focus:ring-2 focus:ring-primary"
                required
              />
              <span>
                I agree to the Zentro Solutions{" "}
                <a
                  href="#privacy"
                  className="text-primary hover:underline font-semibold"
                >
                  privacy statement
                </a>{" "}
                and{" "}
                <a
                  href="#terms"
                  className="text-primary hover:underline font-semibold"
                >
                  terms of service
                </a>
                .
              </span>
            </label>
          </div>

          <div className="pt-4">
            <Button
              type="submit"
              className="w-full md:w-auto px-8 py-3 bg-secondary hover:bg-secondary-hover text-white font-bold rounded-full transition-colors"
            >
              Join the list
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
