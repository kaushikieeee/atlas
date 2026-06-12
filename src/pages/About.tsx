import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useInView, AnimatePresence } from "framer-motion";
import { ArrowUpRight, BookOpen, Search, GraduationCap, Building2, TrendingUp, FileText, ChevronDown, ExternalLink, Brain, Code, Server, Smartphone, Bot, Cpu, Zap } from "lucide-react";

function useCountUp(end: number, duration: number, startOnView: boolean, ref: React.RefObject<Element | null>) {
  const [count, setCount] = useState(0);
  const inView = useInView(ref, { once: true });
  const started = useRef(false);

  useEffect(() => {
    if ((startOnView && !inView) || started.current) return;
    started.current = true;
    let startTime: number | null = null;
    const step = (ts: number) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(ease * end));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, end, duration, startOnView]);

  return count;
}

const timelineSteps = [
  { label: "Uncertainty", year: "Results Day" },
  { label: "Research", year: "The Rabbit Hole" },
  { label: "Realization", year: "Clarity" },
  { label: "Why", year: "Purpose" },
  { label: "Creator", year: "Behind It" },
  { label: "Mission", year: "Mission" },
  { label: "Future", year: "What's Next" },
];

const researchCards = [
  { title: "Engineering Branches", icon: GraduationCap, desc: "10 branches researched in depth with full curriculum, career paths, and industry analysis." },
  { title: "Placement Reports", icon: TrendingUp, desc: "Hundreds of placement reports analyzed across IITs, NITs, IIITs, and top private colleges." },
  { title: "Salary Data", icon: Building2, desc: "Entry-level to senior-level salary ranges across all engineering disciplines." },
  { title: "College Research", icon: BookOpen, desc: "Rankings, cutoffs, fees, and placement stats for India's top engineering colleges." },
  { title: "Industry Trends", icon: TrendingUp, desc: "Emerging fields, market growth, and future outlook for every engineering branch." },
  { title: "Interview Questions", icon: FileText, desc: "400+ curated interview questions across all branches with detailed answers." },
  { title: "Technology Research", icon: Search, desc: "Hardware requirements, software tools, and tech stacks used in each field." },
];

const futureItems = [
  "More engineering branches and specializations",
  "Company-by-company placement databases",
  "Expanded engineering dictionary with 500+ terms",
  "Student technology guides for every discipline",
  "Placement analytics and trend visualization",
  "Career roadmaps with milestone tracking",
  "Interview question banks with practice mode",
  "AI-powered career intelligence tools",
];

interface ResearchCardProps {
  title: string;
  icon: React.ElementType;
  desc: string;
  index: number;
}

function ResearchCard({ title, icon: Icon, desc, index }: ResearchCardProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      <button
        onClick={() => setOpen(!open)}
        className={`w-full text-left rounded-xl border transition-all duration-300 ${
          open
            ? "border-accent bg-accent-light/40 dark:bg-accent-light/10"
            : "border-border bg-card hover:border-accent/30 hover:shadow-sm"
        }`}
      >
        <div className="flex items-center gap-3 px-4 py-3.5">
          <div className="w-8 h-8 rounded-lg bg-surface flex items-center justify-center shrink-0">
            <Icon size="15" className="text-accent" />
          </div>
          <span className="text-sm font-medium text-fg flex-1">{title}</span>
          <motion.div
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <ChevronDown size="14" className="text-subtle" />
          </motion.div>
        </div>
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
              className="overflow-hidden"
            >
              <div className="px-4 pb-4 pt-0">
                <p className="text-sm text-muted leading-relaxed">{desc}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </button>
    </motion.div>
  );
}

function ScrollIndicator() {
  return (
    <motion.div
      className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5, duration: 0.8 }}
    >
      <span className="text-xs text-subtle tracking-wider uppercase">Scroll</span>
      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown size="16" className="text-subtle" />
      </motion.div>
    </motion.div>
  );
}

