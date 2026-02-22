import type { Metadata } from "next";

import { Container, Section } from "@/components/common";
import ProductList from "@/components/products/ProductList";
import { products } from "@/lib/products";

export const metadata: Metadata = {
  title: "Products | Reagan Remedies",
  description:
    "Explore flagship therapies and pharmaceutical solutions from Reagan Remedies."
};

export default function ProductsPage() {
  return (
    <Section aria-labelledby="products-listing">
      <Container>
        <div className="space-y-8">
          <ProductList products={products} />
        </div>
      </Container>
    </Section>
  );
}
