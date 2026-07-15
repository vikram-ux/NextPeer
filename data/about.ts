import {
  Target,
  Eye,
  BookOpen,
  Code2,
  Users,
  Briefcase,
  Award,
  Monitor,
  Trophy,
  Lightbulb,
  ShieldCheck,
  Users2,
  GraduationCap,
  UserCheck,
  Building2,
  Repeat,
  Cpu,
  Database,
  Rocket,
  CheckCircle2,
  LayoutGrid,
  Globe,
  BrainCircuit,
  BarChart3,
  Cloud,
  Lock,
  Palette,
  Megaphone,
} from "lucide-react";
import type {
  DifferentiatorCard,
  CoreValue,
  AudienceItem,
  ProgramAreaItem,
  CTAPill,
} from "@/types";

export const ABOUT_MISSION_VISION = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To empower students and professionals with practical, job-ready skills through high-quality learning experiences, expert mentorship, and industry-relevant projects.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description:
      "To become India's most trusted career-focused learning platform by helping millions of learners transform their potential into successful careers.",
  },
];

export const ABOUT_DIFFERENTIATORS: DifferentiatorCard[] = [
  {
    icon: BookOpen,
    title: "Industry-Oriented Curriculum",
    description:
      "Our programs are designed according to current industry requirements so you learn what companies actually expect.",
  },
  {
    icon: Code2,
    title: "Learn by Building",
    description:
      "Work on real projects, assignments, and case studies instead of only watching lectures.",
  },
  {
    icon: Users,
    title: "Expert Mentorship",
    description:
      "Learn directly from experienced professionals who have worked in leading companies and understand the industry.",
  },
  {
    icon: Briefcase,
    title: "Career Support",
    description:
      "Receive resume guidance, interview preparation, portfolio reviews, and career mentorship to increase your hiring potential.",
  },
  {
    icon: Award,
    title: "Recognized Certificates",
    description:
      "Earn professional certificates upon successful completion of your programs that showcase your achievements.",
  },
  {
    icon: Monitor,
    title: "Flexible Learning",
    description:
      "Study anytime, anywhere with lifetime access to program materials and regular content updates.",
  },
];

export const ABOUT_PHILOSOPHY = [
  "Skills matter more than memorization.",
  "Practice creates confidence.",
  "Mentorship accelerates growth.",
  "Real projects build real experience.",
  "Learning should never stop.",
];

export const ABOUT_CORE_VALUES: CoreValue[] = [
  {
    icon: Trophy,
    title: "Excellence",
    description:
      "We strive to deliver high-quality education and exceptional learner experiences.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We continuously improve our content and teaching methods to match the evolving tech industry.",
  },
  {
    icon: ShieldCheck,
    title: "Integrity",
    description:
      "Transparency, honesty, and learner success are at the center of everything we do.",
  },
  {
    icon: Users2,
    title: "Community",
    description:
      "Learning becomes more impactful when students grow together through collaboration and support.",
  },
];

export const ABOUT_AUDIENCE: AudienceItem[] = [
  { icon: GraduationCap, label: "College Students" },
  { icon: UserCheck, label: "Fresh Graduates" },
  { icon: Building2, label: "Working Professionals" },
  { icon: Repeat, label: "Career Switchers" },
  { icon: Cpu, label: "Aspiring Software Engineers" },
  { icon: Database, label: "Data & AI Enthusiasts" },
  { icon: Rocket, label: "Future Entrepreneurs" },
];

export const ABOUT_PROGRAM_AREAS: ProgramAreaItem[] = [
  { icon: LayoutGrid, label: "Data Structures & Algorithms" },
  { icon: Globe, label: "Full Stack Development" },
  { icon: BrainCircuit, label: "Artificial Intelligence" },
  { icon: Cpu, label: "Machine Learning" },
  { icon: BarChart3, label: "Data Science" },
  { icon: Cloud, label: "Cloud Computing" },
  { icon: Lock, label: "Cybersecurity" },
  { icon: Palette, label: "UI/UX Design" },
  { icon: Target, label: "Aptitude & Placement Preparation" },
  { icon: Megaphone, label: "Career Development" },
];

export const ABOUT_CTA_PILLS: CTAPill[] = [
  { icon: CheckCircle2, label: "Practical Learning" },
  { icon: Users, label: "Expert Mentorship" },
  { icon: Trophy, label: "Career Success" },
];
