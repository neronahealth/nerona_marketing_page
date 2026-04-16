import fs from "fs";
import path from "path";
import {
  HomePageContent,
  ForPatientsContent,
  ForDoctorsContent,
  ForHospitalsContent,
  FeaturesPageContent,
  AboutPageContent,
  PricingPageContent,
  ContactPageContent,
  CareersPageContent,
  LegalPageContent,
  NavigationContent,
  FooterContent,
  Testimonial,
  FAQItem,
  PricingTier,
  TeamMember,
  Stat,
} from "./types";

const contentDir = path.join(process.cwd(), "content", "data");

function loadJSON<T>(filename: string): T {
  const filePath = path.join(contentDir, filename);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(fileContent) as T;
}

export function getHomeContent(): HomePageContent {
  return loadJSON<HomePageContent>("home.json");
}

export function getForPatientsContent(): ForPatientsContent {
  return loadJSON<ForPatientsContent>("for-patients.json");
}

export function getForDoctorsContent(): ForDoctorsContent {
  return loadJSON<ForDoctorsContent>("for-doctors.json");
}

export function getForHospitalsContent(): ForHospitalsContent {
  return loadJSON<ForHospitalsContent>("for-hospitals.json");
}

export function getFeaturesContent(): FeaturesPageContent {
  return loadJSON<FeaturesPageContent>("features.json");
}

export function getAboutContent(): AboutPageContent {
  return loadJSON<AboutPageContent>("about.json");
}

export function getPricingContent(): PricingPageContent {
  return loadJSON<PricingPageContent>("pricing.json");
}

export function getContactContent(): ContactPageContent {
  return loadJSON<ContactPageContent>("contact.json");
}

export function getCareersContent(): CareersPageContent {
  return loadJSON<CareersPageContent>("careers.json");
}

export function getLegalContent(page: string): LegalPageContent {
  return loadJSON<LegalPageContent>(`${page}.json`);
}

export function getNavigationContent(): NavigationContent {
  return loadJSON<NavigationContent>("navigation.json");
}

export function getFooterContent(): FooterContent {
  return loadJSON<FooterContent>("footer.json");
}

export function getTestimonials(): Testimonial[] {
  return loadJSON<Testimonial[]>("testimonials.json");
}

export function getFAQ(): FAQItem[] {
  return loadJSON<FAQItem[]>("faq.json");
}

export function getPricingTiers(): PricingTier[] {
  const content = loadJSON<PricingPageContent>("pricing.json");
  return content.pricing.tiers;
}

export function getTeamMembers(): TeamMember[] {
  const content = loadJSON<AboutPageContent>("about.json");
  return content.team;
}

export function getStats(page: string): Stat[] {
  const contentMap: Record<string, () => { stats: Stat[] }> = {
    "for-patients": getForPatientsContent,
    "for-doctors": getForDoctorsContent,
    "for-hospitals": getForHospitalsContent,
  };
  
  const loader = contentMap[page];
  if (!loader) return [];
  
  return loader().stats;
}