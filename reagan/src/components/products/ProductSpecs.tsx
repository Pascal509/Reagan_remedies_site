import { Container, Section, SectionHeader } from "@/components/common";

export interface ProductSpecItem {
  label: string;
  value: string;
}

export interface ProductSpecsProps {
  title?: string;
  subtitle?: string;
  specs: ProductSpecItem[];
}

export default function ProductSpecs({
  title = "Product Specifications",
  subtitle = "Key attributes validated through clinical development and regulatory review.",
  specs
}: ProductSpecsProps) {
  return (
    <Section aria-labelledby="product-specs-title">
      <Container>
        <div className="space-y-10">
          <SectionHeader title={title} subtitle={subtitle} titleId="product-specs-title" />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {specs.map((spec) => (
              <div
                key={spec.label}
                className="rounded-2xl border border-brand-soft bg-white p-6 shadow-sm"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-primary">
                  {spec.label}
                </p>
                <p className="mt-3 text-lg font-semibold text-brand-navy">
                  {spec.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
