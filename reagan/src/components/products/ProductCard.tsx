import { Button } from "@/components/common";

export interface ProductCardProps {
  name: string;
  category: string;
  description: string;
  imageSrc: string;
  ariaLabel?: string;
  ctaLabel?: string;
  showCta?: boolean;
}

export default function ProductCard({
  name,
  category,
  description,
  imageSrc,
  ariaLabel,
  ctaLabel = "Learn More",
  showCta = true
}: ProductCardProps) {
  return (
    <article
      className="relative flex h-full min-h-[380px] aspect-[4/5] flex-col justify-between overflow-hidden rounded-2xl border border-brand-soft shadow-sm transition duration-500 ease-out hover:shadow-lg hover:scale-[1.02]"
      aria-label={ariaLabel ?? `${name} product overview`}
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${imageSrc})` }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/45 to-black/30"
        aria-hidden="true"
      />
      <div className="relative z-10 flex h-full flex-col justify-between p-7 text-white">
        <div className="rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-md">
          <div className="space-y-4">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-white/85">
              {category}
            </p>
            <h3 className="text-2xl font-semibold md:text-[1.65rem]">
              {name}
            </h3>
            <p className="text-sm leading-relaxed text-white/85">
              {description}
            </p>
          </div>
        </div>
        {showCta ? (
          <div className="pt-6">
            <Button
              variant="primary"
              className="w-full justify-center py-3 text-sm md:text-base"
            >
              {ctaLabel}
            </Button>
          </div>
        ) : null}
      </div>
    </article>
  );
}
