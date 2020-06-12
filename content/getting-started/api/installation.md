---
title: Installation
description: Configure Algolia DocSearch with the Jigsaw docs starter template
extends: _layouts.documentation
section: content
---

# API Installation

## Table of contents

## Requirements

- Laravel 7
- MySQL 5.7
- Elasticsearch 6.8

## Installing the API
The GetCandy API is a Laravel package, designed to be easily added to any new or existing Laravel application.

> If you're starting a brand new Laravel application, install by [following their documentation](https://laravel.com/docs/7.x)

Require the API package (currently in Beta)

```bash
$ composer require getcandy/candy-api:^0.9-beta
```

Or add this to your `composer.json` file

```javascript
"getcandy/candy-api": "^0.9-beta"
```

### A note on Vimeo uploads

GetCandy supports Vimeo as an asset driver, however to [due to an issue in the repo](https://github.com/vimeo/laravel/issues/74), this is disabled by default. If you want to support Vimeo uploads, add the following to your composer file:

```javascript
"ankitpokhrel/tus-php": "dev-symfony-5 as 1.10.0",
"vimeo/laravel": "^5.5"
```

## Publish config

Once the package has been added, publish the base config

```bash
php artisan vendor:publish --tag=config
```

## Preflight configuration

Add the `HasCandy` trait to your user model.

```php
<?php

namespace App;

use GetCandy\Api\Core\Traits\HasCandy;
use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use Notifiable, HasCandy;
//...
```

## Enable GetCandy routes

Update your `RouteServiceProvider` and add the GetCandy routes.

```php
use GetCandy;
//...

public function map()
{
    /**
     * Adds all routes
     */
    GetCandy::routes([
        'prefix' => 'api/v1'
    ]);
    //...
}
```

## Database strict mode

Currently, for reporting to function correctly you should set `strict` to false in your `config/db.php`. This workaround will be addressed in a future release.

## Run the installer

```
php artisan candy:install
```

Lastly we need to create an initial index in Elasticsearch, we don't have any products yet, which is fine, we just need to get it going.

```
php artisan candy:search:index
```

> Congratulations, you've installed the GetCandy API

## Protecting routes

GetCandy tries not to make any assumptions on how you protect your API routes, all it cares about is whether there is an authenticated user. So whether you decide to use JWT, Sanctum or Passport, it shouldn't get in your way.

We've added some guides for how you might implement this across different providers. If you feel you can improve these guides, please submit a PR to [Guides repository](https://github.com/getcandy/guides) and we'll take a look.

Before we start, it makes sense to get an idea of the different route groups that GetCandy uses.

```php
use GetCandy
//...
GetCandy::routes(function ($registrar) {
    $registrar->auth();
    $registrar->guest();
})
```

**Guest routes**  
These are routes which may or may not have an authenticated user associated to the request.

**Auth routes**  
These routes must have an authenticated user associated to the request and will include routes that require an admin.

### Sanctum

As described on the [Laravel website](https://laravel.com/docs/7.x/sanctum)

> Laravel Sanctum provides a featherweight authentication system for SPAs (single page applications), mobile applications, and simple, token based APIs

Install Sanctum as [per their documentation](https://laravel.com/docs/7.x/sanctum).

For the `auth` routes we want to add the sanctum middleware, we do not need to add any middleware to the guest routes as we'll be handling this through CORs and some Sanctum config.

```php
use GetCandy
use Illuminate\Support\Facades\Route;
//...
GetCandy::routes([
    'prefix' => 'api/v1'
], function ($registrar) {
    Route::group([
         'middleware' => ['auth:sanctum', 'api']
    ], function () use ($registrar) {
        $registrar->auth();
    });
    Route::group([
        'middleware' => ['api']
    ], function () use ($registrar) {
        $registrar->guest();
    });
});
```

Once you have authenticated a user, they will still appear for guest routes on `$request->user()`.

### Passport

GetCandy originall was built with Passport integrated into the core. [From the Laravel website](https://laravel.com/docs/7.x/passport)

>  Laravel makes API authentication a breeze using Laravel Passport, which provides a full OAuth2 server implementation for your Laravel application in a matter of minutes.

Install Passport as per their documentation.

```php
use GetCandy
use Illuminate\Support\Facades\Route;
//...
GetCandy::routes([
    'prefix' => 'api/v1'
], function ($registrar) {
    Route::group([
         'middleware' => ['auth:api', 'api']
    ], function () use ($registrar) {
        $registrar->auth();
    });
    Route::group([
        'middleware' => ['api']
    ], function () use ($registrar) {
        $registrar->guest();
    });
});
```

#### Guest routes and client credentials
Previously, GetCandy used an altered version of the `Laravel\Passport\Http\Middleware\CheckClientCredentials` middleware, but since removing Passport from the core, we found this would have been too opinionated.

The issue with the original middleware was this allowed access tokens created via the `client_credentials` grant to access the API, but also meant that even if a user with an authenticated access token pinged the API, they wouldn't be bound to the request.

There seems to be some debate on this, [which you can see here](https://github.com/laravel/passport/issues/898), we currently do not have a solution that wouldn't require opinionated changes to the core GetCandy middleware, so for now we suggest reading the thread linked above and make a concious decision based on your own needs.

If we figure out a solid solution we will post it either here or in the [forum](https://community.getcandy.io/) for discussion.


