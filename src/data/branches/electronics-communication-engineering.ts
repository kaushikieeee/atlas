export const electronicsCommunicationEngineering = {
  id: "electronics-and-communication-engineering",
  name: "Electronics & Communication Engineering",
  shortName: "ECE",
  tagline: "The Complete Guide to Electronics & Communication Engineering Careers in India",
  description:
    "Electronics & Communication Engineering (ECE) is one of the most lucrative engineering branches in India, driven by the global semiconductor boom and India's push to become a chip design hub. With the India Semiconductor Mission investing $10B+, companies like Intel, Qualcomm, Samsung, AMD, and NVIDIA have established major design centers in Bangalore, Hyderabad, and Pune. India needs an estimated 85,000-100,000 additional VLSI engineers by 2028, driving salaries upward at 15-20% annually. The field spans VLSI design, embedded systems, 5G telecommunications, and IoT — making ECE one of the highest-paying core engineering branches with exceptional growth prospects.",
  color: "#0891B2",

  overview: {
    introduction:
      "Electronics & Communication Engineering (ECE) is one of the most lucrative engineering branches in India, driven by the global semiconductor boom and India's push to become a chip design hub. With the India Semiconductor Mission investing $10B+, companies like Intel, Qualcomm, Samsung, AMD, and NVIDIA have established major design centers in Bangalore, Hyderabad, and Pune. India needs an estimated 85,000-100,000 additional VLSI engineers by 2028, driving salaries upward at 15-20% annually.",
    duration: "4 years (B.Tech / B.E.)",
    avgFees: "₹2,00,000 - ₹8,00,000 (total)",
    difficulty: "Moderate to High",
    skillsRequired: [
      "Strong foundation in analog and digital electronics",
      "Proficiency in Verilog/VHDL and SystemVerilog",
      "Familiarity with VLSI design tools (Cadence, Synopsys, Mentor)",
      "Understanding of signal processing and communication theory",
      "Programming skills in C/C++, Python, and embedded C",
      "Knowledge of microprocessor and microcontroller architectures",
      "Problem-solving and analytical thinking",
      "Familiarity with lab equipment (oscilloscope, spectrum analyzer, logic analyzer)"
    ],
    tags: ["Semiconductor", "Telecommunications", "Consumer Electronics", "Embedded Systems", "IoT", "Defense Electronics"]
  },

  salary: {
    overview: "ECE salaries in India are among the highest for core engineering branches, driven by the semiconductor talent shortage. Top VLSI and embedded roles command premium packages, especially from multinational R&D centers.",
    averageStarting: "₹8 LPA",
    averageMid: "₹20 LPA",
    averageSenior: "₹50 LPA",
    breakdown: [
      {
        level: "Fresher (0-2 years)",
        range: "₹5 - ₹15 LPA",
        median: "₹8 LPA",
        top10: "₹30 LPA",
        note: "VLSI and embedded roles at top semiconductor companies pay significantly higher"
      },
      {
        level: "Mid-Level (3-7 years)",
        range: "₹12 - ₹35 LPA",
        median: "₹20 LPA",
        top10: "₹50 LPA",
        note: "Premium for VLSI design, verification, and systems architects"
      },
      {
        level: "Senior (8+ years)",
        range: "₹35 - ₹80 LPA",
        median: "₹50 LPA",
        top10: "₹1.2 Cr+",
        note: "Senior architects and engineering managers at Intel, AMD, Qualcomm, NVIDIA"
      }
    ],
    topPayers: [
      { company: "Intel India", range: "₹15 - ₹60 LPA", sector: "Semiconductor" },
      { company: "Qualcomm", range: "₹18 - ₹65 LPA", sector: "Semiconductor & Wireless" },
      { company: "AMD", range: "₹14 - ₹55 LPA", sector: "Semiconductor" },
      { company: "NVIDIA", range: "₹20 - ₹80 LPA", sector: "GPU & AI" },
      { company: "Samsung Semiconductor", range: "₹12 - ₹45 LPA", sector: "Semiconductor" },
      { company: "Texas Instruments", range: "₹10 - ₹35 LPA", sector: "Semiconductor" },
      { company: "MediaTek", range: "₹12 - ₹40 LPA", sector: "Semiconductor" },
      { company: "Micron", range: "₹10 - ₹35 LPA", sector: "Memory & Storage" }
    ]
  },

  industries: [
    {
      name: "Semiconductor & VLSI",
      abbreviation: "SE",
      description: "Chip design, verification, and manufacturing",
      growth: "25% YoY",
      market: "$55B by 2026",
      detail: "India's semiconductor industry is experiencing unprecedented growth with the India Semiconductor Mission investing $10B+ to establish fab facilities and design centers. Companies like Intel, AMD, Qualcomm, and Micron are rapidly expanding their India teams. VLSI engineers command premium salaries due to severe talent shortage.",
      topCompanies: ["Intel", "AMD", "Qualcomm", "Samsung Semiconductor", "MediaTek", "Texas Instruments", "Micron", "NVIDIA", "Synopsys", "Cadence"]
    },
    {
      name: "Telecommunications",
      abbreviation: "TE",
      description: "5G/6G wireless, optical networks, and infrastructure",
      growth: "12% YoY",
      market: "$80B by 2025",
      detail: "India's telecom sector is the 2nd largest in the world with over 1.2 billion subscribers. 5G rollout and future 6G research create strong demand for RF engineers, communication systems designers, and network architects.",
      topCompanies: ["Ericsson", "Nokia", "Samsung Networks", "Huawei", "Reliance Jio", "Airtel", "Ciena"]
    },
    {
      name: "Consumer Electronics",
      abbreviation: "CO",
      description: "Smartphones, wearables, and home electronics",
      growth: "15% YoY",
      market: "$100B by 2025",
      detail: "India's consumer electronics market is booming with PLI schemes driving local manufacturing. Engineers work on product design, embedded software, power management, and display technologies for smartphones and wearables.",
      topCompanies: ["Samsung", "Apple (through vendors)", "Xiaomi", "OPPO", "vivo", "Dixon Technologies", "Boat"]
    },
    {
      name: "Embedded Systems & IoT",
      abbreviation: "EM",
      description: "Embedded products, connected devices, and automation",
      growth: "18% YoY",
      market: "$15B by 2025",
      detail: "IoT adoption across smart cities, industrial automation, agriculture, and healthcare is driving demand for embedded engineers proficient in RTOS, ARM microcontrollers, and wireless protocols.",
      topCompanies: ["Bosch", "Siemens", "Honeywell", "ABB", "Schneider Electric", "L&T Technology Services", "Tata Elxsi"]
    },
    {
      name: "Defense & Aerospace Electronics",
      abbreviation: "DE",
      description: "Radar, avionics, secure communication, and EW systems",
      growth: "10% YoY",
      market: "$25B by 2025",
      detail: "India's defense modernisation and 'Atmanirbhar Bharat' initiative are driving indigenisation of electronics systems. DRDO, HAL, and private defense contractors hire ECE engineers for radar, sonar, avionics, and secure communication systems.",
      topCompanies: ["DRDO", "HAL", "BEL", "L&T Defense", "Tata Advanced Systems", "Boeing India"]
    }
  ],

  jobRoles: [
    {
      title: "VLSI Design Engineer",
      description: "Design digital/analog ICs using Verilog/VHDL, RTL design, synthesis, and timing closure",
      tools: ["Verilog/VHDL", "Design Compiler", "PrimeTime", "VCS"],
      tiers: [
        { tier: 1, chance: "High", salary: "₹15 - ₹30 LPA" },
        { tier: 2, chance: "Medium", salary: "₹10 - ₹18 LPA" },
        { tier: 3, chance: "Low", salary: "₹6 - ₹12 LPA" }
      ]
    },
    {
      title: "Physical Design Engineer",
      description: "Floorplanning, placement, routing, timing closure using Cadence/Synopsys tools",
      tools: ["Innovus", "ICC2", "Calibre", "RedHawk"],
      tiers: [
        { tier: 1, chance: "High", salary: "₹14 - ₹28 LPA" },
        { tier: 2, chance: "Medium", salary: "₹9 - ₹16 LPA" },
        { tier: 3, chance: "Low", salary: "₹6 - ₹10 LPA" }
      ]
    },
    {
      title: "Verification Engineer",
      description: "Functional verification using SystemVerilog, UVM methodology, and formal verification",
      tools: ["SystemVerilog", "UVM", "VCS", "Questa", "JasperGold"],
      tiers: [
        { tier: 1, chance: "High", salary: "₹16 - ₹32 LPA" },
        { tier: 2, chance: "High", salary: "₹10 - ₹20 LPA" },
        { tier: 3, chance: "Medium", salary: "₹7 - ₹12 LPA" }
      ]
    },
    {
      title: "Analog/Mixed-Signal Designer",
      description: "Design ADCs, DACs, PLLs, and analog circuits using Cadence Virtuoso",
      tools: ["Virtuoso", "Spectre", "MATLAB", "AMS"],
      tiers: [
        { tier: 1, chance: "High", salary: "₹18 - ₹35 LPA" },
        { tier: 2, chance: "Low", salary: "₹12 - ₹20 LPA" },
        { tier: 3, chance: "Not available", salary: "—" }
      ]
    },
    {
      title: "DFT Engineer",
      description: "Design for testability, scan insertion, ATPG, and BIST implementation",
      tools: ["Tessent", "DFTCompiler", "ATPG", "BIST tools"],
      tiers: [
        { tier: 1, chance: "High", salary: "₹14 - ₹26 LPA" },
        { tier: 2, chance: "Medium", salary: "₹9 - ₹16 LPA" },
        { tier: 3, chance: "Low", salary: "₹6 - ₹10 LPA" }
      ]
    },
    {
      title: "CAD/EDA Engineer",
      description: "Develop and maintain EDA tools, flows, and methodologies",
      tools: ["Tcl/Python", "Cadence", "Synopsys", "Linux"],
      tiers: [
        { tier: 1, chance: "High", salary: "₹18 - ₹35 LPA" },
        { tier: 2, chance: "Medium", salary: "₹12 - ₹22 LPA" },
        { tier: 3, chance: "Not available", salary: "—" }
      ]
    }
  ],

  topCompanies: {
    overview: "India's ECE graduates are recruited by the world's leading semiconductor, telecom, and electronics companies, with major R&D centers in Bangalore, Hyderabad, Pune, and Noida.",
    companies: [
      { name: "Intel India", abbreviation: "INT", location: "Bangalore, Hyderabad", sector: "Semiconductor" },
      { name: "Qualcomm", abbreviation: "QC", location: "Bangalore, Hyderabad", sector: "Semiconductor & Wireless" },
      { name: "AMD", abbreviation: "AMD", location: "Bangalore, Hyderabad", sector: "Semiconductor" },
      { name: "Samsung Semiconductor", abbreviation: "SS", location: "Bangalore, Noida", sector: "Semiconductor" },
      { name: "MediaTek", abbreviation: "MTK", location: "Noida, Bangalore", sector: "Semiconductor" },
      { name: "Texas Instruments", abbreviation: "TI", location: "Bangalore", sector: "Semiconductor" },
      { name: "Micron", abbreviation: "MU", location: "Hyderabad", sector: "Memory & Storage" },
      { name: "NVIDIA", abbreviation: "NV", location: "Bangalore, Pune", sector: "GPU & AI" },
      { name: "Synopsys", abbreviation: "SYN", location: "Bangalore, Noida", sector: "EDA" },
      { name: "Cadence", abbreviation: "CAD", location: "Bangalore, Noida", sector: "EDA" }
    ]
  },

  collegeTiers: {
    overview: "ECE placement outcomes are strongly correlated with college tier. Top semiconductor companies recruit predominantly from Tier 1 colleges. Tier 2 and Tier 3 graduates can enter through GATE MTech or postgraduate diplomas.",
    tiers: [
      {
        tier: "Tier 1",
        examples: ["IIT Bombay", "IIT Madras", "IIT Delhi", "IIT Kharagpur", "IISc Bangalore", "NIT Trichy"],
        averagePackage: "₹18 - ₹35 LPA",
        topRecruiters: ["Intel", "Qualcomm", "AMD", "NVIDIA", "Texas Instruments", "Google", "Microsoft"],
        placementRate: "95-100%",
        notes: "Top semiconductor companies compete aggressively for ECE talent at these institutes"
      },
      {
        tier: "Tier 2",
        examples: ["BITS Pilani", "NIT Warangal", "NIT Surathkal", "DTU", "IIIT Hyderabad", "COEP"],
        averagePackage: "₹10 - ₹18 LPA",
        topRecruiters: ["Intel", "AMD", "Synopsys", "Cadence", "Samsung", "Bosch", "L&T Tech Services"],
        placementRate: "75-90%",
        notes: "Strong placement in both core ECE and IT services roles"
      },
      {
        tier: "Tier 3",
        examples: ["Top private colleges with strong placement records", "Colleges with dedicated VLSI labs"],
        averagePackage: "₹6 - ₹12 LPA",
        topRecruiters: ["Mphasis", "L&T Tech Services", "Tata Elxsi", "Cyient", "Mid-size semiconductor firms"],
        placementRate: "50-65%",
        notes: "PG diplomas and master's degrees significantly improve prospects for VLSI roles"
      }
    ]
  },

  interviewTopics: [
    { topic: "Analog Electronics", count: 50 },
    { topic: "Digital Electronics", count: 50 },
    { topic: "VLSI Design", count: 50 },
    { topic: "Signal Processing", count: 50 },
    { topic: "Communication Systems", count: 50 },
    { topic: "Microprocessors & Microcontrollers", count: 50 },
    { topic: "Embedded Systems", count: 50 },
    { topic: "Wireless Communication", count: 50 }
  ],

  interviewQuestions: {
    total: 400,
    samples: [
      {
        question: "What is the difference between CMOS and TTL logic families?",
        answer: "",
        topic: "Digital Electronics",
        difficulty: "Easy"
      },
      {
        question: "Explain the concept of setup time and hold time in flip-flops.",
        answer: "",
        topic: "VLSI Design",
        difficulty: "Medium"
      },
      {
        question: "What is the Nyquist sampling theorem and why is it important?",
        answer: "",
        topic: "Signal Processing",
        difficulty: "Easy"
      },
      {
        question: "What are the differences between AM and FM modulation?",
        answer: "",
        topic: "Communication Systems",
        difficulty: "Medium"
      },
      {
        question: "What is an interrupt in microcontrollers and how does it work?",
        answer: "",
        topic: "Microprocessors & Microcontrollers",
        difficulty: "Medium"
      }
    ]
  },

  resources: {
    books: [
      { name: "Microelectronic Circuits", author: "Sedra & Smith" },
      { name: "Digital Design", author: "Morris Mano" },
      { name: "CMOS VLSI Design", author: "Weste & Harris" },
      { name: "Digital Signal Processing", author: "Proakis & Manolakis" },
      { name: "Communication Systems", author: "Simon Haykin" },
      { name: "Embedded Systems", author: "Raj Kamal" }
    ],
    platforms: [
      { name: "NPTEL", description: "Free courses from IITs on VLSI, DSP, and communication" },
      { name: "Coursera", description: "Specialisations in VLSI CAD, embedded systems, and IoT" },
      { name: "Skill-Lync", description: "Industry-oriented PG programmes in VLSI and embedded systems" },
      { name: "Udemy", description: "Affordable courses on Verilog, PCB design, and ARM programming" }
    ],
    certifications: [
      "NPTEL Course Certificates",
      "Intel FPGA Design Certification",
      "ARM Accredited Engineer",
      "Cadence Certified Professional",
      "Red Hat Certified Engineer",
      "MATLAB Certified Associate"
    ],
    skillLync: [
      {
        title: "EV Fundamentals",
        abbreviation: "EV",
        description: "Electric vehicle systems and power electronics"
      },
      {
        title: "FEA Fundamentals",
        abbreviation: "FEA",
        description: "Finite element analysis for electronics thermal design"
      },
      {
        title: "Engineering Materials",
        abbreviation: "MAT",
        description: "Semiconductor materials and properties"
      }
    ]
  },

  futureTrends: [
    {
      trend: "Semiconductor Design & Fabs",
      impact: "Very High",
      description: "India's $10B+ semiconductor mission is creating fabs and design centers, driving huge demand for VLSI and process engineers."
    },
    {
      trend: "5G/6G Wireless Technologies",
      impact: "Very High",
      description: "5G rollout and 6G research are creating opportunities in RF design, antenna systems, and wireless protocol development."
    },
    {
      trend: "AI Hardware & Edge Computing",
      impact: "Very High",
      description: "Custom AI/ML accelerators, NPUs, and edge inference chips are driving innovation in digital design and architecture."
    },
    {
      trend: "Embedded IoT & Smart Devices",
      impact: "High",
      description: "The explosion of connected devices across smart cities, healthcare, and industry 4.0 requires low-power embedded solutions."
    },
    {
      trend: "Quantum & Photonic Computing",
      impact: "Medium",
      description: "Emerging technologies in quantum computing and silicon photonics are opening new research and development frontiers."
    }
  ],

  relatedBranches: [
    { id: "electrical-engineering", name: "Electrical Engineering" },
    { id: "computer-science-engineering", name: "Computer Science & Engineering" },
    { id: "instrumentation-engineering", name: "Instrumentation Engineering" }
  ]
};

export const branchMeta = {
  id: "electronics-and-communication-engineering",
  name: "Electronics & Communication Engineering",
  shortName: "ECE",
  slug: "electronics-and-communication-engineering",
  icon: "radio",
  salaryRange: "₹5 - ₹80 LPA",
  hiringIndustries: "Semiconductor, Telecom, Consumer Electronics, Embedded, Defense",
  jobOpenings: "18,000+",
  description: "Electronic devices, communication systems, VLSI, and embedded systems.",
  gradient: "from-cyan-50 to-cyan-100",
  color: "#0891B2"
};
