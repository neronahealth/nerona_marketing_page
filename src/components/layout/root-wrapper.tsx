"use client";

import { CookieConsent } from "@/components/privacy/cookie-consent";

export function RootWrapper() {
  return (
    <CookieConsent
      onAccept={() => {
        if (typeof window !== "undefined" && window.gtag) {
          window.gtag("consent", "update", {
            analytics_storage: "granted",
            ad_storage: "granted",
          });
        }
      }}
      onDecline={() => {
        if (typeof window !== "undefined" && window.gtag) {
          window.gtag("consent", "update", {
            analytics_storage: "denied",
            ad_storage: "denied",
          });
        }
      }}
    />
  );
}