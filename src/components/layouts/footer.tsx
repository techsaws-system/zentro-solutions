import Link from "next/link";

import { FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

function Footer() {
  return (
    <footer className="layout-standard section-padding-standard border-t-2 border-border bg-background">
      <div className="grid gap-10 md:grid-cols-3">
        <div className="flex flex-col gap-4 lg:col-span-1 md:col-span-2 col-span-1">
          <div className="text-3xl font-heading font-bold text-heading tracking-tight">
            Zentro Solutions<span className="text-primary">.</span>
          </div>

          <p className="text-sm text-muted-foreground max-w-xs">
            Zentro Solutions offers 24/7 live human support for calls, chat,
            email, and social media so you never miss a lead, appointment, or
            customer inquiry.
          </p>

          <div className="flex items-center gap-4 mt-4">
            <Link
              href="/"
              className="text-muted-foreground hover:text-heading transition"
            >
              <FaXTwitter />
            </Link>
            <Link
              href="/"
              className="text-muted-foreground hover:text-heading transition"
            >
              <FaInstagram />
            </Link>
            <Link
              href="/"
              className="text-muted-foreground hover:text-heading transition"
            >
              <FaLinkedin />
            </Link>
          </div>
        </div>

        <div>
          <h4 className="font-heading text-sm font-bold text-heading mb-6 uppercase">
            Pages
          </h4>
          <ul className="space-y-4 text-sm font-medium">
            <li>
              <Link href="/" className="hover:text-primary transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-primary transition">
                About us
              </Link>
            </li>
            <li>
              <Link href="/pricing" className="hover:text-primary transition">
                Pricing
              </Link>
            </li>
          </ul>
        </div>

        <div className="lg:col-span-1 md:col-span-3 col-span-1">
          <h4 className="ffont-heading text-sm font-bold text-heading uppercase mb-2">
            Subscribe to updates
          </h4>

          <p className="text-sm text-muted-foreground mb-4 max-w-sm">
            Get product updates, pricing changes, and feature launches. No spam.
          </p>

          <form className="flex gap-2 w-full">
            <Input
              type="email"
              placeholder="Enter your email"
              className="h-12 border-border border px-4 w-full"
              required
            />
            <Button type="submit" className="h-12 px-4 flex-shrink-0">
              Subscribe
            </Button>
          </form>
        </div>
      </div>

      <div className="mt-12 flex flex-col gap-4 border-t border-border pt-6 md:flex-row md:items-center md:justify-between max-md:items-center">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Zentro Solutions. All rights reserved.
        </p>

        <div className="flex gap-6 text-xs font-medium">
          <a
            href="#"
            className="text-muted-foreground hover:text-primary transition"
          >
            Privacy policy
          </a>
          <a
            href="#"
            className="text-muted-foreground hover:text-primary transition"
          >
            Terms of use
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
