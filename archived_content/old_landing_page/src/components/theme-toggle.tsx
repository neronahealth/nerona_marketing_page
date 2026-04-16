"use client";

import * as React from "react";
import { Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";

export function ThemeToggle() {
  const [isDark, setIsDark] = React.useState(false);
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
    
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const hasDarkClass = document.documentElement.classList.contains("dark");
    
    const shouldBeDark = savedTheme === "dark" || (!savedTheme && prefersDark) || hasDarkClass;
    
    if (shouldBeDark) {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
    }

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem("theme")) {
        if (e.matches) {
          setIsDark(true);
          document.documentElement.classList.add("dark");
        } else {
          setIsDark(false);
          document.documentElement.classList.remove("dark");
        }
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    
    if (newIsDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  if (!mounted) {
    return (
      <button
        className="p-2 rounded-lg bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
        aria-label="Toggle theme"
      >
        <Sun className="w-5 h-5 text-slate-600 dark:text-slate-300" />
      </button>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "p-2 rounded-lg transition-colors",
        "bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
      )}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDark ? (
        <Sun className="w-5 h-5 text-slate-300 dark:text-yellow-400 hover:text-yellow-400 transition-colors" />
      ) : (
        <Moon className="w-5 h-5 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors" />
      )}
    </button>
  );
}