import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
  "Learn about NeronaHealth's mission to transform healthcare access in Nigeria through AI-powered technology and compassionate care coordination.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
