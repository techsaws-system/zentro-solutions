"use client";

import Image from "next/image";
import { motion } from "framer-motion";

function BenefitsSection() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="section-padding-standard my-8 max-w-7xl mx-auto px-6 md:px-10 lg:px-12 space-y-24 md:space-y-32">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUp}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center"
      >
        <div className="space-y-8 max-w-xl">
          <h2 className="text-4xl md:text-5xl lg:text-6xl leading-tight font-semibold text-white font-heading">
            Take back hours
            <br />
            in your day.
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl leading-relaxed text-white/80">
            Zentro Solutions customers reclaim{" "}
            <strong className="text-primary">10+ hours every month</strong> by
            handing off calls to real, trained professionals with confidence.
          </p>
        </div>

        {/* Image */}
        <motion.div
          whileHover={{ y: -8 }}
          transition={{ duration: 0.4 }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative w-full max-w-[420px] h-[420px] sm:h-[480px] lg:h-[520px] rounded-t-full overflow-hidden bg-gradient-to-b from-pink-400 to-pink-600 shadow-[0_40px_120px_rgba(236,72,153,0.35)]">
            <Image
              src="/images/img1.png"
              alt="Zentro Solutions support specialist"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>
      </motion.div>

      {/* ===== SUPPORTING BENEFIT #1 ===== */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUp}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
        className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center"
      >
        {/* Image */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.4 }}
          className="relative order-2 lg:order-1 flex justify-center lg:justify-start"
        >
          <div className="relative w-full max-w-[420px] h-[400px] sm:h-[440px] lg:h-[480px] rounded-[48px] overflow-hidden bg-gradient-to-br from-orange-400 to-orange-600 shadow-[0_40px_120px_rgba(249,115,22,0.35)]">
            <Image
              src="/images/img2.png"
              alt="Customer support team"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>

        {/* Text */}
        <div className="space-y-6 max-w-xl order-1 lg:order-2">
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight text-white">
            Raise the bar on
            <br />
            customer service.
          </h3>
          <p className="text-lg md:text-xl lg:text-2xl leading-relaxed text-white/80 font-heading">
            Callers reach a real person every time, and our average answer time
            is <strong className="text-primary">under ten seconds</strong>.
          </p>
        </div>
      </motion.div>

      {/* ===== SUPPORTING BENEFIT #2 ===== */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUp}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center"
      >
        {/* Text */}
        <div className="space-y-6 max-w-xl">
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight text-white font-heading">
            Build your
            <br />
            business.
          </h3>
          <p className="text-lg md:text-xl lg:text-2xl leading-relaxed text-white/80">
            Zentro Solutions captures over{" "}
            <strong className="text-primary">
              1.6 million leads each year
            </strong>{" "}
            for businesses of every size, from law firms to startups.
          </p>
        </div>

        {/* Image */}
        <motion.div
          whileHover={{ y: -6 }}
          transition={{ duration: 0.4 }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative w-full max-w-[420px] h-[420px] sm:h-[480px] lg:h-[520px] rounded-bl-full overflow-hidden bg-gradient-to-b from-teal-400 to-teal-600 shadow-[0_40px_120px_rgba(20,184,166,0.35)]">
            <Image
              src="/images/img3.png"
              alt="Business growth imagery"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default BenefitsSection;
