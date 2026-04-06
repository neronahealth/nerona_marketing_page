"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  MessageSquare,
  Brain,
  AlertTriangle,
  Building2,
  Calendar,
  User,
  FileCheck,
  Stethoscope,
  Phone,
  MapPin,
  Heart,
  Activity,
  ArrowRight,
  CheckCircle2,
  Loader2,
  type LucideIcon,
} from "lucide-react";

export interface WorkflowStep {
  icon: LucideIcon;
  label: string;
  description: string;
  color?: "primary" | "secondary" | "accent" | "trust" | "emergency";
  status?: "pending" | "active" | "completed";
}

interface WorkflowDiagramProps {
  steps?: WorkflowStep[];
  variant?: "triage" | "appointment" | "onboarding" | "emergency";
  role?: "patient" | "doctor" | "hospital" | "dispatcher";
  animated?: boolean;
  orientation?: "horizontal" | "vertical";
  showNumbers?: boolean;
  showFlowingArrows?: boolean;
  className?: string;
}

const defaultTriageSteps: WorkflowStep[] = [
  { icon: MessageSquare, label: "Describe Symptoms", description: "Patient types symptoms naturally", color: "primary", status: "completed" },
  { icon: Brain, label: "AI Analysis", description: "Ollama Cloud processes", color: "accent", status: "active" },
  { icon: AlertTriangle, label: "Urgency Level", description: "Critical/Urgent/Moderate/Low", color: "emergency", status: "pending" },
  { icon: Building2, label: "Match Hospital", description: "Find nearest care", color: "secondary", status: "pending" },
  { icon: Calendar, label: "Book Appointment", description: "Schedule with doctor", color: "trust", status: "pending" },
];

const defaultAppointmentSteps: WorkflowStep[] = [
  { icon: User, label: "Select Provider", description: "Browse verified doctors", color: "primary" },
  { icon: Calendar, label: "Choose Time", description: "View real availability", color: "trust" },
  { icon: FileCheck, label: "Confirm Booking", description: "Get instant confirmation", color: "secondary" },
  { icon: Stethoscope, label: "Attend Visit", description: "Video or in-person", color: "accent" },
];

const emergencySteps: WorkflowStep[] = [
  { icon: Phone, label: "Emergency Call", description: "24/7 hotline active", color: "emergency" },
  { icon: MapPin, label: "Locate Patient", description: "GPS-based location", color: "accent" },
  { icon: Activity, label: "Dispatch Ambulance", description: "Nearest unit assigned", color: "primary" },
  { icon: Heart, label: "Patient Care", description: "Stabilize & transport", color: "secondary" },
];

const colorConfig: Record<NonNullable<WorkflowStep["color"]>, { bg: string; icon: string; accent: string; ring: string }> = {
  primary: { bg: "bg-primary-500", icon: "text-primary-600 dark:text-primary-400", accent: "bg-primary-500", ring: "ring-primary-200 dark:ring-primary-700" },
  secondary: { bg: "bg-secondary-500", icon: "text-secondary-600 dark:text-secondary-400", accent: "bg-secondary-500", ring: "ring-secondary-200 dark:ring-secondary-700" },
  accent: { bg: "bg-accent-500", icon: "text-accent-600 dark:text-accent-400", accent: "bg-accent-500", ring: "ring-accent-200 dark:ring-accent-700" },
  trust: { bg: "bg-trust-500", icon: "text-trust-600 dark:text-trust-400", accent: "bg-trust-500", ring: "ring-trust-200 dark:ring-trust-700" },
  emergency: { bg: "bg-emergency-500", icon: "text-emergency-600 dark:text-emergency-400", accent: "bg-emergency-500", ring: "ring-emergency-200 dark:ring-emergency-700" },
};

