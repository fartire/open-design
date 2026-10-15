---
name: platform-design
description: |
  Complete bundled Android Material Design 3 and iOS Human Interface Guidelines for mobile product screens. Android is the default; use the iOS rules for iOS briefs. Covers native navigation, components, typography, accessibility, dark mode, and working screen flows.
triggers:
  - "platform design"
  - "cross platform design"
  - "material design"
  - "hig rules"
  - "wcag rules"
  - "android app"
  - "ios app"
  - "mobile app"
  - "ứng dụng di động"
od:
  mode: design-system
  category: design-systems
  upstream: "https://github.com/ehmo/platform-design-skills"
---

# Mobile Platform Design

This is a complete local bundle, not a catalogue link. The Android and iOS
guidelines below are installed alongside this file and must be consulted when
designing a mobile screen. Resolve paths against the skill root in the preamble.

## Choose the platform

1. Follow the current brief and the project's target platforms. Default to
   Android when a mobile brief does not identify a platform.
2. Android: read `references/android/rules/_sections.md`, then the relevant
   sections of `references/android/SKILL.md`. The concise platform checklist is
   `references/android/AGENTS.md`; version metadata is in
   `references/android/metadata.json`.
3. iOS: read `references/ios/rules/_sections.md`, then the relevant sections of
   `references/ios/SKILL.md`. The concise checklist is
   `references/ios/AGENTS.md`; version metadata is in
   `references/ios/metadata.json`.
4. Generate an iOS variant only when requested or selected as a project target.
   Keep the product and content consistent, but use each platform's own
   navigation, controls, typography, safe areas, and interaction patterns.
5. An explicit web/desktop brief keeps its web/desktop target. These mobile
   defaults do not turn a website into an Android screen.

## Apply the guidelines to the requested deliverable

For an OpenDesign prototype, implement real interactive screens in HTML/CSS/JS.
Translate the platform guidance into accessible semantic controls and appropriate
mobile visual behavior. The Kotlin/Swift examples are references; do not replace
the requested prototype with native source code unless the user asks for it.

For native implementation requests, use the requested framework and the bundled
Compose/XML or SwiftUI/UIKit examples. Do not claim device APIs, permissions,
biometrics, payments, or haptics work merely because an HTML preview simulates them.

## Screen presentation

- Render the app itself directly in the viewport. Account for safe-area insets,
  keyboard space, text scaling, and a usable scrolling region.
- No marketing hero, explanatory sidebar, poster, comparison board, hardware
  bezel, Dynamic Island, or ornamental phone shell around the product UI unless
  explicitly requested. Any host-provided device preview stays outside the app.
- Android uses Material 3 roles and Android navigation/back behavior. Avoid
  copying iOS-only chrome into Android. Provide touch targets of at least 48px
  in an HTML prototype; use the corresponding platform units in native code.
- iOS uses HIG navigation and semantic colors, with touch targets of at least
  44px in an HTML prototype. Honor dark mode and reduced-motion preferences.
- Preserve the project's design-system tokens and intentional brand character.
  Use platform conventions for behavior without turning every app into the same
  generic dashboard.
- Deliver each requested screen separately and connect screens through working
  product navigation. Primary actions, forms, sheets, empty/error/loading states,
  and selected states must behave; an image of an app is not an app prototype.

## Review

Read the relevant upstream evaluation checklist before finishing. Verify the
result at the project's mobile viewport and at enlarged text sizes. Check real
controls, meaningful labels, visible focus, contrast, keyboard access, scrolling,
back navigation, and the requested light/dark theme.

## Attribution

Upstream: https://github.com/ehmo/platform-design-skills, MIT.
The vendored Android/iOS files are unmodified; their pinned revision is recorded
in `references/source.json`, and their license is in `references/LICENSE`.
