"use client";

import Image from "next/image";
import Link from "next/link";
import { Linkedin, Mail, Twitter } from "lucide-react";
import { motion } from "framer-motion";

import { Container } from "@/components/common";

const complianceLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Use", href: "/terms" },
  { label: "Medical Disclaimer", href: "/medical-disclaimer" },
  { label: "Regulatory Information", href: "/regulatory" }
];

const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com", Icon: Linkedin },
  { label: "X", href: "https://x.com", Icon: Twitter }
];

export default function Footer() {
  return (
    <footer className="border-t border-brand-soft bg-white">
      <Container className="py-16 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="grid gap-10 md:grid-cols-3"
        >
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="relative h-10 w-10 overflow-hidden rounded-full border border-brand-soft bg-white">
                <Image
                  src="/images/logo.jpg"
                  alt="Reagan Remedies logo"
                  fill
                  className="object-contain"
                  sizes="40px"
                />
              </span>
              <p className="text-lg font-semibold text-brand-navy">
                Reagan Remedies
              </p>
            </div>
            <p className="text-sm leading-relaxed text-brand-neutral">
              Advancing clinical research and pharmaceutical innovation to improve
              patient outcomes worldwide.
            </p>
          </div>

          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-primary">
              Compliance
            </p>
            <ul className="space-y-3" aria-label="Compliance links">
              {complianceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm font-medium text-brand-neutral transition-colors hover:text-brand-navy"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-primary">
              Contact
            </p>
            <div className="space-y-3">
              <a
                href="mailto:contact@reaganremedies.com"
                className="flex items-center gap-2 text-sm font-medium text-brand-neutral transition-colors hover:text-brand-navy"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                contact@reaganremedies.com
              </a>
              <div className="flex items-center gap-4" aria-label="Social links">
                {socialLinks.map(({ href, label, Icon }) => (
                  <a
                    key={href}
                    href={href}
                    className="flex items-center gap-2 text-sm font-medium text-brand-neutral transition-colors hover:text-brand-navy"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <Icon className="h-4 w-4" aria-hidden="true" />
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <div className="mt-12 border-t border-brand-soft pt-6">
          <p className="text-xs text-brand-neutral">
            © {new Date().getFullYear()} Reagan Remedies. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
