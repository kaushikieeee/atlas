import ScrollReveal from "./ScrollReveal";
import { Sparkles, TrendingUp, Map, Star, BarChart3, LineChart } from "lucide-react";

const features = [
  { icon: Sparkles, title: "Personalized Career Recommendations", description: "AI-driven suggestions based on your skills, interests, and college tier." },
  { icon: TrendingUp, title: "Salary Predictor", description: "Predict your expected compensation based on branch, college, skills, and industry." },
  { icon: Map, title: "Engineering Roadmaps", description: "Step-by-step learning paths for every engineering specialisation." },
  { icon: Star, title: "Company Reviews", description: "Real reviews from engineering students about their internship and placement experiences." },
  { icon: BarChart3, title: "Placement Analytics", description: "Detailed placement statistics for every college and branch combination." },
  { icon: LineChart, title: "Industry Trends", description: "Real-time tracking of hiring trends, emerging roles, and skill demands." },
];

export default function FutureExpansion() {
  return (
    <section id="resources" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <div className="max-w-xl mb-14">
            <span className="text-xs font-semibold tracking-widest uppercase text-muted mb-3 block">
              Coming Soon
            </span>
            <h2 className="text-3xl md:text-4xl font-serif text-fg mb-3">
              What's Next for Atlas
            </h2>
            <p className="text-muted text-base">
              We're building the most comprehensive engineering career platform in India.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {features.map((feature) => (
            <ScrollReveal key={feature.title} delay={0.08}>
              <div className="bg-card border border-border rounded-2xl p-6 group hover:shadow-sm transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-surface flex items-center justify-center mb-4 group-hover:bg-accent-light transition-colors duration-300">
                  <feature.icon size="20" className="text-muted group-hover:text-accent transition-colors duration-300" />
                </div>
                <h3 className="text-sm font-semibold text-fg mb-2 group-hover:text-accent transition-colors duration-200">
                  {feature.title}
                </h3>
                <p className="text-xs text-muted leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
