"use client";

import * as React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { ThemeToggle } from "@/components/theme-toggle";

const navigation = [
  { name: "Features", href: "/features" },
  { name: "For Patients", href: "/for-patients" },
  { name: "For Doctors", href: "/for-doctors" },
  { name: "For Hospitals", href: "/for-hospitals" },
  { name: "Pricing", href: "/pricing" },
  { name: "About", href: "/about" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const mobileMenuRef = React.useRef<HTMLDivElement>(null);
  const menuButtonRef = React.useRef<HTMLButtonElement>(null);
  const firstFocusableRef = React.useRef<HTMLAnchorElement>(null);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  React.useEffect(() => {
    if (isOpen && firstFocusableRef.current) {
      firstFocusableRef.current.focus();
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        setIsOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    const handleTab = (event: KeyboardEvent) => {
      if (!isOpen || !mobileMenuRef.current) return;

      const focusableElements = mobileMenuRef.current.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.key === "Tab") {
        if (event.shiftKey && document.activeElement === firstElement) {
          event.preventDefault();
          lastElement.focus();
        } else if (!event.shiftKey && document.activeElement === lastElement) {
          event.preventDefault();
          firstElement.focus();
        }
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.addEventListener("keydown", handleTab);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.removeEventListener("keydown", handleTab);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg shadow-soft border-b border-border"
          : "bg-transparent"
      )}
      role="banner"
    >
      <Container size="xl">
        <nav
          id="main-navigation"
          className="flex items-center justify-between h-16 lg:h-20"
          role="navigation"
          aria-label="Main navigation"
        >
          <Link href="/" className="flex items-center gap-2" aria-label="NeronaHealth Home">
            <div className="relative w-10 h-10" aria-hidden="true">
              <div className="absolute inset-0 bg-primary rounded-xl transform rotate-6" />
              <div className="absolute inset-0 bg-white dark:bg-slate-800 rounded-xl flex items-center justify-center">
                <span className="text-primary font-bold text-xl font-display">N</span>
              </div>
            </div>
            <span className="font-display font-bold text-xl text-foreground hidden sm:block">
              NeronaHealth
            </span>
          </Link>

          <ul className="hidden lg:flex items-center gap-8" role="menubar">
            {navigation.map((item) => (
              <li key={item.name} role="none">
                <Link
                  href={item.href}
                  className="text-foreground-muted hover:text-foreground transition-colors duration-200 text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded px-2 py-1"
                  role="menuitem"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden lg:flex items-center gap-4">
            <ThemeToggle />
            <Button variant="ghost" asChild>
              <Link href="/contact">Contact</Link>
            </Button>
            <Button asChild>
              <Link href="/api/auth/signin">Get Started</Link>
            </Button>
          </div>

          <button
            ref={menuButtonRef}
            className="lg:hidden p-2 text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-lg"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? <X className="w-6 h-6" aria-hidden="true" /> : <Menu className="w-6 h-6" aria-hidden="true" />}
          </button>
        </nav>
      </Container>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={mobileMenuRef}
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-white dark:bg-slate-900 border-b border-border dark:border-slate-700 overflow-hidden"
            role="navigation"
            aria-label="Mobile navigation"
          >
            <Container size="xl">
              <ul className="py-6 space-y-2" role="menu">
                {navigation.map((item, index) => (
                  <li key={item.name} role="none">
                    <Link
                      ref={index === 0 ? firstFocusableRef : null}
                      href={item.href}
                      className="block text-foreground-muted hover:text-foreground transition-colors py-2 px-2 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                      role="menuitem"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
                <li className="pt-4 border-t border-border" role="separator" />
                <li role="none" className="flex items-center gap-2 px-2">
                  <span className="text-sm text-foreground-muted">Theme</span>
                  <ThemeToggle />
                </li>
                <li role="none">
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/contact" role="menuitem">Contact</Link>
                  </Button>
                </li>
                <li role="none">
                  <Button className="w-full" asChild>
                    <Link href="/api/auth/signin" role="menuitem">Get Started</Link>
                  </Button>
                </li>
              </ul>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}