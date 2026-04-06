"use client";

import { Hero } from "@/components/sections/hero";
import { FeatureGrid } from "@/components/sections/feature-grid";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Stats } from "@/components/sections/how-it-works";
import { CTASection } from "@/components/sections/cta";
import {
  Truck,
  MapPin,
  Radio,
  Clock,
  Users,
  Activity,
} from "lucide-react";

const dispatcherFeatures = [
  {
    icon: Truck,
    title: "Real-Time Fleet Tracking",
    description:
      "Monitor all ambulances in real-time with GPS precision. See locations, status, and availability on an interactive map dashboard.",
    role: "dispatcher" as const,
  },
  {
    icon: MapPin,
    title: "Intelligent Routing",
    description:
      "AI-powered routing optimizes ambulance paths based on traffic, road conditions, and hospital capacity. Reduce response times by up to 40%.",
    role: "dispatcher" as const,
  },
  {
    icon: Radio,
    title: "Instant Communication",
    description:
      "Seamless communication between dispatchers, drivers, and hospitals. Voice, text, and status updates sync instantly across the platform.",
    role: "dispatcher" as const,
  },
  {
    icon: Clock,
    title: "Priority Queue Management",
    description:
      "Smart triage integration ranks emergencies by severity. Critical cases get prioritized, ensuring life-saving response prioritization.",
    role: "dispatcher" as const,
  },
  {
    icon: Users,
    title: "Team Coordination",
    description:
      "Coordinate paramedics, drivers, and hospital teams from a single dashboard. Assign crews, track certifications, and manage shifts effortlessly.",
    role: "dispatcher" as const,
  },
  {
    icon: Activity,
    title: "Performance Analytics",
    description:
      "Track response times, successful dispatches, and team efficiency. Data-driven insights help you improve operations continuously.",
    role: "dispatcher" as const,
  },
];

const dispatcherSteps = [
  {
    number: 1,
    title: "Access Dashboard",
    description:
      "Log into your dispatcher dashboard to see real-time fleet status, active emergencies, and available resources at a glance.",
  },
  {
    number: 2,
    title: "Receive Emergency Alert",
    description:
      "Emergency requests come in with patient details, location, and severity. AI suggests the nearest available ambulance.",
  },
  {
    number: 3,
    title: "Dispatch & Track",
    description:
      "Assign the ambulance, and track its journey in real-time. Send status updates to hospitals and family members automatically.",
  },
  {
    number: 4,
    title: "Complete & Report",
    description:
      "Mark emergencies as resolved. Generate detailed reports for stakeholders, review performance metrics, and optimize operations.",
  },
];

export default function ForDispatchersPage() {
  return (
    <>
      <Hero
        badge="For Emergency Dispatchers"
        title={
          <>
            Manage Emergency Dispatch <span className="text-emergency">at Scale</span>
          </>
        }
    description="Coordinate ambulances, track emergencies in real-time, and save lives faster. NeronaHealth's dispatcher tools give you the visibility and control you need to respond effectively."
        primaryCta={{ text: "Schedule Demo", href: "/contact?role=dispatcher" }}
        secondaryCta={{ text: "See How It Works", href: "#how-it-works" }}
        role="default"
      />

      <Stats
        items={[
          { value: "8", suffix: "min", label: "Average Response Time" },
          { value: "15,000", suffix: "+", label: "Successful Dispatches" },
          { value: "98", suffix: "%", label: "Coverage Area" },
          { value: "24", suffix: "/7", label: "Support Available" },
        ]}
      />

      <FeatureGrid
        features={dispatcherFeatures}
        columns={3}
        title="Powerful Dispatch Tools"
        description="Everything you need to manage medical emergencies effectively"
      />

      <HowItWorks steps={dispatcherSteps} title="Emergency Response Workflow" />

      <CTASection
        title="Ready to Transform Emergency Response?"
    description="Join hospitals and emergency services across Nigeria using NeronaHealth to save lives faster."
        primaryCta={{ text: "Schedule Demo", href: "/contact?role=dispatcher" }}
        secondaryCta={{ text: "Contact Our Team", href: "/contact" }}
        variant="primary"
      />
    </>
  );
}
