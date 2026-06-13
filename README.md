# Atlas — Indian Career Explorer

Atlas is an open-source career guidance platform for Indian students. It helps students explore engineering branches, non-engineering courses, hardware requirements, and career outcomes — all in one place.

## Features

- **Branch Explorer**: 10+ engineering branches with salary data, hiring industries, job roles, college tier analysis, and learning resources
- **Course Catalog**: 150+ courses across 9 categories — Engineering, Medicine, Commerce, Law, Design, Sciences, Agriculture, Hospitality, and more
- **Course Taxonomy**: Category → subcategory → course flow to discover any undergraduate pathway
- **Tech Guide**: Hardware recommendations for every course — what laptop to buy based on your field of study
- **Laptop Advisor**: Interactive quiz that recommends the perfect laptop
- **Dictionary**: 30+ Indian placement and academic terms explained
- **Interview Questions**: Branch-specific question banks for placement prep
- **Dark Mode**: Auto-dark between 6 PM – 6 AM

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19 + TypeScript 6 |
| Build | Vite 8 |
| Styling | Tailwind CSS 4 |
| Animation | Framer Motion 12 |
| Routing | React Router DOM 7 |
| Icons | Lucide React |
| Booking | Cal.com |
| Deployment | Vercel |

## Getting Started

```bash
git clone https://github.com/your-username/atlas-landing.git
cd atlas-landing
npm install
npm run dev
```

### Commands

| Command | Description |
|---|---|
| `npm run dev` | Start dev server |
| `npm run build` | Type-check + production build |
| `npm run lint` | Run ESLint |
| `npm run preview` | Preview production build |

## Project Structure

```
src/
├── App.tsx                       # Router + layout
├── components/                   # Reusable UI components
│   ├── BranchExplorer.tsx        # Category → subcategory → course flow
│   ├── BranchCard.tsx            # Branch card with salary/industry data
│   ├── Navigation.tsx            # Top nav bar
│   ├── Search.tsx                # Global search with abbreviation support
│   └── ...
├── data/
│   ├── branches/                 # Individual branch data files + question banks
│   │   ├── mechanical-engineering.ts
│   │   ├── computer-science-engineering.ts
│   │   └── ...
│   ├── course-hardware/
│   │   └── profiles.ts           # Hardware guide for 10+ courses
│   ├── tech-guide/               # Laptop/phone/tablet recommendations
│   ├── course-categories.ts      # Full course taxonomy (150+ courses)
│   ├── branchDataLoader.ts       # Branch data registry
│   ├── branches.ts               # Branch metadata + icon mapping
│   └── dictionary/               # Career/academic term definitions
├── pages/                        # Route-level page components
│   ├── BranchPage.tsx            # Dynamic branch detail page
│   ├── CourseRequirements.tsx    # Course hardware catalog
│   ├── CourseHardwareGuide.tsx   # Individual course hardware profile
│   ├── TechGuide.tsx             # Tech guide home
│   └── ...
└── lib/
    └── animations.ts             # Framer Motion helpers
```

## Routes

| Path | Page |
|---|---|
| `/` | Home |
| `/branches` | Category explorer |
| `/:slug` | Branch detail (e.g. `/mechanical-engineering`) |
| `/:slug/interview-questions` | Branch question bank |
| `/tech-guide` | Tech guide home |
| `/tech-guide/laptop-advisor` | Laptop advisor quiz |
| `/tech-guide/course-requirements` | Course hardware catalog |
| `/tech-guide/course-requirements/:course` | Course hardware guide |
| `/dictionary` | Career/academic dictionary |
| `/about` | About page |
| `/book` | Book a 1:1 call |

## Adding Content

See [CONTRIBUTING.md](CONTRIBUTING.md) for detailed guides on:
- Adding a new branch (engineering discipline with full career data)
- Adding a new course hardware profile (laptop guide for a course)
- Adding items to the course taxonomy
- Adding dictionary terms

## License

MIT
