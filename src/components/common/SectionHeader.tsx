import type { ReactNode } from "react";

export interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  icon?: ReactNode;
  children?: ReactNode;
  className?: string;
  titleId?: string;
}

export default function SectionHeader({
  title,
  subtitle,
  icon,
  children,
  className = "",
  titleId
}: SectionHeaderProps) {
  return (
    <header className={["space-y-3", className].join(" ")}>
      <div className="flex items-center gap-3">
        {icon ? (
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-soft/60 text-brand-primary">
            {icon}
          </span>
        ) : null}
        <h2
          id={titleId}
          className="text-3xl font-semibold text-brand-navy md:text-4xl"
        >
          {title}
        </h2>
      </div>
      {subtitle ? (
        <p className="text-base text-slate-600 md:text-lg max-w-3xl">
          {subtitle}
        </p>
      ) : null}
      {children}
    </header>
  );
}
