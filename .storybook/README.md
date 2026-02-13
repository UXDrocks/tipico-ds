# Storybook config

## Toolbar (standardized header)

- **Theme** – Top toolbar: switch between **Light** and **Dark**. Applies to all stories (components, screens, foundation).
- **Viewport (breakpoints)** – Canvas toolbar (above the preview): dropdown with **350px (min)**, **sm (640px)**, **md (768px)**, **lg (1024px)**, **xl (1280px)**, **2xl (1536px)**, **Auto**. This resizes the preview iframe so CSS media queries and responsive layout behave correctly.

Use these two controls for consistent QA across all stories; no per-story theme or viewport overrides.

## Preview

- `preview.tsx` is the source; `preview.js` is kept in sync for runtimes that use it.
- CSS load order: fonts → tokens.primitives → tokens.semantic → theme → storybook-overrides.
