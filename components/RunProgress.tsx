import { useEffect, useState } from "react";
import {
  ceoSummary,
  completedItems,
  emailDraft,
  feedbackSource,
  planSteps,
} from "@/lib/run-data";
import { Button } from "./Button";

const reviewStepDetails: Record<
  string,
  {
    body: string;
    stats: Array<{ label: string; value: string }>;
    reasoning: string;
  }
> = {
  "rank-opportunities": {
    body: "The agent scored each opportunity by impact, urgency, confidence, and source quality.",
    stats: [
      { label: "Confidence", value: "78%" },
      { label: "Evidence", value: "4 sources" },
      { label: "Control", value: "Review before continuing" },
    ],
    reasoning:
      "The top opportunities rank higher when the same request appears across multiple accounts, has revenue impact, and can be addressed with existing product capabilities.",
  },
  "draft-outreach": {
    body: "The agent drafted outreach for the top three customer opportunities. Review tone, recipients, and claims before anything leaves the workspace.",
    stats: [
      { label: "Recipients", value: "3 customers" },
      { label: "Tone", value: "Concise" },
      { label: "Control", value: "Editable before approval" },
    ],
    reasoning:
      "The drafts reference the customer signal directly, avoid product promises, and ask for a short validation conversation instead of pushing a sale.",
  },
  "prepare-ceo-summary": {
    body: "The agent prepared an executive summary that ties the top customer signal to evidence and a recommended next step.",
    stats: [
      { label: "Format", value: "3 bullets" },
      { label: "Evidence", value: "4 accounts" },
      { label: "Control", value: "Review before finalizing" },
    ],
    reasoning:
      "The summary stays decision-oriented: top signal, why it matters, and the smallest useful next step for leadership.",
  },
};

const nextReviewLabels: Record<string, string> = {
  "draft-outreach": "Review draft emails",
  "prepare-ceo-summary": "Review CEO summary",
};

