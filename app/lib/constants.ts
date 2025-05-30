  import { Github, Facebook, Twitter, Linkedin, Mail, Code, Palette,  Zap } from "lucide-react"
  
  export const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.",
      image: "/placeholder.svg?height=300&width=400",
      skills: ["React", "Node.js", "MongoDB", "Stripe"],
      type: "For Sale",
      link: "#",
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates and team collaboration features.",
      image: "/placeholder.svg?height=300&width=400",
      skills: ["Next.js", "TypeScript", "Prisma", "Socket.io"],
      type: "For Display",
      link: "#",
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "A responsive weather dashboard with location-based forecasts and interactive charts.",
      image: "/placeholder.svg?height=300&width=400",
      skills: ["Vue.js", "Chart.js", "API Integration", "CSS3"],
      type: "For Display",
      link: "#",
    },
  ]

  export const socialLinks = [
    { name: "GitHub", icon: Github, url: "https://github.com" },
    { name: "LinkedIn", icon: Linkedin, url: "https://linkedin.com" },
    { name: "Twitter", icon: Twitter, url: "https://twitter.com" },
    { name: "Facebook", icon: Facebook, url: "https://facebook.com" },
    { name: "Email", icon: Mail, url: "mailto:your.email@example.com" },
  ]

  export const skills = [
    { name: "Frontend Development", icon: Code, description: "React, Next.js, Vue.js" },
    { name: "UI/UX Design", icon: Palette, description: "Figma, Adobe XD, Sketch" },
    { name: "Performance", icon: Zap, description: "Optimization, SEO, Analytics" },
  ]


  export const projectsShowcase = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.",
    image: "/placeholder.svg?height=300&width=400",
    skills: ["React", "Node.js", "MongoDB", "Stripe"],
    type: "For Sale",
    price: "$2,500",
    category: "Web Development",
  },
  {
    id: 2,
    title: "Mobile Fitness App",
    description: "Cross-platform fitness tracking app with workout plans, progress tracking, and social features.",
    image: "/placeholder.svg?height=300&width=400",
    skills: ["React Native", "Firebase", "Redux", "TypeScript"],
    type: "Showcase",
    category: "Mobile Development",
  },
  {
    id: 3,
    title: "AI Dashboard Analytics",
    description: "Advanced analytics dashboard with machine learning insights and real-time data visualization.",
    image: "/placeholder.svg?height=300&width=400",
    skills: ["Python", "TensorFlow", "D3.js", "PostgreSQL"],
    type: "For Sale",
    price: "$3,200",
    category: "AI/ML",
  },
  {
    id: 4,
    title: "Blockchain Wallet",
    description: "Secure cryptocurrency wallet with multi-chain support and DeFi integration capabilities.",
    image: "/placeholder.svg?height=300&width=400",
    skills: ["Solidity", "Web3.js", "React", "Ethereum"],
    type: "Showcase",
    category: "Blockchain",
  },
  {
    id: 5,
    title: "Gaming Platform",
    description: "Multiplayer gaming platform with real-time chat, tournaments, and leaderboard systems.",
    image: "/placeholder.svg?height=300&width=400",
    skills: ["Unity", "C#", "Socket.io", "Redis"],
    type: "For Sale",
    price: "$4,000",
    category: "Game Development",
  },
  {
    id: 6,
    title: "DevOps Automation Tool",
    description: "CI/CD pipeline automation tool with Docker containerization and cloud deployment features.",
    image: "/placeholder.svg?height=300&width=400",
    skills: ["Docker", "Kubernetes", "AWS", "Jenkins"],
    type: "Showcase",
    category: "DevOps",
  },
]

