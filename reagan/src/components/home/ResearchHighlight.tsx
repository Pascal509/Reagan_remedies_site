"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { Container, Section } from "@/components/common";

export interface ResearchHighlightProps {
  imagePosition?: "left" | "right";
  imageSrc?: string;
  imageAlt?: string;
}

const textVariants = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
  }
};

const imageVariants = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
  }
};

export default function ResearchHighlight({
  imagePosition = "right",
  imageSrc = "/images/research.jpg",
  imageAlt = "Research scientists collaborating in a clinical lab"
}: ResearchHighlightProps) {
  const isImageLeft = imagePosition === "left";

  return (
    <Section
      id="research"
      className="bg-white"
      aria-labelledby="research-highlight-heading"
    >
      <Container>
        <div className="grid items-center gap-12 md:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <motion.div
            variants={imageVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
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

          <motion.div
            variants={textVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className={isImageLeft ? "md:order-2" : "md:order-1"}
          >
            <div className="space-y-7">
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-brand-primary">
                Research & Innovation
              </p>
              <h2
                id="research-highlight-heading"
                className="text-4xl font-semibold leading-tight text-brand-navy md:text-5xl"
              >
                Leading breakthroughs in therapeutic science
              </h2>
              <p className="text-base leading-relaxed text-slate-600 md:text-lg">
                Our multidisciplinary teams partner with global institutions to
                accelerate discovery, validate safety, and translate scientific
                advances into trusted, patient-centric therapies.
              </p>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
