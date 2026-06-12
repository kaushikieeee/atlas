export interface TabletRecommendation {
  id: string;
  name: string;
  priceRange: string;
  pros: string[];
  cons: string[];
  idealFor: string[];
  performanceRating: number;
  batteryRating: number;
  valueScore: number;
  keySpecs: string[];
}

export const tablets: TabletRecommendation[] = [
  {
    id: "ipad-10th-gen",
    name: "Apple iPad 10th Gen",
    priceRange: "₹34,000 - ₹40,000",
    pros: ["Excellent ecosystem and app support", "Great for note-taking with Apple Pencil", "Good performance", "Long software support"],
    cons: ["First-gen Apple Pencil support only", "Non-laminated display", "64GB base storage"],
    idealFor: ["Note-taking in class", "Reading textbooks and PDFs", "Light creative work"],
    performanceRating: 8,
    batteryRating: 9,
    valueScore: 8,
    keySpecs: ["Apple A14 Bionic", "64GB/256GB Storage", "10.9-inch Liquid Retina Display", "USB-C", "Apple Pencil 1st Gen"],
  },
  {
    id: "ipad-air-m2",
    name: "Apple iPad Air M2",
    priceRange: "₹55,000 - ₹65,000",
    pros: ["M2 chip performance", "Apple Pencil Pro support", "Laminated display", "Thin and light"],
    cons: ["Expensive", "No 120Hz ProMotion", "Accessories cost extra"],
    idealFor: ["Serious note-taking and study", "Drawing and design", "Media consumption"],
    performanceRating: 9,
    batteryRating: 9,
    valueScore: 7,
    keySpecs: ["Apple M2 Chip", "128GB/256GB Storage", "11-inch Liquid Retina Display", "USB-C", "Apple Pencil Pro"],
  },
  {
    id: "samsung-galaxy-tab-s9-fe",
    name: "Samsung Galaxy Tab S9 FE",
    priceRange: "₹28,000 - ₹35,000",
    pros: ["S Pen included", "IP68 water resistance", "Good display", "Expandable storage"],
    cons: ["Exynos processor", "Average performance compared to iPad", "One UI can be heavy"],
    idealFor: ["Note-taking on a budget", "Students in Samsung ecosystem", "Media consumption"],
    performanceRating: 7,
    batteryRating: 8,
    valueScore: 8,
    keySpecs: ["Exynos 1380", "6GB/8GB RAM", "128GB Storage + MicroSD", "10.9-inch 90Hz TFT", "S Pen Included"],
  },
  {
    id: "xiaomi-pad-6",
    name: "Xiaomi Pad 6",
    priceRange: "₹25,000 - ₹30,000",
    pros: ["Excellent value for money", "Great display", "Good performance", "Fast charging"],
    cons: ["MIUI not optimised for tablets", "Limited stylus support", "Software update commitment unclear"],
    idealFor: ["Budget tablet buyers", "Media consumption", "Light note-taking"],
    performanceRating: 8,
    batteryRating: 8,
    valueScore: 9,
    keySpecs: ["Snapdragon 870", "6GB/8GB RAM", "128GB/256GB Storage", "11-inch 144Hz LCD", "33W Charging"],
  },
  {
    id: "oneplus-pad",
    name: "OnePlus Pad",
    priceRange: "₹35,000 - ₹40,000",
    pros: ["Unique 7:5 aspect ratio great for reading", "Good build quality", "Fast charging", "Good display"],
    cons: ["Limited stylus functionality", "No cellular variant in India", "Software updates could be better"],
    idealFor: ["Reading and note-taking", "Media consumption", "General study use"],
    performanceRating: 8,
    batteryRating: 9,
    valueScore: 7,
    keySpecs: ["MediaTek Dimensity 9000", "8GB RAM", "128GB Storage", "11.6-inch 144Hz LCD", "67W SUPERVOOC"],
  },
];

export const tabletCategories = [
  { slug: "budget", label: "Under ₹30,000", description: "Affordable tablets for note-taking and reading." },
  { slug: "midrange", label: "₹30,000 - ₹50,000", description: "Balanced performance for study and creativity." },
  { slug: "premium", label: "Above ₹50,000", description: "Premium tablets with best-in-class performance." },
];

export function getTabletsByCategory(category: string): TabletRecommendation[] {
  if (category === "budget") return tablets.filter(t => parseInt(t.priceRange.replace(/[₹,]/g, "")) < 30000);
  if (category === "midrange") return tablets.filter(t => {
    const price = parseInt(t.priceRange.replace(/[₹,]/g, ""));
    return price >= 30000 && price <= 50000;
  });
  if (category === "premium") return tablets.filter(t => parseInt(t.priceRange.replace(/[₹,]/g, "")) > 50000);
  return tablets;
}
