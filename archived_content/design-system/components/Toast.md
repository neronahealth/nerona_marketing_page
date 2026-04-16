# Toast / Notification

## Overview

Toasts provide brief, non-critical feedback about an operation. They appear temporarily and disappear automatically after a timeout.

## Variants

### Default
Neutral information notification.

```tsx
toast.info('File saved successfully')
```

### Success
Positive feedback notification.

```tsx
toast.success('Account created successfully')
```

### Warning
Cautionary notification.

```tsx
toast.warning('Your session will expire in 5 minutes')
```

### Error
Error notification with optional action.

```tsx
toast.error('Failed to save changes', {
  action: { label: 'Retry', onClick: handleRetry }
})
```

### Loading
Shows loading spinner.

```tsx
const id = toast.loading('Uploading file...')
toast.success('File uploaded', { id })
```

## Positions

### Top Center (default)
```tsx
<Toaster position="top-center" />
```

### Top Right
```tsx
<Toaster position="top-right" />
```

### Top Left
```tsx
<Toaster position="top-left" />
```

### Bottom Center
```tsx
<Toaster position="bottom-center" />
```

### Bottom Right
```tsx
<Toaster position="bottom-right" />
```

### Bottom Left
```tsx
<Toaster position="bottom-left" />
```

## Features

### Auto-dismiss
Toasts automatically dismiss after a configurable duration.

```tsx
toast.success('Saved', { duration: 3000 }) // 3 seconds
toast.success('Saved', { duration: Infinity }) // Never auto-dismiss
```

### Persistent
Toasts that require user action to dismiss.

```tsx
toast.error('Connection lost', {
  duration: Infinity,
  action: { label: 'Reconnect', onClick: reconnect }
})
```

### Action Button
Primary action button within toast.

```tsx
toast.info('New update available', {
  action: {
    label: 'Update',
    onClick: handleUpdate
  }
})
```

### Dismiss Button
Manual dismiss button (X icon).

```tsx
toast.error('Error', { dismissible: true })
```

### Undo Action
Common pattern for destructive actions.

```tsx
toast.success('Item deleted', {
  action: {
    label: 'Undo',
    onClick: handleUndo
  }
})
```

### Rich Content
Support for React components as content.

```tsx
toast.custom(<CustomToastContent message="Complex content" />)
```

## Stacking

Toasts stack vertically with spacing. New toasts appear at the top (or bottom) depending on position.

- Max visible: 3-5
- Older toasts pushed down/up
- Dismissed toasts animate out

## Animation

### Enter
- Slide in from top/bottom (150ms ease-out)
- Fade in simultaneously

### Exit
- Slide out (100ms ease-in)
- Fade out simultaneously

## Accessibility

### Requirements
- Announced by screen readers (aria-live="polite")
- Focus not moved to toast (non-blocking)
- Actionable via keyboard (Tab to action)
- Close button accessible

### ARIA Implementation
```tsx
<div
  role="alert"
  aria-live="polite"
  aria-atomic="true"
>
  {message}
</div>
```

## Code Implementation

### TypeScript Props
```tsx
interface ToastOptions {
  duration?: number;
  dismissible?: boolean;
  action?: {
    label: string;
    onClick: () => void;
  };
  icon?: React.ReactNode;
}

interface ToastProps {
  id: string;
  type: 'info' | 'success' | 'warning' | 'error' | 'loading';
  message: string;
  duration?: number;
  dismissible?: boolean;
  action?: ToastAction;
}
```

### Tailwind CSS Classes
```css
.toast {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-4);
  background: var(--color-background);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-lg);
  max-width: 420px;
}

.toast-success {
  border-left: 4px solid var(--color-success);
}

.toast-error {
  border-left: 4px solid var(--color-error);
}

.toast-warning {
  border-left: 4px solid var(--color-warning);
}

.toast-info {
  border-left: 4px solid var(--color-info);
}
```

## Do's and Don'ts

### Do
- Use for non-critical feedback
- Keep messages concise
- Provide actions when relevant
- Auto-dismiss after appropriate time

### Don't
- Don't use for critical errors (use modal)
- Don't stack more than 3-5
- Don't auto-dismiss actionable toasts
- Don't include complex content