export function RunProgress({
  completed = false,
  onComplete,
  onRestart,
}: {
  completed?: boolean;
  onComplete: () => void;
  onRestart: () => void;
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [expandedReasoningStep, setExpandedReasoningStep] = useState<
    string | null
  >(null);
  const [showSourceNote, setShowSourceNote] = useState(false);
  const [visibleStepCount, setVisibleStepCount] = useState(1);
  const currentStep = planSteps[activeIndex];
  const currentReview =
    !completed && currentStep ? reviewStepDetails[currentStep.id] : null;
  const waitingForReview = Boolean(
    !completed && currentStep && currentStep.risk === "review",
  );
  const waitingForApproval = Boolean(
    !completed && currentStep && currentStep.risk === "approval",
  );
  const approvalStepIndex = planSteps.findIndex(
    (step) => step.risk === "approval",
  );
  const nextReviewIndex = planSteps.findIndex(
    (step, index) => index > activeIndex && step.risk === "review",
  );
  const canContinue = waitingForReview;
  const continueLabel =
    nextReviewIndex >= 0
      ? nextReviewLabels[planSteps[nextReviewIndex].id]
      : "Continue to approval";
  const sourceNote = feedbackSource.previewNotes[0];
  const showFinishNode = !completed && !waitingForApproval;
  const pageKicker = completed
    ? "Result"
    : waitingForApproval
      ? "Approval"
      : waitingForReview
        ? "Review"
        : "Run";
  const pageTitle = completed
    ? "Run complete"
    : waitingForApproval
      ? "Approval required"
      : waitingForReview
        ? "Review"
        : "Running";
  const pageDescription = completed
    ? "The approved work is complete, with the important decisions and evidence preserved."
    : waitingForApproval
      ? "The agent is ready to contact people outside the workspace."
      : waitingForReview
        ? "The agent paused at a review step before continuing."
        : "The agent is working through the approved plan.";

  useEffect(() => {
    const timers = [
      window.setTimeout(() => {
        setActiveIndex(1);
        setVisibleStepCount(2);
      }, 1700),
      window.setTimeout(() => {
        setActiveIndex(2);
        setVisibleStepCount(3);
      }, 3800),
      window.setTimeout(() => setVisibleStepCount(4), 4300),
      window.setTimeout(() => setVisibleStepCount(5), 4800),
      window.setTimeout(() => setVisibleStepCount(6), 5300),
    ];

    return () => {
      timers.forEach((timer) => window.clearTimeout(timer));
    };
  }, []);

  useEffect(() => {
    if (!completed) return;

    window.setTimeout(() => {
      document
        .querySelector("[data-run-result]")
        ?.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 80);
  }, [completed]);

  function continueRun() {
    setExpandedReasoningStep(null);
    setShowSourceNote(false);

    if (nextReviewIndex >= 0) {
      setVisibleStepCount((count) =>
        Math.max(count, Math.min(planSteps.length, nextReviewIndex + 1)),
      );
      setActiveIndex(nextReviewIndex);
      window.setTimeout(() => {
        document
          .querySelector(`[data-run-step-index="${nextReviewIndex}"]`)
          ?.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 50);
      return;
    }

    if (approvalStepIndex >= 0) {
      setVisibleStepCount(planSteps.length);
      setActiveIndex(approvalStepIndex);
      window.setTimeout(() => {
        document
          .querySelector(`[data-run-step-index="${approvalStepIndex}"]`)
          ?.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 50);
    }
  }

  return (
    <section aria-labelledby="running-title" className="page-emerge">
      <p className="section-kicker reveal-item">{pageKicker}</p>
      <h1
        className="reveal-item mt-4 text-5xl font-semibold leading-[1.03] tracking-normal text-ink sm:text-6xl"
        id="running-title"
        style={{ animationDelay: "80ms" }}
      >
        {pageTitle}
      </h1>
      <p
        className="reveal-item mt-5 max-w-[620px] text-lg leading-8 text-muted"
        style={{ animationDelay: "150ms" }}
      >
        {pageDescription}
      </p>

      <ol
        className={[
          "rail-list",
          "run-rail-list",
          waitingForApproval ? "run-approval-list" : "",
          completed ? "run-complete-list" : "",
        ].join(" ")}
      >
        {planSteps.map((step, index) => {
          const shouldRender = completed || index < visibleStepCount;
          const stepCompleted = completed || index < activeIndex;
          const current = !completed && index === activeIndex;
          const approvalCurrent = current && step.risk === "approval";
          const readSourceStep = step.id === "read-feedback";
          const groupStep = step.id === "group-signals";
          const showCompletedDescription =
            stepCompleted &&
            !completed &&
            !current &&
            !readSourceStep &&
            !groupStep;

          if (!shouldRender) return null;

          return (
            <li
              className={[
                "rail-item run-step",
                stepCompleted
                  ? "rail-item-complete"
                  : current
                    ? "rail-item-current"
                    : "rail-item-upcoming",
                approvalCurrent ? "rail-item-approval-current" : "",
                step.risk === "approval" ? "rail-item-approval-step" : "",
              ].join(" ")}
              data-run-step-index={index}
              key={step.id}
              style={{ animationDelay: `${Math.min(index * 80, 240)}ms` }}
            >
              <span
                className={[
                  "rail-node",
                  stepCompleted
                    ? "rail-node-complete"
                    : approvalCurrent
                      ? "rail-node-current rail-node-approval-current"
                    : current
                      ? "rail-node-current"
                    : "rail-node-upcoming",
                ].join(" ")}
              >
                <span className="sr-only">
                  {stepCompleted
                    ? "Completed"
                    : current
                      ? "Current"
                      : "Upcoming"}
                </span>
              </span>
              {approvalCurrent ? (
                <span
                  aria-hidden="true"
                  className="rail-node rail-node-finish rail-node-approval-finish"
                />
              ) : null}
              <div>
                <div className="min-w-0 flex-1">
                  <h3
                    className={[
                      completed ? "text-base" : "text-lg",
                      "font-semibold tracking-normal",
                      current || stepCompleted ? "text-ink" : "text-faint",
                    ].join(" ")}
                  >
                    {readSourceStep && stepCompleted
                      ? `Read ${feedbackSource.filename}`
                      : step.title}
                  </h3>
                  {completed ? (
                    <p className="mt-1 text-sm leading-6 text-muted">
                      {step.description}
                    </p>
                  ) : null}
                  {readSourceStep && stepCompleted && !completed ? (
                    <p className="mt-1 text-sm leading-6 text-muted">
                      {feedbackSource.noteCount} notes across{" "}
                      {feedbackSource.accountCount} customer accounts
                    </p>
                  ) : null}
                  {groupStep && stepCompleted && !completed ? (
                    <p className="mt-1 text-sm leading-6 text-muted">
                      Found 6 repeated buying signals across the attached notes
                    </p>
                  ) : null}
                  {showCompletedDescription ? (
                    <p className="mt-1 text-sm leading-6 text-muted">
                      {step.description}
                    </p>
                  ) : null}
                  {current ? (
                    <div className="rail-panel input-emerge">
                      {currentReview ? (
                        <>
                          <p className="text-sm leading-6 text-muted">
                            {currentReview.body}
                          </p>
                          <dl className="mt-5 grid gap-4 text-sm sm:grid-cols-3">
                            {currentReview.stats.map((stat) => (
                              <div key={stat.label}>
                                <dt className="text-faint">{stat.label}</dt>
                                <dd className="mt-1 font-semibold text-ink">
                                  {stat.value}
                                </dd>
                              </div>
                            ))}
                          </dl>
                          <p className="mt-5 text-sm leading-6 text-muted">
                            <span className="font-semibold text-ink">
                              Source used:
                            </span>{" "}
                            {feedbackSource.filename}
                          </p>
                          <button
                            className="mt-6 text-sm font-semibold text-accent underline-offset-4 hover:underline"
                            type="button"
                            onClick={() =>
                              setExpandedReasoningStep((visibleStep) =>
                                visibleStep === step.id ? null : step.id,
                              )
                            }
                          >
                            {expandedReasoningStep === step.id
                              ? "Hide reasoning"
                              : "Show reasoning"}
                          </button>
                          {expandedReasoningStep === step.id ? (
                            <p className="reveal-item mt-4 border-l-2 border-[var(--color-rail-active)] pl-4 text-sm leading-6 text-muted">
                              {currentReview.reasoning}
                            </p>
                          ) : null}
                        </>
                      ) : step.risk === "approval" ? (
                        <>
                          <div className="border-b border-line pb-5">
                            <p className="text-sm text-faint">To</p>
                            <p className="mt-1 text-lg font-semibold text-ink">
                              {emailDraft.to}
                            </p>
                            <p className="mt-1 text-sm text-muted">
                              {emailDraft.role}
                            </p>
                          </div>
                          <div className="border-b border-line py-5">
                            <p className="text-sm text-faint">Subject</p>
                            <p className="mt-1 text-base font-semibold text-ink">
                              {emailDraft.subject}
                            </p>
                          </div>
                          <div className="pt-5">
                            <p className="mb-5 text-sm font-semibold text-accent">
                              Based on feedback from {feedbackSource.filename}
                            </p>
                            <p className="whitespace-pre-line text-base leading-8 text-muted">
                              {emailDraft.body}
                            </p>
                            <button
                              className="mt-6 text-sm font-semibold text-accent underline-offset-4 hover:underline"
                              type="button"
                              onClick={() =>
                                setShowSourceNote((visible) => !visible)
                              }
                            >
                              {showSourceNote
                                ? "Hide source note"
                                : "View source note"}
                            </button>
                            {showSourceNote ? (
                              <div className="reveal-item mt-4 border-l-2 border-[var(--color-rail-active)] pl-4">
                                <p className="text-sm leading-6 text-ink">{`"${sourceNote.quote}"`}</p>
                                <p className="mt-1 text-sm text-muted">
                                  {sourceNote.customer}, {sourceNote.company}
                                </p>
                              </div>
                            ) : null}
                          </div>
                          <section className="mt-5 rounded-3xl border border-line bg-[var(--color-secondary-bg)] p-5">
                            <h4 className="text-base font-semibold tracking-normal text-ink">
                              Why approval is required
                            </h4>
                            <p className="mt-2 text-sm leading-6 text-muted">
                              This action contacts people outside your
                              workspace.
                            </p>
                          </section>
                        </>
                      ) : (
                        <p className="text-sm leading-6 text-muted">
                          {readSourceStep
                            ? `Reading ${feedbackSource.noteCount} notes across ${feedbackSource.accountCount} customer accounts.`
                            : "Grouping repeated requests, complaints, and workflow patterns."}
                        </p>
                      )}
                    </div>
                  ) : null}
                </div>
              </div>
            </li>
          );
        })}
        {showFinishNode ? (
          <li
            aria-hidden="true"
            className="rail-item run-finish-step run-step"
            style={{ animationDelay: "260ms" }}
          >
            <span className="rail-node rail-node-finish" />
          </li>
        ) : null}
        {completed ? (
          <li
            className="rail-item run-result-step run-step"
            data-run-result
            style={{ animationDelay: "180ms" }}
          >
            <span className="rail-node rail-node-result">
              <span className="sr-only">Run completed</span>
            </span>
            <div className="receipt-panel p-6 sm:p-8">
              <h2 className="text-base font-semibold tracking-normal text-ink">
                Completed
              </h2>
              <p className="mt-4 text-sm leading-6 text-muted">
                <span className="font-semibold text-ink">
                  Source analyzed:
                </span>{" "}
                {feedbackSource.filename} / {feedbackSource.noteCount} feedback
                notes
              </p>
              <ul className="mt-5 space-y-3">
                {completedItems.map((item) => (
                  <li
                    className="flex gap-3 text-sm leading-6 text-muted"
                    key={item}
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-rail-active)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 border-t border-line pt-6">
                <h2 className="text-base font-semibold tracking-normal text-ink">
                  CEO summary
                </h2>
                <p className="mt-3 text-sm leading-6 text-muted">
                  <span className="font-semibold text-ink">Evidence:</span>{" "}
                  Mentioned by 4 of {feedbackSource.accountCount} customer
                  accounts in the attached feedback.
                </p>
                <div className="mt-5 space-y-5">
                  {ceoSummary.map((item) => (
                    <div key={item.label}>
                      <p className="text-sm font-semibold text-accent">
                        {item.label}
                      </p>
                      <p className="mt-1 text-base leading-7 text-muted">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </li>
        ) : null}
      </ol>

      <div className="reveal-item mt-10 flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
        {completed ? (
          <div className="flex w-full justify-end">
            <Button onClick={onRestart}>Start another run</Button>
          </div>
        ) : waitingForApproval ? (
          <>
            <Button variant="quiet">Cancel step</Button>
            <div className="flex flex-col-reverse gap-3 sm:flex-row sm:items-center">
              <Button variant="secondary">Edit emails</Button>
              <Button onClick={onComplete}>Approve and send</Button>
            </div>
          </>
        ) : (
          <>
            <Button variant="quiet">Pause</Button>
            <Button disabled={!canContinue} onClick={continueRun}>
              {canContinue ? continueLabel : "Running..."}
            </Button>
          </>
        )}
      </div>
    </section>
  );
}
