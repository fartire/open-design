---
name: mobile-app
description: |
  Interactive mobile product screens that fill the viewport. Defaults to Android Material 3, with iOS HIG variants when requested. Uses complete bundled platform-design references and a screen-only seed without phone shells.
triggers:
  - "mobile app"
  - "ios app"
  - "android app"
  - "phone screen"
  - "app ui"
  - "ứng dụng di động"
---

# Mobile App Screens

Build the app UI directly in the viewport. Android is the default platform;
produce an iOS version when the brief or project targets request it. A device
shell or presentation board is an explicit opt-in, never the default.

## Read before building

1. Read the composed **platform-design** skill. It carries complete local
   Material 3 and HIG references. Use the skill roots advertised in its preamble
   to read the chosen platform's index, guidelines, and evaluation checklist.
2. Read `assets/template.html`: a screen-only seed with safe-area handling,
   scrolling content, accessible controls, and bottom product navigation.
3. Read `references/layouts.md` for Feed, Detail, Onboarding, Profile, Checkout,
   and Focus patterns. Adapt the pattern to the actual brief and platform.
4. Read the project's design system and bind the seed's semantic tokens to it.

## Build the requested app

- Copy the screen-only seed and replace its sample content with the requested
  product. Keep the app edge-to-edge; do not add a marketing layout around it.
- Each screen serves one clear task. A requested flow gets all requested
  screens connected through working navigation, rather than one screen only
  or several phones on a presentation board.
- Match Android patterns to Android and iOS patterns to iOS. Android targets
  use at least 48px touch areas in HTML; iOS targets use at least 44px.
- Use real buttons, links, inputs, selection states, form validation, and
  dismissible sheets. Keep navigation state, back paths, and scrolling usable.
- Respect safe areas and the keyboard without drawing fake system hardware.
  Keep device chrome supplied by the preview host outside the product HTML.
- Use the requested theme and design tokens. Keep app typography readable;
  do not force serif headings, a fixed accent count, or an iPhone visual style.
- Use relevant user/brand assets and meaningful imagery when needed. An app
  screenshot or generated phone mockup must not replace interactive screens.

## Finish

Run `references/checklist.md` and the chosen platform's upstream checklist.
Deliver actual screen files with working app navigation and a useful entry
screen. Follow the host's artifact protocol when it requests an artifact block:

```html
<artifact identifier="mobile-app" type="text/html" title="Mobile app">
<!doctype html>
<html>...</html>
</artifact>
```
