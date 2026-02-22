import { Container, Section } from "@/components/common";

export interface ProductInfoProps {
  title?: string;
  description: string;
  supportingText?: string;
}

export default function ProductInfo({
  title = "Product Information",
  description,
  supportingText
}: ProductInfoProps) {
  return (
    <Section aria-labelledby="product-info-title">
      <Container>
        <div className="max-w-3xl space-y-6">
          <h2
            id="product-info-title"
            className="text-3xl font-semibold text-brand-navy md:text-4xl"
          >
            {title}
          </h2>
          <p className="text-base leading-relaxed text-slate-700 md:text-lg">
            {description}
          </p>
          {supportingText ? (
            <p className="text-base leading-relaxed text-slate-600 md:text-lg">
              {supportingText}
            </p>
          ) : null}
        </div>
      </Container>
    </Section>
  );
}
