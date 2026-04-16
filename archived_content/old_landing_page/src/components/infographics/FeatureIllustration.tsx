"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  MessageSquare,
  Brain,
  Ambulance,
  Search,
  Building2,
} from "lucide-react";

type IllustrationVariant = "ai-triage" | "emergency-dispatch" | "hospital-discovery" | "appointment-booking";

export interface FeatureIllustrationProps {
  feature: IllustrationVariant;
  animated?: boolean;
  className?: string;
}

const ProcessingDots: React.FC<{ color?: string }> = ({ color = "primary" }) => (
  <div className="flex gap-1 items-center justify-center">
    {[0, 1, 2].map((i) => (
      <motion.div
        key={i}
        className={cn(
          "w-2 h-2 rounded-full",
          color === "primary" && "bg-primary-500",
          color === "accent" && "bg-accent-500",
          color === "trust" && "bg-trust-500"
        )}
        animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.2 }}
      />
    ))}
  </div>
);

const AITriageIllustration: React.FC<{ animated: boolean }> = ({ animated }) => (
  <div className="relative h-full w-full flex flex-col justify-center gap-4 p-6">
    <motion.div
      initial={animated ? { opacity: 0, y: 10 } : false}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-4 shadow-soft dark:shadow-none"
    >
      <div className="flex items-start gap-3">
        <div className="w-8 h-8 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center flex-shrink-0">
          <MessageSquare className="w-4 h-4 text-primary-600 dark:text-primary-400" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-sm font-medium text-foreground dark:text-foreground">You</span>
            <span className="text-xs text-slate-400 dark:text-slate-500">Just now</span>
          </div>
          <motion.p
            initial={animated ? { opacity: 0 } : false}
            animate={{ opacity: 1 }}
            className="text-sm text-foreground dark:text-foreground"
          >
            I have chest pain and difficulty breathing
          </motion.p>
        </div>
      </div>
    </motion.div>

    <motion.div
      initial={animated ? { opacity: 0 } : false}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
      className="flex justify-center"
    >
      <motion.div
        animate={animated ? { scale: [1, 1.05, 1] } : false}
        transition={{ duration: 2, repeat: Infinity }}
        className="flex items-center gap-2 px-4 py-2 rounded-full bg-accent-50 dark:bg-accent-900/30 border border-accent-200 dark:border-accent-800"
      >
        <Brain className="w-4 h-4 text-accent-600 dark:text-accent-400" />
        <span className="text-xs font-medium text-accent-700 dark:text-accent-300">AI Processing</span>
        <ProcessingDots color="accent" />
      </motion.div>
    </motion.div>

    <motion.div
      initial={animated ? { opacity: 0, y: 10 } : false}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="bg-trust-50 dark:bg-trust-900/30 rounded-xl border border-trust-200 dark:border-trust-800 p-4"
    >
      <div className="flex items-start gap-3">
        <div className="w-8 h-8 rounded-full bg-trust-200 dark:bg-trust-800 flex items-center justify-center flex-shrink-0">
          <Brain className="w-4 h-4 text-trust-600 dark:text-trust-400" />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-sm font-medium text-trust-700 dark:text-trust-300">AI Analysis</span>
            <span className="text-xs px-2 py-0.5 rounded-full bg-emergency-100 dark:bg-emergency-900/30 text-emergency-700 dark:text-emergency-300">Urgent</span>
          </div>
          <p className="text-xs text-foreground-muted dark:text-foreground-muted mb-2">
            Possible cardiac concerns detected. Recommend immediate consultation.
          </p>
          <div className="flex gap-2">
            <motion.button
              whileHover={{ scale: 1.02 }}
              className="text-xs px-3 py-1.5 rounded-lg bg-trust-600 dark:bg-trust-500 text-white font-medium"
            >
              Find Hospital
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              className="text-xs px-3 py-1.5 rounded-lg bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-foreground dark:text-foreground font-medium"
            >
              View Details
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  </div>
);

