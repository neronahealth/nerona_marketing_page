"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Megaphone, FileText, Download, Mail, Calendar } from "lucide-react";

const pressReleases = [
  {
    date: "March 15, 2024",
  title: "NeronaHealth Raises $10M Series A to Expand Healthcare Access Across Africa",
    summary:
  "NeronaHealth announces Series A funding led by venture partners to accelerate growth and expand to 10 new markets.",
    category: "Funding",
  },
  {
    date: "February 28, 2024",
  title: "NeronaHealth Partnership with Federal Ministry of Health to Improve Emergency Response",
    summary:
      "National partnership aims to reduce emergency response times by 40% through AI-powered dispatch coordination.",
    category: "Partnership",
  },
  {
    date: "January 10, 2024",
  title: "NeronaHealth Reaches 1 Million Patient Milestone",
    summary:
      "Platform celebrates serving over 1 million patients across Nigeria with healthcare appointment bookings and emergency services.",
    category: "Milestone",
  },
  {
    date: "December 5, 2023",
    title: "New AI Symptom Triage Reduces Unnecessary Hospital Visits by 35%",
    summary:
      "Latest feature uses machine learning to help patients determine urgency of symptoms and find appropriate care level.",
    category: "Product",
  },
];

const mediaKitItems = [
  {
    title: "Logo Pack",
  description: "NeronaHealth logos in various formats (PNG, SVG, EPS)",
    icon: FileText,
    download: "#",
  },
  {
    title: "Brand Guidelines",
    description: "Official brand colors, typography, and usage guidelines",
    icon: FileText,
    download: "#",
  },
  {
    title: "Executive Photos",
  description: "High-resolution photos of NeronaHealth leadership team",
    icon: FileText,
    download: "#",
  },
  {
    title: "Product Screenshots",
  description: "High-resolution screenshots of the NeronaHealth platform",
    icon: FileText,
    download: "#",
  },
];

const quickFacts = [
  { label: "Founded", value: "2022" },
  { label: "Location", value: "Lagos, Nigeria" },
  { label: "Patients Served", value: "1M+" },
  { label: "Partner Hospitals", value: "500+" },
  { label: "Active Doctors", value: "2,000+" },
  { label: "Emergency Dispatches", value: "15,000+" },
];

export default function PressPage() {
  return (
    <>
      <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-gradient-to-br from-trust-50 via-background to-secondary-50">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -right-20 w-72 h-72 bg-trust-200/30 rounded-full blur-3xl" />
          <div className="absolute top-1/2 -left-10 w-64 h-64 bg-accent-200/20 rounded-full blur-3xl" />
        </div>
        <Container size="xl" className="relative z-10 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-6"
            >
              <Badge className="bg-trust/10 text-trust border border-trust/20">
                Press & Media
              </Badge>
            </motion.div>

            <h1 className="font-display text-fluid-4xl lg:text-fluid-5xl font-bold">
              Press & <span className="text-trust">Media Resources</span>
            </h1>
            <p className="mt-6 text-fluid-lg text-foreground-muted max-w-2xl mx-auto">
  Find the latest news, media assets, and contact information for NeronaHealth.
            </p>
          </motion.div>
        </Container>
      </section>

      <section className="py-20 bg-muted">
        <Container size="xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-fluid-2xl font-bold">Quick Facts</h2>
            <p className="mt-4 text-foreground-muted">
  Key figures about NeronaHealth at a glance.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {quickFacts.map((fact, index) => (
              <motion.div
                key={fact.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="text-center"
              >
                <Card className="h-full">
                  <CardContent className="pt-6">
                    <div className="font-display text-2xl font-bold text-trust">{fact.value}</div>
                    <div className="mt-1 text-sm text-foreground-muted">{fact.label}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      <section id="press-kit" className="py-20 lg:py-32">
        <Container size="xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-fluid-2xl font-bold">Media Kit</h2>
            <p className="mt-4 text-foreground-muted">
              Download official logos, brand guidelines, and media assets.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mediaKitItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-elevated transition-all duration-300 group">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-trust/10 flex items-center justify-center mb-4 group-hover:bg-trust/20 transition-colors">
                      <item.icon className="w-6 h-6 text-trust" />
                    </div>
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-foreground-muted mb-4">{item.description}</p>
                    <Button variant="outline" size="sm" className="w-full">
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      <section id="releases" className="py-20 bg-gradient-to-br from-background via-muted to-background">
        <Container size="lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-fluid-2xl font-bold">Recent Press Releases</h2>
            <p className="mt-4 text-foreground-muted">
  Stay up to date with NeronaHealth's latest announcements.
            </p>
          </motion.div>

          <div className="space-y-6">
            {pressReleases.map((release, index) => (
              <motion.div
                key={release.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="hover:shadow-elevated transition-all duration-300 cursor-pointer">
                  <CardContent className="py-6">
                    <div className="flex flex-col md:flex-row md:items-center gap-4">
                      <div className="flex-shrink-0">
                        <div className="flex items-center gap-2 text-sm text-foreground-muted">
                          <Calendar className="w-4 h-4" />
                          {release.date}
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="outline" className="text-xs">{release.category}</Badge>
                        </div>
                        <h3 className="font-display font-semibold text-lg mb-1">{release.title}</h3>
                        <p className="text-sm text-foreground-muted">{release.summary}</p>
                      </div>
                      <div className="flex-shrink-0">
                        <Button variant="outline" size="sm">
                          Read More
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      <section id="contact" className="py-20 lg:py-32">
        <Container size="md">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardContent className="py-12">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 rounded-2xl bg-trust/10 flex items-center justify-center">
                      <Megaphone className="w-10 h-10 text-trust" />
                    </div>
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <h2 className="font-display text-fluid-2xl font-bold mb-2">
                      Media Inquiries
                    </h2>
                    <p className="text-foreground-muted mb-4">
                      For press inquiries, interview requests, and media partnerships, please contact our communications team.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                      <Button size="lg" asChild>
  <a href="mailto:press@neronahealth.com">
                          <Mail className="w-4 h-4 mr-2" />
  press@neronahealth.com
                        </a>
                      </Button>
                      <Button size="lg" variant="outline" asChild>
                        <a href="/contact">Contact Form</a>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </Container>
      </section>
    </>
  );
}
