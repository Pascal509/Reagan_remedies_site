"use client";

import { motion } from "framer-motion";

import { Container, Section, SectionHeader } from "@/components/common";
import BlogCard from "@/components/common/BlogCard";

const posts = [
  {
    title: "Reagan Remedies expands Phase III oncology trials",
    description:
      "New multicenter studies advance patient access to precision immunotherapies across 12 countries.",
    href: "/blog/phase-iii-oncology"
  },
  {
    title: "Breakthrough designation for next-gen cardiology platform",
    description:
      "Regulatory recognition accelerates timelines for innovative cardiovascular care solutions.",
    href: "/blog/cardiology-platform"
  },
  {
    title: "Global research consortium announces neurological insights",
    description:
      "Collaborative data sets unlock new pathways for neurodegenerative disease treatment.",
    href: "/blog/neurology-consortium"
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
    <Section ariaLabelledby="latest-insights">
      <Container>
        <div className="space-y-14">
          <SectionHeader
            title="Latest Insights"
            subtitle="Regulatory updates, research milestones, and scientific perspectives from our global teams."
            titleId="latest-insights"
          />
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {posts.map((post) => (
              <motion.div key={post.href} variants={itemVariants}>
                <BlogCard
                  title={post.title}
                  description={post.description}
                  href={post.href}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
