---
title: Admin Hub Hooks
description: Details about hooks that are available in the hub.
---

# Hooks

Below are hooks your Admin Hub modules/plugins can utilise to add screens to the SPA. Due to the modular nature of the hub, each hook will only be available if the appropriate module is installed.

Usage from within a plugin is straightforward:

```javascript
app.$hooks.hook('hook.name', (tabs) => {/*...*/})
```

Each module will potentially have their own hooks available. Check the dedicated pages for more indepth info as to what's available.
