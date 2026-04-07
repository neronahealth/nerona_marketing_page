"use client";

import * as React from "react";

interface FocusTrapProps {
  children: React.ReactNode;
  active?: boolean;
  className?: string;
}

export function FocusTrap({ children, active = true, className }: FocusTrapProps) {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const previousActiveElement = React.useRef<HTMLElement | null>(null);
  const [isActive, setIsActive] = React.useState(active);

  React.useEffect(() => {
    if (active) {
      previousActiveElement.current = document.activeElement as HTMLElement;
      setIsActive(true);
      const firstFocusable = containerRef.current?.querySelector<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      firstFocusable?.focus();
    } else {
      setIsActive(false);
      if (previousActiveElement.current) {
        previousActiveElement.current.focus();
      }
    }
  }, [active]);

  const handleKeyDown = React.useCallback((event: React.KeyboardEvent) => {
    if (!isActive || event.key !== "Tab") return;

    const container = containerRef.current;
    if (!container) return;

    const focusableElements = container.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );

    const firstFocusable = focusableElements[0];
    const lastFocusable = focusableElements[focusableElements.length - 1];

    if (event.shiftKey) {
      if (document.activeElement === firstFocusable) {
        event.preventDefault();
        lastFocusable.focus();
      }
    } else {
      if (document.activeElement === lastFocusable) {
        event.preventDefault();
        firstFocusable.focus();
      }
    }
  }, [isActive]);

  return (
    <div
      ref={containerRef}
      className={className}
      onKeyDown={handleKeyDown}
      role="dialog"
      aria-modal={isActive}
    >
      {children}
    </div>
  );
}