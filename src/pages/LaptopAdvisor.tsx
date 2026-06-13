import { useState, useMemo, useCallback } from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Search, Check, ArrowRight, RotateCcw, Laptop, Cpu, Battery, Monitor, HardDrive, Weight, Sparkles, BookOpen, Code, Gamepad2, Box, Video, AlertTriangle, Shield, Star, Calendar } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ease } from "../lib/animations";
import profiles, { getCourseProfile } from "../data/course-hardware/profiles";
import type { CourseHardwareProfile } from "../data/course-hardware/profiles";
import { laptops } from "../data/tech-guide/laptops";
import type { LaptopRecommendation } from "../data/tech-guide/laptops";

type Step = "course" | "activities" | "budget" | "priorities" | "results";

const allCourses = Object.values(profiles);

const activityOptions = [
  {
    id: "programming", icon: Code, label: "Programming",
    description: "Writing code, software development, data analysis.",
    gpuHeavy: false, cpuHeavy: true,
  },
  {
    id: "ai-ml", icon: Cpu, label: "AI/ML Projects",
    description: "Training AI models, running machine learning code.",
    gpuHeavy: true, cpuHeavy: true,
  },
  {
    id: "cad-3d", icon: Box, label: "3D Design / CAD",
    description: "Creating 3D models (SolidWorks, AutoCAD), simulations.",
    gpuHeavy: true, cpuHeavy: false,
  },
  {
    id: "video-editing", icon: Video, label: "Video Editing",
    description: "Editing videos, graphics, multimedia.",
    gpuHeavy: true, cpuHeavy: false,
  },
  {
    id: "gaming", icon: Gamepad2, label: "Gaming",
    description: "Playing modern 3D games.",
    gpuHeavy: true, cpuHeavy: false,
  },
  {
    id: "office-study", icon: BookOpen, label: "Office & Study",
    description: "Web browsing, documents, presentations, video streaming.",
    gpuHeavy: false, cpuHeavy: false,
  },
  {
    id: "research", icon: Search, label: "Research",
    description: "Reading papers, data analysis, simulations.",
    gpuHeavy: false, cpuHeavy: true,
  },
  {
    id: "mixed", icon: Laptop, label: "Mixed Use",
    description: "A bit of everything above.",
    gpuHeavy: false, cpuHeavy: false,
  },
];

const budgetRanges = [
  { id: "budget", label: "Under ₹50,000", description: "Good for basic coursework and everyday use" },
  { id: "midrange", label: "₹50,000 – ₹80,000", description: "Balanced performance for most engineering needs" },
  { id: "premium", label: "₹80,000 – ₹1.2L", description: "High performance for demanding workloads" },
  { id: "highend", label: "₹1.2L – ₹2L", description: "Premium machines for heavy simulation and rendering" },
  { id: "workstation", label: "Above ₹2L", description: "Professional workstations for intensive computing" },
];

const priorityDefinitions = [
  { key: "battery", icon: Battery, label: "Battery Life", description: "Longer unplugged use, fewer outlet hunts." },
  { key: "portability", icon: Weight, label: "Portability", description: "Light weight and slim profile to carry daily." },
  { key: "gpu", icon: Monitor, label: "Graphics", description: "GPU power for gaming, 3D work, or AI acceleration." },
  { key: "cpu", icon: Cpu, label: "Performance", description: "Raw CPU speed for compiling, simulations, multitasking." },
  { key: "storage", icon: HardDrive, label: "Storage", description: "Disk space for datasets, projects, and software." },
];

const budgetToCategory: Record<string, string[]> = {
  budget: ["budget"],
  midrange: ["budget", "midrange"],
  premium: ["midrange", "premium"],
  highend: ["premium", "workstation"],
  workstation: ["workstation"],
};

function classNames(...classes: (string | false | undefined | null)[]) {
  return classes.filter(Boolean).join(" ");
}

interface CourseCardProps {
  profile: CourseHardwareProfile;
  selected: boolean;
  onClick: () => void;
  index: number;
}

