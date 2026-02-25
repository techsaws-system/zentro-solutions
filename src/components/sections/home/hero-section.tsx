"use client";

import Image from "next/image";

import HeroImg from "../../../../public/images/hero-img.png";

function HeroSection() {
  return (
    <section className="layout-standard section-padding-standard max-lg:my-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-16">
        {/* LEFT CONTENT */}
        <div className="flex flex-col gap-6 lg:max-w-3xl items-center text-center lg:items-start lg:text-left">
          <span className="inline-flex w-fit items-center rounded-full border border-[#99c476]/50 px-4 py-1 text-xs font-semibold tracking-wide text-secondary bg-[#99c476]/30">
            Live Human Support, 24/7
          </span>

          <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold text-heading leading-tight">
            Every lead captured. <br />
            <span className="text-accent">Every customer answered.</span>
          </h1>

          <p className="text-sub-heading text-base md:text-lg leading-relaxed">
            Around the clock, Zentro Solutions delivers live human support for
            calls, chat, email, and social media so every inquiry gets a
            response, every appointment gets booked, and every opportunity is
            secured.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-4 pt-4 w-full sm:w-auto">
            <span className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary-hover transition md:order-1 order-2 w-full sm:w-auto cursor-pointer">
              Get started today
            </span>

            <a
              href="/about"
              className="inline-flex items-center bg-black text-primary-foreground justify-center rounded-lg border border-border px-6 py-3 text-sm font-semibold hover:bg-black/80 transition md:order-2 order-1 w-full sm:w-auto"
            >
              Explore Zentro Solutions<span className="text-primary">.</span>
            </a>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row flex-wrap items-center gap-4 sm:gap-6 text-sm text-sub-heading">
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-green-500" />
              Live agents on duty 24/7
            </span>

            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-green-500" />
              Trusted by service businesses worldwide
            </span>

            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-green-500" />
              People-first. No bots.
            </span>
          </div>
        </div>

        <div className="relative mt-4 lg:mt-0 hidden md:block">
          <div className="hero-image-mask">
            <Image
              src={HeroImg}
              alt="Live support agent"
              priority
              className="w-[260px] sm:w-[320px] md:w-[420px] lg:w-[520px] lg:ml-auto max-lg:mx-auto h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
