"use client";

import { motion } from "framer-motion";

import { Container, Section, SectionHeader } from "@/components/common";
import ProductCard from "@/components/common/ProductCard";

const products = [
  {
    name: "Cardiavax",
    category: "Cardiovascular",
    description:
      "Targeted therapy supporting long-term cardiac function and vascular stability."
  },
  {
    name: "Neurovance",
    category: "Neurology",
    description:
      "Precision formulation designed to improve cognitive resilience and neural recovery."
  },
  {
    name: "RespiraCore",
    category: "Respiratory",
    description:
      "Advanced inhalation platform for optimized pulmonary performance and comfort."
  },
  {
    name: "OncoShield",
    category: "Oncology",
    description:
      "Next-generation treatment protocol focused on patient-centric oncology outcomes."
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

export default function ProductPreview() {
  return (
    <Section className="bg-brand-soft/40" ariaLabelledby="flagship-therapies">
      <Container>
        <div className="space-y-14">
          <SectionHeader
            title="Flagship Therapies"
            subtitle="A curated portfolio of advanced treatments engineered for safety, efficacy, and global compliance."
            titleId="flagship-therapies"
          />
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
          >
            {products.map((product) => (
              <motion.div key={product.name} variants={itemVariants}>
                <ProductCard
                  name={product.name}
                  category={product.category}
                  description={product.description}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