const EmergencyDispatchIllustration: React.FC<{ animated: boolean }> = ({ animated }) => (
  <div className="relative h-full w-full flex items-center justify-center p-6">
    <div className="relative w-full max-w-sm">
      <motion.div
        initial={animated ? { opacity: 0, scale: 0.95 } : false}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-slate-100 dark:bg-slate-700 rounded-2xl p-4 relative overflow-hidden"
      >
        <svg viewBox="0 0 300 200" className="w-full h-48">
        <motion.rect
          initial={animated ? { opacity: 0.3 } : false}
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
          x="0" y="0" width="300" height="200"
          className="fill-slate-100 dark:fill-slate-700"
        />
          
          <motion.path
            initial={animated ? { pathLength: 0 } : false}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "loop" }}
            d="M 50 100 L 250 100"
            className="stroke-primary-500"
            strokeWidth="3"
            fill="none"
            strokeDasharray="10 5"
          />

          <motion.g
            animate={animated ? { x: [0, 180] } : false}
            transition={{ duration: 3, repeat: Infinity, repeatType: "loop", ease: "linear" }}
          >
            <rect x="50" y="85" width="40" height="30" rx="4" className="fill-emergency-500" />
            <rect x="52" y="87" width="36" height="12" rx="2" className="fill-white dark:fill-slate-200" />
            <text x="55" y="96" fontSize="6" className="fill-emergency-600 dark:fill-emergency-400" fontWeight="bold">AMB</text>
          </motion.g>

          <circle cx="250" cy="100" r="15" className="fill-trust-500" />
          <text x="250" y="104" textAnchor="middle" fontSize="10" className="fill-white">H</text>
          <text x="250" y="130" textAnchor="middle" fontSize="8" className="fill-slate-500 dark:fill-slate-400">Hospital</text>
        </svg>

        <motion.div
          animate={animated ? { scale: [1, 1.02, 1] } : false}
          transition={{ duration: 1, repeat: Infinity }}
          className="absolute top-2 right-2 flex items-center gap-1 px-2 py-1 rounded-full bg-emergency-500 text-white text-xs font-medium"
        >
          <Ambulance className="w-3 h-3" />
          <span>Responding</span>
        </motion.div>

        <div className="mt-3 flex justify-between items-center">
          <div>
            <p className="text-xs text-foreground-muted">ETA</p>
            <p className="text-lg font-bold text-emergency-600">4 min</p>
          </div>
          <div className="text-right">
            <p className="text-xs text-foreground-muted dark:text-foreground-muted">Distance</p>
            <p className="text-lg font-bold text-trust-600">1.2 km</p>
          </div>
        </div>
      </motion.div>

      <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-emergency-100 blur-xl" />
    </div>
  </div>
);

const HospitalDiscoveryIllustration: React.FC<{ animated: boolean }> = ({ animated }) => (
  <div className="relative h-full w-full flex items-center justify-center p-6">
    <div className="relative w-full max-w-sm space-y-4">
      <motion.div
        initial={animated ? { opacity: 0 } : false}
        animate={{ opacity: 1 }}
        className="flex items-center gap-3 p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-soft dark:shadow-none"
      >
        <Search className="w-5 h-5 text-slate-400 dark:text-slate-500" />
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
          className="text-sm text-foreground-muted dark:text-foreground-muted"
        >
          Cardiology near me
        </motion.div>
      </motion.div>

      {[
        { name: "Lagos General Hospital", distance: "0.8 km", rating: 4.8, wait: "15 min", available: true },
        { name: "St. Mary Medical Center", distance: "1.2 km", rating: 4.6, wait: "30 min", available: true },
        { name: "City Health Clinic", distance: "2.5 km", rating: 4.4, wait: "5 min", available: false },
      ].map((hospital, i) => (
        <motion.div
          key={hospital.name}
          initial={animated ? { opacity: 0, x: -20 } : false}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 + i * 0.15 }}
          whileHover={{ scale: 1.01 }}
          className="flex items-center gap-4 p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-primary-200 dark:hover:border-primary-700 transition-colors cursor-pointer"
        >
          <div className="w-12 h-12 rounded-lg bg-secondary-50 dark:bg-secondary-900/30 flex items-center justify-center">
            <Building2 className="w-6 h-6 text-secondary-600 dark:text-secondary-400" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <p className="font-medium text-sm truncate text-foreground dark:text-foreground">{hospital.name}</p>
              {hospital.available && (
                <span className="text-xs px-2 py-0.5 rounded-full bg-secondary-100 dark:bg-secondary-900/30 text-secondary-700 dark:text-secondary-300">
                  Available
                </span>
              )}
            </div>
            <div className="flex items-center gap-3 mt-1">
              <span className="text-xs text-foreground-muted dark:text-foreground-muted">{hospital.distance}</span>
              <span className="text-xs text-foreground-muted dark:text-foreground-muted flex items-center gap-1">
                ★ {hospital.rating}
              </span>
              <span className="text-xs text-trust-600 dark:text-trust-400">{hospital.wait} wait</span>
            </div>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-3 py-1.5 text-xs font-medium bg-primary-500 dark:bg-primary-600 text-white rounded-lg"
          >
            Book
          </motion.button>
        </motion.div>
      ))}
    </div>
  </div>
);

