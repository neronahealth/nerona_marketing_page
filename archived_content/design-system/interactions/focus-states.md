# Focus States

## Overview

Focus states indicate which element is currently receiving keyboard input. Proper focus management is critical for keyboard accessibility.

## Principles

1. **Visible** - Focus ring must be clearly visible
2. **Consistent** - Same focus treatment across all elements
3. **Proportional** - Focus ring size matches element size
4. **Accessible** - 3:1 contrast ratio minimum
5. **Keyboard-only** - Show focus ring only for keyboard navigation

## Focus Ring Tokens

```css
/* Focus ring tokens */
--focus-ring-width: 2px;
--focus-ring-offset: 2px;
--focus-ring-color-primary: var(--color-primary);
--focus-ring-color-secondary: var(--color-neutral);
--focus-ring-color-error: var(--color-error);
```

## Focus-Visible (Recommended)

Use `:focus-visible` to show focus rings only for keyboard navigation, not on click:

```css
/* Hide outline on click, show on keyboard */
.element:focus {
  outline: none;
}

.element:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}

/* Tailwind equivalent */
.focus-visible:ring-2 
.focus-visible:ring-primary 
.focus-visible:ring-offset-2
```

## Interactive Elements

### Buttons

```css
/* Button focus */
.btn:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}

/* Destructive button focus */
.btn-destructive:focus-visible {
  outline-color: var(--color-error);
}

/* Secondary button focus */
.btn-secondary:focus-visible {
  outline-color: var(--color-neutral-600);
}
```

### Input Fields

```css
/* Input focus */
.input:focus-visible {
  border-color: var(--color-primary);
  box-shadow: 0 0 0 2px var(--color-primary-50),
              0 0 0 4px var(--color-primary);
  outline: none;
}

/* Input with error focus */
.input-error:focus-visible {
  border-color: var(--color-error);
  box-shadow: 0 0 0 2px var(--color-error-50),
              0 0 0 4px var(--color-error);
}
```

### Links

```css
/* Link focus */
.link:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 4px;
  border-radius: 2px;
}
```

### Cards (Click Target)

```css
/* Interactive card focus */
.card[onclick]:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}
```

### Check/Radio

```css
/* Checkbox focus */
.checkbox:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}

/* Radio focus */
.radio:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}
```

### Select/Dropdown

```css
/* Select trigger focus */
.select-trigger:focus-visible {
  border-color: var(--color-primary);
  box-shadow: 0 0 0 2px var(--color-primary-50);
}
```

## Focus Trap

For modals and dialogs, trap focus within the component:

```tsx
import { FocusTrap } from '@headlessui/react';

<FocusTrap>
  <Dialog>
    <Input /> {/* Tab cycles through dialog elements only */}
    <Button>Submit</Button>
  </Dialog>
</FocusTrap>
```

## Focus Management

### Focus Order
```css
/* Tab order */
.element {
  /* Remove from tab order */
  tabindex: -1;
  
  /* Include in tab order */
  tabindex: 0;
  
  /* Focus first, skip to next on Tab */
  tabindex: 0;
}
```

### Programmatic Focus
```tsx
const inputRef = useRef<HTMLInputElement>(null);

// Move focus to input
inputRef.current?.focus();

// Focus with scroll into view
inputRef.current?.focus({ preventScroll: false });
```

### Focus Restoration
```tsx
// Save focus before opening modal
const previousFocus = document.activeElement as HTMLElement;

// Open modal
modal.open();

// Restore focus on close
modal.onClose(() => {
  previousFocus?.focus();
});
```

## Focus Ring Colors

| Element | Color | CSS Variable |
|---------|-------|--------------|
| Primary actions | Primary | `--color-primary` |
| Secondary actions | Neutral | `--color-neutral-600` |
| Destructive actions | Error | `--color-error` |
| Inputs (normal) | Primary | `--color-primary` |
| Inputs (error) | Error | `--color-error` |
| Inputs (success) | Success | `--color-success` |

## Focus Ring Sizes

| Element Size | Ring Width | Ring Offset |
|--------------|------------|-------------|
| Small (sm) | 2px | 2px |
| Default | 2px | 2px |
| Large (lg) | 3px | 3px |
| Extra Large (xl) | 3px | 4px |

## Custom Focus Ring

```css
/* Custom focus ring with glow */
.focus-glow:focus-visible {
  outline: none;
  box-shadow: 
    0 0 0 2px var(--color-background),
    0 0 0 4px var(--color-primary),
    0 0 20px rgba(247, 106, 77, 0.3);
}

/* Inset focus ring */
.focus-inset:focus-visible {
  outline: none;
  box-shadow: inset 0 0 0 2px var(--color-primary);
}
```

## High Contrast Mode

```css
/* Ensure focus is visible in Windows High Contrast Mode */
@media (forced-colors: active) {
  .element:focus-visible {
    outline: 2px solid CanvasText;
    outline-offset: 2px;
  }
}
```

## Do's and Don'ts

### Do
- Use `:focus-visible` instead of `:focus` for keyboard navigation
- Ensure focus ring has 3:1 contrast against adjacent colors
- Use offset to prevent focus ring from touching the element
- Restore focus after closing modals/dialogs
- Test focus order with Tab key

### Don't
- Don't use `outline: none` without `:focus-visible`
- Don't make focus ring too thin (minimum 2px)
- Don't use the same color for focus and hover
- Don't skip focusable elements in tab order
- Don't rely on color alone for focus indication