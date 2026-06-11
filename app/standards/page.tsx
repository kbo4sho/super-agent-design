import type { Metadata } from "next";
import { AppFooter } from "@/components/AppFooter";
import { RoutePills } from "@/components/RoutePills";

export const metadata: Metadata = {
  title: "Design Operating Standards",
  description:
    "Operating standards for product quality, governed autonomy, interface craft, accessibility, and engineering fit.",
};

const standards = [
  {
    name: "Start with the user job",
    detail:
      "Every flow should make the intended user outcome, context, constraint, and success signal clear before the interface gets clever.",
  },
  {
    name: "Preserve orientation",
    detail:
      "The user should always know where they are, what is happening, why it matters, what changed, and what happens next.",
  },
  {
    name: "Govern consequential action",
    detail:
      "Autonomy is scoped by risk. External, irreversible, expensive, or reputation-impacting actions need preview, explanation, and explicit approval.",
  },
  {
    name: "Show evidence for important claims",
    detail:
      "Recommendations, summaries, rankings, and automated actions should connect to sources, tool output, assumptions, or visible uncertainty.",
  },
  {
    name: "Design recovery as a primary path",
    detail:
      "Pause, edit, reject, retry, undo, take over, and recover states are not edge cases. They are how users stay in control.",
  },
  {
    name: "Ship calm interface craft",
    detail:
      "The product should feel focused, legible, responsive, and restrained: strong hierarchy, generous spacing, plain language, and no performative complexity.",
  },
  {
    name: "Make accessibility part of the default",
    detail:
      "Semantic structure, keyboard paths, labels, contrast, focus states, reduced motion, and readable layouts should be expected before release.",
  },
  {
    name: "Prefer system fit over one-off polish",
    detail:
      "When a pattern repeats, it should become a design-system primitive, template, skill, hook, or documented decision.",
  },
];

const qualityAreas = [
  {
    area: "Product",
    bar: "The work solves a real user job and names the tradeoff it is making.",
  },
  {
    area: "Agent behavior",
    bar: "The system exposes plan, scope, evidence, risk, approval, and recovery when autonomy is involved.",
  },
  {
    area: "Interface",
    bar: "The screen is calm, linear, legible, responsive, accessible, and visually resolved in light and dark modes.",
  },
  {
    area: "Copy",
    bar: "Language is plain, specific, and useful. It avoids vague AI language and explains risk without drama.",
  },
  {
    area: "Engineering",
    bar: "States are typed, edge cases are represented, patterns are reusable, and implementation details preserve design intent.",
  },
  {
    area: "System",
    bar: "The decision either uses the existing system or improves it for the next team member.",
  },
];

const reviewQuestions = [
  "Does this solve an explicit user job?",
  "Can the user tell what is happening and what happens next?",
  "Are consequential actions previewed, explained, and approved?",
  "Are important claims supported by evidence or clear uncertainty?",
  "Can the user pause, edit, reject, recover, or take over?",
  "Does the work hold up across mobile, desktop, light mode, dark mode, keyboard use, and basic accessibility expectations?",
  "Does this reuse or improve the design system instead of creating a one-off pattern?",
  "Should any decision from this work become a skill, hook, template, or documented standard?",
];

const enforcementSurfaces = [
  {
    surface: "Design system",
    role: "Reusable primitives, tokens, states, examples, accessibility rules, and interaction patterns.",
  },
  {
    surface: "Skills",
    role: "Repeatable workflows for design critique, agent UX review, accessibility audit, copy review, and visual polish.",
  },
  {
    surface: "Hooks",
    role: "Automatic checks for known non-negotiables before work ships.",
  },
  {
    surface: "PR checks",
    role: "A lightweight release contract for evidence, approval, accessibility, responsive fit, and documented exceptions.",
  },
  {
    surface: "Decision records",
    role: "Short explanations of why a standard exists, where it applies, and when it should be revisited.",
  },
];

