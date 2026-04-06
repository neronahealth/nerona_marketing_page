import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy - NeronaHealth",
  description:
  "Learn how NeronaHealth uses cookies and similar technologies to improve your experience. Manage your cookie preferences.",
};

export default function CookiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
