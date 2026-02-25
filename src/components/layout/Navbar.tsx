"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail } from "lucide-react";
import { useState } from "react";

import { Button, Container } from "@/components/common";

const navItems = [
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Research", href: "/case-studies" },
  { label: "Contact", href: "/contact" }
];

const mobileNavItems = [
  { label: "Products", href: "/products" },
  { label: "Research", href: "/case-studies" },
  { label: "About", href: "/about" },
  { label: "Partner With Us", href: "/partner-with-us" },
  { label: "Contact", href: "/contact" }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 w-full border-b border-brand-soft bg-white/95 backdrop-blur">
      <Container className="flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-3">
          <span className="relative h-10 w-10 overflow-hidden rounded-full border border-brand-soft bg-white md:h-12 md:w-12">
            <Image
              src="/images/logo.jpg"
              alt="Reagan Remedies logo"
              fill
              className="object-contain"
              sizes="48px"
              priority
            />
          </span>
          <span className="text-lg font-semibold tracking-tight text-brand-navy md:text-2xl">
            Reagan Remedies
          </span>
        </Link>

        <nav className="hidden items-center gap-10 lg:flex" aria-label="Primary">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-brand-neutral transition-colors hover:text-brand-navy"
            >
              {item.label}
            </Link>
          ))}
          <Link href="/partner-with-us">
            <Button variant="primary">Partner With Us</Button>
          </Link>
          <Link
            href="/subscribe"
            className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-primary"
          >
            <Mail className="h-3.5 w-3.5" aria-hidden="true" />
            Subscribe
          </Link>
        </nav>

        <div className="flex items-center lg:hidden">
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-brand-soft text-brand-navy transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 hover:bg-brand-soft/50"
            aria-label="Toggle navigation"
            aria-controls="mobile-nav"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <svg
              aria-hidden="true"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <line x1="4" y1="7" x2="20" y2="7" />
              <line x1="4" y1="12" x2="20" y2="12" />
              <line x1="4" y1="17" x2="20" y2="17" />
            </svg>
          </button>
        </div>
      </Container>

      <div
        id="mobile-nav"
        className={[
          "lg:hidden",
          "border-t border-brand-soft bg-white shadow-sm transition-all duration-200 ease-out",
          isOpen
            ? "max-h-[520px] translate-y-0 opacity-100"
            : "pointer-events-none max-h-0 -translate-y-2 opacity-0"
        ].join(" ")}
      >
        <Container className="flex flex-col px-4 py-4">
          <div className="flex flex-col">
            {mobileNavItems.map((item) => (
              <Link
                key={item.href + item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="rounded-md px-3 py-3 text-base font-medium text-brand-navy transition hover:bg-brand-soft/50"
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="my-4 h-px w-full bg-brand-soft" />
          <Link
            href="/subscribe"
            className="w-full"
            onClick={() => setIsOpen(false)}
          >
            <Button variant="primary" className="w-full">
              Subscribe
            </Button>
          </Link>
        </Container>
      </div>
    </header>
  );
}
