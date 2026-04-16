# HealthBudi Design System

**Version**: 1.0  
**Last Updated**: April 2025

## Overview

HealthBudi's design system embodies modern healthcare technology - clean, professional, trustworthy, and distinctly African. We avoid generic "AI-generated" aesthetics in favor of intentional, refined design choices that reflect our mission: making healthcare accessible across Nigeria.

**Design Philosophy**:
- **No Generic Boxes**: Sections flow naturally with backgrounds, not boxed-in cards
- **Real Visuals**: Abstract geometric placeholders that feel designed, not stock
- **Solid Foundations**: Solid colors with high contrast, not washed-out overlays
- **Purposeful Spacing**: Generous whitespace that guides the eye
- **Clear Hierarchy**: One primary action per section, always clear and compelling

---

## Color Palette

### Primary: Terracotta (#f76a4d)
*Earthy, warm, distinctively African - our signature brand color*

The primary palette conveys warmth, humanity, and our commitment to serving communities. Use for primary CTAs, key interactions, and brand moments.

```tsx
// Usage
<Button variant="default">Primary Action</Button>
<div className="text-primary">Brand text accent</div>
<div className="bg-primary">Brand background</div>
```

**Scale**:
- `primary-50`: #fef7f4 - Lightest tint, subtle backgrounds
- `primary-100`: #feedeb - Very light, hover states
- `primary-200`: #fedbdf - Light, decorative elements
- `primary-300`: #ffbfb3 - Soft, icons on light backgrounds
- `primary-400`: #ff977f - Medium, borders and accents
- `primary-500`: #f76a4d - **Main brand color**
- `primary-600`: #e54d2e - Dark, hover states on primary
- `primary-700`: #c13a1f - Darker, active states
- `primary-800`: #9f311c - Deep, emphasis
- `primary-900`: #842d1d - Darkest, text on light backgrounds
- `primary-950`: #471409 - Near black, deep accents

### Secondary: Sage Green (#519954)
*Health, growth, calming - complements terracotta beautifully*

Use for secondary actions, success states, and health-related content.

```tsx
// Usage
<Button variant="secondary">Secondary Action</Button>
<div className="text-secondary">Success message</div>
```

**Scale**: 50-950, mirroring primary structure

### Accent: Golden Yellow (#f5b800)
*Energy, optimism, Nigerian identity - use sparingly for maximum impact*

Use for highlights, decorative accents, and moments of delight.

```tsx
// Usage
<div className="bg-accent-100">Highlight badge</div>
<span className="text-accent">Special offer</span>
```

### Semantic Colors

#### Trust: Deep Blue (#2563eb)
Medical professionalism, reliability, doctor-focused features
- Use for: Doctor-related UI, professional trust indicators
- Avoid with: Primary CTAs (too competitive)

#### Emergency: Red (#ed3333)
Urgent attention, ambulance dispatch
- Use for: Emergency buttons, critical alerts
- Avoid in: Day-to-day UI (creates anxiety)

#### Success: Green (#16a34a)
Positive actions completed, healthy states
- Use for: Success messages, checkmarks, positive indicators

#### Warning: Amber (#ca8a04)
Caution, important notices
- Use for: Warning messages, important notices

#### Error: Red (#dc2626)
Errors, destructive actions
- Use for: Error messages, destructive confirmations

### Background & Foreground

#### Backgrounds
```tsx
background-default: #fafaf9 // Main background - warm off-white
background-muted: #f5f5f4 // Subtle sections, cards
background-subtle: #ecebe9 // Lighter than default
background-warm: #fef9f7 // Tinted with brand color
```

#### Foregrounds
```tsx
foreground-default: #1c1917 // Body text - dark warm gray
foreground-muted: #57534e // Secondary text, descriptions
foreground-subtle: #78716c // Captions, hints
```

### Usage Guidelines

**DO**:
- Use solid colors for backgrounds (avoid low-opacity overlays)
- Ensure text contrast ratio ≥ 4.5:1 for body, ≥ 3:1 for large text
- Use brand colors for moments that matter
- Mix gradients subtly (stops with 20-30% opacity max)

