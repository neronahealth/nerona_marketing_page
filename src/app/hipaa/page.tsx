"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/container";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ShieldCheck,
  Lock,
  UserCheck,
  FileText,
  AlertTriangle,
  Eye,
  Bell,
  Server,
  ClipboardList,
  Mail,
} from "lucide-react";

const hipaaRules = [
  {
    title: "Privacy Rule",
    description: "Protects your personal health information (PHI)",
    icon: Eye,
    details: [
      "Sets national standards for protection of individually identifiable health information",
      "Gives patients rights over their health information, including access and amendment",
      "Requires authorization before sharing PHI for non-treatment purposes",
      "Establishes minimum necessary standard for PHI use and disclosure",
  "NeronaHealth implements strict access controls limiting PHI access to authorized personnel",
    ],
  },
  {
    title: "Security Rule",
    description: "Technical, physical, and administrative safeguards",
    icon: Lock,
    details: [
      "Administrative safeguards: policies, training, risk analysis, and management",
      "Physical safeguards: facility access controls, workstation security, device controls",
      "Technical safeguards: access controls, audit controls, integrity controls, encryption",
      "All data encrypted in transit (TLS 1.3) and at rest (AES-256)",
      "Multi-factor authentication required for all staff accessing PHI",
      "Continuous security monitoring and vulnerability assessments",
    ],
  },
  {
    title: "Breach Notification Rule",
    description: "Timely notification of security incidents",
    icon: Bell,
    details: [
      "Notification within 60 days of discovering a breach affecting unsecured PHI",
      "Informs affected individuals about breach and steps taken to mitigate harm",
      "Reports breaches affecting 500+ individuals to media and HHS immediately",
  "NeronaHealth maintains incident response procedures for rapid containment",
      "Document and track all breach incidents for regulatory compliance",
    ],
  },
];

const safeguards = [
  {
    category: "Administrative Safeguards",
    icon: ClipboardList,
    items: [
      "Designated Privacy and Security Officers",
      "Workforce training on HIPAA compliance",
      "Access management procedures",
      "Contingency planning and disaster recovery",
      "Regular risk assessments and audits",
      "Vendor and business associate agreements",
    ],
  },
  {
    category: "Physical Safeguards",
    icon: Server,
    items: [
      "Secure data centers with controlled access",
      "Workstation security policies",
      "Device and media controls",
      "Visitor sign-in and escorts",
      "Clean desk and screen lock policies",
      "Backup and disaster recovery locations",
    ],
  },
  {
    category: "Technical Safeguards",
    icon: Lock,
    items: [
      "Unique user identification",
      "Automatic logoff after inactivity",
      "Encryption and decryption",
      "Audit controls and logging",
      "Integrity controls",
      "Transmission security",
    ],
  },
];

const patientRights = [
  {
    right: "Access Your Records",
  description: "Request copies of your medical records and health information maintained by NeronaHealth.",
  },
  {
    right: "Amend Your Records",
    description: "Request corrections to your health information if you believe it's inaccurate.",
  },
  {
    right: "Accounting of Disclosures",
    description: "Receive a list of instances where your PHI was disclosed for up to 6 years.",
  },
  {
    right: "Restrict Disclosures",
    description: "Request restrictions on certain uses and disclosures of your health information.",
  },
  {
    right: "Confidential Communications",
    description: "Request communications about your health information through preferred channels.",
  },
  {
    right: "File a Complaint",
  description: "File complaints with NeronaHealth or HHS if you believe your privacy rights were violated.",
  },
];

