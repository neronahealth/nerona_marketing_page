# HealthBudi Design System

A comprehensive, industrial-grade design system for HealthBudi applications across all platforms (web, mobile, marketing).

## Overview

This design system provides:

- **Design Tokens**: The single source of truth for colors, typography, spacing, shadows, and other visual properties
- **Component Specifications**: Detailed documentation for all UI components
- **Theme System**: Light and dark mode support with automatic preference detection
- **Interaction Guidelines**: Hover, focus, animation, and gesture patterns
- **Accessibility Guidelines**: WCAG 2.1 Level AA compliance requirements

## Quick Start

### Installation

```bash
# Copy the design-system directory to your project
cp -r design-system/ your-project/

# Or clone the repository
git clone [repository-url]
```

### Import CSS Tokens

```css
/* Add to your main CSS file */
@import './design-system/src/styles/design-system.css';
```

### Use Theme Provider (React)

```tsx
import { ThemeProvider } from './design-system/theme';

function App() {
  return (
    <ThemeProvider defaultTheme="system">
      <YourApp />
    </ThemeProvider>
  );
}
```

### Use Design Tokens

```tsx
import { colors, spacing, typography } from './design-system/tokens';

// Or in CSS
.button {
  background-color: rgb(var(--color-primary));
  padding: var(--space-2) var(--space-4);
  font-size: var(--text-base);
}
```

## Documentation

### Design Tokens (`/tokens`)

| File | Description |
|------|-------------|
| `colors.ts` | Brand colors, semantic colors, neutrals, role colors |
| `typography.ts` | Font families, sizes, weights, line heights |
| `spacing.ts` | Spacing scale (4px base unit) |
| `shadows.ts` | Elevation and glow shadows |
| `radii.ts` | Border radius values |
| `index.ts` | Exports all tokens plus z-index, opacity, transitions, breakpoints |

### Component Specifications (`/components`)

