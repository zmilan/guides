---
title: Authentication
description: Authentication in the Admin Hub
---

# Authentication

The hub supports both Laravel Passport and Sanctum as ways to authenticate and login. We generally recommend Laravel Sanctum as being the go to way, for this reason the hub is set up to use that by default.

## Table of contents

## Laravel Sanctum

If you're changing from using Passport, you will need to update your auth strategy. If this is a fresh install, this should already be configured for you.

```javascript
auth: {
  strategies: {
    proxy: {
      _scheme: '@getcandy/hub-core/src/modules/sanctum-scheme.js',
      // ...
    }
  }
}
```

### Using Localhost

Add localhost to your `SANCTUM_STATEFUL_DOMAINS` env value. Note we should be adding the port number.

```bash
SANCTUM_STATEFUL_DOMAINS = 'localhost:3000,localhost,127.0.0.1,127.0.0.1:8000,::1'
```

A common gotcha is the `SESSION_DOMAIN` env variable, for localhost this should be an empty string

```
SESSION_DOMAIN=""
```

### Using a custom domain

If you want to use the hub on a custom domain, you can set this up in your `nuxt.config.js` file, you may need to change this when going to production.

```javascript
server: {
  port: 3000, // default: 3000
  host: 'hub.example-storefront.test', // default: localhost,
  timing: false
},
```

You will need to add the custom domain you configured above in Sanctum, remember to add the port number.

```bash
SANCTUM_STATEFUL_DOMAINS = 'hub.example-storefront.test:3000,localhost,127.0.0.1,127.0.0.1:8000,::1'
```

Update your session driver to use cookies and your session domain.

```
SESSION_DOMAIN=".example-storefront.test"
```

### Laravel API tweaks

Set your `SESSION_DRIVER` to cookie on your API.

```
SESSION_DRIVER=cookie
```

Update `config/cors.php` to support credentials.

```
'supports_credentials' => true,
```

Depending on how you added your GetCandy routes i.e. with the `api/v1` prefix, you may need to add this to the sanctum config:

```php
'prefix' => 'api/v1/sanctum',
```

Then clear your route cache

```
php artisan route:clear
```

You will also need to implement a way of logging in users to your Laravel app, something like this in your `api.php` routes file.

```php
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
//...
Route::post('/login', function (Request $request) {
    if (Auth::attempt([
        'email' => $request->email,
        'password' => $request->password
    ])) {
        return response()->json('', 204);
    }
    return response()->json([
        'error' => 'invalid_credentials'
    ], 403);
});
```
Once done, you should be able to log in to your Admin Hub.

## Passport proxy login.

### Remove sanctum from the module config

```javascript
['@getcandy/hub-core', {
  auth: 'sanctum'
}]
```

Should be

```javascript
'@getcandy/hub-core'
```
### Use the Passport auth scheme

Logging in with Passport requires a slightly different strategy set up, replace the current `local` strategy with this one:

```javascript
auth: {
  strategies: {
    local: {
      _scheme: '@getcandy/hub-core/src/modules/passport-scheme.js',
      endpoints: {
        login: { url: process.env.AUTH_LOGIN_ENDPOINT, method: 'post', propertyName: false },
        logout: false,
        user: {
          url: process.env.AUTH_USER_ENDPOINT,
          method: 'get',
          propertyName: 'data',
          params: {
            includes: 'roles.permissions,details'
          }
        }
      }
    }
  }
}
```

### Laravel API tweaks

This method uses a composer package called Janitor to add proxy logins to your API. This is then secured through CORS.

Add the Janitor package

```
composer require signifly/laravel-janitor
```

Once done, add `config/janitor.php`

```php
<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Default Janitor Driver
    |--------------------------------------------------------------------------
    |
    | Here you may specify the default janitor driver that should be used
    | by the framework.
    |
    */

    'default' => 'passport',

    /*
     * The username field to use for authentication.
     */
    'username_field' => 'email',

    /*
    |--------------------------------------------------------------------------
    | Janitor Drivers
    |--------------------------------------------------------------------------
    |
    | Here you may configure what is provided to the Janitor drivers.
    | It must be an array.
    |
    | Supported Drivers: "jwt", "passport"
    |
    */

    'drivers' => [
        'jwt' => [],
        'passport' => [
            'oauth_token_url' => 'http://example-storefront.test/oauth/token',
        ],
    ],
];
```

Add the Janitor routes to your `routes/api.php` file.

```php
Janitor::routes();
```
