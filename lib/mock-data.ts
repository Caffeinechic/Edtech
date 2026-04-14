export interface Course {
  id: number
  title: string
  category: string
  description: string
  longDescription: string
  duration: string
  level: string
  enrollment: number
  color: string
  mode: 'Online' | 'Offline' | 'Hybrid'
  price: number
  rating: number
  reviews: number
  provider: string
  sourceUrl: string
  instructor: {
    name: string
    avatar: string
    bio: string
  }
  learningOutcomes: string[]
  modules: {
    id: number
    title: string
    duration: string
    lessons: number
  }[]
  startDate: string
  schedule: string
  maxCapacity: number
  enrolled: number
}

export const learningTracks = [
  'AI & Machine Learning',
  'Data Science',
  'Cybersecurity',
  'Cloud Computing (AWS, Azure)',
  'Web Development (Full Stack)',
  'Software Engineering',
  'Prompt Engineering / Generative AI',
  'Blockchain & Web3 (emerging)',
  'Quantum',
]

export const mockCourses: Course[] = [
  {
    id: 1,
    title: 'Introduction to Computer Science',
    category: 'Software Engineering',
    description: 'Build core computational thinking skills and understand how modern software systems are designed.',
    longDescription: 'A foundational computer science course that develops algorithmic reasoning, abstraction, and system-level problem solving. Learners work through practical examples and mini projects that mirror real entry-level engineering tasks.',
    duration: '8 weeks',
    level: 'Beginner',
    enrollment: 1820,
    color: 'slate',
    mode: 'Online',
    price: 99,
    rating: 4.8,
    reviews: 642,
    provider: 'CS50 / Harvard OpenCourseWare',
    sourceUrl: 'https://cs50.harvard.edu/x/',
    instructor: {
      name: 'Dr. Maya Bhatia',
      avatar: '/avatars/admin-user.svg',
      bio: 'Computer science educator focused on first-year engineering curriculum and learning design.',
    },
    learningOutcomes: [
      'Understand algorithms, data structures, and complexity basics',
      'Write clean logic for real programming problems',
      'Use debugging workflows to fix runtime errors',
      'Present technical solutions clearly',
    ],
    modules: [
      { id: 1, title: 'Computational Thinking', duration: '1 week', lessons: 8 },
      { id: 2, title: 'Algorithms and Data', duration: '2 weeks', lessons: 12 },
      { id: 3, title: 'Programming Foundations', duration: '3 weeks', lessons: 14 },
      { id: 4, title: 'Final Applied Project', duration: '2 weeks', lessons: 6 },
    ],
    startDate: '2026-05-12',
    schedule: 'Tue, Thu - 7:00 PM to 9:00 PM IST',
    maxCapacity: 220,
    enrolled: 184,
  },
  {
    id: 2,
    title: 'Introduction to Programming with Python',
    category: 'Software Engineering',
    description: 'Learn Python syntax, control flow, and practical coding patterns from scratch.',
    longDescription: 'This entry-level Python course helps beginners become confident coders through hands-on labs, coding drills, and mini applications. It emphasizes real problem solving rather than memorization.',
    duration: '6 weeks',
    level: 'Beginner',
    enrollment: 1650,
    color: 'indigo',
    mode: 'Online',
    price: 89,
    rating: 4.7,
    reviews: 530,
    provider: 'edX / University Intro Python',
    sourceUrl: 'https://www.edx.org/learn/python',
    instructor: {
      name: 'Arun Nambiar',
      avatar: '/avatars/student-ravi.svg',
      bio: 'Python trainer and backend engineer with 9 years of production software experience.',
    },
    learningOutcomes: [
      'Write Python programs with functions and loops',
      'Use lists, dictionaries, and basic file operations',
      'Build command-line mini tools',
      'Apply code organization and readability standards',
    ],
    modules: [
      { id: 1, title: 'Python Essentials', duration: '1 week', lessons: 10 },
      { id: 2, title: 'Control Flow and Functions', duration: '2 weeks', lessons: 12 },
      { id: 3, title: 'Data Handling', duration: '2 weeks', lessons: 11 },
      { id: 4, title: 'Automation Mini Project', duration: '1 week', lessons: 5 },
    ],
    startDate: '2026-05-19',
    schedule: 'Mon, Wed, Fri - 6:30 PM to 8:00 PM IST',
    maxCapacity: 260,
    enrolled: 210,
  },
  {
    id: 3,
    title: 'Introduction to Programming with Scratch',
    category: 'Software Engineering',
    description: 'Visual programming for absolute beginners to learn logic, events, and sequences quickly.',
    longDescription: 'A beginner-first pathway for school students and non-technical learners to understand coding concepts through block-based development in Scratch and project storytelling.',
    duration: '4 weeks',
    level: 'Beginner',
    enrollment: 920,
    color: 'orange',
    mode: 'Online',
    price: 49,
    rating: 4.6,
    reviews: 214,
    provider: 'Scratch Foundation Learning Path',
    sourceUrl: 'https://scratch.mit.edu/ideas',
    instructor: {
      name: 'Neha Kapoor',
      avatar: '/avatars/admin-user.svg',
      bio: 'K-12 coding mentor specialized in visual computing and early CS instruction.',
    },
    learningOutcomes: [
      'Understand sequence, conditions, and loops',
      'Design interactive games and stories',
      'Break down tasks into reusable logic blocks',
      'Develop confidence before text-based coding',
    ],
    modules: [
      { id: 1, title: 'Scratch Interface', duration: '1 week', lessons: 6 },
      { id: 2, title: 'Logic Blocks', duration: '1 week', lessons: 8 },
      { id: 3, title: 'Interactive Projects', duration: '1 week', lessons: 7 },
      { id: 4, title: 'Final Showcase', duration: '1 week', lessons: 4 },
    ],
    startDate: '2026-05-25',
    schedule: 'Sat, Sun - 11:00 AM to 1:00 PM IST',
    maxCapacity: 150,
    enrolled: 96,
  },
  {
    id: 4,
    title: 'Introduction to Computer Science and Programming in Python',
    category: 'Software Engineering',
    description: 'MIT-style introduction connecting computational thinking with Python implementation.',
    longDescription: 'A rigorous and highly practical course inspired by MIT curriculum. Learners move from foundational concepts to algorithmic problem solving in Python with project-based assessments.',
    duration: '10 weeks',
    level: 'Intermediate',
    enrollment: 1480,
    color: 'blue',
    mode: 'Online',
    price: 129,
    rating: 4.9,
    reviews: 701,
    provider: 'MIT OpenCourseWare',
    sourceUrl: 'https://ocw.mit.edu/courses/6-0001-introduction-to-computer-science-and-programming-in-python-fall-2016/',
    instructor: {
      name: 'Dr. Kunal Verma',
      avatar: '/avatars/student-ravi.svg',
      bio: 'Former research engineer delivering CS and algorithmic foundations for higher education.',
    },
    learningOutcomes: [
      'Model real-world problems computationally',
      'Implement and test Pythonic solutions',
      'Evaluate performance and trade-offs',
      'Write robust, maintainable scripts',
    ],
    modules: [
      { id: 1, title: 'Problem Decomposition', duration: '2 weeks', lessons: 10 },
      { id: 2, title: 'Algorithm Design', duration: '3 weeks', lessons: 12 },
      { id: 3, title: 'Python for CS', duration: '3 weeks', lessons: 12 },
      { id: 4, title: 'Capstone Analysis', duration: '2 weeks', lessons: 6 },
    ],
    startDate: '2026-06-02',
    schedule: 'Tue, Thu - 8:00 PM to 10:00 PM IST',
    maxCapacity: 180,
    enrolled: 128,
  },
  {
    id: 5,
    title: 'Introduction to Electrical Engineering and Computer Science',
    category: 'Software Engineering',
    description: 'Cross-disciplinary fundamentals across circuits, computation, and software thinking.',
    longDescription: 'An interdisciplinary primer for ambitious learners who want a strong base in both EE and CS. Ideal for students targeting deep-tech careers and engineering programs.',
    duration: '12 weeks',
    level: 'Intermediate',
    enrollment: 780,
    color: 'teal',
    mode: 'Hybrid',
    price: 149,
    rating: 4.7,
    reviews: 288,
    provider: 'MIT OpenCourseWare',
    sourceUrl: 'https://ocw.mit.edu/courses/6-01sc-introduction-to-electrical-engineering-and-computer-science-i-spring-2011/',
    instructor: {
      name: 'Shreya Iyer',
      avatar: '/avatars/admin-user.svg',
      bio: 'Electronics and computing faculty member with industry projects in embedded systems.',
    },
    learningOutcomes: [
      'Connect hardware and software foundations',
      'Interpret basic circuit and signal behavior',
      'Implement simple computational models',
      'Build confidence for advanced engineering tracks',
    ],
    modules: [
      { id: 1, title: 'EE + CS Fundamentals', duration: '3 weeks', lessons: 10 },
      { id: 2, title: 'Signals and Systems', duration: '3 weeks', lessons: 11 },
      { id: 3, title: 'Computing Models', duration: '4 weeks', lessons: 12 },
      { id: 4, title: 'Integrated Project', duration: '2 weeks', lessons: 6 },
    ],
    startDate: '2026-06-05',
    schedule: 'Weekend Hybrid - Sat (Offline) + Sun (Online)',
    maxCapacity: 120,
    enrolled: 78,
  },
  {
    id: 6,
    title: 'Introduction to Artificial Intelligence with Python',
    category: 'AI & Machine Learning',
    description: 'Explore search, optimization, and core AI techniques implemented in Python.',
    longDescription: 'A practical introduction to artificial intelligence where learners implement classical AI methods in Python and understand modern AI workflows from first principles.',
    duration: '8 weeks',
    level: 'Intermediate',
    enrollment: 1320,
    color: 'violet',
    mode: 'Online',
    price: 139,
    rating: 4.9,
    reviews: 590,
    provider: 'Harvard / CS50 AI',
    sourceUrl: 'https://cs50.harvard.edu/ai/',
    instructor: {
      name: 'Ritika Jain',
      avatar: '/avatars/student-ravi.svg',
      bio: 'Applied AI practitioner focused on model-driven problem solving and model evaluation.',
    },
    learningOutcomes: [
      'Implement search and optimization algorithms',
      'Build rule-based and probabilistic models',
      'Understand model performance limitations',
      'Prototype AI workflows in Python notebooks',
    ],
    modules: [
      { id: 1, title: 'AI Problem Framing', duration: '2 weeks', lessons: 8 },
      { id: 2, title: 'Search and Logic', duration: '2 weeks', lessons: 10 },
      { id: 3, title: 'Learning Models', duration: '3 weeks', lessons: 12 },
      { id: 4, title: 'AI Application Sprint', duration: '1 week', lessons: 5 },
    ],
    startDate: '2026-06-10',
    schedule: 'Mon, Wed - 8:00 PM to 10:00 PM IST',
    maxCapacity: 180,
    enrolled: 136,
  },
  {
    id: 7,
    title: 'Machine Learning with Python: from Linear Models to Deep Learning',
    category: 'AI & Machine Learning',
    description: 'Comprehensive machine learning path from supervised learning to neural networks.',
    longDescription: 'A career-oriented ML course that starts with linear models and progresses toward deep learning workflows. Includes model validation, feature engineering, and deployment concepts.',
    duration: '12 weeks',
    level: 'Advanced',
    enrollment: 1100,
    color: 'rose',
    mode: 'Online',
    price: 179,
    rating: 4.8,
    reviews: 402,
    provider: 'MIT Professional Education Reference Track',
    sourceUrl: 'https://professional.mit.edu/course-catalog/machine-learning-python-linear-models-deep-learning',
    instructor: {
      name: 'Dr. Aditi Rao',
      avatar: '/avatars/admin-user.svg',
      bio: 'ML engineer and mentor with enterprise model lifecycle and MLOps experience.',
    },
    learningOutcomes: [
      'Train and compare ML models effectively',
      'Apply cross-validation and tuning strategies',
      'Build baseline deep learning architectures',
      'Prepare models for production contexts',
    ],
    modules: [
      { id: 1, title: 'Linear Models', duration: '3 weeks', lessons: 10 },
      { id: 2, title: 'Tree and Ensemble Methods', duration: '3 weeks', lessons: 10 },
      { id: 3, title: 'Deep Learning Core', duration: '4 weeks', lessons: 12 },
      { id: 4, title: 'Deployment and Monitoring', duration: '2 weeks', lessons: 6 },
    ],
    startDate: '2026-06-15',
    schedule: 'Tue, Thu - 8:30 PM to 10:30 PM IST',
    maxCapacity: 140,
    enrolled: 104,
  },
  {
    id: 8,
    title: 'Introduction to Data Science with Python',
    category: 'Data Science',
    description: 'Learn data wrangling, visualization, and statistical storytelling using Python tools.',
    longDescription: 'Designed for aspiring analysts and data professionals, this course covers data cleaning, visualization, and practical model-building with an emphasis on decision-driven insights.',
    duration: '8 weeks',
    level: 'Beginner',
    enrollment: 1540,
    color: 'cyan',
    mode: 'Online',
    price: 119,
    rating: 4.7,
    reviews: 468,
    provider: 'IBM / Coursera Data Science Foundations',
    sourceUrl: 'https://www.coursera.org/specializations/data-science-python',
    instructor: {
      name: 'Saurabh Menon',
      avatar: '/avatars/student-ravi.svg',
      bio: 'Data science lead helping teams build analytics products in finance and health domains.',
    },
    learningOutcomes: [
      'Handle missing and noisy datasets confidently',
      'Build exploratory visual analytics dashboards',
      'Apply basic regression and classification models',
      'Create insight-rich data reports',
    ],
    modules: [
      { id: 1, title: 'Data Preparation', duration: '2 weeks', lessons: 9 },
      { id: 2, title: 'Visualization and EDA', duration: '2 weeks', lessons: 10 },
      { id: 3, title: 'Modeling Basics', duration: '3 weeks', lessons: 12 },
      { id: 4, title: 'Insights Presentation', duration: '1 week', lessons: 4 },
    ],
    startDate: '2026-06-18',
    schedule: 'Mon, Wed, Fri - 7:30 PM to 9:00 PM IST',
    maxCapacity: 230,
    enrolled: 186,
  },
  {
    id: 9,
    title: 'Web Programming with Python and JavaScript',
    category: 'Web Development (Full Stack)',
    description: 'Build dynamic web applications using backend Python and frontend JavaScript stacks.',
    longDescription: 'A full-stack web programming program covering APIs, databases, frontend interactivity, and deployment. Students build and ship end-to-end projects by course completion.',
    duration: '10 weeks',
    level: 'Intermediate',
    enrollment: 1390,
    color: 'emerald',
    mode: 'Hybrid',
    price: 159,
    rating: 4.8,
    reviews: 512,
    provider: 'Harvard / CS50 Web',
    sourceUrl: 'https://cs50.harvard.edu/web/',
    instructor: {
      name: 'Farhan Qureshi',
      avatar: '/avatars/admin-user.svg',
      bio: 'Full-stack architect and mentor for scalable web products and developer teams.',
    },
    learningOutcomes: [
      'Build RESTful backend services in Python',
      'Create interactive frontend interfaces',
      'Integrate databases and authentication',
      'Deploy full-stack web apps reliably',
    ],
    modules: [
      { id: 1, title: 'HTTP and Backend Basics', duration: '2 weeks', lessons: 8 },
      { id: 2, title: 'Frontend Engineering', duration: '3 weeks', lessons: 12 },
      { id: 3, title: 'Database and Auth', duration: '3 weeks', lessons: 11 },
      { id: 4, title: 'Deployment Sprint', duration: '2 weeks', lessons: 6 },
    ],
    startDate: '2026-06-22',
    schedule: 'Tue, Thu, Sat - 7:00 PM to 9:00 PM IST',
    maxCapacity: 180,
    enrolled: 144,
  },
  {
    id: 10,
    title: 'Full Stack Open',
    category: 'Web Development (Full Stack)',
    description: 'Modern full-stack development with React, Node.js, testing, and production deployment.',
    longDescription: 'An intensive modern stack pathway focused on practical software engineering workflows. Learners work with React, backend APIs, testing, and CI/CD concepts.',
    duration: '10 weeks',
    level: 'Intermediate',
    enrollment: 1240,
    color: 'sky',
    mode: 'Online',
    price: 149,
    rating: 4.8,
    reviews: 390,
    provider: 'University of Helsinki',
    sourceUrl: 'https://fullstackopen.com/en/',
    instructor: {
      name: 'Devika Arora',
      avatar: '/avatars/student-ravi.svg',
      bio: 'Product engineer with deep expertise in React ecosystems and backend API design.',
    },
    learningOutcomes: [
      'Build modern SPAs with React',
      'Create Node and Express services',
      'Test and debug full-stack apps',
      'Ship production-ready projects',
    ],
    modules: [
      { id: 1, title: 'React and State', duration: '2 weeks', lessons: 10 },
      { id: 2, title: 'Node and APIs', duration: '3 weeks', lessons: 12 },
      { id: 3, title: 'Testing and Tooling', duration: '3 weeks', lessons: 10 },
      { id: 4, title: 'Production Deployment', duration: '2 weeks', lessons: 5 },
    ],
    startDate: '2026-06-26',
    schedule: 'Mon, Wed - 8:00 PM to 10:00 PM IST',
    maxCapacity: 200,
    enrolled: 156,
  },
  {
    id: 11,
    title: 'AWS Cloud Practitioner Essentials',
    category: 'Cloud Computing (AWS, Azure)',
    description: 'Understand cloud fundamentals, AWS core services, security, and pricing models.',
    longDescription: 'A certification-aligned cloud foundation course built around real-world architecture thinking and cloud economics. Perfect for students, developers, and business professionals entering cloud roles.',
    duration: '5 weeks',
    level: 'Beginner',
    enrollment: 1760,
    color: 'amber',
    mode: 'Online',
    price: 79,
    rating: 4.7,
    reviews: 604,
    provider: 'AWS Training and Certification',
    sourceUrl: 'https://aws.amazon.com/training/digital/aws-cloud-practitioner-essentials/',
    instructor: {
      name: 'Pranav Dixit',
      avatar: '/avatars/admin-user.svg',
      bio: 'Cloud consultant with certifications across AWS architecture and cloud operations.',
    },
    learningOutcomes: [
      'Understand cloud concepts and AWS global infrastructure',
      'Identify core AWS services by use case',
      'Apply security and shared responsibility principles',
      'Prepare for foundational certification exams',
    ],
    modules: [
      { id: 1, title: 'Cloud Concepts', duration: '1 week', lessons: 8 },
      { id: 2, title: 'Core AWS Services', duration: '2 weeks', lessons: 12 },
      { id: 3, title: 'Security and Pricing', duration: '1 week', lessons: 9 },
      { id: 4, title: 'Exam Readiness', duration: '1 week', lessons: 4 },
    ],
    startDate: '2026-07-01',
    schedule: 'Tue, Thu - 7:00 PM to 8:30 PM IST',
    maxCapacity: 280,
    enrolled: 232,
  },
  {
    id: 12,
    title: 'Google IT Support Professional Certificate',
    category: 'Cybersecurity',
    description: 'Job-ready IT support foundations across networking, systems, troubleshooting, and security.',
    longDescription: 'A practical support-oriented pathway covering core IT operations and security fundamentals. Great for learners targeting entry-level support and system administration tracks.',
    duration: '12 weeks',
    level: 'Beginner',
    enrollment: 1580,
    color: 'lime',
    mode: 'Online',
    price: 89,
    rating: 4.6,
    reviews: 450,
    provider: 'Google / Coursera',
    sourceUrl: 'https://www.coursera.org/professional-certificates/google-it-support',
    instructor: {
      name: 'Kriti Paul',
      avatar: '/avatars/student-ravi.svg',
      bio: 'IT systems mentor supporting learners into support engineering and operations roles.',
    },
    learningOutcomes: [
      'Diagnose hardware and software issues systematically',
      'Understand networking and system administration basics',
      'Apply foundational security and incident practices',
      'Prepare for entry-level IT support interviews',
    ],
    modules: [
      { id: 1, title: 'IT Fundamentals', duration: '3 weeks', lessons: 10 },
      { id: 2, title: 'Networking and OS', duration: '3 weeks', lessons: 11 },
      { id: 3, title: 'System Administration', duration: '3 weeks', lessons: 11 },
      { id: 4, title: 'Security and Capstone', duration: '3 weeks', lessons: 8 },
    ],
    startDate: '2026-07-04',
    schedule: 'Mon, Wed, Fri - 7:00 PM to 8:30 PM IST',
    maxCapacity: 240,
    enrolled: 188,
  },
  {
    id: 13,
    title: 'Computer Science for Business Professionals',
    category: 'Prompt Engineering / Generative AI',
    description: 'CS and AI literacy for founders, managers, and non-technical professionals.',
    longDescription: 'A business-first technical literacy course designed for decision makers. Covers software workflows, product architecture basics, and practical AI adoption frameworks.',
    duration: '6 weeks',
    level: 'Beginner',
    enrollment: 970,
    color: 'fuchsia',
    mode: 'Online',
    price: 99,
    rating: 4.7,
    reviews: 266,
    provider: 'Harvard Professional / CS50 Business Track',
    sourceUrl: 'https://pll.harvard.edu/course/cs50s-computer-science-business-professionals',
    instructor: {
      name: 'Nikhil Suri',
      avatar: '/avatars/admin-user.svg',
      bio: 'Product strategy advisor helping teams bridge business goals and technical execution.',
    },
    learningOutcomes: [
      'Communicate effectively with technical teams',
      'Evaluate software and AI project feasibility',
      'Use prompt and automation workflows productively',
      'Make better data-informed product decisions',
    ],
    modules: [
      { id: 1, title: 'CS Literacy for Leaders', duration: '2 weeks', lessons: 8 },
      { id: 2, title: 'Product and AI Workflows', duration: '2 weeks', lessons: 10 },
      { id: 3, title: 'Decision Frameworks', duration: '1 week', lessons: 6 },
      { id: 4, title: 'Business Case Studio', duration: '1 week', lessons: 4 },
    ],
    startDate: '2026-07-08',
    schedule: 'Tue, Thu - 8:00 PM to 9:30 PM IST',
    maxCapacity: 170,
    enrolled: 132,
  },
  {
    id: 14,
    title: 'Learn to Program: The Fundamentals',
    category: 'Quantum',
    description: 'A disciplined fundamentals course that builds transferable coding and logic habits.',
    longDescription: 'A robust introductory programming journey emphasizing precision, code quality, and systematic problem solving. Suitable for complete beginners preparing for deeper technical tracks.',
    duration: '7 weeks',
    level: 'Beginner',
    enrollment: 1280,
    color: 'purple',
    mode: 'Online',
    price: 69,
    rating: 4.6,
    reviews: 330,
    provider: 'University of Toronto / Coursera',
    sourceUrl: 'https://www.coursera.org/learn/learn-to-program',
    instructor: {
      name: 'Prof. Ananya Das',
      avatar: '/avatars/student-ravi.svg',
      bio: 'University instructor with a focus on beginner-friendly programming pedagogy.',
    },
    learningOutcomes: [
      'Read and write structured programs confidently',
      'Debug using repeatable reasoning processes',
      'Use functions and modular decomposition well',
      'Prepare for advanced software and AI paths',
    ],
    modules: [
      { id: 1, title: 'Programming Logic', duration: '2 weeks', lessons: 8 },
      { id: 2, title: 'Core Language Constructs', duration: '2 weeks', lessons: 10 },
      { id: 3, title: 'Functions and Data', duration: '2 weeks', lessons: 10 },
      { id: 4, title: 'Final Coding Challenge', duration: '1 week', lessons: 5 },
    ],
    startDate: '2026-07-12',
    schedule: 'Sat, Sun - 6:00 PM to 8:00 PM IST',
    maxCapacity: 220,
    enrolled: 178,
  },
]

