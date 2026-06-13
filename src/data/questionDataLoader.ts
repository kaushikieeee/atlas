import type { Question } from "./branches/mechanical-questions";

interface QuestionTopic {
  name: string;
  slug: string;
  count: number;
  priority: string;
}

interface QuestionData {
  questions: Question[];
  questionTopics: QuestionTopic[];
}

const questionModules: Record<string, () => Promise<QuestionData>> = {
  "mechanical-engineering": () => import("./branches/mechanical-questions"),
  "electrical-engineering": () => import("./branches/electrical-questions"),
  "electronics-and-communication-engineering": () => import("./branches/ece-questions"),
  "computer-science-engineering": () => import("./branches/cs-questions"),
  "civil-engineering": () => import("./branches/civil-questions"),
  "chemical-engineering": () => import("./branches/chem-questions"),
  "aerospace-engineering": () => import("./branches/aerospace-questions"),
  "biotechnology-engineering": () => import("./branches/biotech-questions"),
  "automobile-engineering": () => import("./branches/auto-questions"),
  "instrumentation-engineering": () => import("./branches/inst-questions"),
  "data-science": () => import("./branches/data-science-questions"),
};

export async function loadQuestions(slug: string): Promise<QuestionData | null> {
  const loader = questionModules[slug];
  if (!loader) return null;
  return loader() as Promise<QuestionData>;
}

export function hasQuestions(slug: string): boolean {
  return slug in questionModules;
}
