import Link from "next/link";

export interface CaseStudyCardProps {
  title: string;
  summary: string;
  date: string;
  category: "Case Study" | "Research Publication";
  href: string;
}

export default function CaseStudyCard({
  title,
  summary,
  date,
  category,
  href
}: CaseStudyCardProps) {
  return (
    <article className="flex h-full flex-col justify-between rounded-2xl border border-brand-soft bg-white p-7 shadow-sm transition-shadow duration-300 hover:shadow-lg">
      <div className="space-y-4">
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-primary">
            {category}
          </p>
          <p className="text-xs text-brand-neutral">{date}</p>
        </div>
        <h3 className="text-2xl font-semibold text-brand-navy md:text-[1.65rem]">
          {title}
        </h3>
        <p className="text-sm leading-relaxed text-slate-700">{summary}</p>
      </div>
      <div className="pt-8">
        <Link
          href={href}
          className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-brand-primary transition-colors hover:text-brand-navy"
        >
          Read Full Report
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
}
