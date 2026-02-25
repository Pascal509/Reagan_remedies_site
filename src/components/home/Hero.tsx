"use client";

import Image from "next/image";
import Link from "next/link";
import { FlaskConical, Pill } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

import { Container } from "@/components/common";

const heroImages = [
  "/images/reagan2.jpg",
  "/images/reagan3.jpg",
  "/images/reagan4.jpg"
];

const SLIDE_DURATION_MS = 5000;

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % heroImages.length);
    }, SLIDE_DURATION_MS);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative overflow-hidden bg-brand-navy"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0" aria-hidden="true">
        {heroImages.map((src, index) => (
          <motion.div
            key={src}
            initial={{ opacity: 0 }}
            animate={{
              opacity: index === activeIndex ? 1 : 0,
              scale: index === activeIndex ? 1.03 : 1
            }}
            transition={{
              duration: reduceMotion ? 0.01 : 1.8,
              ease: [0.22, 1, 0.36, 1]
            }}
            className="absolute inset-0"
          >
            <Image
              src={src}
              alt=""
              aria-hidden="true"
              fill
              priority={index === 0}
              loading={index === 0 ? "eager" : "lazy"}
              className="object-cover"
              sizes="100vw"
            />
          </motion.div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/95 via-brand-navy/70 to-brand-navy/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/70 via-transparent to-transparent" />
      </div>

      <Container className="relative py-24 md:py-32 lg:py-36">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl space-y-8"
        >
          <h1
            id="hero-heading"
            className="text-5xl font-semibold leading-[1.05] text-white md:text-6xl lg:text-7xl"
          >
            Advancing Medicine. Improving Lives.
          </h1>
          <p className="text-base leading-relaxed text-white/80 md:text-lg lg:text-xl">
            Reagan Remedies is committed to innovative research and high-quality
            pharmaceutical solutions.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <Link
              href="#research"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-brand-primary px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-primary/90 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 md:text-base"
            >
              <FlaskConical className="h-4 w-4" aria-hidden="true" />
              Explore Our Research
            </Link>
            <Link
              href="#products"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-brand-primary px-6 py-3 text-sm font-semibold text-brand-primary transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 md:text-base"
            >
              <Pill className="h-4 w-4" aria-hidden="true" />
              View Our Products
            </Link>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
