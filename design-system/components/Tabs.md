# Tabs

## Overview

Tabs organize content into separate views, allowing users to switch between different contexts while keeping navigation visible.

## Variants

### Default (Line)
Underlined tabs with the active tab showing an indicator.

```tsx
<Tabs defaultValue="overview">
  <TabsList>
    <TabsTrigger value="overview">Overview</TabsTrigger>
    <TabsTrigger value="details">Details</TabsTrigger>
  </TabsList>
  <TabsContent value="overview">Overview content</TabsContent>
  <TabsContent value="details">Details content</TabsContent>
</Tabs>
```

### Pills
Rounded pill-shaped tabs with active state background fill.

```tsx
<Tabs variant="pills" defaultValue="tab1">
  ...
</Tabs>
```

### Enclosed
Bordered tabs with active state enclosed.

```tsx
<Tabs variant="enclosed" defaultValue="tab1">
  ...
</Tabs>
```

## Sizes

### sm
- Tab height: 32px
- Font size: 14px
- Padding: 8px 12px

### default
- Tab height: 40px
- Font size: 16px
- Padding: 10px 16px

### lg
- Tab height: 48px
- Font size: 18px
- Padding: 12px 20px

## States

### Default
- Text: neutral.600
- Background: transparent

### Hover
- Text: neutral.900
- Background: neutral.100
- No indicator change

### Active
- Text: primary.600
- Background: primary.50
- Indicator: 2px underline in primary color

### Focus
- Ring: 2px primary
- Ring offset: 2px

### Disabled
- Text: neutral.400
- Cursor: not-allowed
- No hover/active state

## Features

### Icons
```tsx
<TabsTrigger value="overview">
  <Icon name="overview" />
  Overview
</TabsTrigger>
```

### Badge Counter
```tsx
<TabsTrigger value="notifications">
  Notifications
  <Badge count={5} />
</TabsTrigger>
```

### Controlled Tabs
```tsx
<Tabs value={activeTab} onValueChange={setActiveTab}>
  ...
</Tabs>
```

### Scrollable Tabs
```tsx
<Tabs scrollable>
  {/* Many tabs */}
</Tabs>
```

## Accessibility

- Tab key moves focus between tabs
- Arrow keys navigate within tab list (left/right for horizontal)
- Tab content receives focus when selected
- `role="tablist"`, `role="tab"`, `role="tabpanel"`
- `aria-selected` indicates active tab
- `aria-controls` links tab to panel
- `aria-labelledby` links panel to tab

## Code Implementation

### TypeScript Props
```tsx
interface TabsProps {
  variant?: 'default' | 'pills' | 'enclosed';
  size?: 'sm' | 'default' | 'lg';
  defaultValue?: string;
  value?: string;
  onValueChange?: (value: string) => void;
  scrollable?: boolean;
  children: React.ReactNode;
}

interface TabsTriggerProps {
  value: string;
  disabled?: boolean;
  icon?: React.ReactNode;
  badge?: number;
  children: React.ReactNode;
}
```

---

# Table

## Overview

Tables organize data into rows and columns, making complex information easy to scan and analyze.

## Variants

### Default
Standard table with borders between rows.

```tsx
<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Name</TableHead>
      <TableHead>Email</TableHead>
      <TableHead>Role</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>John Doe</TableCell>
      <TableCell>john@example.com</TableCell>
      <TableCell>Admin</TableCell>
    </TableRow>
  </TableBody>
</Table>
```

### Striped
Alternating row backgrounds.

```tsx
<Table variant="striped">...</Table>
```

### Simple
Minimal table with no borders.

```tsx
<Table variant="simple">...</Table>
```

### Borderless
No borders between cells.

```tsx
<Table variant="borderless">...</Table>
```

## Features

### Sorting
```tsx
<TableHeader>
  <TableHead sortable sortDirection="asc">Name</TableHead>
</TableHeader>
```
- Click to sort
- Icon indicates sort direction

