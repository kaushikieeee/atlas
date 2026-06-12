import { useState, useEffect, useRef, useMemo } from "react";
import { Link } from "react-router-dom";
import { Search as SearchIcon, X, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { branches } from "../data/branches";
import { terms as dictTerms } from "../data/dictionary/terms";
import { laptops } from "../data/tech-guide/laptops";

interface SearchResult {
  label: string;
  description: string;
  href: string;
  category: string;
}

export default function GlobalSearch() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  const results = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();

    const items: SearchResult[] = [];

    branches.forEach((b) => {
      if (b.name.toLowerCase().includes(q) || b.description.toLowerCase().includes(q)) {
        items.push({ label: b.name, description: b.description, href: `/${b.slug}`, category: "Branch" });
      }
    });

    dictTerms.forEach((t) => {
      if (t.term.toLowerCase().includes(q) || t.definition.toLowerCase().includes(q)) {
        items.push({ label: t.term, description: t.definition.slice(0, 80) + "...", href: `/dictionary/${t.slug}`, category: "Dictionary" });
      }
    });

    laptops.forEach((l) => {
      if (l.name.toLowerCase().includes(q) || l.idealFor.some((i) => i.toLowerCase().includes(q))) {
        items.push({ label: l.name, description: l.priceRange, href: "/tech-guide/laptops", category: "Tech Guide" });
      }
    });

    return items.slice(0, 10);
  }, [query]);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2 px-3 py-1.5 bg-surface border border-border rounded-lg text-xs text-muted hover:text-fg hover:border-accent/30 transition-all duration-200"
        aria-label="Search"
      >
        <SearchIcon size="14" />
        <span className="hidden sm:inline">Search...</span>
        <kbd className="hidden sm:inline-flex text-[10px] text-subtle bg-bg border border-border px-1.5 py-0.5 rounded ml-2">⌘K</kbd>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-start justify-center pt-[15vh] bg-black/20 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: -10 }}
              transition={{ duration: 0.15, ease: "easeOut" }}
              className="w-full max-w-lg bg-card border border-border rounded-2xl shadow-lg overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-3 px-4 py-3 border-b border-border">
                <SearchIcon size="16" className="text-muted shrink-0" />
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="Search branches, terms, laptops..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="flex-1 text-sm text-fg bg-transparent placeholder:text-muted focus:outline-none"
                />
                <button onClick={() => setIsOpen(false)} className="text-muted hover:text-fg transition-colors">
                  <X size="16" />
                </button>
              </div>

              <div className="max-h-[50vh] overflow-y-auto">
                {results.length > 0 ? (
                  <div className="py-2">
                    {results.map((r) => (
                      <Link
                        key={r.href + r.label}
                        to={r.href}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center justify-between px-4 py-2.5 hover:bg-surface transition-colors"
                      >
                        <div>
                          <div className="text-sm text-fg">{r.label}</div>
                          <div className="text-xs text-muted line-clamp-1">{r.description}</div>
                        </div>
                        <div className="flex items-center gap-1.5 shrink-0 ml-3">
                          <span className="text-[10px] text-muted bg-surface border border-border px-1.5 py-0.5 rounded">{r.category}</span>
                          <ChevronRight size="12" className="text-subtle" />
                        </div>
                      </Link>
                    ))}
                  </div>
                ) : query.trim() ? (
                  <div className="px-4 py-8 text-center text-sm text-muted">No results found for "{query}"</div>
                ) : (
                  <div className="px-4 py-8 text-center text-sm text-muted">Type to search branches, terms, and tech recommendations</div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
