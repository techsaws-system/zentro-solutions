"use client";

import Image from "next/image";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import { ChevronsRightIcon } from "lucide-react";

export function FeaturesCapabilitiesSection() {
  function CountUp({
    value,
    duration = 1.4,
  }: {
    value: number;
    duration?: number;
  }) {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-80px" });
    const reduceMotion = useReducedMotion();
    const [display, setDisplay] = useState(0);

    useEffect(() => {
      if (!isInView) return;

      if (reduceMotion) {
        setDisplay(value);
        return;
      }

      const startTime = performance.now();

      const tick = (now: number) => {
        const progress = Math.min((now - startTime) / (duration * 1000), 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setDisplay(Math.floor(eased * value));

        if (progress < 1) requestAnimationFrame(tick);
      };

      requestAnimationFrame(tick);
    }, [isInView, value, duration, reduceMotion]);

    return <span ref={ref}>{display.toLocaleString()}</span>;
  }

  const stats = [
    {
      icon: "/images/ruby-icon1.png",
      value: 20,
      suffix: "+",
      label: "years helping small businesses succeed",
    },
    {
      icon: "/images/ruby-icon2.png",
      value: 1600000,
      suffix: "+",
      label: "leads captured per year for Zentro Solutions customers",
    },
    {
      icon: "/images/ruby-icon3.png",
      static: "<10 seconds",
      label: "average time to answer",
    },
    {
      icon: "/images/ruby-icon4.png",
      value: 1100000,
      suffix: "+",
      label: "conversations handled per month",
    },
    {
      icon: "/images/ruby-icon5.png",
      value: 20000,
      label: "robocalls blocked per month",
    },
    {
      icon: "/images/ruby-icon6.png",
      value: 15000,
      suffix: "+",
      label: "businesses trust Zentro Solutions",
    },
  ];

  const leftFeatures = [
    "Live answering by people, 24/7",
    "Flexible call routing options",
    "Lead intake and qualification",
    "Payment collection",
  ];

  const rightFeatures = [
    "English and Spanish coverage, 24/7",
    "Instant notifications",
    "Appointment booking",
    "Outbound calling",
  ];

  return (
    <section className="w-full !layout-standard text-center section-padding-standard my-8 pb-0 mb-0">
      <h2 className="font-heading text-3xl md:text-4xl text-heading lg:text-5xl font-bold leading-tight tracking-tight mb-8 md:mb-16">
        Zentro Solutions<span className="text-primary">.</span>{" "}
        <span className="text-accent">Capabilities</span>
      </h2>

      <div className="max-w-6xl mx-auto mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 lg:gap-x-24 gap-y-8 md:gap-y-10 text-left">
          <div className="space-y-6 md:space-y-8">
            {leftFeatures.map((item) => (
              <div key={item} className="flex items-center gap-5">
                <ChevronsRightIcon size={14} strokeWidth={3} />

                <p className="text-base md:text-lg lg:text-xl font-semibold text-foreground leading-snug">
                  {item}
                </p>
              </div>
            ))}
          </div>

          <div className="space-y-6 md:space-y-8">
            {rightFeatures.map((item) => (
              <div key={item} className="flex items-center gap-5">
                <ChevronsRightIcon size={14} strokeWidth={3} />

                <p className="text-base md:text-lg lg:text-xl font-semibold text-foreground leading-snug">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="layout-standard mb-[7rem]">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-4 md:gap-x-16 lg:gap-x-24 gap-y-8 md:gap-y-16 lg:gap-y-20 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex flex-col items-center"
            >
              {/* ================= Icon Wrapper (Alignment Lock) ================= */}
              <div className="h-[100px] md:h-[140px] lg:h-[180px] flex items-center justify-center mb-3 md:mb-6">
                <Image
                  src={stat.icon}
                  alt=""
                  width={185}
                  height={178}
                  priority={index < 3}
                  className="w-auto h-auto max-w-[80px] md:max-w-[140px] lg:max-w-[185px]"
                />
              </div>

              {/* ================= Number ================= */}
              <div className="font-extrabold mb-2 md:mb-3 whitespace-nowrap text-heading font-heading text-2xl md:text-3xl lg:text-4xl leading-none">
                {"static" in stat ? (
                  stat.static
                ) : (
                  <>
                    <CountUp value={stat.value!} />
                    {stat.suffix ?? ""}
                  </>
                )}
              </div>

              {/* ================= Label ================= */}
              <p className="max-w-md text-base md:text-lg lg:text-xl font-semibold text-foreground leading-snug">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
