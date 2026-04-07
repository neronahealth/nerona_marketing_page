"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  Activity,
  Calendar,
  MessageSquare,
  Building2,
  Heart,
  Clock,
  FileText,
  Users,
  Stethoscope,
  Bell,
  Settings,
  Home,
  ChevronRight,
} from "lucide-react";

type DashboardVariant = "patient" | "doctor" | "hospital";
type MobileVariant = "patient" | "doctor";

interface DashboardMockupProps {
  variant?: DashboardVariant;
  animated?: boolean;
  className?: string;
}

interface MobileMockupProps {
  variant?: MobileVariant;
  animated?: boolean;
  className?: string;
}

const Sidebar: React.FC<{
  variant: DashboardVariant;
  activeItem?: string;
}> = ({ variant, activeItem = "dashboard" }) => {
  const navItems = {
    patient: [
      { icon: Home, label: "Dashboard", id: "dashboard" },
      { icon: MessageSquare, label: "AI Triage", id: "triage" },
      { icon: Calendar, label: "Appointments", id: "appointments" },
      { icon: FileText, label: "Records", id: "records" },
      { icon: Heart, label: "Health Track", id: "health" },
      { icon: Building2, label: "Find Hospital", id: "hospital" },
    ],
    doctor: [
      { icon: Home, label: "Dashboard", id: "dashboard" },
      { icon: Users, label: "Patients", id: "patients" },
      { icon: Calendar, label: "Schedule", id: "schedule" },
      { icon: FileText, label: "Prescriptions", id: "prescriptions" },
      { icon: MessageSquare, label: "Consultations", id: "consultations" },
      { icon: Settings, label: "Settings", id: "settings" },
    ],
    hospital: [
      { icon: Home, label: "Dashboard", id: "dashboard" },
      { icon: Users, label: "Patients", id: "patients" },
      { icon: Stethoscope, label: "Doctors", id: "doctors" },
      { icon: Calendar, label: "Appointments", id: "appointments" },
      { icon: Activity, label: "Analytics", id: "analytics" },
      { icon: Settings, label: "Settings", id: "settings" },
    ],
  };

  const items = navItems[variant];

  return (
    <div className="w-48 bg-slate-900 text-white flex flex-col">
      <div className="p-4 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <div className={cn(
            "w-8 h-8 rounded-lg flex items-center justify-center",
            variant === "patient" && "bg-primary-500",
            variant === "doctor" && "bg-trust-500",
            variant === "hospital" && "bg-secondary-500"
          )}>
            <Activity className="w-5 h-5" />
          </div>
          <span className="font-display font-bold text-sm">NeronaHealth</span>
        </div>
      </div>
      <nav className="flex-1 p-3 space-y-1" role="navigation" aria-label="Dashboard navigation">
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = activeItem === item.id;
          return (
            <motion.button
              key={item.id}
              whileHover={{ x: 2 }}
              className={cn(
                "w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors",
                isActive
                  ? variant === "patient"
                    ? "bg-primary-500/20 text-primary-300"
                    : variant === "doctor"
                    ? "bg-trust-500/20 text-trust-300"
                    : "bg-secondary-500/20 text-secondary-300"
                  : "text-slate-400 hover:text-white hover:bg-slate-800"
              )}
              aria-current={isActive ? "page" : undefined}
            >
              <Icon className="w-4 h-4" />
              <span>{item.label}</span>
            </motion.button>
          );
        })}
      </nav>
      <div className="p-3 border-t border-slate-800">
        <div className="flex items-center gap-2 px-3 py-2">
          <div className="w-8 h-8 rounded-full bg-slate-700" />
          <div className="flex-1 min-w-0">
            <div className="text-xs font-medium truncate">Dr. Sarah Abe</div>
            <div className="text-xs text-slate-500 dark:text-slate-400 truncate">{variant === "doctor" ? "Cardiologist" : "Patient"}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const DashboardHeader: React.FC<{ title: string }> = ({ title }) => (
  <header className="h-14 border-b border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-6 flex items-center justify-between">
    <h2 className="font-display font-semibold text-foreground">{title}</h2>
    <div className="flex items-center gap-3">
      <div className="relative">
        <Bell className="w-5 h-5 text-slate-500 dark:text-slate-400" />
        <span className="absolute -top-1 -right-1 w-2 h-2 bg-emergency-500 rounded-full" />
      </div>
      <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700" />
    </div>
  </header>
);

