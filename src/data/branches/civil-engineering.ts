export const civilEngineering = {
  id: "civil-engineering",
  name: "Civil Engineering",
  shortName: "CE",
  tagline: "The Complete Guide to Civil Engineering Careers in India",
  description:
    "Civil engineering is the oldest engineering discipline and remains fundamental to India's infrastructure development. With ambitious government initiatives like Smart Cities Mission, Bharatmala, Sagarmala, and Housing for All, civil engineers are in high demand across construction, transportation, and urban development sectors. The field offers diverse career paths from site engineering and structural design to project management and government services through GATE-based PSU recruitment.",
  color: "#78716C",

  overview: {
    introduction:
      "Civil engineering is the oldest engineering discipline and remains fundamental to India's infrastructure development. With ambitious government initiatives like Smart Cities Mission, Bharatmala, Sagarmala, and Housing for All, civil engineers are in high demand across construction, transportation, and urban development sectors.",
    duration: "4 years (B.Tech / B.E.)",
    avgFees: "₹1,50,000 - ₹5,00,000 (total)",
    difficulty: "Moderate",
    skillsRequired: [
      "Strong foundation in structural mechanics and analysis",
      "Proficiency in design software (STAAD Pro, ETABS, AutoCAD)",
      "Understanding of construction materials and methods",
      "Knowledge of geotechnical engineering and soil mechanics",
      "Familiarity with project planning tools (Primavera, MS Project)",
      "Surveying and measurement skills",
      "Knowledge of IS codes and standards",
      "Problem-solving and analytical thinking"
    ],
    tags: ["Construction", "Infrastructure", "Real Estate", "Transportation", "Water Resources", "Government/PSUs"]
  },

  salary: {
    overview: "Civil engineering salaries in India vary based on sector (private vs. government/PSU), college tier, and specialisation. Government roles via GATE offer stability and good benefits.",
    averageStarting: "₹4 LPA",
    averageMid: "₹8 LPA",
    averageSenior: "₹20 LPA",
    breakdown: [
      {
        level: "Fresher (0-2 years)",
        range: "₹3 - ₹5.5 LPA",
        median: "₹4 LPA",
        top10: "₹7 LPA",
        note: "PSU salaries via GATE are significantly higher with better benefits"
      },
      {
        level: "Mid-Level (3-7 years)",
        range: "₹6 - ₹12 LPA",
        median: "₹8 LPA",
        top10: "₹15 LPA",
        note: "Higher in infrastructure and real estate development"
      },
      {
        level: "Senior (8+ years)",
        range: "₹15 - ₹35 LPA",
        median: "₹20 LPA",
        top10: "₹45+ LPA",
        note: "Senior project managers and consultants earn premium packages"
      }
    ],
    topPayers: [
      { company: "L&T", range: "₹5 - ₹25 LPA", sector: "Construction & EPC" },
      { company: "Tata Projects", range: "₹5 - ₹20 LPA", sector: "Infrastructure" },
      { company: "Shapoorji Pallonji", range: "₹4.5 - ₹18 LPA", sector: "Construction" },
      { company: "Afcons Infrastructure", range: "₹5 - ₹20 LPA", sector: "Infrastructure" },
      { company: "Gammon India", range: "₹4 - ₹15 LPA", sector: "Construction" },
      { company: "NCC Limited", range: "₹4.5 - ₹16 LPA", sector: "Construction" }
    ]
  },

  industries: [
    {
      name: "Construction & Infrastructure",
      abbreviation: "CO",
      description: "Building construction, highways, bridges, and industrial projects",
      growth: "10% YoY",
      market: "$800B by 2030",
      detail: "India's construction industry is the second-largest employer after agriculture. With massive infrastructure investments through PM Gati Shakti and National Infrastructure Pipeline (NIP), the sector is witnessing unprecedented growth in highways, metros, airports, and industrial corridors.",
      topCompanies: ["L&T", "Shapoorji Pallonji", "Tata Projects", "Afcons", "NCC Limited", "HCC"]
    },
    {
      name: "Real Estate Development",
      abbreviation: "RE",
      description: "Residential, commercial, and integrated township development",
      growth: "8% YoY",
      market: "$1 Trillion by 2030",
      detail: "India's real estate sector is projected to reach $1 trillion by 2030. Urbanisation and rising middle-class demand are driving residential and commercial development across Tier 1 and Tier 2 cities.",
      topCompanies: ["DLF", "Godrej Properties", "Oberoi Realty", "Prestige Estates", "Brigade Group", "Sobha Limited"]
    },
    {
      name: "Transportation & Highways",
      abbreviation: "TR",
      description: "Roads, bridges, tunnels, metro rail, and airport development",
      growth: "12% YoY",
      market: "$200B+ by 2025",
      detail: "The Bharatmala Pariyojana and National Infrastructure Pipeline are driving massive investment in highways, expressways, metro rail, and airport expansion across India.",
      topCompanies: ["NHAI", "L&T", "IRB Infrastructure", "Welspun Enterprises", "PNC Infratech", "Sadbhav Engineering"]
    },
    {
      name: "Water Resources & Environment",
      abbreviation: "WA",
      description: "Dams, irrigation, water supply, and environmental management",
      growth: "9% YoY",
      market: "$50B+",
      detail: "India's focus on water security, irrigation modernisation, and river interlinking projects creates opportunities in hydrology, dam design, and water distribution systems.",
      topCompanies: ["WAPCOS", "NHPC", "Moser Baer Projects", "Megha Engineering", "TRF Limited"]
    },
    {
      name: "Government & PSUs",
      abbreviation: "GO",
      description: "Public sector engineering and government infrastructure departments",
      growth: "Stable",
      market: "Government Sector",
      detail: "PSUs like NBCC, CPWD, RITES, and state PWDs recruit civil engineers through GATE scores. These roles offer excellent job security, work-life balance, and retirement benefits.",
      topCompanies: ["NBCC", "CPWD", "RITES", "PGCIL (Civil Wing)", "State PWDs", "Military Engineering Services"]
    }
  ],

  jobRoles: [
    {
      title: "Site Engineer",
      description: "Supervise construction activities, ensure quality and safety compliance on-site",
      tools: ["AutoCAD", "MS Project", "Total Station"],
      tiers: [
        { tier: 1, chance: "Medium", salary: "₹5 - ₹8 LPA" },
        { tier: 2, chance: "High", salary: "₹4 - ₹6 LPA" },
        { tier: 3, chance: "High", salary: "₹3 - ₹4.5 LPA" }
      ]
    },
    {
      title: "Structural Design Engineer",
      description: "Design RCC and steel structures using STAAD Pro, ETABS, SAP2000",
      tools: ["STAAD Pro", "ETABS", "SAP2000", "AutoCAD"],
      tiers: [
        { tier: 1, chance: "High", salary: "₹7 - ₹12 LPA" },
        { tier: 2, chance: "High", salary: "₹5 - ₹8 LPA" },
        { tier: 3, chance: "Medium", salary: "₹3.5 - ₹6 LPA" }
      ]
    },
    {
      title: "Project Manager",
      description: "Manage construction projects, coordinate teams, control budgets and timelines",
      tools: ["Primavera P6", "MS Project", "SAP", "BIM"],
      tiers: [
        { tier: 1, chance: "High", salary: "₹15 - ₹30 LPA" },
        { tier: 2, chance: "Medium", salary: "₹10 - ₹18 LPA" },
        { tier: 3, chance: "Low", salary: "₹8 - ₹14 LPA" }
      ]
    },
    {
      title: "Planning Engineer",
      description: "Create project schedules using Primavera P6/MS Project, track progress",
      tools: ["Primavera P6", "MS Project", "Excel"],
      tiers: [
        { tier: 1, chance: "High", salary: "₹6 - ₹10 LPA" },
        { tier: 2, chance: "High", salary: "₹4.5 - ₹7 LPA" },
        { tier: 3, chance: "Medium", salary: "₹3.5 - ₹5.5 LPA" }
      ]
    },
    {
      title: "QA/QC Engineer",
      description: "Ensure construction quality, conduct material testing, maintain documentation",
      tools: ["Testing equipment", "ISO standards", "Excel"],
      tiers: [
        { tier: 1, chance: "High", salary: "₹5 - ₹8 LPA" },
        { tier: 2, chance: "High", salary: "₹4 - ₹6 LPA" },
        { tier: 3, chance: "High", salary: "₹3 - ₹5 LPA" }
      ]
    },
    {
      title: "Estimation Engineer",
      description: "Prepare BOQs, cost estimates, rate analysis for tenders and projects",
      tools: ["AutoCAD", "Excel", "Quantity surveying software"],
      tiers: [
        { tier: 1, chance: "High", salary: "₹6 - ₹10 LPA" },
        { tier: 2, chance: "High", salary: "₹4.5 - ₹7 LPA" },
        { tier: 3, chance: "Medium", salary: "₹3.5 - ₹5 LPA" }
      ]
    }
  ],

  topCompanies: {
    overview: "India's civil engineering graduates are recruited by India's largest infrastructure companies, real estate developers, and government PSUs across the country.",
    companies: [
      { name: "Larsen & Toubro", abbreviation: "L&T", location: "Mumbai, Chennai", sector: "Construction & EPC" },
      { name: "Shapoorji Pallonji", abbreviation: "SP", location: "Mumbai, Bengaluru", sector: "Construction" },
      { name: "Tata Projects", abbreviation: "TP", location: "Hyderabad, Mumbai", sector: "Infrastructure" },
      { name: "Afcons Infrastructure", abbreviation: "AF", location: "Mumbai, Project Sites Nationwide", sector: "Infrastructure" },
      { name: "NCC Limited", abbreviation: "NCC", location: "Hyderabad, Bengaluru", sector: "Construction" },
      { name: "HCC", abbreviation: "HCC", location: "Mumbai, Project Sites", sector: "Construction" }
    ]
  },

  collegeTiers: {
    overview: "Civil engineering placements are more evenly distributed across tiers compared to other branches, with many opportunities in government and PSU sectors.",
    tiers: [
      {
        tier: "Tier 1",
        examples: ["IIT Madras", "IIT Bombay", "IIT Delhi", "IIT Roorkee", "IIT Kharagpur"],
        averagePackage: "₹10 - ₹18 LPA",
        topRecruiters: ["L&T", "Tata Projects", "Google (data centers)", "Microsoft (infra)", "McKinsey", "BCG"],
        placementRate: "85-95%",
        notes: "Many graduates also transition to consulting and tech roles"
      },
      {
        tier: "Tier 2",
        examples: ["NIT Trichy", "NIT Warangal", "NIT Surathkal", "BITS Pilani", "COEP", "VJTI"],
        averagePackage: "₹6 - ₹10 LPA",
        topRecruiters: ["L&T", "Shapoorji Pallonji", "Afcons", "Tata Projects", "Godrej Properties"],
        placementRate: "70-80%",
        notes: "Core construction and infrastructure companies are primary recruiters"
      },
      {
        tier: "Tier 3",
        examples: ["State engineering colleges", "Private colleges with industry tie-ups"],
        averagePackage: "₹3.5 - ₹6 LPA",
        topRecruiters: ["Mid-size construction firms", "State PWDs", "Real estate developers", "PSUs via GATE"],
        placementRate: "40-60%",
        notes: "GATE is the primary gateway for PSU jobs with excellent compensation"
      }
    ]
  },

  interviewTopics: [
    { topic: "Structural Analysis", count: 50 },
    { topic: "Concrete Technology", count: 50 },
    { topic: "Geotechnical Engineering", count: 50 },
    { topic: "Transportation Engineering", count: 50 },
    { topic: "Water Resources Engineering", count: 50 },
    { topic: "Construction Management", count: 50 },
    { topic: "Environmental Engineering", count: 50 },
    { topic: "Surveying & GIS", count: 50 }
  ],

  interviewQuestions: {
    total: 400,
    samples: [
      {
        question: "What is the difference between one-way and two-way slab?",
        answer: "",
        topic: "Structural Analysis",
        difficulty: "Easy"
      },
      {
        question: "Explain the concept of workability in concrete and factors affecting it.",
        answer: "",
        topic: "Concrete Technology",
        difficulty: "Medium"
      },
      {
        question: "What is bearing capacity of soil and how is it determined?",
        answer: "",
        topic: "Geotechnical Engineering",
        difficulty: "Medium"
      },
      {
        question: "What is the CBR test and why is it important for pavement design?",
        answer: "",
        topic: "Transportation Engineering",
        difficulty: "Medium"
      },
      {
        question: "What is CPM and PERT? How do they differ?",
        answer: "",
        topic: "Construction Management",
        difficulty: "Easy"
      }
    ]
  },

  resources: {
    books: [
      { name: "Design of Reinforced Concrete Structures", author: "Pillai & Menon" },
      { name: "Soil Mechanics and Foundations", author: "Murthy" },
      { name: "Highway Engineering", author: "Khanna & Justo" },
      { name: "Water Resources Engineering", author: "Linsley & Franzini" },
      { name: "Construction Planning and Management", author: "P.S. Gahlot" },
      { name: "Environmental Engineering", author: "Peavy, Rowe & Tchobanoglous" }
    ],
    platforms: [
      { name: "NPTEL", description: "Free courses from IITs on all civil engineering subjects" },
      { name: "Coursera", description: "Specialisations in structural engineering, BIM, and construction management" },
      { name: "Skill-Lync", description: "Industry-oriented PG programmes in structural and civil domains" },
      { name: "Udemy", description: "Affordable courses on STAAD Pro, ETABS, and Primavera P6" }
    ],
    certifications: [
      "NPTEL Course Certificates",
      "AutoCAD Certified Professional",
      "Primavera P6 Certification",
      "LEED Green Associate",
      "GATE Qualified (for PSU recruitment)",
      "ISO 9001 Internal Auditor"
    ],
    skillLync: [
      {
        title: "FEA Fundamentals",
        abbreviation: "FEA",
        description: "Structural analysis using finite element methods"
      },
      {
        title: "Engineering Materials",
        abbreviation: "MAT",
        description: "Material properties and selection for construction"
      },
      {
        title: "GD&T Fundamentals",
        abbreviation: "GDT",
        description: "Geometric dimensioning for structural detailing"
      }
    ]
  },

  futureTrends: [
    {
      trend: "Building Information Modeling (BIM)",
      impact: "Very High",
      description: "Digital twins and BIM are transforming how buildings and infrastructure are designed, constructed, and managed."
    },
    {
      trend: "Smart Cities & Urban Infrastructure",
      impact: "Very High",
      description: "India's Smart Cities Mission is driving demand for engineers skilled in intelligent infrastructure and urban planning."
    },
    {
      trend: "Sustainable & Green Construction",
      impact: "High",
      description: "Green building materials, energy-efficient designs, and net-zero construction are becoming industry standards."
    },
    {
      trend: "Prefabrication & Modular Construction",
      impact: "High",
      description: "Off-site manufacturing and modular construction are improving speed, quality, and cost efficiency in building projects."
    },
    {
      trend: "High-Speed Rail & Metro Networks",
      impact: "High",
      description: "India's ambitious bullet train project and metro expansion in 20+ cities are creating specialised engineering roles."
    }
  ],

  relatedBranches: [
    { id: "mechanical-engineering", name: "Mechanical Engineering" },
    { id: "electrical-engineering", name: "Electrical Engineering" },
    { id: "chemical-engineering", name: "Chemical Engineering" }
  ]
};

export const branchMeta = {
  id: "civil-engineering",
  name: "Civil Engineering",
  shortName: "CE",
  slug: "civil-engineering",
  icon: "building2",
  salaryRange: "₹3 - ₹35 LPA",
  hiringIndustries: "Construction, Infrastructure, Real Estate, Transportation, Water Resources",
  jobOpenings: "10,000+",
  description: "Structural design, construction management, urban planning, and infrastructure.",
  gradient: "from-stone-50 to-stone-100",
  color: "#78716C"
};
