---
title: Upgrading
description: Upgrading GetCandy
---

# Upgrading

## Table of contents

## Upgrading to `0.10.0-beta`

Update the `getcandy/candy-api` dependancy to `0.10-beta` and update.

Run any migrations

## Upgrading to `0.9.13-beta`

Update the api via composer

```
composer update getcandy/candy-api
```

### Changelog

- Order transactions now order by date created desc
- Added database indexes
- Pass language to search builder
- Removed Fractal tranformers
- Deprecated `app('api')` binding

### High impact changes

#### Fractal removal

We have removed Fractal in favour of using [Eloquent API Resources](https://laravel.com/docs/7.x/eloquent-resources). You should update any instances where you return a Fractal Transformer to it's Eloquent counterpart for any custom endpoints.

For example...

```php
-- use GetCandy\Api\Http\Transformers\Fractal\Products\ProductTransformer;
++ use GetCandy\Api\Http\Resources\Products\ProductResource;

public function index()
{
    $product = Product::first();

    -- return $this->respondWithItem($product, new ProductTransformer);
    ++ return new ProductResource($product);
}
```

#### Switch to Global GetCanday Facade

The `app('api')` bind has been removed in favour of using the `GetCandy` facade. Instances of `app('api')` will continue to work until the next release cycle where it will be removed.

Update any calls from `app('api')` to use the Facade like so:

```php
app('api')->products()->getByHashedId($hashedId);

use GetCandy;
GetCandy::products()->getByHashedId($hashedId);
```
---


## Upgrading from `0.9.4-beta` to `0.9.5-beta`

Run composer update

Either set `getcandy/candy-api` to `0.9.5-beta` or `"^0.9-beta"`

```
composer update getcandy/candy-api
```

### High impact changes

#### Passport removal

GetCandy will no longer ship with Laravel Passport. We felt that, given there are multiple ways to authenticate, the API shouldn't be concerned with how you do this, only that we have a user on those routes that require it.

We highly recommend you do protect your API, we have provided guides on how we think it can be done, but it is entirely up to you how you do it.

## Upgrading to Beta from 0.3

Update `getcandy/candy-api` to `"^0.9-beta"` in your composer file.


Run composer update and migrations
```
composer update getcandy/candy-api
php artisan migrate
```