const FlowingArrowSVG: React.FC<{ delay: number; color: string }> = ({ delay, color }) => (
  <motion.svg
    width="60"
    height="20"
    viewBox="0 0 60 20"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay }}
    className="flex-shrink-0"
  >
    <defs>
      <linearGradient id={`arrow-grad-${delay}`} x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor={color} stopOpacity="0.3" />
        <stop offset="50%" stopColor={color} stopOpacity="0.8" />
        <stop offset="100%" stopColor={color} stopOpacity="0.3" />
      </linearGradient>
    </defs>
    <motion.path
      d="M 5 10 L 50 10 L 45 5 M 50 10 L 45 15"
      fill="none"
      stroke={`url(#arrow-grad-${delay})`}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ delay: delay + 0.2, duration: 0.6, ease: "easeOut" }}
    />
    <motion.circle
      cx="10"
      cy="10"
      r="3"
      fill={color}
      initial={{ opacity: 0, cx: 5 }}
      animate={{ opacity: [0, 1, 0], cx: [5, 50, 55] }}
      transition={{
        delay: delay + 0.8,
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  </motion.svg>
);

export const WorkflowDiagram: React.FC<WorkflowDiagramProps> = ({
  steps,
  variant = "triage",
  role: _role,
  animated = true,
  orientation = "horizontal",
  showNumbers = true,
  showFlowingArrows = true,
  className,
}) => {
  const getSteps = (): WorkflowStep[] => {
    if (steps) return steps;
    if (variant === "appointment") return defaultAppointmentSteps;
    if (variant === "emergency") return emergencySteps;
    return defaultTriageSteps;
  };

  const workflowSteps = getSteps();

  return (
    <div
      className={cn("relative", className)}
      role="figure"
      aria-label="Workflow diagram"
    >
      <div className={cn(
        "flex gap-4 sm:gap-6 lg:gap-8",
        orientation === "vertical" && "flex-col"
      )}>
        {workflowSteps.map((step, index) => {
          const Icon = step.icon;
          const colors = colorConfig[step.color || "primary"];
          const isLast = index === workflowSteps.length - 1;
          const isCompleted = step.status === "completed";
          const isActive = step.status === "active";

          return (
            <React.Fragment key={step.label}>
              <motion.div
                initial={animated ? { opacity: 0, y: 20 } : false}
                whileInView={animated ? { opacity: 1, y: 0 } : undefined}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.15, duration: 0.4 }}
                className={cn(
                  "flex-1 relative",
                  orientation === "vertical" && "flex items-start gap-4"
                )}
              >
                <div className={cn(
                  "flex flex-col items-center text-center group",
                  orientation === "vertical" && "flex-row text-left"
                )}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="relative"
                  >
                    <motion.div
                      initial={animated ? { scale: 0.9 } : false}
                      whileInView={animated ? { scale: 1 } : undefined}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.15 + 0.1 }}
                      className={cn(
                        "w-16 h-16 lg:w-20 lg:h-20 rounded-2xl flex items-center justify-center transition-all relative",
                        colors.bg
                      )}
                    >
                      {isActive && animated && (
                        <motion.div
                          animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className={cn("absolute inset-0 rounded-2xl", colors.bg)}
                        />
                      )}
                      <Icon className="w-7 h-7 lg:w-8 lg:h-8 text-white" />

                      {isCompleted && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-secondary-500 flex items-center justify-center"
                        >
                          <CheckCircle2 className="w-4 h-4 text-white" />
                        </motion.div>
                      )}

                      {isActive && animated && (
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                          className="absolute -bottom-1 -right-1"
                        >
                          <Loader2 className="w-5 h-5 text-white" />
                        </motion.div>
                      )}
                    </motion.div>

                    {showNumbers && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: index * 0.15 + 0.2, type: "spring" }}
                        className={cn(
                          "absolute -top-2 -right-2 w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold",
                          isCompleted ? "bg-secondary-500" : colors.bg
                        )}
                      >
                        {index + 1}
                      </motion.div>
                    )}
                  </motion.div>

                  <div className={cn(
                    "mt-4",
                    orientation === "vertical" && "ml-4 mt-0"
                  )}>
                    <h4 className={cn(
                      "font-semibold text-sm lg:text-base text-foreground mb-1",
                      isCompleted && "text-foreground-muted"
                    )}>
                      {step.label}
                    </h4>
                    <p className="text-xs lg:text-sm text-foreground-muted max-w-[140px]">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>

              {!isLast && orientation === "horizontal" && showFlowingArrows && (
                <div className="flex items-center justify-center flex-shrink-0">
                  <FlowingArrowSVG
                    delay={index * 0.15}
                    color={colorConfig[step.color || "primary"].bg.replace("bg-", "#").replace("-500", "") === "bg-primary-500" ? "#f76a4d" : 
                          colorConfig[step.color || "primary"].bg.replace("bg-", "#").replace("-500", "") === "bg-secondary-500" ? "#519954" :
                          colorConfig[step.color || "primary"].bg.replace("bg-", "#").replace("-500", "") === "bg-accent-500" ? "#f5b800" :
                          colorConfig[step.color || "primary"].bg.replace("bg-", "#").replace("-500", "") === "bg-trust-500" ? "#2563eb" : "#ed3333"}
                  />
                </div>
              )}

              {!isLast && orientation === "horizontal" && !showFlowingArrows && (
                <motion.div
                  initial={animated ? { opacity: 0 } : false}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.15 + 0.1 }}
                  className="flex items-center justify-center flex-shrink-0"
                >
                  <ArrowRight className="w-6 h-6 text-foreground-muted" />
                </motion.div>
              )}

              {!isLast && orientation === "vertical" && (
                <motion.div
                  initial={animated ? { scaleY: 0 } : false}
                  animate={{ scaleY: 1 }}
                  transition={{ delay: index * 0.15 + 0.2 }}
                  className={cn(
                    "absolute left-8 w-1 h-12 -bottom-6 origin-top rounded-full",
                    colors.bg,
                    "opacity-30"
                  )}
                />
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export const FlowingArrow: React.FC<{
  delay?: number;
  className?: string;
}> = ({ delay = 0, className }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay, duration: 0.5 }}
    className={cn("flex items-center justify-center", className)}
  >
    <motion.div
      animate={{ x: [0, 5, 0] }}
      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
    >
      <ArrowRight className="w-6 h-6 text-primary-400 dark:text-primary-500" />
    </motion.div>
  </motion.div>
);

