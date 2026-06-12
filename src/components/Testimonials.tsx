import ScrollReveal from "./ScrollReveal";

const testimonials = [
  {
    text: "Atlas gave me a clear picture of what to expect from mechanical engineering placements. I knew exactly which companies to target and how to prepare.",
    author: "Rohit S.",
    role: "Mechanical Engineering, NIT Trichy (2024)",
  },
  {
    text: "The salary data and industry insights helped me choose between core and IT roles. I ended up with a great offer from a top automotive company.",
    author: "Priya M.",
    role: "Automobile Engineering, VIT Vellore (2024)",
  },
  {
    text: "Interview questions were spot on. The branch-specific preparation guide made a huge difference in my campus placements.",
    author: "Arun K.",
    role: "Electrical Engineering, IIT Roorkee (2024)",
  },
  {
    text: "I was confused about which branch to choose after 12th. Atlas helped me understand career outcomes across all branches before making my decision.",
    author: "Neha P.",
    role: "First Year, BITS Pilani (2025)",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-bg">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <div className="max-w-xl mb-14">
            <span className="text-xs font-semibold tracking-widest uppercase text-muted mb-3 block">
              Testimonials
            </span>
            <h2 className="text-3xl md:text-4xl font-serif text-fg mb-3">
              From Students, For Students
            </h2>
            <p className="text-muted text-base">
              What engineering students say about their experience with Atlas.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {testimonials.map((t) => (
            <ScrollReveal key={t.author} delay={0.1}>
              <div className="bg-surface border border-border rounded-2xl p-6 md:p-8">
                <svg className="w-6 h-6 text-subtle/40 mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-sm text-muted leading-relaxed mb-6">
                  {t.text}
                </p>
                <div>
                  <div className="text-sm font-semibold text-fg">{t.author}</div>
                  <div className="text-xs text-subtle">{t.role}</div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
