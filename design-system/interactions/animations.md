# Animations

## Overview

Animations enhance user experience by providing visual feedback, guiding attention, and creating a sense of continuity. HealthBudi uses purposeful, subtle animations.

## Timing Constants

```css
:root {
  /* Standard transitions */
  --duration-fast: 100ms;
  --duration-normal: 150ms;
  --duration-slow: 200ms;
  --duration-page: 300ms;
  
  /* Easing functions */
  --ease-default: ease-in-out;
  --ease-in: ease-in;
  --ease-out: ease-out;
  --ease-spring: cubic-bezier(0.68, -0.55, 0.265, 1.55);
  --ease-elastic: cubic-bezier(0.68, -0.6, 0.32, 1.6);
}
```

## Transitions

### Standard Elements
```css
/* Hover transitions */
transition: all 150ms ease-in-out;

/* Color-only transitions (faster) */
transition: color 150ms ease-in-out,
            background-color 150ms ease-in-out;

/* Transform transitions */
transition: transform 150ms ease-in-out;

/* Shadow transitions */
transition: box-shadow 150ms ease-in-out;
```

### Page Transitions
```css
/* Page enter/exit */
transition: opacity 300ms ease-in-out, 
            transform 300ms ease-in-out;

/* Modal backdrop */
transition: opacity 150ms ease-out;
```

## Page Animations

### Fade In
```css
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.fade-in {
  animation: fadeIn var(--duration-normal) var(--ease-default);
}
```

### Slide Up
```css
@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.slide-up {
  animation: slideUp var(--duration-slow) var(--ease-out);
}
```

### Scale In
```css
@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.scale-in {
  animation: scaleIn var(--duration-slow) var(--ease-out);
}
```

## Component Animations

### Button Click
```css
@keyframes buttonClick {
  0% { transform: scale(1); }
  50% { transform: scale(0.98); }
  100% { transform: scale(1); }
}

.btn:active {
  animation: buttonClick 100ms ease-out;
}
```

### Checkbox/Radio Check
```css
@keyframes checkmark {
  0% { transform: scale(0); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
}

.checkbox:checked .icon {
  animation: checkmark 200ms spring;
}
```

### Modal Open
```css
@keyframes modalEnter {
  from {
    opacity: 0;
    transform: translateY(-20px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

@keyframes modalBackdropEnter {
  from { opacity: 0; }
  to { opacity: 1; }
}

.modal {
  animation: modalEnter var(--duration-slow) var(--ease-out);
}

.modal-backdrop {
  animation: modalBackdropEnter var(--duration-normal) var(--ease-out);
}
```

### Toast Enter/Exit
```css
@keyframes toastEnter {
  from {
    opacity: 0;
    transform: translateY(100%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes toastExit {
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(-100%);
  }
}

.toast-enter {
  animation: toastEnter var(--duration-slow) var(--ease-out);
}

.toast-exit {
  animation: toastExit var(--duration-normal) var(--ease-in);
}
```

### Skeleton Loading
```css
@keyframes shimmer {
  0% {
    background-position: -468px 0;
  }
  100% {
    background-position: 468px 0;
  }
}

.skeleton {
  background: linear-gradient(
    to right,
    var(--color-neutral-100) 0%,
    var(--color-neutral-200) 20%,
    var(--color-neutral-100) 40%,
    var(--color-neutral-100) 100%
  );
  background-size: 936px 100%;
  animation: shimmer 1.5s linear infinite;
}
```

### Spinner
```css
@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.spinner {
  animation: spin 1s linear infinite;
}
```

### Pulse
```css
@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

.pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
```

### Bounce
```css
@keyframes bounce {
  0%, 100% {
    transform: translateY(-25%);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: translateY(0);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
}

.bounce {
  animation: bounce 1s infinite;
}
```

## Staggered Animations

```css
/* Stagger children with delay */
.stagger > *:nth-child(1) { animation-delay: 0ms; }
.stagger > *:nth-child(2) { animation-delay: 50ms; }
.stagger > *:nth-child(3) { animation-delay: 100ms; }
.stagger > *:nth-child(4) { animation-delay: 150ms; }
.stagger > *:nth-child(5) { animation-delay: 200ms; }
.stagger > *:nth-child(6) { animation-delay: 250ms; }
.stagger > *:nth-child(7) { animation-delay: 300ms; }
.stagger > *:nth-child(8) { animation-delay: 350ms; }
.stagger > *:nth-child(9) { animation-delay: 400ms; }
.stagger > *:nth-child(10) { animation-delay: 450ms; }
```

## Reduced Motion

Respect user preference for reduced motion:

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

/* Alternative: provide simple fade */
@media (prefers-reduced-motion: reduce) {
  .slide-up {
    animation: fadeIn var(--duration-normal) var(--ease-default);
  }
}
```

## Micro-interactions

### Ripple Effect
```css
@keyframes ripple {
  0% {
    transform: scale(0);
    opacity: 0.5;
  }
  100% {
    transform: scale(4);
    opacity: 0;
  }
}

.ripple {
  position: relative;
  overflow: hidden;
}

.ripple::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  background: currentColor;
  border-radius: 50%;
  transform: scale(0);
  opacity: 0;
}

.ripple:active::after {
  animation: ripple 500ms ease-out;
}
```

### Hover Scale
```css
/* Subtle scale on hover */
.scale-hover {
  transition: transform var(--duration-normal) var(--ease-default);
}

.scale-hover:hover {
  transform: scale(1.02);
}

/* Scale down on click */
.scale-hover:active {
  transform: scale(0.98);
}
```

## Do's and Don'ts

### Do
- Use 150ms for standard UI transitions
- Use 200-300ms for page/modal animations
- Use spring easing for playful interactions
- Respect prefers-reduced-motion
- Test animations on lower-end devices

### Don't
- Don't use animations longer than 500ms for UI
- Don't animate margin/padding (use transform instead)
- Don't animate non-performant properties without testing
- Don't use animations that cause layout thrashing
- Don't force animations on users who prefer reduced motion