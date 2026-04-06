"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/container";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Mail, FileText, Users, Database, Lock, Clock, UserCheck } from "lucide-react";

const sections = [
  {
    id: "data-collection",
    title: "Data Collection",
    icon: Database,
    content: `NeronaHealth collects information you provide directly to us, including name, email address, phone number, date of birth, medical history, and any other information you choose to provide. We also automatically collect certain information when you use our platform, including:

• Device information (type, operating system, unique identifiers)
• Log data (access times, pages viewed, referring URL)
• Location data (with your consent, for finding nearby hospitals)
• Communications data (records of your communications with healthcare providers)

We collect this information to provide, personalize, and improve our services, including helping you find healthcare providers, book appointments, manage your health records, and facilitate emergency medical services.`,
  },
  {
    id: "data-use",
    title: "How We Use Your Data",
    icon: FileText,
    content: `NeronaHealth uses your information for the following purposes:

• Providing Healthcare Services: To facilitate appointments, emergency dispatch, and patient-provider communication
• Platform Improvement: To analyze usage patterns, troubleshoot issues, and enhance our platform
• Communication: To send appointment reminders, service updates, and healthcare notifications
• Security: To detect and prevent fraud, abuse, and security issues
• Compliance: To comply with legal obligations, including HIPAA and Nigerian health data regulations
• Research: Aggregated, anonymized data for healthcare research and public health improvement (with your consent)

We do not sell your personal health information to third parties under any circumstances.`,
  },
  {
    id: "data-sharing",
    title: "Data Sharing",
    icon: Users,
    content: `NeronaHealth may share your information in the following circumstances:

• With Healthcare Providers: To facilitate your care, we share relevant information with doctors, hospitals, and emergency services you connect with
• With Service Providers: Third-party vendors who perform services on our behalf (cloud hosting, analytics, customer support) - all bound by confidentiality agreements
• For Emergency Services: When necessary to protect your life or the life of another person
• Legal Requirements: When required by law, court order, or government request
• Business Transfers: In connection with merger, acquisition, or sale of assets (with notification)

All healthcare providers on our platform are bound by HIPAA compliance and confidentiality agreements.`,
  },
  {
    id: "data-retention",
    title: "Data Retention",
    icon: Clock,
    content: `NeronaHealth retains your information for as long as your account is active or as needed to provide you services, unless a longer retention period is required by law. Medical records are retained according to Nigerian health record regulations:

• Adult patient records: Minimum 7 years after last activity
• Minor patient records: Until patient reaches age 21 or minimum 7 years
• Emergency dispatch records: 5 years

You may request deletion of your account and associated data at any time. Some information may be retained in anonymized, aggregated form for analytics and research.`,
  },
  {
    id: "data-security",
    title: "Data Security",
    icon: Lock,
    content: `NeronaHealth implements industry-leading security measures to protect your health information:

• Encryption: All data encrypted in transit (TLS 1.3) and at rest (AES-256)
• Access Controls: Role-based access with multi-factor authentication
• Audit Logs: Comprehensive tracking of all data access and modifications
• HIPAA Compliance: Administrative, physical, and technical safeguards per HIPAA Security Rule
• Regular Audits: Third-party security assessments and penetration testing
• Employee Training: Mandatory privacy and security training for all staff

Despite our efforts, no method of electronic transmission or storage is 100% secure. We continuously work to improve our security practices.`,
  },
  {
    id: "user-rights",
    title: "Your Rights",
    icon: UserCheck,
    content: `As a NeronaHealth user, you have the following rights regarding your personal data:

• Access: Request a copy of your personal data
• Correction: Request correction of inaccurate information
• Deletion: Request deletion of your data (subject to legal retention requirements)
• Portability: Receive your data in a portable format
• Restriction: Limit processing in certain circumstances
• Objection: Object to processing for direct marketing

To exercise these rights, contact us at privacy@neronahealth.com. We will respond within 30 days. You also have the right to lodge a complaint with the Nigerian Data Protection Commission or relevant supervisory authority.`,
  },
];

export default function PrivacyPage() {
  return (
    <>
      <section className="relative py-16 lg:py-24 overflow-hidden bg-gradient-to-br from-trust-50 via-background to-background">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -right-20 w-72 h-72 bg-trust-200/30 rounded-full blur-3xl" />
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
              Last Updated: January 1, 2024
            </motion.div>

            <h1 className="font-display text-fluid-4xl lg:text-fluid-5xl font-bold">
              Privacy Policy
            </h1>
            <p className="mt-6 text-fluid-lg text-foreground-muted max-w-2xl mx-auto">
              NeronaHealth is committed to protecting your privacy. This policy explains how we collect, use, and safeguard your personal and health information.
            </p>
          </motion.div>
        </Container>
      </section>

      <section className="py-8 border-b bg-background sticky top-0 z-50">
        <Container size="lg">
          <nav className="flex flex-wrap gap-2">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="text-sm font-medium text-foreground-muted hover:text-trust transition-colors px-3 py-1.5 rounded-md hover:bg-muted"
              >
                {section.title}
              </a>
            ))}
          </nav>
        </Container>
      </section>

      <section className="py-16 lg:py-24">
        <Container size="lg">
          <div className="space-y-16">
            {sections.map((section, index) => (
              <motion.div
                key={section.id}
                id={section.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="overflow-hidden">
                  <div className="p-8">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-12 h-12 rounded-lg bg-trust/10 flex items-center justify-center flex-shrink-0">
                        <section.icon className="w-6 h-6 text-trust" />
                      </div>
                      <div>
                        <h2 className="font-display text-fluid-xl font-bold">{section.title}</h2>
                      </div>
                    </div>
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
                  <Mail className="w-8 h-8 text-trust" />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="font-display text-fluid-xl font-bold mb-2">
                    Questions About Privacy?
                  </h3>
                  <p className="text-foreground-muted mb-4">
                    Our Data Protection Officer is here to help. Contact us for any privacy-related inquiries.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                    <a
                      href="mailto:privacy@neronahealth.com"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-trust text-white rounded-lg font-semibold hover:bg-trust-600 transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                      privacy@neronahealth.com
                    </a>
                    <a
                      href="/data-protection"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-trust text-trust rounded-lg font-semibold hover:bg-trust hover:text-white transition-colors"
                    >
                      <Shield className="w-4 h-4" />
                      Data Protection
                    </a>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </Container>
      </section>
    </>
  );
}