import { ArrowRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function CTASection() {
  return (
    <section className="py-24 bg-bg border-y border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <ScrollReveal>
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif text-fg mb-4">
              Start Exploring Your Future
            </h2>
            <p className="text-muted text-base md:text-lg mb-8 max-w-lg mx-auto">
              Join thousands of engineering students who are making informed career decisions with Atlas.
            </p>
            <a
              href="#branches"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-fg text-bg rounded-xl text-sm font-medium hover:opacity-90 transition-all duration-200"
            >
              Browse Engineering Branches
              <ArrowRight size="16" />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
