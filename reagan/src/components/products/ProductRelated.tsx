import { Container, Section, SectionHeader } from "@/components/common";
import ProductCard from "@/components/products/ProductCard";
import type { Product } from "@/lib/products";

export interface ProductRelatedProps {
  title?: string;
  subtitle?: string;
  products: Product[];
}

export default function ProductRelated({
  title = "Related Products",
  subtitle = "Explore additional therapies across our advanced portfolio.",
  products
}: ProductRelatedProps) {
  return (
    <Section aria-labelledby="related-products-title">
      <Container>
        <div className="space-y-10">
          <SectionHeader
            title={title}
            subtitle={subtitle}
            titleId="related-products-title"
          />
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {products.slice(0, 3).map((item) => (
              <ProductCard
                key={item.id}
                name={item.name}
                category={item.category}
                description={item.shortDescription}
                imageSrc={item.image}
                ariaLabel={`${item.name} ${item.category} therapy`}
                showCta={false}
              />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
