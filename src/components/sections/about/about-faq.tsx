"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export function AboutFAQSection() {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const faqItems = [
    {
      question: "Customer experience, always first",
      answer:
        "We treat every interaction with customers as a chance to create a lasting impression. Our team is trained to go beyond expectations at every touchpoint.",
    },
    {
      question: "World-class training",
      answer:
        "Our comprehensive training programs equip every team member with the knowledge and skills to deliver top-tier support and service to clients.",
    },
    {
      question: "Opportunities for everyone",
      answer:
        "We are committed to an inclusive workplace where everyone can grow, learn, and succeed. We celebrate diversity and value the unique perspectives each team member brings.",
    },
    {
      question: "Two decades of proven results",
      answer:
        "With more than two decades of industry experience, we consistently deliver results for clients. Our track record is reflected in countless success stories and satisfied customers.",
    },
  ];

  return (
    <section className="w-full bg-white py-16 sm:py-20 md:py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Main Heading */}
        <div className="mb-12 sm:mb-16 md:mb-20 text-center">
          <h2 className="font-bold text-[#0B1B4D] text-3xl sm:text-4xl md:text-5xl lg:text-[70px] leading-tight">
            What makes{" "}
            <span className="text-pink-600">Zentro Solutions different?</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* LEFT — ACCORDION */}
          <div>
            {/* Our People */}
            <h3 className="font-bold text-[#0B1B4D] mb-6 text-2xl sm:text-3xl md:text-4xl lg:text-[50px]">
              Our team
            </h3>

            {/* Underline */}
            <div className="w-full h-[2px] bg-[#0B1B4D] mb-8 sm:mb-10 max-w-md" />

            {/* Accordion */}
            <div>
              {faqItems.map((item, index) => (
                <div key={index} className="border-b border-[#E5E0D8] py-6">
                  <button
                    onClick={() =>
                      setExpandedIndex(expandedIndex === index ? -1 : index)
                    }
                    className="w-full flex items-center justify-between text-left"
                  >
                    <span className="font-bold text-[#0B1B4D] text-xl sm:text-2xl lg:text-[34px]">
                      {item.question}
                    </span>

                    <ChevronDown
                      size={28}
                      className={`transition-transform text-[#0B1B4D] ${
                        expandedIndex === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {expandedIndex === index && (
                    <div className="pt-4 pr-12 max-sm:pr-2">
                      <p className="text-[#333333] leading-relaxed text-base sm:text-lg lg:text-[20px]">
                        {item.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — VIDEO (LOWER PLACEMENT) */}
          <div className="mt-12 sm:mt-16 md:mt-24">
            <div className="relative aspect-video rounded-xl overflow-hidden">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Moments Matter - What it's like being at Zentro Solutions"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
