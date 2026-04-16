"use client";

import * as React from "react";
import { motion, useInView } from "framer-motion";
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
  User,
  Stethoscope,
  Phone,
  MapPin,
  CheckCircle2,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";

interface RoleStep {
  icon: LucideIcon;
  title: string;
  description: string;
  color: "primary" | "secondary" | "accent" | "trust" | "emergency";
}

interface RoleConfig {
  name: string;
  subtitle: string;
  description: string;
  gradient: string;
  steps: RoleStep[];
  stats: Array<{ icon: LucideIcon; value: string; label: string }>;
  features: string[];
}

type UserRole = "patient" | "doctor" | "hospital" | "dispatcher";

interface RoleBasedInfographicProps {
  role?: UserRole;
  variant?: "full" | "compact" | "minimal";
  showJourney?: boolean;
  showStats?: boolean;
  className?: string;
}

const colorConfig = {
  primary: {
    bg: "bg-primary-500",
    bgLight: "bg-primary-50 dark:bg-primary-900/30",
    text: "text-primary-600 dark:text-primary-400",
    border: "border-primary-500",
  },
  secondary: {
    bg: "bg-secondary-500",
    bgLight: "bg-secondary-50 dark:bg-secondary-900/30",
    text: "text-secondary-600 dark:text-secondary-400",
    border: "border-secondary-500",
  },
  accent: {
    bg: "bg-accent-500",
    bgLight: "bg-accent-50 dark:bg-accent-900/30",
    text: "text-accent-600 dark:text-accent-400",
    border: "border-accent-500",
  },
  trust: {
    bg: "bg-trust-500",
    bgLight: "bg-trust-50 dark:bg-trust-900/30",
    text: "text-trust-600 dark:text-trust-400",
    border: "border-trust-500",
  },
  emergency: {
    bg: "bg-emergency-500",
    bgLight: "bg-emergency-50 dark:bg-emergency-900/30",
    text: "text-emergency-600 dark:text-emergency-400",
    border: "border-emergency-500",
  },
};

const roleConfigs: Record<UserRole, RoleConfig> = {
  patient: {
    name: "Patient Journey",
    subtitle: "Your health, simplified",
    description: "From symptom to solution in minutes, not hours",
    gradient: "from-primary-500/20 via-accent-500/10 to-trust-500/20",
    steps: [
      { icon: MessageSquare, title: "Describe", description: "Tell us your symptoms naturally", color: "primary" },
      { icon: Brain, title: "Analyze", description: "AI processes your input instantly", color: "accent" },
      { icon: Building2, title: "Match", description: "Find the perfect healthcare provider", color: "secondary" },
      { icon: Calendar, title: "Book", description: "Schedule your appointment easily", color: "trust" },
    ],
    stats: [
      { icon: Clock, value: "30s", label: "Average Response" },
      { icon: Activity, value: "95%", label: "Accuracy Rate" },
      { icon: Users, value: "50K+", label: "Happy Patients" },
    ],
    features: ["24/7 availability", "Instant AI triage", "Secure health records", "Multi-language support"],
  },
  doctor: {
    name: "Doctor Workflow",
    subtitle: "Focus on care, not administration",
    description: "Streamlined practice management for healthcare professionals",
    gradient: "from-trust-500/20 via-primary-500/10 to-secondary-500/20",
    steps: [
      { icon: Users, title: "Manage", description: "Organize your patient queue", color: "trust" },
      { icon: Activity, title: "Review", description: "AI provides triage insights", color: "primary" },
      { icon: Calendar, title: "Schedule", description: "Set your availability", color: "accent" },
      { icon: Heart, title: "Care", description: "Deliver quality treatment", color: "secondary" },
    ],
    stats: [
      { icon: Users, value: "2000+", label: "Active Doctors" },
      { icon: Clock, value: "50%", label: "Time Saved" },
      { icon: Activity, value: "98%", label: "Satisfaction" },
    ],
    features: ["Smart scheduling", "AI-assisted diagnosis", "Patient management", "Telehealth ready"],
  },
  hospital: {
    name: "Hospital Dashboard",
    subtitle: "Complete healthcare management",
    description: "Powerful tools for healthcare facility administration",
    gradient: "from-secondary-500/20 via-trust-500/10 to-primary-500/20",
    steps: [
      { icon: Building2, title: "Register", description: "List your facility", color: "secondary" },
      { icon: Users, title: "Manage", description: "Add doctors and services", color: "trust" },
      { icon: Calendar, title: "Monitor", description: "Track appointments", color: "primary" },
      { icon: Activity, title: "Analyze", description: "View detailed analytics", color: "accent" },
    ],
    stats: [
      { icon: Building2, value: "500+", label: "Partner Hospitals" },
      { icon: Users, value: "2M+", label: "Patients Reached" },
      { icon: Activity, value: "40%", label: "Growth Rate" },
    ],
    features: ["Resource optimization", "Performance metrics", "Staff management", "Inventory tracking"],
  },
  dispatcher: {
    name: "Emergency Response",
    subtitle: "Life-saving coordination",
    description: "Rapid dispatch system for emergency medical services",
    gradient: "from-emergency-500/20 via-accent-500/10 to-primary-500/20",
    steps: [
      { icon: Phone, title: "Receive", description: "Emergency call received", color: "emergency" },
      { icon: MapPin, title: "Locate", description: "Find nearest ambulance", color: "accent" },
      { icon: Activity, title: "Dispatch", description: "Send unit immediately", color: "primary" },
      { icon: Heart, title: "Care", description: "Patient transported safely", color: "secondary" },
    ],
    stats: [
      { icon: Clock, value: "<5min", label: "Response Time" },
      { icon: Activity, value: "24/7", label: "Availability" },
      { icon: Users, value: "100+", label: "Active Units" },
    ],
    features: ["GPS tracking", "Real-time updates", "Priority routing", "Hospital coordination"],
  },
};

