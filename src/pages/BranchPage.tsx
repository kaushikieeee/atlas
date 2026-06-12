import { useParams, Link } from "react-router-dom";
import {
  ArrowLeft, BookOpen, GraduationCap, ExternalLink, Users, Clock, DollarSign, Shield,
  ChevronRight, Book, Monitor, Award, Lightbulb, HelpCircle, BarChart3, Target,
  Zap
} from "lucide-react";
import { motion } from "framer-motion";
import { loadBranchData } from "../data/branchDataLoader";
import { getBranchBySlug, getBranchIcon } from "../data/branches";
import ScrollReveal from "../components/ScrollReveal";
import CTASection from "../components/CTASection";

function SectionHeading({ label, title, description }: { label?: string; title: string; description?: string }) {
  return (
    <ScrollReveal>
      <div className="max-w-xl mb-10">
        {label && <span className="text-xs font-semibold tracking-widest uppercase text-muted mb-3 block">{label}</span>}
        <h2 className="text-2xl md:text-3xl font-serif text-fg mb-3">{title}</h2>
        {description && <p className="text-muted text-sm md:text-base">{description}</p>}
      </div>
    </ScrollReveal>
  );
}

function InfoCard({ icon: Icon, label, value, color }: { icon: typeof BookOpen; label: string; value: string; color?: string }) {
  return (
    <div className="flex items-start gap-3 p-4 bg-card border border-border rounded-xl">
      <div className="w-9 h-9 rounded-lg bg-surface flex items-center justify-center shrink-0">
        <Icon size="16" className={color ? "" : "text-muted"} style={color ? { color } : undefined} />
      </div>
      <div>
        <div className="text-xs text-muted mb-0.5">{label}</div>
        <div className="text-sm font-semibold text-fg">{value}</div>
      </div>
    </div>
  );
}

const chanceStyles: Record<string, string> = {
  "High": "bg-green-light text-green",
  "Medium": "bg-amber-light text-amber",
  "Low": "bg-surface text-muted",
  "Not available": "bg-rose-light text-rose",
};

