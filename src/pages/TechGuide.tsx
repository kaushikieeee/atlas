import { Link } from "react-router-dom";
import { Laptop, ArrowLeft, Sparkles, BookOpen, ArrowRight, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "../components/ScrollReveal";
import { ease } from "../lib/animations";

const featuredTools = [
  {
    slug: "laptop-advisor",
    icon: Sparkles,
    label: "Laptop Advisor",
    description: "Answer a few questions about your course, activities, and budget to get a personalised laptop recommendation in seconds.",
    color: "#2563EB",
  },
  {
    slug: "course-requirements",
    icon: BookOpen,
    label: "Course Hardware Guide",
    description: "Browse 15+ courses to see exactly what processor, RAM, GPU, and storage your curriculum demands.",
    color: "#059669",
  },
];

export default function TechGuide() {
  return (
    <>
      <section className="relative pt-24 pb-20 overflow-hidden bg-bg">
        <div className="absolute inset-0 pointer-events-none">
          <svg className="w-full h-full opacity-[0.02]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="tg-grid" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#171717" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#tg-grid)"/>
          </svg>
        </div>

        <div className="relative max-w-4xl mx-auto px-6 lg:px-8">
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
              <Laptop size="22" className="text-accent" />
              <span className="text-xs font-semibold tracking-widest uppercase text-muted">Student Tech Guide</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-fg leading-[1.08] tracking-tight mb-4">
              Find the Right Tech for Your Engineering Journey
            </h1>
            <p className="text-base md:text-lg text-muted leading-relaxed max-w-2xl mb-10">
              Personalised laptop recommendations and course-by-course hardware guides for engineering students.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {featuredTools.map((tool, i) => (
              <ScrollReveal key={tool.slug} delay={i * 0.08}>
                <Link
                  to={`/tech-guide/${tool.slug}`}
                  className="group block bg-gradient-to-br from-accent/[0.03] to-transparent border border-accent/20 rounded-2xl p-6 hover:shadow-sm transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${tool.color}15` }}>
                      <tool.icon size="22" style={{ color: tool.color }} />
                    </div>
                    <ArrowRight size="16" className="text-subtle group-hover:text-accent transition-colors" />
                  </div>
                  <h3 className="text-base font-semibold text-fg mb-1 group-hover:text-accent transition-colors">{tool.label}</h3>
                  <p className="text-xs text-muted leading-relaxed">{tool.description}</p>
                </Link>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.16}>
            <div className="mt-10 p-6 bg-card border border-border rounded-2xl text-center">
              <p className="text-sm text-muted mb-3">Still unsure? Book a 1:1 call with Kaushik for personalised advice.</p>
              <Link
                to="/book"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-white text-sm font-medium rounded-lg hover:opacity-90 transition-all duration-200"
              >
                <Calendar size="14" />
                Book a Call
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
