import Link from "next/link";
import { Layers } from "lucide-react";

import { Container, Section, SectionHeader } from "@/components/common";
import ProductCard from "./ProductCard";
import type { Product } from "@/lib/products";

export default function ProductRelatedGrid({
  products
}: {
  products: Product[];
}) {
  if (!products.length) {
    return null;
  }

  return (
    <Section aria-labelledby="related-products">
      <Container>
        <div className="space-y-10">
          <SectionHeader
            title="Related Products"
            subtitle="Explore additional therapies across our advanced portfolio."
            titleId="related-products"
            icon={<Layers className="h-5 w-5" aria-hidden="true" />}
          />
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <Link
                key={product.id}
                href={`/products/${product.slug}`}
                aria-label={`View ${product.name}`}
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
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
