export interface LaptopRecommendation {
  id: string;
  name: string;
  category: "budget" | "midrange" | "premium" | "workstation";
  priceRange: string;
  pros: string[];
  cons: string[];
  idealFor: string[];
  performanceRating: number;
  batteryRating: number;
  valueScore: number;
  keySpecs: string[];
  affiliateLink?: string;
}

export const laptopCategories = [
  { slug: "budget", label: "Under ₹50,000", description: "Affordable laptops for daily engineering tasks, coding, and note-taking." },
  { slug: "midrange", label: "₹50,000 - ₹90,000", description: "Balanced performance for programming, light CAD, and project work." },
  { slug: "premium", label: "₹90,000 - ₹1,50,000", description: "High-performance machines for heavy workloads, VMs, and multitasking." },
  { slug: "workstation", label: "Above ₹1,50,000", description: "Professional workstations for CAD, simulation, rendering, and FEA." },
  { slug: "cad", label: "Best for CAD / Mechanical Engineering", description: "Optimised for SolidWorks, CATIA, AutoCAD, ANSYS, and 3D modelling." },
  { slug: "cse", label: "Best for CSE Students", description: "Built for programming, AI/ML, databases, and software development." },
];

export const laptops: LaptopRecommendation[] = [
  {
    id: "asus-vivobook-14",
    name: "ASUS Vivobook 14 (X1404)",
    category: "budget",
    priceRange: "₹38,000 - ₹45,000",
    pros: ["Lightweight at 1.4 kg", "Good battery life", "Decent processor for coding", "Affordable price"],
    cons: ["No dedicated GPU", "Build feels slightly plasticky", "Average display"],
    idealFor: ["First-year engineering students", "Coding and web browsing", "General academic use"],
    performanceRating: 6,
    batteryRating: 7,
    valueScore: 8,
    keySpecs: ["Intel i5-1235U / AMD R5-5500U", "8GB RAM", "512GB SSD", "14-inch FHD Display", "Integrated Graphics"],
  },
  {
    id: "lenovo-ideapad-slim-5",
    name: "Lenovo IdeaPad Slim 5",
    category: "budget",
    priceRange: "₹42,000 - ₹50,000",
    pros: ["Excellent build quality for the price", "Good keyboard", "Solid performance", "USB-C charging"],
    cons: ["Average speakers", "RAM not upgradeable in some variants"],
    idealFor: ["Students needing durability", "Everyday academic work", "Light programming"],
    performanceRating: 7,
    batteryRating: 7,
    valueScore: 8,
    keySpecs: ["AMD R5-7530U", "8GB RAM", "512GB SSD", "15.6-inch FHD Display", "Integrated Graphics"],
  },
  {
    id: "hp-15s",
    name: "HP 15s (Ryzen 5)",
    category: "budget",
    priceRange: "₹37,000 - ₹43,000",
    pros: ["Affordable Ryzen 5 performance", "Full HD display", "HP reliability", "Good port selection"],
    cons: ["Heavy at 1.7 kg", "Average battery", "TN panel on some variants"],
    idealFor: ["Budget-conscious students", "Basic CAD learning", "Everyday use"],
    performanceRating: 6,
    batteryRating: 6,
    valueScore: 7,
    keySpecs: ["AMD R5-5500U", "8GB RAM", "512GB SSD", "15.6-inch FHD Display", "Integrated Vega Graphics"],
  },
  {
    id: "acer-aspire-7",
    name: "Acer Aspire 7",
    category: "midrange",
    priceRange: "₹55,000 - ₹65,000",
    pros: ["Dedicated GTX 1650 GPU", "Good for light CAD and gaming", "144Hz display option", "Upgradeable RAM"],
    cons: ["Heavy and bulky", "Average battery life", "Plasticky trackpad"],
    idealFor: ["Mechanical engineering students", "Light CAD and SolidWorks", "Students who game occasionally"],
    performanceRating: 8,
    batteryRating: 5,
    valueScore: 8,
    keySpecs: ["Intel i5-12450H", "8GB RAM", "512GB SSD", "15.6-inch FHD 144Hz", "GTX 1650 4GB"],
  },
  {
    id: "dell-inspiron-15",
    name: "Dell Inspiron 15 3520",
    category: "midrange",
    priceRange: "₹52,000 - ₹60,000",
    pros: ["Excellent Dell service network", "Good build quality", "Comfortable keyboard", "Reliable performance"],
    cons: ["No dedicated GPU", "Average display", "Heavy design"],
    idealFor: ["Students prioritising service and reliability", "General engineering work", "Programming"],
    performanceRating: 7,
    batteryRating: 6,
    valueScore: 7,
    keySpecs: ["Intel i5-1235U", "8GB RAM", "512GB SSD", "15.6-inch FHD Display", "Integrated Graphics"],
  },
  {
    id: "hp-victus-16",
    name: "HP Victus 16",
    category: "midrange",
    priceRange: "₹65,000 - ₹78,000",
    pros: ["Powerful Ryzen 7 processor", "RTX 3050 GPU for CAD", "Good cooling system", "Upgradeable RAM and storage"],
    cons: ["Poor battery life (3-4 hours)", "Plasticky build", "Heavy at 2.5 kg"],
    idealFor: ["Mechanical and civil engineering students", "CAD, SolidWorks, and rendering", "Gaming"],
    performanceRating: 9,
    batteryRating: 4,
    valueScore: 8,
    keySpecs: ["AMD R7-5800H", "16GB RAM", "512GB SSD", "16.1-inch FHD 144Hz", "RTX 3050 4GB"],
  },
  {
    id: "lenovo-legion-5",
    name: "Lenovo Legion 5",
    category: "premium",
    priceRange: "₹1,05,000 - ₹1,25,000",
    pros: ["Excellent build quality", "Great thermal management", "High-performance GPU", "Superb keyboard"],
    cons: ["Heavy and bulky", "Premium price", "Average battery life"],
    idealFor: ["CAD and simulation work", "FEA and CFD analysis", "High-performance computing needs"],
    performanceRating: 9,
    batteryRating: 5,
    valueScore: 8,
    keySpecs: ["AMD R7-6800H", "16GB RAM", "1TB SSD", "16-inch QHD 165Hz", "RTX 3060 6GB"],
  },
  {
    id: "asus-zenbook-14",
    name: "ASUS ZenBook 14 OLED",
    category: "premium",
    priceRange: "₹85,000 - ₹1,05,000",
    pros: ["Stunning OLED display", "Ultra-portable at 1.2 kg", "Premium build quality", "Good battery life"],
    cons: ["No dedicated GPU", "Limited ports", "Premium pricing for integrated graphics"],
    idealFor: ["CSE students who prioritise portability", "Presentations and media", "Light programming"],
    performanceRating: 7,
    batteryRating: 8,
    valueScore: 7,
    keySpecs: ["Intel i5-1340P", "16GB RAM", "512GB SSD", "14-inch 2.8K OLED", "Integrated Iris Xe"],
  },
  {
    id: "hp-zbook-firefly",
    name: "HP ZBook Firefly 14 G10",
    category: "workstation",
    priceRange: "₹1,50,000 - ₹1,80,000",
    pros: ["ISV certified for CAD software", "Professional Quadro graphics", "Premium build", "Excellent support"],
    cons: ["Very expensive", "Not for gaming", "Average battery for a workstation"],
    idealFor: ["Professional CAD work", "SolidWorks and CATIA", "ANSYS and simulation software"],
    performanceRating: 9,
    batteryRating: 6,
    valueScore: 6,
    keySpecs: ["Intel i7-13700H", "16GB ECC RAM", "512GB SSD", "14-inch FHD Display", "NVIDIA RTX A500 4GB"],
  },
  {
    id: "dell-precision-3571",
    name: "Dell Precision 3571",
    category: "workstation",
    priceRange: "₹1,60,000 - ₹2,00,000",
    pros: ["ISV certified", "Excellent build reliability", "Professional graphics", "Great thermal design"],
    cons: ["Expensive", "Heavy", "Overkill for most students"],
    idealFor: ["Heavy simulation work", "FEA and CFD analysis", "Professional engineering work"],
    performanceRating: 10,
    batteryRating: 5,
    valueScore: 5,
    keySpecs: ["Intel i7-12700H", "16GB RAM", "512GB SSD", "15.6-inch FHD Display", "NVIDIA RTX A1000 6GB"],
  },
  {
    id: "macbook-air-m1",
    name: "Apple MacBook Air M1",
    category: "midrange",
    priceRange: "₹65,000 - ₹75,000",
    pros: ["Excellent battery life (12+ hours)", "Silent fanless design", "Great build quality", "Best trackpad"],
    cons: ["No Windows for some engineering software", "Limited port selection", "8GB RAM base variant"],
    idealFor: ["CSE students", "iOS development", "General productivity", "Students who value portability"],
    performanceRating: 8,
    batteryRating: 10,
    valueScore: 9,
    keySpecs: ["Apple M1 Chip", "8GB RAM", "256GB SSD", "13.3-inch Retina Display", "7-core GPU"],
  },
  {
    id: "macbook-pro-14",
    name: "Apple MacBook Pro 14 M3",
    category: "premium",
    priceRange: "₹1,60,000 - ₹1,90,000",
    pros: ["Exceptional performance", "Stunning Liquid Retina XDR display", "Great battery life", "Premium build"],
    cons: ["Very expensive", "Software compatibility issues with some engineering tools", "Limited gaming"],
    idealFor: ["CSE and IT students", "AI/ML work", "Creative work", "Students with higher budgets"],
    performanceRating: 10,
    batteryRating: 9,
    valueScore: 7,
    keySpecs: ["Apple M3 Pro Chip", "18GB RAM", "512GB SSD", "14.2-inch Liquid Retina XDR", "18-core GPU"],
  },
];

export function getLaptopsByCategory(category: string): LaptopRecommendation[] {
  if (category === "cad") return laptops.filter(l => l.idealFor.some(i => i.toLowerCase().includes("cad") || i.toLowerCase().includes("mechanical")));
  if (category === "cse") return laptops.filter(l => l.idealFor.some(i => i.toLowerCase().includes("cse") || i.toLowerCase().includes("programming")));
  return laptops.filter(l => l.category === category);
}
