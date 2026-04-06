"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/container";
import { Card } from "@/components/ui/card";
import {
  Scale,
  Check,
  X,
  AlertTriangle,
  Gavel,
  Shield,
  RefreshCw,
  Mail,
  Users,
} from "lucide-react";

const sections = [
  {
    id: "acceptance",
    title: "Acceptance of Terms",
    icon: Check,
    content: `By accessing or using NeronaHealth, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this platform.

These terms constitute a legally binding agreement between you and NeronaHealth Technologies Ltd. regarding your use of the platform. We recommend you read them carefully in their entirety.

Your continued use of NeronaHealth following any changes to these terms means you accept those changes.`,
  },
  {
    id: "use-license",
    title: "Use License",
    icon: Scale,
    content: `NeronaHealth grants you a personal, non-exclusive, non-transferable, and revocable license to use the platform for healthcare purposes in accordance with these terms.

PERMITTED USES:
• Creating personal or professional healthcare accounts
• Booking appointments with healthcare providers
• Accessing your medical records and health information
• Using AI triage and emergency dispatch features
• Communicating with healthcare providers through the platform

PROHIBITED USES:
• Reverse engineering or attempting to extract source code
• Using the platform for illegal purposes
• Sharing account credentials with others
• Attempting to access other users' data without authorization
• Interfering with or disrupting the platform's operations
• Using automated systems to access the platform without permission

Violations may result in immediate termination of your account.`,
  },
  {
    id: "user-accounts",
    title: "User Accounts",
    icon: Users,
    content: `You are responsible for maintaining the confidentiality of your account credentials and for all activities under your account. You must:

• Provide accurate, current, and complete information during registration
• Maintain and promptly update your account information
• Keep your password secure and confidential
• Notify us immediately of any unauthorized use or security breach
• Not share your account with others

HEALTHCARE PROVIDER ACCOUNTS:
Healthcare providers (doctors, hospitals, dispatchers) must verify their credentials and maintain accurate license information. Misrepresentation of credentials may result in immediate termination and potential legal action.

ACCOUNT TERMINATION:
We reserve the right to suspend or terminate accounts that violate these terms, engage in fraudulent activity, or pose risk to other users or the platform.`,
  },
  {
    id: "prohibited-uses",
    title: "Prohibited Uses",
    icon: X,
    content: `You may not use NeronaHealth:

• For any unlawful purpose or to solicit others to perform unlawful acts
• To violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances
• To infringe upon or violate our intellectual property rights or the intellectual property rights of others
• To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate
• To submit false or misleading information
• To upload or transmit viruses or any other type of malicious code
• To collect or track the personal information of others
• To spam, phish, pharm, pretext, spider, crawl, or scrape
• To interfere with or circumvent the security features of the platform

Any unauthorized use terminates the license granted to you and you are responsible for all damages.`,
  },
  {
    id: "limitations",
    title: "Limitations",
    icon: AlertTriangle,
    content: `NOT MEDICAL ADVICE:
NeronaHealth provides a platform for healthcare coordination but does not provide medical advice. The AI symptom triage is for informational purposes only and does not replace professional medical diagnosis or treatment. Always consult with qualified healthcare providers for medical decisions.

SERVICE LIMITATIONS:
• We do not guarantee the accuracy of information provided by healthcare providers
• Medical outcomes depend on many factors outside our control
• Emergency dispatch services are subject to availability and conditions
• Platform availability may be affected by maintenance, outages, or force majeure events

LIABILITY LIMITATIONS:
NeronaHealth shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of the platform. Our total liability shall not exceed the amount paid by you (if any) for accessing the platform.`,
  },
  {
    id: "intellectual-property",
    title: "Intellectual Property",
    icon: Gavel,
    content: `The platform, including all content, features, and functionality, is owned by NeronaHealth Technologies Ltd. and is protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.

OUR INTELLECTUAL PROPERTY:
• NeronaHealth name, logo, and brand identity are registered trademarks
• Platform design, code, and architecture are proprietary
• AI models and algorithms are trade secrets

YOUR CONTENT:
You retain ownership of content you submit (reviews, messages). By posting, you grant NeronaHealth a worldwide, non-exclusive license to use, display, and distribute that content in connection with the platform.

HEALTHCARE PROVIDER CONTENT:
Professional profiles, hospital information, and other provider-submitted content belongs to those providers. NeronaHealth displays this content but is not responsible for its accuracy.`,
  },
  {
    id: "modifications",
    title: "Modifications",
    icon: RefreshCw,
    content: `NeronaHealth reserves the right to modify these terms at any time. We will notify users of significant changes via:

• In-platform notification
• Email to registered users
• Prominent posting on our website

Minor changes may be posted without direct notification. Your continued use of the platform after modifications constitutes acceptance of the updated terms.

We encourage you to review these terms periodically. The last updated date appears at the top of this document.`,
  },
];

export default function TermsPage() {
  return (
    <>
      <section className="relative py-16 lg:py-24 overflow-hidden bg-gradient-to-br from-secondary-50 via-background to-background">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -left-20 w-72 h-72 bg-secondary-200/30 rounded-full blur-3xl" />
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
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary font-medium text-sm border border-secondary/20 mb-6"
            >
              <Scale className="w-4 h-4" />
              Last Updated: January 1, 2024
            </motion.div>

            <h1 className="font-display text-fluid-4xl lg:text-fluid-5xl font-bold">
              Terms of Service
            </h1>
            <p className="mt-6 text-fluid-lg text-foreground-muted max-w-2xl mx-auto">
              These terms govern your use of NeronaHealth. Please read them carefully before using our platform.
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
                className="text-sm font-medium text-foreground-muted hover:text-secondary transition-colors px-3 py-1.5 rounded-md hover:bg-muted"
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
                      <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                        <section.icon className="w-6 h-6 text-secondary" />
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
                <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-8 h-8 text-secondary" />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="font-display text-fluid-xl font-bold mb-2">
                    Questions About Our Terms?
                  </h3>
                  <p className="text-foreground-muted mb-4">
                    If you have questions about these terms, please contact our legal team.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                      <a
                        href="mailto:legal@neronahealth.com"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-secondary text-white rounded-lg font-semibold hover:bg-secondary-600 transition-colors"
                      >
                        <Mail className="w-4 h-4" />
                        legal@neronahealth.com
                      </a>
                    <a
                      href="/contact"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-secondary text-secondary rounded-lg font-semibold hover:bg-secondary hover:text-white transition-colors"
                    >
                      <Shield className="w-4 h-4" />
                      Contact Us
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