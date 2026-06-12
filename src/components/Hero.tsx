import { Link } from "react-router-dom";
import { ArrowRight, BarChart3, Laptop } from "lucide-react";
import { motion } from "framer-motion";
import { ShootingStars } from "./ui/shooting-stars";
import { StarsBackground } from "./ui/stars-background";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] pt-16 flex items-center overflow-hidden bg-bg">
      <div className="absolute inset-0">
        <StarsBackground />
        <ShootingStars />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-accent-light text-accent text-xs font-medium mb-6">
              <BarChart3 size="14" />
              Career Intelligence
            </span>
          </motion.div>

          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif leading-[1.08] tracking-tight text-fg mb-6"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          >
            The Complete Map of
            <span className="block text-fg">Engineering Careers</span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-muted leading-relaxed max-w-2xl mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
          >
            Explore branches, salaries, top companies, career roadmaps, interview questions, and industry opportunities — all in one place.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                to="/branches"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-fg text-bg rounded-xl text-sm font-medium hover:opacity-90 transition-all duration-200"
              >
                Explore Branches
                <ArrowRight size="16" />
              </Link>
              <Link
                to="/tech-guide"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 border border-border text-fg rounded-xl text-sm font-medium hover:bg-surface transition-all duration-200"
              >
                <Laptop size="16" />
                Laptop Buying Guide
              </Link>
            </div>
            <Link
              to="/about"
              className="block text-center text-xs text-accent hover:underline transition-all duration-200 mt-3"
            >
              about the site and the creator.
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
