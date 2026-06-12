import { useState, useMemo } from "react";
import { Search } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import BranchCard from "./BranchCard";
import { branches } from "../data/branches";

export default function BranchExplorer() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    if (!query.trim()) return branches;
    const q = query.toLowerCase();
    return branches.filter(
      (b) =>
        b.name.toLowerCase().includes(q) ||
        b.description.toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <section id="branches" className="py-24 bg-bg">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <div className="max-w-xl mb-10">
            <span className="text-xs font-semibold tracking-widest uppercase text-muted mb-3 block">
              Branch Explorer
            </span>
            <h2 className="text-3xl md:text-4xl font-serif text-fg mb-3">
              Every Engineering Branch, Mapped
            </h2>
            <p className="text-muted text-base">
              Salary ranges, hiring industries, and career opportunities across all major engineering disciplines in India.
            </p>
          </div>
        </ScrollReveal>

        <div className="relative max-w-md mb-10">
          <Search size="16" className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted" />
          <input
            type="text"
            placeholder="Search branches..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-card border border-border rounded-xl text-sm text-fg placeholder:text-muted focus:outline-none focus:border-accent/40 transition-colors"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5">
          {filtered.map((branch, index) => (
            <BranchCard key={branch.id} branch={branch} index={index} />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-sm text-muted py-16">No branches match "{query}"</p>
        )}
      </div>
    </section>
  );
}
