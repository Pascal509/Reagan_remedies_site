import type { Metadata } from "next";
import Link from "next/link";

import { Container, Section } from "@/components/common";

export const metadata: Metadata = {
  title: "Partner With Reagan Remedies Limited",
  description:
    "Explore strategic investment and partnership opportunities with Reagan Remedies Limited, a GMP-compliant pharmaceutical manufacturer serving Nigeria and West Africa."
};

const positioningPoints = [
  "GMP-compliant manufacturing facility",
  "State-of-the-art production infrastructure",
  "Multi-therapeutic product portfolio",
  "Expanding West African distribution footprint",
  "Regulatory-aligned operations"
];

const investmentReasons = [
  {
    title: "Growing Pharmaceutical Demand in West Africa",
    description:
      "Demographic shifts and evolving healthcare access are increasing demand for reliable, locally manufactured medicines."
  },
  {
    title: "Local Manufacturing Advantage",
    description:
      "Domestic production reduces supply chain risk and supports consistent access to essential therapies."
  },
  {
    title: "Regulatory Compliance & Quality Assurance",
    description:
      "GMP adherence and disciplined quality controls underpin long-term partner confidence."
  },
  {
    title: "Scalable Production Capacity",
    description:
      "Infrastructure is designed to scale output across multiple therapeutic categories."
  },
  {
    title: "Diversified Product Portfolio",
    description:
      "Balanced offerings across general, herbal, and alternative medicines reduce concentration risk."
  },
  {
    title: "Strategic Geographic Location",
    description:
      "Located in Imo State, Nigeria with convenient access to regional distribution corridors."
  }
];

const partnershipModels = [
  {
    title: "Equity Investment",
    description:
      "Long-term growth partnerships aligned with manufacturing expansion and market access."
  },
  {
    title: "Distribution Partnerships",
    description:
      "Regional partnerships to strengthen pharmaceutical availability across West Africa."
  },
  {
    title: "Research & Development Collaboration",
    description:
      "Joint development of differentiated therapies and compliant formulation pipelines."
  },
  {
    title: "Institutional Supply Agreements",
    description:
      "Structured supply programs for healthcare institutions and procurement stakeholders."
  },
  {
    title: "Strategic Manufacturing Alliances",
    description:
      "Shared manufacturing programs to scale high-quality production responsibly."
  }
];

const governancePoints = [
  "GMP adherence",
  "Structured quality assurance processes",
  "Ethical business standards",
  "Patient-centered operational model"
];

const snapshotItems = [
  {
    label: "Industry",
    value: "Pharmaceutical Manufacturing & Distribution"
  },
  {
    label: "Headquarters",
    value: "No 24 Musa Yar'Adua Drive, New Owerri, Imo State, Nigeria"
  },
  {
    label: "Operational Scope",
    value: "Nigeria & West Africa"
  },
  {
    label: "Facility Standard",
    value: "GMP-Compliant Manufacturing Complex"
  },
  {
    label: "Product Categories",
    value: "General English Medicines, Ayurvedic, Homeopathic & Herbal Drugs"
  },
  {
    label: "Core Focus",
    value: "Quality, Compliance, Accessibility"
  }
];

const roadmapPhases = [
  {
    title: "Phase 1",
    headline: "Strengthening Domestic Market Presence",
    description:
      "Deepen distribution partnerships and reinforce supply consistency across Nigeria."
  },
  {
    title: "Phase 2",
    headline: "Expansion of West African Distribution Channels",
    description:
      "Build regional collaboration with institutional and private sector partners."
  },
  {
    title: "Phase 3",
    headline: "Portfolio Diversification & Research Collaboration",
    description:
      "Advance compliant portfolio expansion through targeted R&D engagement."
  },
  {
    title: "Phase 4",
    headline: "Strategic Regional Manufacturing Alliances",
    description:
      "Evaluate alliances that expand manufacturing resilience and capacity."
  }
];

