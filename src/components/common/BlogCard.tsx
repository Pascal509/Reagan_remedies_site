import Link from "next/link";

export interface BlogCardProps {
  title: string;
  description: string;
  href: string;
  ctaLabel?: string;
}

export default function BlogCard({
  title,
  description,
  href,
  ctaLabel = "Read more"
}: BlogCardProps) {
  return (
    <article className="flex h-full flex-col justify-between rounded-2xl border border-brand-soft bg-white p-8 shadow-sm transition-shadow duration-300 hover:shadow-lg">
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-brand-navy md:text-[1.75rem]">
          {title}
        </h3>
        <p className="text-sm leading-relaxed text-slate-700">{description}</p>
      </div>
      <div className="pt-10">
        <Link
          href={href}
          className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-brand-primary transition-colors hover:text-brand-navy"
        >
          {ctaLabel}
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
}
