import type { ReactNode } from "react";
import { AppFooter } from "@/components/AppFooter";
import { RoutePills } from "@/components/RoutePills";
import type { RunState } from "@/lib/types";

const journeyProgress: Record<RunState, string> = {
  compose: "journey-progress-compose",
  plan: "journey-progress-plan",
  running: "journey-progress-running",
  result: "journey-progress-result",
};

export function Shell({
  children,
  runState,
}: {
  children: ReactNode;
  runState: RunState;
}) {
  return (
    <main className="min-h-screen bg-canvas text-ink">
      <div className="mx-auto flex min-h-screen w-full max-w-[820px] flex-col px-5 py-9 sm:px-8 sm:py-14">
        <RoutePills active="Prototype" />
        <header className="mt-8 sm:mt-10">
          <div>
            <p className="text-[13px] font-semibold text-ink">Supervised Run</p>
            <p className="mt-1 max-w-[340px] text-sm leading-6 text-muted">
              A lightweight interaction model for delegating work to AI agents.
            </p>
          </div>
        </header>
        <div className="flex flex-1 flex-col justify-center py-14 sm:py-20">
          <div
            className={["journey-frame", journeyProgress[runState]].join(" ")}
          >
            <div aria-hidden="true" className="journey-rail" />
            <div className="journey-content">{children}</div>
          </div>
        </div>
        <AppFooter />
      </div>
    </main>
  );
}
