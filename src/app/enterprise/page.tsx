"use client";

import { motion } from "framer-motion";
import { Hero } from "@/components/sections/hero";
import { FeatureGrid } from "@/components/sections/feature-grid";
import { CTASection } from "@/components/sections/cta";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ArchitectureDiagram, ComparisonTable } from "@/components/infographics";
import {
  Building2,
  Users,
  Settings,
  Shield,
  BarChart,
  Globe,
  HeadphonesIcon,
} from "lucide-react";

const enterpriseFeatures = [
  {
    icon: Building2,
    title: "Multi-Hospital Management",
    description:
      "Manage multiple healthcare facilities from a single dashboard. Coordinate resources, staff, and operations across your entire network.",
    role: "hospital" as const,
  },
  {
    icon: Settings,
    title: "Custom Integrations",
    description:
      "Seamlessly integrate with existing HIM systems, EHR platforms, and third-party applications. API-first architecture enables endless possibilities.",
    role: "hospital" as const,
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description:
      "Bank-grade security with HIPAA compliance, SOC 2 certification, and advanced encryption. Your patient data is protected at every level.",
    role: "hospital" as const,
  },
  {
    icon: BarChart,
    title: "Advanced Analytics",
    description:
      "Gain insights across your entire healthcare network. Track performance metrics, patient outcomes, and operational efficiency with custom dashboards.",
    role: "hospital" as const,
  },
  {
    icon: Globe,
    title: "White-Label Solutions",
    description:
  "Customize NeronaHealth with your branding. Deploy under your domain, use your color schemes, and maintain brand consistency across the platform.",
    role: "hospital" as const,
  },
  {
    icon: HeadphonesIcon,
    title: "Dedicated Support",
    description:
      "Priority support with dedicated account managers, 24/7 assistance, and custom training programs for your teams. We're invested in your success.",
    role: "hospital" as const,
  },
];

const useCases = [
  {
    title: "Insurance Companies",
    description: "Streamline claims processing, verify hospital visits, and track patient journeys across providers. Reduce fraud and improve outcomes.",
    icon: Shield,
  },
  {
    title: "Hospital Networks",
    description: "Unify patient records across facilities, optimize resource allocation, and implement network-wide protocols and standards.",
    icon: Building2,
  },
  {
    title: "Government Agencies",
    description: "Monitor public health trends, manage emergency response coordination, and deploy health initiatives at scale with real-time data.",
    icon: Users,
  },
  {
    title: "Healthcare Chains",
    description: "Standardize operations across locations, share best practices, and leverage collective data for competitive advantage.",
    icon: Globe,
  },
];

const benefits = [
  { value: "50+", suffix: "", label: "Enterprise Clients" },
  { value: "99.9", suffix: "%", label: "Uptime SLA" },
  { value: "10M", suffix: "+", label: "Patient Records Managed" },
  { value: "< 2", suffix: "hrs", label: "Setup Time" },
];

export default function EnterprisePage() {
  return (
    <>
      <Hero
        badge="Enterprise Solutions"
        title={
          <>
            Healthcare Solutions for <span className="text-secondary">Large Organizations</span>
          </>
        }
    description="From insurance companies to government agencies, NeronaHealth Enterprise scales with your needs. Deploy across multiple facilities with custom integrations, dedicated support, and enterprise-grade security."
        primaryCta={{ text: "Contact Sales", href: "/contact?role=enterprise" }}
        secondaryCta={{ text: "Request Demo", href: "/contact" }}
        role="hospital"
      />

      <section className="py-20 bg-muted">
        <Container size="lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-fluid-2xl font-bold mb-4">
              Enterprise Architecture
            </h2>
            <p className="text-lg text-foreground-muted max-w-2xl mx-auto">
              Scalable, secure infrastructure designed for healthcare organizations
            </p>
          </motion.div>
          <ArchitectureDiagram variant="enterprise" showLabels animated />
        </Container>
      </section>

      <section className="py-20 bg-white dark:bg-slate-900">
        <Container size="lg">
          <div className="grid md:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="font-display text-fluid-3xl font-bold text-secondary">
                  {benefit.value}
                  <span className="text-xl">{benefit.suffix}</span>
                </div>
                <div className="mt-2 text-foreground-muted text-sm">{benefit.label}</div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      <FeatureGrid
        features={enterpriseFeatures}
        columns={3}
        title="Enterprise-Grade Platform"
        description="Purpose-built for large healthcare organizations with complex needs"
      />

      <section className="py-20 lg:py-32">
        <Container size="xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-fluid-2xl font-bold">
    Why NeronaHealth Enterprise?
            </h2>
            <p className="mt-4 text-lg text-foreground-muted max-w-2xl mx-auto">
              See how we compare to traditional healthcare management systems
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <ComparisonTable
  columns={["Traditional", "NeronaHealth"]}
              rows={[
                { feature: "Implementation Time", traditional: "6-12 months", healthbudi: "< 2 hours", highlight: true },
                { feature: "AI-Powered Triage", traditional: false, healthbudi: true },
                { feature: "Real-time Analytics", traditional: "Manual reports", healthbudi: "Live dashboards" },
                { feature: "Multi-facility Support", traditional: "Separate systems", healthbudi: "Unified dashboard" },
                { feature: "Uptime Guarantee", traditional: "95%", healthbudi: "99.9% SLA" },
                { feature: "Mobile Access", traditional: false, healthbudi: true },
                { feature: "API Access", traditional: "Limited", healthbudi: "Full REST API" },
              ]}
              variant="cards"
              animated
            />
          </div>
        </Container>
      </section>

      <section className="py-20 lg:py-32 bg-slate-50 dark:bg-slate-800">
        <Container size="xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-fluid-2xl font-bold">
              Built for Your Use Case
            </h2>
            <p className="mt-4 text-lg text-foreground-muted max-w-2xl mx-auto">
    NeronaHealth Enterprise adapts to diverse healthcare needs across Africa.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-elevated transition-all duration-300">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                      <useCase.icon className="w-6 h-6 text-secondary" />
                    </div>
                    <CardTitle className="text-lg">{useCase.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm">{useCase.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 bg-gradient-to-br from-secondary-50 via-background to-trust-50">
        <Container size="md">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="font-display text-fluid-2xl font-bold">
              Ready to Scale Your Healthcare Operations?
            </h2>
            <p className="mt-4 text-lg text-foreground-muted max-w-2xl mx-auto">
    Join leading healthcare organizations across Africa. Let's discuss how NeronaHealth can support your unique needs.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="xl" asChild>
                <a href="/contact?role=enterprise">Schedule Consultation</a>
              </Button>
              <Button size="xl" variant="outline" asChild>
                <a href="/contact">Talk to Solutions Expert</a>
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>

      <CTASection
        title="Let's Build Something Great Together"
        description="Our enterprise team is ready to help you transform healthcare delivery across your organization. Get in touch today."
        primaryCta={{ text: "Contact Enterprise Sales", href: "/contact?role=enterprise" }}
        secondaryCta={{ text: "View Case Studies", href: "/blog" }}
        variant="secondary"
      />
    </>
  );
}
