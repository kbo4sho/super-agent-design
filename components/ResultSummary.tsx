import { ceoSummary, completedItems, feedbackSource } from "@/lib/run-data";
import { Button } from "./Button";

export function ResultSummary({
  onRestart,
}: {
  onRestart: () => void;
}) {
  return (
    <section aria-labelledby="result-title" className="page-emerge">
      <p className="section-kicker reveal-item">Result</p>
      <h1
        className="reveal-item mt-4 text-5xl font-semibold leading-[1.03] tracking-normal text-ink sm:text-6xl"
        id="result-title"
        style={{ animationDelay: "80ms" }}
      >
        Run complete
      </h1>
      <p
        className="reveal-item mt-5 max-w-[660px] text-lg leading-8 text-muted"
        style={{ animationDelay: "150ms" }}
      >
        The agent completed the approved work and paused where human judgment
        mattered.
      </p>

      <section className="rail-list">
        <div
          className="rail-item input-emerge"
          style={{ animationDelay: "230ms" }}
        >
          <span className="rail-node rail-node-result">
            <span className="sr-only">Run completed</span>
          </span>
          <div className="receipt-panel p-6 sm:p-8">
            <h2 className="text-base font-semibold tracking-normal text-ink">
              Completed
            </h2>
            <p className="mt-4 text-sm leading-6 text-muted">
              <span className="font-semibold text-ink">Source analyzed:</span>{" "}
              {feedbackSource.filename} / {feedbackSource.noteCount} feedback notes
            </p>
            <ul className="mt-5 space-y-3">
              {completedItems.map((item) => (
                <li className="flex gap-3 text-sm leading-6 text-muted" key={item}>
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
                <span className="font-semibold text-ink">Evidence:</span> Mentioned
                by 4 of {feedbackSource.accountCount} customer accounts in the
                attached feedback.
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
        </div>
      </section>

      <div
        className="reveal-item mt-10 flex justify-end"
        style={{ animationDelay: "480ms" }}
      >
        <Button onClick={onRestart}>Start another run</Button>
      </div>
    </section>
  );
}
