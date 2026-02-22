import { Container, Section } from "@/components/common";

export interface ProductSafetyProps {
  title?: string;
  disclaimer: string;
}

export default function ProductSafety({
  title = "Safety Notice",
  disclaimer
}: ProductSafetyProps) {
  return (
    <Section className="bg-brand-soft/40" aria-labelledby="product-safety-title">
      <Container>
        <div className="rounded-2xl border border-brand-soft bg-white p-8 md:p-10">
          <p
            id="product-safety-title"
            className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-primary"
          >
            {title}
          </p>
          <p className="mt-4 text-base leading-relaxed text-slate-700">
            {disclaimer}
          </p>
        </div>
      </Container>
    </Section>
  );
}
