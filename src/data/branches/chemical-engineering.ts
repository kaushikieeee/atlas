export const chemicalEngineering = {
  id: "chemical-engineering",
  name: "Chemical Engineering",
  shortName: "ChE",
  tagline: "The Complete Guide to Chemical Engineering Careers in India",
  description:
    "Chemical engineering bridges chemistry, physics, and engineering to design and operate processes that transform raw materials into valuable products. In India, chemical engineers are in high demand across oil refineries, petrochemical complexes, pharmaceutical manufacturing, fertilizer plants, and specialty chemical industries. The field offers excellent PSU opportunities through GATE (IOCL, BPCL, HPCL, GAIL) alongside private sector roles in process design, production, and R&D.",
  color: "#7C3AED",

  overview: {
    introduction:
      "Chemical engineering bridges chemistry, physics, and engineering to design and operate processes that transform raw materials into valuable products. In India, chemical engineers are in high demand across oil refineries, petrochemical complexes, pharmaceutical manufacturing, fertilizer plants, and specialty chemical industries. The field offers excellent PSU opportunities through GATE (IOCL, BPCL, HPCL, GAIL) alongside private sector roles in process design, production, and R&D.",
    duration: "4 years (B.Tech / B.E.)",
    avgFees: "₹1,50,000 - ₹6,00,000 (total)",
    difficulty: "Moderate to High",
    skillsRequired: [
      "Strong foundation in mass and energy balances",
      "Understanding of transport phenomena (fluid flow, heat & mass transfer)",
      "Proficiency in process simulation (Aspen Plus, HYSYS)",
      "Knowledge of chemical reaction engineering and thermodynamics",
      "Familiarity with process control and instrumentation",
      "Understanding of P&IDs and process design",
      "Knowledge of safety and environmental regulations",
      "Problem-solving and analytical thinking"
    ],
    tags: ["Oil & Gas", "Pharma", "Chemicals", "Food Processing", "Environmental"]
  },

  salary: {
    overview: "Chemical engineering salaries are competitive, with PSU roles via GATE offering excellent compensation. The sector offers strong job security and growth in core manufacturing.",
    averageStarting: "₹4.5 LPA",
    averageMid: "₹10 LPA",
    averageSenior: "₹25 LPA",
    breakdown: [
      {
        level: "Fresher (0-2 years)",
        range: "₹3.5 - ₹6 LPA",
        median: "₹4.5 LPA",
        top10: "₹8 LPA",
        note: "PSU salaries via GATE are significantly higher at 12-20 LPA"
      },
      {
        level: "Mid-Level (3-7 years)",
        range: "₹7 - ₹15 LPA",
        median: "₹10 LPA",
        top10: "₹18 LPA",
        note: "Higher in oil & gas and petrochemical sectors"
      },
      {
        level: "Senior (8+ years)",
        range: "₹18 - ₹40 LPA",
        median: "₹25 LPA",
        top10: "₹50+ LPA",
        note: "Senior technical managers and consultants earn premium packages"
      }
    ],
    topPayers: [
      { company: "Reliance Industries", range: "₹6 - ₹35 LPA", sector: "Oil & Gas / Petrochemicals" },
      { company: "IOCL", range: "₹12 - ₹35 LPA", sector: "Refining / PSU" },
      { company: "BPCL", range: "₹12 - ₹32 LPA", sector: "Refining / PSU" },
      { company: "HPCL", range: "₹12 - ₹30 LPA", sector: "Refining / PSU" },
      { company: "GAIL", range: "₹12 - ₹28 LPA", sector: "Gas / PSU" },
      { company: "ONGC", range: "₹12 - ₹35 LPA", sector: "Oil & Gas / PSU" }
    ]
  },

  industries: [
    {
      name: "Oil & Gas",
      abbreviation: "OI",
      description: "Refining, petrochemicals, natural gas processing, and exploration",
      growth: "7% YoY",
      market: "$200B+",
      detail: "India's petroleum refining and petrochemical sector is among the largest employers for chemical engineers. PSUs like IOCL, BPCL, HPCL, and GAIL offer excellent salaries through GATE recruitment. Private giants like Reliance dominate with massive integrated complexes. The sector is evolving with biofuels, green hydrogen, and petrochemical expansion.",
      topCompanies: ["Reliance Industries", "IOCL", "BPCL", "HPCL", "GAIL", "ONGC"]
    },
    {
      name: "Pharma",
      abbreviation: "PH",
      description: "API manufacturing, formulation, and drug development",
      growth: "10% YoY",
      market: "$50B by 2025",
      detail: "India is the world's largest manufacturer of generic drugs. Chemical engineers are crucial in API synthesis, process development, scale-up, and cGMP-compliant manufacturing.",
      topCompanies: ["Sun Pharma", "Dr. Reddy's", "Cipla", "Aurobindo Pharma", "Lupin", "Divis Laboratories"]
    },
    {
      name: "Chemicals",
      abbreviation: "CH",
      description: "Commodity chemicals, specialty chemicals, and agricultural inputs",
      growth: "9% YoY",
      market: "$180B by 2025",
      detail: "India's chemical industry is the 6th largest globally. Demand spans commodity chemicals, specialty chemicals, agrochemicals, and fertilizers essential for Indian agriculture.",
      topCompanies: ["Tata Chemicals", "UPL", "Gujarat Fluorochemicals", "Coromandel", "Deepak Nitrite", "SRF"]
    },
    {
      name: "Food Processing",
      abbreviation: "FO",
      description: "Food preservation, processing, packaging, and quality control",
      growth: "11% YoY",
      market: "$535B by 2025",
      detail: "India's food processing industry is expanding rapidly with government initiatives like PMKSY. Chemical engineers work on process design, preservation, quality control, and packaging.",
      topCompanies: ["Nestlé India", "Britannia", "ITC Foods", "Amul", "Parle Agro", "Mother Dairy"]
    },
    {
      name: "Environmental",
      abbreviation: "EN",
      description: "Water treatment, waste management, and pollution control",
      growth: "12% YoY",
      market: "$30B by 2026",
      detail: "Increasing environmental regulations and water scarcity drive demand for chemical engineers in effluent treatment, water recycling, air pollution control, and waste-to-energy projects.",
      topCompanies: ["VA Tech Wabag", "Thermax", "Ion Exchange", "Eureka Forbes", "Suez India", "Aquatech"]
    }
  ],

  jobRoles: [
    {
      title: "PSU Engineer (IOCL/BPCL/HPCL/GAIL)",
      description: "Process operations, maintenance, and technical services at refineries and gas plants. Recruited via GATE.",
      tools: ["GATE", "Aspen", "DCS"],
      tiers: [
        { tier: 1, chance: "High", salary: "₹12 - ₹20 LPA" },
        { tier: 2, chance: "High", salary: "₹12 - ₹20 LPA" },
        { tier: 3, chance: "Medium", salary: "₹12 - ₹20 LPA" }
      ]
    },
    {
      title: "Process Engineer",
      description: "Design and optimize refinery units, petrochemical plants, and downstream processes using HYSYS/Aspen.",
      tools: ["Aspen Plus", "HYSYS", "AutoCAD"],
      tiers: [
        { tier: 1, chance: "High", salary: "₹8 - ₹16 LPA" },
        { tier: 2, chance: "Medium", salary: "₹5 - ₹10 LPA" },
        { tier: 3, chance: "Low", salary: "₹4 - ₹7 LPA" }
      ]
    },
    {
      title: "Production Engineer",
      description: "Manage day-to-day plant operations, troubleshoot process issues, and optimize throughput.",
      tools: ["DCS", "SCADA", "SAP"],
      tiers: [
        { tier: 1, chance: "High", salary: "₹7 - ₹14 LPA" },
        { tier: 2, chance: "High", salary: "₹5 - ₹10 LPA" },
        { tier: 3, chance: "Medium", salary: "₹4 - ₹7 LPA" }
      ]
    },
    {
      title: "Technical Services Engineer",
      description: "Process simulation, yield optimization, energy efficiency, and technical support for operations.",
      tools: ["Aspen Plus", "HTRI", "MATLAB"],
      tiers: [
        { tier: 1, chance: "High", salary: "₹9 - ₹18 LPA" },
        { tier: 2, chance: "Medium", salary: "₹6 - ₹12 LPA" },
        { tier: 3, chance: "Low", salary: "₹4 - ₹8 LPA" }
      ]
    },
    {
      title: "Inspection Engineer",
      description: "Equipment integrity, corrosion monitoring, statutory inspections, and reliability engineering.",
      tools: ["NDT tools", "CMMS", "API codes"],
      tiers: [
        { tier: 1, chance: "Medium", salary: "₹7 - ₹14 LPA" },
        { tier: 2, chance: "High", salary: "₹5 - ₹10 LPA" },
        { tier: 3, chance: "High", salary: "₹4 - ₹8 LPA" }
      ]
    }
  ],

  topCompanies: {
    overview: "India's chemical engineering graduates are recruited by the country's largest oil & gas companies, PSUs, pharmaceutical firms, and chemical manufacturers.",
    companies: [
      { name: "Reliance Industries", abbreviation: "RIL", location: "Jamnagar, Mumbai", sector: "Oil & Gas / Petrochemicals" },
      { name: "Indian Oil Corporation", abbreviation: "IOCL", location: "Pan India refineries, Delhi", sector: "Refining / PSU" },
      { name: "Bharat Petroleum", abbreviation: "BPCL", location: "Mumbai, Kochi", sector: "Refining / PSU" },
      { name: "Hindustan Petroleum", abbreviation: "HPCL", location: "Mumbai, Visakhapatnam", sector: "Refining / PSU" },
      { name: "GAIL India", abbreviation: "GAIL", location: "Delhi, Hazira", sector: "Gas / PSU" },
      { name: "ONGC", abbreviation: "ONGC", location: "Dehradun, Mumbai", sector: "Oil & Gas / PSU" }
    ]
  },

  collegeTiers: {
    overview: "Chemical engineering placements are strong in Tier 1 colleges, while PSU recruitment via GATE provides excellent opportunities across all tiers.",
    tiers: [
      {
        tier: "Tier 1",
        examples: ["IIT Bombay", "IIT Delhi", "IIT Madras", "IIT Kharagpur", "ICT Mumbai"],
        averagePackage: "₹12 - ₹20 LPA",
        topRecruiters: ["Reliance", "IOCL", "BPCL", "HPCL", "GAIL", "BCG", "McKinsey"],
        placementRate: "85-95%",
        notes: "Many graduates also transition into consulting, finance, and tech roles"
      },
      {
        tier: "Tier 2",
        examples: ["NIT Trichy", "NIT Warangal", "NIT Surathkal", "BITS Pilani", "UPES Dehradun"],
        averagePackage: "₹6 - ₹12 LPA",
        topRecruiters: ["Reliance", "BPCL", "HPCL", "L&T", "UPL", "Tata Chemicals"],
        placementRate: "70-80%",
        notes: "Core process and manufacturing companies are primary recruiters"
      },
      {
        tier: "Tier 3",
        examples: ["Any AICTE college (for PSUs via GATE)", "State engineering colleges"],
        averagePackage: "₹4 - ₹7 LPA",
        topRecruiters: ["PSUs via GATE", "Mid-size chemical firms", "Pharma companies", "Food processing plants"],
        placementRate: "40-60%",
        notes: "GATE is the primary gateway for PSU jobs with excellent compensation"
      }
    ]
  },

  interviewTopics: [
    { topic: "Mass Transfer", count: 50 },
    { topic: "Heat Transfer", count: 50 },
    { topic: "Fluid Mechanics", count: 50 },
    { topic: "Reaction Engineering", count: 50 },
    { topic: "Process Control", count: 50 },
    { topic: "Chemical Thermodynamics", count: 50 },
    { topic: "Process Design", count: 50 },
    { topic: "Petroleum & Petrochemicals", count: 50 }
  ],

  interviewQuestions: {
    total: 400,
    samples: [
      {
        question: "What is mass transfer and how does it differ from heat transfer?",
        answer: "",
        topic: "Mass Transfer",
        difficulty: "Easy"
      },
      {
        question: "Explain the McCabe-Thiele method for distillation column design.",
        answer: "",
        topic: "Mass Transfer",
        difficulty: "Medium"
      },
      {
        question: "What is Reynolds number and what does it indicate?",
        answer: "",
        topic: "Fluid Mechanics",
        difficulty: "Easy"
      },
      {
        question: "Derive the design equation for a CSTR.",
        answer: "",
        topic: "Reaction Engineering",
        difficulty: "Medium"
      },
      {
        question: "What is Model Predictive Control (MPC) and when should it be used?",
        answer: "",
        topic: "Process Control",
        difficulty: "Hard"
      }
    ]
  },

  resources: {
    books: [
      { name: "Unit Operations of Chemical Engineering", author: "McCabe, Smith & Harriott" },
      { name: "Chemical Engineering Thermodynamics", author: "Smith, Van Ness & Abbott" },
      { name: "Chemical Reaction Engineering", author: "Octave Levenspiel" },
      { name: "Transport Phenomena", author: "Bird, Stewart & Lightfoot" },
      { name: "Process Heat Transfer", author: "D.Q. Kern" },
      { name: "Process Dynamics and Control", author: "Seborg, Edgar & Mellichamp" }
    ],
    platforms: [
      { name: "NPTEL", description: "Free courses from IITs on chemical engineering fundamentals" },
      { name: "Coursera", description: "Specialisations in process design, simulation, and safety" },
      { name: "Udemy", description: "Affordable courses on Aspen Plus, HYSYS, and HTRI" }
    ],
    certifications: [
      "NPTEL Course Certificates",
      "GATE Qualified (for PSU recruitment)",
      "ASME B31.3 Process Piping Certification",
      "API 510/570 Pressure Vessel Inspector",
      "Six Sigma Green / Black Belt",
      "Certified Process Safety Professional (CPSP)"
    ],
  },

  futureTrends: [
    {
      trend: "Green Hydrogen & Decarbonisation",
      impact: "Very High",
      description: "India's National Green Hydrogen Mission is creating demand for chemical engineers in electrolysis, carbon capture, and clean fuel production."
    },
    {
      trend: "Digitalisation & Industry 4.0",
      impact: "Very High",
      description: "AI/ML for process optimisation, digital twins, and advanced process control are transforming chemical plant operations."
    },
    {
      trend: "Biofuels & Biochemicals",
      impact: "High",
      description: "Sustainable aviation fuel, bio-based chemicals, and waste-to-value technologies are emerging as major growth areas."
    },
    {
      trend: "Specialty Chemicals & Materials",
      impact: "High",
      description: "India's specialty chemical sector is growing at 12-14% annually, driven by global supply chain diversification."
    },
    {
      trend: "Process Intensification",
      impact: "High",
      description: "Microreactors, reactive distillation, and membrane technologies are enabling smaller, safer, and more efficient processes."
    }
  ],

  relatedBranches: [
    { id: "biotechnology", name: "Biotechnology" },
    { id: "mechanical-engineering", name: "Mechanical Engineering" },
    { id: "civil-engineering", name: "Civil Engineering" }
  ]
};

export const branchMeta = {
  id: "chemical-engineering",
  name: "Chemical Engineering",
  shortName: "ChE",
  slug: "chemical-engineering",
  icon: "flask-conical",
  salaryRange: "₹3.5 - ₹40 LPA",
  hiringIndustries: "Oil & Gas, Pharma, Chemicals, Food Processing, Environmental",
  jobOpenings: "8,000+",
  description: "Process design, chemical manufacturing, and materials engineering.",
  gradient: "from-purple-50 to-purple-100",
  color: "#7C3AED"
};
