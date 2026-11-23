export interface Project {
  id: string;
  num: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  highlights: string[];
  tags: string[];
  metrics?: { label: string; value: string }[];
  featuredTech: string[];
  gradient: string;
  role: string;
  clientType: string;
  image: string;
  liveUrl: string;
}

export interface SkillItem {
  name: string;
  level: "Expert" | "Advanced" | "Proficient";
  proficiency: number;
  tag: string;
  category: string;
}

export interface SkillCategory {
  id: string;
  name: string;
  iconName: string;
  skills: SkillItem[];
}

export interface ExperienceItem {
  period: string;
  isCurrent?: boolean;
  role: string;
  company: string;
  location: string;
  type: string;
  bullets: string[];
  technologies: string[];
}

export interface EducationItem {
  degree: string;
  period: string;
  institution: string;
  location: string;
  score: string;
  scoreNumeric: number;
  highlight: string;
}

export const PERSONAL_INFO = {
  name: "Revathi Baskar",
  role: "Full Stack Developer",
  shortRole: "React.js · Next.js · Node.js",
  location: "Kanchipuram, Chennai, India",
  currentCompany: "Sathuram Software Services OPC Pvt Ltd",
  currentRole: "Full Stack Developer",
  since: "Mar 2025 – Present",
  headline: "Crafting robust full-stack web products from pixel to database.",
  bio: "Two years of specialized experience building high-performance, responsive and accessible web applications using React.js and Next.js, powered by scalable Node.js, Express, and PostgreSQL backends. Proven delivery in e-commerce, CRM systems, real-time hardware billing, and subscription platforms.",
  email: "revathibaskar2003@gmail.com",
  phone: "+91 9361294914",
  phoneDisplay: "+91 93612 94914",
  linkedin: "https://www.linkedin.com/in/revathibaskar2003",
  github: "https://github.com/revathibaskar",
  stats: [
    { label: "Years Experience", value: "2+" },
    { label: "Shipped Projects", value: "4+" },
    { label: "Production Uptime", value: "99.9%" },
    { label: "Core Technologies", value: "15+" },
  ],
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "frontend",
    name: "Frontend Core",
    iconName: "Layout",
    skills: [
      { name: "Next.js", level: "Expert", proficiency: 94, tag: "Full-Stack Framework", category: "Frontend" },
      { name: "React.js", level: "Expert", proficiency: 95, tag: "UI Architecture", category: "Frontend" },
      { name: "TypeScript", level: "Advanced", proficiency: 90, tag: "Type-Safe Development", category: "Frontend" },
      { name: "Tailwind CSS", level: "Expert", proficiency: 96, tag: "Modern Styling & Systems", category: "Frontend" },
    ],
  },
  {
    id: "backend",
    name: "Backend & APIs",
    iconName: "Server",
    skills: [
      { name: "Node.js", level: "Advanced", proficiency: 92, tag: "Runtime & Microservices", category: "Backend" },
      { name: "Express.js", level: "Advanced", proficiency: 92, tag: "API Framework", category: "Backend" },
      { name: "RESTful API Design", level: "Expert", proficiency: 94, tag: "Architecture & Security", category: "Backend" },
      { name: "Webhooks Integration", level: "Advanced", proficiency: 90, tag: "Real-Time Event Processing", category: "Backend" },
    ],
  },
  {
    id: "database",
    name: "Database & Cloud",
    iconName: "Database",
    skills: [
      { name: "PostgreSQL", level: "Advanced", proficiency: 90, tag: "Relational Modeling & Indexes", category: "Database" },
      { name: "SQL", level: "Advanced", proficiency: 88, tag: "Query Optimization", category: "Database" },
      { name: "Git & GitHub", level: "Advanced", proficiency: 92, tag: "Version Control & CI/CD", category: "Tools" },
    ],
  },
  {
    id: "state",
    name: "State & Architecture",
    iconName: "Cpu",
    skills: [
      { name: "Redux Toolkit & Zustand", level: "Advanced", proficiency: 92, tag: "Global & Server State", category: "State" },
      { name: "Performance & Core Web Vitals", level: "Advanced", proficiency: 88, tag: "Speed Optimization", category: "Architecture" },
    ],
  },
  {
    id: "auth-payments",
    name: "Auth & Payments",
    iconName: "ShieldCheck",
    skills: [
      { name: "Stripe & Razorpay", level: "Expert", proficiency: 94, tag: "Checkout & Subscriptions", category: "Payments" },
      { name: "OAuth & JWT Security", level: "Advanced", proficiency: 91, tag: "Google / Apple / Auth0", category: "Auth" },
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    id: "deck-of-doodles",
    num: "01",
    title: "Deck of Doodles",
    category: "E-Commerce Platform",
    tagline: "Full-stack online storefront with an administrative catalog and checkout engine.",
    clientType: "US-based International Client",
    role: "Lead Full-Stack Developer",
    image: "/deck-of-doodles.png",
    liveUrl: "https://deckofdoodles.com/",
    description:
      "A complete e-commerce solution architected with Next.js and PostgreSQL. Features a robust back-office admin panel for store owners to manage product catalogs, inventory, and orders, matched with a consumer storefront optimized for speed, dynamic cart state, and frictionless Stripe checkout.",
    highlights: [
      "Custom administrative dashboard for instant product uploads, image handling, and inventory control.",
      "High-conversion storefront with client-side cart persistence, instant search, and real-time stock sync.",
      "End-to-end Stripe payment intent integration with secure webhook verification and order receipts.",
    ],
    tags: ["Next.js", "Node.js", "PostgreSQL", "Stripe", "Tailwind CSS", "Zustand"],
    featuredTech: ["Next.js 14+", "Stripe Elements", "PostgreSQL", "Express REST API"],
    gradient: "from-amber-500/20 via-orange-500/10 to-transparent",
    metrics: [
      { label: "Target Market", value: "US Retail" },
      { label: "Payment Security", value: "Stripe Verified" },
      { label: "Cart Speed", value: "< 100ms" },
    ],
  },
  {
    id: "healer-longevity",
    num: "02",
    title: "Healer & Longevity Platform",
    category: "Subscriptions & Health Tech",
    tagline: "High-concurrency backend for recurring subscriptions, in-app purchases, and lifecycle notifications.",
    clientType: "Wellness & Longevity Tech",
    role: "Backend Architect & API Developer",
    image: "/healer.png",
    liveUrl: "https://play.google.com/store/apps/details?id=com.astralbeat.healer&hl=en_IN",
    description:
      "The mission-critical Node.js and Express backend infrastructure powering user authentication, multi-tier recurring subscriptions, and transactional touchpoints. Handles asynchronous webhooks for Razorpay and native in-app purchases to guarantee flawless billing synchronization.",
    highlights: [
      "Secure RESTful APIs safeguarding authentication, token refresh, and user profile subscriptions.",
      "End-to-end Razorpay recurring billing engine and in-app purchase webhook listeners.",
      "Automated transactional and retention email delivery pipelines via Brevo with real-time tracking.",
    ],
    tags: ["Node.js", "Express.js", "PostgreSQL", "Razorpay", "Brevo", "Webhooks"],
    featuredTech: ["Node.js", "Express", "Razorpay Subscriptions", "Brevo API"],
    gradient: "from-emerald-500/20 via-teal-500/10 to-transparent",
    metrics: [
      { label: "Payment Flows", value: "Recurring + UPI" },
      { label: "Email Reliability", value: "99.8%" },
      { label: "Sync Engine", value: "Webhook Driven" },
    ],
  },
  {
    id: "sayto-estates",
    num: "03",
    title: "Sayto Estates CRM",
    category: "Real Estate CRM & Lead Management",
    tagline: "Enterprise real estate CRM platform with lead assignment, property pipelines, and deal tracking.",
    clientType: "Sayto Estates (Real Estate)",
    role: "Full-Stack Developer",
    image: "/sayto-crm.png",
    liveUrl: "https://crm.saytoestates.com/login",
    description:
      "A comprehensive real estate CRM platform engineered for property brokers, managers, and agents. Streamlines client onboarding, lead qualification pipelines, agent task management, and property sales transactions with role-based access control and high-speed search.",
    highlights: [
      "Role-based agent and admin dashboard managing thousands of real estate clients, property listings, and site visits.",
      "Dynamic lead progression tracking with automated status updates, client follow-ups, and negotiation history.",
      "High-speed property catalog management with image galleries, filtering, and instant broker assignment.",
    ],
    tags: ["Next.js", "React.js", "Node.js", "PostgreSQL", "Tailwind CSS", "REST APIs"],
    featuredTech: ["Next.js", "Node.js", "PostgreSQL", "Role-Based Auth"],
    gradient: "from-blue-500/20 via-indigo-500/10 to-transparent",
    metrics: [
      { label: "CRM System", value: "Sayto Estates" },
      { label: "Lead Pipeline", value: "Real-time" },
      { label: "Access Security", value: "Role-Based" },
    ],
  },
  {
    id: "raj-vegetables",
    num: "04",
    title: "Raj Vegetables POS & Hardware Billing",
    category: "Retail Tech & IoT Integration",
    tagline: "Point-of-Sale billing platform with real-time weighing machine hardware interface.",
    clientType: "Raj Vegetables (Retail Chain)",
    role: "Full-Stack System Developer",
    image: "/kadaram.png",
    liveUrl: "https://rajvegetables.com/",
    description:
      "A rapid-fire desktop/web retail POS billing engine connected directly to electronic weighing scales via serial COM port. Handles high-volume daily grocery checkout at Raj Vegetables with live scale reads, dynamic SKU pricing rules, and automated thermal invoice generation.",
    highlights: [
      "Direct COM port serial communication reading live weighing scales with zero checkout lag.",
      "Dynamic pricing algorithm calculating variable weight produce prices with instant barcode generation.",
      "High-speed thermal invoice generation and daily sales reconciliation powered by PostgreSQL.",
    ],
    tags: ["Next.js", "Node.js", "PostgreSQL", "COM Port Serial", "Hardware IoT"],
    featuredTech: ["SerialPort API", "Node.js", "PostgreSQL", "Thermal Print Engine"],
    gradient: "from-emerald-500/20 via-teal-500/10 to-transparent",
    metrics: [
      { label: "Hardware Sync", value: "Real-Time COM" },
      { label: "Weight Accuracy", value: "±0.001 kg" },
      { label: "Live Platform", value: "rajvegetables.com" },
    ],
  },
];

