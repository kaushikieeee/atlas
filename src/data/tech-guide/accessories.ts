export interface AccessoryRecommendation {
  id: string;
  name: string;
  category: "monitor" | "keyboard" | "mouse" | "headphones" | "backpack" | "other";
  priceRange: string;
  pros: string[];
  cons: string[];
  idealFor: string[];
  performanceRating: number;
  valueScore: number;
}

export const accessories: AccessoryRecommendation[] = [
  {
    id: "dell-s2722qc",
    name: "Dell S2722QC 4K Monitor",
    category: "monitor",
    priceRange: "₹28,000 - ₹32,000",
    pros: ["4K resolution at affordable price", "USB-C with 65W charging", "Good colour accuracy", "Thin bezels"],
    cons: ["60Hz refresh rate", "Stand could be better", "Average speakers"],
    idealFor: ["Programming and coding", "Design and CAD work", "Multi-monitor setups"],
    performanceRating: 8,
    valueScore: 8,
  },
  {
    id: "logitech-mx-master-3s",
    name: "Logitech MX Master 3S",
    category: "mouse",
    priceRange: "₹7,000 - ₹8,500",
    pros: ["Best-in-class ergonomics", "Silent clicks", "MagSpeed scroll wheel", "Multi-device support"],
    cons: ["Expensive", "Heavy for travel", "USB-C charging but cable included"],
    idealFor: ["Long coding sessions", "CAD and design work", "Multi-device workflows"],
    performanceRating: 10,
    valueScore: 8,
  },
  {
    id: "logitech-g102",
    name: "Logitech G102 Lightsync",
    category: "mouse",
    priceRange: "₹1,500 - ₹2,000",
    pros: ["Affordable", "Reliable performance", "RGB lighting", "Comfortable for most hand sizes"],
    cons: ["Wired only", "Basic sensor", "Not for heavy gaming"],
    idealFor: ["Budget-conscious students", "Everyday computing", "Light gaming"],
    performanceRating: 6,
    valueScore: 9,
  },
  {
    id: "keychron-k6",
    name: "Keychron K6 Wireless Mechanical Keyboard",
    category: "keyboard",
    priceRange: "₹6,000 - ₹8,000",
    pros: ["Hot-swappable switches", "Wireless Bluetooth", "Compact 65% layout", "Great typing experience"],
    cons: ["Expensive", "Not everyone likes mechanical switches", "Average battery life with RGB"],
    idealFor: ["Students who type a lot", "Programming", "Mechanical keyboard enthusiasts"],
    performanceRating: 9,
    valueScore: 8,
  },
  {
    id: "sony-wh-1000xm5",
    name: "Sony WH-1000XM5",
    category: "headphones",
    priceRange: "₹25,000 - ₹30,000",
    pros: ["Best-in-class noise cancellation", "Excellent sound quality", "Comfortable for long sessions", "Great battery life"],
    cons: ["Very expensive", "Not foldable", "Case is bulky"],
    idealFor: ["Library study sessions", "Focus and concentration", "Travel and commute"],
    performanceRating: 10,
    valueScore: 7,
  },
  {
    id: "realme-buds-air-5",
    name: "Realme Buds Air 5",
    category: "headphones",
    priceRange: "₹3,000 - ₹4,000",
    pros: ["Excellent value", "Good ANC for the price", "Decent sound quality", "Low latency mode"],
    cons: ["Build feels budget", "Average microphone quality", "Touch controls can be finicky"],
    idealFor: ["Budget-conscious students", "Daily music and calls", "Light gaming"],
    performanceRating: 7,
    valueScore: 9,
  },
  {
    id: "american-tourister-backpack",
    name: "American Tourister 32L Laptop Backpack",
    category: "backpack",
    priceRange: "₹1,800 - ₹2,500",
    pros: ["Durable build", "Dedicated laptop compartment", "Good organisation pockets", "Water-resistant"],
    cons: ["Basic design", "No USB charging port", "Straps could be padded better"],
    idealFor: ["Daily college commute", "Carrying laptop and books", "Budget-friendly"],
    performanceRating: 7,
    valueScore: 9,
  },
];
