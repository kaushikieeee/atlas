import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Search, ArrowLeft, ChevronRight, BookOpen } from "lucide-react";
import { motion } from "framer-motion";
import { terms, alphabet, searchTerms, termCategories } from "../data/dictionary";
import { ease } from "../lib/animations";
import ScrollReveal from "../components/ScrollReveal";

export default function Dictionary() {
  const [query, setQuery] = useState("");
  const [selectedLetter, setSelectedLetter] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredTerms = useMemo(() => {
    let result = query ? searchTerms(query) : terms;
    if (selectedLetter) result = result.filter(t => t.term[0].toUpperCase() === selectedLetter);
    if (selectedCategory !== "all") result = result.filter(t => t.category === selectedCategory);
    return result;
  }, [query, selectedLetter, selectedCategory]);

  return (
    <>
      <section className="relative pt-24 pb-20 overflow-hidden bg-bg">
        <div className="absolute inset-0 pointer-events-none">
          <svg className="w-full h-full opacity-[0.02]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="dict-grid" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#171717" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dict-grid)"/>
          </svg>
        </div>

        <div className="relative max-w-5xl mx-auto px-6 lg:px-8">
          <Link to="/" className="inline-flex items-center gap-1.5 text-xs text-muted hover:text-fg mb-8 transition-colors">
            <ArrowLeft size="13" />
            Home
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
          >
            <div className="flex items-center gap-2 mb-4">
              <BookOpen size="22" className="text-accent" />
              <span className="text-xs font-semibold tracking-widest uppercase text-muted">Engineering Dictionary</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-fg leading-[1.08] tracking-tight mb-4">
              Engineering Dictionary
            </h1>
            <p className="text-base md:text-lg text-muted leading-relaxed max-w-2xl mb-8">
              Understand every engineering, placement, and career term with simple explanations, examples, and context.
            </p>
          </motion.div>

          <div className="relative mb-8">
            <Search size="16" className="absolute left-4 top-1/2 -translate-y-1/2 text-muted" />
            <input
              type="text"
              placeholder="Search for a term..."
              value={query}
              onChange={(e) => { setQuery(e.target.value); setSelectedLetter(""); }}
              className="w-full pl-10 pr-4 py-3 bg-card border border-border rounded-xl text-sm text-fg placeholder:text-muted focus:outline-none focus:border-accent/50 transition-colors"
            />
          </div>

          <div className="flex flex-wrap gap-1.5 mb-8">
            <button onClick={() => setSelectedLetter("")} className={`px-2.5 py-1 rounded text-xs font-medium transition-colors ${!selectedLetter ? "bg-fg text-bg" : "bg-surface text-muted hover:text-fg"}`}>
              All
            </button>
            {alphabet.map((letter) => (
              <button
                key={letter}
                onClick={() => { setSelectedLetter(letter); setQuery(""); }}
                className={`w-7 h-7 rounded text-xs font-medium transition-colors ${selectedLetter === letter ? "bg-fg text-bg" : "bg-surface text-muted hover:text-fg"}`}
              >
                {letter}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap gap-1.5 mb-10">
            {termCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1 rounded-lg text-xs font-medium transition-colors capitalize ${selectedCategory === cat ? "bg-fg text-bg" : "bg-surface text-muted hover:text-fg border border-border"}`}
              >
                {cat === "all" ? "All Topics" : cat}
              </button>
            ))}
          </div>

          {filteredTerms.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-muted text-sm">No terms found. Try a different search.</p>
            </div>
          ) : (
            <div className="space-y-2">
              {filteredTerms.map((term, i) => (
                <ScrollReveal key={term.slug} delay={i * 0.02}>
                  <Link
                    to={`/dictionary/${term.slug}`}
                    className="group flex items-center justify-between bg-card border border-border rounded-xl px-5 py-3.5 hover:shadow-sm transition-all duration-200"
                  >
                    <div className="flex items-center gap-3">
                      <div>
                        <div className="text-sm font-semibold text-fg group-hover:text-accent transition-colors">{term.term}</div>
                        <div className="text-xs text-muted mt-0.5 line-clamp-1">{term.definition}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 shrink-0 ml-3">
                      <span className="text-[10px] capitalize bg-surface border border-border px-2 py-0.5 rounded text-muted">{term.category}</span>
                      <ChevronRight size="14" className="text-subtle group-hover:text-accent transition-colors" />
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
