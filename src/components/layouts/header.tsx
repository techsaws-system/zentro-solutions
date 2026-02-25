"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Image from "next/image";

import { Button } from "@/components/ui/button";

import { cn } from "@/lib/utils";

import Logo from "../../../public/favicons/logo.png"

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Pricing", href: "/pricing" },
];

function Header() {
  const patname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -12, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn(
        "sticky top-0 z-50 w-full",
        "border-b border-border",
        "bg-background",
      )}
    >
      <div className="layout-standard h-[90px] flex items-center justify-between">
        <Link href="/">
          <Image
            src={Logo}
            alt="Zentro Solutions | Every Call Answered. Every Customer Covered. h-auto"
            height={70}
          />
        </Link>

        <nav className="hidden md:flex items-center lg:gap-8 gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "relative text-sm font-semibold uppercase transition",
                link.href === patname
                  ? "text-primary"
                  : "text-heading hover:text-primary",
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3 relative">
          <Link
            href="mailto:info@zentrosolutions.com"
            className="lg:inline-flex text-sm font-medium hover:text-secondary transition max-lg:hidden"
          >
            info@zentrosolutions.com
          </Link>

          <Button className="hover:bg-primary-hover md:h-[45px] h-[40px] bg-primary">
            Call us today
          </Button>

          <button
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-border text-heading hover:text-primary transition"
          >
            <span className="sr-only">Open menu</span>
            <span className="flex flex-col gap-1.5">
              <span className="h-0.5 w-6 bg-current" />
              <span className="h-0.5 w-6 bg-current" />
              <span className="h-0.5 w-6 bg-current" />
            </span>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden absolute right-4 top-[90px] z-50 w-56 rounded-lg border border-border bg-background shadow-lg">
          <nav className="py-3 px-3 flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={cn(
                  "text-sm font-semibold uppercase transition px-3 py-2 rounded-md",
                  link.href === patname
                    ? "text-primary bg-muted"
                    : "text-heading hover:text-primary hover:bg-muted",
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </motion.header>
  );
}

export default Header;
