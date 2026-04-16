import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "For Hospitals",
  description:
  "Manage your hospital efficiently with NeronaHealth. Streamline patient flow, verify doctors, optimize capacity, and deliver better healthcare outcomes.",
};

export default function ForHospitalsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
