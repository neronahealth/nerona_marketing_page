"use client";

import { Hero } from "@/components/sections/hero";
import { FeatureGrid } from "@/components/sections/feature-grid";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Stats } from "@/components/sections/how-it-works";
import { CTASection } from "@/components/sections/cta";
import {
  Building2,
  Users,
  BarChart,
  Shield,
  Clock,
  FileText,
} from "lucide-react";

const hospitalFeatures = [
  {
    icon: Building2,
    title: "Hospital Profile",
    description:
      "Create a comprehensive hospital profile. Showcase departments, services, equipment, and accreditations to attract patients.",
    role: "hospital" as const,
  },
  {
    icon: Users,
    title: "Doctor Management",
    description:
      "Verify and manage affiliated doctors. Track their credentials, specialties, and patient reviews in one dashboard.",
    role: "hospital" as const,
  },
  {
    icon: BarChart,
    title: "Real-Time Capacity",
    description:
      "Update bed availability, wait times, and appointment slots in real-time. Patients see accurate information before arriving.",
    role: "hospital" as const,
  },
  {
    icon: Clock,
    title: "Appointment Flow",
    description:
      "Streamline patient check-in and routing. Reduce waiting room congestion and improve patient satisfaction scores.",
    role: "hospital" as const,
  },
  {
    icon: Shield,
    title: "Quality Assurance",
    description:
      "Track patient outcomes, satisfaction metrics, and operational efficiency. Continuous improvement powered by data.",
    role: "hospital" as const,
  },
  {
    icon: FileText,
    title: "Centralized Records",
    description:
      "Access patient visits, treatments, and outcomes across your network. Build comprehensive care histories.",
    role: "hospital" as const,
  },
];

const hospitalSteps = [
  {
    number: 1,
    title: "Claim Your Hospital",
    description:
      "Register your facility and verify ownership. Our team will review and approve your hospital profile.",
  },
  {
    number: 2,
    title: "Build Your Profile",
    description:
      "Add departments, services, facilities, and pricing. Upload photos to showcase your hospital to patients.",
  },
  {
    number: 3,
    title: "Onboard Doctors",
    description:
      "Invite affiliated doctors to join your hospital network. Verify credentials and manage their profiles.",
  },
  {
    number: 4,
    title: "Go Live",
    description:
      "Start receiving appointment requests and patient inquiries. Track metrics and optimize operations.",
  },
];

export default function ForHospitalsPage() {
  return (
    <>
      <Hero
        badge="For Healthcare Facilities"
        title={
          <>
            Hospital Management, <span className="text-secondary">Modernized</span>
          </>
        }
    description="Streamline operations, improve patient flow, and increase visibility. NeronaHealth helps hospitals across Nigeria deliver better care with less administrative burden."
        primaryCta={{ text: "Register Your Hospital", href: "/api/auth/signin?role=hospital" }}
        secondaryCta={{ text: "Request Demo", href: "/contact" }}
        role="hospital"
        showVisual={true}
      />

      <Stats
        items={[
          { value: "500", suffix: "+", label: "Partner Hospitals" },
          { value: "60", suffix: "%", label: "Reduced Wait Times" },
          { value: "45", suffix: "%", label: "More Bookings" },
          { value: "24", suffix: "hrs", label: "Setup Time" },
        ]}
      />

      <FeatureGrid
        features={hospitalFeatures}
        columns={3}
        title="Hospital Administration Made Simple"
        description="Comprehensive tools for modern healthcare facility management"
      />

      <HowItWorks steps={hospitalSteps} title="Getting Started" />

      <CTASection
        title="Ready to Attract More Patients?"
        description="Join Nigeria's largest healthcare platform. Increase visibility, streamline operations, and deliver better patient outcomes."
        primaryCta={{ text: "Register Hospital", href: "/api/auth/signin?role=hospital" }}
        secondaryCta={{ text: "Talk to Sales", href: "/contact" }}
        variant="secondary"
      />
    </>
  );
}
