import ScrollReveal from "./ScrollReveal";
import CountUp from "./CountUp";
import { BarChart3, Building2, BookOpen, Users } from "lucide-react";

export default function StatisticsSection() {
  const stats = [
    { end: 10, suffix: "+", label: "Engineering Branches", icon: BarChart3 },
    { end: 500, suffix: "+", label: "Companies Tracked", icon: Building2 },
    { end: 1000, suffix: "+", label: "Interview Questions", icon: BookOpen },
    { end: 50, suffix: "K+", label: "Students Helped", icon: Users },
  ];

  return (
    <section className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-serif text-fg mb-3">
              India's Engineering Landscape
            </h2>
            <p className="text-muted text-base max-w-xl mx-auto">
              Comprehensive data across every engineering discipline.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat) => (
            <ScrollReveal key={stat.label} delay={0.1}>
              <div className="text-center group">
                <div className="w-10 h-10 rounded-xl bg-bg border border-border flex items-center justify-center mx-auto mb-5 group-hover:border-accent/30 transition-colors duration-300">
                  <stat.icon size="18" className="text-muted group-hover:text-accent transition-colors duration-300" />
                </div>
                <CountUp end={stat.end} suffix={stat.suffix} label={stat.label} />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