function CounterStat({ end, label, suffix = "" }: { end: number; label: string; suffix?: string }) {
  const ref = useRef(null);
  const count = useCountUp(end, 1500, true, ref);

  return (
    <div ref={ref} className="text-center">
      <span className="text-3xl md:text-4xl font-serif text-accent block">
        {count}{suffix}
      </span>
      <span className="text-xs text-muted mt-1 block">{label}</span>
    </div>
  );
}

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    container: containerRef,
  });

  const [showTimeline, setShowTimeline] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (v) => {
      if (v > 0.08 && !showTimeline) setShowTimeline(true);
      if (v < 0.12) setActiveIndex(0);
      else if (v < 0.22) setActiveIndex(1);
      else if (v < 0.35) setActiveIndex(2);
      else if (v < 0.48) setActiveIndex(3);
      else if (v < 0.62) setActiveIndex(4);
      else if (v < 0.75) setActiveIndex(5);
      else setActiveIndex(6);
    });
    return () => unsubscribe();
  }, [scrollYProgress, showTimeline]);

  return (
    <div ref={containerRef} className="h-screen overflow-y-auto bg-bg">
      <AnimatePresence>
        {showTimeline && (
          <motion.nav
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden lg:block"
          >
            <div className="flex flex-col items-start gap-4">
              {timelineSteps.map((step, i) => {
                const isActive = i <= activeIndex;
                return (
                  <button
                    key={step.label}
                    onClick={() => {
                      const sections = document.querySelectorAll("[data-section]");
                      sections[i]?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="flex items-center gap-3 group"
                  >
                    <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      isActive ? "bg-accent" : "bg-border"
                    }`} />
                    <span className={`text-xs tracking-wider uppercase transition-all duration-300 ${
                      isActive ? "text-accent font-medium opacity-100" : "text-subtle opacity-0 group-hover:opacity-60"
                    }`}>
                      {step.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* ───── OPENING SECTION ───── */}
      <section className="min-h-screen flex flex-col items-center justify-center relative px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center max-w-3xl"
        >
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-xs text-accent tracking-widest uppercase mb-6 block"
          >
            About Atlas
          </motion.span>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif leading-[1.08] tracking-tight text-fg mb-6">
            Atlas wasn&rsquo;t planned.
            <span className="block text-accent mt-2">It was needed.</span>
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.7 }}
            className="text-lg md:text-xl text-muted leading-relaxed max-w-2xl mx-auto"
          >
            A student trying to understand his future accidentally spent months
            researching engineering careers, colleges, placements, salaries, and opportunities.
          </motion.p>
        </motion.div>
        <ScrollIndicator />
      </section>

      {/* ───── STATS BAR ───── */}
      <section className="py-16 md:py-20 border-y border-border bg-surface/50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-3 md:grid-cols-3 gap-8 md:gap-12">
            <CounterStat end={5} label="Months Researching" suffix="mo" />
            <CounterStat end={500} label="Companies Analyzed" suffix="+" />
            <CounterStat end={10} label="Data Points Indexed" suffix="k+" />
          </div>
        </div>
      </section>

      {/* ───── SECTION 1: RESULTS DAY ───── */}
      <section data-section className="py-20 md:py-28" id="uncertainty">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-5 gap-8 md:gap-12">
            <div className="md:col-span-2">
              <div className="sticky top-24">
                <div className="inline-block px-3 py-1.5 rounded-md bg-amber-light text-amber text-xs font-medium mb-4">
                  Results Day
                </div>
                <h2 className="text-3xl md:text-4xl font-serif text-fg leading-[1.1]">
                  It started with uncertainty.
                </h2>
              </div>
            </div>
            <div className="md:col-span-3">
              <div className="space-y-5 text-base md:text-lg text-muted leading-relaxed">
                <p>
                  Like thousands of students every year, I got my results and suddenly had to
                  answer questions I wasn&rsquo;t prepared for.
                </p>
                <div className="bg-card border border-border rounded-xl p-5 space-y-3 my-6">
                  {[
                    "Which course should I choose?",
                    "Which colleges could I realistically get into?",
                    "What placements should I expect?",
                    "Would I regret my decisions later?",
                  ].map((q, i) => (
                    <motion.p
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1, duration: 0.4 }}
                      className="text-fg font-medium flex items-start gap-3"
                    >
                      <span className="text-accent mt-0.5 shrink-0">?</span>
                      {q}
                    </motion.p>
                  ))}
                </div>
                <p>
                  The strange part wasn&rsquo;t that information didn&rsquo;t exist. It was that
                  there was too much of it.
                </p>
                <p>
                  Every website said something different. Every YouTube video had a different
                  opinion. Every person had a different answer.
                </p>
                <p className="text-fg font-medium">
                  And I had no idea who was right.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───── SECTION 2: THE RABBIT HOLE ───── */}
      <section data-section className="py-20 md:py-28 bg-surface/30 border-y border-border" id="research">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-5 gap-8 md:gap-12">
            <div className="md:col-span-2">
              <div className="sticky top-24">
                <div className="inline-block px-3 py-1.5 rounded-md bg-accent-light text-accent text-xs font-medium mb-4">
                  The Research
                </div>
                <h2 className="text-3xl md:text-4xl font-serif text-fg leading-[1.1]">
                  One search became hundreds.
                </h2>
              </div>
            </div>
            <div className="md:col-span-3">
              <div className="space-y-5 text-base md:text-lg text-muted leading-relaxed">
                <p>
                  What started as a simple search quickly became an obsession. I began comparing:
                </p>
                <div className="grid grid-cols-2 gap-2 my-6">
                  {[
                    "Colleges", "Engineering branches",
                    "Placement statistics", "Salary reports",
                    "Industry growth", "Career opportunities",
                    "Interview questions", "Required skills",
                  ].map((item, i) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.05, duration: 0.3 }}
                      className="bg-card border border-border rounded-lg px-3 py-2 text-xs md:text-sm text-fg"
                    >
                      {item}
                    </motion.div>
                  ))}
                </div>
                <p>
                  Every answer created three new questions. The deeper I went, the more I
                  realized how much there was to understand.
                </p>
              </div>

              {/* Search count visualization */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mt-8 bg-card border border-border rounded-xl p-6"
              >
                <p className="text-xs text-subtle uppercase tracking-wider mb-4">Searches Over Time</p>
                <div className="flex items-end gap-1.5 h-20">
                  {[10, 25, 45, 30, 60, 80, 55, 90, 120, 150, 200, 300, 450, 600, 750, 900, 1000].map((h, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      whileInView={{ height: `${Math.min(h / 10, 100)}%` }}
                      transition={{ delay: i * 0.03, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                      className="flex-1 bg-accent/20 rounded-t-sm relative group"
                    >
                      <motion.div
                        className="absolute inset-0 bg-accent rounded-t-sm"
                        initial={{ height: "0%" }}
                        whileInView={{ height: "100%" }}
                        transition={{ delay: i * 0.03 + 0.2, duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                      />
                    </motion.div>
                  ))}
                </div>
                <div className="flex justify-between text-xs text-subtle mt-2">
                  <span>10 searches</span>
                  <span>500</span>
                  <span>1000+</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ───── SECTION 3: A REALIZATION ───── */}
      <section data-section className="py-20 md:py-28" id="realization">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-5 gap-8 md:gap-12">
            <div className="md:col-span-2">
              <div className="sticky top-24">
                <div className="inline-block px-3 py-1.5 rounded-md bg-green-light text-green text-xs font-medium mb-4">
                  The Realization
                </div>
                <h2 className="text-3xl md:text-4xl font-serif text-fg leading-[1.1]">
                  The problem wasn&rsquo;t information.
                </h2>
              </div>
            </div>
            <div className="md:col-span-3">
              <div className="space-y-5 text-base md:text-lg text-muted leading-relaxed">
                <p>
                  The information existed. But it was scattered.
                </p>
                <p>
                  One website had placement data. Another had salary information. A third
                  explained the branch. A fourth talked about careers.
                </p>
                <p className="text-fg font-medium">
                  Students were expected to connect all the pieces themselves.
                </p>
                <p className="text-subtle italic">
                  That didn&rsquo;t make sense.
                </p>
              </div>

              {/* Puzzle pieces animation */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="mt-10 bg-card border border-border rounded-xl p-8 md:p-10"
              >
                <div className="relative flex flex-wrap justify-center gap-2">
                  {["Placement", "Salary", "Curriculum", "Careers", "Companies", "Skills"].map((piece, i) => (
                    <motion.div
                      key={piece}
                      initial={{ opacity: 0, x: Math.random() * 100 - 50, y: Math.random() * 60 - 30, rotate: Math.random() * 20 - 10 }}
                      whileInView={{ opacity: 1, x: 0, y: 0, rotate: 0 }}
                      transition={{ delay: 0.3 + i * 0.12, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                      className="px-4 py-2 rounded-lg bg-accent-light text-accent text-sm font-medium"
                    >
                      {piece}
                    </motion.div>
                  ))}
                </div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2, duration: 0.6 }}
                  className="mt-6 text-center"
                >
                  <span className="text-2xl md:text-3xl font-serif text-accent tracking-widest">ATLAS</span>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ───── SECTION 4: WHY ATLAS EXISTS ───── */}
      <section data-section className="py-20 md:py-28 bg-surface/30 border-y border-border" id="why">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-block px-3 py-1.5 rounded-md bg-accent-light text-accent text-xs font-medium mb-4">
              The Purpose
            </div>
            <h2 className="text-3xl md:text-4xl font-serif text-fg leading-[1.1] mb-6">
              I built the platform I needed.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {[
              { title: "Engineering Branches", desc: "In-depth profiles for 10 major branches with career paths, curriculum, and industry analysis." },
              { title: "Salary Insights", desc: "Entry-level to senior-level salary data across every engineering discipline, verified from placement reports." },
              { title: "Placement Information", desc: "Company-wise placement stats, top recruiters, and hiring trends for each branch." },
              { title: "Career Opportunities", desc: "Industry growth projections, emerging roles, and long-term career trajectories." },
              { title: "Interview Preparation", desc: "400+ curated interview questions across all branches with detailed answers and explanations." },
              { title: "Student Resources", desc: "Technology guides, laptop recommendations, and practical tools for engineering students." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="bg-card border border-border rounded-xl p-5"
              >
                <h3 className="text-sm font-medium text-fg mb-1">{item.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-center text-muted italic mt-8 max-w-2xl mx-auto"
          >
            The goal isn&rsquo;t to tell students what to do. The goal is to help them make informed decisions.
          </motion.p>
        </div>
      </section>

      {/* ───── SECTION 5: ABOUT THE CREATOR ───── */}
      <section data-section className="py-20 md:py-28" id="creator">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-5 gap-8 md:gap-12">
            <div className="md:col-span-2">
              <div className="sticky top-24">
                <div className="inline-block px-3 py-1.5 rounded-md bg-rose-light text-rose text-xs font-medium mb-4">
                  The Creator
                </div>
                <h2 className="text-3xl md:text-4xl font-serif text-fg leading-[1.1]">
                  Hi, I&rsquo;m Kaushik.
                </h2>
              </div>
            </div>
            <div className="md:col-span-3">
              <div className="space-y-5 text-base md:text-lg text-muted leading-relaxed">
                <p>
                  I&rsquo;m a student, developer, builder, and someone who enjoys solving
                  problems with technology.
                </p>
                <div className="bg-card border border-border rounded-xl p-5 my-6">
                  <p className="text-xs text-subtle uppercase tracking-wider mb-3">Interests & Focus</p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      { label: "AI / ML", icon: Brain },
                      { label: "Web Dev", icon: Code },
                      { label: "System Design", icon: Server },
                      { label: "Android Dev", icon: Smartphone },
                      { label: "Automation", icon: Bot },
                      { label: "Optimization", icon: Cpu },
                    ].map(({ label, icon: Icon }) => (
                      <span key={label} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface text-xs text-muted">
                        <Icon size="12" />
                        {label}
                      </span>
                    ))}
                  </div>
                </div>
                <p>
                  Over the years I&rsquo;ve built websites, tools, Android projects,
                  automation systems, and experimental software.
                </p>
                <p className="text-fg font-medium">
                  Atlas is one of the most personal projects I&rsquo;ve worked on because it
                  solves a problem I experienced myself.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───── SECTION 6: RESEARCH WALL ───── */}
      <section data-section className="py-20 md:py-28 bg-surface/30 border-y border-border" id="research-wall">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-block px-3 py-1.5 rounded-md bg-amber-light text-amber text-xs font-medium mb-4">
              The Research Wall
            </div>
            <h2 className="text-3xl md:text-4xl font-serif text-fg leading-[1.1] mb-4">
              The work behind Atlas.
            </h2>
            <p className="text-muted text-base">
              Every card represents months of research, analysis, and curation.
              Tap to explore.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-4xl mx-auto">
            {researchCards.map((card, i) => (
              <ResearchCard key={card.title} {...card} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ───── SECTION 7: THE MISSION ───── */}
      <section data-section className="py-20 md:py-28" id="mission">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="inline-block px-3 py-1.5 rounded-md bg-green-light text-green text-xs font-medium mb-4">
            The Mission
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-fg leading-[1.08] mb-6">
            Making information accessible.
          </h2>
          <p className="text-lg md:text-xl text-muted leading-relaxed max-w-2xl mx-auto">
            Students shouldn&rsquo;t have to spend months researching basic questions
            about their future.
          </p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-lg md:text-xl text-fg font-medium leading-relaxed mt-4"
          >
            Atlas exists so that students can spend less time searching and more time building.
          </motion.p>
        </div>
      </section>

      {/* ───── SECTION 8: PORTFOLIO ───── */}
      <section className="py-20 md:py-28 bg-surface/30 border-y border-border">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="inline-block px-3 py-1.5 rounded-md bg-accent-light text-accent text-xs font-medium mb-4">
            Portfolio
          </div>
          <h2 className="text-3xl md:text-4xl font-serif text-fg leading-[1.1] mb-4">
            Explore More Projects
          </h2>
          <p className="text-muted text-base mb-6 max-w-xl mx-auto">
            Atlas is one of many projects I&rsquo;ve built. View my portfolio to explore my work
            in software development, AI, automation, Android development, and more.
          </p>
          <motion.a
            href="https://kaushikieee.me"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 px-5 py-3 bg-fg text-bg rounded-xl text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Visit Portfolio
            <ExternalLink size="14" />
          </motion.a>
        </div>
      </section>

      {/* ───── SECTION 9: THE FUTURE ───── */}
      <section data-section className="py-20 md:py-28" id="future">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-block px-3 py-1.5 rounded-md bg-accent-light text-accent text-xs font-medium mb-4">
              What&rsquo;s Next
            </div>
            <h2 className="text-4xl md:text-5xl font-serif text-fg leading-[1.08]">
              This is only the beginning.
            </h2>
          </div>
          <div className="max-w-2xl mx-auto">
            <p className="text-muted text-base mb-6">
              Atlas is continuously growing. Future additions include:
            </p>
            <div className="space-y-2">
              {futureItems.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                  className="flex items-center gap-3 px-4 py-2.5 rounded-lg bg-card border border-border"
                >
                  <Zap size="14" className="text-accent shrink-0" />
                  <span className="text-sm text-fg">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ───── FINAL SECTION ───── */}
      <section className="py-24 md:py-32 bg-surface/30 border-t border-border">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <blockquote className="text-2xl md:text-3xl font-serif text-fg leading-[1.3] mb-8">
              &ldquo;I built Atlas because I couldn&rsquo;t find the resource I needed
              when I needed it most.&rdquo;
            </blockquote>
            <p className="text-sm text-muted mb-8">&mdash; Kaushik</p>

            <div className="border-t border-border pt-8">
              <p className="text-lg font-serif text-fg mb-1">Atlas</p>
              <p className="text-xs text-subtle mb-4">Career Intelligence for India</p>
              <p className="text-xs text-subtle">
                Built and maintained by{" "}
                <a
                  href="https://kaushikieee.me"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline"
                >
                  Kaushik
                </a>
                .
              </p>
              <Link
                to="/"
                className="inline-flex items-center gap-1.5 text-xs text-accent hover:underline mt-4"
              >
                Back to home
                <ArrowUpRight size="12" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
