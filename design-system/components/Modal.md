# Modal / Dialog

## Overview

Modals display content that requires user attention or interaction, appearing above the main content and blocking interaction with the background until closed.

## Variants

### Default Modal
Centered modal with standard overlay.

```tsx
<Modal open={isOpen} onClose={handleClose}>
  <ModalHeader>Title</ModalHeader>
  <ModalBody>Content here</ModalBody>
  <ModalFooter>
    <Button variant="outline" onClick={handleClose}>Cancel</Button>
    <Button onClick={handleConfirm}>Confirm</Button>
  </ModalFooter>
</Modal>
```

### Slide-over
Slides in from the side (drawer).

```tsx
<Modal variant="slideover" side="right">
  ...
</Modal>
```

### Sheet (Bottom)
Slides up from the bottom (mobile).

```tsx
<Modal variant="sheet">
  ...
</Modal>
```

### AlertDialog
For critical confirmations.

```tsx
<AlertDialog open={isOpen}>
  <AlertDialogDescription>
    Are you sure you want to delete this?
  </AlertDialogDescription>
  <AlertDialogActions>
    <Button variant="outline">Cancel</Button>
    <Button variant="destructive">Delete</Button>
  </AlertDialogActions>
</AlertDialog>
```

## Sizes

### sm
```tsx
<Modal size="sm">...</Modal>
```
- Width: 384px (max-w-sm)
- Max height: 85vh

### default
```tsx
<Modal size="default">...</Modal>
```
- Width: 512px (max-w-md)
- Max height: 85vh

### lg
```tsx
<Modal size="lg">...</Modal>
```
- Width: 640px (max-w-lg)
- Max height: 85vh

### xl
```tsx
<Modal size="xl">...</Modal>
```
- Width: 768px (max-w-xl)
- Max height: 85vh### full
```tsx
<Modal size="full">...</Modal>
```
- Width: 100vw
- Height: 100vh

## States

### Closed
- Modal not visible
- Scroll enabled on body

### Open
- Modal visible
- Body scroll locked
- Focus trapped inside modal- Overlay visible

### Closing
- Animation triggered
- Click outside ignored

## Animation

### Default Modal
- Enter: backdrop fade (150ms), modal slide up (200ms)
- Exit: backdrop fade (100ms), modal slide down (150ms)
- Easing: ease-out for enter, ease-in for exit

### Slide-over
- Enter: slide from right (300ms ease-out)
- Exit: slide to right (200ms ease-in)

### Sheet
- Enter: slide from bottom (300ms ease-out)
- Exit: slide to bottom (150ms ease-in)

## Features

### Close Button
```tsx
<Modal showCloseButton onClose={...}>
```
- Position: top-right corner
- Icon: X symbol
- Padding: 12px
- Hover: neutral background

### Backdrop Click Close
```tsx
<Modal closeOnBackdropClick onClose={...}>
```
- Enabled by default
- Clicking dark overlay closes modal

### Escape Key Close
```tsx
<Modal closeOnEscape onClose={...}>
```
- Enabled by default
- Pressing Escape closes modal

### Scrollable Content
```tsx
<Modal>
  <ModalBody scrollable>
    Long content...
  </ModalBody>
</Modal>
```
- Independent scroll within body- Sticky header/footer

### Sticky Header/Footer
- Header stays visible on scroll
- Footer stays visible at bottom

## Accessibility

### Requirements
- Focus trap: Tab cycles through modal elements only
- Initial focus: First focusable element or close button- Escape key closes modal
- ARIA: role="dialog", aria-modal="true"
- ARIA: aria-labelledby points to title
- Screen reader: Announces modal title and role

### Focus Management
```tsx
// On open
focus(firstFocusableElement || closeButton)
// On close
triggerElement.focus() // Return focus to trigger
```

## Accessibility

```tsx
<div
  role="dialog"
  aria-modal="true"
  aria-labelledby="modal-title"
>
  <h2 id="modal-title">Modal Title</h2>
</div>
```

## Code Implementation

### TypeScript Props
```tsx
interface ModalProps {
  open: boolean;
  onClose?: () => void;
  variant?: 'default' | 'slideover' | 'sheet';
  size?: 'sm' | 'default' | 'lg' | 'xl' | 'full';
  showCloseButton?: boolean;
  closeOnBackdropClick?: boolean;
  closeOnEscape?: boolean;
  initialFocus?: React.RefObject<HTMLElement>;children: React.ReactNode;}

interface ModalBodyProps {
  scrollable?: boolean;
  children: React.ReactNode;
}

interface ModalFooterProps {
  children: React.ReactNode;
  className?: string;
}
```

### Tailwind CSS Classes
```css
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  z-index: 40;
  animation: fadeIn;
}

.modal-container {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: var(--color-background);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-xl);
  z-index: 50;
  animation: slideUp;
}

.modal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--space-6);
  border-bottom: 1px solid var(--color-border);
}

.modal-body {
  padding: var(--space-6);
  overflow-y: auto;max-height: 60vh;
}

.modal-footer {
  display: flex;
  justify-content: flex-end;
  gap: var(--space-3);
  padding: var(--space-4) var(--space-6);
  border-top: 1px solid var(--color-border);
}@keyframes slideUp {
  from {
    opacity: 0;
    transform: translate(-50%, -40%);
  }
  to {
    opacity: 1;
    transform: translate(-50%, -50%);
  }
}
```

## Do's and Don'ts

### Do- Use modals for focused tasks
- Keep modal content concise
- Provide clear close actions
- Make primary action clear- Use backdrop blur subtly

### Don't
- Don't nest modals (use flows)
- Don't make modals too complex- Don't hide essential information- Don't auto-close without action