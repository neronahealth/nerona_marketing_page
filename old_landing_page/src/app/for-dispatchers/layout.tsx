import { Metadata } from "next";

export const metadata: Metadata = {
  title: "For Dispatchers - NeronaHealth",
  description:
    "Manage emergency dispatch at scale with real-time ambulance tracking, intelligent routing, and fleet management. Schedule a demo today.",
};

export default function ForDispatchersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
