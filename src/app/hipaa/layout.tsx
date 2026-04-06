import { Metadata } from "next";

export const metadata: Metadata = {
  title: "HIPAA Compliance - NeronaHealth",
  description:
  "NeronaHealth is HIPAA compliant. Learn about our privacy rule, security rule, breach notification, and patient rights under HIPAA.",
};

export default function HIPAALayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
