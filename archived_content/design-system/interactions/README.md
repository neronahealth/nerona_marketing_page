# Interactions Index

## Overview

This directory contains interaction guidelines for HealthBudi's design system. Each file covers specific interaction patterns.

## Documents

| Document | Description |
|----------|-------------|
| [hover-effects.md](./hover-effects.md) | Hover state transitions and effects |
| [focus-states.md](./focus-states.md) | Focus ring specifications and keyboard navigation |
| [animations.md](./animations.md) | Animation timing, keyframes, and transitions |
| [gestures.md](./gestures.md) | Touch and mobile gesture patterns |

## Quick Reference

### Timing Constants
```css
--duration-fast: 100ms;    /* Micro-interactions */
--duration-normal: 150ms;  /* Standard transitions */
--duration-slow: 200ms;    /* Page/modal animations */
--duration-page: 300ms;    /* Page transitions */
```

### Standard Easing
```css
--ease-default: ease-in-out;
--ease-in: ease-in;
--ease-out: ease-out;
--ease-spring: cubic-bezier(0.68, -0.55, 0.265, 1.55);
```

### Focus Ring
```css
outline: 2px solid var(--color-primary);
outline-offset: 2px;
```

### Touch Targets
- Minimum: 44x44px
- Recommended: 48x48px
- Spacing between: 8px minimum