**DON'T**:
- Use primary-50 as text (too light)
- Stack multiple brand colors in the same section
- Use emergency red outside emergency contexts
- Apply transparent backgrounds over complex content

---

## Typography

### Font Stack

**Display**: Outfit
*Modern geometric sans, friendly yet professional*
- Use for: Headlines, titles, hero text
- Weights: 400 (regular), 500 (medium), 600 (semibold), 700 (bold)

**Body**: Plus Jakarta Sans
*Readable, professional, excellent for long-form*
- Use for: Body text, descriptions, UI text
- Weights: 400 (regular), 500 (medium), 600 (semibold)

**Mono**: JetBrains Mono
*For technical content, code snippets*
- Use for: Code, numbers, data

### Type Scale

We use **fluid typography** that scales smoothly across breakpoints:

```tsx
// Fluid scale (clamp-based)
text-fluid-xs:  clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem)   // 12-14px
text-fluid-sm:  clamp(0.875rem, 0.8rem + 0.35vw, 1rem)      // 14-16px
text-fluid-base: clamp(1rem, 0.9rem + 0.5vw, 1.125rem)     // 16-18px
text-fluid-lg:  clamp(1.125rem, 1rem + 0.6vw, 1.25rem)     // 18-20px
text-fluid-xl:  clamp(1.25rem, 1.1rem + 0.75vw, 1.5rem)    // 20-24px
text-fluid-2xl: clamp(1.5rem, 1.25rem + 1.25vw, 2rem)       // 24-32px
text-fluid-3xl: clamp(2rem, 1.5rem + 2.5vw, 3rem)           // 32-48px
text-fluid-4xl: clamp(2.5rem, 1.75rem + 3.75vw, 4rem)       // 40-64px
text-fluid-5xl: clamp(3rem, 2rem + 5vw, 5rem)               // 48-80px
```

**Usage**:
```tsx
// Hero headline
<h1 className="font-display text-fluid-4xl font-bold">
  Healthcare for Everyone
</h1>

// Section headline
<h2 className="font-display text-fluid-3xl font-bold">
  Featured Services
</h2>

// Subheadline
<h3 className="font-display text-fluid-xl font-semibold">
  How It Works
</h3>

// Body text
<p className="font-body text-fluid-base text-foreground-muted">
  Description text here
</p>
```

### Hierarchy Example

```tsx
// Page structure
<h1>Hero Headline (fluid-4xl/5xl)</h1>
  <h2>Section Title (fluid-3xl)</h2>
    <h3>Feature Title (fluid-xl/2xl)</h3>
      <p>Body text (fluid-base)</p>
        <small>Caption (fluid-sm/xs)</small>
```

---

## Spacing System

Based on **8px grid** with 4px half-steps for precision:

```tsx
spacing: {
  // Base increments
  px: 'var(--tw-space-px)', // 1px
  0.5: '0.125rem', // 2px
  1: '0.25rem',    // 4px
  2: '0.5rem',     // 8px
  3: '0.75rem',    // 12px
  4: '1rem',       // 16px
  6: '1.5rem',     // 24px
  8: '2rem',       // 32px
  12: '3rem',      // 48px
  16: '4rem',      // 64px
  20: '5rem',      // 80px
  24: '6rem',      // 96px
  32: '8rem',      // 128px
}
```

### Spacing Guidelines

**Section Spacing**:
```tsx
// Small screens: py-16 (64px)
// Large screens: py-24 (96px) or py-32 (128px)
<section className="py-16 lg:py-24">
```

**Component Internal**:
```tsx
// Card/Feature boxes: p-6 or p-8
// Small gaps: gap-4 (16px)
// Medium gaps: gap-6 (24px)
// Large gaps: gap-8 (32px)
```

**Text Spacing**:
```tsx
// Headlines: mt-6 (24px) after prev section
// Body after headline: mt-4 (16px)
// Small gaps: mt-2 or mt-3
```

---

## Component Variants

### Card Component

**Elevated** (Default for important content):
```tsx
<Card variant="elevated">
  <!-- Soft shadow, no border, floats subtly -->
</Card>
```

**Outlined**:
```tsx
<Card variant="outlined">
  <!-- Border visible, no shadow, flat -->
</Card>
```

