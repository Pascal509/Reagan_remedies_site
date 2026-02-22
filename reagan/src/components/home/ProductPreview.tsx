"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { Container, Section, SectionHeader } from "@/components/common";
import ProductCard from "@/components/products/ProductCard";
import { products } from "@/lib/products";

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
    <Section
      id="products"
      className="bg-brand-soft/40"
      aria-labelledby="flagship-therapies"
    >
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
            {products.slice(0, 4).map((product) => (
              <motion.div key={product.id} variants={itemVariants}>
                <Link
                  href={`/products/${product.slug}`}
                  aria-label={`View ${product.name}`}
                  className="block"
                >
                  <ProductCard
                    name={product.name}
                    category={product.category}
                    description={product.shortDescription}
                    imageSrc={product.image}
                    ariaLabel={`${product.name} ${product.category} therapy`}
                    showCta={false}
                  />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
