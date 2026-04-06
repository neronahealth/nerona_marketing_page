import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description:
  "Health tips, healthcare insights, and updates from NeronaHealth. Stay informed about your health journey.",
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
