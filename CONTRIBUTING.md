# Contributing to Atlas

Thanks for contributing! Atlas is an open-source Indian career explorer built to help students discover courses, compare career outcomes, and find the right hardware for their field of study.

> **All data contributions must cite their sources.** Any PR that adds or modifies salary data, industry statistics, hiring trends, college tiers, or any factual claim must include references. Unsourced data will be rejected. See each section below for source requirements.

## What You Can Contribute

| Contribution | Difficulty | Time |
|---|---|---|
| Add a course to the taxonomy | Easy | 5 min |
| Write a course hardware profile | Medium | 30 min |
| Add a branch (engineering discipline) | Hard | 2-3 hrs |
| Write a dictionary term | Easy | 10 min |
| Add interview questions | Easy-Medium | 20 min |

---

## 1. Adding a Course to the Taxonomy

The taxonomy lives in `src/data/course-categories.ts`. It's a tree of categories → subcategories → items.

**File:** `src/data/course-categories.ts`

```typescript
interface CategoryItem {
  id: string;          // URL-safe kebab-case slug, e.g. "marine-engineering"
  name: string;        // Display name, e.g. "Marine Engineering"
  type: "branch" | "course" | "placeholder";
  description?: string;       // 10-15 words, what students study/do
  href?: string;              // Only for type="branch" or type="course"
}

interface SubCategory {
  name: string;        // e.g. "Core Engineering"
  items: CategoryItem[];
}

interface CategorySection {
  icon: string;        // Emoji, e.g. "⚙️"
  name: string;        // e.g. "Engineering & Technology"
  subcategories: SubCategory[];
}
```

### Item Types

| Type | Meaning | Has href? | What it links to |
|---|---|---|---|
| `branch` | Engineering discipline with full career data | Yes | `/{slug}` (e.g. `/mechanical-engineering`) |
| `course` | Non-engineering course with a hardware guide | Yes | `/tech-guide/course-requirements/{id}` |
| `placeholder` | Listed in taxonomy but no dedicated page yet | No | Hidden |

**Sources required for descriptions.** Course descriptions should reflect actual curriculum content. Reference university syllabus pages, AICTE model curricula, or UGC course descriptors.

### How to Add

1. Find the right category and subcategory in `course-categories.ts`.
2. Add a new `CategoryItem` object to the `items` array.
3. If the course has a hardware guide page, set `type: "course"` and include `href`.
4. If the course is an engineering branch with a career page, set `type: "branch"` and include `href`.
5. Otherwise, set `type: "placeholder"`.

**Example — adding Marine Engineering:**

```typescript
{
  name: "Core Engineering",
  items: [
    // ...existing items...
    { id: "marine-engineering", name: "Marine Engineering", type: "placeholder",
      description: "Ship design, marine propulsion, and offshore engineering." },
  ]
}
```

### Href Conventions

- **Branch pages** (engineering with salary/industry data): `/{slug}`
  - e.g. `"/mechanical-engineering"`, `"/computer-science-engineering"`
- **Course hardware guides**: `/tech-guide/course-requirements/{id}`
  - e.g. `"/tech-guide/course-requirements/artificial-intelligence-machine-learning"`

---

## 2. Adding a Branch (Engineering Discipline)

A branch is an engineering discipline with a full career page — salary data, hiring industries, job roles, college tiers, interview questions, and more.

**Sources required.** Every piece of factual data in a branch file must cite its source:
- Salary figures → link to AmbitionBox, Glassdoor, NIRF reports, or government surveys
- Industry growth rates → link to IBEF, DPIIT, or sector-specific reports
- Hiring trends → link to news articles, company reports, or placement records
- College tiers → link to NIRF rankings, institutional websites, or published placement data

Include sources as comments next to the relevant field (e.g. `// source: https://...`). A PR without sources will be rejected.

### Step 1: Create the data file

Create a new file in `src/data/branches/{slug}.ts` exporting:

- `const {camelCaseName}: BranchData` — the full career data object
- `export const branchMeta: { ... }` — lightweight metadata for listings

Use an existing file like `mechanical-engineering.ts` as a template. Fields:

