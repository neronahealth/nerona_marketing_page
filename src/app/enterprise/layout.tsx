import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enterprise Solutions - NeronaHealth",
  description:
    "Healthcare solutions for large organizations. Custom integrations, multi-hospital management, enterprise security, and dedicated support. Contact sales.",
};

export default function EnterpriseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