function CourseCard({ profile, selected, onClick, index }: CourseCardProps) {
  return (
    <motion.button
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.03, ease }}
      onClick={onClick}
      className={classNames(
        "text-left w-full bg-card border rounded-xl p-4 transition-all duration-200 hover:shadow-sm",
        selected ? "border-accent ring-1 ring-accent/30" : "border-border hover:border-accent/30"
      )}
    >
      <div className="flex items-center justify-between mb-1">
        <span className="text-[10px] font-semibold uppercase tracking-wider text-muted">{profile.category}</span>
        {selected && (
          <div className="w-5 h-5 rounded-full bg-accent flex items-center justify-center">
            <Check size="12" className="text-white" />
          </div>
        )}
      </div>
      <h3 className="text-sm font-semibold text-fg">{profile.name}</h3>
      <p className="text-xs text-muted line-clamp-1 mt-0.5">{profile.description}</p>
    </motion.button>
  );
}

interface StepIndicatorProps {
  current: number;
  total: number;
}

function StepIndicator({ current, total }: StepIndicatorProps) {
  return (
    <div className="flex items-center justify-center gap-2 mb-8">
      {Array.from({ length: total }).map((_, i) => (
        <div key={i} className="flex items-center gap-2">
          <div className={classNames(
            "w-7 h-7 rounded-full flex items-center justify-center text-xs font-medium transition-all duration-300",
            i < current ? "bg-accent text-white" : i === current ? "bg-fg text-bg" : "bg-surface text-muted border border-border"
          )}>
            {i < current ? <Check size="14" /> : i + 1}
          </div>
          {i < total - 1 && (
            <div className={classNames("w-8 h-[2px] transition-all duration-300", i < current ? "bg-accent" : "bg-border")} />
          )}
        </div>
      ))}
    </div>
  );
}

function getSpecAdvice(profile: CourseHardwareProfile) {
  const hw = profile.hardwareRequirements;
  const isGPULight = profile.gpuNeed <= 3;

  const processorAdvice = `Look for a ${hw.processor.text}. ${hw.processor.detail.split(".")[0]}. For your course, ${profile.cpuNeed >= 7 ? "a high-core-count processor is important because you'll run simulations or compile code regularly." : "a modern mid-range processor is sufficient for daily coursework."}`;

  const ramAdvice = `Aim for ${hw.ram.text}. ${hw.ram.detail.split(".")[0]}. ${profile.gpuNeed >= 7 ? "CAD and simulation software can consume a lot of memory, so leaning toward the higher end is wise." : profile.name.toLowerCase().includes("ai") || profile.name.toLowerCase().includes("data") ? "Datasets and model training benefit from extra memory." : "Most coursework runs comfortably within this range."}`;

  const storageAdvice = `Get an SSD with at least ${hw.storage.text}. ${hw.storage.detail.split(".")[0]}. NVMe SSD is essential — it makes your laptop feel snappy and software load times fast.`;

  const gpuAdvice = isGPULight
    ? `For your course, integrated graphics are sufficient. ${hw.gpu.text}. No need to spend extra on a dedicated GPU unless you plan to game or do AI/ML work on the side.`
    : `A dedicated GPU is important for your coursework. ${hw.gpu.text}. ${profile.name.toLowerCase().includes("mech") || profile.name.toLowerCase().includes("auto") || profile.name.toLowerCase().includes("civil") || profile.name.toLowerCase().includes("aero") ? "CAD and simulation tools like SolidWorks and ANSYS rely heavily on GPU acceleration." : profile.name.toLowerCase().includes("archi") || profile.name.toLowerCase().includes("visual") ? "Rendering and 3D modeling software need GPU power to work smoothly." : "Look for at least 6 GB VRAM for comfortable headroom."}`;

  const batteryAdvice = profile.batteryImportance >= 7
    ? `You'll want ${hw.battery.text}. Since you'll likely move between classes, labs, and libraries, prioritising battery life is practical. Apple Silicon MacBooks and efficient Windows ultrabooks excel here.`
    : `Battery life of ${hw.battery.text} is typical for your type of workload. Heavy simulation and CAD work is usually done while plugged in, so battery is less of a concern.`;

  return { processorAdvice, ramAdvice, storageAdvice, gpuAdvice, batteryAdvice };
}

