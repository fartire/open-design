# Mobile screen review

## Product and platform

- The output is the requested app screen or connected app flow.
- Android follows Material 3; iOS follows HIG when requested.
- The app fills its viewport without a marketing hero, poster, comparison
  board, ornamental phone bezel, Dynamic Island, or presentation caption.
- Each requested screen exists and product navigation reaches it.
- No controls exist solely to switch between design mockups or platform demos.

## Interaction

- Buttons, links, forms, tabs, and primary actions work.
- Bottom sheets and dialogs have an accessible dismiss path.
- Back paths and selected navigation states are consistent.
- Empty, loading, validation, success, and error states are appropriate.
- The preview never claims a simulated device API actually ran.

## Layout and accessibility

- The root viewport and safe-area padding fit the mobile screen.
- Content scrolls without obscuring bottom navigation or primary actions.
- Essential controls work with the keyboard and larger text.
- Android touch targets are at least 48px in HTML; iOS targets are at least 44px.
- Controls have meaningful names, visible focus, and usable contrast.
- Labels accompany icons where the selected platform requires them.
- Reduced motion and the requested light/dark theme are respected.

## Visual consistency

- Semantic design-system tokens drive color, type, spacing, and component states.
- The result keeps the product's visual character without unrelated website
  or iPhone presentation conventions.
- Real assets support the UI; a flat mockup image does not replace it.
- The chosen platform's bundled evaluation checklist has been reviewed.
