# Accessibility Guidelines

## Overview

HealthBudi is committed to meeting **WCAG 2.1 Level AA** accessibility standards. This document outlines requirements for all components and interactions.

## WCAG 2.1 Level AA Requirements

### Perceivable

#### 1.1 Text Alternatives
All non-text content must have text alternatives.

| Element | Requirement | Implementation |
|---------|-------------|----------------|
| Images | Alt text describing content | `<img alt="Doctor reviewing patient chart">` |
| Icons | Accessible name or aria-label | `<Icon aria-label="Settings">` |
| Decorative images | Empty alt (hidden from AT) | `<img alt="">` |
| Complex images | Long description | `aria-describedby="desc-id"` |
| Image buttons | Describe the action | `<img alt="Submit form">` |

#### 1.2 Time-based Media
Provide alternatives for time-based media.

| Media Type | Requirement |
|------------|-------------|
| Audio | Text transcript |
| Video | Captions + audio description |
| Animations | Pause, stop, hide mechanism |

#### 1.3 Adaptable
Content must be adaptable to different presentation modes.

| Requirement | Implementation |
|-------------|----------------|
| Semantic HTML | Use correct elements (`<button>`, not `<div>`) |
| Linear reading | Content makes sense without CSS |
| Form labels | Associate `<label>` with inputs |
| Data tables | Use `<th>` with scope |
| Lists | Use `<ul>`, `<ol>`, `<dl>` |

#### 1.4 Distinguishable
Make it easier to see and hear content.

| Requirement | Standard | HealthBudi Compliance |
|-------------|----------|------------------------|
| Color contrast (text) | 4.5:1 for normal, 3:1 for large | ✅ All tokens verified |
| Color contrast (UI) | 3:1 for graphical objects | ✅ All interactive elements |
| Resize text | 200% without loss | ✅ Relative units used |
| Text spacing | User can override | ✅ CSS allows override |
| Reflow | 320px width without scrolling | ✅ Responsive design |
| Non-text contrast | 3:1 for UI components | ✅ Buttons, inputs |
| Focus visible | Visible focus indicator | ✅ Ring on all focusable |
| Motion preference | Respect prefers-reduced-motion | ✅ @media query |

### Operable

#### 2.1 Keyboard Accessible
All functionality via keyboard.

| Requirement | Implementation |
|-------------|----------------|
| Tab navigation | All interactive elements in logical order |
| No keyboard trap | Users can navigate away from all components |
| Focus management | Focus returns to trigger on modal close |
| Skip links | Skip to main content, skip to navigation |

**Keybindings:**
| Key | Action |
|-----|--------|
| Tab | Move focus forward |
| Shift + Tab | Move focus backward |
| Enter | Activate buttons, links |
| Space | Activate buttons, toggle checkboxes |
| Arrow Up/Down | Navigate menus, select items |
| Arrow Left/Right | Navigate tabs, radio groups |
| Escape | Close modals, dropdowns |
| Home | First item in list |
| End | Last item in list |

#### 2.2 No Timing
Users have enough time.

| Scenario | Requirement |
|----------|-------------|
| Session timeout | Warning before timeout + extension option |
| Animations | Can pause, stop, hide |
| Moving content | Can pause (carousels, tickers) |

#### 2.3 Seizures and Physical Reactions
No content that causes seizures.

| Requirement | Implementation |
|-------------|----------------|
| Flashing | Max 3 flashes/second |
| Animation | Respect prefers-reduced-motion |

#### 2.4 Navigable
Provide ways to navigate.

| Requirement | Implementation |
|-------------|----------------|
| Page titles | Unique, descriptive titles |
| Heading structure | Correct hierarchy (h1-h6) |
| Multiple navigation | Header nav, footer nav, search |
| Link purpose | Descriptive link text |
| Focus order | Logical tab order |
| Focus visible | Visible focus indicator |
| Current location | Breadcrumbs, active states |

#### 2.5 Input Modalities
Multiple input methods.

| Requirement | Implementation |
|-------------|----------------|
| Touch targets | Minimum 44x44px |
| Gesture alternatives | Touch + click alternatives |
| Motion actuated | Alternatives for motion triggers |

### Understandable

#### 3.1 Readable
Make text readable and understandable.

| Requirement | Implementation |
|-------------|----------------|
| Language | `<html lang="en">` |
| Abbreviations | Define on first use |
| Reading level | Clear, simple language |

#### 3.2 Predictable
Make Web pages appear and operate predictably.

| Requirement | Implementation |
|-------------|----------------|
| On focus | No automatic context change |
| On input | No unexpected changes |
| Consistent navigation | Same pattern across pages |
| Consistent identification | Same names for same functions |

