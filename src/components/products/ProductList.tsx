"use client";

import { Pill } from "lucide-react";
import { useMemo, useState } from "react";

import type { Product } from "@/lib/products";
import ProductListCard from "@/components/products/ProductListCard";

export default function ProductList({ products }: { products: Product[] }) {
  const categories = useMemo(
    () => ["All", ...new Set(products.map((product) => product.category))],
    [products]
  );
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts = useMemo(() => {
    if (selectedCategory === "All") {
      return products;
    }
    return products.filter((product) => product.category === selectedCategory);
  }, [products, selectedCategory]);

  return (
    <div className="space-y-8">
      <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-soft/60 text-brand-primary">
              <Pill className="h-5 w-5" aria-hidden="true" />
            </span>
            <h1 className="text-3xl font-semibold text-brand-navy md:text-4xl">
              Product Portfolio
            </h1>
          </div>
          <p className="mt-2 text-sm text-brand-neutral">
            Explore our regulated therapies across clinical and commercial stages.
          </p>
        </div>
        <label className="text-sm text-brand-neutral">
          <span className="sr-only">Filter by category</span>
          <select
            value={selectedCategory}
            onChange={(event) => setSelectedCategory(event.target.value)}
            className="rounded-md border border-brand-soft bg-white px-4 py-2 text-sm text-brand-navy"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filteredProducts.map((product) => (
          <ProductListCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
