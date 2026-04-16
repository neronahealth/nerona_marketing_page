"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Home, Search, ArrowLeft, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";

export default function NotFound() {
  return (
    <main className="min-h-[calc(100vh-5rem)] flex items-center justify-center relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-primary-200/30 rounded-full blur-3xl" />
        <div className="absolute top-1/3 -left-20 w-72 h-72 bg-accent-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-48 h-48 bg-secondary-200/20 rounded-full blur-2xl" />
      </div>

      <Container size="md" className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* 404 Number */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="relative inline-block mb-8"
          >
            <span className="font-display text-[12rem] md:text-[16rem] font-bold leading-none bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 bg-clip-text text-transparent">
              404
            </span>
            <div className="absolute -top-8 -right-8 w-24 h-24 bg-accent-400/20 rounded-full blur-2xl" />
          </motion.div>

          {/* Message */}
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="font-display text-fluid-3xl font-bold mb-4"
          >
            Oops! Page not found
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-foreground-muted text-fluid-lg max-w-lg mx-auto mb-12"
          >
            The page you&apos;re looking for seems to have wandered off. Let&apos;s get you back on track to better healthcare.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <Button size="lg" asChild className="shadow-glow-primary">
              <Link href="/">
                <Home className="w-5 h-5" />
                <span>Back to Home</span>
              </Link>
            </Button>

            <Button variant="outline" size="lg" asChild>
              <Link href="/features">
                <Search className="w-5 h-5" />
                <span>Explore Features</span>
              </Link>
            </Button>

            <Button variant="ghost" size="lg" asChild>
              <Link href="/contact">
                <MessageCircle className="w-5 h-5" />
                <span>Contact Support</span>
              </Link>
            </Button>
          </motion.div>

          {/* Helpful Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="pt-8 border-t border-border"
          >
            <p className="text-sm text-foreground-muted mb-4">Popular pages:</p>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              <Link
                href="/for-patients"
                className="text-sm text-primary hover:text-primary-600 transition-colors flex items-center gap-1"
              >
                <ArrowLeft className="w-3 h-3" />
                For Patients
              </Link>
              <Link
                href="/for-doctors"
                className="text-sm text-trust hover:text-trust-600 transition-colors flex items-center gap-1"
              >
                <ArrowLeft className="w-3 h-3" />
                For Doctors
              </Link>
              <Link
                href="/for-hospitals"
                className="text-sm text-secondary hover:text-secondary-600 transition-colors flex items-center gap-1"
              >
                <ArrowLeft className="w-3 h-3" />
                For Hospitals
              </Link>
              <Link
                href="/pricing"
                className="text-sm text-accent hover:text-accent-600 transition-colors flex items-center gap-1"
              >
                <ArrowLeft className="w-3 h-3" />
                Pricing
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </main>
  );
}