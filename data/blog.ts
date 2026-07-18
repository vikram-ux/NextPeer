import {
  Code2,
  Globe,
  Bot,
  Braces,
  Target,
  Compass,
  Trophy,
  GraduationCap,
  Newspaper,
  Brain,
  GitCompareArrows,
  ListChecks,
  FileWarning,
  GitBranch,
  Sparkles,
  FileText,
  BookOpen,
  Map,
  StickyNote,
  BookMarked,
} from "lucide-react";
import type {
  BlogCategory,
  BlogPost,
  FeaturedPost,
  TrendingTopic,
  FreeResource,
} from "@/types";

export const BLOG_CATEGORIES: BlogCategory[] = [
  { slug: "programming", label: "Programming", icon: Code2 },
  { slug: "web-development", label: "Web Development", icon: Globe },
  { slug: "artificial-intelligence", label: "Artificial Intelligence", icon: Bot },
  { slug: "dsa", label: "DSA", icon: Braces },
  { slug: "interview-preparation", label: "Interview Preparation", icon: Target },
  { slug: "career-guidance", label: "Career Guidance", icon: Compass },
  { slug: "success-stories", label: "Success Stories", icon: Trophy },
  { slug: "student-resources", label: "Student Resources", icon: GraduationCap },
  { slug: "industry-news", label: "Industry News", icon: Newspaper },
];

export const FEATURED_POST: FeaturedPost = {
  slug: "complete-roadmap-software-engineer-2026",
  title: "The Complete Roadmap to Become a Software Engineer in 2026",
  excerpt:
    "Learn everything from programming fundamentals to DSA, development, AI, projects, GitHub, resume building, and interview preparation.",
  tags: ["Career", "DSA", "AI", "Roadmap"],
  readTime: "12 Minutes",
};

export const LATEST_ARTICLES: BlogPost[] = [
  {
    slug: "why-dsa-still-matters-in-the-ai-era",
    number: 1,
    title: "Why DSA Still Matters in the AI Era",
    excerpt: "Master problem-solving skills that every software company looks for.",
    gradient: "from-indigo-950 via-purple-950 to-slate-900",
    icon: Brain,
    readTime: "8 min read",
  },
  {
    slug: "mern-vs-nextjs-which-should-you-learn-first",
    number: 2,
    title: "MERN Stack vs Next.js: Which Should You Learn First?",
    excerpt: "A detailed comparison for beginners and professionals.",
    gradient: "from-slate-900 via-emerald-950 to-slate-900",
    icon: GitCompareArrows,
    readTime: "10 min read",
  },
  {
    slug: "top-50-coding-interview-questions",
    number: 3,
    title: "Top 50 Coding Interview Questions Asked in Product Companies",
    excerpt: "Practice the most frequently asked interview questions.",
    gradient: "from-blue-950 via-slate-900 to-slate-900",
    icon: ListChecks,
    readTime: "15 min read",
  },
  {
    slug: "resume-mistakes-costing-you-interviews",
    number: 4,
    title: "Resume Mistakes That Are Costing You Interviews",
    excerpt: "Avoid these common mistakes and get shortlisted faster.",
    gradient: "from-slate-900 via-rose-950 to-slate-900",
    icon: FileWarning,
    readTime: "6 min read",
  },
  {
    slug: "git-github-explained-like-a-beginner",
    number: 5,
    title: "Git & GitHub Explained Like You're a Beginner",
    excerpt: "Everything you need to know to collaborate on real-world projects.",
    gradient: "from-slate-950 via-slate-800 to-slate-900",
    icon: GitBranch,
    readTime: "7 min read",
  },
  {
    slug: "ai-tools-every-student-should-learn",
    number: 6,
    title: "AI Tools Every Student Should Learn",
    excerpt: "Explore tools that can boost productivity, coding, and learning.",
    gradient: "from-cyan-950 via-blue-950 to-slate-900",
    icon: Sparkles,
    readTime: "9 min read",
  },
];

export const TRENDING_TOPICS: TrendingTopic[] = [
  { label: "JavaScript" },
  { label: "React" },
  { label: "Python" },
  { label: "AI" },
  { label: "Machine Learning" },
  { label: "System Design" },
  { label: "Node.js" },
  { label: "SQL" },
  { label: "Aptitude" },
  { label: "Placement Tips" },
];

export const FREE_RESOURCES: FreeResource[] = [
  { icon: FileText, label: "Resume Templates" },
  { icon: BookOpen, label: "Interview Preparation Guide" },
  { icon: StickyNote, label: "DSA Cheat Sheet" },
  { icon: Map, label: "Web Development Roadmap" },
  { icon: FileText, label: "JavaScript Notes" },
  { icon: BookMarked, label: "Python Handbook" },
];