### Selection
```tsx
<Table selectable onSelectionChange={handleSelection}>
  ...
</Table>
```
- Checkbox column for row selection
- Select all checkbox in header

### Pagination
```tsx
<Table paginated pageSize={10} onPageChange={handlePageChange}>
  ...
</Table>
```

### Sticky Header
```tsx
<Table stickyHeader>...</Table>
```

### Hover Rows
```tsx
<TableRow hover>...</TableRow>
```
- Highlights row on hover

## Sizes

### sm
- Cell padding: 8px 12px
- Font size: 14px

### default
- Cell padding: 12px 16px
- Font size: 16px

### lg
- Cell padding: 16px 24px
- Font size: 18px

## Accessibility

- Use `<th>` with `scope="col"` for header cells
- Use `<th>` with `scope="row"` for row headers
- Tables must have `<thead>` and `<tbody>`
- Provide `<caption>` for screen readers

## Code Implementation

### TypeScript Props
```tsx
interface TableProps {
  variant?: 'default' | 'striped' | 'simple' | 'borderless';
  size?: 'sm' | 'default' | 'lg';
  sortable?: boolean;
  selectable?: boolean;
  paginated?: boolean;
  pageSize?: number;
  stickyHeader?: boolean;
}
```

---

# Pagination

## Overview

Pagination allows users to navigate through multiple pages of content.

## Variants

### Default
Numbered pagination with prev/next.

```tsx
<Pagination
  currentPage={1}
  totalPages={10}
  onPageChange={handlePageChange}
/>
```

### Simple
Previous/Next buttons only.

```tsx
<Pagination variant="simple" currentPage={1} totalPages={10} />
```

### Compact
Current page / Total pages.

```tsx
<Pagination variant="compact" currentPage={1} totalPages={100} />
```

## States

### Default
- Background: transparent
- Text: neutral.600

### Hover
- Background: neutral.100

### Active
- Background: primary
- Text: white
- Ring: 2px primary

### Disabled (prev/next)
- Text: neutral.300
- Cursor: not-allowed
- No hover

### Ellipsis
- Shows "..." for skipped pages
- Only displayed when total pages > 7

## Sizes

### sm
- Button size: 32px
- Font size: 14px
- Gap: 4px

### default
- Button size: 40px
- Font size: 16px
- Gap: 8px

### lg
- Button size: 48px
- Font size: 18px
- Gap: 12px

## Features

### Page Numbers
```tsx
<Pagination showPageNumbers />
```

### Page Size Select
```tsx
<Pagination pageSizeOptions={[10, 25, 50, 100]} onPageSizeChange={handlePageSize} />
```

### Jump to Page
```tsx
<Pagination showJumpToPage />
```

### Total Count
```tsx
<Pagination showTotal count={500} />
```
Shows: "500 items"

## Accessibility

- Use `aria-label` for prev/next buttons
- `aria-current="page"` for active page
- Announce page changes to screen readers
- Keyboard: Arrow keys, Enter to select

## Code Implementation

### TypeScript Props
```tsx
interface PaginationProps {
  variant?: 'default' | 'simple' | 'compact';
  size?: 'sm' | 'default' | 'lg';
  currentPage: number;
  totalPages: number;
  onPageChange?: (page: number) => void;
  showPageNumbers?: boolean;
  showTotal?: boolean;
  count?: number;
  pageSizeOptions?: number[];
  onPageSizeChange?: (size: number) => void;
}
```

### Tailwind CSS Classes
```css
.pagination {
  display: flex;
  align-items: center;
  gap: var(--space-1);
}

.pagination-item {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-lg);
  font-weight: var(--font-medium);
}

.pagination-item:hover {
  background: var(--color-neutral-100);
}

.pagination-item-active {
  background: var(--color-primary);
  color: white;
}

.pagination-item-disabled {
  color: var(--color-neutral-300);
  cursor: not-allowed;
}
```