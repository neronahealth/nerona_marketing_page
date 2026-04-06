# Select / Dropdown

## Overview

Select inputs allow users to choose one option from a dropdown list. They are useful when there are more than a few options and space is limited.

## Variants

### Default
Standard select with border.

```tsx
<Select placeholder="Select an option">
  <option value="1">Option 1</option>
  <option value="2">Option 2</option>
</Select>
```

### Filled
Grey background select that transforms to bordered on focus.

```tsx
<Select variant="filled" placeholder="Select an option">
  <option value="1">Option 1</option>
</Select>
```

### Flush
No border, underline style only.

```tsx
<Select variant="flush" placeholder="Select an option">
  <option value="1">Option 1</option>
</Select>
```

## Sizes

### sm (Small)
```tsx
<Select size="sm">...</Select>
```
- Height: 32px
- Font: 14px
- Padding: 8px 32px 8px 12px

### default (Medium)
```tsx
<Select size="default">...</Select>
```
- Height: 40px
- Font: 16px
- Padding: 8px 36px 8px 16px

### lg (Large)
```tsx
<Select size="lg">...</Select>
```
- Height: 48px
- Font: 18px
- Padding: 10px 40px 10px 20px

## States

### Default
- Border: 1px solid neutral.300
- Background: white / neutral.900
- Icon: chevron-down

### Open
- Border: primary.500
- Icon: rotated chevron-up
- Dropdown visible

### Selected
- Border: neutral.300
- Background: white
- Value visible
- Checkmark on selected item

### Hover
- Border: neutral.400
- Background: neutral.50 (light) / neutral.800 (dark)

### Focus
- Border: primary.500
- Ring: 2px primary

### Disabled
- Opacity: 0.5
- Cursor: not-allowed
- No interaction

### Error
- Border: error.500
- Error message below
- Focus: error ring

## Features

### Searchable (Combobox)
```tsx
<Select searchable placeholder="Search...">
  <option>Apple</option>
  <option>Banana</option>
</Select>
```
- Input to filter options
- No results state
- Keyboard navigation

### Multi-Select
```tsx
<Select multiple placeholder="Select items...">
  <option value="1">Item 1</option>
  <option value="2">Item 2</option>
</Select>
```
- Checkbox for each option
- Selected items show as tags
- Clear all button

### Grouping
```tsx
<Select>
  <optgroup label="Group 1">
    <option>Option 1.1</option>
    <option>Option 1.2</option>
  </optgroup>
  <optgroup label="Group 2">
    <option>Option 2.1</option>
  </optgroup>
</Select>
```

### Icons
```tsx
<Select icon={<GlobeIcon />}>
  <option value="en">English</option>
</Select>
```

### Custom Display
```tsx
<Select>
  <option value="us">
    <span>🇺🇸</span> United States
  </option>
</Select>
```

## Options

### Basic Option
```tsx
<option value="value">Label</option>
```

### Option with Description
```tsx
<Option value="pro" description="Best for teams">
  Pro Plan
</Option>
```

### Option with Icon
```tsx
<Option value="us" icon={<FlagIcon />}>
  United States
</Option>
```

### Disabled Option
```tsx
<option disabled value="unavailable">
  Coming Soon
</option>
```

## Dropdown

### Animation
- Enter: fade in, slide down (150ms ease-out)
- Exit: fade out, slide up (100ms ease-in)

### Position
- Default: below trigger
- Flip: above trigger if no space below
- Left/Right: align based on available space

### Scrolling
- Max height: 320px
- Scrollable with custom scrollbar
- Sticky group headers

## Accessibility

### Requirements
- Keyboard: Arrow keys to navigate, Enter to select, Escape to close
- Screen reader: Announces options count
- Labels: Must be associated with input
- Focus: Maintains focus on trigger after selection

### ARIA Implementation
```tsx
<div role="combobox" aria-expanded={isOpen} aria-haspopup="listbox">
  <button aria-labelledby="select-label">
    {value}
  </button>
  <ul role="listbox" aria-label="Options">
    <li role="option" aria-selected={isSelected}>Option 1</li>
  </ul>
</div>
```

## Code Implementation

### TypeScript Props
```tsx
interface SelectProps {
  variant?: 'default' | 'filled' | 'flush';
  size?: 'sm' | 'default' | 'lg';
  placeholder?: string;
  value?: string | string[];
  defaultValue?: string | string[];
  disabled?: boolean;
  searchable?: boolean;
  multiple?: boolean;
  error?: string;
  label?: string;
  helperText?: string;
  onChange?: (value: string | string[]) => void;
  className?: string;
  children: React.ReactNode;
}
```

### Tailwind CSS Classes
```css
.select-trigger {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: var(--radius-lg);
  background: var(--color-background);
  border: 1px solid var(--color-border);
  cursor: pointer;
}

.select-dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  margin-top: 4px;
  background: var(--color-background);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-lg);
  overflow: hidden;
  z-index: 50;
  animation: slideDown;
}

.select-option {
  padding: 8px 12px;
  cursor: pointer;
}

.select-option:hover {
  background: var(--color-neutral-muted);
}

.select-option-selected {
  background: var(--color-primary-50);
}
```

## Do's and Don'ts

### Do
- Use clear, concise option labels
- Group related options
- Use searchable for 10+ options
- Show selected state clearly

### Don't
- Don't use more than 100 options
- Don't nest selects inside options
- Don't hide important options