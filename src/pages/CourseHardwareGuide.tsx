import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ChevronRight, Check, X, Cpu, HardDrive, Battery, Monitor, Thermometer, Zap, Shield, BookOpen, AlertTriangle, Sparkles, ArrowRight, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "../components/ScrollReveal";
import { getCourseProfile } from "../data/course-hardware/profiles";
import { ease } from "../lib/animations";

const hardwareIcons: Record<string, any> = {
  processor: Cpu,
  ram: HardDrive,
  storage: HardDrive,
  gpu: Monitor,
  battery: Battery,
  display: Monitor,
  cooling: Thermometer,
};

const hardwareLabels: Record<string, string> = {
  processor: "Processor",
  ram: "RAM",
  storage: "Storage",
  gpu: "Graphics (GPU)",
  battery: "Battery Life",
  display: "Display",
  cooling: "Cooling",
};

function ScoreBar({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex items-center gap-2 text-xs">
      <span className="text-muted w-28 shrink-0">{label}</span>
      <div className="flex-1 h-1.5 bg-surface rounded-full overflow-hidden">
        <div className="h-full bg-accent rounded-full transition-all duration-500" style={{ width: `${value * 10}%` }} />
      </div>
      <span className="text-fg font-medium w-5 text-right">{value}/10</span>
    </div>
  );
}

