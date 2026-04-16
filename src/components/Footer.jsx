import { Link } from 'react-router-dom';


const footerLinks = {
  aboutUs: {
    title: 'About Us',
    links: [{ label: 'About Neurona', path: '/about' }],
  },
  products: {
    title: 'Our Products',
    links: [
      { label: 'Download Application', path: '/download' },
      { label: 'For Patients', path: '/for-patients' },
      { label: 'For Hospitals', path: '/for-hospitals' },
      { label: 'For Ambulance Providers', path: '/for-ambulance' },
    ],
  },
  legal: {
    title: 'Legal',
    links: [
      { label: 'Terms of Use', path: '/legal-coming-soon' },
      { label: 'Privacy Notice', path: '/legal-coming-soon' },
      { label: 'Data & Insights – Privacy Notice', path: '/legal-coming-soon' },
      { label: 'Information Security Policy', path: '/legal-coming-soon' },
      { label: 'Service Level Agreement', path: '/legal-coming-soon' },
      { label: 'Cookie Notice', path: '/legal-coming-soon' },
    ],
  },
};

export default function Footer() {
  return (
    <footer className="bg-foreground text-background mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {/* About Us */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-background/90">{footerLinks.aboutUs.title}</h4>
            <ul className="space-y-3">
              {footerLinks.aboutUs.links.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-background/60 hover:text-background transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Products */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-background/90">{footerLinks.products.title}</h4>
            <ul className="space-y-3">
              {footerLinks.products.links.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-sm text-background/60 hover:text-background transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-background/90">{footerLinks.legal.title}</h4>
            <ul className="space-y-3">
              {footerLinks.legal.links.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-sm text-background/60 hover:text-background transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-background/90">Contact Us</h4>
            <div className="space-y-3 text-sm text-background/60">
              <p>
                20 Babatunde Kuboye Street,<br />
                Lekki Phase 1, Lagos, Nigeria
              </p>
              <p>
                <a href="mailto:info@neuronahealth.com" className="hover:text-background transition-colors">
                  info@neuronahealth.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-background/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <img src="https://media.base44.com/images/public/69b8c37c9acfcacacb58570b/ee6a0ab30_Neuronalogo.png" alt="Neurona" className="h-8 w-auto brightness-0 invert" />
          </div>
          <p className="text-xs text-background/50">
            © {new Date().getFullYear()} Neurona Health. AI-powered healthcare navigation for Africa.
          </p>
        </div>
      </div>
    </footer>
  );
}