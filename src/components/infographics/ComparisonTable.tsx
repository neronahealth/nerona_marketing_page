"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Check, X } from "lucide-react";

export interface ComparisonRow {
  feature: string;
  traditional: string | boolean;
  healthbudi: string | boolean;
  highlight?: boolean;
}

interface ComparisonTableProps {
  columns?: [string, string];
  rows: ComparisonRow[];
  animated?: boolean;
  variant?: "default" | "cards" | "stacked";
  className?: string;
}

export const ComparisonTable: React.FC<ComparisonTableProps> = ({
  columns = ["Traditional", "NeronaHealth"],
  rows,
  animated = true,
  variant = "default",
  className,
}) => {
  const renderValue = (value: string | boolean, isHealthbudi: boolean) => {
    if (typeof value === "boolean") {
      return value ? (
        <Check className={cn(
          "w-5 h-5",
          isHealthbudi ? "text-secondary-500" : "text-slate-400 dark:text-slate-500"
        )} />
      ) : (
        <X className="w-5 h-5 text-slate-300 dark:text-slate-600" />
      );
    }
    return (
      <span className={cn(
        "font-medium text-sm",
        isHealthbudi ? "text-foreground" : "text-foreground-muted"
      )}>
        {value}
      </span>
    );
  };

  if (variant === "cards") {
    return (
      <div
        className={cn("grid md:grid-cols-2 gap-6", className)}
        role="table"
        aria-label="Comparison table"
      >
        {[columns[0], columns[1]].map((column, colIndex) => (
          <motion.div
            key={column}
            initial={animated ? { opacity: 0, y: 20 } : false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: colIndex * 0.15 }}
              className={cn(
                "rounded-2xl p-6 border",
                colIndex === 0 ? "bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700" : "bg-gradient-to-br from-primary-50 to-trust-50 dark:from-primary-900/30 dark:to-trust-900/30 border-primary-200 dark:border-primary-700 shadow-soft"
              )}
            role="columnheader"
          >
            <h3 className={cn(
              "text-lg font-semibold mb-6",
              colIndex === 0 ? "text-foreground-muted dark:text-foreground-muted" : "text-primary dark:text-primary-400"
            )}>
              {column}
            </h3>
            <div className="space-y-4" role="rowgroup">
              {rows.map((row, rowIndex) => (
                <motion.div
                  key={row.feature}
                  initial={animated ? { opacity: 0 } : false}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.1 + rowIndex * 0.05 }}
                  className="flex items-center justify-between py-2"
                  role="row"
                >
                  <span className="text-sm text-foreground-muted">{row.feature}</span>
                  <div role="cell">
                    {renderValue(colIndex === 0 ? row.traditional : row.healthbudi, colIndex === 1)}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    );
  }

  if (variant === "stacked") {
    return (
      <div className={cn("space-y-4", className)} role="table" aria-label="Comparison table">
        {rows.map((row, index) => (
          <motion.div
            key={row.feature}
            initial={animated ? { opacity: 0, x: -20 } : false}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className={cn(
              "bg-white dark:bg-slate-800 rounded-xl border p-4",
              row.highlight ? "border-primary-200 dark:border-primary-700 shadow-soft" : "border-slate-200 dark:border-slate-700"
            )}
            role="row"
          >
            <div className="font-medium text-foreground mb-3">{row.feature}</div>
            <div className="grid grid-cols-2 gap-4" role="cell">
              <div className={cn(
                "flex items-center gap-2 p-3 rounded-lg",
                "bg-slate-50 dark:bg-slate-700"
              )}>
                <span className="text-xs font-medium text-foreground-muted uppercase tracking-wide">Traditional</span>
                <span className="ml-auto">{renderValue(row.traditional, false)}</span>
              </div>
              <div className={cn(
                "flex items-center gap-2 p-3 rounded-lg",
                "bg-trust-50 dark:bg-trust-900/30 border border-trust-200 dark:border-trust-700"
              )}>
  <span className="text-xs font-medium text-trust-700 dark:text-trust-300 uppercase tracking-wide">NeronaHealth</span>
                <span className="ml-auto">{renderValue(row.healthbudi, true)}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    );
  }

  return (
    <div
      className={cn("overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-700", className)}
      role="table"
      aria-label="Comparison table"
    >
      <table className="w-full">
        <thead>
          <tr className="bg-slate-50 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700" role="row">
            <th className="text-left p-4 font-medium text-sm text-foreground-muted" role="columnheader">Feature</th>
            <th className="text-center p-4 font-medium text-sm text-foreground-muted" role="columnheader">{columns[0]}</th>
            <th className="text-center p-4 font-medium text-sm text-primary" role="columnheader">
              <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 rounded-full text-xs">{columns[1]}</span>
            </th>
          </tr>
        </thead>
        <tbody role="rowgroup">
          {rows.map((row, index) => (
            <motion.tr
              key={row.feature}
              initial={animated ? { opacity: 0 } : false}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.05 }}
              className={cn(
                "border-b border-slate-100 dark:border-slate-700 last:border-0 transition-colors",
                row.highlight && "bg-primary-50/50 dark:bg-primary-900/20"
              )}
              role="row"
            >
              <td className="text-left p-4 font-medium text-sm" role="cell">{row.feature}</td>
              <td className="text-center p-4" role="cell">{renderValue(row.traditional, false)}</td>
              <td className="text-center p-4" role="cell">
                <span className="inline-flex items-center justify-center">
                  {renderValue(row.healthbudi, true)}
                </span>
              </td>
            </motion.tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

interface MetricComparisonProps {
  metrics: {
    label: string;
    before: number;
    after: number;
    unit?: string;
    lowerBetter?: boolean;
  }[];
  animated?: boolean;
  className?: string;
}

export const MetricComparison: React.FC<MetricComparisonProps> = ({
  metrics,
  animated = true,
  className,
}) => {
  return (
    <div className={cn("space-y-6", className)}>
      {metrics.map((metric, index) => {
        const improvement = metric.lowerBetter
          ? ((metric.before - metric.after) / metric.before) * 100
          : ((metric.after - metric.before) / metric.before) * 100;
        const isPositive = improvement > 0;

        return (
          <motion.div
            key={metric.label}
            initial={animated ? { opacity: 0, y: 20 } : false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="space-y-2"
          >
            <div className="flex items-center justify-between text-sm">
              <span className="font-medium text-foreground">{metric.label}</span>
              <span className={cn(
                "font-medium flex items-center gap-1",
                isPositive ? "text-secondary-600" : "text-emergency-600"
              )}>
                {isPositive ? "↑" : "↓"} {Math.abs(improvement).toFixed(0)}%
              </span>
            </div>

            <div className="relative h-8 rounded-lg bg-slate-100 dark:bg-slate-700 overflow-hidden">
              <motion.div
                initial={animated ? { width: 0 } : false}
                animate={{ width: `${(metric.before / 100) * 100}%` }}
                transition={{ delay: index * 0.1 + 0.2, duration: 0.5 }}
                className="absolute left-0 top-0 bottom-0 bg-slate-300 dark:bg-slate-600 opacity-50 rounded-l-lg"
              />
              <motion.div
                initial={animated ? { width: 0 } : false}
                animate={{ width: `${(metric.after / 100) * 100}%` }}
                transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
                className={cn(
                  "absolute left-0 top-0 bottom-0 rounded-lg",
                  metric.lowerBetter ? "bg-secondary-500" : "bg-primary-500"
                )}
              />
              <div className="absolute inset-0 flex items-center justify-between px-3 text-xs font-medium">
                <span className="text-slate-600 dark:text-slate-300">{metric.before}{metric.unit}</span>
                <span className="text-white">{metric.after}{metric.unit}</span>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

const defaultComparisonRows: ComparisonRow[] = [
  { feature: "Average Wait Time", traditional: "4 hours", healthbudi: "15 min", highlight: true },
  { feature: "Diagnosis Accuracy", traditional: "70%", healthbudi: "95%", highlight: true },
  { feature: "Hospital Discovery", traditional: "Manual search", healthbudi: "AI-powered matching" },
  { feature: "Appointment Booking", traditional: "Phone calls", healthbudi: "Instant online" },
  { feature: "Medical Records", traditional: "Paper-based", healthbudi: "Digital & secure" },
  { feature: "Emergency Response", traditional: "15+ min", healthbudi: "< 5 min" },
  { feature: "Cost Transparency", traditional: false, healthbudi: true },
  { feature: "24/7 Availability", traditional: false, healthbudi: true },
];

export const DefaultComparison: React.FC<{ className?: string }> = ({ className }) => (
  <ComparisonTable rows={defaultComparisonRows} className={className} />
);
