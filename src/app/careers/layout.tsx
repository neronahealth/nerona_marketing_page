import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers - NeronaHealth",
  description:
  "Join the future of healthcare. Explore career opportunities at NeronaHealth and build technology that saves lives.",
};

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
