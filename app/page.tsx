"use client";

import { useEffect, useState } from "react";
import { GoalComposer } from "@/components/GoalComposer";
import { PlanReview } from "@/components/PlanReview";
import { RunProgress } from "@/components/RunProgress";
import { Shell } from "@/components/Shell";
import { defaultGoal } from "@/lib/run-data";
import type { AutonomyLevel, RunState } from "@/lib/types";

export default function Home() {
  const [runState, setRunState] = useState<RunState>("compose");
  const [runComplete, setRunComplete] = useState(false);
  const [goal, setGoal] = useState(defaultGoal);
  const [autonomy, setAutonomy] = useState<AutonomyLevel>("supervised");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [runState]);

  function restart() {
    setRunState("compose");
    setRunComplete(false);
    setGoal(defaultGoal);
    setAutonomy("supervised");
  }

  return (
    <Shell runState={runComplete ? "result" : runState}>
      {runState === "compose" ? (
        <GoalComposer
          autonomy={autonomy}
          goal={goal}
          onAutonomyChange={setAutonomy}
          onCreatePlan={() => setRunState("plan")}
          onGoalChange={setGoal}
        />
      ) : null}

      {runState === "plan" ? (
        <PlanReview
          autonomy={autonomy}
          onEditGoal={() => setRunState("compose")}
          onStartRun={() => {
            setRunComplete(false);
            setRunState("running");
          }}
        />
      ) : null}

      {runState === "running" ? (
        <RunProgress
          completed={runComplete}
          onComplete={() => setRunComplete(true)}
          onRestart={restart}
        />
      ) : null}
    </Shell>
  );
}