export default function CourseHardwareGuide() {
  const { course } = useParams<{ course: string }>();
  const profile = getCourseProfile(course || "");

  if (!profile) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-serif text-fg mb-3">Course not found</h1>
          <p className="text-sm text-muted mb-6">We don't have a hardware profile for this course yet.</p>
          <Link to="/tech-guide/course-requirements" className="inline-flex items-center gap-2 text-sm text-accent hover:underline">
            <ArrowLeft size="14" /> Browse all courses
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
            <pattern id="chg-grid" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#171717" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#chg-grid)"/>
        </svg>
      </div>

      <div className="relative max-w-4xl mx-auto px-6 lg:px-8">
        <div className="flex items-center gap-2 text-xs text-muted mb-6">
          <Link to="/" className="hover:text-fg transition-colors">Home</Link>
          <ChevronRight size="12" />
          <Link to="/tech-guide" className="hover:text-fg transition-colors">Tech Guide</Link>
          <ChevronRight size="12" />
          <Link to="/tech-guide/course-requirements" className="hover:text-fg transition-colors">Course Requirements</Link>
          <ChevronRight size="12" />
          <span className="text-fg">{profile.name}</span>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
        >
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface border border-border text-muted text-[10px] font-semibold uppercase tracking-wider mb-4">
            {profile.category}
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-fg leading-[1.08] tracking-tight mb-4">
            {profile.name}
          </h1>
          <p className="text-base md:text-lg text-muted leading-relaxed max-w-2xl mb-6">
            {profile.description}
          </p>
        </motion.div>

        <ScrollReveal>
          <div className="bg-card border border-border rounded-2xl p-6 md:p-8 mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Zap size="18" className="text-accent" />
              <h2 className="text-sm font-semibold uppercase tracking-widest text-muted">Hardware Requirements</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.entries(profile.hardwareRequirements).map(([key, req]) => {
                const Icon = hardwareIcons[key] || Monitor;
                return (
                  <div key={key} className="bg-surface border border-border rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Icon size="14" className="text-accent shrink-0" />
                      <span className="text-xs font-semibold text-fg">{hardwareLabels[key] || key}</span>
                    </div>
                    <p className="text-sm font-medium text-fg mb-1">{req.text}</p>
                    <p className="text-xs text-muted leading-relaxed">{req.detail}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.05}>
          <div className="bg-card border border-border rounded-2xl p-6 md:p-8 mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Shield size="18" className="text-accent" />
              <h2 className="text-sm font-semibold uppercase tracking-widest text-muted">Importance Scores</h2>
            </div>
            <div className="space-y-2 max-w-md">
              <ScoreBar value={profile.gpuNeed} label="GPU Importance" />
              <ScoreBar value={profile.cpuNeed} label="CPU Importance" />
              <ScoreBar value={profile.batteryImportance} label="Battery Importance" />
              <ScoreBar value={profile.portabilityImportance} label="Portability" />
              <ScoreBar value={profile.storageImportance} label="Storage Importance" />
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="bg-gradient-to-br from-accent/5 to-transparent border border-accent/20 rounded-2xl p-6 md:p-8 mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles size="18" className="text-accent" />
              <h2 className="text-sm font-semibold uppercase tracking-widest text-accent">Recommendation</h2>
            </div>
            <p className="text-xl font-semibold text-fg mb-2">{profile.recommendation}</p>
            <p className="text-xs text-muted mb-4">{profile.recommendedCategory}</p>
            <p className="text-sm text-fg leading-relaxed">{profile.reason}</p>
            <p className="text-sm text-muted leading-relaxed mt-4">{profile.whyRecommendation}</p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="bg-card border border-border rounded-2xl p-6 md:p-8 mb-8">
            <div className="flex items-center gap-2 mb-4">
              <BookOpen size="18" className="text-accent" />
              <h2 className="text-sm font-semibold uppercase tracking-widest text-muted">What You Will Do</h2>
            </div>
            <p className="text-sm text-muted mb-5 leading-relaxed">{profile.typicalWorkload}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {profile.whatYouWillDo.map((item) => (
                <div key={item} className="flex items-start gap-2 text-sm text-fg">
                  <Check size="14" className="text-green mt-0.5 shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="bg-card border border-border rounded-2xl p-6 md:p-8 mb-8">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-accent text-lg font-serif">{"</>"}</span>
              <h2 className="text-sm font-semibold uppercase tracking-widest text-muted">Software You Will Use</h2>
            </div>
            <div className="flex flex-wrap gap-1.5 mb-6">
              {profile.commonSoftware.map((sw) => (
                <span key={sw} className="text-[10px] bg-surface border border-border px-2 py-0.5 rounded text-muted">
                  {sw}
                </span>
              ))}
            </div>
            <div className="space-y-4">
              {profile.softwareExplained.map((sw) => (
                <div key={sw.name} className="bg-surface border border-border rounded-xl p-4">
                  <h4 className="text-sm font-semibold text-fg mb-1">{sw.name}</h4>
                  <p className="text-xs text-muted leading-relaxed">{sw.why}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <ScrollReveal delay={0.25}>
            <div className="bg-card border border-rose/20 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-3">
                <X size="16" className="text-rose" />
                <h2 className="text-xs font-semibold uppercase tracking-widest text-rose">Things to Avoid</h2>
              </div>
              <ul className="space-y-2">
                {profile.thingsToAvoid.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-xs text-fg">
                    <X size="12" className="text-rose mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="bg-card border border-green/20 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-3">
                <Check size="16" className="text-green" />
                <h2 className="text-xs font-semibold uppercase tracking-widest text-green">Not Needed</h2>
              </div>
              <ul className="space-y-2">
                {profile.notNeeded.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-xs text-fg">
                    <Check size="12" className="text-green mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.35}>
          <div className="bg-card border border-border rounded-2xl p-6 md:p-8 mb-8">
            <div className="flex items-center gap-2 mb-4">
              <AlertTriangle size="18" className="text-amber" />
              <h2 className="text-sm font-semibold uppercase tracking-widest text-muted">Compare with Similar Courses</h2>
            </div>
            <div className="space-y-3">
              {profile.compareWith.map((cmp) => (
                <Link
                  key={cmp.course}
                  to={`/tech-guide/course-requirements/${cmp.course.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "")}`}
                  className="group block bg-surface border border-border rounded-xl p-4 hover:shadow-sm transition-all duration-200"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-semibold text-accent group-hover:underline">{cmp.course}</span>
                    <ArrowRight size="12" className="text-subtle group-hover:text-accent transition-colors" />
                  </div>
                  <p className="text-xs text-muted leading-relaxed">{cmp.text}</p>
                </Link>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.4}>
          <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
            <div className="flex items-center gap-2 mb-4">
              <Shield size="18" className="text-accent" />
              <h2 className="text-sm font-semibold uppercase tracking-widest text-muted">Future Relevance</h2>
            </div>
            <p className="text-sm text-fg leading-relaxed">{profile.futureRelevance}</p>
          </div>
        </ScrollReveal>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/tech-guide/laptop-advisor"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-fg text-bg rounded-xl text-sm font-medium hover:opacity-90 transition-all duration-200"
          >
            Get a Personal Laptop Recommendation
            <ArrowRight size="16" />
          </Link>
          <Link
            to="/book"
            className="inline-flex items-center gap-2 px-5 py-3.5 border border-border text-fg rounded-xl text-sm font-medium hover:bg-surface transition-all duration-200"
          >
            <Calendar size="14" />
            Book a Call with Kaushik
          </Link>
        </div>
      </div>
    </section>
  );
}
