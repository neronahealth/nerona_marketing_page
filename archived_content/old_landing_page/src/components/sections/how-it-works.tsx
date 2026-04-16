"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/container";
import { StatsDashboard } from "@/components/infographics";

interface Step {
  number: number;
  title: string;
  description: string;
}

interface HowItWorksProps {
  steps?: Step[];
  title?: string;
  description?: string;
}

const defaultSteps: Step[] = [
  {
    number: 1,
    title: "Describe Your Symptoms",
    description: "Use our AI-powered triage to describe what you're experiencing. Natural language makes it easy.",
  },
  {
    number: 2,
    title: "Get Instant Analysis",
    description: "Receive urgency level, care recommendations, and nearby hospital suggestions within seconds.",
  },
  {
    number: 3,
    title: "Choose Your Provider",
    description: "Compare verified hospitals and doctors. See real-time availability, pricing, and services.",
  },
  {
    number: 4,
    title: "Book & Manage Care",
    description: "Schedule appointments, access medical records, and track your healthcare journey all in one place.",
  },
];

export function HowItWorks({
  steps = defaultSteps,
  title = "How It Works",
  description = "Simple, fast, and designed for you",
}: HowItWorksProps) {
  return (
    <section className="py-20 lg:py-32 bg-white dark:bg-slate-900">
      <Container size="xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-fluid-3xl font-bold text-foreground dark:text-foreground"
          >
            {title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-fluid-lg text-foreground-muted dark:text-foreground-muted"
          >
            {description}
          </motion.p>
        </div>

        <div className="relative">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="relative mb-16 lg:mb-24 last:mb-0"
            >
              <div className="grid sm:grid-cols-2 gap-8 lg:gap-16 items-center">
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="relative">
                      <div className="h-14 w-14 sm:h-16 sm:w-16 rounded-2xl bg-gradient-to-br from-primary-100 to-primary-50 dark:from-primary-900/50 dark:to-primary-900/30 flex items-center justify-center border border-primary-200 dark:border-primary-700">
                        <span className="font-display text-2xl sm:text-3xl font-bold text-primary dark:text-primary-400">
                          {step.number}
                        </span>
                      </div>
                      {index < steps.length - 1 && (
                        <div className="hidden lg:block absolute top-full left-1/2 w-0.5 h-20 bg-gradient-to-b from-primary-200 dark:from-primary-700 to-transparent -translate-x-1/2" />
                      )}
                    </div>
                    <div className="flex-1 lg:hidden h-0.5 bg-gradient-to-r from-primary-200 dark:from-primary-700 to-transparent" />
                  </div>

                  <h3 className="font-display text-2xl font-semibold text-foreground dark:text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-foreground-muted dark:text-foreground-muted leading-relaxed text-lg">
                    {step.description}
                  </p>
                </div>

                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <motion.div
                    initial={{ scale: 0.95, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className="relative h-64 rounded-2xl bg-gradient-to-br from-slate-100 to-slate-50 dark:from-slate-800 dark:to-slate-900 overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-secondary-500/5 dark:from-primary-500/10 dark:to-secondary-500/10" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-6xl font-display font-bold text-primary-200 dark:text-primary-800">
                        {step.number}
                      </div>
                    </div>
                    <div className="absolute -bottom-20 -right-20 w-48 h-48 rounded-full bg-primary-100/50 dark:bg-primary-900/30 blur-3xl" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

interface StatsItem {
  value: string;
  label: string;
  suffix?: string;
}

const defaultStats: StatsItem[] = [
  { value: "50", suffix: "K+", label: "Patients Served" },
  { value: "500", suffix: "+", label: "Verified Hospitals" },
  { value: "2000", suffix: "+", label: "Licensed Doctors" },
  { value: "15", suffix: "min", label: "Average Response" },
];

export function Stats({ items = defaultStats }: { items?: StatsItem[] }) {
  const statsData = items.map((stat) => ({
    label: stat.label,
    value: parseInt(stat.value) || 0,
    suffix: stat.suffix,
  }));

  return (
    <section className="py-16 bg-gradient-to-b from-slate-50 to-white dark:from-slate-800 dark:to-slate-900">
      <Container size="xl">
        <StatsDashboard stats={statsData} columns={4} />
      </Container>
    </section>
  );
}

interface TrustBadgeProps {
  items: { icon: React.ReactNode; text: string }[];
}

export function TrustBadges({ items }: TrustBadgeProps) {
  return (
    <section className="py-12 bg-white dark:bg-slate-900">
      <Container size="xl">
        <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 lg:gap-16">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-2 text-foreground-muted dark:text-foreground-muted"
            >
              {item.icon}
              <span className="font-medium">{item.text}</span>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}