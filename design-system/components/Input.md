# Input

## Overview

Text inputs allow users to enter and edit text. They are used for forms, search, and anywhere a user needs to input text data in HealthBudi applications.

## Variants

### Default
Standard bordered input for most use cases.

```tsx
<Input placeholder="Enter your name" />
```

### Filled
Grey background input that transforms to bordered on focus.

```tsx
<Input variant="filled" placeholder="Enter your name" />
```

### Flush
No border or background, used for inline editing.

```tsx
<Input variant="flush" placeholder="Enter your name" />
```

## Sizes

### sm (Small)
```tsx
<Input size="sm" placeholder="Small input" />
```
- Height: 32px (h-8)
- Padding: 12px (px-3)
- Font size: 14px (text-sm)

### default (Medium)
```tsx
<Input size="default" placeholder="Default input" />
```
- Height: 40px (h-10)
- Padding: 16px (px-4)
- Font size: 16px (text-base)

### lg (Large)
```tsx
<Input size="lg" placeholder="Large input" />
```
- Height: 48px (h-12)
- Padding: 24px (px-6)
- Font size: 18px (text-lg)

## States

### Default
- Background: white (light) / subtle dark (dark)
- Border: 1px solid neutral.300
- Placeholder color: neutral.400
- Text color: foreground

### Focus
- Border color: primary.500
- Ring: 2px primary with 2px offset
- Background: unchanged
- Transition: 150ms ease

### Error
- Border color: error.500
- Icon: error icon on right
- Helper text: error message below
- Focus: error ring color

### Success
- Border color: success.500
- Icon: check icon on right
- Helper text: success message below

### Disabled
- Background: neutral.100 (light) / neutral.700 (dark)
- Text: neutral.500
- Cursor: not-allowed
- No focus ring

### ReadOnly
- Same visual as default
- No interaction
- Tab focusable

## Input Types

All HTML input types supported:
- text (default)
- email
- password
- search
- number
- tel
- url
- date
- datetime-local
- month
- time
- week

```tsx
<Input type="email" placeholder="email@example.com" />
<Input type="password" placeholder="Enter password" />
<Input type="number" placeholder="0" />
```

## Features

### Label
```tsx
<Input label="Email Address" placeholder="email@example.com" />
```
- Label above input
- Font: medium weight, body-sm size
- Margin-bottom: spacing-1

### Helper Text
```tsx
<Input helperText="We'll never share your email" />
```
- Position: below input
- Font: body-xs, neutral.500
- Margin-top: spacing-1

### Error Message
```tsx
<Input error="Please enter a valid email address" />
```
- Position: below input
- Font: body-xs, error.600
- Error icon before text

### Prefix Icon
```tsx
<Input prefixIcon={<SearchIcon />} placeholder="Search..." />
```
- Position: inside input, left side
- Color: neutral.400 by default, primary on focus
- Padding-left: increased to accommodate icon

### Suffix Icon
```tsx
<Input suffixIcon={<CalendarIcon />} placeholder="Date" />
```
- Position: inside input, right side
- Color: neutral.400 by default, primary on focus
- Padding-right: increased to accommodate icon

### Suffix Button
```tsx
<Input suffixButton={<Button size="sm">Submit</Button>} />
```
- Position: inside input border, right side
- Gap between input and button

### Clear Button
```tsx
<Input clearable placeholder="Type to search..." />
```
- Appears when input has value
- X icon on right (before suffix)
- Clears input on click
- Focus visible with ring

### Password Toggle
```tsx
<Input type="password" passwordToggle />
```
- Eye icon to show/hide password
- Replaces clear button
- Toggles between password and text type

### Counter
```tsx
<Input maxLength={100} showCounter placeholder="Enter bio" />
```
- Position: below input, right-aligned
- Format: "45 / 100"
- Color changes when near limit

## Validation

### Required
```tsx
<Input required label="Email" />
```
- Asterisk after label
- Prevents form submission when empty

### Pattern
```tsx
<Input pattern="[a-z]{3}" title="Three lowercase letters" />
```
- HTML5 pattern validation
- Title displays on invalid

### Min/Max Length
```tsx
<Input minLength={3} maxLength={50} />
```
- Enforces character limits
- Counter optional

## Accessibility

### Requirements
- Labels must be associated (aria-labelledby or wrapping label)
- Error messages must be announced (aria-describedby)
- Required fields indicated (aria-required)
- Invalid state communicated (aria-invalid)
- Disabled state accessible to screen readers (aria-disabled)

### ARIA Implementation
```tsx
<div className="input-wrapper">
  <label id="email-label">Email <span aria-hidden="true">*</span></label>
  <input
    id="email-input"
    aria-labelledby="email-label"
    aria-describedby="email-error"
    aria-required="true"
    aria-invalid={hasError}
    type="email"
  />
  <span id="email-error" role="alert">
    {errorMessage}
  </span>
</div>
```

## Code Implementation

### TypeScript Props
```tsx
interface InputProps {
  variant?: 'default' | 'filled' | 'flush';
  size?: 'sm' | 'default' | 'lg';
  type?: string;
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  label?: string;
  helperText?: string;
  error?: string;
  success?: string;
  prefixIcon?: React.ReactNode;
  suffixIcon?: React.ReactNode;
  suffixButton?: React.ReactNode;
  clearable?: boolean;
  passwordToggle?: boolean;
  maxLength?: number;
  showCounter?: boolean;
  required?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  className?: string;
}
```

### Tailwind CSS Classes
```css
/* Base */
.input {
  width: 100%;
  display: flex;
  align-items: center;
  border-radius: var(--radius-lg);
  transition: all 150ms ease;
}

/* Variants */
.input-default {
  background: var(--color-background);
  border: 1px solid var(--color-border);
}

.input-filled {
  background: var(--color-neutral-muted);
  border: 1px solid transparent;
}

.input-filled:focus {
  background: var(--color-background);
  border-color: var(--color-primary);
}

.input-flush {
  background: transparent;
  border: none;
  border-bottom: 1px solid var(--color-border);
  border-radius: 0;
  padding-left: 0;
  padding-right: 0;
}

/* Sizes */
.input-sm { height: 32px; }
.input-default { height: 40px; }
.input-lg { height: 48px; }

/* States */
.input:focus {
  border-color: var(--color-primary);
  box-shadow: 0 0 0 2px var(--color-primary-ring);
}

.input-error {
  border-color: var(--color-error);
}

.input-error:focus {
  box-shadow: 0 0 0 2px var(--color-error-ring);
}

.input-success {
  border-color: var(--color-success);
}

.input:disabled {
  background: var(--color-neutral-muted);
  color: var(--color-neutral-500);
  cursor: not-allowed;
}
```

## Do's and Don'ts

### Do
- Always provide labels for accessibility
- Use appropriate input types (email, number, etc.)
- Provide clear error messages
- Use helper text for complex inputs
- Show validation feedback in real-time when appropriate
- Use password toggle for password fields

### Don't
- Don't use placeholder as label
- Don't hide error messages in tooltips
- Don't use input for static text display (use <p> instead)
- Don't make required fields without indicators
- Don't use generic error messages
- Don't auto-focus on page load