const TriageCard: React.FC<{
  urgency: "critical" | "urgent" | "moderate" | "low";
  symptom: string;
  delay?: number;
}> = ({ urgency, symptom, delay = 0 }) => {
  const urgencyConfig = {
    critical: { color: "bg-emergency-500", label: "Critical", bg: "bg-emergency-50" },
    urgent: { color: "bg-accent-500", label: "Urgent", bg: "bg-accent-50" },
    moderate: { color: "bg-trust-500", label: "Moderate", bg: "bg-trust-50" },
    low: { color: "bg-secondary-500", label: "Low", bg: "bg-secondary-50" },
  };

  const config = urgencyConfig[urgency];

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.3 }}
      className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-4 hover:shadow-soft dark:hover:shadow-none transition-shadow"
    >
      <div className="flex items-start gap-3">
        <div className={cn("w-3 h-3 rounded-full mt-1", config.color)} />
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span className={cn("text-xs font-medium px-2 py-0.5 rounded", config.bg, config.color.replace("bg-", "text-"))}>
              {config.label}
            </span>
          </div>
          <p className="text-sm text-foreground line-clamp-1">{symptom}</p>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Analyzed 2 min ago</p>
        </div>
    <ChevronRight className="w-4 h-4 text-slate-400 dark:text-slate-500" />
      </div>
    </motion.div>
  );
};

const AppointmentCard: React.FC<{
  doctor: string;
  specialty: string;
  time: string;
  type: "video" | "in-person";
  delay?: number;
}> = ({ doctor, specialty, time, type, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, x: -10 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay, duration: 0.3 }}
    className="flex items-center gap-3 p-3 bg-slate-50 dark:bg-slate-700/50 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
  >
    <div className="w-10 h-10 rounded-full bg-trust-100 flex items-center justify-center">
      <span className="text-trust-600 font-semibold text-sm">
        {doctor.split(" ").map(n => n[0]).join("")}
      </span>
    </div>
    <div className="flex-1 min-w-0">
      <p className="text-sm font-medium truncate">{doctor}</p>
      <p className="text-xs text-slate-500 dark:text-slate-400">{specialty}</p>
    </div>
    <div className="text-right">
      <p className="text-xs font-medium text-foreground">{time}</p>
      <p className="text-xs text-slate-500 dark:text-slate-400">{type}</p>
    </div>
  </motion.div>
);

const StatCard: React.FC<{
  value: string;
  label: string;
  trend?: "up" | "down" | "neutral";
  delay?: number;
}> = ({ value, label, trend, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay, duration: 0.3 }}
    className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-4"
  >
    <p className="text-2xl font-display font-bold text-foreground">{value}</p>
    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{label}</p>
    {trend && (
      <div className={cn(
        "mt-2 flex items-center gap-1 text-xs",
        trend === "up" && "text-secondary-600",
        trend === "down" && "text-emergency-600",
        trend === "neutral" && "text-slate-500 dark:text-slate-400"
      )}>
        {trend === "up" && "+"}{trend === "down" && "-"}12% this week
      </div>
    )}
  </motion.div>
);

const PatientDashboard: React.FC<{ animated?: boolean }> = ({ animated }) => (
  <div className="flex-1 bg-slate-50 dark:bg-slate-900 p-6 overflow-auto">
    <DashboardHeader title="Patient Dashboard" />
    <div className="mt-6 space-y-6">
      <motion.div
        initial={animated ? { opacity: 0, y: 20 } : false}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl p-6 text-white"
      >
        <h3 className="text-lg font-semibold mb-1">Good morning, Emmanuel</h3>
        <p className="text-sm text-white/80">You have 2 upcoming appointments this week</p>
      </motion.div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard value="3" label="Active Consultations" trend="up" delay={animated ? 0.1 : 0} />
        <StatCard value="12" label="Total Visits" delay={animated ? 0.15 : 0} />
        <StatCard value="2" label="Prescriptions" delay={animated ? 0.2 : 0} />
        <StatCard value="98%" label="Health Score" trend="up" delay={animated ? 0.25 : 0} />
      </div>

      <div>
        <h4 className="font-semibold text-sm mb-3 text-foreground dark:text-foreground">AI Triage Results</h4>
        <div className="space-y-3">
          <TriageCard urgency="urgent" symptom="Chest pain and shortness of breath" delay={animated ? 0.3 : 0} />
          <TriageCard urgency="moderate" symptom="Persistent headache for 3 days" delay={animated ? 0.35 : 0} />
          <TriageCard urgency="low" symptom="Mild skin rash on arm" delay={animated ? 0.4 : 0} />
        </div>
      </div>

      <div>
        <h4 className="font-semibold text-sm mb-3 text-foreground dark:text-foreground">Upcoming Appointments</h4>
        <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-4 space-y-3">
          <AppointmentCard
            doctor="Dr. Sarah Abe"
            specialty="Cardiologist"
            time="10:00 AM"
            type="video"
            delay={animated ? 0.45 : 0}
          />
          <AppointmentCard
            doctor="Dr. Michael Okon"
            specialty="General Physician"
            time="2:30 PM"
            type="in-person"
            delay={animated ? 0.5 : 0}
          />
        </div>
      </div>
    </div>
  </div>
);

