"use client";

import * as React from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  Brain,
  Calendar,
  Shield,
  Heart,
  MessageSquare,
  type LucideIcon,
} from "lucide-react";

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
  color?: "primary" | "secondary" | "accent" | "trust" | "emergency";
}

interface FeatureFlowProps {
  features?: Feature[];
  variant?: "default" | "compact" | "expanded";
  orientation?: "horizontal" | "vertical" | "grid";
  animated?: boolean;
  showConnectors?: boolean;
  className?: string;
}

const defaultFeatures: Feature[] = [
  { icon: MessageSquare, title: "Natural Interaction", description: "Chat naturally about your health concerns with AI", color: "primary" },
  { icon: Brain, title: "Smart Analysis", description: "Advanced AI processes your symptoms accurately", color: "accent" },
  { icon: Calendar, title: "Easy Booking", description: "Schedule appointments with just a few taps", color: "secondary" },
  { icon: Shield, title: "Your Privacy", description: "Enterprise-grade security for your health data", color: "trust" },
  { icon: Heart, title: "Continuous Care", description: "Track your health journey over time", color: "emergency" },
];

const colorConfig = {
  primary: {
    bg: "bg-primary-500",
    bgLight: "bg-primary-50 dark:bg-primary-900/30",
    text: "text-primary-600 dark:text-primary-400",
    ring: "ring-primary-500/20",
    gradient: "from-primary-500/10 to-transparent",
  },
  secondary: {
    bg: "bg-secondary-500",
    bgLight: "bg-secondary-50 dark:bg-secondary-900/30",
    text: "text-secondary-600 dark:text-secondary-400",
    ring: "ring-secondary-500/20",
    gradient: "from-secondary-500/10 to-transparent",
  },
  accent: {
    bg: "bg-accent-500",
    bgLight: "bg-accent-50 dark:bg-accent-900/30",
    text: "text-accent-600 dark:text-accent-400",
    ring: "ring-accent-500/20",
    gradient: "from-accent-500/10 to-transparent",
  },
  trust: {
    bg: "bg-trust-500",
    bgLight: "bg-trust-50 dark:bg-trust-900/30",
    text: "text-trust-600 dark:text-trust-400",
    ring: "ring-trust-500/20",
    gradient: "from-trust-500/10 to-transparent",
  },
  emergency: {
    bg: "bg-emergency-500",
    bgLight: "bg-emergency-50 dark:bg-emergency-900/30",
    text: "text-emergency-600 dark:text-emergency-400",
    ring: "ring-emergency-500/20",
    gradient: "from-emergency-500/10 to-transparent",
  },
};

const FlowingConnection: React.FC<{ delay: number; vertical?: boolean; className?: string }> = ({
  delay,
  vertical = false,
  className,
}) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay, duration: 0.4 }}
    className={cn(
      "flex-shrink-0",
      vertical ? "h-8 w-px" : "h-px w-8 md:w-12",
      className
    )}
  >
    <svg
      viewBox={vertical ? "0 0 1 32" : "0 0 48 1"}
      className={cn("w-full h-full", vertical ? "text-slate-200 dark:text-slate-700" : "text-slate-200 dark:text-slate-700")}
      preserveAspectRatio="none"
    >
      <motion.line
        x1={vertical ? "0.5" : "0"}
        y1={vertical ? "0" : "0.5"}
        x2={vertical ? "0.5" : "48"}
        y2={vertical ? "32" : "0.5"}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ delay: delay + 0.2, duration: 0.6, ease: "easeOut" }}
      />
    </svg>
  </motion.div>
);