const JourneyStep: React.FC<{
  step: RoleStep;
  index: number;
  isLast: boolean;
}> = ({ step, index, isLast }) => {
  const Icon = step.icon;
  const colors = colorConfig[step.color];

  return (
    <div className="relative flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.15 + 0.1, type: "spring" }}
        className={cn(
          "relative w-20 h-20 rounded-2xl flex items-center justify-center mb-4",
          colors.bg
        )}
      >
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
          className={cn("absolute inset-0 rounded-2xl", colors.bg)}
          style={{ opacity: 0.3 }}
        />
        <Icon className="w-10 h-10 text-white" />

        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          whileInView={{ scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.15 + 0.2, type: "spring" }}
          className={cn(
            "absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold",
            "bg-white dark:bg-slate-800",
            colors.border,
            "border-2",
            colors.text
          )}
        >
          {index + 1}
        </motion.div>
      </motion.div>

      <h4 className="font-display font-semibold text-lg text-foreground mb-1">
        {step.title}
      </h4>
      <p className="text-sm text-foreground-muted text-center max-w-[160px]">
        {step.description}
      </p>

      {!isLast && (
        <div className="hidden md:flex absolute top-10 left-full w-full items-center justify-start">
          <motion.svg
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 + 0.3, duration: 0.6 }}
            width="100"
            height="20"
            className="overflow-visible"
          >
            <defs>
              <linearGradient id={`journey-gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#f76a4d" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#f5b800" stopOpacity="0.8" />
              </linearGradient>
            </defs>
            <motion.circle
              r="3"
              fill="#f76a4d"
              initial={{ cx: 0 }}
              animate={{ cx: [0, 100] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
          </motion.svg>
        </div>
      )}
    </div>
  );
};

export const RoleBasedInfographic: React.FC<RoleBasedInfographicProps> = ({
  role = "patient",
  variant = "full",
  showJourney = true,
  showStats = true,
  className,
}) => {
  const config = roleConfigs[role];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className={cn("relative overflow-hidden", className)}
    >
      <div className={cn(
        "absolute inset-0 rounded-3xl overflow-hidden bg-gradient-to-br",
        config.gradient,
        "dark:from-slate-800 dark:via-slate-900 dark:to-slate-800"
      )}>
        <div className="absolute inset-0 backdrop-blur-sm bg-white/40 dark:bg-slate-900/60" />
        
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute -top-32 -right-32 w-64 h-64 rounded-full opacity-10"
          style={{
            background: `conic-gradient(from 0deg, ${role === "patient" ? "#f76a4d" : role === "doctor" ? "#2563eb" : role === "hospital" ? "#519954" : "#ed3333"}, transparent)`,
          }}
        />
      </div>

      <div className="relative z-10 p-6 md:p-8 lg:p-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-center mb-8"
        >
          <h2 className="font-display font-bold text-2xl md:text-3xl lg:text-4xl text-foreground mb-2">
            {config.name}
          </h2>
          <p className="text-sm md:text-base text-foreground-muted">{config.subtitle}</p>
          {variant === "full" && (
            <p className="text-sm text-foreground-muted mt-2 max-w-md mx-auto">
              {config.description}
            </p>
          )}
        </motion.div>

        {showJourney && (
          <div className="mb-10">
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-4">
              {config.steps.map((step, index) => (
                <React.Fragment key={step.title}>
                  <JourneyStep
                    step={step}
                    index={index}
                    isLast={index === config.steps.length - 1}
                  />
                  {index < config.steps.length - 1 && (
                    <div className="hidden md:flex items-center justify-center w-12">
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.15 + 0.25 }}
                      >
                        <ArrowRight className="w-6 h-6 text-foreground-muted" />
                      </motion.div>
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        )}

        {variant === "full" && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mb-8"
          >
            <h3 className="font-semibold text-lg text-foreground mb-4 text-center">Key Features</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {config.features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.7 }}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm"
                >
                  <CheckCircle2 className={(index % 2 === 0 ? "text-secondary-500" : "text-primary-500") + " w-4 h-4"} />
                  <span className="text-sm text-foreground">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {showStats && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="grid grid-cols-3 gap-4"
          >
            {config.stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.9 }}
                  className="text-center p-4 rounded-xl bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm"
                >
                  <Icon className="w-5 h-5 mx-auto mb-2 text-foreground-muted" />
                  <div className="font-display font-bold text-xl md:text-2xl text-foreground">
                    {stat.value}
                  </div>
                  <div className="text-xs text-foreground-muted">{stat.label}</div>
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </div>

      <motion.div
        animate={{ y: [0, -8, 0], rotate: [0, 3, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute top-6 right-6 w-10 h-10 rounded-lg bg-white/10 backdrop-blur-sm"
      />
      <motion.div
        animate={{ y: [0, 8, 0], rotate: [0, -3, 0] }}
        transition={{ duration: 5, repeat: Infinity, delay: 1 }}
        className="absolute bottom-6 left-6 w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm"
      />
    </motion.div>
  );
};

export const RoleSelector: React.FC<{
  roles?: UserRole[];
  className?: string;
}> = ({ roles = ["patient", "doctor", "hospital", "dispatcher"], className }) => {
  const [activeRole, setActiveRole] = React.useState<UserRole>(roles[0]);
  const roleIcons: Record<UserRole, LucideIcon> = {
    patient: User,
    doctor: Stethoscope,
    hospital: Building2,
    dispatcher: Phone,
  };

  return (
    <div className={cn("space-y-6", className)}>
      <div className="flex flex-wrap justify-center gap-3">
        {roles.map((role) => {
          const Icon = roleIcons[role];
          const config = roleConfigs[role];
          const isActive = activeRole === role;
          const colorKey = (role === "patient" ? "primary" : role === "doctor" ? "trust" : role === "hospital" ? "secondary" : "emergency") as keyof typeof colorConfig;
          const colors = colorConfig[colorKey];

          return (
            <motion.button
              key={role}
              onClick={() => setActiveRole(role)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={cn(
                "flex items-center gap-2 px-5 py-3 rounded-xl font-medium text-sm transition-all",
                "border-2",
                isActive
                  ? cn(colors.bg, "text-white", colors.border)
                  : "bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-foreground hover:border-slate-300 dark:hover:border-slate-600"
              )}
            >
              <Icon className="w-5 h-5" />
              {config.name.split(" ")[0]}
            </motion.button>
          );
        })}
      </div>

      <motion.div
        key={activeRole}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <RoleBasedInfographic role={activeRole} variant="full" />
      </motion.div>
    </div>
  );
};

export default RoleBasedInfographic;