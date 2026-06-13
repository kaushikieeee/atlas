import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Search, ArrowLeft, ArrowUpRight, BookOpen, Laptop, GraduationCap, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import BranchCard from "./BranchCard";
import { branches } from "../data/branches";
import { categorySections, type CategoryItem } from "../data/course-categories";
import { ease } from "../lib/animations";

const abbreviationSlug: Record<string, string> = {
  ece: "electronics-and-communication-engineering",
  eee: "electrical-engineering",
  cse: "computer-science-engineering",
  cs: "computer-science-engineering",
  mech: "mechanical-engineering",
  civil: "civil-engineering",
  aero: "aerospace-engineering",
  auto: "automobile-engineering",
  biotech: "biotechnology-engineering",
  bt: "biotechnology-engineering",
  chem: "chemical-engineering",
  inst: "instrumentation-engineering",
  aiml: "artificial-intelligence-machine-learning",
  ml: "artificial-intelligence-machine-learning",
  ai: "artificial-intelligence-machine-learning",
  ds: "data-science",
  mbbs: "medicine",
  bba: "business-administration",
  mba: "business-administration",
  bcom: "commerce",
  "b.com": "commerce",
  arch: "architecture",
  vfx: "visual-communication",
  viscom: "visual-communication",
};

function ItemCard({ item, index }: { item: CategoryItem; index: number }) {
  if (item.type === "placeholder") {
    return (
      <motion.div
        initial={{ y: 6 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.25, delay: index * 0.03, ease }}
        className="bg-card border border-border/60 rounded-2xl p-6 opacity-60"
      >
        <div className="flex items-start justify-between mb-4">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-surface">
            <GraduationCap size="20" className="text-muted" />
          </div>
        </div>
        <h3 className="text-base font-semibold text-fg mb-1">{item.name}</h3>
        <p className="text-sm text-muted leading-relaxed line-clamp-2 mb-3">{item.description}</p>
        <span className="text-[10px] font-medium text-muted bg-surface border border-border px-2 py-0.5 rounded">Coming soon</span>
      </motion.div>
    );
  }

  if (item.type === "course" && !item.href) {
    return (
      <motion.div
        initial={{ y: 6 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.25, delay: index * 0.03, ease }}
        className="bg-card border border-border/60 rounded-2xl p-6"
      >
        <div className="flex items-start justify-between mb-4">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-accent/10">
            <BookOpen size="20" className="text-accent" />
          </div>
        </div>
        <h3 className="text-base font-semibold text-fg mb-1">{item.name}</h3>
        <p className="text-sm text-muted leading-relaxed line-clamp-2">{item.description}</p>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ y: 6 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.25, delay: index * 0.03, ease }}
      whileHover={{ y: -3, transition: { duration: 0.2, ease } }}
    >
      <Link
        to={item.href!}
        className="group block bg-card border border-border rounded-2xl p-6 hover:shadow-lg hover:border-accent/20 transition-all duration-300 h-full"
      >
        <div className="flex items-start justify-between mb-4">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-accent/10 transition-all duration-300 group-hover:scale-110">
            <BookOpen size="20" className="text-accent" />
          </div>
          <ArrowUpRight
            size="16"
            className="text-subtle opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-y-1 group-hover:translate-y-0"
          />
        </div>
        <h3 className="text-base font-semibold text-fg mb-2 group-hover:text-accent transition-colors">{item.name}</h3>
        <p className="text-sm text-muted leading-relaxed line-clamp-2">{item.description}</p>
        <div className="mt-4 pt-3 border-t border-border/50 flex items-center gap-1.5 text-xs text-muted">
          <Laptop size="13" className="text-subtle" />
          <span>View details</span>
        </div>
      </Link>
    </motion.div>
  );
}

function SearchResults({
  query,
  onClear,
}: {
  query: string;
  onClear: () => void;
}) {
  const q = query.toLowerCase().trim();
  const abbrSlug = abbreviationSlug[q];

  const results = useMemo(() => {
    const items: (CategoryItem & { section: string })[] = [];
    categorySections.forEach((section) => {
      section.subcategories.forEach((sub) => {
        sub.items.forEach((item) => {
          const match = abbrSlug
            ? item.id === abbrSlug || (item.href && item.href.includes(abbrSlug))
            : item.name.toLowerCase().includes(q) || (item.description && item.description.toLowerCase().includes(q));
          if (match) items.push({ ...item, section: section.name });
        });
      });
    });
    return items;
  }, [q, abbrSlug]);

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <p className="text-sm text-muted">
          {results.length} result{results.length !== 1 && "s"} for &quot;{query}&quot;
        </p>
        <button onClick={onClear} className="text-xs text-accent hover:underline">Clear</button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5">
        {results.map((item, i) => {
          if (item.type === "branch" || item.type === "course") {
            const branch = branches.find((b) => b.slug === item.id);
            if (branch) return <BranchCard key={item.id} branch={branch} index={i} />;
          }
          return <ItemCard key={item.id} item={item} index={i} />;
        })}
      </div>
    </div>
  );
}

