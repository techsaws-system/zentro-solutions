"use client";

import { useEffect, useMemo, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import gsap from "gsap";

import { Canvas01Props } from "@/types/canvas-interfaces";

import { cn } from "@/lib/utils";

export default function Canvas01({ children, className }: Canvas01Props) {
  const rootRef = useRef<HTMLElement | null>(null);
  const blobARef = useRef<HTMLDivElement | null>(null);
  const blobBRef = useRef<HTMLDivElement | null>(null);
  const blobCRef = useRef<HTMLDivElement | null>(null);

  const prefersReducedMotion = useReducedMotion();

  const seeds = useMemo(
    () => [
      { scale: 1.1, duration: 46 },
      { scale: 1.25, duration: 58 },
      { scale: 1.4, duration: 72 },
    ],
    [],
  );

  useEffect(() => {
    if (prefersReducedMotion) return;

    const blobs = [blobARef.current, blobBRef.current, blobCRef.current];
    if (blobs.some((b) => !b)) return;

    const ctx = gsap.context(() => {
      blobs.forEach((blob, i) => {
        gsap.fromTo(
          blob!,
          {
            xPercent: -8,
            yPercent: -6,
            rotate: 0,
          },
          {
            xPercent: 8,
            yPercent: 6,
            rotate: 360,
            duration: seeds[i].duration,
            ease: "none",
            repeat: -1,
          },
        );
      });
    }, rootRef);

    return () => ctx.revert();
  }, [prefersReducedMotion, seeds]);

  return (
    <section
      ref={(el) => {
        rootRef.current = el;
      }}
      className={cn(
        "relative isolate w-full overflow-hidden",
        "bg-[#2e6b3a]",
        "text-white",
        className,
      )}
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0">
          <div
            ref={blobARef}
            className="absolute left-[-20%] top-[-30%] h-[700px] w-[700px] opacity-[0.35] blur-[110px]"
            style={{ transform: `scale(${seeds[0].scale})` }}
          >
            <BlobSVG tone="blue" />
          </div>

          <div
            ref={blobBRef}
            className="absolute right-[-25%] top-[10%] h-[760px] w-[760px] opacity-[0.30] blur-[120px]"
            style={{ transform: `scale(${seeds[1].scale})` }}
          >
            <BlobSVG tone="violet" />
          </div>

          <div
            ref={blobCRef}
            className="absolute left-[15%] bottom-[-35%] h-[820px] w-[820px] opacity-[0.26] blur-[130px]"
            style={{ transform: `scale(${seeds[2].scale})` }}
          >
            <BlobSVG tone="cyan" />
          </div>
        </div>

        <div className="absolute inset-0 opacity-[0.08] mix-blend-overlay bg-[url('data:image/svg+xml;utf8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22160%22 height=%22160%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%222%22/%3E%3C/filter%3E%3Crect width=%22160%22 height=%22160%22 filter=%22url(%23n)%22/%3E%3C/svg%3E')]" />
      </div>

      <motion.div
        initial={prefersReducedMotion ? undefined : { opacity: 0 }}
        animate={prefersReducedMotion ? undefined : { opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative"
      >
        {children}
      </motion.div>
    </section>
  );
}

function BlobSVG({ tone }: { tone: "blue" | "violet" | "cyan" }) {
  const gradientMap = {
    blue: ["rgba(251,120,47,1)", "rgba(251,120,47,0)"] as const,
    violet: ["rgba(251,120,47,0.95)", "rgba(251,120,47,0)"] as const,
    cyan: ["rgba(251,120,47,0.9)", "rgba(251,120,47,0)"] as const,
  };

  const [from, to] = gradientMap[tone];

  return (
    <svg viewBox="0 0 600 600" className="h-full w-full">
      <defs>
        <radialGradient id={`g-${tone}`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={from} />
          <stop offset="100%" stopColor={to} />
        </radialGradient>
      </defs>
      <circle cx="300" cy="300" r="300" fill={`url(#g-${tone})`} />
    </svg>
  );
}
