# Hover Effects

## Overview

Hover effects provide visual feedback when users interact with elements, improving discoverability and engagement.

## Principles

1. **Subtle, not distracting** - Hover effects should enhance, not overwhelm
2. **Consistent timing** - Use standard 150ms transition
3. **Informative** - Hover should communicate interactivity
4. **Accessible** - Don't rely solely on hover for functionality

## Timing

```css
/* Standard hover transition */
--hover-duration: 150ms;
--hover-easing: ease-in-out;
```

## Interactive Elements

### Buttons

```css
/* Primary button hover */
.btn-primary:hover {
  background: var(--color-primary-600);
  box-shadow: var(--shadow-md);  /* Elevate from sm */
}

/* Secondary button hover */
.btn-secondary:hover {
  background: var(--color-neutral-200);
}

/* Outline button hover */
.btn-outline:hover {
  background: rgba(247, 106, 77, 0.1);
}

/* Ghost button hover */
.btn-ghost:hover {
  background: var(--color-neutral-100);
}
```

### Cards

```css
/* Interactive card hover */
.card:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
  transition: all 200ms ease-out;
}

/* Card with subtle shadow lift */
.card-subtle:hover {
  box-shadow: var(--shadow-md);
}
```

### Links

```css
/* Link underline transition */
.link {
  text-decoration: none;
  background-image: linear-gradient(
    currentColor,
    currentColor
  );
  background-position: 0% 100%;
  background-repeat: no-repeat;
  background-size: 0% 2px;
  transition: background-size 150ms ease;
}

.link:hover {
  background-size: 100% 2px;
}

/* Link color shift */
.link:hover {
  color: var(--color-primary-600);
}
```

### Inputs

```css
/* Input hover */
.input:hover:not(:focus):not(:disabled) {
  border-color: var(--color-neutral-400);
}

/* Input with icon hover */
.input-icon:hover .icon {
  color: var(--color-primary);
}
```

### Icons (Non-interactive)

```css
/* Icon scale on hover */
.icon-btn:hover .icon {
  transform: scale(1.05);
  transition: transform 150ms ease;
}
```

## Color Shifts

### Primary Elements
- Background: 8% darker (primary-500 → primary-600)
- Text: Primary foreground remains white

### Secondary Elements
- Background: neutral-100 → neutral-200
- Text: No change

### Border Only Elements
- Background: Transparent → 10% opacity of primary
- Border: No change

## Shadows

```css
/* Elevation on hover */
.elevated:hover {
  /* sm → md */
  box-shadow: 
    0 4px 6px -1px rgb(0 0 0 / 0.1),
    0 2px 4px -2px rgb(0 0 0 / 0.1);
}

/* Glow on hover */
.glow:hover {
  box-shadow: var(--glow-primary);
}
```

## Scale Effects

```css
/* Subtle scale up */
.scale-up:hover {
  transform: scale(1.02);
}

/* Subtle scale down */
.scale-down:hover {
  transform: scale(0.98);
}
```

## Icon Hover States

```css
/* Icon rotate on hover */
.icon-rotate:hover {
  transform: rotate(15deg);
}

/* Icon bounce on hover */
.icon-bounce:hover {
  animation: bounce 300ms ease;
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-4px); }
}
```

## Do's and Don'ts

### Do

- Use 150ms transitions for hover effects
- Apply subtle transforms (translateY(-2px), scale(1.02))
- Darken colors by 8% for hover states
- Add elevation through shadow changes
- Make hover visible on both light and dark modes

### Don't

- Don't use animations longer than 200ms
- Don't rely on color alone to indicate hover
- Don't make elements jump or move significantly
- Don't apply hover effects on touch devices (use @media (hover: hover))
- Don't add hover to non-interactive elements