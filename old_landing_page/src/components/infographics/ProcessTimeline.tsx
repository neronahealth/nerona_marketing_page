"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TimelineStep {
  time: string;
  action: string;
  description?: string;
  status?: "completed" | "active" | "pending";
}

interface ProcessTimelineProps {
  steps: TimelineStep[];
  animated?: boolean;
  orientation?: "horizontal" | "vertical";
  className?: string;
}

export const ProcessTimeline: React.FC<ProcessTimelineProps> = ({
  steps,
  animated = true,
  orientation = "vertical",
  className,
}) => {
  return (
    <div
      className={cn(
        "relative",
        className
      )}
      role="list"
      aria-label="Process timeline"
    >
      {orientation === "vertical" && (
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-accent-500 to-secondary-500" />
      )}

      <div className={cn(
        "space-y-6",
        orientation === "horizontal" && "flex gap-8 overflow-x-auto pb-2"
      )}>
        {steps.map((step, index) => {
          const isActive = step.status === "active";
          const isCompleted = step.status === "completed";

          return (
            <motion.div
              key={index}
              initial={animated ? { opacity: 0, x: orientation === "horizontal" ? 0 : -20 } : false}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.15 }}
              className={cn(
                "relative",
                orientation === "horizontal" && "flex-shrink-0 w-40",
                orientation === "vertical" && "flex gap-4"
              )}
              role="listitem"
            >
              {orientation === "vertical" && (
                <>
                  <div className="relative z-10 flex-shrink-0">
                    <motion.div
                      initial={animated ? { scale: 0 } : false}
                      animate={{ scale: 1 }}
                      transition={{ delay: index * 0.15 + 0.1, type: "spring" }}
                      className={cn(
                        "w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold border-2",
                        isCompleted && "bg-primary-500 text-white border-primary-500",
                        isActive && "bg-accent-500 text-white border-accent-500 animate-pulse",
                        !isCompleted && !isActive && "bg-white dark:bg-slate-800 text-slate-400 dark:text-slate-500 border-slate-200 dark:border-slate-600"
                      )}
                    >
                      {isCompleted ? "✓" : index + 1}
                    </motion.div>
                  </div>

                  <div className="flex-1 pb-4">
                    <div className="flex items-center gap-2 mb-1">
                      <span className={cn(
                        "text-xs font-medium px-2 py-0.5 rounded",
                        isActive && "bg-accent-100 dark:bg-accent-900/30 text-accent-700 dark:text-accent-300",
                        isCompleted && "bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300",
                        !isCompleted && !isActive && "bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400"
                      )}>
                        {step.time}
                      </span>
                    </div>
                    <h4 className="font-semibold text-foreground">{step.action}</h4>
                    {step.description && (
                      <p className="text-sm text-foreground-muted mt-1">{step.description}</p>
                    )}
                  </div>
                </>
              )}

              {orientation === "horizontal" && (
                <div className="text-center">
                  <motion.div
                    initial={animated ? { scale: 0 } : false}
                    animate={{ scale: 1 }}
                    transition={{ delay: index * 0.15 + 0.1, type: "spring" }}
                    className={cn(
                      "w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold mx-auto mb-3 border-2",
                      isCompleted && "bg-primary-500 text-white border-primary-500",
                      isActive && "bg-accent-500 text-white border-accent-500",
                      !isCompleted && !isActive && "bg-white dark:bg-slate-800 text-slate-400 dark:text-slate-500 border-slate-200 dark:border-slate-600"
                    )}
                  >
                    {isCompleted ? "✓" : index + 1}
                  </motion.div>
                  <span className="text-xs font-medium text-foreground-muted">{step.time}</span>
                  <h4 className="font-semibold text-foreground text-sm mt-1">{step.action}</h4>
                  {step.description && (
                    <p className="text-xs text-foreground-muted mt-1">{step.description}</p>
                  )}
                </div>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

interface StatsItem {
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
  trend?: "up" | "down" | "neutral";
  trendValue?: string;
}

interface StatsDashboardProps {
  stats: StatsItem[];
  animated?: boolean;
  columns?: 2 | 3 | 4;
  className?: string;
}

const AnimatedNumber: React.FC<{ value: number; suffix?: string; prefix?: string; animated?: boolean }> = ({
  value,
  suffix,
  prefix,
  animated,
}) => {
  const [displayValue, setDisplayValue] = React.useState(0);

  React.useEffect(() => {
    if (!animated) {
      setDisplayValue(value);
      return;
    }

    const duration = 1500;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      current = Math.min(Math.round(increment * step), value);
      setDisplayValue(current);

      if (step >= steps) {
        clearInterval(timer);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value, animated]);

  return (
    <span>
      {prefix}{displayValue.toLocaleString()}{suffix}
    </span>
  );
};

export const StatsDashboard: React.FC<StatsDashboardProps> = ({
  stats,
  animated = true,
  columns = 4,
  className,
}) => {
  const gridCols = {
    2: "grid-cols-2",
    3: "grid-cols-1 sm:grid-cols-3",
    4: "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4",
  };

  return (
    <div
      className={cn("grid gap-4 lg:gap-6", gridCols[columns], className)}
      role="list"
      aria-label="Statistics dashboard"
    >
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={animated ? { opacity: 0, y: 20 } : false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1, duration: 0.3 }}
          whileHover={{ scale: 1.02 }}
          className="relative bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-6 overflow-hidden group"
          role="listitem"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          
          <div className="relative">
            <p className="text-xs font-medium text-foreground-muted mb-2">{stat.label}</p>
            
            <div className="flex items-baseline gap-1">
              <span className="text-3xl lg:text-4xl font-display font-bold text-foreground">
                <AnimatedNumber
                  value={stat.value}
                  suffix={stat.suffix}
                  prefix={stat.prefix}
                  animated={animated}
                />
              </span>
            </div>

            {stat.trend && (
              <div className={cn(
                "mt-2 flex items-center gap-1 text-xs font-medium",
                stat.trend === "up" && "text-secondary-600 dark:text-secondary-400",
                stat.trend === "down" && "text-emergency-600 dark:text-emergency-400",
                stat.trend === "neutral" && "text-slate-500 dark:text-slate-400"
              )}>
                {stat.trend === "up" && "↑"}
                {stat.trend === "down" && "↓"}
                <span>{stat.trendValue || "+12%"} from last month</span>
              </div>
            )}
          </div>

          <motion.div
            initial={animated ? { scaleX: 0 } : false}
            animate={{ scaleX: 1 }}
            transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
            className={cn(
              "absolute bottom-0 left-0 right-0 h-1 origin-left",
              index % 4 === 0 && "bg-primary-500",
              index % 4 === 1 && "bg-trust-500",
              index % 4 === 2 && "bg-secondary-500",
              index % 4 === 3 && "bg-accent-500"
            )}
          />
        </motion.div>
      ))}
    </div>
  );
};

interface CircularProgressProps {
  value: number;
  max?: number;
  size?: "sm" | "md" | "lg";
  color?: "primary" | "secondary" | "accent" | "trust" | "emergency";
  label?: string;
  showValue?: boolean;
  className?: string;
}

export const CircularProgress: React.FC<CircularProgressProps> = ({
  value,
  max = 100,
  size = "md",
  color = "primary",
  label,
  showValue = true,
  className,
}) => {
  const percentage = Math.min((value / max) * 100, 100);
  const colors = {
    primary: "text-primary-500",
    secondary: "text-secondary-500",
    accent: "text-accent-500",
    trust: "text-trust-500",
    emergency: "text-emergency-500",
  };
  const colorClass = colors[color];
  const circumference = 2 * Math.PI * 45;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  const sizeMap = {
    sm: "w-16 h-16",
    md: "w-24 h-24",
    lg: "w-32 h-32",
  };

  const textMap = {
    sm: "text-sm",
    md: "text-lg",
    lg: "text-2xl",
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      className={cn("flex flex-col items-center", className)}
    >
      <div className={cn("relative", sizeMap[size])}>
        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke="currentColor"
            strokeWidth="8"
            fill="none"
            className="text-slate-200 dark:text-slate-700"
          />
          <motion.circle
            cx="50"
            cy="50"
            r="45"
            stroke="currentColor"
            strokeWidth="8"
            fill="none"
            strokeLinecap="round"
            className={cn("transition-colors", colorClass)}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />
        </svg>
        {showValue && (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className={cn("font-display font-bold text-foreground", textMap[size])}>
              {Math.round(percentage)}%
            </span>
          </div>
        )}
      </div>
      {label && (
        <span className="mt-2 text-sm font-medium text-foreground-muted">{label}</span>
      )}
    </motion.div>
  );
};

export default ProcessTimeline;