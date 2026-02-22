import { Container, Section } from "@/components/common";
import type { Product } from "@/lib/products";

export default function ProductDetailInfo({ product }: { product: Product }) {
  return (
    <Section aria-labelledby="product-details">
      <Container>
        <div className="space-y-8">
          <h2
            id="product-details"
            className="text-3xl font-semibold text-brand-navy md:text-4xl"
          >
            Product Details
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-brand-soft bg-white p-6 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-primary">
                Active Ingredient
              </p>
              <p className="mt-3 text-lg font-semibold text-brand-navy">
                {product.activeIngredient}
              </p>
            </div>
            <div className="rounded-2xl border border-brand-soft bg-white p-6 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-primary">
                Dosage
              </p>
              <p className="mt-3 text-lg font-semibold text-brand-navy">
                {product.dosage}
              </p>
            </div>
            <div className="rounded-2xl border border-brand-soft bg-white p-6 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-primary">
                Clinical Phase
              </p>
              <p className="mt-3 text-lg font-semibold text-brand-navy">
                {product.clinicalPhase}
              </p>
            </div>
            <div className="rounded-2xl border border-brand-soft bg-white p-6 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-primary">
                Regulatory Status
              </p>
              <p className="mt-3 text-lg font-semibold text-brand-navy">
                {product.regulatoryStatus}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
