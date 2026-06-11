import type { Metadata } from "next";
import { AppFooter } from "@/components/AppFooter";
import { RoutePills } from "@/components/RoutePills";

export const metadata: Metadata = {
  title: "Executable Design Infrastructure",
  description:
    "A founding design process for turning product judgment into governed automation, skills, hooks, and design-system defaults.",
};

const lifecycle = [
  {
    stage: "Decision",
    title: "Make the judgment explicit",
    body: "Capture the rule behind a product or design decision: where it applies, why it matters, examples, exceptions, and who can change it.",
  },
  {
    stage: "Skill",
    title: "Teach the repeatable work",
    body: "Turn stable judgment into a reusable skill for research, interaction design, copy review, prototyping, implementation, QA, or release judgment.",
  },
  {
    stage: "Hook",
    title: "Enforce known decisions at the point of work",
    body: "Run checks when work starts, changes, merges, or ships so the team does not have to manually remember every standard.",
  },
  {
    stage: "Design system default",
    title: "Move durable patterns into primitives",
    body: "When a pattern proves stable, make it a component, token, template, state model, or visual QA example rather than another one-off review note.",
  },
  {
    stage: "Audit",
    title: "Watch for misses, noise, and drift",
    body: "Review where rules are ignored, where hooks are noisy, where skills produce weak work, and where manual critique keeps catching the same issue.",
  },
  {
    stage: "Retire",
    title: "Remove rules that no longer earn their keep",
    body: "A governed system needs expiration dates. If a rule is stale, too broad, or no longer tied to user risk, it should be changed or removed.",
  },
];

const encodeFirst = [
  {
    name: "Approval gates",
    detail:
      "External, irreversible, expensive, or reputation-impacting actions must pause, explain the risk, and ask for explicit approval.",
  },
  {
    name: "Evidence requirements",
    detail:
      "Important claims need visible support: source references, tool output, user-provided context, confidence boundaries, or a clear unknown.",
  },
  {
    name: "Visual polish checks",
    detail:
      "Before a flow is considered ready, it should pass checks for hierarchy, spacing, responsive fit, overflow, focus, loading, empty, and recovery states.",
  },
  {
    name: "Accessibility",
    detail:
      "Semantic structure, keyboard paths, focus states, labels, contrast, and reduced-motion expectations should be part of the default review path.",
  },
];

const surfaces = [
  {
    surface: "AGENTS.md",
    role: "Persistent product and design rules that shape how agents work inside the repo.",
  },
  {
    surface: "Skills",
    role: "Repeatable workflows for agent UX review, accessibility audit, visual QA, copy critique, and prototype creation.",
  },
  {
    surface: "Hooks",
    role: "Automatic enforcement for known non-negotiables at creation, review, merge, and release moments.",
  },
  {
    surface: "PR templates and checks",
    role: "A lightweight review contract for approval gates, evidence, accessibility, visual QA, and documented exceptions.",
  },
  {
    surface: "Design system",
    role: "Executable product memory: primitives, states, tokens, interaction patterns, accessibility rules, and examples of what good looks like.",
  },
  {
    surface: "Browser screenshot checks",
    role: "Desktop and mobile visual verification for layout fit, text overflow, theme behavior, and interaction polish.",
  },
];

const governanceRules = [
  "Automate only decisions the team understands well enough to explain.",
  "Every hook needs an owner, an override path, and a review date.",
  "A skill should teach the judgment, not just output the artifact.",
  "The design system should capture proven decisions, not speculative components.",
  "Manual critique should focus on new judgment, not repeatedly catching known issues.",
  "When a hook creates noise, fix the rule instead of training the team to ignore it.",
  "When manual review finds the same issue twice, consider turning it into a skill, hook, or default.",
];

