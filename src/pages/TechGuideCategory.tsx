import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "../components/ScrollReveal";
import { laptops, laptopCategories, getLaptopsByCategory } from "../data/tech-guide/laptops";
import { tablets, tabletCategories, getTabletsByCategory } from "../data/tech-guide/tablets";
import { accessories } from "../data/tech-guide/accessories";
import type { LaptopRecommendation } from "../data/tech-guide/laptops";
import type { TabletRecommendation } from "../data/tech-guide/tablets";
import type { AccessoryRecommendation } from "../data/tech-guide/accessories";

type CategoryData = {
  title: string;
  description: string;
  items: (LaptopRecommendation | TabletRecommendation | AccessoryRecommendation)[];
  subcategories?: { slug: string; label: string; description: string }[];
};

const categoryConfig: Record<string, (sub?: string) => CategoryData> = {
  laptops: (sub) => {
    const items = sub ? getLaptopsByCategory(sub) : laptops;
    return { title: "Best Laptops for Engineering Students", description: "Find the right laptop based on your branch, budget, and software requirements.", items, subcategories: laptopCategories };
  },
  phones: () => {
    return { title: "Phone Buying Guide", description: "We're putting together a comprehensive phone guide for engineering students. Check back soon!", items: [] };
  },
  tablets: (sub) => {
    const items = sub ? getTabletsByCategory(sub) : tablets;
    return { title: "Best Tablets for Engineering Students", description: "Perfect tablets for note-taking, reading textbooks, and study sessions.", items, subcategories: tabletCategories };
  },
  accessories: () => ({ title: "Best Accessories for Engineering Students", description: "Monitors, keyboards, mice, headphones, and backpacks to enhance your study setup.", items: accessories }),
};

const typeLabels: Record<string, string> = { laptops: "Laptops", phones: "Phones", tablets: "Tablets", accessories: "Accessories" };

function RatingBar({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex items-center gap-2 text-xs">
      <span className="text-muted w-20 shrink-0">{label}</span>
      <div className="flex-1 h-1.5 bg-surface rounded-full overflow-hidden">
        <div className="h-full bg-accent rounded-full transition-all duration-500" style={{ width: `${value * 10}%` }} />
      </div>
      <span className="text-fg font-medium w-5 text-right">{value}/10</span>
    </div>
  );
}

export default function TechGuideCategory() {
  const { category, subcategory } = useParams<{ category: string; subcategory?: string }>();
  const config = categoryConfig[category || ""];
  if (!config) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-serif text-fg mb-3">Category not found</h1>
          <Link to="/tech-guide" className="inline-flex items-center gap-2 text-sm text-accent hover:underline">
            <ArrowLeft size="14" /> Back to Tech Guide
          </Link>
        </div>
      </div>
    );
  }

  const data = config(subcategory);

  return (
    <>
      <section className="relative pt-24 pb-16 overflow-hidden bg-bg">
        <div className="absolute inset-0 pointer-events-none">
          <svg className="w-full h-full opacity-[0.02]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="tgc-grid" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#171717" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#tgc-grid)"/>
          </svg>
        </div>

        <div className="relative max-w-5xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs text-muted mb-6">
            <Link to="/" className="hover:text-fg transition-colors">Home</Link>
            <ChevronRight size="12" />
            <Link to="/tech-guide" className="hover:text-fg transition-colors">Tech Guide</Link>
            <ChevronRight size="12" />
            <span className="text-fg">{typeLabels[category || ""]}</span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif text-fg leading-[1.12] tracking-tight mb-3">{data.title}</h1>
            <p className="text-base text-muted max-w-2xl mb-8">{data.description}</p>
          </motion.div>

          {data.subcategories && (
            <div className="flex flex-wrap gap-2 mb-10">
              <Link
                to={`/tech-guide/${category}`}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 ${!subcategory ? "bg-fg text-bg" : "bg-surface text-muted hover:text-fg border border-border"}`}
              >
                All
              </Link>
              {data.subcategories.map((sc) => (
                <Link
                  key={sc.slug}
                  to={`/tech-guide/${category}/${sc.slug}`}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 ${subcategory === sc.slug ? "bg-fg text-bg" : "bg-surface text-muted hover:text-fg border border-border"}`}
                >
                  {sc.label}
                </Link>
              ))}
            </div>
          )}

          {data.items.length === 0 ? (
            <div className="text-center py-16 bg-card border border-border rounded-2xl">
              <div className="w-16 h-16 rounded-2xl bg-surface flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
              </div>
              <h3 className="text-lg font-serif text-fg mb-2">Coming Soon</h3>
              <p className="text-sm text-muted max-w-md mx-auto mb-6">
                We're researching the best phones for engineering students across all budgets. This guide will include detailed recommendations, specs comparisons, and branch-specific advice.
              </p>
              <Link to="/tech-guide" className="inline-flex items-center gap-1.5 text-sm text-accent hover:underline">
                <ArrowLeft size="14" /> Back to Tech Guide
              </Link>
            </div>
          ) : (
          <div className="space-y-5">
            {data.items.map((item, i) => (
              <ScrollReveal key={item.id} delay={i * 0.05}>
                <div className="bg-card border border-border rounded-2xl p-6 md:p-7">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-base font-semibold text-fg">{item.name}</h3>
                      <div className="text-sm text-muted mt-1">{item.priceRange}</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div className="space-y-1.5">
                      <div className="text-xs font-semibold text-muted uppercase tracking-wider mb-2">Pros</div>
                      {item.pros.slice(0, 3).map((p) => (
                        <div key={p} className="flex items-start gap-1.5 text-xs text-fg">
                          <span className="text-green mt-0.5 shrink-0">+</span>
                          {p}
                        </div>
                      ))}
                    </div>
                    <div className="space-y-1.5">
                      <div className="text-xs font-semibold text-muted uppercase tracking-wider mb-2">Cons</div>
                      {item.cons.slice(0, 3).map((c) => (
                        <div key={c} className="flex items-start gap-1.5 text-xs text-fg">
                          <span className="text-rose mt-0.5 shrink-0">−</span>
                          {c}
                        </div>
                      ))}
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-muted uppercase tracking-wider mb-2">Ideal For</div>
                      <div className="flex flex-wrap gap-1">
                        {item.idealFor.map((i) => (
                          <span key={i} className="text-[10px] bg-surface border border-border px-2 py-0.5 rounded">{i}</span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {item.idealFor.length > 0 && (
                    <div className="mb-4">
                      <div className="text-xs font-semibold text-muted uppercase tracking-wider mb-2">Ratings</div>
                      <div className="space-y-1 max-w-md">
                        {"performanceRating" in item && <RatingBar value={item.performanceRating} label="Performance" />}
                        {"batteryRating" in item && <RatingBar value={item.batteryRating} label="Battery" />}
                        <RatingBar value={item.valueScore} label="Value" />
                      </div>
                    </div>
                  )}

                  <div>
                    <div className="text-xs font-semibold text-muted uppercase tracking-wider mb-2">Key Specs</div>
                    <div className="flex flex-wrap gap-1.5">
                      {"keySpecs" in item && (item as LaptopRecommendation | TabletRecommendation).keySpecs.map((spec: string) => (
                        <span key={spec} className="text-[10px] bg-surface border border-border px-2 py-0.5 rounded text-muted">{spec}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
          )}
        </div>
      </section>
    </>
  );
}