const FeatureCard: React.FC<{
  feature: Feature;
  index: number;
  variant: "default" | "compact" | "expanded";
  animated: boolean;
}> = ({ feature, index, variant, animated }) => {
  const Icon = feature.icon;
  const colors = colorConfig[feature.color || "primary"];

  return (
    <motion.div
      initial={animated ? { opacity: 0, y: 20, scale: 0.95 } : false}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        delay: index * 0.15,
        type: "spring",
        stiffness: 100,
        damping: 15,
      }}
      whileHover={{ y: -4 }}
      className="group relative"
    >
      <div className={cn(
        "relative overflow-hidden rounded-2xl transition-all duration-300",
        "bg-white dark:bg-slate-800",
        "ring-1 ring-slate-100 dark:ring-slate-700",
        "group-hover:ring-2 group-hover:shadow-lg dark:group-hover:shadow-slate-900/20",
        colors.ring
      )}>
        <div className={cn(
          "absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity",
          colors.gradient
        )} />

        <div className={cn(
          "relative p-6",
          variant === "compact" && "p-4",
          variant === "expanded" && "p-8"
        )}>
          <motion.div
            initial={animated ? { scale: 0, rotate: -180 } : false}
            animate={{ scale: 1, rotate: 0 }}
            transition={{
              delay: index * 0.15 + 0.1,
              type: "spring",
              stiffness: 200,
            }}
            className={cn(
              "flex items-center justify-center rounded-xl mb-4",
              colors.bg,
              variant === "compact" && "w-12 h-12",
              variant === "default" && "w-14 h-14",
              variant === "expanded" && "w-16 h-16"
            )}
          >
            <Icon className={cn(
              "text-white",
              variant === "compact" && "w-6 h-6",
              variant === "default" && "w-7 h-7",
              variant === "expanded" && "w-8 h-8"
            )} />
          </motion.div>

          <div className={cn(
            "absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold",
            "bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300"
          )}>
            {index + 1}
          </div>

          <h3 className={cn(
            "font-display font-semibold text-foreground mb-2",
            variant === "compact" && "text-sm",
            variant === "default" && "text-base",
            variant === "expanded" && "text-lg"
          )}>
            {feature.title}
          </h3>

          <p className={cn(
            "text-foreground-muted",
            variant === "compact" && "text-xs",
            variant === "default" && "text-sm",
            variant === "expanded" && "text-base"
          )}>
            {feature.description}
          </p>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: index * 0.15 + 0.3, duration: 0.5 }}
            className={cn("absolute bottom-0 left-0 right-0 h-1 origin-left", colors.bg)}
          />
        </div>
      </div>
    </motion.div>
  );
};

export const FeatureFlow: React.FC<FeatureFlowProps> = ({
  features = defaultFeatures,
  variant = "default",
  orientation = "horizontal",
  animated = true,
  showConnectors = true,
  className,
}) => {
  const gridCols = {
    3: "md:grid-cols-3",
    4: "md:grid-cols-2 lg:grid-cols-4",
    5: "md:grid-cols-3 lg:grid-cols-5",
  };

  const gridClass = gridCols[Math.min(features.length, 5) as keyof typeof gridCols] || "md:grid-cols-3";

  if (orientation === "grid") {
    return (
      <div className={cn("grid gap-4 md:gap-6", gridClass, className)}>
        {features.map((feature, index) => (
          <FeatureCard
            key={feature.title}
            feature={feature}
            index={index}
            variant={variant}
            animated={animated}
          />
        ))}
      </div>
    );
  }

  if (orientation === "vertical") {
    return (
      <div className={cn("flex flex-col gap-6", className)}>
        {features.map((feature, index) => (
          <React.Fragment key={feature.title}>
            <FeatureCard
              feature={feature}
              index={index}
              variant={variant}
              animated={animated}
            />
            {showConnectors && index < features.length - 1 && (
              <div className="flex justify-center">
                <FlowingConnection delay={index * 0.15} vertical />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    );
  }

  return (
    <div className={cn("flex flex-wrap justify-center gap-4 md:gap-6", className)}>
      {features.map((feature, index) => (
        <React.Fragment key={feature.title}>
          <FeatureCard
            feature={feature}
            index={index}
            variant={variant}
            animated={animated}
          />
          {showConnectors && index < features.length - 1 && (
            <div className="hidden lg:flex items-center">
              <FlowingConnection delay={index * 0.15} />
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export const FeatureFlowWithStats: React.FC<{
  features: Feature[];
  stats: Array<{ value: string; label: string; color?: string }>;
  className?: string;
}> = ({ features, stats, className }) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-50px" });

  return (
    <div ref={containerRef} className={cn("space-y-12", className)}>
      <FeatureFlow features={features} variant="default" orientation="grid" />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat, index) => {
          const colorKeys = ["primary", "secondary", "accent", "trust", "emergency"] as const;
          const colorKey = colorKeys[index % 5];
          const colors = colorConfig[colorKey];

          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 + 0.5 }}
              className={cn(
                "text-center p-6 rounded-2xl",
                "bg-white dark:bg-slate-800",
                "ring-1 ring-slate-100 dark:ring-slate-700"
              )}
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ delay: index * 0.1 + 0.6, type: "spring" }}
                className={cn("text-4xl font-display font-bold mb-2", colors.text)}
              >
                {stat.value}
              </motion.div>
              <p className="text-sm text-foreground-muted">{stat.label}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default FeatureFlow;