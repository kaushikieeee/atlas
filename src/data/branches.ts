import { Settings, Cpu, Radio, Monitor, Building2, FlaskConical, Dna, Car, Plane, Gauge, Database } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface BranchMeta {
  id: string;
  name: string;
  slug: string;
  icon: string;
  salaryRange: string;
  hiringIndustries: string;
  jobOpenings: string;
  description: string;
  gradient: string;
  color: string;
}

export const branches: BranchMeta[] = [
  {
    id: "mechanical-engineering",
    name: "Mechanical Engineering",
    slug: "mechanical-engineering",
    icon: "Settings",
    salaryRange: "₹3.5 - ₹28 LPA",
    hiringIndustries: "Automotive, Aerospace, Manufacturing, Energy",
    jobOpenings: "15,000+",
    description: "Design, analysis, manufacturing, and maintenance of mechanical systems.",
    gradient: "from-stone-50 to-stone-100",
    color: "#78716C"
  },
  {
    id: "electrical-engineering",
    name: "Electrical Engineering",
    slug: "electrical-engineering",
    icon: "Cpu",
    salaryRange: "₹4 - ₹25 LPA",
    hiringIndustries: "Power, Electronics, Telecom, Automation",
    jobOpenings: "12,000+",
    description: "Power generation, transmission, electrical systems, and control engineering.",
    gradient: "from-indigo-50 to-indigo-100",
    color: "#6366F1"
  },
  {
    id: "electronics-and-communication-engineering",
    name: "Electronics & Communication",
    slug: "electronics-and-communication-engineering",
    icon: "Radio",
    salaryRange: "₹4.5 - ₹30 LPA",
    hiringIndustries: "Telecom, Semiconductor, Consumer Electronics, Defence",
    jobOpenings: "18,000+",
    description: "Electronic devices, communication systems, VLSI, and embedded systems.",
    gradient: "from-cyan-50 to-cyan-100",
    color: "#0891B2"
  },
  {
    id: "computer-science-engineering",
    name: "Computer Science & Engineering",
    slug: "computer-science-engineering",
    icon: "Monitor",
    salaryRange: "₹6 - ₹45 LPA",
    hiringIndustries: "IT, Software, Banking, Consulting, Startups",
    jobOpenings: "50,000+",
    description: "Software development, AI/ML, data science, and systems engineering.",
    gradient: "from-blue-50 to-blue-100",
    color: "#2563EB"
  },
  {
    id: "civil-engineering",
    name: "Civil Engineering",
    slug: "civil-engineering",
    icon: "Building2",
    salaryRange: "₹3 - ₹20 LPA",
    hiringIndustries: "Construction, Infrastructure, Real Estate, Government",
    jobOpenings: "10,000+",
    description: "Structural design, construction management, urban planning, and infrastructure.",
    gradient: "from-stone-50 to-stone-100",
    color: "#78716C"
  },
  {
    id: "chemical-engineering",
    name: "Chemical Engineering",
    slug: "chemical-engineering",
    icon: "FlaskConical",
    salaryRange: "₹4 - ₹22 LPA",
    hiringIndustries: "Pharmaceuticals, Oil & Gas, FMCG, Biotech",
    jobOpenings: "8,000+",
    description: "Process design, chemical manufacturing, and materials engineering.",
    gradient: "from-purple-50 to-purple-100",
    color: "#7C3AED"
  },
  {
    id: "biotechnology-engineering",
    name: "Biotechnology",
    slug: "biotechnology-engineering",
    icon: "Dna",
    salaryRange: "₹3.5 - ₹18 LPA",
    hiringIndustries: "Pharma, Healthcare, Research, Agriculture",
    jobOpenings: "6,000+",
    description: "Genetic engineering, bioinformatics, medical devices, and research.",
    gradient: "from-emerald-50 to-emerald-100",
    color: "#059669"
  },
  {
    id: "automobile-engineering",
    name: "Automobile Engineering",
    slug: "automobile-engineering",
    icon: "Car",
    salaryRange: "₹3.5 - ₹20 LPA",
    hiringIndustries: "Automotive, EV, Manufacturing, R&D",
    jobOpenings: "9,000+",
    description: "Vehicle design, powertrain systems, EV technology, and automotive manufacturing.",
    gradient: "from-red-50 to-red-100",
    color: "#DC2626"
  },
  {
    id: "aerospace-engineering",
    name: "Aerospace Engineering",
    slug: "aerospace-engineering",
    icon: "Plane",
    salaryRange: "₹5 - ₹25 LPA",
    hiringIndustries: "Aerospace, Defence, Space Research, Aviation",
    jobOpenings: "5,000+",
    description: "Aircraft design, propulsion, avionics, and space technology.",
    gradient: "from-teal-50 to-teal-100",
    color: "#0F766E"
  },
  {
    id: "instrumentation-engineering",
    name: "Instrumentation Engineering",
    slug: "instrumentation-engineering",
    icon: "Gauge",
    salaryRange: "₹3.5 - ₹18 LPA",
    hiringIndustries: "Process Control, Automation, Oil & Gas, Manufacturing",
    jobOpenings: "7,000+",
    description: "Measurement systems, process control, industrial automation, and sensors.",
    gradient: "from-amber-50 to-amber-100",
    color: "#D97706"
  },
  {
    id: "data-science",
    name: "Data Science",
    slug: "data-science",
    icon: "Database",
    salaryRange: "₹4.5 - ₹95+ LPA",
    hiringIndustries: "BFSI, IT & Tech, E-Commerce, Healthcare, Consulting",
    jobOpenings: "15,000+",
    description: "Math, statistics, and programming to extract insights from large datasets using AI models.",
    gradient: "from-blue-50 to-blue-100",
    color: "#2563EB"
  }
];

export function getBranchIcon(iconName: string): LucideIcon {
  const iconMap: Record<string, LucideIcon> = {
    Settings, Cpu, Radio, Monitor, Building2, FlaskConical, Dna, Car, Plane, Gauge, Database
  };
  return iconMap[iconName] || Settings;
}

export function getBranchBySlug(slug: string): BranchMeta | undefined {
  return branches.find(b => b.slug === slug);
}