export const ProcessFlow: React.FC<{
  steps: Array<{ label: string; description: string; color?: string }>;
  animated?: boolean;
  className?: string;
}> = ({ steps, animated = true, className }) => (
  <div className={cn("flex flex-wrap justify-center gap-4", className)} role="list">
    {steps.map((step, index) => {
      const colorKeys = ["primary", "secondary", "accent", "trust", "emergency"] as const;
      const colorKey = colorKeys[index % 5];
      const colors = colorConfig[colorKey];
      
      return (
        <motion.div
          key={step.label}
          initial={animated ? { opacity: 0, scale: 0.9 } : false}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.1 }}
          className="flex items-center gap-3"
          role="listitem"
        >
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            className={cn(
              "flex items-center justify-center w-10 h-10 rounded-xl text-white font-semibold text-sm",
              colors.bg
            )}
          >
            {index + 1}
          </motion.div>
          <span className="text-sm font-medium text-foreground">{step.label}</span>
          {index < steps.length - 1 && (
            <motion.div
              animate={{ x: [0, 3, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="text-foreground-muted"
            >
              <ArrowRight className="w-4 h-4" />
            </motion.div>
          )}
        </motion.div>
      );
    })}
  </div>
);

interface InteractiveWorkflowProps {
  steps: WorkflowStep[];
  onStepClick?: (index: number) => void;
  className?: string;
}

export const InteractiveWorkflow: React.FC<InteractiveWorkflowProps> = ({
  steps,
  onStepClick,
  className,
}) => {
  const [activeIndex, setActiveIndex] = React.useState<number | null>(null);

  return (
    <div className={cn("flex flex-wrap gap-4", className)}>
      {steps.map((step, index) => {
        const Icon = step.icon;
        const colors = colorConfig[step.color || "primary"];
        const isActive = activeIndex === index;

        return (
          <motion.button
            key={step.label}
            onClick={() => {
              setActiveIndex(index);
              onStepClick?.(index);
            }}
            whileHover={{ scale: 1.05, y: -4 }}
            whileTap={{ scale: 0.98 }}
            className={cn(
              "relative flex flex-col items-center p-6 rounded-2xl transition-all",
              "bg-white dark:bg-slate-800",
              isActive ? "ring-2 ring-offset-2" : "ring-1 ring-slate-200 dark:ring-slate-700",
              isActive && colors.ring
            )}
          >
            <motion.div
              animate={isActive ? { scale: [1, 1.1, 1] } : {}}
              transition={{ duration: 0.3 }}
              className={cn(
                "w-14 h-14 rounded-xl flex items-center justify-center mb-3",
                colors.bg
              )}
            >
              <Icon className="w-7 h-7 text-white" />
            </motion.div>

            <h4 className="font-semibold text-foreground text-sm">{step.label}</h4>
            <p className="text-xs text-foreground-muted mt-1 max-w-[100px]">
              {step.description}
            </p>

            {isActive && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className={cn(
                  "absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-white text-xs",
                  colors.bg
                )}
              >
                {index + 1}
              </motion.div>
            )}
          </motion.button>
        );
      })}
    </div>
  );
};

export default WorkflowDiagram;