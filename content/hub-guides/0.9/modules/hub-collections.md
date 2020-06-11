---
title: Hub Collections
description: The core module for the Admin Hub
---

# Hub Collections

## Table of contents

```
npm install --save @getcandy/hub-collections
```

Then add to `nuxt.config.js`

```javascript
modules: [
    '@getcandy/hub-collections'
]
```

## Available config

```javascript
{
    'preview_url': 'http://storefront.test/categories/preview/:id' // Link to your own storefront preview url
}
```

## Hooks

### `collection.main.tabs`
**Parameter:** `tabs<Array>`

**Description:** Allows you to add extra tabs to the collection editing page.
