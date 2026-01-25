export const COMPANY = {
  name: "Arsi Technology Group",
  legalName: "Arsi Technology Group LLC",
  tagline: "Your Complete Technology Partner for Business Success",
  description: "We help businesses solve any technology challenge — from custom software development to IT infrastructure, security compliance, and HIPAA certification.",
  location: "Minnesota",
  phone: "(XXX) XXX-XXXX",
  email: "contact@arsitech.com",
  founded: "2026",
  linkedin: "https://linkedin.com/company/arsitech",
};

export const SERVICES = [
  {
    id: "software-development",
    title: "Software Development",
    shortDescription: "Custom software solutions tailored to your business",
    description: "From web applications to internal tools, we build custom software that solves your unique business challenges and drives growth.",
    icon: "code",
    href: "/services#software-development",
    features: [
      "Custom Web Applications",
      "Business Process Automation",
      "API Development & Integration",
      "Database Design & Management",
      "Mobile-Responsive Solutions",
      "Ongoing Maintenance & Support",
    ],
    price: "Custom",
    priceNote: "per project",
  },
  {
    id: "it-consulting",
    title: "IT Consulting & Infrastructure",
    shortDescription: "Complete IT solutions for your business",
    description: "Microsoft 365 administration, cloud infrastructure, network setup, and ongoing IT support to keep your business running smoothly.",
    icon: "server",
    href: "/services#it-consulting",
    features: [
      "Microsoft 365 Administration",
      "Cloud Infrastructure Setup",
      "Network Design & Security",
      "Hardware & Software Procurement",
      "Help Desk & Technical Support",
      "Backup & Disaster Recovery",
    ],
    price: "Custom",
    priceNote: "pricing",
  },
  {
    id: "hipaa-compliance",
    title: "HIPAA Compliance",
    shortDescription: "Complete HIPAA certification in as little as 4 days",
    description: "Comprehensive HIPAA compliance solutions for healthcare businesses including risk assessment, policy documentation, security configuration, and audit-ready documentation.",
    icon: "shield",
    href: "/services#hipaa-compliance",
    features: [
      "Complete HIPAA Risk Assessment",
      "Security Gap Analysis",
      "Policy & Procedure Documentation",
      "Microsoft 365 Security Configuration",
      "Staff Training Materials",
      "Audit-Ready Documentation Binder",
    ],
    price: "$2,500",
    priceNote: "one-time",
    highlighted: true,
  },
  {
    id: "security-compliance",
    title: "Security & Compliance",
    shortDescription: "Protect your business and meet regulatory requirements",
    description: "Comprehensive security assessments, compliance consulting, and ongoing monitoring to protect your business and customer data.",
    icon: "lock",
    href: "/services#security-compliance",
    features: [
      "Security Assessments & Audits",
      "Compliance Consulting (SOC 2, PCI-DSS)",
      "Vulnerability Scanning",
      "Security Policy Development",
      "Incident Response Planning",
      "Employee Security Training",
    ],
    price: "Custom",
    priceNote: "pricing",
  },
];

export const HIPAA_PACKAGE_DETAILS = {
  title: "HIPAA Compliance Setup",
  price: "$2,500",
  priceNote: "one-time",
  timeline: "4 business days",
  includes: [
    "Complete HIPAA Risk Assessment",
    "Security Gap Analysis",
    "Written Policies & Procedures (customized for your practice)",
    "Microsoft 365 Security Configuration",
    "Data Loss Prevention (DLP) policies",
    "Conditional Access rules",
    "Multi-Factor Authentication setup",
    "Email encryption configuration",
    "Mobile Device Management (Intune)",
    "Business Associate Agreement templates",
    "Staff Security Awareness Training materials",
    "Incident Response Plan",
    "Complete Audit-Ready Documentation Binder",
    "30-day post-implementation support",
  ],
  targetAudience: [
    "Home healthcare agencies",
    "Small medical practices",
    "Mental health providers",
    "Dental offices",
    "Any healthcare business handling PHI",
  ],
};

export const SECURITY_OFFICER_DETAILS = {
  title: "Designated Security Officer",
  price: "$150",
  priceNote: "/month",
  includes: [
    "Act as your designated HIPAA Security Officer",
    "Quarterly security reviews & risk assessments",
    "Policy updates when regulations change",
    "Compliance monitoring & alerts",
    "Direct phone/email access for questions",
    "Incident response guidance",
    "Annual training refreshers",
    "Audit preparation support",
  ],
  whyNeeded: "HIPAA requires a designated Security Officer. For small practices, hiring a full-time compliance officer isn't practical. We fill that role for a fraction of the cost.",
};

