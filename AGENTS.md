# AGENTS.md

## Product

We are building a polished product prototype called **Supervised Run**.

It is a lightweight interaction model for delegating work to an AI agent while keeping the user oriented, calm, and in control.

The prototype should demonstrate founding-designer taste, AI product judgment, and frontend implementation quality.

## Core product idea

The user gives an AI agent a goal. The system turns it into a plan. The user reviews the plan. The agent runs through the steps. When an action has real-world consequences, the agent pauses and asks for approval.

The product flow is:

Goal -> Plan -> Run -> Approval -> Result

## Visual direction

The interface must feel like:

- Linear
- Notion
- Raycast
- Stripe
- Clean Apple system UI

It must not feel like:

- A SaaS analytics dashboard
- A crypto dashboard
- A dark AI cockpit
- A card grid
- A chatbot
- A control room
- A wall of panels

## Hard design constraints

- Light theme only.
- No sidebar.
- No dashboard layout.
- No dark theme.
- No neon gradients.
- No glowing buttons.
- No more than one primary CTA visible at a time.
- No more than one expanded section at a time.
- No dense card grids.
- No fake charts.
- No avatars.
- No huge icon set.
- No decorative AI sparkles.
- No marketing hero section.
- No generic "AI assistant" chat UI.

## Layout principles

Use a single centered column with generous whitespace.

Preferred max width: 720px to 860px.

The UI should feel like a calm document that progressively reveals intelligence.

At each state, the user should understand:

1. What the agent is doing.
2. Why it is doing it.
3. What happens next.
4. What requires approval.

## Interaction principles

- Progressive disclosure over dashboards.
- Human approval for consequential actions.
- Plain language over AI jargon.
- One current task in focus.
- Recovery states are part of the flow.
- The agent should feel useful but not over-autonomous.

## Build constraints

- Static prototype only.
- No backend.
- No real AI API calls.
- No auth.
- No database.
- Use mock data.
- Keep code readable and componentized.
- Prioritize polish, spacing, typography, and interaction quality over feature count.
- Use accessible semantic HTML where possible.
- Use TypeScript types for the agent run state.

## Done means

The prototype should support a complete click-through flow:

1. User enters or sees a prefilled goal.
2. User chooses an autonomy level.
3. User clicks "Create plan."
4. User reviews a short plan.
5. User starts the run.
6. The run progresses through steps.
7. The agent pauses at an approval gate.
8. User can view why approval is required.
9. User approves the action.
10. User sees a simple final result.

The final result should look polished enough to share as a live product artifact.
