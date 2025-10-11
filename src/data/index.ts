import { Project, Skill, NavLink, SocialLink, Experience, Service, Education } from '../types';

export const navLinks: NavLink[] = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Education', href: '#education' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
  { name: 'Resume', href: 'https://drive.google.com/file/d/1uFUW1TO-37DKGcOUNDwv9-aNZuetYu6I/view?usp=sharing', target: '_blank' },
];

export const socialLinks: SocialLink[] = [
  { 
    name: 'WhatsApp', 
    url: 'https://wa.me/+916309351001', 
    icon: 'whatsapp' 
  },
  { 
    name: 'LinkedIn', 
    url: 'https://www.linkedin.com/in/haripreeth-thota/', 
    icon: 'linkedin' 
  },
  { 
    name: 'Instagram', 
    url: 'https://www.instagram.com/h_a_r_i_p_r_e_e_t_h/', 
    icon: 'instagram' 
  },
  { 
    name: 'GitHub', 
    url: 'https://github.com/haripreeth369', 
    icon: 'github' 
  },
];

export const skills: Skill[] = [
  { name: 'HTML', icon: 'html', level: 90, category: 'frontend' },
  { name: 'CSS', icon: 'css', level: 85, category: 'frontend' },
  { name: 'JavaScript', icon: 'javascript', level: 90, category: 'frontend' },
  { name: 'TypeScript', icon: 'typescript', level: 85, category: 'frontend' },
  { name: 'React', icon: 'react', level: 90, category: 'frontend' },
  { name: 'Next.js', icon: 'nextjs', level: 80, category: 'frontend' },
  { name: 'Tailwind CSS', icon: 'tailwind', level: 90, category: 'frontend' },
  { name: 'Node.js', icon: 'nodejs', level: 80, category: 'backend' },
  { name: 'Express', icon: 'express', level: 75, category: 'backend' },
  { name: 'MongoDB', icon: 'mongodb', level: 75, category: 'backend' },
  { name: 'PostgreSQL', icon: 'postgresql', level: 70, category: 'backend' },
  { name: 'GraphQL', icon: 'graphql', level: 65, category: 'backend' },
  { name: 'Figma', icon: 'figma', level: 85, category: 'design' },
  { name: 'WordPress', icon: 'wordpress', level: 85, category: 'builders' },
  { name: 'Wix', icon: 'wix', level: 80, category: 'builders' },
  { name: 'Shopify', icon: 'shopify', level: 75, category: 'builders' },
  { name: 'Duda', icon: 'duda', level: 70, category: 'builders' },
  { name: 'Brizy', icon: 'brizy', level: 70, category: 'builders' },
  { name: 'One', icon: 'one', level: 65, category: 'builders' },
  { name: 'Git', icon: 'git', level: 85, category: 'other' },
  { name: 'Docker', icon: 'docker', level: 70, category: 'other' },
];

