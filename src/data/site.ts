export const socials = {
  github: process.env.NEXT_PUBLIC_GITHUB_URL || "#",
  linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL || "#",
  email: process.env.NEXT_PUBLIC_EMAIL || "",
  cvUrl: process.env.NEXT_PUBLIC_CV_URL || "#",
};

export const profile = {
  name: "Xyrus Vincent L. Dominguez",
  nameLines: ["Xyrus Vincent", "L. Dominguez"],
  role: "Research Technical Assistant",
  positioning: "Applied AI & Intelligent Systems",
  coreStatement:
    "I build intelligent systems that integrate artificial intelligence, machine learning, computer vision, edge computing, hardware, software, and IT infrastructure to solve real-world problems.",
  shortVersion:
    "Building intelligent systems from research to real-world deployment.",
  heroDescription:
    "I work on intelligent systems that integrate AI, machine learning, computer vision, edge computing, hardware, and IT infrastructure to build meaningful real-world solutions.",
  themes: [
    "Artificial Intelligence",
    "Machine Learning",
    "Computer Vision",
    "Intelligent Systems",
    "Edge Computing",
    "Embedded Systems",
    "Hardware Integration",
    "IoT",
    "Software Engineering",
    "Server & IT Infrastructure",
    "Networking",
    "Cybersecurity",
    "Research & Development",
    "Agile Project Management",
  ],
  aboutParagraphs: [
    "I am a Research Technical Assistant focused on developing intelligent systems that connect artificial intelligence, machine learning, computer vision, edge computing, hardware, software, and infrastructure.",
    "My work spans the full path from research and experimentation to system development and deployment. I enjoy turning technical ideas into working prototypes and practical solutions, whether that means training a computer vision model, integrating AI into an application, deploying intelligence at the edge, connecting hardware and sensors, or supporting the server and IT infrastructure behind a system.",
    "My background in Computer Engineering gave me a foundation in hardware, embedded systems, software, networking, and systems thinking, while my ongoing graduate studies in Information Technology continue to expand my work toward intelligent systems, AI, and computing infrastructure.",
    "I am particularly interested in applied AI and computer vision, especially when intelligent models can be integrated into complete systems that solve meaningful real-world problems.",
  ],
};

export const navCards = [
  {
    key: "works",
    title: "Works",
    description:
      "Explore featured projects spanning AI, computer vision, edge systems, and software applications.",
    cta: "View works",
    href: "/works",
    icon: "briefcase",
  },
  {
    key: "skills",
    title: "Skills",
    description:
      "A combination of research, development, engineering, and systems skills across the intelligent systems stack.",
    cta: "Explore skills",
    href: "/skills",
    icon: "code",
  },
  {
    key: "about",
    title: "About Me",
    description:
      "Learn more about my background, research interests, experience, and what drives my work.",
    cta: "About me",
    href: "/about",
    icon: "user",
  },
  {
    key: "contact",
    title: "Contact",
    description:
      "Let's connect and collaborate on ideas that create impact through technology.",
    cta: "Get in touch",
    href: "/contact",
    icon: "send",
  },
] as const;

export type Project = {
  slug: string;
  title: string;
  category: string;
  description: string;
  image: string;
  bullets: string[];
  recognition?: string[];
  tags: string[];
  isPrototype?: boolean;
  caseStudy: {
    problem?: string;
    motivation?: string;
    objective?: string;
    architecture?: string;
    methodology?: string;
    technologies: string[];
    implementation?: string;
    results?: string;
    challenges?: string;
    contributions?: string;
    lessonsLearned?: string;
    futureImprovements?: string;
  };
};

const placeholder = (label: string) =>
  `Add ${label} details here when available.`;

