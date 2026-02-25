"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

import FaqImg from "../../../../public/images/faq-img.jpg";

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
    <section className="w-full !layout-standard section-padding-standard my-8">
      <div className="text-center lg:mb-20 md:mb-8 mb-6">
        <h2 className="text-4xl md:text-5xl lg:text-6xl leading-tight font-heading font-bold">
          What Makes Zentro Solutions<span className="text-primary">.</span>{" "}
          <span className="text-accent">different?</span>
        </h2>
      </div>

      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          {faqItems.map((item, index) => (
            <div key={index} className="border-b border-border py-6">
              <button
                onClick={() =>
                  setExpandedIndex(expandedIndex === index ? -1 : index)
                }
                className="w-full flex items-center justify-between text-left"
              >
                <span className="font-medium text-heading md:text-xl text-lg lg:text-2xl">
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
                <div className="pt-4 pr-12 max-md:pr-2">
                  <p className="leading-relaxed font-medium text-base md:text-lg lg:text-xl">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="">
          <div className="relative aspect-video rounded-xl overflow-hidden">
            <Image src={FaqImg} alt="Ask Zentro Solutions." className="w-full h-full object-cover object-center"/>
          </div>
        </div>
      </div>
    </section>
  );
}
