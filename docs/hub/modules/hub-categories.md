---
title: Hub Categories
description: The core module for the Admin Hub
---

# Hub Categories

[[toc]]

```
npm install --save @getcandy/hub-categories
```

Then add to `nuxt.config.js`

```javascript
modules: [
    '@getcandy/hub-categories'
]
```

## Available config

```javascript
{
    'preview_url': 'http://storefront.test/categories/preview/:id' // Link to your own storefront preview url
}
```

## Hooks

### `category.main.tabs`
**Parameter:** `tabs<Array>`

**Description:** Allows you to add extra tabs to the category editing page.

### `category.association.tabs`
**Parameter:** `tabs<Array>`

**Description:** Allows you to add extra child tabs to the category associations page.