#### 3.3 Input Assistance
Help users avoid and correct mistakes.

| Requirement | Implementation |
|-------------|----------------|
| Error identification | Clear error messages |
| Labels | Labels on all inputs |
| Error suggestion | Offer correction suggestions |
| Error prevention | Important actions require confirmation |

### Robust

#### 4.1 Compatible
Compatible with current and future user agents.

| Requirement | Implementation |
|-------------|----------------|
| Parsing | Valid HTML |
| Name, role, value | Correct ARIA attributes |
| Status messages | Live regions for updates |

## Component Accessibility

### Buttons
```tsx
// Accessible button
<button 
  type="button"
  aria-label="Submit form"  // If icon-only
>
  Submit
</button>

// Icon button
<button 
  type="button"
  aria-label="Close dialog"
>
  <Icon name="x" aria-hidden="true" />
</button>

// Disabled button
<button 
  disabled
  aria-disabled="true"  // For screen readers
>
  Disabled
</button>
```

### Forms
```tsx
// Form with labels
<form>
  <label id="email-label" htmlFor="email">
    Email Address <span aria-hidden="true">*</span>
  </label>
  <input
    id="email"
    type="email"
    required
    aria-required="true"
    aria-describedby="email-hint email-error"
  />
  <span id="email-hint">We'll never share your email</span>
  {hasError && (
    <span id="email-error" role="alert">
      Please enter a valid email address
    </span>
  )}
</form>
```

### Modals
```tsx
// Accessible modal
<div
  role="dialog"
  aria-modal="true"
  aria-labelledby="modal-title"
  aria-describedby="modal-desc"
>
  <h2 id="modal-title">Modal Title</h2>
  <p id="modal-desc">Modal description</p>
  <div>{/* Content */}</div>
  <button onClick={onClose}>Close</button>
</div>
```

### Navigation
```tsx
// Accessible navigation
<nav aria-label="Main navigation">
  <ul>
    <li>
      <a href="/home" aria-current={isHome ? 'page' : undefined}>
        Home
      </a>
    </li>
    <li>
      <a href="/about">About</a>
    </li>
  </ul>
</nav>
```

### Tables
```tsx
// Accessible table
<table role="table">
  <caption className="sr-only">Patient Appointments</caption>
  <thead>
    <tr>
      <th scope="col">Date</th>
      <th scope="col">Doctor</th>
      <th scope="col">Status</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">2024-01-15</th>
      <td>Dr. Smith</td>
      <td>Confirmed</td>
    </tr>
  </tbody>
</table>
```

### Images
```tsx
// Informative image
<img 
  src="chart.png" 
  alt="Bar chart showing patient satisfaction at 85%" 
/>

// Decorative image
<img src="decoration.png" alt="" role="presentation" />

// Complex image
<figure>
  <img src="complex.png" alt="Monthly patient flow" aria-describedby="chart-desc" />
  <figcaption id="chart-desc">
    Detailed description of the chart...
  </figcaption>
</figure>
```

### Toast Notifications
```tsx
// Accessible toast
<div
  role="alert"
  aria-live="polite"
  aria-atomic="true"
>
  {message}
</div>

// Toast with action
<div
  role="alert"
  aria-live="polite"
>
  <span>Item deleted</span>
  <button onClick={handleUndo}>Undo</button>
</div>
```

### Tabs
```tsx
// Accessible tabs
<div role="tablist" aria-label="Settings">
  <button
    role="tab"
    aria-selected={isActive}
    aria-controls="panel-1"
    id="tab-1"
  >
    General
  </button>
</div>
<div
  role="tabpanel"
  id="panel-1"
  aria-labelledby="tab-1"
>
  {/* Content */}
</div>
```

## Testing Checklist

### Manual Testing
- [ ] Tab through entire page
- [ ] All interactive elements focusable
- [ ] Focus order makes sense
- [ ] Focus visible on all elements
- [ ] Screen reader reads page correctly
- [ ] Zoom to 200% without issues
- [ ] Zoom to 400% without horizontal scroll
- [ ] High contrast mode works
- [ ] prefers-reduced-motion works
- [ ] All images have alt text
- [ ] All forms have labels
- [ ] All errors are announced

### Automated Testing
```bash
# axe-core
npm run test:a11y

# Lighthouse
lighthouse https://healthbudi.com --only-categories=accessibility

# WAVE browser extension
# Check for errors, contrast issues
```

## Resources

- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/)
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [axe DevTools](https://www.deque.com/axe/)