"use client";

import { motion, useAnimationFrame, useMotionValue } from "framer-motion";
import { useRef, useState } from "react";

type Review = {
  name: string;
  role: string;
  company: string;
  rating: number;
  quote: string;
};

const REVIEWS: Review[] = [
  {
    name: "Sarah Mitchell",
    role: "Founder",
    company: "Mitchell Legal Group",
    rating: 5,
    quote:
      "Zentro Solutions operates like an in-house extension of our firm, and we don't lose opportunities because calls are handled flawlessly.",
  },
  {
    name: "Daniel Roberts",
    role: "CEO",
    company: "Roberts Roofing",
    rating: 5,
    quote:
      "Clients routinely mention how professional and responsive our business sounds.",
  },
  {
    name: "Emily Chen",
    role: "Operations Manager",
    company: "Bright Dental",
    rating: 4,
    quote:
      "We recovered hours every week without sacrificing service quality thanks to Zentro Solutions.",
  },
  {
    name: "Mark Thompson",
    role: "Owner",
    company: "Thompson Plumbing",
    rating: 5,
    quote:
      "After-hours leads are now captured instead of lost, and the ROI is clear.",
  },
  {
    name: "Olivia Perez",
    role: "Co-Founder",
    company: "Studio Aura",
    rating: 5,
    quote:
      "Clients think Zentro Solutions' receptionists are on our internal team.",
  },
  {
    name: "James Walker",
    role: "Managing Partner",
    company: "Walker & Co.",
    rating: 5,
    quote:
      "Switching to Zentro Solutions has been one of our strongest operational decisions.",
  },
];

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1 mb-6">
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className={`text-lg md:text-xl ${
            i < rating ? "text-[#FFB703]" : "text-[#CBD5E1]"
          }`}
        >
          &#9733;
        </span>
      ))}
    </div>
  );
}

export function ReviewsSection() {
  const x = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);

  const CARD_WIDTH = 420;
  const SPEED = 0.1;

  const items = [...REVIEWS, ...REVIEWS];

  useAnimationFrame((_, delta) => {
    if (paused) return;

    x.set(x.get() - delta * SPEED);

    const totalWidth = CARD_WIDTH * REVIEWS.length;
    if (Math.abs(x.get()) >= totalWidth) {
      x.set(0);
    }
  });

  return (
    <section className="layout-standard section-padding-standard my-8 mb-0">
      <h2 className="font-heading text-3xl md:text-4xl text-heading lg:text-5xl font-bold leading-tight tracking-tight mb-8 max-w-7xl mx-auto text-center">
        Trusted by
        <span className="text-accent"> Growth Focused Businesses</span>
      </h2>

      <div
        ref={containerRef}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        className="relative overflow-hidden py-12"
      >
        <motion.div style={{ x }} className="flex gap-10 will-change-transform">
          {items.map((review, index) => (
            <div
              key={index}
              className="
                  min-w-[300px] max-w-[300px]
                  md:min-w-[340px] md:max-w-[340px]
                  lg:min-w-[380px] lg:max-w-[380px]
                  rounded-[24px]
                  border border-[#102259]/10
                  px-10 py-9
                  hover:border-[#102259]/20
                  hover:shadow-[0_24px_60px_rgba(16,34,89,0.12)]
                  transition-all duration-300
                "
            >
              <Stars rating={review.rating} />

              <p className="text-lg md:text-xl leading-relaxed mb-8">
                &quot;{review.quote}&quot;
              </p>

              <div>
                <p className="font-semibold text-heading text-base md:text-lg">
                  {review.name}
                </p>
                <p className="text-sm md:text-base text-muted-foreground">
                  {review.role}, {review.company}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
