export const electricalEngineering = {
  id: "electrical-engineering",
  name: "Electrical Engineering",
  shortName: "EE",
  tagline: "The Complete Guide to Electrical Engineering Careers in India",
  description:
    "Electrical Engineering is one of the most versatile and in-demand engineering disciplines in India. It covers power generation and distribution, electrical machines, control systems, power electronics, and renewable energy systems. With India's ambitious goals for renewable energy capacity (500 GW by 2030) and power infrastructure modernization, electrical engineers are critical to the nation's development. The field offers opportunities in PSUs (through GATE), private utilities, manufacturing, automation, and the rapidly growing renewable energy sector.",
  color: "#6366F1",

  overview: {
    introduction:
      "Electrical Engineering is one of the most versatile and in-demand engineering disciplines in India. It covers power generation and distribution, electrical machines, control systems, power electronics, and renewable energy systems. With India's ambitious goals for renewable energy capacity (500 GW by 2030) and power infrastructure modernization, electrical engineers are critical to the nation's development.",
    duration: "4 years (B.Tech / B.E.)",
    avgFees: "₹2,00,000 - ₹7,00,000 (total)",
    difficulty: "Moderate",
    skillsRequired: [
      "Strong foundation in circuit analysis and network theory",
      "Understanding of electromagnetic field theory",
      "Proficiency in MATLAB/Simulink and PSCAD/EMTP",
      "Knowledge of power systems and protection schemes",
      "Familiarity with PLC, SCADA, and industrial automation",
      "Problem-solving and analytical thinking",
      "Project management and teamwork",
      "Understanding of electrical codes and standards (IEC, IEEE, IS)"
    ],
    tags: ["Power", "Renewables", "Automation", "Electronics", "Manufacturing", "Utilities"]
  },

  salary: {
    overview: "Electrical engineering salaries in India vary significantly based on college tier, sector (PSU vs. private), and specialisation. Below is a comprehensive breakdown of salary expectations at different career stages.",
    averageStarting: "₹5 LPA",
    averageMid: "₹12 LPA",
    averageSenior: "₹28 LPA",
    breakdown: [
      {
        level: "Fresher (0-2 years)",
        range: "₹3.5 - ₹7 LPA",
        median: "₹5 LPA",
        top10: "₹10 LPA",
        note: "PSU salaries via GATE are significantly higher"
      },
      {
        level: "Mid-Level (3-7 years)",
        range: "₹8 - ₹18 LPA",
        median: "₹12 LPA",
        top10: "₹22 LPA",
        note: "Higher in renewable energy and automation sectors"
      },
      {
        level: "Senior (8+ years)",
        range: "₹20 - ₹45 LPA",
        median: "₹28 LPA",
        top10: "₹60+ LPA",
        note: "Leadership roles in PSUs and global energy companies"
      }
    ],
    topPayers: [
      { company: "NTPC", range: "₹10 - ₹35 LPA", sector: "Power Generation" },
      { company: "Power Grid (PGCIL)", range: "₹10 - ₹30 LPA", sector: "Transmission" },
      { company: "Tata Power", range: "₹6 - ₹22 LPA", sector: "Utility" },
      { company: "Adani Power", range: "₹6 - ₹20 LPA", sector: "Power Generation" },
      { company: "Siemens", range: "₹8 - ₹25 LPA", sector: "Industrial Automation" },
      { company: "ABB", range: "₹7 - ₹24 LPA", sector: "Power & Automation" },
      { company: "Schneider Electric", range: "₹6 - ₹20 LPA", sector: "Energy Management" },
      { company: "L&T", range: "₹5 - ₹18 LPA", sector: "EPC & Infrastructure" }
    ]
  },

  industries: [
    {
      name: "Power Generation & Transmission",
      abbreviation: "PO",
      description: "Power plants, grid infrastructure, and distribution",
      growth: "6% YoY",
      market: "$180B by 2026",
      detail: "India's power sector is the 3rd largest in the world with over 400 GW installed capacity. PSUs like NTPC, PGCIL, and state electricity boards are major employers. GATE-based recruitment provides access to all tiers with excellent pay and job security.",
      topCompanies: ["NTPC", "PGCIL", "NHPC", "State Electricity Boards", "Tata Power", "Adani Power"]
    },
    {
      name: "Renewable Energy",
      abbreviation: "RE",
      description: "Solar, wind, and energy storage systems",
      growth: "25% YoY",
      market: "$50B by 2028",
      detail: "India has set a target of 500 GW renewable capacity by 2030. This massive expansion is driving demand for electrical engineers skilled in solar PV design, wind turbine technology, BESS integration, and smart grid solutions.",
      topCompanies: ["Adani Green", "ReNew Power", "Suzlon", "Tata Power Solar", "Sterling & Wilson", "Amp Energy"]
    },
    {
      name: "Industrial Automation",
      abbreviation: "AU",
      description: "Factory automation, PLC/SCADA, and process control",
      growth: "14% YoY",
      market: "$25B by 2027",
      detail: "Industry 4.0 is driving widespread adoption of automation across manufacturing, processing, and packaging. Electrical engineers are needed for designing and maintaining automated systems, robotic cells, and smart factories.",
      topCompanies: ["Siemens", "ABB", "Schneider Electric", "Rockwell Automation", "Mitsubishi Electric", "Honeywell"]
    },
    {
      name: "Electronics Manufacturing",
      abbreviation: "EL",
      description: "PCB design, power supplies, and electronic systems",
      growth: "20% YoY",
      market: "$300B by 2026",
      detail: "India's electronics manufacturing is growing rapidly under the PLI scheme. Electrical engineers work on power supply design, PCB layout, testing, and quality assurance for consumer and industrial electronics.",
      topCompanies: ["Foxconn", "Dixon Technologies", "Videocon", "Bharat Electronics", "CG Power"]
    },
    {
      name: "Utilities & Smart Grid",
      abbreviation: "UT",
      description: "Smart metering, grid modernisation, and distribution",
      growth: "10% YoY",
      market: "$45B by 2028",
      detail: "India's Revamped Distribution Sector Scheme (RDSS) is driving smart meter deployment and grid modernisation. This creates opportunities in smart grid technologies, distribution automation, and energy management systems.",
      topCompanies: ["State DISCOMs", "Tata Power-DDL", "BSES", "CESC", "Smart grid startups"]
    }
  ],

  jobRoles: [
    {
      title: "PSU Engineer (NTPC/PGCIL/State DISCOMs)",
      description: "Power plant operations, grid management, maintenance. Recruited via GATE.",
      tools: ["GATE", "SCADA", "PLCs"],
      tiers: [
        { tier: 1, chance: "High", salary: "₹12 - ₹22 LPA" },
        { tier: 2, chance: "High", salary: "₹10 - ₹18 LPA" },
        { tier: 3, chance: "Medium", salary: "₹8 - ₹14 LPA" }
      ]
    },
    {
      title: "Power Systems Engineer",
      description: "Design and analyze transmission/distribution networks, perform load flow studies",
      tools: ["PSAT", "PSCAD", "ETAP", "MATLAB"],
      tiers: [
        { tier: 1, chance: "High", salary: "₹10 - ₹18 LPA" },
        { tier: 2, chance: "Medium", salary: "₹7 - ₹14 LPA" },
        { tier: 3, chance: "Low", salary: "₹5 - ₹9 LPA" }
      ]
    },
    {
      title: "Substation Engineer",
      description: "Design, commission, and maintain substations and switchgear",
      tools: ["AutoCAD", "ETAP", "Substation design tools"],
      tiers: [
        { tier: 1, chance: "High", salary: "₹8 - ₹14 LPA" },
        { tier: 2, chance: "High", salary: "₹6 - ₹11 LPA" },
        { tier: 3, chance: "Medium", salary: "₹4 - ₹8 LPA" }
      ]
    },
    {
      title: "Protection & Relay Engineer",
      description: "Design protection schemes, configure relays, perform fault analysis",
      tools: ["ETAP", "PSCAD", "Relay software"],
      tiers: [
        { tier: 1, chance: "High", salary: "₹10 - ₹18 LPA" },
        { tier: 2, chance: "Medium", salary: "₹7 - ₹14 LPA" },
        { tier: 3, chance: "Low", salary: "₹5 - ₹10 LPA" }
      ]
    },
    {
      title: "Grid Operations Engineer",
      description: "Real-time monitoring, load dispatch, and grid stability management at LDCs/SLDCs",
      tools: ["SCADA", "EMS", "MATLAB"],
      tiers: [
        { tier: 1, chance: "High", salary: "₹10 - ₹16 LPA" },
        { tier: 2, chance: "Medium", salary: "₹8 - ₹13 LPA" },
        { tier: 3, chance: "Low", salary: "₹6 - ₹10 LPA" }
      ]
    }
  ],

  topCompanies: {
    overview: "India's electrical engineering graduates are recruited by leading power utilities, PSUs, automation companies, and renewable energy firms across the country.",
    companies: [
      { name: "NTPC", abbreviation: "NT", location: "Pan India power plants", sector: "Power Generation" },
      { name: "Power Grid (PGCIL)", abbreviation: "PG", location: "Gurgaon, Pan India", sector: "Transmission" },
      { name: "NHPC", abbreviation: "NH", location: "Faridabad, Project sites", sector: "Hydro Power" },
      { name: "State Electricity Boards", abbreviation: "SEB", location: "State-wise", sector: "Distribution" },
      { name: "Tata Power", abbreviation: "TP", location: "Mumbai, Delhi", sector: "Utility" },
      { name: "Adani Power", abbreviation: "AP", location: "Ahmedabad, Mundra", sector: "Power Generation" }
    ]
  },

  collegeTiers: {
    overview: "Placement outcomes for electrical engineering vary significantly based on college tier. GATE-based PSU recruitment offers a level playing field for all tiers.",
    tiers: [
      {
        tier: "Tier 1",
        examples: ["IIT Delhi", "IIT Bombay", "IIT Kharagpur", "IIT Madras", "NIT Trichy"],
        averagePackage: "₹12 - ₹20 LPA",
        topRecruiters: ["NTPC", "PGCIL", "Siemens", "ABB", "Goldman Sachs", "Microsoft", "Google"],
        placementRate: "90-100%",
        notes: "Many students secure non-core roles in consulting and tech alongside core power jobs"
      },
      {
        tier: "Tier 2",
        examples: ["NIT Warangal", "NIT Surathkal", "BITS Pilani", "DTU", "NSIT"],
        averagePackage: "₹7 - ₹12 LPA",
        topRecruiters: ["Tata Power", "Adani Power", "Siemens", "L&T", "Schneider Electric", "ABB"],
        placementRate: "75-85%",
        notes: "Core power and automation companies are primary recruiters"
      },
      {
        tier: "Tier 3",
        examples: ["Any AICTE approved college (for PSUs via GATE)"],
        averagePackage: "₹4 - ₹7 LPA",
        topRecruiters: ["PSUs via GATE", "Mid-size electrical firms", "Service companies", "State DISCOMs"],
        placementRate: "40-60%",
        notes: "GATE preparation is the primary path to PSU careers with excellent pay and benefits"
      }
    ]
  },

  interviewTopics: [
    { topic: "Circuit Analysis", count: 50 },
    { topic: "Power Systems", count: 50 },
    { topic: "Electrical Machines", count: 50 },
    { topic: "Control Systems", count: 50 },
    { topic: "Power Electronics", count: 50 },
    { topic: "Instrumentation & Measurement", count: 50 },
    { topic: "Renewable Energy", count: 50 },
    { topic: "Electrical Design", count: 50 }
  ],

  interviewQuestions: {
    total: 400,
    samples: [
      {
        question: "What is the difference between a star and delta connection?",
        answer: "",
        topic: "Power Systems",
        difficulty: "Easy"
      },
      {
        question: "Explain the working principle of a transformer.",
        answer: "",
        topic: "Electrical Machines",
        difficulty: "Easy"
      },
      {
        question: "What is power factor and why is it important?",
        answer: "",
        topic: "Circuit Analysis",
        difficulty: "Medium"
      },
      {
        question: "Explain PID control and how to tune it.",
        answer: "",
        topic: "Control Systems",
        difficulty: "Medium"
      },
      {
        question: "What are the types of DC-DC converters and their applications?",
        answer: "",
        topic: "Power Electronics",
        difficulty: "Medium"
      }
    ]
  },

  resources: {
    books: [
      { name: "Electrical Machines", author: "P.S. Bimbhra" },
      { name: "Power System Engineering", author: "D.P. Kothari & I.J. Nagrath" },
      { name: "Circuit Theory", author: "A. Chakrabarti" },
      { name: "Control Systems", author: "N. Nise" },
      { name: "Power Electronics", author: "M.H. Rashid" },
      { name: "Switchgear Protection & Power Systems", author: "Sunil S. Rao" }
    ],
    platforms: [
      { name: "NPTEL", description: "Free courses from IITs on all electrical subjects" },
      { name: "Coursera", description: "Specialisations in power systems, renewables, and automation" },
      { name: "Skill-Lync", description: "Industry-oriented PG programmes in electrical domains" },
      { name: "Udemy", description: "Affordable courses on MATLAB, PLC, and electrical design" }
    ],
    certifications: [
      "NPTEL Course Certificates",
      "GATE Qualified (for PSU recruitment)",
      "Certified Automation Professional (CAP)",
      "Six Sigma Green / Black Belt",
      "IEEE Membership and publications",
      "PLC & SCADA Certification"
    ],
    skillLync: [
      {
        title: "EV Fundamentals",
        abbreviation: "EV",
        description: "Electric vehicle systems and components"
      },
      {
        title: "FEA Fundamentals",
        abbreviation: "FEA",
        description: "Finite element analysis for electrical systems"
      },
      {
        title: "CFD Fundamentals",
        abbreviation: "CFD",
        description: "Thermal management for power electronics"
      }
    ]
  },

  futureTrends: [
    {
      trend: "Smart Grid & Distribution Automation",
      impact: "Very High",
      description: "India's smart grid market is growing rapidly with RDSS driving smart meter deployment and grid modernisation nationwide."
    },
    {
      trend: "Renewable Energy Integration",
      impact: "Very High",
      description: "500 GW renewable target by 2030 requires massive grid integration, storage solutions, and advanced power electronics."
    },
    {
      trend: "Electric Vehicles & Charging Infrastructure",
      impact: "High",
      description: "EV adoption is creating demand for charging stations, battery management systems, and power conversion technologies."
    },
    {
      trend: "Industry 4.0 & Industrial IoT",
      impact: "High",
      description: "Smart factories and IIoT are transforming industrial automation, creating high-value roles for electrical engineers."
    },
    {
      trend: "Green Hydrogen",
      impact: "High",
      description: "India's National Green Hydrogen Mission is creating opportunities in electrolysis, power conditioning, and grid integration."
    }
  ],

  relatedBranches: [
    { id: "electronics-and-communication-engineering", name: "Electronics & Communication Engineering" },
    { id: "instrumentation-engineering", name: "Instrumentation Engineering" },
    { id: "computer-science-engineering", name: "Computer Science & Engineering" }
  ]
};

export const branchMeta = {
  id: "electrical-engineering",
  name: "Electrical Engineering",
  shortName: "EE",
  slug: "electrical-engineering",
  icon: "cpu",
  salaryRange: "₹3.5 - ₹45 LPA",
  hiringIndustries: "Power, Renewables, Automation, Electronics, Utilities",
  jobOpenings: "12,000+",
  description: "Power generation, transmission, electrical systems, and control engineering.",
  gradient: "from-indigo-50 to-indigo-100",
  color: "#6366F1"
};
