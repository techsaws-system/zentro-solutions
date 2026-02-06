"use client";

import Image from "next/image";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

/* ================================
   CountUp Component
================================ */
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

/* ================================
   Ruby Stats Section
================================ */
export function RubyStatsSection() {
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

  return (
    <section className="w-full bg-white py-16 md:py-24 lg:py-32 px-4 md:px-10 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 md:gap-x-16 lg:gap-x-24 gap-y-8 md:gap-y-16 lg:gap-y-20 text-center">
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
              <div className="font-semibold mb-2 md:mb-3 whitespace-nowrap text-[#102259] text-xl md:text-4xl lg:text-5xl xl:text-6xl leading-none">
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
              <p className="max-w-md text-[#102259] text-xs md:text-base lg:text-lg leading-snug">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
