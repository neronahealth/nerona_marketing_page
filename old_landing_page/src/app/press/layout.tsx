import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Press & Media - NeronaHealth",
  description:
  "NeronaHealth press releases, media kit, and contact information for journalists and media inquiries.",
};

export default function PressLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