export default function ProcessPage() {
  return (
    <main className="min-h-screen bg-canvas text-ink">
      <div className="mx-auto flex min-h-screen w-full max-w-[820px] flex-col px-5 py-9 sm:px-8 sm:py-14">
        <RoutePills active="Process" />

        <article className="page-emerge py-14 sm:py-20">
          <p className="section-kicker reveal-item">Process</p>
          <h1 className="reveal-item mt-4 max-w-[760px] text-5xl font-semibold leading-[1.02] tracking-normal text-ink sm:text-6xl">
            Design decisions should become executable infrastructure.
          </h1>
          <p
            className="reveal-item mt-5 max-w-[700px] text-lg leading-8 text-muted"
            style={{ animationDelay: "120ms" }}
          >
            My process would not make a fast team wait for design approval on
            every detail. It would set the taste bar, make judgment explicit,
            and build the system that helps the team repeat good decisions
            through skills, hooks, design-system defaults, and governed
            automation.
          </p>

          <section
            className="input-emerge mt-10 border-y border-line py-8"
            aria-labelledby="role"
          >
            <p className="text-sm font-semibold text-accent" id="role">
              My role
            </p>
            <p className="mt-4 max-w-[720px] text-2xl font-medium leading-10 text-ink">
              I would not become the manual taste gate. I would build the system
              that catches known issues and frees review for new judgment.
            </p>
            <p className="mt-4 max-w-[700px] text-base leading-8 text-muted">
              At this pace, design culture cannot live only in critique notes or
              someone&apos;s memory. Once the team makes a good decision, the next
              question should be: where should this live so it helps everyone
              ship better next time?
            </p>
          </section>

          <section className="mt-14" aria-labelledby="lifecycle">
            <div className="grid gap-6 border-b border-line pb-5 sm:grid-cols-[160px_1fr]">
              <p className="section-kicker" id="lifecycle">
                Lifecycle
              </p>
              <p className="text-base leading-8 text-muted">
                The operating loop is: Decision -&gt; Skill -&gt; Hook -&gt;
                Design system default -&gt; Audit -&gt; Retire.
              </p>
            </div>
            <div className="divide-y divide-line">
              {lifecycle.map((item, index) => (
                <section
                  className="grid gap-4 py-6 sm:grid-cols-[160px_1fr]"
                  key={item.stage}
                >
                  <div>
                    <p className="text-[12px] font-semibold uppercase tracking-normal text-faint">
                      {String(index + 1).padStart(2, "0")} / {item.stage}
                    </p>
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold leading-8 tracking-normal text-ink">
                      {item.title}
                    </h2>
                    <p className="mt-2 text-base leading-8 text-muted">
                      {item.body}
                    </p>
                  </div>
                </section>
              ))}
            </div>
          </section>

          <section className="mt-14" aria-labelledby="encode">
            <div className="grid gap-6 border-b border-line pb-5 sm:grid-cols-[160px_1fr]">
              <p className="section-kicker" id="encode">
                Encode first
              </p>
              <p className="text-base leading-8 text-muted">
                I would start with the decisions that most directly affect user
                trust, product quality, and speed of review.
              </p>
            </div>
            <div className="divide-y divide-line">
              {encodeFirst.map((item) => (
                <section
                  className="grid gap-3 py-6 sm:grid-cols-[220px_1fr]"
                  key={item.name}
                >
                  <h2 className="text-xl font-semibold leading-8 tracking-normal text-ink">
                    {item.name}
                  </h2>
                  <p className="text-base leading-8 text-muted">
                    {item.detail}
                  </p>
                </section>
              ))}
            </div>
          </section>

          <section className="mt-14" aria-labelledby="surfaces">
            <div className="grid gap-6 border-b border-line pb-5 sm:grid-cols-[160px_1fr]">
              <p className="section-kicker" id="surfaces">
                Toolchain
              </p>
              <p className="text-base leading-8 text-muted">
                The process should be engineery enough to run where the work
                happens, not off to the side as a separate ceremony.
              </p>
            </div>
            <div className="divide-y divide-line">
              {surfaces.map((item) => (
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

          <section className="mt-14" aria-labelledby="rules">
            <div className="grid gap-6 border-b border-line pb-5 sm:grid-cols-[160px_1fr]">
              <p className="section-kicker" id="rules">
                Governance
              </p>
              <h2 className="text-2xl font-semibold leading-9 tracking-normal text-ink">
                Automation should preserve judgment, not replace it.
              </h2>
            </div>
            <ul className="divide-y divide-line">
              {governanceRules.map((rule) => (
                <li
                  className="grid gap-4 py-4 text-base leading-7 text-muted sm:grid-cols-[160px_1fr]"
                  key={rule}
                >
                  <span className="hidden text-[12px] font-semibold uppercase tracking-normal text-faint sm:block">
                    Rule
                  </span>
                  <span>{rule}</span>
                </li>
              ))}
            </ul>
          </section>
        </article>
        <AppFooter />
      </div>
    </main>
  );
}