export const projects: Project[] = [
  {
    slug: "facial-paralysis-screening",
    title: "AI-Based Facial Paralysis Screening System",
    category: "AI / Computer Vision / Intelligent Systems / Edge AI",
    description:
      "A medical screening concept that applies computer vision and AI to analyze facial movement and identify possible signs of facial paralysis.",
    image: "/images/project-facial-palsy.svg",
    isPrototype: true,
    bullets: [
      "Preliminary patient information collection",
      "Facial analysis using computer vision/AI",
      "On-device processing as the default approach",
      "Appropriate handling of sensitive information",
      "Transmission of relevant information to a doctor when probable signs are detected",
      "Clear user-facing disclaimer",
      "Consent-oriented workflow",
      "Human/clinical decision-making remains important",
    ],
    tags: ["AI", "Computer Vision", "Machine Learning", "Edge AI", "Python"],
    caseStudy: {
      problem: placeholder("the specific problem this project addresses"),
      motivation: placeholder("motivation"),
      objective: placeholder("objective"),
      architecture: placeholder("system architecture"),
      methodology: placeholder("methodology"),
      technologies: ["AI", "Computer Vision", "Machine Learning", "Edge AI", "Python"],
      implementation: placeholder("implementation notes"),
      results: placeholder("results"),
      challenges: placeholder("challenges"),
      contributions: placeholder("contributions"),
      lessonsLearned: placeholder("lessons learned"),
      futureImprovements: placeholder("future improvements"),
    },
  },
  {
    slug: "subay",
    title: "SUBAY: Multi-Camera Detection System for Customer Tracking",
    category: "Computer Vision / Multi-Object Tracking / Research",
    description:
      "A multi-camera detection and tracking system developed for customer/foot-traffic analysis in retail environments.",
    image: "/images/project-subay.svg",
    bullets: [
      "YOLOv10 for person detection",
      "DeepSORT for tracking",
      "OSNet for re-identification",
      "Multi-camera synchronization",
      "Multi-view association logic",
      "Occlusion handling",
      "Firebase Realtime Database for continuous data logging and analytics",
      "Web-based interface for live foot-traffic monitoring",
      "User access management",
      "Real-time zone activity visualization",
    ],
    recognition: [
      "Best Thesis Award",
      "Prototype Award",
      "University of Science and Technology of Southern Philippines, 2025",
    ],
    tags: [
      "YOLOv10",
      "DeepSORT",
      "OSNet",
      "OpenCV",
      "Computer Vision",
      "Multi-Camera",
      "Re-ID",
      "Firebase",
    ],
    caseStudy: {
      problem: placeholder("the specific problem this project addresses"),
      motivation: placeholder("motivation"),
      objective: placeholder("objective"),
      architecture: placeholder("system architecture"),
      methodology:
        "Multi-camera person detection with YOLOv10, tracking with DeepSORT, and cross-camera re-identification with OSNet, combined with multi-view association logic and occlusion handling.",
      technologies: [
        "YOLOv10",
        "DeepSORT",
        "OSNet",
        "OpenCV",
        "Firebase Realtime Database",
      ],
      implementation: placeholder("implementation notes"),
      results: placeholder("results"),
      challenges: placeholder("challenges"),
      contributions: placeholder("contributions"),
      lessonsLearned: placeholder("lessons learned"),
      futureImprovements: placeholder("future improvements"),
    },
  },
  {
    slug: "crop-harvest-prediction",
    title: "Crop Harvest Prediction System",
    category: "Machine Learning / Forecasting / Data Analysis",
    description:
      "A machine-learning research project using historical crop harvest data to predict future production and compare model performance.",
    image: "/images/project-crop.svg",
    bullets: [
      "Historical agricultural data preprocessing",
      "Reshaping and cleaning tabular/time-series data",
      "Random Forest regression",
      "SVM/SVR",
      "ARIMA",
      "Model comparison",
      "MAE",
      "RMSE",
      "R²",
      "Prediction evaluation",
      "2023 prediction using historical data from 2000-2022",
      "Comparison between predicted and previous-year harvest values",
      "Crop-by-crop visualization",
    ],
    tags: [
      "Python",
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "ARIMA",
      "Random Forest",
      "SVR",
      "Machine Learning",
    ],
    caseStudy: {
      problem: placeholder("the specific problem this project addresses"),
      motivation: placeholder("motivation"),
      objective:
        "Predict 2023 crop harvest production using historical data from 2000-2022 and compare model performance across approaches.",
      architecture: placeholder("system architecture"),
      methodology:
        "Preprocessed historical agricultural time-series data, then trained and compared Random Forest regression, SVM/SVR, and ARIMA models using MAE, RMSE, and R² for evaluation.",
      technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "ARIMA"],
      implementation: placeholder("implementation notes"),
      results: placeholder("results"),
      challenges: placeholder("challenges"),
      contributions: placeholder("contributions"),
      lessonsLearned: placeholder("lessons learned"),
      futureImprovements: placeholder("future improvements"),
    },
  },
  {
    slug: "precision-irrigation",
    title: "Precision Irrigation System",
    category: "IoT / Embedded Systems / Hardware",
    description:
      "A sensor-driven irrigation system designed around soil moisture monitoring and automated irrigation control, using lettuce as the model crop.",
    image: "/images/project-irrigation.svg",
    bullets: [
      "Arduino",
      "Soil moisture sensors",
      "Sensor data processing",
      "Moisture percentage conversion",
      "Automated irrigation control",
      "LCD/I2C display",
      "Servo control",
      "Hardware integration",
      "Embedded decision logic",
    ],
    tags: ["Arduino", "IoT", "Sensors", "Embedded Systems", "Hardware"],
    caseStudy: {
      problem: placeholder("the specific problem this project addresses"),
      motivation: placeholder("motivation"),
      objective: placeholder("objective"),
      architecture: placeholder("system architecture"),
      methodology:
        "Arduino-based soil moisture sensing converted to moisture percentage, driving automated irrigation control with LCD/I2C status display and servo-actuated control, using lettuce as the model crop.",
      technologies: ["Arduino", "Soil Moisture Sensors", "LCD/I2C", "Servo"],
      implementation: placeholder("implementation notes"),
      results: placeholder("results"),
      challenges: placeholder("challenges"),
      contributions: placeholder("contributions"),
      lessonsLearned: placeholder("lessons learned"),
      futureImprovements: placeholder("future improvements"),
    },
  },
  {
    slug: "flood-monitoring",
    title: "Flood Monitoring System",
    category: "IoT / Full Stack / Real-Time Monitoring",
    description:
      "A real-time flood monitoring system designed to classify flood levels and provide alerts.",
    image: "/images/project-flood.svg",
    bullets: [
      "ESP32",
      "Distance sensors",
      "GSM module",
      "Flood-level classification",
      "SMS alerts",
      "Web dashboard",
      "Live water-level visualization",
      "Historical data analytics",
    ],
    tags: ["ESP32", "IoT", "GSM", "Sensors", "Web Dashboard", "Real-Time Systems"],
    caseStudy: {
      problem: placeholder("the specific problem this project addresses"),
      motivation: placeholder("motivation"),
      objective: placeholder("objective"),
      architecture: placeholder("system architecture"),
      methodology:
        "ESP32 and distance sensors classify flood levels in real time, triggering SMS alerts via a GSM module and streaming readings to a web dashboard for live and historical visualization.",
      technologies: ["ESP32", "GSM Module", "Distance Sensors", "Web Dashboard"],
      implementation: placeholder("implementation notes"),
      results: placeholder("results"),
      challenges: placeholder("challenges"),
      contributions: placeholder("contributions"),
      lessonsLearned: placeholder("lessons learned"),
      futureImprovements: placeholder("future improvements"),
    },
  },
  {
    slug: "roomguardian-nexus",
    title: "RoomGuardian Nexus",
    category: "Full Stack / Facility Management",
    description: "A modern room booking and facility management web application.",
    image: "/images/project-roomguardian.svg",
    bullets: [
      "React",
      "TypeScript",
      "Supabase",
      "Authentication",
      "Database services",
      "Real-time room reservations",
      "Schedule management",
      "Facility usage monitoring",
      "User access management",
      "Clean and intuitive UI",
    ],
    tags: ["React", "TypeScript", "Supabase", "Web Development", "Full Stack"],
    caseStudy: {
      problem: placeholder("the specific problem this project addresses"),
      motivation: placeholder("motivation"),
      objective: placeholder("objective"),
      architecture: placeholder("system architecture"),
      methodology:
        "React and TypeScript frontend backed by Supabase for authentication and database services, supporting real-time room reservations, schedule management, and facility usage monitoring.",
      technologies: ["React", "TypeScript", "Supabase"],
      implementation: placeholder("implementation notes"),
      results: placeholder("results"),
      challenges: placeholder("challenges"),
      contributions: placeholder("contributions"),
      lessonsLearned: placeholder("lessons learned"),
      futureImprovements: placeholder("future improvements"),
    },
  },
  {
    slug: "management-monitoring-systems",
    title: "Management & Monitoring Systems",
    category: "Software Engineering / Full Stack",
    description:
      "Practical role-based dashboards and management systems covering inventory, user/account management, reporting, and REST/API-driven interfaces.",
    image: "/images/project-software-systems.svg",
    isPrototype: true,
    bullets: [
      "Role-based dashboards",
      "Inventory management",
      "User/account management",
      "Reports and data tables",
      "REST/API integration",
      "React interfaces",
      "Laravel backend/API work",
      "MySQL",
      "Authentication",
      "Responsive interfaces",
    ],
    tags: ["React", "Laravel", "MySQL", "Material UI", "Tailwind CSS"],
    caseStudy: {
      problem: placeholder("the specific problem this project addresses"),
      motivation: placeholder("motivation"),
      objective: placeholder("objective"),
      architecture: placeholder("system architecture"),
      methodology: placeholder("methodology"),
      technologies: [
        "React",
        "JavaScript",
        "Vite",
        "Material UI",
        "MUI DataGrid",
        "React Router",
        "Formik",
        "Yup",
        "Axios",
        "Laravel",
        "PHP",
        "MySQL",
        "Tailwind CSS",
      ],
      implementation: placeholder("implementation notes"),
      results: placeholder("results"),
      challenges: placeholder("challenges"),
      contributions: placeholder("contributions"),
      lessonsLearned: placeholder("lessons learned"),
      futureImprovements: placeholder("future improvements"),
    },
  },
];