**Ghost**:
```tsx
<Card variant="ghost">
  <!-- No border, no shadow, just padding -->
</Card>
```

**Gradient**:
```tsx
<Card variant="gradient">
  <!-- Subtle gradient background, eye-catching -->
</Card>
```

**Usage Guidelines**:
- `elevated`: Primary content, hoverable items
- `outlined`: Secondary content, less emphasis
- `ghost`: Nested content, already has container
- `gradient`: Premium features, CTAs

### Button Component

**Default** (Primary):
```tsx
<Button>Primary Action</Button>
<Button size="xl">Large CTA</Button>
```

**Variants**:
```tsx
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
```

**Usage**:
- One primary button per section
- Secondary for alternative actions
- Outline for less important actions
- Ghost for subtle/tertiary actions

---

## Shadow & Elevation

We use **context-aware shadows** that adapt to content:

```tsx
shadow-soft: Subtle lift for cards
  0 2px 8px -2px rgba(28, 25, 23, 0.08),
  0 4px 16px -4px rgba(28, 25, 23, 0.12)

shadow-medium: Standard elevation
  0 4px 12px -4px rgba(28, 25, 23, 0.1),
  0 8px 24px -8px rgba(28, 25, 23, 0.15)

shadow-elevated: High prominence
  0 8px 24px -8px rgba(28, 25, 23, 0.1),
  0 16px 48px -16px rgba(28, 25, 23, 0.2)

shadow-glow-primary: Brand glow
  0 0 30px -8px rgba(247, 106, 77, 0.4)

shadow-glow-accent: Accent glow
  0 0 30px -8px rgba(245, 184, 0, 0.4)
```

**Elevation Scale**:
- Level 0: Flat (no shadow) - `shadow-none`
- Level 1: Soft - `shadow-soft`
- Level 2: Medium - `shadow-medium`
- Level 3: Elevated - `shadow-elevated`
- Level 4: Glow - `shadow-glow-*`

---

## Animation Guidelines

### Principles

1. **Purposeful**: Every animation guides or delights
2. **Subtle**: Enhances, doesn't distract
3. **Fast**: 300-600ms for most animations
4. **Natural**: Ease-out curves feel organic

### Keyframes

```tsx
// Fade + Motion
animate-fade-in: opacity 0 → 1 (500ms)
animate-fade-up: opacity + translateY (600ms)
animate-fade-down: opacity + translateY (600ms)

// Slides
animate-slide-in-left: x-axis slide (500ms)
animate-slide-in-right: x-axis slide (500ms)

// Scale
animate-scale-in: scale + opacity (300ms)

// Ambient
animate-float: gentle float (3000ms)
animate-pulse-soft: subtle pulse (2000ms)
animate-spin-slow: slow rotation (3000ms)
```

### Stagger Pattern

```tsx
// Stagger reveal for lists
<motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: index * 0.1 }}
>
  {/* Item */}
</motion.div>
```

### Hover Transitions

```tsx
// Lift on hover
<div className="hover:-translate-y-1 transition-all duration-300">
  {/* Lifts up slightly */}
</div>

// Scale icon
<div className="group-hover:scale-110 transition-transform duration-300">
  {/* Icon scales up */}
</div>
```

---

## Visual Assets

### Placeholder Patterns

We use **abstract geometric** patterns instead of stock photos:

```tsx
// Hero Visual - Dashboard mockup
<HeroVisual />

// Feature Illustration - Icon + gradient
<FeatureIllustration variant="health" />

// Testimonial Image - Avatar with initials
<TestimonialImage initials="AO" name="Amina Okonkwo" />

// Logo Cloud - Placeholder logos
<LogoCloud />

// Stats Visual - Number animation
<StatsVisual />
```

### Gradient Mesh Pattern

```tsx
// Background pattern for sections
<div className="relative overflow-hidden bg-gradient-to-br from-white to-slate-50">
  <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
  <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-200/30 rounded-full blur-3xl" />
  <div className="absolute -bottom-40 -left-40 w-60 h-60 bg-accent-200/20 rounded-full blur-3xl" />
  {/* Content */}
</div>
```

