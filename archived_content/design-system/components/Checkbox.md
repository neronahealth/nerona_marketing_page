# Checkbox

## Overview

Checkboxes allow users to select one or more options from a set, or to toggle an option on or off. Checkboxes are independent - each checkbox operates individually.

## Variants

### Default
Standard checkbox for most use cases.

```tsx
<Checkbox>Accept terms and conditions</Checkbox>
```

### Card
Checkbox styled as a card for better visual prominence.

```tsx
<Checkbox variant="card">Remember me</Checkbox>
```

### Button
Checkbox styled as a toggle button for switches.

```tsx
<Checkbox variant="button">Toggle option</Checkbox>
```

## Sizes

### sm (Small)
```tsx
<Checkbox size="sm">Small checkbox</Checkbox>
```
- Checkbox size: 16px
- Text size: 14px (text-sm)

### default (Medium)
```tsx
<Checkbox size="default">Default checkbox</Checkbox>
```
- Checkbox size: 20px
- Text size: 16px (text-base)

### lg (Large)
```tsx
<Checkbox size="lg">Large checkbox</Checkbox>
```
- Checkbox size: 24px
- Text size: 18px (text-lg)

## States

### Unchecked
- Border: 2px solid neutral.400
- Background: transparent
- Check icon: hidden

### Checked
- Border: none
- Background: primary.500
- Check icon: visible, white color
- Animation: scale(0.8) → scale(1) with spring easing

### Indeterminate
- Border: none
- Background: primary.500
- Minus icon: visible, white color
- Used for parent checkboxes with mixed children

### Hover (unchecked)
- Border color: primary.400
- Background: primary.50
- Transition: 150ms ease

### Hover (checked)
- Background: primary.600
- Transition: 150ms ease

### Focus
- Ring: 2px primary with 2px offset
- Visible on keyboard focus only

### Disabled
- Opacity: 0.5
- Cursor: not-allowed
- No hover state

## Layout

### Default (Label Right)
```tsx
<Checkbox>Option label</Checkbox>
```

### Label Left
```tsx
<Checkbox labelPosition="left">Option label</Checkbox>
```

### No Label
```tsx
<Checkbox aria-label="Checkbox label" />
```

## Checkbox Group
```tsx
<CheckboxGroup defaultValue={['apple', 'orange']}>
  <Checkbox value="apple">Apple</Checkbox>
  <Checkbox value="banana">Banana</Checkbox>
  <Checkbox value="orange">Orange</Checkbox>
</CheckboxGroup>
```

### Features
- Exclusive selection within group (can have multiple)
- onChange returns selected values as array
- Disabled state applied to entire group
- Orientation: horizontal / vertical

## Accessibility

### Requirements
- Labels must be properly associated
- Checkboxes must be keyboard usable (Space to toggle)
- Focus must be visible
- State must be communicated to screen readers
- Touch targets minimum 44x44px

### ARIA Implementation
```tsx
<div className="checkbox-wrapper">
  <input
    type="checkbox"
    id="checkbox-1"
    aria-describedby="checkbox-1-description"
    checked={checked}
    onChange={handleChange}
  />
  <label htmlFor="checkbox-1">Accept terms</label>
</div>
```

## Code Implementation

### TypeScript Props
```tsx
interface CheckboxProps {
  variant?: 'default' | 'card' | 'button';
  size?: 'sm' | 'default' | 'lg';
  checked?: boolean;
  defaultChecked?: boolean;
  indeterminate?: boolean;
  disabled?: boolean;
  required?: boolean;
  value?: string;
  label?: string;
  labelPosition?: 'left' | 'right';
  onChange?: (checked: boolean) => void;
  className?: string;
}
```

### Tailwind CSS Classes
```css
.checkbox {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
}

.checkbox-box {
  width: 20px;
  height: 20px;
  border: 2px solid var(--color-neutral-400);
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 150ms ease;
}

.checkbox-box:hover {
  border-color: var(--color-primary);
  background: var(--color-primary-50);
}

.checkbox:checked .checkbox-box {
  background: var(--color-primary);
  border-color: transparent;
}

.checkbox:focus-visible .checkbox-box {
  box-shadow: 0 0 0 2px var(--color-primary-ring);
}

.checkbox:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.checkbox-label {
  margin-left: 8px;
  font-size: var(--text-base);
  color: var(--color-foreground);
}
```

---

# Radio

## Overview

Radio buttons allow users to select exactly one option from a set. Radio buttons are mutually exclusive within a radio group.

## Variants

### Default
```tsx
<Radio value="option1">Option 1</Radio>
```

### Card
```tsx
<Radio variant="card" value="option2">
  <div>
    <strong>Option 2</strong>
    <span>Description text</span>
  </div>
</Radio>
```

## Sizes

### sm (Small)
- Radio size: 16px
- Text size: 14px

### default (Medium)
- Radio size: 20px
- Text size: 16px

### lg (Large)
- Radio size: 24px
- Text size: 18px

## States

### Unselected
- Outer circle: 2px solid neutral.400
- Inner dot: hidden

### Selected
- Outer circle: 2px solid primary.500
- Inner dot: primary.500, visible
- Animation: scale(0.8) → scale(1) spring

### Hover (unselected)
- Outer circle: primary.400
- Inner dot: hidden

### Hover (selected)
- Outer circle: primary.600
- Inner dot: primary.600

### Focus
- Ring: 2px primary with 2px offset

### Disabled
- Opacity: 0.5
- Cursor: not-allowed

## Radio Group
```tsx
<RadioGroup defaultValue="apple">
  <Radio value="apple">Apple</Radio>
  <Radio value="banana">Banana</Radio>
  <Radio value="orange">Orange</Radio>
</RadioGroup>
```
- Horizontal / vertical orientation
- onChange returns selected value
- Disabled state for entire group

## Accessibility

- Radio buttons must be in a group for screen readers
- Keyboard navigation: Tab to group, Arrow keys within
- State communicated via aria-checked
- Name provides context via aria-labelledby

## Code Implementation

### TypeScript Props
```tsx
interface RadioProps {
  variant?: 'default' | 'card';
  size?: 'sm' | 'default' | 'lg';
  checked?: boolean;
  disabled?: boolean;
  value: string;
  label?: string;
  onChange?: (value: string) => void;
}
```

### Tailwind CSS Classes
```css
.radio-group {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.radio {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
}

.radio-circle {
  width: 20px;
  height: 20px;
  border: 2px solid var(--color-neutral-400);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 150ms ease;
}

.radio-circle::after {
  content: '';
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--color-primary);
  transform: scale(0);
  transition: transform 150ms ease;
}

.radio:checked .radio-circle::after {
  transform: scale(1);
}
```

## Do's and Don'ts

### Do
- Use checkboxes for independent choices
- Use radios for mutually exclusive choices
- Group related options together
- Provide labels for all checkboxes/radios
- Use vertical layout for > 4 options

### Don't
- Don't use checkboxes when only one option is allowed
- Don't use radio buttons when user can select multiple
- Don't pre-select options unless necessary
- Don't hide labels