import type { ReactNode } from "react";

export interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export default function Container({ children, className = "" }: ContainerProps) {
  return <div className={["container", className].join(" ")}>{children}</div>;
}
