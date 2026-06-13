import { useEffect, lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { pageTransition } from "./lib/animations";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

const Home = lazy(() => import("./pages/Home"));
const Branches = lazy(() => import("./pages/Branches"));
const BranchPage = lazy(() => import("./pages/BranchPage"));
const TechGuide = lazy(() => import("./pages/TechGuide"));
const TechGuideCategory = lazy(() => import("./pages/TechGuideCategory"));
const LaptopAdvisor = lazy(() => import("./pages/LaptopAdvisor"));
const CourseRequirements = lazy(() => import("./pages/CourseRequirements"));
const CourseHardwareGuide = lazy(() => import("./pages/CourseHardwareGuide"));
const Dictionary = lazy(() => import("./pages/Dictionary"));
const DictionaryTerm = lazy(() => import("./pages/DictionaryTerm"));
const InterviewQuestions = lazy(() => import("./pages/InterviewQuestions"));
const About = lazy(() => import("./pages/About"));
const BookCall = lazy(() => import("./pages/BookCall"));

function AppContent() {
  const location = useLocation();
  const hideFooter = location.pathname === "/tech-guide/laptop-advisor";

  return (
    <>
      <ScrollToTop />
      <div className="min-h-screen bg-bg flex flex-col">
        <Navigation />
        <main className="flex-1">
          <AnimatePresence>
            <motion.div
              key={location.pathname}
              initial={pageTransition.initial}
              animate={pageTransition.animate}
              exit={pageTransition.exit}
              transition={pageTransition.transition}
            >
              <Suspense fallback={null}>
                <Routes location={location}>
                  <Route path="/" element={<Home />} />
                  <Route path="/branches" element={<Branches />} />
                  <Route path="/tech-guide" element={<TechGuide />} />
                  <Route path="/tech-guide/laptop-advisor" element={<LaptopAdvisor />} />
                  <Route path="/tech-guide/course-requirements/:course" element={<CourseHardwareGuide />} />
                  <Route path="/tech-guide/course-requirements" element={<CourseRequirements />} />
                  <Route path="/tech-guide/:category" element={<TechGuideCategory />} />
                  <Route path="/tech-guide/:category/:subcategory" element={<TechGuideCategory />} />
                  <Route path="/dictionary" element={<Dictionary />} />
                  <Route path="/dictionary/:slug" element={<DictionaryTerm />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/book" element={<BookCall />} />
                  <Route path="/:slug/interview-questions" element={<InterviewQuestions />} />
                  <Route path="/:slug" element={<BranchPage />} />
                </Routes>
              </Suspense>
            </motion.div>
          </AnimatePresence>
        </main>
        {!hideFooter && <Footer />}
      </div>
    </>
  );
}

export default function App() {
  useEffect(() => {
    const hour = new Date().getHours();
    const isDark = hour < 6 || hour >= 18;
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
