---
title: Hub Products
description: The products module for the Admin Hub
---

# Hub Products

[[toc]]

```
npm install --save @getcandy/hub-products
```

Then add to `nuxt.config.js`

```javascript
modules: [
    '@getcandy/hub-products'
]
```

## Hooks

### `product.main.tabs`
**Parameter:** `tabs<Array>`

**Description:** Allows you to add extra tabs to the product editing page.

### `product.association.tabs`
**Parameter:** `tabs<Array>`

**Description:** Allows you to add extra child tabs to the associations page.