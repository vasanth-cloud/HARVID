export const companyDetails = {
  name: "HARVID",
  fullName: "HARVID Tech & Software Solutions",
  logo: "/harvid-emblem-clean.png",
  positioning: "HARVID — Building AI-Powered Software Solutions for Modern Businesses.",
  tagline: "Building AI-Powered Software Solutions for Modern Businesses",
  description: "HARVID turns complex business challenges into fast, intelligent software. From custom SaaS web apps and AI automation to specialized systems like Bar OS and Jewellery ERP, we build software engineered for speed and revenue growth.",
  establishedYear: 2026,
  status: "Active Software Studio",
  contact: {
    email: "harvidtech@gmail.com",
    phone: "6381901759",
    displayPhone: "+91 6381901759",
    whatsappLink: "https://wa.me/916381901759",
    address: "HARVID Tech Studio",
  },
  stats: [
    { label: "Completed Systems", value: "10+ Systems", detail: "Active Production Builds" },
    { label: "Platform SLA Uptime", value: "99.99%", detail: "Enterprise Grade Cloud" },
    { label: "API Response Speed", value: "< 20ms", detail: "High-Concurrency FastAPI" },
    { label: "Industries Served", value: "Multi-Industry", detail: "Hospitality, Retail, SaaS" },
  ],
  techStack: [
    "React", "Python", "FastAPI", "Node.js", "PostgreSQL", "PyTorch / AI", "Docker", "Tailwind CSS"
  ]
};

export const teamData = [
  {
    name: "A. Vasanth",
    role: "Founder",
    focus: "Software Engineering & Architecture",
    bio: "Software developer and systems architect driving HARVID's technology stack, cloud backends, and custom software platforms.",
    avatar: "/vasanth.jpg"
  },
  {
    name: "T. S. Padmesh",
    role: "Founder",
    focus: "Marketing & Growth Strategy",
    bio: "Head of marketing, business development, and client relations driving HARVID's market presence and enterprise outreach.",
    avatar: "/padmesh.jpg"
  }
];

export const servicesData = [
  {
    id: "custom-software",
    title: "Custom Software Development",
    icon: "Code2",
    shortDesc: "Bespoke full-stack web and desktop applications engineered specifically for your unique business workflows.",
    fullDesc: "We build custom software solutions ground-up using modern frameworks like React and FastAPI. No rigid off-the-shelf templates—every module is tailored to automate your operations.",
    features: [
      "Custom Full-Stack Web & Business Software",
      "Tailored Operations & Administration Dashboards",
      "High-Speed RESTful API & Database Architecture",
      "Automated Workflow & Data Pipeline Development"
    ],
    techStack: ["React", "FastAPI", "Python", "PostgreSQL", "Tailwind CSS"]
  },
  {
    id: "ai-ml-solutions",
    title: "AI & ML Solutions",
    icon: "BrainCircuit",
    shortDesc: "Transform raw company data into intelligent predictive insights, automated classification, and AI assistants.",
    fullDesc: "Harness artificial intelligence, machine learning data pipelines, and custom AI models to automate decision-making, predictive forecasting, and intelligent data routing.",
    features: [
      "Predictive Analytics & Revenue Forecasting",
      "Automated AI Document & Image Processing",
      "Custom Machine Learning Pipeline Development",
      "LLM & Intelligent Inquiry Automation"
    ],
    techStack: ["Python", "PyTorch", "FastAPI", "OpenCV", "Pandas"]
  },
  {
    id: "web-mobile-apps",
    title: "Web & Mobile Applications",
    icon: "Smartphone",
    shortDesc: "Fast, responsive web portals and mobile app solutions designed for seamless user experience.",
    fullDesc: "Delivering cross-platform mobile and web applications with sub-second page loads, offline synchronization, and intuitive UI/UX built to Apple and Swiggy standards.",
    features: [
      "Responsive React Web & Customer Portals",
      "Cross-Platform iOS & Android App Development",
      "Real-Time Data Sync & Push Notifications",
      "Sub-20ms Page Load & API Execution"
    ],
    techStack: ["React", "React Native", "FastAPI", "PostgreSQL", "Tailwind"]
  },
  {
    id: "business-automation",
    title: "Business Automation",
    icon: "Sparkles",
    shortDesc: "Eliminate repetitive manual tasks, billing bottlenecks, and data entry errors with automated workflows.",
    fullDesc: "Automate core business functions from inventory tracking and peg/gram calculations to automated invoice generation and customer notification triggers.",
    features: [
      "Automated Invoicing & GST Billing Engines",
      "Inventory Telemetry & Real-Time Stock Sync",
      "Automated Customer Notification Triggers",
      "Staff Attendance & Payroll Reconciliation"
    ],
    techStack: ["Python", "FastAPI", "Node.js", "Redis", "PostgreSQL"]
  },
  {
    id: "cloud-deployment",
    title: "Cloud & Deployment",
    icon: "Cloud",
    shortDesc: "Scalable cloud infrastructure hosting, Docker containerization, and zero-downtime CI/CD deployments.",
    fullDesc: "Deploy your software on high-availability cloud infrastructure with automated database backups, microservices containerization, and enterprise SSL/TLS security.",
    features: [
      "Docker Containerization & Cloud Deployment",
      "Automated CI/CD Release Pipelines",
      "PostgreSQL Database Clustering & Alembic Migrations",
      "99.99% SLA Uptime & Server Monitoring"
    ],
    techStack: ["Docker", "Render", "PostgreSQL", "FastAPI", "Alembic"]
  },
  {
    id: "enterprise-solutions",
    title: "Enterprise Solutions & API Integration",
    icon: "Layers",
    shortDesc: "Unify fragmented ERP, CRM, billing, and payment systems into a synchronized software ecosystem.",
    fullDesc: "Eliminate data silos with custom high-speed API middleware, legacy software synchronization, and secure webhook integrations.",
    features: [
      "Custom REST & GraphQL Middleware",
      "ERP, CRM & Point-of-Sale (POS) Integrations",
      "Role-Based Access Control (RBAC) & OAuth2 Security",
      "Third-Party Payment & Hardware SDK Sync"
    ],
    techStack: ["FastAPI", "Node.js", "OAuth2", "GraphQL", "PostgreSQL"]
  }
];

