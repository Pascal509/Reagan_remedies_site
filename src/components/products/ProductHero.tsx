"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { Button, Container } from "@/components/common";

export interface ProductHeroProps {
  title: string;
  category: string;
  description: string;
  imageSrc?: string;
  imageAlt?: string;
  imagePosition?: "left" | "right";
}

export default function ProductHero({
  title,
  category,
  description,
  imageSrc = "/images/product-hero.jpg",
  imageAlt = "Clinical product visualization",
  imagePosition = "right"
}: ProductHeroProps) {
  const isImageLeft = imagePosition === "left";

  return (
    <section className="bg-gradient-to-b from-brand-soft to-white" aria-labelledby="product-hero-title">
      <Container className="py-20 md:py-28 lg:py-32">
        <div className="grid items-center gap-12 md:grid-cols-[1.1fr_0.9fr] lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={isImageLeft ? "md:order-2" : "md:order-1"}
          >
            <div className="max-w-2xl space-y-6">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-primary md:text-sm">
                {category}
              </p>
              <h1
                id="product-hero-title"
                className="text-4xl font-semibold leading-[1.05] text-brand-navy md:text-5xl lg:text-6xl"
              >
                {title}
              </h1>
              <p className="text-base leading-relaxed text-brand-neutral md:text-lg">
                {description}
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <Button variant="primary" className="px-6 py-3 text-sm md:text-base">
                  Learn More
                </Button>
                <Button variant="outline" className="px-6 py-3 text-sm md:text-base">
                  Contact Provider
                </Button>
                <Button variant="outline" className="px-6 py-3 text-sm md:text-base">
                  View Documentation
                </Button>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={isImageLeft ? "md:order-1" : "md:order-2"}
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-brand-soft bg-brand-soft/40 shadow-md">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
