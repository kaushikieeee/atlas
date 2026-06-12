import ScrollReveal from "./ScrollReveal";
import { Search, Building2, Briefcase, FileText, Target } from "lucide-react";

const steps = [
  { icon: Search, label: "Choose Branch", description: "Explore all engineering disciplines and find your fit." },
  { icon: Building2, label: "Explore Industries", description: "Discover which sectors hire from your branch." },
  { icon: Briefcase, label: "Discover Roles", description: "Understand job roles, salaries, and career paths." },
  { icon: FileText, label: "Prepare Interviews", description: "Practice with real interview questions." },
  { icon: Target, label: "Land Opportunities", description: "Target the right companies and roles for you." },
];

export default function CareerJourney() {
  return (
    <section className="py-24 bg-bg">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <div className="max-w-xl mb-14">
            <span className="text-xs font-semibold tracking-widest uppercase text-muted mb-3 block">
              Career Journey
            </span>
            <h2 className="text-3xl md:text-4xl font-serif text-fg mb-3">
              Your Roadmap to Success
            </h2>
            <p className="text-muted text-base">
              A structured path from choosing your branch to landing your dream role.
            </p>
          </div>
        </ScrollReveal>

        <div className="relative">
          <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-px bg-border">
            <svg className="w-full h-2 absolute top-0 left-0 -translate-y-1/2" preserveAspectRatio="none">
              <line
                x1="0" y1="0" x2="100%" y2="0"
                stroke="#D1D5DB"
                strokeWidth="1"
                strokeDasharray="8 4"
              />
            </svg>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4">
            {steps.map((step, index) => (
              <ScrollReveal key={step.label} delay={index * 0.12}>
                <div className="relative flex flex-col items-center text-center group">
                  <div className="relative z-10 w-14 h-14 rounded-2xl bg-card border border-border flex items-center justify-center mb-4 group-hover:border-accent/40 transition-all duration-300">
                    <step.icon size="22" className="text-muted group-hover:text-accent transition-colors duration-300" />
                  </div>
                  <div className="absolute top-7 left-1/2 -translate-x-1/2 w-px h-full bg-border lg:hidden" />
                  <h3 className="text-sm font-semibold text-fg mb-2">{step.label}</h3>
                  <p className="text-xs text-muted leading-relaxed max-w-[180px]">{step.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
