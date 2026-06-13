export interface CategoryItem {
  id: string;
  name: string;
  type: "branch" | "course" | "placeholder";
  description?: string;
  href?: string;
}

export interface SubCategory {
  name: string;
  items: CategoryItem[];
}

export interface CategorySection {
  icon: string;
  name: string;
  subcategories: SubCategory[];
}

export const categorySections: CategorySection[] = [
  {
    icon: "\u2699\uFE0F",
    name: "Engineering & Technology",
    subcategories: [
      {
        name: "Core Engineering",
        items: [
          { id: "mechanical-engineering", name: "Mechanical Engineering", type: "branch", description: "Design, analysis, and manufacturing of mechanical systems.", href: "/mechanical-engineering" },
          { id: "civil-engineering", name: "Civil Engineering", type: "branch", description: "Structural design, construction management, and infrastructure.", href: "/civil-engineering" },
          { id: "electrical-engineering", name: "Electrical Engineering", type: "branch", description: "Power generation, transmission, and electrical systems.", href: "/electrical-engineering" },
          { id: "electronics-and-communication-engineering", name: "Electronics & Communication Engineering", type: "branch", description: "Electronic devices, communication systems, VLSI, and embedded systems.", href: "/electronics-and-communication-engineering" },
          { id: "chemical-engineering", name: "Chemical Engineering", type: "branch", description: "Process design, chemical manufacturing, and materials engineering.", href: "/chemical-engineering" },
          { id: "instrumentation-engineering", name: "Instrumentation Engineering", type: "branch", description: "Measurement systems, process control, and industrial automation.", href: "/instrumentation-engineering" },
          { id: "automobile-engineering", name: "Automobile Engineering", type: "branch", description: "Vehicle design, powertrain systems, and EV technology.", href: "/automobile-engineering" },
          { id: "production-engineering", name: "Production Engineering", type: "placeholder", description: "Manufacturing processes, quality control, and industrial management." },
        ],
      },
      {
        name: "Computer & Tech",
        items: [
          { id: "computer-science-engineering", name: "Computer Science & Engineering", type: "branch", description: "Software development, AI/ML, data science, and systems engineering.", href: "/computer-science-engineering" },
          { id: "artificial-intelligence-machine-learning", name: "Artificial Intelligence & Machine Learning", type: "course", description: "AI model development, deep learning, NLP, and intelligent systems." },
          { id: "data-science", name: "Data Science", type: "course", description: "Students learn math, statistics, and programming to extract deep insights from large unstructured datasets using AI models.", href: "/data-science" },
          { id: "cybersecurity", name: "Cybersecurity", type: "placeholder", description: "Network security, ethical hacking, cryptography, and risk management." },
          { id: "information-technology", name: "Information Technology", type: "branch", description: "IT infrastructure, networking, cloud computing, and system administration.", href: "/information-technology" },
        ],
      },
      {
        name: "Advanced Tech",
        items: [
          { id: "aerospace-engineering", name: "Aerospace Engineering", type: "branch", description: "Aircraft design, propulsion, avionics, and space technology.", href: "/aerospace-engineering" },
          { id: "robotics", name: "Robotics", type: "placeholder", description: "Robot design, control systems, automation, and mechatronics." },
          { id: "nanotechnology", name: "Nanotechnology", type: "placeholder", description: "Nanomaterials, nanoelectronics, and molecular engineering." },
          { id: "biomedical-engineering", name: "Biomedical Engineering", type: "placeholder", description: "Medical devices, bio-signal processing, and tissue engineering." },
        ],
      },
    ],
  },
  {
    icon: "\uD83D\uDD2C",
    name: "Applied & Pure Sciences",
    subcategories: [
      {
        name: "Physical Sciences",
        items: [
          { id: "physics", name: "Physics", type: "placeholder", description: "Quantum mechanics, electromagnetism, thermodynamics, and optics." },
          { id: "chemistry", name: "Chemistry", type: "placeholder", description: "Organic, inorganic, physical, and analytical chemistry." },
          { id: "mathematics", name: "Mathematics", type: "placeholder", description: "Pure and applied mathematics, calculus, and linear algebra." },
          { id: "statistics", name: "Statistics", type: "placeholder", description: "Probability theory, inferential statistics, and data modeling." },
          { id: "astronomy", name: "Astronomy", type: "placeholder", description: "Astrophysics, cosmology, and planetary science." },
        ],
      },
      {
        name: "Biological Sciences",
        items: [
          { id: "zoology", name: "Zoology", type: "placeholder", description: "Animal biology, ecology, and evolutionary biology." },
          { id: "botany", name: "Botany", type: "placeholder", description: "Plant biology, taxonomy, and plant physiology." },
          { id: "microbiology", name: "Microbiology", type: "placeholder", description: "Microorganisms, immunology, and infectious diseases." },
          { id: "biotechnology-engineering", name: "Biotechnology", type: "branch", description: "Genetic engineering, bioinformatics, and medical devices.", href: "/biotechnology-engineering" },
          { id: "genetics", name: "Genetics", type: "placeholder", description: "Genomics, gene therapy, and molecular genetics." },
        ],
      },
      {
        name: "Earth Sciences",
        items: [
          { id: "geology", name: "Geology", type: "placeholder", description: "Earth structure, mineralogy, and geological processes." },
          { id: "meteorology", name: "Meteorology", type: "placeholder", description: "Weather systems, climate science, and atmospheric physics." },
          { id: "oceanography", name: "Oceanography", type: "placeholder", description: "Marine ecosystems, ocean currents, and seafloor mapping." },
          { id: "environmental-science", name: "Environmental Science", type: "placeholder", description: "Ecology, environmental policy, and sustainability." },
        ],
      },
    ],
  },
  {
    icon: "\u2695\uFE0F",
    name: "Medical & Healthcare",
    subcategories: [
      {
        name: "Clinical Medicine",
        items: [
          { id: "medicine", name: "Medicine (MBBS)", type: "course", description: "Diagnosis, treatment, and patient care across all medical fields." },
          { id: "dentistry", name: "Dentistry", type: "placeholder", description: "Diagnosis and treatment of oral diseases and dental surgery." },
          { id: "veterinary-science", name: "Veterinary Science", type: "placeholder", description: "Animal health, disease prevention, and veterinary surgery." },
          { id: "alternative-medicine", name: "Alternative Medicine", type: "placeholder", description: "Ayurveda, homeopathy, naturopathy, and traditional medicine." },
        ],
      },
      {
        name: "Allied Health",
        items: [
          { id: "nursing", name: "Nursing", type: "placeholder", description: "Patient care, clinical nursing, and healthcare management." },
          { id: "physiotherapy", name: "Physiotherapy", type: "placeholder", description: "Rehabilitation, exercise therapy, and movement science." },
          { id: "pharmacy", name: "Pharmacy", type: "placeholder", description: "Drug formulation, pharmacology, and clinical pharmacy." },
          { id: "medical-lab-technology", name: "Medical Lab Technology", type: "placeholder", description: "Diagnostic testing, lab analysis, and pathology." },
          { id: "radiology", name: "Radiology", type: "placeholder", description: "Medical imaging, radiation therapy, and diagnostic radiology." },
        ],
      },
      {
        name: "Public Health",
        items: [
          { id: "hospital-administration", name: "Hospital Administration", type: "placeholder", description: "Healthcare management, hospital operations, and health policy." },
          { id: "epidemiology", name: "Epidemiology", type: "placeholder", description: "Disease patterns, outbreak investigation, and public health research." },
          { id: "nutrition", name: "Nutrition", type: "placeholder", description: "Dietetics, food science, and nutritional therapy." },
        ],
      },
    ],
  },
  {
    icon: "\uD83D\uDCC8",
    name: "Business, Commerce & Finance",
    subcategories: [
      {
        name: "Management",
        items: [
          { id: "business-administration", name: "Business Administration (BBA/MBA)", type: "course", description: "Business strategy, leadership, and organisational management." },
          { id: "human-resources", name: "HR", type: "placeholder", description: "Talent management, organisational behaviour, and workplace culture." },
          { id: "marketing", name: "Marketing", type: "placeholder", description: "Brand management, digital marketing, and consumer behaviour." },
          { id: "operations", name: "Operations", type: "placeholder", description: "Supply chain management, logistics, and operational excellence." },
        ],
      },
      {
        name: "Finance & Accounting",
        items: [
          { id: "commerce", name: "Commerce (B.Com)", type: "course", description: "Accounting, taxation, financial management, and business law." },
          { id: "chartered-accountancy", name: "Chartered Accountancy", type: "placeholder", description: "Auditing, taxation, financial accounting, and corporate law." },
          { id: "auditing", name: "Auditing", type: "placeholder", description: "Internal and external audit, risk assessment, and compliance." },
          { id: "investment-banking", name: "Investment Banking", type: "placeholder", description: "M&A, capital markets, equity research, and financial modeling." },
        ],
      },
      {
        name: "Economics",
        items: [
          { id: "econometrics", name: "Econometrics", type: "placeholder", description: "Economic modeling, time series analysis, and forecasting." },
          { id: "macroeconomics", name: "Macroeconomics", type: "placeholder", description: "National income, monetary policy, and economic growth." },
          { id: "public-policy", name: "Public Policy", type: "placeholder", description: "Policy analysis, governance, and socioeconomic development." },
        ],
      },
    ],
  },
  {
    icon: "\uD83C\uDFA8",
    name: "Humanities, Arts & Social Sciences",
    subcategories: [
      {
        name: "Social Sciences",
        items: [
          { id: "psychology", name: "Psychology", type: "placeholder", description: "Cognitive, clinical, and organisational psychology." },
          { id: "sociology", name: "Sociology", type: "placeholder", description: "Social structures, inequality, urban and rural studies." },
          { id: "anthropology", name: "Anthropology", type: "placeholder", description: "Human evolution, cultural diversity, and archaeology." },
          { id: "political-science", name: "Political Science", type: "placeholder", description: "Political theory, comparative politics, and international relations." },
          { id: "history", name: "History", type: "placeholder", description: "World history, historiography, and civilisational studies." },
          { id: "humanities", name: "Humanities", type: "course", description: "Interdisciplinary study of human culture, philosophy, and arts." },
        ],
      },
      {
        name: "Languages & Literature",
        items: [
          { id: "linguistics", name: "Linguistics", type: "placeholder", description: "Language structure, phonetics, syntax, and language acquisition." },
          { id: "creative-writing", name: "Creative Writing", type: "placeholder", description: "Fiction, poetry, screenwriting, and narrative craft." },
          { id: "foreign-languages", name: "Foreign Languages", type: "placeholder", description: "French, Spanish, German, Japanese, and other world languages." },
        ],
      },
      {
        name: "Philosophy & Religion",
        items: [
          { id: "ethics", name: "Ethics", type: "placeholder", description: "Moral philosophy, applied ethics, and value theory." },
          { id: "theology", name: "Theology", type: "placeholder", description: "Religious studies, scriptures, and comparative theology." },
          { id: "logic", name: "Logic", type: "placeholder", description: "Formal logic, argumentation, and critical thinking." },
        ],
      },
    ],
  },
  {
    icon: "\uD83D\uDCE3",
    name: "Media, Communication & Design",
    subcategories: [
      {
        name: "Media & Journalism",
        items: [
          { id: "mass-communication", name: "Mass Communication", type: "placeholder", description: "Media studies, journalism, and corporate communication." },
          { id: "broadcasting", name: "Broadcasting", type: "placeholder", description: "Radio, television, podcasting, and digital broadcasting." },
          { id: "public-relations", name: "Public Relations", type: "placeholder", description: "PR strategy, crisis communication, and brand reputation." },
          { id: "digital-media", name: "Digital Media", type: "placeholder", description: "Social media, content strategy, and online marketing." },
        ],
      },
      {
        name: "Visual Arts",
        items: [
          { id: "fine-arts", name: "Fine Arts", type: "placeholder", description: "Painting, sculpture, printmaking, and installation art." },
          { id: "filmmaking", name: "Filmmaking", type: "placeholder", description: "Film direction, cinematography, editing, and screenwriting." },
          { id: "photography", name: "Photography", type: "placeholder", description: "Digital photography, lighting, and visual storytelling." },
          { id: "animation", name: "Animation", type: "placeholder", description: "2D/3D animation, VFX, and motion graphics." },
          { id: "visual-communication", name: "Visual Communication", type: "course", description: "Visual storytelling, branding, and multimedia design." },
        ],
      },
      {
        name: "Design",
        items: [
          { id: "architecture", name: "Architecture", type: "course", description: "Building design, urban planning, and spatial design." },
          { id: "fashion-design", name: "Fashion Design", type: "placeholder", description: "Garment design, textile science, and fashion styling." },
          { id: "interior-design", name: "Interior Design", type: "placeholder", description: "Space planning, furniture design, and interior aesthetics." },
          { id: "ui-ux-design", name: "UI/UX Design", type: "placeholder", description: "User interface design, usability, and interaction design." },
          { id: "graphic-design", name: "Graphic Design", type: "placeholder", description: "Typography, branding, layout, and visual identity." },
        ],
      },
    ],
  },
  {
    icon: "\u2696\uFE0F",
    name: "Law & Public Administration",
    subcategories: [
      {
        name: "Legal Studies",
        items: [
          { id: "corporate-law", name: "Corporate Law", type: "placeholder", description: "Company law, mergers, compliance, and corporate governance." },
          { id: "criminal-law", name: "Criminal Law", type: "placeholder", description: "Criminal procedure, evidence law, and forensic jurisprudence." },
          { id: "cyber-law", name: "Cyber Law", type: "placeholder", description: "Internet regulation, data privacy, and cybercrime." },
          { id: "international-law", name: "International Law", type: "placeholder", description: "Treaties, human rights law, and diplomatic relations." },
        ],
      },
      {
        name: "Governance",
        items: [
          { id: "public-administration", name: "Public Administration", type: "placeholder", description: "Government administration, policy implementation, and civil services." },
          { id: "international-relations", name: "International Relations", type: "placeholder", description: "Diplomacy, global governance, and foreign policy." },
          { id: "human-rights", name: "Human Rights", type: "placeholder", description: "Rights advocacy, humanitarian law, and social justice." },
        ],
      },
    ],
  },
  {
    icon: "\uD83C\uDF3E",
    name: "Agriculture & Environment",
    subcategories: [
      {
        name: "Agricultural Sciences",
        items: [
          { id: "agronomy", name: "Agronomy", type: "placeholder", description: "Crop production, soil management, and sustainable farming." },
          { id: "horticulture", name: "Horticulture", type: "placeholder", description: "Fruit, vegetable, and ornamental plant cultivation." },
          { id: "forestry", name: "Forestry", type: "placeholder", description: "Forest management, conservation, and wood science." },
          { id: "animal-husbandry", name: "Animal Husbandry", type: "placeholder", description: "Livestock management, animal breeding, and dairy science." },
        ],
      },
      {
        name: "Sustainability",
        items: [
          { id: "renewable-energy", name: "Renewable Energy Management", type: "placeholder", description: "Solar, wind, hydro energy, and sustainable energy policy." },
          { id: "conservation-biology", name: "Conservation Biology", type: "placeholder", description: "Biodiversity conservation, habitat restoration, and ecology." },
        ],
      },
    ],
  },
  {
    icon: "\uD83C\uDFEA",
    name: "Hospitality & Services",
    subcategories: [
      {
        name: "Tourism",
        items: [
          { id: "hotel-management", name: "Hotel Management", type: "placeholder", description: "Hospitality operations, accommodation, and food service." },
          { id: "culinary-arts", name: "Culinary Arts", type: "placeholder", description: "Cooking techniques, kitchen management, and gastronomy." },
          { id: "travel-tourism", name: "Travel Tourism", type: "placeholder", description: "Tour planning, travel operations, and destination management." },
        ],
      },
      {
        name: "Sports & Fitness",
        items: [
          { id: "sports-management", name: "Sports Management", type: "placeholder", description: "Sports administration, event management, and athletic governance." },
          { id: "physical-education", name: "Physical Education", type: "placeholder", description: "Exercise science, coaching, and health education." },
          { id: "kinesiology", name: "Kinesiology", type: "placeholder", description: "Human movement, biomechanics, and motor control." },
        ],
      },
    ],
  },
];
