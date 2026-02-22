"use client";

import Image from "next/image";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { useState } from "react";

import { Button, Container } from "@/components/common";

const navItems = [
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Research", href: "/case-studies" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { data: session } = useSession();

  const userInitials = session?.user?.name
    ? session.user.name
        .split(" ")
        .map((part) => part[0])
        .slice(0, 2)
        .join("")
        .toUpperCase()
    : "RR";
  const roleLabel = session?.user?.role ?? "Subscriber";

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
          <Button variant="primary">Partner With Us</Button>
          {session?.user ? (
            <div className="flex items-center gap-3 pl-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-soft text-xs font-semibold text-brand-navy">
                {userInitials}
              </div>
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-neutral">
                {roleLabel}
              </div>
              <button
                type="button"
                onClick={() => signOut({ callbackUrl: "/" })}
                className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-primary"
              >
                Sign Out
              </button>
            </div>
          ) : (
            <Link
              href="/auth/signin"
              className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-primary"
            >
              Sign In
            </Link>
          )}
        </nav>

        <div className="flex items-center gap-3 lg:hidden">
          <Button variant="primary">Partner With Us</Button>
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
          <Button variant="outline">Partner With Us</Button>
          {session?.user ? (
            <button
              type="button"
              onClick={() => signOut({ callbackUrl: "/" })}
              className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-primary"
            >
              Sign Out
            </button>
          ) : (
            <Link
              href="/auth/signin"
              className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-primary"
            >
              Sign In
            </Link>
          )}
        </Container>
      </div>
    </header>
  );
}
