# HealthBudi Design System - Component Catalog

## Overview

This catalog contains all standardized UI components for HealthBudi applications. Each component follows a consistent design language and accessibility guidelines.

## Components

### Interactive

| Component | Description | Document |
|-----------|-------------|----------|
| **Button** | Primary interaction element for actions | [Button.md](./Button.md) |
| **Input** | Text input for forms and search | [Input.md](./Input.md) |
| **Checkbox** | Multiple selection controls | [Checkbox.md](./Checkbox.md) |
| **Radio** | Single selection controls | [Checkbox.md](./Checkbox.md#radio) |
| **Select** | Dropdown selection for multiple options | [Select.md](./Select.md) |
| **Tabs** | Content organization with tabbed navigation | [Tabs.md](./Tabs.md#tabs) |

### Feedback

| Component | Description | Document |
|-----------|-------------|----------|
| **Toast** | Brief, temporary notifications | [Toast.md](./Toast.md) |
| **Modal** | Dialog overlays for focused tasks | [Modal.md](./Modal.md) |
| **Badge** | Compact labels for status and categories | [Badge.md](./Badge.md#badge) |
| **Avatar** | User profile images and initials | [Badge.md](./Badge.md#avatar) |

### Layout

| Component | Description | Document |
|-----------|-------------|----------|
| **Card** | Container for grouped content | [Card.md](./Card.md) |
| **Table** | Data organization in rows/columns | [Tabs.md](./Tabs.md#table) |
| **Pagination** | Multi-page navigation | [Tabs.md](./Tabs.md#pagination) |

## Implementation Status

| Component | Specs | Tokens | Accessibility |
|-----------|-------|--------|---------------|
| Button | ✅ Complete | 🚧 Pending | ✅ Complete |
| Input | ✅ Complete | 🚧 Pending | ✅ Complete |
| Checkbox | ✅ Complete | 🚧 Pending | ✅ Complete |
| Radio | ✅ Complete | 🚧 Pending | ✅ Complete |
| Select | ✅ Complete | 🚧 Pending | ✅ Complete |
| Modal | ✅ Complete | 🚧 Pending | ✅ Complete |
| Toast | ✅ Complete | 🚧 Pending | ✅ Complete |
| Card | ✅ Complete | 🚧 Pending | ✅ Complete |
| Badge | ✅ Complete | 🚧 Pending | ✅ Complete |
| Avatar | ✅ Complete | 🚧 Pending | ✅ Complete |
| Tabs | ✅ Complete | 🚧 Pending | ✅ Complete |
| Table | ✅ Complete | 🚧 Pending | ✅ Complete |
| Pagination | ✅ Complete | 🚧 Pending | ✅ Complete |

## Design Principles

1. **Accessibility First**
   - All components meet WCAG 2.1 AA standards
   - Keyboard navigable by default
   - Screen reader friendly

2. **Token-Based**
   - All styling references design tokens
   - No hardcoded values
   - Single source of truth

3. **Composable**
   - Small, focused primitives
   - Combine for complex patterns
   - Predictable composition

4. **Consistent**
   - Same patterns across all components
   - Predictable API surface
   - Familiar interactions

5. **Flexible**
   - Supports multiple variants
   - Extensible through props
   - Style override capability

## Contributing

When adding new components, ensure:

1. **Documentation** in `/components/[Component].md`
2. **Tokens** using values from `/tokens/`
3. **Accessibility** section with ARIA requirements
4. **TypeScript** props interface
5. **Tailwind** CSS classes
6. **Do's and Don'ts** usage guidelines