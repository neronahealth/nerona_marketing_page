"use client";

import * as React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { HeroWorkflow } from "@/components/infographics/HeroWorkflow";

type RoleVariant = "patient" | "doctor" | "hospital" | "default";

interface HeroProps {
  badge?: string;
  title: React.ReactNode;
  description: string;
  primaryCta?: {
    text: string;
    href: string;
  };
  secondaryCta?: {
    text: string;
    href: string;
  };
  role?: RoleVariant;
  children?: React.ReactNode;
  showVisual?: boolean;
}

const roleColors: Record<RoleVariant, { gradient: string; accent: string }> = {
  patient: { gradient: "from-primary-100", accent: "primary" },
  doctor: { gradient: "from-trust-100", accent: "trust" },
  hospital: { gradient: "from-secondary-100", accent: "secondary" },
  default: { gradient: "from-accent-100", accent: "accent" },
};

const badgeColors: Record<RoleVariant, { bg: string; text: string; border: string; dot: string }> = {
  patient: { bg: "bg-primary-50", text: "text-primary-700", border: "border-primary-200", dot: "bg-primary-500" },
  doctor: { bg: "bg-trust-50", text: "text-trust-700", border: "border-trust-200", dot: "bg-trust-500" },
  hospital: { bg: "bg-secondary-50", text: "text-secondary-700", border: "border-secondary-200", dot: "bg-secondary-500" },
  default: { bg: "bg-accent-50", text: "text-accent-700", border: "border-accent-200", dot: "bg-accent-500" },
};

export function Hero({
  badge,
  title,
  description,
  primaryCta,
  secondaryCta,
  role = "default",
  children,
  showVisual = true,
}: HeroProps) {
  const colors = roleColors[role];
  const badgeStyle = badgeColors[role];

  return (
    <section className="relative min-h-[70vh] sm:min-h-[80vh] md:min-h-[90vh] flex items-center overflow-hidden bg-background">
      <div className="absolute inset-0">
        <div className={cn(
          "absolute inset-0 bg-gradient-to-br",
          colors.gradient,
          "to-background opacity-50"
        )} />
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary-200/40 dark:bg-primary-500/20 rounded-full blur-3xl" />
        <div className="absolute top-1/3 -left-20 w-80 h-80 bg-accent-200/30 dark:bg-accent-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-60 h-60 bg-secondary-200/30 dark:bg-secondary-500/10 rounded-full blur-2xl" />
      </div>

      <Container size="xl" className="relative z-10 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            {badge && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mb-6"
              >
                <span className={cn(
                  "inline-flex items-center gap-2 px-4 py-2 rounded-full font-medium text-sm border",
                  badgeStyle.bg,
                  badgeStyle.text,
                  badgeStyle.border
                )}>
                  <span className="relative flex h-2 w-2">
                    <span className={cn("animate-ping absolute inline-flex h-full w-full rounded-full opacity-75", badgeStyle.dot)} />
                    <span className={cn("relative inline-flex rounded-full h-2 w-2", badgeStyle.dot)} />
                  </span>
                  {badge}
                </span>
              </motion.div>
            )}

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="font-display text-fluid-3xl sm:text-fluid-4xl lg:text-fluid-5xl font-bold tracking-tight text-foreground"
            >
              {title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-6 text-fluid-lg text-foreground-muted leading-relaxed"
            >
              {description}
            </motion.p>

            {(primaryCta || secondaryCta) && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-10 flex flex-col sm:flex-row justify-center lg:justify-start gap-4"
              >
                {primaryCta && (
                  <Button size="xl" asChild>
                    <Link href={primaryCta.href}>{primaryCta.text}</Link>
                  </Button>
                )}
                {secondaryCta && (
                  <Button variant="outline" size="xl" asChild>
                    <Link href={secondaryCta.href}>{secondaryCta.text}</Link>
                  </Button>
                )}
              </motion.div>
            )}

            {children}
          </motion.div>

          {showVisual && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-col items-center justify-center lg:items-start"
            >
              <HeroWorkflow role={role === "doctor" ? "doctor" : role === "hospital" ? "hospital" : "patient"} />
            </motion.div>
          )}
        </div>
      </Container>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}