export const PROCESS_STEPS = [
  {
    step: 1,
    title: "Discovery",
    description: "We learn about your business, understand your challenges, and identify your technology needs",
  },
  {
    step: 2,
    title: "Strategy",
    description: "We develop a tailored solution and roadmap that fits your budget and timeline",
  },
  {
    step: 3,
    title: "Implementation",
    description: "Our team builds, configures, and deploys your solution with minimal disruption",
  },
  {
    step: 4,
    title: "Support",
    description: "Ongoing maintenance, training, and support to ensure long-term success",
  },
];

export const PAIN_POINTS = [
  {
    title: "Technology Holding You Back",
    description: "Outdated systems, manual processes, and disconnected tools are slowing down your business growth.",
    icon: "slow",
  },
  {
    title: "No Dedicated IT Team",
    description: "You're focused on running your business, not managing servers, software, and security threats.",
    icon: "user",
  },
  {
    title: "Compliance Concerns",
    description: "HIPAA, security requirements, and data protection regulations are complex and constantly changing.",
    icon: "warning",
  },
];

export const STATS = [
  { value: "50+", label: "Projects Delivered" },
  { value: "100%", label: "Client Satisfaction" },
  { value: "24/7", label: "Support Available" },
  { value: "4", label: "Day HIPAA Compliance" },
];

export const TARGET_AUDIENCES = [
  { name: "Healthcare Practices", icon: "health", description: "HIPAA-compliant solutions for clinics, home healthcare, and medical offices" },
  { name: "Small Businesses", icon: "business", description: "Technology solutions that scale with your growing company" },
  { name: "Startups", icon: "rocket", description: "Build your tech foundation right from the start" },
  { name: "Professional Services", icon: "briefcase", description: "Streamline operations for law firms, accounting, and consultancies" },
];

export const FAQS = [
  {
    question: "What types of businesses do you work with?",
    answer: "We work with businesses of all sizes, from startups to established companies. Our clients include healthcare practices, professional services firms, retail businesses, and more. If you have a technology challenge, we can help.",
  },
  {
    question: "Do you offer HIPAA compliance services?",
    answer: "Yes! HIPAA compliance is one of our specialties. We offer comprehensive HIPAA compliance setup in as little as 4 business days, including risk assessment, policy documentation, security configuration, and audit-ready documentation for $2,500.",
  },
  {
    question: "Can you build custom software for my business?",
    answer: "Absolutely. We develop custom web applications, internal tools, automation solutions, and integrations tailored to your specific business needs. We'll work with you to understand your requirements and deliver a solution that drives real results.",
  },
  {
    question: "Do you provide ongoing IT support?",
    answer: "Yes, we offer flexible support options including help desk services, managed IT, and on-demand consulting. We can serve as your complete IT department or supplement your existing team.",
  },
  {
    question: "How do you handle security and compliance?",
    answer: "Security is built into everything we do. We follow industry best practices, implement proper access controls, encryption, and monitoring. For regulated industries, we provide compliance consulting for HIPAA, SOC 2, and other frameworks.",
  },
  {
    question: "What's your typical project timeline?",
    answer: "Timelines vary based on project scope. Simple IT setups can be completed in days, while custom software projects typically take weeks to months. We'll provide a clear timeline during our discovery process.",
  },
];

export const NAV_LINKS = [
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const FOOTER_LINKS = {
  quickLinks: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  services: [
    { label: "Software Development", href: "/services#software-development" },
    { label: "IT Consulting", href: "/services#it-consulting" },
    { label: "HIPAA Compliance", href: "/services#hipaa-compliance" },
    { label: "Security & Compliance", href: "/services#security-compliance" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
  ],
};

export const COMPARISON_TABLE = {
  headers: ["Feature", "Generic IT", "Arsi Technology"],
  rows: [
    ["Custom Development", "Limited", "Full-Stack"],
    ["HIPAA Expertise", "Basic", "Specialized"],
    ["Local Support", "Maybe", "Yes (Minnesota)"],
    ["Response Time", "Hours/Days", "Same Day"],
    ["Ongoing Support", "Extra Cost", "Included"],
    ["Security Focus", "Basic", "Enterprise-Grade"],
  ],
};

export const ABOUT_VALUES = [
  {
    title: "Partnership",
    description: "We're not just vendors — we're your long-term technology partner invested in your success.",
  },
  {
    title: "Simplicity",
    description: "We translate complex technology into clear, actionable solutions you can understand.",
  },
  {
    title: "Reliability",
    description: "When technology issues arise, we respond quickly and resolve them completely.",
  },
  {
    title: "Security",
    description: "Your data and systems are protected with enterprise-grade security practices.",
  },
];

export const BUSINESS_TYPES = [
  "Healthcare",
  "Professional Services",
  "Retail",
  "Startup",
  "Other",
];

export const SERVICE_INTERESTS = [
  "Software Development",
  "IT Consulting",
  "HIPAA Compliance",
  "Security & Compliance",
  "Not Sure",
];