export default function HIPAAPage() {
  return (
    <>
      <section className="relative py-16 lg:py-24 overflow-hidden bg-gradient-to-br from-trust-50 via-background to-secondary-50">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -left-20 w-72 h-72 bg-trust-200/30 rounded-full blur-3xl" />
          <div className="absolute top-1/3 -right-10 w-64 h-64 bg-secondary-200/20 rounded-full blur-3xl" />
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
              <ShieldCheck className="w-4 h-4" />
              HIPAA Compliant Platform
            </motion.div>

            <h1 className="font-display text-fluid-4xl lg:text-fluid-5xl font-bold">
              HIPAA Compliance
            </h1>
            <p className="mt-6 text-fluid-lg text-foreground-muted max-w-2xl mx-auto">
  NeronaHealth is committed to protecting your health information in compliance with the Health Insurance Portability and Accountability Act (HIPAA).
            </p>
          </motion.div>
        </Container>
      </section>

      <section className="py-16 bg-muted">
        <Container size="xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-fluid-2xl font-bold">HIPAA Rules Compliance</h2>
            <p className="mt-4 text-foreground-muted max-w-2xl mx-auto">
              We comply with all HIPAA rules to ensure your health information is protected.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {hipaaRules.map((rule, index) => (
              <motion.div
                key={rule.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-elevated transition-all duration-300">
                  <div className="p-6">
                    <div className="w-12 h-12 rounded-lg bg-trust/10 flex items-center justify-center mb-4">
                      <rule.icon className="w-6 h-6 text-trust" />
                    </div>
                    <h3 className="font-display font-semibold text-lg mb-2">{rule.title}</h3>
                    <p className="text-sm text-foreground-muted mb-4">{rule.description}</p>
                    <ul className="space-y-2">
                      {rule.details.map((detail, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-foreground-muted">
                          <span className="w-1.5 h-1.5 rounded-full bg-trust mt-2 flex-shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 lg:py-24">
        <Container size="lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-fluid-2xl font-bold">Safeguards in Place</h2>
            <p className="mt-4 text-foreground-muted max-w-2xl mx-auto">
  NeronaHealth implements comprehensive safeguards across all categories.
            </p>
          </motion.div>

          <div className="space-y-8">
            {safeguards.map((safeguard, index) => (
              <motion.div
                key={safeguard.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="overflow-hidden">
                  <div className="p-8">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                        <safeguard.icon className="w-6 h-6 text-secondary" />
                      </div>
                      <div>
                        <h3 className="font-display text-fluid-xl font-bold">{safeguard.category}</h3>
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-3">
                      {safeguard.items.map((item, i) => (
                        <div key={i} className="flex items-center gap-2 p-3 bg-muted rounded-lg">
                          <ShieldCheck className="w-4 h-4 text-secondary flex-shrink-0" />
                          <span className="text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
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
            <h2 className="font-display text-fluid-2xl font-bold">Your Patient Rights</h2>
            <p className="mt-4 text-foreground-muted max-w-2xl mx-auto">
              Under HIPAA, you have specific rights regarding your health information.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {patientRights.map((right, index) => (
              <motion.div
                key={right.right}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="h-full p-6 hover:shadow-elevated transition-all duration-300">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-trust/10 flex items-center justify-center flex-shrink-0">
                      <UserCheck className="w-4 h-4 text-trust" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{right.right}</h3>
                      <p className="text-sm text-foreground-muted">{right.description}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 lg:py-24">
        <Container size="md">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="p-8">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="w-16 h-16 rounded-2xl bg-trust/10 flex items-center justify-center flex-shrink-0">
                  <AlertTriangle className="w-8 h-8 text-trust" />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="font-display text-fluid-xl font-bold mb-2">
                    File a HIPAA Complaint
                  </h3>
                  <p className="text-foreground-muted mb-4">
  If you believe your HIPAA rights have been violated, you can file a complaint with NeronaHealth or directly with the HHS Office for Civil Rights.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                    <a
  href="mailto:hipaa@neronahealth.com"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-trust text-white rounded-lg font-semibold hover:bg-trust-600 transition-colors"
                    >
                      <Mail className="w-4 h-4" />
  hipaa@neronahealth.com
                    </a>
                    <a
                      href="https://www.hhs.gov/ocr/privacy/hipaa/complaints/index.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-trust text-trust rounded-lg font-semibold hover:bg-trust hover:text-white transition-colors"
                    >
                      <FileText className="w-4 h-4" />
                      HHS Complaint Portal
                    </a>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </Container>
      </section>

      <section className="py-16 bg-muted">
        <Container size="lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-trust/10 text-trust font-medium text-sm border border-trust/20 mb-6">
              <ShieldCheck className="w-4 h-4" />
              Our Commitment
            </div>
            <h2 className="font-display text-fluid-2xl font-bold mb-4">
              Your Health Data Security is Our Priority
            </h2>
            <p className="text-foreground-muted max-w-2xl mx-auto">
  NeronaHealth maintains rigorous HIPAA compliance through continuous training, regular audits, and robust security measures. We treat your health information with the highest level of care and protection.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mt-6">
              <Badge className="bg-trust/10 text-trust text-sm">HIPAA Compliant</Badge>
              <Badge className="bg-secondary/10 text-secondary text-sm">GDPR Compliant</Badge>
              <Badge className="bg-accent/10 text-accent text-sm">SOC 2 Type II</Badge>
              <Badge className="bg-primary/10 text-primary text-sm">ISO 27001</Badge>
            </div>
          </motion.div>
        </Container>
      </section>
    </>
  );
}
