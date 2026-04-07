"use client";

import { motion } from "framer-motion";
import { Heart, Target, Users, Shield, Lightbulb, Globe } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

const values = [
  {
    icon: Heart,
    title: "Patient-First",
    description:
      "Every decision we make starts with one question: how does this help patients get better care? Your health journey is our priority.",
  },
  {
    icon: Shield,
    title: "Trust & Security",
    description:
      "Your health data is sacred. We maintain HIPAA compliance, use bank-grade encryption, and never sell your information.",
  },
  {
    icon: Target,
    title: "Accessibility",
    description:
      "Quality healthcare shouldn't depend on your location or income. We're building tools that work for everyone, everywhere in Nigeria.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We leverage AI and technology not to replace doctors, but to help them deliver better care. Innovation serves humanity.",
  },
  {
    icon: Users,
    title: "Community",
    description:
      "We collaborate with hospitals, doctors, and emergency services across Nigeria. Healthcare is a team effort.",
  },
  {
    icon: Globe,
    title: "Impact",
    description:
      "We measure success by lives improved. Every feature we build aims to make a meaningful difference in Nigerian healthcare.",
  },
];

const milestones = [
  {
    year: "2023",
    title: "Founded in Lagos",
    description:
      "Started with a vision to solve healthcare access challenges in Nigeria through AI-powered technology.",
  },
  {
    year: "2024",
    title: "10,000 Patients Served",
    description:
      "Reached our first major milestone, proving that better healthcare coordination saves lives.",
  },
  {
    year: "2024",
    title: "Hospital Partnerships",
    description:
      "Partnered with 50+ hospitals across Lagos, Abuja, and Port Harcourt.",
  },
  {
    year: "2025",
    title: "Emergency Dispatch Launch",
    description:
      "Launched real-time ambulance tracking and emergency response coordination.",
  },
  {
    year: "2026",
    title: "50,000+ Patients",
    description:
      "Growing rapidly with doctors, hospitals, and dispatchers joining the platform.",
  },
];

export function ValuesSection() {
  return (
    <section className="py-20 lg:py-32 bg-muted dark:bg-slate-800">
      <Container size="xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-fluid-3xl font-bold text-foreground dark:text-foreground">Our Values</h2>
          <p className="mt-4 text-fluid-lg text-foreground-muted dark:text-foreground-muted">
            The principles that guide every decision we make
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-elevated dark:hover:shadow-none transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-xl bg-primary/10 dark:bg-primary-900/30 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-primary dark:text-primary-400" />
                    </div>
                    <CardTitle>{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base dark:text-foreground-muted">
                      {value.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

export function MilestonesSection() {
  return (
    <section className="py-20 lg:py-32 bg-white dark:bg-slate-900">
      <Container size="lg">
        <div className="text-center mb-16">
          <h2 className="font-display text-fluid-3xl font-bold text-foreground dark:text-foreground">Our Journey</h2>
          <p className="mt-4 text-fluid-lg text-foreground-muted dark:text-foreground-muted">
            From an idea to an impact
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border dark:bg-slate-700 -translate-x-1/2 hidden md:block" />

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <motion.div
                key={`${milestone.year}-${milestone.title}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`flex flex-col md:flex-row items-center gap-6 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="flex-1 md:text-right">
                  {index % 2 === 0 ? (
                    <>
                      <h3 className="font-display text-xl font-semibold text-foreground dark:text-foreground">
                        {milestone.title}
                      </h3>
                      <p className="mt-2 text-foreground-muted dark:text-foreground-muted">
                        {milestone.description}
                      </p>
                    </>
                  ) : (
                    <div className="font-display text-3xl font-bold text-primary dark:text-primary-400">
                      {milestone.year}
                    </div>
                  )}
                </div>

                <div className="w-4 h-4 rounded-full bg-primary dark:bg-primary-500 ring-4 ring-primary/20 dark:ring-primary-500/30 z-10" />

                <div className="flex-1">
                  {index % 2 === 0 ? (
                    <div className="font-display text-3xl font-bold text-primary dark:text-primary-400 md:hidden">
                      {milestone.year}
                    </div>
                  ) : (
                    <>
                      <h3 className="font-display text-xl font-semibold text-foreground dark:text-foreground">
                        {milestone.title}
                      </h3>
                      <p className="mt-2 text-foreground-muted dark:text-foreground-muted">
                        {milestone.description}
                      </p>
                    </>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export function MissionSection() {
  return (
    <section className="py-20 lg:py-32 bg-white dark:bg-slate-900">
      <Container size="lg">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-fluid-3xl font-bold text-foreground dark:text-foreground">Our Mission</h2>
            <p className="mt-6 text-fluid-lg text-foreground-muted dark:text-foreground-muted leading-relaxed">
              To democratize healthcare access in Nigeria through AI-powered tools
              that help patients find the right care, at the right time, from
              trusted providers.
            </p>
            <p className="mt-4 text-fluid-base text-foreground-muted dark:text-foreground-muted leading-relaxed">
              We believe that navigating healthcare shouldn&apos;t require medical
              knowledge. Our AI triage system helps you understand your symptoms,
              recommends urgent vs. routine care, and connects you with verified
              hospitals and doctors across the country.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10 dark:from-primary-900/20 dark:via-accent-900/10 dark:to-secondary-900/20 rounded-3xl p-8 lg:p-12"
          >
            <h3 className="font-display text-2xl font-semibold mb-6 text-foreground dark:text-foreground">By the Numbers</h3>
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <span className="text-foreground-muted dark:text-foreground-muted">Patients Served</span>
                <span className="font-display text-2xl font-bold text-primary dark:text-primary-400">50,000+</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-foreground-muted dark:text-foreground-muted">Partner Hospitals</span>
                <span className="font-display text-2xl font-bold text-secondary dark:text-secondary-400">500+</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-foreground-muted dark:text-foreground-muted">Licensed Doctors</span>
                <span className="font-display text-2xl font-bold text-trust dark:text-trust-400">2,000+</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-foreground-muted dark:text-foreground-muted">States Covered</span>
                <span className="font-display text-2xl font-bold text-accent dark:text-accent-400">36</span>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}