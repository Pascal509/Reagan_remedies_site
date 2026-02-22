"use client";

import {
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  Bar,
  BarChart
} from "recharts";

const subscriberData = [
  { month: "Jan", subscribers: 820 },
  { month: "Feb", subscribers: 910 },
  { month: "Mar", subscribers: 980 },
  { month: "Apr", subscribers: 1100 },
  { month: "May", subscribers: 1280 },
  { month: "Jun", subscribers: 1400 }
];

const trialData = [
  { phase: "Discovery", count: 14 },
  { phase: "Preclinical", count: 9 },
  { phase: "Phase 1", count: 6 },
  { phase: "Phase 2", count: 4 },
  { phase: "Phase 3", count: 2 },
  { phase: "Approval", count: 1 }
];

export default function AdminCharts() {
  return (
    <div className="grid gap-8 lg:grid-cols-2">
      <div className="rounded-2xl border border-brand-soft bg-white p-6 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-primary">
          Subscribers Growth
        </p>
        <div className="mt-6 h-56">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={subscriberData} margin={{ left: 8, right: 8 }}>
              <XAxis
                dataKey="month"
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
                cursor={{ stroke: "#e6efff" }}
                contentStyle={{
                  borderRadius: 16,
                  borderColor: "#e6efff",
                  backgroundColor: "#ffffff",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.05)",
                  fontSize: 12
                }}
              />
              <Line
                type="monotone"
                dataKey="subscribers"
                stroke="hsl(var(--brand-primary))"
                strokeWidth={3}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="rounded-2xl border border-brand-soft bg-white p-6 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-primary">
          Trial Progress
        </p>
        <div className="mt-6 h-56">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={trialData} barSize={24} margin={{ left: 8, right: 8 }}>
              <XAxis
                dataKey="phase"
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
                dataKey="count"
                fill="hsl(var(--brand-primary))"
                radius={[6, 6, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
