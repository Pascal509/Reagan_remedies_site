"use client";

import { motion } from "framer-motion";

import { Container, Section, SectionHeader } from "@/components/common";

type TrialStatus = "Completed" | "In Progress" | "Planned";

type TrialPhase =
  | "Discovery"
  | "Preclinical"
  | "Phase 1"
  | "Phase 2"
  | "Phase 3"
  | "Approval";

type TrialItem = {
  name: string;
  phase: TrialPhase;
  status: TrialStatus;
  summary: string;
};

const trials: TrialItem[] = [
  {
    name: "Cardiavax Alpha",
    phase: "Discovery",
    status: "Completed",
    summary:
      "Target identification and early compound screening completed with favorable biomarkers."
  },
  {
    name: "Neurovance Beta",
    phase: "Preclinical",
    status: "Completed",
    summary:
      "Preclinical safety and dosing profiles validated across multi-site models."
  },
  {
    name: "RespiraCore One",
    phase: "Phase 1",
    status: "In Progress",
    summary:
      "First-in-human study underway to evaluate safety, tolerability, and PK/PD."
  },
  {
    name: "OncoShield Prime",
    phase: "Phase 2",
    status: "Planned",
    summary:
      "Phase 2 trials scheduled to assess efficacy across priority oncology cohorts."
  },
  {
    name: "Immunavax",
    phase: "Phase 3",
    status: "Planned",
    summary:
      "Global Phase 3 trials in planning for accelerated regulatory submissions."
  },
  {
    name: "Renalix",
    phase: "Approval",
    status: "Planned",
    summary:
      "Regulatory submission preparation aligned with multi-region compliance review."
  }
];

const statusStyles: Record<TrialStatus, string> = {
  Completed: "bg-brand-clinical",
  "In Progress": "bg-brand-primary",
  Planned: "bg-slate-300"
};

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 6 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
  }
};

export default function ClinicalTrialTimeline() {
  return (
    <Section aria-labelledby="clinical-trial-timeline">
      <Container>
        <div className="space-y-12">
          <SectionHeader
            title="Clinical Trial Progression"
            subtitle="Tracking therapeutic research advancement through regulatory phases"
            titleId="clinical-trial-timeline"
          />

          <motion.ol
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="relative grid gap-8 md:grid-cols-6"
            aria-label="Clinical trial timeline"
          >
            <span
              aria-hidden="true"
              className="absolute left-6 right-6 top-6 hidden h-px bg-brand-soft md:block"
            />
            <span
              aria-hidden="true"
              className="absolute left-6 top-6 hidden h-[calc(100%-2rem)] w-px bg-brand-soft md:hidden"
            />

            {trials.map((trial) => (
              <motion.li
                key={trial.name}
                variants={itemVariants}
                className="group relative"
              >
                <div className="flex items-start gap-5 md:flex-col md:items-center">
                  <button
                    type="button"
                    className="relative flex h-12 w-12 items-center justify-center rounded-full border border-brand-soft bg-white shadow-sm outline-none transition-shadow focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 group-hover:shadow-md"
                    aria-label={`${trial.name} - ${trial.phase} (${trial.status})`}
                  >
                    <span
                      className={[
                        "h-3 w-3 rounded-full",
                        statusStyles[trial.status]
                      ].join(" ")}
                      aria-hidden="true"
                    />
                  </button>

                  <div className="space-y-2 md:text-center">
                    <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-brand-primary">
                      {trial.phase}
                    </p>
                    <p className="text-base font-semibold text-brand-navy">
                      {trial.name}
                    </p>
                    <p className="text-xs text-brand-neutral">{trial.status}</p>
                  </div>
                </div>

                <div
                  className="pointer-events-none absolute z-10 hidden w-72 -translate-y-2 rounded-2xl border border-brand-soft bg-white p-5 text-sm text-slate-700 shadow-xl md:group-hover:block md:group-focus-within:block"
                  role="tooltip"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-primary">
                    {trial.phase}
                  </p>
                  <p className="mt-2 text-sm font-semibold text-brand-navy">
                    {trial.name}
                  </p>
                  {trial.summary}
                </div>
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </Container>
    </Section>
  );
}
