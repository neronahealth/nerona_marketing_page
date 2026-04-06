"use client";

import { Hero } from "@/components/sections/hero";
import { FeatureGrid } from "@/components/sections/feature-grid";
import { CTASection } from "@/components/sections/cta";
import { Container } from "@/components/layout/container";
import { WorkflowDiagram } from "@/components/infographics";
import {
  Stethoscope,
  Building2,
  Calendar,
  Ambulance,
  FileText,
  Users,
  Phone,
  MapPin,
  Shield,
} from "lucide-react";

const aiFeatures = [
  {
    icon: Stethoscope,
    title: "Symptom Analysis",
    description:
      "Describe your symptoms in natural language. Our AI analyzes urgency, identifies potential conditions, and recommends appropriate care pathways.",
    role: "patient" as const,
  },
  {
    icon: Shield,
    title: "Urgency Detection",
    description:
      "AI identifies red flags and critical symptoms that require immediate attention. Know when to seek emergency care versus routine appointments.",
    role: "patient" as const,
  },
  {
    icon: MapPin,
    title: "Care Type Recommendation",
    description:
      "Get personalized recommendations on whether to visit a clinic, hospital, or call for emergency services based on your symptoms.",
    role: "patient" as const,
  },
];

const hospitalFeatures = [
  {
    icon: Building2,
    title: "Verified Hospitals",
    description:
      "Access a curated network of vetted healthcare facilities. Quality assurance, verified accreditations, and transparent service listings.",
    role: "hospital" as const,
  },
  {
    icon: Users,
    title: "Real-Time Capacity",
    description:
      "See current wait times, bed availability, and appointment slots. Make informed decisions before traveling to a hospital.",
    role: "hospital" as const,
  },
  {
    icon: Phone,
    title: "Direct Contact",
    description:
      "Connect with hospitals directly through integrated calling and messaging. Get quick responses to your healthcare inquiries.",
    role: "hospital" as const,
  },
];

const appointmentFeatures = [
  {
    icon: Calendar,
    title: "Smart Scheduling",
    description:
      "Book appointments with available doctors instantly. View calendars, specialties, and choose your preferred time slots.",
    role: "doctor" as const,
  },
  {
    icon: Users,
    title: "Doctor Profiles",
    description:
      "Browse verified doctors by specialty. View qualifications, experience, patient ratings, and hospital affiliations.",
    role: "doctor" as const,
  },
  {
    icon: Phone,
    title: "Automated Reminders",
    description:
      "Never miss an appointment with SMS and in-app reminders. Manage your schedule with easy rescheduling options.",
    role: "doctor" as const,
  },
];

const emergencyFeatures = [
  {
    icon: Ambulance,
    title: "One-Tap Emergency",
    description:
      "Instantly request emergency assistance. Connect with dispatchers and track ambulance location in real-time.",
    role: "dispatcher" as const,
  },
  {
    icon: MapPin,
    title: "GPS Tracking",
    description:
      "Real-time ambulance tracking. See ETA, route progress, and communicate directly with drivers during emergencies.",
    role: "dispatcher" as const,
  },
  {
    icon: Phone,
    title: "Coordinated Response",
    description:
      "Dispatch system coordinates between patients, hospitals, and emergency responders. Life-saving efficiency.",
    role: "dispatcher" as const,
  },
];

const recordsFeatures = [
  {
    icon: FileText,
    title: "Digital Records",
    description:
      "Secure cloud storage for your medical history. Access lab results, prescriptions, and visit notes anywhere, anytime.",
    role: "admin" as const,
  },
  {
    icon: Shield,
    title: "Privacy Controls",
    description:
      "Granular sharing permissions. Control who sees your records and for how long. HIPAA compliant security.",
    role: "admin" as const,
  },
  {
    icon: Users,
    title: "Provider Access",
    description:
      "Instantly share your medical history with new doctors. No more carrying paper files between appointments.",
    role: "admin" as const,
  },
];

export default function FeaturesPage() {
  return (
    <>
      <Hero
        badge="Comprehensive Healthcare Platform"
        title="Everything You Need for Better Healthcare"
    description="From AI-powered symptom triage to emergency ambulance dispatch, NeronaHealth provides every tool you need to navigate Nigeria's healthcare system with confidence."
        primaryCta={{ text: "Get Started Free", href: "/api/auth/signin" }}
        secondaryCta={{ text: "Book Demo", href: "/contact" }}
        role="default"
      />

      <section className="py-20 lg:py-32 bg-slate-50 dark:bg-slate-900">
        <Container size="xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-fluid-3xl font-bold">
              <span className="text-primary">How</span> It Works
            </h2>
            <p className="mt-4 text-fluid-lg text-foreground-muted">
              From symptom to care in four simple steps
            </p>
          </div>
          
          <WorkflowDiagram variant="triage" animated showFlowingArrows />
        </Container>
      </section>

      <section id="ai-triage" className="py-20 lg:py-32">
        <Container size="xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-fluid-3xl font-bold">
              <span className="text-primary">AI-Powered</span> Triage
            </h2>
            <p className="mt-4 text-fluid-lg text-foreground-muted">
              Describe your symptoms naturally. Our AI analyzes urgency and
              recommends the right care within seconds.
            </p>
          </div>
          <FeatureGrid features={aiFeatures} columns={3} />
        </Container>
      </section>

      <section id="hospitals" className="py-20 lg:py-32 bg-muted">
        <Container size="xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-fluid-3xl font-bold">
              <span className="text-secondary">Hospital</span> Discovery
            </h2>
            <p className="mt-4 text-fluid-lg text-foreground-muted">
              Find verified hospitals near you with real-time capacity
              information. Compare services and make informed decisions.
            </p>
          </div>
          <FeatureGrid features={hospitalFeatures} columns={3} />
        </Container>
      </section>

      <section id="appointments" className="py-20 lg:py-32">
        <Container size="xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-fluid-3xl font-bold">
              <span className="text-trust">Smart</span> Appointments
            </h2>
            <p className="mt-4 text-fluid-lg text-foreground-muted">
              Book appointments with verified doctors. See availability, read
              reviews, and schedule with confidence.
            </p>
          </div>
          <FeatureGrid features={appointmentFeatures} columns={3} />
        </Container>
      </section>

      <section id="emergency" className="py-20 lg:py-32 bg-emergency/5">
        <Container size="xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-fluid-3xl font-bold">
              <span className="text-emergency">Emergency</span> Response
            </h2>
            <p className="mt-4 text-fluid-lg text-foreground-muted">
              One-tap emergency dispatch with real-time ambulance tracking. When
    every second counts, NeronaHealth delivers.
            </p>
          </div>
          <FeatureGrid features={emergencyFeatures} columns={3} />
        </Container>
      </section>

      <section id="records" className="py-20 lg:py-32">
        <Container size="xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-fluid-3xl font-bold">
              <span className="text-accent">Digital</span> Medical Records
            </h2>
            <p className="mt-4 text-fluid-lg text-foreground-muted">
              Secure cloud storage for your health history. Access,
              manage, and share your records with complete privacy control.
            </p>
          </div>
          <FeatureGrid features={recordsFeatures} columns={3} />
        </Container>
      </section>

      <CTASection
        title="Ready to Experience Better Healthcare?"
    description="Join thousands of patients and healthcare providers using NeronaHealth across Nigeria."
        primaryCta={{ text: "Create Free Account", href: "/api/auth/signin" }}
        secondaryCta={{ text: "Learn More", href: "/for-patients" }}
        variant="secondary"
      />
    </>
  );
}
