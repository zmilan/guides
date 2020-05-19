---
title: API Installation
description: Configure Algolia DocSearch with the Jigsaw docs starter template
extends: _layouts.documentation
section: content
---

# API Installation

- [Requirements](#requirements)
- [Installing the API](#installing-the-api)
- [Publish configuration](#publish-config)
- [Preflight configuration](#preflight-configuration)
- [Enable GetCandy routes](#enable-routes)
- [Run the installer](#run-the-installer)

## Requirements {#requirements}

- Laravel 7
- MySQL 5.7
- Elasticsearch 6.8

## Installing the API {#installing-the-api}
The GetCandy API is a Laravel package, designed to be easily added to any new or existing Laravel application.

> If you're starting a brand new Laravel application, install by [following their documentation](https://laravel.com/docs/7.x)

Require the API package (currently in Beta)

```
composer require getcandy/candy-api:dev-release/0.9.0_beta
```

Or add this to your `composer.json` file

```javascript
"getcandy/candy-api": "dev-release/0.9.0_beta"
```

### A note on Vimeo uploads

GetCandy supports Vimeo as an asset driver, however to [due to an issue in the repo](https://github.com/vimeo/laravel/issues/74), this is disabled by default. If you want to support Vimeo uploads, add the following to your composer file:

```
"ankitpokhrel/tus-php": "dev-symfony-5 as 1.10.0",
"vimeo/laravel": "^5.5"
```

## Publish config {#publish-config}

Once the package has been added, publish the base config

```
php artisan vendor:publish --tag=config
```

## Preflight configuration {#preflight-configuration}

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

Update your authentication config to enable passport

`config/auth.php`

```php
'guards' => [
    //...
    'api' => [
        'driver' => 'passport',
        'provider' => 'users',
        'hash' => false,
    ],
]
```

## Enable GetCandy routes {#enable-routes}

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

## Run the installer {#run-installer}

```
php artisan candy:install
```

Install Laravel Passport

```
php artisan passport:install
```

> Congratulations, you've installed the GetCandy API

Next up, [see the different config options](/docs/api/configuration)