| Field | Description |
|---|---|
| `id` | kebab-case slug, e.g. `"petroleum-engineering"` |
| `name` | Full display name |
| `shortName` | Abbreviation, e.g. `"PE"` |
| `tagline` | SEO-friendly one-liner |
| `description` | 2-3 sentence overview |
| `color` | Hex color for branding (Tailwind palette preferred) |
| `overview` | Introduction, duration, fees, difficulty, skills, tags |
| `salary` | Starting/mid/senior averages, breakdown table, top payers |
| `industries` | Hiring industries with growth %, market size, top companies |
| `jobRoles` | Job titles with descriptions, tools, tier-based placement chances |
| `topCompanies` | Major recruiters with location and sector |
| `collegeTiers` | Tier 1/2/3 examples, avg package, recruiters, placement rate |
| `interviewTopics` | Topics with question counts |
| `interviewQuestions` | Total count + 3-5 sample Q&A |
| `resources` | Books, learning platforms, certifications |
| `futureTrends` | Emerging trends with impact levels |
| `relatedBranches` | Cross-links to other branch pages |

### Step 2: Register in the data loader

1. **`src/data/branchDataLoader.ts`** — Add the import and register in `dataMap`:
```typescript
import { petroleumEngineering, branchMeta } from "./branches/petroleum-engineering";
// In dataMap:
"petroleum-engineering": { data: petroleumEngineering as unknown as BranchData, meta: branchMeta },
```

2. **`src/data/branches.ts`** — Add a `BranchMeta` entry for the branch registry (used by the explorer and search):
```typescript
{
  id: "petroleum-engineering",
  name: "Petroleum Engineering",
  slug: "petroleum-engineering",
  icon: "FlaskConical",     // Pick from lucide-react icons
  salaryRange: "₹5 - ₹30 LPA",
  hiringIndustries: "Oil & Gas, Energy, Petrochemicals",
  jobOpenings: "4,000+",
  description: "Oil exploration, drilling, refining, and energy resource management.",
  gradient: "from-amber-50 to-amber-100",
  color: "#D97706"
}
```

3. **`src/data/branches.ts`** — If using a new icon, import it from `lucide-react` and add to `getBranchIcon()`.

**Sources required.** Questions should reflect real placement patterns. Reference:
- Previous year placement papers (when available from institute sources)
- Commonly asked questions documented on student forums or placement prep sites
- Topics listed on official recruitment notification websites

### Step 3: Create interview questions (optional but recommended)

Create a file at `src/data/branches/{slug}-questions.ts`:

```typescript
import type { Question } from "./cs-questions"; // or use your own type

export const questions: Question[] = [
  { id: 1, question: "Explain the principle of...", topic: "Core Concepts", difficulty: "Easy" },
  // ...
];

export const questionTopics = [
  { topic: "Core Concepts", count: 5 },
  // ...
];
```

### Step 4: Add to the taxonomy

In `src/data/course-categories.ts`, set the item's type to `"branch"` and add the href:
```typescript
{ id: "petroleum-engineering", name: "Petroleum Engineering", type: "branch",
  description: "Oil exploration, drilling, refining, and energy resource management.",
  href: "/petroleum-engineering" }
```

---

## 3. Adding a Course Hardware Profile

A hardware profile tells students what laptop specs they need for a specific course.

**File:** `src/data/course-hardware/profiles.ts`

**Sources required.** Hardware recommendations must be backed by:
- Official software system requirements (AutoCAD, SolidWorks, PyTorch, etc.)
- Benchmark comparisons from trusted reviewers (Notebookcheck, AnandTech, etc.)
- University-recommended specs (from institute websites or program handbooks)

Add a `// source:` comment for each hardware requirement or recommendation.

### Interface

```typescript
interface CourseHardwareProfile {
  id: string;           // kebab-case slug, e.g. "architecture"
  name: string;         // Display name
  category: string;     // e.g. "Design", "Computer Science"
  description: string;  // 1-2 sentences about the field
  typicalWorkload: string;  // What students actually do day-to-day
  commonSoftware: string[]; // Tools they'll use (VS Code, Python, AutoCAD...)

  hardwareRequirements: {
    processor:  { text: string; detail: string };
    ram:        { text: string; detail: string };
    storage:    { text: string; detail: string };
    gpu:        { text: string; detail: string };
    battery:    { text: string; detail: string };
    display:    { text: string; detail: string };
    cooling:    { text: string; detail: string };
  };

  // Scores out of 10 — how much each spec matters
  gpuNeed: number;
  cpuNeed: number;
  batteryImportance: number;
  portabilityImportance: number;
  storageImportance: number;

  // Recommendation
  recommendedCategory: string;   // e.g. "AI-Ready Ultrabook / Workstation"
  recommendation: string;        // e.g. "Apple MacBook Pro 14\" M4 Pro with 24 GB"
  reason: string;                // 1-2 sentence why this is the best choice
  whyRecommendation: string;     // Detailed rationale

  // What to skip
  thingsToAvoid: string[];       // e.g. ["8 GB RAM", "No dedicated GPU"]
  notNeeded: string[];           // e.g. ["240Hz display", "RGB lighting"]

  // Context for buyers
  whatYouWillDo: string[];       // Activities this hardware supports
  softwareExplained: { name: string; why: string }[];  // Why each tool matters
  compareWith: { course: string; text: string }[];     // How needs differ from other courses
  futureRelevance: string;       // How long this setup stays useful
}
```

