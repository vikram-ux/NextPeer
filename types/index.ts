import { LucideIcon } from "lucide-react";

export interface NavLink {
  label: string;
  href: string;
}

export interface FloatingCard {
  icon: LucideIcon;
  title: string;
  description: string;
  badge?: string;
}

export interface FeatureHighlight {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface Stat {
  icon: LucideIcon;
  value: string;
  label: string;
}

export interface Testimonial {
  name: string;
  placement: string;
  quote: string;
  rating: number;
  initials: string;
}

export interface FooterLinkGroup {
  title: string;
  links: NavLink[];
}
