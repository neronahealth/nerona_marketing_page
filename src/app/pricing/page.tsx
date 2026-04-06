"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Hero } from "@/components/sections/hero";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const plans = [
  {
    name: "Patient Basic",
    description: "For individuals seeking healthcare",
    price: "Free",
    period: "forever",
    features: [
      { text: "AI Symptom Triage", included: true },
      { text: "Hospital Discovery", included: true },
      { text: "Appointment Booking", included: true },
      { text: "Medical Records (Basic)", included: true },
      { text: "Emergency Dispatch", included: true },
      { text: "Priority Support", included: false },
      { text: "Family Account", included: false },
      { text: "Specialist Referrals", included: false },
    ],
    cta: "Get Started Free",
    href: "/api/auth/signin",
    popular: false,
    role: "patient" as const,
  },
  {
    name: "Patient Premium",
    description: "For comprehensive health management",
    price: "₦2,500",
    period: "per month",
    features: [
      { text: "Everything in Basic", included: true },
      { text: "Priority Booking", included: true },
      { text: "Family Account (5 members)", included: true },
      { text: "Specialist Referrals", included: true },
      { text: "Video Consultations", included: true },
      { text: "Priority Support", included: true },
      { text: "Health Reports", included: true },
      { text: "Medication Reminders", included: true },
    ],
    cta: "Start Free Trial",
    href: "/api/auth/signin?plan=premium",
    popular: true,
    role: "patient" as const,
  },
  {
    name: "Doctor Pro",
    description: "For healthcare providers",
    price: "₦15,000",
    period: "per month",
    features: [
      { text: "Professional Profile", included: true },
      { text: "Appointment Management", included: true },
      { text: "Patient History Access", included: true },
      { text: "Digital Prescriptions", included: true },
      { text: "Practice Analytics", included: true },
      { text: "Video Consultations", included: true },
      { text: "Multi-Hospital Access", included: true },
      { text: "Priority Listings", included: true },
    ],
    cta: "Apply to Join",
    href: "/api/auth/signin?role=doctor",
    popular: false,
    role: "doctor" as const,
  },
  {
    name: "Hospital Enterprise",
    description: "For healthcare facilities",
    price: "Custom",
    period: "contact for pricing",
    features: [
      { text: "Hospital Profile", included: true },
      { text: "Doctor Management", included: true },
      { text: "Capacity Management", included: true },
      { text: "Patient Analytics", included: true },
      { text: "API Integration", included: true },
      { text: "Custom Branding", included: true },
      { text: "Dedicated Support", included: true },
      { text: "Training & Onboarding", included: true },
    ],
    cta: "Contact Sales",
    href: "/contact",
    popular: false,
    role: "hospital" as const,
  },
];

const roleColors = {
  patient: {
    bg: "bg-primary",
    border: "border-primary",
    text: "text-primary",
    glow: "shadow-glow-primary",
    check: "text-primary",
  },
  doctor: {
    bg: "bg-trust",
    border: "border-trust",
    text: "text-trust",
    glow: "shadow-glow-trust",
    check: "text-trust",
  },
  hospital: {
    bg: "bg-secondary",
    border: "border-secondary",
    text: "text-secondary",
    glow: "shadow-glow-secondary",
    check: "text-secondary",
  },
};

export default function PricingPage() {
  return (
    <>
      <Hero
        badge="Transparent Pricing"
        title={
          <>
            Plans for Every <span className="text-accent">Healthcare Need</span>
          </>
        }
        description="Whether you're a patient seeking care, a doctor managing your practice, or a hospital improving operations, we have a plan designed for you."
        primaryCta={{ text: "Start Free", href: "/api/auth/signin" }}
        secondaryCta={{ text: "Contact Sales", href: "/contact" }}
        role="default"
      />

      <section className="py-20 lg:py-32">
        <Container size="xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {plans.map((plan, index) => {
              const colors = roleColors[plan.role];
              return (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={cn(
                    "relative rounded-2xl border-2 p-6 transition-all duration-300",
                    plan.popular
                      ? `${colors.border} ${colors.glow} scale-105 z-10`
                      : "border-border hover:border-primary/50"
                  )}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <Badge className="bg-primary text-white">Most Popular</Badge>
                    </div>
                  )}

                  <div className="mb-6">
                    <h3 className="font-display text-xl font-semibold">{plan.name}</h3>
                    <p className="mt-1 text-sm text-foreground-muted">
                      {plan.description}
                    </p>
                  </div>

                  <div className="mb-6">
                    <div className="flex items-baseline gap-1">
                      <span className="font-display text-4xl font-bold">
                        {plan.price}
                      </span>
                      {plan.period !== "forever" && plan.period !== "contact for pricing" && (
                        <span className="text-foreground-muted text-sm">
                          /{plan.period}
                        </span>
                      )}
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature.text} className="flex items-center gap-3">
                        {feature.included ? (
                          <Check className={cn("w-5 h-5", colors.check)} />
                        ) : (
                          <X className="w-5 h-5 text-foreground-subtle" />
                        )}
                        <span
                          className={cn(
                            "text-sm",
                            feature.included ? "text-foreground" : "text-foreground-subtle"
                          )}
                        >
                          {feature.text}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    className="w-full"
                    variant={plan.popular ? "default" : "outline"}
                    asChild
                  >
                    <Link href={plan.href}>{plan.cta}</Link>
                  </Button>
                </motion.div>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="py-20 bg-muted">
        <Container size="md">
          <div className="text-center">
            <h2 className="font-display text-fluid-2xl font-bold">
              Have Questions About Pricing?
            </h2>
            <p className="mt-4 text-lg text-foreground-muted">
              Our team is here to help you find the right plan for your needs.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">Talk to Sales</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/features">Compare Features</Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}