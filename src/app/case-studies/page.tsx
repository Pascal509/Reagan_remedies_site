import type { Metadata } from "next";

import CaseStudyCard from "@/components/common/CaseStudyCard";
import { Container, Section, SectionHeader } from "@/components/common";
import { getCaseStudies } from "@/lib/content-service";
export const metadata: Metadata = {
  title: "Case Studies & Research Publications | Reagan Remedies",
  description:
    "Explore patient case studies and research publications highlighting clinical insights and therapeutic breakthroughs."
};

export default async function CaseStudiesPage() {
  const caseStudies = await getCaseStudies();

  return (
    <Section aria-labelledby="case-studies-heading">
      <Container>
        <div className="space-y-12">
          <SectionHeader
            title="Patient Case Studies & Research Publications"
            subtitle="Exploring clinical insights, therapeutic breakthroughs, and patient-centered outcomes."
            titleId="case-studies-heading"
          />
          <div
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
            aria-label="Case studies and research publications"
          >
            {caseStudies.map((item) => (
              <CaseStudyCard
                key={item.slug}
                title={item.title}
                summary={item.summary}
                date={item.date}
                category={item.category}
                href={`/case-studies/${item.slug}`}
              />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
