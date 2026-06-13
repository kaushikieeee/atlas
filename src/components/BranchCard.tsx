import { Link } from "react-router-dom";
import { ArrowUpRight, Briefcase, IndianRupee, Building2 } from "lucide-react";
import { motion } from "framer-motion";
import { getBranchIcon, type BranchMeta } from "../data/branches";
import { ease } from "../lib/animations";

interface BranchCardProps {
  branch: BranchMeta;
  index: number;
}

export default function BranchCard({ branch, index }: BranchCardProps) {
  const Icon = getBranchIcon(branch.icon);

  return (
    <motion.div
      initial={{ y: 6 }}
      whileInView={{ y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.25, delay: index * 0.03, ease }}
      whileHover={{ y: -3, transition: { duration: 0.2, ease } }}
    >
      <Link
        to={`/${branch.slug}`}
        className="group block bg-card border border-border rounded-2xl p-6 hover:shadow-lg hover:border-accent/20 transition-all duration-300"
      >
        <div className="flex items-start justify-between mb-4">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-sm"
            style={{ backgroundColor: `${branch.color}15` }}
          >
            <Icon size="20" style={{ color: branch.color }} />
          </div>
          <ArrowUpRight
            size="16"
            className="text-subtle opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-y-1 group-hover:translate-y-0"
          />
        </div>

        <h3 className="text-base font-semibold text-fg mb-2 group-hover:text-accent transition-colors duration-200">
          {branch.name}
        </h3>

        <p className="text-sm text-muted leading-relaxed mb-4 line-clamp-2">
          {branch.description}
        </p>

        <div className="space-y-2 pt-3 border-t border-border/50">
          <div className="flex items-center gap-2 text-xs text-muted">
            <IndianRupee size="13" className="text-subtle shrink-0" />
            <span>{branch.salaryRange}</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-muted">
            <Building2 size="13" className="text-subtle shrink-0" />
            <span className="truncate">{branch.hiringIndustries}</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-muted">
            <Briefcase size="13" className="text-subtle shrink-0" />
            <span>{branch.jobOpenings} openings</span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
