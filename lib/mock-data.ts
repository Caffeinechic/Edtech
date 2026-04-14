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

export const mockCourses: Course[] = [
  {
    id: 1,
    title: 'AI Fundamentals',
    category: 'Technology',
    description: 'Learn the basics of Artificial Intelligence, machine learning, and neural networks.',
    longDescription: 'A comprehensive introduction to artificial intelligence covering fundamental concepts, machine learning algorithms, neural networks, and practical applications in real-world scenarios. Perfect for beginners who want to understand the AI revolution.',
    duration: '25 hours',
    level: 'Beginner',
    enrollment: 234,
    color: 'from-blue-500 to-blue-600',
    mode: 'Online',
    price: 299,
    rating: 4.8,
    reviews: 156,
    instructor: {
      name: 'Dr. Rajesh Kumar',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=rajesh',
      bio: 'AI researcher with 10+ years of experience in machine learning and deep learning.',
    },
    learningOutcomes: [
      'Understand AI and machine learning fundamentals',
      'Learn different types of algorithms and their applications',
      'Build your first neural network',
      'Apply AI concepts to real-world problems',
    ],
    modules: [
      { id: 1, title: 'Introduction to AI', duration: '3 hours', lessons: 8 },
      { id: 2, title: 'Machine Learning Basics', duration: '6 hours', lessons: 15 },
      { id: 3, title: 'Neural Networks', duration: '8 hours', lessons: 12 },
      { id: 4, title: 'Practical Projects', duration: '8 hours', lessons: 6 },
    ],
    startDate: '2024-04-20',
    schedule: 'Mon, Wed, Fri - 6:00 PM to 8:00 PM',
    maxCapacity: 50,
    enrolled: 34,
  },
  {
    id: 2,
    title: 'Web Design Essentials',
    category: 'Design',
    description: 'Master modern web design principles, UI/UX best practices, and design tools.',
    longDescription: 'Learn to create stunning, user-centered web designs. This course covers design principles, wireframing, prototyping, and tools like Figma. Ideal for anyone wanting to start a career in web design.',
    duration: '25 hours',
    level: 'Beginner',
    enrollment: 189,
    color: 'from-purple-500 to-purple-600',
    mode: 'Hybrid',
    price: 349,
    rating: 4.9,
    reviews: 124,
    instructor: {
      name: 'Priya Sharma',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=priya',
      bio: 'Award-winning UX/UI designer with experience at leading tech companies.',
    },
    learningOutcomes: [
      'Master web design principles and best practices',
      'Create wireframes and prototypes using industry tools',
      'Understand user-centered design methodology',
      'Build a professional design portfolio',
    ],
    modules: [
      { id: 1, title: 'Design Fundamentals', duration: '4 hours', lessons: 10 },
      { id: 2, title: 'Wireframing & Prototyping', duration: '6 hours', lessons: 12 },
      { id: 3, title: 'UI/UX Best Practices', duration: '7 hours', lessons: 14 },
      { id: 4, title: 'Portfolio Projects', duration: '8 hours', lessons: 4 },
    ],
    startDate: '2024-04-22',
    schedule: 'Tue, Thu - 5:00 PM to 7:00 PM (Online) + Sat 10:00 AM to 1:00 PM (Offline)',
    maxCapacity: 40,
    enrolled: 28,
  },
  {
    id: 3,
    title: 'Data Science Basics',
    category: 'Technology',
    description: 'Introduction to data analysis, visualization, and statistical thinking.',
    longDescription: 'Start your data science journey with this comprehensive course on data analysis, visualization techniques, and statistical methods. Learn with Python and real datasets.',
    duration: '25 hours',
    level: 'Beginner',
    enrollment: 312,
    color: 'from-orange-500 to-orange-600',
    mode: 'Online',
    price: 329,
    rating: 4.7,
    reviews: 198,
    instructor: {
      name: 'Amit Patel',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=amit',
      bio: 'Data scientist with 8+ years experience in analytics and big data.',
    },
    learningOutcomes: [
      'Master data analysis and visualization techniques',
      'Understand statistical concepts and hypothesis testing',
      'Learn Python for data science',
      'Create meaningful insights from data',
    ],
    modules: [
      { id: 1, title: 'Data Fundamentals', duration: '3 hours', lessons: 9 },
      { id: 2, title: 'Statistical Analysis', duration: '6 hours', lessons: 13 },
      { id: 3, title: 'Data Visualization', duration: '8 hours', lessons: 11 },
      { id: 4, title: 'Real-world Projects', duration: '8 hours', lessons: 5 },
    ],
    startDate: '2024-04-25',
    schedule: 'Daily 7:00 PM to 8:30 PM',
    maxCapacity: 60,
    enrolled: 45,
  },
  {
    id: 4,
    title: 'Professional Communication',
    category: 'Business',
    description: 'Develop effective communication skills for the modern workplace.',
    longDescription: 'Enhance your communication abilities with practical techniques for presentations, negotiations, and team collaboration. Essential for career growth.',
    duration: '25 hours',
    level: 'Beginner',
    enrollment: 156,
    color: 'from-green-500 to-green-600',
    mode: 'Offline',
    price: 279,
    rating: 4.6,
    reviews: 87,
    instructor: {
      name: 'Neha Singh',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=neha',
      bio: 'Communication coach and organizational development specialist.',
    },
    learningOutcomes: [
      'Master presentation and public speaking skills',
      'Develop effective listening and feedback skills',
      'Improve written communication',
      'Navigate difficult conversations professionally',
    ],
    modules: [
      { id: 1, title: 'Communication Fundamentals', duration: '4 hours', lessons: 10 },
      { id: 2, title: 'Presentation Skills', duration: '6 hours', lessons: 12 },
      { id: 3, title: 'Interpersonal Communication', duration: '7 hours', lessons: 13 },
      { id: 4, title: 'Practical Exercises', duration: '8 hours', lessons: 8 },
    ],
    startDate: '2024-04-28',
    schedule: 'Sat & Sun 10:00 AM to 1:00 PM',
    maxCapacity: 30,
    enrolled: 22,
  },
  {
    id: 5,
    title: 'Digital Marketing Fundamentals',
    category: 'Marketing',
    description: 'Explore digital marketing strategies, SEO, social media, and analytics.',
    longDescription: 'Learn the complete digital marketing landscape including SEO, SEM, social media marketing, content strategy, and analytics. Practical strategies you can implement immediately.',
    duration: '25 hours',
    level: 'Beginner',
    enrollment: 287,
    color: 'from-red-500 to-red-600',
    mode: 'Hybrid',
    price: 319,
    rating: 4.8,
    reviews: 142,
    instructor: {
      name: 'Vikram Desai',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=vikram',
      bio: 'Digital marketing expert with successful campaigns for Fortune 500 companies.',
    },
    learningOutcomes: [
      'Understand digital marketing strategy and planning',
      'Master SEO and SEM fundamentals',
      'Learn social media marketing tactics',
      'Analyze and optimize marketing campaigns',
    ],
    modules: [
      { id: 1, title: 'Digital Marketing Overview', duration: '3 hours', lessons: 8 },
      { id: 2, title: 'SEO & SEM Strategies', duration: '6 hours', lessons: 14 },
      { id: 3, title: 'Social Media Marketing', duration: '8 hours', lessons: 12 },
      { id: 4, title: 'Analytics & Optimization', duration: '8 hours', lessons: 6 },
    ],
    startDate: '2024-04-30',
    schedule: 'Wed, Fri - 6:00 PM to 8:00 PM (Online) + Sat 2:00 PM to 5:00 PM (Offline)',
    maxCapacity: 45,
    enrolled: 31,
  },
  {
    id: 6,
    title: 'Coding for Beginners',
    category: 'Technology',
    description: 'Start your coding journey with Python and problem-solving fundamentals.',
    longDescription: 'A beginner-friendly introduction to programming using Python. Learn syntax, logic, and solve real problems. No prior experience needed.',
    duration: '25 hours',
    level: 'Beginner',
    enrollment: 401,
    color: 'from-indigo-500 to-indigo-600',
    mode: 'Online',
    price: 289,
    rating: 4.9,
    reviews: 267,
    instructor: {
      name: 'Anil Sharma',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=anil',
      bio: 'Software engineer and coding instructor with 12+ years of industry experience.',
    },
    learningOutcomes: [
      'Learn Python syntax and fundamentals',
      'Solve problems using programming logic',
      'Understand object-oriented programming',
      'Build simple projects and applications',
    ],
    modules: [
      { id: 1, title: 'Python Basics', duration: '4 hours', lessons: 11 },
      { id: 2, title: 'Control Flow & Logic', duration: '5 hours', lessons: 10 },
      { id: 3, title: 'Data Structures', duration: '8 hours', lessons: 13 },
      { id: 4, title: 'Mini Projects', duration: '8 hours', lessons: 5 },
    ],
    startDate: '2024-05-01',
    schedule: 'Mon, Tue, Wed, Thu - 7:00 PM to 8:00 PM',
    maxCapacity: 50,
    enrolled: 42,
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
    name: 'Ravi Kumar',
    email: 'ravi.kumar@email.com',
    role: 'student',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ravi',
    completedCourses: 3,
    enrolledCourses: 2,
    totalHours: 125,
    certificates: 3,
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
    courseId: 1,
    status: 'enrolled',
    enrolledDate: '2024-03-15',
    startDate: '2024-03-20',
    completionPercentage: 65,
    modules: [
      { moduleId: 1, completed: true, progress: 100 },
      { moduleId: 2, completed: true, progress: 100 },
      { moduleId: 3, completed: false, progress: 30 },
      { moduleId: 4, completed: false, progress: 0 },
    ],
  },
  {
    id: 'enroll2',
    userId: 'student1',
    courseId: 6,
    status: 'enrolled',
    enrolledDate: '2024-04-01',
    startDate: '2024-04-05',
    completionPercentage: 40,
    modules: [
      { moduleId: 1, completed: true, progress: 100 },
      { moduleId: 2, completed: false, progress: 80 },
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
    courseName: 'Web Design Essentials',
    issuedDate: '2024-02-15',
    certificateUrl: '/certificates/web-design.pdf',
    certificateNumber: 'INNOV-WEB-2024-001',
  },
  {
    id: 'cert2',
    userId: 'student1',
    courseId: 4,
    courseName: 'Professional Communication',
    issuedDate: '2024-01-20',
    certificateUrl: '/certificates/communication.pdf',
    certificateNumber: 'INNOV-COMM-2024-001',
  },
  {
    id: 'cert3',
    userId: 'student1',
    courseId: 5,
    courseName: 'Digital Marketing Fundamentals',
    issuedDate: '2023-12-10',
    certificateUrl: '/certificates/marketing.pdf',
    certificateNumber: 'INNOV-MARK-2023-001',
  },
]