export default function StandardsPage() {
  return (
    <main className="min-h-screen bg-canvas text-ink">
      <div className="mx-auto flex min-h-screen w-full max-w-[820px] flex-col px-5 py-9 sm:px-8 sm:py-14">
        <RoutePills active="Standards" />

        <article className="page-emerge py-14 sm:py-20">
          <p className="section-kicker reveal-item">Standards</p>
          <h1 className="reveal-item mt-4 max-w-[760px] text-5xl font-semibold leading-[1.02] tracking-normal text-ink sm:text-6xl">
            Build speed into the system, calm into the experience.
          </h1>
          <p
            className="reveal-item mt-5 max-w-[700px] text-lg leading-8 text-muted"
            style={{ animationDelay: "120ms" }}
          >
            The best product work makes complex systems feel understandable,
            bounded, and worth trusting. A user should be able to see what is
            happening, decide what should happen next, and recover when the
            system needs correction.
          </p>

          <section
            className="input-emerge mt-10 border-y border-line py-8"
            aria-labelledby="statement"
          >
            <p className="text-sm font-semibold text-accent" id="statement">
              Standard statement
            </p>
            <p className="mt-4 max-w-[720px] text-2xl font-medium leading-10 text-ink">
              Great product work gives people more capability without taking
              away their judgment.
            </p>
            <p className="mt-4 max-w-[700px] text-base leading-8 text-muted">
              That requires clear outcomes, visible system behavior, governed
              automation, evidence for important claims, accessible interaction,
              and reusable patterns that help quality scale beyond a single
              review.
            </p>
          </section>

          <section className="mt-14" aria-labelledby="operating">
            <div className="grid gap-6 border-b border-line pb-5 sm:grid-cols-[160px_1fr]">
              <p className="section-kicker" id="operating">
                Operating rules
              </p>
              <p className="text-base leading-8 text-muted">
                These are the standards I would use in critique, product review,
                implementation review, and release judgment.
              </p>
            </div>
            <div className="divide-y divide-line">
              {standards.map((standard) => (
                <section
                  className="grid gap-3 py-6 sm:grid-cols-[220px_1fr]"
                  key={standard.name}
                >
                  <h2 className="text-xl font-semibold leading-8 tracking-normal text-ink">
                    {standard.name}
                  </h2>
                  <p className="text-base leading-8 text-muted">
                    {standard.detail}
                  </p>
                </section>
              ))}
            </div>
          </section>

          <section className="mt-14" aria-labelledby="bar">
            <div className="grid gap-6 border-b border-line pb-5 sm:grid-cols-[160px_1fr]">
              <p className="section-kicker" id="bar">
                Quality bar
              </p>
              <p className="text-base leading-8 text-muted">
                The bar should be clear enough for designers, engineers, and
                agents to evaluate work the same way.
              </p>
            </div>
            <div className="divide-y divide-line">
              {qualityAreas.map((item) => (
                <section
                  className="grid gap-3 py-5 sm:grid-cols-[160px_1fr]"
                  key={item.area}
                >
                  <p className="text-sm font-semibold text-accent">
                    {item.area}
                  </p>
                  <p className="text-base leading-7 text-muted">{item.bar}</p>
                </section>
              ))}
            </div>
          </section>

          <section className="mt-14" aria-labelledby="review">
            <div className="grid gap-6 border-b border-line pb-5 sm:grid-cols-[160px_1fr]">
              <p className="section-kicker" id="review">
                Review questions
              </p>
              <p className="text-base leading-8 text-muted">
                A lightweight rubric for deciding whether work is ready to ship.
              </p>
            </div>
            <ol className="divide-y divide-line">
              {reviewQuestions.map((question, index) => (
                <li
                  className="grid gap-4 py-4 text-base leading-7 text-muted sm:grid-cols-[160px_1fr]"
                  key={question}
                >
                  <span className="text-[12px] font-semibold uppercase tracking-normal text-faint">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>{question}</span>
                </li>
              ))}
            </ol>
          </section>

          <section className="mt-14" aria-labelledby="enforcement">
            <div className="grid gap-6 border-b border-line pb-5 sm:grid-cols-[160px_1fr]">
              <p className="section-kicker" id="enforcement">
                Enforcement
              </p>
              <p className="text-base leading-8 text-muted">
                Standards should not depend on memory. They should become part
                of the way work is created, reviewed, and shipped.
              </p>
            </div>
            <div className="divide-y divide-line">
              {enforcementSurfaces.map((item) => (
                <section
                  className="grid gap-3 py-5 sm:grid-cols-[220px_1fr]"
                  key={item.surface}
                >
                  <h2 className="text-base font-semibold leading-7 tracking-normal text-ink">
                    {item.surface}
                  </h2>
                  <p className="text-base leading-7 text-muted">{item.role}</p>
                </section>
              ))}
            </div>
          </section>
        </article>
        <AppFooter />
      </div>
    </main>
  );
}
