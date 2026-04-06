"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Container } from "@/components/layout/container";
import { FeatureIllustration } from "@/components/infographics";
import {
  Stethoscope,
  Building2,
  Calendar,
  Ambulance,
  FileText,
  Users,
  type LucideIcon,
} from "lucide-react";

type RoleAccent = "patient" | "doctor" | "hospital" | "dispatcher" | "admin" | "default";

type IllustrationType = "ai-triage" | "emergency-dispatch" | "hospital-discovery" | "appointment-booking";

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
  role?: RoleAccent;
  illustration?: IllustrationType;
}

interface FeatureGridProps {
  features: Feature[];
  columns?: 2 | 3 | 4;
  title?: string;
  description?: string;
  showIllustrations?: boolean;
}

const iconColors: Record<RoleAccent, { bg: string; icon: string; gradient: string }> = {
  patient: {
    bg: "bg-primary-50 dark:bg-primary-900/30",
    icon: "text-primary-600 dark:text-primary-400",
    gradient: "from-primary-500/10",
  },
  doctor: {
    bg: "bg-trust-50 dark:bg-trust-900/30",
    icon: "text-trust-600 dark:text-trust-400",
    gradient: "from-trust-500/10",
  },
  hospital: {
    bg: "bg-secondary-50 dark:bg-secondary-900/30",
    icon: "text-secondary-600 dark:text-secondary-400",
    gradient: "from-secondary-500/10",
  },
  dispatcher: {
    bg: "bg-emergency-50 dark:bg-emergency-900/30",
    icon: "text-emergency-600 dark:text-emergency-400",
    gradient: "from-emergency-500/10",
  },
  admin: {
    bg: "bg-slate-50 dark:bg-slate-700/30",
    icon: "text-foreground-muted dark:text-foreground-muted",
    gradient: "from-slate-500/10",
  },
  default: {
    bg: "bg-accent-50 dark:bg-accent-900/30",
    icon: "text-accent-600 dark:text-accent-400",
    gradient: "from-accent-500/10",
  },
};

export function FeatureGrid({
  features,
  columns = 3,
  title,
  description,
  showIllustrations = false,
}: FeatureGridProps) {
  const gridCols = {
    2: "grid-cols-1 sm:grid-cols-2",
    3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
  };

  const illustrationMap: Record<string, "ai-triage" | "emergency-dispatch" | "hospital-discovery" | "appointment-booking"> = {
    "AI-Powered Triage": "ai-triage",
    "Emergency Dispatch": "emergency-dispatch",
    "Hospital Discovery": "hospital-discovery",
    "Smart Scheduling": "appointment-booking",
  };

  return (
    <section className="py-20 lg:py-32 bg-white dark:bg-slate-900">
      <Container size="xl">
        {(title || description) && (
          <div className="text-center max-w-3xl mx-auto mb-16">
            {title && (
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="font-display text-fluid-3xl font-bold tracking-tight text-foreground"
              >
                {title}
              </motion.h2>
            )}
            {description && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="mt-4 text-fluid-lg text-foreground-muted"
              >
                {description}
              </motion.p>
            )}
          </div>
        )}

        {showIllustrations && features.slice(0, 2).map((feature, index) => {
          const illustrationVariant = illustrationMap[feature.title] || "ai-triage";
          return (
            <motion.div
              key={`illustration-${feature.title}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="mb-12"
            >
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <FeatureIllustration
                    feature={illustrationVariant}
                    animated
                     className="h-auto sm:h-[300px] md:h-[350px]"
                  />
                </div>
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className={cn(
                        "inline-flex h-12 w-12 items-center justify-center rounded-xl",
                        iconColors[feature.role || "default"].bg
                      )}
                    >
                      <feature.icon className={cn("w-6 h-6", iconColors[feature.role || "default"].icon)} />
                    </div>
                  </div>
                  <h3 className="font-display text-2xl font-semibold text-foreground mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-foreground-muted leading-relaxed text-lg">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}

        <div className={cn("grid gap-8 lg:gap-12", gridCols[columns])}>
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const colors = iconColors[feature.role || "default"];

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-900 p-6 sm:p-8 transition-all duration-300 hover:shadow-soft dark:hover:shadow-none dark:border dark:border-slate-700 h-full">
                  <div
                    className={cn(
                      "absolute inset-0 bg-gradient-to-br",
                      colors.gradient,
                      "to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    )}
                  />

                  <div className="relative">
                    <div
                       className={cn(
                         "mb-5 inline-flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-xl",
                         colors.bg,
                         "group-hover:scale-110 transition-transform duration-300"
                       )}
                     >
                       <Icon className={cn("w-6 h-6 sm:w-7 sm:h-7", colors.icon)} />
                    </div>

                    <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                      {feature.title}
                    </h3>

                    <p className="text-foreground-muted leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

const defaultFeatures: Feature[] = [
  {
    icon: Stethoscope,
    title: "AI-Powered Triage",
    description:
      "Describe your symptoms and get instant AI analysis to understand urgency and appropriate care type. No more guessing where to go.",
    role: "patient",
    illustration: "ai-triage",
  },
  {
    icon: Building2,
    title: "Hospital Discovery",
    description:
      "Find verified hospitals near you with real-time capacity information, services, and pricing. Compare before you go.",
    role: "hospital",
    illustration: "hospital-discovery",
  },
  {
    icon: Calendar,
    title: "Smart Scheduling",
    description:
      "Book appointments with available doctors instantly. Get reminders and manage your healthcare journey seamlessly.",
    role: "doctor",
    illustration: "appointment-booking",
  },
  {
    icon: Ambulance,
    title: "Emergency Dispatch",
    description:
      "Request emergency assistance with real-time ambulance tracking. Life-saving response when every second counts.",
    role: "dispatcher",
    illustration: "emergency-dispatch",
  },
  {
    icon: FileText,
    title: "Medical Records",
    description:
      "Secure digital records accessible anywhere. Share with healthcare providers instantly when needed.",
    role: "admin",
  },
  {
    icon: Users,
    title: "Multi-Platform Care",
    description:
      "One platform for patients, doctors, hospitals, and emergency services. Healthcare coordination made simple.",
    role: "default",
  },
];

export function DefaultFeatures() {
  return <FeatureGrid features={defaultFeatures} columns={3} />;
}