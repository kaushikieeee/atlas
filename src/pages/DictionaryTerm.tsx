import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ChevronRight, BookOpen } from "lucide-react";
import { motion } from "framer-motion";
import { getTermBySlug } from "../data/dictionary";

export default function DictionaryTerm() {
  const { slug } = useParams<{ slug: string }>();
  const term = slug ? getTermBySlug(slug) : undefined;

  if (!term) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-serif text-fg mb-3">Term not found</h1>
          <Link to="/dictionary" className="inline-flex items-center gap-2 text-sm text-accent hover:underline">
            <ArrowLeft size="14" /> Back to Dictionary
          </Link>
        </div>
      </div>
    );
  }

  return (
    <section className="relative pt-24 pb-20 overflow-hidden bg-bg">
      <div className="absolute inset-0 pointer-events-none">
        <svg className="w-full h-full opacity-[0.02]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dt-grid" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#171717" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dt-grid)"/>
        </svg>
      </div>

      <div className="relative max-w-3xl mx-auto px-6 lg:px-8">
        <div className="flex items-center gap-2 text-xs text-muted mb-6">
          <Link to="/" className="hover:text-fg transition-colors">Home</Link>
          <ChevronRight size="12" />
          <Link to="/dictionary" className="hover:text-fg transition-colors">Dictionary</Link>
          <ChevronRight size="12" />
          <span className="text-fg">{term.term}</span>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <span className="inline-flex items-center gap-1.5 text-xs capitalize text-muted bg-surface border border-border px-2.5 py-1 rounded-full mb-4">
            <BookOpen size="12" />
            {term.category}
          </span>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif text-fg leading-[1.12] tracking-tight mb-6">
            {term.term}
          </h1>

          <div className="bg-card border border-border rounded-2xl p-6 md:p-8 mb-6">
            <p className="text-base md:text-lg text-fg leading-relaxed mb-6">
              {term.definition}
            </p>

            <div className="space-y-6">
              <Section label="Simple Explanation">
                <p className="text-sm text-muted leading-relaxed">{term.explanation}</p>
              </Section>

              <Section label="Example">
                <div className="bg-surface border border-border rounded-xl p-4">
                  <p className="text-sm text-fg leading-relaxed italic">{term.example}</p>
                </div>
              </Section>

              <Section label="Why It Matters">
                <p className="text-sm text-muted leading-relaxed">{term.whyItMatters}</p>
              </Section>
            </div>
          </div>

          {term.relatedTerms.length > 0 && (
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-muted mb-3">Related Terms</h3>
              <div className="flex flex-wrap gap-2">
                {term.relatedTerms.map((r) => {
                  const relatedSlug = r.toLowerCase().replace(/\s+/g, "-");
                  return (
                    <Link
                      key={r}
                      to={`/dictionary/${relatedSlug}`}
                      className="px-3 py-1.5 bg-surface border border-border rounded-lg text-xs text-muted hover:text-fg hover:border-accent/30 transition-all duration-200"
                    >
                      {r.replace(/-/g, " ")}
                    </Link>
                  );
                })}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}

function Section({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="text-xs font-semibold uppercase tracking-widest text-muted mb-2">{label}</h3>
      {children}
    </div>
  );
}
