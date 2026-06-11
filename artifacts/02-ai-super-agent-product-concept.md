# Supervised Run Product Concept

## Product Thesis

The next generation of AI products should not feel like a chatbot, a dashboard, or an invisible automation engine. They should feel like a supervised run: a calm sequence where the user gives a goal, reviews the plan, lets the agent work, approves consequential actions, and receives a clear result.

**Supervised Run** is a lightweight interaction model for delegating work to an AI agent while keeping the human oriented and in control.

The product standard is simple:

**Goal -> Plan -> Run -> Approval -> Result**

This is not maximum autonomy. It is calibrated agency. The agent should handle safe work, pause at judgment boundaries, explain why approval is required, and make recovery possible without forcing the user to restart.

## User, Problem, And Context

The primary user is a busy operator, founder, product lead, or senior individual contributor who wants to delegate a consequential workflow without losing track of what is happening.

The prototype scenario focuses on customer feedback and outreach:

> Find the strongest customer signals in the attached feedback, draft outreach to the top three customers, and prepare a short CEO summary.

The run is grounded in one visible source:

**customer-feedback-q2.txt**: 42 feedback notes across 6 customer accounts, last updated 2 days ago.

This is a strong agent workflow because it includes both safe analytical work and consequential external action. Reading notes, clustering signals, and preparing drafts can be delegated. Ranking opportunities requires review. Sending customer emails requires explicit approval.

The problem with many AI products is that they expose the wrong shape of control. Chat makes the user babysit every step. Dashboards expose too much at once. Fully autonomous flows hide judgment until something goes wrong. Supervised Run sits between those extremes: it gives the agent room to work, but keeps the current step, next action, and approval boundary visible.

## Product Responsibilities

**The agent owns execution clarity.**

- Translate the user's goal into a short plan.
- Distinguish safe steps from review steps and approval steps.
- Run safe steps automatically within the chosen autonomy level.
- Pause before consequential action.
- Explain why approval is required in plain language.
- Show the result in a concise, reviewable format.

**The human owns judgment.**

- Define the goal and autonomy level.
- Review the plan before the run begins.
- Continue, pause, edit, approve, or cancel at control points.
- Approve actions with real-world consequences.
- Decide whether the result is ready to use.

The agent should feel useful, but not over-autonomous. The product should reduce coordination load without reducing human agency.

## Autonomy Model

Autonomy is scoped to the run, not granted globally.

1. **Suggest only**
   The agent recommends actions but waits before doing them.

2. **Ask before important actions**
   The agent handles safe steps and pauses for review or approval. This is the default.

3. **Act when safe**
   The agent proceeds through safe and reviewable internal steps, but still requires approval before external or irreversible action.

The UI should show how the selected autonomy level changes the plan. The same five steps remain, but the control copy changes. This makes autonomy understandable as behavior, not a settings abstraction.

## Primary Workflow

### 1. Compose Goal

The user sees a sparse, centered screen with one main prompt: **What should the agent do?**

The goal is prefilled in the prototype. The user chooses an autonomy level and clicks **Create plan**.

### 2. Review Plan

The agent presents a short vertical plan:

1. Read 42 feedback notes.
2. Group repeated customer signals.
3. Rank customer opportunities.
4. Draft three outreach emails.
5. Send emails.

Each step includes a risk label and a control label. The list should feel like a clean checklist, not a table.

### 3. Run

The agent moves through the approved plan. Completed steps collapse. The current step expands. The user sees what the agent is doing, why it is doing it, and what happens next.

The prototype expands the ranking step with confidence, evidence count, control status, and optional reasoning.

### 4. Approval Gate

The agent pauses before contacting customers outside the workspace. The screen shows one email preview at a time and a quiet explanation: **This action contacts people outside your workspace.**

The user can approve and send, edit emails, or cancel the step.

### 5. Result

The run ends with a simple summary of completed work and a short CEO-ready synthesis:

- Top signal.
- Why it matters.
- Recommended next step.

The result should feel like completion, not a transcript.

## Key Screens

**Compose**
Single centered column, product name, short subtitle, large text area, autonomy selector, one primary CTA.

**Plan**
Heading, short subcopy, five-step vertical plan, risk/control metadata, one primary CTA, one secondary action.

**Running**
Vertical progress list with only the current step expanded. Includes confidence, evidence, control, and optional reasoning.

**Approval**
Calm approval screen with email preview, explanation of consequence, and three actions: approve, edit, cancel.

**Result**
Completed work summary and CEO summary block. One CTA to start another run.

## Failure Modes

- The goal is too broad or ambiguous.
- The user chooses too much autonomy for the task.
- The agent proceeds without showing why a step is safe.
- A consequential action is treated like a normal step.
- The approval screen feels alarming or bureaucratic.
- The result looks like a chat transcript instead of a useful artifact.
- The UI exposes too many panels, cards, or controls at once.
- The user cannot tell what happens next.

## Trust Mechanisms

- Plan review before execution.
- Risk and control labels on every step.
- One current task in focus.
- Plain-language approval rationale.
- Explicit approval before external action.
- Pause and edit options before completion.
- Completed work summary at the end.
- No hidden chat thread required to understand the run.

## Design Standard

Supervised Run should feel like a calm document that progressively reveals intelligence.

The product should avoid dashboard density, chatbot tropes, and dark agent cockpit aesthetics. The standard is not "show everything the agent could do." The standard is "show exactly enough for the user to stay oriented, confident, and in control."