export const EXPERIENCE_ITEMS: ExperienceItem[] = [
  {
    period: "Mar 2025 – Present",
    isCurrent: true,
    role: "Full Stack Developer",
    company: "Sathuram Software Services OPC Pvt Ltd",
    location: "Chennai, India",
    type: "Full-time",
    bullets: [
      "Architect and engineer high-performance Node.js and Express RESTful API backends paired with modern React.js and Next.js interfaces.",
      "Manage client-side and server-side state utilizing Redux Toolkit and Zustand across multi-module production applications.",
      "Integrate resilient Google & Apple OAuth sign-in authentication alongside transactional notification pipelines via Brevo.",
      "Implement and maintain complex Razorpay payment gateways and subscription billing with webhook handlers.",
      "Optimize frontend Core Web Vitals, maintain PostgreSQL relational schemas, and administer Linux deployment environments.",
    ],
    technologies: ["React.js", "Next.js", "Node.js", "Express", "PostgreSQL", "Redux Toolkit", "Zustand", "Razorpay", "OAuth"],
  },
  {
    period: "Sep 2024 – Feb 2025",
    role: "React Developer",
    company: "DD Infotech Pvt Ltd",
    location: "Chennai, India",
    type: "Full-time",
    bullets: [
      "Constructed modular, reusable UI component systems with React.js, Tailwind CSS, HTML5, and CSS3.",
      "Delivered pixel-perfect, accessible, and cross-browser compatible interfaces for client-facing web applications.",
      "Integrated client-side state management with asynchronous REST endpoints, ensuring sub-second response times.",
    ],
    technologies: ["React.js", "JavaScript (ES6+)", "Tailwind CSS", "REST APIs", "Git"],
  },
  {
    period: "Jul 2024 – Sep 2024",
    role: "Front-End Development Intern",
    company: "DNYX Business Solutions",
    location: "Chennai, India",
    type: "Internship",
    bullets: [
      "Completed an intensive front-end engineering program focused on modern JavaScript, HTML/CSS standards, and React.js architecture.",
      "Constructed interactive web features and honed debugging, cross-device responsiveness, and testing methodologies.",
    ],
    technologies: ["React.js", "HTML5", "CSS3", "JavaScript"],
  },
];

export const EDUCATION_ITEMS: EducationItem[] = [
  {
    degree: "Master of Computer Applications (MCA)",
    period: "2023 – 2025",
    institution: "University of Madras (Distance Education)",
    location: "Chennai, India",
    score: "73.1%",
    scoreNumeric: 73.1,
    highlight: "Advanced Software Architecture, Cloud Computing & Distributed Database Systems",
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    period: "2020 – 2023",
    institution: "Sri Sankara Arts and Science College",
    location: "Kanchipuram, India",
    score: "81.0%",
    scoreNumeric: 81.0,
    highlight: "Graduated with Distinction in Core Computer Science, Data Structures & Web Technologies",
  },
];

