export const computerScienceEngineering = {
  id: "computer-science-engineering",
  name: "Computer Science Engineering",
  shortName: "CSE",
  tagline: "The Complete Guide to Computer Science Engineering Careers in India",
  description:
    "Computer Science Engineering is the most sought-after engineering discipline in India, offering the highest starting salaries and abundant job opportunities. The field encompasses software development, data science, artificial intelligence, cloud computing, cybersecurity, and system design. India has 4.3 million software engineers as of 2025, representing 14.7% of the global software engineering workforce. With the rise of product companies, startups, and Global Capability Centers (GCCs), CS graduates have access to world-class compensation packages, often including significant equity components that can multiply total compensation several times over base salary.",
  color: "#2563EB",

  overview: {
    introduction:
      "Computer Science Engineering is the most sought-after engineering discipline in India, offering the highest starting salaries and abundant job opportunities. The field encompasses software development, data science, artificial intelligence, cloud computing, cybersecurity, and system design. India has 4.3 million software engineers as of 2025, representing 14.7% of the global software engineering workforce.",
    duration: "4 years (B.Tech / B.E.)",
    avgFees: "₹2,00,000 - ₹10,00,000 (total)",
    difficulty: "Moderate",
    skillsRequired: [
      "Strong programming skills in at least one language (Java, Python, C++)",
      "Understanding of data structures and algorithms",
      "Knowledge of database systems and SQL",
      "Familiarity with web technologies and frameworks",
      "Understanding of operating systems and computer networks",
      "Problem-solving and analytical thinking",
      "Version control (Git) and collaboration tools",
      "System design and software architecture principles"
    ],
    tags: ["IT Services", "Product Companies", "Fintech", "E-commerce", "Enterprise SaaS", "Startups"]
  },

  salary: {
    overview: "CSE salaries in India are the highest among all engineering branches, with top product companies and startups offering compensation packages that rival global standards. Equity components can significantly multiply total compensation.",
    averageStarting: "₹12 LPA",
    averageMid: "₹25 LPA",
    averageSenior: "₹60 LPA",
    breakdown: [
      {
        level: "Fresher (0-2 years)",
        range: "₹6 - ₹25 LPA",
        median: "₹12 LPA",
        top10: "₹45 LPA",
        note: "FAANG and top product companies offer 20-45 LPA for top-tier graduates"
      },
      {
        level: "Mid-Level (3-7 years)",
        range: "₹15 - ₹50 LPA",
        median: "₹25 LPA",
        top10: "₹80 LPA",
        note: "Senior engineers at product companies with ESOPs can earn significantly more"
      },
      {
        level: "Senior (8+ years)",
        range: "₹40 - ₹120+ LPA",
        median: "₹60 LPA",
        top10: "₹1.5 Cr+",
        note: "Staff/Principal engineers at FAANG and top unicorns earn 1-3 Cr+ with RSUs"
      }
    ],
    topPayers: [
      { company: "Google", range: "₹30 - ₹150+ LPA", sector: "Product / Tech" },
      { company: "Microsoft", range: "₹25 - ₹120+ LPA", sector: "Product / Tech" },
      { company: "Amazon", range: "₹20 - ₹100+ LPA", sector: "E-commerce / Cloud" },
      { company: "Flipkart", range: "₹18 - ₹80+ LPA", sector: "E-commerce" },
      { company: "Uber", range: "₹25 - ₹100+ LPA", sector: "Mobility / Tech" },
      { company: "PhonePe", range: "₹20 - ₹85+ LPA", sector: "Fintech" },
      { company: "Razorpay", range: "₹18 - ₹75+ LPA", sector: "Fintech" },
      { company: "Swiggy", range: "₹15 - ₹70+ LPA", sector: "Food Tech" }
    ]
  },

  industries: [
    {
      name: "IT Services",
      abbreviation: "IT",
      description: "Software development, consulting, and outsourcing",
      growth: "8% YoY",
      market: "$250B by 2026",
      detail: "India's IT services sector is the world's largest, employing over 5 million professionals. Companies like TCS, Infosys, and Wipro offer stable careers with global exposure. While salaries are lower than product companies, these firms provide excellent training programs, work-life balance, and opportunities for international assignments.",
      topCompanies: ["TCS", "Infosys", "Wipro", "HCLTech", "Tech Mahindra", "Cognizant"]
    },
    {
      name: "Product Companies / FAANG",
      abbreviation: "PR",
      description: "Consumer and enterprise technology products",
      growth: "15% YoY",
      market: "$50B+ in India",
      detail: "Global tech giants and Indian product companies offer the highest compensation packages. FAANG (Facebook/Meta, Apple, Amazon, Netflix, Google) and Indian unicorns compete fiercely for top talent, offering cutting-edge work on products used by billions.",
      topCompanies: ["Google", "Microsoft", "Amazon", "Meta", "Apple", "Flipkart", "Uber"]
    },
    {
      name: "Fintech",
      abbreviation: "FI",
      description: "Digital payments, lending, and financial platforms",
      growth: "22% YoY",
      market: "$150B by 2025",
      detail: "India's fintech revolution is creating massive demand for software engineers. UPI alone processes over 10 billion transactions monthly. Engineers work on payment systems, risk analytics, fraud detection, and financial inclusion products.",
      topCompanies: ["PhonePe", "Razorpay", "Paytm", "CRED", "BharatPe", "Groww", "Zerodha"]
    },
    {
      name: "E-commerce",
      abbreviation: "E-",
      description: "Online retail, marketplace, and logistics platforms",
      growth: "18% YoY",
      market: "$100B+",
      detail: "India's e-commerce market is projected to reach $100B by 2030. Engineers build and scale platforms handling millions of daily transactions, with challenges in search, recommendations, inventory, payments, and last-mile logistics.",
      topCompanies: ["Flipkart", "Amazon India", "Meesho", "Myntra", "Nykaa", "Tata CLiQ"]
    },
    {
      name: "Enterprise SaaS",
      abbreviation: "EN",
      description: "B2B software, cloud services, and business platforms",
      growth: "25% YoY",
      market: "$50B by 2030",
      detail: "India is emerging as a global SaaS powerhouse with over 1,000 SaaS companies. Engineers work on cloud-native applications, APIs, and platforms serving global customers across CRM, HR, analytics, and collaboration tools.",
      topCompanies: ["Zoho", "Freshworks", "Postman", "BrowserStack", "Chargebee", "Whatfix"]
    }
  ],

  jobRoles: [
    {
      title: "Software Developer",
      description: "Build and maintain enterprise applications using Java, .NET, Python across various domains",
      tools: ["Java", "Python", "Spring Boot", "React", "AWS"],
      tiers: [
        { tier: 1, chance: "High", salary: "₹8 - ₹14 LPA" },
        { tier: 2, chance: "High", salary: "₹5 - ₹10 LPA" },
        { tier: 3, chance: "High", salary: "₹3.5 - ₹6 LPA" }
      ]
    },
    {
      title: "Data Engineer",
      description: "Design and maintain data pipelines, ETL processes, and data warehouses using Spark, Airflow",
      tools: ["Spark", "Airflow", "Kafka", "Snowflake", "dbt"],
      tiers: [
        { tier: 1, chance: "High", salary: "₹10 - ₹18 LPA" },
        { tier: 2, chance: "High", salary: "₹7 - ₹12 LPA" },
        { tier: 3, chance: "Medium", salary: "₹5 - ₹8 LPA" }
      ]
    },
    {
      title: "DevOps Engineer",
      description: "Implement CI/CD pipelines, manage cloud infrastructure on AWS/Azure, automate deployments",
      tools: ["Docker", "Kubernetes", "Terraform", "Jenkins", "AWS"],
      tiers: [
        { tier: 1, chance: "High", salary: "₹10 - ₹20 LPA" },
        { tier: 2, chance: "High", salary: "₹7 - ₹14 LPA" },
        { tier: 3, chance: "Medium", salary: "₹5 - ₹9 LPA" }
      ]
    },
    {
      title: "Cloud Architect",
      description: "Design cloud solutions on AWS/Azure/GCP, optimize costs, ensure scalability and security",
      tools: ["AWS", "Azure", "GCP", "Terraform", "Kubernetes"],
      tiers: [
        { tier: 1, chance: "High", salary: "₹18 - ₹35 LPA" },
        { tier: 2, chance: "Medium", salary: "₹12 - ₹22 LPA" },
        { tier: 3, chance: "Low", salary: "₹8 - ₹15 LPA" }
      ]
    },
    {
      title: "QA/Test Engineer",
      description: "Design test strategies, build automation frameworks using Selenium, ensure software quality",
      tools: ["Selenium", "Cypress", "JUnit", "Postman", "JMeter"],
      tiers: [
        { tier: 1, chance: "High", salary: "₹7 - ₹14 LPA" },
        { tier: 2, chance: "High", salary: "₹5 - ₹10 LPA" },
        { tier: 3, chance: "High", salary: "₹3.5 - ₹7 LPA" }
      ]
    }
  ],

  topCompanies: {
    overview: "India's CS graduates are recruited by the world's leading technology companies, from global product giants to Indian IT services leaders and high-growth startups.",
    companies: [
      { name: "TCS", abbreviation: "TCS", location: "Mumbai, Bangalore", sector: "IT Services" },
      { name: "Infosys", abbreviation: "INF", location: "Bangalore, Pune", sector: "IT Services" },
      { name: "Wipro", abbreviation: "WIP", location: "Bangalore, Hyderabad", sector: "IT Services" },
      { name: "HCLTech", abbreviation: "HCL", location: "Noida, Chennai", sector: "IT Services" },
      { name: "Tech Mahindra", abbreviation: "TM", location: "Pune, Hyderabad", sector: "IT Services" },
      { name: "Cognizant", abbreviation: "CTS", location: "Chennai, Pune", sector: "IT Services" }
    ]
  },

  collegeTiers: {
    overview: "CSE placement outcomes are strongly tier-dependent. Top product companies recruit almost exclusively from Tier 1, while IT services firms provide broad access across all tiers.",
    tiers: [
      {
        tier: "Tier 1",
        examples: ["IITs", "NITs", "BITS Pilani", "IIIT Hyderabad"],
        averagePackage: "₹20 - ₹45 LPA",
        topRecruiters: ["Google", "Microsoft", "Amazon", "Flipkart", "Goldman Sachs", "Uber", "PhonePe"],
        placementRate: "95-100%",
        notes: "FAANG and top product companies compete aggressively for Tier 1 CSE graduates"
      },
      {
        tier: "Tier 2",
        examples: ["VIT", "SRM", "Manipal", "COEP", "PES University", "DTU"],
        averagePackage: "₹8 - ₹15 LPA",
        topRecruiters: ["Amazon", "Microsoft", "TCS Digital", "Infosys", "Wipro", "Accenture"],
        placementRate: "80-90%",
        notes: "Strong mix of product and IT services companies"
      },
      {
        tier: "Tier 3",
        examples: ["State engineering colleges", "Private engineering colleges with AICTE approval"],
        averagePackage: "₹4 - ₹8 LPA",
        topRecruiters: ["TCS", "Infosys", "Wipro", "Tech Mahindra", "Cognizant", "Accenture"],
        placementRate: "50-70%",
        notes: "IT services companies are primary recruiters; upskilling is essential for product company roles"
      }
    ]
  },

  interviewTopics: [
    { topic: "Data Structures & Algorithms", count: 200 },
    { topic: "System Design", count: 80 },
    { topic: "Object-Oriented Programming", count: 50 },
    { topic: "Database Management (SQL/NoSQL)", count: 45 },
    { topic: "Operating Systems", count: 40 },
    { topic: "Computer Networks", count: 35 },
    { topic: "Web Technologies", count: 30 },
    { topic: "Distributed Systems", count: 25 }
  ],

  interviewQuestions: {
    total: 505,
    samples: [
      {
        question: "Given an array of integers, find two numbers that add up to a target sum. What is the optimal approach?",
        answer: "",
        topic: "Data Structures & Algorithms",
        difficulty: "Easy"
      },
      {
        question: "Design a URL shortening service like bit.ly. How would you handle millions of requests per second?",
        answer: "",
        topic: "System Design",
        difficulty: "Medium"
      },
      {
        question: "Explain the difference between a process and a thread. When would you use each?",
        answer: "",
        topic: "Operating Systems",
        difficulty: "Medium"
      },
      {
        question: "You have a sorted array rotated at some pivot. Find a target element in O(log n) time.",
        answer: "",
        topic: "Data Structures & Algorithms",
        difficulty: "Medium"
      },
      {
        question: "Design a rate limiter for an API. How would you implement it in a distributed system?",
        answer: "",
        topic: "System Design",
        difficulty: "Hard"
      }
    ]
  },

  resources: {
    books: [
      { name: "Introduction to Algorithms (CLRS)", author: "Cormen, Leiserson, Rivest, Stein" },
      { name: "Designing Data-Intensive Applications", author: "Martin Kleppmann" },
      { name: "Clean Code", author: "Robert C. Martin" },
      { name: "Cracking the Coding Interview", author: "Gayle Laakmann McDowell" },
      { name: "System Design Interview", author: "Alex Xu" },
      { name: "The Pragmatic Programmer", author: "Andrew Hunt & David Thomas" }
    ],
    platforms: [
      { name: "LeetCode", description: "Platform for coding interview preparation with 2000+ problems" },
      { name: "Coursera", description: "Specialisations in AI/ML, cloud computing, and data science" },
      { name: "Skill-Lync", description: "Industry-oriented PG programmes in software development and DSA" },
      { name: "Udemy", description: "Affordable courses on web development, DevOps, and system design" }
    ],
    certifications: [
      "AWS Certified Solutions Architect",
      "Google Cloud Professional Data Engineer",
      "Microsoft Certified: Azure Developer Associate",
      "Oracle Java Certification (OCPJP)",
      "Certified Kubernetes Administrator (CKA)",
      "Scrum Master Certification (CSM)"
    ],
    skillLync: [
      {
        title: "DSA Fundamentals",
        abbreviation: "DSA",
        description: "Master data structures and algorithms for interviews"
      },
      {
        title: "System Design",
        abbreviation: "SD",
        description: "Design scalable distributed systems"
      },
      {
        title: "Web Development",
        abbreviation: "WEB",
        description: "Full stack web development with modern frameworks"
      }
    ]
  },

  futureTrends: [
    {
      trend: "Artificial Intelligence & Machine Learning",
      impact: "Very High",
      description: "Generative AI, LLMs, and ML pipelines are transforming every industry, creating massive demand for AI/ML engineers."
    },
    {
      trend: "Cloud Computing & DevOps",
      impact: "Very High",
      description: "Multi-cloud strategies, serverless computing, and platform engineering are reshaping how software is built and deployed."
    },
    {
      trend: "Cybersecurity",
      impact: "Very High",
      description: "With increasing cyber threats, demand for security engineers, ethical hackers, and DevSecOps practitioners is growing rapidly."
    },
    {
      trend: "Data Engineering & Analytics",
      impact: "High",
      description: "Real-time data processing, data lakes, and AI-driven analytics are creating high-value roles for data engineers."
    },
    {
      trend: "Blockchain & Web3",
      impact: "Medium",
      description: "Decentralised applications, smart contracts, and DeFi platforms are emerging as a new frontier for software engineers."
    }
  ],

  relatedBranches: [
    { id: "electronics-and-communication-engineering", name: "Electronics & Communication Engineering" },
    { id: "electrical-engineering", name: "Electrical Engineering" },
    { id: "instrumentation-engineering", name: "Instrumentation Engineering" }
  ]
};

export const branchMeta = {
  id: "computer-science-engineering",
  name: "Computer Science Engineering",
  shortName: "CSE",
  slug: "computer-science-engineering",
  icon: "monitor",
  salaryRange: "₹6 - ₹120+ LPA",
  hiringIndustries: "IT Services, Product, Fintech, E-commerce, SaaS, Startups",
  jobOpenings: "50,000+",
  description: "Software development, AI/ML, data science, and systems engineering.",
  gradient: "from-blue-50 to-blue-100",
  color: "#2563EB"
};