function getActivityLabel(activityId: string): string {
  const found = activityOptions.find(a => a.id === activityId);
  return found ? found.label : activityId;
}

export default function LaptopAdvisor() {
  const [step, setStep] = useState<Step>("course");
  const [selectedCourseId, setSelectedCourseId] = useState<string>("");
  const [selectedActivities, setSelectedActivities] = useState<string[]>([]);
  const [selectedBudget, setSelectedBudget] = useState<string>("");
  const [priorities, setPriorities] = useState<Record<string, number>>({
    battery: 5, portability: 5, gpu: 5, cpu: 5, storage: 5,
  });
  const [courseQuery, setCourseQuery] = useState("");

  const steps: Step[] = ["course", "activities", "budget", "priorities", "results"];
  const currentStepIndex = steps.indexOf(step);

  const filteredCourses = useMemo(() => {
    if (!courseQuery) return allCourses;
    const q = courseQuery.toLowerCase();
    return allCourses.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.id.includes(q)
    );
  }, [courseQuery]);

  const selectedProfile = useMemo(
    () => (selectedCourseId ? getCourseProfile(selectedCourseId) : undefined),
    [selectedCourseId]
  );

  const budgetLabel = useMemo(
    () => budgetRanges.find(b => b.id === selectedBudget)?.label || "",
    [selectedBudget]
  );

  const handleSelectCourse = useCallback((id: string) => {
    setSelectedCourseId(id);
  }, []);

  const toggleActivity = useCallback((id: string) => {
    setSelectedActivities((prev) =>
      prev.includes(id) ? prev.filter((a) => a !== id) : [...prev, id]
    );
  }, []);

  const handlePriorityChange = useCallback((key: string, value: number) => {
    setPriorities((prev) => ({ ...prev, [key]: value }));
  }, []);

  const reset = useCallback(() => {
    setStep("course");
    setSelectedCourseId("");
    setSelectedActivities([]);
    setSelectedBudget("");
    setPriorities({ battery: 5, portability: 5, gpu: 5, cpu: 5, storage: 5 });
    setCourseQuery("");
  }, []);

  const goNext = useCallback(() => {
    const idx = steps.indexOf(step);
    if (idx < steps.length - 1) setStep(steps[idx + 1]);
  }, [step]);

  const goBack = useCallback(() => {
    const idx = steps.indexOf(step);
    if (idx > 0) setStep(steps[idx - 1]);
  }, [step]);

  const topRecommendation = useMemo((): LaptopRecommendation | null => {
    if (!selectedProfile) return null;

    const courseGpuNeed = selectedProfile.gpuNeed;
    const courseCpuNeed = selectedProfile.cpuNeed;
    const courseBatteryImportance = selectedProfile.batteryImportance;
    const coursePortabilityImportance = selectedProfile.portabilityImportance;
    const courseStorageImportance = selectedProfile.storageImportance;

    const userGpuPriority = priorities.gpu / 10;
    const userCpuPriority = priorities.cpu / 10;
    const userBatteryPriority = priorities.battery / 10;
    const userPortabilityPriority = priorities.portability / 10;
    const userStoragePriority = priorities.storage / 10;

    const finalGpuWeight = (courseGpuNeed / 10) * 0.5 + userGpuPriority * 0.5;
    const finalCpuWeight = (courseCpuNeed / 10) * 0.5 + userCpuPriority * 0.5;
    const finalBatteryWeight = (courseBatteryImportance / 10) * 0.5 + userBatteryPriority * 0.5;
    const finalPortabilityWeight = (coursePortabilityImportance / 10) * 0.5 + userPortabilityPriority * 0.5;
    const finalStorageWeight = (courseStorageImportance / 10) * 0.5 + userStoragePriority * 0.5;

    const computeScore = (laptop: LaptopRecommendation): number => {
      const gpuScore = (laptop.performanceRating / 10) * finalGpuWeight * 2;
      const cpuScore = (laptop.performanceRating / 10) * finalCpuWeight * 2;
      const batteryScore = (laptop.batteryRating / 10) * finalBatteryWeight * 2;
      const portabilityScore = laptop.category === "workstation" ? 0.3 :
        laptop.category === "premium" ? 0.7 :
        laptop.keySpecs.some(s => s.includes("1.") || s.includes("1.2")) ? 0.9 : 0.5;
      const portabilityFinal = portabilityScore * finalPortabilityWeight * 2;
      const storageScore = laptop.keySpecs.some(s => s.includes("1TB") || s.includes("1 T")) ? 1 :
        laptop.keySpecs.some(s => s.includes("512")) ? 0.7 : 0.4;
      const storageFinal = storageScore * finalStorageWeight * 2;
      const valueScore = (laptop.valueScore / 10) * 0.5;

      const allowedCategories = budgetToCategory[selectedBudget] || ["budget", "midrange", "premium", "workstation"];
      if (!allowedCategories.includes(laptop.category)) return -1;

      return gpuScore + cpuScore + batteryScore + portabilityFinal + storageFinal + valueScore;
    };

    const scored = laptops
      .map((l) => ({ laptop: l, score: computeScore(l) }))
      .filter((l) => l.score > 0);

    if (selectedActivities.length > 0) {
      const gpuActivities = selectedActivities.filter(id => activityOptions.find(a => a.id === id)?.gpuHeavy);
      const cpuActivities = selectedActivities.filter(id => activityOptions.find(a => a.id === id)?.cpuHeavy);
      scored.forEach((s) => {
        if (gpuActivities.length > 0) s.score += s.laptop.performanceRating * 0.05;
        if (cpuActivities.length > 0) s.score += s.laptop.performanceRating * 0.03;
      });
    }

    scored.sort((a, b) => b.score - a.score);
    return scored.length > 0 ? scored[0].laptop : null;
  }, [selectedProfile, priorities, selectedBudget, selectedActivities]);

  const specAdvice = useMemo(
    () => selectedProfile ? getSpecAdvice(selectedProfile) : null,
    [selectedProfile]
  );

  const renderCourseStep = () => (
    <motion.div
      key="course"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3, ease }}
      className="flex flex-col flex-1 min-h-0"
    >
      <div className="shrink-0">
        <h2 className="text-2xl md:text-3xl font-serif text-fg mb-2">What are you planning to study?</h2>
        <p className="text-sm text-muted mb-5">Start typing your degree or major. The advisor shows matching entries as you type.</p>

        <div className="relative mb-4">
          <Search size="15" className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted" />
          <input
            type="text"
            placeholder="e.g. mechanical, AI, architecture, civil..."
            value={courseQuery}
            onChange={(e) => setCourseQuery(e.target.value)}
            className="w-full pl-9 pr-3.5 py-3 bg-card border border-border rounded-xl text-sm text-fg placeholder:text-muted focus:outline-none focus:border-accent/50 transition-colors"
          />
        </div>

        {!courseQuery && (
          <p className="text-xs text-muted mb-4">
            Examples: Mechanical Engineering, Computer Science, AI &amp; ML, Architecture, Civil, Commerce, Medicine...
          </p>
        )}
      </div>

      {courseQuery && (
        <div className="flex-1 min-h-0 overflow-y-auto grid grid-cols-1 sm:grid-cols-2 gap-3 pr-1">
          {filteredCourses.length === 0 ? (
            <p className="text-sm text-muted col-span-full text-center py-8">No courses found. Try a different search.</p>
          ) : (
            filteredCourses.map((profile, i) => (
              <CourseCard
                key={profile.id}
                profile={profile}
                selected={selectedCourseId === profile.id}
                onClick={() => handleSelectCourse(profile.id)}
                index={i}
              />
            ))
          )}
        </div>
      )}

      {!courseQuery && <div className="flex-1" />}

      <div className="flex justify-end mt-4 shrink-0">
        <button
          onClick={goNext}
          disabled={!selectedCourseId}
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-fg text-bg rounded-xl text-sm font-medium disabled:opacity-30 disabled:cursor-not-allowed hover:opacity-90 transition-all duration-200"
        >
          Next: Your Activities
          <ArrowRight size="15" />
        </button>
      </div>
    </motion.div>
  );

  const renderActivitiesStep = () => (
    <motion.div
      key="activities"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3, ease }}
      className="flex flex-col flex-1 min-h-0"
    >
      <div className="shrink-0">
        <h2 className="text-2xl md:text-3xl font-serif text-fg mb-2">What will you spend most of your time doing?</h2>
        <p className="text-sm text-muted mb-5">Select all that apply. Each choice helps us understand what hardware matters most to you.</p>
      </div>

      <div className="flex-1 min-h-0 overflow-y-auto space-y-2.5 pr-1">
        {activityOptions.map((activity) => {
          const Icon = activity.icon;
          const isSelected = selectedActivities.includes(activity.id);
          return (
            <button
              key={activity.id}
              onClick={() => toggleActivity(activity.id)}
              className={classNames(
                "w-full text-left flex items-start gap-4 bg-card border rounded-xl p-4 transition-all duration-200",
                isSelected ? "border-accent ring-1 ring-accent/30" : "border-border hover:border-accent/30"
              )}
            >
              <div className={classNames(
                "w-10 h-10 rounded-xl flex items-center justify-center shrink-0 mt-0.5 transition-colors",
                isSelected ? "bg-accent-light text-accent" : "bg-surface text-muted"
              )}>
                <Icon size="18" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-0.5">
                  <span className="text-sm font-semibold text-fg">{activity.label}</span>
                  <div className={classNames(
                    "w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all shrink-0 ml-2",
                    isSelected ? "border-accent bg-accent" : "border-border"
                  )}>
                    {isSelected && <Check size="12" className="text-white" />}
                  </div>
                </div>
                <p className="text-xs text-muted">{activity.description}</p>
              </div>
            </button>
          );
        })}
      </div>

      <div className="flex items-center justify-between mt-4 shrink-0">
        <button onClick={goBack} className="text-sm text-muted hover:text-fg transition-colors">
          ← Back
        </button>
        <button
          onClick={goNext}
          disabled={selectedActivities.length === 0}
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-fg text-bg rounded-xl text-sm font-medium disabled:opacity-30 disabled:cursor-not-allowed hover:opacity-90 transition-all duration-200"
        >
          Next: Budget
          <ArrowRight size="15" />
        </button>
      </div>
    </motion.div>
  );

  const renderBudgetStep = () => (
    <motion.div
      key="budget"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3, ease }}
      className="flex flex-col flex-1 min-h-0"
    >
      <div className="shrink-0">
        <h2 className="text-2xl md:text-3xl font-serif text-fg mb-2">What is your budget?</h2>
        <p className="text-sm text-muted mb-1">Pick the range you are comfortable spending. Don't worry if you are not sure — we will only recommend laptops within your range.</p>
        <p className="text-xs text-accent mb-5">Your choice helps narrow down realistic options.</p>
      </div>

      <div className="flex-1 min-h-0 overflow-y-auto space-y-2.5 pr-1">
        {budgetRanges.map((budget) => (
          <button
            key={budget.id}
            onClick={() => setSelectedBudget(budget.id)}
            className={classNames(
              "w-full text-left bg-card border rounded-xl p-4 transition-all duration-200",
              selectedBudget === budget.id
                ? "border-accent ring-1 ring-accent/30"
                : "border-border hover:border-accent/30"
            )}
          >
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm font-semibold text-fg">{budget.label}</span>
              {selectedBudget === budget.id && (
                <div className="w-5 h-5 rounded-full bg-accent flex items-center justify-center">
                  <Check size="12" className="text-white" />
                </div>
              )}
            </div>
            <p className="text-xs text-muted">{budget.description}</p>
          </button>
        ))}
      </div>

      <div className="flex items-center justify-between mt-4 shrink-0">
        <button onClick={goBack} className="text-sm text-muted hover:text-fg transition-colors">
          ← Back
        </button>
        <button
          onClick={goNext}
          disabled={!selectedBudget}
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-fg text-bg rounded-xl text-sm font-medium disabled:opacity-30 disabled:cursor-not-allowed hover:opacity-90 transition-all duration-200"
        >
          Next: Priorities
          <ArrowRight size="15" />
        </button>
      </div>
    </motion.div>
  );

  const renderPrioritiesStep = () => (
    <motion.div
      key="priorities"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3, ease }}
      className="flex flex-col flex-1 min-h-0"
    >
      <div className="shrink-0">
        <h2 className="text-2xl md:text-3xl font-serif text-fg mb-2">What matters most for your laptop?</h2>
        <p className="text-sm text-muted mb-5">Move each slider to reflect your priorities. Don't overthink it — defaults are fine if you are unsure.</p>
      </div>

      <div className="flex-1 min-h-0 overflow-y-auto space-y-3 pr-1">
        {priorityDefinitions.map(({ key, icon: Icon, label, description }) => (
          <div key={key} className="bg-card border border-border rounded-xl p-4">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 rounded-lg bg-accent-light flex items-center justify-center">
                <Icon size="16" className="text-accent" />
              </div>
              <div>
                <span className="text-sm font-semibold text-fg">{label}</span>
                <p className="text-[10px] text-muted">{description}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[10px] text-muted w-12 text-right">Low</span>
              <input
                type="range"
                min="1"
                max="10"
                value={priorities[key]}
                onChange={(e) => handlePriorityChange(key, parseInt(e.target.value))}
                className="flex-1 h-1.5 bg-surface rounded-full appearance-none cursor-pointer accent-accent [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-accent [&::-webkit-slider-thumb]:shadow-sm"
              />
              <span className="text-[10px] text-muted w-12">High</span>
              <span className="text-sm font-medium text-fg w-6 text-center">{priorities[key]}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between mt-4 shrink-0">
        <button onClick={goBack} className="text-sm text-muted hover:text-fg transition-colors">
          ← Back
        </button>
        <button
          onClick={goNext}
          className="inline-flex items-center gap-2 px-6 py-2.5 bg-fg text-bg rounded-xl text-sm font-medium hover:opacity-90 transition-all duration-200"
        >
          Get My Recommendation
          <Sparkles size="15" />
        </button>
      </div>
    </motion.div>
  );

  const renderResultsStep = () => {
    const profile = selectedProfile;
    const topSpec = topRecommendation;
    const advice = specAdvice;

    return (
      <motion.div
        key="results"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.3, ease }}
        className="flex flex-col flex-1 min-h-0"
      >
        <div className="text-center mb-5 shrink-0">
          <div className="w-14 h-14 rounded-2xl bg-accent-light flex items-center justify-center mx-auto mb-3">
            <Sparkles size="28" className="text-accent" />
          </div>
          <h2 className="text-2xl md:text-3xl font-serif text-fg mb-2">Your Personalised Advice</h2>
          <p className="text-sm text-muted">
            Based on your choices as a {profile?.name} student within {budgetLabel}.
          </p>
        </div>

        {!profile || !advice ? (
          <div className="flex-1 min-h-0 overflow-y-auto flex items-center justify-center">
            <div className="text-center py-12">
              <p className="text-sm text-muted mb-4">We couldn't generate advice for your criteria. Try adjusting your budget or priorities.</p>
              <button onClick={reset} className="text-sm text-accent hover:underline">Start over</button>
            </div>
          </div>
        ) : (
          <>
          <div className="flex-1 min-h-0 overflow-y-auto space-y-5 pr-1">
            <div className="bg-surface border border-border rounded-xl p-5">
              <h3 className="text-sm font-semibold text-fg mb-2 flex items-center gap-2">
                <BookOpen size="15" className="text-accent" />
                Your Profile Summary
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                As a <strong className="text-fg">{profile.name}</strong> student, you will spend most of your time on:
              </p>
              <ul className="mt-2 space-y-1">
                {selectedActivities.map(id => (
                  <li key={id} className="flex items-start gap-2 text-sm text-fg">
                    <Check size="13" className="text-green mt-0.5 shrink-0" />
                    {getActivityLabel(id)}
                  </li>
                ))}
              </ul>
              <p className="text-sm text-muted leading-relaxed mt-3">{profile.typicalWorkload}</p>
            </div>

            <div className="bg-surface border border-border rounded-xl p-5">
              <h3 className="text-sm font-semibold text-fg mb-3 flex items-center gap-2">
                <Code size="15" className="text-accent" />
                Likely Software &amp; Tasks
              </h3>
              <div className="flex flex-wrap gap-1.5 mb-3">
                {profile.commonSoftware.map((sw) => (
                  <span key={sw} className="text-[10px] bg-card border border-border px-2 py-0.5 rounded text-muted">{sw}</span>
                ))}
              </div>
              <p className="text-xs text-muted">
                Plus everyday tools like Microsoft Office, Zoom, web browsers, and media players — these run well on almost any modern laptop.
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-5">
              <h3 className="text-sm font-semibold text-fg mb-4 flex items-center gap-2">
                <Shield size="15" className="text-accent" />
                Your Recommended Hardware
              </h3>

              <div className="space-y-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Cpu size="14" className="text-accent" />
                    <span className="text-xs font-semibold text-fg">Processor (CPU)</span>
                  </div>
                  <p className="text-xs text-muted leading-relaxed">{advice.processorAdvice}</p>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <HardDrive size="14" className="text-accent" />
                    <span className="text-xs font-semibold text-fg">Memory (RAM)</span>
                  </div>
                  <p className="text-xs text-muted leading-relaxed">{advice.ramAdvice}</p>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Monitor size="14" className="text-accent" />
                    <span className="text-xs font-semibold text-fg">Graphics (GPU)</span>
                  </div>
                  <p className="text-xs text-muted leading-relaxed">{advice.gpuAdvice}</p>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <HardDrive size="14" className="text-accent" />
                    <span className="text-xs font-semibold text-fg">Storage</span>
                  </div>
                  <p className="text-xs text-muted leading-relaxed">{advice.storageAdvice}</p>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Battery size="14" className="text-accent" />
                    <span className="text-xs font-semibold text-fg">Battery &amp; Portability</span>
                  </div>
                  <p className="text-xs text-muted leading-relaxed">{advice.batteryAdvice}</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-accent/[0.04] to-transparent border border-accent/20 rounded-xl p-5">
              <h3 className="text-sm font-semibold text-fg mb-2 flex items-center gap-2">
                <Sparkles size="15" className="text-accent" />
                Why This Advice
              </h3>
              <p className="text-xs text-fg leading-relaxed">{profile.whyRecommendation}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="bg-card border border-rose/20 rounded-xl p-4">
                <h3 className="text-xs font-semibold text-rose mb-2 flex items-center gap-1.5">
                  <AlertTriangle size="13" />
                  What to Avoid
                </h3>
                <ul className="space-y-1.5">
                  {profile.thingsToAvoid.slice(0, 4).map((item) => (
                    <li key={item} className="flex items-start gap-1.5 text-[11px] text-fg">
                      <span className="text-rose shrink-0 mt-0.5">−</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-card border border-green/20 rounded-xl p-4">
                <h3 className="text-xs font-semibold text-green mb-2 flex items-center gap-1.5">
                  <Check size="13" />
                  Not Needed
                </h3>
                <ul className="space-y-1.5">
                  {profile.notNeeded.slice(0, 4).map((item) => (
                    <li key={item} className="flex items-start gap-1.5 text-[11px] text-fg">
                      <span className="text-green shrink-0 mt-0.5">+</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {topSpec && (
              <div className="bg-surface border border-border rounded-xl p-4">
                <h3 className="text-xs font-semibold text-fg mb-2 flex items-center gap-1.5">
                  <Star size="13" className="text-amber" />
                  What Seniors in {profile.name} Often Choose
                </h3>
                <div className="flex flex-wrap gap-1.5 mb-2">
                  {topSpec.keySpecs.map((spec) => (
                    <span key={spec} className="text-[10px] bg-card border border-border px-2 py-0.5 rounded text-muted">{spec}</span>
                  ))}
                </div>
                <div className="flex items-center gap-3 text-[10px] text-muted">
                  <span>Performance: {topSpec.performanceRating}/10</span>
                  <span>Battery: {topSpec.batteryRating}/10</span>
                  <span>Value: {topSpec.valueScore}/10</span>
                </div>
                <p className="text-[11px] text-muted mt-2">
                  Students in your field commonly choose machines in the <strong className="text-fg">{topSpec.priceRange}</strong> range with specs similar to the above. This aligns with what we recommend for your workload.
                </p>
              </div>
            )}

            {profile.compareWith.length > 0 && (
              <div className="bg-card border border-border rounded-xl p-4">
                <h3 className="text-xs font-semibold text-fg mb-2 flex items-center gap-1.5">
                  <ArrowRight size="13" className="text-accent" />
                  Compare With Others
                </h3>
                <div className="space-y-2">
                  {profile.compareWith.slice(0, 2).map((cmp) => (
                    <p key={cmp.course} className="text-[11px] text-muted leading-relaxed">
                      <strong className="text-fg">vs {cmp.course}:</strong> {cmp.text}
                    </p>
                  ))}
                </div>
              </div>
            )}

          </div>

          <div className="shrink-0 pt-3">
            <div className="bg-card border border-accent/20 rounded-xl p-4 text-center">
              <p className="text-xs text-muted mb-3">
                Want more detail? See the full hardware guide for your course, or start the advisor again with different choices.
              </p>
              <div className="flex items-center justify-center gap-3">
                <button
                  onClick={reset}
                  className="inline-flex items-center gap-1.5 px-4 py-2 border border-border text-fg rounded-lg text-xs font-medium hover:bg-surface transition-all duration-200"
                >
                  <RotateCcw size="12" />
                  Start Over
                </button>
                <Link
                  to={`/tech-guide/course-requirements/${selectedCourseId}`}
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-fg text-bg rounded-lg text-xs font-medium hover:opacity-90 transition-all duration-200"
                >
                  View Full Course Guide
                  <ArrowRight size="12" />
                </Link>
              </div>
            </div>
            <Link
              to="/book"
              className="mt-3 flex items-center justify-center gap-2 p-3.5 bg-surface border border-border rounded-xl text-sm text-muted hover:text-fg hover:border-accent/20 transition-all duration-200"
            >
              <Calendar size="14" className="text-accent" />
              Still unsure? Book a 1:1 call with Kaushik
            </Link>
          </div>
          </>
        )}
      </motion.div>
    );
  };

  return (
    <section className="relative h-dvh overflow-hidden bg-bg">
      <div className="absolute inset-0 pointer-events-none">
        <svg className="w-full h-full opacity-[0.02]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="la-grid" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#171717" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#la-grid)"/>
        </svg>
      </div>

      <div className="relative h-full max-w-2xl mx-auto px-6 lg:px-8 flex flex-col pt-20 pb-8">
        <div className="flex items-center gap-2 text-xs text-muted mb-6 shrink-0">
          <Link to="/" className="hover:text-fg transition-colors">Home</Link>
          <ChevronRight size="12" />
          <Link to="/tech-guide" className="hover:text-fg transition-colors">Tech Guide</Link>
          <ChevronRight size="12" />
          <span className="text-fg">Laptop Advisor</span>
        </div>

        <div className="shrink-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
          >
            <div className="flex items-center gap-2 mb-3">
              <Laptop size="22" className="text-accent" />
              <span className="text-xs font-semibold tracking-widest uppercase text-muted">Laptop Advisor</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif text-fg leading-[1.08] tracking-tight mb-5">
              Find Your Perfect Student Laptop
            </h1>
          </motion.div>

          <StepIndicator current={currentStepIndex} total={steps.length} />
        </div>

        <div className="flex-1 min-h-0 bg-card border border-border rounded-2xl p-6 md:p-8 flex flex-col">
          <AnimatePresence mode="wait">
            {step === "course" && renderCourseStep()}
            {step === "activities" && renderActivitiesStep()}
            {step === "budget" && renderBudgetStep()}
            {step === "priorities" && renderPrioritiesStep()}
            {step === "results" && renderResultsStep()}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
