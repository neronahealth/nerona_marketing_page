import type { Metadata, Viewport } from "next";
import { Navigation } from "@/components/layout/navigation";
import { Footer } from "@/components/layout/footer-enhanced";
import { SkipToContent } from "@/components/accessibility/skip-link";
import { BottomNavigation } from "@/components/mobile/bottom-nav";
import { RootWrapper } from "@/components/layout/root-wrapper";
import { OrganizationStructuredData, WebsiteStructuredData } from "@/components/seo/structured-data";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://neronahealth.com"),
  title: {
    default: "NeronaHealth - AI-Powered Healthcare Platform in Nigeria",
    template: "%s | NeronaHealth",
  },
  description:
    "Connect with verified hospitals, doctors, and emergency services across Nigeria. AI-powered symptom triage, appointment booking, and medical records management.",
  keywords: [
    "healthcare",
    "Nigeria",
    "AI triage",
    "hospital booking",
    "doctor appointments",
    "emergency ambulance",
    "medical records",
    "telehealth",
    "health tech",
    "Lagos hospitals",
  ],
  authors: [{ name: "NeronaHealth Team" }],
  creator: "NeronaHealth",
  publisher: "NeronaHealth",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://neronahealth.com",
    siteName: "NeronaHealth",
    title: "NeronaHealth - AI-Powered Healthcare Platform in Nigeria",
    description:
      "Connect with verified hospitals, doctors, and emergency services across Nigeria. AI-powered symptom triage, appointment booking, and medical records management.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "NeronaHealth - Healthcare Made Simple",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NeronaHealth - AI-Powered Healthcare Platform in Nigeria",
    description:
      "Connect with verified hospitals, doctors, and emergency services across Nigeria.",
    creator: "@neronahealth",
    images: ["/twitter-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f76a4d" },
    { media: "(prefers-color-scheme: dark)", color: "#f76a4d" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://api.neronahealth.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground pb-16 lg:pb-0">
        <SkipToContent />
        <OrganizationStructuredData />
        <WebsiteStructuredData />
        <Navigation />
        <main id="main-content" className="flex-1 pt-16 lg:pt-20" role="main" aria-label="Main content">
          {children}
        </main>
        <Footer role="contentinfo" />
        <BottomNavigation />
        <RootWrapper />
      </body>
    </html>
  );
}