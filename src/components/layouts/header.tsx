"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";

import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Pricing", href: "/pricing" },
];

function Header() {
  const patname = usePathname();

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
        <Link
          href="/"
          className="font-heading lg:text-3xl text-xl font-bold text-heading tracking-tight"
        >
          Zentro Solutions
          <span className="text-primary">.</span>
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

        <div className="flex items-center gap-3">
          <Link
            href="mailto:info@zentrosolutions.com"
            className="lg:inline-flex text-sm font-medium hover:text-accent transition max-lg:hidden"
          >
            info@zentrosolutions.com
          </Link>

          <Button size="sm" className="hover:bg-primary-hover">Call us</Button>
        </div>
      </div>
    </motion.header>
  );
}

export default Header;
