import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import Cal from "@calcom/embed-react";
import { ease } from "../lib/animations";

const calUsername = import.meta.env.VITE_CAL_USERNAME;

export default function BookCall() {
  return (
    <section className="relative pt-24 pb-20 overflow-hidden bg-bg min-h-screen">
      <div className="absolute inset-0 pointer-events-none">
        <svg className="w-full h-full opacity-[0.02]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="book-grid" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#171717" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#book-grid)"/>
        </svg>
      </div>

      <div className="relative max-w-5xl mx-auto px-6 lg:px-8">
        <Link to="/" className="inline-flex items-center gap-1.5 text-xs text-muted hover:text-fg mb-8 transition-colors">
          <ArrowLeft size="13" />
          Back to Home
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          className="mb-10 text-center"
        >
          <h1 className="text-3xl md:text-5xl font-serif text-fg mb-4">
            Book a Call
          </h1>
          <p className="text-muted text-base md:text-lg max-w-xl mx-auto">
            Schedule a 1:1 session for career guidance, mentorship, or just to chat about engineering opportunities.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease }}
          className="rounded-2xl overflow-hidden border border-border bg-card"
        >
          {calUsername ? (
            <Cal
              calLink={calUsername}
              style={{ width: "100%", height: "700px", overflow: "scroll" }}
              config={{ layout: "month_view" }}
            />
          ) : (
            <div className="flex items-center justify-center h-64 text-muted text-sm">
              Cal.com username not configured. Set VITE_CAL_USERNAME in your .env file.
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
