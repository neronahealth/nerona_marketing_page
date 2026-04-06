"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Search, Calendar, User, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { icon: Home, label: "Home", href: "/" },
  { icon: Search, label: "Features", href: "/features" },
  { icon: Calendar, label: "Book", href: "/for-patients" },
  { icon: Phone, label: "Contact", href: "/contact" },
  { icon: User, label: "Account", href: "/api/auth/signin" },
];

export function BottomNavigation() {
  const pathname = usePathname();

  return (
    <nav
      className="lg:hidden fixed bottom-0 left-0 right-0 bg-white/95 dark:bg-slate-900/95 backdrop-blur-lg border-t border-border dark:border-slate-700 z-50"
      role="navigation"
      aria-label="Mobile navigation"
    >
      <ul className="flex items-center justify-around py-2">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;

          return (
            <li key={item.label} className="flex-1">
              <Link
                href={item.href}
                className={cn(
                  "flex flex-col items-center justify-center gap-1 pt-2 pb-1 px-3 transition-all duration-200",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-lg mx-2",
                  isActive
                    ? "text-primary dark:text-primary-400"
                    : "text-foreground-muted dark:text-foreground-muted hover:text-foreground dark:hover:text-foreground"
                )}
                aria-current={isActive ? "page" : undefined}
              >
                <Icon
                  className={cn(
                    "w-6 h-6 transition-transform duration-200",
                    isActive && "scale-110"
                  )}
                  aria-hidden="true"
                />
                <span className="text-xs font-medium text-foreground dark:text-foreground">{item.label}</span>
                {isActive && (
                  <div className="absolute top-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary dark:bg-primary-400 rounded-full" aria-hidden="true" />
                )}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}