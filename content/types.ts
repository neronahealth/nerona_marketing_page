/**
 * Content Types for Landing Page
 * 
 * These types define the structure of all editable content on the landing page.
 * Non-developers can edit the corresponding JSON files in /content/data/
 */

import { LucideIcon } from "lucide-react";

// ============================================================
// HERO SECTION
// ============================================================

export interface HeroContent {
  badge: string;
  title: string;
  description: string;
  primaryCta: {
    text: string;
    href: string;
  };
  secondaryCta: {
    text: string;
    href: string;
  };
}

// ============================================================
// FEATURES
// ============================================================

export interface Feature {
  icon: string; // Lucide icon name (e.g., "Stethoscope", "Calendar")
  title: string;
  description: string;
  role?: "patient" | "doctor" | "hospital" | "dispatcher" | "admin";
}

export interface FeatureSection {
  title: string;
  description: string;
  features: Feature[];
}

// ============================================================
// TESTIMONIALS
// ============================================================

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company?: string;
  avatar?: string;
  rating: number; // 1-5
}

// ============================================================
// HOW IT WORKS
// ============================================================

export interface Step {
  number: number;
  title: string;
  description: string;
}

export interface HowItWorksSection {
  title: string;
  subtitle?: string;
  steps: Step[];
}

// ============================================================
// STATS
// ============================================================

export interface Stat {
  value: string;
  suffix?: string;
  prefix?: string;
  label: string;
}

// ============================================================
// PRICING
// ============================================================

export interface PricingTier {
  id: string;
  name: string;
  description: string;
  price: string;
  priceSuffix?: string; // e.g., "/month"
  features: string[];
  cta: {
    text: string;
    href: string;
  };
  highlighted?: boolean;
  badge?: string; // e.g., "Most Popular"
}

export interface PricingSection {
  title: string;
  description: string;
  tiers: PricingTier[];
}

// ============================================================
// TEAM MEMBERS
// ============================================================

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  avatar?: string;
  social?: {
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
}

// ============================================================
// FAQ
// ============================================================

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

// ============================================================
// NAVIGATION
// ============================================================

export interface NavLink {
  label: string;
  href: string;
  children?: NavLink[];
}

export interface NavigationContent {
  main: NavLink[];
  footer: {
    product: NavLink[];
    solutions: NavLink[];
    company: NavLink[];
    legal: NavLink[];
  };
  social: {
    name: string;
    href: string;
    icon: string;
  }[];
}

// ============================================================
// CALL TO ACTION
// ============================================================

export interface CTAContent {
  title: string;
  description: string;
  primaryCta: {
    text: string;
    href: string;
  };
  secondaryCta?: {
    text: string;
    href: string;
  };
  variant?: "primary" | "secondary" | "trust" | "patient" | "doctor" | "hospital";
}

// ============================================================
// FOOTER
// ============================================================

export interface FooterContent {
  company: {
    name: string;
    tagline: string;
    description: string;
  };
  contact: {
    address: string;
    phone: string;
    email: string;
  };
  newsletter?: {
    title: string;
    description: string;
  };
}

// ============================================================
// PAGE-SPECIFIC CONTENT
// ============================================================

export interface HomePageContent {
  hero: HeroContent;
  features: FeatureSection;
  testimonials: Testimonial[];
  cta: CTAContent;
}

export interface ForPatientsContent {
  hero: HeroContent;
  features: FeatureSection;
  steps: HowItWorksSection;
  cta: CTAContent;
  stats: Stat[];
}

export interface ForDoctorsContent {
  hero: HeroContent;
  features: FeatureSection;
  steps: HowItWorksSection;
  cta: CTAContent;
  stats: Stat[];
}

export interface ForHospitalsContent {
  hero: HeroContent;
  features: FeatureSection;
  steps: HowItWorksSection;
  cta: CTAContent;
  stats: Stat[];
}

export interface FeaturesPageContent {
  hero: HeroContent;
  sections: {
    id: string;
    title: string;
    description: string;
    features: Feature[];
  }[];
  cta: CTAContent;
}

export interface AboutPageContent {
  hero: HeroContent;
  mission: {
    title: string;
    description: string;
    values: {
      icon: string;
      title: string;
      description: string;
    }[];
  };
  team: TeamMember[];
  milestones: {
    year: string;
    title: string;
    description: string;
  }[];
}

export interface PricingPageContent {
  hero: HeroContent;
  pricing: PricingSection;
  faq: FAQItem[];
}

export interface ContactPageContent {
  hero: HeroContent;
  contactMethods: {
    icon: string;
    title: string;
    description: string;
    value: string;
    href: string;
  }[];
}

export interface CareersPageContent {
  hero: HeroContent;
  values: {
    icon: string;
    title: string;
    description: string;
  }[];
  jobs: {
    id: string;
    title: string;
    department: string;
    location: string;
    type: string;
    description: string;
    requirements: string[];
  }[];
}

export interface LegalPageContent {
  title: string;
  lastUpdated: string;
  sections: {
    heading: string;
    content: string;
  }[];
}

// ============================================================
// ROLE-BASED WORKFLOWS
// ============================================================

export interface WorkflowStep {
  icon: string;
  label: string;
  description: string;
  color?: "primary" | "secondary" | "accent" | "trust" | "emergency";
}

export interface RoleWorkflow {
  role: "patient" | "doctor" | "hospital" | "dispatcher";
  title: string;
  subtitle: string;
  steps: WorkflowStep[];
  stats: Stat[];
}