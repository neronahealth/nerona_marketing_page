"use client";

import { Hero } from "@/components/sections/hero";
import { FeatureGrid } from "@/components/sections/feature-grid";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Stats } from "@/components/sections/how-it-works";
import { CTASection } from "@/components/sections/cta";
import {
  Calendar,
  Users,
  FileText,
  Clock,
  Shield,
  TrendingUp,
} from "lucide-react";

const doctorFeatures = [
  {
    icon: Calendar,
    title: "Smart Scheduling",
    description:
      "Manage your availability across multiple hospitals. Patients see your real-time slots and book seamlessly without back-and-forth calls.",
    role: "doctor" as const,
  },
  {
    icon: Users,
    title: "Patient Overview",
    description:
      "Access complete patient histories before consultations. View past visits, prescriptions, allergies, and ongoing treatments in one place.",
    role: "doctor" as const,
  },
  {
    icon: FileText,
    title: "Digital Prescriptions",
    description:
      "Generate and send prescriptions directly to pharmacies. Patients receive digital copies, reducing errors and improving adherence.",
    role: "doctor" as const,
  },
  {
    icon: Clock,
    title: "Reduced No-Shows",
    description:
      "Automated reminders keep patients informed. Our system reduces no-shows by 40%, maximizing your productive consultation hours.",
    role: "doctor" as const,
  },
  {
    icon: Shield,
    title: "Verified Profile",
    description:
      "Showcase your qualifications, specialties, and hospital affiliations. Build trust with patients before they even book.",
    role: "doctor" as const,
  },
  {
    icon: TrendingUp,
    title: "Practice Analytics",
    description:
      "Understand your practice metrics. See patient demographics, common conditions, and appointment trends to optimize your services.",
    role: "doctor" as const,
  },
];

const doctorSteps = [
  {
    number: 1,
    title: "Complete Your Profile",
    description:
      "Add your qualifications, specialties, and hospital affiliations. Verify your credentials for patient trust.",
  },
  {
    number: 2,
    title: "Set Your Availability",
    description:
      "Define your consultation hours across locations. Our system automatically syncs across all booking channels.",
  },
  {
    number: 3,
    title: "Manage Appointments",
    description:
      "View upcoming consultations, access patient records, and prepare for each visit with complete information.",
  },
  {
    number: 4,
    title: "Deliver Better Care",
    description:
      "Use AI-assisted diagnosis, generate digital prescriptions, and maintain comprehensive patient records effortlessly.",
  },
];

export default function ForDoctorsPage() {
  return (
    <>
      <Hero
        badge="For Healthcare Providers"
        title={
          <>
            Your Practice, <span className="text-trust">Elevated</span>
          </>
        }
    description="Streamline appointments, access patient histories instantly, and focus on what matters most—delivering exceptional care. NeronaHealth makes practice management effortless."
        primaryCta={{ text: "Join Our Network", href: "/api/auth/signin?role=doctor" }}
        secondaryCta={{ text: "See How It Works", href: "#how-it-works" }}
        role="doctor"
        showVisual={true}
      />

      <Stats
        items={[
          { value: "40", suffix: "%", label: "Fewer No-Shows" },
          { value: "2,000", suffix: "+", label: "Active Doctors" },
          { value: "15", suffix: "min", label: "Avg. Setup Time" },
          { value: "98", suffix: "%", label: "Satisfaction Rate" },
        ]}
      />

      <FeatureGrid
        features={doctorFeatures}
        columns={3}
        title="Practice Tools Built for You"
        description="Everything you need to run an efficient, patient-centered practice"
      />

      <HowItWorks steps={doctorSteps} title="Getting Started" />

      <CTASection
        title="Ready to Transform Your Practice?"
    description="Join thousands of doctors across Nigeria who trust NeronaHealth to manage their appointments and patient care."
        primaryCta={{ text: "Apply to Join", href: "/api/auth/signin?role=doctor" }}
        secondaryCta={{ text: "Contact Our Team", href: "/contact" }}
        variant="trust"
      />
    </>
  );
}
