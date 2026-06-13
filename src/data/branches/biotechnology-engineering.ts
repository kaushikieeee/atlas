export const biotechnologyEngineering = {
  id: "biotechnology-engineering",
  name: "Biotechnology Engineering",
  shortName: "BT",
  tagline: "The Complete Guide to Biotechnology Engineering Careers in India",
  description:
    "Biotechnology engineering combines biological sciences with engineering principles to develop products and technologies for healthcare, agriculture, and industry. Post-COVID, India's biotech sector has witnessed explosive growth, crossing $100 billion with over 3 million jobs created. With 5,300+ startups and major players like Biocon, Serum Institute, Dr. Reddy's, and Syngene, India has become a global biotechnology hub. The field offers diverse opportunities from vaccine development to bioinformatics, with salaries showing strong growth trajectory especially in biopharma and healthcare diagnostics sectors.",
  color: "#059669",

  overview: {
    introduction:
      "Biotechnology engineering combines biological sciences with engineering principles to develop products and technologies for healthcare, agriculture, and industry. Post-COVID, India's biotech sector has witnessed explosive growth, crossing $100 billion with over 3 million jobs created. With 5,300+ startups and major players like Biocon, Serum Institute, Dr. Reddy's, and Syngene, India has become a global biotechnology hub. The field offers diverse opportunities from vaccine development to bioinformatics, with salaries showing strong growth trajectory especially in biopharma and healthcare diagnostics sectors.",
    duration: "4 years (B.Tech / B.E.)",
    avgFees: "₹1,50,000 - ₹5,00,000 (total)",
    difficulty: "Moderate to High",
    skillsRequired: [
      "Strong foundation in molecular biology and genetics",
      "Understanding of bioprocess engineering and fermentation technology",
      "Proficiency in analytical techniques (HPLC, GC-MS, PCR, ELISA)",
      "Knowledge of biochemistry and metabolic pathways",
      "Familiarity with bioinformatics tools and sequence analysis",
      "Understanding of GMP, GLP, and regulatory compliance",
      "Knowledge of downstream processing and purification",
      "Laboratory skills including aseptic technique and cell culture"
    ],
    tags: ["Pharma/Biopharma", "Healthcare", "Agri Biotech", "Industrial Biotech", "Research"]
  },

  salary: {
    overview: "Biotechnology salaries in India have grown significantly post-COVID, driven by the biopharma boom and startup ecosystem. The sector offers diverse opportunities from R&D to manufacturing and regulatory affairs.",
    averageStarting: "₹4.5 LPA",
    averageMid: "₹10 LPA",
    averageSenior: "₹22 LPA",
    breakdown: [
      {
        level: "Fresher (0-2 years)",
        range: "₹3 - ₹6 LPA",
        median: "₹4.5 LPA",
        top10: "₹8 LPA",
        note: "Higher in biopharma R&D and bioinformatics roles"
      },
      {
        level: "Mid-Level (3-7 years)",
        range: "₹8 - ₹15 LPA",
        median: "₹10 LPA",
        top10: "₹20 LPA",
        note: "Strong growth in regulatory affairs and process development"
      },
      {
        level: "Senior (8+ years)",
        range: "₹15 - ₹35 LPA",
        median: "₹22 LPA",
        top10: "₹45+ LPA",
        note: "Senior scientists and R&D leads command premium packages"
      }
    ],
    topPayers: [
      { company: "Biocon", range: "₹6 - ₹25 LPA", sector: "Biopharma" },
      { company: "Serum Institute of India", range: "₹6 - ₹22 LPA", sector: "Vaccines" },
      { company: "Dr. Reddy's Laboratories", range: "₹5 - ₹20 LPA", sector: "Pharma/Biologics" },
      { company: "Syngene International", range: "₹5 - ₹18 LPA", sector: "CRDMO" },
      { company: "Bharat Biotech", range: "₹6 - ₹20 LPA", sector: "Vaccines" },
      { company: "Cipla", range: "₹5 - ₹18 LPA", sector: "Pharma" }
    ]
  },

  industries: [
    {
      name: "Pharma & Biopharma",
      abbreviation: "PH",
      description: "Vaccines, monoclonal antibodies, biosimilars, and recombinant therapeutics",
      growth: "18% YoY",
      market: "$130B by 2030",
      detail: "India is the world's largest producer of generic drugs and vaccines. Post-COVID, the biopharma sector has grown exponentially with companies like Serum Institute, Biocon, and Bharat Biotech leading global vaccine production. Strong opportunities in biologics, biosimilars, and recombinant protein production.",
      topCompanies: ["Biocon", "Serum Institute", "Dr. Reddy's", "Syngene", "Bharat Biotech", "Cipla"]
    },
    {
      name: "Healthcare & Diagnostics",
      abbreviation: "HE",
      description: "Molecular diagnostics, NGS-based testing, and precision medicine",
      growth: "15% YoY",
      market: "$25B by 2027",
      detail: "India's diagnostics sector is growing rapidly with molecular diagnostics, NGS-based testing, and liquid biopsy technologies. Biotechnology engineers work in assay development, clinical genomics, and diagnostic product innovation.",
      topCompanies: ["MedGenome", "Strand Life Sciences", "Thyrocare", "Metropolis", "Redcliffe Labs"]
    },
    {
      name: "Agricultural Biotechnology",
      abbreviation: "AG",
      description: "GM crops, biofertilizers, biopesticides, and plant tissue culture",
      growth: "12% YoY",
      market: "$15B by 2025",
      detail: "Agricultural biotechnology in India focuses on developing drought-resistant crops, biofertilizers, and biopesticides. GM cotton dominates while research continues in GM mustard, rice, and other staple crops.",
      topCompanies: ["Mahyco", "Rasi Seeds", "Bayer Crop Science", "Syngenta India", "Nuziveedu Seeds"]
    },
    {
      name: "Industrial Biotechnology",
      abbreviation: "IN",
      description: "Enzymes, biofuels, bioplastics, and industrial fermentation",
      growth: "10% YoY",
      market: "$12B by 2025",
      detail: "Industrial biotechnology uses biological systems for manufacturing enzymes, specialty chemicals, and biofuels. India's bioeconomy is driving demand for bioprocess engineers in enzyme production and green chemistry.",
      topCompanies: ["Novozymes India", "Advanced Enzymes", "Lonza India", "Praxis BioSolutions"]
    },
    {
      name: "Research & Academia",
      abbreviation: "RE",
      description: "Basic research, translational research, and academic positions",
      growth: "8% YoY",
      market: "Growing with increased DBT/DST funding",
      detail: "India's Department of Biotechnology (DBT) and DST fund extensive research across institutes like IISc, NCBS, CCMB, and IITs. PhD and postdoctoral positions offer opportunities in cutting-edge bioscience research.",
      topCompanies: ["IISc Bangalore", "NCBS", "CCMB", "DBT Institutes", "IITs"]
    }
  ],

  jobRoles: [
    {
      title: "Research Scientist",
      description: "Lead R&D projects in drug discovery, protein engineering, or cell line development.",
      tools: ["PCR", "HPLC", "Mass Spec"],
      tiers: [
        { tier: 1, chance: "High", salary: "₹8 - ₹15 LPA" },
        { tier: 2, chance: "Medium", salary: "₹5 - ₹10 LPA" },
        { tier: 3, chance: "Low", salary: "₹4 - ₹7 LPA" }
      ]
    },
    {
      title: "Bioprocess Engineer",
      description: "Design and optimize fermentation, cell culture, and downstream processing operations.",
      tools: ["Bioreactors", "Chromatography", "TFF"],
      tiers: [
        { tier: 1, chance: "High", salary: "₹7 - ₹14 LPA" },
        { tier: 2, chance: "High", salary: "₹5 - ₹10 LPA" },
        { tier: 3, chance: "Medium", salary: "₹4 - ₹7 LPA" }
      ]
    },
    {
      title: "QA/QC Analyst",
      description: "Ensure product quality through analytical testing, validation, and GMP compliance.",
      tools: ["HPLC", "ELISA", "Thermal Cyclers"],
      tiers: [
        { tier: 1, chance: "Medium", salary: "₹5 - ₹10 LPA" },
        { tier: 2, chance: "High", salary: "₹4 - ₹8 LPA" },
        { tier: 3, chance: "High", salary: "₹3 - ₹6 LPA" }
      ]
    },
    {
      title: "Regulatory Affairs Specialist",
      description: "Manage drug approvals, compliance documentation, and interactions with CDSCO/FDA/EMA.",
      tools: ["eCTD", "Regulatory databases", "CTMS"],
      tiers: [
        { tier: 1, chance: "High", salary: "₹8 - ₹16 LPA" },
        { tier: 2, chance: "Medium", salary: "₹6 - ₹12 LPA" },
        { tier: 3, chance: "Low", salary: "₹4 - ₹8 LPA" }
      ]
    },
    {
      title: "Formulation Scientist",
      description: "Develop drug delivery systems, formulations, and stability studies for biologics.",
      tools: ["DSC", "DLS", "HPLC"],
      tiers: [
        { tier: 1, chance: "High", salary: "₹8 - ₹14 LPA" },
        { tier: 2, chance: "Medium", salary: "₹5 - ₹9 LPA" },
        { tier: 3, chance: "Low", salary: "₹4 - ₹7 LPA" }
      ]
    },
    {
      title: "Clinical Research Associate",
      description: "Monitor clinical trials, ensure protocol compliance, and coordinate with investigator sites.",
      tools: ["CTMS", "EDC", "ICH GCP"],
      tiers: [
        { tier: 1, chance: "High", salary: "₹7 - ₹14 LPA" },
        { tier: 2, chance: "High", salary: "₹5 - ₹10 LPA" },
        { tier: 3, chance: "Medium", salary: "₹4 - ₹7 LPA" }
      ]
    }
  ],

  topCompanies: {
    overview: "India's biotechnology graduates are recruited by leading biopharma companies, CROs, diagnostics firms, and a growing number of biotech startups across the country.",
    companies: [
      { name: "Biocon", abbreviation: "BC", location: "Bangalore, Hyderabad", sector: "Biopharma" },
      { name: "Serum Institute of India", abbreviation: "SII", location: "Pune", sector: "Vaccines" },
      { name: "Dr. Reddy's Laboratories", abbreviation: "DRL", location: "Hyderabad, Vizag", sector: "Pharma/Biologics" },
      { name: "Syngene International", abbreviation: "SYN", location: "Bangalore, Mangalore", sector: "CRDMO" },
      { name: "Bharat Biotech", abbreviation: "BB", location: "Hyderabad", sector: "Vaccines" },
      { name: "Cipla", abbreviation: "CIP", location: "Mumbai, Goa", sector: "Pharma" }
    ]
  },

  collegeTiers: {
    overview: "Biotechnology engineering placements are strong in Tier 1 colleges with R&D-heavy curricula. The sector values practical skills and research experience highly.",
    tiers: [
      {
        tier: "Tier 1",
        examples: ["IIT Delhi", "IIT Kharagpur", "IIT Madras", "IISc Bangalore", "ICT Mumbai"],
        averagePackage: "₹8 - ₹16 LPA",
        topRecruiters: ["Biocon", "Serum Institute", "Dr. Reddy's", "Syngene", "Bharat Biotech"],
        placementRate: "75-90%",
        notes: "Many graduates pursue MS/PhD abroad or join top biopharma R&D"
      },
      {
        tier: "Tier 2",
        examples: ["NIT Warangal", "BITS Pilani", "VIT", "Manipal", "SRM", "Anna University"],
        averagePackage: "₹5 - ₹10 LPA",
        topRecruiters: ["Biocon", "Syngene", "Cipla", "Dr. Reddy's", "Strand Life Sciences"],
        placementRate: "60-75%",
        notes: "QA/QC and manufacturing roles are common entry points"
      },
      {
        tier: "Tier 3",
        examples: ["State biotech colleges", "Private colleges with industry partnerships"],
        averagePackage: "₹3 - ₹6 LPA",
        topRecruiters: ["CROs", "Diagnostic labs", "Mid-size pharma companies"],
        placementRate: "40-55%",
        notes: "Internships and certifications significantly improve placement outcomes"
      }
    ]
  },

  interviewTopics: [
    { topic: "Molecular Biology", count: 50 },
    { topic: "Genetic Engineering", count: 50 },
    { topic: "Bioprocess Engineering", count: 50 },
    { topic: "Biochemistry", count: 50 },
    { topic: "Industrial Microbiology", count: 50 },
    { topic: "Bioinformatics", count: 50 },
    { topic: "Pharmaceutical Biotechnology", count: 50 },
    { topic: "Environmental Biotechnology", count: 50 }
  ],

  interviewQuestions: {
    total: 400,
    samples: [
      {
        question: "What is the difference between PCR and RT-PCR?",
        answer: "",
        topic: "Molecular Biology",
        difficulty: "Easy"
      },
      {
        question: "Explain the difference between upstream and downstream processing.",
        answer: "",
        topic: "Bioprocess Engineering",
        difficulty: "Medium"
      },
      {
        question: "What is CRISPR-Cas9 and its applications in biotechnology?",
        answer: "",
        topic: "Genetic Engineering",
        difficulty: "Medium"
      },
      {
        question: "Explain the principle of ELISA and its different types.",
        answer: "",
        topic: "Biochemistry",
        difficulty: "Easy"
      },
      {
        question: "What is bioremediation and how does it work?",
        answer: "",
        topic: "Environmental Biotechnology",
        difficulty: "Easy"
      }
    ]
  },

  resources: {
    books: [
      { name: "Molecular Biology of the Cell", author: "Alberts et al." },
      { name: "Principles of Gene Manipulation and Genomics", author: "Primrose & Twyman" },
      { name: "Biochemical Engineering Fundamentals", author: "Bailey & Ollis" },
      { name: "Lehninger Principles of Biochemistry", author: "Nelson & Cox" },
      { name: "Bioprocess Engineering Principles", author: "Doran" },
      { name: "Bioinformatics: Sequence and Genome Analysis", author: "David Mount" }
    ],
    platforms: [
      { name: "NPTEL", description: "Free courses from IITs on biotechnology fundamentals" },
      { name: "Coursera", description: "Specialisations in genomics, bioprocessing, and drug development" },
      { name: "edX", description: "Courses from MIT, Harvard on molecular biology and bioinformatics" }
    ],
    certifications: [
      "NPTEL Course Certificates in Biotechnology",
      "GATE Qualified (for PSU/MSc admissions)",
      "Six Sigma Green / Black Belt",
      "Clinical Research Certification (CCRA)",
      "ICH GCP Certification",
      "Bioinformatics Certification (NGS Data Analysis)"
    ],
  },

  futureTrends: [
    {
      trend: "Precision Medicine & Genomics",
      impact: "Very High",
      description: "NGS-based diagnostics, liquid biopsy, and personalized therapeutics are transforming healthcare delivery in India."
    },
    {
      trend: "Cell & Gene Therapy",
      impact: "Very High",
      description: "CAR-T cell therapy, gene editing therapies, and stem cell treatments are creating new frontiers in biotech."
    },
    {
      trend: "AI/ML in Drug Discovery",
      impact: "Very High",
      description: "Computational drug discovery and AI-driven protein design are accelerating the pace of therapeutic development."
    },
    {
      trend: "Biomanufacturing 4.0",
      impact: "High",
      description: "Continuous manufacturing, single-use technologies, and digital twins are transforming biopharmaceutical production."
    },
    {
      trend: "Synthetic Biology",
      impact: "High",
      description: "Engineered biological systems for sustainable production of chemicals, materials, and fuels are gaining traction."
    }
  ],

  relatedBranches: [
    { id: "chemical-engineering", name: "Chemical Engineering" },
    { id: "computer-science-engineering", name: "Computer Science Engineering" },
    { id: "pharmaceutical-engineering", name: "Pharmaceutical Engineering" }
  ]
};

export const branchMeta = {
  id: "biotechnology-engineering",
  name: "Biotechnology Engineering",
  shortName: "BT",
  slug: "biotechnology-engineering",
  icon: "flask",
  salaryRange: "₹3 - ₹35 LPA",
  hiringIndustries: "Pharma/Biopharma, Healthcare, Agri Biotech, Industrial Biotech, Research",
  jobOpenings: "10,000+",
  description: "Molecular biology, genetic engineering, bioprocessing, and bioinformatics.",
  gradient: "from-emerald-50 to-emerald-100",
  color: "#059669"
};
