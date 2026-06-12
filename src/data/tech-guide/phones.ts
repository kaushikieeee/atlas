export interface PhoneRecommendation {
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

export const phones: PhoneRecommendation[] = [
  {
    id: "nothing-phone-2a",
    name: "Nothing Phone 2a",
    priceRange: "₹22,000 - ₹26,000",
    pros: ["Clean UI without bloatware", "Good camera for the price", "Unique design", "Solid performance"],
    cons: ["Average battery life", "No charger in box", "Service network limited"],
    idealFor: ["Students who want clean Android", "Social media and photography", "Day-to-day use"],
    performanceRating: 7,
    batteryRating: 6,
    valueScore: 8,
    keySpecs: ["MediaTek Dimensity 7200 Pro", "8GB RAM", "128GB/256GB Storage", "6.7-inch 120Hz AMOLED", "50MP Dual Camera"],
  },
  {
    id: "oneplus-12r",
    name: "OnePlus 12R",
    priceRange: "₹38,000 - ₹42,000",
    pros: ["Flagship-level performance", "Excellent display", "100W fast charging", "Good build quality"],
    cons: ["Average camera compared to competitors", "No wireless charging", "ColorOS bloatware"],
    idealFor: ["Performance-focused students", "Gaming on the go", "All-day heavy usage"],
    performanceRating: 9,
    batteryRating: 8,
    valueScore: 8,
    keySpecs: ["Snapdragon 8 Gen 2", "16GB RAM", "256GB Storage", "6.78-inch 120Hz ProXDR", "50MP Triple Camera"],
  },
  {
    id: "samsung-galaxy-s23-fe",
    name: "Samsung Galaxy S23 FE",
    priceRange: "₹35,000 - ₹40,000",
    pros: ["Excellent AMOLED display", "Good camera system", "IP68 water resistance", "Samsung ecosystem"],
    cons: ["Exynos processor in some regions", "Average battery life", "Charging could be faster"],
    idealFor: ["Students wanting flagship features", "Photography enthusiasts", "Samsung ecosystem users"],
    performanceRating: 8,
    batteryRating: 6,
    valueScore: 7,
    keySpecs: ["Exynos 2200", "8GB RAM", "128GB/256GB Storage", "6.4-inch 120Hz Dynamic AMOLED", "50MP Triple Camera"],
  },
  {
    id: "iphone-15",
    name: "Apple iPhone 15",
    priceRange: "₹65,000 - ₹72,000",
    pros: ["Excellent ecosystem", "Great cameras", "Long software support", "Good resale value"],
    cons: ["60Hz display", "Slow charging", "Expensive"],
    idealFor: ["Students in Apple ecosystem", "Content creation", "Long-term use"],
    performanceRating: 9,
    batteryRating: 7,
    valueScore: 7,
    keySpecs: ["Apple A16 Bionic", "6GB RAM", "128GB/256GB Storage", "6.1-inch OLED Display", "48MP Dual Camera"],
  },
  {
    id: "poco-x6-pro",
    name: "POCO X6 Pro",
    priceRange: "₹24,000 - ₹28,000",
    pros: ["Excellent price-to-performance", "Great display", "Fast charging", "Good for gaming"],
    cons: ["MIUI bloatware", "Average camera", "Build quality could be better"],
    idealFor: ["Budget-conscious students", "Mobile gaming", "Media consumption"],
    performanceRating: 8,
    batteryRating: 7,
    valueScore: 9,
    keySpecs: ["MediaTek Dimensity 8300 Ultra", "12GB RAM", "256GB Storage", "6.67-inch 120Hz AMOLED", "64MP Triple Camera"],
  },
  {
    id: "motorola-edge-40",
    name: "Motorola Edge 40",
    priceRange: "₹28,000 - ₹33,000",
    pros: ["Clean Android experience", "IP68 water resistance", "Good display", "Wireless charging"],
    cons: ["Average processor for the price", "Camera could be better", "Limited software updates"],
    idealFor: ["Students wanting stock Android", "Water-resistant phone needed", "Balanced features"],
    performanceRating: 7,
    batteryRating: 7,
    valueScore: 7,
    keySpecs: ["MediaTek Dimensity 8020", "8GB RAM", "256GB Storage", "6.55-inch 144Hz pOLED", "50MP Dual Camera"],
  },
];

export const phoneCategories = [
  { slug: "budget", label: "Under ₹30,000", description: "Best value phones for daily use." },
  { slug: "midrange", label: "₹30,000 - ₹50,000", description: "Balanced performance and features." },
  { slug: "premium", label: "Above ₹50,000", description: "Flagship experience and ecosystem." },
];

export function getPhonesByCategory(category: string): PhoneRecommendation[] {
  if (category === "budget") return phones.filter(p => parseInt(p.priceRange.replace(/[₹,]/g, "")) < 30000);
  if (category === "midrange") return phones.filter(p => {
    const price = parseInt(p.priceRange.replace(/[₹,]/g, ""));
    return price >= 30000 && price <= 50000;
  });
  if (category === "premium") return phones.filter(p => parseInt(p.priceRange.replace(/[₹,]/g, "")) > 50000);
  return phones;
}
