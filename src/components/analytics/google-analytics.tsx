"use client";

import Script from "next/script";
import * as React from "react";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

interface GoogleAnalyticsProps {
  measurementId: string;
}

export function GoogleAnalytics({ measurementId }: GoogleAnalyticsProps) {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${measurementId}', {
            page_path: window.location.pathname,
            anonymize_ip: true,
            cookie_flags: 'SameSite=None;Secure'
          });
        `}
      </Script>
    </>
  );
}

export function trackEvent(
  action: string,
  category: string,
  label: string,
  value?: number
) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
}

export function useAnalytics() {
  const trackPageView = React.useCallback((path: string) => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("config", process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "", {
        page_path: path,
      });
    }
  }, []);

  const trackEvent = React.useCallback(
    (action: string, category: string, label: string, value?: number) => {
      if (typeof window !== "undefined" && window.gtag) {
        window.gtag("event", action, {
          event_category: category,
          event_label: label,
          value: value,
        });
      }
    },
    []
  );

  return { trackPageView, trackEvent };
}

export const EventCategories = {
  ENGAGEMENT: "engagement",
  CONVERSION: "conversion",
  NAVIGATION: "navigation",
  USER_ACTION: "user_action",
  ERROR: "error",
  MARKETING: "marketing",
} as const;

export const EventActions = {
  CLICK: "click",
  SUBMIT: "submit",
  VIEW: "view",
  SCROLL: "scroll",
  ERROR: "error",
  SIGNUP: "signup",
  LOGIN: "login",
  CONTACT: "contact",
  BOOK_APPOINTMENT: "book_appointment",
  EMERGENCY_DISPATCH: "emergency_dispatch",
  NEWSLETTER_SUBSCRIBE: "newsletter_subscribe",
} as const;