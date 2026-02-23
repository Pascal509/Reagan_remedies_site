"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { Button, Container } from "@/components/common";

const navItems = [
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Research", href: "/case-studies" },
  { label: "Contact", href: "/contact" }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 w-full border-b border-brand-soft bg-white/95 backdrop-blur">
      <Container className="flex items-center justify-between py-5 lg:py-6">
        <Link href="/" className="flex items-center gap-4">
          <span className="relative h-12 w-12 overflow-hidden rounded-full border border-brand-soft bg-white">
            <Image
              src="/images/logo.jpg"
              alt="Reagan Remedies logo"
              fill
              className="object-contain"
              sizes="48px"
              priority
            />
          </span>
          <span className="text-xl font-semibold tracking-wide text-brand-navy md:text-2xl">
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
            className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-primary"
          >
            Subscribe
          </Link>
        </nav>

        <div className="flex items-center gap-3 lg:hidden">
          <Link href="/partner-with-us">
            <Button variant="primary">Partner With Us</Button>
          </Link>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-brand-soft text-brand-navy"
            aria-label="Toggle navigation menu"
            aria-controls="mobile-nav"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <span className="sr-only">Toggle menu</span>
            <span className="block h-0.5 w-5 bg-current" />
            <span className="mt-1 block h-0.5 w-5 bg-current" />
            <span className="mt-1 block h-0.5 w-5 bg-current" />
          </button>
        </div>
      </Container>

      <div
        id="mobile-nav"
        className={[
          "lg:hidden",
          isOpen ? "block" : "hidden",
          "border-t border-brand-soft bg-white"
        ].join(" ")}
      >
        <Container className="flex flex-col gap-4 py-4">
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
            <Button variant="outline">Partner With Us</Button>
          </Link>
          <Link
            href="/subscribe"
            className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-primary"
          >
            Subscribe
          </Link>
        </Container>
      </div>
    </header>
  );
}
