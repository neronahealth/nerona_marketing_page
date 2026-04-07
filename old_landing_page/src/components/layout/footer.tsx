import Link from "next/link";
import { Container } from "@/components/layout/container";

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
  { name: "Twitter", href: "https://twitter.com/neronahealth" },
  { name: "LinkedIn", href: "https://linkedin.com/company/neronahealth" },
  { name: "Instagram", href: "https://instagram.com/neronahealth" },
  { name: "Facebook", href: "https://facebook.com/neronahealth" },
];

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <Container size="xl">
        <div className="py-16 lg:py-20">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
            <div className="col-span-2 md:col-span-4 lg:col-span-1">
              <Link href="/" className="flex items-center gap-2 mb-6">
                <div className="relative w-10 h-10">
                  <div className="absolute inset-0 bg-background rounded-xl transform rotate-6" />
                  <div className="absolute inset-0 bg-primary rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold text-xl font-display">N</span>
                  </div>
                </div>
                <span className="font-display font-bold text-xl">NeronaHealth</span>
              </Link>
              <p className="text-background-muted text-sm leading-relaxed">
                AI-powered healthcare platform connecting patients, doctors, and hospitals across Nigeria.
              </p>
              <div className="flex gap-4 mt-6">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-background-muted hover:text-background transition-colors"
                    aria-label={social.name}
                  >
                    <div className="w-10 h-10 rounded-lg bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors">
                      <span className="sr-only">{social.name}</span>
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.342 21.129 22 16.991 22 12c0-5.523-4.477-10-10-10z" />
                      </svg>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-display font-semibold mb-4 text-sm uppercase tracking-wider">
                Product
              </h3>
              <ul className="space-y-3">
                {footerLinks.product.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-background-muted hover:text-background transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-display font-semibold mb-4 text-sm uppercase tracking-wider">
                Solutions
              </h3>
              <ul className="space-y-3">
                {footerLinks.solutions.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-background-muted hover:text-background transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-display font-semibold mb-4 text-sm uppercase tracking-wider">
                Company
              </h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-background-muted hover:text-background transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-display font-semibold mb-4 text-sm uppercase tracking-wider">
                Legal
              </h3>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-background-muted hover:text-background transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-background/10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-background-muted text-sm">
                © {new Date().getFullYear()} NeronaHealth. All rights reserved.
              </p>
              <div className="flex items-center gap-6 text-sm text-background-muted">
                <span>Made with ❤️ in Nigeria</span>
                <span className="hidden md:block">|</span>
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  HIPAA Compliant
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}