export const skillGroups = [
  {
    title: "AI & Machine Learning",
    skills: [
      "Python",
      "TensorFlow",
      "PyTorch",
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "Statsmodels",
      "Random Forest",
      "SVM / SVR",
      "ARIMA",
      "Neural Networks",
      "Machine Learning",
      "AI Integration",
      "Predictive Modeling",
    ],
  },
  {
    title: "Computer Vision",
    skills: [
      "OpenCV",
      "Object Detection",
      "Multi-Object Detection",
      "Multi-Object Tracking",
      "Facial Analysis",
      "Multi-Camera Systems",
      "Person Re-identification",
      "YOLOv10",
      "DeepSORT",
      "OSNet",
    ],
  },
  {
    title: "Edge Computing & Embedded Systems",
    skills: [
      "Edge AI",
      "On-device processing",
      "Arduino",
      "ESP32",
      "Raspberry Pi",
      "Sensors",
      "Embedded systems",
      "IoT",
      "Hardware/software integration",
      "Real-time monitoring",
    ],
  },
  {
    title: "Software Engineering — Frontend",
    skills: [
      "React",
      "JavaScript",
      "TypeScript",
      "JSX",
      "HTML",
      "CSS",
      "Material UI",
      "Tailwind CSS",
      "React Router",
    ],
  },
  {
    title: "Software Engineering — Backend",
    skills: ["Laravel", "PHP", "REST APIs", "Axios", "Supabase", "Firebase"],
  },
  {
    title: "Data / Database",
    skills: [
      "MySQL",
      "Supabase Database",
      "Firebase Realtime Database",
      "Pandas",
      "Structured/tabular data",
    ],
  },
  {
    title: "Infrastructure & IT",
    skills: [
      "Server administration",
      "IT infrastructure",
      "Network infrastructure",
      "Hardware diagnostics",
      "System maintenance",
      "System monitoring",
      "Deployment",
      "Ethernet",
      "Wi-Fi",
      "IP addressing",
      "VLAN configuration",
      "Remote access",
    ],
  },
  {
    title: "Networking & Cybersecurity",
    skills: [
      "Networking Essentials",
      "CCNA concepts",
      "Network Defense",
      "Industrial Cybersecurity",
      "Cybersecurity fundamentals",
      "Threats and attacks",
      "Enterprise networking",
      "Security and automation",
    ],
  },
  {
    title: "Development Tools",
    skills: ["VS Code", "Git", "GitHub", "Google Colab", "Jupyter Notebook"],
  },
  {
    title: "Project Management",
    skills: ["Agile Project Management", "Google Project Management"],
  },
];

