export const automobileEngineering = {
  id: "automobile-engineering",
  name: "Automobile Engineering",
  shortName: "AUTO",
  tagline: "The Complete Guide to Automobile Engineering Careers in India",
  description:
    "Automobile engineering is a specialized branch focusing on vehicle design, powertrain systems, vehicle dynamics, and manufacturing. India's automotive industry is the world's 4th largest and is undergoing a massive EV transition with domestic players like Tata Motors, Ola Electric, and Ather Energy leading the charge alongside traditional OEMs. With PLI schemes driving localization and new EV startups offering competitive packages, automobile engineers have exciting opportunities across the entire vehicle development lifecycle from concept to production.",
  color: "#DC2626",

  overview: {
    introduction:
      "Automobile engineering is a specialized branch focusing on vehicle design, powertrain systems, vehicle dynamics, and manufacturing. India's automotive industry is the world's 4th largest and is undergoing a massive EV transition with domestic players like Tata Motors, Ola Electric, and Ather Energy leading the charge alongside traditional OEMs. With PLI schemes driving localization and new EV startups offering competitive packages, automobile engineers have exciting opportunities across the entire vehicle development lifecycle from concept to production.",
    duration: "4 years (B.Tech / B.E.)",
    avgFees: "\u20B92,00,000 - \u20B96,00,000 (total)",
    difficulty: "High",
    skillsRequired: [
      "Strong foundation in vehicle dynamics and chassis systems",
      "Proficiency in powertrain and drivetrain engineering",
      "Understanding of electric vehicle technology and battery systems",
      "Knowledge of automotive design using CATIA/NX/Creo",
      "Familiarity with automotive electronics and ECU architecture",
      "Experience with vehicle testing and validation methods",
      "Understanding of automotive manufacturing processes",
      "Knowledge of ADAS and autonomous vehicle technologies"
    ],
    tags: ["OEM Manufacturing", "Tier-1 Suppliers", "Electric Vehicles", "Testing & Validation", "Motorsports"]
  },

  salary: {
    overview: "Automobile engineering salaries in India are competitive with strong growth driven by the EV transition and increasing localization. OEMs and Tier-1 suppliers offer attractive packages with excellent career progression.",
    averageStarting: "\u20B95.5 LPA",
    averageMid: "\u20B914 LPA",
    averageSenior: "\u20B935 LPA",
    breakdown: [
      {
        level: "Fresher (0-2 years)",
        range: "\u20B94 - \u20B98 LPA",
        median: "\u20B95.5 LPA",
        top10: "\u20B912 LPA",
        note: "EV startups offer higher equity; OEM campus placements vary by tier"
      },
      {
        level: "Mid-Level (3-7 years)",
        range: "\u20B910 - \u20B920 LPA",
        median: "\u20B914 LPA",
        top10: "\u20B928 LPA",
        note: "Tier-1 suppliers and EV companies pay at the higher end"
      },
      {
        level: "Senior (8+ years)",
        range: "\u20B925 - \u20B960 LPA",
        median: "\u20B935 LPA",
        top10: "\u20B980+ LPA",
        note: "Program managers and chief engineers command premium compensation"
      }
    ],
    topPayers: [
      { company: "Tata Motors", range: "\u20B98 - \u20B930 LPA", sector: "OEM" },
      { company: "Maruti Suzuki", range: "\u20B97 - \u20B925 LPA", sector: "OEM" },
      { company: "Mahindra & Mahindra", range: "\u20B98 - \u20B928 LPA", sector: "OEM" },
      { company: "Ola Electric", range: "\u20B910 - \u20B935 LPA", sector: "EV / Startup" },
      { company: "Hyundai Motor India", range: "\u20B98 - \u20B922 LPA", sector: "OEM" },
      { company: "Bosch India", range: "\u20B98 - \u20B925 LPA", sector: "Tier-1 Supplier" }
    ]
  },

  industries: [
    {
      name: "OEMs (Car & Two-Wheeler Manufacturers)",
      abbreviation: "OE",
      description: "Vehicle design, manufacturing, and assembly operations",
      growth: "10% YoY",
      market: "$120B by 2026",
      detail: "India's OEMs produce over 25 million vehicles annually. From Maruti's volume manufacturing to Tata's EV push and Royal Enfield's global expansion, OEMs offer diverse roles across R&D, manufacturing, and quality. Campus placements are strong across tiers.",
      topCompanies: ["Tata Motors", "Maruti Suzuki", "Mahindra & Mahindra", "Hyundai Motor India", "Kia India", "Toyota Kirloskar", "Hero MotoCorp", "Bajaj Auto", "TVS Motor", "Royal Enfield"]
    },
    {
      name: "Tier-1 Suppliers & Auto Components",
      abbreviation: "TI",
      description: "Automotive components, systems integration, and supply chain",
      growth: "12% YoY",
      market: "$80B by 2026",
      detail: "India's auto component industry is a global powerhouse with companies like Bosch, ZF, and Magna operating alongside domestic champions like Motherson Sumi and Bharat Forge. The PLI scheme for automotive is driving increased localization and technology development.",
      topCompanies: ["Bosch India", "ZF India", "Magna International", "Motherson Sumi", "Bharat Forge", "Continental India"]
    },
    {
      name: "Electric Vehicles & EV Startups",
      abbreviation: "EL",
      description: "Electric vehicles, battery technology, charging infrastructure",
      growth: "40% YoY",
      market: "$15B by 2027",
      detail: "India's EV revolution is accelerating with startups like Ola Electric, Ather Energy, and River leading two-wheeler EV adoption, while Tata and Mahindra dominate four-wheeler EV space. Battery manufacturing and charging infrastructure create entirely new career paths.",
      topCompanies: ["Ola Electric", "Ather Energy", "Tata Motors EV", "Mahindra Electric", "River", "Bounce Electric"]
    },
    {
      name: "Automotive Testing & Validation",
      abbreviation: "AU",
      description: "Vehicle testing, homologation, certification, and quality assurance",
      growth: "15% YoY",
      market: "$3B by 2026",
      detail: "With stricter safety and emissions regulations (Bharat Stage VI, NCAP), automotive testing and validation has become a critical function. Proving grounds, emissions labs, and crash test facilities require specialized engineers.",
      topCompanies: ["ICAT", "ARAI", "TUV Rheinland", "Tata Motors Test Facility", "Mahindra Research Valley"]
    },
    {
      name: "Aftermarket & Motorsports",
      abbreviation: "AF",
      description: "Vehicle modifications, performance tuning, racing, and service",
      growth: "8% YoY",
      market: "$18B by 2026",
      detail: "India's growing car culture and motorsports scene (F4, Indian Supercross Racing League) create niche opportunities in performance engineering, aftermarket parts, and motorsport team operations.",
      topCompanies: ["Meco Motorsports", "Race Concepts", "Red Rooster Racing", "Performance Racing", "Wolf Moto"]
    }
  ],

  jobRoles: [
    {
      title: "Vehicle Design Engineer",
      description: "Design body structures, closures, and interiors using CATIA/NX/Creo.",
      tools: ["CATIA", "NX", "Creo"],
      tiers: [
        { tier: 1, chance: "High", salary: "\u20B910 - \u20B916 LPA" },
        { tier: 2, chance: "Medium", salary: "\u20B96 - \u20B910 LPA" },
        { tier: 3, chance: "Low", salary: "\u20B94 - \u20B97 LPA" }
      ]
    },
    {
      title: "Powertrain Engineer",
      description: "Design engines, transmissions, and drivetrain systems for ICE and hybrid vehicles.",
      tools: ["MATLAB", "GT-Power", "CAD"],
      tiers: [
        { tier: 1, chance: "High", salary: "\u20B912 - \u20B920 LPA" },
        { tier: 2, chance: "Medium", salary: "\u20B97 - \u20B912 LPA" },
        { tier: 3, chance: "Low", salary: "\u20B95 - \u20B98 LPA" }
      ]
    },
    {
      title: "Vehicle Dynamics Engineer",
      description: "Tune suspension, steering, and handling characteristics for ride and performance.",
      tools: ["MATLAB/Simulink", "ADAMS", "CarSim"],
      tiers: [
        { tier: 1, chance: "High", salary: "\u20B912 - \u20B922 LPA" },
        { tier: 2, chance: "Medium", salary: "\u20B98 - \u20B914 LPA" },
        { tier: 3, chance: "Not available", salary: "N/A" }
      ]
    },
    {
      title: "NVH Engineer",
      description: "Reduce noise, vibration, and harshness through design and testing.",
      tools: ["LMS Test.Lab", "MATLAB", "ANSYS"],
      tiers: [
        { tier: 1, chance: "High", salary: "\u20B910 - \u20B918 LPA" },
        { tier: 2, chance: "Medium", salary: "\u20B97 - \u20B912 LPA" },
        { tier: 3, chance: "Low", salary: "\u20B95 - \u20B98 LPA" }
      ]
    },
    {
      title: "Manufacturing Engineer",
      description: "Optimize press shop, body shop, paint shop, and final assembly operations.",
      tools: ["AutoCAD", "PLC", "Lean Tools"],
      tiers: [
        { tier: 1, chance: "High", salary: "\u20B98 - \u20B914 LPA" },
        { tier: 2, chance: "High", salary: "\u20B95 - \u20B910 LPA" },
        { tier: 3, chance: "Medium", salary: "\u20B94 - \u20B97 LPA" }
      ]
    },
    {
      title: "Quality Engineer",
      description: "Implement IATF 16949, conduct PPAP, manage supplier quality audits.",
      tools: ["SPC", "FMEA", "MSA"],
      tiers: [
        { tier: 1, chance: "Medium", salary: "\u20B97 - \u20B912 LPA" },
        { tier: 2, chance: "High", salary: "\u20B95 - \u20B99 LPA" },
        { tier: 3, chance: "High", salary: "\u20B93.5 - \u20B96 LPA" }
      ]
    }
  ],

  topCompanies: {
    overview: "India's automobile engineering graduates are recruited by leading OEMs, Tier-1 suppliers, and a growing number of EV startups across the country.",
    companies: [
      { name: "Tata Motors", abbreviation: "TM", location: "Pune, Jamshedpur", sector: "OEM" },
      { name: "Maruti Suzuki", abbreviation: "MS", location: "Gurgaon, Manesar", sector: "OEM" },
      { name: "Mahindra & Mahindra", abbreviation: "MM", location: "Mumbai, Chennai", sector: "OEM" },
      { name: "Hyundai Motor India", abbreviation: "HY", location: "Chennai", sector: "OEM" },
      { name: "Kia India", abbreviation: "KI", location: "Anantapur", sector: "OEM" },
      { name: "Toyota Kirloskar", abbreviation: "TK", location: "Bangalore, Bidadi", sector: "OEM" },
      { name: "Hero MotoCorp", abbreviation: "HM", location: "Gurgaon, Dharuhera", sector: "Two-Wheeler OEM" },
      { name: "Bajaj Auto", abbreviation: "BA", location: "Pune, Aurangabad", sector: "Two-Wheeler OEM" },
      { name: "TVS Motor", abbreviation: "TVS", location: "Hosur, Mysore", sector: "Two-Wheeler OEM" },
      { name: "Royal Enfield", abbreviation: "RE", location: "Chennai, Tiruvottiyur", sector: "Two-Wheeler OEM" }
    ]
  },

  collegeTiers: {
    overview: "Automobile engineering is offered by a wide range of colleges across India. While core automotive roles prioritize tier-1 and tier-2 institutions, the growing EV ecosystem is opening doors for talent across all tiers.",
    tiers: [
      {
        tier: "Tier 1",
        examples: ["IIT Madras", "IIT Delhi", "IIT Bombay", "IIT Kharagpur", "NIT Trichy"],
        averagePackage: "\u20B910 - \u20B918 LPA",
        topRecruiters: ["Tata Motors R&D", "Hyundai", "Maruti Suzuki R&D", "Bosch", "Ola Electric", "Mahindra"],
        placementRate: "85-95%",
        notes: "Strong core automotive R&D roles; excellent EV startup placement"
      },
      {
        tier: "Tier 2",
        examples: ["BITS Pilani", "NIT Warangal", "NIT Surathkal", "VIT", "COEP", "PSG Tech"],
        averagePackage: "\u20B96 - \u20B912 LPA",
        topRecruiters: ["Tata Motors", "Mahindra", "Bosch", "TVS Motor", "Bajaj Auto", "ZF India"],
        placementRate: "65-75%",
        notes: "Good placement across OEMs and Tier-1 suppliers"
      },
      {
        tier: "Tier 3",
        examples: ["State engineering colleges", "Private colleges with OEM tie-ups"],
        averagePackage: "\u20B93.5 - \u20B97 LPA",
        topRecruiters: ["Maruti Suzuki", "Tata Motors (manufacturing)", "Component suppliers", "Service centers"],
        placementRate: "40-55%",
        notes: "Manufacturing and quality roles are most accessible"
      }
    ]
  },

  interviewTopics: [
    { topic: "Vehicle Dynamics", count: 50 },
    { topic: "Powertrain Systems", count: 50 },
    { topic: "Vehicle Design", count: 50 },
    { topic: "Electric Vehicle Technology", count: 50 },
    { topic: "Automotive Electronics", count: 50 },
    { topic: "Vehicle Testing & Validation", count: 50 },
    { topic: "Automotive Manufacturing", count: 50 },
    { topic: "ADAS & Autonomous Vehicles", count: 50 }
  ],

  interviewQuestions: {
    total: 400,
    samples: [
      {
        question: "Explain understeer and oversteer. How would you tune a vehicle to reduce understeer?",
        answer: "",
        topic: "Vehicle Dynamics",
        difficulty: "Medium"
      },
      {
        question: "What is MPPT in EV battery charging and why is it important?",
        answer: "",
        topic: "Electric Vehicle Technology",
        difficulty: "Medium"
      },
      {
        question: "What is the difference between monocoque and body-on-frame construction?",
        answer: "",
        topic: "Vehicle Design",
        difficulty: "Easy"
      },
      {
        question: "Explain the CAN bus protocol and why it's preferred in automotive applications.",
        answer: "",
        topic: "Automotive Electronics",
        difficulty: "Medium"
      },
      {
        question: "What is the purpose of a torque converter and how does it differ from a manual clutch?",
        answer: "",
        topic: "Powertrain Systems",
        difficulty: "Medium"
      }
    ]
  },

  resources: {
    books: [
      { name: "Fundamentals of Vehicle Dynamics", author: "Thomas D. Gillespie" },
      { name: "Vehicle Powertrain Systems", author: "Behrooz Mashadi & David Crolla" },
      { name: "Internal Combustion Engine Fundamentals", author: "John B. Heywood" },
      { name: "Electric and Hybrid Vehicles", author: "Iqbal Husain" },
      { name: "Automotive Engineering: Powertrain, Chassis System and Vehicle Body", author: "David Crolla" },
      { name: "Vehicle Body Layout and Analysis", author: "John Fenton" },
      { name: "The Automotive Chassis", author: "Jornsen Reimpell et al." },
      { name: "Modern Electric, Hybrid Electric, and Fuel Cell Vehicles", author: "Mehrdad Ehsani" }
    ],
    platforms: [
      { name: "NPTEL", description: "Free courses from IITs on vehicle dynamics, IC engines, and manufacturing" },
      { name: "Coursera", description: "Specialisations in autonomous vehicle and EV technologies" },
      { name: "Udemy", description: "Practical courses on CAN bus, MATLAB vehicle simulation" },
      { name: "Skill-Lync", description: "Industry-oriented PG programmes in automotive engineering" }
    ],
    certifications: [
      "IATF 16949 Internal Auditor Certification",
      "Six Sigma Green / Black Belt",
      "GATE Qualified (for PSU recruitment)",
      "CATIA / NX Professional Certifications",
      "ANSYS Simulation Certifications",
      "ASME GD&T Certification",
      "Certified Reliability Engineer (CRE)"
    ],
    skillLync: [
      {
        title: "EV Fundamentals",
        abbreviation: "EV",
        description: "Master electric vehicle technology and battery systems"
      },
      {
        title: "Body-in-White Fundamentals",
        abbreviation: "BIW",
        description: "Learn automotive body structure design"
      },
      {
        title: "FEA Fundamentals",
        abbreviation: "FEA",
        description: "Structural analysis for automotive applications"
      }
    ]
  },

  futureTrends: [
    {
      trend: "Electric Vehicle Revolution",
      impact: "Very High",
      description: "India targets 30% EV sales by 2030, creating massive demand for EV engineers in battery, motor, and power electronics domains."
    },
    {
      trend: "ADAS & Autonomous Driving",
      impact: "Very High",
      description: "Increasing NCAP safety ratings and autonomous driving features are driving demand for sensor fusion, computer vision, and control system engineers."
    },
    {
      trend: "Connected & Software-Defined Vehicles",
      impact: "Very High",
      description: "Vehicles are becoming software platforms with OTA updates, V2X communication, and digital cockpits requiring automotive software expertise."
    },
    {
      trend: "Advanced Manufacturing",
      impact: "High",
      description: "Industry 4.0, IIoT, and digital twin technologies are transforming automotive manufacturing with smart factories and predictive maintenance."
    },
    {
      trend: "Alternative Propulsion",
      impact: "High",
      description: "Beyond BEVs, hydrogen fuel cells, hybrid architectures, and synthetic fuels are emerging as complementary propulsion technologies."
    }
  ],

  relatedBranches: [
    { id: "mechanical-engineering", name: "Mechanical Engineering" },
    { id: "electrical-engineering", name: "Electrical Engineering" },
    { id: "electronics-and-communication-engineering", name: "Electronics & Communication Engineering" }
  ]
};

export const branchMeta = {
  id: "automobile-engineering",
  name: "Automobile Engineering",
  shortName: "AUTO",
  slug: "automobile-engineering",
  icon: "car",
  salaryRange: "\u20B94 - \u20B960 LPA",
  hiringIndustries: "OEM Manufacturing, Tier-1 Suppliers, Electric Vehicles, Testing & Validation, Motorsports",
  jobOpenings: "30,000+",
  description: "Vehicle design, powertrain systems, vehicle dynamics, and manufacturing.",
  gradient: "from-red-50 to-red-100",
  color: "#DC2626"
};
