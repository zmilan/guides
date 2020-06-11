---
title: Hub Core
description: The core module for the Admin Hub
---

# Hub Core

This is the core module which all other modules depend on. You shouldn't need to install this seperately as all other modules will pull this in.

```
npm install --save @getcandy/hub-core
```

Then add to `nuxt.config.js`

```javascript
modules: [
  '@getcandy/hub-core'
]
```

If you are using sanctum.

```javascript
['@getcandy/hub-core', {
  auth: 'sanctum'
}]
```

<tool-tip title="Components incoming!">
This package will provide you with a lot of components you can use in your own plugins, we're working on documenting these!
</tool-tip>
