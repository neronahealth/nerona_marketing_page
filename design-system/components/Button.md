# Button

## Overview

Buttons are interactive elements that trigger actions when clicked or tapped. They communicate actions users can take and are a critical component for user interaction across HealthBudi platforms.

## Variants

### Default (Primary)
Solid primary background color. Used for the most important actions on a page.

```tsx
<Button variant="default">Primary Action</Button>
```

**Visual:**
- Background: `var(--color-primary)`
- Text: `var(--color-primary-foreground)` (white)
- Border: none
- Shadow: `var(--shadow-sm)`
- Hover: Background `var(--color-primary-dark)`, elevated shadow
- Focus: Ring `var(--color-primary)` ring-offset-2
- Active: Background darker, scale(0.98) transform
- Disabled: opacity 0.5, cursor not-allowed

### Secondary
Solid neutral background for secondary actions.

```tsx
<Button variant="secondary">Secondary Action</Button>
```

**Visual:**
- Background: `var(--color-neutral-muted)`
- Text: `var(--color-foreground)`
- Hover: Background slightly darker
- Focus: Ring `var(--color-neutral)` ring-offset-2

### Outline
Bordered button with transparent background for tertiary actions.

```tsx
<Button variant="outline">Outline Action</Button>
```

**Visual:**
- Background: transparent
- Text: `var(--color-primary)`
- Border: 1px solid `var(--color-primary)`
- Hover: Background `var(--color-primary)` with 10% opacity
- Focus: Ring `var(--color-primary)` ring-offset-2

### Ghost
No background, only hover state visible. Used for subtle actions.

```tsx
<Button variant="ghost">Ghost Action</Button>
```

**Visual:**
- Background: transparent
- Text: `var(--color-foreground)`
- Hover: Background `var(--color-neutral-muted)`
- Focus: Ring `var(--color-primary)` ring-offset-2

### Destructive
Red variant for dangerous actions like delete, remove, logout.

```tsx
<Button variant="destructive">Delete Account</Button>
```

**Visual:**
- Background: `var(--color-error)`
- Text: `var(--color-error-foreground)` (white)
- Hover: Background `var(--color-error-dark)`
- Focus: Ring `var(--color-error)` ring-offset-2

### Link
Text-only button that looks like a link but triggers an action.

```tsx
<Button variant="link">Learn More</Button>
```

**Visual:**
- Background: transparent
- Text: `var(--color-primary)`
- Underline on hover
- No padding (inline with text)

## Sizes

### sm (Small)
```tsx
<Button size="sm">Small Button</Button>
```
- Height: 32px (h-8)
- Padding: 12px (px-3)
- Font size: 14px (text-sm)
- Border radius: 6px (rounded-md)

### default (Medium)
```tsx
<Button size="default">Default Button</Button>
```
- Height: 40px (h-10)
- Padding: 16px (px-4)
- Font size: 16px (text-base)
- Border radius: 8px (rounded-lg)

### lg (Large)
```tsx
<Button size="lg">Large Button</Button>
```
- Height: 48px (h-12)
- Padding: 24px (px-6)
- Font size: 18px (text-lg)
- Border radius: 10px (rounded-lg)

### xl (Extra Large)
```tsx
<Button size="xl">Extra Large Button</Button>
```
- Height: 56px (h-14)
- Padding: 32px (px-8)
- Font size: 20px (text-xl)
- Border radius: 12px (rounded-xl)

### icon (Icon Only)
```tsx
<Button size="icon"><Icon /></Button>
```
- Width: 40px (w-10)
- Height: 40px (h-10)
- Padding: 0
- Border radius: 8px (rounded-lg)

## States

### Default
Normal appearance for interactive buttons.

### Hover
- **Timing:** 150ms ease-in-out transition
- **Effect:** Slightly darker background, elevated shadow (sm → md)
- **Cursor:** pointer

### Focus
- **Timing:** Instant on focus-visible (keyboard only)
- **Effect:** Ring-2 with ring-offset-2
- **Color:** Match variant color (primary, neutral, error, etc.)
- **Accessibility:** Focus ring ensures keyboard navigation visibility

### Active
- **Timing:** 100ms ease-out
- **Effect:** Scale(0.98) transform, darker background
- **Shadow:** Reduced (md → sm)

