---
title: Extending the Admin Hub
description: An introduction on how to extend your GetCandy Admin Hub.
---

# Extending the hub

## Table of contents

## Introduction

The Admin Hub is a Nuxt.js SPA which is built on multiple different modules. To create a plugin/module for the hub, it's really no different to how you would do it in Nuxt.js. It wouldn't make sense to copy their documentation so refer to their website for the best way to do so.

- [Nuxt Modules](https://nuxtjs.org/guide/modules)

Of course we do offer some hooks you can tap into to make life easier. These will be detailed on the next page.

## Hooks

Below are hooks your Admin Hub modules/plugins can utilise to add screens to the SPA. Due to the modular nature of the hub, each hook will only be available if the appropriate module is installed.

Usage from within a plugin is straightforward:

```javascript
app.$hooks.hook('hook.name', (tabs) => {/*...*/})
```

Each module will potentially have their own hooks available. Check the dedicated pages for more in depth info as to what's available.
