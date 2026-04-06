import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "For Patients",
  description:
  "Take control of your health journey with NeronaHealth. AI-powered symptom triage, find hospitals, book appointments, and manage your medical records.",
};

export default function ForPatientsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
