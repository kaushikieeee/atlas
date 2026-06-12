import ScrollReveal from "./ScrollReveal";
import { TrendingUp, Zap, Building2, Cpu } from "lucide-react";

const insights = [
  {
    icon: TrendingUp,
    title: "Highest Paying Branches",
    subtitle: "Computer Science & Engineering",
    value: "₹6 - ₹45 LPA",
    change: "+12% YoY",
    description: "CS graduates continue to command the highest starting salaries, with top performers securing international offers.",
    accent: "#2563EB",
    bg: "#DBEAFE",
    positive: true,
  },
  {
    icon: Zap,
    title: "Fastest Growing Industries",
    subtitle: "Electric Vehicles & Renewables",
    value: "28% CAGR",
    change: "High demand",
    description: "EV and renewable energy sectors are experiencing rapid growth, creating thousands of new engineering roles.",
    accent: "#D97706",
    bg: "#FEF3C7",
    positive: true,
  },
  {
    icon: Building2,
    title: "Top Hiring Companies",
    subtitle: "Across All Branches",
    value: "500+",
    change: "Companies tracked",
    description: "From PSUs to MNCs, we track hiring patterns across every sector that recruits Indian engineers.",
    accent: "#059669",
    bg: "#D1FAE5",
    positive: true,
  },
  {
    icon: Cpu,
    title: "Emerging Technologies",
    subtitle: "AI, ML, IoT, Blockchain",
    value: "40%",
    change: "Growth in roles",
    description: "Emerging tech roles are growing rapidly across all engineering branches, not just CS.",
    accent: "#7C3AED",
    bg: "#EDE9FE",
    positive: true,
  },
];

export default function FeaturedInsights() {
  return (
    <section id="insights" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <div className="max-w-xl mb-14">
            <span className="text-xs font-semibold tracking-widest uppercase text-muted mb-3 block">
              Featured Insights
            </span>
            <h2 className="text-3xl md:text-4xl font-serif text-fg mb-3">
              Engineering Landscape at a Glance
            </h2>
            <p className="text-muted text-base">
              Key data points that define the engineering career ecosystem in India.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {insights.map((insight) => (
            <ScrollReveal key={insight.title} delay={0.1}>
              <div className="bg-card border border-border rounded-2xl p-6 md:p-8 group hover:shadow-sm transition-all duration-300">
                <div className="flex items-start justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: insight.bg }}
                    >
                      <insight.icon size="20" style={{ color: insight.accent }} />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-fg">{insight.title}</div>
                      <div className="text-xs text-muted">{insight.subtitle}</div>
                    </div>
                  </div>
                  <span className={`text-xs font-medium px-2 py-1 rounded-full ${insight.positive ? "bg-green-light text-green" : ""}`}>
                    {insight.change}
                  </span>
                </div>

                <div className="mb-3">
                  <span className="text-3xl font-serif text-fg">{insight.value}</span>
                </div>

                <p className="text-sm text-muted leading-relaxed">
                  {insight.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
