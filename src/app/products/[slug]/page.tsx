import type { Metadata } from "next";
import { notFound } from "next/navigation";

import ProductDetailClient from "@/components/products/ProductDetailClient";
import { products } from "@/lib/products";

type PageProps = {
  params: { slug: string };
};

export async function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const product = products.find((item) => item.slug === params.slug);

  if (!product) {
    return {
      title: "Product | Reagan Remedies",
      description:
        "Explore regulated pharmaceutical therapies from Reagan Remedies."
    };
  }

  return {
    title: `${product.name} | Reagan Remedies`,
    description: product.fullDescription
  };
}

export default function ProductDetailPage({ params }: PageProps) {
  const product = products.find((item) => item.slug === params.slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = products.filter(
    (item) => item.category === product.category && item.id !== product.id
  );

  return (
    <ProductDetailClient
      product={product}
      relatedProducts={relatedProducts}
    />
  );
}
