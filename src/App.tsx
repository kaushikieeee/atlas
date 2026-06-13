import { useState, useEffect, lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import SplashScreen from "./components/SplashScreen";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import Branches from "./pages/Branches";
import BranchPage from "./pages/BranchPage";
import TechGuide from "./pages/TechGuide";
import TechGuideCategory from "./pages/TechGuideCategory";
import LaptopAdvisor from "./pages/LaptopAdvisor";
import CourseRequirements from "./pages/CourseRequirements";
import CourseHardwareGuide from "./pages/CourseHardwareGuide";
import Dictionary from "./pages/Dictionary";
import DictionaryTerm from "./pages/DictionaryTerm";
import InterviewQuestions from "./pages/InterviewQuestions";

const About = lazy(() => import("./pages/About"));

function AppContent() {
  const location = useLocation();
  const hideFooter = location.pathname === "/tech-guide/laptop-advisor";

  return (
    <>
      <ScrollToTop />
      <div className="min-h-screen bg-bg flex flex-col">
        <Navigation />
        <main className="flex-1">
          <Routes>
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
            <Route path="/about" element={<Suspense fallback={null}><About /></Suspense>} />
            <Route path="/:slug/interview-questions" element={<InterviewQuestions />} />
            <Route path="/:slug" element={<BranchPage />} />
          </Routes>
        </main>
        {!hideFooter && <Footer />}
      </div>
    </>
  );
}

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const hour = new Date().getHours();
    const isDark = hour < 6 || hour >= 18;
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  return (
    <BrowserRouter>
      <AppContent />

      <AnimatePresence>
        {showSplash && <SplashScreen onFinish={() => setShowSplash(false)} />}
      </AnimatePresence>
    </BrowserRouter>
  );
}
