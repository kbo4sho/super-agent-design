# Human-Agent Collaboration Framework

## Internal Memo

**Audience:** Founders and engineers  
**Purpose:** Define the product standard for how humans should collaborate with autonomous AI agents  
**Position:** Autonomy is earned

The best super-agent products will not feel like chatbots with tool access. They will feel like collaboration systems: capable operators that interpret goals, create plans, use tools, adapt to new information, and complete work while leaving the human with meaningful control.

Most agent experiences fail because they hide the wrong things. They hide planning, assumptions, tool use, memory, uncertainty, and recovery. The user sees activity but not intent. They receive summaries but not enough evidence. They can start the agent, but they cannot easily shape its behavior while it is working.

Our standard should be different: agents should make plans visible, actions inspectable, memory editable, autonomy adjustable, and failures recoverable. The goal is not maximum automation. The goal is calibrated agency: the right amount of machine autonomy for the task, risk, user, and moment.

## Core Principles

**Autonomy is earned, not granted.** A new agent should not receive broad freedom by default. Autonomy should increase only after the agent demonstrates reliability in a specific workflow. A user may trust the agent to summarize support tickets but not email customers. Trust should be scoped by domain, action type, reversibility, and risk.

**Show intent before action.** Before consequential work begins, the agent should show what it believes the goal is, how it plans to pursue it, what assumptions it is making, and where it will stop for approval.

**Separate planning, doing, and reporting.** These are different product states. During planning, users need strategy, sequence, dependencies, and assumptions. During execution, they need progress, blockers, tool activity, and intervention controls. During reporting, they need outcomes, evidence, unresolved risks, and next actions.

**Make uncertainty explicit.** Agents should not perform confidence through polished language. The product should expose unknown inputs, weak evidence, missing permissions, risky assumptions, and low-confidence recommendations.

**Preserve human agency at decision points.** The agent can prepare, compare, draft, simulate, and recommend. The human should remain present for decisions involving strategy, customer impact, ethics, taste, or external consequences.

**Treat memory as a shared workspace.** Memory should be inspectable, editable, scoped, and explainable. The user should know what the agent believes and when that memory influenced a recommendation.

**Design for interruption and recovery.** The agent will sometimes be wrong. The product should make it easy to pause, redirect, undo, revise, and teach.

## The Collaboration Loop

Human-agent collaboration should follow a repeatable loop:

1. **Define:** The human sets the goal, constraints, success criteria, and risk tolerance.
2. **Plan:** The agent proposes steps, assumptions, dependencies, risks, and approval gates.
3. **Approve or adjust:** The human approves, edits, blocks, reorders, or delegates.
4. **Act:** The agent executes within the agreed scope.
5. **Report:** The agent explains what happened, what changed, what evidence it used, and what remains unresolved.
6. **Intervene:** The human pauses, redirects, takes over, asks for alternatives, or rolls back.
7. **Learn:** The agent turns approved corrections into preferences, project rules, or temporary context.

Every workflow should make clear where the user is in this loop and what control is available at that moment.

## Trust And Transparency Patterns

Trust is created by making behavior legible.

**Plan preview:** For non-trivial work, show the plan before execution: objective, steps, dependencies, expected outputs, risks, and approval points.

**Assumption list:** Separate facts from assumptions. Assumptions should be visible and editable.

**Confidence signals:** Tie confidence to evidence quality and action risk. Low-confidence or high-risk actions should trigger approval.

**Evidence trails:** Important claims should connect to sources, tool outputs, prior decisions, or memory.

**Action logs:** Record what the agent did, when it did it, which tool it used, and what result came back.

**"Why this?" explanations:** Users should be able to inspect why the agent recommended a step, chose a tool, skipped an option, or changed the plan.

**Preview and recovery:** High-stakes actions should be previewable. Reversible actions should have obvious recovery paths.

## Intervention Patterns

Agent products need controls for active collaboration, not just setup and final review.

- **Pause:** Stop execution without losing context.
- **Edit:** Modify a plan step and have the agent adapt downstream work.
- **Reorder:** Change priorities without restarting the mission.
- **Block:** Mark actions, tools, audiences, or systems as off-limits.
- **Ask for alternatives:** Compare different paths before committing.
- **Take over:** Let the human complete a step manually and return control afterward.
- **Roll back:** Undo changes where possible or show the manual recovery path.
- **Teach:** Save a correction as a durable preference, project rule, or one-time adjustment.

Interruption is not an edge case. It is part of collaboration.

## Planning And Memory Visibility

The plan is the center of the agent experience. If the plan is hidden, the product is asking the user to trust an invisible process.

A good plan view should show objective, status, ordered steps, dependencies, required inputs, expected outputs, risks, approval gates, tool permissions, and changes since the original plan. The UI should distinguish proposed, active, blocked, completed, failed, and changed work.

When the agent changes the plan, it should explain the trigger: new evidence, missing permission, failed tool call, user intervention, dependency change, or changed constraint.

Memory should be visible in clear categories:

- **User preferences:** How the user likes work done.
- **Project facts:** Durable context about the product, team, customers, or domain.
- **Organization rules:** Policies, permissions, brand standards, and operating norms.
- **Past decisions:** Decisions that should shape future recommendations.
- **Temporary context:** Information useful now but not worth storing permanently.

Sensitive, strategic, or identity-shaping memories should require confirmation before storage. Memory should never become a hidden authority.

## Escalation Of Autonomy

Autonomy should be expressed in levels that map to product behavior:

- **Level 0: Suggest only.** The agent recommends actions but does not draft or execute.
- **Level 1: Draft and wait.** The agent creates drafts, plans, summaries, or proposed changes, then waits.
- **Level 2: Execute reversible actions.** The agent can perform low-risk work that is easy to undo.
- **Level 3: Execute bounded workflows.** The agent completes multi-step workflows inside a defined scope with approval gates.
- **Level 4: Proactively manage a domain.** The agent monitors, prioritizes, and acts over time with periodic review.

Autonomy should increase by workflow, not globally. A user may grant Level 3 autonomy for internal research synthesis and Level 1 autonomy for customer communications.

## The Standard

A strong agent product should make the user feel more capable, not less informed. It should reduce busywork without removing judgment, accelerate execution without hiding responsibility, and learn from the user without quietly rewriting the user's future.

The design standard is calibrated agency:

- The goal is clear.
- The plan is visible.
- The assumptions are editable.
- The actions are inspectable.
- The memory is governable.
- The autonomy is scoped.
- The user can intervene.
- The system can recover.

When these conditions are true, autonomy becomes a product advantage instead of a trust liability.
