import { Hero } from "@/components/sections/hero";
import { MissionSection, ValuesSection, MilestonesSection } from "@/components/sections/about-sections";

export default function AboutPage() {
  return (
    <>
      <Hero
        badge="Our Story"
        title={
          <>
            Building the <span className="text-primary">Future</span> of{" "}
            <span className="text-secondary">Healthcare</span> in Nigeria
          </>
        }
    description="NeronaHealth started with a simple belief: everyone in Nigeria deserves access to quality healthcare information. We're using AI to bridge gaps, connect providers, and save lives."
        role="default"
      />

      <MissionSection />

      <ValuesSection />

      <MilestonesSection />
    </>
  );
}
