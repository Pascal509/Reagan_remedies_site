import Link from "next/link";

import { Container, Section } from "@/components/common";

const values = [
  {
    title: "Integrity",
    description:
      "We uphold ethical standards and transparent practices across every market."
  },
  {
    title: "Innovation",
    description:
      "We invest in science-led solutions that improve access and outcomes."
  },
  {
    title: "Excellence",
    description:
      "We deliver consistent quality through rigorous manufacturing discipline."
  },
  {
    title: "Patient-Centered Care",
    description:
      "We prioritize safety, efficacy, and affordability in every therapy."
  }
];

const compliancePoints = [
  "GMP compliant manufacturing",
  "Advanced quality control systems",
  "Skilled pharmaceutical professionals",
  "Continuous research and innovation",
  "Regulatory adherence across Nigeria and West Africa"
];

export default function AboutPage() {
  return (
    <main className="bg-white text-brand-navy">
      <Section className="relative overflow-hidden bg-gradient-to-br from-brand-soft/40 via-white to-white">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(15,118,110,0.12),_transparent_55%)]" />
        <Container className="relative">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-6">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-primary">
                About Reagan Remedies Limited
              </p>
              <h1 className="text-4xl font-semibold leading-tight text-brand-navy md:text-5xl">
                Advancing Healthcare Across Africa
              </h1>
              <p className="text-base text-brand-neutral md:text-lg">
                Reagan Remedies Limited is a leading African pharmaceutical
                company committed to manufacturing and distributing high-quality
                General English medicines, Ayurvedic, Homeopathic and Herbal
                drugs.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/products"
                  className="inline-flex items-center justify-center rounded-md bg-brand-primary px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-primary/90"
                >
                  Explore Our Products
                </Link>
                <Link
                  href="/case-studies"
                  className="inline-flex items-center justify-center rounded-md border border-brand-soft px-6 py-3 text-sm font-semibold text-brand-navy transition hover:bg-brand-soft/60"
                >
                  View Case Studies
                </Link>
              </div>
            </div>
            <div className="rounded-3xl border border-brand-soft/60 bg-white p-8 shadow-lg">
              <div className="space-y-6">
                <div className="rounded-2xl border border-dashed border-brand-soft bg-brand-soft/30 px-6 py-8 text-center">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-primary">
                    Corporate Snapshot
                  </p>
                  <p className="mt-4 text-2xl font-semibold text-brand-navy">
                    Trusted across West Africa
                  </p>
                  <p className="mt-2 text-sm text-brand-neutral">
                    Manufacturing excellence backed by rigorous compliance.
                  </p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl bg-brand-soft/40 p-5">
                    <p className="text-sm font-semibold text-brand-navy">
                      Therapeutic Classes
                    </p>
                    <p className="mt-2 text-sm text-brand-neutral">
                      General medicines, herbal and alternative care.
                    </p>
                  </div>
                  <div className="rounded-2xl bg-brand-soft/40 p-5">
                    <p className="text-sm font-semibold text-brand-navy">
                      Compliance Focus
                    </p>
                    <p className="mt-2 text-sm text-brand-neutral">
                      GMP-led operations and regulatory alignment.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-6">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-primary">
                Who We Are
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-brand-navy md:text-4xl">
                Manufacturing and distributing trusted therapies across Nigeria
                and West Africa
              </h2>
            </div>
            <p className="text-base text-brand-neutral md:text-lg">
              Reagan Remedies Limited is a registered pharmaceutical company
              established for the manufacturing, distribution and sale of
              General English medicines, Ayurvedic, Homeopathic and Herbal drugs
              within Nigeria and across West Africa.
            </p>
            <p className="text-base text-brand-neutral md:text-lg">
              As one of the leading pharmaceutical companies in Nigeria, we
              understand that quality is never an accident. It is the result of
              intelligent effort, strict regulatory compliance, and unwavering
              commitment to patient safety.
            </p>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-brand-soft/40" />
            <div className="relative overflow-hidden rounded-3xl border border-brand-soft bg-white p-6 shadow-lg">
              <div className="flex h-64 items-center justify-center rounded-2xl border border-dashed border-brand-soft bg-brand-soft/30">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-primary">
                  Manufacturing Facility Image
                </p>
              </div>
              <p className="mt-5 text-sm text-brand-neutral">
                GMP-compliant infrastructure built for scalable, reliable
                pharmaceutical manufacturing.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-3xl border border-brand-soft bg-white p-8 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-primary">
                Mission
              </p>
              <h3 className="mt-4 text-2xl font-semibold text-brand-navy">
                Manufacturing safe, effective, and affordable medicines.
              </h3>
              <p className="mt-4 text-base text-brand-neutral">
                To improve health outcomes by manufacturing safe, effective, and
                affordable medicines that meet global pharmaceutical standards.
              </p>
            </div>
            <div className="rounded-3xl border border-brand-soft bg-white p-8 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-primary">
                Vision
              </p>
              <h3 className="mt-4 text-2xl font-semibold text-brand-navy">
                A leading African pharmaceutical manufacturing company.
              </h3>
              <p className="mt-4 text-base text-brand-neutral">
                To become a leading pharmaceutical manufacturing company in
                Africa, recognized for innovation, compliance, and excellence in
                healthcare delivery.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-brand-soft/30">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-primary">
                Commitment to Quality & Compliance
              </p>
              <h2 className="text-3xl font-semibold text-brand-navy md:text-4xl">
                GMP-led operations with uncompromising standards
              </h2>
              <p className="text-base text-brand-neutral md:text-lg">
                We operate a GMP-compliant, state-of-the-art manufacturing
                facility equipped with cutting-edge pharmaceutical technology.
                Our processes ensure high-quality production across major
                therapeutic classes while adhering to strict regulatory
                standards.
              </p>
            </div>
            <div className="rounded-3xl border border-brand-soft bg-white p-8 shadow-sm">
              <ul className="grid gap-4 text-sm text-brand-neutral">
                {compliancePoints.map((item) => (
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
              Our Presence
            </p>
            <h2 className="text-3xl font-semibold text-brand-navy md:text-4xl">
              A strategic footprint across Nigeria and West Africa
            </h2>
            <p className="text-base text-brand-neutral md:text-lg">
              From our headquarters located at:
            </p>
            <div className="rounded-2xl border border-brand-soft bg-white p-5 text-sm text-brand-neutral">
              <p className="font-semibold text-brand-navy">
                24 Musa Yaradua Drive
              </p>
              <p>New Owerri, Imo State, Nigeria</p>
              <p>(Reagan Remedies Limited Complex)</p>
            </div>
            <p className="text-base text-brand-neutral md:text-lg">
              We serve patients, healthcare institutions, and distribution
              partners across Nigeria and the West African region.
            </p>
          </div>
          <div className="rounded-3xl border border-brand-soft bg-white p-6 shadow-sm">
            <div className="flex h-64 items-center justify-center rounded-2xl border border-dashed border-brand-soft bg-brand-soft/30">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-primary">
                Map Placeholder
              </p>
            </div>
            <p className="mt-4 text-sm text-brand-neutral">
              Distribution coverage across priority markets and healthcare
              partners.
            </p>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-primary">
                Our Values
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-brand-navy md:text-4xl">
                Principles that guide every decision
              </h2>
            </div>
            <p className="max-w-xl text-base text-brand-neutral">
              Our culture is anchored in ethical conduct, scientific rigor, and
              the responsibility to protect every patient we serve.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-3xl border border-brand-soft bg-white p-6 shadow-sm"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-soft/60 text-sm font-semibold text-brand-primary">
                  Icon
                </div>
                <h3 className="mt-6 text-lg font-semibold text-brand-navy">
                  {value.title}
                </h3>
                <p className="mt-3 text-sm text-brand-neutral">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-brand-navy">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-5">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-primary">
                Partner With Us in Advancing Healthcare
              </p>
              <h2 className="text-3xl font-semibold text-white md:text-4xl">
                Delivering trusted medicines across Africa’s growing healthcare
                ecosystem
              </h2>
              <p className="text-base text-white/75 md:text-lg">
                Collaborate with Reagan Remedies Limited to expand access,
                improve outcomes, and build long-term health impact across the
                region.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-sm font-semibold text-brand-navy shadow-sm transition hover:bg-white/90"
              >
                Contact Us
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center justify-center rounded-md border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                View Products
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
