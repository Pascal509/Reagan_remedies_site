export interface AdminKpiCardProps {
  label: string;
  value: string;
  trend?: string;
}

export default function AdminKpiCard({
  label,
  value,
  trend
}: AdminKpiCardProps) {
  return (
    <div className="rounded-2xl border border-brand-soft bg-white p-6 shadow-sm">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-primary">
        {label}
      </p>
      <div className="mt-3 text-3xl font-semibold text-brand-navy">{value}</div>
      {trend ? (
        <p className="mt-2 text-xs text-brand-neutral">{trend}</p>
      ) : null}
    </div>
  );
}
