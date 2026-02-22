import type { Metadata } from "next";

import CaseStudyDetailClient from "@/components/case-studies/CaseStudyDetailClient";
import { getCaseStudyBySlug } from "@/lib/content-service";

type PageProps = {
  params: { slug: string };
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const caseStudy = await getCaseStudyBySlug(params.slug);
  if (!caseStudy) {
    return {
      title: "Case Study | Reagan Remedies",
      description:
        "Clinical research and case studies highlighting therapeutic innovation."
    };
  }

  return {
    title: `${caseStudy.title} | Reagan Remedies`,
    description: caseStudy.background
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const caseStudy = await getCaseStudyBySlug(params.slug);

  if (!caseStudy) {
    return (
      <div className="py-24 text-center text-brand-neutral">
        Case study not found.
      </div>
    );
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalScholarlyArticle",
    headline: caseStudy.title,
    datePublished: caseStudy.date,
    author: {
      "@type": "Person",
      name: caseStudy.author
    },
    publisher: {
      "@type": "Organization",
      name: "Reagan Remedies"
    }
  };

  return (
    <>
      <CaseStudyDetailClient caseStudy={caseStudy} />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </>
  );
}
