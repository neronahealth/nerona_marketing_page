"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Cookie } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CookieConsentProps {
  onAccept: () => void;
  onDecline: () => void;
}

export function CookieConsent({ onAccept, onDecline }: CookieConsentProps) {
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setIsVisible(false);
    onAccept();
  };

  const handleDecline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setIsVisible(false);
    onDecline();
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-md z-50"
          role="dialog"
          aria-label="Cookie consent"
        >
          <div className="bg-card border border-border rounded-2xl shadow-elevated p-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <Cookie className="w-6 h-6 text-primary" aria-hidden="true" />
              </div>
              <div className="flex-1">
                <h3 className="font-display font-semibold text-lg mb-2">
                  Cookie Preferences
                </h3>
                <p className="text-sm text-foreground-muted leading-relaxed mb-4">
                  We use cookies to enhance your experience, analyze site traffic, and personalize content. 
                  By continuing to use this site, you consent to our use of cookies in accordance with our{" "}
                  <a
                    href="/privacy"
                    className="text-primary hover:text-primary-600 transition-colors underline"
                  >
                    Privacy Policy
                  </a>
                  .
                </p>
                <div className="flex flex-col sm:flex-row gap-2">
                  <Button onClick={handleAccept} className="flex-1 sm:flex-none">
                    Accept All Cookies
                  </Button>
                  <Button
                    variant="outline"
                    onClick={handleDecline}
                    className="flex-1 sm:flex-none"
                  >
                    Essential Only
                  </Button>
                </div>
              </div>
              <button
                onClick={() => setIsVisible(false)}
                className="text-foreground-muted hover:text-foreground transition-colors p-1"
                aria-label="Close cookie consent dialog"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}