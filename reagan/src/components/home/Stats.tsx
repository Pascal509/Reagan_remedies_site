"use client";

import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

import { Container } from "@/components/common";

type StatItem = {
  label: string;
  value: number;
  suffix?: string;
};

const stats: StatItem[] = [
  { label: "Years of Research", value: 25, suffix: "+" },
  { label: "Clinical Trials Conducted", value: 320, suffix: "+" },
  { label: "Countries Served", value: 48, suffix: "+" },
  { label: "Regulatory Approvals", value: 120, suffix: "+" }
];

const DURATION_MS = 1400;

function useCountUp(target: number) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let frame: number;
    const start = performance.now();

    const animate = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / DURATION_MS, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));

      if (progress < 1) {
        frame = requestAnimationFrame(animate);
      }
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [target]);

  return value;
}

export default function Stats() {
  const values = useMemo(() => stats.map((stat) => stat.value), []);
  const animatedValues = values.map((value) => useCountUp(value));

  return (
    <section className="bg-white" aria-labelledby="stats-heading">
      <Container className="py-20 md:py-24 lg:py-28">
        <h2 id="stats-heading" className="sr-only">
          Company metrics
        </h2>
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="grid gap-6 rounded-2xl border border-brand-soft bg-white p-8 md:grid-cols-2 lg:grid-cols-4"
        >
          {stats.map((stat, index) => (
            <div key={stat.label} className="space-y-2">
              <p className="text-3xl font-semibold text-brand-navy md:text-4xl">
                {animatedValues[index]}
                {stat.suffix}
              </p>
              <p className="text-sm font-medium uppercase tracking-[0.16em] text-brand-neutral">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
