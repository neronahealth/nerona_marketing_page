"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  Users,
  Building2,
  Server,
  Globe,
  Shield,
  Database,
  Cpu,
  Cloud,
  type LucideIcon,
} from "lucide-react";

interface ArchitectureNode {
  icon: LucideIcon;
  label: string;
  color: "primary" | "secondary" | "accent" | "trust" | "emergency";
  description?: string;
}

interface ArchitectureDiagramProps {
  variant?: "full" | "compact" | "enterprise";
  animated?: boolean;
  showLabels?: boolean;
  className?: string;
}

const colorStyles: Record<string, { bg: string; icon: string; border: string; glow: string }> = {
  primary: {
    bg: "bg-primary-50 dark:bg-primary-900/30",
    icon: "text-primary-600 dark:text-primary-400",
    border: "border-primary-200 dark:border-primary-700",
    glow: "shadow-glow-primary",
  },
  secondary: {
    bg: "bg-secondary-50 dark:bg-secondary-900/30",
    icon: "text-secondary-600 dark:text-secondary-400",
    border: "border-secondary-200 dark:border-secondary-700",
    glow: "shadow-glow-secondary",
  },
  accent: {
    bg: "bg-accent-50 dark:bg-accent-900/30",
    icon: "text-accent-600 dark:text-accent-400",
    border: "border-accent-200 dark:border-accent-700",
    glow: "shadow-glow-accent",
  },
  trust: {
    bg: "bg-trust-50 dark:bg-trust-900/30",
    icon: "text-trust-600 dark:text-trust-400",
    border: "border-trust-200 dark:border-trust-700",
    glow: "shadow-glow-trust",
  },
  emergency: {
    bg: "bg-emergency-50 dark:bg-emergency-900/30",
    icon: "text-emergency-600 dark:text-emergency-400",
    border: "border-emergency-200 dark:border-emergency-700",
    glow: "shadow-glow-primary",
  },
};

const ArchitectureNode: React.FC<{
  node: ArchitectureNode;
  animated?: boolean;
  delay?: number;
  showDescription?: boolean;
}> = ({ node, animated = true, delay = 0, showDescription = false }) => {
  const Icon = node.icon;
  const styles = colorStyles[node.color];

  return (
    <motion.div
      initial={animated ? { opacity: 0, scale: 0.8 } : false}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.3 }}
      whileHover={{ scale: 1.02 }}
      className={cn(
        "flex flex-col items-center p-4 rounded-xl border-2 transition-shadow",
        styles.bg,
        styles.border,
        "hover:shadow-soft dark:hover:shadow-none"
      )}
    >
      <div className={cn("w-10 h-10 rounded-lg flex items-center justify-center mb-2", styles.bg)}>
        <Icon className={cn("w-5 h-5", styles.icon)} />
      </div>
      <span className="text-sm font-medium text-foreground text-center">{node.label}</span>
      {showDescription && node.description && (
        <span className="text-xs text-foreground-muted text-center mt-1">{node.description}</span>
      )}
    </motion.div>
  );
};

const DataFlowArrow: React.FC<{ delay?: number; direction?: "right" | "down" | "left" | "up" }> = ({
  delay = 0,
  direction = "right",
}) => {
  const pathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { pathLength: 1, opacity: 1 },
  };

  const rotations = {
    right: 0,
    down: 90,
    left: 180,
    up: 270,
  };

  return (
    <motion.svg
      initial="hidden"
      animate="visible"
      width="40"
      height="12"
      viewBox="0 0 40 12"
      style={{ transform: `rotate(${rotations[direction]}deg)` }}
    >
      <motion.path
        d="M 2 6 L 30 6 M 25 2 L 32 6 L 25 10"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        strokeDasharray="60"
        variants={pathVariants}
        transition={{ delay, duration: 0.5, ease: "easeInOut" }}
        className="        text-slate-300 dark:text-slate-600"
      />
    </motion.svg>
  );
};

