"use client";

import Link from "next/link";
import { Newspaper } from "lucide-react";
import { motion } from "framer-motion";

import { Container, Section, SectionHeader } from "@/components/common";

const posts = [
  {
    title: "Reagan Remedies expands Phase III oncology trials",
    description:
      "New multicenter studies advance patient access to precision immunotherapies across 12 countries.",
    href: "/case-studies"
  },
  {
    title: "Breakthrough designation for next-gen cardiology platform",
    description:
      "Regulatory recognition accelerates timelines for innovative cardiovascular care solutions.",
    href: "/case-studies"
  },
  {
    title: "Global research consortium announces neurological insights",
    description:
      "Collaborative data sets unlock new pathways for neurodegenerative disease treatment.",
    href: "/case-studies"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 8 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
};

export default function NewsSection() {
  return (
    <Section aria-labelledby="latest-insights">
      <Container>
        <div className="space-y-14">
          <SectionHeader
            title="Latest Insights"
            subtitle="Regulatory updates, research milestones, and scientific perspectives from our global teams."
            titleId="latest-insights"
            icon={<Newspaper className="h-5 w-5" aria-hidden="true" />}
          />
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {posts.map((post) => (
              <motion.div key={post.title} variants={itemVariants}>
                <Link
                  href={post.href}
                  className="group flex h-full flex-col rounded-2xl border border-brand-soft bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-primary">
                    Research Update
                  </p>
                  <h3 className="mt-4 text-lg font-semibold text-brand-navy">
                    {post.title}
                  </h3>
                  <p className="mt-3 text-sm text-brand-neutral">
                    {post.description}
                  </p>
                  <span className="mt-auto pt-6 text-sm font-semibold text-brand-primary">
                    View Research
                  </span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
