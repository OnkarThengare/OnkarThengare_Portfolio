export const portfolioData = {
  personal: {
    name: "Onkar Thengare",
    greeting: "Hi, I'm Onkar Thengare 👋",
    role: "Passionate Java Full Stack Developer 🚀",
    badge: "Available for Opportunities",
    description: "focused on building web applications using Java / Spring Boot / React.js / SQL, along with modern tools and frameworks to create scalable backend systems and seamless user experiences.",
    location: "Hyderabad, India",
    phone: "+91-8080682186",
    email: "onkarthengare2002@gmail.com",
    contactEmail: "onkarspy@gmail.com",
    github: "https://github.com/OnkarThengare",
    linkedin: "https://linkedin.com/in/onkar-thengare",
    objective: "Aspiring Java Developer with a strong foundation in Core Java, Object-Oriented Programming, Data Structures, SQL, JDBC, Spring Core, and Spring JDBC, with experience in full-stack application development using Java and React.js. Seeking an opportunity to apply programming and backend development skills while growing expertise in enterprise Java development.",
    stats: [
      { label: "Core Technologies", value: "10+" },
      { label: "Java & React.js", value: "Full Stack" },
      { label: "Design Patent", value: "Granted" },
      { label: "Commitment", value: "100%" }
    ]
  },

  skills: [
    { name: "React", key: "react", color: "#61DAFB", category: "Frontend" },
    { name: "JavaScript", key: "javascript", color: "#F7DF1E", category: "Frontend" },
    { name: "Tailwind CSS", key: "tailwind", color: "#38BDF8", category: "Frontend" },
    { name: "HTML5", key: "html5", color: "#E34F26", category: "Frontend" },
    { name: "CSS3", key: "css3", color: "#1572B6", category: "Frontend" },
    { name: "Java", key: "java", color: "#E76F00", category: "Backend" },
    { name: "Spring Boot", key: "springboot", color: "#6DB33F", category: "Backend" },
    { name: "Spring Framework", key: "spring", color: "#6DB33F", category: "Backend" },
    { name: "Hibernate", key: "hibernate", color: "#59666C", category: "Backend" },
    { name: "MySQL", key: "mysql", color: "#00758F", category: "Database" },
    { name: "Git", key: "git", color: "#F05032", category: "Tools" },
    { name: "Postman", key: "postman", color: "#FF6C37", category: "Tools" }
  ],

  skillCircles: [
    {
      category: "Backend Engineering",
      tech: "Java, Spring Boot, Hibernate, SQL",
      level: "Advanced",
      score: 95,
      color: "#8B7CF6",
      accentBg: "rgba(139, 124, 246, 0.15)"
    },
    {
      category: "Frontend Development",
      tech: "React.js, JavaScript, Tailwind CSS, HTML5",
      level: "Proficient",
      score: 90,
      color: "#00C2A8",
      accentBg: "rgba(0, 194, 168, 0.15)"
    },
    {
      category: "Testing & Version Control",
      tech: "Git, GitHub, Postman API Testing",
      level: "Mastery",
      score: 92,
      color: "#EC4899",
      accentBg: "rgba(236, 72, 153, 0.15)"
    }
  ],

  internship: [
    {
      role: "Virtual Internship — Selected for Project-Based Internship",
      company: "Infosys Springboard 7.0",
      period: "2026 — Present",
      points: [
        "Selected for the Infosys Springboard 7.0 Virtual Internship Program and currently working on a project as part of the internship.",
        "Collaborating on project development and applying software development concepts to build and implement project requirements."
      ]
    }
  ],

  projects: [
    {
      id: 1,
      title: "OneShop – Multivendor E-Commerce Platform",
      subtitle: "Enterprise Java Full-Stack Multi-Vendor System",
      type: "Full Stack Platform",
      description: "Developed a full-stack multivendor e-commerce application using Java, Spring Boot, React.js, and MySQL for customer, seller, and admin operations. Implemented REST APIs for user authentication, product catalog management, seller operations, cart, and order processing. Configured role-based authentication and authorization using Spring Security and JWT, utilizing Spring Data JPA/Hibernate for database persistence.",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=800&q=80",
      featured: true,
      tags: ["Java", "Spring Boot", "React.js", "Spring Security", "JWT", "Hibernate", "MySQL"],
      githubUrl: "https://github.com/OnkarThengare",
      liveUrl: "#",
      highlights: [
        "Full-stack multivendor architecture with separate customer, seller, and admin modules",
        "Role-based authentication & authorization with Spring Security & JWT",
        "RESTful API endpoints for catalog, cart, and automated order fulfillment",
        "Spring Data JPA & Hibernate ORM persistence with MySQL database"
      ]
    },
    {
      id: 2,
      title: "Nutrifit",
      subtitle: "Nutritional Analysis & Real-Time Health Guidance Web App",
      type: "Frontend Web Application",
      description: "Developed a responsive web application that provides nutritional analysis of food items using an external Nutrition API. Implemented real-time health news integration via Google News API and improved user experience using React.js and Tailwind CSS.",
      image: "/project-1.png",
      featured: true,
      tags: ["React.js", "Tailwind CSS", "Nutrition API", "Google News API", "REST APIs"],
      githubUrl: "https://github.com/OnkarThengare",
      liveUrl: "https://nova-landing-page-gamma.vercel.app/",
      highlights: [
        "Instant nutritional calculation and calorie breakdown via external Nutrition API",
        "Real-time curated health news feeds powered by Google News API integration",
        "Clean, fully responsive UI styled with Tailwind CSS supporting dark and light themes",
        "Pure frontend modular component architecture built with React.js"
      ]
    },
    {
      id: 3,
      title: "Automated Microfluidic System for Flow & Pressure Control",
      subtitle: "Design Patent Granted · Final Year Engineering Project",
      type: "IoT & Hardware Automation",
      description: "Developed an Arduino-based liquid dispensing system using two peristaltic pumps and flow sensors, with a Python Tkinter GUI for manual and automated pump control, flow-rate and volume configuration, real-time monitoring, and CSV data logging.",
      image: "/microfluidic-system.jpg",
      featured: true,
      tags: ["Arduino UNO", "Python (Tkinter)", "Sensors Interfacing", "Hardware Automation", "Data Logging"],
      githubUrl: "https://github.com/OnkarThengare",
      liveUrl: "#",
      highlights: [
        "Official Design Patent Granted for Automated Microfluidic Control Architecture",
        "Dual peristaltic pump control with Arduino UNO microcontroller firmware",
        "Interactive Python Tkinter desktop GUI for automated calibration & dynamic dispensing",
        "Real-time sensor telemetry with closed-loop pressure stabilization and CSV logging"
      ]
    }
  ],

  education: [
    {
      degree: "Full Stack Java Development Training",
      institution: "Naresh IT, Hyderabad",
      period: "Feb 2026 — Present",
      status: "Currently Pursuing",
      description: "Intensive training program focusing on Core Java, OOP, Data Structures, JDBC, Spring Core, Spring Boot microservices, React.js frontend, and MySQL database management.",
      highlights: [
        "Core Java (OOP, Data Structures, Collections, Multithreading, Exception Handling)",
        "Backend: Spring Core, Spring JDBC, Spring Boot RESTful APIs & Hibernate",
        "Frontend Integration: React.js, JavaScript (ES6+), and Tailwind CSS"
      ]
    },
    {
      degree: "Bachelor of Technology (B.Tech) – Electronics Engineering",
      institution: "Shri Ramdeobaba College of Engineering and Management",
      period: "Dec 2021 — May 2025",
      status: "CGPA: 8.17 / 10",
      description: "Electronics engineering degree covering embedded systems, microcontroller programming, algorithmic computing, and hardware-software system design.",
      highlights: [
        "Cumulative Grade Point Average (CGPA): 8.17 / 10",
        "Invented and patented: Automated Microfluidic Flow and Pressure Control System",
        "Electronics and programming foundations applied in robotics and automation projects"
      ]
    },
    {
      degree: "Higher Secondary Certificate (12th)",
      institution: "Lokmanya Tilak Junior College, Bramhapuri",
      period: "2020",
      status: "Completed",
      description: "Strong academic foundation in Mathematics, Physics, and Chemistry.",
      highlights: [
        "Excellence in Mathematics and Science"
      ]
    }
  ],

  certifications: [
    { title: "Databases for Developers: Foundations", issuer: "Oracle Dev Gym" },
    { title: "SQL", issuer: "HackerRank" }
  ],

  achievements: [
    { title: "Design Patent Granted", detail: "Automated Microfluidic System for Flow and Pressure Control" }
  ]
};
