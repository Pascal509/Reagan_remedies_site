import type { Metadata } from "next";
import { Suspense } from "react";

import ClinicalPipelineDashboard from "@/components/dashboard/ClinicalPipelineDashboard";
import {
  Hero,
  NewsSection,
  ProductPreview,
  ResearchHighlight,
  Stats
} from "@/components/home";

export const metadata: Metadata = {
  title: "Reagan Remedies | Corporate Pharmaceutical Research",
  description:
    "Reagan Remedies delivers innovative pharmaceutical research, clinical excellence, and global healthcare solutions.",
  keywords: [
    "pharmaceutical",
    "research",
    "medicine innovation",
    "clinical trials",
    "healthcare",
    "biopharma",
    "regulatory compliance",
    "patient outcomes"
  ]
};

export default function HomePage() {
  return (
    <div className="space-y-32 md:space-y-40">
      <Hero />
      <Stats />
      <Suspense fallback={null}>
        <ProductPreview />
      </Suspense>
      <ResearchHighlight />
      <Suspense fallback={null}>
        <ClinicalPipelineDashboard />
      </Suspense>
      <NewsSection />
    </div>
  );
}
