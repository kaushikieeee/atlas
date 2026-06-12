export const mechanicalEngineering = {
  id: "mechanical-engineering",
  name: "Mechanical Engineering",
  shortName: "ME",
  tagline: "The Complete Guide to Mechanical Engineering Careers in India",
  description:
    "Mechanical engineering is one of the broadest engineering disciplines, covering design, manufacturing, thermal systems, and automotive engineering. In India, mechanical engineers find opportunities across automotive, aerospace, manufacturing, HVAC, and energy sectors. The field combines principles of physics, mathematics, and materials science to analyze, design, manufacture, and maintain mechanical systems.",
  color: "#78716C",

  overview: {
    introduction:
      "Mechanical engineering is one of the broadest engineering disciplines, covering design, manufacturing, thermal systems, and automotive engineering. In India, mechanical engineers find opportunities across automotive, aerospace, manufacturing, HVAC, and energy sectors. The field combines principles of physics, mathematics, and materials science to analyze, design, manufacture, and maintain mechanical systems.",
    duration: "4 years (B.Tech / B.E.)",
    avgFees: "₹2,00,000 - ₹8,00,000 (total)",
    difficulty: "Moderate to High",
    skillsRequired: [
      "Strong mathematical and analytical abilities",
      "Understanding of physics and material science",
      "Problem-solving and design thinking",
      "Proficiency in CAD software (SolidWorks, AutoCAD, CATIA)",
      "Knowledge of manufacturing processes",
      "Project management and teamwork",
      "Proficiency in simulation tools (ANSYS, Abaqus)",
      "Understanding of GD&T and quality systems"
    ],
    tags: ["Automotive", "Aerospace", "Manufacturing", "HVAC", "Energy", "Oil & Gas"]
  },

  salary: {
    overview: "Mechanical engineering salaries in India vary significantly based on college tier, specialisation, and industry sector. Below is a comprehensive breakdown of salary expectations at different career stages.",
    averageStarting: "₹4.5 LPA",
    averageMid: "₹10 LPA",
    averageSenior: "₹25 LPA",
    breakdown: [
      {
        level: "Fresher (0-2 years)",
        range: "₹3.5 - ₹6 LPA",
        median: "₹4.5 LPA",
        top10: "₹8 LPA",
        note: "Varies by college tier and sector"
      },
      {
        level: "Mid-Level (3-7 years)",
        range: "₹8 - ₹15 LPA",
        median: "₹10 LPA",
        top10: "₹18 LPA",
        note: "Higher in automotive and R&D roles"
      },
      {
        level: "Senior (8+ years)",
        range: "₹18 - ₹40 LPA",
        median: "₹25 LPA",
        top10: "₹50+ LPA",
        note: "Leadership roles in manufacturing and GCCs"
      }
    ],
    topPayers: [
      { company: "Tata Motors", range: "₹5 - ₹20 LPA", sector: "Automotive" },
      { company: "Mahindra & Mahindra", range: "₹5.5 - ₹18 LPA", sector: "Automotive" },
      { company: "Maruti Suzuki", range: "₹4.5 - ₹16 LPA", sector: "Automotive" },
      { company: "Ola Electric", range: "₹8 - ₹25 LPA", sector: "EV" },
      { company: "Ather Energy", range: "₹7 - ₹22 LPA", sector: "EV" },
      { company: "Hyundai", range: "₹5 - ₹18 LPA", sector: "Automotive" },
      { company: "L&T", range: "₹5 - ₹15 LPA", sector: "Engineering & Construction" },
      { company: "Siemens", range: "₹6 - ₹20 LPA", sector: "Industrial Automation" }
    ]
  },

  industries: [
    {
      name: "Automotive",
      abbreviation: "AU",
      description: "Vehicle design, manufacturing, and testing",
      growth: "12% YoY",
      market: "$120B by 2026",
      detail: "India's automotive industry is the 4th largest in the world. With the EV revolution and government initiatives like PLI schemes, there's massive growth in both traditional ICE and electric vehicle manufacturing.",
      topCompanies: ["Tata Motors", "Mahindra", "Maruti Suzuki", "Hyundai", "Ola Electric", "Ather Energy"]
    },
    {
      name: "Aerospace & Defense",
      abbreviation: "AE",
      description: "Aircraft, missiles, and defence systems",
      growth: "8% YoY",
      market: "$70B by 2030",
      detail: "With defence modernisation and Make in India initiatives, the aerospace sector offers growing opportunities in aircraft design, maintenance, and defence systems manufacturing.",
      topCompanies: ["HAL", "DRDO", "ISRO", "Boeing", "Airbus", "GE Aerospace"]
    },
    {
      name: "Oil & Gas / Energy",
      abbreviation: "OI",
      description: "Power generation, renewable energy, and oil & gas",
      growth: "6% YoY",
      market: "$200B+",
      detail: "India's growing energy demand creates opportunities in traditional oil & gas as well as renewable energy sectors including solar, wind, and hydrogen.",
      topCompanies: ["Reliance Industries", "ONGC", "GAIL", "NTPC", "Adani Power", "Suzlon"]
    },
    {
      name: "Heavy Engineering & EPC",
      abbreviation: "HE",
      description: "Industrial equipment, infrastructure, and construction",
      growth: "7% YoY",
      market: "$150B+",
      detail: "Infrastructure development and industrial growth drive demand for heavy engineering and EPC companies across India.",
      topCompanies: ["L&T", "BHEL", "Tata Projects", "Afcons", "KEC International"]
    },
    {
      name: "R&D / GCCs",
      abbreviation: "R&",
      description: "Global Capability Centers and research organisations",
      growth: "15% YoY",
      market: "Growing rapidly",
      detail: "Multinational companies are setting up R&D centres in India, creating high-value roles in product development, simulation, and testing.",
      topCompanies: ["Bosch", "Siemens", "ABB", "GE", "Honeywell", "Schneider Electric"]
    }
  ],

  jobRoles: [
    {
      title: "Vehicle Design Engineer",
      description: "Design vehicle body, chassis, and interior components using CATIA/NX",
      tools: ["CATIA", "NX", "SolidWorks"],
      tiers: [
        { tier: 1, chance: "High", salary: "₹8 - ₹14 LPA" },
        { tier: 2, chance: "Medium", salary: "₹5 - ₹9 LPA" },
        { tier: 3, chance: "Low", salary: "₹3.5 - ₹6 LPA" }
      ]
    },
    {
      title: "CAE Analyst",
      description: "Perform crash, NVH, durability simulations using ANSYS/Abaqus/HyperWorks",
      tools: ["ANSYS", "Abaqus", "HyperWorks"],
      tiers: [
        { tier: 1, chance: "High", salary: "₹9 - ₹16 LPA" },
        { tier: 2, chance: "Medium", salary: "₹6 - ₹10 LPA" },
        { tier: 3, chance: "Low", salary: "₹4 - ₹7 LPA" }
      ]
    },
    {
      title: "Powertrain Engineer",
      description: "Design and optimize engines, transmissions, and drivetrain systems",
      tools: ["GT-Suite", "MATLAB", "AVL"],
      tiers: [
        { tier: 1, chance: "High", salary: "₹10 - ₹18 LPA" },
        { tier: 2, chance: "Medium", salary: "₹6 - ₹11 LPA" },
        { tier: 3, chance: "Not available", salary: "—" }
      ]
    },
    {
      title: "EV Systems Engineer",
      description: "Design battery packs, BMS, and electric motor integration",
      tools: ["MATLAB/Simulink", "COMSOL", "CAD"],
      tiers: [
        { tier: 1, chance: "High", salary: "₹12 - ₹22 LPA" },
        { tier: 2, chance: "Medium", salary: "₹8 - ₹14 LPA" },
        { tier: 3, chance: "Low", salary: "₹5 - ₹8 LPA" }
      ]
    },
    {
      title: "Manufacturing Engineer",
      description: "Optimize production lines, implement lean manufacturing, manage shop floor",
      tools: ["AutoCAD", "SAP", "Lean Tools"],
      tiers: [
        { tier: 1, chance: "High", salary: "₹7 - ₹12 LPA" },
        { tier: 2, chance: "High", salary: "₹5 - ₹9 LPA" },
        { tier: 3, chance: "Medium", salary: "₹3.5 - ₹6 LPA" }
      ]
    },
    {
      title: "Quality Engineer",
      description: "Ensure product quality, implement QMS, conduct supplier audits",
      tools: ["Six Sigma", "SPC", "FMEA"],
      tiers: [
        { tier: 1, chance: "Medium", salary: "₹6 - ₹10 LPA" },
        { tier: 2, chance: "High", salary: "₹4 - ₹8 LPA" },
        { tier: 3, chance: "High", salary: "₹3 - ₹5.5 LPA" }
      ]
    }
  ],

  topCompanies: {
    overview: "India's mechanical engineering graduates are recruited by leading automotive, manufacturing, and technology companies across sectors.",
    companies: [
      { name: "Tata Motors", abbreviation: "TM", location: "Pune, Jamshedpur", sector: "Automotive" },
      { name: "Mahindra & Mahindra", abbreviation: "MM", location: "Mumbai, Chennai", sector: "Automotive" },
      { name: "Maruti Suzuki", abbreviation: "MS", location: "Gurgaon, Manesar", sector: "Automotive" },
      { name: "Hyundai", abbreviation: "HY", location: "Chennai", sector: "Automotive" },
      { name: "Ola Electric", abbreviation: "OE", location: "Bangalore, Tamil Nadu", sector: "EV" },
      { name: "Ather Energy", abbreviation: "AE", location: "Bangalore, Hosur", sector: "EV" }
    ]
  },

  collegeTiers: {
    overview: "Placement outcomes for mechanical engineering vary significantly based on college tier. Here is a realistic breakdown with specific examples.",
    tiers: [
      {
        tier: "Tier 1",
        examples: ["IIT Madras", "IIT Bombay", "IIT Delhi", "IIT Kharagpur", "NIT Trichy"],
        averagePackage: "₹12 - ₹20 LPA",
        topRecruiters: ["Siemens", "Boeing", "HAL", "Bosch", "Goldman Sachs", "Microsoft", "Google"],
        placementRate: "90-100%",
        notes: "Many students also secure non-core roles in consulting and tech"
      },
      {
        tier: "Tier 2",
        examples: ["BITS Pilani", "NIT Warangal", "NIT Surathkal", "VIT", "COEP", "DTU"],
        averagePackage: "₹6 - ₹10 LPA",
        topRecruiters: ["Tata Motors", "Mahindra", "Maruti Suzuki", "L&T", "Bosch", "Siemens"],
        placementRate: "70-85%",
        notes: "Core manufacturing and automotive companies are primary recruiters"
      },
      {
        tier: "Tier 3",
        examples: ["State engineering colleges", "Private colleges with industry partnerships"],
        averagePackage: "₹3 - ₹5.5 LPA",
        topRecruiters: ["Mid-size manufacturing firms", "Service companies", "MNCs through off-campus"],
        placementRate: "40-60%",
        notes: "Strong emphasis on GATE preparation for PSU jobs and higher studies"
      }
    ]
  },

  interviewTopics: [
    { topic: "Thermodynamics", count: 50 },
    { topic: "Strength of Materials", count: 45 },
    { topic: "Fluid Mechanics", count: 40 },
    { topic: "Machine Design", count: 35 },
    { topic: "Heat Transfer", count: 30 },
    { topic: "Manufacturing Processes", count: 40 },
    { topic: "CAD/CAM", count: 25 },
    { topic: "GD&T", count: 20 }
  ],

  interviewQuestions: {
    total: 285,
    samples: [
      {
        question: "What is the difference between stress and strain?",
        answer: "",
        topic: "Strength of Materials",
        difficulty: "Easy"
      },
      {
        question: "Explain the working principle of a 4-stroke IC engine.",
        answer: "",
        topic: "Thermodynamics",
        difficulty: "Medium"
      },
      {
        question: "What is GD&T and why is it important?",
        answer: "",
        topic: "Design",
        difficulty: "Medium"
      },
      {
        question: "How does a heat exchanger work?",
        answer: "",
        topic: "Heat Transfer",
        difficulty: "Medium"
      },
      {
        question: "What is the difference between casting and forging?",
        answer: "",
        topic: "Manufacturing",
        difficulty: "Easy"
      }
    ]
  },

  resources: {
    books: [
      { name: "Strength of Materials", author: "R.K. Bansal" },
      { name: "Heat and Mass Transfer", author: "R.K. Rajput" },
      { name: "Manufacturing Science", author: "Ghosh & Mallik" },
      { name: "Theory of Machines", author: "S.S. Rattan" },
      { name: "Fluid Mechanics", author: "Cengel & Cimbala" },
      { name: "Thermodynamics: An Engineering Approach", author: "Cengel & Boles" }
    ],
    platforms: [
      { name: "NPTEL", description: "Free courses from IITs on all mechanical subjects" },
      { name: "Coursera", description: "Specialisations in robotics, CAD, and manufacturing" },
      { name: "Skill-Lync", description: "Industry-oriented PG programmes in mechanical domains" },
      { name: "Udemy", description: "Affordable courses on SolidWorks, CATIA, ANSYS" }
    ],
    certifications: [
      "Certified SolidWorks Professional (CSWP)",
      "CATIA V5 Certification",
      "ASME Certification",
      "Six Sigma Green / Black Belt",
      "NPTEL Course Certificates",
      "AutoCAD Certified Professional"
    ],
    skillLync: [
      {
        title: "FEA Fundamentals",
        abbreviation: "FEA",
        description: "Learn structural analysis with FEM"
      },
      {
        title: "CFD Fundamentals",
        abbreviation: "CFD",
        description: "Master fluid dynamics simulation"
      },
      {
        title: "GD&T Fundamentals",
        abbreviation: "GDT",
        description: "Geometric dimensioning & tolerancing"
      }
    ]
  },

  futureTrends: [
    {
      trend: "Industry 4.0 & Smart Manufacturing",
      impact: "High",
      description: "IoT, AI, and data analytics are transforming traditional manufacturing into smart factories."
    },
    {
      trend: "Electric Vehicles (EV)",
      impact: "Very High",
      description: "The EV revolution is creating new opportunities in battery technology, thermal management, and powertrain design."
    },
    {
      trend: "Additive Manufacturing (3D Printing)",
      impact: "High",
      description: "3D printing is revolutionising prototyping and custom manufacturing, reducing costs and lead times."
    },
    {
      trend: "Renewable Energy Technologies",
      impact: "High",
      description: "Solar, wind, and hydrogen energy systems require mechanical engineers for design and implementation."
    },
    {
      trend: "Robotics & Automation",
      impact: "Very High",
      description: "Industrial robotics and autonomous systems are creating high-value roles in system integration and maintenance."
    }
  ],

  relatedBranches: [
    { id: "automobile-engineering", name: "Automobile Engineering" },
    { id: "aerospace-engineering", name: "Aerospace Engineering" },
    { id: "instrumentation-engineering", name: "Instrumentation Engineering" }
  ]
};

export const branchMeta = {
  id: "mechanical-engineering",
  name: "Mechanical Engineering",
  shortName: "ME",
  slug: "mechanical-engineering",
  icon: "settings",
  salaryRange: "₹3.5 - ₹40 LPA",
  hiringIndustries: "Automotive, Aerospace, Manufacturing, Energy, GCCs",
  jobOpenings: "15,000+",
  description: "Design, manufacturing, thermal systems, and automotive engineering.",
  gradient: "from-stone-50 to-stone-100",
  color: "#78716C"
};
