import { BarChart3, Target, FileText } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const features = [
  {
    icon: BarChart3,
    title: "Career Intelligence",
    description: "Real salary data and industry insights for every engineering branch. Make informed decisions about your future with verified market intelligence.",
    accent: "#2563EB",
    bg: "#DBEAFE"
  },
  {
    icon: Target,
    title: "Placement Expectations",
    description: "Understand opportunities based on your college tier. See what companies visit, what packages to expect, and how to prepare effectively.",
    accent: "#D97706",
    bg: "#FEF3C7"
  },
  {
    icon: FileText,
    title: "Interview Preparation",
    description: "Curated questions and topics used by actual recruiters. Branch-specific preparation guides based on real campus placement patterns.",
    accent: "#059669",
    bg: "#D1FAE5"
  }
];

export default function WhyAtlas() {
  return (
    <section className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <div className="max-w-xl mb-14">
            <span className="text-xs font-semibold tracking-widest uppercase text-muted mb-3 block">
              Why Atlas
            </span>
            <h2 className="text-3xl md:text-4xl font-serif text-fg mb-3">
              Built for Engineering Students
            </h2>
            <p className="text-muted text-base">
              Everything you need to navigate your engineering career, from first year to placement.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature) => (
            <ScrollReveal key={feature.title} delay={0.15}>
              <div className="bg-card border border-border rounded-2xl p-8 group hover:shadow-sm transition-all duration-300">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-5 transition-colors duration-300"
                  style={{ backgroundColor: feature.bg }}
                >
                  <feature.icon size="20" style={{ color: feature.accent }} />
                </div>
                <h3 className="text-lg font-semibold text-fg mb-3">{feature.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{feature.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
