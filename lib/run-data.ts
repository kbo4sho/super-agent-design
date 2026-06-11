import type {
  AutonomyLevel,
  EmailDraft,
  FeedbackSource,
  PlanStep,
  SummaryItem,
} from "./types";

export const defaultGoal =
  "Find the strongest customer signals in the attached feedback, draft outreach to the top three customers, and prepare a short CEO summary.";

export const feedbackSource: FeedbackSource = {
  id: "feedback-q2",
  filename: "customer-feedback-q2.txt",
  noteCount: 42,
  accountCount: 6,
  updatedLabel: "Last updated 2 days ago",
  previewNotes: [
    {
      quote:
        "Weekly analytics exports still require manual cleanup before exec reviews.",
      customer: "Alex Morgan",
      company: "Acme Corp",
    },
    {
      quote:
        "The reporting workflow breaks when teams need to combine product usage and CRM data.",
      customer: "Priya Shah",
      company: "Northstar Health",
    },
    {
      quote:
        "We like the dashboard, but the team still exports data every Friday.",
      customer: "Marcus Lee",
      company: "Orbit Financial",
    },
  ],
};

export const autonomyOptions: Array<{
  value: AutonomyLevel;
  label: string;
  helper: string;
}> = [
  {
    value: "suggest",
    label: "Suggest only",
    helper: "The agent recommends actions but waits for you.",
  },
  {
    value: "supervised",
    label: "Ask before important actions",
    helper: "The agent handles safe steps and pauses for review.",
  },
  {
    value: "safe-auto",
    label: "Act when safe",
    helper: "The agent proceeds unless blocked by risk.",
  },
];

export const planSteps: PlanStep[] = [
  {
    id: "read-feedback",
    title: "Read 42 feedback notes",
    description: "Scan the attached feedback source and extract candidate signals.",
    risk: "safe",
    controlByAutonomy: {
      suggest: "Suggests sources to read before continuing",
      supervised: "Runs automatically",
      "safe-auto": "Runs automatically",
    },
  },
  {
    id: "group-signals",
    title: "Group repeated customer signals",
    description: "Cluster similar requests, complaints, and workflow patterns.",
    risk: "safe",
    controlByAutonomy: {
      suggest: "Suggests groups for your review",
      supervised: "Runs automatically",
      "safe-auto": "Runs automatically",
    },
  },
  {
    id: "rank-opportunities",
    title: "Rank customer opportunities",
    description: "Score opportunities by impact, urgency, confidence, and source quality.",
    risk: "review",
    controlByAutonomy: {
      suggest: "Suggests a ranking only",
      supervised: "You review the ranking before continuing",
      "safe-auto": "Proceeds after ranking unless confidence drops",
    },
  },
  {
    id: "draft-outreach",
    title: "Draft three outreach emails",
    description: "Prepare concise customer outreach based on the ranked signals.",
    risk: "review",
    controlByAutonomy: {
      suggest: "Suggests draft copy only",
      supervised: "You can edit before approval",
      "safe-auto": "Drafts emails and continues to approval",
    },
  },
  {
    id: "prepare-ceo-summary",
    title: "Prepare CEO summary",
    description:
      "Summarize the top signal, supporting evidence, and recommended next step.",
    risk: "review",
    controlByAutonomy: {
      suggest: "Suggests summary copy only",
      supervised: "You review the summary before finalizing",
      "safe-auto": "Prepares summary with evidence attached",
    },
  },
  {
    id: "send-emails",
    title: "Send emails",
    description: "Contact the selected customers outside the workspace.",
    risk: "approval",
    controlByAutonomy: {
      suggest: "Never sends without explicit approval",
      supervised: "Requires explicit approval",
      "safe-auto": "Requires explicit approval",
    },
  },
];

export const emailDraft: EmailDraft = {
  to: "Alex Morgan",
  role: "Head of Product at Acme Corp",
  subject: "Following up on your analytics feedback",
  body: `Hi Alex,

I noticed your team mentioned that analytics exports are creating manual work during weekly reporting.

We are exploring a cleaner workflow for that use case and I thought your feedback would be especially helpful.

Would you be open to a short conversation next week?`,
};

export const completedItems = [
  "Read customer-feedback-q2.txt.",
  "Identified 6 repeated customer signals.",
  "Ranked 3 high-fit customer opportunities.",
  "Drafted 3 outreach emails.",
  "Prepared CEO summary.",
  "Sent approved outreach.",
];

export const ceoSummary: SummaryItem[] = [
  {
    label: "Top signal",
    text: "Analytics workflow friction appeared across enterprise accounts.",
  },
  {
    label: "Why it matters",
    text: "Customers are describing manual reporting work that happens every week and is tied to active business processes.",
  },
  {
    label: "Recommended next step",
    text: "Validate the analytics workflow with three customer conversations before prioritizing a build.",
  },
];
