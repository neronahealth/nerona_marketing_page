"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/container";
import { Card } from "@/components/ui/card";
import { Cookie, Info, Settings, BarChart3, Shield, Mail } from "lucide-react";

const cookieCategories = [
  {
    category: "Essential Cookies",
    purpose: "Required for the platform to function properly",
    examples: [
      "Session tokens for authentication and login",
      "Security tokens to prevent CSRF attacks",
      "Load balancing preferences",
      "Privacy preferences (cookie consent)",
    ],
    retention: "Session duration up to 1 year",
    canOptOut: false,
  },
  {
    category: "Functional Cookies",
    purpose: "Remember your preferences and settings",
    examples: [
      "Language preferences",
      "Location settings for hospital discovery",
      "Remember login status",
      "Accessibility settings",
    ],
    retention: "1 year",
    canOptOut: true,
  },
  {
    category: "Analytics Cookies",
    purpose: "Help us understand how you use our platform",
    examples: [
      "Page views and user flows",
      "Time spent on pages",
      "Feature usage patterns",
      "Error and bug tracking",
    ],
    retention: "2 years",
    canOptOut: true,
  },
  {
    category: "Marketing Cookies",
    purpose: "Deliver relevant advertisements and measure campaign effectiveness",
    examples: [
      "Ad personalization",
      "Campaign tracking",
      "Conversion measurement",
      "Remarketing pixels",
    ],
    retention: "90 days - 2 years",
    canOptOut: true,
  },
];

const thirdPartyCookies = [
  { service: "Google Analytics", purpose: "Analytics and user behavior tracking", optOut: true },
  { service: "Google reCAPTCHA", purpose: "Spam prevention and bot detection", optOut: false },
  { service: "Intercom", purpose: "Customer support chat", optOut: true },
  { service: "Facebook Pixel", purpose: "Marketing and conversion tracking", optOut: true },
];

export default function CookiesPage() {
  return (
    <>
      <section className="relative py-16 lg:py-24 overflow-hidden bg-gradient-to-br from-accent-50 via-background to-background">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -right-20 w-72 h-72 bg-accent-200/30 rounded-full blur-3xl" />
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
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent font-medium text-sm border border-accent/20 mb-6"
            >
              <Cookie className="w-4 h-4" />
              Last Updated: January 1, 2024
            </motion.div>

            <h1 className="font-display text-fluid-4xl lg:text-fluid-5xl font-bold">
              Cookie Policy
            </h1>
            <p className="mt-6 text-fluid-lg text-foreground-muted max-w-2xl mx-auto">
  This policy explains how NeronaHealth uses cookies and similar technologies to improve your experience.
            </p>
          </motion.div>
        </Container>
      </section>

      <section className="py-16 lg:py-24">
        <Container size="lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 mb-12">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Info className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h2 className="font-display text-fluid-xl font-bold mb-2">What Are Cookies?</h2>
                  <p className="text-foreground-muted">
                    Cookies are small text files stored on your device when you visit a website. They help us provide essential functionality, remember your preferences, understand how you use our platform, and deliver personalized content. You can manage your cookie preferences at any time through your browser settings or our cookie consent tool.
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="font-display text-fluid-2xl font-bold mb-6">Cookie Categories</h2>
            <div className="space-y-6">
              {cookieCategories.map((category, index) => (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="overflow-hidden">
                    <div className="p-6 border-b bg-muted/30">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <h3 className="font-display font-semibold text-lg">{category.category}</h3>
                        <div className="flex items-center gap-2">
                          {category.canOptOut ? (
                            <span className="text-xs px-2 py-1 rounded-full bg-secondary/10 text-secondary font-medium">
                              Can Opt Out
                            </span>
                          ) : (
                            <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary font-medium">
                              Essential
                            </span>
                          )}
                        </div>
                      </div>
                      <p className="text-sm text-foreground-muted mt-1">{category.purpose}</p>
                    </div>
                    <div className="p-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-medium text-sm text-foreground mb-3">Examples:</h4>
                          <ul className="space-y-2">
                            {category.examples.map((example) => (
                              <li key={example} className="flex items-start gap-2 text-sm text-foreground-muted">
                                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                                {example}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium text-sm text-foreground mb-3">Retention Period:</h4>
                          <p className="text-sm text-foreground-muted">{category.retention}</p>
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <Card className="p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Settings className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h2 className="font-display text-fluid-xl font-bold mb-2">Managing Cookie Preferences</h2>
                  <p className="text-foreground-muted">
  NeronaHealth respects your choices regarding cookies. Here's how you can manage your cookie preferences:
                  </p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
  <h4 className="font-medium mb-2">Through NeronaHealth</h4>
                  <p className="text-sm text-foreground-muted">
                    Click the "Cookie Preferences" link in our footer or during your first visit to manage which cookies you accept. Your preferences will be saved for future visits.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Through Your Browser</h4>
                  <p className="text-sm text-foreground-muted">
                    Most browsers allow you to block or delete cookies. Check your browser settings for cookie management options. Note: blocking essential cookies may affect platform functionality.
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="font-display text-fluid-2xl font-bold mb-6">Third-Party Cookies</h2>
            <Card className="overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-muted/30 border-b">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-medium">Service</th>
                      <th className="px-6 py-4 text-left text-sm font-medium">Purpose</th>
                      <th className="px-6 py-4 text-left text-sm font-medium">Can Opt Out</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    {thirdPartyCookies.map((cookie) => (
                      <tr key={cookie.service} className="hover:bg-muted/20">
                        <td className="px-6 py-4 text-sm font-medium">{cookie.service}</td>
                        <td className="px-6 py-4 text-sm text-foreground-muted">{cookie.purpose}</td>
                        <td className="px-6 py-4 text-sm">
                          {cookie.optOut ? (
                            <span className="text-secondary font-medium">Yes</span>
                          ) : (
                            <span className="text-primary font-medium">No</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="p-8">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-8 h-8 text-accent" />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="font-display text-fluid-xl font-bold mb-2">
                    Questions About Cookies?
                  </h3>
                  <p className="text-foreground-muted mb-4">
                    Contact our privacy team for more information about our cookie usage.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                    <a
  href="mailto:privacy@neronahealth.com"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-accent text-foreground rounded-lg font-semibold hover:bg-accent-600 transition-colors"
                    >
                      <Mail className="w-4 h-4" />
  privacy@neronahealth.com
                    </a>
                    <a
                      href="/privacy"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-accent text-accent rounded-lg font-semibold hover:bg-accent hover:text-foreground transition-colors"
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
    </>
  );
}