export const experience = [
  {
    role: "Research Technical Assistant",
    period: "Current",
    org: undefined,
    location: undefined,
    focusAreas: [
      "Intelligent systems",
      "AI integration",
      "Machine learning",
      "Computer vision",
      "Edge computing",
      "Hardware integration",
      "Server systems",
      "IT infrastructure",
      "Research and prototyping",
      "System development and deployment",
    ],
  },
  {
    role: "Technical Support Analyst",
    period: "November 2024 - May 2025",
    org: "Municipal Accountants' Office",
    location: "Malitbog, Bukidnon",
    responsibilities: [
      "Supported network infrastructure setup and troubleshooting to maintain stable and efficient office IT operations.",
      "Developed custom software tools and automated workflows to streamline repetitive tasks and improve team productivity.",
      "Provided technical support, system maintenance, and hardware diagnostics to support reliable daily operations and events.",
    ],
  },
  {
    role: "IT Support Officer",
    period: "July 2022 - February 2023",
    org: "Sangguniang Bayan Office",
    location: "Malitbog, Bukidnon",
    responsibilities: [
      "Assisted with hardware and software setup, maintenance, and troubleshooting.",
      "Supported network infrastructure including Ethernet and Wi-Fi connectivity.",
      "Worked with IP addressing, VLAN configurations, and remote access.",
      "Assisted with technical-system maintenance and optimization.",
      "Supported proactive monitoring, system updates, and cross-functional collaboration.",
    ],
  },
];

