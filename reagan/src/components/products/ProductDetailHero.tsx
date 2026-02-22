import Image from "next/image";

import { Button, Container, Section } from "@/components/common";
import type { Product } from "@/lib/products";

export default function ProductDetailHero({ product }: { product: Product }) {
  return (
    <Section aria-labelledby="product-hero" className="bg-brand-soft/30">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-primary">
              {product.category}
            </p>
            <h1
              id="product-hero"
              className="text-4xl font-semibold text-brand-navy md:text-5xl lg:text-6xl"
            >
              {product.name}
            </h1>
            <p className="text-base leading-relaxed text-brand-neutral md:text-lg">
              {product.fullDescription}
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-brand-navy">
                {product.regulatoryStatus}
              </span>
              <span className="text-sm font-semibold text-brand-navy">
                {product.price}
              </span>
            </div>
            <div className="flex flex-wrap gap-4 pt-2">
              <Button variant="primary">Contact Sales</Button>
              <Button variant="outline">Request Information</Button>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-brand-soft bg-white shadow-sm">
            <Image
              src={product.image}
              alt={`${product.name} product imagery`}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}