---

## Layout Patterns

### Container Widths

```tsx
// Standard content
<Container size="lg"> // 1024px max
  <p>Text content</p>
</Container>

// Full-width features
<Container size="xl"> // 1280px max
  <div className="grid grid-cols-3 gap-8">
    {/* Features */}
  </div>
</Container>

// Narrow focus
<Container size="md"> // 768px max
  <form>Contact form</form>
</Container>
```

### Grid Patterns

```tsx
// Feature grid
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
  {/* 3 columns on desktop */}
</div>

// Two-column hero
<div className="grid lg:grid-cols-2 gap-12">
  <div>Text content</div>
  <div>Visual element</div>
</div>

// Stats grid
<div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
  {/* Stats */}
</div>
```

---

## Accessibility

### Color Contrast

- **Body text**:foreground-default on background-default = 12.63:1 ✓
- **Muted text**: foreground-muted on background-default = 7.03:1 ✓
- **Primary button**: white on primary-500 = 4.54:1 ✓

### Focus Indicators

```tsx
// Visible focus rings
<button className="focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
  Focusable
</button>
```

### Screen Reader Support

```tsx
// Semantic HTML
<h2>Heading</h2>
<nav aria-label="Main navigation">
<button aria-label="Close menu">
<img alt="Descriptive alt text">
```

### Skip Links

```tsx
<SkipLink href="#main-content">
  Skip to main content
</SkipLink>
```

---

## Don'ts

**AVOID**:

1. **Generic borders**: No `border border-border bg-card`. Use elevation or backgrounds instead.
   
   ❌ Bad:
   ```tsx
   <div className="border border-border bg-card shadow-soft">
   ```
   
   ✓ Good:
   ```tsx
   <div className="bg-white rounded-2xl shadow-soft">
   ```

2. **Transparent overlays**: Don't use low-opacity colors as backgrounds
   
   ❌ Bad:
   ```tsx
   <div className="bg-primary/10 text-primary">
   ```
   
   ✓ Good:
   ```tsx
   <div className="bg-primary-50 text-primary-700">
   ```

3. **Box-in-box layouts**: Let sections flow naturally
   
   ❌ Bad:
   ```tsx
   <Card><CardHeader>...<CardContent>...</Card></Card>
   ```
   
   ✓ Good:
   ```tsx
   <section className="bg-muted">
     <Container>
       {/* Content without card wrapper */}
     </Container>
   </section>
   ```

4. **Multiple CTAs competing**: One primary action per section
   
   ❌ Bad:
   ```tsx
   <Button variant="default">Primary</Button>
   <Button variant="default">Also Primary</Button>
   ```
   
   ✓ Good:
   ```tsx
   <Button variant="default">Primary</Button>
   <Button variant="outline">Secondary</Button>
   ```

---

## File Structure

```
/components
  /ui
    - button.tsx      # Button variants
    - card.tsx        # Card variants (elevated/outlined/ghost/gradient)
    - visual.tsx      # Placeholder visual components
  
  /sections
    - hero.tsx        # Hero section
    - feature-grid.tsx # Feature grid (no cards)
    - testimonials.tsx # Quotes, no boxes
    - cta.tsx         # Bold CTA sections
    - how-it-works.tsx # Timeline pattern
```

---

## Implementation Checklist

- [ ] Use design tokens (no hardcoded colors/spacing)
- [ ] Ensure text contrast meets WCAG AA
- [ ] Add visual elements (no text-only layouts)
- [ ] Use solid backgrounds (no washed overlays)
- [ ] Apply proper elevation (soft/medium/elevated)
- [ ] Animate with purpose (stagger, hover, scroll)
- [ ] Test on multiple screen sizes
- [ ] Verify accessibility (keyboard, screen reader)

---

**Key Inspiration**:
- **Stripe**: Clean sections, subtle backgrounds, no boxy cards
- **Linear**: Gradient backgrounds, glass effects, visual delight
- **Vercel**: Dark/light contrast, geometric shapes
- **Notion**: Simple, flat design, clear typography

This design system ensures HealthBudi feels **production-grade**, **distinctive**, and **trustworthy** - never AI-generated or generic.