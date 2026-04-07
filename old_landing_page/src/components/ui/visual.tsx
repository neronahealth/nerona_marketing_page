"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { DashboardMockup, MobileMockup } from "@/components/infographics";

interface VisualProps {
  className?: string;
}

interface HeroDashboardProps extends VisualProps {
  variant?: "patient" | "doctor" | "hospital";
  animated?: boolean;
}

export const HeroDashboard: React.FC<HeroDashboardProps> = ({
  variant = "patient",
  animated = true,
  className,
}) => (
  <DashboardMockup variant={variant} animated={animated} className={className} />
);

interface HeroMobileProps extends VisualProps {
  variant?: "patient" | "doctor";
  animated?: boolean;
}

export const HeroMobile: React.FC<HeroMobileProps> = ({
  variant = "patient",
  animated = true,
  className,
}) => (
  <MobileMockup variant={variant} animated={animated} className={className} />
);

export const HeroVisual: React.FC<VisualProps> = ({ className }) => {
  return (
    <div
      className={cn(
        "relative h-auto sm:h-[400px] md:h-[500px] w-full overflow-hidden rounded-3xl bg-gradient-to-br from-slate-100 via-slate-50 to-white",
        className
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-transparent to-secondary-500/5" />

      <div className="absolute inset-0 opacity-20">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="grid"
              width="32"
              height="32"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 32 0 L 0 0 0 32"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                className="text-primary-400"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="absolute top-1/2 left-1/2 w-[70%] -translate-x-1/2 -translate-y-1/2">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="rounded-2xl bg-white dark:bg-slate-800 p-6 shadow-elevated dark:shadow-none border border-slate-200/50 dark:border-slate-700">
            <div className="mb-4 flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-primary-100 flex items-center justify-center">
                <svg
                  className="h-6 w-6 text-primary-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <div className="flex-1">
                <div className="h-3 w-32 bg-slate-200 rounded mb-1" />
                <div className="h-2 w-24 bg-slate-100 dark:bg-slate-700 rounded" />
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary-500" />
                <div className="h-2 w-40 bg-slate-200 rounded" />
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-secondary-500" />
                <div className="h-2 w-32 bg-slate-200 rounded" />
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-accent-500" />
                <div className="h-2 w-36 bg-slate-200 rounded" />
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="absolute -bottom-4 -right-4 h-24 w-48 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 p-4 shadow-glow-primary"
          >
            <div className="flex h-full flex-col justify-center">
              <div className="text-lg font-bold text-white">Quick Triage</div>
              <div className="text-sm text-white/80">AI-powered • Instant</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="absolute -top-4 -left-4 h-20 w-36 rounded-xl bg-gradient-to-br from-secondary-500 to-secondary-600 p-4 shadow-medium"
          >
            <div className="flex h-full flex-col justify-center">
              <div className="text-sm font-semibold text-white">24/7</div>
              <div className="text-xs text-white/80">Emergency Ready</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-primary-200/50 blur-3xl" />
      <div className="absolute -top-20 -left-20 h-64 w-64 rounded-full bg-accent-200/40 blur-3xl" />
    </div>
  );
};

interface FeatureIllustrationProps extends VisualProps {
  variant: "health" | "ambulance" | "hospital" | "doctor" | "records";
}

export const FeatureIllustration: React.FC<FeatureIllustrationProps> = ({
  variant,
  className,
}) => {
  const illustrations = {
    health: (
      <div className="flex h-full w-full flex-col items-center justify-center gap-4">
        <div className="h-32 w-32 rounded-3xl bg-primary-100 flex items-center justify-center">
          <motion.svg
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="h-16 w-16 text-primary-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </motion.svg>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex gap-2"
        >
          <div className="h-8 w-8 rounded-lg bg-secondary-100" />
          <div className="h-8 w-8 rounded-lg bg-accent-100" />
          <div className="h-8 w-8 rounded-lg bg-trust-100" />
        </motion.div>
      </div>
    ),
    ambulance: (
      <div className="flex h-full w-full flex-col items-center justify-center gap-4">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring" }}
          className="relative"
        >
          <div className="h-32 w-32 rounded-3xl bg-emergency-100 flex items-center justify-center">
            <svg
              className="h-16 w-16 text-emergency-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
          </div>
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute -inset-4 rounded-3xl bg-emergency-200 opacity-50"
          />
        </motion.div>
      </div>
    ),
    hospital: (
      <div className="flex h-full w-full flex-col items-center justify-center gap-4">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring" }}
          className="flex gap-2"
        >
          <div className="h-32 w-20 rounded-2xl bg-secondary-100 flex flex-col justify-end p-2">
            <div className="h-12 w-12 rounded-lg bg-secondary-200 mb-2" />
          </div>
          <div className="h-40 w-24 rounded-2xl bg-secondary-200 flex flex-col justify-end p-2">
            <div className="h-16 w-16 rounded-lg bg-secondary-300 mb-2" />
          </div>
          <div className="h-32 w-20 rounded-2xl bg-secondary-100 flex flex-col justify-end p-2">
            <div className="h-12 w-12 rounded-lg bg-secondary-200 mb-2" />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex gap-1"
        >
          <div className="h-2 w-12 rounded bg-secondary-400" />
          <div className="h-2 w-12 rounded bg-secondary-400" />
          <div className="h-2 w-12 rounded bg-secondary-400" />
        </motion.div>
      </div>
    ),
    doctor: (
      <div className="flex h-full w-full flex-col items-center justify-center gap-4">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring" }}
        >
          <div className="h-32 w-32 rounded-3xl bg-trust-100 flex items-center justify-center">
            <div className="flex flex-col items-center gap-2">
              <div className="h-12 w-12 rounded-full bg-trust-200 flex items-center justify-center">
                <div className="h-8 w-8 rounded-full bg-trust-300" />
              </div>
              <div className="h-16 w-24 rounded-t-2xl bg-trust-300" />
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex gap-2"
        >
          <div className="h-3 w-16 rounded bg-trust-300" />
          <div className="h-3 w-16 rounded bg-trust-300" />
        </motion.div>
      </div>
    ),
    records: (
      <div className="flex h-full w-full flex-col items-center justify-center gap-4">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring" }}
          className="flex gap-3"
        >
          <div className="h-36 w-28 rounded-xl bg-accent-200 flex flex-col p-3">
            <div className="h-3 w-20 rounded bg-accent-300 mb-3" />
            <div className="flex-1 space-y-2">
              <div className="h-2 w-16 rounded bg-white/50" />
              <div className="h-2 w-20 rounded bg-white/50" />
              <div className="h-2 w-14 rounded bg-white/50" />
            </div>
          </div>
          <div className="h-36 w-28 rounded-xl bg-accent-100 flex flex-col p-3 -ml-8">
            <div className="h-3 w-20 rounded bg-accent-300 mb-3" />
            <div className="flex-1 space-y-2">
              <div className="h-2 w-16 rounded bg-white/50" />
              <div className="h-2 w-20 rounded bg-white/50" />
              <div className="h-2 w-14 rounded bg-white/50" />
            </div>
          </div>
        </motion.div>
      </div>
    ),
  };

  return (
    <div
      className={cn(
        "relative h-auto sm:h-[250px] md:h-[300px] w-full overflow-hidden rounded-2xl bg-gradient-to-br from-slate-50 to-white",
        className
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white via-transparent to-transparent opacity-60" />
      {illustrations[variant]}
    </div>
  );
};

interface TestimonialImageProps extends VisualProps {
  initials: string;
  name: string;
}

export const TestimonialImage: React.FC<TestimonialImageProps> = ({
  initials,
  name,
  className,
}) => {
  const colorGradients = [
    "from-primary-400 to-primary-600",
    "from-secondary-400 to-secondary-600",
    "from-accent-400 to-accent-600",
    "from-trust-400 to-trust-600",
  ];

  const gradientIndex = name.charCodeAt(0) % colorGradients.length;
  const gradient = colorGradients[gradientIndex];

  return (
    <div
      className={cn(
        "relative h-14 w-14 rounded-full bg-gradient-to-br flex items-center justify-center text-white font-bold text-xl shadow-medium",
        gradient,
        className
      )}
      aria-label={`Avatar for ${name}`}
    >
      {initials}
    </div>
  );
};

interface LogoCloudProps extends VisualProps {
  count?: number;
}

export const LogoCloud: React.FC<LogoCloudProps> = ({ count = 6, className }) => {
  return (
    <div
      className={cn(
        "flex flex-wrap items-center justify-center gap-8 lg:gap-12",
        className
      )}
    >
      {Array.from({ length: count }).map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          className="flex items-center gap-2 text-foreground-subtle dark:text-foreground-muted"
        >
          <div className="h-8 w-8 rounded-lg bg-slate-200 dark:bg-slate-700" />
          <div className="h-4 w-24 rounded bg-slate-200 dark:bg-slate-700" />
        </motion.div>
      ))}
    </div>
  );
};

interface StatsVisualProps extends VisualProps {
  value: string;
  suffix?: string;
  label: string;
}

export const StatsVisual: React.FC<StatsVisualProps> = ({
  value,
  suffix,
  label,
  className,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={cn("text-center", className)}
    >
      <div className="font-display text-4xl lg:text-5xl font-bold text-primary dark:text-primary-400">
        {value}
        {suffix && <span className="text-accent dark:text-accent-400">{suffix}</span>}
      </div>
      <div className="mt-2 text-foreground-muted dark:text-foreground-muted font-medium">{label}</div>
    </motion.div>
  );
};

interface GeometricPatternProps extends VisualProps {
  variant?: "circles" | "grid" | "mesh";
}

export const GeometricPattern: React.FC<GeometricPatternProps> = ({
  variant = "circles",
  className,
}) => {
  const patterns = {
    circles: (
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-400 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -left-20 w-60 h-60 bg-accent-400 rounded-full blur-2xl" />
        <div className="absolute -bottom-20 right-1/3 w-40 h-40 bg-secondary-400 rounded-full blur-2xl" />
      </div>
    ),
    grid: (
      <div className="absolute inset-0 opacity-5">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="grid-pattern"
              width="32"
              height="32"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 32 0 L 0 0 0 32"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>
      </div>
    ),
    mesh: (
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-transparent to-secondary-500/5" />
        <div className="absolute inset-0 bg-gradient-to-tl from-accent-500/5 via-transparent to-trust-500/5" />
      </div>
    ),
  };

  return <div className={cn("relative", className)}>{patterns[variant]}</div>;
};