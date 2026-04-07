import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "For Doctors",
  description:
  "Streamline your practice with NeronaHealth. Manage appointments, access patient records, and deliver better care with AI-assisted tools.",
};

export default function ForDoctorsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
