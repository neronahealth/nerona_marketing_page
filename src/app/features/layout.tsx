import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Features",
  description:
  "Explore NeronaHealth's comprehensive healthcare features - AI-powered triage, hospital discovery, appointment booking, emergency dispatch, and medical records management.",
};

export default function FeaturesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
