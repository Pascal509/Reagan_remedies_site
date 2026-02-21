"use client";

import { motion } from "framer-motion";

import { Button, Container } from "@/components/common";

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-brand-soft to-white" aria-labelledby="hero-heading">
      <Container className="py-24 md:py-32 lg:py-36">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl space-y-8"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-primary md:text-sm">
            Reagan Remedies
          </p>
          <h1
            id="hero-heading"
            className="text-5xl font-semibold leading-[1.05] text-brand-navy md:text-6xl lg:text-7xl"
          >
            Advancing Medicine. Improving Lives.
          </h1>
          <p className="text-base leading-relaxed text-brand-neutral md:text-lg lg:text-xl">
            Reagan Remedies is committed to innovative research and high-quality
            pharmaceutical solutions.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <Button variant="primary" className="px-6 py-3 text-sm md:text-base">
              Explore Our Research
            </Button>
            <Button variant="outline" className="px-6 py-3 text-sm md:text-base">
              View Our Products
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