export interface User {
  id: string
  name: string
  email: string
  role: 'student' | 'trainer' | 'admin'
  avatar: string
  completedCourses: number
  enrolledCourses: number
  totalHours: number
  certificates: number
}

export const mockUsers: { [key: string]: User } = {
  student1: {
    id: 'student1',
    name: 'Amit Shah',
    email: 'user@innoventa.com',
    role: 'student',
    avatar: '/avatars/student-ravi.svg',
    completedCourses: 3,
    enrolledCourses: 2,
    totalHours: 125,
    certificates: 2,
  },
}

export interface Enrollment {
  id: string
  userId: string
  courseId: number
  status: 'draft' | 'submitted' | 'under_review' | 'documents_pending' | 'approved' | 'rejected' | 'payment_pending' | 'enrolled'
  enrolledDate: string
  startDate: string
  completionPercentage: number
  modules: {
    moduleId: number
    completed: boolean
    progress: number
  }[]
}

export const mockEnrollments: Enrollment[] = [
  {
    id: 'enroll1',
    userId: 'student1',
    courseId: 6,
    status: 'enrolled',
    enrolledDate: '2026-03-15',
    startDate: '2026-03-20',
    completionPercentage: 68,
    modules: [
      { moduleId: 1, completed: true, progress: 100 },
      { moduleId: 2, completed: true, progress: 100 },
      { moduleId: 3, completed: false, progress: 44 },
      { moduleId: 4, completed: false, progress: 0 },
    ],
  },
  {
    id: 'enroll2',
    userId: 'student1',
    courseId: 9,
    status: 'enrolled',
    enrolledDate: '2026-04-02',
    startDate: '2026-04-06',
    completionPercentage: 41,
    modules: [
      { moduleId: 1, completed: true, progress: 100 },
      { moduleId: 2, completed: false, progress: 82 },
      { moduleId: 3, completed: false, progress: 0 },
      { moduleId: 4, completed: false, progress: 0 },
    ],
  },
]

export interface Certificate {
  id: string
  userId: string
  courseId: number
  courseName: string
  issuedDate: string
  certificateUrl: string
  certificateNumber: string
}

export const mockCertificates: Certificate[] = [
  {
    id: 'cert1',
    userId: 'student1',
    courseId: 2,
    courseName: 'Introduction to Programming with Python',
    issuedDate: '2026-02-15',
    certificateUrl: '/certificates/python-programming.pdf',
    certificateNumber: 'INNOV-PY-2026-014',
  },
  {
    id: 'cert2',
    userId: 'student1',
    courseId: 11,
    courseName: 'AWS Cloud Practitioner Essentials',
    issuedDate: '2026-01-20',
    certificateUrl: '/certificates/aws-cloud-practitioner.pdf',
    certificateNumber: 'INNOV-AWS-2026-006',
  },
]
