import { useState } from "react";
import { feedbackSource } from "@/lib/run-data";
import { AutonomySelector } from "./AutonomySelector";
import { Button } from "./Button";
import type { AutonomyLevel } from "@/lib/types";

export function GoalComposer({
  goal,
  autonomy,
  onGoalChange,
  onAutonomyChange,
  onCreatePlan,
}: {
  goal: string;
  autonomy: AutonomyLevel;
  onGoalChange: (goal: string) => void;
  onAutonomyChange: (value: AutonomyLevel) => void;
  onCreatePlan: () => void;
}) {
  const [showPreview, setShowPreview] = useState(false);

  return (
    <section aria-labelledby="compose-title" className="page-emerge">
      <p className="section-kicker reveal-item">Goal</p>
      <h1
        className="reveal-item mt-4 max-w-[680px] text-5xl font-semibold leading-[1.02] tracking-normal text-ink sm:text-6xl"
        id="compose-title"
        style={{ animationDelay: "80ms" }}
      >
        What should the agent do?
      </h1>
      <p
        className="reveal-item mt-5 max-w-[620px] text-lg leading-8 text-muted"
        style={{ animationDelay: "140ms" }}
      >
        Be clear about the outcome you want and the context the agent should use.
      </p>
      <div className="input-emerge mt-12">
        <label className="sr-only" htmlFor="goal">
          Goal
        </label>
        <textarea
          className="min-h-48 w-full resize-none rounded-[28px] border border-[var(--color-field-border)] bg-[var(--color-field)] p-6 text-lg leading-8 text-ink shadow-soft outline-none transition placeholder:text-faint focus:border-[var(--color-focus-border)] focus:bg-[var(--color-field-focus)] focus:ring-4 focus:ring-[var(--color-focus-ring)]"
          id="goal"
          value={goal}
          onChange={(event) => onGoalChange(event.target.value)}
        />
      </div>

      <section
        className="reveal-item mt-5"
        aria-label="Attached feedback source"
        style={{ animationDelay: "220ms" }}
      >
        <p className="text-sm font-semibold text-muted">Using this source</p>
        <div className="source-card mt-2">
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-ink">
              {feedbackSource.filename}
            </p>
            <p className="mt-1 text-sm leading-6 text-muted">
              {feedbackSource.noteCount} notes / {feedbackSource.accountCount}{" "}
              customer accounts / {feedbackSource.updatedLabel}
            </p>
          </div>
          <button
            className="shrink-0 text-sm font-semibold text-accent underline-offset-4 hover:underline"
            type="button"
            onClick={() => setShowPreview((visible) => !visible)}
          >
            {showPreview ? "Hide preview" : "Preview source"}
          </button>
        </div>
        {showPreview ? (
          <ol className="reveal-item mt-5 space-y-4 border-l-2 border-[var(--color-rail-active)] pl-5">
            {feedbackSource.previewNotes.map((note) => (
              <li key={`${note.customer}-${note.company}`}>
                <p className="text-sm leading-6 text-ink">{`"${note.quote}"`}</p>
                <p className="mt-1 text-sm text-muted">
                  {note.customer}, {note.company}
                </p>
              </li>
            ))}
          </ol>
        ) : null}
      </section>

      <AutonomySelector value={autonomy} onChange={onAutonomyChange} />
      <div
        className="reveal-item mt-10"
        style={{ animationDelay: "360ms" }}
      >
        <Button className="w-full" onClick={onCreatePlan}>
          Create plan
        </Button>
        <p className="approval-note mt-3">
          The agent will show you the plan before taking action.
        </p>
      </div>
    </section>
  );
}
