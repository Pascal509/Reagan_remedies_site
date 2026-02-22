import type { ReactNode } from "react";

export interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  "aria-label"?: string;
  "aria-labelledby"?: string;
}

export default function Section({
  children,
  className = "",
  id,
  "aria-label": ariaLabel,
  "aria-labelledby": ariaLabelledby
}: SectionProps) {
  return (
    <section
      id={id}
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledby}
      className={["py-20 md:py-28 lg:py-32", className].join(" ")}
    >
      {children}
    </section>
  );
}