const DoctorDashboard: React.FC<{ animated?: boolean }> = ({ animated }) => (
  <div className="flex-1 bg-slate-50 dark:bg-slate-900 p-6 overflow-auto">
    <DashboardHeader title="Doctor Dashboard" />
    <div className="mt-6 space-y-6">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard value="24" label="Patients Today" trend="up" delay={animated ? 0.1 : 0} />
        <StatCard value="8" label="Appointments Left" delay={animated ? 0.15 : 0} />
        <StatCard value="92%" label="Satisfaction Rate" delay={animated ? 0.2 : 0} />
        <StatCard value="3.5" label="Avg. Wait (hrs)" trend="down" delay={animated ? 0.25 : 0} />
      </div>

      <div>
        <h4 className="font-semibold text-sm mb-3 text-foreground dark:text-foreground">Patient Queue</h4>
        <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden">
          {[
            { name: "Emmanuel Adeyemi", condition: "Chest Pain", status: "In Progress", wait: "15 min" },
            { name: "Grace Okoro", condition: "Hypertension Check", status: "Waiting", wait: "30 min" },
            { name: "Ibrahim Musa", condition: "Follow-up", status: "Waiting", wait: "45 min" },
          ].map((patient, i) => (
            <motion.div
              key={i}
              initial={animated ? { opacity: 0, x: -10 } : false}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: animated ? 0.3 + i * 0.1 : 0 }}
              className="flex items-center justify-between p-4 border-b border-slate-100 dark:border-slate-700 last:border-0 hover:bg-slate-50 dark:hover:bg-slate-700/50"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-trust-100 flex items-center justify-center">
                  <Users className="w-5 h-5 text-trust-600" />
                </div>
                <div>
                  <p className="text-sm font-medium">{patient.name}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{patient.condition}</p>
                </div>
              </div>
              <div className="text-right">
                <span className={cn(
                  "text-xs px-2 py-1 rounded-full",
                  patient.status === "In Progress" ? "bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300" : "bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300"
                )}>
                  {patient.status}
                </span>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Wait: {patient.wait}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div>
        <h4 className="font-semibold text-sm mb-3 text-foreground dark:text-foreground">Today's Schedule</h4>
        <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-4">
          <div className="flex gap-2 mb-4">
            {["9AM", "10AM", "11AM", "12PM", "2PM", "3PM"].map((time, i) => (
              <div
                key={time}
                className={cn(
                  "flex-1 text-center py-2 rounded text-xs",
                  i === 0 ? "bg-trust-500 text-white" : i === 1 ? "bg-trust-100 dark:bg-trust-900/30 text-trust-700 dark:text-trust-300" : "bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400"
                )}
              >
                {time}
              </div>
            ))}
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400">Current: Patient consultation in progress</p>
        </div>
      </div>
    </div>
  </div>
);

const HospitalDashboard: React.FC<{ animated?: boolean }> = ({ animated }) => (
  <div className="flex-1 bg-slate-50 dark:bg-slate-900 p-6 overflow-auto">
    <DashboardHeader title="Hospital Dashboard" />
    <div className="mt-6 space-y-6">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard value="156" label="Active Patients" trend="up" delay={animated ? 0.1 : 0} />
        <StatCard value="42" label="Doctors Online" delay={animated ? 0.15 : 0} />
        <StatCard value="89%" label="Bed Occupancy" delay={animated ? 0.2 : 0} />
        <StatCard value="4.8" label="Avg Rating" delay={animated ? 0.25 : 0} />
      </div>

      <div className="grid lg:grid-cols-2 gap-4">
        <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-4">
          <h4 className="font-semibold text-sm mb-4 text-foreground dark:text-foreground">Department Capacity</h4>
          <div className="space-y-3">
            {[
              { name: "Emergency", capacity: 85, color: "bg-emergency-500" },
              { name: "Cardiology", capacity: 60, color: "bg-trust-500" },
              { name: "Pediatrics", capacity: 45, color: "bg-secondary-500" },
              { name: "Orthopedics", capacity: 70, color: "bg-primary-500" },
            ].map((dept, i) => (
              <motion.div
                key={i}
                initial={animated ? { opacity: 0 } : false}
                animate={{ opacity: 1 }}
                transition={{ delay: animated ? 0.3 + i * 0.1 : 0 }}
              >
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-slate-600 dark:text-slate-300">{dept.name}</span>
                  <span className="font-medium">{dept.capacity}%</span>
                </div>
                <div className="h-2 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                  <motion.div
                    initial={animated ? { width: 0 } : false}
                    animate={{ width: `${dept.capacity}%` }}
                    transition={{ delay: animated ? 0.4 + i * 0.1 : 0, duration: 0.5 }}
                    className={cn("h-full rounded-full", dept.color)}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-4">
          <h4 className="font-semibold text-sm mb-4 text-foreground dark:text-foreground">Live Consultations</h4>
          <div className="space-y-2">
            {[
              { doctor: "Dr. Sarah Abe", patient: "Emmanuel A.", duration: "12 min" },
              { doctor: "Dr. Michael Okon", patient: "Grace O.", duration: "8 min" },
              { doctor: "Dr. Fatima Hassan", patient: "Ibrahim M.", duration: "5 min" },
            ].map((consult, i) => (
              <motion.div
                key={i}
                initial={animated ? { opacity: 0, y: 5 } : false}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: animated ? 0.5 + i * 0.1 : 0 }}
                className="flex items-center justify-between p-2 bg-slate-50 dark:bg-slate-700/50 rounded-lg"
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-secondary-500 animate-pulse" />
                  <span className="text-xs text-slate-600 dark:text-slate-300">{consult.doctor}</span>
                </div>
                <span className="text-xs text-slate-500 dark:text-slate-400">~{consult.duration}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const DashboardMockup: React.FC<DashboardMockupProps> = ({
  variant = "patient",
  animated = true,
  className,
}) => {
  const dashboards = {
    patient: PatientDashboard,
    doctor: DoctorDashboard,
    hospital: HospitalDashboard,
  };

  const DashboardContent = dashboards[variant];

  return (
    <motion.div
      initial={animated ? { opacity: 0, y: 20 } : false}
      animate={{ opacity: 1, y: 0 }}
      className={cn(
        "relative rounded-2xl overflow-hidden bg-white dark:bg-slate-800 shadow-elevated border border-slate-200 dark:border-slate-700",
        "min-h-[400px] lg:min-h-[500px]",
        className
      )}
      role="figure"
      aria-label={`${variant} dashboard mockup`}
    >
      <div className="flex h-full">
        <Sidebar variant={variant} />
        <DashboardContent animated={animated} />
      </div>

      <div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-primary-100/30 dark:bg-primary-500/10 blur-3xl pointer-events-none" />
      <div className="absolute -top-10 -left-10 w-32 h-32 rounded-full bg-accent-100/30 dark:bg-accent-500/10 blur-2xl pointer-events-none" />
    </motion.div>
  );
};

export const MobileMockup: React.FC<MobileMockupProps> = ({
  variant = "patient",
  animated = true,
  className,
}) => {
  const screens = {
    patient: {
      title: "NeronaHealth",
      header: "Good Morning!",
      sections: [
        { type: "quick-actions", items: ["AI Triage", "Find Hospital", "My Records"] },
        { type: "appointment", doctor: "Dr. Sarah Abe", time: "10:00 AM", specialty: "Cardiology" },
        { type: "health-tip", text: "Stay hydrated! Drink 8 glasses of water daily." },
      ],
    },
    doctor: {
      title: "NeronaHealth",
      header: "Welcome, Doctor",
      sections: [
        { type: "quick-actions", items: ["Patient Queue", "Schedule", "Consultations"] },
        { type: "next-patient", name: "Emmanuel Adeyemi", condition: "Chest Pain" },
        { type: "stats", patients: 24, appointments: 8 },
      ],
    },
  };

  const screen = screens[variant];

  return (
    <motion.div
      initial={animated ? { opacity: 0, scale: 0.95 } : false}
      animate={{ opacity: 1, scale: 1 }}
      className={cn(
        "relative mx-auto",
        className
      )}
      style={{ width: "280px" }}
    >
      <div className="relative bg-slate-900 rounded-[40px] p-2 shadow-2xl">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-slate-900 rounded-b-2xl z-10" />

        <div className="bg-white dark:bg-slate-800 rounded-[32px] overflow-hidden" style={{ height: "500px" }}>
          <div className="h-8 bg-slate-900 flex items-center justify-between px-6 pt-2">
            <span className="text-white text-xs">9:41</span>
            <div className="flex items-center gap-1">
              <div className="w-4 h-2 bg-white/80 rounded-sm" />
              <div className="w-4 h-2 bg-white/60 rounded-sm" />
              <div className="w-3 h-2 bg-white/40 rounded-sm" />
            </div>
          </div>

          <div className="p-4 space-y-4 overflow-auto" style={{ height: "calc(100% - 32px - 60px)" }}>
            <motion.div
              initial={animated ? { opacity: 0, y: -10 } : false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <p className="text-slate-500 dark:text-slate-400 text-xs">{screen.header}</p>
              <h3 className="text-lg font-semibold">
                {variant === "patient" ? "How can we help?" : ""}
              </h3>
            </motion.div>

            {screen.sections[0].type === "quick-actions" && (
              <motion.div
                initial={animated ? { opacity: 0 } : false}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="flex gap-2"
              >
                {screen.sections[0].items?.map((action: string, i: number) => (
                  <div
                    key={i}
                    className={cn(
                      "flex-1 py-3 rounded-xl text-center text-xs font-medium",
                      i === 0 && variant === "patient" && "bg-primary-100 text-primary-700",
                      i === 0 && variant === "doctor" && "bg-trust-100 text-trust-700",
                      i === 1 && "bg-secondary-100 text-secondary-700",
                      i === 2 && "bg-accent-100 text-accent-700"
                    )}
                  >
                    {action}
                  </div>
                ))}
              </motion.div>
            )}

            {screen.sections[1].type === "appointment" && "doctor" in screen.sections[1] && (
              <motion.div
                initial={animated ? { opacity: 0, y: 10 } : false}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-trust-50 rounded-xl p-4 border border-trust-100"
              >
                <p className="text-xs text-trust-600 font-medium mb-2">Next Appointment</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-trust-200" />
                    <div>
                      <p className="text-sm font-medium">{(screen.sections[1] as { doctor: string }).doctor}</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400">{(screen.sections[1] as { specialty: string }).specialty}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-semibold text-trust-700">{(screen.sections[1] as { time: string }).time}</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Today</p>
                  </div>
                </div>
              </motion.div>
            )}

            {screen.sections[1].type === "next-patient" && "name" in screen.sections[1] && (
              <motion.div
                initial={animated ? { opacity: 0, y: 10 } : false}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-primary-50 rounded-xl p-4 border border-primary-100"
              >
                <p className="text-xs text-primary-600 font-medium mb-2">Next Patient</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-primary-200" />
                    <div>
                      <p className="text-sm font-medium">{(screen.sections[1] as { name: string }).name}</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400">{(screen.sections[1] as { condition: string }).condition}</p>
                    </div>
                  </div>
                  <Clock className="w-4 h-4 text-slate-400 dark:text-slate-500" />
                </div>
              </motion.div>
            )}

            {screen.sections[2].type === "health-tip" && "text" in screen.sections[2] && (
              <motion.div
                initial={animated ? { opacity: 0, y: 10 } : false}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-accent-50 rounded-xl p-4"
              >
                <p className="text-xs text-accent-600 font-medium mb-1">Health Tip</p>
                <p className="text-xs text-slate-600 dark:text-slate-300">{(screen.sections[2] as { text: string }).text}</p>
              </motion.div>
            )}

            {screen.sections[2].type === "stats" && "patients" in screen.sections[2] && (
              <motion.div
                initial={animated ? { opacity: 0 } : false}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="grid grid-cols-2 gap-3"
              >
                <div className="bg-trust-50 rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold text-trust-700">{(screen.sections[2] as { patients: number }).patients}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Patients</p>
                </div>
                <div className="bg-secondary-50 rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold text-secondary-700">{(screen.sections[2] as { appointments: number }).appointments}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Appointments</p>
                </div>
              </motion.div>
            )}
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-14 bg-white dark:bg-slate-800 border-t border-slate-100 dark:border-slate-700 flex items-center justify-around px-4">
            {[
              { icon: Home, active: true },
              { icon: Calendar, active: false },
              { icon: MessageSquare, active: false },
              { icon: Settings, active: false },
            ].map((item, i) => (
              <item.icon
                key={i}
                className={cn(
                  "w-5 h-5",
                  item.active
                    ? variant === "patient"
                      ? "text-primary-500"
                      : "text-trust-500"
                    : "text-slate-400 dark:text-slate-500"
                )}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="absolute -inset-4 bg-gradient-to-br from-primary-500/10 to-trust-500/10 rounded-[50px] -z-10 blur-xl" />
    </motion.div>
  );
};
