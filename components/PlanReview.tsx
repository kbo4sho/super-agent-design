import { feedbackSource, planSteps } from "@/lib/run-data";
import { Button } from "./Button";
import { PlanStep } from "./PlanStep";
import type { AutonomyLevel } from "@/lib/types";

export function PlanReview({
  autonomy,
  onStartRun,
  onEditGoal,
}: {
  autonomy: AutonomyLevel;
  onStartRun: () => void;
  onEditGoal: () => void;
}) {
  return (
    <section aria-labelledby="plan-title" className="page-emerge">
      <p className="section-kicker reveal-item">Plan</p>
      <h1
        className="reveal-item mt-4 text-5xl font-semibold leading-[1.03] tracking-normal text-ink sm:text-6xl"
        id="plan-title"
        style={{ animationDelay: "80ms" }}
      >
        Review the plan
      </h1>
      <p
        className="reveal-item mt-5 max-w-[620px] text-lg leading-8 text-muted"
        style={{ animationDelay: "150ms" }}
      >
        The agent will use the attached feedback source to identify repeated
        customer signals.
      </p>

      <div
        className="reveal-item mt-8 flex flex-col gap-1 border-l-2 border-[var(--color-rail-active)] pl-4"
        style={{ animationDelay: "220ms" }}
      >
        <p className="text-sm font-semibold text-muted">Source</p>
        <p className="text-sm text-ink">
          {feedbackSource.filename} / {feedbackSource.noteCount} notes
        </p>
      </div>

      <ol className="rail-list plan-rail-list">
        {planSteps.map((step, index) => (
          <PlanStep autonomy={autonomy} index={index} key={step.id} step={step} />
        ))}
      </ol>

      <div
        className="reveal-item mt-10 flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between"
        style={{ animationDelay: "520ms" }}
      >
        <Button variant="quiet" onClick={onEditGoal}>
          Edit goal
        </Button>
        <Button onClick={onStartRun}>Start run</Button>
      </div>
    </section>
  );
}