function CategoryGrid({ onSelect }: { onSelect: (name: string) => void }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {categorySections.map((section, i) => (
        <motion.button
          key={section.name}
          initial={{ y: 8 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.3, delay: i * 0.04, ease }}
          onClick={() => onSelect(section.name)}
          className="group text-left bg-card border border-border rounded-2xl p-6 hover:shadow-lg hover:border-accent/20 transition-all duration-300"
        >
          <div className="flex items-center justify-between mb-3">
            <span className="text-2xl">{section.icon}</span>
            <ChevronRight size="16" className="text-subtle group-hover:text-accent transition-colors" />
          </div>
          <h3 className="text-lg font-semibold text-fg mb-1 group-hover:text-accent transition-colors">{section.name}</h3>
          <p className="text-xs text-muted">
            {section.subcategories.reduce((s, sub) => s + sub.items.length, 0)} courses
          </p>
        </motion.button>
      ))}
    </div>
  );
}

function SubcategoryGrid({
  section,
  onSelect,
  onBack,
}: {
  section: (typeof categorySections)[number];
  onSelect: (subName: string) => void;
  onBack: () => void;
}) {
  return (
    <div>
      <button
        onClick={onBack}
        className="inline-flex items-center gap-1.5 text-xs text-muted hover:text-fg mb-6 transition-colors"
      >
        <ArrowLeft size="13" /> All categories
      </button>

      <div className="flex items-center gap-2 mb-8">
        <span className="text-2xl">{section.icon}</span>
        <h2 className="text-2xl md:text-3xl font-serif text-fg">{section.name}</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {section.subcategories.map((sub, i) => (
          <motion.button
            key={sub.name}
            initial={{ y: 8 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.3, delay: i * 0.04, ease }}
            onClick={() => onSelect(sub.name)}
            className="group text-left bg-card border border-border rounded-2xl p-6 hover:shadow-lg hover:border-accent/20 transition-all duration-300"
          >
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-base font-semibold text-fg group-hover:text-accent transition-colors">{sub.name}</h3>
              <ChevronRight size="14" className="text-subtle group-hover:text-accent transition-colors shrink-0 ml-2" />
            </div>
            <p className="text-xs text-muted">{sub.items.length} course{sub.items.length !== 1 && "s"}</p>
          </motion.button>
        ))}
      </div>
    </div>
  );
}

function ItemsGrid({
  section,
  subcategoryName,
  onBack,
}: {
  section: (typeof categorySections)[number];
  subcategoryName: string;
  onBack: () => void;
}) {
  const sub = section.subcategories.find((s) => s.name === subcategoryName)!;

  return (
    <div>
      <button
        onClick={onBack}
        className="inline-flex items-center gap-1.5 text-xs text-muted hover:text-fg mb-6 transition-colors"
      >
        <ArrowLeft size="13" /> {section.name}
      </button>

      <div className="flex items-center gap-2 mb-2">
        <span className="text-lg">{section.icon}</span>
        <h2 className="text-xl md:text-2xl font-serif text-fg">{subcategoryName}</h2>
      </div>
      <p className="text-sm text-muted mb-8">{sub.items.length} course{sub.items.length !== 1 && "s"}</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5">
        {sub.items.map((item, i) => {
          if (item.type === "branch" || item.type === "course") {
            const branch = branches.find((b) => b.slug === item.id);
            if (branch) return <BranchCard key={item.id} branch={branch} index={i} />;
          }
          return <ItemCard key={item.id} item={item} index={i} />;
        })}
      </div>
    </div>
  );
}

export default function BranchExplorer() {
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(null);

  const isSearching = query.trim().length > 0;
  const activeSection = selectedCategory
    ? categorySections.find((s) => s.name === selectedCategory) ?? null
    : null;

  function selectCategory(name: string) {
    setSelectedCategory(name);
    setSelectedSubcategory(null);
  }

  function selectSubcategory(name: string) {
    setSelectedSubcategory(name);
  }

  function goBackToCategories() {
    setSelectedCategory(null);
    setSelectedSubcategory(null);
  }

  function goBackToSubcategories() {
    setSelectedSubcategory(null);
  }

  function handleSearch(value: string) {
    setQuery(value);
    if (value) {
      setSelectedCategory(null);
      setSelectedSubcategory(null);
    }
  }

  return (
    <section id="branches" className="py-24 bg-bg">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <div className="max-w-xl mb-10">
            <span className="text-xs font-semibold tracking-widest uppercase text-muted mb-3 block">
              Course & Branch Explorer
            </span>
            <h2 className="text-3xl md:text-4xl font-serif text-fg mb-3">
              Find Your Course
            </h2>
            <p className="text-muted text-base">
              Pick a category, drill into your field, and explore career insights, salary data, and hardware guides.
            </p>
          </div>
        </ScrollReveal>

        <div className="relative max-w-md mb-8">
          <Search size="16" className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted" />
          <input
            type="text"
            placeholder="Search any course..."
            value={query}
            onChange={(e) => handleSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-card border border-border rounded-xl text-sm text-fg placeholder:text-muted focus:outline-none focus:border-accent/40 transition-colors"
          />
        </div>

        {!isSearching && !selectedCategory && (
          <CategoryGrid onSelect={selectCategory} />
        )}

        {!isSearching && selectedCategory && !selectedSubcategory && activeSection && (
          <SubcategoryGrid section={activeSection} onSelect={selectSubcategory} onBack={goBackToCategories} />
        )}

        {!isSearching && selectedCategory && selectedSubcategory && activeSection && (
          <ItemsGrid section={activeSection} subcategoryName={selectedSubcategory} onBack={goBackToSubcategories} />
        )}

        {isSearching && (
          <SearchResults
            query={query}
            onClear={() => {
              setQuery("");
            }}
          />
        )}
      </div>
    </section>
  );
}
