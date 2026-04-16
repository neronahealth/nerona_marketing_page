import { Hero } from "@/components/sections/hero";
import { DefaultFeatures } from "@/components/sections/feature-grid";
import { HowItWorks, Stats, TrustBadges } from "@/components/sections/how-it-works";
import { Testimonials } from "@/components/sections/testimonials";
import { CTASection } from "@/components/sections/cta";
import { Shield, Clock, Users, Award } from "lucide-react";

export default function HomePage() {
  return (
    <>
      <Hero
        badge="Revolutionizing Healthcare in Nigeria"
        title={
          <>
            <span className="text-primary">Healthcare</span> That{" "}
            <span className="text-accent">Understands</span> You
          </>
        }
        description="AI-powered symptom triage, verified hospital discovery, and seamless appointment booking. Get the right care, at the right time, from healthcare providers you can trust."
        primaryCta={{ text: "Get Started Free", href: "/api/auth/signin" }}
        secondaryCta={{ text: "See How It Works", href: "/features" }}
        role="patient"
      >
        <div className="mt-12 flex flex-wrap items-center gap-6 text-sm text-foreground-muted">
          <span className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-primary-600" />
            HIPAA Compliant
          </span>
          <span className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-secondary-600" />
            24/7 Availability
          </span>
          <span className="flex items-center gap-2">
            <Users className="w-5 h-5 text-trust-600" />
            50,000+ Patients
          </span>
        </div>
      </Hero>

      <TrustBadges
        items={[
          { icon: <Shield className="w-5 h-5 text-primary-600" />, text: "HIPAA Compliant" },
          { icon: <Award className="w-5 h-5 text-secondary-600" />, text: "Verified Providers" },
          { icon: <Clock className="w-5 h-5 text-accent-600" />, text: "24/7 Emergency Support" },
          { icon: <Users className="w-5 h-5 text-trust-600" />, text: "50,000+ Patients Served" },
        ]}
      />

      <DefaultFeatures />

      <HowItWorks />

      <Stats
        items={[
          { value: "50", suffix: "K+", label: "Patients Served" },
          { value: "500", suffix: "+", label: "Verified Hospitals" },
          { value: "2,000", suffix: "+", label: "Licensed Doctors" },
          { value: "15", suffix: "min", label: "Average Response" },
        ]}
      />

      <Testimonials />

      <CTASection
        title="Ready to Transform Your Healthcare Experience?"
        description="Join thousands of Nigerians who have discovered a better way to manage their health. Get started today with free access to AI triage and hospital discovery."
        primaryCta={{ text: "Create Free Account", href: "/api/auth/signin" }}
        secondaryCta={{ text: "Contact Sales", href: "/contact" }}
        variant="primary"
      />
    </>
  );
}