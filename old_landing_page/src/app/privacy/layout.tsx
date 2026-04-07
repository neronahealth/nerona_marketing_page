import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - NeronaHealth",
  description:
    "NeronaHealth's privacy policy explains how we collect, use, and protect your personal and health information in compliance with HIPAA and Nigerian data protection laws.",
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}