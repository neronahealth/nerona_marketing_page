"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { TestimonialImage } from "@/components/ui/visual";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  organization?: string;
  avatar?: string;
}

interface TestimonialsProps {
  testimonials?: Testimonial[];
  autoPlay?: boolean;
  interval?: number;
}

const defaultTestimonials: Testimonial[] = [
  {
    quote:
  "NeronaHealth saved my mother's life. The AI triage told us it was urgent, and we got to the hospital just in time. This is healthcare innovation we needed.",
    author: "Amina Okonkwo",
    role: "Patient",
    organization: "Lagos State",
  },
  {
    quote:
      "Managing appointments has never been easier. I can see all my patients, their records, and history in one place. It has doubled my practice efficiency.",
    author: "Dr. Chukwuemeka Eze",
    role: "Consultant Physician",
    organization: "Lagos University Teaching Hospital",
  },
  {
    quote:
  "Our hospital has reduced patient wait times by 60% since implementing NeronaHealth. The real-time capacity updates are a game-changer for patient flow.",
    author: "Mrs. Funke Adebayo",
    role: "Hospital Administrator",
    organization: "Reddington Hospital",
  },
  {
    quote:
      "As a dispatcher, I can now track all ambulances in real-time. Response times have improved dramatically. The dispatch system is intuitive and fast.",
    author: "Ibrahim Musa",
    role: "Emergency Dispatcher",
    organization: "Lagos Emergency Services",
  },
  {
    quote:
      "Finally, a healthcare app that understands Nigeria. The medical records feature means I don't carry paper files anymore. Everything is in my phone.",
    author: "Olumide Adeyemi",
    role: "Patient",
    organization: "Abuja",
  },
];

export function Testimonials({
  testimonials = defaultTestimonials,
  autoPlay = true,
  interval = 6000,
}: TestimonialsProps) {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    if (!autoPlay) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, interval);

    return () => clearInterval(timer);
  }, [autoPlay, interval, testimonials.length]);

  const goToPrevious = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-slate-50 to-white dark:from-slate-800 dark:to-slate-900">
      <Container size="xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-fluid-3xl font-bold text-foreground"
          >
            Trusted by Healthcare Heroes
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-fluid-lg text-foreground-muted"
          >
            Join thousands of patients and healthcare providers across Nigeria
          </motion.p>
        </div>

        <div className="relative max-w-sm sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="relative"
            >
              <div className="relative rounded-3xl bg-white dark:bg-slate-800 p-8 lg:p-12 shadow-soft dark:shadow-none dark:border dark:border-slate-700">
                <div className="absolute -top-6 left-12">
                  <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center shadow-glow-primary">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>
                </div>

                <blockquote className="text-fluid-lg sm:text-fluid-xl font-display leading-relaxed mt-6 text-foreground">
                  "{testimonials[currentIndex].quote}"
                </blockquote>

                <div className="mt-8 flex items-center gap-4">
                  <TestimonialImage
                    initials={testimonials[currentIndex].author
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                    name={testimonials[currentIndex].author}
                  />
                  <div>
                    <div className="font-display font-semibold text-foreground">
                      {testimonials[currentIndex].author}
                    </div>
                    <div className="text-foreground-muted text-sm">
                      {testimonials[currentIndex].role}
                      {testimonials[currentIndex].organization && (
                        <span className="text-foreground-subtle">
                          {" "}
                          • {testimonials[currentIndex].organization}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-4 mt-8">
            <Button
              variant="ghost"
              size="icon"
              onClick={goToPrevious}
              aria-label="Previous testimonial"
              className="w-10 h-10 sm:w-12 sm:h-12 hover:bg-primary-50 dark:hover:bg-primary-900/30"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </Button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={cn(
                    "w-3 h-3 sm:w-2 sm:h-2 rounded-full transition-all duration-300",
                    index === currentIndex
                      ? "w-8 sm:w-8 bg-primary"
                      : "bg-slate-300 dark:bg-slate-600 hover:bg-slate-400 dark:hover:bg-slate-500"
                  )}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={goToNext}
              aria-label="Next testimonial"
              className="w-10 h-10 sm:w-12 sm:h-12 hover:bg-primary-50 dark:hover:bg-primary-900/30"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
