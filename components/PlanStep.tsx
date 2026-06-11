import type { AutonomyLevel, PlanStep as PlanStepModel } from "@/lib/types";

const riskLabels: Record<PlanStepModel["risk"], string> = {
  safe: "Safe",
  review: "Review",
  approval: "Approval",
};

const riskStyles: Record<PlanStepModel["risk"], string> = {
  safe: "text-[var(--color-safe)]",
  review: "text-[var(--color-review)]",
  approval: "text-[var(--color-approval)]",
};

export function PlanStep({
  index,
  step,
  autonomy,
}: {
  index: number;
  step: PlanStepModel;
  autonomy: AutonomyLevel;
}) {
  return (
    <li
      className="rail-item plan-rail-item reveal-item"
      style={{ animationDelay: `${280 + index * 70}ms` }}
    >
      <span
        aria-hidden="true"
        className="rail-node rail-node-route"
      >
        {index + 1}
      </span>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h3 className="text-lg font-semibold tracking-normal text-ink">
            {step.title}
          </h3>
          <p className="mt-1 max-w-[560px] text-sm leading-6 text-muted">
            {step.description}
          </p>
        </div>
        <span
          className={[
            "w-max rounded-full bg-[var(--color-status-bg)] px-3 py-1 text-xs font-semibold",
            riskStyles[step.risk],
          ].join(" ")}
        >
          {riskLabels[step.risk]}
        </span>
      </div>
      <p className="mt-3 max-w-[580px] text-sm leading-6 text-muted">
        <span className="font-semibold text-ink">Control:</span>{" "}
        {step.controlByAutonomy[autonomy]}
      </p>
    </li>
  );
}