### Disabled
- **Opacity:** 0.5
- **Cursor:** not-allowed
- **Pointer events:** none
- **No hover, focus, or active states**

### Loading
Shows spinner and disables interaction.

```tsx
<Button loading>Loading...</Button>
```

- **Visual:** Spinner replaces text/icon
- **State:** Disabled (no interaction)
- **Spinner:** Primary color with animation

## Icons

### Left Icon
```tsx
<Button>
  <Icon name="plus" position="left" />
  Add Item
</Button>
```

### Right Icon
```tsx
<Button>
  Continue
  <Icon name="arrow-right" position="right" />
</Button>
```

### Icon Only
```tsx
<Button size="icon" aria-label="Add item">
  <Icon name="plus" />
</Button>
```

## Full Width
```tsx
<Button fullWidth>Submit</Button>
```
- Width: 100%
- Used for mobile layouts and forms

## Button Group
```tsx
<ButtonGroup>
  <Button>Save</Button>
  <Button variant="outline">Cancel</Button>
</ButtonGroup>
```

## Accessibility

### Requirements
- All buttons must have accessible names (text or aria-label for icon buttons)
- Focus-visible ring must be visible with 3:1 contrast ratio
- Disabled state must be communicated to screen readers
- Loading state must announce to screen readers
- Touch targets must be minimum 44x44px on mobile

### ARIA Attributes
```tsx
<Button
  aria-label="Close dialog"
  aria-describedby="button-description"
  aria-disabled={isDisabled}
>
  <Icon name="x" />
</Button>
```

## Code Implementation

### TypeScript Props
```tsx
interface ButtonProps {
  variant?: 'default' | 'secondary' | 'outline' | 'ghost' | 'destructive' | 'link';
  size?: 'sm' | 'default' | 'lg' | 'xl' | 'icon';
  loading?: boolean;
  fullWidth?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  children: React.ReactNode;
  asChild?: boolean;
  className?: string;
}
```

### Tailwind CSS Classes
```css
.btn {
  /* Base */
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-lg);
  font-weight: var(--font-medium);
  transition: all 150ms ease-in-out;
  cursor: pointer;
  
  /* Focus */
  outline: none;
  focus-visible:ring: 2px;
  focus-visible:ring-offset: 2px;
  
  /* Disabled */
  disabled:opacity: 0.5;
  disabled:cursor: not-allowed;
}

/* Variants */
.btn-default {
  background: var(--color-primary);
  color: var(--color-primary-foreground);
}

.btn-default:hover {
  background: var(--color-primary-dark);
  box-shadow: var(--shadow-md);
}

.btn-secondary {
  background: var(--color-neutral-muted);
  color: var(--color-foreground);
}

.btn-outline {
  background: transparent;
  border: 1px solid var(--color-primary);
  color: var(--color-primary);
}

.btn-ghost {
  background: transparent;
  color: var(--color-foreground);
}

.btn-ghost:hover {
  background: var(--color-neutral-muted);
}

.btn-destructive {
  background: var(--color-error);
  color: var(--color-error-foreground);
}

.btn-link {
  background: transparent;
  color: var(--color-primary);
  text-decoration: underline;
  text-underline-offset: 4px;
}

/* Sizes */
.btn-sm {
  height: 32px;
  padding: 0 12px;
  font-size: var(--text-sm);
}

.btn-default-size {
  height: 40px;
  padding: 0 16px;
  font-size: var(--text-base);
}

.btn-lg {
  height: 48px;
  padding: 0 24px;
  font-size: var(--text-lg);
}

.btn-xl {
  height: 56px;
  padding: 0 32px;
  font-size: var(--text-xl);
}

.btn-icon {
  width: 40px;
  height: 40px;
  padding: 0;
}
```

## Do's and Don'ts

### Do
- Use primary buttons for the main action on a page
- Limit primary buttons to one per section
- Use descriptive button text that clearly communicates action
- Provide aria-label for icon-only buttons
- Use loading state for async actions
- Disable buttons when the action is not available

### Don't
- Don't use multiple primary buttons in the same area
- Don't use destructive variant for non-destructive actions
- Don't nest buttons inside each other
- Don't use generic text like "Click here" or "Submit" without context
- Don't remove focus rings
- Don't make touch targets smaller than 44x44px