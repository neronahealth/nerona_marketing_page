import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - NeronaHealth",
  description:
    "NeronaHealth's terms of service govern your use of our healthcare platform. Read these terms carefully before using our services.",
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}