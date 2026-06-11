import { autonomyOptions } from "@/lib/run-data";
import type { AutonomyLevel } from "@/lib/types";

export function AutonomySelector({
  value,
  onChange,
}: {
  value: AutonomyLevel;
  onChange: (value: AutonomyLevel) => void;
}) {
  return (
    <fieldset
      className="reveal-item mt-7"
      style={{ animationDelay: "300ms" }}
    >
      <legend className="text-sm font-semibold text-ink">Autonomy</legend>
      <div className="mt-2 divide-y divide-line border-y border-line">
        {autonomyOptions.map((option) => {
          const selected = option.value === value;

          return (
            <label
              className={[
                "flex cursor-pointer items-start gap-3 px-2 py-3 transition hover:bg-[var(--color-hover)]",
                selected ? "bg-[var(--color-hover)]" : "",
              ].join(" ")}
              key={option.value}
            >
              <input
                checked={selected}
                className="sr-only"
                name="autonomy"
                type="radio"
                value={option.value}
                onChange={() => onChange(option.value)}
              />
              <span
                aria-hidden="true"
                className={[
                  "mt-1 h-3.5 w-3.5 shrink-0 rounded-full border",
                  selected
                    ? "border-[var(--color-rail-active)] bg-[var(--color-rail-active)] shadow-[0_0_0_3px_var(--color-accent-soft)]"
                    : "border-[var(--color-dot)] bg-transparent",
                ].join(" ")}
              />
              <span className="min-w-0">
                <span className="flex flex-wrap items-center gap-2 text-sm font-semibold text-ink">
                  {option.label}
                  {option.value === "supervised" ? (
                    <span className="rounded-full bg-[var(--color-status-bg)] px-2 py-0.5 text-[11px] font-semibold text-accent">
                      Recommended
                    </span>
                  ) : null}
                </span>
                <span className="mt-0.5 block text-sm leading-6 text-muted">
                  {option.helper}
                </span>
              </span>
            </label>
          );
        })}
      </div>
    </fieldset>
  );
}
