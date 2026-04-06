import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing",
  description:
  "NeronaHealth offers flexible pricing plans for patients, doctors, and hospitals. Find the plan that fits your healthcare needs.",
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
