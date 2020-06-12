---
title: Upgrading the Admin Hub
description: Upgrading GetCandy's Admin Hub
---


# Upgrading the hub

## Table of contents

## Upgrading from `0.9.1` to `0.9.2`

### Update the hub modules.

```bash
npm update @getcandy/hub-core @getcandy/hub-customers @getcandy/hub-orders @getcandy/hub-products @getcandy/hub-reports @getcandy/hub-shipping
```

### Update Javascript client

Update your admin hub to use version `0.9.18` of the js clients.

```json
"@getcandy/js-client": "^0.9.18",
"@getcandy/js-client-nuxt": "^0.9.18",
```

<tool-tip title="Heads up!">
The JS Client has been regenerated from the OpenAPI spec in Typescript and now makes use of Axios instead of superagent. Any superagent plugins you may have developed will no longer work.
</tool-tip>

### Add new env variables

This update includes previously missing env variables.

```bash
CATEGORY_PREVIEW_URL=http://example-storefront.test/categories/preview/:id
COLLECTION_PREVIEW_URL=http://example-storefront.test/collections/preview/:id
```

### Update hub middleware

Edit `middleware/hub.js`, add `app.$gc.setHttp(app.$axios)` and `app.$getcandy.setHttp(app.$axios)`:

```javascript
//...
  const state = store.state

  app.$gc.setHttp(app.$axios)
  app.$getcandy.setHttp(app.$axios)

  if (store.$auth.user) {
//..
```

### Update Tailwind config

Edit `tailwind.config.js` and replace the `zIndex` config:

```javascript
// Line ~328
zIndex: {
  auto: 'auto',
  '0': '0',
  '10': '10',
  '20': '20',
  '30': '30',
  '40': '40',
  '50': '50',
  '60': '60',
  '70': '70'
}
```

## Upgrading from `0.9.0` to `0.9.1`

### Update the npm packages.

```bash
npm update @getcandy/hub-core @getcandy/hub-customers @getcandy/hub-orders @getcandy/hub-products @getcandy/hub-reports @getcandy/hub-shipping
```

### Rename env variables

Rename `PROXY_LOGIN_ENDPOINT` to `AUTH_LOGIN_ENDPOINT`.  
Rename `PROXY_USER_ENDPOINT` to `AUTH_USER_ENDPOINT`.

### Update auth strategies

Update the `auth.strategies` in your `nuxt.config.js` file:

```javascript
local: {
  _scheme: '@getcandy/hub-core/src/modules/sanctum-scheme.js',
  // _scheme: '@getcandy/hub-core/src/modules/passport-scheme.js',
  tokenRequired: false,
  tokenType: false,
  endpoints: {
    login: {
      url: process.env.AUTH_LOGIN_ENDPOINT,
      method: 'post',
      withCredentials: true,
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/json'
      }
    },
    user: {
      url: process.env.AUTH_USER_ENDPOINT,
      method: 'get',
      propertyName: 'data',
      withCredentials: true,
      params: {
        includes: 'roles.permissions,details'
      },
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/json'
      }
    }
  }
}
```

### Enable credentials in Axios

Set `credentials` to `true` in the Axios config.

```javascript
axios: {
  baseURL: process.env.API_BASE,
  credentials: true,
  headers: {
    common: {
      'X-CANDY-HUB': true
    }
  }
},
```


### Update hub-core config

If you are using sanctum, update the module options

```javascript
['@getcandy/hub-core', {
  auth: 'sanctum'
}]
```

### Update your Nuxt install to use a custom domain

Sanctum requires that the app be hosted on the same domain, which can be a pain for local development. You can set this up in your `nuxt.config.js` file, you may need to change this when going to production.

```javascript
server: {
  port: 3000, // default: 3000
  host: 'hub.example-storefront.test', // default: localhost,
  timing: false
},
```
