import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Data Protection - NeronaHealth",
  description:
  "Your data protection rights under GDPR, NDPR, and other data protection laws. Learn how NeronaHealth protects your personal data.",
};

export default function DataProtectionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
