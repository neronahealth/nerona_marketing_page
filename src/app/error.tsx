"use client";

import * as React from "react";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { AlertCircle, RefreshCw, Home, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Application error:", error);
  }, [error]);

  const handleErrorReport = () => {
    const subject = encodeURIComponent(`Error Report: ${error.name || "Application Error"}`);
    const body = encodeURIComponent(
      `Error Details:\n\nName: ${error.name || "Unknown"}\nMessage: ${error.message || "No message"}\nDigest: ${error.digest || "N/A"}\n\nStack Trace:\n${error.stack || "No stack trace available"}\n\n\nAdditional Information:\nURL: ${typeof window !== "undefined" ? window.location.href : "Unknown"}\nTimestamp: ${new Date().toISOString()}\nUser Agent: ${typeof navigator !== "undefined" ? navigator.userAgent : "Unknown"}`
    );
    window.location.href = `mailto:support@neronahealth.com?subject=${subject}&body=${body}`;
  };

  return (
    <main className="min-h-[calc(100vh-5rem)] flex items-center justify-center relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-emergency-200/20 rounded-full blur-3xl" />
        <div className="absolute top-1/3 -left-20 w-72 h-72 bg-accent-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-48 h-48 bg-primary-200/20 rounded-full blur-2xl" />
      </div>

      <Container size="md" className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Error Icon */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-8 inline-block"
          >
            <div className="relative">
              <div className="w-32 h-32 bg-gradient-to-br from-emergency-500 to-emergency-600 rounded-full flex items-center justify-center shadow-elevated">
                <AlertCircle className="w-16 h-16 text-white" />
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent-400 rounded-full animate-pulse" />
            </div>
          </motion.div>

          {/* Message */}
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="font-display text-fluid-3xl font-bold mb-4"
          >
            Something went wrong
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-foreground-muted text-fluid-lg max-w-lg mx-auto mb-8"
          >
            We encountered an unexpected error. Our team has been notified, but you can also help us fix this by reporting the issue.
          </motion.p>

          {/* Error ID for support reference */}
          {error.digest && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mb-8 p-4 bg-muted/50 rounded-lg border border-border inline-block"
            >
              <p className="text-xs text-foreground-muted font-mono">
                Error ID: <span className="text-foreground">{error.digest}</span>
              </p>
            </motion.div>
          )}

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <Button size="lg" onClick={reset} className="shadow-glow-primary">
              <RefreshCw className="w-5 h-5" />
              <span>Try Again</span>
            </Button>

            <Button variant="outline" size="lg" asChild>
              <a href="/">
                <Home className="w-5 h-5" />
                <span>Back to Home</span>
              </a>
            </Button>

            <Button variant="ghost" size="lg" onClick={handleErrorReport}>
              <Mail className="w-5 h-5" />
              <span>Report Error</span>
            </Button>
          </motion.div>

          {/* Help Text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="p-6 bg-muted/30 rounded-xl border border-border max-w-md mx-auto"
          >
            <p className="text-sm text-foreground-muted">
              If this error persists, please contact our support team at{" "}
              <a
                href="mailto:support@neronahealth.com"
                className="text-primary hover:text-primary-600 transition-colors font-medium"
              >
                support@neronahealth.com
              </a>{" "}
              with the error details above.
            </p>
          </motion.div>
        </motion.div>
      </Container>
    </main>
  );
}