export const education = [
  {
    degree: "Master of Information Technology",
    period: "Ongoing",
    school: "University of Science and Technology of Southern Philippines",
  },
  {
    degree: "Bachelor of Science in Computer Engineering",
    period: "2021 - 2025",
    school: "University of Science and Technology of Southern Philippines",
  },
];

export const awards = [
  {
    title: "Best Thesis Award",
    description:
      "SUBAY: A Multi-Camera Detection System for Customer Tracking Using YOLOv10, DeepSORT, and OSNet for Re-Identification in Retail Environments",
    org: "University of Science and Technology of Southern Philippines, 2025",
  },
  {
    title: "Prototype Award",
    description:
      "SUBAY: A Multi-Camera Detection System for Customer Tracking Using YOLOv10, DeepSORT, and OSNet for Re-Identification in Retail Environments",
    org: "University of Science and Technology of Southern Philippines, 2025",
  },
];

export const certifications = [
  {
    title: "Microsoft Artificial Intelligence Course (Azure AI)",
    org: "TESDA, 2025",
    status: "completed" as const,
  },
  {
    title: "Project Management - Google",
    org: "Department of Trade and Industry Philippines, 2024",
    status: "completed" as const,
  },
  {
    title: "Networking Essentials",
    org: "Cisco Networking Academy, 2024",
    status: "completed" as const,
  },
  {
    title: "CCNA: Introduction to Networks",
    org: "Cisco Networking Academy, 2024",
    status: "completed" as const,
  },
  {
    title: "CCNA: Switching, Routing, and Wireless Essentials",
    org: "Cisco Networking Academy, 2024",
    status: "completed" as const,
  },
  {
    title: "Introduction to Cybersecurity",
    org: "Cisco Networking Academy, 2024",
    status: "completed" as const,
  },
];

export const recentLearning = {
  completed: [
    "Network Defense",
    "Industrial Cybersecurity Essentials",
    "Understanding Threats and Attacks",
    "Introduction to Cybersecurity",
    "The Cybersecurity Landscape",
    "CCNAv7: Enterprise Networking, Security, and Automation",
    "CCNAv7: Switching, Routing, and Wireless Essentials",
    "Networking Essentials",
  ],
  inProgress: [
    {
      title: "Ethical Hacker",
      note: "Enrolled August 2026, course end date December 2026",
    },
  ],
};

export const researchInterests = {
  items: [
    "Applied Artificial Intelligence",
    "Computer Vision",
    "Multi-Object Detection",
    "Multi-Object Tracking",
    "Machine Learning",
    "Edge AI",
    "Intelligent Systems",
    "Embedded AI",
    "AI-Hardware Integration",
    "Real-Time Systems",
    "Computer Vision for Real-World Applications",
    "Cybersecurity for Intelligent/Industrial Systems",
  ],
  statement:
    "My research interests center on building intelligent systems that combine AI with real-world sensing, computation, hardware, and infrastructure.",
};

export const siteMeta = {
  title: "Xyrus Vincent L. Dominguez | Applied AI & Intelligent Systems",
  description:
    "Research Technical Assistant working across artificial intelligence, machine learning, computer vision, edge computing, hardware, software, and IT infrastructure.",
  keywords: [
    "Artificial Intelligence",
    "Machine Learning",
    "Computer Vision",
    "Intelligent Systems",
    "Edge Computing",
    "Edge AI",
    "Embedded Systems",
    "IoT",
    "Software Engineering",
    "IT Infrastructure",
    "Research",
  ],
};
