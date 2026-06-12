export const aerospaceEngineering = {
  id: "aerospace-engineering",
  name: "Aerospace Engineering",
  shortName: "AE",
  tagline: "The Complete Guide to Aerospace Engineering Careers in India",
  description:
    "Aerospace engineering combines aerodynamics, propulsion, structures, and avionics to design aircraft and spacecraft. India's aerospace sector has grown from $7 billion to $50 billion by 2024, with a 22% salary growth since 2020. ISRO continues its remarkable streak with Chandrayaan-3 and Gaganyaan missions, while HAL leads indigenous fighter jet production (Tejas, AMCA). The private space revolution — enabled by IN-SPACe reforms — has spawned 200+ space startups including Agnikul (3D-printed rocket engines) and Skyroot (India's first private rocket launch). This is an exciting time with opportunities across government PSUs, defense organizations, and cutting-edge startups.",
  color: "#1D4ED8",

  overview: {
    introduction:
      "Aerospace engineering combines aerodynamics, propulsion, structures, and avionics to design aircraft and spacecraft. India's aerospace sector has grown from $7 billion to $50 billion by 2024, with a 22% salary growth since 2020. ISRO continues its remarkable streak with Chandrayaan-3 and Gaganyaan missions, while HAL leads indigenous fighter jet production (Tejas, AMCA). The private space revolution — enabled by IN-SPACe reforms — has spawned 200+ space startups including Agnikul (3D-printed rocket engines) and Skyroot (India's first private rocket launch). This is an exciting time with opportunities across government PSUs, defense organizations, and cutting-edge startups.",
    duration: "4 years (B.Tech / B.E.)",
    avgFees: "₹2,00,000 - ₹8,00,000 (total)",
    difficulty: "Very High",
    skillsRequired: [
      "Strong foundation in aerodynamics and fluid dynamics",
      "Proficiency in structural analysis and finite element methods",
      "Understanding of propulsion systems and thermodynamics",
      "Knowledge of flight mechanics and control systems",
      "Familiarity with avionics and navigation systems",
      "Experience with CAD and simulation tools (CATIA, ANSYS, MATLAB)",
      "Understanding of spacecraft design and orbital mechanics",
      "Knowledge of aerospace materials and manufacturing processes"
    ],
    tags: ["Space & Satellite", "Defense Aviation", "Commercial Aviation", "Aerospace Manufacturing", "UAV & Drones"]
  },

  salary: {
    overview: "Aerospace engineering salaries in India have grown 22% since 2020, driven by ISRO's expanding missions and the private space boom. Core PSU roles and defense organizations offer strong compensation with excellent job stability.",
    averageStarting: "₹6 LPA",
    averageMid: "₹15 LPA",
    averageSenior: "₹32 LPA",
    breakdown: [
      {
        level: "Fresher (0-2 years)",
        range: "₹4.5 - ₹8 LPA",
        median: "₹6 LPA",
        top10: "₹12 LPA",
        note: "ISRO scientists earn 10-18 LPA; startups offer equity upside"
      },
      {
        level: "Mid-Level (3-7 years)",
        range: "₹10 - ₹20 LPA",
        median: "₹15 LPA",
        top10: "₹25 LPA",
        note: "Defense PSUs and MNCs like Boeing/Airbus pay at the higher end"
      },
      {
        level: "Senior (8+ years)",
        range: "₹20 - ₹45 LPA",
        median: "₹32 LPA",
        top10: "₹60+ LPA",
        note: "Program managers and senior systems engineers command premium"
      }
    ],
    topPayers: [
      { company: "ISRO", range: "₹10 - ₹18 LPA", sector: "Space / PSU" },
      { company: "Boeing India", range: "₹12 - ₹35 LPA", sector: "Commercial Aviation / MNC" },
      { company: "Airbus India", range: "₹12 - ₹30 LPA", sector: "Commercial Aviation / MNC" },
      { company: "HAL", range: "₹8 - ₹20 LPA", sector: "Defense / PSU" },
      { company: "Skyroot Aerospace", range: "₹8 - ₹22 LPA", sector: "Space / Startup" },
      { company: "Agnikul Cosmos", range: "₹8 - ₹20 LPA", sector: "Space / Startup" }
    ]
  },

  industries: [
    {
      name: "Space & Satellite",
      abbreviation: "SP",
      description: "Launch vehicles, satellites, ground systems, and space exploration",
      growth: "20% YoY",
      market: "$13B by 2025",
      detail: "India's space sector is booming with ISRO's commercial launches, Chandrayaan/Gaganyaan missions, and a rapidly growing private space ecosystem. The 2020 space sector reforms opened doors for private players, making this an exciting time for aerospace engineers.",
      topCompanies: ["ISRO", "Skyroot Aerospace", "Agnikul Cosmos", "Pixxel", "Bellatrix Aerospace", "Dhruva Space"]
    },
    {
      name: "Defense Aviation",
      abbreviation: "DE",
      description: "Fighter aircraft, military transport, UAVs, and defense systems",
      growth: "10% YoY",
      market: "$50B by 2030",
      detail: "India's defense aviation sector is led by HAL's Tejas and AMCA programs. The DRDO ecosystem and private defense manufacturers offer significant opportunities for aerospace engineers working on indigenous fighter jets, missiles, and surveillance systems.",
      topCompanies: ["HAL", "DRDO", "ADA", "L&T Defence", "Bharat Electronics"]
    },
    {
      name: "Commercial Aviation",
      abbreviation: "CO",
      description: "Airlines, MRO services, aircraft leasing, and airport operations",
      growth: "12% YoY",
      market: "$30B by 2030",
      detail: "India is the world's third-largest aviation market. The growing fleet size (1,200+ aircraft on order) creates demand for aerospace engineers in airline engineering, MRO facilities, and aircraft management roles.",
      topCompanies: ["Boeing India", "Airbus India", "IndiGo", "Air India", "GMR Aero"]
    },
    {
      name: "Aerospace Manufacturing",
      abbreviation: "AE",
      description: "Aircraft structures, components, sub-assemblies, and systems integration",
      growth: "15% YoY",
      market: "$25B by 2030",
      detail: "India is emerging as a global aerospace manufacturing hub with majors like Boeing and Airbus sourcing components from Indian suppliers. The government's Aerospace PLI scheme is accelerating domestic manufacturing capabilities.",
      topCompanies: ["Tata Advanced Systems", "Dynamatic Technologies", "Aequs", "Mahindra Aerospace", "Rossell Techsys"]
    },
    {
      name: "UAV & Drones",
      abbreviation: "UA",
      description: "Unmanned aerial vehicles, drone delivery, surveillance, and agri-drones",
      growth: "25% YoY",
      market: "$4.5B by 2030",
      detail: "India's drone industry is experiencing explosive growth following the Drone Rules 2021. Applications span defense surveillance, agriculture, logistics, and infrastructure inspection.",
      topCompanies: ["ideaForge", "DJI India", "Asteria Aerospace", "Garuda Aerospace", "Throttle Aerospace"]
    }
  ],

  jobRoles: [
    {
      title: "Scientist/Engineer (ISRO)",
      description: "Design and develop launch vehicles, satellites, and ground systems. Recruited via ICRB exam.",
      tools: ["ICRB", "CAD", "MATLAB"],
      tiers: [
        { tier: 1, chance: "High", salary: "₹10 - ₹18 LPA" },
        { tier: 2, chance: "Medium", salary: "₹10 - ₹16 LPA" },
        { tier: 3, chance: "Low", salary: "₹10 - ₹14 LPA" }
      ]
    },
    {
      title: "Propulsion Engineer",
      description: "Design and test rocket engines, solid/liquid propulsion systems, and electric propulsion.",
      tools: ["CFD", "MATLAB", "ProE"],
      tiers: [
        { tier: 1, chance: "High", salary: "₹12 - ₹22 LPA" },
        { tier: 2, chance: "Medium", salary: "₹8 - ₹15 LPA" },
        { tier: 3, chance: "Not available", salary: "N/A" }
      ]
    },
    {
      title: "Satellite Systems Engineer",
      description: "Design satellite subsystems including power, thermal, attitude control, and payload integration.",
      tools: ["STK", "MATLAB", "CAD"],
      tiers: [
        { tier: 1, chance: "High", salary: "₹10 - ₹20 LPA" },
        { tier: 2, chance: "Medium", salary: "₹7 - ₹14 LPA" },
        { tier: 3, chance: "Low", salary: "₹5 - ₹10 LPA" }
      ]
    },
    {
      title: "GNC Engineer",
      description: "Develop guidance, navigation, and control algorithms for rockets and spacecraft.",
      tools: ["MATLAB/Simulink", "C++", "Python"],
      tiers: [
        { tier: 1, chance: "High", salary: "₹14 - ₹25 LPA" },
        { tier: 2, chance: "Low", salary: "₹10 - ₹18 LPA" },
        { tier: 3, chance: "Not available", salary: "N/A" }
      ]
    },
    {
      title: "Ground Systems Engineer",
      description: "Design and operate launch pads, mission control, and tracking systems.",
      tools: ["SCADA", "RF systems", "C++"],
      tiers: [
        { tier: 1, chance: "High", salary: "₹9 - ₹16 LPA" },
        { tier: 2, chance: "Medium", salary: "₹7 - ₹12 LPA" },
        { tier: 3, chance: "Medium", salary: "₹6 - ₹10 LPA" }
      ]
    }
  ],

  topCompanies: {
    overview: "India's aerospace engineering graduates are recruited by ISRO, defense PSUs, global aviation giants like Boeing and Airbus, and a growing number of private space startups.",
    companies: [
      { name: "ISRO", abbreviation: "IS", location: "Bangalore, Thiruvananthapuram", sector: "Space" },
      { name: "Agnikul Cosmos", abbreviation: "AG", location: "Chennai", sector: "Space / Startup" },
      { name: "Skyroot Aerospace", abbreviation: "SK", location: "Hyderabad", sector: "Space / Startup" },
      { name: "Pixxel", abbreviation: "PX", location: "Bangalore", sector: "Space / Startup" },
      { name: "Bellatrix Aerospace", abbreviation: "BX", location: "Bangalore", sector: "Space / Startup" },
      { name: "Dhruva Space", abbreviation: "DS", location: "Hyderabad", sector: "Space / Startup" }
    ]
  },

  collegeTiers: {
    overview: "Aerospace engineering is a specialised field with limited seats in top colleges. ISRO recruitment via ICRB is open to any recognised engineering degree, providing opportunities across all tiers.",
    tiers: [
      {
        tier: "Tier 1",
        examples: ["IIST Thiruvananthapuram", "IIT Madras", "IIT Bombay", "IIT Kanpur", "IISc Bangalore"],
        averagePackage: "₹12 - ₹20 LPA",
        topRecruiters: ["ISRO", "Boeing", "Airbus", "HAL", "DRDO", "Skyroot", "Agnikul"],
        placementRate: "80-90%",
        notes: "IIST and IITs have dedicated ISRO recruitment; strong startup placement"
      },
      {
        tier: "Tier 2",
        examples: ["NIT Trichy", "NIT Surathkal", "BITS Pilani", "MIT Manipal", "PEC Chandigarh"],
        averagePackage: "₹7 - ₹14 LPA",
        topRecruiters: ["HAL", "DRDO", "Boeing", "Airbus", "Tata Advanced Systems", "Startups"],
        placementRate: "60-70%",
        notes: "Defense PSUs and manufacturing companies are primary recruiters"
      },
      {
        tier: "Tier 3",
        examples: ["For ISRO via ICRB — any recognized engineering degree", "State aerospace colleges"],
        averagePackage: "₹5 - ₹9 LPA",
        topRecruiters: ["ISRO via ICRB", "MRO companies", "Drone startups", "Manufacturing firms"],
        placementRate: "40-50%",
        notes: "ICRB exam is the primary gateway to ISRO; open to all recognized degrees"
      }
    ]
  },

  interviewTopics: [
    { topic: "Aerodynamics", count: 50 },
    { topic: "Aircraft Structures", count: 50 },
    { topic: "Propulsion Systems", count: 50 },
    { topic: "Flight Mechanics", count: 50 },
    { topic: "Avionics & Navigation", count: 50 },
    { topic: "Spacecraft Design", count: 50 },
    { topic: "Aircraft Design", count: 50 },
    { topic: "Aerospace Materials", count: 50 }
  ],

  interviewQuestions: {
    total: 400,
    samples: [
      {
        question: "What is the difference between lift and drag, and how are they generated?",
        answer: "",
        topic: "Aerodynamics",
        difficulty: "Easy"
      },
      {
        question: "Explain the working principle of a turbojet engine.",
        answer: "",
        topic: "Propulsion Systems",
        difficulty: "Medium"
      },
      {
        question: "What is flutter and how is it prevented in aircraft design?",
        answer: "",
        topic: "Aircraft Structures",
        difficulty: "Hard"
      },
      {
        question: "Describe the longitudinal stability requirements for an aircraft.",
        answer: "",
        topic: "Flight Mechanics",
        difficulty: "Medium"
      },
      {
        question: "Why are composite materials widely used in modern aircraft structures?",
        answer: "",
        topic: "Aerospace Materials",
        difficulty: "Medium"
      }
    ]
  },

  resources: {
    books: [
      { name: "Introduction to Flight", author: "John D. Anderson Jr." },
      { name: "Aircraft Structures for Engineering Students", author: "T.H.G. Megson" },
      { name: "Rocket Propulsion Elements", author: "George P. Sutton & Oscar Biblarz" },
      { name: "Mechanics of Flight", author: "A.C. Kermode" },
      { name: "Space Mission Engineering: The New SMAD", author: "J.R. Wertz et al." },
      { name: "Composite Materials for Aircraft Structures", author: "Alan Baker et al." }
    ],
    platforms: [
      { name: "NPTEL", description: "Free courses from IITs on aerodynamics, propulsion, and structures" },
      { name: "MIT OCW", description: "World-class aerospace engineering course materials" },
      { name: "Skill-Lync", description: "Industry-oriented PG programmes in aerospace engineering" },
      { name: "Coursera", description: "Specialisations in flight mechanics and space technologies" }
    ],
    certifications: [
      "EASA Part 66 / DGCA Aircraft Maintenance Engineering License",
      "NPTEL Course Certificates in Aerodynamics / Propulsion",
      "GATE Qualified (for PSU recruitment at HAL, DRDO)",
      "ANSYS / CATIA Professional Certifications",
      "Six Sigma Green / Black Belt",
      "Project Management Professional (PMP)"
    ],
    skillLync: [
      {
        title: "CFD Fundamentals",
        abbreviation: "CFD",
        description: "Master aerodynamic and fluid dynamics simulation"
      },
      {
        title: "FEA Fundamentals",
        abbreviation: "FEA",
        description: "Learn structural analysis for aerospace structures"
      },
      {
        title: "EV Fundamentals",
        abbreviation: "EV",
        description: "Electric propulsion systems and batteries"
      }
    ]
  },

  futureTrends: [
    {
      trend: "Private Space Revolution",
      impact: "Very High",
      description: "200+ space startups in India are creating unprecedented opportunities in launch vehicles, satellites, and space services."
    },
    {
      trend: "Electric & Hybrid Propulsion",
      impact: "Very High",
      description: "Electric propulsion for satellites and hybrid-electric aircraft are transforming aerospace propulsion technology."
    },
    {
      trend: "Unmanned Aerial Systems",
      impact: "Very High",
      description: "Drones for defense surveillance, logistics, agriculture, and urban air mobility are India's fastest-growing aerospace segment."
    },
    {
      trend: "Indigenous Fighter & Transport Aircraft",
      impact: "High",
      description: "Tejas Mk2, AMCA, and C-295 programs are building a robust domestic aircraft design and manufacturing ecosystem."
    },
    {
      trend: "Space-Based Connectivity",
      impact: "High",
      description: "LEO satellite constellations for broadband and IoT are driving demand for spacecraft design and ground systems engineers."
    }
  ],

  relatedBranches: [
    { id: "mechanical-engineering", name: "Mechanical Engineering" },
    { id: "electronics-and-communication-engineering", name: "Electronics & Communication Engineering" },
    { id: "computer-science-engineering", name: "Computer Science Engineering" }
  ]
};

export const branchMeta = {
  id: "aerospace-engineering",
  name: "Aerospace Engineering",
  shortName: "AE",
  slug: "aerospace-engineering",
  icon: "rocket",
  salaryRange: "₹4.5 - ₹45 LPA",
  hiringIndustries: "Space & Satellite, Defense Aviation, Commercial Aviation, Aerospace Manufacturing, UAV & Drones",
  jobOpenings: "6,000+",
  description: "Aircraft design, propulsion, space systems, and avionics.",
  gradient: "from-blue-50 to-blue-100",
  color: "#1D4ED8"
};
