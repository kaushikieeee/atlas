import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-bg/85 backdrop-blur-lg border-b border-border/40">
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-center">
        <Link to="/" className="flex items-center gap-2.5 group">
          <svg
            width="22"
            height="22"
            viewBox="0 0 32 32"
            fill="none"
            className="text-fg transition-all duration-300 group-hover:rotate-45"
          >
            <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="1.5"/>
            <circle cx="16" cy="16" r="6" stroke="currentColor" strokeWidth="1.5"/>
            <line x1="16" y1="2" x2="16" y2="8" stroke="currentColor" strokeWidth="1.5"/>
            <line x1="16" y1="24" x2="16" y2="30" stroke="currentColor" strokeWidth="1.5"/>
            <line x1="2" y1="16" x2="8" y2="16" stroke="currentColor" strokeWidth="1.5"/>
            <line x1="24" y1="16" x2="30" y2="16" stroke="currentColor" strokeWidth="1.5"/>
          </svg>
          <span className="text-2xl sm:text-3xl font-serif text-fg tracking-tight">atlas.</span>
        </Link>
      </nav>
    </header>
  );
}