const AppointmentBookingIllustration: React.FC<{ animated: boolean }> = ({ animated }) => (
  <div className="relative h-full w-full flex flex-col justify-center p-6">
    <div className="space-y-4">
      <motion.div
        initial={animated ? { opacity: 0, y: 10 } : false}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-4 shadow-soft dark:shadow-none"
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-trust-100 dark:bg-trust-900/30" />
          <div>
            <p className="font-medium text-sm text-foreground dark:text-foreground">Dr. Sarah Abe</p>
            <p className="text-xs text-foreground-muted dark:text-foreground-muted">Cardiologist • 15 years exp.</p>
          </div>
          <div className="ml-auto flex items-center gap-1 text-xs text-accent-600 dark:text-accent-400">
            ★ 4.9
          </div>
        </div>

        <div className="grid grid-cols-4 gap-2 mb-4">
          {["9AM", "10AM", "11AM", "2PM"].map((time, i) => (
            <motion.button
              key={time}
              initial={animated ? { opacity: 0, scale: 0.9 } : false}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className={cn(
                "py-2 px-3 rounded-lg text-xs font-medium transition-colors",
                i === 1
                  ? "bg-trust-500 dark:bg-trust-600 text-white"
                  : "bg-slate-100 dark:bg-slate-700 text-foreground-muted dark:text-foreground-muted hover:bg-slate-200 dark:hover:bg-slate-600"
              )}
            >
              {time}
            </motion.button>
          ))}
        </div>

        <motion.button
          whileHover={{ scale: 1.01 }}
          className="w-full py-3 bg-trust-500 dark:bg-trust-600 text-white rounded-lg font-medium text-sm"
        >
          Confirm Booking
        </motion.button>
      </motion.div>

      <motion.div
        initial={animated ? { opacity: 0 } : false}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="flex items-center justify-center gap-4 text-xs text-foreground-muted dark:text-foreground-muted"
      >
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 rounded-full bg-secondary-500" />
          <span>Video Call</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 rounded-full bg-trust-500" />
          <span>In-Person</span>
        </div>
      </motion.div>
    </div>
  </div>
);

const illustrations: Record<IllustrationVariant, React.FC<{ animated: boolean }>> = {
  "ai-triage": AITriageIllustration,
  "emergency-dispatch": EmergencyDispatchIllustration,
  "hospital-discovery": HospitalDiscoveryIllustration,
  "appointment-booking": AppointmentBookingIllustration,
};

export const FeatureIllustration: React.FC<FeatureIllustrationProps> = ({
  feature,
  animated = true,
  className,
}) => {
  const Illustration = illustrations[feature];

  return (
    <motion.div
      initial={animated ? { opacity: 0, scale: 0.98 } : false}
      animate={{ opacity: 1, scale: 1 }}
      className={cn(
        "relative rounded-2xl bg-gradient-to-br from-slate-50 to-white dark:from-slate-800 dark:to-slate-900 overflow-hidden",
        "min-h-[300px]",
        className
      )}
      role="figure"
      aria-label={`${feature} illustration`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-transparent to-trust-500/5 dark:from-primary-500/10 dark:to-trust-500/10 pointer-events-none" />
      <Illustration animated={animated} />
    </motion.div>
  );
};