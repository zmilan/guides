---
title: Authentication
description: Authentication in the Admin Hub
---

# Authentication

[[toc]]

The API uses Passport (OAuth) to generate access tokens and authenticate users. Authentication in SPAs can be a difficult task, we don't want to be storing client IDs and secrets in our Javascript. Below are some ways to authenticate with the hub, which direction you take is totally up to you.


## Passport proxy login.

::: tip Heads up!
This method requires adding a package to your example storefront API
:::

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

The hub is preconfigured to work with this method of authentication so no further steps are needed.

## Laravel Sanctum

::: tip Heads up!
Documentation for this will be up soon!
:::