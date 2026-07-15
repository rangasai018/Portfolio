export const personalInfo = {
  name: 'Ranga Sai CH',
  greeting: "Hello, I'm",
  roles: [
    'CSE (Cyber Security) Student',
    'Web Developer',
    'Cyber Security Enthusiast',
  ],
  email: 'chiraboinarangasai@gmail.com',
  linkedin: 'https://www.linkedin.com/in/ranga-sai-ch-275300256',
  github: 'https://github.com/rangasai018',
  location: 'India',
  resumeFile: 'https://drive.google.com/file/d/1Z7OReaUhLIeyuQ7xm1p0Kx5w-QgbktH9/view?usp=sharing',
  resumeDownloadName: 'Sai_Resume.pdf',
  resumeLabel: 'View Resume',
  tagline:
    'Building secure web experiences and exploring the intersection of development and cyber security.',
};

export const socialLinks = [
  {
    id: 'github',
    label: 'GitHub',
    href: personalInfo.github,
    icon: 'github',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    href: personalInfo.linkedin,
    icon: 'linkedin',
  },
  {
    id: 'email',
    label: 'Email',
    href: `mailto:${personalInfo.email}`,
    icon: 'email',
  },
  {
    id: 'resume',
    label: 'Resume',
    href: personalInfo.resumeFile,
    icon: 'resume',
  },
];

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'education', label: 'Education' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

export const education = [
  {
    degree: 'B.Tech in Computer Science Engineering (Cyber Security)',
    institution: 'CMR College of Engineering & Technology, Medchal, Telangana',
    period: 'Nov 2022 — May 2026',
    score: 'GPA: 7.32',
    description:
      'Focused on network security, ethical hacking, secure software development, and threat analysis.',
  },
  {
    degree: 'Intermediate (Class 12th)',
    institution: 'Resonance Jr College, Hyderabad, Telangana',
    period: '2020 — 2022',
    score: 'Percentage: 76%',
    description: 'Completed higher secondary education with focus on science and mathematics.',
  },
  {
    degree: 'Class 10th (SSC)',
    institution: 'Army Public School, Hyderabad, Telangana',
    period: '2020',
    score: 'Percentage: 73%',
    description: 'Completed secondary school education.',
  },
];

export const certifications = [
  {
    title: 'GenAI Governance',
    issuer: 'Skillsoft',
    year: '2025',
    credentialUrl: '',
  },
  {
    title: 'Ethical Hacker',
    issuer: 'Cisco Networking Academy',
    year: '2024',
    credentialUrl: '',
  },
  {
    title: 'Introduction to Cybersecurity',
    issuer: 'Cisco Networking Academy',
    year: '2024',
    credentialUrl: '',
  },
  {
    title: 'Tata Group Data Analytics Job Simulation',
    issuer: 'Forage',
    year: '2025',
    credentialUrl: '',
  },
  {
    title: 'Deloitte Australia Data Analytics Job Simulation',
    issuer: 'Forage',
    year: '2025',
    credentialUrl: '',
  },
  {
    title: 'Deloitte Australia Cyber Job Simulation',
    issuer: 'Forage',
    year: '2025',
    credentialUrl: '',
  },
];

export const skills = [
  {
    name: 'HTML',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    category: 'Development',
  },
  {
    name: 'CSS',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
    category: 'Development',
  },
  {
    name: 'JavaScript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    category: 'Development',
  },
  {
    name: 'Java',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
    category: 'Development',
  },
  {
    name: 'Python',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    category: 'Development',
  },
  {
    name: 'React',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    category: 'Development',
  },
  {
    name: 'Docker',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
    category: 'DevOps',
  },
  {
    name: 'Git',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    category: 'Tools',
  },
  {
    name: 'GitHub',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
    category: 'Tools',
  },
  {
    name: 'Nmap',
    icon: '/nmap.png',
    category: 'Security',
  },
  {
    name: 'Burp Suite',
    icon: '/burp-suite.png',
    category: 'Security',
  },
  {
    name: 'Wireshark',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
    category: 'Security',
  },
  {
    name: 'Metasploit',
    icon: '/metasploit.png',
    category: 'Security',
  },
];

export const projects = [
  {
    title: 'E-Commerce Platform',
    description:
      'A full-stack e-commerce web application built using Spring Boot, Java, HTML, CSS, JavaScript, MySQL, Docker, Render, and Vercel. Features user authentication, product browsing, shopping cart, and a responsive user interface.',
    tags: ['Java', 'Spring Boot', 'MySQL', 'Docker', 'HTML', 'CSS', 'JavaScript'],
    githubUrl: 'https://github.com/rangasai018/ecommerce-platform',
    liveUrl: '',
  },
  {
    title: 'Encrypted & Compressed Key-Value Store Using Pattern Analysis',
    description:
      'A secure cloud-native key-value store using FastAPI with AES-Fernet encryption, LZ4 compression, JWT authentication, SQLite/Redis support, and real-time pattern analysis.',
    tags: ['Python', 'FastAPI', 'SQLite', 'Redis', 'Docker', 'JWT'],
    githubUrl: 'https://github.com/rangasai018/Encrypted-And-Compressed-Key-Value-Store-Using-Pattern-Analysis',
    liveUrl: '',
  },
  {
    title: 'Java Chat Application',
    description:
      'A real-time client-server chat application developed using Java Socket Programming for seamless communication between multiple users.',
    tags: ['Java', 'Socket Programming', 'Networking'],
    githubUrl: 'https://github.com/rangasai018/Java-Chat-Application',
    liveUrl: '',
  },
  {
    title: 'Android Malware Detection',
    description:
      'An Android malware detection system using ensemble machine learning models including XGBoost, LightGBM, CatBoost, Random Forest, and SVM to classify applications as benign or malicious.',
    tags: ['Python', 'Machine Learning', 'Flask', 'XGBoost', 'SHAP'],
    githubUrl: 'https://github.com/rangasai018/Android-Malware-Detection',
    liveUrl: '',
  },
  {
    title: 'Quiz App',
    description:
      'An interactive quiz application built with JavaScript that provides a responsive interface, score tracking, and dynamic question handling.',
    tags: ['JavaScript', 'HTML', 'CSS'],
    githubUrl: 'https://github.com/rangasai018/Quiz-App',
    liveUrl: '',
  },
];

export const aboutHighlights = [
  {
    title: 'Cyber Security Focus',
    description:
      'Studying CSE with a specialization in cyber security, with hands-on experience in network analysis and penetration testing tools.',
  },
  {
    title: 'Full-Stack Foundations',
    description:
      'Comfortable building responsive web interfaces with modern HTML, CSS, JavaScript, and React.',
  },
  {
    title: 'Continuous Learner',
    description:
      'Actively exploring security tooling, threat intelligence, and practical lab work to stay current in the field.',
  },
];
