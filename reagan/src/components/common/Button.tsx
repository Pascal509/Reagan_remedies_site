import type { ButtonHTMLAttributes } from "react";

export type ButtonVariant = "primary" | "secondary" | "outline";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-md px-5 py-2.5 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60";

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-brand-primary text-white shadow-sm hover:bg-brand-primary/90 hover:shadow-md ring-offset-white",
  secondary:
    "bg-brand-soft text-brand-navy hover:bg-brand-soft/80 ring-offset-white",
  outline:
    "border border-brand-primary text-brand-primary hover:bg-brand-soft ring-offset-white"
};

export default function Button({
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      className={[baseStyles, variantStyles[variant], className].join(" ")}
      {...props}
    />
  );
}
