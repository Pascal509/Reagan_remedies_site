import type { ReactNode } from "react";

export interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  children?: ReactNode;
  className?: string;
  titleId?: string;
}

export default function SectionHeader({
  title,
  subtitle,
  children,
  className = "",
  titleId
}: SectionHeaderProps) {
  return (
    <header className={["space-y-3", className].join(" ")}>
      <h2
        id={titleId}
        className="text-3xl font-semibold text-brand-navy md:text-4xl"
      >
        {title}
      </h2>
      {subtitle ? (
        <p className="text-base text-slate-600 md:text-lg max-w-3xl">
          {subtitle}
        </p>
      ) : null}
      {children}
    </header>
  );
}
