import { mechanicalEngineering, branchMeta } from "./branches/mechanical-engineering";
import { electricalEngineering } from "./branches/electrical-engineering";
import { electronicsCommunicationEngineering } from "./branches/electronics-communication-engineering";
import { computerScienceEngineering } from "./branches/computer-science-engineering";
import { civilEngineering } from "./branches/civil-engineering";
import { chemicalEngineering } from "./branches/chemical-engineering";
import { aerospaceEngineering } from "./branches/aerospace-engineering";
import { biotechnologyEngineering } from "./branches/biotechnology-engineering";
import { automobileEngineering } from "./branches/automobile-engineering";
import { instrumentationEngineering } from "./branches/instrumentation-engineering";

interface Industry {
  name: string;
  abbreviation: string;
  description: string;
  growth: string;
  market: string;
  detail: string;
  topCompanies: string[];
}

interface TierInfo {
  tier: number;
  chance: string;
  salary: string;
}

interface JobRole {
  title: string;
  description: string;
  tools: string[];
  tiers: TierInfo[];
}

interface Company {
  name: string;
  abbreviation: string;
  location: string;
  sector: string;
}

interface CollegeTier {
  tier: string;
  examples: string[];
  averagePackage: string;
  topRecruiters: string[];
  placementRate: string;
  notes: string;
}

interface InterviewTopic {
  topic: string;
  count: number;
}

interface SampleQuestion {
  question: string;
  answer: string;
  topic: string;
  difficulty: string;
}

interface InterviewQuestions {
  total: number;
  samples: SampleQuestion[];
}

interface BranchData {
  id: string;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  color: string;
  overview: {
    introduction: string;
    duration: string;
    avgFees: string;
    difficulty: string;
    skillsRequired: string[];
    tags: string[];
  };
  salary: {
    overview: string;
    averageStarting: string;
    averageMid: string;
    averageSenior: string;
    breakdown: { level: string; range: string; median: string; top10: string; note: string }[];
    topPayers: { company: string; range: string; sector: string }[];
  };
  industries: Industry[];
  jobRoles: JobRole[];
  topCompanies: {
    overview: string;
    companies: Company[];
  };
  collegeTiers: {
    overview: string;
    tiers: CollegeTier[];
  };
  interviewTopics: InterviewTopic[];
  interviewQuestions: InterviewQuestions;
  resources: {
    books: { name: string; author: string }[];
    platforms: { name: string; description: string }[];
    certifications: string[];
  };
  futureTrends: { trend: string; impact: string; description: string }[];
  relatedBranches: { id: string; name: string }[];
}

const dataMap: Record<string, { data: BranchData; meta: typeof branchMeta }> = {
  "mechanical-engineering": { data: mechanicalEngineering as unknown as BranchData, meta: branchMeta },
  "electrical-engineering": { data: electricalEngineering as unknown as BranchData, meta: branchMeta },
  "electronics-and-communication-engineering": { data: electronicsCommunicationEngineering as unknown as BranchData, meta: branchMeta },
  "computer-science-engineering": { data: computerScienceEngineering as unknown as BranchData, meta: branchMeta },
  "civil-engineering": { data: civilEngineering as unknown as BranchData, meta: branchMeta },
  "chemical-engineering": { data: chemicalEngineering as unknown as BranchData, meta: branchMeta },
  "aerospace-engineering": { data: aerospaceEngineering as unknown as BranchData, meta: branchMeta },
  "biotechnology-engineering": { data: biotechnologyEngineering as unknown as BranchData, meta: branchMeta },
  "automobile-engineering": { data: automobileEngineering as unknown as BranchData, meta: branchMeta },
  "instrumentation-engineering": { data: instrumentationEngineering as unknown as BranchData, meta: branchMeta },
};

export function loadBranchData(slug: string): { data: BranchData; meta: typeof branchMeta } | null {
  return dataMap[slug] || null;
}

export type { BranchData, Industry, JobRole, Company, CollegeTier, InterviewTopic, SampleQuestion, TierInfo };
