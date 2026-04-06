"use client";

import { Hero } from "@/components/sections/hero";
import { FeatureGrid } from "@/components/sections/feature-grid";
import { HowItWorks } from "@/components/sections/how-it-works";
import { CTASection } from "@/components/sections/cta";
import {
  Stethoscope,
  Calendar,
  FileText,
  MapPin,
  Shield,
  Phone,
} from "lucide-react";

const patientFeatures = [
  {
    icon: Stethoscope,
    title: "AI Symptom Check",
    description:
      "Not sure what's wrong? Describe your symptoms to our AI and get instant analysis with urgency level and care recommendations.",
    role: "patient" as const,
  },
  {
    icon: MapPin,
    title: "Find Nearby Care",
    description:
      "Discover verified hospitals and clinics near you. Compare services, pricing, and current wait times before you go.",
    role: "patient" as const,
  },
  {
    icon: Calendar,
    title: "Book Appointments",
    description:
      "Schedule appointments with available doctors instantly. Choose your time, specialty, and preferred hospital.",
    role: "patient" as const,
  },
  {
    icon: FileText,
    title: "Digital Records",
    description:
      "Keep all your medical records in one secure place. Access prescriptions, lab results, and visit notes anytime.",
    role: "patient" as const,
  },
  {
    icon: Shield,
    title: "Privacy First",
    description:
      "Your health data is encrypted and protected. You control who sees your information and when.",
    role: "patient" as const,
  },
  {
    icon: Phone,
    title: "Emergency Access",
    description:
      "One-tap emergency request connects you with nearby ambulances. GPS tracking shows exactly when help arrives.",
    role: "patient" as const,
  },
];

const patientSteps = [
  {
    number: 1,
    title: "Describe Symptoms",
    description:
      "Tell our AI what you're experiencing in your own words. No medical terminology needed.",
  },
  {
    number: 2,
    title: "Get Recommendations",
    description:
      "Receive urgency level, care type suggestions, and nearby facilities within seconds.",
  },
  {
    number: 3,
    title: "Choose Your Care",
    description:
      "Compare hospitals, see doctor availability, and book appointments that work for your schedule.",
  },
  {
    number: 4,
    title: "Track Your Health",
    description:
      "Access your complete medical history, receive appointment reminders, and manage prescriptions.",
  },
];

export default function ForPatientsPage() {
  return (
    <>
      <Hero
        badge="For Patients"
        title={
          <>
            Your Health Journey,{" "}
            <span className="text-primary">Simplified</span>
          </>
        }
    description="No more confusion about where to go or who to see. NeronaHealth guides you from symptom to recovery with AI-powered insights and seamless care coordination."
        primaryCta={{ text: "Start Free Triage", href: "/api/auth/signin" }}
        secondaryCta={{ text: "Download App", href: "/download" }}
        role="patient"
        showVisual={true}
      />

      <FeatureGrid
        features={patientFeatures}
        columns={3}
        title="Everything You Need"
        description="Complete healthcare management from your pocket"
      />

      <HowItWorks steps={patientSteps} title="How It Works for You" />

      <CTASection
        title="Start Your Health Journey Today"
        description="Join 50,000+ patients who have discovered a better way to manage their health in Nigeria."
        primaryCta={{ text: "Create Free Account", href: "/api/auth/signin" }}
        secondaryCta={{ text: "Learn About AI Triage", href: "/features#ai-triage" }}
        variant="patient"
      />
    </>
  );
}
