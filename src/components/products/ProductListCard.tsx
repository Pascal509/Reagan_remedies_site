import Link from "next/link";

import type { Product } from "@/lib/products";

export default function ProductListCard({ product }: { product: Product }) {
  return (
    <article className="rounded-2xl border border-brand-soft bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-lg">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-primary">
            {product.category}
          </span>
          <span className="rounded-full bg-brand-soft px-3 py-1 text-xs font-semibold text-brand-navy">
            {product.regulatoryStatus}
          </span>
        </div>
        <h3 className="text-2xl font-semibold text-brand-navy">
          {product.name}
        </h3>
        <p className="text-sm leading-relaxed text-slate-700">
          {product.shortDescription}
        </p>
        <p className="text-base font-semibold text-brand-navy">
          {product.price}
        </p>
      </div>
      <div className="pt-6">
        <Link
          href={`/products/${product.slug}`}
          className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-primary hover:text-brand-navy"
        >
          View Product
        </Link>
      </div>
    </article>
  );
}
