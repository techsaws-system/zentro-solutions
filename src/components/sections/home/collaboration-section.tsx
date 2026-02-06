"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import Client01Logo from "../../../../public/logos/client-01-logo.svg";
import Client02Logo from "../../../../public/logos/client-02-logo.svg";
import Client03Logo from "../../../../public/logos/client-03-logo.svg";
import Client04Logo from "../../../../public/logos/client-04-logo.svg";
import Client05Logo from "../../../../public/logos/client-05-logo.svg";
import Client06Logo from "../../../../public/logos/client-06-logo.svg";
import Client07Logo from "../../../../public/logos/client-07-logo.svg";

const CLIENT_LOGOS = [
  Client01Logo,
  Client02Logo,
  Client03Logo,
  Client04Logo,
  Client05Logo,
  Client06Logo,
  Client07Logo,
];

function CollaborationSection() {
  return (
    <section className="pb-16 relative overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />

      <motion.div
        className="flex items-center gap-16 w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 30,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {[...CLIENT_LOGOS, ...CLIENT_LOGOS].map((logo, index) => (
          <div
            key={index}
            className="flex items-center justify-center min-w-[160px]"
          >
            <Image
              src={logo}
              alt="Partner brand logo"
              className="opacity-70 h-[40px] lg:h-[50px] w-auto grayscale transition hover:opacity-100 hover:grayscale-0"
            />
          </div>
        ))}
      </motion.div>
    </section>
  );
}

export default CollaborationSection;
