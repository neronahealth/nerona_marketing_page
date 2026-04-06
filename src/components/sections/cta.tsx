"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Phone, Shield, Clock } from "lucide-react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";

type CTAvariant = "primary" | "secondary" | "emergency" | "trust" | "patient" | "doctor" | "hospital";

interface CTASectionProps {
  title: string;
  description: string;
  primaryCta?: {
    text: string;
    href: string;
  };
  secondaryCta?: {
    text: string;
    href: string;
  };
  variant?: CTAvariant;
  showFeatures?: boolean;
}

const variantStyles: Record<CTAvariant, { bg: string }> = {
  primary: { bg: "bg-primary" },
  secondary: { bg: "bg-secondary" },
  emergency: { bg: "bg-emergency" },
  trust: { bg: "bg-trust" },
  patient: { bg: "bg-primary" },
  doctor: { bg: "bg-trust" },
  hospital: { bg: "bg-secondary" },
};

export function CTASection({
  title,
  description,
  primaryCta,
  secondaryCta,
  variant = "primary",
  showFeatures = true,
}: CTASectionProps) {
  const styles = variantStyles[variant];

  return (
    <section className={cn("relative overflow-hidden", styles.bg)}>
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
      </div>

      <Container size="xl" className="relative z-10 py-20 lg:py-32">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-fluid-2xl sm:text-fluid-3xl lg:text-fluid-4xl font-bold text-white"
          >
            {title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-fluid-lg text-white/90 max-w-2xl mx-auto leading-relaxed"
          >
            {description}
          </motion.p>

          {(primaryCta || secondaryCta) && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
            >
              {primaryCta && (
                <Button
                   size="xl"
                   className="bg-white text-primary hover:bg-white/90 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700 shadow-elevated"
                   asChild
                 >
                  <Link href={primaryCta.href}>
                    {primaryCta.text}
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
              )}
              {secondaryCta && (
                <Button
                  size="xl"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 hover:text-white"
                  asChild
                >
                  <Link href={secondaryCta.href}>{secondaryCta.text}</Link>
                </Button>
              )}
            </motion.div>
          )}

          {showFeatures && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-8 text-white/80"
            >
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                <span className="text-sm sm:text-base font-medium">HIPAA Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span className="text-sm sm:text-base font-medium">24/7 Support</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                <span className="text-sm sm:text-base font-medium">Emergency Ready</span>
              </div>
            </motion.div>
          )}
        </div>
      </Container>
    </section>
  );
}

export function EmergencyCTA() {
  return (
    <CTASection
      title="Need Emergency Care?"
      description="Don't wait. Connect with ambulances near you and get life-saving assistance within minutes. Every second counts."
      primaryCta={{ text: "Get Emergency Help", href: "/emergency" }}
      secondaryCta={{ text: "Learn More", href: "/features#emergency" }}
      variant="emergency"
    />
  );
}