| Component | Document |
|-----------|----------|
| Button | [Button.md](./components/Button.md) |
| Input | [Input.md](./components/Input.md) |
| Checkbox | [Checkbox.md](./components/Checkbox.md#checkbox) |
| Radio | [Checkbox.md](./components/Checkbox.md#radio) |
| Select | [Select.md](./components/Select.md) |
| Modal | [Modal.md](./components/Modal.md) |
| Toast | [Toast.md](./components/Toast.md) |
| Card | [Card.md](./components/Card.md) |
| Badge | [Badge.md](./components/Badge.md#badge) |
| Avatar | [Badge.md](./components/Badge.md#avatar) |
| Tabs | [Tabs.md](./components/Tabs.md#tabs) |
| Table | [Tabs.md](./components/Tabs.md#table) |
| Pagination | [Tabs.md](./components/Tabs.md#pagination) |

### Theme System (`/theme`)

| File | Description |
|------|-------------|
| `light.ts` | Light theme configuration |
| `dark.ts` | Dark theme configuration |
| `ThemeProvider.tsx` | React context for theme management |
| `index.ts` | Exports all theme modules |

### Interaction Guidelines (`/interactions`)

| File | Description |
|------|-------------|
| `hover-effects.md` | Hover state transitions and effects |
| `focus-states.md` | Focus ring specifications and keyboard navigation |
| `animations.md` | Animation timing, keyframes, transitions |
| `gestures.md` | Touch and mobile gesture patterns |

### Accessibility Guidelines

See [accessibility/guidelines.md](./accessibility/guidelines.md) for WCAG 2.1 Level AA compliance.

## Usage Examples

### Colors

```tsx
// Using color tokens
import { colors, primary, secondary } from './design-system/tokens';

// Primary color
background: primary.DEFAULT;  // '#f76a4d'

// Color with shade
color: primary[600];  // '#df5035'

// RGB values for transparency
background: rgb(var(--color-primary) / 0.1);
```

### Typography

```tsx
// Using typography tokens
import { typography, textStyle } from './design-system/tokens';

// Font family
const displayFont = typography.fontFamily.display;

// Text style preset
const heading2xl = textStyle['heading-xl'];
// {
//   fontFamily: ['Outfit', 'system-ui', '-apple-system', 'sans-serif'],
//   fontSize: '1.25rem',
//   lineHeight: '1.875rem',
//   fontWeight: 600,
//   letterSpacing: '-0.025em',
// }
```

### Spacing

```tsx
// Using spacing tokens
import { spacing } from './design-system/tokens';

// Spacing values
padding: spacing[4];  // '1rem' (16px)
margin: spacing[8];   // '2rem' (32px)
gap: spacing[2];      // '0.5rem' (8px)
```

### Shadows

```tsx
// Using shadow tokens
import { shadows, glow } from './design-system/tokens';

// Elevation
boxShadow: shadows.md;

// Glow effect
boxShadow: glow.primary.DEFAULT;
```

### CSS Variables

```css
/* All tokens are available as CSS variables */
.button-primary {
  background-color: rgb(var(--color-primary));
  color: rgb(var(--color-primary-foreground));
  padding: var(--space-2) var(--space-4);
  font-size: var(--text-base);
  font-weight: var(--font-medium);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
}

.button-primary:hover {
  background-color: rgb(var(--color-primary-600));
  box-shadow: var(--shadow-md);
}

/* Dark mode automatically handled */
.dark .button-primary {
  /* Inherits from :root.dark variables */
}
```

## Design Principles

### 1. Accessibility First
- All components meet WCAG 2.1 Level AA standards
- Keyboard navigable by default
- Screen reader friendly
- Minimum 44x44px touch targets

### 2. Token-Based
- All styling references design tokens
- No hardcoded values
- Single source of truth
- Easy updates across entire application

### 3. Composable
- Small, focused primitives
- Combine for complex patterns
- Predictable composition

### 4. Consistent
- Same patterns across all components
- Predictable API surface
- Familiar interactions

### 5. Flexible
- Supports multiple variants
- Extensible through props
- Style override capability

## Color Palettes

### Primary Brand Color - Coral Flame
Distinct, energetic, approachable. Used for primary CTAs and brand moments.

- `#f76a4d` - Default
- `#df5035` - Hover
- `#be3d24` - Active

### Secondary Brand Color - Nature Green
Balanced, trustworthy. Used for success states and secondary actions.

- `#519954` - Default
- `#3d7a40` - Hover

### Tertiary Brand Color - Sky Blue
Fresh, optimistic. Used for accents and information.

- `#0ea5e9` - Default

### Semantic Colors

| Color | Use Case |
|-------|----------|
| Success | Confirmations, completed states |
| Warning | Cautious alerts, notices |
| Error | Errors, destructive actions |
| Info | Informational messages |

## Typography Scale

| Token | Size | Use Case |
|-------|------|----------|
| `text-xs` | 12px | Captions, labels |
| `text-sm` | 14px | Small text, meta |
| `text-base` | 16px | Body text |
| `text-lg` | 18px | Large body, lead |
| `text-xl` | 20px | Small headings |
| `text-2xl` | 24px | Section headings |
| `text-3xl` | 30px | Large headings |
| `text-4xl` | 36px | Hero headings |
| `text-5xl` | 48px | Display headings |

## Spacing Scale

Based on 4px base unit:

| Token | Size | Use Case |
|-------|------|----------|
| `space-1` | 4px | Tight gaps |
| `space-2` | 8px | Inline gaps |
| `space-3` | 12px | Small padding |
| `space-4` | 16px | Default padding |
| `space-6` | 24px | Section gaps |
| `space-8` | 32px | Large sections |

## Contributing

When adding new components:

1. **Documentation**: Add spec to `/components/[Component].md`
2. **Tokens**: Use values from `/tokens/`
3. **Accessibility**: Include ARIA requirements section
4. **TypeScript**: Define props interface
5. **CSS**: Use design system variables
6. **Examples**: Show usage patterns

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0.0 | 2024-01-15 | Initial release |

## License

Proprietary - HealthBudi Internal Use Only