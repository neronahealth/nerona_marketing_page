"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export function SkipToContent() {
  return (
    <a
      href="#main-content"
      className={cn(
        "sr-only focus:not-sr-only",
        "focus:absolute focus:top-4 focus:left-4 focus:z-[9999]",
        "focus:px-6 focus:py-3",
        "focus:bg-primary focus:text-white",
        "focus:rounded-lg focus:shadow-elevated",
        "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
        "transition-all duration-200",
        "font-semibold text-sm"
      )}
    >
      Skip to main content
    </a>
  );
}

export function SkipToNavigation() {
  return (
    <a
      href="#main-navigation"
      className={cn(
        "sr-only focus:not-sr-only",
        "focus:absolute focus:top-4 focus:left-32 focus:z-[9999]",
        "focus:px-6 focus:py-3",
        "focus:bg-primary focus:text-white",
        "focus:rounded-lg focus:shadow-elevated",
        "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
        "transition-all duration-200",
        "font-semibold text-sm"
      )}
    >
      Skip to navigation
    </a>
  );
}