### How to Add

1. Open `src/data/course-hardware/profiles.ts`.
2. Add a new entry to the `profiles` record.
3. Research the actual software and hardware needs for that course.
4. Score each hardware need (1-10) based on how critical it is.
5. Write realistic comparisons with similar courses.

**Pro tip:** Read 3-4 existing profiles first (e.g. `"artificial-intelligence-machine-learning"`, `"architecture"`, `"mechanical-engineering"`) to match the tone and level of detail.

### Step 2: Add to taxonomy

In `src/data/course-categories.ts`, set `type: "course"` and add the href:
```typescript
{ id: "architecture", name: "Architecture", type: "course",
  description: "Building design, urban planning, and spatial design.",
  href: "/tech-guide/course-requirements/architecture" }
```

---

## 4. Adding a Dictionary Term

**File:** `src/data/dictionary/terms.ts`

**Sources required.** Definitions and examples should reference:
- Official exam body websites (AICTE, UGC, respective university portals)
- Government publications or academic resources
- Published articles from credible Indian education/placement news sources

### Interface
interface DictionaryEntry {
  slug: string;               // kebab-case, e.g. "cgpa"
  term: string;               // Display name, e.g. "CGPA"
  definition: string;         // Short definition, 1 sentence
  explanation: string;        // Detailed explanation, 2-3 paragraphs
  example: string;            // Concrete example of usage
  whyItMatters: string;       // Why students should care
  category: "academic" | "placement" | "career" | "industry" | "exam";
  relatedTerms: string[];     // Slugs of related terms
}
```

---

## 5. Code Conventions

- **No comments** unless absolutely necessary
- Use Tailwind CSS for all styling — no CSS modules or styled-components
- Use Lucide React for icons
- Use Framer Motion for animations (see `src/lib/animations.ts` for shared presets)
- All text content goes in data files (not hardcoded in components)
- Branch slugs / course IDs are kebab-case (e.g. `computer-science-engineering`)
- Descriptions are 10-15 words, concise and factual

## 6. Development

```bash
npm run dev          # Start dev server
npm run build        # Type-check + build
npm run lint         # Check code style
```

Always run `npm run build` before submitting a PR to ensure there are no type errors.

---

## Taxonomy: Categories & Subcategories

The complete course taxonomy is documented in `src/data/course-categories.ts`. These are the 9 top-level categories:

| Category | Emoji | Subcategories |
|---|---|---|
| Engineering & Technology | ⚙️ | Core Engineering, Computer & Tech, Advanced Engineering |
| Applied & Pure Sciences | 🔬 | Physical Sciences, Biological Sciences, Earth Sciences |
| Medical & Healthcare | ⚕️ | Clinical Medicine, Allied Health Sciences, Public Health & Research |
| Business, Commerce & Finance | 📈 | Management, Finance & Accounting, Economics |
| Humanities, Arts & Social Sciences | 🎨 | Social Sciences, Languages & Literature, Philosophy & Religion |
| Media, Communication & Design | 📣 | Media & Journalism, Visual Arts, Design |
| Law & Public Administration | ⚖️ | Legal Studies, Governance |
| Agriculture & Environment | 🌾 | Agricultural Sciences, Sustainability & Environment |
| Hospitality, Aviation & Services | 🏨 | Hospitality & Tourism, Aviation, Sports & Fitness |

Do not rename or restructure these categories. Add items to the existing subcategories. If a new subcategory is genuinely needed, open an issue first.

## Issues & Feature Requests

Open a [GitHub Issue](https://github.com/your-username/atlas-landing/issues) for:
- Bugs or broken links
- Suggested new courses or branches
- Incorrect salary/industry data
- Feature requests

---

*Atlas is built for Indian students. Every contribution makes career discovery easier for someone choosing their path after Class 12.*
