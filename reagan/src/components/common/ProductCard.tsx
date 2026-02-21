import { Button } from "@/components/common";

export interface ProductCardProps {
  name: string;
  category: string;
  description: string;
  ctaLabel?: string;
}

export default function ProductCard({
  name,
  category,
  description,
  ctaLabel = "Learn More"
}: ProductCardProps) {
  return (
    <article className="flex h-full flex-col justify-between rounded-2xl border border-brand-soft bg-white p-7 shadow-sm transition-shadow duration-300 hover:shadow-lg">
      <div className="space-y-5">
        <p className="text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-brand-primary">
          {category}
        </p>
        <h3 className="text-2xl font-semibold text-brand-navy md:text-[1.65rem]">
          {name}
        </h3>
        <p className="text-sm leading-relaxed text-slate-600">
          {description}
        </p>
      </div>
      <div className="pt-8">
        <Button
          variant="primary"
          className="w-full justify-center py-3 text-sm md:text-base"
        >
          {ctaLabel}
        </Button>
      </div>
    </article>
  );
}
