"use client";

import * as React from "react";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const footerLinks = {
  product: [
    { name: "Features", href: "/features" },
    { name: "Pricing", href: "/pricing" },
    { name: "AI Triage", href: "/features#ai-triage" },
    { name: "Hospital Discovery", href: "/features#hospitals" },
    { name: "Emergency Dispatch", href: "/features#emergency" },
  ],
  solutions: [
    { name: "For Patients", href: "/for-patients" },
    { name: "For Doctors", href: "/for-doctors" },
    { name: "For Hospitals", href: "/for-hospitals" },
    { name: "For Dispatchers", href: "/for-dispatchers" },
    { name: "Enterprise", href: "/enterprise" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Careers", href: "/careers" },
    { name: "Press", href: "/press" },
    { name: "Contact", href: "/contact" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
    { name: "Data Protection", href: "/data-protection" },
    { name: "HIPAA Compliance", href: "/hipaa" },
  ],
};

const socialLinks = [
  { name: "Twitter", href: "https://twitter.com/neronahealth", icon: "twitter" },
  { name: "LinkedIn", href: "https://linkedin.com/company/neronahealth", icon: "linkedin" },
  { name: "Instagram", href: "https://instagram.com/neronahealth", icon: "instagram" },
  { name: "Facebook", href: "https://facebook.com/neronahealth", icon: "facebook" },
];

interface FooterProps {
  role?: string;
}

export function Footer({ role }: FooterProps) {
  const [email, setEmail] = React.useState("");
  const [subscribed, setSubscribed] = React.useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 3000);
      setEmail("");
    }
  };

  return (
    <footer role="contentinfo" className="bg-foreground text-background">
      <Container size="xl">
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-5">
              <Link href="/" className="flex items-center gap-2 mb-6" aria-label="NeronaHealth Home">
                <div className="relative w-10 h-10" aria-hidden="true">
                  <div className="absolute inset-0 bg-background rounded-xl transform rotate-6" />
                  <div className="absolute inset-0 bg-primary rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold text-xl font-display">N</span>
                  </div>
                </div>
                <span className="font-display font-bold text-xl">NeronaHealth</span>
              </Link>
              <p className="text-background-muted text-sm leading-relaxed mb-6">
                AI-powered healthcare platform connecting patients, doctors, and hospitals across Nigeria.
              </p>

              <form onSubmit={handleSubscribe} className="mb-6">
                <p className="font-semibold text-sm mb-3">Subscribe to our newsletter</p>
                <div className="flex gap-2">
                  <label htmlFor="newsletter-email" className="sr-only">
                    Email address for newsletter
                  </label>
                  <Input
                    id="newsletter-email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-background/10 border-background/20 text-background placeholder:text-background-muted"
                    aria-describedby="newsletter-description"
                  />
                  <Button
                    type="submit"
                    className="bg-primary hover:bg-primary-600 whitespace-nowrap"
                    disabled={subscribed}
                  >
                    {subscribed ? "Subscribed!" : "Subscribe"}
                  </Button>
                </div>
                <p id="newsletter-description" className="text-xs text-background-muted mt-2">
                  Get healthcare tips and platform updates delivered to your inbox
                </p>
              </form>

              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-background-muted hover:text-background transition-colors"
                    aria-label={`Follow us on ${social.name}`}
                  >
                    <div className="w-10 h-10 rounded-lg bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        {social.icon === "twitter" && (
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.251z" />
                        )}
                        {social.icon === "linkedin" && (
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        )}
                        {social.icon === "instagram" && (
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                        )}
                        {social.icon === "facebook" && (
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                        )}
                      </svg>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div>
                  <h3 className="font-display font-semibold mb-4 text-xs uppercase tracking-wider">
                    Product
                  </h3>
                  <ul className="space-y-3">
                    {footerLinks.product.map((link) => (
                      <li key={link.name}>
                        <Link
                          href={link.href}
                          className="text-background-muted hover:text-background transition-colors text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-foreground rounded px-1 -mx-1"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-display font-semibold mb-4 text-xs uppercase tracking-wider">
                    Solutions
                  </h3>
                  <ul className="space-y-3">
                    {footerLinks.solutions.map((link) => (
                      <li key={link.name}>
                        <Link
                          href={link.href}
                          className="text-background-muted hover:text-background transition-colors text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-foreground rounded px-1 -mx-1"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-display font-semibold mb-4 text-xs uppercase tracking-wider">
                    Company
                  </h3>
                  <ul className="space-y-3">
                    {footerLinks.company.map((link) => (
                      <li key={link.name}>
                        <Link
                          href={link.href}
                          className="text-background-muted hover:text-background transition-colors text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-foreground rounded px-1 -mx-1"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-display font-semibold mb-4 text-xs uppercase tracking-wider">
                    Legal
                  </h3>
                  <ul className="space-y-3">
                    {footerLinks.legal.map((link) => (
                      <li key={link.name}>
                        <Link
                          href={link.href}
                          className="text-background-muted hover:text-background transition-colors text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-foreground rounded px-1 -mx-1"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 lg:mt-16 pt-8 border-t border-background/10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-background-muted">
                <address className="not-italic flex items-center gap-2">
                  <MapPin className="w-4 h-4" aria-hidden="true" />
                  <span>15 Admiralty Way, Lekki, Lagos, Nigeria</span>
                </address>
                <a
                  href="tel:+234800432584"
                  className="flex items-center gap-2 hover:text-background transition-colors"
                >
                  <Phone className="w-4 h-4" aria-hidden="true" />
                  <span>+234-800-HEALTH</span>
                </a>
                <a
                  href="mailto:hello@neronahealth.com"
                  className="flex items-center gap-2 hover:text-background transition-colors"
                >
                  <Mail className="w-4 h-4" aria-hidden="true" />
                  <span>hello@neronahealth.com</span>
                </a>
              </div>
              <p className="text-background-muted text-sm">
                © {new Date().getFullYear()} NeronaHealth. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}