export const caseStudiesData = [
  {
    id: "bar-club-os",
    title: "Bar & Club Operating System (Bar OS™)",
    clientCategory: "Hospitality & Nightlife Enterprise",
    badge: "Featured System",
    problem: "Nightclubs and high-volume bars suffer from stock inventory leakage, unverified VIP gate entry, and manual end-of-day peg/bottle sales reconciliation.",
    solution: "Engineered an integrated venue OS featuring VIP photo entry verification, real-time beverage stock receipt tracking, and automated POS closing sales peg/bottle tallying.",
    technologies: ["React", "FastAPI", "Python", "OpenCV / Face AI", "PostgreSQL"],
    result: "99.8% inventory accuracy & zero unauthorized entry",
    highlights: [
      "VIP Photo Entry Verification",
      "Peg & Bottle Stock Telemetry",
      "Daily POS Sales Tallying",
      "Staff Attendance & Advance Log"
    ]
  },
  {
    id: "gold-jewellery-os",
    title: "Gold & Jewellery Management System (Gold OS™)",
    clientCategory: "Jewellery Retail & Bullion Enterprise",
    badge: "Production System",
    problem: "Jewellery retailers struggle with complex karat/gram weight calculations, manual daily gold market rate updates, GST bill audits, and customer old-gold exchange tracking.",
    solution: "Developed a specialized retail management platform with automated live bullion rate sync, RFID tag barcode scanning, instant karat purity calculation, and GST invoice generation.",
    technologies: ["React", "Node.js", "Python", "PostgreSQL", "Thermal Print SDK"],
    result: "75% faster checkout billing & 100% audit accuracy",
    highlights: [
      "Live Bullion Rate Sync",
      "Karat & Gram Auto-Calculation",
      "RFID Barcode Billing",
      "GST Compliant Invoice Engine"
    ]
  },
  {
    id: "ai-automation-hub",
    title: "Enterprise AI Business Automation Engine",
    clientCategory: "Cloud SaaS & Corporate Operations",
    badge: "AI Platform",
    problem: "Corporate operations teams waste hundreds of manual hours extracting data from physical documents, routing customer requests, and compiling multi-department reports.",
    solution: "Created a multi-tenant AI automation hub featuring automated document OCR extraction, intelligent inquiry routing, and predictive executive reporting dashboards.",
    technologies: ["Python", "PyTorch / LLM", "FastAPI", "Docker", "PostgreSQL"],
    result: "10x faster document processing & 40% labor reduction",
    highlights: [
      "Automated Document Data OCR",
      "Predictive Revenue Forecasting",
      "Automated Workflow Triggers",
      "Sub-20ms Analytics Endpoints"
    ]
  }
];

export const whyHarvidData = [
  {
    title: "Direct Founder Engineering",
    desc: "Speak and collaborate directly with hands-on software founders and architects. No middle managers or lost requirements.",
    icon: "UserCheck"
  },
  {
    title: "Real Production Systems",
    desc: "We don't just sell software concepts. We have real, battle-tested systems actively operating in hospitality, retail, and cloud SaaS.",
    icon: "ShieldCheck"
  },
  {
    title: "Sub-20ms Speed & Cloud Scalability",
    desc: "Built on high-performance FastAPI, React, and PostgreSQL. Engineered for sub-second page loads and zero-lag concurrency.",
    icon: "Zap"
  },
  {
    title: "100% Customized Automation",
    desc: "Software built around your exact business workflow rather than forcing your business to fit into rigid off-the-shelf templates.",
    icon: "Sliders"
  }
];
