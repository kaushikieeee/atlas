export const instrumentationEngineering = {
  id: "instrumentation-engineering",
  name: "Instrumentation Engineering",
  shortName: "INST",
  tagline: "The Complete Guide to Instrumentation Engineering Careers in India",
  description:
    "Instrumentation Engineering focuses on the design, installation, and maintenance of measurement and control systems in process industries. In India, instrumentation engineers are in high demand across oil refineries, power plants, pharmaceutical manufacturing, and chemical processing facilities. The field combines electronics, control systems, and process engineering to ensure safe, efficient, and automated industrial operations. With India's growing emphasis on Industry 4.0 and automation, instrumentation professionals find excellent career opportunities in both PSUs (via GATE) and multinational automation companies.",
  color: "#0891B2",

  overview: {
    introduction:
      "Instrumentation Engineering focuses on the design, installation, and maintenance of measurement and control systems in process industries. In India, instrumentation engineers are in high demand across oil refineries, power plants, pharmaceutical manufacturing, and chemical processing facilities. The field combines electronics, control systems, and process engineering to ensure safe, efficient, and automated industrial operations. With India's growing emphasis on Industry 4.0 and automation, instrumentation professionals find excellent career opportunities in both PSUs (via GATE) and multinational automation companies.",
    duration: "4 years (B.Tech / B.E.)",
    avgFees: "\u20B92,00,000 - \u20B96,00,000 (total)",
    difficulty: "High",
    skillsRequired: [
      "Strong foundation in sensors, transducers, and measurement systems",
      "Proficiency in control systems theory and PID tuning",
      "Understanding of PLC, DCS, and SCADA systems",
      "Knowledge of process instrumentation and P&ID interpretation",
      "Familiarity with industrial communication protocols (HART, Modbus, Profibus)",
      "Experience with safety instrumented systems and SIL assessment",
      "Understanding of signal conditioning and data acquisition",
      "Knowledge of analytical instruments and process analyzers"
    ],
    tags: ["Oil & Gas", "Power Generation", "Pharma & Chemicals", "Industrial Automation", "Process Control"]
  },

  salary: {
    overview: "Instrumentation engineering salaries in India are competitive with PSU roles (via GATE) offering excellent packages and stability. The growing automation and Industry 4.0 adoption is driving strong demand across process industries.",
    averageStarting: "\u20B94.5 LPA",
    averageMid: "\u20B912 LPA",
    averageSenior: "\u20B924 LPA",
    breakdown: [
      {
        level: "Fresher (0-2 years)",
        range: "\u20B93 - \u20B97 LPA",
        median: "\u20B94.5 LPA",
        top10: "\u20B912 LPA",
        note: "PSU roles via GATE offer 12-24 LPA for freshers"
      },
      {
        level: "Mid-Level (3-7 years)",
        range: "\u20B98 - \u20B917 LPA",
        median: "\u20B912 LPA",
        top10: "\u20B922 LPA",
        note: "DCS and SIS specialists command premium compensation"
      },
      {
        level: "Senior (8+ years)",
        range: "\u20B918 - \u20B935 LPA",
        median: "\u20B924 LPA",
        top10: "\u20B945+ LPA",
        note: "Consulting roles and automation project managers earn at the higher end"
      }
    ],
    topPayers: [
      { company: "ONGC", range: "\u20B912 - \u20B924 LPA", sector: "Oil & Gas / PSU" },
      { company: "IOCL", range: "\u20B912 - \u20B922 LPA", sector: "Oil & Gas / PSU" },
      { company: "GAIL", range: "\u20B912 - \u20B920 LPA", sector: "Oil & Gas / PSU" },
      { company: "Reliance Industries", range: "\u20B99 - \u20B925 LPA", sector: "Refining / Private" },
      { company: "Honeywell India", range: "\u20B98 - \u20B922 LPA", sector: "Automation / MNC" },
      { company: "Yokogawa India", range: "\u20B98 - \u20B920 LPA", sector: "Automation / MNC" }
    ]
  },

  industries: [
    {
      name: "Oil & Gas",
      abbreviation: "OI",
      description: "Refineries, petrochemical plants, offshore platforms, and pipeline instrumentation",
      growth: "6% YoY",
      market: "$200B+",
      detail: "India's oil & gas sector is the largest employer for instrumentation engineers. PSUs like ONGC, IOCL, GAIL offer excellent packages (12-24 LPA CTC) via GATE. Refineries, petrochemical plants, and offshore platforms require extensive instrumentation systems for process control and safety.",
      topCompanies: ["ONGC", "IOCL", "GAIL", "Reliance Industries", "BPCL", "HPCL"]
    },
    {
      name: "Power Generation",
      abbreviation: "PO",
      description: "Thermal, hydro, nuclear, and renewable power plant instrumentation",
      growth: "5% YoY",
      market: "$180B+",
      detail: "India's power sector relies heavily on instrumentation for boiler control, turbine monitoring, and grid management. Thermal power plants, hydroelectric projects, and nuclear facilities hire instrumentation engineers for control and monitoring systems.",
      topCompanies: ["NTPC", "NHPC", "NPCIL", "Tata Power", "Adani Power", "BHEL"]
    },
    {
      name: "Pharma & Chemicals",
      abbreviation: "PH",
      description: "Pharmaceutical manufacturing, chemical processing, and batch control",
      growth: "10% YoY",
      market: "$80B+",
      detail: "Pharma and chemical industries require precise instrumentation for batch process control, clean-in-place (CIP) systems, and regulatory compliance (cGMP, FDA). The sector offers excellent opportunities for instrumentation engineers in validation and automation roles.",
      topCompanies: ["Dr. Reddy's", "Sun Pharma", "Cipla", "BASF India", "Pidilite", "UPL"]
    },
    {
      name: "Industrial Automation",
      abbreviation: "IN",
      description: "PLC/DCS/SCADA systems, robotics, Industry 4.0, and IoT",
      growth: "12% YoY",
      market: "$25B by 2027",
      detail: "India's automation industry is growing rapidly with Industry 4.0 adoption. System integrators and automation companies offer diverse roles in control system design, commissioning, and digital transformation across manufacturing sectors.",
      topCompanies: ["Siemens India", "Honeywell India", "ABB India", "Yokogawa India", "Emerson India", "Rockwell Automation"]
    },
    {
      name: "Process Control & Consulting",
      abbreviation: "PR",
      description: "Advanced process control, APC, optimization, and consulting services",
      growth: "8% YoY",
      market: "$50B+",
      detail: "Engineering consultancies and EPC contractors (Engineers India, L&T) provide process control design services for large-scale industrial projects. Advanced process control (APC) and real-time optimization roles offer challenging technical work.",
      topCompanies: ["EIL", "L&T", "Tata Consulting Engineers", "Thermax", "AECOM India"]
    }
  ],

  jobRoles: [
    {
      title: "PSU Instrumentation Engineer (ONGC/IOCL/GAIL)",
      description: "Install, calibrate, and maintain field instruments. Manage DCS/SCADA systems. Recruited via GATE.",
      tools: ["GATE", "DCS", "SCADA"],
      tiers: [
        { tier: 1, chance: "High", salary: "\u20B912 - \u20B924 LPA" },
        { tier: 2, chance: "High", salary: "\u20B912 - \u20B924 LPA" },
        { tier: 3, chance: "Medium", salary: "\u20B912 - \u20B924 LPA" }
      ]
    },
    {
      title: "Control Systems Engineer",
      description: "Design and implement DCS/PLC-based control systems for refineries and petrochemical plants.",
      tools: ["DCS", "PLC", "MATLAB"],
      tiers: [
        { tier: 1, chance: "High", salary: "\u20B910 - \u20B920 LPA" },
        { tier: 2, chance: "Medium", salary: "\u20B97 - \u20B914 LPA" },
        { tier: 3, chance: "Low", salary: "\u20B95 - \u20B99 LPA" }
      ]
    },
    {
      title: "DCS Engineer",
      description: "Configure, maintain and troubleshoot Distributed Control Systems (Honeywell, Yokogawa, Emerson).",
      tools: ["Honeywell DCS", "Yokogawa CS", "Emerson DeltaV"],
      tiers: [
        { tier: 1, chance: "High", salary: "\u20B910 - \u20B920 LPA" },
        { tier: 2, chance: "High", salary: "\u20B97 - \u20B914 LPA" },
        { tier: 3, chance: "Medium", salary: "\u20B95 - \u20B99 LPA" }
      ]
    },
    {
      title: "Safety Instrumented Systems (SIS) Engineer",
      description: "Design and maintain SIL-rated safety systems, ESD, F&G detection systems.",
      tools: ["SIL", "ESD", "HAZOP"],
      tiers: [
        { tier: 1, chance: "High", salary: "\u20B914 - \u20B925 LPA" },
        { tier: 2, chance: "Medium", salary: "\u20B910 - \u20B918 LPA" },
        { tier: 3, chance: "Not available", salary: "N/A" }
      ]
    },
    {
      title: "Field Service Engineer",
      description: "On-site commissioning, troubleshooting, and maintenance of instrumentation systems.",
      tools: ["HART", "Fieldbus", "PLC"],
      tiers: [
        { tier: 1, chance: "High", salary: "\u20B98 - \u20B915 LPA" },
        { tier: 2, chance: "High", salary: "\u20B96 - \u20B912 LPA" },
        { tier: 3, chance: "Medium", salary: "\u20B94 - \u20B98 LPA" }
      ]
    }
  ],

  topCompanies: {
    overview: "India's instrumentation engineering graduates are recruited by PSUs (via GATE), multinational automation companies, EPC contractors, and process industry giants across oil & gas, power, and chemicals.",
    companies: [
      { name: "ONGC", abbreviation: "ON", location: "Mumbai, Dehradun", sector: "Oil & Gas / PSU" },
      { name: "IOCL", abbreviation: "IO", location: "Pan India refineries", sector: "Oil & Gas / PSU" },
      { name: "GAIL", abbreviation: "GA", location: "Delhi, Pata", sector: "Oil & Gas / PSU" },
      { name: "Reliance Industries", abbreviation: "RI", location: "Jamnagar, Mumbai", sector: "Refining / Private" },
      { name: "EIL (Engineers India)", abbreviation: "EIL", location: "Delhi, Gurgaon", sector: "EPC / Consulting" },
      { name: "NTPC", abbreviation: "NT", location: "Delhi, Pan India", sector: "Power / PSU" }
    ]
  },

  collegeTiers: {
    overview: "Instrumentation engineering is offered by a select number of colleges but PSU recruitment via GATE is open to any AICTE-recognized engineering degree, providing opportunities across all tiers.",
    tiers: [
      {
        tier: "Tier 1",
        examples: ["IIT Kharagpur", "IIT Madras", "IIT Delhi", "NIT Trichy", "NIT Warangal"],
        averagePackage: "\u20B910 - \u20B918 LPA",
        topRecruiters: ["ONGC", "IOCL", "GAIL", "Honeywell", "Siemens", "Reliance Industries"],
        placementRate: "85-95%",
        notes: "Strong placement in PSUs via GATE and core automation companies"
      },
      {
        tier: "Tier 2",
        examples: ["NIT Calicut", "NIT Kurukshetra", "BITS Pilani", "DTU", "NSIT"],
        averagePackage: "\u20B97 - \u20B914 LPA",
        topRecruiters: ["Honeywell", "Yokogawa", "ABB", "Siemens", "L&T", "Reliance"],
        placementRate: "65-75%",
        notes: "Good placement across automation vendors and EPC contractors"
      },
      {
        tier: "Tier 3",
        examples: ["Any AICTE college (for PSUs via GATE)", "State engineering colleges"],
        averagePackage: "\u20B94 - \u20B98 LPA",
        topRecruiters: ["Field service companies", "Small system integrators", "PSUs via GATE"],
        placementRate: "40-50%",
        notes: "GATE is the primary gateway to PSU roles; open to all recognized degrees"
      }
    ]
  },

  interviewTopics: [
    { topic: "Sensors & Transducers", count: 50 },
    { topic: "Process Control", count: 50 },
    { topic: "PLC & SCADA", count: 50 },
    { topic: "Analytical Instruments", count: 50 },
    { topic: "Control Valves & Actuators", count: 50 },
    { topic: "Signal Conditioning", count: 50 },
    { topic: "Industrial Safety Systems", count: 50 },
    { topic: "DCS & Fieldbus", count: 50 }
  ],

  interviewQuestions: {
    total: 400,
    samples: [
      {
        question: "What is the difference between PLC and DCS?",
        answer: "",
        topic: "PLC & SCADA",
        difficulty: "Medium"
      },
      {
        question: "Explain PID control and how you would tune a loop.",
        answer: "",
        topic: "Process Control",
        difficulty: "Medium"
      },
      {
        question: "What is a 4-20mA signal and why is it preferred over 0-20mA?",
        answer: "",
        topic: "Sensors & Transducers",
        difficulty: "Easy"
      },
      {
        question: "What is SIL and how do you determine the required SIL level?",
        answer: "",
        topic: "Industrial Safety Systems",
        difficulty: "Hard"
      },
      {
        question: "How does a control valve work and what are Cv and rangeability?",
        answer: "",
        topic: "Control Valves & Actuators",
        difficulty: "Medium"
      }
    ]
  },

  resources: {
    books: [
      { name: "Process Control Instrumentation Technology", author: "Curtis D. Johnson" },
      { name: "Instrumentation for Process Measurement and Control", author: "Norman A. Anderson" },
      { name: "Programmable Logic Controllers", author: "John W. Webb & Ronald A. Reis" },
      { name: "Industrial Instrumentation", author: "A.K. Singh" },
      { name: "Process Control: Modeling, Design and Simulation", author: "B. Wayne Bequette" },
      { name: "Safety Instrumented Systems: Design, Analysis, and Justification", author: "Paul Gruhn & Harry Cheddie" },
      { name: "Principles of Industrial Instrumentation and Control Systems", author: "Chennakesava R. Alavala" },
      { name: "Instrument Engineers' Handbook", author: "Bela G. Liptak" }
    ],
    platforms: [
      { name: "NPTEL", description: "Free courses from IITs on industrial instrumentation and control systems" },
      { name: "Coursera", description: "Specialisations in industrial automation, PLC programming, and IoT" },
      { name: "Udemy", description: "Practical courses on PLC programming, HMI design, and SCADA systems" }
    ],
    certifications: [
      "Certified Automation Professional (ISA CAP)",
      "TUV Rheinland Functional Safety Engineer (FS Engineer)",
      "OSHA Process Safety Management Certification",
      "Siemens/Honeywell/Yokogawa DCS Certification",
      "PLC Programming Certifications (Rockwell, Siemens, Allen-Bradley)",
      "Six Sigma Green / Black Belt",
      "Project Management Professional (PMP)"
    ],
  },

  futureTrends: [
    {
      trend: "Industry 4.0 & IIoT",
      impact: "Very High",
      description: "Digital transformation, smart sensors, and industrial IoT are revolutionizing process automation with predictive maintenance and real-time optimization."
    },
    {
      trend: "Advanced Process Control (APC)",
      impact: "Very High",
      description: "Model Predictive Control (MPC) and real-time optimization are becoming standard in refineries, petrochemicals, and power plants."
    },
    {
      trend: "Industrial Cybersecurity",
      impact: "High",
      description: "IEC 62443 compliance and OT security are increasingly critical as industrial networks become more connected and exposed to cyber threats."
    },
    {
      trend: "Wireless Instrumentation",
      impact: "High",
      description: "WirelessHART, ISA100.11a, and 5G industrial networks are reducing wiring costs and enabling monitoring in previously inaccessible locations."
    },
    {
      trend: "Digital Twin & Simulation",
      impact: "High",
      description: "Virtual commissioning, digital twins of process plants, and operator training simulators are transforming instrumentation and control system design."
    }
  ],

  relatedBranches: [
    { id: "electrical-engineering", name: "Electrical Engineering" },
    { id: "electronics-and-communication-engineering", name: "Electronics & Communication Engineering" },
    { id: "chemical-engineering", name: "Chemical Engineering" }
  ]
};

export const branchMeta = {
  id: "instrumentation-engineering",
  name: "Instrumentation Engineering",
  shortName: "INST",
  slug: "instrumentation-engineering",
  icon: "gauge",
  salaryRange: "\u20B93 - \u20B935 LPA",
  hiringIndustries: "Oil & Gas, Power Generation, Pharma & Chemicals, Industrial Automation, Process Control",
  jobOpenings: "15,000+",
  description: "Measurement and control systems for process industries.",
  gradient: "from-cyan-50 to-cyan-100",
  color: "#0891B2"
};
