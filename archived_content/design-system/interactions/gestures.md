# Gestures

## Overview

Gestures enable touch-based interactions on mobile and tablet devices. HealthBudi supports common gestures for enhanced mobile UX.

## Touch Actions

### Tap
Single quick touch, equivalent to click.

```tsx
// React: handled by onClick for touch devices
<View onClick={handleTap} />

// Native: use Pressable
<Pressable onPress={handleTap}>
  <Text>Tap me</Text>
</Pressable>
```

**Guidelines:**
- Minimum touch target: 44x44px
- Tap area extends beyond visible element
- No delay between tap and response (< 100ms)
- Visual feedback on tap (scale down briefly)

### Long Press
Touch and hold for extended time (500ms+).

```tsx
// React
<View 
  onLongPress={handleLongPress}
  delayLongPress={500}
/>

// Native
<Pressable
  onLongPress={handleLongPress}
  delayLongPress={500}
>
  <Text>Long press</Text>
</Pressable>
```

**Use cases:**
- Context menus
- Drag start on mobile
- Select mode initiation
- Delete/action confirmation

### Double Tap
Two quick successive taps.

```tsx
// React
let lastTap: number | null = null;
const handleDoubleTap = () => {
  const now = Date.now();
  if (lastTap && now - lastTap < 300) {
    handleDoubleTapAction();
  }
  lastTap = now;
};

// Native: use react-native-gesture-handler
<TapGestureHandler 
  numberOfTaps={2}
  onActivated={handleDoubleTap}
>
  <View>Double tap me</View>
</TapGestureHandler>
```

**Use cases:**
- Like/favorite actions (Instagram-style)
- Zoom toggle (maps, images)
- Edit actions

## Swipe Gestures

### Swipe Horizontal

```tsx
// React: use react-swipeable or hammer.js
import { useSwipeable } from 'react-swipeable';

const handlers = useSwipeable({
  onSwipedLeft: () => navigate('next'),
  onSwipedRight: () => navigate('previous'),
});

<View {...handlers}>Content</View>

// Native: use react-native-gesture-handler
<Swipeable
  renderLeftActions={renderLeftAction}
  renderRightActions={renderRightAction}
  onSwipeableWillOpen={handleSwipe}
>
  <View>Swipe me</View>
</Swipeable>
```

**Use cases:**
- Pager/carousel navigation
- List item actions (delete, archive)
- Tab switching
- Card browsing

**Guidelines:**
- Swipe threshold: 50-100px
- Velocity consideration: fast swipes should trigger
- Visual indicator: show swipe affordance
- Undo capability: allow reversing swipe action

### Swipe Vertical

```tsx
const handlers = useSwipeable({
  onSwipedUp: () => showMore(),
  onSwipedDown: () => hide(),
});
```

**Use cases:**
- Pull-to-refresh
- Bottom sheet open/close
- Vertical carousel

## Pull to Refresh

```tsx
// Native implementation
<ScrollView
  refreshControl={
    <RefreshControl
      refreshing={isRefreshing}
      onRefresh={onRefresh}
      colors={[primaryColor]}
    />
  }
>
  {/* Content */}
</ScrollView>

// Web: custom implementation
<View 
  onScroll={handleScroll}
  style={{ overscrollBehavior: 'contain' }}
>
  {isPulling && <RefreshIndicator />}
  {/* Content */}
</View>
```

**Guidelines:**
- Pull distance: 80-120px to trigger
- Visual indicator throughout pull
- Success animation on complete
- Disable when no content to refresh

## Pinch to Zoom

```tsx
// Native: use react-native-gesture-handler
<PinchGestureHandler onGestureEvent={handlePinch}>
  <Animated.View style={{ transform: [{ scale }] }}>
    <Image source={{ uri }} />
  </Animated.View>
</PinchGestureHandler>

// Web: use hammer.js or react-use-gesture
import { useGesture } from '@use-gesture/react';

useGesture({
  onPinch: ({ offset: [scale] }) => {
    // Handle pinch
  },
});
```

**Use cases:**
- Image zoom
- Map zoom
- PDF/document zoom

**Guidelines:**
- Scale range: 0.5x to 5x
- Snap to 1x on double tap
- Show zoom indicator at extremes
- Handle edge cases (small images)

## Drag and Drop

```tsx
// Native: drag handle on list items
<DraggableFlatList
  data={items}
  onDragEnd={({ data }) => setItems(data)}
  keyExtractor={(item) => item.id}
  renderItem={({ item, drag }) => (
    <Pressable onLongPress={drag}>
      <Text>{item.name}</Text>
    </Pressable>
  )}
/>
```

**Guidelines:**
- Long press to initiate drag (500ms)
- Visual feedback during drag (opacity, shadow)
- Drop zone highlighting
- Undo support

## Touch Target Sizes

| Action | Minimum Size | Recommended |
|--------|--------------|-------------|
| Button | 44x44px | 48x48px |
| Link (inline) | 44x44px hit area | 44x44px |
| Form input | 44px height | 48px height |
| Icon button | 44x44px | 48x48px |
| Chip/tag | 36px height | 44px height |

## Haptic Feedback (Mobile)

```tsx
// iOS/Android: trigger haptic
import * as Haptics from 'expo-haptics';

// Light tap (selection)
Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);

// Medium impact (successful action)
Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);

// Heavy impact (deletion, error)
Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);

// Success notification
Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);

// Error notification
Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
```

## Gesture Preferences

```tsx
// Check if device prefers reduced motion
const prefersReducedMotion = window.matchMedia(
  '(prefers-reduced-motion: reduce)'
).matches;

// Disable gesture animations if preferred
const animationDuration = prefersReducedMotion ? 0 : 200;
```

## Do's and Don'ts

### Do
- Use minimum 44x44px touch targets
- Provide haptic feedback on actions (mobile)
- Support undo for destructive swipe actions
- Show visual affordance for gestures (shadows, hints)
- Test on various screen sizes

### Don't
- Don't rely on gestures alone (provide alternatives)
- Don't use gestures for critical actions without alternatives
- Don't use simultaneous competing gestures
- Don't make users learn custom gestures
- Don't override system gestures without good reason