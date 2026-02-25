"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";

import { Button, Container, Section } from "@/components/common";
import HCPDisclaimerModal from "@/components/products/HCPDisclaimerModal";
import ProductDetailHero from "@/components/products/ProductDetailHero";
import ProductDetailInfo from "@/components/products/ProductDetailInfo";
import ProductRelatedGrid from "@/components/products/ProductRelatedGrid";
import type { Product } from "@/lib/products";

type UserType = "hcp" | "public" | null;

export default function ProductDetailClient({
  product,
  relatedProducts
}: {
  product: Product;
  relatedProducts: Product[];
}) {
  const [userType, setUserType] = useState<UserType>(null);

  useEffect(() => {
    const stored = window.localStorage.getItem("reagan_user_type");
    if (stored === "hcp" || stored === "public") {
      setUserType(stored);
    }
  }, []);

  const handleSelection = (type: "hcp" | "public") => {
    setUserType(type);
    window.localStorage.setItem("reagan_user_type", type);
  };

  const heroDescription = useMemo(
    () => (userType === "hcp" ? product.fullDescription : product.shortDescription),
    [product, userType]
  );

  return (
    <>
      <HCPDisclaimerModal isOpen={!userType} onSelect={handleSelection} />
      <Section className="py-6 md:py-8">
        <Container>
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-neutral">
              Product detail view
            </div>
            <button
              type="button"
              onClick={() => setUserType(null)}
              className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-primary"
            >
              Change user type
            </button>
          </div>
        </Container>
      </Section>

      <ProductDetailHero
        product={{
          ...product,
          fullDescription: heroDescription
        }}
      />

      {userType === "hcp" ? (
        <>
          <ProductDetailInfo product={product} />
          <Section aria-labelledby="product-datasheet" className="bg-brand-soft/30">
            <Container>
              <div className="flex flex-col items-start justify-between gap-4 rounded-2xl border border-brand-soft bg-white p-8 md:flex-row md:items-center">
                <div>
                  <h2
                    id="product-datasheet"
                    className="text-2xl font-semibold text-brand-navy"
                  >
                    Access clinical datasheet
                  </h2>
                  <p className="mt-2 text-sm text-brand-neutral">
                    Detailed prescribing information and regulatory dossiers.
                  </p>
                </div>
                <Button variant="primary">
                  <Download className="h-4 w-4" aria-hidden="true" />
                  Download Datasheet
                </Button>
              </div>
            </Container>
          </Section>
        </>
      ) : null}

      {userType === "public" ? (
        <Section aria-labelledby="public-safety" className="bg-brand-soft/40">
          <Container>
            <div className="rounded-2xl border border-brand-soft bg-white p-8">
              <h2
                id="public-safety"
                className="text-2xl font-semibold text-brand-navy"
              >
                Safety & Patient Guidance
              </h2>
              <p className="mt-3 text-sm text-brand-neutral">
                Consult your healthcare provider for personalized medical advice,
                dosage guidance, and suitability.
              </p>
              <div className="mt-6 rounded-xl border border-brand-soft bg-brand-soft/40 p-6 text-sm text-brand-navy">
                This summary is intended for the general public and does not
                replace professional medical guidance.
              </div>
              <div className="mt-6">
                <Link
                  href="/case-studies"
                  className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-brand-primary"
                >
                  Explore clinical insights
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </Container>
        </Section>
      ) : null}

      <ProductRelatedGrid products={relatedProducts} />
    </>
  );
}