export const ArchitectureDiagram: React.FC<ArchitectureDiagramProps> = ({
  variant = "full",
  animated = true,
  showLabels = true,
  className,
}) => {
  const patientNodes: ArchitectureNode[] = [
    { icon: Users, label: "Mobile App", color: "primary", description: "Patient Interface" },
    { icon: Globe, label: "Web Portal", color: "primary", description: "Browser Access" },
  ];

  const coreNodes: ArchitectureNode[] = [
    { icon: Server, label: "API Gateway", color: "trust", description: "Request Router" },
    { icon: Cpu, label: "AI Engine", color: "accent", description: "Ollama Cloud" },
    { icon: Database, label: "Database", color: "secondary", description: "PostgreSQL" },
  ];

  const hospitalNodes: ArchitectureNode[] = [
    { icon: Building2, label: "Hospital DB", color: "secondary", description: "Health Records" },
    { icon: Cloud, label: "Cloud Storage", color: "secondary", description: "Files & Images" },
    { icon: Shield, label: "Auth Service", color: "emergency", description: "Security" },
  ];

  return (
  <div
    className={cn("relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-50 to-white dark:from-slate-800 dark:to-slate-900 p-6 border border-slate-200 dark:border-slate-700", className)}
      role="figure"
      aria-label="System architecture diagram"
    >
      <motion.div
        initial={animated ? { opacity: 0 } : false}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="space-y-8"
      >
        <div>
          <h4 className="text-sm font-semibold text-foreground-muted dark:text-foreground-muted mb-4 text-center">Patient Applications</h4>
          <div className="flex justify-center gap-4">
            {patientNodes.map((node, i) => (
              <ArchitectureNode
                key={node.label}
                node={node}
                animated={animated}
                delay={i * 0.1}
                showDescription={showLabels && variant === "full"}
              />
            ))}
          </div>
        </div>

        <div className="flex justify-center">
          <motion.div
            initial={animated ? { scaleX: 0 } : false}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <DataFlowArrow direction="down" delay={0.2} />
          </motion.div>
        </div>

        <div>
  <h4 className="text-sm font-semibold text-foreground-muted dark:text-foreground-muted mb-4 text-center">NeronaHealth Platform</h4>
          <div className="flex flex-wrap justify-center gap-4">
            {coreNodes.map((node, i) => (
              <ArchitectureNode
                key={node.label}
                node={node}
                animated={animated}
                delay={0.3 + i * 0.1}
                showDescription={showLabels && variant === "full"}
              />
            ))}
          </div>
        </div>

        <div className="flex justify-center">
          <motion.div
            initial={animated ? { scaleX: 0 } : false}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <DataFlowArrow direction="down" delay={0.5} />
          </motion.div>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-foreground-muted dark:text-foreground-muted mb-4 text-center">External Services</h4>
          <div className="flex flex-wrap justify-center gap-4">
            {hospitalNodes.map((node, i) => (
              <ArchitectureNode
                key={node.label}
                node={node}
                animated={animated}
                delay={0.6 + i * 0.1}
                showDescription={showLabels && variant === "full"}
              />
            ))}
          </div>
        </div>
      </motion.div>

      <div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-primary-100/20 dark:bg-primary-500/10 blur-3xl pointer-events-none" />
      <div className="absolute -top-10 -left-10 w-32 h-32 rounded-full bg-trust-100/20 dark:bg-trust-500/10 blur-2xl pointer-events-none" />
    </div>
  );
};

interface IntegrationDiagramProps {
  animated?: boolean;
  className?: string;
}

export const IntegrationDiagram: React.FC<IntegrationDiagramProps> = ({
  animated = true,
  className,
}) => (
  <div
    className={cn("relative p-8 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700", className)}
    role="figure"
    aria-label="Integration diagram"
  >
    <div className="flex items-center justify-center gap-12">
      <motion.div
        initial={animated ? { opacity: 0, x: -20 } : false}
        animate={{ opacity: 1, x: 0 }}
        className="flex flex-col items-center"
      >
        <div className="w-16 h-16 rounded-2xl bg-primary-50 dark:bg-primary-900/30 flex items-center justify-center mb-2">
          <Users className="w-8 h-8 text-primary-600 dark:text-primary-400" />
        </div>
        <span className="text-sm font-medium text-foreground dark:text-foreground">Your App</span>
      </motion.div>

      <motion.div
        initial={animated ? { opacity: 0, scaleX: 0 } : false}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ delay: 0.2 }}
        className="flex items-center gap-2"
      >
        <div className="w-20 h-0.5 bg-gradient-to-r from-primary-300 to-trust-300" />
        <div className="flex flex-col items-center">
          <motion.div
            animate={{ x: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-trust-500"
          >
            →
          </motion.div>
          <motion.div
            animate={{ x: [0, -4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-secondary-500"
          >
            ←
          </motion.div>
        </div>
        <div className="w-20 h-0.5 bg-gradient-to-r from-trust-300 to-secondary-300" />
      </motion.div>

      <motion.div
        initial={animated ? { opacity: 0, x: 20 } : false}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
        className="flex flex-col items-center"
      >
        <div className="w-16 h-16 rounded-2xl bg-trust-50 dark:bg-trust-900/30 flex items-center justify-center mb-2">
          <Server className="w-8 h-8 text-trust-600 dark:text-trust-400" />
        </div>
  <span className="text-sm font-medium text-foreground dark:text-foreground">NeronaHealth API</span>
      </motion.div>
    </div>
  </div>
);
