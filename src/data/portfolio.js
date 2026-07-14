export const personalInfo = {
  name: 'Ranga Sai CH',
  greeting: "Hello, I'm",
  roles: [
    'CSE (Cyber Security) Student',
    'Web Developer',
    'Cyber Security Enthusiast',
  ],
  email: 'chiraboinarangasai@gmail.com',
  linkedin: 'https://www.linkedin.com/in/ranga-sai-ch',
  github: 'https://github.com/RangaSaiCh',
  location: 'India',
  resumeFile: '/Ranga_Sai_CH_Resume.pdf',
  resumeLabel: 'Download Resume',
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
    download: true,
  },
];

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

export const education = [
  {
    degree: 'B.Tech in Computer Science & Engineering (Cyber Security)',
    institution: 'Your University Name',
    period: '2022 — Present',
    description:
      'Focused on network security, ethical hacking, secure software development, and threat analysis.',
  },
];

export const experience = [
  {
    role: 'Cyber Security Projects & Labs',
    company: 'Academic & Self-Directed',
    period: '2023 — Present',
    description:
      'Hands-on work with Wireshark, Nmap, Burp Suite, and Metasploit through lab exercises and personal projects.',
    highlights: [
      'Performed packet analysis and identified unencrypted traffic risks',
      'Built automation scripts for threat intelligence collection',
    ],
  },
  {
    role: 'Web Development Projects',
    company: 'Personal Portfolio & Coursework',
    period: '2023 — Present',
    description:
      'Designed and developed responsive web applications using HTML, CSS, JavaScript, and React.',
    highlights: [
      'Built this portfolio with React, Vite, and modern UI patterns',
      'Applied responsive design and accessibility best practices',
    ],
  },
];

export const certifications = [
  {
    title: 'Introduction to Cyber Security',
    issuer: 'Online Learning Platform',
    year: '2024',
    credentialUrl: '',
  },
  {
    title: 'Python for Everybody',
    issuer: 'Online Learning Platform',
    year: '2023',
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
    title: 'Sniffing Unencrypted Network Traffic',
    description:
      'Captured and analyzed sensitive HTTP data using Wireshark to demonstrate risks of unencrypted communication.',
    tags: ['Wireshark', 'Network Security', 'Packet Analysis'],
    githubUrl: 'https://github.com/RangaSaiCh',
    liveUrl: '',
  },
  {
    title: 'Instagram Drug Detection',
    description:
      'Machine learning system designed to detect drug-related content on social media platforms.',
    tags: ['Python', 'Machine Learning', 'NLP'],
    githubUrl: 'https://github.com/RangaSaiCh',
    liveUrl: '',
  },
  {
    title: 'Threat Intelligence Collector',
    description:
      'Automated collection and analysis of cyber threat feeds for actionable security insights.',
    tags: ['Python', 'Threat Intel', 'Automation'],
    githubUrl: 'https://github.com/RangaSaiCh',
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
