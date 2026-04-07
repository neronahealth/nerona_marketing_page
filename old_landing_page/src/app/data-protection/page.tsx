"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/container";
import { Card } from "@/components/ui/card";
import {
  Database,
  Shield,
  UserCheck,
  FileText,
  Lock,
  Mail,
  Globe,
  RefreshCw,
  AlertCircle,
} from "lucide-react";

const dpRights = [
  {
    right: "Right to Access",
    description: "Request a copy of all personal data we hold about you, including health records.",
    icon: FileText,
  },
  {
    right: "Right to Rectification",
    description: "Request correction of inaccurate or incomplete personal data.",
    icon: UserCheck,
  },
  {
    right: "Right to Erasure",
    description: "Request deletion of your data when it's no longer necessary or when you withdraw consent.",
    icon: Database,
  },
  {
    right: "Right to Restrict Processing",
    description: "Limit how we use your data while maintaining it for specific purposes.",
    icon: Lock,
  },
  {
    right: "Right to Data Portability",
    description: "Receive your data in a structured, machine-readable format for transfer to another service.",
    icon: Globe,
  },
  {
    right: "Right to Object",
    description: "Object to processing of your data for direct marketing, research, or statistical purposes.",
    icon: AlertCircle,
  },
];

const gdprCompliance = [
  {
    title: "Lawful Basis for Processing",
  content: "NeronaHealth processes personal data based on the following lawful grounds:\n\n• Consent: When you explicitly agree to processing activities\n• Contract: When processing is necessary to provide our services\n• Legal Obligation: When required by healthcare regulations\n• Vital Interests: To protect life (e.g., emergency dispatch)\n• Legitimate Interests: For platform security and improvement",
  },
  {
    title: "Data Protection Officer",
  content: "NeronaHealth has appointed a dedicated Data Protection Officer (DPO) responsible for overseeing data protection compliance. You can contact our DPO at:\n\nEmail: dpo@neronahealth.com\nAddress: NeronaHealth Technologies Ltd., 15b Admiralty Way, Lekki Phase 1, Lagos, Nigeria\n\nOur DPO ensures compliance with GDPR, NDPR (Nigerian Data Protection Regulation), and other applicable data protection laws.",
  },
  {
    title: "International Transfers",
  content: "NeronaHealth may transfer data to countries outside the EEA (European Economic Area). We ensure appropriate safeguards:\n\n• Standard Contractual Clauses (SCCs) approved by regulatory authorities\n• Binding Corporate Rules for intra-group transfers\n• Certification under EU-US Data Privacy Framework where applicable\n• Local data localization in Nigeria for Nigerian user data\n\nAll transfers are conducted with your explicit consent or under legally compliant frameworks.",
  },
  {
    title: "Data Breach Notification",
  content: "In the event of a personal data breach:\n\n• We notify the relevant supervisory authority within 72 hours of becoming aware\n• Affected individuals are notified without undue delay if the breach poses a high risk\n• Our incident response team contains, assesses, and remediates breaches promptly\n• We document all breaches for regulatory audit\n\nYou can report suspected breaches to security@neronahealth.com.",
  },
];

export default function DataProtectionPage() {
  return (
    <>
      <section className="relative py-16 lg:py-24 overflow-hidden bg-gradient-to-br from-trust-50 via-background to-background">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -right-20 w-72 h-72 bg-trust-200/30 rounded-full blur-3xl" />
          <div className="absolute top-1/2 -left-10 w-64 h-64 bg-secondary-200/20 rounded-full blur-3xl" />
        </div>
        <Container size="lg" className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-trust/10 text-trust font-medium text-sm border border-trust/20 mb-6"
            >
              <Shield className="w-4 h-4" />
              GDPR & Data Protection
            </motion.div>

            <h1 className="font-display text-fluid-4xl lg:text-fluid-5xl font-bold">
              Data Protection
            </h1>
            <p className="mt-6 text-fluid-lg text-foreground-muted max-w-2xl mx-auto">
  Your rights under GDPR, NDPR, and other data protection laws. Learn how NeronaHealth protects and processes your data.
            </p>
          </motion.div>
        </Container>
      </section>

      <section className="py-16 lg:py-24 bg-muted">
        <Container size="xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-fluid-2xl font-bold">Your Data Protection Rights</h2>
            <p className="mt-4 text-foreground-muted max-w-2xl mx-auto">
              Under GDPR and Nigerian Data Protection Regulation, you have specific rights over your personal data.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dpRights.map((right, index) => (
              <motion.div
                key={right.right}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-elevated transition-all duration-300">
                  <div className="p-6">
                    <div className="w-12 h-12 rounded-lg bg-trust/10 flex items-center justify-center mb-4">
                      <right.icon className="w-6 h-6 text-trust" />
                    </div>
                    <h3 className="font-display font-semibold text-lg mb-2">{right.right}</h3>
                    <p className="text-sm text-foreground-muted">{right.description}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 lg:py-24">
        <Container size="lg">
          <div className="space-y-12">
            {gdprCompliance.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="overflow-hidden">
                  <div className="p-8">
                    <h2 className="font-display text-fluid-xl font-bold mb-4">{section.title}</h2>
                    <div className="prose prose-sm max-w-none text-foreground-muted">
                      {section.content.split('\n\n').map((paragraph, i) => (
                        <p key={i} className="mb-4 whitespace-pre-line">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 bg-muted">
        <Container size="md">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="p-8">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="w-16 h-16 rounded-2xl bg-trust/10 flex items-center justify-center flex-shrink-0">
                  <RefreshCw className="w-8 h-8 text-trust" />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="font-display text-fluid-xl font-bold mb-2">
                    Exercise Your Rights
                  </h3>
                  <p className="text-foreground-muted mb-4">
                    To exercise any of your data protection rights, contact our DPO. We respond within 30 days of receiving a valid request.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                    <a
  href="mailto:dpo@neronahealth.com"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-trust text-white rounded-lg font-semibold hover:bg-trust-600 transition-colors"
                    >
                      <Mail className="w-4 h-4" />
  dpo@neronahealth.com
                    </a>
                    <a
                      href="/privacy"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-trust text-trust rounded-lg font-semibold hover:bg-trust hover:text-white transition-colors"
                    >
                      <Shield className="w-4 h-4" />
                      Privacy Policy
                    </a>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </Container>
      </section>

      <section className="py-16 lg:py-24">
        <Container size="md">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="font-display text-fluid-2xl font-bold mb-6">Complaints</h2>
            <p className="text-foreground-muted mb-4">
  If you believe NeronaHealth has not adequately addressed your data protection concerns, you have the right to lodge a complaint with a supervisory authority:
            </p>
            <div className="bg-muted rounded-lg p-6 text-left space-y-4">
              <div>
                <h4 className="font-semibold text-sm mb-1">Nigeria</h4>
                <p className="text-sm text-foreground-muted">
                  Nigerian Data Protection Commission (NDPC)
                  <br />
                  Email: complaints@ndpc.gov.ng
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-sm mb-1">European Union</h4>
                <p className="text-sm text-foreground-muted">
                  Contact your national Data Protection Authority through the EDPB website:
                  <br />
                  <a href="https://edpb.europa.eu" className="text-trust hover:underline" target="_blank" rel="noopener noreferrer">
                    edpb.europa.eu
                  </a>
                </p>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>
    </>
  );
}
