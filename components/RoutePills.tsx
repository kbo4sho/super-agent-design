import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";

type RouteName = "Standards" | "Process" | "Prototype";

const routes: Array<{ href: string; label: RouteName }> = [
  { href: "/standards", label: "Standards" },
  { href: "/process", label: "Process" },
  { href: "/", label: "Prototype" },
];

export function RoutePills({ active }: { active: RouteName }) {
  return (
    <div className="relative flex flex-col items-center gap-3 sm:block">
      <nav aria-label="Artifact navigation" className="flex justify-center">
        <div className="inline-grid grid-cols-3 rounded-full border border-line bg-[var(--color-secondary-bg)] p-1 shadow-[0_12px_36px_rgba(51,43,31,0.055)]">
          {routes.map((route) => {
            const isActive = route.label === active;

            return (
              <Link
                aria-current={isActive ? "page" : undefined}
                className={[
                  "flex min-h-9 items-center justify-center rounded-full px-3.5 text-[13px] font-semibold transition sm:px-5",
                  isActive
                    ? "bg-paper text-ink shadow-[0_7px_18px_rgba(51,43,31,0.08)]"
                    : "text-muted hover:text-ink",
                ].join(" ")}
                href={route.href}
                key={route.href}
              >
                {route.label}
              </Link>
            );
          })}
        </div>
      </nav>
      <div className="flex justify-center sm:absolute sm:right-0 sm:top-1/2 sm:-translate-y-1/2">
        <ThemeToggle />
      </div>
    </div>
  );
}
