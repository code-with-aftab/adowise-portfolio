import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "How to Level Up Your Web Development Skills in 2025",
    paragraph:
      "A complete guide to learning modern web development with a focus on hands-on projects, structured learning, and mastering core fundamentals.",
    image: "https://img.freepik.com/free-vector/web-development-concept-with-programmer-ar_107791-17049.jpg?semt=ais_se_enriched&w=740&q=80",
    author: {
      name: "Mahtab",
      image: "/images/blog/author-01.png",
      designation: "Web Developer",
    },
    tags: ["webdev", "learning"],
    publishDate: "2025",
  },
  {
    id: 2,
    title: "Boost Your UI Design Skills With These Simple Techniques",
    paragraph:
      "UI design becomes easier when you follow layout patterns, spacing rules, and color system principles. These tips improve your UI instantly.",
    image: "https://img.freepik.com/free-vector/gradient-style-ui-ux-background_52683-69621.jpg?semt=ais_hybrid&w=740&q=80",
    author: {
      name: "priya verma",
      image: "/images/blog/author-02.png",
      designation: "Frontend Developer",
    },
    tags: ["design", "ui"],
    publishDate: "2025",
  },
  {
    id: 3,
    title: "Faster Development With Reusable Components in Next.js",
    paragraph:
      "Using reusable UI elements saves hours of coding time. Learn how to design and structure components for speed and scalability.",
    image: "https://codewithmosh.com/_next/image?url=https%3A%2F%2Fuploads.teachablecdn.com%2Fattachments%2F0dKhU49vRbiSSWknbHAR_1920X1357.jpg&w=3840&q=75",
    author: {
      name: "Arman Ali",
      image: "/images/blog/author-03.png",
      designation: "Full-Stack Learner",
    },
    tags: ["nextjs", "productivity"],
    publishDate: "2025",
  },
  // New amazing blog posts
  {
    id: 4,
    title: "Mastering AI Integration: Practical Guide for Full-Stack Developers",
    paragraph:
      "Learn how to integrate AI APIs, build intelligent features, and create next-generation applications with practical examples using OpenAI, Claude, and local LLMs.",
    image: "https://img.freepik.com/free-vector/artificial-intelligence-ai-innovation-background_53876-118300.jpg?semt=ais_se_enriched&w=740&q=80",
    author: {
      name: "Alex Chen",
      image: "/images/blog/author-04.png",
      designation: "AI Engineer",
    },
    tags: ["ai", "fullstack", "innovation"],
    publishDate: "2025",
  },
  {
    id: 5,
    title: "The Ultimate Performance Optimization Checklist for React Apps",
    paragraph:
      "From code splitting to memoization, discover 15 proven techniques to make your React applications lightning fast and deliver exceptional user experience.",
    image: "https://img.freepik.com/free-vector/optimization-concept-illustration_114360-2359.jpg?semt=ais_se_enriched&w=740&q=80",
    author: {
      name: "Sarah Johnson",
      image: "/images/blog/author-05.png",
      designation: "Senior React Developer",
    },
    tags: ["react", "performance", "optimization"],
    publishDate: "2025",
  },
  {
    id: 6,
    title: "Building Scalable Backends with Serverless Architecture",
    paragraph:
      "Learn how to design and implement serverless backends that scale automatically, reduce costs, and simplify deployment using AWS Lambda and Cloud Functions.",
    image: "https://img.freepik.com/free-vector/serverless-architecture-concept-illustration_114360-12176.jpg?semt=ais_se_enriched&w=740&q=80",
    author: {
      name: "Michael Rodriguez",
      image: "/images/blog/author-06.png",
      designation: "Cloud Architect",
    },
    tags: ["backend", "serverless", "cloud"],
    publishDate: "2025",
  },
  {
    id: 7,
    title: "TypeScript Pro Tips: Advanced Patterns for Enterprise Applications",
    paragraph:
      "Go beyond basic TypeScript. Learn advanced type manipulation, conditional types, generics, and patterns used by top tech companies to build robust applications.",
    image: "https://img.freepik.com/free-vector/code-typing-concept-illustration_114360-3581.jpg?semt=ais_se_enriched&w=740&q=80",
    author: {
      name: "David Kim",
      image: "/images/blog/author-07.png",
      designation: "TypeScript Expert",
    },
    tags: ["typescript", "advanced", "enterprise"],
    publishDate: "2025",
  },
  {
    id: 8,
    title: "The Future of Web Development: WebAssembly and Beyond",
    paragraph:
      "Explore how WebAssembly is revolutionizing web applications, enabling near-native performance, and opening doors to new programming languages on the web.",
    image: "https://img.freepik.com/free-vector/future-technology-background-with-circuit-board_53876-117805.jpg?semt=ais_se_enriched&w=740&q=80",
    author: {
      name: "Emma Watson",
      image: "/images/blog/author-08.png",
      designation: "Web Platform Advocate",
    },
    tags: ["webassembly", "future", "performance"],
    publishDate: "2025",
  },
  {
    id: 9,
    title: "Accessibility First: Building Inclusive Web Applications",
    paragraph:
      "Learn essential accessibility practices that make your applications usable by everyone. Discover tools, techniques, and mindset shifts for inclusive design.",
    image: "https://img.freepik.com/free-vector/accessible-internet-concept-illustration_114360-9519.jpg?semt=ais_se_enriched&w=740&q=80",
    author: {
      name: "Lisa Park",
      image: "/images/blog/author-09.png",
      designation: "Accessibility Specialist",
    },
    tags: ["accessibility", "inclusive", "best-practices"],
    publishDate: "2025",
  },
  {
    id: 10,
    title: "Monorepo Mastery: Turbocharge Your Development Workflow",
    paragraph:
      "Discover how monorepos with tools like Turborepo and Nx can dramatically improve code sharing, collaboration, and deployment across large projects.",
    image: "https://img.freepik.com/free-vector/programming-concept-illustration_114360-1217.jpg?semt=ais_se_enriched&w=740&q=80",
    author: {
      name: "Tom Wilson",
      image: "/images/blog/author-10.png",
      designation: "DevOps Engineer",
    },
    tags: ["monorepo", "devops", "productivity"],
    publishDate: "2025",
  },
  {
    id: 11,
    title: "State Management in 2025: Beyond Redux and Context",
    paragraph:
      "Explore modern state management solutions like Zustand, Jotai, and Signals. Learn when to use each and how to choose the right tool for your project.",
    image: "https://img.freepik.com/free-vector/data-analysis-concept-illustration_114360-1235.jpg?semt=ais_se_enriched&w=740&q=80",
    author: {
      name: "Robert Chen",
      image: "/images/blog/author-11.png",
      designation: "Frontend Architect",
    },
    tags: ["state-management", "react", "modern"],
    publishDate: "2025",
  },
  {
    id: 12,
    title: "From Junior to Senior: Navigating Your Developer Career Path",
    paragraph:
      "A practical guide to leveling up in your career. Learn the skills, mindset, and strategies that differentiate senior developers from juniors.",
    image: "https://img.freepik.com/free-vector/career-development-concept-illustration_114360-6737.jpg?semt=ais_se_enriched&w=740&q=80",
    author: {
      name: "Sophia Martinez",
      image: "/images/blog/author-12.png",
      designation: "Tech Lead",
    },
    tags: ["career", "growth", "soft-skills"],
    publishDate: "2025",
  },
  {
    id: 13,
    title: "Agentic AI: The Next Frontier in Enterprise Automation",
    paragraph:
      "Explore how autonomous AI agents are performing complex tasks, from coding to customer support, powered by RAG and advanced LLMs like Claude and Gemini.",
    image: "https://img.freepik.com/free-vector/ai-technology-concept-illustration_114360-123.jpg",
    author: {
      name: "Adowise Labs",
      image: "/images/blog/author-01.png",
      designation: "AI Strategist",
    },
    tags: ["agentic-ai", "automation", "claude"],
    publishDate: "2026",
  },
  {
    id: 14,
    title: "Sora & The Revolution of AI Video Generation",
    paragraph:
      "Analyzing the impact of Sora, Runway, and Luma on the creative industry. How AI video generators are changing cinema, marketing, and storytelling in 2026.",
    image: "https://img.freepik.com/free-vector/video-production-concept-illustration_114360-1234.jpg",
    author: {
      name: "Visual Team",
      image: "/images/blog/author-02.png",
      designation: "Creative Director",
    },
    tags: ["sora", "ai-video", "future"],
    publishDate: "2026",
  },
  {
    id: 15,
    title: "SpaceX Starship, Artemis, and the New Space Economy",
    paragraph:
      "From lunar bases to Mars missions, explore how SpaceX and NASA's Artemis are opening up commercial space manufacturing and asteroid mining opportunities.",
    image: "https://img.freepik.com/free-vector/space-exploration-concept-illustration_114360-1235.jpg",
    author: {
      name: "Tech News",
      image: "/images/blog/author-03.png",
      designation: "Innovation Analyst",
    },
    tags: ["spacex", "artemis", "science"],
    publishDate: "2026",
  },
  {
    id: 16,
    title: "DeFi 2.0 and the Future of Embedded Finance",
    paragraph:
      "A deep dive into Decentralized Finance (DeFi), CBDCs, and how Buy Now Pay Later (BNPL) is reshaping the global economy and digital transactions.",
    image: "https://img.freepik.com/free-vector/digital-economy-concept-illustration_114360-1236.jpg",
    author: {
      name: "FinTech Hub",
      image: "/images/blog/author-04.png",
      designation: "Finance Expert",
    },
    tags: ["defi", "finance", "crypto"],
    publishDate: "2026",
  },
];

export default blogData;