export default function PartnerWithUsPage() {
  return (
    <main className="bg-white text-brand-navy">
      <Section className="relative overflow-hidden bg-gradient-to-br from-brand-soft/40 via-white to-white">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(15,118,110,0.12),_transparent_55%)]" />
        <Container className="relative">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-6">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-primary">
                Strategic Partnerships
              </p>
              <h1 className="text-4xl font-semibold leading-tight text-brand-navy md:text-5xl">
                Partner With Reagan Remedies Limited
              </h1>
              <p className="text-base text-brand-neutral md:text-lg">
                Advancing pharmaceutical manufacturing and healthcare delivery
                across Nigeria and West Africa through strategic partnerships
                and sustainable growth.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-md bg-brand-primary px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-primary/90"
                >
                  Initiate Partnership Discussion
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center rounded-md border border-brand-soft px-6 py-3 text-sm font-semibold text-brand-navy transition hover:bg-brand-soft/60"
                >
                  About Reagan Remedies
                </Link>
              </div>
            </div>
            <div className="rounded-3xl border border-brand-soft/60 bg-white p-8 shadow-lg">
              <div className="space-y-6">
                <div className="rounded-2xl border border-dashed border-brand-soft bg-brand-soft/30 px-6 py-8 text-center">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-primary">
                    Partnership Overview
                  </p>
                  <p className="mt-4 text-2xl font-semibold text-brand-navy">
                    Regulated-industry partnership readiness
                  </p>
                  <p className="mt-2 text-sm text-brand-neutral">
                    Governance-led engagement for institutional stakeholders.
                  </p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl bg-brand-soft/40 p-5">
                    <p className="text-sm font-semibold text-brand-navy">
                      Compliance Focus
                    </p>
                    <p className="mt-2 text-sm text-brand-neutral">
                      Quality assurance and GMP adherence.
                    </p>
                  </div>
                  <div className="rounded-2xl bg-brand-soft/40 p-5">
                    <p className="text-sm font-semibold text-brand-navy">
                      Regional Reach
                    </p>
                    <p className="mt-2 text-sm text-brand-neutral">
                      Nigeria-based platform with West African coverage.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="space-y-6">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-primary">
                A Trusted Pharmaceutical Manufacturing Partner
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-brand-navy md:text-4xl">
                Reliable manufacturing and distribution built on disciplined
                operations
              </h2>
            </div>
            <p className="text-base text-brand-neutral md:text-lg">
              Reagan Remedies Limited is a registered pharmaceutical
              manufacturer and distributor specializing in General English
              medicines, Ayurvedic, Homeopathic, and Herbal drugs.
            </p>
            <ul className="grid gap-3 text-sm text-brand-neutral">
              {positioningPoints.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-2xl bg-brand-soft/40 px-4 py-3"
                >
                  <span className="mt-1 h-2 w-2 rounded-full bg-brand-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-brand-soft/40" />
            <div className="relative overflow-hidden rounded-3xl border border-brand-soft bg-white p-6 shadow-lg">
              <div className="flex h-64 items-center justify-center rounded-2xl border border-dashed border-brand-soft bg-brand-soft/30">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-primary">
                  Facility & Infrastructure Image
                </p>
              </div>
              <p className="mt-5 text-sm text-brand-neutral">
                Structured manufacturing environment designed for consistent
                quality and scale.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="rounded-3xl border border-brand-soft bg-white p-8 shadow-sm">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-primary">
                  Corporate Snapshot
                </p>
                <h2 className="mt-3 text-3xl font-semibold text-brand-navy md:text-4xl">
                  Corporate Snapshot
                </h2>
              </div>
              <p className="max-w-xl text-sm text-brand-neutral">
                Executive summary of Reagan Remedies Limited’s operating
                profile, designed for institutional review.
              </p>
            </div>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {snapshotItems.map((item) => (
                <div
                  key={item.label}
                  className="flex gap-4 rounded-2xl border border-brand-soft/70 bg-brand-soft/30 p-5"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-xs font-semibold text-brand-primary">
                    Icon
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-brand-navy">
                      {item.label}
                    </p>
                    <p className="mt-1 text-sm text-brand-neutral">
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="space-y-6">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-primary">
                Why Invest in Reagan Remedies
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-brand-navy md:text-4xl">
                A resilient platform for long-term pharmaceutical growth
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {investmentReasons.map((reason) => (
                <div
                  key={reason.title}
                  className="rounded-3xl border border-brand-soft bg-white p-6 shadow-sm"
                >
                  <h3 className="text-lg font-semibold text-brand-navy">
                    {reason.title}
                  </h3>
                  <p className="mt-3 text-sm text-brand-neutral">
                    {reason.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="space-y-6">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-primary">
                Strategic Growth Roadmap
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-brand-navy md:text-4xl">
                Strategic Growth Roadmap
              </h2>
            </div>
            <div className="relative">
              <div className="absolute left-5 top-0 hidden h-full w-px bg-brand-soft lg:block lg:left-1/2" />
              <div className="space-y-8">
                {roadmapPhases.map((phase, index) => (
                  <div
                    key={phase.title}
                    className="relative grid gap-6 lg:grid-cols-2 lg:items-start"
                  >
                    <div
                      className={
                        index % 2 === 0
                          ? "lg:pr-12"
                          : "lg:col-start-2 lg:pl-12"
                      }
                    >
                      <div className="flex items-start gap-4">
                        <span className="mt-1 inline-flex h-3 w-3 rounded-full bg-brand-primary" />
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-primary">
                            {phase.title}
                          </p>
                          <h3 className="mt-2 text-lg font-semibold text-brand-navy">
                            {phase.headline}
                          </h3>
                          <p className="mt-2 text-sm text-brand-neutral">
                            {phase.description}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="hidden lg:block" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-brand-soft/30">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-primary">
                Positioned for Sustainable Growth
              </p>
              <h2 className="text-3xl font-semibold text-brand-navy md:text-4xl">
                Strategic momentum supported by operational readiness
              </h2>
              <p className="text-base text-brand-neutral md:text-lg">
                Increasing healthcare demand, regional distribution growth, and
                a focus on quality and accessibility place Reagan Remedies
                Limited in a strong position for sustainable expansion.
              </p>
              <p className="text-base text-brand-neutral md:text-lg">
                Our operational foundation prioritizes regulatory alignment,
                consistent supply, and disciplined execution across markets.
              </p>
            </div>
            <div className="rounded-3xl border border-brand-soft bg-white p-8 shadow-sm">
              <div className="space-y-4">
                <div className="rounded-2xl bg-brand-soft/40 p-5">
                  <p className="text-sm font-semibold text-brand-navy">
                    Regional Demand
                  </p>
                  <p className="mt-2 text-sm text-brand-neutral">
                    Growing access initiatives and shifting patient needs.
                  </p>
                </div>
                <div className="rounded-2xl bg-brand-soft/40 p-5">
                  <p className="text-sm font-semibold text-brand-navy">
                    Distribution Expansion
                  </p>
                  <p className="mt-2 text-sm text-brand-neutral">
                    Strengthening partnerships across West African markets.
                  </p>
                </div>
                <div className="rounded-2xl bg-brand-soft/40 p-5">
                  <p className="text-sm font-semibold text-brand-navy">
                    Quality & Access
                  </p>
                  <p className="mt-2 text-sm text-brand-neutral">
                    Consistent delivery of compliant therapies at scale.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="rounded-3xl border border-brand-soft bg-white p-8 shadow-sm">
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div className="space-y-4">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-primary">
                  Corporate Profile
                </p>
                <h2 className="text-3xl font-semibold text-brand-navy md:text-4xl">
                  Corporate Profile
                </h2>
                <p className="text-base text-brand-neutral md:text-lg">
                  Access our corporate profile for an overview of our
                  operations, manufacturing standards, strategic direction, and
                  partnership opportunities.
                </p>
                <p className="text-sm text-brand-neutral">
                  Investor Information Overview
                </p>
              </div>
              <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                <Link
                  href="/documents/reagan-corporate-profile.pdf"
                  className="inline-flex items-center justify-center gap-3 rounded-md bg-brand-primary px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-primary/90"
                >
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-xs font-semibold">
                    PDF
                  </span>
                  Download Corporate Profile
                </Link>
                <p className="text-xs text-brand-neutral">
                  Downloadable PDF placeholder
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="space-y-6">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-primary">
                Partnership Models
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-brand-navy md:text-4xl">
                Structured collaborations for institutional stakeholders
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {partnershipModels.map((model) => (
                <div
                  key={model.title}
                  className="rounded-3xl border border-brand-soft bg-white p-6 shadow-sm"
                >
                  <h3 className="text-lg font-semibold text-brand-navy">
                    {model.title}
                  </h3>
                  <p className="mt-3 text-sm text-brand-neutral">
                    {model.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-brand-soft/30">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-primary">
                Governance & Compliance
              </p>
              <h2 className="text-3xl font-semibold text-brand-navy md:text-4xl">
                Aligned with regulatory expectations
              </h2>
              <p className="text-base text-brand-neutral md:text-lg">
                Governance at Reagan Remedies Limited emphasizes GMP adherence,
                structured quality assurance, ethical business standards, and a
                patient-centered operating model.
              </p>
            </div>
            <div className="rounded-3xl border border-brand-soft bg-white p-8 shadow-sm">
              <ul className="grid gap-4 text-sm text-brand-neutral">
                {governancePoints.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 rounded-2xl bg-brand-soft/40 px-4 py-3"
                  >
                    <span className="mt-1 h-2 w-2 rounded-full bg-brand-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-primary">
              Location & Infrastructure
            </p>
            <h2 className="text-3xl font-semibold text-brand-navy md:text-4xl">
              Reagan Remedies Limited Complex
            </h2>
            <p className="text-base text-brand-neutral md:text-lg">
              Head Office:
            </p>
            <div className="rounded-2xl border border-brand-soft bg-white p-5 text-sm text-brand-neutral">
              <p className="font-semibold text-brand-navy">
                No 24 Musa Yar'Adua Drive
              </p>
              <p>New Owerri, Owerri</p>
              <p>Imo State, Nigeria</p>
            </div>
            <p className="text-base text-brand-neutral md:text-lg">
              Reagan Remedies Limited Complex supports production, compliance,
              and partner engagement in one integrated location.
            </p>
          </div>
          <div className="rounded-3xl border border-brand-soft bg-white p-6 shadow-sm">
            <div className="flex h-64 items-center justify-center rounded-2xl border border-dashed border-brand-soft bg-brand-soft/30">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-primary">
                Facility Image Placeholder
              </p>
            </div>
            <p className="mt-4 text-sm text-brand-neutral">
              Infrastructure designed to meet GMP requirements and future
              capacity expansion.
            </p>
          </div>
        </Container>
      </Section>

      <Section className="bg-brand-navy">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-primary">
                Build the Future of Healthcare With Us
              </p>
              <h2 className="text-3xl font-semibold text-white md:text-4xl">
                Build the Future of Healthcare With Us
              </h2>
              <p className="text-base text-white/75 md:text-lg">
                Engage with our leadership team to explore regulated, compliant
                partnership opportunities.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-sm font-semibold text-brand-navy shadow-sm transition hover:bg-white/90"
              >
                Contact Investor Relations
              </Link>
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-md border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Download Corporate Profile
              </button>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
