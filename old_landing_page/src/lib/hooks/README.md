# Content System Demo

This page demonstrates how to use the JSON content system in your components.

## Basic Usage

### Using the React Hook (Recommended for Client Components)

```tsx
"use client";

import { useHomeContent } from "@/lib/hooks/useContent";
import { Hero } from "@/components/sections/hero";

export default function HomePage() {
  const { content, loading, error } = useHomeContent();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading content</div>;
  if (!content) return null;

  return (
    <>
      <Hero
        badge={content.hero.badge}
        title={content.hero.title}
        description={content.hero.description}
        primaryCta={content.hero.primaryCta}
        secondaryCta={content.hero.secondaryCta}
      />
    </>
  );
}
```

### Using Server-Side Loading (Recommended for SEO)

```tsx
import { getHomeContent } from "@/content/loader";
import { Hero } from "@/components/sections/hero";

export default async function HomePage() {
  const content = getHomeContent();

  return (
    <>
      <Hero
        badge={content.hero.badge}
        title={content.hero.title}
        description={content.hero.description}
        primaryCta={content.hero.primaryCta}
        secondaryCta={content.hero.secondaryCta}
      />
    </>
  );
}
```

## Available Content Loaders

| Function | Returns | Description |
|----------|---------|-------------|
| `useHomeContent()` | `HomePageContent` | Homepage content |
| `useForPatientsContent()` | `ForPatientsContent` | Patient page content |
| `useForDoctorsContent()` | `ForDoctorsContent` | Doctor page content |
| `useForHospitalsContent()` | `ForHospitalsContent` | Hospital page content |
| `useFeaturesContent()` | `FeaturesPageContent` | Features page content |
| `useNavigationContent()` | `NavigationContent` | Navigation links |
| `useFooterContent()` | `FooterContent` | Footer content |
| `useTestimonials()` | `Testimonial[]` | Customer testimonials |

## Content Files Location

JSON content files are stored in: `/content/data/`

Edit these files to update website content without touching code.

## TypeScript Types

All content types are defined in: `/content/types.ts`

These provide type safety and autocomplete in your IDE.

## Example: Feature Grid with Icons

```tsx
import { FeatureGrid } from "@/components/sections/feature-grid";
import { Stethoscope, Calendar, Hospital } from "lucide-react";
import { useHomeContent } from "@/lib/hooks/useContent";

// Icon mapping
const iconMap = {
  Stethoscope: Stethoscope,
  Calendar: Calendar,
  Building2: Hospital,
  // ... add more as needed
};

export default function FeatureSection() {
  const { content } = useHomeContent();

  // Map icon strings to actual components
  const features = content?.features.features.map((f) => ({
    ...f,
    icon: iconMap[f.icon as keyof typeof iconMap],
  }));

  return (
    <FeatureGrid
      features={features}
      title={content?.features.title}
      description={content?.features.description}
    />
  );
}
```

## Updating Content

Simply edit the JSON files in `/content/data/` and the website will reflect changes automatically.

For production, you may want to:
1. Add a webhook to rebuild the site when content changes
2. Use a CMS like Sanity, Contentful, or Payload for a visual editor
3. Create an admin panel that writes to these files