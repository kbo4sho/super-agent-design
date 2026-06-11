# Supervised Run Clickable Prototype Plan

## Purpose

Build a polished, light-themed Next.js prototype called **Supervised Run**.

The prototype demonstrates a calm interaction model for delegating work to an AI agent:

**Goal -> Plan -> Run -> Approval -> Result**

The artifact should demonstrate agent UX judgment, taste, and frontend implementation quality in a live product concept.

## Product Story

Autonomous AI products should not expose everything at once. They should guide the user through a supervised run where the agent can act safely, pause for risky actions, explain itself, and recover when needed.

The demo task:

> Find the strongest customer signals in the attached feedback, draft outreach to the top three customers, and prepare a short CEO summary.

Visible source:

**customer-feedback-q2.txt**

- 42 feedback notes.
- 6 customer accounts.
- Last updated 2 days ago.

This scenario works because it contains safe agent work and real-world consequences:

- Reading feedback is safe.
- Grouping signals is safe.
- Ranking opportunities needs review.
- Drafting outreach needs review.
- Sending emails requires explicit approval.

## Scope

This is a scripted prototype, not a real agent.

**In scope**

- One complete click-through flow.
- React state for five run states.
- Static mock data.
- Visible plan review.
- Autonomy selector.
- Running state with current-step expansion.
- Approval gate for external action.
- Simple final result.
- Light, single-column UI with strong typography and spacing.

**Out of scope**

- Backend services.
- Real AI API calls.
- Auth.
- Database.
- Real email sending.
- Chat UI.
- Dashboard views.
- Multi-run history.

## Stack

- Next.js App Router.
- TypeScript.
- Tailwind CSS.
- React state.
- Static mock data.

Suggested structure:

```txt
app/page.tsx
app/layout.tsx
app/globals.css
components/Shell.tsx
components/GoalComposer.tsx
components/AutonomySelector.tsx
components/PlanReview.tsx
components/PlanStep.tsx
components/RunProgress.tsx
components/ApprovalGate.tsx
components/ResultSummary.tsx
components/Button.tsx
lib/run-data.ts
lib/types.ts
```

## Interaction States

### 1. Compose

The user sees a centered, sparse screen.

Content:

- Header: **Supervised Run**
- Subtitle: **A lightweight model for delegating work to AI agents.**
- Prompt: **What should the agent do?**
- Large text area prefilled with the demo goal.
- Autonomy selector with three options:
  - Suggest only.
  - Ask before important actions.
  - Act when safe.
- Primary CTA: **Create plan**

Default autonomy: **Ask before important actions**.

### 2. Plan

The user reviews the agent's plan before execution.

Heading: **Review the plan**

Subcopy:

> The agent can complete safe steps on its own and will pause before anything consequential.

Plan steps:

1. Read 42 feedback notes.
2. Group repeated customer signals.
3. Rank customer opportunities.
4. Draft three outreach emails.
5. Send emails.

Each step shows:

- Risk: safe, review, or approval.
- Control behavior based on selected autonomy level.

Primary CTA: **Start run**

Secondary action: **Edit goal**

### 3. Running

The agent works through the approved plan.

The progress list should show:

- Completed steps with checkmarks.
- Current step with a filled dot.
- Future steps with empty dots.
- Only the current step expanded.

Current expanded step:

**Ranking customer opportunities**

The expanded state shows:

- What the agent is doing.
- Confidence: 78%.
- Evidence: 4 sources.
- Control: Review before continuing.
- Disclosure: **Show reasoning**.

Clicking **Continue** progresses to approval.

Secondary action: **Pause**.

### 4. Approval

The agent pauses before contacting customers outside the workspace.

Heading: **Approval required**

Subcopy:

> The agent drafted three emails, but needs your approval before contacting people outside your workspace.

Show one email preview:

- To: Alex Morgan.
- Role: Head of Product at Acme Corp.
- Subject: Following up on your analytics feedback.
- Body with concise outreach copy.

Explanation section:

**Why approval is required**

> This action contacts people outside your workspace.

Actions:

- Primary: **Approve and send**
- Secondary: **Edit emails**
- Quiet/destructive: **Cancel step**

### 5. Result

The final state shows that the run completed and paused where judgment mattered.

Heading: **Run complete**

Completed summary:

- Read 42 feedback notes.
- Identified 6 repeated customer signals.
- Ranked 3 high-fit customer opportunities.
- Drafted 3 outreach emails.
- Sent approved outreach.
- Prepared CEO summary.

CEO summary:

- Top signal: analytics workflow friction appeared across enterprise accounts.
- Why it matters: customers describe manual weekly reporting work tied to active business processes.
- Recommended next step: validate the analytics workflow with three customer conversations before prioritizing a build.

Final CTA: **Start another run**

## Design Requirements

- Light theme only.
- Single centered column, max width 720px to 860px.
- No sidebar.
- No dashboard layout.
- No card grid.
- No dark theme.
- No chatbot transcript.
- No decorative AI visual language.
- One primary CTA visible at a time.
- One expanded section at a time.
- Plain language over agent jargon.
- Calm approval screen, not an alarm state.

## TypeScript Model

```ts
export type AutonomyLevel = "suggest" | "supervised" | "safe-auto";

export type RunState = "compose" | "plan" | "running" | "approval" | "result";

export type RiskLevel = "safe" | "review" | "approval";

export type PlanStep = {
  id: string;
  title: string;
  description: string;
  risk: RiskLevel;
  controlByAutonomy: Record<AutonomyLevel, string>;
};
```

## Test Plan

- The full click-through flow works without external services.
- The selected autonomy level changes the plan control copy.
- There is never more than one primary CTA visible.
- There is never more than one expanded run step.
- The approval gate clearly explains why approval is required.
- The result looks like a useful artifact, not a chat transcript.
- Desktop and mobile layouts have no horizontal overflow.
- The app is polished enough to send as a live preview link.
