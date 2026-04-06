"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Briefcase,
  Heart,
  Users,
  Coffee,
  Globe,
  TrendingUp,
  MapPin,
  Clock,
} from "lucide-react";

const openPositions = [
  {
    title: "Senior Frontend Engineer",
    department: "Engineering",
    location: "Lagos, Nigeria (Remote-friendly)",
    type: "Full-time",
    description:
      "Lead frontend development for our healthcare platform. Build performant, accessible React applications that millions rely on.",
    skills: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Backend Engineer",
    department: "Engineering",
    location: "Lagos, Nigeria (Hybrid)",
    type: "Full-time",
    description:
      "Design and scale our microservices architecture. Handle real-time data, integrate AI models, and ensure system reliability.",
    skills: ["Node.js", "Python", "PostgreSQL", "Kubernetes"],
  },
  {
    title: "Product Manager",
    department: "Product",
    location: "Lagos, Nigeria (Remote-friendly)",
    type: "Full-time",
    description:
      "Drive product strategy for our healthcare platform. Work with engineers, designers, and stakeholders to deliver impactful features.",
    skills: ["Product Strategy", "Analytics", "Healthcare Experience"],
  },
  {
    title: "DevOps Engineer",
    department: "Infrastructure",
    location: "Remote",
    type: "Full-time",
    description:
      "Build and maintain our cloud infrastructure. Ensure high availability, security, and performance for critical healthcare systems.",
    skills: ["AWS", "GCP", "Terraform", "CI/CD", "Security"],
  },
];

const benefits = [
  {
    icon: Heart,
    title: "Health Insurance",
    description: "Comprehensive health coverage for you and your dependents.",
  },
  {
    icon: Globe,
    title: "Remote-Friendly",
    description: "Work from anywhere with flexible scheduling options.",
  },
  {
    icon: Coffee,
    title: "Learning Budget",
    description: "Annual budget for courses, conferences, and certifications.",
  },
  {
    icon: TrendingUp,
    title: "Stock Options",
    description: "Equity ownership in a fast-growing healthcare startup.",
  },
  {
    icon: Users,
    title: "Team Retreats",
    description: "Quarterly off-sites and annual company retreats.",
  },
  {
    icon: Clock,
    title: "Flexible Time Off",
    description: "Unlimited PTO with manager approval. We trust you.",
  },
];

const culture = [
  {
    value: "Patient First",
    description: "Every decision we make improves healthcare access and outcomes.",
  },
  {
    value: "Excellence",
    description: "We ship high-quality products and hold ourselves to high standards.",
  },
  {
    value: "Innovation",
    description: "We embrace AI, new technologies, and creative problem-solving.",
  },
  {
    value: "Integrity",
    description: "We handle sensitive medical data with the highest trust and ethics.",
  },
];

export default function CareersPage() {
  return (
    <>
      <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-gradient-to-br from-primary-50 via-background to-accent-50">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-200/30 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-1/4 w-60 h-60 bg-accent-200/20 rounded-full blur-3xl" />
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
              <Badge className="bg-primary/10 text-primary border border-primary/20">
                We're Hiring
              </Badge>
            </motion.div>

            <h1 className="font-display text-fluid-4xl lg:text-fluid-5xl font-bold">
              Join the Future of <span className="text-primary">Healthcare</span>
            </h1>
            <p className="mt-6 text-fluid-lg text-foreground-muted max-w-2xl mx-auto">
              Build technology that saves lives. Work with passionate people across Africa to transform healthcare delivery for millions.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="xl" asChild>
                <a href="#open-positions">View Open Positions</a>
              </Button>
              <Button size="xl" variant="outline" asChild>
                <a href="#culture">Our Culture</a>
              </Button>
            </div>
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
            <h2 className="font-display text-fluid-2xl font-bold">Why Work With Us</h2>
            <p className="mt-4 text-foreground-muted">
              Join a mission-driven team building technology that matters.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-elevated transition-all duration-300">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <benefit.icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-foreground-muted">{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      <section id="culture" className="py-20 lg:py-32">
        <Container size="lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-fluid-2xl font-bold">Our Values</h2>
            <p className="mt-4 text-foreground-muted max-w-2xl mx-auto">
              The principles that guide everything we do.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {culture.map((value, index) => (
              <motion.div
                key={value.value}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-4"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                  <span className="font-display font-bold text-accent text-lg">
                    {index + 1}
                  </span>
                </div>
                <div>
                  <h3 className="font-display font-semibold text-lg mb-2">{value.value}</h3>
                  <p className="text-foreground-muted text-sm">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      <section id="open-positions" className="py-20 lg:py-32 bg-gradient-to-br from-trust-50 via-background to-secondary-50">
        <Container size="xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-fluid-2xl font-bold">Open Positions</h2>
            <p className="mt-4 text-foreground-muted">
    Find your next career opportunity with NeronaHealth.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {openPositions.map((position, index) => (
              <motion.div
                key={position.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-elevated transition-all duration-300 group">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-xl group-hover:text-primary transition-colors">
                          {position.title}
                        </CardTitle>
                        <div className="flex flex-wrap gap-2 mt-2">
                          <Badge variant="outline" className="text-xs">
                            {position.department}
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            <MapPin className="w-3 h-3 mr-1" />
                            {position.location}
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            <Clock className="w-3 h-3 mr-1" />
                            {position.type}
                          </Badge>
                        </div>
                      </div>
                      <Briefcase className="w-6 h-6 text-foreground-subtle" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-foreground-muted mb-4">{position.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {position.skills.map((skill) => (
                        <Badge key={skill} className="bg-muted text-foreground-muted text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                    <Button className="w-full" variant="outline" asChild>
                      <Link href="/contact">Apply Now</Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-foreground-muted">
              Don't see a role that fits?{" "}
              <Link href="/contact" className="text-primary hover:underline">
                Send us your resume
              </Link>{" "}
              and we'll keep you in mind for future openings.
            </p>
          </motion.div>
        </Container>
      </section>
    </>
  );
}
