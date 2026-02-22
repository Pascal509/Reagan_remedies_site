"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";

import { Button, Container, Section } from "@/components/common";
import type { CaseStudyRecord } from "@/lib/content-service";

const fadeUp = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function CaseStudyDetailClient({
  caseStudy
}: {
  caseStudy: CaseStudyRecord;
}) {
  return (
    <motion.div initial="initial" animate="animate">
      <Section aria-labelledby="case-study-hero">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <motion.div {...fadeUp}>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-primary md:text-sm">
                {caseStudy.category}
              </p>
              <h1
                id="case-study-hero"
                className="mt-4 text-4xl font-semibold text-brand-navy md:text-5xl lg:text-6xl"
              >
                {caseStudy.title}
              </h1>
              <div className="mt-6 space-y-2 text-sm text-brand-neutral">
                <p>{caseStudy.date}</p>
                <p>
                  {caseStudy.author} · {caseStudy.department}
                </p>
              </div>
            </motion.div>
            <motion.div {...fadeUp}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-brand-soft bg-brand-soft/40 shadow-md">
                <Image
                  src={caseStudy.heroImage}
                  alt={caseStudy.heroAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </motion.div>
          </div>
        </Container>
      </Section>

      <Section aria-labelledby="publication-metadata">
        <Container>
          <motion.div
            {...fadeUp}
            className="grid gap-6 rounded-2xl border border-brand-soft bg-white p-8 shadow-sm md:grid-cols-2"
          >
            <div>
              <p
                id="publication-metadata"
                className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-primary"
              >
                Publication Metadata
              </p>
              <p className="mt-4 text-sm text-brand-neutral">
                Reference details aligned to regulatory documentation standards.
              </p>
            </div>
            <dl className="space-y-4 text-sm">
              <div>
                <dt className="font-semibold text-brand-navy">Trial phase</dt>
                <dd className="text-slate-700">{caseStudy.trialPhase}</dd>
              </div>
              <div>
                <dt className="font-semibold text-brand-navy">Therapeutic area</dt>
                <dd className="text-slate-700">{caseStudy.therapeuticArea}</dd>
              </div>
              <div>
                <dt className="font-semibold text-brand-navy">Regulatory status</dt>
                <dd className="text-slate-700">{caseStudy.regulatoryStatus}</dd>
              </div>
              <div>
                <dt className="font-semibold text-brand-navy">Citation</dt>
                <dd className="text-slate-700">{caseStudy.citation}</dd>
              </div>
            </dl>
          </motion.div>
        </Container>
      </Section>

      <Section aria-labelledby="case-study-content">
        <Container>
          <div className="space-y-12">
            <motion.div {...fadeUp}>
              <h2
                id="case-study-content"
                className="text-3xl font-semibold text-brand-navy md:text-4xl"
              >
                Case Study Overview
              </h2>
            </motion.div>

            <div className="grid gap-10 lg:grid-cols-2">
              <motion.div {...fadeUp} className="space-y-4">
                <h3 className="text-xl font-semibold text-brand-navy">
                  Background
                </h3>
                <div className="text-slate-700">
                  <ReactMarkdown>{caseStudy.background}</ReactMarkdown>
                </div>
              </motion.div>
              <motion.div {...fadeUp} className="space-y-4">
                <h3 className="text-xl font-semibold text-brand-navy">
                  Clinical Approach
                </h3>
                <div className="text-slate-700">
                  <ReactMarkdown>{caseStudy.clinicalApproach}</ReactMarkdown>
                </div>
              </motion.div>
              <motion.div {...fadeUp} className="space-y-4">
                <h3 className="text-xl font-semibold text-brand-navy">
                  Outcomes
                </h3>
                <div className="text-slate-700">
                  <ReactMarkdown>{caseStudy.outcomes}</ReactMarkdown>
                </div>
              </motion.div>
              <motion.div {...fadeUp} className="space-y-4">
                <h3 className="text-xl font-semibold text-brand-navy">
                  Scientific Significance
                </h3>
                <div className="text-slate-700">
                  <ReactMarkdown>
                    {caseStudy.scientificSignificance}
                  </ReactMarkdown>
                </div>
              </motion.div>
            </div>
            {caseStudy.body ? (
              <motion.div
                {...fadeUp}
                className="rounded-2xl border border-brand-soft bg-white p-8 text-slate-700"
              >
                <ReactMarkdown>{caseStudy.body}</ReactMarkdown>
              </motion.div>
            ) : null}
          </div>
        </Container>
      </Section>

      <Section aria-labelledby="case-study-cta" className="bg-brand-soft/40">
        <Container>
          <motion.div
            {...fadeUp}
            className="flex flex-col items-start justify-between gap-6 rounded-2xl border border-brand-soft bg-white p-8 md:flex-row md:items-center"
          >
            <div className="space-y-2">
              <h2
                id="case-study-cta"
                className="text-2xl font-semibold text-brand-navy"
              >
                Continue the research conversation
              </h2>
              <p className="text-sm text-brand-neutral">
                Access full publications or connect with our research teams.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button variant="primary">Download Full Publication</Button>
              <Button variant="outline">Contact Research Team</Button>
            </div>
          </motion.div>
        </Container>
      </Section>
    </motion.div>
  );
}