export const projects: Project[] = [
  {
    id: 1,
    title: 'Veva Realty',
    description: 'A comprehensive real estate platform for listing projects, leasing apartments, commercials and villas with advanced search and filtering capabilities.',
    image: '/images/veva_001.webp',
    tags: ['WordPress', 'PHP', 'MySQL', 'Real Estate', 'Responsive Design'],
    demoUrl: 'https://vevarealty.com/',
    category: 'fullstack',
  },
  {
    id: 2,
    title: 'Wizzibility',
    description: 'A creative tech studio website offering comprehensive digital services from social media management to branding and marketing solutions.',
    image: '/images/Wizzibility.webp',
    tags: ['WordPress', 'React', 'TypeScript', 'Creative Design', 'Branding', 'Marketing'],
    demoUrl: 'https://wizzibility.com',
    category: 'fullstack',
  },
  {
    id: 3,
    title: 'Ananda Homes',
    description: 'A leading real estate builders & construction company website showcasing premium residential and commercial projects in Hyderabad, Telangana.',
    image: '/images/Ananda.webp',
    tags: ['WordPress', 'Construction', 'Real Estate', 'SEO', 'Mobile Responsive'],
    demoUrl: 'https://anandahomes.co.in/',
    category: 'fullstack',
  },
  {
    id: 4,
    title: 'Weather App',
    description: 'A responsive weather application with real-time updates, forecasts, and location-based services built with modern web technologies.',
    image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['React', 'OpenWeather API', 'Geolocation', 'Chart.js'],
    demoUrl: 'https://hth-weather-app.vercel.app/',
    category: 'frontend',
  },
  {
    id: 5,
    title: 'Video Library',
    description: 'A comprehensive video library application with search, categorization, and playlist management features for organizing and viewing content.',
    image: 'https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['React', 'Video API', 'Search', 'Responsive Design'],
    demoUrl: 'https://hth-vedio-library.vercel.app/',
    category: 'frontend',
  },
  {
    id: 6,
    title: 'Tic-Tac-Toe Game',
    description: 'An interactive Tic-Tac-Toe game with clean UI, game state management, and win detection algorithms for an engaging gaming experience.',
    image: 'https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['React', 'Game Logic', 'State Management', 'Interactive UI'],
    demoUrl: 'https://hth-tic-tac-toe.vercel.app/',
    category: 'frontend',
  },
];

export const experiences: Experience[] = [
  {
    id: 1,
    role: 'Tech Expert',
    company: 'Wizzibility',
    duration: 'May 2025 - Present',
    description: 'Leading technical initiatives and providing expertise in full-stack development. Working on cutting-edge projects with modern technologies and mentoring junior developers.',
  },
  {
    id: 2,
    role: 'Web Developer',
    company: 'Scintillate Infomatics',
    duration: 'Nov 2023 - Apr 2025',
    description: 'Developed responsive web applications using React and TypeScript. Collaborated with designers to implement UI/UX improvements that increased user engagement by 25%.',
  },
  {
    id: 3,
    role: 'Intern',
    company: 'BHEL (Bharat Heavy Electricals Limited)',
    duration: 'May 2022 - Jul 2022',
    description: 'Gained hands-on experience in industrial automation and software development. Worked on projects involving embedded systems and learned about large-scale engineering processes.',
  },
];

export const education: Education[] = [
  {
    id: 1,
    degree: 'B.Tech in Electronics and Communication',
    institution: 'SCSVMV University, Kanchipuram',
    duration: '2019 - 2023',
    grade: '9.3 CGPA',
    description: 'Graduated with a 9.3 CGPA, specializing in full-stack development and software engineering.',
  },
  {
    id: 2,
    degree: 'Intermediate (MPC)',
    institution: 'Narayana Junior College, Hyderabad',
    duration: '2017 - 2019',
    grade: 'Distinction',
    description: 'Focused on Mathematics, Physics, and Chemistry with a strong foundation in problem-solving.',
  },
  {
    id: 3,
    degree: 'Secondary School Certificate (SSC)',
    institution: 'Triveni Talent School, Khammam',
    duration: '2016 - 2017',
    grade: 'Distinction',
    description: 'Excelled in academics and participated in coding competitions.',
  },
];

export const services: Service[] = [
  {
    id: 1,
    title: 'Web Development',
    description: 'Creating responsive, high-performance websites and web applications tailored to your specific needs.',
    icon: 'code',
  },
  {
    id: 2,
    title: 'UI/UX Design',
    description: 'Designing intuitive and engaging user interfaces with a focus on usability and accessibility.',
    icon: 'layout',
  },
  {
    id: 3,
    title: 'Mobile App Development',
    description: 'Building cross-platform mobile applications that deliver a native-like experience on any device.',
    icon: 'smartphone',
  },
  {
    id: 4,
    title: 'API Development',
    description: 'Creating robust and scalable APIs that enable seamless integration between different systems.',
    icon: 'server',
  },
];