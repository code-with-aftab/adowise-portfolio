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
];

export default blogData;
