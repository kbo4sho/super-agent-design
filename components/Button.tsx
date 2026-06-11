import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "quiet";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: ButtonVariant;
};

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-[var(--color-primary-bg)] text-[var(--color-primary-fg)] border-[var(--color-primary-bg)] shadow-[var(--shadow-button)] hover:bg-[var(--color-primary-hover)] focus-visible:outline-accent",
  secondary:
    "bg-[var(--color-secondary-bg)] text-ink border-line hover:border-[var(--color-line-strong)] hover:bg-[var(--color-secondary-hover)] focus-visible:outline-accent",
  quiet:
    "bg-transparent text-muted border-transparent hover:text-ink focus-visible:outline-accent",
};

export function Button({
  children,
  className = "",
  variant = "primary",
  ...props
}: ButtonProps) {
  return (
    <button
      className={[
        "inline-flex min-h-11 items-center justify-center rounded-full border px-5 text-sm font-semibold transition disabled:cursor-not-allowed disabled:opacity-45 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
        variants[variant],
        className,
      ].join(" ")}
      {...props}
    >
      {children}
    </button>
  );
}
