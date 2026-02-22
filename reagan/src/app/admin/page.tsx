"use client";

import { motion } from "framer-motion";

import { Container, Section, SectionHeader } from "@/components/common";
import AdminCharts from "@/components/admin/AdminCharts";
import AdminKpiCard from "@/components/admin/AdminKpiCard";
import AdminSidebar from "@/components/admin/AdminSidebar";

const fadeUp = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function AdminPage() {
  return (
    <Section aria-labelledby="admin-dashboard" className="bg-brand-soft/30">
      <Container>
        <div className="space-y-12">
          <SectionHeader
            title="Admin Analytics Dashboard"
            subtitle="Enterprise-level visibility into subscriptions, clinical programs, and engagement metrics."
            titleId="admin-dashboard"
          />
          <div className="grid gap-8 lg:grid-cols-[260px_1fr]">
            <AdminSidebar />
            <div className="space-y-8">
              <motion.div
                {...fadeUp}
                className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
              >
                <AdminKpiCard
                  label="Total Users"
                  value="3,240"
                  trend="+8% month-over-month"
                />
                <AdminKpiCard
                  label="Subscribers"
                  value="1,452"
                  trend="+12% in the last quarter"
                />
                <AdminKpiCard
                  label="Active Trials"
                  value="28"
                  trend="Global portfolio"
                />
                <AdminKpiCard
                  label="Regulatory Reviews"
                  value="7"
                  trend="Across 4 regions"
                />
              </motion.div>
              <motion.div {...fadeUp}>
                <AdminCharts />
              </motion.div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
