# Badge

## Overview

Badges are small, compact labels used to categorize, indicate status, or count. They help users quickly identify information at a glance.

## Variants

### Default (Solid)
Solid background badge.

```tsx
<Badge variant="default">New</Badge>
```

### Secondary
Subdued background badge.

```tsx
<Badge variant="secondary">Draft</Badge>
```

### Outline
Bordered badge with no fill.

```tsx
<Badge variant="outline">Featured</Badge>
```

### Subtle
Light background with colored text.

```tsx
<Badge variant="subtle">Active</Badge>
```

### Ghost
Text only, no background or border.

```tsx
<Badge variant="ghost">Label</Badge>
```

## Semantic Variants

```tsx
<Badge semantic="success">Confirmed</Badge>
<Badge semantic="warning">Pending</Badge>
<Badge semantic="error">Failed</Badge>
<Badge semantic="info">Info</Badge>
```

## Sizes

### sm
```tsx
<Badge size="sm">Small</Badge>
```
- Padding: 2px 6px (px-1.5 py-0.5)
- Font size: 12px (text-xs)
- Border radius: 4px (rounded)

### default
```tsx
<Badge size="default">Default</Badge>
```
- Padding: 4px 10px (px-2.5 py-1)
- Font size: 14px (text-sm)
- Border radius: 6px (rounded-md)

### lg
```tsx
<Badge size="lg">Large</Badge>
```
- Padding: 6px 14px (px-3.5 py-1.5)
- Font size: 16px (text-base)
- Border radius: 8px (rounded-lg)

## Shapes

### Rounded Rect (default)
```tsx
<Badge shape="rect">Badge</Badge>
```

### Pill
```tsx
<Badge shape="pill">Badge</Badge>
```
- Border radius: 9999px (rounded-full)

### Circle
```tsx
<Badge shape="circle" count={5} />
```
- Perfect circle
- Used for counts/notification badges

## Icons

### Left Icon
```tsx
<Badge leftIcon={<CheckIcon />}>Completed</Badge>
```

### Right Icon
```tsx
<Badge rightIcon={<ChevronIcon />}>Menu</Badge>
```

### Icon Only
```tsx
<Badge shape="circle"><Icon /></Badge>
```

## Dismissible
```tsx
<Badge dismissible onDismiss={() => {}}>Tag</Badge>
```
- X button appears on hover
- Removes badge on click

## Code Implementation

### TypeScript Props
```tsx
interface BadgeProps {
  variant?: 'default' | 'secondary' | 'outline' | 'subtle' | 'ghost';
  semantic?: 'success' | 'warning' | 'error' | 'info';
  size?: 'sm' | 'default' | 'lg';
  shape?: 'rect' | 'pill' | 'circle';
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  dismissible?: boolean;
  onDismiss?: () => void;
  className?: string;
  children: React.ReactNode;
}
```

### Tailwind CSS Classes
```css
.badge {
  display: inline-flex;
  align-items: center;
  gap: var(--space-1);
  font-weight: var(--font-medium);
  white-space: nowrap;
}

.badge-default {
  background: var(--color-primary);
  color: var(--color-primary-foreground);
}

.badge-secondary {
  background: var(--color-neutral-200);
  color: var(--color-neutral-700);
}

.badge-outline {
  border: 1px solid var(--color-border);
  background: transparent;
}

.badge-subtle {
  background: var(--color-primary-50);
  color: var(--color-primary);
}

.badge-success {
  background: var(--color-success-50);
  color: var(--color-success);
}

.badge-warning {
  background: var(--color-warning-50);
  color: var(--color-warning);
}

.badge-error {
  background: var(--color-error-50);
  color: var(--color-error);
}
```

---

# Avatar

## Overview

Avatars display user profile images or initials. They represent users in comments, profiles, and user lists.

## Variants

### Image
```tsx
<Avatar image="path/to/image.jpg" alt="User name" />
```

### Initials
```tsx
<Avatar initials="JD" />
```

### Icon
```tsx
<Avatar icon={<UserIcon />} />
```

### Initials Fallback
```tsx
<Avatar name="John Doe" />
```
- Automatically generates initials from name

## Sizes

### xs
```tsx
<Avatar size="xs" />
```
- Width/Height: 24px (w-6 h-6)
- Font size: 10px

### sm
```tsx
<Avatar size="sm" />
```
- Width/Height: 32px (w-8 h-8)
- Font size: 12px

### default
```tsx
<Avatar size="default" />
```
- Width/Height: 40px (w-10 h-10)
- Font size: 14px

### lg
```tsx
<Avatar size="lg" />
```
- Width/Height: 48px (w-12 h-12)
- Font size: 16px

### xl
```tsx
<Avatar size="xl" />
```
- Width/Height: 64px (w-16 h-16)
- Font size: 18px

### 2xl
```tsx
<Avatar size="2xl" />
```
- Width/Height: 96px (w-24 h-24)
- Font size: 24px

## Shapes

### Circle (default)
```tsx
<Avatar shape="circle" />
```

### Square
```tsx
<Avatar shape="square" />
```

## Status Indicator
```tsx
<Avatar status="online" />
```
- green: Online status
- yellow: Away status
- red: Busy status
- grey: Offline status

## Avatar Group
```tsx
<AvatarGroup max={4}>
  <Avatar image="1.jpg" />
  <Avatar image="2.jpg" />
  <Avatar image="3.jpg" />
  <Avatar image="4.jpg" />
  <Avatar image="5.jpg" />
</AvatarGroup>
```

- Displays avatars stacked
- Shows "+N" for overflow

## Code Implementation

### TypeScript Props
```tsx
interface AvatarProps {
  image?: string;
  name?: string;
  initials?: string;
  icon?: React.ReactNode;
  alt?: string;
  size?: 'xs' | 'sm' | 'default' | 'lg' | 'xl' | '2xl';
  shape?: 'circle' | 'square';
  status?: 'online' | 'away' | 'busy' | 'offline';
  className?: string;
}