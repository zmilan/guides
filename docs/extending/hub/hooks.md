---
title: Hooks
description: Details about hooks that are available in the hub.
---

# Hooks

[[toc]]

Below are hooks your Admin Hub modules/plugins can utilise to add screens to the SPA. Due to the modular nature of the hub, each hook will only be available if the appropriate module is installed.

Usage from within a plugin is straightforward:

```javascript
app.$hooks.hook('hook.name', (tabs) => {/*...*/})
```

Each module will potentially have their own hooks available. Check the dedicated pages for more indepth info as to what's available.

- [`hub-core`](/hub/modules/hub-core)
- [`hub-categories`](/hub/modules/hub-categories)
- [`hub-collections`](/hub/modules/hub-collections)
- [`hub-customers`](/hub/modules/hub-customers)
- [`hub-orders`](/hub/modules/hub-orders)
- [`hub-products`](/hub/modules/hub-products)
- [`hub-reports`](/hub/modules/hub-reports)
- [`hub-shipping`](/hub/modules/hub-shipping)