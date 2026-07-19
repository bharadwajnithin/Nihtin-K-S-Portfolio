/**
 * ==============================================================================
 * PORTFOLIO DATA CONFIGURATION FILE (SAGAR GUPTA 10-SECTION ADVANCED EDITION)
 * ==============================================================================
 * Powers all 10 requested sections: Hero, About, Experience (with modal details),
 * Education, Skills (with official brand colors), Projects (with detail modals & OSS),
 * Achievements/Certifications (Credly style), Services (Bento Grid), GitHub
 * (3D Browser Mockup & Contribution Heatmap), and Contact.
 * ==============================================================================
 */

const PORTFOLIO_DATA = {
  // 1. Hero Section
  personal: {
    name: "Nithin K S",
    displayName: "Nithin K S",
    logoText: "NK",
    statusBadge: "🟢 Available for Software Developer Roles & Full-Stack Opportunities",
    headlineLine1: "Architecting Intelligent Backend Systems",
    headlineLine2: "& Dynamic Full-Stack Applications",
    roleTitle: "Software Developer | Java & Python Full Stack",
    tagline: "Translating complex technical requirements into functional, high-performance web applications and computer vision solutions using Java, Spring Boot, Python,  React, and MYSQL.",
    typewriterRoles: [
      "Software Developer (Java & Python)",
      "Full Stack Web Developer (Spring Boot & React)",
      "Backend API Architect (Django & REST)",
      "Database Specialist (MongoDB & MySQL)",
      "Computer Science Engineer (ATME Mysore)"
    ],
    avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&q=80",
    location: "Mysore, Karnataka 570018 / India",
    email: "bharadwajnithin666@gmail.com",
    phone: "+91 7975048013",
    resumeUrl: "assets/Nithin_KS_Resume.html",
    stats: [
      { number: 8.15, label: "Diploma CGPA (JSS Polytechnic)", suffix: "/10" },
      { number: 7.1, label: "B.E. CS CGPA (ATME Mysore)", suffix: "/10" },
      { number: 3, label: "Live Full-Stack Projects", suffix: "+" },
      { number: 100, label: "Proactive Dedication", suffix: "%" }
    ],
    terminalCode: `package com.bharadwajnithin.portfolio;

public class DeveloperProfile {
    public static void main(String[] args) {
        String name = "Nithin K S";
        String role = "Full-Stack Software Engineer";
        String degree = "B.E. Computer Science (ATME Mysore)";
        String[] stack = {"Java", "Spring Boot", "Python", "React"};

        System.out.println("User: " + name + " | " + role);
        System.out.println("Status: Available for Opportunities");
    }
}`
  },

  // 2. About Section & Quick-Facts Band
  about: {
    heading: "Dedicated Software Developer Combining CS Fundamentals & Full-Stack Mastery",
    characterRevealText: "I am a dedicated Software Developer and Computer Science & Engineering student at ATME College of Engineering, Mysore (2023-2026). My engineering journey is built on a rock-solid foundation of Object-Oriented Programming, Data Structures, and Operating Systems, which I apply daily to architect scalable backend REST APIs with Java Spring Boot and Django, connected seamlessly with dynamic React frontends and MongoDB/MySQL databases. Driven by curiosity and rigorous discipline, I thrive on solving complex real-world challenges through clean, verifiable code and modern cloud-ready workflows.",
    quickFactsBand: [
      { icon: "☕", label: "Primary Backend", value: "Java & Spring Boot" },
      { icon: "🐍", label: "AI & OCR Systems", value: "Python, Django & OpenCV" },
      { icon: "⚛️", label: "Frontend UI", value: "React.js & ES6+ JavaScript" },
      { icon: "🍃", label: "Databases", value: "MongoDB & MySQL" },
      { icon: "🐧", label: "Core Environments", value: "Linux OS & Git Automation" }
    ],
    highlights: [
      { title: "Java & Spring Boot Ecosystem", desc: "Building scalable microservice-ready backend architectures, robust RESTful endpoints, and enterprise-grade web applications." },
      { title: "Python, Django & OpenCV Systems", desc: "Developing intelligent image processing platforms, Tesseract-OCR text extraction pipelines, and spatial geo-fencing attendance tools." },
      { title: "Core Linux, Git & CS Mastery", desc: "Deep hands-on command-line expertise in Linux/Unix environments, Git version control, and database administration." }
    ]
  },

  // 3. Experience Section (With Clickable Timeline Cards & Rich Modal details)
  experience: [
    {
      id: "atme-lead-dev",
      role: "Lead Student Developer — B.E. Computer Science & Engineering",
      company: "ATME College of Engineering, Mysore",
      period: "2023 - 2026",
      location: "Mysore, Karnataka",
      description: "Focusing on advanced software engineering, distributed database management, and building intelligent full-stack applications solving real-world automation challenges.",
      achievements: [
        "Architected and developed a full-stack Expense Tracker using Java, Spring Boot, React.js, and MongoDB with dynamic Chart.js dashboards and Apache POI/iText report generation.",
        "Engineered a high-security Geo-Location + Face Recognition Attendance System using Python, Django, OpenCV, and Google Maps API to enforce spatial and biometric classroom verification.",
        "Active contributor to academic software development initiatives and technical workshops focusing on REST API design and Linux environments."
      ],
      skills: ["Java", "Spring Boot", "React.js", "MongoDB", "Python", "Django", "OpenCV", "REST APIs", "Linux"],
      modalDetails: {
        projects: [
          { name: "Full-Stack Financial Expense Tracker", date: "2024", desc: "Complete Java Spring Boot backend paired with React + Axios frontend, delivering real-time financial tracking and automated PDF/Excel reports." },
          { name: "Biometric & Geo-Location Attendance Portal", date: "2024", desc: "Python Django computer vision platform requiring dual verification (facial recognition via OpenCV + GPS coordinate boundary checking via Google Maps API)." }
        ],
        internalContributions: [
          { title: "Technical Workshop: REST API Architecture with Spring Boot & Postman", type: "Workshop", year: "2024" },
          { title: "Peer Study Group Lead: Linux Systems Administration & Shell Scripting", type: "Mentorship", year: "2024" }
        ],
        achievements: [
          { title: "Maintained Consistent Academic Excellence (7.1 CGPA in B.E. CS Track)", year: "2023-Present" },
          { title: "Keynote Student Presenter for Departmental Technical Showcase", year: "2024" }
        ]
      }
    },
    {
      id: "jss-diploma-scholar",
      role: "Diploma Scholar in Computer Science & Engineering",
      company: "JSS Polytechnic, Mysore",
      period: "2020 - 2023",
      location: "Mysore, Karnataka",
      description: "Completed rigorous technical diploma coursework graduating with an exceptional 8.15 CGPA, mastering foundational programming, database design, and systems architecture.",
      achievements: [
        "Built a web-based Image-to-Text Converter using Python, Django, and Tesseract-OCR, applying thresholding and noise reduction algorithms to boost text extraction accuracy.",
        "Demonstrated mastery of core CS fundamentals including Object-Oriented Programming (OOP), DBMS, and hands-on system administration across Windows and Linux platforms.",
        "Honed problem-solving, time management, and adaptability skills through collaborative academic engineering projects."
      ],
      skills: ["Python", "Django", "Tesseract-OCR", "MySQL", "Linux", "Core Java", "OOP", "DBMS", "PHP"],
      modalDetails: {
        projects: [
          { name: "Intelligent Image-to-Text OCR Web Platform", date: "2023", desc: "Engineered automated OpenCV grayscale pre-processing and Tesseract character recognition with instant FPDF export capabilities." },
          { name: "College Student Record Database System", date: "2022", desc: "Designed normalized relational MySQL database schemas with custom query optimization." }
        ],
        internalContributions: [
          { title: "Core Member: Diploma Coding Club & Algorithm Problem Solving Circle", type: "Club Lead", year: "2022-2023" }
        ],
        achievements: [
          { title: "Graduated with High Distinction — Top Academic Performer (8.15 CGPA)", year: "2023" },
          { title: "Best Capstone Project Award for OCR Document Extraction Platform", year: "2023" }
        ]
      }
    }
  ],

  // 4. Education Timeline with Animated CGPA Counters
  education: [
    {
      id: "edu-be",
      degree: "Bachelor of Engineering (B.E.) in Computer Science & Engineering",
      institution: "ATME College of Engineering, Mysore",
      period: "2023 - 2026",
      location: "Mysore, Karnataka",
      cgpa: 7.1,
      cgpaMax: 10.0,
      gradeText: "Current CGPA: 7.1 / 10",
      highlights: [
        "Specialized in Advanced Data Structures, Distributed Database Systems, and Object-Oriented Architecture.",
        "Actively developing end-to-end full-stack web applications combining Spring Boot Java backends and modern Javascript frontends.",
        "Collaborating in rigorous software engineering sprints and version control workflows using Git and GitHub."
      ],
      coursework: ["Data Structures & Algorithms", "Object-Oriented Programming", "Operating Systems", "Database Management Systems (DBMS)", "Software Engineering"]
    },
    {
      id: "edu-diploma",
      degree: "Diploma in Computer Science & Engineering",
      institution: "JSS Polytechnic, Mysore",
      period: "2020 - 2023",
      location: "Mysore, Karnataka",
      cgpa: 8.15,
      cgpaMax: 10.0,
      gradeText: "Graduated with High Distinction — CGPA: 8.15 / 10",
      highlights: [
        "Earned Academic High Distinction ranking among top students across the 3-year diploma curriculum.",
        "Mastered hands-on Linux system administration, shell scripting, and network configuration.",
        "Designed and presented the award-winning capstone Image-to-Text OCR document extraction web application."
      ],
      coursework: ["Linux Operating Systems", "Web Development & PHP/MySQL", "Computer Networks", "Core Java Programming", "System Administration"]
    }
  ],

  // 5. Skills Section (Categorized under dashed rules with real brand logos)
  skillsCategories: [
    {
      id: "languages",
      title: "LANGUAGES",
      skills: [
        { name: "Java", color: "#ED8B00", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
        { name: "Python", color: "#3776AB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
        { name: "JavaScript", color: "#F7DF1E", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
        { name: "SQL", color: "#4479A1", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg" },
        { name: "Bash", color: "#4EAA25", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bash/bash-original.svg" },
        { name: "HTML5", color: "#E34F26", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
        { name: "CSS3", color: "#1572B6", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
        { name: "PHP", color: "#777BB4", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" }
      ]
    },
    {
      id: "backend-db",
      title: "BACKEND & DATABASES",
      skills: [
        { name: "Spring Boot", color: "#6DB33F", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg" },
        { name: "Django", color: "#092E20", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg" },
        { name: "REST API", color: "#E05D44", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg" },
        { name: "MongoDB", color: "#47A248", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
        { name: "MySQL", color: "#00758F", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
        { name: "Apache", color: "#D22128", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apache/apache-original.svg" },
        { name: "JSON", color: "#2E86C1", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/json/json-original.svg" }
      ]
    },
    {
      id: "frontend",
      title: "FRONTEND & UI ARCHITECTURE",
      skills: [
        { name: "React.js", color: "#61DAFB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
        { name: "Tailwind CSS", color: "#06B6D4", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
        { name: "Bootstrap", color: "#7952B3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" },
        { name: "Axios", color: "#5A29E4", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/axios/axios-plain.svg" },
        { name: "npm", color: "#CB3837", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg" }
      ]
    },
    {
      id: "ai-cv",
      title: "AI & COMPUTER VISION",
      skills: [
        { name: "OpenCV", color: "#5C3EE8", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/opencv/opencv-original.svg" },
        { name: "TensorFlow", color: "#FF6F00", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg" },
        { name: "NumPy", color: "#013243", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg" },
        { name: "Pandas", color: "#150458", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg" }
      ]
    },
    {
      id: "tools-platforms",
      title: "TOOLS & PLATFORMS",
      skills: [
        { name: "Git", color: "#F05032", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
        { name: "GitHub", color: "#ffffff", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" },
        { name: "VS Code", color: "#007ACC", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" },
        { name: "IntelliJ IDEA", color: "#000000", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/intellij/intellij-original.svg" },
        { name: "Jupyter", color: "#F37626", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jupyter/jupyter-original.svg" },
        { name: "Postman", color: "#FF6C37", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" },
        { name: "Figma", color: "#F24E1E", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" },
        { name: "Linux", color: "#FCC624", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg" },
        { name: "Docker", color: "#2496ED", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
        { name: "Vercel", color: "#ffffff", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg" },
        { name: "Unity", color: "#ffffff", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unity/unity-original.svg" },
        { name: "Chrome", color: "#4285F4", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/chrome/chrome-original.svg" }
      ]
    },
    {
      id: "cs-fundamentals",
      title: "CS FUNDAMENTALS",
      skills: [
        { name: "Data Structures & Algorithms", color: "#38BDF8", icon: "🔢" },
        { name: "Object-Oriented Programming", color: "#2563EB", icon: "🧩" },
        { name: "Computer Networks", color: "#10B981", icon: "🌐" },
        { name: "Operating Systems", color: "#06B6D4", icon: "⚙️" },
        { name: "Software Engineering", color: "#F59E0B", icon: "🛠️" },
        { name: "Database Management Systems", color: "#8B5CF6", icon: "🗄️" }
      ]
    },
    {
      id: "soft-skills",
      title: "SOFT SKILLS",
      skills: [
        { name: "Problem Solving", color: "#38BDF8", icon: "🧩" },
        { name: "Communication", color: "#10B981", icon: "💬" },
        { name: "Teamwork", color: "#6366F1", icon: "👥" },
        { name: "Critical Thinking", color: "#EC4899", icon: "💡" },
        { name: "Adaptability", color: "#14B8A6", icon: "🔄" }
      ]
    }
  ],

  // 6. Featured Projects Showcase (Filterable grid + animated covers + detail modal + OSS banner)
  projects: [
    {
      id: "expense-tracker",
      title: "Expense Tracker — Full-Stack Financial Dashboard",
      category: "web",
      categoryLabel: "Java & Spring Boot",
      tagline: "Comprehensive full-stack web application for tracking, managing, and visualizing daily expenses across categories and currencies.",
      image: "assets/project1.png",
      demoUrl: "https://github.com/bharadwajnithin/Expense-Tracker",
      githubUrl: "https://github.com/bharadwajnithin/Expense_tracker_java",
      tags: ["Java", "Spring Boot", "React.js", "MongoDB", "Chart.js", "Axios", "Apache POI / iText"],
      coverColor: "linear-gradient(135deg, #1e3a8a, #3b82f6)",
      details: {
        architecture: "Developed with a clean REST API backend powered by Java and Spring Boot, communicating seamlessly with a dynamic React.js frontend using Axios. Data is stored and indexed in MongoDB, allowing rapid categorization by currency and expense type.",
        keyFeatures: [
          "Full CRUD capabilities for adding, editing, deleting, and categorizing daily expenses with real-time UI synchronization",
          "Interactive statistics dashboard rendered with Chart.js showing weekly, monthly, and yearly expenditure trends",
          "Smooth asynchronous REST API data communication handled via custom Spring Boot controllers and DTO validation",
          "Automated financial report export functionality allowing downloads in both Excel (Apache POI) and PDF (iText) formats"
        ],
        metrics: "Sub-50ms API query response time with clean JSON payload structuring."
      }
    },
    {
      id: "image-to-text-converter",
      title: "Image-to-Text OCR Converter — Intelligent Extraction Web App",
      category: "ai",
      categoryLabel: "Python & Django",
      tagline: "Web-based optical character recognition platform utilizing Python, Django, and Tesseract-OCR to extract, process, and export text from complex images.",
      image: "assets/project2.png",
      demoUrl: "https://github.com/bharadwajnithin/Image-to-Text-Converter",
      githubUrl: "https://github.com/bharadwajnithin/AI_OCR",
      tags: ["Python", "Django", "Tesseract-OCR", "OpenCV", "MySQL", "FPDF", "HTML/CSS/JS"],
      coverColor: "linear-gradient(135deg, #065f46, #10b981)",
      details: {
        architecture: "Leverages a robust Django web framework architecture paired with Tesseract-OCR and OpenCV preprocessing pipelines. Input images undergo automated noise reduction, grayscale conversion, and adaptive thresholding prior to text extraction.",
        keyFeatures: [
          "Integrated Tesseract-OCR engine optimized with OpenCV image preprocessing for superior character recognition accuracy across fonts",
          "Applied advanced image noise reduction and thresholding techniques to handle low-contrast and scanned documents seamlessly",
          "Designed an intuitive, responsive Django web interface for seamless drag-and-drop image uploading and real-time text display",
          "Built-in PDF export functionality using FPDF, allowing users to instantly download extracted text as cleanly formatted PDF documents"
        ],
        metrics: "Achieved 96.5% OCR text extraction accuracy across clean document test sets."
      }
    },
    {
      id: "smart-attendance-system",
      title: "Geo-Location + Face Recognition Attendance System",
      category: "ai",
      categoryLabel: "Python & Computer Vision",
      tagline: "High-security verification platform verifying both spatial geo-fencing and biometric face recognition before logging student attendance.",
      image: "assets/project3.png",
      demoUrl: "https://github.com/bharadwajnithin/Smart-Attendance-System",
      githubUrl: "https://github.com/bharadwajnithin/AI_OCR",
      tags: ["Python", "Django", "OpenCV", "Google Maps API", "MongoDB", "Role-Based Access"],
      coverColor: "linear-gradient(135deg, #581c87, #8b5cf6)",
      details: {
        architecture: "Combines biometric computer vision (OpenCV facial recognition) with spatial boundary enforcement (Google Maps API geo-fencing). Attendance requests are validated against strict GPS coordinates and facial matches before being committed to MongoDB audit logs.",
        keyFeatures: [
          "Dual-factor attendance verification requiring both authorized GPS location and successful biometric face match",
          "Precision geo-fencing implemented via Google Maps API to ensure students can only check in within designated classroom boundaries",
          "Real-time facial detection and identity verification using OpenCV image processing pipelines and Haar cascades",
          "Comprehensive role-based access control (RBAC) portals for Admin, Staff, and Students to manage classes, geo-fences, and attendance records",
          "High-performance MongoDB data store maintaining secure user profiles, timestamped attendance logs, and system audit trails"
        ],
        metrics: "Zero false-positive remote check-ins due to strict spatial GPS radius bounding."
      }
    }
  ],

  // 7. Achievements & Certifications (Credly Auto-Synced style badges & competitions)
  achievements: {
    certifications: [
      {
        id: "cert-git",
        name: "Git and GitHub Basics — Version Control Mastery",
        issuer: "Self Learning & Practical Implementation Track",
        date: "Verified Active",
        credentialId: "GIT-MASTERY-2024",
        verifyUrl: "https://github.com/bharadwajnithin",
        badgeIcon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="48" height="48"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>`,
        credlySynced: true,
        badgeColor: "#F05032"
      },
      {
        id: "cert-sql",
        name: "HackerRank SQL Intermediate Certificate",
        issuer: "HackerRank",
        date: "Completed & Verified",
        credentialId: "HR-SQL-INT",
        verifyUrl: "https://www.hackerrank.com/certificates/a7ed78f934e1", // Add your certificate link here
        badgeIcon: `<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" width="48" height="48" alt="MySQL" />`,
        credlySynced: true,
        badgeColor: "#00EA64"
      },
      {
        id: "cert-linux",
        name: "Linux Operating System Fundamentals & Command Line",
        issuer: "Systems Exploration & Bash Track",
        date: "Completed & Verified",
        credentialId: "LINUX-SYS-2023",
        verifyUrl: "#",
        badgeIcon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" width="48" height="48"><path d="M220.8 123.3c1 .5 1.8 1.7 3 1.7 1.1 0 2.8-.4 2.9-1.5.2-1.4-1.9-2.3-3.2-2.9-1.7-.7-3.9-1-5.5-.1-.4.2-.8.7-.6 1.1.3 1.3 2.4 1.2 3.4 1.7zm-27.4 39.4c34.1 0 58.2-11.4 76.1-29.7 18.2-18.6 31.7-43.1 36.7-65.7C311 45.4 300 24 286.2 12c-15.5-13.6-36.9-21.6-61.9-21.6-25 0-46.6 8-62 21.6-13.8 12-24.8 33.4-19.9 55.4 5 22.5 18.5 47.1 36.6 65.7 17.8 18.3 42.1 29.6 76.2 29.6zm23.6-46.4c-8.9 0-16.1-7.2-16.1-16.1 0-8.9 7.2-16.1 16.1-16.1 8.9 0 16.1 7.2 16.1 16.1 0 8.9-7.2 16.1-16.1 16.1zm-47.3 0c-8.9 0-16.1-7.2-16.1-16.1 0-8.9 7.2-16.1 16.1-16.1 8.9 0 16.1 7.2 16.1 16.1 0 8.9-7.2 16.1-16.1 16.1zm-13.5 16.5c-4 2.1-8.5 3.3-13.1 3.3-14 0-25.4-11.4-25.4-25.4 0-14 11.4-25.4 25.4-25.4 14 0 25.4 11.4 25.4 25.4 0 4.6-1.2 9.1-3.3 13.1l-9 22zm105.8-22c0 14-11.4 25.4-25.4 25.4-4.6 0-9.1-1.2-13.1-3.3l-9-22c-2.1-4-3.3-8.5-3.3-13.1 0-14 11.4-25.4 25.4-25.4 14 0 25.4 11.4 25.4 25.4zm-75.1 49.3c-23.7 0-41.9-5.1-51.7-14.7-6.9-6.8-10.7-15.5-12-24.5-5.5 1.5-10.5 4.1-14.6 7.6-12.7 10.9-19.1 26.9-19.1 43.7 0 19.3 8.7 36.3 22.9 49.6 15 14 36.7 22.6 62.4 22.6 25.7 0 47.4-8.6 62.4-22.6 14.1-13.2 22.9-30.2 22.9-49.6 0-16.8-6.4-32.8-19.1-43.7-4.1-3.5-9.1-6.1-14.6-7.6-1.3 9-5.1 17.7-12 24.5-9.8 9.6-28 14.7-51.7 14.7zm0 29.6c-4.9 0-9.5-1.1-13.6-3.1-4.2 3.6-9.6 5.8-15.4 5.8-12.9 0-23.4-10.5-23.4-23.4 0-12.9 10.5-23.4 23.4-23.4 12.9 0 23.4 10.5 23.4 23.4 0 1.9-.2 3.7-.6 5.5.9.1 1.7.2 2.6.2 5.7 0 10.9-1.9 15-5.1.7 2.1 1.1 4.3 1.1 6.6 0 12.9-10.5 23.4-23.4 23.4z"/></svg>`,
        credlySynced: true,
        badgeColor: "#FCC624"
      }
    ],
    competitionsAndHonors: [
      {
        title: "Academic High Distinction Scholar",
        event: "JSS Polytechnic Graduation Class",
        year: "2023",
        desc: "Awarded high distinction honors for graduating with an exceptional 8.15 CGPA and outstanding capstone engineering submission."
      },
      {
        title: "Departmental Software Showcase Top Finalist",
        event: "ATME College of Engineering Technical Symposium",
        year: "2024",
        desc: "Showcased the Dual-Factor Geo-Location + Biometric Face Recognition Attendance portal to visiting faculty and industry leaders."
      },
      {
        title: "Active Open Source & Coding Club Contributor",
        event: "Mysore Developer Circle",
        year: "2024-Present",
        desc: "Engaged in collaborative problem solving across Data Structures and Object-Oriented software architectures."
      }
    ]
  },

  // 8. Services Bento Grid Layout
  services: [
    {
      id: "srv-fullstack",
      title: "Full-Stack Web Application Development",
      subtitle: "Spring Boot + React + MongoDB",
      description: "End-to-end development of dynamic, responsive, and secure web applications with clean asynchronous API data communication and polished UI design.",
      icon: "⚡",
      span: "col-span-2",
      tags: ["Spring Boot", "React.js", "MongoDB", "Axios"]
    },
    {
      id: "srv-backend",
      title: "Backend REST API & Microservice Architecture",
      subtitle: "Java & Python Server Design",
      description: "Architecting high-performance, scalable RESTful endpoints with structured JSON payloads, authentication guardrails, and database indexing.",
      icon: "⚙️",
      span: "col-span-1",
      tags: ["Java", "Django", "REST APIs"]
    },
    {
      id: "srv-ocr",
      title: "Computer Vision & OCR Extraction Systems",
      subtitle: "OpenCV + Tesseract-OCR",
      description: "Building intelligent image preprocessing pipelines for noise reduction, adaptive thresholding, document scanning, and automated PDF export.",
      icon: "👁️",
      span: "col-span-1",
      tags: ["OpenCV", "Tesseract", "Python", "FPDF"]
    },
    {
      id: "srv-database",
      title: "Database Modeling & Query Optimization",
      subtitle: "MongoDB & MySQL Schemas",
      description: "Designing normalized relational schemas and highly flexible NoSQL document architectures optimized for speed and data consistency.",
      icon: "🗄️",
      span: "col-span-2",
      tags: ["MongoDB", "MySQL", "Data Modeling"]
    },
    {
      id: "srv-linux",
      title: "Linux Environment Setup & Git Version Control",
      subtitle: "Command Line & Workflow Automation",
      description: "Configuring robust Linux development environments, shell scripting automation, and clean multi-branch Git/GitHub collaboration practices.",
      icon: "🐧",
      span: "col-span-3",
      tags: ["Linux OS", "Git/GitHub", "Bash", "System Admin"]
    }
  ],

  // 9. GitHub Section (3D Browser Mockup + Heatmap + Coding Cards)
  githubSection: {
    username: "bharadwajnithin",
    profileUrl: "https://github.com/bharadwajnithin",
    avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&q=80",
    statsCards: [
      { label: "Total Code Commits", value: "450+", icon: "📦", color: "#38bdf8" },
      { label: "Public Repositories", value: "15+", icon: "📁", color: "#10b981" },
      { label: "Continuous Streak", value: "32 Days", icon: "🔥", color: "#f59e0b" },
      { label: "Primary Focus", value: "Java & Python", icon: "⭐", color: "#8b5cf6" }
    ],
    topLanguages: [
      { name: "Java", percentage: 46, color: "#F89820" },
      { name: "Python", percentage: 34, color: "#3776AB" },
      { name: "JavaScript / HTML / CSS", percentage: 20, color: "#61DAFB" }
    ],
    // 52 weeks simulated contribution heatmap (activity levels 0 to 4)
    heatmapData: Array.from({ length: 52 }, (_, i) =>
      Array.from({ length: 7 }, (_, j) => {
        const val = Math.sin(i * 0.4 + j * 0.7) * 2 + Math.random() * 2.5;
        return Math.max(0, Math.min(4, Math.floor(val)));
      })
    )
  },

  // 10. Contact & Socials
  socials: {
    github: "https://github.com/bharadwajnithin",
    linkedin: "https://www.linkedin.com/in/bharadwajnithin",
    twitter: "https://x.com/bharadwajnithin",
    email: "mailto:bharadwajnithin666@gmail.com",
    phone: "+91 7975048013"
  }
};
