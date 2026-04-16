# Card

## Overview

Cards group related content and actions in a single container. They provide structure and visual hierarchy to page content.

## Variants

### Default
Standard card with border.

```tsx
<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card description</CardDescription>
  </CardHeader>
  <CardContent>Content here</CardContent>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>
```

### Elevated
Card with shadow for emphasis.

```tsx
<Card variant="elevated">
  ...
</Card>
```

### Outlined
Card with only border, no background fill.

```tsx
<Card variant="outlined">
  ...
</Card>
```

### Ghost
No border, minimal styling.

```tsx
<Card variant="ghost">
  ...
</Card>
```

### Interactive
Card with hover effect for clickable actions.

```tsx
<Card interactive onClick={handleClick}>
  ...
</Card>
```

## Sizes

### sm
```tsx
<Card size="sm">...</Card>
```
- Padding: 16px (p-4)
- Border radius: 12px (rounded-xl)

### default
```tsx
<Card size="default">...</Card>
```
- Padding: 24px (p-6)
- Border radius: 16px (rounded-2xl)

### lg
```tsx
<Card size="lg">...</Card>
```
- Padding: 32px (p-8)
- Border radius: 20px (rounded-2xl)

## States

### Default
- Background: white / neutral.900
- Border: 1px solid neutral.200
- Shadow: none

### Hover (interactive)
- Transform: translateY(-2px)
- Shadow: shadow-lg
- Cursor: pointer
- Transition: 200ms ease

### Focus (interactive)
- Ring: 2px primary
- Ring offset: 2px

### Active (interactive)
- Transform: none
- Shadow: shadow-md

### Selected
- Border: primary.500
- Background: primary.50

## Features

### Header
```tsx
<CardHeader>
  <CardTitle>Title</CardTitle>
  <CardDescription>Description text</CardDescription>
</CardHeader>
```
- Padding inherited from card size
- Title: heading-lg font
- Description: body-sm, neutral.500

### Content
```tsx
<CardContent>Content</CardContent>
```
- Main content area
- Scrollable if overflow

### Footer
```tsx
<CardFooter justify="between">
  <Button variant="ghost">Cancel</Button>
  <Button>Save</Button>
</CardFooter>
```
- justify: start | end | center | between

### Media
```tsx
<CardMedia>
  <img src="..." alt="..." />
</CardMedia>
```
- Full width image at top
- Aspect ratio customizable

### Actions
```tsx
<CardActions position="top-end">
  <Button variant="ghost" size="icon"><MoreIcon /></Button>
</CardActions>
```
- Position: top-start | top-end | bottom-start | bottom-end

## Code Implementation

### TypeScript Props
```tsx
interface CardProps {
  variant?: 'default' | 'elevated' | 'outlined' | 'ghost';
  size?: 'sm' | 'default' | 'lg';
  interactive?: boolean;
  selected?: boolean;
  onClick?: () => void;
  className?: string;
  children: React.ReactNode;
}
```

### Tailwind CSS Classes
```css
.card {
  display: flex;
  flex-direction: column;
  background: var(--color-background);
  border-radius: var(--radius-xl);
  padding: var(--space-6);
}

.card-default {
  border: 1px solid var(--color-border);
}

.card-elevated {
  box-shadow: var(--shadow-lg);
}

.card-outlined {
  border: 1px solid var(--color-border);
  background: transparent;
}

.card-ghost {
  background: transparent;
}

.card-interactive:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}

.card-header {
  margin-bottom: var(--space-4);
}

.card-title {
  font-size: var(--text-lg);
  font-weight: var(--font-semibold);
}

.card-description {
  color: var(--color-neutral-500);
}

.card-content {
  flex: 1;
}

.card-footer {
  display: flex;
  gap: var(--space-3);
  margin-top: var(--space-4);
}
```