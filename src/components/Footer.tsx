

import { useLocation } from "react-router-dom";

export default function Footer() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <footer className="bg-bg border-t border-border py-4">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {!isHome && (
          <div className="flex justify-center mb-5">
            <a
              href="https://forms.gle/3KydHwVRAK831rZP7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-white text-sm font-medium rounded-lg hover:opacity-90 transition-opacity duration-200"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Request a Career Branch
            </a>
          </div>
        )}

        <div className="flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-xs text-subtle order-2 md:order-1">
            Built and maintained by Kaushik.
          </p>
          <p className="text-xs text-subtle order-1 md:order-2">
            Career Intelligence for India
          </p>
        </div>
      </div>
    </footer>
  );
}
