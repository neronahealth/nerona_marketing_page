"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  MessageSquare,
  Brain,
  Building2,
  Calendar,
  Activity,
  Heart,
  Users,
  Clock,
  AlertTriangle,
  Phone,
  MapPin,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";

interface WorkflowStep {
  icon: LucideIcon;
  label: string;
  description: string;
  color: "primary" | "secondary" | "accent" | "trust" | "emergency";
}

interface WorkflowData {
  title: string;
  subtitle: string;
  steps: WorkflowStep[];
  stats: Array<{ icon: LucideIcon; value: string; label: string; color?: string }>;
}

type RoleType = "patient" | "doctor" | "hospital" | "dispatcher";

interface HeroWorkflowProps {
  role?: RoleType;
  className?: string;
  showStats?: boolean;
  animated?: boolean;
}

const roleWorkflows: Record<RoleType, WorkflowData> = {
  patient: {
    title: "Your Health Journey",
    subtitle: "AI-powered healthcare at your fingertips",
    steps: [
      { icon: MessageSquare, label: "Describe", description: "Tell symptoms", color: "primary" },
      { icon: Brain, label: "Analyze", description: "AI processes", color: "accent" },
      { icon: Building2, label: "Match", description: "Find care", color: "secondary" },
      { icon: Calendar, label: "Book", description: "Schedule", color: "trust" },
    ],
    stats: [
      { icon: Clock, value: "30s", label: "AI Response" },
      { icon: Activity, value: "95%", label: "Accuracy" },
      { icon: Users, value: "50K+", label: "Patients" },
    ],
  },
  doctor: {
    title: "Streamlined Practice",
    subtitle: "Focus on care, not paperwork",
    steps: [
      { icon: Users, label: "Manage", description: "Patient queue", color: "trust" },
      { icon: Activity, label: "Review", description: "AI triage", color: "primary" },
      { icon: Calendar, label: "Schedule", description: "Set availability", color: "accent" },
      { icon: Heart, label: "Care", description: "Treat", color: "secondary" },
    ],
    stats: [
      { icon: Users, value: "2000+", label: "Doctors" },
      { icon: Clock, value: "50%", label: "Time Saved" },
      { icon: Activity, value: "98%", label: "Satisfaction" },
    ],
  },
  hospital: {
    title: "Hospital Dashboard",
    subtitle: "Complete healthcare management",
    steps: [
      { icon: Building2, label: "Register", description: "List hospital", color: "secondary" },
      { icon: Users, label: "Manage", description: "Add doctors", color: "trust" },
      { icon: Calendar, label: "Track", description: "Monitor", color: "primary" },
      { icon: Activity, label: "Analyze", description: "Analytics", color: "accent" },
    ],
    stats: [
      { icon: Building2, value: "500+", label: "Hospitals" },
      { icon: Users, value: "2M+", label: "Patients" },
      { icon: Activity, value: "40%", label: "Growth" },
    ],
  },
  dispatcher: {
    title: "Emergency Response",
    subtitle: "Rapid ambulance dispatch",
    steps: [
      { icon: Phone, label: "Receive", description: "Call", color: "emergency" },
      { icon: MapPin, label: "Locate", description: "Find unit", color: "accent" },
      { icon: AlertTriangle, label: "Dispatch", description: "Send unit", color: "primary" },
      { icon: Heart, label: "Care", description: "Transport", color: "secondary" },
    ],
    stats: [
      { icon: Clock, value: "<5min", label: "Response" },
      { icon: Activity, value: "24/7", label: "Available" },
      { icon: Users, value: "100+", label: "Ambulances" },
    ],
  },
};

