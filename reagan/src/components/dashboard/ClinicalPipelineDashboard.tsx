"use client";

import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";
import { motion } from "framer-motion";

import { Container, Section, SectionHeader } from "@/components/common";

const pipelineStages = [
  { label: "Discovery", status: "Active" },
  { label: "Preclinical", status: "Active" },
  { label: "Clinical Trial Phase 1", status: "On Track" },
  { label: "Phase 2", status: "Planning" },
  { label: "Phase 3", status: "Upcoming" },
  { label: "Approval", status: "Future" }
];

const trialData = [
  { stage: "Discovery", programs: 14 },
  { stage: "Preclinical", programs: 9 },
  { stage: "Phase 1", programs: 6 },
  { stage: "Phase 2", programs: 4 },
  { stage: "Phase 3", programs: 2 },
  { stage: "Approval", programs: 1 }
];

const stageStatusStyles: Record<string, string> = {
  Active: "bg-brand-primary",
  "On Track": "bg-brand-clinical",
  Planning: "bg-brand-soft",
  Upcoming: "bg-brand-soft",
  Future: "bg-slate-200"
};

export default function ClinicalPipelineDashboard() {
  return (
    <Section aria-labelledby="pipeline-dashboard">
      <Container>
        <div className="space-y-12">
          <SectionHeader
            title="Clinical Pipeline"
            subtitle="An enterprise view of therapeutic programs advancing through discovery and regulatory approval."
            titleId="pipeline-dashboard"
          />

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-brand-soft bg-white p-8 shadow-sm"
            role="region"
            aria-labelledby="pipeline-dashboard"
          >
            <div className="grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
              {pipelineStages.map((stage) => (
                <div key={stage.label} className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span
                      className={[
                        "h-3 w-3 rounded-full",
                        stageStatusStyles[stage.status]
                      ].join(" ")}
                      aria-hidden="true"
                    />
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-neutral">
                      {stage.status}
                    </span>
                  </div>
                  <p className="text-sm font-semibold text-brand-navy">
                    {stage.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-2xl border border-brand-soft bg-white p-8 shadow-sm"
            role="region"
            aria-label="Programs by stage chart"
          >
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="space-y-2">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-primary">
                  Program distribution
                </p>
                <p className="text-2xl font-semibold text-brand-navy">
                  Active programs by stage
                </p>
              </div>
              <div className="text-sm text-brand-neutral">
                Updated quarterly by global R&D governance.
              </div>
            </div>
            <div className="mt-8 h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={trialData}
                  barSize={28}
                  margin={{ left: 12 }}
                >
                  <XAxis
                    dataKey="stage"
                    tickLine={false}
                    axisLine={false}
                    fontSize={12}
                    stroke="#6b7280"
                  />
                  <YAxis
                    tickLine={false}
                    axisLine={false}
                    fontSize={12}
                    stroke="#6b7280"
                  />
                  <Tooltip
                    cursor={{ fill: "#e6efff" }}
                    contentStyle={{
                      borderRadius: 16,
                      borderColor: "#e6efff",
                      backgroundColor: "#ffffff",
                      boxShadow: "0 8px 24px rgba(0,0,0,0.05)",
                      fontSize: 12
                    }}
                  />
                  <Bar
                    dataKey="programs"
                    fill="hsl(var(--brand-primary))"
                    radius={[6, 6, 0, 0]}
                    isAnimationActive={true}
                    animationDuration={1200}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