export default function BranchPage() {
  const { slug } = useParams<{ slug: string }>();
  const branchData = slug ? loadBranchData(slug) : null;
  const branchMeta = slug ? getBranchBySlug(slug) : null;

  if (!branchData || !branchMeta) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-serif text-fg mb-3">Branch not found</h1>
          <p className="text-muted text-sm mb-6">We haven't published data for this branch yet.</p>
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-accent hover:underline">
            <ArrowLeft size="14" />
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const { data } = branchData;
  const Icon = getBranchIcon(branchMeta.icon);

  return (
    <>
      <section className="relative pt-24 pb-20 md:pb-28 overflow-hidden bg-bg">
        <div className="absolute inset-0 pointer-events-none">
          <svg className="w-full h-full opacity-[0.02]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="branch-grid" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#171717" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#branch-grid)"/>
          </svg>
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full opacity-[0.04]" style={{ backgroundColor: data.color }} />
        </div>

        <div className="relative max-w-4xl mx-auto px-6 lg:px-8">
          <Link to="/" className="inline-flex items-center gap-1.5 text-xs text-muted hover:text-fg mb-8 transition-colors">
            <ArrowLeft size="13" />
            All Branches
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center" style={{ backgroundColor: `${data.color}15` }}>
                <Icon size="24" style={{ color: data.color }} />
              </div>
              <div>
                <div className="text-xs font-semibold tracking-widest uppercase text-muted">Engineering Branch</div>
                <h1 className="text-2xl md:text-3xl font-semibold text-fg">{data.name}</h1>
              </div>
            </div>
          </motion.div>

          <motion.p
            className="text-3xl md:text-5xl lg:text-6xl font-serif text-fg leading-[1.12] tracking-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {data.tagline}
          </motion.p>

          <motion.p
            className="text-base md:text-lg text-muted leading-relaxed max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {data.description}
          </motion.p>
        </div>
      </section>

      <section className="py-16 bg-surface border-y border-border">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-base md:text-lg text-muted leading-relaxed mb-6">
              {data.overview.introduction}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="flex flex-wrap gap-2 mb-8">
              {data.overview.tags.map((tag) => (
                <span key={tag} className="px-3 py-1.5 bg-card border border-border rounded-lg text-xs font-medium text-muted">
                  {tag}
                </span>
              ))}
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            <ScrollReveal delay={0.05}>
              <InfoCard icon={Clock} label="Duration" value={data.overview.duration} color="#2563EB" />
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <InfoCard icon={DollarSign} label="Avg. Fees" value={data.overview.avgFees} color="#059669" />
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <InfoCard icon={Shield} label="Difficulty" value={data.overview.difficulty} color="#D97706" />
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <InfoCard icon={Users} label="Job Openings" value={branchMeta.jobOpenings} color="#7C3AED" />
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-bg">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="flex items-center gap-2 mb-6">
              <GraduationCap size="18" className="text-muted" />
              <span className="text-xs font-semibold tracking-widest uppercase text-muted">Skills Required</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {data.overview.skillsRequired.map((skill) => (
                <span key={skill} className="px-3 py-1.5 bg-surface border border-border rounded-lg text-xs text-muted">
                  {skill}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-surface">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <SectionHeading
            label="Salary Insights"
            title="Salary Breakdown"
            description={data.salary.overview}
          />

          <div className="grid grid-cols-3 gap-4 md:gap-6 mb-10">
            <ScrollReveal delay={0.05}>
              <div className="bg-card border border-border rounded-2xl p-5 md:p-6 text-center">
                <div className="text-xs text-muted mb-1">Average Starting</div>
                <div className="text-xl md:text-2xl font-serif text-fg">{data.salary.averageStarting}</div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="bg-card border border-border rounded-2xl p-5 md:p-6 text-center">
                <div className="text-xs text-muted mb-1">Average Mid-Level</div>
                <div className="text-xl md:text-2xl font-serif text-fg">{data.salary.averageMid}</div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <div className="bg-card border border-border rounded-2xl p-5 md:p-6 text-center">
                <div className="text-xs text-muted mb-1">Average Senior</div>
                <div className="text-xl md:text-2xl font-serif text-fg">{data.salary.averageSenior}</div>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal>
            <div className="bg-card border border-border rounded-2xl overflow-hidden mb-10">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left px-5 py-3.5 text-xs font-semibold text-muted uppercase tracking-wider">Career Stage</th>
                    <th className="text-left px-5 py-3.5 text-xs font-semibold text-muted uppercase tracking-wider">Salary Range</th>
                    <th className="text-left px-5 py-3.5 text-xs font-semibold text-muted uppercase tracking-wider hidden sm:table-cell">Median</th>
                    <th className="text-left px-5 py-3.5 text-xs font-semibold text-muted uppercase tracking-wider hidden md:table-cell">Top 10%</th>
                  </tr>
                </thead>
                <tbody>
                  {data.salary.breakdown.map((row) => (
                    <tr key={row.level} className="border-b border-border/50 last:border-0">
                      <td className="px-5 py-3.5 text-fg font-medium">{row.level}</td>
                      <td className="px-5 py-3.5 text-fg font-semibold">{row.range}</td>
                      <td className="px-5 py-3.5 text-fg hidden sm:table-cell">{row.median}</td>
                      <td className="px-5 py-3.5 text-fg hidden md:table-cell">{row.top10}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>

          <SectionHeading title="Top Paying Companies" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {data.salary.topPayers.map((company) => (
              <ScrollReveal key={company.company} delay={0.05}>
                <div className="flex items-center justify-between bg-card border border-border rounded-xl px-5 py-3.5">
                  <div>
                    <div className="text-sm font-semibold text-fg">{company.company}</div>
                    <div className="text-xs text-muted">{company.sector}</div>
                  </div>
                  <div className="text-sm font-semibold text-fg text-right">{company.range}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-bg">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <SectionHeading
            label="Industries"
            title="Industries Hiring"
            description="Key industries that recruit mechanical engineers in India."
          />

          <div className="space-y-5">
            {data.industries.map((industry) => (
              <ScrollReveal key={industry.name} delay={0.05}>
                <div className="bg-card border border-border rounded-2xl p-6 md:p-7">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-surface flex items-center justify-center shrink-0 text-xs font-bold text-muted">
                        {industry.abbreviation}
                      </div>
                      <div>
                        <h3 className="text-base font-semibold text-fg">{industry.name}</h3>
                        <p className="text-xs text-muted mt-0.5">{industry.description}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 shrink-0 ml-3">
                      <span className="text-xs font-medium text-green bg-green-light px-2 py-1 rounded-full">
                        {industry.growth}
                      </span>
                      <span className="text-xs text-muted bg-surface border border-border px-2 py-1 rounded-full hidden sm:block">
                        {industry.market}
                      </span>
                    </div>
                  </div>

                  <p className="text-sm text-muted leading-relaxed mb-4 pl-[52px]">
                    {industry.detail}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pl-[52px]">
                    {industry.topCompanies.map((c) => (
                      <span key={c} className="px-2.5 py-1 bg-surface border border-border rounded-md text-xs text-muted">
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-surface">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <SectionHeading
            label="Career Opportunities"
            title="Job Roles & Placement Chances"
            description="Common mechanical engineering roles with placement chances by college tier."
          />

          <div className="space-y-5">
            {data.jobRoles.map((role) => (
              <ScrollReveal key={role.title} delay={0.05}>
                <div className="bg-card border border-border rounded-2xl p-6">
                  <div className="mb-4">
                    <div className="flex items-start justify-between gap-3 mb-1">
                      <h3 className="text-sm font-semibold text-fg">{role.title}</h3>
                    </div>
                    <p className="text-xs text-muted mb-2">{role.description}</p>
                    <div className="flex flex-wrap gap-1">
                      {role.tools.map((tool) => (
                        <span key={tool} className="text-[10px] text-muted bg-surface px-1.5 py-0.5 rounded">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-2">
                    {[1, 2, 3].map((tierNum) => {
                      const tierData = role.tiers.find((t) => t.tier === tierNum);
                      if (!tierData) return null;
                      return (
                        <div key={tierNum} className="bg-surface border border-border rounded-xl p-3 text-center">
                          <div className="text-[10px] font-semibold uppercase tracking-wider text-muted mb-1.5">
                            Tier {tierNum}
                          </div>
                          <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${chanceStyles[tierData.chance] || "bg-surface text-muted"}`}>
                            {tierData.chance}
                          </span>
                          <div className="text-xs font-semibold text-fg mt-1.5">{tierData.salary}</div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-bg">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <SectionHeading
            label="Top Companies"
            title="Top Recruiters"
            description={data.topCompanies.overview}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {data.topCompanies.companies.map((company) => (
              <ScrollReveal key={company.name} delay={0.04}>
                <div className="bg-card border border-border rounded-xl px-5 py-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-surface flex items-center justify-center shrink-0 text-xs font-bold text-muted">
                    {company.abbreviation}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-fg">{company.name}</div>
                    <div className="text-[11px] text-muted">{company.location}</div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-surface">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <SectionHeading
            label="College Tier Analysis"
            title="Placement Expectations by College Tier"
            description={data.collegeTiers.overview}
          />

          <div className="space-y-4">
            {data.collegeTiers.tiers.map((tier) => (
              <ScrollReveal key={tier.tier} delay={0.08}>
                <div className="bg-card border border-border rounded-2xl p-6 md:p-7">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-base font-semibold text-fg">{tier.tier}</h3>
                        <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-accent-light text-accent">
                          {tier.placementRate}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-1.5 mb-3">
                        {tier.examples.map((ex) => (
                          <span key={ex} className="text-[11px] text-muted bg-surface px-2 py-0.5 rounded">
                            {ex}
                          </span>
                        ))}
                      </div>
                      <div className="text-xs text-muted">
                        Avg Package: <strong className="text-fg">{tier.averagePackage}</strong>
                      </div>
                    </div>
                  </div>
                  <div className="mb-2">
                    <div className="text-xs text-muted mb-2">Top Recruiters</div>
                    <div className="flex flex-wrap gap-1.5">
                      {tier.topRecruiters.map((r) => (
                        <span key={r} className="px-2.5 py-1 bg-surface border border-border rounded-md text-xs text-muted">
                          {r}
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className="text-xs text-muted italic mt-3">{tier.notes}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-bg">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <SectionHeading
            label="Interview Preparation"
            title="Common Interview Questions"
            description="285+ curated questions used by actual recruiters."
          />

          <ScrollReveal>
            <h3 className="text-sm font-semibold text-fg mb-4 flex items-center gap-2">
              <BarChart3 size="15" className="text-muted" />
              Key Topics
            </h3>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
            {data.interviewTopics.map((topic) => (
              <ScrollReveal key={topic.topic} delay={0.04}>
                <div className="bg-card border border-border rounded-xl px-4 py-3.5 text-center">
                  <div className="text-lg font-serif text-fg">{topic.count}</div>
                  <div className="text-[11px] text-muted">{topic.topic}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <h3 className="text-sm font-semibold text-fg mb-4 flex items-center gap-2">
              <HelpCircle size="15" className="text-muted" />
              Sample Questions
            </h3>
          </ScrollReveal>

          <div className="space-y-2 mb-8">
            {data.interviewQuestions.samples.map((q) => (
              <ScrollReveal key={q.question} delay={0.03}>
                <div className="bg-card border border-border rounded-xl px-5 py-3.5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm text-fg">{q.question}</p>
                      <div className="flex items-center gap-2 mt-1.5">
                        <span className="text-[10px] text-muted bg-surface px-1.5 py-0.5 rounded">{q.topic}</span>
                        <span className="text-[10px] text-muted">{q.difficulty}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <Link
              to={`/${slug}/interview-questions`}
              className="block text-center p-6 bg-surface border border-border rounded-2xl hover:shadow-sm transition-all duration-200 group"
            >
              <p className="text-sm text-muted mb-3">
                {data.interviewQuestions.total} questions available across all key topics
              </p>
              <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-fg text-bg rounded-xl text-sm font-medium hover:opacity-90 transition-all duration-200">
                View All {data.interviewQuestions.total} Questions
                <ChevronRight size="14" />
              </div>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-surface">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <SectionHeading
            label="Learning Resources"
            title="Books, Platforms & Certifications"
            description="Recommended resources to excel in mechanical engineering."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <ScrollReveal>
              <div className="bg-card border border-border rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Book size="16" className="text-muted" />
                  <h3 className="text-sm font-semibold text-fg">Recommended Books</h3>
                </div>
                <div className="space-y-2.5">
                  {data.resources.books.map((book) => (
                    <div key={book.name} className="flex items-start gap-2">
                      <ChevronRight size="12" className="text-subtle mt-0.5 shrink-0" />
                      <div>
                        <div className="text-sm text-fg">{book.name}</div>
                        <div className="text-[11px] text-muted">{book.author}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.08}>
              <div className="bg-card border border-border rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Monitor size="16" className="text-muted" />
                  <h3 className="text-sm font-semibold text-fg">Online Platforms</h3>
                </div>
                <div className="space-y-2.5">
                  {data.resources.platforms.map((platform) => (
                    <div key={platform.name} className="flex items-start gap-2">
                      <ChevronRight size="12" className="text-subtle mt-0.5 shrink-0" />
                      <div>
                        <div className="text-sm text-fg">{platform.name}</div>
                        <div className="text-[11px] text-muted">{platform.description}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-2 mb-3 mt-6">
                  <Award size="16" className="text-muted" />
                  <h3 className="text-sm font-semibold text-fg">Certifications</h3>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {data.resources.certifications.map((cert) => (
                    <span key={cert} className="px-2.5 py-1 bg-surface border border-border rounded-md text-xs text-muted">
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>

          {data.resources.skillLync && data.resources.skillLync.length > 0 && (
            <ScrollReveal>
              <div className="bg-card border border-border rounded-2xl p-6 md:p-7">
                <div className="flex items-center gap-2 mb-5">
                  <Zap size="18" className="text-accent" />
                  <h3 className="text-sm font-semibold text-fg">Skill-Lync Resources</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {data.resources.skillLync.map((resource) => (
                    <div key={resource.title} className="bg-surface border border-border rounded-xl p-4 text-center group hover:shadow-sm transition-all duration-200">
                      <div className="w-10 h-10 rounded-xl bg-card border border-border flex items-center justify-center mx-auto mb-3 group-hover:border-accent/30 transition-colors">
                        <span className="text-xs font-bold text-accent">{resource.abbreviation}</span>
                      </div>
                      <div className="text-sm font-semibold text-fg mb-1">{resource.title}</div>
                      <div className="text-[11px] text-muted leading-relaxed">{resource.description}</div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          )}
        </div>
      </section>

      <section className="py-16 md:py-20 bg-bg">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <SectionHeading
            label="Future Trends"
            title="What's Shaping the Future"
            description="Key trends transforming mechanical engineering in India."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {data.futureTrends.map((trend) => (
              <ScrollReveal key={trend.trend} delay={0.06}>
                <div className="bg-card border border-border rounded-2xl p-6">
                  <div className="flex items-start justify-between mb-3">
                    <Lightbulb size="18" className="text-amber shrink-0 mt-0.5" />
                    <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full shrink-0 ml-3 ${
                      trend.impact === "Very High" ? "bg-green-light text-green" : "bg-amber-light text-amber"
                    }`}>
                      {trend.impact} Impact
                    </span>
                  </div>
                  <h3 className="text-sm font-semibold text-fg mb-2">{trend.trend}</h3>
                  <p className="text-xs text-muted leading-relaxed">{trend.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-bg border-t border-border">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="bg-card border border-border rounded-2xl p-8 md:p-10 text-center">
              <Target size="28" className="text-accent mx-auto mb-4" />
              <h2 className="text-2xl md:text-3xl font-serif text-fg mb-3">
                Is Mechanical Engineering right for you?
              </h2>
              <p className="text-sm text-muted max-w-md mx-auto mb-6">
                Take a quick assessment to understand if your interests and skills align with a career in mechanical engineering.
              </p>
              <button className="inline-flex items-center gap-2 px-6 py-3 bg-fg text-bg rounded-xl text-sm font-medium hover:opacity-90 transition-all duration-200">
                Take the Assessment
                <ChevronRight size="15" />
              </button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {data.relatedBranches.length > 0 && (
        <section className="py-16 md:py-20 bg-surface border-t border-border">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <SectionHeading label="Related Branches" title="Explore Related Engineering Branches" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {data.relatedBranches.map((related) => {
                const meta = getBranchBySlug(related.id);
                const RelatedIcon = meta ? getBranchIcon(meta.icon) : null;
                return (
                  <ScrollReveal key={related.id} delay={0.06}>
                    <Link
                      to={`/${related.id}`}
                      className="flex items-center gap-3 bg-card border border-border rounded-xl px-5 py-4 hover:shadow-sm transition-all duration-200 group"
                    >
                      {meta && RelatedIcon && (
                        <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: `${meta.color}15` }}>
                          <RelatedIcon size="16" style={{ color: meta.color }} />
                        </div>
                      )}
                      <div className="flex-1">
                        <div className="text-sm font-semibold text-fg group-hover:text-accent transition-colors">{related.name}</div>
                      </div>
                      <ExternalLink size="14" className="text-subtle group-hover:text-accent transition-colors shrink-0" />
                    </Link>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </section>
      )}

      <CTASection />
    </>
  );
}
