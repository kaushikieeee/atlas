import { useMemo, useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ChevronRight, HelpCircle, BookOpen, SlidersHorizontal, Loader2 } from "lucide-react";
import { motion } from "framer-motion";
import { getBranchBySlug, getBranchIcon } from "../data/branches";
import { loadQuestions } from "../data/questionDataLoader";
import type { Question } from "../data/branches/mechanical-questions";
import ScrollReveal from "../components/ScrollReveal";

const difficulties = ["All", "Easy", "Medium", "Hard"] as const;

export default function InterviewQuestions() {
  const { slug } = useParams<{ slug: string }>();
  const branchMeta = slug ? getBranchBySlug(slug) : null;
  const Icon = branchMeta ? getBranchIcon(branchMeta.icon) : null;

  const [selectedTopic, setSelectedTopic] = useState("all");
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>("All");
  const [questionsData, setQuestionsData] = useState<{ questions: Question[]; questionTopics: { name: string; slug: string; count: number; priority: string }[] } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;
    setLoading(true);
    loadQuestions(slug).then((data) => {
      if (data) {
        setQuestionsData(data);
      }
      setLoading(false);
    });
  }, [slug]);

  const filtered = useMemo(() => {
    if (!questionsData) return [];
    let result = questionsData.questions;
    if (selectedTopic !== "all") {
      result = result.filter(q => q.topic === selectedTopic);
    }
    if (selectedDifficulty !== "All") {
      result = result.filter(q => q.difficulty === selectedDifficulty);
    }
    return result;
  }, [selectedTopic, selectedDifficulty, questionsData]);

  if (loading) {
    return (
      <section className="relative pt-24 pb-20 min-h-screen bg-bg flex items-center justify-center">
        <div className="flex items-center gap-3 text-muted">
          <Loader2 size="20" className="animate-spin" />
          <span className="text-sm">Loading questions...</span>
        </div>
      </section>
    );
  }

  if (!questionsData) {
    return (
      <section className="relative pt-24 pb-20 min-h-screen bg-bg">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center py-20">
          <h1 className="text-2xl font-serif text-fg mb-3">Questions Not Available</h1>
          <p className="text-sm text-muted mb-6">Interview questions for this branch are being prepared.</p>
          <Link to={`/${slug}`} className="inline-flex items-center gap-2 text-sm text-accent hover:underline">
            <ChevronRight size="14" />
            Back to {branchMeta?.name || "Branch"}
          </Link>
        </div>
      </section>
    );
  }

  const { questions, questionTopics } = questionsData;

  return (
    <section className="relative pt-24 pb-20 overflow-hidden bg-bg min-h-screen">
      <div className="absolute inset-0 pointer-events-none">
        <svg className="w-full h-full opacity-[0.02]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="iq-grid" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#171717" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#iq-grid)"/>
        </svg>
      </div>

      <div className="relative max-w-5xl mx-auto px-6 lg:px-8">
        <div className="flex items-center gap-2 text-xs text-muted mb-6">
          <Link to="/" className="hover:text-fg transition-colors">Home</Link>
          <ChevronRight size="12" />
          <Link to={`/${slug}`} className="hover:text-fg transition-colors">{branchMeta?.name || "Branch"}</Link>
          <ChevronRight size="12" />
          <span className="text-fg">Interview Questions</span>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="flex items-center gap-3 mb-4">
            {Icon && branchMeta && (
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${branchMeta.color}15` }}>
                <Icon size="20" style={{ color: branchMeta.color }} />
              </div>
            )}
            <div>
              <div className="text-xs font-semibold tracking-widest uppercase text-muted">{branchMeta?.name || "Engineering"}</div>
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-fg leading-[1.08] tracking-tight mb-4">
            Interview Questions
          </h1>
          <p className="text-base md:text-lg text-muted leading-relaxed max-w-2xl mb-2">
            {questions.length}+ interview questions with detailed answers across {questionTopics.length} topics. Filter by topic and difficulty to prepare for your next interview.
          </p>

          <div className="flex flex-wrap gap-4 mb-10">
            <div className="flex items-center gap-2 text-sm text-muted bg-card border border-border rounded-xl px-4 py-2">
              <HelpCircle size="15" className="text-accent" />
              <span><strong className="text-fg">{questions.length}</strong> Questions</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted bg-card border border-border rounded-xl px-4 py-2">
              <BookOpen size="15" className="text-amber" />
              <span><strong className="text-fg">{questionTopics.length}</strong> Topics</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted bg-card border border-border rounded-xl px-4 py-2">
              <SlidersHorizontal size="15" className="text-green" />
              <span><strong className="text-fg">3</strong> Difficulty Levels</span>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-8">
          <button
            onClick={() => setSelectedTopic("all")}
            className={`px-3 py-2 rounded-xl text-xs font-medium transition-all duration-200 text-left ${
              selectedTopic === "all" ? "bg-fg text-bg" : "bg-card border border-border text-muted hover:text-fg"
            }`}
          >
            <div className={selectedTopic === "all" ? "text-bg/70" : "text-muted"}>All Topics</div>
            <div className="text-base font-semibold">{questions.length}</div>
          </button>
          {questionTopics.map((t) => (
            <button
              key={t.slug}
              onClick={() => setSelectedTopic(t.name)}
              className={`px-3 py-2 rounded-xl text-xs font-medium transition-all duration-200 text-left ${
                selectedTopic === t.name ? "bg-fg text-bg" : "bg-card border border-border text-muted hover:text-fg"
              }`}
            >
              <div className={selectedTopic === t.name ? "text-bg/70" : "text-muted"}>
                {t.priority === "Critical" ? "Critical" : t.priority === "Industry-Specific" ? "Industry" : "High"}
              </div>
              <div className="text-base font-semibold">{t.count}</div>
              <div className="text-[10px] leading-tight mt-0.5">{t.name}</div>
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2 mb-8">
          {difficulties.map((d) => (
            <button
              key={d}
              onClick={() => setSelectedDifficulty(d)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 ${
                selectedDifficulty === d ? "bg-fg text-bg" : "bg-surface border border-border text-muted hover:text-fg"
              }`}
            >
              {d}
            </button>
          ))}
        </div>

        <div className="flex items-center justify-between mb-4">
          <div className="text-xs text-muted">
            Showing <strong className="text-fg">{filtered.length}</strong> question{filtered.length !== 1 ? "s" : ""}
            {selectedTopic !== "all" && ` in ${selectedTopic}`}
          </div>
        </div>

        <div className="space-y-2">
          {filtered.map((q, i) => (
            <ScrollReveal key={q.id} delay={Math.min(i * 0.01, 0.5)}>
              <div className="bg-card border border-border rounded-xl px-5 py-3.5 hover:shadow-sm transition-all duration-200">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3">
                    <span className="text-xs text-subtle font-medium mt-0.5 w-6 shrink-0">{q.id}.</span>
                    <div>
                      <p className="text-sm text-fg">{q.question}</p>
                      <div className="flex items-center gap-2 mt-1.5">
                        <span className="text-[10px] text-muted bg-surface px-1.5 py-0.5 rounded">{q.topic}</span>
                        <span className={`text-[10px] px-1.5 py-0.5 rounded ${
                          q.difficulty === "Easy" ? "text-green bg-green-light" :
                          q.difficulty === "Medium" ? "text-amber bg-amber-light" :
                          "text-rose bg-rose-light"
                        }`}>
                          {q.difficulty}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted text-sm">No questions match your filters. Try a different topic or difficulty.</p>
          </div>
        )}
      </div>
    </section>
  );
}
