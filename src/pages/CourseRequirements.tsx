import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Search, ArrowLeft, Laptop, ChevronRight, Cpu, HardDrive, Battery, Monitor, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "../components/ScrollReveal";
import { ease } from "../lib/animations";
import profiles, { courseCategories } from "../data/course-hardware/profiles";

const allCourses = Object.values(profiles);

const abbreviationId: Record<string, string> = {
  ece: "electronics-and-communication-engineering",
  eee: "electrical-engineering",
  cse: "computer-science-engineering",
  cs: "computer-science-engineering",
  mech: "mechanical-engineering",
  civil: "civil-engineering",
  aero: "aerospace-engineering",
  auto: "automobile-engineering",
  biotech: "biotechnology-engineering",
  bt: "biotechnology-engineering",
  arch: "architecture",
  aiml: "artificial-intelligence-machine-learning",
  ml: "artificial-intelligence-machine-learning",
  ai: "artificial-intelligence-machine-learning",
  ds: "data-science",
  mbbs: "medicine",
  bba: "business-administration",
  mba: "business-administration",
  bcom: "commerce",
  "b.com": "commerce",
  vfx: "visual-communication",
  viscom: "visual-communication",
};

function HardwareBadge({ icon: Icon, text, color }: { icon: any; text: string; color: string }) {
  return (
    <span className="inline-flex items-center gap-1 text-[10px] text-muted bg-surface border border-border px-1.5 py-0.5 rounded">
      <Icon size="10" style={{ color }} />
      {text}
    </span>
  );
}

export default function CourseRequirements() {
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filtered = useMemo(() => {
    let result = allCourses;
    if (query) {
      const q = query.toLowerCase().trim();
      const abbrId = abbreviationId[q];
      if (abbrId) {
        result = result.filter((p) => p.id === abbrId);
      } else {
        result = result.filter(
          (p) =>
            p.name.toLowerCase().includes(q) ||
            p.category.toLowerCase().includes(q) ||
            p.id.includes(q)
        );
      }
    }
    if (selectedCategory !== "all") {
      result = result.filter((p) => p.category === selectedCategory);
    }
    return result;
  }, [query, selectedCategory]);

  return (
    <section className="relative pt-24 pb-20 overflow-hidden bg-bg">
      <div className="absolute inset-0 pointer-events-none">
        <svg className="w-full h-full opacity-[0.02]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="cr-grid" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#171717" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cr-grid)"/>
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
            <Laptop size="22" className="text-accent" />
            <span className="text-xs font-semibold tracking-widest uppercase text-muted">Course Hardware Guide</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-fg leading-[1.08] tracking-tight mb-4">
            What Laptop Does Your Course Need?
          </h1>
          <p className="text-base md:text-lg text-muted leading-relaxed max-w-2xl mb-8">
            Pick your course to see exactly what hardware you need — processor, RAM, GPU, storage, and more tailored to your curriculum.
          </p>
        </motion.div>

        <div className="relative mb-6">
          <Search size="16" className="absolute left-4 top-1/2 -translate-y-1/2 text-muted" />
          <input
            type="text"
            placeholder="Search for a course..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-card border border-border rounded-xl text-sm text-fg placeholder:text-muted focus:outline-none focus:border-accent/50 transition-colors"
          />
        </div>

        <div className="flex flex-wrap gap-1.5 mb-10">
          <button
            onClick={() => setSelectedCategory("all")}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 capitalize ${selectedCategory === "all" ? "bg-fg text-bg" : "bg-surface text-muted hover:text-fg border border-border"}`}
          >
            All Courses
          </button>
          {courseCategories.map((cat) => (
            <button
              key={cat.name}
              onClick={() => setSelectedCategory(cat.name)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 capitalize ${selectedCategory === cat.name ? "bg-fg text-bg" : "bg-surface text-muted hover:text-fg border border-border"}`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-muted text-sm">No courses found. Try a different search.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {filtered.map((profile, i) => (
              <ScrollReveal key={profile.id} delay={i * 0.03}>
                <Link
                  to={`/tech-guide/course-requirements/${profile.id}`}
                  className="group block bg-card border border-border rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:shadow-sm transition-all duration-300 h-full"
                >
                  <div className="flex items-center justify-between mb-2 sm:mb-3">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-muted bg-surface border border-border px-2 py-0.5 rounded">
                      {profile.category}
                    </span>
                    <ChevronRight size="14" className="text-subtle group-hover:text-accent transition-colors" />
                  </div>
                  <h3 className="text-sm sm:text-base font-semibold text-fg mb-1.5 sm:mb-2 group-hover:text-accent transition-colors leading-snug">
                    {profile.name}
                  </h3>
                  <p className="text-xs text-muted leading-relaxed mb-3 sm:mb-4 line-clamp-1 sm:line-clamp-2">
                    {profile.description}
                  </p>
                  <div className="hidden sm:flex flex-wrap gap-1">
                    <HardwareBadge icon={Cpu} text={profile.hardwareRequirements.processor.text.split("(")[0].trim().slice(0, 30)} color="#2563EB" />
                    <HardwareBadge icon={HardDrive} text={profile.hardwareRequirements.ram.text.split(",")[0]} color="#059669" />
                    <HardwareBadge icon={Monitor} text={profile.hardwareRequirements.gpu.text.split("(")[0].trim().slice(0, 25)} color="#7C3AED" />
                    <HardwareBadge icon={Battery} text={profile.hardwareRequirements.battery.text} color="#D97706" />
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        )}

        <ScrollReveal delay={0.1}>
          <div className="mt-10 p-6 bg-card border border-border rounded-2xl text-center">
            <p className="text-sm text-muted mb-3">Not sure which hardware you need? Book a 1:1 call with Kaushik.</p>
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
  );
}
