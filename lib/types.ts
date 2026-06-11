export type AutonomyLevel = "suggest" | "supervised" | "safe-auto";

export type RunState = "compose" | "plan" | "running" | "result";

export type RiskLevel = "safe" | "review" | "approval";

export type PlanStep = {
  id: string;
  title: string;
  description: string;
  risk: RiskLevel;
  controlByAutonomy: Record<AutonomyLevel, string>;
};

export type EmailDraft = {
  to: string;
  role: string;
  subject: string;
  body: string;
};

export type SummaryItem = {
  label: string;
  text: string;
};

export type FeedbackNote = {
  quote: string;
  customer: string;
  company: string;
};

export type FeedbackSource = {
  id: string;
  filename: string;
  noteCount: number;
  accountCount: number;
  updatedLabel: string;
  previewNotes: FeedbackNote[];
};
