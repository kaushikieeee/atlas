import { motion } from "framer-motion";
import { getBranchIcon } from "../data/branches";
import type { BranchMeta } from "../data/branches";

interface BranchHeroProps {
  branch: BranchMeta;
  tagline: string;
  description: string;
}

export default function BranchHero({ branch, tagline, description }: BranchHeroProps) {
  const Icon = getBranchIcon(branch.icon);

  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-bg">
      <div className="absolute inset-0 pointer-events-none">
        <svg className="w-full h-full opacity-[0.02]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="branch-grid" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#171717" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#branch-grid)"/>
        </svg>
        <div
          className="absolute -top-24 -right-24 w-96 h-96 rounded-full opacity-[0.04]"
          style={{ backgroundColor: branch.color }}
        />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div
              className="w-12 h-12 rounded-2xl flex items-center justify-center"
              style={{ backgroundColor: `${branch.color}15` }}
            >
              <Icon size="24" style={{ color: branch.color }} />
            </div>
            <div>
              <div className="text-xs font-semibold tracking-widest uppercase text-muted">Engineering Branch</div>
              <h1 className="text-2xl md:text-3xl font-semibold text-fg">{branch.name}</h1>
            </div>
          </div>
        </motion.div>

        <motion.p
          className="text-3xl md:text-5xl lg:text-6xl font-serif text-fg leading-[1.12] tracking-tight mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {tagline}
        </motion.p>

        <motion.p
          className="text-base md:text-lg text-muted leading-relaxed max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {description}
        </motion.p>
      </div>
    </section>
  );
}