const colorConfig = {
  primary: { bg: "bg-primary-500", light: "bg-primary-50 dark:bg-primary-900/30", text: "text-primary-600 dark:text-primary-400", border: "border-primary-500 dark:border-primary-400" },
  secondary: { bg: "bg-secondary-500", light: "bg-secondary-50 dark:bg-secondary-900/30", text: "text-secondary-600 dark:text-secondary-400", border: "border-secondary-500 dark:border-secondary-400" },
  accent: { bg: "bg-accent-500", light: "bg-accent-50 dark:bg-accent-900/30", text: "text-accent-600 dark:text-accent-400", border: "border-accent-500 dark:border-accent-400" },
  trust: { bg: "bg-trust-500", light: "bg-trust-50 dark:bg-trust-900/30", text: "text-trust-600 dark:text-trust-400", border: "border-trust-500 dark:border-trust-400" },
  emergency: { bg: "bg-emergency-500", light: "bg-emergency-50 dark:bg-emergency-900/30", text: "text-emergency-600 dark:text-emergency-400", border: "border-emergency-500 dark:border-emergency-400" },
};

export const HeroWorkflow: React.FC<HeroWorkflowProps> = ({
  role = "patient",
  className,
  showStats = true,
  animated = true,
}) => {
  const workflow = roleWorkflows[role];

  return (
    <div className={cn("w-full py-8 lg:py-12", className)}>
      <div className="text-center mb-8">
        <h3 className="text-xl lg:text-2xl font-display font-bold text-foreground dark:text-foreground">
          {workflow.title}
        </h3>
        <p className="mt-1 text-sm text-foreground-muted dark:text-foreground-muted">
          {workflow.subtitle}
        </p>
      </div>

      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-4 lg:gap-2">
        {workflow.steps.map((step, index) => {
          const Icon = step.icon;
          const colors = colorConfig[step.color];
          const isLast = index === workflow.steps.length - 1;

          return (
            <React.Fragment key={step.label}>
              <motion.div
                initial={animated ? { opacity: 0, y: 20 } : false}
                whileInView={animated ? { opacity: 1, y: 0 } : undefined}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                className="flex flex-col items-center text-center w-20 sm:w-24 lg:w-32"
              >
                <div className={cn(
                  "w-12 h-12 lg:w-14 lg:h-14 rounded-xl flex items-center justify-center mb-2",
                  colors.light
                )}>
                  <Icon className={cn("w-5 h-5 lg:w-6 lg:h-6", colors.text)} />
                </div>
                
                <div className={cn(
                  "w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold text-white -mt-1 mb-2",
                  colors.bg
                )}>
                  {index + 1}
                </div>

                <p className="font-semibold text-sm text-foreground dark:text-foreground">
                  {step.label}
                </p>
                <p className="text-sm sm:text-base text-foreground-muted dark:text-foreground-muted">
                  {step.description}
                </p>
              </motion.div>

              {!isLast && (
                <motion.div
                  initial={animated ? { opacity: 0 } : false}
                  whileInView={animated ? { opacity: 1 } : undefined}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.1 + 0.15 }}
                  className="flex items-center justify-center w-8 flex-shrink-0 pt-8"
                >
                  <ArrowRight className="w-4 h-4 text-slate-400 dark:text-slate-500" />
                </motion.div>
              )}
            </React.Fragment>
          );
        })}
      </div>

      {showStats && (
        <motion.div
          initial={animated ? { opacity: 0, y: 20 } : false}
          whileInView={animated ? { opacity: 1, y: 0 } : undefined}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: 0.5 }}
          className="mt-8 lg:mt-10 flex flex-wrap justify-center gap-6 lg:gap-10"
        >
          {workflow.stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="flex flex-col items-center text-center">
                <Icon className="w-5 h-5 mb-1 text-slate-400 dark:text-slate-500" />
                <span className="text-xl lg:text-2xl font-bold text-foreground dark:text-foreground">
                  {stat.value}
                </span>
                <span className="text-xs text-foreground-muted dark:text-foreground-muted">
                  {stat.label}
                </span>
              </div>
            );
          })}
        </motion.div>
      )}
    </div>
  );
};